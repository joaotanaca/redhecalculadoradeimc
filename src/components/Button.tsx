import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  ariaLabel,
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] px-4 py-2';
  
  const variantClasses = {
    primary: 'bg-[var(--color-bg-brand-solid)] text-[var(--color-text-primary_on-brand)] hover:bg-[var(--color-bg-brand-solid_hover)] focus-visible:ring-[var(--ring-color-brand)]',
    secondary: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary_hover)] focus-visible:ring-[var(--ring-color-primary)]',
    outline: 'border-2 border-[var(--border-color-primary)] bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] focus-visible:ring-[var(--ring-color-primary)]',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

