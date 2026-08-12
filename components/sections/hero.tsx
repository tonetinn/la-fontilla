'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useUnitSelector } from '@/components/unit-selector'

export function Hero() {
  const { open } = useUnitSelector()

  return (
    <section id="top" className="relative min-h-[min(900px,100svh)] overflow-hidden bg-deep text-cream">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pizza.png"
          alt="Pizza artesanal da La Fontilla com borda dourada e queijo derretido"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center lg:object-right"
        />
        {/* véus verdes para leitura da tipografia */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-deep/30 lg:bg-gradient-to-r lg:from-deep lg:via-deep/85 lg:to-transparent" />
        <div className="absolute inset-0 bg-deep/20" />
      </div>

      <div className="relative mx-auto flex min-h-[min(900px,100svh)] max-w-7xl flex-col justify-end px-5 pb-28 pt-28 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber">
            Pizzaria &amp; Esfiharia
          </p>

          <h1 className="display-xl mt-5 max-w-[10ch] font-serif font-semibold leading-[0.88] tracking-[-0.035em] text-balance">
            A noite
            <br />
            pede La Fontilla.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream/82 text-pretty sm:text-lg">
            Pizza, esfiha, bons momentos e espaço para toda a família.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => open('order')}
              className="min-h-12 rounded-full bg-amber px-8 py-3.5 text-base font-bold tracking-wide text-deep shadow-xl shadow-black/30 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#d1a64b] active:translate-y-0"
            >
              Pedir agora
            </button>
            <button
              onClick={() => open('reserve')}
              className="min-h-12 rounded-full border border-cream/45 px-8 py-3.5 text-base font-semibold tracking-wide text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/10"
            >
              Reservar uma mesa
            </button>
          </div>

          <div className="mt-9 flex flex-col items-start gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <span className="font-medium uppercase tracking-[0.22em] text-cream/70">
              Jacarezinho <span className="mx-1 text-amber">•</span> Santo Antônio da Platina
            </span>
            <span className="hero-rating flex items-center gap-2 rounded-full border border-cream/15 bg-deep/45 px-3 py-1.5 backdrop-blur-sm">
              <Star className="size-4 fill-amber text-amber" />
              <span className="font-semibold">4,3</span>
              <span className="text-cream/70">· 78 avaliações no Google (Jacarezinho)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
