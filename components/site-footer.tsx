import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <a href="#top" className="shrink-0">
          <div className="relative size-14 overflow-hidden rounded-full">
            <Image
              src="/youcef-logo.png"
              alt="Youcef Riad"
              fill
              className="object-cover"
            />
          </div>
        </a>
        <p className="text-sm text-muted-foreground">
          {'\u00A9'} {new Date().getFullYear()} Youcef Riad. Made with rhythm in
          Morocco.
        </p>
      </div>
    </footer>
  )
}
