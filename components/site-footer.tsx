export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-display text-2xl font-bold text-foreground">
          Youcef<span className="text-primary">.</span>Riad
        </p>
        <p className="text-sm text-muted-foreground">
          {'\u00A9'} {new Date().getFullYear()} Youcef Riad. Made with rhythm in
          Morocco.
        </p>
      </div>
    </footer>
  )
}
