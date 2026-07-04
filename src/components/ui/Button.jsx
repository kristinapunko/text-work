import React from 'react'
import { cn } from '../../utils/cn'

const BASE = `
  inline-flex items-center justify-center gap-2 font-medium select-none
  border-t-2 border-x-2 border-b-4
  transition-all duration-100 outline-none
  hover:translate-y-1 hover:border-b-2
  active:translate-y-2 active:border-b-0
  disabled:opacity-50 disabled:pointer-events-none
`

const VARIANTS = {
  primary: 'bg-success-medium text-lavender-dark border-overlay-pressBorder',
  danger: 'bg-error-medium text-lavender-dark border-overlay-pressBorder',
  secondary: 'bg-lavender-light text-lavender-dark border-t-transparent border-x-transparent border-lavender-containerLight hover:bg-overlay-lavenderHover active:bg-overlay-lavenderPressed',
  outline: 'bg-white text-lavender-dark border-lavender-outlineMedium',
}

const SIZES = {
  modal: 'w-modalButton h-10 rounded-lg text-base',
  compact: 'px-4 py-1.5 rounded-lg text-sm',
  default: 'px-4 py-2 rounded-lg text-base',
}

export default function Button({
  variant = 'secondary',
  size = 'default',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}