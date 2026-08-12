import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

/*
  Apenas avaliações reais e fiéis. Não inventar depoimentos nem alterar significado.
  Nota 4,3 · 78 avaliações no Google referem-se à unidade de Jacarezinho.
*/
const REVIEWS = [
  {
    text: 'Lugar bem bonito com uma pizza de boa qualidade, espaço kids muito bom.',
  },
  {
    text: 'Um dos melhores ambientes e uma das melhores pizzas da cidade.',
  },
]

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-terracota">
              Avaliações
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="font-serif text-7xl font-semibold leading-none text-primary lg:text-8xl">
                4,3
              </span>
              <Star className="mb-2 size-9 fill-amber text-amber" />
            </div>
            <p className="mt-4 text-base text-muted-foreground">
              78 avaliações no Google
              <br />
              <span className="text-sm">Unidade de Jacarezinho</span>
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {REVIEWS.map((review, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
              >
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <p className="mt-5 font-serif text-2xl font-medium leading-snug text-balance text-primary">
                    {`“${review.text}”`}
                  </p>
                </div>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Cliente no Google
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
