import React from 'react';

export default function EmptyState({ message, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none animate-in fade-in duration-200 ${className}`}>
        {message && (
          <p className="font-normal text-base text-neutral-textMedium leading-relaxed">
            {message}
          </p>
        )}
    </div>
  );
}