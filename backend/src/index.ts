import "dotenv/config";
import express from "express";
import cors from "cors"
import { handleChat } from "./chat/chat.controller.js";

const app = express();
app.use(cors({
    origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "http://localhost:5173",
}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/chat", handleChat)

app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`)
})