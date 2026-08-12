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
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="mx-3 mb-3 flex items-center gap-2 rounded-2xl border border-cream/10 bg-deep/95 p-2 shadow-2xl backdrop-blur-md">
        {ITEMS.map(({ kind, label, icon: Icon, primary }) => (
          <button
            key={kind}
            onClick={() => open(kind)}
            className={
              primary
                ? 'flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber py-3 text-sm font-bold text-deep'
                : 'flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-xs font-semibold text-cream/85 transition-colors hover:bg-cream/10'
            }
          >
            <Icon className={primary ? 'size-4' : 'size-5'} />
            {label}
          </button>
        ))}
      </div>
    </nav>
  )
}
