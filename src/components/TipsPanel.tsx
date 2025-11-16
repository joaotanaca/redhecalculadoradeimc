import React from 'react';
import { TIPS } from '../constants';

interface TipsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TipsPanel: React.FC<TipsPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 animate-in fade-in-0"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[70vh] overflow-y-auto rounded-t-xl bg-[var(--color-bg-primary)] shadow-lg border-t border-x border-[var(--border-color-primary)] animate-in slide-in-from-bottom-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--border-color-secondary)] px-6 py-4">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Dicas práticas</h3>
          <button
            type="button"
            className="rounded-md p-1 text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring-color-brand)]"
            onClick={onClose}
            aria-label="Fechar painel de dicas"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6">
          {TIPS.map((tip, index) => (
            <li key={index} className="flex items-start gap-4 p-4 rounded-md bg-[var(--color-bg-secondary)]">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-bg-brand-solid)] text-[var(--color-text-primary_on-brand)] flex items-center justify-center font-bold text-sm">
                {index + 1}
              </span>
              <span className="flex-1 text-[var(--color-text-primary)] leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

