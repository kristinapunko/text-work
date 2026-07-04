import React from 'react'
import Modal from './Modal'
import ModalHeader from './ModalHeader'
import Button from './Button'

export default function FormModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  subtitle,
  label,
  placeholder,
  value,
  onChange,
  icon: Icon,
  submitLabel = 'Save',
  requireValue = false,
}) {
  const isSubmitDisabled = requireValue && !value.trim()

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={400}>
      <ModalHeader title={title} subtitle={subtitle} />

      <div className="py-6 flex flex-col gap-7">
        <div className="flex flex-col gap-2 px-5 ">
          <label className="text-sm font-medium text-neutral-textDark">{label}</label>

          <div className="relative w-full">
            {Icon && (
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-lavender-iconLight">
                <Icon width={20} height={20} />
              </div>
            )}
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className={`
                w-full py-2.5 rounded-lg bg-neutral-activeFill text-neutral-textDark font-normal text-base
                border-b-4 border-neutral-outlineLight outline-none transition-all
                placeholder:text-neutral-textMedium
                focus:bg-neutral-hoverFill focus:border-b-lavender-cont
                ${Icon ? 'pl-11 pr-4' : 'px-4'}
              `}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-5 border-t border-neutral-outlineLight px-5">
          <Button variant="secondary" size="modal" onClick={onClose}>Cancel</Button>
          <Button
            variant="primary"
            size={requireValue ? 'compact' : 'modal'}
            onClick={onSubmit}
            disabled={isSubmitDisabled}
          >
            {submitLabel}
          </Button>
        </div>
      </div>
    </Modal>
  )
}