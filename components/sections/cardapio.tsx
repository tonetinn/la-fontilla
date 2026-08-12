'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useUnitSelector } from '@/components/unit-selector'

/*
  NOTA INTERNA: categorias exibidas de forma indicativa.
  Confirmar com o cliente as categorias e conteúdos definitivos antes de publicar.
  Não inventar sabores, preços, ingredientes ou promoções.
*/
const CATEGORIES = [
  { name: 'Pizzas', image: '/images/pizza-detalhe.png', alt: 'Pizza artesanal da La Fontilla', span: 'lg:col-span-7' },
  { name: 'Esfihas', image: '/images/esfiha.png', alt: 'Esfihas assadas', span: 'lg:col-span-5' },
  { name: 'Lanches', image: '/images/mesa-detalhe.png', alt: 'Mesa da La Fontilla', span: 'lg:col-span-5' },
  { name: 'Bebidas', image: '/images/chope.png', alt: 'Chope gelado servido na mesa', span: 'lg:col-span-7' },
]

export function Cardapio() {
  const { open } = useUnitSelector()

  return (
    <section id="cardapio" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-terracota">Cardápio</p>
            <h2 className="display-lg mt-5 font-serif font-semibold leading-[0.92] tracking-[-0.025em] text-balance text-primary">
              O que vai pra mesa hoje?
            </h2>
          </div>
          <button
            onClick={() => open('order')}
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-7 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 lg:self-auto"
          >
            Ver cardápio &amp; pedir
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 70} className={cat.span}>
              <button
                onClick={() => open('order')}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl text-left"
              >
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                  <span className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
                    {cat.name}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-colors group-hover:border-amber group-hover:bg-amber group-hover:text-deep">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
