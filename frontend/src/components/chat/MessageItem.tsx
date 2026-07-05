import Avatar from './Avatar'
import { PERSONA_DETAILS, type Message } from './types'

type MessageItemProps = {
  message: Message
}

export default function MessageItem({ message }: MessageItemProps) {
  const isUser = message.sender === 'user'
  const personaInfo =
    message.sender === 'user' ? null : PERSONA_DETAILS[message.sender]

  return (
    <article
      className={`message-enter mb-5 flex max-w-[94%] items-start gap-3 sm:max-w-[86%] ${
        isUser ? 'ml-auto justify-end' : ''
      }`}
    >
      {message.sender === 'user' ? null : <Avatar persona={message.sender} />}

      <div className={`flex min-w-0 flex-col gap-2 ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`whitespace-pre-wrap px-4 py-3 text-md leading-6 sm:px-4 sm:py-3.5 ${
            isUser
              ? 'rounded-2xl rounded-tr-none bg-[#2b2c2b] text-[#e4e4df]'
              : 'rounded-2xl rounded-tl-none border border-[#3e4031] bg-[#191a19] text-[#deded8]'
          }`}
        >
          {message.content}
        </div>
        <div className="flex items-center gap-2 px-1 font-thin text-xs uppercase tracking-widest text-[#c7c7bc]">
          {personaInfo ? (
            <>
              <span>{personaInfo.name}</span>
              <span aria-hidden="true">·</span>
            </>
          ) : null}
          <time>{message.time}</time>
        </div>
      </div>
      {isUser ? <Avatar variant="user" /> : null}
    </article>
  )
}
