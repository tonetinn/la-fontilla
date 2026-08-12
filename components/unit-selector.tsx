'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ArrowRight, Check, MapPin, Navigation, ShoppingBag, UtensilsCrossed, X } from 'lucide-react'
import {
  ACTION_COPY,
  actionUrl,
  UNIT_LIST,
  UNITS,
  type ActionKind,
  type UnitId,
} from '@/lib/data'

const STORAGE_KEY = 'lafontilla:unidade'

type UnitSelectorContextValue = {
  open: (action: ActionKind) => void
  lastUnit: UnitId | null
}

const UnitSelectorContext = createContext<UnitSelectorContextValue | null>(null)

export function useUnitSelector() {
  const ctx = useContext(UnitSelectorContext)
  if (!ctx) throw new Error('useUnitSelector deve ser usado dentro de UnitSelectorProvider')
  return ctx
}

export function UnitSelectorProvider({ children }: { children: React.ReactNode }) {
  const [action, setAction] = useState<ActionKind | null>(null)
  const [lastUnit, setLastUnit] = useState<UnitId | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'jacarezinho' || stored === 'santo-antonio') {
        const frame = requestAnimationFrame(() => setLastUnit(stored))
        return () => cancelAnimationFrame(frame)
      }
    } catch {
      // ignora indisponibilidade de localStorage
    }
  }, [])

  const open = useCallback((a: ActionKind) => {
    triggerRef.current = document.activeElement as HTMLElement | null
    setAction(a)
  }, [])
  const close = useCallback(() => setAction(null), [])

  const handleSelect = useCallback(
    (unitId: UnitId) => {
      if (!action) return
      try {
        localStorage.setItem(STORAGE_KEY, unitId)
      } catch {
        // ignora
      }
      setLastUnit(unitId)
      const url = actionUrl(action, UNITS[unitId])
      window.open(url, '_blank', 'noopener,noreferrer')
      close()
    },
    [action, close],
  )

  useEffect(() => {
    if (!action) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      triggerRef.current?.focus()
    }
  }, [action, close])

  const value = useMemo(() => ({ open, lastUnit }), [open, lastUnit])
  const copy = action ? ACTION_COPY[action] : null

  return (
    <UnitSelectorContext.Provider value={value}>
      {children}

      {action && copy && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="unit-selector-title"
          aria-describedby="unit-selector-description"
        >
          <button
            aria-label="Fechar"
            onClick={close}
            className="absolute inset-0 cursor-default bg-deep/70 backdrop-blur-sm animate-in fade-in duration-300"
          />

          <div ref={dialogRef} className="safe-bottom relative z-10 w-full max-w-lg animate-in slide-in-from-bottom-6 fade-in duration-300 sm:zoom-in-95">
            <div className="m-3 overflow-hidden rounded-[1.4rem] border border-primary/20 bg-cream text-foreground shadow-2xl sm:m-4">
              <div className="flex items-start justify-between gap-4 border-b border-border px-6 pt-6 pb-4">
                <div>
                  <p className="font-serif text-2xl font-semibold leading-none tracking-tight text-primary sm:text-3xl">
                    <span id="unit-selector-title">{copy.title}</span>
                  </p>
                  <p id="unit-selector-description" className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {copy.subtitle} Você confirma a cidade antes de continuar.
                  </p>
                </div>
                <button
                  onClick={close}
                  aria-label="Fechar seletor de unidade"
                  className="-mr-1 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3 p-4 sm:p-6">
                {UNIT_LIST.map((unit) => {
                  const isLast = lastUnit === unit.id
                  const ActionIcon = action === 'order' ? ShoppingBag : action === 'reserve' ? UtensilsCrossed : Navigation
                  return (
                  <button
                    key={unit.id}
                    data-autofocus={unit.id === (lastUnit ?? 'jacarezinho') ? '' : undefined}
                    onClick={() => handleSelect(unit.id)}
                    className="group flex min-h-[5.5rem] items-center justify-between gap-4 rounded-xl border border-primary/15 bg-offwhite px-5 py-4 text-left transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground active:translate-y-0"
                  >
                    <span className="flex items-start gap-3">
                      <ActionIcon className="mt-0.5 size-5 shrink-0 text-primary transition-colors group-hover:text-primary-foreground" />
                      <span>
                        <span className="block font-serif text-lg font-semibold leading-tight">
                          {unit.shortName}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/75">
                          {copy.cta} {unit.shortName}
                        </span>
                        <span className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                          <MapPin className="size-3" />
                          {unit.address[0]}
                        </span>
                      </span>
                    </span>
                    {isLast ? (
                      <span className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-primary group-hover:bg-cream/15 group-hover:text-primary-foreground">
                        <Check className="size-3" />
                        Última
                      </span>
                    ) : (
                      <ArrowRight className="size-5 shrink-0 text-primary/45 transition-all group-hover:translate-x-0.5 group-hover:text-primary-foreground" />
                    )}
                  </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </UnitSelectorContext.Provider>
  )
}
