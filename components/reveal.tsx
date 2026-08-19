'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(true)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined') return

    const rect = el.getBoundingClientRect()
    if (rect.top <= window.innerHeight * 0.94) return

    setVisible(false)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    const fallback = window.setTimeout(() => setVisible(true), 1800)
    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
