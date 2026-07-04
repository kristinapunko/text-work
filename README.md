# Rooms & Beds Management UI

A React interface for managing rooms and beds, built with Vite and Tailwind CSS.

---

## Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (extended with project-specific color and spacing tokens)
* **Icons:** Inline SVG components 

---

## Project Structure

```text
src/
├── assets/                  # Static images & avatars
├── components/
│   ├── ui/                  # Reusable UI primitives
│   │                        # Button, IconButton, Modal, FormModal,
│   │                        # DeleteModal, TabGroup, Panel,
│   │                        # StatBadge, EmptyState, Divider
│   ├── icons/               # SVG icon components 
│   ├── layout/              # Sidebar, TopBar
│   ├── facility/            # FacilityHeader, FacilityTabs
│   ├── rooms/               # RoomsManagement, RoomsList,
│   │                        # RoomCard, RoomDetails,
│   │                        # RoomDetailsHeader
│   └── beds/                # BedCard, BedFilters
├── utils/
│   └── cn.js                # Minimal className utility
├── App.jsx
└── main.jsx
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kristinapunko/text-work.git
cd text-work
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---