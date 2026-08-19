'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useUnitSelector } from '@/components/unit-selector'

const CATEGORIES = [
  { name: 'Pizzas', image: '/images/pizza-detalhe.png', alt: 'Pizza artesanal da La Fontilla', className: 'md:col-span-2 md:row-span-2' },
  { name: 'Esfihas', image: '/images/esfiha.png', alt: 'Esfihas assadas', className: 'md:col-span-1' },
  { name: 'Lanches', image: '/images/mesa-detalhe.png', alt: 'Mesa da La Fontilla', className: 'md:col-span-1' },
  { name: 'Bebidas', image: '/images/chope.png', alt: 'Chope gelado servido na mesa', className: 'md:col-span-2' },
]

export function Cardapio() {
  const { open } = useUnitSelector()

  return (
    <section id="cardapio" className="scroll-mt-20 overflow-hidden bg-deep py-24 text-cream lg:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-amber"><span className="h-px w-12 bg-amber" /> Cardápio</p>
            <h2 className="mt-6 max-w-[9ch] font-serif text-[clamp(3.7rem,7.5vw,7.8rem)] font-medium leading-[0.82] tracking-[-0.05em]">
              O que vai pra <span className="italic text-amber">mesa hoje?</span>
            </h2>
          </div>
          <button onClick={() => open('order')} className="group inline-flex min-h-16 items-center justify-between gap-6 self-start border border-amber bg-amber px-7 text-sm font-bold uppercase tracking-[0.12em] text-deep transition-colors duration-300 hover:bg-cream lg:col-span-3 lg:col-start-10 lg:self-end">
            Ver cardápio &amp; pedir <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="mt-16 grid auto-rows-[15rem] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[15rem] lg:mt-20 lg:auto-rows-[18rem]">
          {CATEGORIES.map((cat, index) => (
            <Reveal key={cat.name} delay={index * 70} className={cat.className}>
              <button onClick={() => open('order')} className="group relative block h-full w-full overflow-hidden text-left outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-inset">
                <Image src={cat.image} alt={cat.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/15 to-transparent" />
                <span className="absolute left-5 top-5 text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-cream/70">Abrir cardápio</span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-7">
                  <span className="font-serif text-4xl font-medium text-cream sm:text-5xl">{cat.name}</span>
                  <span className="flex size-11 items-center justify-center border border-cream/35 transition-[background-color,border-color,color] duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-deep"><ArrowRight className="size-4" /></span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
