import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/youcef-logo.png"
            alt="Youcef Riad"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-display text-xl font-bold text-foreground">
            Youcef Riad
          </span>
        </a>
        <p className="text-sm text-muted-foreground">
          {'\u00A9'} {new Date().getFullYear()} Youcef Riad. Made with rhythm in
          Morocco.
        </p>
      </div>
    </footer>
  )
}
