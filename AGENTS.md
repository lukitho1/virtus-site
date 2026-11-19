# Instruções para agentes (Codex, Claude e outros)

Site estático do catálogo Virtus Peptides, publicado pelo **GitHub Pages** a partir da branch `main` em https://virtusbiohacking.com. Não há build: o que está no repositório é o que vai ao ar, 1 a 2 minutos depois do push. O GitHub Pages guarda arquivos em cache por cerca de 10 minutos.

O domínio foi registrado no Netlify e o **DNS continua no Netlify** (4 registros A `185.199.108-111.153` no domínio e `www` como CNAME para `lukitho1.github.io`). O Netlify não hospeda mais o site: não publique nada por lá.

## Estrutura
- `index.html`: tudo do catálogo num arquivo só (HTML, CSS em `<style>` e JS em `<script>`):
  - topo, banner da Black Week e carrossel de blends;
  - abertura com vitrine de frascos passando, busca instantânea e faixa de confiança;
  - categorias (chips com pílula deslizante e ícones), catálogo e fichas dos produtos (abrem por `#slug`);
  - calculadora de reconstituição (`#calculadora`) e artigos (`#artigos`, `#artigo-<slug>`, conteúdo em `<template id="tpl-<slug>">` + array `ARTIGOS`);
  - lista de pedido (carrinho que envia um único pedido pelo WhatsApp, salvo em `localStorage` com a chave `virtus-lista-v1`).
- `dados/precos.js`: preços do catálogo. **Mudar preço é aqui**, não no `index.html`.
- `dados/estoque.js`: selos `"esgotado"` e `"ultimas"` (ou `{status:"ultimas", max:2}`, que limita a quantidade).
- `dados/black.js`: preços da Black Week (individuais de 24 a 27/11/2026). Entram e saem sozinhos pelas datas. Para conferir antes, abra o site com `?simular=individuais`.
- `dados/blends.js`: blends da Black. `revelado: true` faz o blend aparecer na ficha dos produtos que ele contém (o card precisa existir no carrossel com `id="blend-N"`).
- `dados/metricas.js`: ID do Umami (métricas sem cookies). Vazio = métricas desligadas.
- `protocolos/`: biblioteca de protocolos, de outro autor. Lista em `protocolos/index.html` + `protocolos.js`; cada ficha em `protocolos/<slug>/index.html`, com estilo compartilhado em `protocolos/bpc-157/bpc-157.css` e `bpc-157.js`.
- `img/`: fotos dos produtos em `.webp` (600x900), capas e fotos dos artigos, ícones (`icone-180/192/512.png`), prévia de compartilhamento (`og-black.jpg`; a normal é `og.png`).
- `CNAME`, `.nojekyll`, `404.html`, `manifest.webmanifest`: infraestrutura do GitHub Pages. Não apagar.

## Comportamentos com data marcada (todos em horário de Brasília)
- Tema Black (classe `html.black`) e banner da Black ficam ativos até **27/11/2026 23h59** e se desligam sozinhos.
- Contagem regressiva até a abertura dos blends: **20/11/2026 12h**.
- Bloco "Na Black Week" na ficha some depois de **23/11/2026 23h59**.
- Preços dos individuais: **24/11 00h a 27/11 23h59**.
- **Não volta sozinho:** depois da Black, troque `og:image`, `og:image:secure_url` e `twitter:image` de `img/og-black.jpg` para `img/og.png` e ajuste `og:image:type`/`og:image:alt`.

## Regras
1. Faça mudanças pequenas e focadas no que foi pedido. Não reescreva nem reformate arquivos inteiros.
2. **Não altere textos existentes** (fichas, protocolos, artigos) sem pedido explícito.
3. Não apague nem edite os blocos marcados com `TEMA BLACK` (no `index.html`, em `protocolos/protocolos.css`, `protocolos/bpc-157/bpc-157.css` e na primeira linha de `protocolos.js` e `bpc-157.js`).
4. Não mova os dados de `dados/` de volta para o `index.html`.
5. Fontes: títulos em `Archivo` (variável `--display`, títulos grandes com `font-stretch:112%`), texto em `IBM Plex Sans`, números pequenos em `IBM Plex Mono`. Não adicione novas famílias.
6. **Celular e computador são ajustados separadamente.** Ao corrigir algo que falha só em um tipo de tela, use `@media (max-width:680px)` (celular) ou `@media (min-width:681px)` (computador) e preserve o outro. O iPhone (Safari) se comporta diferente do Chrome: evite `mask` em faixas muito largas com animação.
7. Animações: só `transform`/`opacity`, respeitar `prefers-reduced-motion` e nunca deixar conteúdo invisível se o JavaScript falhar (os cards e títulos que entram ao rolar têm varredura de segurança).
8. Caminhos sempre relativos (ex.: `img/foto.webp`).
9. Antes de terminar, abra o `index.html` (de preferência por um servidor local, ex.: `python -m http.server`) e confirme que não há erro de JavaScript no console, no celular e no computador.
10. Descreva no pull request o que mudou e em quais arquivos.
