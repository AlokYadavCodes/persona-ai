import type { FormEvent } from 'react'

type ChatComposerProps = {
  value: string
  error: string
  isSending: boolean
  onChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export default function ChatComposer({
  value,
  error,
  isSending,
  onChange,
  onSubmit,
}: ChatComposerProps) {
  return (
    <footer className="shrink-0 border-t border-[#3a3c2b] bg-[#181918] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-16 sm:pb-4">
      {error ? (
        <p className="mb-2 text-center text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <form onSubmit={onSubmit}>
        <div className="flex h-16 items-center gap-2 rounded-full border border-[#494b3b] bg-[#363735] px-3 shadow-[0_10px_30px_rgba(0,0,0,0.24)] transition-colors focus-within:border-[#777966]">
          <button
            type="button"
            className="grid size-10 shrink-0 place-items-center rounded-full text-[#d1d1c8] transition hover:bg-white/5 hover:text-white focus-visible:outline-1 focus-visible:outline-[#d1d1c8]"
            aria-label="Attach a file"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path strokeLinecap="round" d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <input
            className="h-11 min-w-0 flex-1 bg-transparent px-1 text-sm text-[#ecece7] outline-none placeholder:text-[#d0d0c9]"
            type="text"
            aria-label="Message"
            placeholder="Message AI Persona..."
            value={value}
            autoComplete="off"
            onChange={(event) => onChange(event.target.value)}
          />
          <button
            className="grid size-10 shrink-0 place-items-center rounded-full text-[#f0f0eb] transition hover:bg-white/5 focus-visible:outline-1 focus-visible:outline-[#d1d1c8] disabled:text-[#77786f]"
            type="submit"
            aria-label="Send message"
            disabled={!value.trim() || isSending}
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 10 6-6 6 6M12 4v16" />
            </svg>
          </button>
        </div>
      </form>
    </footer>
  )
}
