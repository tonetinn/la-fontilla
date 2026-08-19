import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Experiencia() {
  return (
    <section id="experiencia" className="relative scroll-mt-20 overflow-hidden bg-primary py-24 text-cream lg:py-36">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-deep/20" />
      <div className="relative mx-auto grid max-w-[1480px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <Reveal className="relative z-10 self-center lg:col-span-5 lg:pr-8">
          <p className="flex items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-cream/85"><span className="h-px w-12 bg-amber" /> A experiência La Fontilla</p>
          <h2 className="mt-7 font-serif text-[clamp(3.8rem,6.4vw,7rem)] font-medium leading-[0.82] tracking-[-0.05em]">
            Mais que pedir <span className="block pl-[0.5em] italic text-amber">uma pizza.</span>
          </h2>
          <p className="mt-8 max-w-md border-l border-cream/25 pl-5 text-lg leading-relaxed text-cream/72">Um lugar para reunir quem importa em volta da mesa.</p>
          <p className="mt-12 font-serif text-2xl italic text-cream/60">A noite começa quando todo mundo chega.</p>
        </Reveal>

        <div className="relative min-h-[42rem] lg:col-span-7">
          <Reveal className="absolute left-0 top-0 h-[72%] w-[78%] overflow-hidden rounded-t-[7rem]">
            <Image src="/images/salao.png" alt="Salão aconchegante da La Fontilla com mesas de madeira e luz âmbar" fill sizes="(max-width: 1024px) 80vw, 45vw" className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]" />
          </Reveal>
          <Reveal delay={100} className="absolute bottom-0 right-0 h-[46%] w-[48%] overflow-hidden border-[0.7rem] border-primary shadow-2xl sm:border-[1rem]">
            <Image src="/images/ambiente.png" alt="Ambiente cheio da La Fontilla em uma noite movimentada" fill sizes="(max-width: 1024px) 50vw, 28vw" className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
