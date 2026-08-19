'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Image from 'next/image'
import { ArrowRight, Check, MapPin, Navigation, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
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

  const value = useMemo(() => ({ open, lastUnit }), [open, lastUnit])
  const copy = action ? ACTION_COPY[action] : null

  return (
    <UnitSelectorContext.Provider value={value}>
      {children}

      <Dialog open={Boolean(action)} onOpenChange={(isOpen) => !isOpen && close()}>
        {action && copy && (
          <DialogContent
            className="safe-bottom top-auto bottom-0 max-h-[calc(100dvh-0.75rem)] w-full max-w-none translate-y-0 overflow-y-auto rounded-b-none rounded-t-[1.6rem] border border-cream/20 bg-cream p-0 text-foreground shadow-[0_30px_90px_rgba(10,14,7,0.45)] ring-0 sm:top-1/2 sm:bottom-auto sm:max-h-[calc(100dvh-2rem)] sm:max-w-4xl sm:-translate-y-1/2 sm:rounded-[1.6rem]"
          >
              <div className="flex items-start justify-between gap-4 border-b border-primary/15 px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-8">
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-terracota">Escolha sua La Fontilla</p>
                  <DialogTitle className="mt-2 font-serif text-3xl font-medium leading-none tracking-[-0.035em] text-primary sm:text-5xl">
                    {copy.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 max-w-xl text-sm leading-relaxed text-primary/65 sm:text-base">
                    {copy.subtitle} Confira o endereço antes de continuar.
                  </DialogDescription>
                </div>
              </div>

              <div className="grid gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-5">
                {UNIT_LIST.map((unit) => {
                  const isLast = lastUnit === unit.id
                  const ActionIcon = action === 'order' ? ShoppingBag : action === 'reserve' ? UtensilsCrossed : Navigation
                  return (
                  <button
                    key={unit.id}
                    onClick={() => handleSelect(unit.id)}
                    className="group relative grid min-h-[9rem] grid-cols-[6.25rem_1fr] overflow-hidden rounded-[1.1rem] border border-primary/15 bg-offwhite text-left outline-none transition-[background-color,border-color,color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_18px_45px_rgba(32,41,24,0.14)] focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber active:translate-y-0 sm:block sm:min-h-[20rem]"
                  >
                    <span className="relative block h-full min-h-[8.5rem] overflow-hidden sm:h-40 sm:min-h-0">
                      <Image src={UNIT_IMAGES[unit.id]} alt={`Fachada da La Fontilla em ${unit.shortName}`} fill sizes="(max-width: 640px) 96px, 420px" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                      <span className="absolute inset-0 bg-gradient-to-t from-deep/45 to-transparent" />
                      <span className="absolute left-3 top-3 text-[0.58rem] font-bold tracking-[0.25em] text-cream">{unit.id === 'jacarezinho' ? 'JAC' : 'SAP'}</span>
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
                        <span className="flex items-center gap-2"><ActionIcon className="size-4 text-terracota" /> {copy.cta}<span className="hidden sm:inline"> — {unit.shortName}</span></span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </span>
                  </button>
                  )
                })}
              </div>
          </DialogContent>
        )}
      </Dialog>
    </UnitSelectorContext.Provider>
  )
}
