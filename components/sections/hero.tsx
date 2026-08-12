'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useUnitSelector } from '@/components/unit-selector'

export function Hero() {
  const { open } = useUnitSelector()

  return (
    <section id="top" className="relative min-h-svh overflow-hidden bg-deep text-cream">
      {/* Fotografia real (placeholder até receber os arquivos oficiais) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pizza.png"
          alt="Pizza artesanal da La Fontilla com borda dourada e queijo derretido"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
        {/* véus verdes para leitura da tipografia */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-deep/30 lg:bg-gradient-to-r lg:from-deep lg:via-deep/85 lg:to-transparent" />
        <div className="absolute inset-0 bg-deep/20" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 pb-28 pt-28 lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber">
            Pizzaria &amp; Esfiharia
          </p>

          <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            A noite
            <br />
            pede La Fontilla.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80 text-pretty">
            Pizza, esfiha, bons momentos e espaço para toda a família.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => open('order')}
              className="rounded-full bg-amber px-8 py-4 text-base font-bold tracking-wide text-deep shadow-xl shadow-black/30 transition-transform hover:-translate-y-0.5"
            >
              Pedir agora
            </button>
            <button
              onClick={() => open('reserve')}
              className="rounded-full border border-cream/40 px-8 py-4 text-base font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Reservar uma mesa
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="font-medium uppercase tracking-[0.22em] text-cream/70">
              Jacarezinho <span className="mx-1 text-amber">•</span> Santo Antônio da Platina
            </span>
            <span className="flex items-center gap-2 rounded-full border border-cream/15 bg-deep/40 px-3 py-1.5">
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
