
# 📢 Gossip Girl Blog - Retro Social Network

> "Vocês sabem que me adoram. XOXO, Gossip Girl... 💋"

Um clone estilizado de rede social inspirado no Instagram, customizado com a identidade misteriosa e ácida da série **Gossip Girl**, envelopado em uma experiência visual que mistura componentes modernos com janelas retrôs de sistemas operacionais clássicos (estilo Windows 95/98).

## 💻 Sobre o Projeto

Este projeto é uma aplicação Single Page Application (SPA) desenvolvida em **React** e **Vite**, focada em aplicar conceitos avançados de gerenciamento de estado, renderização condicional inteligente, modularização/componentização e transições fluidas puramente por CSS.

### 🌟 Diferenciais e Segredos (Easter Eggs)

-   **Login Automatizado:** Se logar com credenciais de administrador, o sistema exibe um aviso clássico de sucesso e redireciona o usuário para o feed automaticamente após 2.5 segundos.
    
-   **Vídeos Secretos:** Na tela de criação de conta, interações ocultas ativam um vídeo surpresa.
    
-   **Links Engraçados:** O rodapé possui links que provocam o usuário em uma sequência de piadas dinâmicas através do Toast.
    

## 🎨 Telas do Sistema

### 1. Tela de Login (`/pages/Login`)

-   **Funcionalidade:** Validação de credenciais. Usuário `admin` e senha `admin1` acionam um fluxo de sucesso. Qualquer outra combinação gera um estado de erro.
    
-   **Comportamento Assíncrono:** Ao validar com sucesso, o componente dispara o Toast padrão e aciona um `setTimeout` de 2500ms que oculta o alerta e faz a troca automática de tela para o Feed, dispensando o clique manual do usuário.
    
-   **Visual:** Input dinâmico de senha com botão de alternância de visibilidade (Olho aberto/fechado).
    

### 2. Tela de Registro / Criar Conta (`/pages/CriarConta`)

-   **Funcionalidade:** Validação de campos (Email, Senha, Idade, Nome de Usuário).
    
-   **Interatividade Avançada:** Monitoramento de cliques, tooltips explicativas e exibição condicional de componentes de vídeo locais que rodam via gatilhos de estado e se destroem ao finalizar (`onEnded`).
    

### 3. Tela de Feed Principal (`/pages/Feed`)

O centro dos escândalos do Upper East Side, dividido em uma estrutura inteligente de três colunas:

-   **Sidebar Lateral:** Uma barra com os principais ícones de navegação que fica compactada à esquerda e, ao sofrer `:hover`, expande suavemente por cima do Feed, revelando as labels de texto sem quebrar ou empurrar o layout central.
    
-   **Barra de Stories:** Componente com scroll horizontal suavizado via JavaScript (`scrollBy` com `behavior: 'smooth'`), carregado com os perfis da elite de Manhattan. Clicar em um story abre o painel retrô com o flagrante do personagem.
    
-   **Lista de Posts:** Feed centralizado renderizando as fotos de escândalos da Gossip Girl. Cada post é estático em nome da autora (`@gossipgirl`) mas gerencia de forma 100% isolada e dinâmica o seu próprio contador de visualizações e estado de curtidas (coração preenchido).
    

## 🧩 Arquitetura de Componentes e Lógicas

O projeto adota uma arquitetura modular de componentes reaproveitáveis, onde a comunicação de dados flui via `props` e funções de callback.

### Fluxograma de Navegação (Roteamento customizado)

A aplicação gerencia a troca de telas sem bibliotecas externas no arquivo raiz `App.jsx`, utilizando um estado de string simples para renderizar condicionalmente as páginas:

JavaScript

```
{telaAtual === 'login' && <Login navegarPara={setTelaAtual} />}

```

### Componentes de Destaque
| **Componente** | **Função Principal** | **Diferencial Técnico** |
|--|---|---|
| `Toast`| Exibe alertas textuais na base da tela (Usado no Login, Cadastro e Footer). | Estado dinâmico e flexível. | 
| `ToastGossip` | Janela modal centralizada estilizada como caixa de mensagem do Windows 95. | **Propriedade de imagem opcional.** Se fornecida a URL, cria um layout expandido lado a lado. Se omitida, o CSS com `flex: 1` expande o texto automaticamente sem deixar buracos. | 
| `Post` | Renderiza o card do flagrante/fofoca. | Separação exata das ações usando sub-grupos de flexbox, mantendo os botões de interação na esquerda e jogando o botão de **Salvar** de forma isolada na extremidade direita. | 
| `SugestaoUsuario` | Exibe perfis recomendados para seguir na barra direita. | Passagem de eventos com `stopPropagation()` para garantir que clicar no link "Seguir" (que abre o mapa da cidade) não acione indesejadamente o clique do card principal. | 

## 🛠️ Tecnologias Utilizadas

-   **React.js (v18+)**
    
-   **Vite** (Build tool ultrarrápido)
    
-   **CSS Modules** (Escopo local de estilos por componente, evitando vazamento de escopo)
    
-   **Flexbox & CSS Grid** (Layouts complexos de sobreposição e alinhamento)
    
-   **React Icons / Custom Icones Utils**
    

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


## 🔗 Link para Acesso Direto
A aplicação está hospedada e disponível para testes no link abaixo:
👉 **[Acesse Aqui](https://gossip-girl-instagram.vercel.app/)**
    

## 📁 Estrutura de Pastas

```
gossip-girl-instagram
├── public/                 # Imagens e vídeos
├── src/
│   ├── components/         # Componentes compartilhados
│   │   ├── BarraStories/   # Barra superior de stories/flagrantes dos personagens
│   │   ├── Footer/         # Estrutura do footer padrão de todas as páginas
│   │   ├── GradienteInstagram/
│   │   ├── PainelLateral/  # Sugestões de usuários e o Footer interativo
│   │   ├── Post/           # Estrutura do card de post
│   │   ├── SidebarLateral/ # Menu expansivo lateral
│   │   ├── Toast/          # Alerta simples
│   │   └── ToastGossip/    # Modal do Windows antigo com imagem condicional
│   ├── pages/              # Páginas que representam as telas da aplicação
│   │   ├── Login/
│   │   ├── CriarConta/
│   │   └── Feed/
│   ├── utils/              # Arquivos utilitários (ex: dicionário centralizado de ícones)
│   ├── App.jsx             # Maestro das rotas e estados principais
│   ├── index.css           # Estilização global
│   └── main.jsx            # Ponto de entrada do React
└── index.html              # Ponto de entrada estático
```

> "E quem sou eu? Esse é um segredo que eu não conto para ninguém. Vocês sabem que me adoram. XOXO, Gossip Girl." 💋
