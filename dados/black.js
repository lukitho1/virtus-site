/* PRECOS DA BLACK WEEK: INDIVIDUAIS (24 a 27/11)
   Entram sozinhos no inicio e saem sozinhos no fim (horario de Brasilia).
   Para conferir antes da data: abra o site com ?simular=individuais no fim do endereco.
   fixo:        preco unico da Black
   progressivo: preco por unidade levando 1, 2 e 3 ou mais (mesmo peptideo e gramatura)
   maxNivel:    limita o progressivo (ex.: so ate o preco de 2 unidades) */
window.VIRTUS_BLACK = {
  inicio: "2026-11-20T00:00:00-03:00",
  fim:    "2026-11-27T23:59:59-03:00",
  freteGratisACada: 3,
  fixo: {
    "illumineuro":      {"48mg": 475},
    "mots-c":           {"10mg": 440},
    "dsip":             {"10mg": 360},
    "melanotan-2":      {"10mg": 400},
    "n-acetyl-semax":   {"50mg": 1175},
    "n-acetyl-selank":  {"10mg": 440},
    "selank":           {"50mg": 920},
    "tb-500":           {"20mg": 790},
    "ghk-cu":           {"100mg": 520},
    "cartalax":         {"20mg": 440},
    "ss-31":            {"100mg": 1080},
    "aod-9604":         {"5mg": 550},
    "retatrutida":      {"30mg": 1240},
    "thymosin-alpha-1": {"10mg": 520}
  },
  /* 1 unidade = 10% off; 2 unidades = 20% off; 3 ou mais = 30% off (preco por unidade) */
  progressivo: {
    "mots-c":         {"40mg": [855, 760, 665]},
    "ipamorelin-cjc": {"10mg / 10mg": [765, 680, 595]},
    "bpc-157":        {"10mg": [531, 470, 410]},
    "retatrutida":    {"40mg": [1665, 1480, 1295]},
    "tirzepatida":    {"60mg": [981, 981, 760]},  /* sem o nivel de 20%: 1 e 2 un a R$ 981, 3+ a R$ 760 */
    "klow":           {"80mg": [891, 790, 690]},
    "tesamorelin":    {"10mg": [621, 550, 480], "20mg": [891, 790, 690]},
    "semax":          {"10mg": [495, 440, 385]},
    "selank":         {"10mg": [441, 390, 340]}
  },
  maxNivel: {}
};
