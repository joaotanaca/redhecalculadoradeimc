import React from 'react';

interface BadgeProps {
  label: string;
  color: string;
  range: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, color, range }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        {label}
      </div>
      <span className="text-sm text-[var(--color-text-tertiary)] font-medium">
        {range}
      </span>
    </div>
  );
};

