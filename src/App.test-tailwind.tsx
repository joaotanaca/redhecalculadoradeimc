// Teste com classes básicas do Tailwind
import React from 'react';

function TestTailwindApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Teste Tailwind CSS
        </h1>
        <p className="text-gray-600 mb-4">
          Se você está vendo isso com estilos, o Tailwind está funcionando!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Botão de Teste
        </button>
      </div>
    </div>
  );
}

export default TestTailwindApp;

