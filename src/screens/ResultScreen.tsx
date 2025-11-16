import React, { useState, useEffect } from 'react';
import { IMCResult } from '../types';
import { formatIMC } from '../utils/imc';
import { getBadgeColor } from '../utils/badgeColors';
import { SAFETY_MESSAGE, TIPS } from '../constants';
import { ThemeToggle } from '../components/ThemeToggle';
import './ResultScreen.css';

interface ResultScreenProps {
  result: IMCResult;
  onNewCalculation: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onNewCalculation }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const imcFormatted = formatIMC(result.value);
  const badgeColor = getBadgeColor(result.classification);

  const getBadgeStyle = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      blue: { bg: '#dbeafe', text: '#1e40af' },
      success: { bg: '#d1fae5', text: '#065f46' },
      warning: { bg: '#fef3c7', text: '#92400e' },
      orange: { bg: '#fed7aa', text: '#9a3412' },
      error: { bg: '#fee2e2', text: '#991b1b' },
    };
    return colorMap[color] || colorMap.blue;
  };

  const badgeStyle = getBadgeStyle(badgeColor);

  return (
    <>
      <div className={`screen-card ${isAnimated ? 'animated' : ''}`}>
        <div className="screen-header">
          <h1 className="screen-title">Resultado do IMC</h1>
          <ThemeToggle />
        </div>

        <div className="result-container">
          <div className="imc-value">{imcFormatted}</div>
          
          <div className="badge-container">
            <span 
              className="badge"
              style={{ 
                backgroundColor: badgeStyle.bg, 
                color: badgeStyle.text 
              }}
            >
              {result.classification.label}
            </span>
            <span className="badge-range">{result.classification.range}</span>
          </div>

          <p className="result-explanation">{result.classification.explanation}</p>

          <div className="support-box">
            <p>{result.classification.supportText}</p>
          </div>

          <div className="button-group">
            <button
              className="button button-secondary"
              onClick={() => setIsSaveModalOpen(true)}
            >
              Salvar resultado
            </button>
            <button
              className="button button-primary"
              onClick={() => setIsTipsOpen(true)}
            >
              Receber dicas
            </button>
            <button
              className="button button-tertiary"
              onClick={onNewCalculation}
            >
              Novo cálculo
            </button>
          </div>
        </div>

        <div className="safety-message">
          <p>{SAFETY_MESSAGE}</p>
        </div>
      </div>

      {isSaveModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSaveModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Resultado salvo</h2>
              <button className="modal-close" onClick={() => setIsSaveModalOpen(false)}>×</button>
            </div>
            <p className="modal-text">
              Seu resultado foi salvo com sucesso! (Funcionalidade mock)
            </p>
            <button
              className="button button-primary"
              onClick={() => setIsSaveModalOpen(false)}
              style={{ marginTop: '24px', width: '100%' }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {isTipsOpen && (
        <div className="modal-overlay" onClick={() => setIsTipsOpen(false)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Dicas práticas</h2>
              <button className="modal-close" onClick={() => setIsTipsOpen(false)}>×</button>
            </div>
            <ul className="tips-list">
              {TIPS.map((tip, index) => (
                <li key={index} className="tip-item">
                  <span className="tip-number">{index + 1}</span>
                  <span className="tip-text">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
