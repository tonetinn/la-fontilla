import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const REVIEWS = [
  'Lugar bem bonito com uma pizza de boa qualidade, espaço kids muito bom.',
  'Um dos melhores ambientes e uma das melhores pizzas da cidade.',
]

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-terracota">Avaliações · Jacarezinho</p>
            <div className="mt-8 flex items-start">
              <span className="font-serif text-[9rem] font-medium leading-[0.65] tracking-[-0.08em] text-primary lg:text-[11rem]">4,3</span>
              <Star className="ml-3 size-8 fill-amber text-amber" />
            </div>
            <p className="mt-8 max-w-[15rem] border-t border-primary/20 pt-4 text-sm leading-relaxed text-primary/60">78 avaliações no Google<br />Unidade de Jacarezinho</p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {REVIEWS.map((review, i) => (
              <Reveal key={review} delay={i * 100} className="relative border-t border-primary/25 py-10 sm:py-12">
                <Quote className="absolute right-0 top-8 size-12 text-amber/30" />
                <p className="max-w-3xl pr-10 font-serif text-[clamp(2rem,3.8vw,3.8rem)] font-medium italic leading-[1.02] tracking-[-0.025em] text-primary">“{review}”</p>
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex gap-1" aria-label="5 de 5 estrelas">{Array.from({ length: 5 }).map((_, s) => <Star key={s} aria-hidden="true" className="size-3.5 fill-amber text-amber" />)}</div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-primary/50">Cliente no Google · 0{i + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
