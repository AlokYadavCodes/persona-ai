import { PERSONA_DETAILS, type Persona } from './types'

type AvatarProps = {
  large?: boolean
  showStatus?: boolean
  variant?: 'persona' | 'user'
  persona?: Persona
}

export default function Avatar({
  large = false,
  showStatus = false,
  variant = 'persona',
  persona,
}: AvatarProps) {
  const size = large ? 'size-10' : 'size-8'
  const personaInfo = persona ? PERSONA_DETAILS[persona] : null
  const shape =
    variant === 'user'
      ? 'rounded-full border border-[#454738] bg-[#191a18]'
      : large
        ? 'rounded-full border border-[#484a3b] bg-[#30312e]'
        : 'rounded-md border border-[#404234] bg-[#30312e]'

  return (
    <div className="relative shrink-0" aria-hidden="true">
      {personaInfo && variant === 'persona' ? (
        <img
          className={`object-cover ${size} ${shape}`}
          src={personaInfo.profileImg}
          alt=""
          width={large ? 40 : 32}
          height={large ? 40 : 32}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div
          className={`grid place-items-center text-[#deded8] ${size} ${shape}`}
        >
          <svg
            className={large ? 'size-5' : 'size-4'}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4.7 20c.45-4.15 2.8-6.2 7.3-6.2s6.85 2.05 7.3 6.2H4.7Z" />
          </svg>
        </div>
      )}
      {showStatus ? (
        <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#181918] bg-white" />
      ) : null}
    </div>
  )
}
