'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

/**
 * An old-school spinning vinyl record that plays a looping,
 * Moroccan-flavored demo groove synthesized with the Web Audio API.
 * No external audio file required.
 */
export function VinylPlayer() {
  const [playing, setPlaying] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const loopRef = useRef<number | null>(null)
  const stepRef = useRef(0)

  // Pentatonic-ish scale (Hz) that evokes a North-African mode.
  const scale = [196, 220, 261.63, 293.66, 329.63, 392, 440]
  // Simple repeating melodic pattern (indices into scale, -1 = rest).
  const melody = [0, 2, 3, 2, 4, 3, 2, 0, 4, 5, 4, 3, 2, 3, 0, -1]

  function ensureContext() {
    if (!ctxRef.current) {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      const ctx = new AC()
      const master = ctx.createGain()
      master.gain.value = 0.0
      master.connect(ctx.destination)
      ctxRef.current = ctx
      masterRef.current = master
    }
    return ctxRef.current
  }

  function pluck(freq: number, time: number, dur: number, gain: number) {
    const ctx = ctxRef.current!
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.value = freq
    osc.connect(g)
    g.connect(masterRef.current!)
    g.gain.setValueAtTime(0, time)
    g.gain.linearRampToValueAtTime(gain, time + 0.02)
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur)
    osc.start(time)
    osc.stop(time + dur + 0.05)
  }

  function kick(time: number) {
    const ctx = ctxRef.current!
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.frequency.setValueAtTime(140, time)
    osc.frequency.exponentialRampToValueAtTime(50, time + 0.14)
    g.gain.setValueAtTime(0.7, time)
    g.gain.exponentialRampToValueAtTime(0.001, time + 0.18)
    osc.connect(g)
    g.connect(masterRef.current!)
    osc.start(time)
    osc.stop(time + 0.2)
  }

  function start() {
    const ctx = ensureContext()
    if (ctx.state === 'suspended') ctx.resume()
    // fade in
    const master = masterRef.current!
    master.gain.cancelScheduledValues(ctx.currentTime)
    master.gain.setValueAtTime(master.gain.value, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.3)

    stepRef.current = 0
    const stepMs = 200 // tempo
    const tick = () => {
      const t = ctx.currentTime + 0.02
      const step = stepRef.current
      const note = melody[step % melody.length]
      if (note >= 0) {
        pluck(scale[note], t, 0.35, 0.18)
        // octave shimmer
        if (step % 4 === 0) pluck(scale[note] * 2, t, 0.25, 0.06)
      }
      // drum groove
      if (step % 4 === 0 || step % 8 === 6) kick(t)
      stepRef.current = step + 1
      loopRef.current = window.setTimeout(tick, stepMs)
    }
    tick()
    setPlaying(true)
  }

  function stop() {
    const ctx = ctxRef.current
    if (loopRef.current) {
      clearTimeout(loopRef.current)
      loopRef.current = null
    }
    if (ctx && masterRef.current) {
      masterRef.current.gain.cancelScheduledValues(ctx.currentTime)
      masterRef.current.gain.setValueAtTime(
        masterRef.current.gain.value,
        ctx.currentTime,
      )
      masterRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25)
    }
    setPlaying(false)
  }

  function toggle() {
    if (playing) stop()
    else start()
  }

  useEffect(() => {
    return () => {
      if (loopRef.current) clearTimeout(loopRef.current)
      ctxRef.current?.close()
    }
  }, [])

  return (
    <div className="flex items-center gap-5">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Pause demo track' : 'Play demo track'}
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
          className="relative grid size-28 place-items-center rounded-full shadow-2xl ring-1 ring-white/10 sm:size-32"
          style={{
            background:
              'repeating-radial-gradient(circle at center, #111 0px, #111 3px, #1c1c1c 4px, #111 5px)',
            animation: playing
              ? 'spin-slow 4s linear infinite'
              : 'none',
          }}
        >
          {/* glossy sheen */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 210deg, rgba(255,255,255,0.16), transparent 80deg, rgba(255,255,255,0.06) 200deg, transparent 320deg)',
            }}
          />
          {/* center label = zellige */}
          <span
            className="relative grid size-12 place-items-center overflow-hidden rounded-full ring-2 ring-black sm:size-14"
            style={{
              backgroundImage: 'url(/moroccan-zellige.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground shadow sm:size-8">
              {playing ? (
                <Pause className="size-3.5 fill-current sm:size-4" />
              ) : (
                <Play className="size-3.5 translate-x-px fill-current sm:size-4" />
              )}
            </span>
            {/* spindle hole */}
            <span className="absolute size-1.5 rounded-full bg-black ring-1 ring-white/20" />
          </span>
        </span>
      </button>

      <div className="leading-tight">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {playing ? 'Now spinning' : 'Tap to play'}
        </p>
        <p className="text-display text-lg font-bold text-foreground">
          BINI W BINK
        </p>
        <a
          href="#listen"
          className="mt-1 inline-block text-xs font-semibold text-primary transition-colors hover:underline"
        >
          Explore the music →
        </a>
      </div>
    </div>
  )
}
