import React from 'react'
import BedsIcon from '../icons/BedsIcon'
import LockIcon from '../icons/LockIcon'

export default function RoomCard({ name, beds, maxBeds, isSelected, onClick }) {
  const isFull = Number(beds) === Number(maxBeds)

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex justify-between items-center p-4 rounded-lg border
        transition-all duration-150 select-none font-sans
        ${isSelected
          ? 'bg-lavender-light border-lavender-outlineMedium shadow-sm'
          : 'bg-surface-primary border-neutral-outlineLight hover:bg-overlay-lavenderHover hover:border-lavender-outlineMedium'
        }
      `}
    >
      <span className="font-medium text-base text-lavender-dark">№ {name}</span>

      <div className={`
        flex items-center gap-1 p-1 rounded-md text-xs text-lavender-dark font-medium border border-surface-primary
        ${isFull ? 'bg-error-light' : 'bg-success-light'}
      `}>
        {isFull ? <BedsIcon /> : <LockIcon/>}
        <span>{beds} / {maxBeds} beds</span>
      </div>
    </button>
  )
}