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
    moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>'
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
      return '<a class="vial" href="' + CAT + v.slug + '"><img src="' + IMG + v.img + '.webp" alt="" width="52" height="64" loading="lazy" decoding="async"><span><b>' + v.nome + '</b><small>' + v.g + '</small></span></a>';
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
  var dias = function(t){ var m = /at[eé]\s+(\d+)\s+(dias?|semanas?|meses|m[eê]s)/i.exec(t); if(!m) return 0; var n = +m[1], u = m[2].toLowerCase(); return u.indexOf("sem") === 0 ? n*7 : u.indexOf("m") === 0 ? n*30 : n; };
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
