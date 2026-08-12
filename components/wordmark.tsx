import { cn } from '@/lib/utils'

/**
 * Marca textual provisória da La Fontilla.
 * Substituir pelo logotipo REAL fornecido pela marca (não redesenhar / não gerar por IA).
 */
export function Wordmark({
  className,
  tagline = true,
}: {
  className?: string
  tagline?: boolean
}) {
  return (
    <span className={cn('inline-flex flex-col leading-none', className)}>
      <span className="font-serif text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
        La Fontilla
      </span>
      {tagline && (
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.32em] opacity-70">
          Pizzaria &amp; Esfiharia
        </span>
      )}
    </span>
  )
}
