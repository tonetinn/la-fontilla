import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function CheeseMoment() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-deep text-cream sm:min-h-[78svh]">
      <Image
        src="/images/cheese-pull.png"
        alt="Queijo sendo puxado de uma fatia de pizza da La Fontilla"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/40" />

      <div className="relative z-10 px-5 text-center">
        <h2 className="font-serif text-[clamp(3.4rem,11vw,8rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-balance">
          Puxa.
          <br />
          <span className="text-amber">E a gente entende.</span>
        </h2>

        <a
          href="#cardapio"
          className="mt-10 inline-flex items-center gap-2 border-b border-cream/50 pb-1 text-sm font-semibold uppercase tracking-[0.22em] transition-colors hover:border-amber hover:text-amber"
        >
          Ver cardápio
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
