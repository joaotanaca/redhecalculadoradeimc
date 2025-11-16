// Versão mínima para testar
import React from 'react';

function MinimalApp() {
  return (
    <div style={{ 
      padding: '40px', 
      background: '#f0f0f0', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px', fontSize: '24px' }}>
        Teste de Renderização
      </h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Se você está vendo isso, o React está funcionando!
      </p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        background: 'white', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '500px'
      }}>
        <p style={{ margin: 0, color: '#333' }}>
          O problema pode estar nos componentes ou estilos do Tailwind.
        </p>
      </div>
    </div>
  );
}

export default MinimalApp;



