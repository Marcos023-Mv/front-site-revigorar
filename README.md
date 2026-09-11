# REVIGORAR — Front-End

Front-end desenvolvido em **React + Vite + CSS puro**, reproduzindo fielmente o
design de referência (5 páginas: Início, Sobre nós, Funcionalidades, Planos e
Contatos).

## Stack

- React 18
- React Router DOM (navegação entre páginas)
- Vite (build/dev server)
- CSS puro (sem Tailwind, Bootstrap, Sass ou bibliotecas de UI)
- lucide-react (ícones)

## Como rodar o projeto

```bash
npm install
npm run dev
```

O projeto abrirá em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## Estrutura de pastas

```
src/
├── assets/
├── components/
│   ├── Header/        → cabeçalho fixo com navegação e busca
│   ├── Footer/         → rodapé com links e redes sociais
│   ├── Button/         → botão reutilizável (variantes primary/secondary/outline/ghost)
│   ├── Card/            → card de recurso e "StatBox" (ícone + rótulo)
│   └── PageBanner/    → banner de topo usado nas páginas internas
├── layouts/
│   └── MainLayout.jsx  → aplica Header/Footer em todas as páginas
├── pages/
│   ├── Home/            → Início
│   ├── About/           → Sobre nós
│   ├── Features/        → Funcionalidades (com carrossel)
│   ├── Plans/           → Planos (pricing, comparativo, FAQ)
│   └── Contact/         → Contatos (formulário + FAQ)
├── App.jsx              → definição das rotas
├── main.jsx             → bootstrap da aplicação
└── index.css            → tokens de design (cores, tipografia, espaçamentos)
```

## Responsividade

Todas as páginas possuem breakpoints para desktop, tablet (≤960px) e
smartphone (≤700px/560px), com grids que se reorganizam, menu mobile
retrátil no header e tabelas/listas adaptadas.

## Dados

Não há backend: os dados (planos, depoimentos, FAQ etc.) estão mockados
diretamente nos componentes de página, prontos para substituição por uma
API real quando necessário.
