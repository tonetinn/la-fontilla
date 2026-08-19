import Image from 'next/image'

export function AqueleTipoDeNoite() {
  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-deep text-cream">
      <Image src="/images/ambiente.png" alt="Salão cheio da La Fontilla em uma noite de sexta" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/35 to-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-transparent to-deep/25" />

      <div className="relative mx-auto flex min-h-[82svh] max-w-[1480px] flex-col justify-between px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex items-center justify-between border-t border-cream/25 pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-cream/60">
          <span>Sexta é La Fontilla</span><span>JAC · SAP</span>
        </div>
        <div>
          <h2 className="max-w-[10ch] font-serif text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.76] tracking-[-0.055em]">
            Aquele tipo <span className="block pl-[0.5em] italic text-amber">de noite.</span>
          </h2>
          <p className="mt-8 max-w-md border-l border-amber pl-5 text-lg leading-relaxed text-cream/78">Pizza na mesa. Gente por perto. E nenhuma pressa pra ir embora.</p>
        </div>
      </div>
    </section>
  )
}
