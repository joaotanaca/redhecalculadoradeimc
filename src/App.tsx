import { useState } from 'react';
import { InputScreen } from './screens/InputScreen';
import { ResultScreen } from './screens/ResultScreen';
import { HeightUnit, IMCResult } from './types';
import { calculateIMC, getIMCClassification } from './utils/imc';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

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
      <div className="app-container">
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
