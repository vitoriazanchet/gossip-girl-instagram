# 📸 Clone da Interface de Login do Instagram com Interatividades em React

Este projeto é um desenvolvimento prático focado na recriação da interface de autenticação do Instagram. O objetivo principal foi aplicar conceitos avançados de estilização com CSS Modules e manipulação de estados em React para simular comportamentos reais da plataforma.

---

## 🚀 Funcionalidades Implementadas

### 🎛️ Validação de Formulário em Tempo Real
- **Botão Inteligente:** O botão "Entrar" inicia em estado inativo. Ele é ativado dinamicamente através de propriedades do React apenas quando as regras de preenchimento são satisfeitas (mínimo de 1 caractere no usuário e 6 caracteres na senha).

### 👁️ Alternância de Visibilidade da Senha
- **Ícone Dinâmico:** Um ícone de olho (aberto/fechado) é exibido no canto interno direito do campo de senha assim que o usuário digita o primeiro caractere.
- **Exibição Condicional:** Ao clicar no ícone, o tipo do input alterna dinamicamente entre `password` e `text`, permitindo visualizar ou ocultar os caracteres digitados.

### ⚠️ Mensagens de Erro e Alertas
- **Container de Validação:** Implementação de um bloco de aviso posicionado abaixo do título caso as credenciais digitadas não correspondam aos dados padrões (`admin` / `admin1`).
- **Sistema de Toast:** Criação de um sistema de notificações flutuantes (`position: fixed`) com mensagens sequenciais e temporizador automatizado via `useEffect` para alertas rápidos de indisponibilidade de links externos.

---

## 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca JavaScript para construção da interface e gerenciamento de estados (`useState`, `useEffect`).
- **CSS Modules:** Escopo isolado de estilização para evitar conflitos de classes entre os componentes.
- **JavaScript (ES6):** Lógica de manipulação de strings e arrays para validações de formulário.

---

## 📁 Estrutura de Arquivos Principais

- `App.jsx`: Centraliza o estado da aplicação, validação de login e fluxo de exibição do alerta.
- `App.module.css`: Contém a estilização da tela principal, incluindo o comportamento responsivo e posicionamento absoluto do olho.
- `Footer.jsx` & `Footer.module.css`: Componentização do rodapé da página com tratamento de cliques falsos.