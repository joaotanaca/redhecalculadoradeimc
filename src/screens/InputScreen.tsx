import React, { useState, useEffect } from 'react';
import { HeightUnit } from '../types';
import { validateWeight, validateHeight } from '../utils/validation';
import { IMC_INFO } from '../constants';
import { ThemeToggle } from '../components/ThemeToggle';
import './InputScreen.css';

interface InputScreenProps {
  onCalculate: (weight: number, height: number, unit: HeightUnit) => void;
}

export const InputScreen: React.FC<InputScreenProps> = ({ onCalculate }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState<HeightUnit>('m');
  const [weightError, setWeightError] = useState<string | undefined>();
  const [heightError, setHeightError] = useState<string | undefined>();
  const [showIMCInfo, setShowIMCInfo] = useState(false);

  useEffect(() => {
    if (weight) {
      const validation = validateWeight(weight);
      setWeightError(validation.error);
    } else {
      setWeightError(undefined);
    }
  }, [weight]);

  useEffect(() => {
    if (height) {
      const validation = validateHeight(height, heightUnit);
      setHeightError(validation.error);
    } else {
      setHeightError(undefined);
    }
  }, [height, heightUnit]);

  const handleClear = () => {
    setWeight('');
    setHeight('');
    setWeightError(undefined);
    setHeightError(undefined);
  };

  const handleCalculate = () => {
    const weightValidation = validateWeight(weight);
    const heightValidation = validateHeight(height, heightUnit);

    if (!weightValidation.isValid) {
      setWeightError(weightValidation.error);
    }
    if (!heightValidation.isValid) {
      setHeightError(heightValidation.error);
    }

    if (weightValidation.isValid && heightValidation.isValid) {
      onCalculate(parseFloat(weight), parseFloat(height), heightUnit);
    }
  };

  const isFormValid = 
    weight && 
    height && 
    !weightError && 
    !heightError &&
    validateWeight(weight).isValid &&
    validateHeight(height, heightUnit).isValid;

  const heightPlaceholder = heightUnit === 'm' ? 'ex: 1.70' : 'ex: 170';

  return (
    <>
      <div className="screen-card">
        <div className="screen-header">
          <div>
            <h1 className="screen-title">Calcule seu IMC</h1>
            <p className="screen-subtitle">Insira seu peso e sua altura</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Peso</label>
            <div className="input-wrapper">
              <input
                type="number"
                className={`input-field ${weightError ? 'input-error' : ''}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="ex: 89"
                aria-label="Campo peso em quilogramas"
              />
              <span className="input-suffix">kg</span>
            </div>
            {weightError && <span className="error-message">{weightError}</span>}
          </div>

          <div className="input-group">
            <label className="input-label">Altura</label>
            <div className="unit-toggle">
              <button
                type="button"
                className={`unit-button ${heightUnit === 'm' ? 'unit-button-active' : ''}`}
                onClick={() => setHeightUnit('m')}
              >
                m
              </button>
              <button
                type="button"
                className={`unit-button ${heightUnit === 'cm' ? 'unit-button-active' : ''}`}
                onClick={() => setHeightUnit('cm')}
              >
                cm
              </button>
            </div>
            <input
              type="number"
              className={`input-field ${heightError ? 'input-error' : ''}`}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={heightPlaceholder}
              aria-label={`Campo altura em ${heightUnit === 'm' ? 'metros' : 'centímetros'}`}
            />
            {heightError && <span className="error-message">{heightError}</span>}
          </div>

          <div className="button-group">
            <button
              className="button button-primary"
              onClick={handleCalculate}
              disabled={!isFormValid}
            >
              Calcular IMC
            </button>
            <button
              className="button button-secondary"
              onClick={handleClear}
            >
              Limpar
            </button>
          </div>

          <button
            className="link-button"
            onClick={() => setShowIMCInfo(true)}
          >
            O que é IMC?
          </button>
        </div>
      </div>

      {showIMCInfo && (
        <div className="modal-overlay" onClick={() => setShowIMCInfo(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">O que é IMC?</h2>
              <button className="modal-close" onClick={() => setShowIMCInfo(false)}>×</button>
            </div>
            <p className="modal-text">{IMC_INFO}</p>
          </div>
        </div>
      )}
    </>
  );
};
