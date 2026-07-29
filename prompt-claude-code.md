# Prompt para o Claude Code

Cole isto no Claude Code, na raiz do projeto do portfólio (com `design-system.md` também na pasta).

---

Quero que você construa os componentes estáticos do meu portfólio pessoal em HTML + CSS puro, seguindo o design system em `design-system.md` (leia o arquivo antes de começar).

**Contexto do projeto:** portfólio de Gabriel Dias, 28 anos, design e desenvolvimento. Prioridade máxima: o conteúdo precisa ser 100% legível e absorvível por IAs/crawlers (assistentes de busca, LLMs, leitores de tela) — não só por humanos. Isso significa que a estrutura semântica e os dados estruturados importam tanto quanto o visual.

**Requisitos técnicos:**

1. **HTML semântico puro**, sem depender de JavaScript para renderizar conteúdo. Nada de conteúdo injetado via JS — tudo já deve existir no HTML estático.
2. **Hierarquia de headings correta e única** (`h1` só uma vez por página, `h2`/`h3` em ordem lógica, sem pular níveis).
3. **Tags semânticas de verdade**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` (um por projeto/case), `<aside>`, `<footer>`. Nada de `<div>` genérica onde existe uma tag semântica melhor.
4. **Dados estruturados (JSON-LD, schema.org)** no `<head>` de cada página: `Person` para a página sobre mim, `CreativeWork`/`Project` (ou `ItemList` de `CreativeWork`) para os projetos, `BreadcrumbList` se houver navegação em níveis.
5. **Meta tags completas**: `title`, `description`, `og:*` (Open Graph), `twitter:card`, `canonical`. Cada página com metadados únicos e descritivos.
6. **Acessibilidade real, não decorativa**: `alt` descritivo em toda imagem, `aria-label` em ícones/botões sem texto visível, contraste mínimo AA (o design system já foi pensado para isso), foco visível em todos os elementos interativos, ordem de tab lógica.
7. **Um arquivo `/llms.txt`** na raiz, resumindo em texto simples quem eu sou, o que eu faço, e um índice das páginas/seções do site com descrição de uma linha cada — formato pensado para LLMs que buscam contexto rápido do site.
8. **Conteúdo em texto real**, nunca como imagem (nome, bio, descrição de projetos, tecnologias usadas). Se usar ícones, sempre com texto associado (visível ou `aria-label`).
9. **CSS separado do HTML** (`styles.css` ou por componente), usando as CSS custom properties do design system (não hardcode cores/espaçamentos).

**Componentes a criar** (estáticos, sem framework, prontos para copiar entre páginas):

- Navbar (topnav) fixa
- Hero (título + lead + CTA)
- Cards de projeto (grid, com `<article>` semântico e microdados)
- Botões (primary, accent, outline, ghost)
- Tags/badges (neutra, accent, ocre)
- Bloco "sobre mim" com dados estruturados `Person`
- Campo de formulário de contato (label + input acessíveis)
- Bloco de voz/tom (se fizer sentido reaproveitar como seção "como eu penso" ou remover — sua decisão)
- Footer com assinatura e links

**Entregável esperado:**

- Pasta `/components` com um arquivo HTML por componente, comentado, pronto para copiar/colar.
- `styles.css` com as variáveis do design system e os estilos de cada componente.
- `llms.txt` na raiz.
- Um exemplo de página completa (`index.html`) montando os componentes, com JSON-LD válido — valide mentalmente contra https://schema.org antes de finalizar.

Antes de codar, me pergunte qualquer dúvida sobre conteúdo (nome dos projetos, bio, links de contato) que eu ainda não tenha te passado.
