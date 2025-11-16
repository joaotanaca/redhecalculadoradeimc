import { IMCClassification } from '../types';
import type { BadgeColors } from '@/components/base/badges/badge-types';

export function getBadgeColor(classification: IMCClassification): BadgeColors {
  const colorMap: Record<string, BadgeColors> = {
    '#3b82f6': 'blue',
    '#10b981': 'success',
    '#f59e0b': 'warning',
    '#f97316': 'orange',
    '#ef4444': 'error',
    '#dc2626': 'error',
  };

  return colorMap[classification.color] || 'gray';
}

