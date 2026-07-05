import Avatar from './Avatar'
import type { Persona } from './types'

type TypingIndicatorProps = {
  persona: Persona
}

export default function TypingIndicator({ persona }: TypingIndicatorProps) {
  return (
    <article
      className="message-enter mb-5 flex items-start gap-3"
      aria-label={`${persona} is typing`}
    >
      <Avatar persona={persona} />
      <div className="flex gap-1.5 rounded-2xl rounded-tl-none border border-[#3e4031] bg-[#191a19] px-4 py-4">
        <span className="typing-dot size-1 rounded-full bg-[#b8b8a6]" />
        <span className="typing-dot size-1 rounded-full bg-[#b8b8a6]" />
        <span className="typing-dot size-1 rounded-full bg-[#b8b8a6]" />
      </div>
    </article>
  )
}
