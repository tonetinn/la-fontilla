'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ShoppingBag, Star, UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'
import { UNIT_LIST, type Unit } from '@/lib/data'

const IMAGES: Record<string, { src: string; alt: string }> = {
  jacarezinho: {
    src: '/images/fachada-jacarezinho.png',
    alt: 'Fachada iluminada da La Fontilla em Jacarezinho',
  },
  'santo-antonio': {
    src: '/images/fachada-santo-antonio.png',
    alt: 'Fachada da La Fontilla em Santo Antônio da Platina',
  },
}

function UnitPanel({
  unit,
  active,
  dim,
  onHover,
}: {
  unit: Unit
  active: boolean
  dim: boolean
  onHover: (v: boolean) => void
}) {
  const img = IMAGES[unit.id]
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={cn(
        'group relative min-h-[36rem] flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:min-h-[42rem] lg:min-h-[78svh]',
        active && 'lg:grow-[1.6]',
        dim && 'lg:grow-[0.7]',
      )}
    >
      <Image
        src={img.src || '/placeholder.svg'}
        alt={img.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          'object-cover transition-transform duration-[1400ms] ease-out',
          active ? 'scale-105' : 'scale-100',
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/10" />
      <div className="absolute inset-0 bg-primary/10 transition-colors duration-700 group-hover:bg-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 text-cream sm:p-10 lg:p-12">
        <div className="flex items-center justify-between border-t border-cream/30 pt-4 text-[0.6rem] font-bold uppercase tracking-[0.3em] text-cream/70">
          <span>Unidade La Fontilla</span>
          <span>{unit.city}</span>
        </div>

        <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-amber">La Fontilla</p>
        <h3 className="mt-3 max-w-[10ch] font-serif text-[clamp(3.2rem,5vw,6rem)] font-medium leading-[0.82] tracking-[-0.045em]">
          {unit.shortName}
        </h3>
        <address className="mt-4 flex items-start gap-2 not-italic text-cream/80">
          <MapPin className="mt-0.5 size-4 shrink-0 text-amber" />
          <span className="text-sm leading-relaxed">{unit.address.join(' · ')}</span>
        </address>

        {unit.id === 'jacarezinho' && (
          <div className="mt-5 flex flex-wrap gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em]">
            <span className="rounded-full border border-cream/25 bg-deep/30 px-3 py-2">Espaço Kids</span>
            <span className="flex items-center gap-1.5 rounded-full border border-cream/25 bg-deep/30 px-3 py-2"><Star className="size-3 fill-amber text-amber" /> 4,3 · 78 avaliações</span>
          </div>
        )}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={unit.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold tracking-wide text-deep transition-transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="size-4" />
            Pedir em {unit.shortName}
          </a>
          <a
            href={unit.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            <UtensilsCrossed className="size-4" />
            Reservar em {unit.shortName}
          </a>
          <a
            href={unit.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            <MapPin className="size-4" />
            Rota para {unit.shortName}
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export function Unidades() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="unidades" className="scroll-mt-20 bg-deep text-cream">
      <div className="mx-auto grid max-w-[1480px] gap-8 px-5 pt-20 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-12 lg:pt-32">
        <div className="lg:col-span-8">
          <p className="flex items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-amber"><span className="h-px w-12 bg-amber" /> Unidades</p>
          <h2 className="mt-6 max-w-[11ch] font-serif text-[clamp(3.7rem,7vw,7.6rem)] font-medium leading-[0.82] tracking-[-0.05em] text-balance">
            Duas cidades. <span className="italic text-amber">A mesma La Fontilla.</span>
          </h2>
        </div>
        <p className="max-w-sm border-l border-cream/20 pl-5 text-base leading-relaxed text-cream/65 lg:col-span-3 lg:col-start-10">Escolha a cidade certa antes de pedir, reservar ou traçar sua rota.</p>
      </div>

      <div className="mt-12 flex flex-col lg:mt-16 lg:flex-row">
        {UNIT_LIST.map((unit) => (
          <UnitPanel
            key={unit.id}
            unit={unit}
            active={hovered === unit.id}
            dim={hovered !== null && hovered !== unit.id}
            onHover={(v) => setHovered(v ? unit.id : null)}
          />
        ))}
      </div>
    </section>
  )
}
