/* Ofertas dos blends: periodo, precos, comparativo e mensagem do WhatsApp.
   Usa dados/precos.js, dados/black.js e dados/blends.js. */
(function(){
  "use strict";
  var INI = Date.parse("2026-11-20T12:00:00-03:00"), FIM = Date.parse("2026-11-23T23:59:59-03:00");
  var PHONE = "5581985779232";
  var NOMES = {"retatrutida":"Retatrutida","tirzepatida":"Tirzepatida","ipamorelin-cjc":"Ipamorelin + CJC-1295","ghk-cu":"GHK-Cu","ahk-cu":"AHK-Cu","nad":"NAD+","bpc-157":"BPC-157","tb-500":"TB-500","kpv":"KPV","semax":"Semax","selank":"Selank","n-acetyl-semax":"N-Acetyl Semax","n-acetyl-selank":"N-Acetyl Selank","mots-c":"MOTS-c","pt-141":"PT-141"};
  var q = new URLSearchParams(location.search).get("simular");
  function fase(){
    if(q === "blends") return "ativo";
    var t = Date.now(); return t < INI ? "antes" : t <= FIM ? "ativo" : "fim";
  }
  var brl = function(n){ return "R$ " + Number(n).toLocaleString("pt-BR", {minimumFractionDigits:2, maximumFractionDigits:2}); };
  function tabela(slug, g){ return ((window.VIRTUS_PRECOS || {})[slug] || {})[g]; }
  function black(slug, g){
    var B = window.VIRTUS_BLACK; if(!B) return null;
    var pr = (B.progressivo[slug] || {})[g];
    if(pr){ var mx = ((B.maxNivel || {})[slug] || {})[g] || pr.length; return pr.slice(0, mx); }
    var f = (B.fixo[slug] || {})[g]; return f != null ? [f] : null;
  }
  function itens(v){
    return v.itens.map(function(i){ var t = tabela(i[0], i[1]); return {slug:i[0], g:i[1], nome:NOMES[i[0]] || i[0], tabela:t, black:black(i[0], i[1])}; });
  }
  function resumo(v){
    var it = itens(v), somaT = 0, somaB = 0;
    it.forEach(function(x){ somaT += x.tabela || 0; somaB += x.black ? x.black[0] : (x.tabela || 0); });
    return {itens: it, somaTabela: somaT, somaBlack: somaB, de: v.de, por: v.por, off: Math.round((1 - v.por / v.de) * 100), economia: v.de - v.por, frete: !!v.frete};
  }
  function g(t){ return t.replace(/\s*\/\s*/g, "/"); }
  function msg(b, vi, bac){
    var v = b.versoes[vi || 0], r = resumo(v);
    var ag = (window.VirtusBAC && bac) ? window.VirtusBAC.linhas(bac) : {txt: "", total: 0};
    var linhas = r.itens.map(function(x){
      var s = "• " + x.nome + " " + g(x.g) + (x.tabela ? " — tabela " + brl(x.tabela) : "");
      if(x.black){
        s += " · individual na Black " + brl(x.black[0]);
        if(x.black.length > 1) s += " (2 un " + brl(x.black[1]) + " cada" + (x.black[2] ? " · 3+ un " + brl(x.black[2]) + " cada" : "") + ")";
      }
      return s;
    });
    var nomeV = b.versoes.length > 1 ? " (" + v.nome + ")" : "";
    return "Olá, equipe Virtus! Tenho interesse no Blend " + b.n + " · " + b.nome + nomeV + ".\n\n" +
      "Itens do blend:\n" + linhas.join("\n") + "\n\n" +
      "Valor final do blend: " + brl(r.por) +
      (r.frete ? " (com frete grátis)" : "") +
      (ag.txt ? "\n\nÁgua BAC para reconstituir:\n" + ag.txt + "\n\nTotal do pedido: " + brl(r.por + ag.total) : "") +
      "\n\nPodem confirmar a disponibilidade?";
  }
  function wa(text){ return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text); }
  function blend(n){ return (window.VIRTUS_BLENDS || []).filter(function(b){ return String(b.n) === String(n); })[0]; }
  function frascos(b, vi){ return b.versoes[vi || 0].itens.length; }
  window.VirtusOferta = {frascos: frascos, fase: fase, brl: brl, resumo: resumo, msg: msg, wa: wa, blend: blend, INI: INI, FIM: FIM};
})();
