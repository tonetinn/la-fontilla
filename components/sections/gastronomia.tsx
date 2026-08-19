import Image from 'next/image'
import { MaskReveal } from '@/components/origin-motion'
import { Reveal } from '@/components/reveal'

export function Gastronomia() {
  return (
    <section id="gastronomia" className="relative overflow-hidden bg-cream py-24 lg:py-36">
      <div className="pointer-events-none absolute -right-20 top-8 font-serif text-[18rem] leading-none text-primary/[0.035]">LF</div>
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-4 text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-terracota">
              <span className="h-px w-12 bg-terracota" /> À mesa
            </p>
            <h2 className="mt-6 max-w-[10ch] font-serif text-[clamp(3.7rem,7.5vw,8rem)] font-medium leading-[0.82] tracking-[-0.05em] text-primary">
              Difícil é parar <span className="italic text-terracota">na primeira.</span>
            </h2>
          </div>
          <p className="max-w-sm border-l border-primary/20 pl-5 text-base leading-relaxed text-primary/65 lg:col-span-3 lg:col-start-10">
            Forno quente, massa dourada e a mesa no centro de tudo.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-24 lg:grid-cols-12 lg:grid-rows-[10rem_17rem_12rem]">
          <MaskReveal direction="left-to-right" className="col-span-2 lg:col-span-7 lg:row-span-2">
            <figure className="group relative h-full min-h-[28rem] overflow-hidden rounded-t-[5rem] lg:min-h-0">
              <Image src="/images/pizza-detalhe.png" alt="Pizza artesanal inteira com tomate, mussarela e manjericão" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
              <figcaption className="absolute bottom-0 left-0 bg-cream px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-primary">01 · Pizza</figcaption>
            </figure>
          </MaskReveal>

          <MaskReveal direction="right-to-left" delay={120} className="lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
            <figure className="group relative h-full min-h-[22rem] overflow-hidden rounded-t-full lg:min-h-0">
              <Image src="/images/cheese-pull.png" alt="Fatia de pizza sendo puxada com queijo derretendo" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
            </figure>
          </MaskReveal>

          <Reveal delay={60} className="lg:col-span-4 lg:col-start-2 lg:row-start-3 lg:-mt-8">
            <figure className="group relative aspect-[5/3] h-full overflow-hidden">
              <Image src="/images/esfiha.png" alt="Esfihas abertas recém-assadas" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
            </figure>
          </Reveal>

          <Reveal delay={140} className="col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3 lg:mt-8">
            <figure className="group relative aspect-[16/7] h-full overflow-hidden rounded-br-[5rem]">
              <Image src="/images/mesa-detalhe.png" alt="Mesa cheia com pizza, chope e amigos compartilhando" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
              <figcaption className="absolute right-0 top-0 bg-amber px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-deep">02 · Mesa</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
