// Versão funcional com estilos inline
import React, { useState, useEffect } from 'react';
import { HeightUnit } from '../types';
import { Input } from '@/components/base/input/input';
import { Button } from '@/components/base/buttons/button';
import { Tabs } from '@/components/application/tabs/tabs';
import { SimpleModal } from '@/components/SimpleModal';
import { validateWeight, validateHeight } from '../utils/validation';
import { IMC_INFO } from '../constants';
import { ThemeToggle } from '../components/ThemeToggle';

interface InputScreenProps {
  onCalculate: (weight: number, height: number, unit: HeightUnit) => void;
}

export const InputScreen: React.FC<InputScreenProps> = ({ onCalculate }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState<HeightUnit>('m');
  const [weightError, setWeightError] = useState<string | undefined>();
  const [heightError, setHeightError] = useState<string | undefined>();
  const [isIMCModalOpen, setIsIMCModalOpen] = useState(false);

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
    <div style={{ width: '100%', maxWidth: '540px' }}>
      <div style={{
        borderRadius: '16px',
        backgroundColor: 'white',
        padding: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '6px', color: '#111827' }}>
              Calcule seu IMC
            </h1>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>
              Insira seu peso e sua altura
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Input
            label="Peso"
            value={weight}
            onChange={(value) => setWeight(value)}
            placeholder="ex: 89"
            type="number"
            isInvalid={!!weightError}
            hint={weightError}
            isRequired
            size="md"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }} htmlFor="height-unit">
              Altura
            </label>
            <Tabs selectedKey={heightUnit} onSelectionChange={(key) => setHeightUnit(key as HeightUnit)}>
              <Tabs.List type="button-border" size="sm" fullWidth>
                <Tabs.Item id="m">m</Tabs.Item>
                <Tabs.Item id="cm">cm</Tabs.Item>
              </Tabs.List>
            </Tabs>
            <Input
              label=""
              value={height}
              onChange={(value) => setHeight(value)}
              placeholder={heightPlaceholder}
              type="number"
              isInvalid={!!heightError}
              hint={heightError}
              isRequired
              size="md"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
            <Button
              color="primary"
              size="lg"
              onPress={handleCalculate}
              isDisabled={!isFormValid}
              style={{ width: '100%' }}
            >
              Calcular IMC
            </Button>
            <Button
              color="tertiary"
              size="lg"
              onPress={handleClear}
            >
              Limpar
            </Button>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '8px' }}>
            <Button 
              color="link-color" 
              size="sm"
              onPress={() => setIsIMCModalOpen(true)}
            >
              O que é IMC?
            </Button>
          </div>
        </div>
      </div>

      <SimpleModal
        isOpen={isIMCModalOpen}
        onClose={() => setIsIMCModalOpen(false)}
        title="O que é IMC?"
      >
        <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#374151' }}>{IMC_INFO}</p>
      </SimpleModal>
    </div>
  );
};



