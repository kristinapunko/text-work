import RoomDetailsHeader from './RoomDetailsHeader'
import Divider from '../ui/Divider'
import BedFilters from '../beds/BedFilters'
import BedCard from '../beds/BedCard'
import EmptyState from '../ui/EmptyState'

export default function RoomDetails({
  roomName,
  beds,
  onDeleteRoomTrigger,
  onDeleteBedTrigger,
  onCreateBedTrigger,
  onEditRoomTrigger,
  onEditBedTrigger,
}) {
  return (
    <div className="flex flex-col gap-4 w-full h-full min-h-0">
      <RoomDetailsHeader
        roomName={roomName}
        onDeleteRoom={onDeleteRoomTrigger}
        onEditRoom={onEditRoomTrigger}
        onCreateBed={onCreateBedTrigger}
      />
      <Divider />
      <BedFilters />

      {beds.length > 0 ? (
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-2 gap-3.5 w-full">
            {beds.map((bed) => (
              <BedCard
                key={bed.id}
                bedNumber={bed.number}
                status={bed.status}
                resident={bed.resident}
                reason={bed.reason}
                onEdit={() => onEditBedTrigger(bed.id, bed.number)}
                onDelete={() => onDeleteBedTrigger(bed.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState message="No beds have been added to this room yet" />
      )}
    </div>
  )
}