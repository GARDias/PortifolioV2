# Design System — Gabriel Dias

Referência de tokens e componentes para o portfólio. Baseado no protótipo `gabriel-dias-design-system.html`.

## Princípios

- Minimalista, pouco ruído visual, muito espaço em branco.
- Conteúdo em primeiro lugar — a interface nunca compete com o texto.
- Tom terroso e leve, editorial, sem exagero de cor.
- Direto na escrita: frases curtas, sem jargão corporativo.

## Cores

### Neutros

| Nome | Variável | Hex |
|---|---|---|
| Creme | `--cream` | `#FAF6F0` |
| Creme 2 | `--cream-2` | `#F2EBE0` |
| Areia | `--sand` | `#E8DCC8` |
| Areia 2 | `--sand-2` | `#D9C9AD` |
| Marrom claro | `--brown-light` | `#B49A78` |
| Marrom | `--brown` | `#8A7057` |
| Marrom escuro | `--brown-dark` | `#5C4A3A` |
| Carvão | `--charcoal` | `#2B2420` |
| Tinta | `--ink` | `#1C1714` |

### Acentos

| Nome | Variável | Hex |
|---|---|---|
| Terracota suave | `--terracotta-soft` | `#E8B49A` |
| Terracota | `--terracotta` | `#D98C6B` |
| Argila | `--clay-deep` | `#A85D3E` |
| Ocre suave | `--ocre-soft` | `#DFC186` |
| Ocre | `--ocre` | `#C9A15A` |

### Semânticos

| Papel | Variável | Valor |
|---|---|---|
| Fundo | `--bg` | `var(--cream)` |
| Superfície (cards) | `--surface` | `#ffffff` |
| Texto principal | `--text` | `var(--ink)` |
| Texto secundário | `--text-muted` | `var(--brown)` |
| Borda | `--border` | `var(--sand)` |
| Acento | `--accent` | `var(--terracotta)` |
| Acento profundo (hover/links) | `--accent-deep` | `var(--clay-deep)` |

## Tipografia

- **Títulos:** Noto Serif (`--font-display`) — serifada, editorial. Pesos 300–700, itálico 500.
- **Corpo / UI:** Inter (`--font-body`) — pesos 400, 500, 600, 700.
- **Código / metadados:** JetBrains Mono (`--font-mono`) — pesos 400, 500.

Import Google Fonts:
```
family=Noto+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,500
family=Inter:wght@400;500;600;700
family=JetBrains+Mono:wght@400;500
```

Escala de tamanhos:

| Uso | Fonte | Peso | Tamanho |
|---|---|---|---|
| H1 hero | Noto Serif | 500 | 36–56px (clamp) |
| H2 seção | Noto Serif | 500 | 28–32px |
| Destaque itálico | Noto Serif | 500 italic | 24px |
| Corpo/UI negrito | Inter | 600 | 16px |
| Corpo padrão | Inter | 400 | 16px |
| Legenda/metadado | Inter | 500 | 13px |
| Código | JetBrains Mono | 400 | 14px |

## Espaçamento

Escala de 4px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px (variáveis `--sp-1` a `--sp-10`).

## Raio e sombra

- `--radius-sm: 4px` (botões, inputs)
- `--radius-md: 8px` (cards pequenos, swatches)
- `--radius-lg: 16px` (cards grandes)
- `--shadow-sm` / `--shadow-md` — sombras discretas, só aparecem em hover.

## Componentes

- **Nav fixa (topnav):** sticky, fundo semitransparente com blur, borda inferior fina.
- **Botões:** `primary` (fundo tinta), `accent` (fundo terracota), `outline` (borda marrom clara), `ghost` (sem fundo). Hover: leve `translateY(-1px)` + sombra.
- **Tags/badges:** pílula, borda 1px, fundo suave. Variantes: neutra, `accent` (terracota), `ocre`.
- **Cards de projeto:** thumb com gradiente terracota→ocre, título, descrição curta, tag. Hover: elevação + sombra.
- **Campo de formulário:** label 13px negrito, input com borda areia, foco muda borda para terracota.
- **Voice cards (voz/tom):** grid 2 colunas, "Fazer" (verde suave) vs "Evitar" (vermelho suave), com exemplos de frases.
- **Footer:** assinatura em Noto Serif itálico, texto centralizado.

## Voz e tom

Direto, honesto, sem jargão. Frases curtas. Evitar buzzwords corporativos ("sinergizar", "disruptivo", "ecossistema"). Escrever como Gabriel fala.
