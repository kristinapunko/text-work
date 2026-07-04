import React from 'react'
import EmployeesIcon from '../icons/EmployeesIcon'
import FacilitiesIcon from '../icons/FacilitiesIcon'
import UserAvatarIcon from '../icons/UserAvatarIcon'
import Logo from '../icons/Logo'

const navItems = [
  { label: 'Employees', icon: EmployeesIcon, href: '#employees' },
  { label: 'Facilities', icon: FacilitiesIcon, href: '#facilities' },
]

const Sidebar = ({ activeItem = 'Facilities' }) => {
  return (
    <aside
      className="w-sidebar h-screen bg-stone-surface border-r border-neutral-outlineLight flex flex-col justify-between font-sans select-none sticky top-0"
    >
      <div>
        <div className="my-4 py-4 px-5">
          <Logo />
        </div>

        <nav aria-label="Main navigation">
          <ul className="space-y-1 list-none m-0 p-2.5">
            {navItems.map(({ label, icon: Icon, href }) => {
              const isActive = label === activeItem
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full flex items-center text-neutral-textDark gap-2 px-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${isActive
                        ? 'bg-neutral-activeFill'
                        : 'hover:bg-neutral-hoverFill'
                      }`}
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="border-t border-neutral-outlineLight px-2.5 py-5 flex items-center gap-2">
        <div className="flex-shrink-0">
          <UserAvatarIcon className='text-surface-primary' />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-medium text-sm text-neutral-textDark truncate">Full Name</span>
          <span className="font-normal text-xs text-neutral-textMedium truncate">exampleemail@gmail.com</span>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar