import Avatar from './Avatar'
import type { Persona } from './types'

type ChatHeaderProps = {
  selectedPersona: Persona
  disabled?: boolean
  onSelectPersona: (persona: Persona) => void
}

export default function ChatHeader({
  selectedPersona,
  disabled = false,
  onSelectPersona,
}: ChatHeaderProps) {
  const nextPersona: Persona =
    selectedPersona === 'hitesh' ? 'piyush' : 'hitesh'

  return (
    <header className="flex min-h-[110px] shrink-0 items-center border-b border-[#3a3c2b] bg-[#181918] px-4 sm:min-h-[110px] sm:px-5">
      <div
        className="flex max-w-full items-center rounded-full border border-[#484a35] bg-[#20211f] p-1.5"
        aria-label="Choose AI persona"
      >
        <button
          type="button"
          className="flex h-12 min-w-0 items-center gap-2 rounded-full border border-[#555741] bg-[#363734] px-2.5 pr-4 text-[#f0f0eb] transition-colors hover:bg-[#3d3e3a] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#bfc1a6]"
          aria-pressed="true"
          onClick={() => onSelectPersona(selectedPersona)}
        >
          <Avatar large showStatus persona={selectedPersona} />
          <span className="truncate text-sm font-semibold">{selectedPersona}</span>
        </button>

        <svg
          className="mx-3 size-5 shrink-0 text-[#c5c6b5]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m7 7-4 4 4 4M3 11h12M17 17l4-4-4-4M21 13H9" />
        </svg>

        <button
          type="button"
          className="group flex h-12 min-w-0 items-center gap-3 rounded-full px-1.5 pr-4 text-left transition-colors hover:bg-white/[0.04] focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#bfc1a6] disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={`Switch to ${nextPersona}`}
          aria-pressed="false"
          disabled={disabled}
          onClick={() => onSelectPersona(nextPersona)}
        >
          <Avatar large persona={nextPersona} />
          <span className="min-w-0">
            <span className="block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c9cab9]">
              Switch to
            </span>
            <span className="block truncate text-sm text-[#ededE7]">
              {nextPersona}
            </span>
          </span>
        </button>
      </div>
    </header>
  )
}
