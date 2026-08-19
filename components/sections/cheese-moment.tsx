import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function CheeseMoment() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-deep text-cream">
      <Image
        src="/images/cheese-pull.png"
        alt="Queijo sendo puxado de uma fatia de pizza da La Fontilla"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/85 via-deep/35 to-deep/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-amber">Um momento La Fontilla</p>
        <h2 className="mt-6 max-w-[9ch] font-serif text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.76] tracking-[-0.055em]">
          Puxa.
          <span className="block pl-[0.45em] italic text-amber">E a gente entende.</span>
        </h2>

        <a
          href="#cardapio"
          className="mt-10 inline-flex items-center gap-3 border-b border-cream/40 pb-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors hover:border-amber hover:text-amber"
        >
          Ver cardápio
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
