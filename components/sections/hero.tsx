'use client'

import Image from 'next/image'
import { ArrowDown, ArrowRight, Star } from 'lucide-react'
import { useUnitSelector } from '@/components/unit-selector'

export function Hero() {
  const { open } = useUnitSelector()

  return (
    <section id="top" className="relative min-h-svh overflow-hidden bg-deep text-cream">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_16%_22%,rgba(199,154,62,0.18),transparent_28%),linear-gradient(115deg,transparent_55%,rgba(62,75,37,0.5))]" />

      <div className="relative mx-auto grid min-h-svh max-w-[1600px] lg:grid-cols-[0.88fr_1.12fr]">
        <div className="relative z-10 flex flex-col justify-end px-5 pb-28 pt-28 sm:px-8 lg:justify-center lg:px-14 lg:pb-16 xl:px-20">
          <div className="max-w-[42rem]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-amber" />
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-amber">
                Pizzaria &amp; Esfiharia
              </p>
            </div>

            <h1 className="font-serif text-[clamp(4rem,8.6vw,8.7rem)] font-medium leading-[0.76] tracking-[-0.055em] text-balance">
              A noite
              <span className="block pl-[0.38em] italic text-cream/92">pede La</span>
              <span className="block text-amber">Fontilla.</span>
            </h1>

            <p className="mt-8 max-w-md border-l border-cream/25 pl-5 text-base leading-relaxed text-cream/72 sm:text-lg">
              Pizza, esfiha, bons momentos e espaço para toda a família.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => open('order')}
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-amber px-8 text-sm font-bold uppercase tracking-[0.14em] text-deep shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d3a74a]"
              >
                Pedir agora
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => open('reserve')}
                className="min-h-14 rounded-full border border-cream/35 px-8 text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-deep"
              >
                Reservar uma mesa
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs uppercase tracking-[0.16em] text-cream/58">
              <span className="text-amber">Escolha a unidade</span>
              <span className="size-1 rounded-full bg-amber" />
              <span>Jacarezinho</span>
              <span className="size-1 rounded-full bg-amber" />
              <span>Santo Antônio da Platina</span>
              <span className="hero-rating flex items-center gap-1.5 normal-case tracking-normal text-cream/72">
                <Star className="size-3.5 fill-amber text-amber" /> 4,3 · 78 avaliações (Jacarezinho)
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 lg:relative lg:inset-auto lg:m-5 lg:ml-0 lg:overflow-hidden lg:rounded-[2rem]">
          <Image
            src="/images/hero-pizza.png"
            alt="Pizza artesanal da La Fontilla com borda dourada e queijo derretido"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-[62%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/30 lg:bg-gradient-to-r lg:from-deep/65 lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-0 bg-deep/15 lg:hidden" />

          <div className="absolute bottom-7 right-7 hidden max-w-[15rem] border border-cream/20 bg-deep/70 p-5 backdrop-blur-md xl:block">
            <p className="font-serif text-2xl italic leading-tight text-cream">A mesa está quase pronta.</p>
            <p className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-amber">Duas unidades · Paraná</p>
          </div>
        </div>
      </div>

      <a
        href="#gastronomia"
        aria-label="Conhecer a gastronomia La Fontilla"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-cream/55 transition-colors hover:text-amber lg:flex"
      >
        Descobrir <ArrowDown className="size-3.5" />
      </a>
    </section>
  )
}
