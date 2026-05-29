const words = [
  'BINI W BINK',
  'YOUCEF RIAD',
  'NEW SINGLE',
  'MADE IN MOROCCO',
  'STREAM NOW',
]

export function MarqueeBand() {
  const row = [...words, ...words, ...words]
  return (
    <div
      id="listen"
      className="marquee-paused relative border-y border-border bg-primary py-4"
    >
      <div className="flex w-max animate-marquee items-center">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 text-display text-2xl font-bold italic text-primary-foreground sm:text-3xl"
          >
            {w}
            <span className="text-primary-foreground/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
