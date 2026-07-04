import Sidebar from './components/layout/Sidebar'
import TopBar from './components/layout/TopBar'
import FacilityHeader from './components/facility/FacilityHeader'
import FacilityTabs from './components/facility/FacilityTabs'
import RoomsManagement from './components/rooms/RoomsManagement'

function App() {
  return (
    <div className="flex w-screen h-screen bg-surface-secondary overflow-hidden">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col gap-4 px-6 pt-6 overflow-y-auto">
        <TopBar />
        <FacilityHeader />
        <FacilityTabs />

        <main className="flex-1 min-h-0 flex mb-2">
          <RoomsManagement />
        </main>
      </div>
    </div>
  )
}

export default App