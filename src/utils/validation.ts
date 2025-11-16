import { HeightUnit } from '../types';

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateWeight(weight: string): ValidationResult {
  if (!weight || weight.trim() === '') {
    return { isValid: false, error: 'Informe um peso válido (20–300 kg).' };
  }

  const numWeight = parseFloat(weight);
  if (isNaN(numWeight) || numWeight < 20 || numWeight > 300) {
    return { isValid: false, error: 'Informe um peso válido (20–300 kg).' };
  }

  return { isValid: true };
}

export function validateHeight(height: string, unit: HeightUnit): ValidationResult {
  if (!height || height.trim() === '') {
    const message = unit === 'm' 
      ? 'Informe altura entre 1,00 e 2,50 m.'
      : 'Informe altura entre 100 e 250 cm.';
    return { isValid: false, error: message };
  }

  const numHeight = parseFloat(height);
  
  if (isNaN(numHeight)) {
    const message = unit === 'm' 
      ? 'Informe altura entre 1,00 e 2,50 m.'
      : 'Informe altura entre 100 e 250 cm.';
    return { isValid: false, error: message };
  }

  if (unit === 'm') {
    if (numHeight < 1.0 || numHeight > 2.5) {
      return { isValid: false, error: 'Informe altura entre 1,00 e 2,50 m.' };
    }
  } else {
    if (numHeight < 100 || numHeight > 250) {
      return { isValid: false, error: 'Informe altura entre 100 e 250 cm.' };
    }
  }

  return { isValid: true };
}



