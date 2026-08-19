import Image from 'next/image'

export function EspacoKids() {
  return (
    <section id="kids" className="scroll-mt-20 overflow-hidden bg-offwhite py-20 lg:py-32">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="group relative min-h-[42rem] overflow-hidden rounded-tr-[7rem] bg-deep text-cream sm:min-h-[46rem] lg:min-h-[52rem] lg:rounded-tr-[11rem]">
          <Image
            src="/images/espaco-kids.png"
            alt="Espaço kids da La Fontilla em Jacarezinho"
            fill
            sizes="(max-width: 1024px) 100vw, 92vw"
            className="object-cover object-[62%_center] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/25 to-deep/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/85 via-deep/35 to-transparent" />

          <div className="relative z-10 flex min-h-[42rem] flex-col justify-between p-7 sm:min-h-[46rem] sm:p-12 lg:min-h-[52rem] lg:p-16">
            <div className="flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-amber">
              <span className="h-px w-10 bg-amber" />
              Só em Jacarezinho · Espaço Kids
            </div>

            <div className="max-w-3xl">
              <h2 className="font-serif text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.76] tracking-[-0.055em]">
                Eles brincam.
                <span className="block pl-[0.28em] italic text-amber">Você aproveita.</span>
              </h2>
              <p className="mt-8 max-w-md border-l border-amber pl-5 text-base leading-relaxed text-cream/80 sm:text-lg">
                Na unidade de Jacarezinho, um espaço pensado para os pequenos aproveitarem enquanto você curte a noite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
