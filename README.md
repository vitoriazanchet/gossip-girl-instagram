# 📸 Clone da Interface de Login e Cadastro do Instagram com Interatividades em React

Este projeto é um desenvolvimento prático focado na recriação da interface de autenticação do Instagram. O objetivo principal foi aplicar conceitos avançados de estilização com **CSS Modules** e manipulação de estados em **React** para simular comportamentos reais da plataforma.

---

## 🚀 Funcionalidades Implementadas

### 🔐 Validação de Formulário em Tempo Real
- **Botão Inteligente:** O botão "Entrar" inicia em estado inativo. Ele é ativado dinamicamente através de propriedades do React apenas quando as regras de preenchimento são satisfeitas (mínimo de 1 caractere no usuário e 6 caracteres na senha).

### 👁️ Alternância de Visibilidade da Senha
- **Ícone Dinâmico:** Um ícone de olho (aberto/fechado) é exibido no canto interno direito do campo de senha assim que o usuário digita o primeiro caractere.
- **Exibição Condicional:** Ao clicar no ícone, o tipo do input alterna dinamicamente entre `password` e `text`, permitindo visualizar ou ocultar os caracteres digitados.

### ⚠️ Mensagens de Erro e Alertas
- **Container de Validação:** Implementação de um bloco de aviso posicionado abaixo do título caso as credenciais digitadas não correspondam aos dados padrões (`admin` / `admin1`).
- **Sistema de Toast:** Criação de um sistema de notificações flutuantes (`position: fixed`) com mensagens sequenciais e temporizador automatizado via `useEffect` para alertas rápidos de indisponibilidade de links externos.

---
## ✨ Funcionalidades Avançadas da Página de Cadastro

Diferente de um formulário comum, esta tela conta com regras dinâmicas e interações exclusivas:

* **A Esteira de Desafios da Senha (Password Game):** A senha não possui uma validação estática. À medida que o usuário digita, ela passa por um funil cumulativo de desafios em tempo real.
* **Validação de Usuário Avançada:** * O nome de usuário `admin` é bloqueado em tempo real por motivos de segurança. Ao ser digitado, um botão `X` surge para limpar o input.
  * Qualquer outro usuário digitado recebe dinamicamente o cobiçado **Selo de Verificado** do Instagram ao lado do campo.
* **Transmutação de Data para Idade:** Se o usuário tentar enviar o formulário duas vezes seguidas informando um ano de nascimento inválido, a seção de Data de Nascimento oculta-se dinamicamente e transforma-se em um campo numérico direto de "Idade".
* **Inputs Inteligentes:** Botões de limpeza rápida (`X`) e alternância de visibilidade da senha perfeitamente alinhados via posicionamento absoluto dentro das caixas de texto.

## 🛠️ Tecnologias Utilizadas

- **React.js:** Biblioteca JavaScript para construção da interface e gerenciamento de estados (`useState`, `useEffect`).
- **CSS Modules:** Escopo isolado de estilização para evitar conflitos de classes entre os componentes.
- **JavaScript (ES6):** Lógica de manipulação de strings e arrays para validações de formulário.
- **Expressões Regulares (Regex):** Scanners de validação de padrões na esteira de senha.

---

## 📁 Estrutura de Arquivos Principais

- `App.jsx`: Centraliza o estado da aplicação e fluxo de exibição de paginas.
- `index.css`: Contém a estilização da tela principal.
- `Login.jsx` & `Login.module.css`: Página e estilização de login.
- `CriarConta.jsx` & `CriarConta.module.css`: Página e estilização de criação de conta.
- `Footer.jsx` & `Footer.module.css`: Componentização do rodapé das páginas.
- `Toast.jsx` & `Toast.module.css`: Componentização do toast de avisos das páginas com tratamento de cliques falsos.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório para a sua máquina local:
   ```bash
   git clone [https://github.com/vitoriazanchet/login-instagram.git](https://github.com/vitoriazanchet/login-instagram)

2. No terminal do VS Code dentro do projeto, execute:
    ```bash
    npm run dev

3. Cole o link gerado em seu navegador (para copiar precione Ctrl + Shift + C).
