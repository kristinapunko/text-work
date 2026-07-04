import React, { useState } from 'react'
import RoomsList from './RoomsList'
import RoomDetails from './RoomDetails'
import DeleteModal from '../ui/DeleteModal'
import FormModal from '../ui/FormModal'
import Panel from '../ui/Panel'
import RoomsIcon from '../icons/RoomsIcon'
import BedsIcon from '../icons/BedsIcon'
import annTerryAvatar from '../../assets/images/ann-terry.png'

const STATIC_ROOMS = [
  { id: 1, name: '1', currentBeds: 2, maxBeds: 8 },
  { id: 2, name: '2', currentBeds: 4, maxBeds: 12 },
  { id: 3, name: '3', currentBeds: 12, maxBeds: 12 },
  { id: 4, name: '4', currentBeds: 11, maxBeds: 12 },
]

const STATIC_BEDS = {
  1: [
    { id: 11, number: '1', status: 'Available', resident: null },
    { id: 12, number: '2', status: 'Available', resident: null },
  ],
  2: [
    { id: 21, number: '1', status: 'Available', resident: null },
    { id: 22, number: '2', status: 'Available', resident: null },
    {
      id: 23,
      number: '3',
      status: 'Reserved',
      resident: { name: 'Ann Terry', birthDate: '20/08/2012', age: 14, avatar: annTerryAvatar },
    },
    {
      id: 24,
      number: '4',
      status: 'Occupied',
      resident: { name: 'Oleh Bondar', birthDate: '03/05/2015', age: 11, avatar: annTerryAvatar },
    },
  ],
  3: [
    { id: 31, number: '1', status: 'Not in use', reason: 'Bed frame is damaged and needs to be replaced.' },
    { id: 32, number: '2', status: 'Not in use', reason: 'Bed frame is damaged and needs to be replaced.' },
  ],
  4: [
    { id: 41, number: '1', status: 'Available', resident: null },
    { id: 42, number: '2', status: 'Occupied', resident: { name: 'David Brown', birthDate: '14/01/2013', age: 13, avatar: annTerryAvatar } },
  ],
}

export default function RoomsManagement() {
  const [selectedRoomId, setSelectedRoomId] = useState(2)

  const currentRoom = STATIC_ROOMS.find((r) => r.id === selectedRoomId)
  const currentBeds = STATIC_BEDS[selectedRoomId] ?? []

  const [isDeleteRoomOpen, setIsDeleteRoomOpen] = useState(false)
  const [isDeleteBedOpen, setIsDeleteBedOpen] = useState(false)
  const [isCreateRoomOpen, setIsCreateRoomOpen] = useState(false)
  const [isCreateBedOpen, setIsCreateBedOpen] = useState(false)
  const [isEditRoomOpen, setIsEditRoomOpen] = useState(false)
  const [isEditBedOpen, setIsEditBedOpen] = useState(false)

  const [roomNameInput, setRoomNameInput] = useState('')
  const [newRoomInput, setNewRoomInput] = useState('')
  const [bedNameInput, setBedNameInput] = useState('')
  const [newBedInput, setNewBedInput] = useState('')

  return (
    <div className="flex w-full h-full gap-4 items-stretch font-sans select-none">

      <Panel className="w-roomsList flex-shrink-0 h-full">
        <RoomsList
          rooms={STATIC_ROOMS}
          selectedId={selectedRoomId}
          onSelect={setSelectedRoomId}
          onCreateRoomTrigger={() => {
            setNewRoomInput('')
            setIsCreateRoomOpen(true)
          }}
        />
      </Panel>

      {currentRoom && (
        <Panel className="flex-1 h-full">
          <RoomDetails
            roomName={`Room № ${currentRoom.name}`}
            beds={currentBeds}
            onDeleteRoomTrigger={() => setIsDeleteRoomOpen(true)}
            onDeleteBedTrigger={() => setIsDeleteBedOpen(true)}
            onCreateBedTrigger={() => {
              setNewBedInput('')
              setIsCreateBedOpen(true)
            }}
            onEditRoomTrigger={() => {
              setRoomNameInput(currentRoom.name)
              setIsEditRoomOpen(true)
            }}
            onEditBedTrigger={(_, currentNumber) => {
              setBedNameInput(currentNumber)
              setIsEditBedOpen(true)
            }}
          />
        </Panel>
      )}

      <DeleteModal
        isOpen={isDeleteRoomOpen}
        onClose={() => setIsDeleteRoomOpen(false)}
        onConfirm={() => setIsDeleteRoomOpen(false)}
        title="Delete room?"
        message="Are you sure you want to delete this room?"
      />

      <DeleteModal
        isOpen={isDeleteBedOpen}
        onClose={() => setIsDeleteBedOpen(false)}
        onConfirm={() => setIsDeleteBedOpen(false)}
        title="Delete bed?"
        message="Are you sure you want to delete this bed?"
      />

      <FormModal
        isOpen={isEditRoomOpen}
        onClose={() => setIsEditRoomOpen(false)}
        onSubmit={() => setIsEditRoomOpen(false)}
        title="Edit room"
        label="Room Name"
        value={roomNameInput}
        onChange={setRoomNameInput}
        icon={RoomsIcon}
        submitLabel="Save"
      />

      <FormModal
        isOpen={isEditBedOpen}
        onClose={() => setIsEditBedOpen(false)}
        onSubmit={() => setIsEditBedOpen(false)}
        title="Edit bed"
        label="Bed Name"
        value={bedNameInput}
        onChange={setBedNameInput}
        icon={BedsIcon}
        submitLabel="Save"
      />

      <FormModal
        isOpen={isCreateRoomOpen}
        onClose={() => setIsCreateRoomOpen(false)}
        onSubmit={() => setIsCreateRoomOpen(false)}
        title="Add room"
        subtitle="Fill in the required information to create a new room."
        label="Room Name"
        placeholder="e.g. Room № 1"
        value={newRoomInput}
        onChange={setNewRoomInput}
        icon={RoomsIcon}
        submitLabel="Add"
        requireValue
      />

      <FormModal
        isOpen={isCreateBedOpen}
        onClose={() => setIsCreateBedOpen(false)}
        onSubmit={() => setIsCreateBedOpen(false)}
        title="Add bed"
        subtitle="Fill in the required information to create a new bed."
        label="Bed Name"
        placeholder="e.g. Bed 1"
        value={newBedInput}
        onChange={setNewBedInput}
        icon={BedsIcon}
        submitLabel="Add"
        requireValue
      />
    </div>
  )
}