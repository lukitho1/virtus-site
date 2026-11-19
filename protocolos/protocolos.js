/* TEMA BLACK: liga ate o fim da Black */
if(Date.now()<=Date.parse("2026-11-27T23:59:59-03:00"))document.documentElement.classList.add("black");
const records = [
  {
    "id": "semax",
    "name": "Semax",
    "category": "Cognição e equilíbrio emocional",
    "group": "cognicao",
    "query": "Semax",
    "summary": "Sinais de adaptação dos neurônios após uma lesão",
    "size": "10 mg",
    "question": "O que os pesquisadores mediram nos neurônios e o que avaliaram nas pessoas em recuperação após um AVC?",
    "note": "Distinga medidas de memória, testes de atenção e marcadores laboratoriais. São desfechos diferentes e devem ser interpretados separadamente.",
    "trial": null,
    "photo": "semax"
  },
  {
    "id": "n-acetyl-semax",
    "name": "N-Acetyl Semax",
    "category": "Cognição e equilíbrio emocional",
    "group": "cognicao",
    "query": "N-acetyl Semax",
    "summary": "A variante N-acetilada do Semax",
    "question": "Quais resultados sobre atenção e memória vêm de estudos que usaram o próprio N-Acetyl Semax?",
    "note": "Um grupo acetil modifica a extremidade N-terminal do peptídeo. Para saber se a mudança altera a duração da molécula no organismo ou seu efeito nos neurônios, seria preciso comparar as duas formas nas mesmas condições. Medir BDNF, uma proteína ligada à adaptação das conexões nervosas, responderia a uma pergunta. Medir memória em um teste responderia a outra.",
    "trial": null,
    "photo": "n-acetyl-semax",
    "intro": "O N-Acetyl Semax recebe esse nome porque uma de suas extremidades carrega um grupo acetil. É uma diferença pequena na estrutura, mas importante para interpretar a pesquisa sobre memória e atenção. O experimento que mediu BDNF no hipocampo de ratos, por exemplo, avaliou o Semax. O que a acetilação muda nessa resposta é uma pergunta sobre a variante."
  },
  {
    "id": "n-acetyl-selank",
    "name": "N-Acetyl Selank",
    "category": "Cognição e equilíbrio emocional",
    "group": "cognicao",
    "query": "N-acetyl Selank",
    "summary": "Acetilação e pesquisa sobre ansiedade",
    "question": "Que comportamentos foram avaliados nos estudos que usaram a variante N-acetilada do Selank?",
    "note": "A acetilação modifica a estrutura química do peptídeo. O nome da variante, por si só, não informa se ela permanece mais tempo no organismo ou se a mudança afeta a resposta ao estresse. Essas duas questões requerem medidas diferentes, como acompanhar a concentração da molécula ao longo do tempo e registrar a evolução dos sintomas em uma escala de ansiedade.",
    "trial": null,
    "photo": "n-acetyl-selank",
    "intro": "O N-Acetyl Selank é uma variante do Selank com um grupo acetil em uma extremidade. A distinção ganha importância nos estudos de ansiedade: a comparação com fenazepam, por exemplo, avaliou o Selank original. Para atribuir à variante uma mudança nos sintomas ou na sonolência, é preciso saber qual forma os participantes receberam."
  },
  {
    "id": "selank",
    "name": "Selank",
    "category": "Cognição e equilíbrio emocional",
    "group": "cognicao",
    "query": "Selank",
    "summary": "O peptídeo estudado na resposta à ansiedade",
    "size": "5 mg",
    "question": "Que mudanças nas escalas de ansiedade os estudos observaram e o que se sabe sobre a sonolência?",
    "note": "Ao comparar artigos, identifique a população estudada e a escala utilizada para avaliar o comportamento.",
    "trial": null,
    "photo": "selank"
  },
  {
    "id": "illumineuro",
    "name": "Illumineuro",
    "category": "Cognição e equilíbrio emocional",
    "group": "cognicao",
    "query": "Semax OR Selank OR Pinealon",
    "summary": "Semax, Selank e Pinealon em combinação",
    "question": "Quais resultados vêm de estudos de Semax, Selank ou Pinealon e quais avaliaram a combinação?",
    "note": "Uma proteína medida no cérebro de um animal e o desempenho de uma pessoa num teste de atenção dão informações distintas. Nos estudos da mistura, a comparação relevante seria entre grupos submetidos ao mesmo teste. Assim seria possível estimar a ação da combinação e, se houvesse grupos com os ingredientes isolados, que contribuição caberia a cada um.",
    "trial": null,
    "photo": "illumineuro",
    "intro": "O Illumineuro reúne Semax, Selank e Pinealon. As pesquisas dos componentes partiram de perguntas diferentes. Com o Semax, por exemplo, pesquisadores mediram sinais de adaptação dos neurônios. Com o Selank, acompanharam sintomas de ansiedade. Para entender o efeito da combinação sobre a cognição, é preciso definir o que se quer observar: atenção, memória ou uma mudança no comportamento."
  },
  {
    "id": "dsip",
    "name": "DSIP",
    "category": "Sono",
    "group": "sono",
    "query": "delta sleep inducing peptide",
    "summary": "Ondas delta e continuidade do sono",
    "size": "5 mg",
    "question": "O DSIP mudou o tempo para adormecer, o número de despertares ou a distribuição dos estágios do sono?",
    "note": "Separe a duração total do sono, os estágios medidos e a percepção de descanso relatada pelos participantes.",
    "trial": null,
    "photo": "dsip"
  },
  {
    "id": "nad",
    "name": "NAD+",
    "category": "Energia e metabolismo celular",
    "group": "energia",
    "query": "nicotinamide adenine dinucleotide",
    "summary": "A coenzima que transporta elétrons e participa do reparo do DNA",
    "size": "500 mg",
    "question": "O que mudou nos estudos que administraram NAD+ e nos que usaram seus precursores NR ou NMN?",
    "note": "NAD+ é uma coenzima. Diferencie estudos da própria molécula daqueles que analisam seus precursores.",
    "trial": null,
    "photo": "nad"
  },
  {
    "id": "mots-c",
    "name": "MOTS-C",
    "category": "Energia e metabolismo celular",
    "group": "energia",
    "query": "MOTS-c",
    "summary": "Um sinal produzido pelo músculo durante o exercício",
    "size": "10 mg",
    "question": "O que o aumento do MOTS-c produzido pelo músculo durante o exercício revela sobre a adaptação ao esforço?",
    "note": "Identifique se o artigo mede concentrações endógenas de MOTS-C ou estuda uma intervenção experimental.",
    "trial": null,
    "photo": "mots-c-10"
  },
  {
    "id": "ss-31",
    "name": "SS-31",
    "category": "Energia e metabolismo celular",
    "group": "energia",
    "query": "elamipretide OR SS-31",
    "summary": "Cardiolipina e produção de energia nas mitocôndrias",
    "question": "O que muda na função da mitocôndria e como essa mudança se relaciona com o que os participantes conseguem fazer?",
    "note": "A membrana interna forma dobras que abrigam as proteínas da cadeia respiratória. A cardiolipina faz parte desse ambiente. Ao estudar a interação do SS-31 com ela, pesquisadores podem acompanhar medidas de função mitocondrial. Em um ensaio clínico, a medida de interesse depende também do tecido afetado e da atividade que a doença compromete.",
    "trial": null,
    "photo": "ss-31",
    "intro": "O SS-31, também chamado elamipretida, é estudado por sua interação com a cardiolipina. Esse lipídio ajuda a organizar a membrana interna da mitocôndria, onde proteínas transferem elétrons para que a célula produza ATP. Uma mudança nessa organização pode ser acompanhada em laboratório. Saber se ela se traduz em maior capacidade para realizar uma atividade exige observar as pessoas que vivem com a condição estudada."
  },
  {
    "id": "tesamorelin",
    "name": "Tesamorelin",
    "category": "Metabolismo e composição corporal",
    "group": "metabolismo",
    "query": "tesamorelin",
    "summary": "Gordura visceral na lipodistrofia associada ao HIV",
    "size": "10 mg",
    "question": "Quanto a gordura visceral mudou durante o tratamento e o que aconteceu após a interrupção?",
    "note": "Confira o método de imagem e o perfil da população. Peso corporal e gordura visceral medem aspectos diferentes.",
    "trial": null,
    "photo": "tesamorelin-10"
  },
  {
    "id": "retatrutida",
    "name": "Retatrutida",
    "category": "Metabolismo e composição corporal",
    "group": "metabolismo",
    "query": "retatrutide",
    "summary": "Peso, gordura hepática e resposta a três sinais hormonais",
    "size": "10 mg",
    "question": "Como mudaram o peso, a gordura no fígado e a frequência cardíaca ao longo dos ensaios?",
    "note": "Observe o período de acompanhamento, o comparador e quais participantes entraram na análise.",
    "trial": "NCT04881760",
    "photo": "retatrutida-30"
  },
  {
    "id": "tirzepatida",
    "name": "Tirzepatida",
    "category": "Metabolismo e composição corporal",
    "group": "metabolismo",
    "query": "tirzepatide",
    "summary": "O que compõe o peso perdido com tirzepatida",
    "size": "10 mg",
    "question": "Quanto do peso perdido veio da gordura, e o que os estudos observaram quando o tratamento foi interrompido?",
    "note": "Consulte os desfechos predefinidos e os critérios de inclusão para entender a quem os resultados se aplicam.",
    "trial": "NCT04184622",
    "photo": "tirzepatida"
  },
  {
    "id": "cagrilintide",
    "name": "Cagrilintide",
    "category": "Metabolismo e composição corporal",
    "group": "metabolismo",
    "query": "cagrilintide",
    "summary": "Amilina e saciedade durante a refeição",
    "question": "Quanto o peso mudou com a cagrilintida isolada e o que os ensaios mediram com a combinação?",
    "note": "A amilina é liberada pelo pâncreas em resposta à alimentação e participa dos sinais que chegam ao cérebro sobre a refeição. A cagrilintida é um análogo desse hormônio. A sensação de saciedade pode variar de uma refeição para outra. Já a mudança de peso é acompanhada durante semanas ou meses, o que torna a duração do estudo importante ao interpretar os números.",
    "trial": "NCT03856047",
    "photo": "cagrilintide",
    "intro": "A cagrilintida imita a ação da amilina, um dos hormônios que sinalizam saciedade. O interesse por essa via é entender o que faz uma pessoa se sentir satisfeita durante a refeição e como isso se relaciona com a mudança de peso ao longo dos meses. Há ensaios com a cagrilintida isolada e em combinação com outros medicamentos. O grupo de comparação determina a qual intervenção se pode atribuir o resultado."
  },
  {
    "id": "epitalon",
    "name": "Epitalon",
    "category": "Energia e metabolismo celular",
    "group": "energia",
    "query": "Epitalon OR Epithalon",
    "summary": "Telômeros em células normais e tumorais",
    "size": "10 mg",
    "question": "Como células normais e células tumorais responderam ao Epitalon nos estudos sobre telômeros?",
    "note": "Confira se o estudo avaliou células em cultura, animais ou participantes humanos.",
    "trial": null,
    "photo": null
  },
  {
    "id": "5-amino-1mq",
    "name": "5-Amino-1MQ",
    "category": "Metabolismo e composição corporal",
    "group": "metabolismo",
    "query": "5-amino-1MQ OR 5A1MQ OR NNMT",
    "summary": "O destino da nicotinamida no tecido adiposo",
    "size": "50 mg",
    "question": "O que aconteceu com a gordura corporal dos camundongos quando os pesquisadores inibiram a NNMT?",
    "note": "Confira as alterações medidas em células e em modelos animais.",
    "trial": null,
    "photo": null
  },
  {
    "id": "aod-9604",
    "name": "AOD-9604",
    "category": "Metabolismo e composição corporal",
    "group": "metabolismo",
    "query": "AOD9604 OR AOD-9604",
    "summary": "Um fragmento do hormônio do crescimento estudado na obesidade",
    "size": "5 mg",
    "question": "O efeito sobre a gordura observado em roedores também apareceu nos estudos de peso em humanos?",
    "note": "Registre se a publicação avaliou um marcador laboratorial, composição corporal ou peso ao longo do tempo.",
    "trial": null,
    "photo": "aod-9604"
  },
  {
    "id": "bpc-157",
    "name": "BPC-157",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "BPC-157",
    "summary": "Reparo de tendões e da barreira intestinal",
    "size": "10 mg",
    "question": "Que sinais de reparo foram observados no tendão e na mucosa intestinal, e em que modelos?",
    "note": "Confira o tecido e o modelo investigados. Uma observação em animais e uma avaliação funcional em pessoas respondem a perguntas diferentes.",
    "trial": null,
    "photo": "bpc-157-10"
  },
  {
    "id": "tb-500",
    "name": "TB-500",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "TB-500 OR thymosin beta 4",
    "summary": "Sete aminoácidos dentro de uma história de cicatrização",
    "size": "10 mg",
    "question": "Quais resultados de cicatrização foram medidos com o fragmento TB-500 e quais vieram da timosina beta-4 inteira?",
    "note": "Leia a descrição da molécula em cada artigo. Fragmentos e proteínas completas podem receber nomes semelhantes.",
    "trial": null,
    "photo": "tb-500-10"
  },
  {
    "id": "bpc-tb",
    "name": "BPC-157 + TB-500",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "BPC-157 AND thymosin",
    "summary": "BPC-157 e TB-500 na pesquisa sobre cicatrização",
    "size": "10 mg + 10 mg",
    "question": "O que já foi observado com os peptídeos separados e o que se sabe sobre a mistura?",
    "note": "Registre separadamente pesquisas com cada componente e estudos que tenham testado a associação.",
    "trial": null,
    "photo": "bpc-tb"
  },
  {
    "id": "ipamorelin-cjc",
    "name": "Ipamorelin + CJC-1295",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "ipamorelin OR CJC-1295",
    "summary": "Dois receptores envolvidos na liberação do hormônio do crescimento",
    "size": "5 mg + 5 mg",
    "question": "O que já se mediu sobre a liberação de GH e qual versão de CJC-1295 foi estudada?",
    "note": "Verifique o composto avaliado, o tempo de observação e se o desfecho estudado é uma medida hormonal ou clínica.",
    "trial": null,
    "photo": "ipamorelin-cjc"
  },
  {
    "id": "thymosin-alpha-1",
    "name": "Timosina Alfa-1",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "thymosin alpha 1",
    "summary": "Da maturação dos linfócitos T aos ensaios em sepse",
    "size": "10 mg",
    "question": "Nos estudos de sepse, a mudança esperada na resposta imune se traduziu em maior sobrevivência?",
    "note": "Identifique a condição estudada e se o resultado é um marcador imunológico, um sintoma ou um evento clínico.",
    "trial": null,
    "photo": "thymosin-alpha-1"
  },
  {
    "id": "ara-290",
    "name": "ARA-290",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "ARA-290 OR cibinetida OR cibinetide",
    "summary": "As pequenas fibras nervosas vistas pela córnea",
    "size": "16 mg",
    "question": "Quando as imagens mostram mudanças nas fibras nervosas, as pessoas também relatam menos dor?",
    "note": "Observe a condição estudada e quais resultados foram medidos por questionário ou exame de imagem.",
    "trial": null,
    "photo": null
  },
  {
    "id": "cartalax",
    "name": "Cartalax",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "Cartalax OR Cartalaks",
    "summary": "Envelhecimento dos fibroblastos da pele",
    "size": "20 mg",
    "question": "Que sinais de renovação e de morte celular mudaram nos fibroblastos expostos ao Cartalax?",
    "note": "Diferencie análises de tecido, medidas de imagem e avaliações de mobilidade.",
    "trial": null,
    "photo": "cartalax-20"
  },
  {
    "id": "kpv",
    "name": "KPV",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "KPV tripeptide",
    "summary": "Um fragmento da alfa-MSH estudado na inflamação intestinal",
    "size": "10 mg",
    "question": "Como o KPV entra nas células do intestino inflamado e o que muda nos sinais que chegam ao núcleo?",
    "note": "Identifique o modelo, o tecido estudado e o marcador escolhido pelos autores.",
    "trial": null,
    "photo": "kpv"
  },
  {
    "id": "glutationa",
    "name": "Glutationa",
    "category": "Recuperação e suporte estrutural",
    "group": "recuperacao",
    "query": "glutathione",
    "summary": "O ciclo entre glutationa reduzida e oxidada",
    "question": "O que a proporção entre glutationa reduzida e oxidada revela que a quantidade total, sozinha, não mostra?",
    "note": "Confira qual forma foi medida, a origem da amostra e se o artigo registra concentração ou razão entre as formas.",
    "trial": null,
    "photo": "glutationa"
  },
  {
    "id": "ghk-cu",
    "name": "GHK-Cu",
    "category": "Pele e estética",
    "group": "pele",
    "query": "GHK-Cu OR copper peptide GHK",
    "summary": "O peptídeo de cobre e a organização do colágeno",
    "size": "50 mg",
    "question": "O que os estudos com GHK-Cu já mostraram sobre a formação e a organização das fibras de colágeno na pele?",
    "note": "Observe se o desfecho descreve células, tecido ou uma avaliação clínica da pele.",
    "trial": null,
    "photo": "ghk-cu-50"
  },
  {
    "id": "glow",
    "name": "GLOW",
    "category": "Pele e estética",
    "group": "pele",
    "query": "GHK-Cu OR BPC-157 OR TB-500",
    "summary": "Três componentes estudados em etapas da cicatrização",
    "question": "Quais etapas da cicatrização já foram observadas nos estudos de cada componente do GLOW?",
    "note": "Para interpretar uma associação comercial, confira a composição efetivamente estudada no artigo.",
    "trial": null,
    "photo": "glow"
  },
  {
    "id": "klow",
    "name": "KLOW",
    "category": "Pele e estética",
    "group": "pele",
    "query": "GHK-Cu OR KPV OR BPC-157 OR TB-500",
    "summary": "Quatro peptídeos na pesquisa sobre inflamação e reparo",
    "question": "O que a pesquisa sobre inflamação e colágeno permite dizer sobre cada componente do KLOW?",
    "note": "Identifique o componente de cada estudo e registre se a combinação foi avaliada como um todo.",
    "trial": null,
    "photo": "klow"
  },
  {
    "id": "melanotan-2",
    "name": "Melanotan II",
    "category": "Pele e estética",
    "group": "pele",
    "query": "melanotan II",
    "summary": "Melanocortinas, pigmentação e efeitos fora da pele",
    "size": "10 mg",
    "question": "O que os primeiros estudos observaram na pigmentação e quais efeitos apareceram fora da pele?",
    "note": "Observe o método de avaliação da pigmentação e se a publicação registrou eventos adversos.",
    "trial": null,
    "photo": "melanotan-2"
  },
  {
    "id": "pt-141",
    "name": "PT-141",
    "category": "Libido e saúde sexual",
    "group": "libido",
    "query": "bremelanotide OR PT-141",
    "summary": "Bremelanotida e desejo sexual nos ensaios RECONNECT",
    "size": "10 mg",
    "question": "O que mudou nas medidas de desejo e de sofrimento quando a bremelanotida sob demanda foi comparada ao placebo?",
    "note": "Identifique os questionários usados e a população de cada ensaio. O termo bremelanotida também aparece na literatura.",
    "trial": null,
    "photo": "pt-141"
  }
];
const collator = new Intl.Collator('pt-BR', { sensitivity: 'base' });
records.sort((a, b) => collator.compare(a.name, b.name));
const palette = { cognicao: '#8dc8ff', sono: '#cbb4ff', energia: '#f1cb83', metabolismo: '#ffac83', recuperacao: '#94dfc4', pele: '#efb7e4', libido: '#ffabbc' };
const search = document.querySelector('#search');
const category = document.querySelector('#category');
const alphabet = document.querySelector('#alphabet');
const protocolList = document.querySelector('#protocol-list');
const dialog = document.querySelector('#sheet');
const details = document.querySelector('#details');
let initial = '';

function element(tag, text, cls) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (cls) node.className = cls;
  return node;
}
function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
function indexKey(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, '');
}
function firstLetter(record) {
  const first = normalize(record.name)[0].toUpperCase();
  return /[0-9]/.test(first) ? '#' : first;
}
const subjects = [...new Set(records.map(row => row.category))].sort(collator.compare);
subjects.forEach(name => category.add(new Option(name, name)));

for (const letter of ['', ...new Set(records.map(firstLetter))]) {
  const button = element('button', letter || 'Todas');
  button.type = 'button';
  button.dataset.letter = letter;
  button.setAttribute('aria-label', letter === '#' ? 'Iniciais numéricas' : letter ? 'Inicial ' + letter : 'Todas as iniciais');
  button.addEventListener('click', () => { initial = letter; render(); });
  alphabet.append(button);
}

const standalonePages = new Set(['bpc-157', 'ghk-cu', 'glutationa', 'glow', 'klow', 'kpv', 'melanotan-2', 'mots-c', 'pt-141', 'retatrutida', 'semax', 'selank', 'tb-500', 'tesamorelin', 'thymosin-alpha-1', 'tirzepatida', 'dsip', 'ipamorelin-cjc', 'cartalax', 'bpc-tb', 'ara-290', 'aod-9604', '5-amino-1mq', 'epitalon', 'nad']);

function protocolCard(record) {
  const item = element('li');
  const link = element('a', '', 'protocol-card');
  link.href = standalonePages.has(record.id) ? './' + record.id + '/' : '#ficha/' + record.id;
  link.style.setProperty('--tone', palette[record.group]);
  link.setAttribute('aria-label', 'Abrir ficha de ' + record.name);
  link.append(element('span', record.category, 'tag'), element('h3', record.name, 'card-name'));
  if (record.size) link.append(element('span', record.size + ' na ficha', 'card-size'));
  link.append(element('p', record.summary, 'card-summary'));
  const action = element('span', 'Abrir ficha', 'card-action');
  action.setAttribute('aria-hidden', 'true');
  action.append(element('span', '→'));
  link.append(action);
  item.append(link);
  return item;
}

function protocolGroup(letter, group) {
  const section = element('section', '', 'initial-group');
  section.dataset.initial = letter;
  const heading = element('h2', '', 'group-heading');
  const count = element('span', String(group.length), 'group-count');
  count.setAttribute('aria-hidden', 'true');
  heading.append(element('span', letter, 'group-letter'), count);
  const list = element('ul', '', 'protocol-grid');
  list.setAttribute('role', 'list');
  list.append(...group.map(protocolCard));
  section.append(heading, list);
  return section;
}

function render() {
  const words = normalize(search.value).split(/\s+/).map(indexKey).filter(Boolean);
  const found = records.filter(row => {
    const keywords = indexKey([row.name, row.category, row.summary, row.question, row.query].join(' '));
    return (!initial || firstLetter(row) === initial)
      && (!category.value || row.category === category.value)
      && words.every(part => keywords.includes(part));
  });
  const groups = new Map();
  for (const record of found) {
    const letter = firstLetter(record);
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(record);
  }
  protocolList.replaceChildren(...Array.from(groups, ([letter, group]) => protocolGroup(letter, group)));
  document.querySelector('#counter').textContent = found.length + (found.length === 1 ? ' ficha' : ' fichas');
  document.querySelector('#empty').hidden = found.length !== 0;
  for (const button of alphabet.children) button.setAttribute('aria-pressed', String(button.dataset.letter === initial));
}
function reference(text, url) {
  const link = element('a', text + ' ↗');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}
function showRecord(record) {
  const title = element('h2', record.name);
  title.id = 'entry-title';
  const tag = element('span', record.category, 'tag');
  tag.style.setProperty('--tone', palette[record.group]);
  const bibliography = element('div', '', 'sources');
  if (record.trial) bibliography.append(reference('Registro do ensaio · ' + record.trial, 'https://clinicaltrials.gov/study/' + record.trial));
  bibliography.append(reference('Pesquisar publicações no PubMed', 'https://pubmed.ncbi.nlm.nih.gov/?term=' + encodeURIComponent(record.query)));
  const product = element('a', 'Ver ' + record.name + ' no catálogo →', 'product');
  product.href = '../#' + record.id;
  details.replaceChildren(tag, title, element('p', record.intro),
    element('h3', 'Como funciona'), element('p', record.note), element('h3', 'Fontes para consulta'), bibliography, product);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}
function route() {
  const record = records.find(row => location.hash === '#ficha/' + row.id);
  if (record && standalonePages.has(record.id)) location.replace('./' + record.id + '/');
  else if (record) showRecord(record);
  else if (dialog.open) dialog.close();
}
function dismiss() {
  if (dialog.open) dialog.close();
}
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (location.hash.startsWith('#ficha/')) history.replaceState(null, '', location.pathname + location.search);
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dismiss();
});
document.querySelector('#close').addEventListener('click', dismiss);
document.querySelector('#reset').addEventListener('click', () => {
  initial = ''; category.value = ''; search.value = ''; render(); search.focus();
});
search.addEventListener('input', render);
category.addEventListener('change', render);
window.addEventListener('hashchange', route);
render();
route();
