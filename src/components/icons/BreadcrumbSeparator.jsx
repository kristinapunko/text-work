import React from 'react';

export default function BreadcrumbSeparator({ width = 16, height = 16, className = "", ...props }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path 
        d="M10.18 0.666687L11.3327 1.06191L5.8187 15.3334L4.66602 14.9381L10.18 0.666687" 
        fill="currentColor"
      />
    </svg>
  );
}