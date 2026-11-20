/* Paginas dos blends: so estrutura e visual. Nenhum texto do descritivo e alterado. */
(function(){
  "use strict";
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var IMG = "../../img/";
  var CAT = "../../#";
  var ICONS = {
    bloat:'<path d="M12 3c4 0 7 3.5 7 8 0 5-3 10-7 10s-7-5-7-10c0-4.5 3-8 7-8Z"/><path d="M9 11h6M9 15h6"/>',
    shield:'<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z"/><path d="m9.5 12 1.8 1.8L15 10"/>',
    brain:'<path d="M9 4a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 10a3 3 0 0 0 1 2.2A3 3 0 0 0 6 17a3 3 0 0 0 3 3V4Zm6 0a3 3 0 0 1 3 3v.2A3 3 0 0 1 20 10a3 3 0 0 1-1 2.2A3 3 0 0 1 18 17a3 3 0 0 1-3 3V4Z"/>',
    bolt:'<path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z"/>',
    sparkle:'<path d="M12 3l1.8 4.6L18 9.5l-4.2 1.9L12 16l-1.8-4.6L6 9.5l4.2-1.9L12 3ZM18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"/>',
    muscle:'<path d="M4 15c2-6 5-9 8-9 1.5 0 2 1.5 1 2.5-1 1-2 1-2 2.5 0 2 3 1 5 0 2.5-1.2 4 1 4 3.5 0 3-4 5.5-9 5.5-4 0-6-2-7-5Z"/>',
    chart:'<path d="M4 19h16"/><path d="M5 15l4-4 3 2 6-7"/><path d="M15 6h3v3"/>',
    moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>',
    joint:'<path d="M8 3v5a4 4 0 0 0 8 0V3M12 12v9M8 21h8"/>',
    run:'<circle cx="14" cy="4.5" r="2"/><path d="m6 20 4-6 3 2 2-5 4 2M9 11l3-3 3 1"/>',
    drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
    flame:'<path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.5 1 2.5 2 3 0-3 0-5 1-7.5Z"/>',
    heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>',
    leg:'<path d="M10 3v7l-2 8a2 2 0 0 0 2 3h5M14 3v8l1 5"/>',
    hair:'<path d="M5 20c0-8 3-15 7-15s7 7 7 15M9 20c0-6 1-10 3-12M15 20c0-6-1-10-3-12"/>',
    battery:'<rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 11v2M6 10v4M9 10v4"/>'
  };
  var BLENDS = {
    "1": {
      vials: [
        {img:"retatrutida-40", nome:"Retatrutida", g:"40mg", slug:"retatrutida"},
        {img:"ipamorelin-cjc", nome:"Ipamorelin + CJC-1295", g:"10mg/10mg", slug:"ipamorelin-cjc"},
        {img:"ghk-cu-100", nome:"GHK-Cu", g:"100mg", slug:"ghk-cu"}
      ],
      perfil: ["sparkle","muscle","chart","moon"],
      sinergia: ["retatrutida-40","ipamorelin-cjc","ghk-cu-100"]
    },
    "2": {
      vials: [
        {img:"retatrutida-40", nome:"Retatrutida", g:"40mg", slug:"retatrutida"},
        {img:"nad", nome:"NAD+", g:"1000mg", slug:"nad"},
        {img:"ghk-cu-100", nome:"GHK-Cu", g:"100mg", slug:"ghk-cu"}
      ],
      perfil: ["battery","chart","sparkle","muscle"],
      sinergia: ["retatrutida-40","nad","ghk-cu-100"]
    },
    "3": {
      vials: [
        {img:"bpc-157-20", nome:"BPC-157", g:"20mg", slug:"bpc-157"},
        {img:"tb-500-20", nome:"TB-500", g:"20mg", slug:"tb-500"}
      ],
      perfil: ["joint","shield","muscle","run"],
      sinergia: ["bpc-157-20","tb-500-20"]
    },
    "4": {
      vials: [
        {img:"tirzepatida", nome:"Tirzepatida", g:"60mg", slug:"tirzepatida"},
        {img:"bpc-157-20", nome:"BPC-157", g:"20mg", slug:"bpc-157"},
        {img:"kpv", nome:"KPV", g:"30mg", slug:"kpv"}
      ],
      perfil: ["leg","flame","drop","shield"],
      sinergia: ["tirzepatida","bpc-157-20","kpv"]
    },
    "5": {
      vials: [
        {img:"semax", nome:"Semax", g:"10mg", slug:"semax"},
        {img:"selank", nome:"Selank", g:"10mg", slug:"selank"}
      ],
      perfil: ["brain","bolt","moon","battery"],
      sinergia: ["semax","selank"]
    },
    "6": {
      vials: [
        {img:"mots-c-40", nome:"MOTS-c", g:"40mg", slug:"mots-c"},
        {img:"nad", nome:"NAD+", g:"1000mg", slug:"nad"},
        {img:"ghk-cu-100", nome:"GHK-Cu", g:"100mg", slug:"ghk-cu"}
      ],
      perfil: ["heart","flame","brain","sparkle"],
      sinergia: ["mots-c-40","nad","ghk-cu-100","pt-141"]
    },
    "8": {
      vials: [
        {img:"ghk-cu-100", nome:"GHK-Cu", g:"100mg", slug:"ghk-cu"},
        {img:"ahk-cu", nome:"AHK-Cu", g:"100mg", slug:"ahk-cu"}
      ],
      perfil: ["hair","hair","sparkle","shield"],
      sinergia: ["ghk-cu-100","ahk-cu"]
    },
    "7": {
      vials: [
        {img:"bpc-157-20", nome:"BPC-157", g:"20mg", slug:"bpc-157"},
        {img:"kpv", nome:"KPV", g:"30mg", slug:"kpv"}
      ],
      perfil: ["bloat","shield","brain","bolt"],
      sinergia: ["kpv","bpc-157-20"]
    }
  };
  var svg = function(k){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || "") + '</svg>'; };
  var $ = function(s, r){ return (r || document).querySelector(s); };
  var $$ = function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var key = document.body.getAttribute("data-blend");
  var cfg = BLENDS[key] || {vials:[], perfil:[], sinergia:[]};
  var buy = $("article .buy");
  var heroImg = $(".hero figure img");

  // topo: barra de progresso de leitura
  var top = $("header.top");
  if(top){ var bar = document.createElement("span"); bar.className = "read-bar"; bar.setAttribute("aria-hidden","true"); top.appendChild(bar); }

  // abertura: frascos do blend + botao de compra (mesmo texto do botao final)
  var comp = $(".composition");
  if(comp && cfg.vials.length){
    comp.insertAdjacentHTML("afterend", '<div class="vials">' + cfg.vials.map(function(v){
      return '<a class="vial" href="' + CAT + v.slug + '">' + (v.img ? '<img src="' + IMG + v.img + '.webp" alt="" width="52" height="64" loading="lazy" decoding="async">' : '<span class="vial-ph">' + svg("drop") + '</span>') + '<span><b>' + v.nome + '</b><small>' + v.g + '</small></span></a>';
    }).join("") + '</div>');
  }
  if(buy && $(".intro")){
    var heroBuy = buy.cloneNode(true); heroBuy.classList.add("red"); heroBuy.id = "heroBuy";
    var wrap = document.createElement("div"); wrap.className = "hero-cta"; wrap.appendChild(heroBuy);
    $(".intro").appendChild(wrap);
  }

  // para quem e: icones
  $$("#perfil .rows li").forEach(function(li, i){ li.insertAdjacentHTML("afterbegin", '<span class="ic">' + svg(cfg.perfil[i] || "sparkle") + '</span>'); });

  // sinergia: foto do frasco + numero
  $$("#sinergia .rows li").forEach(function(li, i){
    var t = cfg.sinergia[i];
    var inner = document.createElement("div"); while(li.firstChild) inner.appendChild(li.firstChild);
    li.innerHTML = (t ? '<img class="thumb" src="' + IMG + t + '.webp" alt="" width="62" height="76" loading="lazy" decoding="async">' : '<span></span>') + '<span class="num" aria-hidden="true">0' + (i + 1) + '</span>';
    li.appendChild(inner);
  });

  // rendimento: barra proporcional ao tempo de cada item
  var dias = function(t){ var m = /(?:at[eé]|de)\s+(\d+)\s+(dias?|semanas?|meses|m[eê]s)/i.exec(t); if(!m) return 0; var n = +m[1], u = m[2].toLowerCase(); return u.indexOf("sem") === 0 ? n*7 : u.indexOf("m") === 0 ? n*30 : n; };
  var rItems = $$("#rendimento .rows li").map(function(li){ return {li:li, d:dias(li.textContent)}; });
  var maxD = Math.max.apply(null, rItems.map(function(x){ return x.d; }).concat([1]));
  rItems.forEach(function(x){ if(x.d) x.li.insertAdjacentHTML("beforeend", '<span class="tl" aria-hidden="true"><i style="--w:' + Math.max(8, Math.round(x.d / maxD * 100)) + '%"></i></span>'); });

  // fechamento: painel com a foto do blend e o botao original
  if(buy){
    var box = document.createElement("div"); box.className = "closing";
    if(heroImg){ var im = heroImg.cloneNode(); im.removeAttribute("fetchpriority"); im.loading = "lazy"; im.alt = ""; box.appendChild(im); }
    buy.parentNode.insertBefore(box, buy); box.appendChild(buy);
  }

  // barra fixa de compra no celular
  var mb = null;
  if(buy){
    mb = document.createElement("div"); mb.className = "mbuy";
    var mbBtn = buy.cloneNode(true); mbBtn.removeAttribute("id"); mb.appendChild(mbBtn);
    document.body.appendChild(mb);
  }


  // ===== Oferta da Black: preco, versao, comparativo e mensagem do WhatsApp =====
  function loadScript(src){ return new Promise(function(ok){ var t = document.createElement("script"); t.src = src; t.onload = ok; t.onerror = ok; document.head.appendChild(t); }); }
  function mountOffer(){
    var O = window.VirtusOferta; if(!O) return;
    var b = O.blend(key); if(!b) return;
    var fase = O.fase(), vi = 0;
    var intro = $(".intro"), cta = $(".hero-cta");
    var box = document.createElement("div"); box.className = "offer";
    if(intro) intro.insertBefore(box, cta || null);
    var tbl = null;
    if(fase === "ativo"){
      var sec = document.createElement("section"); sec.id = "valores"; sec.className = "rv in";
      sec.innerHTML = '<h2>Valores na Black Week</h2><div class="cmp-wrap"></div>';
      var rs = document.getElementById("rendimento"); if(rs) rs.parentNode.insertBefore(sec, rs);
      tbl = $(".cmp-wrap", sec);
      var nv = $(".layout > nav"); if(nv){ var a = document.createElement("a"); a.href = "#valores"; a.textContent = "Valores na Black Week"; var ra = $('a[href="#rendimento"]', nv); nv.insertBefore(a, ra || null); links.splice(ra ? links.indexOf(ra) : links.length, 0, a); secs.splice(secs.length - 1, 0, sec); }
    }
    function render(){
      var v = b.versoes[vi], r = O.resumo(v);
      var ver = b.versoes.length > 1 ? '<div class="ver" role="group" aria-label="Versão">' + b.versoes.map(function(x, i){ return '<button type="button" data-v="' + i + '" aria-pressed="' + (i === vi) + '">' + x.nome + '</button>'; }).join("") + '</div>' : '';
      if(fase === "antes") box.innerHTML = ver + '<p class="soon">Preço revelado em 20/11, às 12h</p>';
      else if(fase === "fim") box.innerHTML = '<p class="soon">Os blends da Black Week foram encerrados em 23/11.</p>';
      else box.innerHTML = ver + '<div class="price"><s>de ' + O.brl(r.de) + '</s><b>' + O.brl(r.por) + '</b><em>-' + r.off + '%</em></div>' +
        '<p class="save">Comprando individualmente na Black: <s>' + O.brl(r.somaBlack) + '</s><br>Economia de ' + O.brl(r.economia) + ' sobre a tabela</p>' +
        '<div class="tags">' + (r.frete ? '<span class="ok">Frete grátis</span>' : '') + '<span>Lote de 5 kits</span><span>Até 23/11, 23h59</span></div>';
      if(tbl) tbl.innerHTML = '<div class="cmp-scroll"><table class="cmp"><thead><tr><th>Item</th><th>Tabela</th><th>Individual na Black<br><small>24 a 27/11</small></th></tr></thead><tbody>' +
        r.itens.map(function(x){
          var bl = x.black ? (x.black.length > 1 ? x.black.map(function(t, k){ return '<span>' + (k + 1) + (k === x.black.length - 1 && x.black.length === 3 ? '+' : '') + ' un <b>' + O.brl(t) + '</b></span>'; }).join("") : '<b>' + O.brl(x.black[0]) + '</b>') : '—';
          return '<tr><td><b>' + x.nome + '</b> ' + x.g.replace(/\s*\/\s*/g, "/") + '</td><td>' + (x.tabela ? O.brl(x.tabela) : '—') + '</td><td class="tiers">' + bl + '</td></tr>';
        }).join("") +
        '</tbody><tfoot><tr><td>Comprando individualmente</td><td><s>' + O.brl(r.somaTabela) + '</s></td><td><s>' + O.brl(r.somaBlack) + '</s></td></tr>' +
        '<tr class="hl"><td>No blend' + (b.versoes.length > 1 ? ' · ' + v.nome : '') + '</td><td colspan="2"><b>' + O.brl(r.por) + '</b> <em>-' + r.off + '%</em>' + (r.frete ? ' · frete grátis' : '') + '</td></tr></tfoot></table></div>' +
        '<p class="cmp-note">O blend é sempre a melhor compra: mesmo comprando individualmente na Black, os itens saem mais caros.</p>';
      var url = fase === "ativo" ? O.wa(O.msg(b, vi)) : O.wa("Olá, equipe Virtus! Tenho interesse no Blend " + b.n + " · " + b.nome + ".");
      $$("a.buy").forEach(function(a){ a.href = url; });
    }
    box.addEventListener("click", function(e){ var t = e.target.closest("[data-v]"); if(!t) return; vi = +t.dataset.v; render(); });
    render();
  }
  var ROOTD = "../../dados/";
  loadScript(ROOTD + "precos.js").then(function(){ return loadScript(ROOTD + "black.js"); }).then(function(){ return loadScript(ROOTD + "blends.js"); }).then(function(){ return loadScript("../oferta.js"); }).then(mountOffer);

  // indice que acompanha a leitura
  var links = $$(".layout > nav a");
  var secs = links.map(function(a){ return document.getElementById(a.getAttribute("href").slice(1)); }).filter(Boolean);
  var navBox = $(".layout > nav");
  var setOn = function(id){ links.forEach(function(a){ var on = a.getAttribute("href") === "#" + id; if(on && !a.classList.contains("on") && navBox && navBox.scrollWidth > navBox.clientWidth) navBox.scrollTo({left: a.offsetLeft - 16, behavior: RM ? "auto" : "smooth"}); a.classList.toggle("on", on); }); };

  // entrada suave das secoes (com garantia)
  if(!RM){ document.documentElement.classList.add("js-anim"); secs.forEach(function(s){ s.classList.add("rv"); }); }
  var reveal = function(){ secs.forEach(function(s){ var r = s.getBoundingClientRect(); if(r.top < innerHeight * 0.88 && r.bottom > 0) s.classList.add("in"); }); };

  var heroCta = $("#heroBuy"), closing = $(".closing");
  var tick = false;
  var onScroll = function(){
    tick = false;
    var h = document.documentElement, p = h.scrollTop / Math.max(1, h.scrollHeight - innerHeight);
    if(top) top.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
    var cur = secs[0] ? secs[0].id : null;
    secs.forEach(function(s){ if(s.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id; });
    if(cur) setOn(cur);
    reveal();
    if(mb){
      var a = heroCta ? heroCta.getBoundingClientRect().bottom < 0 : true;
      var b = closing ? closing.getBoundingClientRect().top < innerHeight : false;
      mb.classList.toggle("on", a && !b);
    }
  };
  addEventListener("scroll", function(){ if(!tick){ tick = true; requestAnimationFrame(onScroll); } }, {passive:true});
  addEventListener("resize", onScroll);
  onScroll();
  setTimeout(reveal, 300);
  setTimeout(function(){ secs.forEach(function(s){ if(s.getBoundingClientRect().top < innerHeight * 1.2) s.classList.add("in"); }); }, 2500);
})();
