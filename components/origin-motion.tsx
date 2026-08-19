'use client'

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

type RevealDirection =
  | 'center-horizontal'
  | 'left-to-right'
  | 'right-to-left'
  | 'top-to-bottom'
  | 'bottom-to-top'

const REVEAL_MASKS: Record<RevealDirection, string> = {
  'center-horizontal': 'inset(0 50% 0 50%)',
  'left-to-right': 'inset(0 100% 0 0)',
  'right-to-left': 'inset(0 0 0 100%)',
  'top-to-bottom': 'inset(0 0 100% 0)',
  'bottom-to-top': 'inset(100% 0 0 0)',
}

const REVEAL_OFFSETS: Record<RevealDirection, string> = {
  'center-horizontal': 'translate3d(0, 0, 0)',
  'left-to-right': 'translate3d(-18px, 0, 0)',
  'right-to-left': 'translate3d(18px, 0, 0)',
  'top-to-bottom': 'translate3d(0, -18px, 0)',
  'bottom-to-top': 'translate3d(0, 18px, 0)',
}

export function MaskReveal({
  children,
  className,
  direction = 'bottom-to-top',
  delay = 0,
  duration = 950,
}: {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || typeof IntersectionObserver === 'undefined') return

    element.style.clipPath = REVEAL_MASKS[direction]
    element.style.opacity = '0.01'
    element.style.transform = REVEAL_OFFSETS[direction]
    element.style.transition = 'none'

    let revealed = false
    const reveal = () => {
      if (revealed) return
      revealed = true
      requestAnimationFrame(() => {
        element.style.transition = [
          `clip-path ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          `opacity ${Math.min(duration, 650)}ms ease-out ${delay}ms`,
        ].join(', ')
        element.style.clipPath = 'inset(0 0 0 0)'
        element.style.opacity = '1'
        element.style.transform = 'translate3d(0, 0, 0)'
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        reveal()
        observer.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    const rect = element.getBoundingClientRect()
    const immediatelyVisible = rect.top < window.innerHeight * 1.05 && rect.bottom > 0
    const timer = immediatelyVisible ? window.setTimeout(reveal, 40) : undefined
    if (!immediatelyVisible) observer.observe(element)

    return () => {
      if (timer) window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [delay, direction, duration])

  return (
    <div ref={ref} className={cn('will-change-[clip-path,transform,opacity] motion-reduce:!transform-none motion-reduce:!opacity-100', className)}>
      {children}
    </div>
  )
}

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  contentClassName?: string
  strength?: number
  sweepClassName?: string
}

export function MagneticButton({
  children,
  className,
  contentClassName,
  strength = 0.1,
  sweepClassName = 'bg-cream',
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  type = 'button',
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const sweepRef = useRef<HTMLSpanElement>(null)
  const animationEnabled = useRef(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    animationEnabled.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const positionSweep = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    const sweep = sweepRef.current
    if (!button || !sweep) return
    const rect = button.getBoundingClientRect()
    const diameter = Math.hypot(rect.width, rect.height) * 2
    sweep.style.width = `${diameter}px`
    sweep.style.height = `${diameter}px`
    sweep.style.left = `${event.clientX - rect.left - diameter / 2}px`
    sweep.style.top = `${event.clientY - rect.top - diameter / 2}px`
  }

  return (
    <button
      {...props}
      ref={buttonRef}
      type={type}
      onPointerEnter={(event) => {
        onPointerEnter?.(event)
        if (!animationEnabled.current) return
        positionSweep(event)
        setHovered(true)
      }}
      onPointerMove={(event) => {
        onPointerMove?.(event)
        if (!animationEnabled.current || !buttonRef.current) return
        const rect = buttonRef.current.getBoundingClientRect()
        const x = (event.clientX - (rect.left + rect.width / 2)) * strength
        const y = (event.clientY - (rect.top + rect.height / 2)) * strength
        buttonRef.current.style.translate = `${x}px ${y}px`
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event)
        if (buttonRef.current) buttonRef.current.style.translate = '0 0'
        setHovered(false)
      }}
      className={cn(
        'group relative isolate overflow-hidden transition-[translate,transform,box-shadow,background-color,color,border-color] duration-300 motion-reduce:!translate-x-0 motion-reduce:!translate-y-0',
        className,
      )}
    >
      <span
        ref={sweepRef}
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:hidden',
          hovered ? 'scale-100' : 'scale-0',
          sweepClassName,
        )}
      />
      <span className={cn('relative z-10 flex h-full w-full items-center justify-center gap-3', contentClassName)}>
        {children}
      </span>
    </button>
  )
}

export function DirectionHoverText({
  text,
  className,
  accentClassName = 'text-amber',
}: {
  text: string
  className?: string
  accentClassName?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [direction, setDirection] = useState<'none' | 'top' | 'bottom'>('none')
  const translate = direction === 'top' ? 'translateY(0)' : direction === 'bottom' ? 'translateY(-2em)' : 'translateY(-1em)'

  return (
    <span
      ref={ref}
      aria-label={text}
      onMouseEnter={(event) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        setDirection(event.clientY - rect.top < rect.height / 2 ? 'top' : 'bottom')
      }}
      onMouseLeave={() => setDirection('none')}
      className={cn('relative inline-block h-[1em] overflow-hidden align-middle leading-none', className)}
    >
      <span
        aria-hidden="true"
        className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:!transform-none"
        style={{ transform: translate }}
      >
        <span className={cn('flex h-[1em] items-center whitespace-nowrap leading-none', accentClassName)}>{text}</span>
        <span className="flex h-[1em] items-center whitespace-nowrap leading-none">{text}</span>
        <span className={cn('flex h-[1em] items-center whitespace-nowrap leading-none', accentClassName)}>{text}</span>
      </span>
    </span>
  )
}
