import React from 'react';

export default function ChevronDownIcon({ width = 20, height = 20, className = "", ...props }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path 
        d="M10 12.7833L5 7.7833L6.16667 6.61664L10 10.45L13.8333 6.61664L15 7.7833L10 12.7833Z" 
        fill="currentColor"
      />
    </svg>
  );
}