'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import type { SVGProps } from 'react'

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.1 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.32-1.32 11.4-1.02 15.84 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.62.3z" />
    </svg>
  )
}

/**
 * Swap imageSrc paths once you have the real artist photos.
 * Drop them in /public/images/ and update the paths below.
 * Youcef Riad uses the existing hero photo by default.
 */
const artists = [
  { id: 1, name: 'Manal', imageSrc: '/placeholder-user.jpg' },
  { id: 2, name: 'Hindi Zahra', imageSrc: '/placeholder-user.jpg' },
  { id: 3, name: 'Douzi', imageSrc: '/placeholder-user.jpg' },
  { id: 4, name: 'Don Bigg', imageSrc: '/placeholder-user.jpg' },
  { id: 5, name: 'Oum', imageSrc: '/placeholder-user.jpg' },
  { id: 6, name: 'Alaa Wardi', imageSrc: '/placeholder-user.jpg' },
  { id: 7, name: 'Asmaa Hamzaoui', imageSrc: '/placeholder-user.jpg' },
  { id: 8, name: 'Youcef Riad', imageSrc: '/youcef-riad-hero.png' },
  { id: 9, name: 'Fatima Tihihit', imageSrc: '/placeholder-user.jpg' },
]

export function MoroccanSounds() {
  return (
    <section
      id="moroccan-sounds"
      className="relative scroll-mt-20 overflow-hidden border-t border-border py-24"
    >
      {/* Subtle ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: 'var(--color-primary)' }}
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-12 md:flex-row md:items-center">

          {/* ── Left column: branding ─────────────────────────────── */}
          <Reveal className="flex flex-col items-start justify-center md:w-[35%] md:pr-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <SpotifyIcon className="size-3.5" />
              Spotify Playlist
            </span>

            <h2 className="mt-5 text-5xl font-black uppercase leading-none tracking-wider text-foreground sm:text-6xl">
              Moroccan
              <br />
              <span className="text-primary">Sounds</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The hottest tunes from Morocco.
              <br />
              Curated by Youcef Riad.
            </p>

            {/* Track count pill */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {artists.slice(0, 3).map((a) => (
                  <div
                    key={a.id}
                    className="relative size-7 overflow-hidden rounded-full ring-2 ring-background"
                  >
                    <Image
                      src={a.imageSrc}
                      alt={a.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                9 artists · 40+ tracks
              </span>
            </div>

            {/* CTA */}
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-primary hover:shadow-[0_0_32px_-6px_var(--color-primary)]"
            >
              <SpotifyIcon className="size-5 transition-transform duration-300 group-hover:scale-110" />
              Listen on Spotify
            </a>
          </Reveal>

          {/* ── Right column: 3×3 artist grid ──────────────────────── */}
          <Reveal delay={120} className="md:w-[65%]">
            <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-2xl">
              {artists.map((artist, i) => (
                <div
                  key={artist.id}
                  className="group relative aspect-square overflow-hidden"
                  style={{
                    // Stagger the reveal slightly per tile
                    transitionDelay: `${i * 30}ms`,
                  }}
                >
                  {/* Artist image */}
                  <Image
                    src={artist.imageSrc}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 22vw"
                    className="object-cover saturate-[0.7] transition-all duration-500 ease-in-out group-hover:scale-[1.08] group-hover:saturate-100"
                  />

                  {/* Bottom gradient overlay — fades in on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />

                  {/* Artist name — slides up on hover */}
                  <p className="absolute bottom-0 left-0 right-0 translate-y-1 px-3 pb-3 text-xs font-semibold text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm">
                    {artist.name}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
