import React from 'react'
import { cn } from '../../utils/cn'

export default function TextButton({ onClick, children, className = '', ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-6 text-base font-medium text-neutral-textDark hover:opacity-70 transition-opacity',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}