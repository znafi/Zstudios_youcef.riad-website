import { Reveal } from './reveal'
import type { SVGProps } from 'react'

function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.52 17.34c-.24.36-.66.48-1.02.24-2.82-1.74-6.36-2.1-10.56-1.14-.42.12-.78-.18-.9-.54-.12-.42.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.3 1.02zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.38-1.32 9.78-.66 13.5 1.62.36.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.1 9.3c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.32-1.32 11.4-1.02 15.84 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.62.3z" />
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

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.04.85.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5.59 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.63-.1z" />
    </svg>
  )
}

function SoundCloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.18 12.7c-.06 0-.1.04-.11.1l-.16 1.49.16 1.45c.01.06.05.1.11.1.05 0 .1-.04.1-.1l.18-1.45-.18-1.49c0-.06-.05-.1-.1-.1zm1.05.48c-.07 0-.12.05-.12.11l-.13 1-.13.99c0 .06.06.12.13.12.06 0 .11-.06.12-.12l.15-.99-.15-1c-.01-.06-.06-.11-.12-.11zm2.13-1.5c-.08 0-.14.06-.15.14l-.2 2.48.2 2.4c.01.08.07.14.15.14.07 0 .13-.06.14-.14l.23-2.4-.23-2.48c-.01-.08-.07-.14-.14-.14zm1.07-.38c-.09 0-.15.07-.16.16l-.18 2.85.18 2.75c.01.09.07.16.16.16.08 0 .15-.07.15-.16l.21-2.75-.21-2.85c0-.09-.07-.16-.15-.16zm1.09-.36c-.1 0-.17.08-.18.18l-.16 3.19.16 2.74c.01.1.08.18.18.18.09 0 .17-.08.17-.18l.18-2.74-.18-3.19c0-.1-.08-.18-.17-.18zm1.1-.03c-.1 0-.18.09-.19.19l-.15 3.21.15 2.74c.01.11.09.19.19.19.1 0 .18-.08.19-.19l.17-2.74-.17-3.21c-.01-.1-.09-.19-.19-.19zm1.12-.92c-.11 0-.2.09-.2.2l-.14 4.13.14 2.72c0 .11.09.2.2.2.11 0 .2-.09.2-.2l.16-2.72-.16-4.13c0-.11-.09-.2-.2-.2zm1.12-.06c-.12 0-.21.1-.22.22l-.13 4.18.13 2.7c.01.12.1.22.22.22.11 0 .21-.1.21-.22l.15-2.7-.15-4.18c0-.12-.1-.22-.21-.22zm1.16.3c-.12 0-.22.1-.22.23l-.12 3.88.12 2.68c0 .12.1.22.22.22.13 0 .23-.1.23-.22l.13-2.68-.13-3.88c0-.13-.1-.23-.23-.23zm1.18-.46c-.13 0-.24.11-.24.24l-.11 4.33.11 2.66c0 .13.11.24.24.24.13 0 .24-.11.24-.24l.12-2.66-.12-4.33c0-.13-.11-.24-.24-.24zm1.27-1.18a.26.26 0 0 0-.26.26l-.1 5.5.1 2.63c0 .14.12.26.26.26.14 0 .25-.12.26-.26l.11-2.63-.11-5.5a.26.26 0 0 0-.26-.26zm1.18-.51c-.15 0-.27.12-.27.27l-.09 6 .09 2.6c0 .15.12.27.27.27.14 0 .26-.12.27-.27l.1-2.6-.1-6c-.01-.15-.13-.27-.27-.27zm1.85-.11c-.06-.04-.14-.07-.22-.07-.1 0-.19.03-.26.08a.28.28 0 0 0-.11.22l-.05 1.04-.08 5.05.08 2.58c0 .04.02.09.04.12.05.07.13.12.22.12.07 0 .14-.04.19-.09a.28.28 0 0 0 .08-.2l.09-2.58-.09-5.97a.28.28 0 0 0-.04-.16c.01 0 .01-.01.01-.02zm.81 7.74h-.01.01zm2.83-5.46c-.45 0-.88.09-1.27.25-.26-2.95-2.73-5.26-5.74-5.26-.74 0-1.45.14-2.09.39-.25.1-.31.2-.32.39v9.7c0 .2.16.36.35.38h9.07A2.85 2.85 0 0 0 24 14.05a2.85 2.85 0 0 0-2.85-2.85z" />
    </svg>
  )
}

const platforms = [
  {
    name: 'Spotify',
    handle: 'Youcef Riad',
    href: 'https://open.spotify.com',
    Icon: SpotifyIcon,
    tileBg: '#ffffff',
    glyph: '#1DB954',
  },
  {
    name: 'YouTube',
    handle: '@youcefriad',
    href: 'https://youtube.com',
    Icon: YouTubeIcon,
    tileBg: '#ffffff',
    glyph: '#FF0000',
  },
  {
    name: 'Apple Music',
    handle: 'Youcef Riad',
    href: 'https://music.apple.com',
    Icon: AppleIcon,
    tileBg: 'linear-gradient(135deg, #FA233B, #FB5C74)',
    glyph: '#ffffff',
  },
  {
    name: 'Instagram',
    handle: '@youcefriad',
    href: 'https://instagram.com',
    Icon: InstagramIcon,
    tileBg:
      'linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)',
    glyph: '#ffffff',
  },
  {
    name: 'TikTok',
    handle: '@youcefriad',
    href: 'https://tiktok.com',
    Icon: TikTokIcon,
    tileBg: '#010101',
    glyph: '#ffffff',
  },
  {
    name: 'SoundCloud',
    handle: 'Youcef Riad',
    href: 'https://soundcloud.com',
    Icon: SoundCloudIcon,
    tileBg: 'linear-gradient(135deg, #FF5500, #FF8800)',
    glyph: '#ffffff',
  },
]

export function PlatformLinks() {
  return (
    <section
      id="connect"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-24"
    >
      <Reveal className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Listen everywhere
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Find Youcef on every platform
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary"
            >
              <span
                className="flex size-12 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/10 transition-transform group-hover:scale-105"
                style={{ background: p.tileBg }}
              >
                <p.Icon className="size-6" style={{ color: p.glyph }} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-foreground">
                  {p.name}
                </span>
                <span className="block truncate text-sm text-muted-foreground">
                  {p.handle}
                </span>
              </span>
              <span className="text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Open →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
