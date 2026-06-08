'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { VinylPlayer } from '@/components/vinyl-player'
import type { SVGProps } from 'react'

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.1 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.32-1.32 11.4-1.02 15.84 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.62.3z" />
    </svg>
  )
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.04.85.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5.59 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.63-.1z" />
    </svg>
  )
}

function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.05 12.54c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.88 2.65 3.22 2.6 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.27 3.12-2.53.98-1.45 1.39-2.85 1.41-2.92-.03-.01-2.7-1.04-2.72-4.13zM14.54 5.1c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Spotify', href: 'https://open.spotify.com/artist/3UM4e9azTn49QwCW9xYBsV?utm_medium=share&utm_source=linktree', Icon: SpotifyIcon, color: '#1DB954' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@youcef_riad.off', Icon: TikTokIcon, color: '#ffffff' },
  { label: 'Apple Music', href: 'https://music.apple.com/us/artist/youcef-riad/1531264621', Icon: AppleIcon, color: '#fc3c44' },
  { label: 'Instagram', href: 'https://www.instagram.com/youcef_riad.off', Icon: InstagramIcon, color: '#E1306C' },
  { label: 'YouTube', href: 'https://youtube.com/@youcefriad', Icon: YouTubeIcon, color: '#FF0000' },
]

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
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="transition-transform hover:scale-110 active:scale-95"
                  style={{ color }}
                >
                  <Icon className="size-6" />
                </a>
              ))}
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              stream
              {/* left-pointing arrow */}
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5 rotate-180 animate-bounce-x" aria-hidden="true">
                <path d="M3 8h8.586L8.293 4.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L11.586 9H3a1 1 0 0 1 0-2z"/>
              </svg>
            </span>
          </div>

          <h1 className="mt-4 text-balance text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Youcef
            <br />
            <span className="text-display italic text-primary">Riad</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            From Rabat with something to say. BINI W BINK is the new
            single — out now everywhere.
          </p>

          <div className="mt-8">
            <VinylPlayer />
          </div>

          {/* Moroccan Sounds playlist card */}
          <a
            href="https://open.spotify.com/playlist/3r3kspYczu88uqll80Lvlo?si=Q9Xl0EoVTtCMiljDSyH4YQ&pi=zRGzs8YQTniLC&nd=1&dlsi=bd4cde9830a74593"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/moroccan-sounds-playlist.png"
                alt="Moroccan Sounds Spotify playlist"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Spotify Playlist
              </p>
              <p className="mt-0.5 truncate text-sm font-bold text-foreground">
                MOROCCAN SOUNDS
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Curated by Youcef Riad
              </p>
            </div>
            <SpotifyIcon className="size-6 shrink-0 text-primary opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
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
                src="/youcef-riad-hero.png"
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
