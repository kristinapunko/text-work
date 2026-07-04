import React from 'react'
import RoomsIcon from '../icons/RoomsIcon'
import RoomCard from './RoomCard'
import Divider from '../ui/Divider'
import EmptyState from '../ui/EmptyState'
import Button from '../ui/Button'
import PlusIcon from '../icons/PlusIcon'

export default function RoomsList({ rooms, selectedId, onSelect, onCreateRoomTrigger }) {
  return (
    <div className="flex flex-shrink-0 h-full flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-medium text-lavender-dark">
          <RoomsIcon width={20} height={20} />
          <span>Rooms</span>
        </div>
        <Button variant="secondary" size="compact" onClick={onCreateRoomTrigger}>
          <PlusIcon /> Add room
        </Button>
      </div>

      <Divider />

      <div className="flex-1 overflow-y-auto pr-2 mt-4 flex flex-col gap-2.5 custom-scrollbar">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              beds={room.currentBeds}
              maxBeds={room.maxBeds}
              isSelected={room.id === selectedId}
              onClick={() => onSelect(room.id)}
            />
          ))
        ) : (
          <EmptyState message="No rooms have been added yet" />
        )}
      </div>
    </div>
  )
}