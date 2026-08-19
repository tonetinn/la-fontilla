import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function EspacoKids() {
  return (
    <section id="kids" className="scroll-mt-20 overflow-hidden bg-offwhite py-24 lg:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-0">
          <Reveal className="relative z-10 bg-cream p-8 shadow-[0_24px_80px_rgba(32,41,24,0.12)] sm:p-12 lg:col-span-5 lg:col-start-1 lg:p-16">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-terracota">Só em Jacarezinho · Espaço Kids</p>
            <h2 className="mt-7 font-serif text-[clamp(3.5rem,6vw,6.5rem)] font-medium leading-[0.82] tracking-[-0.05em] text-primary">
              Eles brincam. <span className="block italic text-terracota">Você aproveita.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-primary/68">Na unidade de Jacarezinho, um espaço pensado para os pequenos aproveitarem enquanto você curte a noite.</p>
          </Reveal>
          <Reveal delay={100} className="relative min-h-[34rem] overflow-hidden rounded-tr-[8rem] lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:min-h-[46rem]">
            <Image src="/images/espaco-kids.png" alt="Espaço kids da La Fontilla em Jacarezinho" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
