/* Janela "Deseja adicionar Água BAC?" (catálogo, lista de pedido e blends).
   Cada frasco precisa de 3 mL. Opções: 3 mL e 10 mL (preços em dados/precos.js). */
(function(){
  "use strict";
  var ML_POR_FRASCO = 3;
  var IMG = (document.currentScript && document.currentScript.src || "").replace(/blends\/bac\.js.*$/, "img/");
  function precos(){ var p = (window.VIRTUS_PRECOS || {})["agua-bac"] || {}; return {p3: p["3 mL"] || 40, p10: p["10 mL"] || 60}; }
  var brl = function(n){ return "R$ " + Number(n).toLocaleString("pt-BR", {minimumFractionDigits:2, maximumFractionDigits:2}); };
  // combinação mais barata que cobre a necessidade
  function sugestao(need){
    var pr = precos(), best = {q3:0, q10:0, c:Infinity};
    if(need <= 0) return {q3:0, q10:0};
    for(var a = 0; a <= Math.ceil(need/10); a++){
      var b = Math.max(0, Math.ceil((need - a*10) / 3)), c = a*pr.p10 + b*pr.p3;
      if(c < best.c || (c === best.c && a + b < best.q3 + best.q10)) best = {q3:b, q10:a, c:c};
    }
    return {q3: best.q3, q10: best.q10};
  }
  var css = '.bac-ov{position:fixed;inset:0;z-index:95;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,.62);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);animation:bacFade .2s ease}' +
    '@media (min-width:681px){.bac-ov{align-items:center}}' +
    '@keyframes bacFade{from{opacity:0}}@keyframes bacUp{from{transform:translateY(40px);opacity:0}}' +
    '.bac{width:min(460px,100%);max-height:92vh;overflow:auto;background:#141519;color:#F6F6F7;border:1px solid rgba(255,255,255,.18);border-radius:22px 22px 0 0;padding:22px 20px calc(18px + env(safe-area-inset-bottom,0px));font-family:"IBM Plex Sans",Arial,sans-serif;animation:bacUp .28s cubic-bezier(.2,.8,.2,1)}' +
    '@media (min-width:681px){.bac{border-radius:22px;padding:26px}}' +
    '.bac h3{margin:0;font:900 1.45rem/1.15 Archivo,Arial,sans-serif;font-stretch:110%;letter-spacing:-.02em}' +
    '.bac .info{display:flex;gap:10px;align-items:flex-start;margin:12px 0 0;padding:11px 13px;border-radius:12px;background:rgba(45,99,255,.12);border:1px solid rgba(127,164,255,.35);font-size:.92rem;line-height:1.45;color:#DCE3F1}' +
    '.bac .info b{color:#fff}.bac .info i{font-style:normal;font-size:1.05rem}' +
    '.bac .opts{display:grid;gap:10px;margin-top:14px}' +
    '.bac .opt{display:grid;grid-template-columns:48px minmax(0,1fr) auto;gap:12px;align-items:center;padding:10px 12px 10px 10px;border-radius:14px;background:#1B1C22;border:1.5px solid rgba(255,255,255,.12);transition:border-color .2s}' +
    '.bac .opt.on{border-color:#FF5068;background:rgba(224,32,63,.1)}' +
    '.bac .opt img{width:48px;height:60px;object-fit:cover;object-position:50% 46%;border-radius:9px;background:#000}' +
    '.bac .opt b{display:block;font-size:1rem}.bac .opt small{display:block;color:#C8C9CE;font-size:.85rem}' +
    '.bac .qty{display:inline-flex;align-items:center;border:1px solid rgba(255,255,255,.2);border-radius:999px}' +
    '.bac .qty button{width:36px;height:36px;border:0;background:none;color:#fff;font-size:20px;cursor:pointer}' +
    '.bac .qty span{min-width:22px;text-align:center;font-weight:800}' +
    '.bac .status{margin:12px 0 0;font-size:.9rem;color:#C8C9CE}.bac .status.ok{color:#7BE3A4}' +
    '.bac .acts{display:grid;gap:8px;margin-top:16px}' +
    '.bac .acts button{min-height:50px;border-radius:999px;border:0;font:800 15px/1.2 "IBM Plex Sans",Arial,sans-serif;cursor:pointer}' +
    '.bac .go{background:#E0203F;color:#fff}.bac .go:hover{background:#FF5068}' +
    '.bac .no{background:none;color:#C8C9CE;text-decoration:underline;text-underline-offset:4px;min-height:40px!important}';
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* opts: {vials, have (mL), confirm, skip, done(sel)}  sel = {q3, q10} ou null */
  function ask(opts){
    var vials = Math.max(1, opts.vials || 1), have = opts.have || 0, need = Math.max(0, vials * ML_POR_FRASCO - have);
    var pr = precos(), sel = sugestao(need);
    var ov = document.createElement("div"); ov.className = "bac-ov"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-label", "Adicionar Água BAC");
    function row(k, ml, price, img){
      return '<div class="opt" data-k="' + k + '"><img src="' + IMG + img + '.webp" alt=""><span><b>Água BAC ' + ml + ' mL</b><small>' + brl(price) + ' · ' + (ml === 3 ? '1 frasco' : 'até 3 frascos') + '</small></span>' +
        '<span class="qty"><button type="button" data-d="-1" aria-label="Diminuir">−</button><span>0</span><button type="button" data-d="1" aria-label="Aumentar">+</button></span></div>';
    }
    ov.innerHTML = '<div class="bac"><h3>Deseja adicionar Água BAC?</h3>' +
      '<p class="info"><i>💧</i><span>Para reconstituir, <b>cada frasco (vial) precisa de 3 mL</b> de água BAC. ' +
      (vials > 1 ? 'Seu pedido tem <b>' + vials + ' frascos</b>: são <b>' + (vials * ML_POR_FRASCO) + ' mL</b>.' : 'Seu pedido tem <b>1 frasco</b>: são <b>3 mL</b>.') +
      (have ? ' Você já tem ' + have + ' mL na lista.' : '') + '</span></p>' +
      '<div class="opts">' + row("q3", 3, pr.p3, "agua-bac-3") + row("q10", 10, pr.p10, "agua-bac-10") + '</div>' +
      '<p class="status"></p><div class="acts"><button type="button" class="go"></button><button type="button" class="no">' + (opts.skip || "Não, obrigado") + '</button></div></div>';
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow; document.body.style.overflow = "hidden";
    function render(){
      ["q3","q10"].forEach(function(k){ var r = ov.querySelector('[data-k="' + k + '"]'); r.querySelector(".qty span").textContent = sel[k]; r.classList.toggle("on", sel[k] > 0); });
      var ml = sel.q3 * 3 + sel.q10 * 10, tot = sel.q3 * pr.p3 + sel.q10 * pr.p10, s = ov.querySelector(".status");
      s.className = "status" + (ml + have >= vials * ML_POR_FRASCO ? " ok" : "");
      s.textContent = ml ? ml + " mL de água BAC · " + brl(tot) + (ml + have >= vials * ML_POR_FRASCO ? " · suficiente para o pedido" : " · ainda faltam " + (vials * ML_POR_FRASCO - have - ml) + " mL") : "Nenhuma água BAC selecionada.";
      ov.querySelector(".go").textContent = (ml ? (opts.confirm || "Adicionar") : (opts.confirmEmpty || opts.skip || "Continuar sem água BAC"));
    }
    function close(res){ document.body.style.overflow = prevOverflow; ov.remove(); document.removeEventListener("keydown", onKey); if(opts.done) opts.done(res); }
    function onKey(e){ if(e.key === "Escape") close(null); }
    document.addEventListener("keydown", onKey);
    ov.addEventListener("click", function(e){
      if(e.target === ov){ close(null); return; }
      var d = e.target.closest("[data-d]");
      if(d){ var k = d.closest(".opt").dataset.k; sel[k] = Math.max(0, Math.min(20, sel[k] + (+d.dataset.d))); render(); return; }
      if(e.target.closest(".go")){ close(sel.q3 + sel.q10 > 0 ? {q3: sel.q3, q10: sel.q10} : null); return; }
      if(e.target.closest(".no")) close(null);
    });
    render();
    setTimeout(function(){ var g = ov.querySelector(".go"); if(g) g.focus({preventScroll: true}); }, 50);
  }
  function linhas(sel){
    if(!sel) return {txt: "", total: 0};
    var pr = precos(), out = [], t = 0;
    if(sel.q10){ out.push("• Água BAC 10 mL × " + sel.q10 + " — " + brl(sel.q10 * pr.p10)); t += sel.q10 * pr.p10; }
    if(sel.q3){ out.push("• Água BAC 3 mL × " + sel.q3 + " — " + brl(sel.q3 * pr.p3)); t += sel.q3 * pr.p3; }
    return {txt: out.join("\n"), total: t};
  }
  window.VirtusBAC = {ask: ask, linhas: linhas, brl: brl, ML_POR_FRASCO: ML_POR_FRASCO};
})();
