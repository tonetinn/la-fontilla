'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Wordmark } from '@/components/wordmark'
import { useUnitSelector } from '@/components/unit-selector'

const NAV = [
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Espaço Kids', href: '#kids' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Avaliações', href: '#avaliacoes' },
]

export function SiteHeader() {
  const { open } = useUnitSelector()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const menuTrigger = menuTriggerRef.current
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      menuTrigger?.focus()
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'border-b border-deep-foreground/10 bg-deep/95 text-deep-foreground backdrop-blur-md'
          : 'bg-transparent text-deep-foreground',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="transition-opacity hover:opacity-80" aria-label="La Fontilla — início">
          <Wordmark tagline={false} className="text-cream" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium tracking-wide text-cream/90 transition-colors hover:text-cream"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => open('reserve')}
            className="rounded-full border border-cream/40 px-5 py-2.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:border-cream hover:bg-cream/10"
          >
            Reservar
          </button>
          <button
            onClick={() => open('order')}
            className="rounded-full bg-amber px-6 py-2.5 text-sm font-bold tracking-wide text-deep shadow-lg shadow-deep/30 transition-transform hover:-translate-y-0.5"
          >
            Pedir agora
          </button>
        </div>

        <button
          ref={menuTriggerRef}
          className="rounded-full p-2 text-cream lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="size-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-deep text-cream lg:hidden" role="dialog" aria-modal="true" aria-label="Menu principal">
          <div className="flex items-center justify-between px-5 py-4">
            <Wordmark tagline={false} className="text-cream" />
            <button
              ref={closeButtonRef}
              className="rounded-full p-2"
              aria-label="Fechar menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 pt-6" aria-label="Navegação principal (mobile)">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-cream/10 py-4 font-serif text-3xl font-medium tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="safe-bottom mt-auto flex flex-col gap-3 px-5 pt-8">
            <button
              onClick={() => {
                setMenuOpen(false)
                open('reserve')
              }}
              className="rounded-full border border-cream/40 py-4 text-base font-semibold tracking-wide"
            >
              Reservar mesa
            </button>
            <button
              onClick={() => {
                setMenuOpen(false)
                open('order')
              }}
              className="rounded-full bg-amber py-4 text-base font-bold tracking-wide text-deep"
            >
              Pedir agora
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
