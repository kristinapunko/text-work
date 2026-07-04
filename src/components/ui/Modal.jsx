import React, { useEffect } from 'react'

export default function Modal({ isOpen, onClose, width = 400, children }) {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-overlay-scrim backdrop-blur-sm select-none font-sans"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: `${width}px` }}
        className="w-full bg-white rounded-xl overflow-hidden border border-neutral-outlineLight animate-in fade-in zoom-in-95 duration-150"
      >
        {children}
      </div>
    </div>
  )
}