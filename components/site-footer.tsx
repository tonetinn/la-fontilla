import { ArrowUpRight } from 'lucide-react'
import { Wordmark } from '@/components/wordmark'
import { INSTAGRAM, INSTAGRAM_HANDLE, PROMO_GROUP, UNITS } from '@/lib/data'

const QUICK_LINKS = [
  { label: 'Pedir — Jacarezinho', href: UNITS.jacarezinho.order },
  { label: 'Pedir — Santo Antônio da Platina', href: UNITS['santo-antonio'].order },
  { label: 'Reservar — Jacarezinho', href: UNITS.jacarezinho.reserve },
  { label: 'Reservar — Santo Antônio da Platina', href: UNITS['santo-antonio'].reserve },
  { label: 'Grupo de Promoções', href: PROMO_GROUP },
  { label: 'Como chegar — Jacarezinho', href: UNITS.jacarezinho.maps },
  { label: 'Como chegar — Santo Antônio da Platina', href: UNITS['santo-antonio'].maps },
  { label: 'Instagram', href: INSTAGRAM },
]

export function SiteFooter() {
  return (
    <footer className="bg-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Hub de links — substitui o Linktree */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Acessos rápidos
            </h2>
            <p className="mt-2 text-sm text-cream/60">
              Tudo o que você encontrava no nosso link da bio, agora aqui.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-cream/10 py-3.5 text-[0.95rem] font-medium text-cream/90 transition-colors hover:text-amber"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 text-cream/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unidades / marca */}
          <div className="lg:col-span-5 lg:pl-8">
            <Wordmark className="text-cream" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[UNITS.jacarezinho, UNITS['santo-antonio']].map((unit) => (
                <div key={unit.id}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber">
                    {unit.shortName}
                  </p>
                  <address className="mt-3 text-sm not-italic leading-relaxed text-cream/70">
                    {unit.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              ))}
            </div>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium text-cream/70 transition-colors hover:text-amber"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} La Fontilla — Pizzaria &amp; Esfiharia. Todos os direitos reservados.</p>
          <p>Jacarezinho · Santo Antônio da Platina — Paraná</p>
        </div>
      </div>
    </footer>
  )
}
