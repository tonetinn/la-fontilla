'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ShoppingBag, UtensilsCrossed } from 'lucide-react'
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
        'group relative min-h-[70svh] flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-[80svh]',
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
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/15" />

      <div className="relative z-10 flex h-full flex-col justify-end p-7 text-cream sm:p-10 lg:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">La Fontilla</p>
        <h3 className="mt-3 font-serif text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl">
          {unit.shortName}
        </h3>
        <address className="mt-4 flex items-start gap-2 not-italic text-cream/80">
          <MapPin className="mt-0.5 size-4 shrink-0 text-amber" />
          <span className="text-sm leading-relaxed">{unit.address.join(' · ')}</span>
        </address>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={unit.order}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-bold tracking-wide text-deep transition-transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="size-4" />
            Pedir nessa unidade
          </a>
          <a
            href={unit.reserve}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            <UtensilsCrossed className="size-4" />
            Reservar mesa
          </a>
          <a
            href={unit.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            <MapPin className="size-4" />
            Como chegar
          </a>
        </div>
      </div>
    </div>
  )
}

export function Unidades() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="unidades" className="scroll-mt-20 bg-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber">Unidades</p>
        <h2 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Duas cidades. A mesma La Fontilla.
        </h2>
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
