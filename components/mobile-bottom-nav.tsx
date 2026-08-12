'use client'

import { MapPin, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { useUnitSelector } from '@/components/unit-selector'
import type { ActionKind } from '@/lib/data'

const ITEMS: { kind: ActionKind; label: string; icon: typeof ShoppingBag; primary?: boolean }[] = [
  { kind: 'order', label: 'Pedir', icon: ShoppingBag, primary: true },
  { kind: 'reserve', label: 'Reservar', icon: UtensilsCrossed },
  { kind: 'maps', label: 'Rotas', icon: MapPin },
]

export function MobileBottomNav() {
  const { open } = useUnitSelector()

  return (
    <nav
      aria-label="Ações rápidas"
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="mx-3 flex items-center gap-1.5 rounded-[1.15rem] border border-cream/10 bg-deep/95 p-1.5 shadow-[0_12px_40px_rgba(16,21,11,0.3)] backdrop-blur-md">
        {ITEMS.map(({ kind, label, icon: Icon, primary }) => (
          <button
            key={kind}
            onClick={() => open(kind)}
            className={
              primary
                ? 'flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[0.85rem] bg-amber px-2 text-sm font-bold text-deep transition-colors active:bg-amber/85'
                : 'flex min-h-12 flex-1 items-center justify-center gap-2 rounded-[0.85rem] px-2 text-xs font-semibold text-cream/85 transition-colors hover:bg-cream/10 active:bg-cream/15'
            }
          >
            <Icon className={primary ? 'size-4' : 'size-[1.1rem]'} />
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
