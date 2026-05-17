'use strict';

// ══════════════════════════════════════════════
//  PAYS → LANGUE + CONFIG
// ══════════════════════════════════════════════
const PAYS_CONFIG = {
  FR: { lang: 'fr', nom: 'France',          flag: '🇫🇷', pays_ref: 'France' },
  BE: { lang: 'fr', nom: 'Belgique',        flag: '🇧🇪', pays_ref: 'Belgique' },
  CH: { lang: 'fr', nom: 'Suisse',          flag: '🇨🇭', pays_ref: 'Suisse' },
  CA: { lang: 'fr', nom: 'Canada',          flag: '🇨🇦', pays_ref: 'Canada' },
  GB: { lang: 'en', nom: 'United Kingdom',  flag: '🇬🇧', pays_ref: 'United Kingdom' },
  US: { lang: 'en', nom: 'United States',   flag: '🇺🇸', pays_ref: 'United States' },
  AU: { lang: 'en', nom: 'Australia',       flag: '🇦🇺', pays_ref: 'Australia' },
  DE: { lang: 'de', nom: 'Deutschland',     flag: '🇩🇪', pays_ref: 'Allemagne' },
  AT: { lang: 'de', nom: 'Österreich',      flag: '🇦🇹', pays_ref: 'Autriche' },
  ES: { lang: 'es', nom: 'España',          flag: '🇪🇸', pays_ref: 'Espagne' },
  MX: { lang: 'es', nom: 'México',          flag: '🇲🇽', pays_ref: 'Mexique' },
  AR: { lang: 'es', nom: 'Argentina',       flag: '🇦🇷', pays_ref: 'Argentine' },
  BR: { lang: 'pt', nom: 'Brasil',          flag: '🇧🇷', pays_ref: 'Brésil' },
  PT: { lang: 'pt', nom: 'Portugal',        flag: '🇵🇹', pays_ref: 'Portugal' },
  MA: { lang: 'ar', nom: 'المغرب',          flag: '🇲🇦', pays_ref: 'Maroc' },
  DZ: { lang: 'ar', nom: 'الجزائر',         flag: '🇩🇿', pays_ref: 'Algérie' },
  SA: { lang: 'ar', nom: 'المملكة العربية', flag: '🇸🇦', pays_ref: 'Arabie Saoudite' },
  CN: { lang: 'zh', nom: '中国',             flag: '🇨🇳', pays_ref: 'Chine' },
  IN: { lang: 'hi', nom: 'भारत',            flag: '🇮🇳', pays_ref: 'Inde' },
  IT: { lang: 'it', nom: 'Italia',          flag: '🇮🇹', pays_ref: 'Italie' },
  NL: { lang: 'nl', nom: 'Nederland',       flag: '🇳🇱', pays_ref: 'Pays-Bas' },
  RU: { lang: 'ru', nom: 'Россия',          flag: '🇷🇺', pays_ref: 'Russie' },
  JP: { lang: 'ja', nom: '日本',             flag: '🇯🇵', pays_ref: 'Japon' },
  SN: { lang: 'fr', nom: 'Sénégal',         flag: '🇸🇳', pays_ref: 'Sénégal' },
  TN: { lang: 'ar', nom: 'تونس',            flag: '🇹🇳', pays_ref: 'Tunisie' },
};

// ══════════════════════════════════════════════
//  TRADUCTIONS UI (8 langues)
// ══════════════════════════════════════════════
const T = {
  fr: {
    rechercher: 'Rechercher', comparer: 'Comparer', classement: 'Classement',
    tendances: 'Tendances', harmonie: 'Harmonie', sondage: 'Sondage', premium: '✦ Premium',
    hero_tag: "L'art de nommer votre enfant",
    hero_title: 'Trouvez le prénom <em>parfait</em>',
    hero_sub: 'Significations, tendances, classements et harmonie — tout pour choisir en toute sérénité.',
    hero_btn1: 'Rechercher un prénom', hero_btn2: 'Découvrir les outils',
    search_placeholder: 'Entrez un prénom…', search_btn: 'Analyser',
    analyse_loading: 'Analyse en cours…', analyse_btn: 'Analyser',
    lang_select: 'Pays / Langue',
    pays_label: 'Pays',
    tools_title: 'Tout pour <em>bien choisir</em>',
    trending_title: 'Prénoms <em>en vogue</em>',
  },
  en: {
    rechercher: 'Search', comparer: 'Compare', classement: 'Rankings',
    tendances: 'Trends', harmonie: 'Harmony', sondage: 'Survey', premium: '✦ Premium',
    hero_tag: 'The art of naming your child',
    hero_title: 'Find the <em>perfect</em> first name',
    hero_sub: 'Meanings, trends, rankings and phonetic harmony — everything to choose with confidence.',
    hero_btn1: 'Search a name', hero_btn2: 'Discover tools',
    search_placeholder: 'Enter a first name…', search_btn: 'Analyze',
    analyse_loading: 'Analyzing…', analyse_btn: 'Analyze',
    lang_select: 'Country / Language',
    pays_label: 'Country',
    tools_title: 'Everything to <em>choose well</em>',
    trending_title: '<em>Trending</em> names',
  },
  es: {
    rechercher: 'Buscar', comparer: 'Comparar', classement: 'Rankings',
    tendances: 'Tendencias', harmonie: 'Armonía', sondage: 'Encuesta', premium: '✦ Premium',
    hero_tag: 'El arte de nombrar a tu hijo',
    hero_title: 'Encuentra el nombre <em>perfecto</em>',
    hero_sub: 'Significados, tendencias, rankings y armonía — todo para elegir con confianza.',
    hero_btn1: 'Buscar un nombre', hero_btn2: 'Descubrir herramientas',
    search_placeholder: 'Escribe un nombre…', search_btn: 'Analizar',
    analyse_loading: 'Analizando…', analyse_btn: 'Analizar',
    lang_select: 'País / Idioma',
    pays_label: 'País',
    tools_title: 'Todo para <em>elegir bien</em>',
    trending_title: 'Nombres <em>de moda</em>',
  },
  pt: {
    rechercher: 'Pesquisar', comparer: 'Comparar', classement: 'Rankings',
    tendances: 'Tendências', harmonie: 'Harmonia', sondage: 'Enquete', premium: '✦ Premium',
    hero_tag: 'A arte de nomear seu filho',
    hero_title: 'Encontre o nome <em>perfeito</em>',
    hero_sub: 'Significados, tendências, rankings e harmonia — tudo para escolher com confiança.',
    hero_btn1: 'Pesquisar um nome', hero_btn2: 'Descobrir ferramentas',
    search_placeholder: 'Digite um nome…', search_btn: 'Analisar',
    analyse_loading: 'Analisando…', analyse_btn: 'Analisar',
    lang_select: 'País / Idioma',
    pays_label: 'País',
    tools_title: 'Tudo para <em>escolher bem</em>',
    trending_title: 'Nomes <em>em alta</em>',
  },
  de: {
    rechercher: 'Suchen', comparer: 'Vergleichen', classement: 'Rankings',
    tendances: 'Trends', harmonie: 'Harmonie', sondage: 'Umfrage', premium: '✦ Premium',
    hero_tag: 'Die Kunst, Ihr Kind zu benennen',
    hero_title: 'Finden Sie den <em>perfekten</em> Vornamen',
    hero_sub: 'Bedeutungen, Trends, Rankings und Klang — alles für eine sichere Wahl.',
    hero_btn1: 'Einen Namen suchen', hero_btn2: 'Tools entdecken',
    search_placeholder: 'Vornamen eingeben…', search_btn: 'Analysieren',
    analyse_loading: 'Wird analysiert…', analyse_btn: 'Analysieren',
    lang_select: 'Land / Sprache',
    pays_label: 'Land',
    tools_title: 'Alles für die <em>richtige Wahl</em>',
    trending_title: '<em>Angesagte</em> Namen',
  },
  ar: {
    rechercher: 'بحث', comparer: 'مقارنة', classement: 'تصنيفات',
    tendances: 'اتجاهات', harmonie: 'انسجام', sondage: 'استطلاع', premium: '✦ مميز',
    hero_tag: 'فن تسمية طفلك',
    hero_title: 'اعثر على الاسم <em>المثالي</em>',
    hero_sub: 'المعاني والاتجاهات والتصنيفات والانسجام الصوتي — كل ما تحتاجه للاختيار بثقة.',
    hero_btn1: 'ابحث عن اسم', hero_btn2: 'اكتشف الأدوات',
    search_placeholder: 'أدخل اسماً…', search_btn: 'تحليل',
    analyse_loading: 'جارٍ التحليل…', analyse_btn: 'تحليل',
    lang_select: 'البلد / اللغة',
    pays_label: 'البلد',
    tools_title: 'كل شيء <em>للاختيار الجيد</em>',
    trending_title: 'أسماء <em>رائجة</em>',
  },
  zh: {
    rechercher: '搜索', comparer: '比较', classement: '排行榜',
    tendances: '趋势', harmonie: '和谐', sondage: '调查', premium: '✦ 高级版',
    hero_tag: '为孩子命名的艺术',
    hero_title: '找到<em>完美</em>的名字',
    hero_sub: '含义、趋势、排名和音韵和谐——一切助您自信选择。',
    hero_btn1: '搜索名字', hero_btn2: '探索工具',
    search_placeholder: '输入名字…', search_btn: '分析',
    analyse_loading: '分析中…', analyse_btn: '分析',
    lang_select: '国家 / 语言',
    pays_label: '国家',
    tools_title: '一切助您<em>做好选择</em>',
    trending_title: '<em>流行</em>名字',
  },
  hi: {
    rechercher: 'खोजें', comparer: 'तुलना', classement: 'रैंकिंग',
    tendances: 'रुझान', harmonie: 'सामंजस्य', sondage: 'सर्वेक्षण', premium: '✦ प्रीमियम',
    hero_tag: 'अपने बच्चे का नाम रखने की कला',
    hero_title: '<em>सर्वश्रेष्ठ</em> नाम खोजें',
    hero_sub: 'अर्थ, रुझान, रैंकिंग और ध्वनि सामंजस्य — सब कुछ आत्मविश्वास से चुनने के लिए।',
    hero_btn1: 'नाम खोजें', hero_btn2: 'टूल्स देखें',
    search_placeholder: 'नाम दर्ज करें…', search_btn: 'विश्लेषण',
    analyse_loading: 'विश्लेषण हो रहा है…', analyse_btn: 'विश्लेषण',
    lang_select: 'देश / भाषा',
    pays_label: 'देश',
    tools_title: 'सही चुनाव के लिए <em>सब कुछ</em>',
    trending_title: '<em>लोकप्रिय</em> नाम',
  },
  it: {
    rechercher: 'Cerca', comparer: 'Confronta', classement: 'Classifiche',
    tendances: 'Tendenze', harmonie: 'Armonia', sondage: 'Sondaggio', premium: '✦ Premium',
    hero_tag: "L'arte di dare un nome al tuo bambino",
    hero_title: 'Trova il nome <em>perfetto</em>',
    hero_sub: 'Significati, tendenze, classifiche e armonia — tutto per scegliere con fiducia.',
    hero_btn1: 'Cerca un nome', hero_btn2: 'Scopri gli strumenti',
    search_placeholder: 'Inserisci un nome…', search_btn: 'Analizza',
    analyse_loading: 'Analisi in corso…', analyse_btn: 'Analizza',
    lang_select: 'Paese / Lingua',
    pays_label: 'Paese',
    tools_title: 'Tutto per <em>scegliere bene</em>',
    trending_title: 'Nomi <em>di tendenza</em>',
  },
};

// Fallback
function t(key) {
  const lang = window._LANG || 'fr';
  return (T[lang] && T[lang][key]) || (T['fr'] && T['fr'][key]) || key;
}

// ══════════════════════════════════════════════
//  ÉTAT GLOBAL
// ══════════════════════════════════════════════
window._LANG = localStorage.getItem('lang') || 'fr';
window._PAYS_CODE = localStorage.getItem('pays') || 'FR';
window._PAYS_NOM = (PAYS_CONFIG[window._PAYS_CODE] || PAYS_CONFIG['FR']).pays_ref;

// ══════════════════════════════════════════════
//  SÉLECTEUR PAYS DANS LA NAV
// ══════════════════════════════════════════════
function buildPaysSelector() {
  const current = PAYS_CONFIG[window._PAYS_CODE] || PAYS_CONFIG['FR'];

  const optionsHTML = Object.entries(PAYS_CONFIG).map(([code, cfg]) =>
    `<option value="${code}" ${code === window._PAYS_CODE ? 'selected' : ''}>${cfg.flag} ${cfg.nom}</option>`
  ).join('');

  const el = document.createElement('div');
  el.className = 'pays-selector';
  el.innerHTML = `
    <button class="pays-btn" onclick="togglePaysDropdown(event)" aria-label="Changer de pays">
      <span id="pays-flag">${current.flag}</span>
      <span id="pays-nom" style="font-size:.65rem;letter-spacing:.06em">${current.nom}</span>
      <span style="font-size:.55rem;opacity:.6">▾</span>
    </button>
    <div class="pays-dropdown" id="paysDropdown" style="display:none">
      <p style="font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);padding:.5rem .75rem .25rem;font-weight:500">Pays / Langue</p>
      <select size="8" class="pays-select-list" onchange="setPays(this.value)">${optionsHTML}</select>
    </div>`;
  return el;
}

function togglePaysDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('paysDropdown');
  dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
}

document.addEventListener('click', () => {
  const dd = document.getElementById('paysDropdown');
  if (dd) dd.style.display = 'none';
});

function setPays(code) {
  const cfg = PAYS_CONFIG[code];
  if (!cfg) return;
  window._PAYS_CODE = code;
  window._LANG = cfg.lang;
  window._PAYS_NOM = cfg.pays_ref;
  localStorage.setItem('pays', code);
  localStorage.setItem('lang', cfg.lang);
  // Mettre à jour l'affichage nav
  const flagEl = document.getElementById('pays-flag');
  const nomEl = document.getElementById('pays-nom');
  if (flagEl) flagEl.textContent = cfg.flag;
  if (nomEl) nomEl.textContent = cfg.nom;
  // Fermer dropdown
  const dd = document.getElementById('paysDropdown');
  if (dd) dd.style.display = 'none';
  // Appliquer les traductions sur la page
  applyTranslations();
  // Rafraîchir direction si arabe
  document.documentElement.dir = cfg.lang === 'ar' ? 'rtl' : 'ltr';
}

// ══════════════════════════════════════════════
//  APPLIQUER TRADUCTIONS SUR LA PAGE
// ══════════════════════════════════════════════
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT') el.placeholder = val;
    else el.innerHTML = val;
  });
}

// ══════════════════════════════════════════════
//  INIT AU CHARGEMENT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Appliquer direction RTL si arabe
  const cfg = PAYS_CONFIG[window._PAYS_CODE] || PAYS_CONFIG['FR'];
  document.documentElement.dir = cfg.lang === 'ar' ? 'rtl' : 'ltr';

  // Injecter le sélecteur dans la nav
  const navInner = document.querySelector('.nav-inner');
  if (navInner) {
    navInner.appendChild(buildPaysSelector());
  }

  // Détecter IP si pas de préférence sauvegardée
  if (!localStorage.getItem('pays')) {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data && data.country_code && PAYS_CONFIG[data.country_code]) {
          setPays(data.country_code);
        }
      }).catch(() => {});
  }

  applyTranslations();
});

// ══════════════════════════════════════════════
//  HELPER LANGUE POUR LES PROMPTS CLAUDE
// ══════════════════════════════════════════════
function getLangInstruction() {
  const langNames = {
    fr: 'français', en: 'English', es: 'español', pt: 'português',
    de: 'Deutsch', ar: 'العربية', zh: '中文', hi: 'हिन्दी', it: 'italiano'
  };
  const pays = window._PAYS_NOM || 'France';
  const lang = window._LANG || 'fr';
  const langName = langNames[lang] || 'français';
  return `Réponds UNIQUEMENT en ${langName}. Les données de popularité doivent refléter le pays "${pays}" (adapte les statistiques, classements et tendances à ce pays spécifiquement).`;
}
