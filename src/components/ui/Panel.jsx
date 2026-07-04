import React from 'react'
import { cn } from '../../utils/cn'

export default function Panel({ className = '', children }) {
  return (
    <div className={cn('bg-white border border-neutral-outlineLight2 rounded-xl px-5 py-4', className)}>
      {children}
    </div>
  )
}