"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function AskQuestionButton() {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    const handleClick = () => {
        if (!user && isLoaded) {
            router.push("/sign-in");
            return;
        }
        router.push("/ask-question");
    };

    return (
        <div className="flex justify-end max-sm:w-full">
            <Button
                onClick={handleClick}
                className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
            >
                Ask a Question
            </Button>
        </div>
    );
}
