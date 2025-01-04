"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

import { useTheme } from "@/context/ThemeProvider";

import { createAnswer, editAnswer } from "@/lib/actions/answer.action";
import { AnswerValidation } from "@/lib/validations";

import type { QuestionId } from "@/lib/actions/shared.types";
import { init } from "next/dist/compiled/webpack/webpack";

interface Props extends QuestionId {
    type?: string;
    question: string;
    authorId: string;
    answerData?: string;
}

const Answer = ({
    type,
    question,
    questionId,
    authorId,
    answerData,
}: Props) => {
    const { mode } = useTheme();
    const editorRef = useRef(null);
    const pathname = usePathname();

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmittingAi, setIsSubmittingAi] = useState<boolean>(false);

    const parsedAnswerData = answerData && JSON.parse(answerData);

    const form = useForm<z.infer<typeof AnswerValidation>>({
        resolver: zodResolver(AnswerValidation),
        defaultValues: {
            answer: parsedAnswerData?.content || "",
        },
    });

    async function onSubmit(values: z.infer<typeof AnswerValidation>) {
        setIsSubmitting(true);

        try {
            if (type === "Edit") {
                await editAnswer({
                    answerId: parsedAnswerData._id,
                    content: values.answer,
                    path: `/question/${JSON.parse(questionId)}#${parsedAnswerData._id}}`,
                });
            } else {
                await createAnswer({
                    content: values.answer,
                    author: JSON.parse(authorId),
                    question: JSON.parse(questionId),
                    path: pathname,
                });
            }

            form.reset();

            if (editorRef.current) {
                const editor = editorRef.current as any;

                editor.setContent("");
            }
        } catch (error) {
            toast({
                title: `Error ${type === "Edit" ? "editing" : "submitting"} answer ⚠️`,
                variant: "destructive",
            });

            console.log(error);
            throw error;
        } finally {
            setIsSubmitting(false);

            toast({
                title: `Answer ${
                    type === "Edit" ? "edited" : "submitted"
                } successfully 🎉`,
                variant: "default",
            });
        }
    }

    const generateAiAnswer = async () => {
        if (!authorId) return;

        setIsSubmittingAi(true);

        try {
            const response = await fetch("/api/openai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const aiAnswer = await response.json();

            if (aiAnswer.error) {
                throw new Error(aiAnswer.error);
            }

            // Format the AI response for TinyMCE
            const formattedAiAnswer = aiAnswer.reply
                // Replace markdown headers with HTML headers
                .replace(/^# (.*$)/gm, "<h1>$1</h1>")
                .replace(/^## (.*$)/gm, "<h2>$1</h2>")
                .replace(/^### (.*$)/gm, "<h3>$1</h3>")
                // Format code blocks
                .replace(
                    /```(\w+)?\n([\s\S]*?)```/gm,
                    (_, lang, code) => `
                    <pre class="language-${lang || "plaintext"}">${code.trim()}</pre>
                `
                )
                // Format inline code
                .replace(/`([^`]+)`/g, "<code>$1</code>")
                // Format bold text
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                // Format italic text
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                // Format lists
                .replace(/^\* (.*$)/gm, "<li>$1</li>")
                .replace(/(<li>.*<\/li>)\n(?!<li>)/g, "$1</ul>")
                .replace(/(?<!<\/ul>)\n<li>/g, "<ul><li>")
                // Replace newlines with proper breaks
                .replace(/\n/g, "<br />");

            if (editorRef.current) {
                const editor = editorRef.current as any;
                editor.setContent(formattedAiAnswer);

                // Clean up any unwanted tags or attributes
                const cleanContent = editor.getContent();
                editor.setContent(cleanContent);
            }

            toast({
                title: "AI answer generated successfully 🎉",
                variant: "default",
            });
        } catch (error: any) {
            console.error("Error generating AI answer:", error);

            toast({
                title: `Error: ${error.message || "Failed to generate AI answer"} ⚠️`,
                variant: "destructive",
            });
        } finally {
            setIsSubmittingAi(false);
            toast({
                title: "AI answer generated successfully 🎉",
                variant: "default",
            });
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
                {type === "Create" && (
                    <h4 className="paragraph-semibold text-dark400_light800">
                        Write you answer here
                    </h4>
                )}

                <Button
                    className="btn light-border-2 gap-1.5 rounded-md px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-500"
                    onClick={generateAiAnswer}
                >
                    <Image
                        src="/assets/icons/stars.svg"
                        alt="star"
                        width={12}
                        height={12}
                        className={`object-contain ${isSubmittingAi && "animate-pulse"}`}
                    />
                    {isSubmittingAi ? "Generating..." : "Generate AI Answer"}
                </Button>
            </div>

            <Form {...form}>
                <form
                    className="mt-6 flex w-full flex-col gap-10"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="answer"
                        render={({ field }) => (
                            <FormItem className="flex w-full flex-col gap-3">
                                <FormControl className="mt-3.5">
                                    <Editor
                                        apiKey={
                                            process.env
                                                .NEXT_PUBLIC_TINY_MCE_API_KEY
                                        }
                                        onInit={(evt, editor) => {
                                            // @ts-ignore
                                            editorRef.current = editor;
                                        }}
                                        onBlur={field.onBlur}
                                        onEditorChange={(content) =>
                                            field.onChange(content)
                                        }
                                        initialValue={
                                            parsedAnswerData?.content || ""
                                        }
                                        init={{
                                            height: 350,
                                            menubar: false,
                                            plugins: [
                                                "advlist",
                                                "autolink",
                                                "lists",
                                                "link",
                                                "image",
                                                "charmap",
                                                "preview",
                                                "anchor",
                                                "searchreplace",
                                                "visualblocks",
                                                "codesample",
                                                "fullscreen",
                                                "insertdatetime",
                                                "media",
                                                "table",
                                                "wordcount",
                                            ],
                                            toolbar:
                                                "undo redo | " +
                                                "codesample | bold italic forecolor | alignleft aligncenter |" +
                                                "alignright alignjustify | bullist numlist outdent indent",
                                            content_style:
                                                "body { font-family:Inter; font-size:16px }",
                                            skin:
                                                mode === "dark"
                                                    ? "oxide-dark"
                                                    : "oxide",
                                            content_css:
                                                mode === "dark"
                                                    ? "dark"
                                                    : "light",
                                        }}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="primary-gradient w-fit text-white"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    {type === "Edit"
                                        ? "Editing..."
                                        : "Submitting..."}
                                </>
                            ) : (
                                <>{type === "Edit" ? "Edit" : "Submit"}</>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default Answer;
