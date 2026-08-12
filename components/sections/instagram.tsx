import Image from 'next/image'
import { ArrowUpRight, Camera as InstagramIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { INSTAGRAM, INSTAGRAM_HANDLE } from '@/lib/data'

const FEED = [
  { src: '/images/pizza-detalhe.png', alt: 'Pizza artesanal', span: 'row-span-2' },
  { src: '/images/espaco-kids.png', alt: 'Espaço kids' },
  { src: '/images/chope.png', alt: 'Chope gelado' },
  { src: '/images/salao.png', alt: 'Salão da La Fontilla', span: 'col-span-2' },
  { src: '/images/esfiha.png', alt: 'Esfihas assadas' },
  { src: '/images/fachada-jacarezinho.png', alt: 'Fachada em Jacarezinho' },
]

export function InstagramSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-terracota">
              {INSTAGRAM_HANDLE}
            </p>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-balance text-primary sm:text-6xl lg:text-7xl">
              Da nossa mesa pro seu feed.
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <InstagramIcon className="size-4" />
            Acompanhar no Instagram
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(140px,1fr)] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {FEED.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className={item.span}
            >
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full min-h-[140px] overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep/0 transition-colors group-hover:bg-deep/25" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
