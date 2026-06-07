import { ScrollProgress } from '@/components/scroll-progress'
import { CursorGlow } from '@/components/cursor-glow'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { MarqueeBand } from '@/components/marquee-band'
import { ZelligeInstrument } from '@/components/zellige-instrument'
import { FeaturedRelease } from '@/components/featured-release'
import { MoroccanSounds } from '@/components/moroccan-sounds'
import { PlatformLinks } from '@/components/platform-links'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <SiteNav />
      <Hero />
      <MarqueeBand />
      <ZelligeInstrument />
      <FeaturedRelease />
      <MoroccanSounds />
      <PlatformLinks />
      <SiteFooter />
    </main>
  )
}
