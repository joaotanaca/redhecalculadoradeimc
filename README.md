# Calculadora de IMC

Micro-app para cálculo de Índice de Massa Corporal (IMC) com interface moderna e acessível.

## 🚀 Funcionalidades

### Tela de Input
- Coleta de peso (kg) e altura (m ou cm)
- Validação em tempo real
- Toggle para escolher unidade de altura
- Botões de ação (Calcular e Limpar)
- Modal informativo sobre IMC

### Tela de Resultados
- Exibição do IMC calculado
- Classificação com badge colorido
- Faixa numérica da classificação
- Explicação e texto de apoio personalizado
- Painel de dicas práticas
- Botão para novo cálculo
- Mensagem de segurança

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- CSS Modules

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📋 Classificações de IMC

- **Peso baixo**: < 18,5
- **Peso normal**: 18,5 - 24,9
- **Sobrepeso**: 25,0 - 29,9
- **Obesidade I**: 30,0 - 34,9
- **Obesidade II**: 35,0 - 39,9
- **Obesidade III**: ≥ 40,0

## ♿ Acessibilidade

- Labels explícitos para todos os campos
- Navegação por teclado
- Suporte a leitores de tela (ARIA)
- Foco lógico entre elementos
- Contraste adequado

## 📝 Validações

- **Peso**: 20 - 300 kg
- **Altura (m)**: 1,00 - 2,50 m
- **Altura (cm)**: 100 - 250 cm

## 🎨 Design

- Layout responsivo
- Animações suaves
- Cores semânticas para classificações
- Interface limpa e moderna



