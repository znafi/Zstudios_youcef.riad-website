'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, Square, Volume2 } from 'lucide-react'
import { Reveal } from './reveal'

// Moroccan-inspired palette mapped to a warm pentatonic scale
const PALETTE = [
  'var(--color-primary)',
  'var(--color-gold)',
  'var(--color-teal)',
  'var(--color-terracotta)',
  'var(--color-azure)',
]

const COLS = 12
const ROWS = 5
const TOTAL = COLS * ROWS

// Pentatonic scale across a couple octaves for a pleasant, never-wrong sound
const SCALE = [
  261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0,
]

export function ZelligeInstrument() {
  const ctxRef = useRef<AudioContext | null>(null)
  const [active, setActive] = useState<Record<number, boolean>>({})
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const timers = useRef<number[]>([])

  const getCtx = useCallback(() => {
    if (typeof window === 'undefined') return null
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      ctxRef.current = new Ctor()
    }
    return ctxRef.current
  }, [])

  const playNote = useCallback(
    (index: number) => {
      const freq = SCALE[index % SCALE.length]
      if (!muted) {
        const ctx = getCtx()
        if (ctx) {
          if (ctx.state === 'suspended') ctx.resume()
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'triangle'
          osc.frequency.value = freq
          gain.gain.setValueAtTime(0.0001, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.02)
          gain.gain.exponentialRampToValueAtTime(
            0.0001,
            ctx.currentTime + 0.7,
          )
          osc.connect(gain).connect(ctx.destination)
          osc.start()
          osc.stop(ctx.currentTime + 0.75)
        }
      }
      setActive((prev) => ({ ...prev, [index]: true }))
      window.setTimeout(
        () => setActive((prev) => ({ ...prev, [index]: false })),
        450,
      )
    },
    [getCtx, muted],
  )

  const stopMelody = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
    setPlaying(false)
  }, [])

  const playMelody = useCallback(() => {
    if (playing) {
      stopMelody()
      return
    }
    setPlaying(true)
    // A bright diagonal sweep across the mosaic
    const sequence: number[] = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if ((r + c) % 2 === 0) sequence.push(r * COLS + c)
      }
    }
    sequence.forEach((idx, i) => {
      const t = window.setTimeout(() => {
        playNote(idx)
        if (i === sequence.length - 1) setPlaying(false)
      }, i * 110)
      timers.current.push(t)
    })
  }, [playing, playNote, stopMelody])

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  return (
    <section
      id="mosaic"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24"
    >
      <Reveal className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Exclusive · interactive
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Play the <span className="text-display italic">Zellige</span>
          </h2>
          <p className="mt-3 max-w-md text-pretty text-muted-foreground">
            Each tile of this Moroccan mosaic is a note. Tap, drag, or hit play
            to compose your own riff — inspired by the colors of Youcef&apos;s
            world.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={playMelody}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            {playing ? (
              <>
                <Square className="size-4 fill-current" />
                Stop
              </>
            ) : (
              <>
                <Play className="size-4 fill-current" />
                Play mosaic
              </>
            )}
          </button>
          <button
            onClick={() => setMuted((m) => !m)}
            aria-pressed={muted}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className={`inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors ${
              muted ? 'text-muted-foreground' : 'text-primary'
            } hover:border-primary`}
          >
            <Volume2 className="size-5" />
          </button>
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className="rounded-3xl border border-border bg-card p-3 sm:p-5"
      >
        <div
          className="grid gap-1.5 sm:gap-2"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          role="group"
          aria-label="Interactive mosaic instrument"
        >
          {Array.from({ length: TOTAL }).map((_, i) => {
            const color = PALETTE[(i + Math.floor(i / COLS)) % PALETTE.length]
            const isActive = active[i]
            return (
              <button
                key={i}
                aria-label={`Tile ${i + 1}`}
                onMouseEnter={(e) => {
                  if (e.buttons === 1) playNote(i)
                }}
                onPointerDown={() => playNote(i)}
                className="group relative aspect-square overflow-hidden rounded-md transition-transform duration-300 will-change-transform"
                style={{
                  backgroundColor: color,
                  opacity: isActive ? 1 : 0.62,
                  transform: isActive ? 'scale(1.18)' : 'scale(1)',
                  boxShadow: isActive
                    ? `0 0 22px -2px ${color}`
                    : 'none',
                }}
              >
                {/* zellige star motif */}
                <span
                  className="absolute inset-[22%] rotate-45 rounded-[2px] bg-background/30 transition-opacity duration-300"
                  style={{ opacity: isActive ? 0 : 0.5 }}
                />
              </button>
            )
          })}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Tip: click and drag across the tiles to play a melody.
        </p>
      </Reveal>
    </section>
  )
}
