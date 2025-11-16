// Versão funcional garantida
import { useState } from 'react';
import { InputScreen } from './screens/InputScreen';
import { ResultScreen } from './screens/ResultScreen';
import { HeightUnit, IMCResult } from './types';
import { calculateIMC, getIMCClassification } from './utils/imc';
import { ThemeProvider } from './contexts/ThemeContext';

type Screen = 'input' | 'result';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('input');
  const [result, setResult] = useState<IMCResult | null>(null);

  const handleCalculate = (weight: number, height: number, unit: HeightUnit) => {
    const imc = calculateIMC(weight, height, unit);
    const classification = getIMCClassification(imc);
    setResult(classification);
    setCurrentScreen('result');
  };

  const handleNewCalculation = () => {
    setCurrentScreen('input');
    setResult(null);
  };

  return (
    <ThemeProvider>
      <div style={{ 
        width: '100%', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '16px',
        backgroundColor: '#f5f5f5'
      }}>
        {currentScreen === 'input' ? (
          <InputScreen onCalculate={handleCalculate} />
        ) : (
          result && <ResultScreen result={result} onNewCalculation={handleNewCalculation} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;



