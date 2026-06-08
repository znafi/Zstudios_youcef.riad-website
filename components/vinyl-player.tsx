'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

export function VinylPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio('/bini-w-bink.mp3')
    audio.loop = true
    audioRef.current = audio

    audio.addEventListener('ended', () => setPlaying(false))

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <div className="flex items-center gap-5">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause BINI W BINK' : 'Play BINI W BINK'}
        className="group relative shrink-0 outline-none"
      >
        {/* green glow ring */}
        <span
          aria-hidden="true"
          className="absolute -inset-2 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
          style={{ background: 'var(--color-primary)' }}
        />

        {/* the record */}
        <span
          className="relative grid size-28 place-items-center overflow-hidden rounded-full shadow-2xl ring-1 ring-white/10 sm:size-32"
          style={{
            backgroundImage: 'url(/bini-w-bink-disc.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            animation: playing ? 'spin-slow 4s linear infinite' : 'none',
          }}
        >
          {/* glossy sheen overlay */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 210deg, rgba(255,255,255,0.14), transparent 80deg, rgba(255,255,255,0.05) 200deg, transparent 320deg)',
            }}
          />
          {/* play/pause button */}
          <span className="relative grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg sm:size-11">
            {playing ? (
              <Pause className="size-4 fill-current sm:size-5" />
            ) : (
              <Play className="size-4 translate-x-px fill-current sm:size-5" />
            )}
          </span>
        </span>
      </button>

      <div className="leading-tight">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {playing ? 'Now playing' : 'Tap to play'}
        </p>
        <p className="text-display text-lg font-bold text-foreground">
          BINI W BINK
        </p>
        <a
          href="#release"
          className="mt-1 inline-block text-xs font-semibold text-primary transition-colors hover:underline"
        >
          Full EP below →
        </a>
      </div>
    </div>
  )
}
