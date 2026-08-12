import { ArrowRight, MessagesSquare } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PROMO_GROUP } from '@/lib/data'

export function Promos() {
  return (
    <section className="bg-deep py-16 text-cream lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-cream/10 bg-primary/30 p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              <MessagesSquare className="size-4" />
              WhatsApp
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-[0.98] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Quer pegar as promos primeiro?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cream/80 text-pretty">
              Entre no grupo de promoções da La Fontilla no WhatsApp.
            </p>
          </div>

          <a
            href={PROMO_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-amber px-8 py-4 text-base font-bold tracking-wide text-deep transition-transform hover:-translate-y-0.5"
          >
            Entrar no grupo
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
