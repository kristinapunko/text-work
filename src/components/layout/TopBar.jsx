import React from 'react';
import FacilitiesIcon from '../icons/FacilitiesIcon';
import BreadcrumbSeparator from '../icons/BreadcrumbSeparator';
import CloseIcon from '../icons/CloseIcon';
import TextButton from '../ui/TextButton';

export default function TopBar({
  facilityName = 'Facility Name',
  onClose,
  className = ""
}) {
  return (
    <div className={`w-full py-2.5 flex justify-between items-center select-none font-sans ${className}`}>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm font-medium">

          <li className="flex items-center">
            <a
              href="#facilities"
              className="flex items-center gap-2 text-neutral-textMedium hover:text-neutral-textDark cursor-pointer transition-colors"
            >
              <FacilitiesIcon width={16} height={16} />
              <span>Facilities</span>
            </a>
          </li>

          <li className="flex items-center">
            <BreadcrumbSeparator width={16} height={16} className='text-neutral-outlineLight' />
          </li>

          <li className="flex items-center">
            <span className="text-neutral-textDark font-medium" aria-current="page">
              {facilityName}
            </span>
          </li>
        </ol>
      </nav>

      <TextButton onClick={onClose}>
        <CloseIcon />
        <span>Close</span>
      </TextButton>

    </div>
  );
}