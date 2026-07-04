import React from 'react'
import RoomsIcon from '../icons/RoomsIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'
import BedsIcon from '../icons/BedsIcon'
import Button from '../ui/Button'
import StatBadge from '../ui/StatBadge'

export default function FacilityHeader() {
  return (
    <div className="w-full bg-surface-primary rounded-xl border border-neutral-outlineLight2 p-4 flex justify-between items-center font-sans select-none">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1.5">
          <h1 className="font-medium text-2xl text-neutral-textDark">Facility Name</h1>
          <span className="bg-neutral-outlineLight2 text-lavender-dark font-medium text-xs p-1 rounded uppercase tracking-wider">
            YRC
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium">
          <div className="flex items-center gap-1">
            <span className="text-neutral-textMedium text-sm font-normal">Status:</span>
            <StatBadge color="success" dot="bg-success-medium">Active</StatBadge>
          </div>

          <div className="flex items-center gap-0.5">
            <span className="text-neutral-textMedium text-sm font-normal">Capacity:</span>
            <StatBadge icon={RoomsIcon} color="lavender">4 rooms</StatBadge>
            <StatBadge icon={BedsIcon} color="mixed">33 / 44 beds</StatBadge>
          </div>
        </div>
      </div>

      <Button variant="outline" size="default">
        Actions <ChevronDownIcon aria-hidden="true" />
      </Button>
    </div>
  )
}