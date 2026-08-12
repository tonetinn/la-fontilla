import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Gastronomia() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-terracota">À mesa</p>
          <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-balance text-primary sm:text-6xl lg:text-7xl">
            Difícil é parar na primeira.
          </h2>
        </Reveal>

        {/* composição editorial assimétrica */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-6">
          <Reveal className="col-span-2 lg:col-span-7">
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/pizza-detalhe.png"
                alt="Pizza artesanal inteira com tomate, mussarela e manjericão"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <figure className="group relative aspect-[3/4] h-full overflow-hidden rounded-2xl">
              <Image
                src="/images/cheese-pull.png"
                alt="Fatia de pizza sendo puxada com queijo derretendo"
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>

          <Reveal delay={40} className="lg:col-span-4">
            <figure className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/esfiha.png"
                alt="Esfihas abertas recém-assadas"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>

          <Reveal delay={120} className="col-span-2 lg:col-span-8">
            <figure className="group relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/mesa-detalhe.png"
                alt="Mesa cheia com pizza, chope e amigos compartilhando"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
