const WORDS = ['Pizza', 'Esfiha', 'Chope', 'Família', 'La Fontilla']

export function Marquee() {
  const line = [...WORDS, ...WORDS, ...WORDS]
  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-border bg-cream py-6">
      <div className="flex w-max animate-marquee-slow items-center whitespace-nowrap motion-reduce:animate-none">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center">
            {line.map((word, i) => (
              <span key={`${group}-${i}`} className="flex items-center">
                <span className="px-6 font-serif text-2xl font-medium tracking-tight text-primary/90 sm:text-3xl">
                  {word}
                </span>
                <span className="text-amber">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
