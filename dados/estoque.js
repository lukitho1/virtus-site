/* ESTOQUE: selos nos cards e na ficha.
   "esgotado"  -> aparece Esgotado e nao entra na lista de pedido
   "ultimas"   -> aparece "Ultimas unidades"
   {status:"ultimas", max:2} -> tambem limita a quantidade na lista
   Para tirar o selo, apague a linha. */
window.VIRTUS_ESTOQUE = {
  "tb-500":      {"10mg": "esgotado"},
  "ss-31":       {"50mg": "esgotado"},
  "ghk-cu":      {"50mg": "esgotado"},
  "glow":        {"70mg": "esgotado"},
  "tesamorelin": {"10mg": {status: "ultimas", max: 2}}
};
