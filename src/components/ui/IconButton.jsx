import React from 'react'
import { cn } from '../../utils/cn'

const VARIANTS = {
  pressed: `
    bg-white text-lavender-dark border-t-2 border-x-2 border-b-4 border-lavender-outlineMedium
    hover:translate-y-1 hover:border-b-2
    active:translate-y-2 active:border-b-0
  `,
  ghost: `
    text-neutral-textMedium
    hover:bg-overlay-lavenderHover hover:text-lavender-dark
    active:bg-overlay-lavenderPressed
  `,
}

export default function IconButton({
  onClick,
  children,
  variant = 'pressed',
  active = false,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'flex items-center justify-center p-1.5 rounded-lg transition-all duration-100 outline-none',
        VARIANTS[variant],
        active && 'bg-overlay-lavenderPressed text-lavender-dark',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}