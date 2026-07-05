import type { Request, Response } from "express";
import { getReply } from "./chat.service.js";

export const handleChat = async (req: Request, res: Response) => {
    const { conversationId, userQuery, persona } = req.body;
    if (!userQuery || (persona !== "hitesh" && persona !== "piyush")) {
        return res.status(400).json({ error: "Invalid request" });
    }
    try {
        const reply = await getReply({ conversationId, userQuery, persona });
        res.json({ reply });
    } catch (error) {
        console.error("Error getting reply:", error);
        res.status(500).json({ error: "Failed to generate response" });
    }
}