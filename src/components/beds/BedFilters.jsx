import React, { useState } from 'react';
import TabGroup from '../ui/TabGroup';

export default function BedFilters() {
  const [activeFilter, setActiveFilter] = useState('All beds')

  const filters = [
    { id: 'All beds', label: 'All beds', count: 8 },
    { id: 'Available', label: 'Available', count: 2, dotColor: 'bg-success-medium' },
    { id: 'Reserved', label: 'Reserved', count: 1, dotColor: 'bg-neutral-iconLight2' },
    { id: 'Occupied', label: 'Occupied', count: 1, dotColor: 'bg-lavender-icon' },
    { id: 'Not in use', label: 'Not in use', count: 2, dotColor: 'bg-error-medium' },
  ]

  return (
    <TabGroup
      items={filters}
      activeId={activeFilter}
      onChange={setActiveFilter}
      badgeVariant="neutral"
      size="compact"
    />
  )
}