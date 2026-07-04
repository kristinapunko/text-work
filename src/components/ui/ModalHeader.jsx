import React from 'react'
import BookIcon from '../icons/BookIcon'
import { cn } from '../../utils/cn'

export default function ModalHeader({ title, subtitle, className = '' }) {
  return (
    <div className={cn('flex justify-between items-start p-7 bg-surface-secondary', className)}>
      <div className="flex flex-col gap-1">
        <h3 id="modal-title" className="text-xl font-semibold text-neutral-textDark">{title}</h3>
        {subtitle && (
          <p className="text-sm font-normal text-neutral-textMedium max-w-modalSubtitle">
            {subtitle}
          </p>
        )}
      </div>
      <BookIcon width={20} height={20} aria-hidden="true" />
    </div>
  )
}