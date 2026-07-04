import React from 'react';

export default function RoomsIcon({ width = 16, height = 16, className = "", ...props }) {
  return (
    <svg 
      width={width} 
      height={height} 
      className={className} 
      viewBox="0 0 16 16" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path 
        d="M2 14V12.6667H3.33333V2H10V2.66667H12.6667V12.6667H14V14H11.3333V4H10V14H2ZM7.80833 8.475C7.93611 8.34722 8 8.18889 8 8C8 7.81111 7.93611 7.65278 7.80833 7.525C7.68056 7.39722 7.52222 7.33333 7.33333 7.33333C7.14444 7.33333 6.98611 7.39722 6.85833 7.525C6.73056 7.65278 6.66667 7.81111 6.66667 8C6.66667 8.18889 6.73056 8.34722 6.85833 8.475C6.98611 8.60278 7.14444 8.66667 7.33333 8.66667C7.52222 8.66667 7.68056 8.60278 7.80833 8.475ZM4.66667 12.6667H8.66667V3.33333H4.66667V12.6667Z" 
        fill="currentColor" 
      />
    </svg>
  );
}