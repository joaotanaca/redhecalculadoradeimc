import React from 'react';
import { HeightUnit } from '../types';

interface SegmentedControlProps {
  value: HeightUnit;
  onChange: (value: HeightUnit) => void;
  options: { value: HeightUnit; label: string }[];
  ariaLabel: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  value,
  onChange,
  options,
  ariaLabel,
}) => {
  return (
    <div 
      className="inline-flex gap-2 rounded-md bg-[var(--color-bg-secondary)] p-1 border-2 border-[var(--border-color-primary)]" 
      role="radiogroup" 
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ring-color-brand)] ${
            value === option.value
              ? 'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] shadow-sm'
              : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary_hover)]'
          }`}
          onClick={() => onChange(option.value)}
          role="radio"
          aria-checked={value === option.value}
          aria-label={`${ariaLabel}: ${option.label}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

