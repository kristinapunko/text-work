import React from 'react';

export default function PlusIcon({ width = 14, height = 14, className = "", ...props }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 14 14" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path 
        d="M5.71429 7.61905H0V5.71429H5.71429V0H7.61905V5.71429H13.3333V7.61905H7.61905V13.3333H5.71429V7.61905Z" 
        fill="currentColor"
      />
    </svg>
  );
}