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
import Image from 'next/image'
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

const UNIT_IMAGES: Record<UnitId, string> = {
  jacarezinho: '/images/fachada-jacarezinho.png',
  'santo-antonio': '/images/fachada-santo-antonio.png',
}

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

          <div ref={dialogRef} className="safe-bottom relative z-10 w-full max-w-4xl animate-in slide-in-from-bottom-6 fade-in duration-300 sm:zoom-in-95">
            <div className="m-3 overflow-hidden rounded-[1.6rem] border border-cream/20 bg-cream text-foreground shadow-[0_30px_90px_rgba(10,14,7,0.45)] sm:m-5">
              <div className="flex items-start justify-between gap-4 border-b border-primary/15 px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-8">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.32em] text-terracota">Escolha sua La Fontilla</p>
                  <p className="mt-2 font-serif text-3xl font-medium leading-none tracking-[-0.035em] text-primary sm:text-5xl">
                    <span id="unit-selector-title">{copy.title}</span>
                  </p>
                  <p id="unit-selector-description" className="mt-3 max-w-xl text-sm leading-relaxed text-primary/60 sm:text-base">
                    {copy.subtitle} Confira o endereço antes de continuar.
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

              <div className="grid gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-5">
                {UNIT_LIST.map((unit, index) => {
                  const isLast = lastUnit === unit.id
                  const ActionIcon = action === 'order' ? ShoppingBag : action === 'reserve' ? UtensilsCrossed : Navigation
                  return (
                  <button
                    key={unit.id}
                    data-autofocus={unit.id === (lastUnit ?? 'jacarezinho') ? '' : undefined}
                    onClick={() => handleSelect(unit.id)}
                    className="group relative grid min-h-[8.5rem] grid-cols-[6rem_1fr] overflow-hidden rounded-[1.1rem] border border-primary/15 bg-offwhite text-left transition-[background-color,border-color,color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_45px_rgba(32,41,24,0.14)] active:translate-y-0 sm:block sm:min-h-[20rem]"
                  >
                    <span className="relative block h-full min-h-[8.5rem] overflow-hidden sm:h-40 sm:min-h-0">
                      <Image src={UNIT_IMAGES[unit.id]} alt={`Fachada da La Fontilla em ${unit.shortName}`} fill sizes="(max-width: 640px) 96px, 420px" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                      <span className="absolute inset-0 bg-gradient-to-t from-deep/45 to-transparent" />
                      <span className="absolute left-3 top-3 text-[0.58rem] font-bold tracking-[0.25em] text-cream">0{index + 1}</span>
                    </span>
                    <span className="flex min-w-0 flex-col justify-between gap-3 px-4 py-4 sm:min-h-40 sm:px-5 sm:py-5">
                      <span>
                        <span className="flex items-start justify-between gap-3">
                          <span className="font-serif text-xl font-semibold leading-[0.95] tracking-[-0.02em] text-primary sm:text-3xl">{unit.shortName}</span>
                          {isLast && <span className="hidden shrink-0 items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[0.58rem] font-bold uppercase tracking-wide text-primary sm:flex"><Check className="size-3" /> Última escolha</span>}
                        </span>
                        <span className="mt-2 flex items-start gap-1.5 text-[0.7rem] leading-relaxed text-primary/55 sm:text-xs"><MapPin className="mt-0.5 size-3 shrink-0" /> {unit.address[0]}</span>
                      </span>
                      <span className="flex items-center justify-between gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary sm:text-xs">
                        <span className="flex items-center gap-2"><ActionIcon className="size-4 text-terracota" /> {copy.cta}</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </span>
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
