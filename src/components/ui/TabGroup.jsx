import React from 'react'
import { cn } from '../../utils/cn'

const BADGE_VARIANTS = {
  accent: 'bg-lavender-cont text-white',
  neutral: 'bg-lavender-containerLight text-neutral-textDark',
}

const SIZES = {
  default: 'px-6 py-3 gap-2 text-base',
  compact: 'px-2.5 py-1.5 gap-1 text-sm',
}

export default function TabGroup({
  items,
  activeId,
  onChange,
  equalWidth = false,
  badgeVariant = 'neutral',
  size = 'default',
}) {
  return (
    <div className="flex w-max bg-white rounded-lg overflow-hidden border-2 border-lavender-containerLight select-none font-sans">
      {items.map((item, index) => {
        const isActive = activeId === item.id
        const isLast = index === items.length - 1

        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={cn(
              'flex items-center justify-center font-medium transition-all relative outline-none',
              SIZES[size],
              equalWidth && 'flex-1',
              isActive
                ? 'bg-overlay-lavenderHover text-neutral-textDark border-b-0'
                : 'text-neutral-textDark bg-white hover:bg-neutral-hoverFill border-b-2 border-b-lavender-containerLight'
            )}
          >
            {item.dotColor && (
              <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0 ml-1', item.dotColor)} />
            )}

            <span className="whitespace-nowrap">{item.label}</span>

            {typeof item.count === 'number' && (
              <span className={cn(
                'font-medium text-badgeXs px-1 py-0.5 rounded-md min-w-tabBadge h-4 flex items-center justify-center flex-shrink-0',
                BADGE_VARIANTS[badgeVariant]
              )}>
                {item.count}
              </span>
            )}

            {!isLast && (
              <div className="absolute right-0 inset-y-0 w-0.5 bg-lavender-containerLight" />
            )}
          </button>
        )
      })}
    </div>
  )
}