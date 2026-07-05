import "dotenv/config";
import { OpenAI } from "openai";
import { type ChatCompletionMessageParam } from 'openai/resources/chat/completions';

const client = new OpenAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    apiKey: process.env.GEMINI_API_KEY,
})

export async function generateResponse(messages: ChatCompletionMessageParam[]) {
    const res = await client.chat.completions.create({
        model: "gemini-3.5-flash",
        messages: messages,
    })
    if (!res.choices || res.choices.length === 0) {
        throw new Error("No response from the AI model");
    }
    return res.choices[0]?.message.content;
}