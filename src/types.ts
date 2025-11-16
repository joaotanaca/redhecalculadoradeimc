export type HeightUnit = 'm' | 'cm';

export interface IMCResult {
  value: number;
  classification: IMCClassification;
}

export interface IMCClassification {
  label: string;
  range: string;
  color: string;
  explanation: string;
  supportText: string;
}

export interface SavedResult {
  id: string;
  imc: number;
  weight: number;
  height: number;
  date: Date;
}



