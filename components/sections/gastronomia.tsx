import Image from 'next/image'
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
          <p className="max-w-sm border-l border-primary/20 pl-5 text-base leading-relaxed text-primary/80 lg:col-span-3 lg:col-start-10">
            Forno quente, massa dourada e a mesa no centro de tudo.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-24 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-8">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-tl-[5rem] sm:aspect-[16/11] lg:rounded-tl-[8rem]">
              <Image src="/images/pizza-detalhe.png" alt="Pizza artesanal inteira com tomate, mussarela e manjericão" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-cream sm:p-8">
                <span className="font-serif text-4xl font-medium italic sm:text-6xl">Pizza artesanal</span>
                <span className="max-w-[12rem] text-right text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-cream/70">Massa dourada · forno quente</span>
              </figcaption>
            </figure>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-tr-[5rem] lg:h-full lg:rounded-tr-[8rem]">
              <Image src="/images/cheese-pull.png" alt="Fatia de pizza sendo puxada com queijo derretendo" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 max-w-[14rem] p-6 font-serif text-3xl italic leading-none text-cream sm:text-4xl">O queijo diz tudo.</figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5 lg:ml-12">
            <figure className="group relative aspect-square overflow-hidden sm:aspect-[5/3] lg:aspect-[5/4]">
              <Image src="/images/esfiha.png" alt="Esfihas abertas recém-assadas" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
              <figcaption className="absolute left-0 top-0 bg-cream px-4 py-3 text-[0.6rem] font-bold uppercase tracking-[0.26em] text-primary">Esfihas abertas</figcaption>
            </figure>
          </div>

          <div className="col-span-2 lg:col-span-7 lg:mt-12">
            <figure className="group relative aspect-[16/9] overflow-hidden rounded-br-[5rem] lg:rounded-br-[8rem]">
              <Image src="/images/mesa-detalhe.png" alt="Mesa cheia com pizza, chope e amigos compartilhando" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-r from-deep/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 max-w-[12rem] font-serif text-3xl italic leading-none text-cream sm:bottom-8 sm:left-8 sm:text-4xl">A mesa no centro de tudo.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
