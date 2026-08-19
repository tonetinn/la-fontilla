'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useUnitSelector } from '@/components/unit-selector'

export function CtaFinal() {
  const { open } = useUnitSelector()
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-deep text-cream">
      <Image src="/images/pizza-served.png" alt="Pizza sendo servida na mesa da La Fontilla" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-deep/62" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/35" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1480px] flex-col justify-between px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber">Jacarezinho · Santo Antônio da Platina</p>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <h2 className="font-serif text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.76] tracking-[-0.055em] lg:col-span-8">Hoje a noite é <span className="block pl-[0.5em] italic text-amber">na La Fontilla.</span></h2>
          <div className="flex flex-col gap-3 lg:col-span-3 lg:col-start-10">
            <p className="mb-2 border-l border-amber pl-4 text-sm leading-relaxed text-cream/70">Escolha a unidade no próximo passo.</p>
            <button onClick={() => open('order')} className="group flex min-h-16 w-full items-center justify-between rounded-full bg-amber px-7 text-sm font-bold uppercase tracking-[0.14em] text-deep shadow-[0_14px_35px_rgba(0,0,0,0.2)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#d3a74a] hover:shadow-[0_18px_42px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">Pedir agora <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></button>
            <button onClick={() => open('reserve')} className="min-h-16 w-full rounded-full border border-cream/45 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-[background-color,color,border-color] duration-300 hover:border-cream hover:bg-cream hover:text-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">Reservar mesa</button>
          </div>
        </div>
      </div>
    </section>
  )
}
