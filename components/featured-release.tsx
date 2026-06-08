'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { Reveal } from './reveal'

const tracks = [
  { title: 'BINI W BINK', length: '3:12', plays: '2,481,902', src: '/bini-w-bink.mp3', startTime: 0 },
  { title: 'HED LILA',   length: '3:27', plays: '1,204,338', src: '/hed-lila.mp3',    startTime: 40 },
  { title: 'SARAB',      length: '3:54', plays: '987,540',   src: '/sarab.mp3',        startTime: 30 },
]

export function FeaturedRelease() {
  const [current, setCurrent] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // When current changes, swap out the audio source and play
    if (current === null) {
      audioRef.current?.pause()
      return
    }
    if (audioRef.current) {
      audioRef.current.pause()
    }
    const track = tracks[current]
    const audio = new Audio(track.src)
    audio.addEventListener('ended', () => setCurrent(null))
    audio.addEventListener('canplay', () => {
      if (track.startTime > 0) audio.currentTime = track.startTime
      audio.play().catch(() => {})
    }, { once: true })
    audioRef.current = audio

    return () => {
      audio.pause()
    }
  }, [current])

  // Pause on unmount
  useEffect(() => {
    return () => { audioRef.current?.pause() }
  }, [])

  function handleTrack(i: number) {
    if (current === i) {
      setCurrent(null)
    } else {
      setCurrent(i)
    }
  }

  return (
    <section
      id="release"
      className="relative scroll-mt-20 overflow-hidden border-t border-border py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-[0.08]"
      >
        <Image
          src="/moroccan-zellige.jpeg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-3xl border border-border">
              <Image
                src="/youcef-riad-hero.png"
                alt="BINI W BINK cover art by Youcef Riad"
                width={640}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
            <span className="absolute -bottom-4 left-6 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-lg">
              EP · BINI W BINK
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Out now
          </p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            BINI W BINK EP
          </h2>
          <p className="mt-3 max-w-md text-pretty text-muted-foreground">
            Three tracks, each one something I needed to get out. No filler.
            Stream it wherever you listen.
          </p>

          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {tracks.map((track, i) => {
              const isPlaying = current === i
              return (
                <li key={track.title}>
                  <button
                    onClick={() => handleTrack(i)}
                    className="group flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-secondary"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                      {isPlaying ? (
                        <Pause className="size-4 fill-current" />
                      ) : (
                        <Play className="size-4 fill-current" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate text-sm font-semibold ${
                          isPlaying ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {track.title}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {track.plays} plays
                      </span>
                    </span>
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      {track.length}
                    </span>
                  </button>
                  {isPlaying && (
                    <div className="flex items-end gap-1 px-4 pb-3 pl-[68px]">
                      {[8, 16, 11, 20, 6, 14, 9].map((h, j) => (
                        <span
                          key={j}
                          className="w-1 rounded-full bg-primary"
                          style={{
                            height: h,
                            animation: `float ${0.6 + j * 0.12}s ease-in-out infinite`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
