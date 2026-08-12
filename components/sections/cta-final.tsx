'use client'

import Image from 'next/image'
import { useUnitSelector } from '@/components/unit-selector'

export function CtaFinal() {
  const { open } = useUnitSelector()

  return (
    <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-deep text-cream">
      <Image
        src="/images/pizza-served.png"
        alt="Pizza sendo servida na mesa da La Fontilla"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-deep/80" />

      <div className="relative z-10 px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber">
          Jacarezinho <span className="mx-1">•</span> Santo Antônio da Platina
        </p>
        <h2 className="mx-auto mt-6 max-w-4xl font-serif text-6xl font-semibold leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Hoje a noite é na La Fontilla.
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={() => open('order')}
            className="w-full rounded-full bg-amber px-9 py-4 text-base font-bold tracking-wide text-deep shadow-xl shadow-black/30 transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Pedir agora
          </button>
          <button
            onClick={() => open('reserve')}
            className="w-full rounded-full border border-cream/40 px-9 py-4 text-base font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:w-auto"
          >
            Reservar mesa
          </button>
        </div>
      </div>
    </section>
  )
}
