import Image from 'next/image'
import { ArrowUpRight, Camera as InstagramIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { INSTAGRAM, INSTAGRAM_HANDLE } from '@/lib/data'

const FEED = [
  { src: '/images/pizza-detalhe.png', alt: 'Pizza artesanal', area: 'md:col-span-2 md:row-span-2' },
  { src: '/images/espaco-kids.png', alt: 'Espaço kids', area: '' },
  { src: '/images/chope.png', alt: 'Chope gelado', area: '' },
  { src: '/images/salao.png', alt: 'Salão da La Fontilla', area: 'md:col-span-2' },
  { src: '/images/esfiha.png', alt: 'Esfihas assadas', area: '' },
  { src: '/images/fachada-jacarezinho.png', alt: 'Fachada em Jacarezinho', area: '' },
]

export function InstagramSection() {
  return (
    <section className="overflow-hidden bg-offwhite py-24 lg:py-36">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-terracota">{INSTAGRAM_HANDLE}</p>
            <h2 className="mt-6 max-w-[10ch] font-serif text-[clamp(3.7rem,7.5vw,7.8rem)] font-medium leading-[0.82] tracking-[-0.05em] text-primary">Da nossa mesa <span className="italic text-terracota">pro seu feed.</span></h2>
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-full border border-primary/25 px-7 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-cream lg:col-span-3 lg:col-start-10 lg:self-end"><InstagramIcon className="size-4" /> Acompanhar <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
        </Reveal>

        <div className="mt-16 grid auto-rows-[13rem] grid-cols-2 gap-2 md:grid-cols-4 md:auto-rows-[15rem] lg:mt-20 lg:auto-rows-[18rem]">
          {FEED.map((item, i) => (
            <Reveal key={item.alt} delay={i * 55} className={item.area}>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="group relative block h-full overflow-hidden">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-deep/0 transition-colors duration-300 group-hover:bg-deep/25" />
                <span className="absolute bottom-4 left-4 translate-y-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-cream opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">Ver no Instagram</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
