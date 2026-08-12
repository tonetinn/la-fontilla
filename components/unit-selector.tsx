'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ArrowRight, MapPin, X } from 'lucide-react'
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

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'jacarezinho' || stored === 'santo-antonio') {
        setLastUnit(stored)
      }
    } catch {
      // ignora indisponibilidade de localStorage
    }
  }, [])

  const open = useCallback((a: ActionKind) => setAction(a), [])
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
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
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
        >
          <button
            aria-label="Fechar"
            onClick={close}
            className="absolute inset-0 cursor-default bg-deep/70 backdrop-blur-sm animate-in fade-in duration-300"
          />

          <div className="relative z-10 w-full max-w-lg animate-in slide-in-from-bottom-6 fade-in duration-300 sm:zoom-in-95">
            <div className="m-3 overflow-hidden rounded-2xl border border-primary/20 bg-cream text-foreground shadow-2xl sm:m-4">
              <div className="flex items-start justify-between gap-4 border-b border-border px-6 pt-6 pb-4">
                <div>
                  <p className="font-serif text-2xl font-semibold leading-none tracking-tight text-primary sm:text-3xl">
                    <span id="unit-selector-title">{copy.title}</span>
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{copy.subtitle}</p>
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
                {UNIT_LIST.map((unit) => (
                  <button
                    key={unit.id}
                    onClick={() => handleSelect(unit.id)}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-primary/15 bg-offwhite px-5 py-4 text-left transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-primary transition-colors group-hover:text-primary-foreground" />
                      <span>
                        <span className="block font-serif text-lg font-semibold leading-tight">
                          {unit.shortName}
                        </span>
                        <span className="mt-0.5 block text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/75">
                          {copy.cta} {unit.shortName}
                        </span>
                      </span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </button>
                ))}
              </div>

              {lastUnit && (
                <p className="px-6 pb-5 text-center text-xs text-muted-foreground">
                  Última escolha: {UNITS[lastUnit].shortName}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </UnitSelectorContext.Provider>
  )
}
