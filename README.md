
# 📢 Gossip Girl Blog - Retro Social Network

> "Vocês sabem que me adoram. XOXO, Gossip Girl... 💋"

Esta branch é dedicada à refatoração da arquitetura de estilização do projeto, migrando do modelo antigo de **CSS Modules** para **Styled Components** (CSS-in-JS). O objetivo principal é unificar a lógica dos componentes React com seus respectivos estilos, mantendo a fidelidade visual e as regras do `index.css` global.

## 🎯 Objetivo da Task: Remoção Total do Módulos (.module.css)
A meta desta tarefa foi limpar a estrutura de pastas e otimizar o ciclo de renderização, eliminando os arquivos de estilo locais separados e transferindo-os para componentes estilizados puramente em JavaScript/JSX.

### 🛠️ O que mudou?
- **Remoção de Módulos:** Todos os arquivos `.module.css` locais foram deletados.
- **Implementação do Styled Components:** Utilização do `styled-components` para encapsular layouts, posicionamentos específicos e seletores complexos.
- **Props Dinâmicas:** Substituição de classes condicionais do CSS por propriedades dinâmicas do Styled Components (ex: `$temErro`), tornando o código mais legível e integrado ao estado do React.

## 🚀 Como Executar o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/vitoriazanchet/gossip-girl-instagram.git
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd gossip-girl-instagram
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
     ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  Abra o navegador no endereço indicado pelo terminal (geralmente `http://localhost:5173`).

> "E quem sou eu? Esse é um segredo que eu não conto para ninguém. Vocês sabem que me adoram. XOXO, Gossip Girl." 💋
