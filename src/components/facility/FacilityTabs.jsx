import React, { useState } from 'react';
import TabGroup from "../ui/TabGroup"

export default function FacilityTabs() {
  const [activeTab, setActiveTab] = useState('Rooms & Beds')

  const tabs = [
    { id: 'Overview', label: 'Overview' },
    { id: 'Rooms & Beds', label: 'Rooms & Beds' },
    { id: 'Employees', label: 'Employees', count: 35 },
    { id: 'Notes', label: 'Notes', count: 0 },
  ]

  return (
    <TabGroup
      items={tabs}
      activeId={activeTab}
      onChange={setActiveTab}
      equalWidth
      badgeVariant="accent"
      size="default"
    />
  )
}