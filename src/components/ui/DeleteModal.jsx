import React from 'react'
import Modal from './Modal'
import ModalHeader from './ModalHeader'
import Button from './Button'

export default function DeleteModal({ isOpen, onClose, onConfirm, title, message }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={400}>
      <ModalHeader title={title} />

      <div className="py-6 px-5 flex flex-col gap-7">
        <p className="text-base font-normal text-neutral-textDark">{message}</p>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" size="modal" onClick={onClose}>Cancel</Button>
          <Button variant="danger" size="modal" onClick={onConfirm}>Delete</Button>
        </div>
      </div>
    </Modal>
  )
}