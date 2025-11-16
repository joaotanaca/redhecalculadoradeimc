import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suffix?: string;
  error?: string;
  type?: 'text' | 'number';
  id: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  suffix,
  error,
  type = 'text',
  id,
  ariaLabel,
  ariaDescribedBy,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-[var(--color-text-primary)]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-md border-2 bg-[var(--color-bg-primary)] px-3 py-2.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px] ${
            error
              ? 'border-[var(--border-color-error)] focus:ring-[var(--ring-color-error)]'
              : 'border-[var(--border-color-primary)] focus:ring-[var(--ring-color-brand)] focus:border-[var(--border-color-brand)]'
          }`}
          aria-label={ariaLabel || label}
          aria-describedby={ariaDescribedBy}
          aria-invalid={!!error}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-tertiary)] pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <span id={`${id}-error`} className="text-sm text-[var(--color-text-error-primary)]" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

