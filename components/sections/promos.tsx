import { ArrowUpRight, MessagesSquare } from 'lucide-react'
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
        <a href={PROMO_GROUP} target="_blank" rel="noopener noreferrer" className="group flex min-h-40 items-center justify-between gap-8 border-t border-deep/20 px-8 text-sm font-bold uppercase tracking-[0.15em] transition-colors hover:bg-deep hover:text-cream lg:w-[22rem] lg:flex-col lg:items-start lg:justify-end lg:border-l lg:border-t-0 lg:p-12">
          Entrar no grupo <ArrowUpRight className="size-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </Reveal>
    </section>
  )
}
