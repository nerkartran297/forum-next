export const maxDuration = 25;
import { NextResponse } from "next/server";
const config = {
    apiKey: process.env.DEEPINFRA_API_KEY as string,
    apiHost: "https://api.deepinfra.com/v1/openai/chat/completions",
    systemContent:
        "You are a knowlegeable assistant that provides quality information.",
    userContent: (question: string) => `Tell me ${question}`,
};

export const POST = async (request: Request) => {
    const { question } = await request.json();

    try {
        const response = await fetch(config.apiHost, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${config.apiKey}`,
            },
            body: JSON.stringify({
                model: "meta-llama/Meta-Llama-3.1-8B-Instruct",
                messages: [
                    {
                        role: "system",
                        content: config.systemContent,
                    },
                    {
                        role: "user",
                        content: config.userContent(question),
                    },
                ],
                max_tokens: 15000,
                temperature: 0.7,
            }),
        });

        const responseData = await response.json();
        const reply = responseData.choices[0].message.content;

        return NextResponse.json({ reply });
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
};
