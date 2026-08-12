import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Experiencia() {
  return (
    <section id="experiencia" className="scroll-mt-20 bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber">
              A experiência La Fontilla
            </p>
            <h2 className="display-lg mt-5 font-serif font-semibold leading-[0.92] tracking-[-0.025em] text-balance">
              Mais que pedir uma pizza.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Um lugar para reunir quem importa em volta da mesa.
            </p>
          </Reveal>

          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            <figure className="group relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/salao.png"
                alt="Salão aconchegante da La Fontilla com mesas de madeira e luz âmbar"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </figure>
            <figure className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/ambiente.png"
                alt="Ambiente cheio da La Fontilla em uma noite movimentada"
                fill
                sizes="(max-width: 1024px) 50vw, 23vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </figure>
            <figure className="group relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src="/images/chope.png"
                alt="Chope gelado servido na mesa"
                fill
                sizes="(max-width: 1024px) 50vw, 23vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
