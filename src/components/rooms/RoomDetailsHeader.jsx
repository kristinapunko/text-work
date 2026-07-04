import React from 'react';
import EditIcon from '../icons/EditIcon';
import TrashIcon from '../icons/TrashIcon';
import Button from '../ui/Button';
import PlusIcon from '../icons/PlusIcon';
import IconButton from '../ui/IconButton';

export default function RoomDetailsHeader({ roomName = 'Room № 1', onEditRoom, onCreateBed, onDeleteRoom }) {
  return (
    <div className="w-full flex justify-between items-center select-none font-sans">

      <div className="flex items-center gap-2">
        <h2 className="text-lg font-medium text-lavender-dark">
          {roomName}
        </h2>
        <IconButton variant="ghost" onClick={onEditRoom} aria-label="Edit room name">
          <EditIcon className="text-lavender-dark" />
        </IconButton>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" size="compact" onClick={onCreateBed}>
          <PlusIcon /> Add bed
        </Button>
        <IconButton variant="pressed" onClick={onDeleteRoom} aria-label="Delete room">
          <TrashIcon />
        </IconButton>
      </div>

    </div>
  );
}