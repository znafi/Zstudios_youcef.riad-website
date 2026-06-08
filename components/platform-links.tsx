import { Reveal } from './reveal'
import type { SVGProps } from 'react'

function SoundCloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.18 12.7c-.06 0-.1.04-.11.1l-.16 1.49.16 1.45c.01.06.05.1.11.1.05 0 .1-.04.1-.1l.18-1.45-.18-1.49c0-.06-.05-.1-.1-.1zm1.05.48c-.07 0-.12.05-.12.11l-.13 1-.13.99c0 .06.06.12.13.12.06 0 .11-.06.12-.12l.15-.99-.15-1c-.01-.06-.06-.11-.12-.11zm2.13-1.5c-.08 0-.14.06-.15.14l-.2 2.48.2 2.4c.01.08.07.14.15.14.07 0 .13-.06.14-.14l.23-2.4-.23-2.48c-.01-.08-.07-.14-.14-.14zm1.07-.38c-.09 0-.15.07-.16.16l-.18 2.85.18 2.75c.01.09.07.16.16.16.08 0 .15-.07.15-.16l.21-2.75-.21-2.85c0-.09-.07-.16-.15-.16zm1.09-.36c-.1 0-.17.08-.18.18l-.16 3.19.16 2.74c.01.1.08.18.18.18.09 0 .17-.08.17-.18l.18-2.74-.18-3.19c0-.1-.08-.18-.17-.18zm1.1-.03c-.1 0-.18.09-.19.19l-.15 3.21.15 2.74c.01.11.09.19.19.19.1 0 .18-.08.19-.19l.17-2.74-.17-3.21c-.01-.1-.09-.19-.19-.19zm1.12-.92c-.11 0-.2.09-.2.2l-.14 4.13.14 2.72c0 .11.09.2.2.2.11 0 .2-.09.2-.2l.16-2.72-.16-4.13c0-.11-.09-.2-.2-.2zm1.12-.06c-.12 0-.21.1-.22.22l-.13 4.18.13 2.7c.01.12.1.22.22.22.11 0 .21-.1.21-.22l.15-2.7-.15-4.18c0-.12-.1-.22-.21-.22zm1.16.3c-.12 0-.22.1-.22.23l-.12 3.88.12 2.68c0 .12.1.22.22.22.13 0 .23-.1.23-.22l.13-2.68-.13-3.88c0-.13-.1-.23-.23-.23zm1.18-.46c-.13 0-.24.11-.24.24l-.11 4.33.11 2.66c0 .13.11.24.24.24.13 0 .24-.11.24-.24l.12-2.66-.12-4.33c0-.13-.11-.24-.24-.24zm1.27-1.18a.26.26 0 0 0-.26.26l-.1 5.5.1 2.63c0 .14.12.26.26.26.14 0 .25-.12.26-.26l.11-2.63-.11-5.5a.26.26 0 0 0-.26-.26zm1.18-.51c-.15 0-.27.12-.27.27l-.09 6 .09 2.6c0 .15.12.27.27.27.14 0 .26-.12.27-.27l.1-2.6-.1-6c-.01-.15-.13-.27-.27-.27zm1.85-.11c-.06-.04-.14-.07-.22-.07-.1 0-.19.03-.26.08a.28.28 0 0 0-.11.22l-.05 1.04-.08 5.05.08 2.58c0 .04.02.09.04.12.05.07.13.12.22.12.07 0 .14-.04.19-.09a.28.28 0 0 0 .08-.2l.09-2.58-.09-5.97a.28.28 0 0 0-.04-.16c.01 0 .01-.01.01-.02zm.81 7.74h-.01.01zm2.83-5.46c-.45 0-.88.09-1.27.25-.26-2.95-2.73-5.26-5.74-5.26-.74 0-1.45.14-2.09.39-.25.1-.31.2-.32.39v9.7c0 .2.16.36.35.38h9.07A2.85 2.85 0 0 0 24 14.05a2.85 2.85 0 0 0-2.85-2.85z" />
    </svg>
  )
}

const platforms = [
  {
    name: 'SoundCloud',
    handle: 'Youcef Riad',
    href: 'https://soundcloud.com/youcefriad',
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
          Stream & follow
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Find me where you listen
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-xl sm:mx-auto lg:max-w-2xl">
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
