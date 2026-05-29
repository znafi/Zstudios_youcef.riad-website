'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { VinylPlayer } from '@/components/vinyl-player'

export function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setOffset(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Zellige texture backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] opacity-[0.14] animate-spin-slow"
        style={{ transform: `translateY(${offset * 0.15}px)` }}
      >
        <Image
          src="/moroccan-zellige.jpeg"
          alt=""
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full opacity-[0.1] blur-2xl"
        style={{ background: 'var(--color-gold)' }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-8">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            New single out now
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Youcef
            <br />
            <span className="text-display italic text-primary">Riad</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Moroccan rhythm meets modern sound. Bold melodies woven like
            zellige — colorful, intricate, and impossible to forget.
          </p>

          <div className="mt-8">
            <VinylPlayer />
          </div>
        </div>

        {/* Artist photo */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div
            className="relative w-full max-w-sm animate-float"
            style={{ transform: `translateY(${offset * -0.06}px)` }}
          >
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl opacity-60 blur-xl"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-primary), var(--color-gold))',
              }}
            />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/youcef-riad.jpeg"
                alt="Youcef Riad, Moroccan recording artist"
                width={640}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-white/70">
                    Latest single
                  </p>
                  <p className="text-display text-xl font-bold text-white">
                    BINI W BINK
                  </p>
                </div>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#listen"
        aria-label="Scroll to listen"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        <ArrowDown className="size-4 animate-bounce" />
        Scroll
      </a>
    </section>
  )
}
