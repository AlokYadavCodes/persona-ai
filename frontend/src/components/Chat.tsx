import { useEffect, useRef, useState, type FormEvent } from 'react'
import ChatComposer from './chat/ChatComposer'
import ChatHeader from './chat/ChatHeader'
import MessageItem from './chat/MessageItem'
import TypingIndicator from './chat/TypingIndicator'
import type { Message, Persona } from './chat/types'
import Header from './Header'
import { getOrCreateConversationId } from '../utils/donversation'

const initialMessages: Message[] = [
    {
        id: 1,
        sender: 'hitesh',
        content: 'Haanji, kaise ho?',
        time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        }),
    },
]

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [selectedPersona, setSelectedPersona] = useState<Persona>('hitesh')
    const [inputValue, setInputValue] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [error, setError] = useState('')
    const chatEndRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    async function handleSendMessage(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const userQuery = inputValue.trim()
        if (!userQuery || isSending) return;

        const sentAt = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        setMessages((current) => [
            ...current,
            { id: Date.now(), sender: 'user', content: userQuery, time: sentAt },
        ])
        setInputValue('');
        setError('');
        setIsSending(true);

        const conversationId = getOrCreateConversationId();

        try {
            const apiUrl = import.meta.env.VITE_NODE_ENV === "production" ? import.meta.env.VITE_API_URL : "http://localhost:3000";
            const response = await fetch(`${apiUrl}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ conversationId, userQuery, persona: selectedPersona }),
            })

            if (!response.ok) throw new Error('Unable to get a response')

            const data: { reply: string } = await response.json()
            setMessages((current) => [
                ...current,
                {
                    id: Date.now(),
                    sender: selectedPersona,
                    content: data.reply,
                    time: new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                },
            ])
        } catch {
            setError(`Could not reach ${selectedPersona}. Please try again.`)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <main className="flex h-dvh min-h-130 flex-col overflow-hidden bg-[#111211] text-[#deded8]">
            <Header/>

            <div className="mx-auto flex min-h-0 w-full max-w-4xl flex-1 px-0 py-0 sm:px-6 sm:py-4">
                <div className="flex min-h-0 w-full flex-col overflow-hidden border-[#3a3c2b] bg-[#101110] sm:rounded-xl sm:border">
                    <ChatHeader
                        selectedPersona={selectedPersona}
                        disabled={isSending}
                        onSelectPersona={setSelectedPersona}
                    />

                    <section
                        className="chat-scroll flex-1 overflow-y-auto px-4 py-7 sm:px-4 sm:py-10"
                        aria-label="Conversation"
                        aria-live="polite"
                    >
                        <div className="mb-8 flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.22em] text-[#bebead] sm:mb-7">
                            <span className="h-px flex-1 bg-[#25271f]" />
                            <span>Today</span>
                            <span className="h-px flex-1 bg-[#25271f]" />
                        </div>

                        <div>
                            {messages.map((message) => (
                                <MessageItem key={message.id} message={message} />
                            ))}

                            {isSending ? <TypingIndicator persona={selectedPersona} /> : null}
                            <div ref={chatEndRef}/>
                        </div>
                    </section>

                    <ChatComposer
                        value={inputValue}
                        error={error}
                        isSending={isSending}
                        onChange={setInputValue}
                        onSubmit={handleSendMessage}
                    />
                </div>
            </div>
        </main>
    )
}
