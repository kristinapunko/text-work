import React, { useState, useRef, useEffect } from 'react'
import BedsIcon from '../icons/BedsIcon'
import MoreVerticalIcon from '../icons/MoreVerticalIcon'
import IconButton from '../ui/IconButton'

const STATUS_STYLES = {
  Available: 'bg-pine-30 text-white',
  Reserved: 'bg-neutral-outlineLight2 text-neutral-textLighterDark',
  Occupied: 'bg-lavender-light text-lavender-iconLight',
  'Not in use': 'bg-error-light text-error-medium',
}

export default function BedCard({ bedNumber = '1', status = 'Available', resident, reason, onEdit, onDelete }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="w-full hover:bg-neutral-activeFill border border-neutral-outlineLight rounded-lg p-4 flex flex-col gap-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5 text-base text-lavender-dark">
          <BedsIcon className="w-6 h-6" />
          <span>Bed {bedNumber}</span>
        </div>

        <div className="relative" ref={menuRef}>
          <IconButton
            variant="ghost"
            active={isMenuOpen}
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MoreVerticalIcon className="text-lavender-dark" />
          </IconButton>

          {isMenuOpen && (
            <div className="absolute -right-10 top-8 w-menuDropdown bg-white border border-neutral-outlineLight rounded-md shadow-lg z-10 animate-in fade-in duration-100">
              <button
                onClick={() => { onEdit(); setIsMenuOpen(false) }}
                className="w-full text-left py-1.5 px-3 text-sm font-medium text-neutral-textDark transition-colors"
              >
                Edit
              </button>
              <hr className="border-t border-neutral-outlineLight my-1" />
              <button
                onClick={() => { onDelete(); setIsMenuOpen(false) }}
                className="w-full text-left py-1.5 px-3 text-sm font-medium text-error-medium transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_2fr] gap-4 items-start w-full">
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-sm font-medium text-lavender-iconLight">Status</span>
          <span className={`w-max text-base font-medium my-1.5 px-1.5 py-0.5 rounded-md border border-surface-primary ${STATUS_STYLES[status] || STATUS_STYLES.Available}`}>
            {status}
          </span>
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          {status === 'Not in use' ? (
            <>
              <span className="text-sm font-medium text-lavender-dark">Reason</span>
              <p className="text-base font-normal text-neutral-textDark my-2 line-clamp-1 overflow-hidden break-words">
                {reason || 'No reason provided'}
              </p>
            </>
          ) : (
            <>
              <span className="text-sm font-medium text-lavender-iconLight">Resident</span>
              {resident ? (
                <div className="flex items-center gap-3">
                  <img
                    src={resident.avatar || 'https://via.placeholder.com/32'}
                    alt={resident.name}
                    className="w-8 h-8 rounded-md object-cover border border-neutral-outlineLight"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-neutral-textDark">{resident.name}</span>
                    <span className="font-normal text-xs text-neutral-textLighterDark">
                      {resident.birthDate} · {resident.age} years old
                    </span>
                  </div>
                </div>
              ) : (
                <span className="font-normal text-base text-neutral-textDark">-</span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}