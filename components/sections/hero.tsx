'use client'

import Image from 'next/image'
import { ArrowDown, ArrowRight, Star } from 'lucide-react'
import { useUnitSelector } from '@/components/unit-selector'

export function Hero() {
  const { open } = useUnitSelector()

  return (
    <section id="top" className="relative min-h-svh overflow-hidden bg-deep text-cream">
      <Image
        src="/images/hero-pizza.png"
        alt="Pizza artesanal da La Fontilla com borda dourada e queijo derretido"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] sm:object-[62%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,32,17,0.96)_0%,rgba(24,32,17,0.82)_34%,rgba(24,32,17,0.2)_72%,rgba(24,32,17,0.12)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/10 to-deep/45" />
      <div className="absolute inset-0 bg-deep/20 lg:hidden" />
      <div className="pointer-events-none absolute inset-3 border border-cream/15 sm:inset-5" />

      <div className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col px-5 pb-24 pt-28 sm:px-9 sm:pb-28 lg:px-14 lg:pb-8 lg:pt-32 xl:px-20">
        <div className="hero-kicker flex items-center justify-between gap-5 border-t border-cream/30 pt-4 text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-cream/68">
          <span>Pizzaria &amp; Esfiharia</span>
          <span className="hidden text-right sm:block">Jacarezinho · Santo Antônio da Platina</span>
        </div>

        <div className="hero-title my-auto max-w-[60rem] py-14 sm:py-16 lg:py-8">
          <h1 className="font-serif text-[clamp(4.8rem,12vw,11.6rem)] font-medium leading-[0.68] tracking-[-0.065em] text-balance">
            <span className="block">A noite</span>
            <span className="block pl-[0.3em] italic text-cream/94">pede</span>
            <span className="block text-amber">La Fontilla.</span>
          </h1>
          <p className="mt-8 max-w-sm border-l border-amber pl-5 text-base leading-relaxed text-cream/78 sm:text-lg">
            Pizza, esfiha e uma mesa pronta para reunir quem importa.
          </p>
        </div>

        <div className="hero-actions grid overflow-hidden border border-cream/20 bg-deep/88 shadow-[0_24px_80px_rgba(8,12,5,0.38)] backdrop-blur-sm lg:grid-cols-[1.05fr_0.8fr_0.8fr]">
          <div className="flex flex-col justify-center border-b border-cream/15 px-5 py-5 sm:px-7 lg:border-b-0 lg:border-r">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-amber">Primeiro, escolha a cidade</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cream/72">
              <span>Jacarezinho</span><span className="size-1 rounded-full bg-amber" /><span>Santo Antônio da Platina</span>
            </div>
            <p className="hero-rating mt-2 flex items-center gap-1.5 text-xs text-cream/62">
              <Star className="size-3.5 fill-amber text-amber" /> 4,3 · 78 avaliações — Jacarezinho
            </p>
          </div>
          <button
            onClick={() => open('order')}
            className="group flex min-h-16 items-center justify-between border-b border-cream/15 bg-amber px-6 text-sm font-bold uppercase tracking-[0.15em] text-deep transition-colors duration-300 hover:bg-cream focus-visible:outline-offset-[-4px] sm:min-h-20 sm:px-8 lg:border-b-0 lg:border-r"
          >
            Pedir agora
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => open('reserve')}
            className="group flex min-h-16 items-center justify-between px-6 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-deep focus-visible:outline-offset-[-4px] sm:min-h-20 sm:px-8"
          >
            Reservar mesa
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <a
        href="#gastronomia"
        className="absolute right-9 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-cream/60 transition-colors hover:text-amber xl:flex"
      >
        Conhecer a mesa <ArrowDown className="size-3.5" />
      </a>
    </section>
  )
}
