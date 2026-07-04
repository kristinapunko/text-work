import React from 'react'

const STYLES = {
  lavender: 'bg-lavender-light text-lavender-dark',
  success: 'bg-success-light text-success-medium',
  mixed: 'bg-success-light text-lavender-dark',
}

export default function StatBadge({ icon: Icon, dot, color = 'lavender', children }) {
  return (
    <div className={`flex items-center gap-1 p-1 rounded-md text-sm font-medium ${STYLES[color]}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />}
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </div>
  )
}