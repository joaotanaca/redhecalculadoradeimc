import { IMCResult, HeightUnit } from '../types';
import { IMC_CLASSIFICATIONS } from '../constants';

export function calculateIMC(weight: number, height: number, unit: HeightUnit): number {
  const heightInMeters = unit === 'cm' ? height / 100 : height;
  const imc = weight / (heightInMeters * heightInMeters);
  return Math.round(imc * 100) / 100; // 2 casas decimais
}

export function getIMCClassification(imc: number): IMCResult {
  let classification;

  if (imc < 18.5) {
    classification = IMC_CLASSIFICATIONS.underweight;
  } else if (imc < 25) {
    classification = IMC_CLASSIFICATIONS.normal;
  } else if (imc < 30) {
    classification = IMC_CLASSIFICATIONS.overweight;
  } else if (imc < 35) {
    classification = IMC_CLASSIFICATIONS.obesity1;
  } else if (imc < 40) {
    classification = IMC_CLASSIFICATIONS.obesity2;
  } else {
    classification = IMC_CLASSIFICATIONS.obesity3;
  }

  return {
    value: imc,
    classification,
  };
}

export function formatIMC(imc: number): string {
  const rounded = Math.round(imc * 10) / 10;
  if (rounded % 1 === 0) {
    return rounded.toString();
  }
  return rounded.toFixed(1);
}

