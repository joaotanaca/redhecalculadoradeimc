// Versão simplificada para teste
import React from 'react';

function SimpleApp() {
  return (
    <div style={{ 
      padding: '40px', 
      background: '#f0f0f0', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Teste de Renderização</h1>
      <p style={{ color: '#666' }}>Se você está vendo isso, o React está funcionando!</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        background: 'white', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p>O problema pode estar nos componentes ou estilos.</p>
      </div>
    </div>
  );
}

export default SimpleApp;

