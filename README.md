# Portfólio Luis Felipe

Portfólio profissional multipágina desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

## Stack

- Next.js 15 com App Router
- React 19
- TypeScript strict
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Requisitos

- Node.js 20 ou superior
- npm

## Como rodar

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Estrutura

```text
app/                  Rotas, layout compartilhado e estilos globais
components/layout/    Navbar e footer
components/sections/  Seções reutilizadas pelas páginas
components/ui/        Componentes reutilizáveis
data/                 Conteúdo, navegação e dados estruturados
lib/                  Tipos compartilhados
public/images/        Imagens de perfil e projetos
```

## Rotas

```text
/             Home
/sobre        Biografia e habilidades
/experiencia  Estrutura para experiências profissionais
/projetos     Projetos existentes
/escritos     Estrutura para escritos futuros
/contato      Formulário e links de contato
```

Navbar e Footer são renderizados pelo layout raiz e compartilhados por todas as páginas.

Cada componente possui uma pasta própria com o componente e seus estilos:

```text
Hero/
├── Hero.tsx
└── Hero.styles.ts
```

Para alterar conteúdo, edite prioritariamente os arquivos de `data/`. Para alterar a apresentação de um componente, use o arquivo `.styles.ts` localizado ao lado dele.

## Deploy

O projeto está pronto para deploy na Vercel ou em qualquer ambiente compatível com Next.js 15.
