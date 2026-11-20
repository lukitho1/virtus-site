/* BLENDS DA BLACK WEEK (20/11 12h a 23/11 23h59)
   Cada blend tem uma ou mais versoes. Em cada versao:
     itens: [["produto", "gramatura"], ...]  (iguais aos de dados/precos.js)
     de / por: preco "de/por" do blend (sem R$, sem ponto de milhar)
     frete: true quando o blend tem frete gratis
   revelado: false esconde o blend do carrossel e das fichas.
   esgotado: true mostra "Esgotado" no card e na pagina e tira o botao de compra.
   foto: imagem em img/. pagina: blends/N/ (botao "Saiba mais"). */
window.VIRTUS_BLENDS = [
  {n: 1, nome: "Secar com Máxima Performance & Sem Flacidez", curto: "Retatrutida + CJC/Ipamorelin + GHK-Cu", frase: "Emagrecer sem flacidez.",
   foto: "blend-emagrecimento.webp", revelado: true,
   versoes: [
     {nome: "Versão Retatrutida", itens: [["retatrutida","40mg"],["ipamorelin-cjc","10mg / 10mg"],["ghk-cu","100mg"]], de: 3350, por: 2350},
     {nome: "Versão Tirzepatida", itens: [["tirzepatida","60mg"],["ipamorelin-cjc","10mg / 10mg"],["ghk-cu","100mg"]], de: 2590, por: 1813}
   ]},
  {n: 2, nome: "Secar com Energia & Zero Flacidez", curto: "Retatrutida + NAD+ + GHK-Cu", frase: "Queima de gordura com energia no topo e pele firme.",
   foto: "blend-energia.webp", revelado: true,
   versoes: [{nome: "Blend completo", itens: [["retatrutida","40mg"],["nad","1000mg"],["ghk-cu","100mg"]], de: 3350, por: 2350}]},
  {n: 3, nome: "Recuperação & Articulações", curto: "BPC-157 + TB-500", frase: "Protocolo Wolverine: reparo com mais mobilidade.",
   foto: "blend-recuperacao.webp", video: true, revelado: true,
   versoes: [{nome: "Intensivo", itens: [["bpc-157","20mg"],["tb-500","20mg"]], de: 1860, por: 1302}]},
  {n: 4, nome: "Lipedema & Desinflamação", curto: "Tirzepatida + BPC-157 + KPV", frase: "Para a gordura resistente de pernas e quadril.",
   foto: "blend-lipedema.webp", revelado: true,
   versoes: [{nome: "Blend completo", itens: [["tirzepatida","60mg"],["bpc-157","20mg"],["kpv","30mg"]], de: 2850, por: 1995}]},
  {n: 5, nome: "Desempenho Cognitivo & Máxima Produtividade", curto: "Semax + Selank", frase: "Foco e memória com a mente calma.",
   foto: "blend-cognitivo.webp", revelado: true,
   versoes: [
     {nome: "Essencial", itens: [["semax","10mg"],["selank","10mg"]], de: 1040, por: 830, frete: true},
     {nome: "N-acetyl", itens: [["n-acetyl-semax","50mg"],["n-acetyl-selank","10mg"]], de: 2020, por: 1414}
   ]},
  {n: 6, nome: "Mulher 40+ & Vitalidade", curto: "MOTS-c + NAD+ + GHK-Cu", frase: "Metabolismo, energia e colágeno depois dos 40.",
   foto: "blend-mulher40.webp", revelado: true,
   versoes: [
     {nome: "Essencial", itens: [["mots-c","40mg"],["nad","1000mg"],["ghk-cu","100mg"]], de: 2450, por: 1715},
     {nome: "360º", itens: [["mots-c","40mg"],["nad","1000mg"],["ghk-cu","100mg"],["pt-141","10mg"]], de: 2940, por: 2058}
   ]},
  {n: 7, nome: "Intestino & Eixo Intestino-Cérebro", curto: "BPC-157 + KPV", frase: "Atuação sinérgica no eixo intestino-cérebro.",
   foto: "blend-bpc-kpv.webp", revelado: true,
   versoes: [{nome: "Blend completo", itens: [["bpc-157","20mg"],["kpv","30mg"]], de: 1760, por: 1320, frete: true}]},
  {n: 8, nome: "Cabelo & Rejuvenescimento", curto: "GHK-Cu + AHK-Cu", frase: "Dois peptídeos de cobre: pele e folículo.",
   foto: "blend-cabelo.webp", esgotado: true, revelado: true,
   versoes: [{nome: "Blend completo", itens: [["ghk-cu","100mg"],["ahk-cu","100mg"]], de: 1240, por: 865}]}
];
/* compatibilidade: lista de produtos de cada blend (usada na ficha "Na Black Week") */
window.VIRTUS_BLENDS.forEach(function(b){
  var s = {}; b.versoes.forEach(function(v){ v.itens.forEach(function(i){ s[i[0]] = 1; }); }); b.itens = Object.keys(s);
});
