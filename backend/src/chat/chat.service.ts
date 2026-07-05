import { type ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import { generateResponse } from "../utils/ai.js";
import { SYSTEM_PROMPT } from './chat.prompt.js';
interface getReplyParams {
    conversationId: string;
    userQuery: string;
    persona: "hitesh" | "piyush";
}

export const getReply = async ({ conversationId, userQuery, persona }: getReplyParams) => {
    
    const messages: ChatCompletionMessageParam[] = [
        { role: "user", content: userQuery },
        {role: "system", content: persona === "hitesh" ? SYSTEM_PROMPT.hitesh : SYSTEM_PROMPT.piyush}];
    return await generateResponse(messages);
}