# Componentes do Micro-App de IMC

## Componentes Reutilizáveis

### Button
Botão com variantes: primary, secondary, outline
- Suporte a desabilitado
- Acessibilidade completa (aria-label)
- Animações de hover

### Input
Campo de entrada com validação
- Label explícito
- Mensagens de erro
- Sufixo opcional (ex: "kg")
- Suporte a ARIA para leitores de tela

### SegmentedControl
Controle segmentado para escolha de unidade
- Alternância entre opções (m/cm)
- Estado ativo visual
- Acessível via teclado

### Badge
Badge colorido para classificação
- Cor dinâmica baseada na classificação
- Exibe label e faixa numérica

### Modal
Modal genérico
- Overlay com fade
- Fechamento por ESC ou clique fora
- Animações suaves
- Foco gerenciado

### TipsPanel
Painel de dicas práticas
- Lista numerada de ações
- Animação slide-up
- Fechamento intuitivo

## Telas

### InputScreen
Tela de entrada de dados
- Formulário com validação em tempo real
- Toggle de unidade de altura
- Botões de ação (Calcular/Limpar)
- Link para informações sobre IMC

### ResultScreen
Tela de resultados
- Exibição do IMC calculado
- Badge de classificação
- Textos de apoio personalizados
- Ações: Salvar, Receber dicas, Novo cálculo
- Mensagem de segurança

## Utilitários

### imc.ts
- `calculateIMC()`: Calcula o IMC
- `getIMCClassification()`: Retorna classificação
- `formatIMC()`: Formata para exibição

### validation.ts
- `validateWeight()`: Valida peso (20-300 kg)
- `validateHeight()`: Valida altura (m ou cm)

## Constantes

### constants.ts
- Classificações de IMC com cores e textos
- Dicas práticas
- Mensagens de segurança
- Informações sobre IMC

## Dados

### imc-classifications.json
JSON completo com:
- Todas as classificações
- Faixas numéricas
- Cores
- Textos de apoio
- Regras de validação

