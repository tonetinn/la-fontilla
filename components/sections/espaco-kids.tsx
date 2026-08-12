import Image from 'next/image'
import { Reveal } from '@/components/reveal'

/*
  NOTA INTERNA — INFORMAÇÕES DO ESPAÇO KIDS A CONFIRMAR COM O CLIENTE:
  - funcionamento do espaço kids
  - presença permanente de monitor
  - horários e regras
  - disponibilidade nas duas unidades
  Não afirmar que existe nas duas unidades sem confirmação.
*/
export function EspacoKids() {
  return (
    <section id="kids" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[3/4] w-full sm:aspect-[16/10] lg:aspect-[16/9]">
            <Image
              src="/images/espaco-kids.png"
              alt="Espaço kids da La Fontilla em Jacarezinho"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10 sm:bg-gradient-to-r sm:from-primary sm:via-primary/60 sm:to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-7 text-primary-foreground sm:justify-center sm:p-12 lg:p-16">
            <div className="max-w-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber">
                Espaço Kids
              </p>
              <h2 className="mt-5 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Eles brincam. Você aproveita.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
                A unidade de Jacarezinho conta com espaço kids — um cantinho pensado para
                as crianças enquanto a mesa fica em paz.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
