# 🚀 V Project | Landing Page

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

<br />

**Identidade visual e tecnologia para alta performance.**
Uma landing page moderna, responsiva e otimizada para conversão, desenvolvida para a *V Project*.

[Visualizar Demo](#) · [Reportar Bug](issues) · [Solicitar Feature](issues)

</div>

---

## ⚡ Sobre o Projeto

Este projeto é uma **Landing Page Institucional** de alta fidelidade, projetada para transmitir autoridade e modernidade. Utiliza animações fluidas, design system consistente e as melhores práticas de SEO e performance da web moderna.

### ✨ Destaques
- **Design Premium**: Interface Dark Mode com estética "Glassmorphism" e acentos em Cyan.
- **Micro-interações**: Animações suaves de entrada e hover utilizando *Framer Motion*.
- **Ultra Responsivo**: Layout adaptável para Mobile, Tablet e Desktop (Grid & Flexbox).
- **Conteúdo Dinâmico**: Gerenciamento fácil de textos e itens de portfólio via arquivo de constantes.
- **SEO Otimizado**: Estrutura semântica e metadados configurados.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 16](https://nextjs.org/) (React Framework)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)

---

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-und/landing-page-v-project.git

# 2. Entre na pasta
cd landing-page-v-project-

# 3. Instale as dependências
npm install
# ou
yarn
```

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento em http://localhost:3000
npm run dev
```

### Build de Produção

```bash
# Cria uma versão otimizada para produção
npm run build

# Inicia o servidor de produção
npm start
```

---

## 📂 Estrutura do Projeto

```
📦 landing-page-v-project
├── 📂 components    # Componentes React reutilizáveis (Navbar, Hero, etc.)
├── 📂 pages         # Rotas da aplicação (Next.js Pages Router)
├── 📂 public        # Ativos estáticos (Imagens, Ícones)
├── 📂 styles        # CSS Global e configurações do Tailwind
├── constants.tsx    # Texto, dados do portfólio e configurações gerais
└── ...configs       # Arquivos de configuração (Tailwind, TypeScript, Next)
```

---

## ⚙️ Personalização

Todo o conteúdo de texto, serviços e itens do portfólio pode ser editado facilmente sem tocar no código dos componentes.

1. Abra o arquivo `constants.tsx` na raiz do projeto.
2. Edite os objetos `PORTFOLIO`, `SERVICES` ou `FEATURES`.
3. Para adicionar novas imagens, coloque-as na pasta `public` e referencie o caminho (ex: `/minha-imagem.png`).

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

<div align="center">
  <small>Desenvolvido com 💙 por V Project</small>
</div>
