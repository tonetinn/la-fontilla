import { ArrowUpRight, Gift, MessagesSquare, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PROMO_GROUP } from '@/lib/data'

export function Promos() {
  return (
    <section className="overflow-hidden bg-amber text-deep">
      <Reveal className="mx-auto grid max-w-[1600px] lg:grid-cols-[1fr_auto]">
        <div className="px-5 py-16 sm:px-10 lg:px-20 lg:py-20">
          <p className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.34em]"><MessagesSquare className="size-4" /> Grupo de promoções</p>
          <h2 className="mt-5 max-w-[18ch] font-serif text-[clamp(3rem,5vw,5.7rem)] font-medium leading-[0.86] tracking-[-0.045em]">Quer pegar as promos primeiro?</h2>
          <p className="mt-5 text-base text-deep/65">Entre no grupo de promoções da La Fontilla no WhatsApp.</p>
        </div>
        <div className="flex border-t border-deep/20 p-4 sm:p-5 lg:w-[24rem] lg:border-l lg:border-t-0">
          <a
            href={PROMO_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[16rem] w-full overflow-hidden rounded-[1.5rem] bg-deep p-7 text-cream shadow-[0_22px_60px_rgba(32,41,24,0.25)] transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1 sm:p-8"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[38%] origin-top bg-primary shadow-[0_10px_25px_rgba(10,14,7,0.35)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-5 group-hover:-rotate-2 group-focus-visible:-translate-y-5 group-focus-visible:-rotate-2 group-active:-translate-y-2">
              <span className="absolute inset-y-0 left-1/2 w-10 -translate-x-1/2 bg-amber" />
              <span className="absolute -bottom-5 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-primary bg-amber text-deep shadow-lg transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110 group-focus-visible:-rotate-12 group-focus-visible:scale-110">
                <Gift className="size-5" />
              </span>
            </span>

            <span aria-hidden="true" className="absolute bottom-0 left-1/2 top-[38%] w-10 -translate-x-1/2 bg-amber/90 transition-opacity duration-500 group-hover:opacity-35 group-focus-visible:opacity-35" />
            <Sparkles aria-hidden="true" className="absolute left-7 top-8 size-5 -translate-y-2 text-amber opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100" />
            <Sparkles aria-hidden="true" className="absolute right-8 top-12 size-4 translate-y-2 text-cream opacity-0 transition-all delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-80 group-focus-visible:translate-y-0 group-focus-visible:opacity-80" />

            <span className="relative z-10 mt-auto flex w-full items-end justify-between gap-5">
              <span>
                <span className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-amber">Um toque para abrir</span>
                <span className="block max-w-[12rem] font-serif text-3xl font-medium leading-[0.9] tracking-[-0.025em] sm:text-4xl">Entrar no grupo</span>
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-cream/25 bg-cream/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-amber group-hover:text-deep group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:bg-amber group-focus-visible:text-deep">
                <ArrowUpRight className="size-5" />
              </span>
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}
