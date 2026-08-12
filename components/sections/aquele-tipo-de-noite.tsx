import Image from 'next/image'

export function AqueleTipoDeNoite() {
  return (
    <section className="relative flex min-h-[68svh] items-center overflow-hidden bg-deep text-cream sm:min-h-[76svh]">
      <Image
        src="/images/ambiente.png"
        alt="Salão cheio da La Fontilla em uma noite de sexta"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/70 to-deep/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber">
            Sexta é La Fontilla
          </p>
          <h2 className="mt-5 font-serif text-[clamp(3.25rem,10vw,6.75rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-balance">
            Aquele tipo de noite.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/80 text-pretty">
            Pizza na mesa. Gente por perto. E nenhuma pressa pra ir embora.
          </p>
        </div>
      </div>
    </section>
  )
}
