import React from 'react';

export default function EditIcon({ width = 20, height = 20, className = "", ...props }) {
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
        d="M2.5 18.25V15.25H17.5V18.25H2.5ZM5.5 12.25H6.55L12.4 6.41875L11.3313 5.35L5.5 11.2V12.25ZM4 13.75V10.5625L12.4 2.18125C12.5375 2.04375 12.6969 1.9375 12.8781 1.8625C13.0594 1.7875 13.25 1.75 13.45 1.75C13.65 1.75 13.8438 1.7875 14.0312 1.8625C14.2188 1.9375 14.3875 2.05 14.5375 2.2L15.5688 3.25C15.7188 3.3875 15.8281 3.55 15.8969 3.7375C15.9656 3.925 16 4.11875 16 4.31875C16 4.50625 15.9656 4.69062 15.8969 4.87187C15.8281 5.05312 15.7188 5.21875 15.5688 5.36875L7.1875 13.75H4Z" 
        fill="currentColor"
      />
    </svg>
  );
}