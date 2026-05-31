'use client'

import Image from 'next/image'
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

        {/* the record - full artist photo */}
        <span
          className="relative grid size-28 place-items-center overflow-hidden rounded-full shadow-2xl ring-2 ring-primary/60 sm:size-32"
          style={{
            animation: playing ? 'spin-slow 4s linear infinite' : 'none',
          }}
        >
          <Image
            src="/youcef-logo.png"
            alt="Play demo track"
            fill
            className="object-cover"
          />
          {/* center play/pause button */}
          <span className="absolute grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg sm:size-12">
            {playing ? (
              <Pause className="size-4 fill-current sm:size-5" />
            ) : (
              <Play className="size-4 translate-x-0.5 fill-current sm:size-5" />
            )}
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
