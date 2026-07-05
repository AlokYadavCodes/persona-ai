type Message = {
    sender: 'user' | 'hitesh' | 'piyush';
    content: string;
    time: Date;
}

type Conversation = {
    conversationId: string;
    messages: Array<Message>;
}

export const conversationStore = {
    "conversationId": {
        messages: [
            {
                role: 'user',
                content: 'Hello, how are you?',
                time: new Date(),
            }
        ]
    }
}