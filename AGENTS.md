# Instruções para agentes (Codex, Claude e outros)

Site estático do catálogo Virtus Peptides, publicado pelo GitHub Pages a partir da branch `main` em https://virtusbiohacking.com. Não há build: o que está no repositório é o que vai ao ar.

## Estrutura
- `index.html`: catálogo, fichas dos produtos, calculadora de reconstituição, artigos, banner da Black Week e lista de pedido (carrinho pelo WhatsApp).
- `dados/precos.js`: preços do catálogo. Mudar preço é aqui, não no `index.html`.
- `dados/estoque.js`: selos "esgotado" e "ultimas".
- `dados/black.js`: preços da Black Week (24 a 27/11). Entram e saem sozinhos pelas datas.
- `dados/metricas.js`: ID do Umami (métricas). Vazio = desligado.
- `protocolos/`: biblioteca de protocolos (lista em `protocolos/index.html` + `protocolos.js`; cada ficha em `protocolos/<slug>/index.html`, com estilo em `protocolos/bpc-157/bpc-157.css`).
- `img/`: fotos dos produtos em `.webp` (600x900), capas e ícones.
- `CNAME`, `.nojekyll`, `404.html`, `manifest.webmanifest`: infraestrutura do GitHub Pages. Não apagar.

## Regras
1. Faça mudanças pequenas e focadas no que foi pedido. Não reescreva nem reformate arquivos inteiros.
2. Não altere textos existentes (fichas, protocolos, artigos) sem pedido explícito.
3. Não apague nem edite os blocos marcados com `TEMA BLACK` (no `index.html`, em `protocolos/protocolos.css`, `protocolos/bpc-157/bpc-157.css` e na primeira linha de `protocolos.js` e `bpc-157.js`). Eles se desligam sozinhos em 27/11/2026 às 23h59.
4. Não mova os dados de `dados/` de volta para o `index.html`.
5. Fonte dos títulos: `Archivo` (variável `--display`). Texto: `IBM Plex Sans`. Não adicione novas famílias de fonte.
6. Caminhos sempre relativos (ex.: `img/foto.webp`), para funcionar no GitHub Pages.
7. Antes de terminar, abra o `index.html` e confirme que não há erro de JavaScript no console.
8. Descreva no pull request o que mudou e em quais arquivos.
