/* TEMA BLACK: liga ate o fim da Black */
if(Date.now()<=Date.parse("2026-11-27T23:59:59-03:00"))document.documentElement.classList.add("black");
const printButton = document.querySelector('#print');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());

/* ===== FICHA PREMIUM (visual e estrutura; nenhum texto da ficha e alterado) ===== */
(function(){
  "use strict";
  try{
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var el = function(tag, cls, html){ var n = document.createElement(tag); if(cls) n.className = cls; if(html != null) n.innerHTML = html; return n; };
  var esc = function(t){ return String(t).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); };
  var slug = (location.pathname.match(/protocolos\/([^\/]+)\/?/) || [])[1] || "";
  var ROOT = "../../";
  var FOTO = {"semax":"semax","n-acetyl-semax":"n-acetyl-semax","selank":"selank","n-acetyl-selank":"n-acetyl-selank","dsip":"dsip","nad":"nad","mots-c":"mots-c-10","ss-31":"ss-31","tesamorelin":"tesamorelin-10","retatrutida":"retatrutida-30","cagrilintide":"cagrilintide","aod-9604":"aod-9604","bpc-157":"bpc-157-10","tb-500":"tb-500-10","bpc-tb":"bpc-tb","ipamorelin-cjc":"ipamorelin-cjc","ghk-cu":"ghk-cu-50","melanotan-2":"melanotan-2","pt-141":"pt-141","thymosin-alpha-1":"thymosin-alpha-1","kpv":"kpv","glutationa":"glutationa","glow":"glow","klow":"klow","cartalax":"cartalax-20","tirzepatida":"tirzepatida","illumineuro":"illumineuro"};
  var FICHAS = [["5-amino-1mq","5-Amino-1MQ"],["aod-9604","AOD-9604"],["ara-290","ARA-290"],["bpc-157","BPC-157"],["bpc-tb","BPC-157 + TB-500"],["cartalax","Cartalax"],["dsip","DSIP"],["epitalon","Epitalon"],["ghk-cu","GHK-Cu"],["glow","GLOW"],["glutationa","Glutationa"],["ipamorelin-cjc","Ipamorelin + CJC-1295"],["klow","KLOW"],["kpv","KPV"],["melanotan-2","Melanotan II"],["mots-c","MOTS-C"],["nad","NAD+"],["pt-141","PT-141"],["retatrutida","Retatrutida"],["selank","Selank"],["semax","Semax"],["tb-500","TB-500"],["tesamorelin","Tesamorelin"],["thymosin-alpha-1","Timosina Alfa-1"],["tirzepatida","Tirzepatida"]];
  var brl = function(n){ return "R$ " + Number(n).toLocaleString("pt-BR", {minimumFractionDigits:2, maximumFractionDigits:2}); };
  var page = $(".page"), tr = $(".transcription"), head = $(".protocol-head"), h1 = $(".protocol-head h1");
  if(page && head && !tr){
    // fichas sem o bloco .transcription: agrupa o conteudo para o mesmo layout
    tr = el("div", "transcription");
    head.parentNode.insertBefore(tr, head);
    var n = tr.nextElementSibling;
    while(n && !n.classList.contains("closing")){ var nx = n.nextElementSibling; tr.appendChild(n); n = nx; }
  }
  if(!page || !tr || !head) return;
  document.documentElement.classList.add("fx");

  // ---- Topo fixo com progresso de leitura
  var sh = $(".site-header");
  if(sh){ sh.classList.add("fx-top"); sh.appendChild(el("span", "fx-progress")); }

  // ---- Um so "voltar" (o do topo); compartilhar no celular
  var tools = $(".page-tools");
  if(tools){
    var back = $("a", tools); if(back) back.classList.add("fx-dup");
    if(navigator.share || navigator.clipboard){
      var shb = el("button", "fx-share", "Compartilhar"); shb.type = "button";
      shb.addEventListener("click", function(){
        var d = {title: document.title, url: location.href};
        if(navigator.share){ navigator.share(d).catch(function(){}); }
        else navigator.clipboard.writeText(location.href).then(function(){ shb.textContent = "Link copiado"; setTimeout(function(){ shb.textContent = "Compartilhar"; }, 1800); });
      });
      tools.appendChild(shb);
    }
  }

  // ---- Abertura: foto do frasco + dados rapidos + compra
  var size = h1 && $("span", h1) ? $("span", h1).textContent.replace(/[()]/g, "").trim() : "";
  var frasco = (size.match(/(\d+[\.,]?\d*)\s*mg/i) || [])[1];
  var rows = $$("#dosagem tbody tr");
  var freq = rows.length && rows[0].children[2] ? rows[0].children[2].textContent.trim() : "";
  var nrefs = $$(".references > li").length;
  var heroWrap = el("div", "fx-hero");
  head.parentNode.insertBefore(heroWrap, head);
  heroWrap.appendChild(head);
  if(FOTO[slug]){
    var fig = el("figure", "fx-vial");
    fig.innerHTML = '<img src="' + ROOT + 'img/' + FOTO[slug] + '.webp" alt="" width="600" height="900" fetchpriority="high">';
    heroWrap.appendChild(fig);
  }
  var facts = [];
  if(size) facts.push(["Frasco", size.replace(/^frasco de\s*/i, "")]);
  if(freq) facts.push(["Frequência", freq]);
  if(rows.length) facts.push(["Fases de dose", String(rows.length)]);
  if(nrefs) facts.push(["Referências", nrefs + (nrefs === 1 ? " estudo" : " estudos")]);
  if(facts.length){
    var fx = el("div", "fx-facts", facts.map(function(f){ return '<div><small>' + f[0] + '</small><b>' + esc(f[1]) + '</b></div>'; }).join(""));
    head.appendChild(fx);
  }
  var buyBox = el("div", "fx-buy"); head.appendChild(buyBox);

  function mountBuy(){
    var P = window.VIRTUS_PRECOS || {};
    var pr = P[slug]; if(!pr) return;
    var keys = Object.keys(pr);
    var want = frasco ? (frasco.replace(",", ".") + "mg") : "";
    var g = keys.filter(function(k){ return k.replace(/\s/g, "") === want; })[0] || keys[0];
    var min = Math.min.apply(null, keys.map(function(k){ return pr[k]; }));
    buyBox.innerHTML = '<a class="fx-btn fx-btn-main" href="' + ROOT + '#' + slug + '">Ver no catálogo <span>' + (keys.length > 1 ? "a partir de " : "") + brl(min) + '</span></a>' +
      '<button type="button" class="fx-btn fx-btn-line" id="fxAdd">Adicionar à lista</button>';
    var add = $("#fxAdd");
    add.addEventListener("click", function(){
      var key = "virtus-lista-v1", cart = [];
      try{ cart = JSON.parse(localStorage.getItem(key) || "[]") || []; }catch(e){}
      var it = cart.filter(function(x){ return x.slug === slug && x.g === g; })[0];
      if(it) it.q++; else cart.push({slug: slug, g: g, q: 1});
      try{ localStorage.setItem(key, JSON.stringify(cart)); }catch(e){}
      var n = cart.reduce(function(a, x){ return a + x.q; }, 0);
      add.outerHTML = '<a class="fx-btn fx-btn-line fx-ok" href="' + ROOT + '#lista">✓ Na lista (' + n + ') · Ver lista</a>';
      try{ if(navigator.vibrate && matchMedia("(hover:none)").matches) navigator.vibrate(18); }catch(e){}
    });
  }
  if(window.VIRTUS_PRECOS) mountBuy();
  else { var sc = document.createElement("script"); sc.src = ROOT + "dados/precos.js"; sc.onload = mountBuy; document.head.appendChild(sc); }

  // ---- Indice que acompanha a leitura
  var secs = $$(".protocol-section, .editorial").filter(function(s){ return s.id && $("h2", s); });
  var toc = el("nav", "fx-toc"); toc.setAttribute("aria-label", "Seções da ficha");
  toc.innerHTML = secs.map(function(s, i){ return '<a href="#' + s.id + '"><i>' + String(i + 1).padStart(2, "0") + '</i>' + esc($("h2", s).textContent.trim()) + '</a>'; }).join("");
  var body = el("div", "fx-body");
  tr.parentNode.insertBefore(body, tr);
  body.appendChild(toc); body.appendChild(tr);
  var links = $$("a", toc);
  secs.forEach(function(s, i){ var h = $("h2", s); h.insertAdjacentHTML("afterbegin", '<span class="fx-n" aria-hidden="true">' + String(i + 1).padStart(2, "0") + '</span>'); });

  // ---- Dosagem: mini-seringa (escala U-100) + calculadora
  rows.forEach(function(r){
    var c = r.children[r.children.length - 1]; if(!c) return;
    var m = c.textContent.match(/(\d+[\.,]?\d*)\s*unidades/i); if(!m) return;
    var u = parseFloat(m[1].replace(",", "."));
    var w = Math.min(100, u);
    c.insertAdjacentHTML("beforeend", '<span class="fx-syr' + (u > 100 ? " over" : "") + '" aria-hidden="true"><span class="b"><i style="width:' + w + '%"></i></span><span class="p"></span></span>');
  });
  var recon = $$(".summary-table > div").filter(function(d){ return /reconstitu/i.test(($("dt", d) || {}).textContent || ""); })[0];
  var rm = recon ? recon.textContent.match(/(\d+[\.,]?\d*)\s*mL\s+por\s+frasco\s+de\s+(\d+[\.,]?\d*)\s*mg/i) : null;
  var tbl = $("#dosagem .table-scroll");
  if(tbl){
    var cb = el("a", "fx-btn fx-btn-line fx-calc", "Abrir na calculadora de reconstituição");
    cb.href = ROOT + "#calculadora";
    cb.addEventListener("click", function(){
      var x = {mg: rm ? rm[2].replace(",", ".") : (frasco || "").replace(",", "."), water: rm ? rm[1].replace(",", ".") : null};
      try{ localStorage.setItem("virtus-calc-prefill", JSON.stringify(x)); }catch(e){}
    });
    tbl.insertAdjacentElement("afterend", cb);
  }

  // ---- Materiais: cards com icone
  var mat = $("#materiais");
  if(mat){
    var hs = $$("h3", mat);
    if(hs.length){
      var grid = el("div", "fx-mat");
      hs.forEach(function(h){
        var card = el("div", "fx-mat-card");
        var t = h.textContent.toLowerCase();
        card.dataset.ic = /serin/.test(t) ? "syr" : /água|agua/.test(t) ? "drop" : /álcool|alcool|compress/.test(t) ? "wipe" : "vial";
        h.parentNode.insertBefore(card, h);
        card.appendChild(h);
        var n = card.nextElementSibling;
        while(n && n.tagName !== "H3" && !n.classList.contains("fx-mat-card")){ var nx = n.nextElementSibling; card.appendChild(n); n = nx; }
        grid.appendChild(card);
      });
      mat.appendChild(grid);
    }
  }

  // ---- Referencias recolhidas
  var refs = $(".references");
  if(refs){
    var det = el("details", "fx-refs");
    det.innerHTML = '<summary>Ver as ' + nrefs + ' referências</summary>';
    refs.parentNode.insertBefore(det, refs); det.appendChild(refs);
    var openRefs = function(){ if(location.hash === "#referencias") det.open = true; };
    openRefs(); addEventListener("hashchange", openRefs);
    $$('a[href="#referencias"]').forEach(function(a){ a.addEventListener("click", function(){ det.open = true; }); });
  }

  // ---- Fechamento: anterior / proximo
  var idx = FICHAS.map(function(f){ return f[0]; }).indexOf(slug);
  var closing = $(".closing");
  if(idx >= 0 && closing){
    var pv = FICHAS[(idx - 1 + FICHAS.length) % FICHAS.length], nx = FICHAS[(idx + 1) % FICHAS.length];
    var card = function(f, dir){ return '<a class="fx-pn ' + dir + '" href="../' + f[0] + '/">' + (FOTO[f[0]] ? '<img src="' + ROOT + 'img/' + FOTO[f[0]] + '.webp" alt="" loading="lazy" width="600" height="900">' : '<span class="ph"></span>') + '<span><small>' + (dir === "prev" ? "← Anterior" : "Próximo →") + '</small><b>' + esc(f[1]) + '</b></span></a>'; };
    closing.insertAdjacentHTML("beforebegin", '<nav class="fx-prevnext" aria-label="Outras fichas">' + card(pv, "prev") + card(nx, "next") + '</nav>');
  }

  // ---- Barra fixa no celular (compra)
  var mbar = el("div", "fx-mbar"); document.body.appendChild(mbar);
  var syncBar = function(){ if(!buyBox.firstChild) return; if(!mbar.firstChild){ mbar.innerHTML = buyBox.innerHTML.replace('id="fxAdd"', 'id="fxAdd2"'); var a2 = $("#fxAdd2"); if(a2) a2.addEventListener("click", function(){ var a1 = $("#fxAdd"); if(a1) a1.click(); mbar.innerHTML = ""; }); } };

  // ---- Rolagem: progresso, indice ativo, entrada suave
  if(!RM) secs.forEach(function(s){ s.classList.add("fx-rv"); });
  var tk = false;
  var onScroll = function(){
    tk = false;
    var d = document.documentElement, p = d.scrollTop / Math.max(1, d.scrollHeight - innerHeight);
    if(sh) sh.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
    var cur = null;
    secs.forEach(function(s){ var r = s.getBoundingClientRect(); if(r.top < innerHeight * .35) cur = s.id; if(r.top < innerHeight * .9 && r.bottom > 0) s.classList.add("in"); });
    links.forEach(function(a){ var on = a.getAttribute("href") === "#" + cur; if(on && !a.classList.contains("on") && toc.scrollWidth > toc.clientWidth + 4) toc.scrollTo({left: a.offsetLeft - 16, behavior: RM ? "auto" : "smooth"}); a.classList.toggle("on", on); });
    syncBar();
    var hb = buyBox.getBoundingClientRect();
    mbar.classList.toggle("on", !!buyBox.firstChild && hb.bottom < 0);
  };
  addEventListener("scroll", function(){ if(!tk){ tk = true; requestAnimationFrame(onScroll); } }, {passive:true});
  addEventListener("resize", onScroll);
  onScroll();
  setTimeout(function(){ secs.forEach(function(s){ if(s.getBoundingClientRect().top < innerHeight * 1.2) s.classList.add("in"); }); onScroll(); }, 1200);
  }catch(err){ document.documentElement.classList.remove("fx"); if(window.console) console.warn("ficha-ux", err); }
})();
