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
    rechercher:'Rechercher', comparer:'Comparer', classement:'Classement',
    tendances:'Tendances', harmonie:'Harmonie', sondage:'Sondage', premium:'✦ Premium',
    hero_tag:"L'art de nommer votre enfant",
    hero_title:'Trouvez le prénom <em>parfait</em>',
    hero_sub:'Significations, tendances, classements et harmonie — tout pour choisir en toute sérénité.',
    hero_btn1:'Rechercher un prénom', hero_btn2:'Découvrir les outils',
    search_placeholder:'Entrez un prénom…', search_btn:'Analyser',
    analyse_loading:'Analyse en cours…', analyse_btn:'Analyser',
    lang_select:'Pays / Langue', pays_label:'Pays',
    tools_title:'Tout pour <em>bien choisir</em>',
    trending_title:'Prénoms <em>en vogue</em>',
    page_tag_recherche:'✦ Recherche & Analyse',
    page_title_recherche:'Analysez <em>n\'importe quel prénom</em>',
    page_sub_recherche:'Signification, étymologie, popularité, phonétique et critères de choix',
    lbl_signification:'Signification & étymologie',
    lbl_histoire:'Histoire & culture',
    lbl_popularite:'Popularité (estimations)',
    lbl_criteres:'Critères de choix',
    lbl_diminutifs:'Diminutifs & surnoms',
    lbl_similaires:'Prénoms similaires',
    lbl_geo:'🗺 Présence géographique',
    lbl_personnalites:'⭐ Personnalités portant ce prénom',
    lbl_phonetique:'Phonétique', lbl_longueur:'Longueur', lbl_prononciation:'Prononciation',
    tab_pays:'Par pays', tab_regions:'Régions France',
    centrer_sur:'Centrer sur :', vue_monde:'🌍 Vue monde entier',
    badge_feminine:'♀ Féminin', badge_masculin:'♂ Masculin', badge_mixte:'⚥ Mixte',
    badge_montant:'↑ En hausse', badge_declinant:'↓ Déclinant', badge_stable:'→ Stable',
    critere_harmonie:'Harmonie sonore', critere_originalite:'Originalité',
    critere_intemporalite:'Intemporalité', critere_international:'Usage international',
    classement_titre:'Classement des prénoms <em>par année ou période</em>',
    classement_sub:'Top 20 des prénoms les plus donnés dans votre pays',
    voir_classement:'Voir le classement →', chargement:'Chargement…',
    mode_annee:'Année', mode_periode:'Période', genre_tous:'Tous', genre_f:'♀ Filles', genre_m:'♂ Garçons',
    tendances_2025:'Tendances 2025',
    premium_gate:'✦ Rapport complet Premium',
    premium_gate_desc:'Compatibilité avec votre nom de famille, analyse des initiales, sondage pré-rempli, PDF.',
    debloquer:'Débloquer',
    outils_titre:'✦ 6 outils',
    tool1_titre:'Recherche & Analyse',
    tool1_desc:'Signification, étymologie, popularité, phonétique et critères de choix.',
    tool1_btn:'Explorer →',
    tool2_titre:'Comparateur',
    tool2_desc:'Comparez jusqu'à 4 prénoms côte à côte avec scores détaillés.',
    tool2_btn:'Comparer →',
    tool3_titre:'Classement',
    tool3_desc:'Palmarès par année ou période dans votre pays.',
    tool3_btn:'Voir le top →',
    tool4_titre:'Tendances',
    tool4_desc:'Courbes d'évolution depuis 1990, jusqu'à 6 prénoms simultanés.',
    tool4_btn:'Analyser →',
    tool5_titre:'Harmonie',
    tool5_desc:'Analyse phonétique : fluidité, initiales et consonance.',
    tool5_btn:'Tester →',
    tool6_titre:'Sondage famille',
    tool6_desc:'Créez un sondage et partagez-le avec vos proches.',
    tool6_btn:'Créer →',
  },
  en: {
    rechercher:'Search', comparer:'Compare', classement:'Rankings',
    tendances:'Trends', harmonie:'Harmony', sondage:'Survey', premium:'✦ Premium',
    hero_tag:'The art of naming your child',
    hero_title:'Find the <em>perfect</em> first name',
    hero_sub:'Meanings, trends, rankings and phonetic harmony — everything to choose with confidence.',
    hero_btn1:'Search a name', hero_btn2:'Discover tools',
    search_placeholder:'Enter a first name…', search_btn:'Analyze',
    analyse_loading:'Analyzing…', analyse_btn:'Analyze',
    lang_select:'Country / Language', pays_label:'Country',
    tools_title:'Everything to <em>choose well</em>',
    trending_title:'<em>Trending</em> names',
    page_tag_recherche:'✦ Search & Analysis',
    page_title_recherche:'Analyze <em>any first name</em>',
    page_sub_recherche:'Meaning, etymology, popularity, phonetics and selection criteria',
    lbl_signification:'Meaning & etymology',
    lbl_histoire:'History & culture',
    lbl_popularite:'Popularity (estimates)',
    lbl_criteres:'Selection criteria',
    lbl_diminutifs:'Nicknames & diminutives',
    lbl_similaires:'Similar names',
    lbl_geo:'🗺 Geographic presence',
    lbl_personnalites:'⭐ Famous people with this name',
    lbl_phonetique:'Phonetics', lbl_longueur:'Length', lbl_prononciation:'Pronunciation',
    tab_pays:'By country', tab_regions:'French regions',
    centrer_sur:'Focus on:', vue_monde:'🌍 World view',
    badge_feminine:'♀ Feminine', badge_masculin:'♂ Masculine', badge_mixte:'⚥ Mixed',
    badge_montant:'↑ Rising', badge_declinant:'↓ Declining', badge_stable:'→ Stable',
    critere_harmonie:'Sound harmony', critere_originalite:'Originality',
    critere_intemporalite:'Timelessness', critere_international:'International use',
    classement_titre:'Name <em>rankings by year or period</em>',
    classement_sub:'Top 20 most popular names in your country',
    voir_classement:'See rankings →', chargement:'Loading…',
    mode_annee:'Year', mode_periode:'Period', genre_tous:'All', genre_f:'♀ Girls', genre_m:'♂ Boys',
    tendances_2025:'Trends 2025',
    premium_gate:'✦ Full Premium Report',
    premium_gate_desc:'Compatibility with your family name, initials analysis, pre-filled survey, PDF download.',
    debloquer:'Unlock',
    outils_titre:'✦ 6 tools',
    tool1_titre:'Search & Analysis',
    tool1_desc:'Meaning, etymology, popularity, phonetics and selection criteria.',
    tool1_btn:'Explore →',
    tool2_titre:'Comparator',
    tool2_desc:'Compare up to 4 names side by side with detailed scores.',
    tool2_btn:'Compare →',
    tool3_titre:'Rankings',
    tool3_desc:'Top names by year or custom period in your country.',
    tool3_btn:'See top →',
    tool4_titre:'Trends',
    tool4_desc:'Evolution curves since 1990, up to 6 names at once.',
    tool4_btn:'Analyze →',
    tool5_titre:'Harmony',
    tool5_desc:'Phonetic analysis: flow, initials and consonance.',
    tool5_btn:'Test →',
    tool6_titre:'Family poll',
    tool6_desc:'Create a poll and share it with your loved ones.',
    tool6_btn:'Create →',
  },
  es: {
    rechercher:'Buscar', comparer:'Comparar', classement:'Rankings',
    tendances:'Tendencias', harmonie:'Armonía', sondage:'Encuesta', premium:'✦ Premium',
    hero_tag:'El arte de nombrar a tu hijo',
    hero_title:'Encuentra el nombre <em>perfecto</em>',
    hero_sub:'Significados, tendencias, rankings y armonía — todo para elegir con confianza.',
    hero_btn1:'Buscar un nombre', hero_btn2:'Descubrir herramientas',
    search_placeholder:'Escribe un nombre…', search_btn:'Analizar',
    analyse_loading:'Analizando…', analyse_btn:'Analizar',
    lang_select:'País / Idioma', pays_label:'País',
    tools_title:'Todo para <em>elegir bien</em>',
    trending_title:'Nombres <em>de moda</em>',
    page_tag_recherche:'✦ Búsqueda & Análisis',
    page_title_recherche:'Analiza <em>cualquier nombre</em>',
    page_sub_recherche:'Significado, etimología, popularidad, fonética y criterios de elección',
    lbl_signification:'Significado & etimología',
    lbl_histoire:'Historia & cultura',
    lbl_popularite:'Popularidad (estimaciones)',
    lbl_criteres:'Criterios de elección',
    lbl_diminutifs:'Diminutivos & apodos',
    lbl_similaires:'Nombres similares',
    lbl_geo:'🗺 Presencia geográfica',
    lbl_personnalites:'⭐ Personalidades con este nombre',
    lbl_phonetique:'Fonética', lbl_longueur:'Longitud', lbl_prononciation:'Pronunciación',
    tab_pays:'Por país', tab_regions:'Regiones',
    centrer_sur:'Centrar en:', vue_monde:'🌍 Vista mundial',
    badge_feminine:'♀ Femenino', badge_masculin:'♂ Masculino', badge_mixte:'⚥ Mixto',
    badge_montant:'↑ En alza', badge_declinant:'↓ Declinando', badge_stable:'→ Estable',
    critere_harmonie:'Armonía sonora', critere_originalite:'Originalidad',
    critere_intemporalite:'Atemporalidad', critere_international:'Uso internacional',
    classement_titre:'<em>Rankings</em> de nombres por año o período',
    classement_sub:'Top 20 nombres más populares en tu país',
    voir_classement:'Ver rankings →', chargement:'Cargando…',
    mode_annee:'Año', mode_periode:'Período', genre_tous:'Todos', genre_f:'♀ Niñas', genre_m:'♂ Niños',
    tendances_2025:'Tendencias 2025',
    premium_gate:'✦ Informe Premium completo',
    premium_gate_desc:'Compatibilidad con tu apellido, análisis de iniciales, encuesta, PDF.',
    debloquer:'Desbloquear',
    outils_titre:'✦ 6 ferramentas',
    tool1_titre:'Pesquisa & Análise',
    tool1_desc:'Significado, etimologia, popularidade, fonética e critérios de escolha.',
    tool1_btn:'Explorar →',
    tool2_titre:'Comparador',
    tool2_desc:'Compare até 4 nomes com pontuações detalhadas.',
    tool2_btn:'Comparar →',
    tool3_titre:'Rankings',
    tool3_desc:'Melhores nomes por ano ou período no seu país.',
    tool3_btn:'Ver top →',
    tool4_titre:'Tendências',
    tool4_desc:'Curvas de evolução desde 1990, até 6 nomes simultâneos.',
    tool4_btn:'Analisar →',
    tool5_titre:'Harmonia',
    tool5_desc:'Análise fonética: fluidez, iniciais e consonância.',
    tool5_btn:'Testar →',
    tool6_titre:'Enquete família',
    tool6_desc:'Crie uma enquete e compartilhe com seus entes queridos.',
    tool6_btn:'Criar →',
    outils_titre:'✦ 6 herramientas',
    tool1_titre:'Búsqueda & Análisis',
    tool1_desc:'Significado, etimología, popularidad, fonética y criterios de elección.',
    tool1_btn:'Explorar →',
    tool2_titre:'Comparador',
    tool2_desc:'Compara hasta 4 nombres con puntuaciones detalladas.',
    tool2_btn:'Comparar →',
    tool3_titre:'Rankings',
    tool3_desc:'Los mejores nombres por año o período en tu país.',
    tool3_btn:'Ver top →',
    tool4_titre:'Tendencias',
    tool4_desc:'Curvas de evolución desde 1990, hasta 6 nombres.',
    tool4_btn:'Analizar →',
    tool5_titre:'Armonía',
    tool5_desc:'Análisis fonético: fluidez, iniciales y consonancia.',
    tool5_btn:'Probar →',
    tool6_titre:'Encuesta familiar',
    tool6_desc:'Crea una encuesta y compártela con tus seres queridos.',
    tool6_btn:'Crear →',
  },
  pt: {
    rechercher:'Pesquisar', comparer:'Comparar', classement:'Rankings',
    tendances:'Tendências', harmonie:'Harmonia', sondage:'Enquete', premium:'✦ Premium',
    hero_tag:'A arte de nomear seu filho',
    hero_title:'Encontre o nome <em>perfeito</em>',
    hero_sub:'Significados, tendências, rankings e harmonia — tudo para escolher com confiança.',
    hero_btn1:'Pesquisar um nome', hero_btn2:'Descobrir ferramentas',
    search_placeholder:'Digite um nome…', search_btn:'Analisar',
    analyse_loading:'Analisando…', analyse_btn:'Analisar',
    lang_select:'País / Idioma', pays_label:'País',
    tools_title:'Tudo para <em>escolher bem</em>',
    trending_title:'Nomes <em>em alta</em>',
    page_tag_recherche:'✦ Pesquisa & Análise',
    page_title_recherche:'Analise <em>qualquer nome</em>',
    page_sub_recherche:'Significado, etimologia, popularidade, fonética e critérios de escolha',
    lbl_signification:'Significado & etimologia',
    lbl_histoire:'História & cultura',
    lbl_popularite:'Popularidade (estimativas)',
    lbl_criteres:'Critérios de escolha',
    lbl_diminutifs:'Diminutivos & apelidos',
    lbl_similaires:'Nomes similares',
    lbl_geo:'🗺 Presença geográfica',
    lbl_personnalites:'⭐ Personalidades com este nome',
    lbl_phonetique:'Fonética', lbl_longueur:'Comprimento', lbl_prononciation:'Pronúncia',
    tab_pays:'Por país', tab_regions:'Regiões',
    centrer_sur:'Focar em:', vue_monde:'🌍 Vista mundial',
    badge_feminine:'♀ Feminino', badge_masculin:'♂ Masculino', badge_mixte:'⚥ Misto',
    badge_montant:'↑ Em alta', badge_declinant:'↓ Em queda', badge_stable:'→ Estável',
    critere_harmonie:'Harmonia sonora', critere_originalite:'Originalidade',
    critere_intemporalite:'Atemporalidade', critere_international:'Uso internacional',
    classement_titre:'<em>Rankings</em> de nomes por ano ou período',
    classement_sub:'Top 20 nomes mais populares no seu país',
    voir_classement:'Ver rankings →', chargement:'Carregando…',
    mode_annee:'Ano', mode_periode:'Período', genre_tous:'Todos', genre_f:'♀ Meninas', genre_m:'♂ Meninos',
    tendances_2025:'Tendências 2025',
    premium_gate:'✦ Relatório Premium completo',
    premium_gate_desc:'Compatibilidade com seu sobrenome, análise de iniciais, enquete, PDF.',
    debloquer:'Desbloquear',
    outils_titre:'✦ 6 ferramentas',
    tool1_titre:'Pesquisa & Análise',
    tool1_desc:'Significado, etimologia, popularidade, fonética e critérios de escolha.',
    tool1_btn:'Explorar →',
    tool2_titre:'Comparador',
    tool2_desc:'Compare até 4 nomes com pontuações detalhadas.',
    tool2_btn:'Comparar →',
    tool3_titre:'Rankings',
    tool3_desc:'Melhores nomes por ano ou período no seu país.',
    tool3_btn:'Ver top →',
    tool4_titre:'Tendências',
    tool4_desc:'Curvas de evolução desde 1990, até 6 nomes simultâneos.',
    tool4_btn:'Analisar →',
    tool5_titre:'Harmonia',
    tool5_desc:'Análise fonética: fluidez, iniciais e consonância.',
    tool5_btn:'Testar →',
    tool6_titre:'Enquete família',
    tool6_desc:'Crie uma enquete e compartilhe com seus entes queridos.',
    tool6_btn:'Criar →',
    outils_titre:'✦ 6 herramientas',
    tool1_titre:'Búsqueda & Análisis',
    tool1_desc:'Significado, etimología, popularidad, fonética y criterios de elección.',
    tool1_btn:'Explorar →',
    tool2_titre:'Comparador',
    tool2_desc:'Compara hasta 4 nombres con puntuaciones detalladas.',
    tool2_btn:'Comparar →',
    tool3_titre:'Rankings',
    tool3_desc:'Los mejores nombres por año o período en tu país.',
    tool3_btn:'Ver top →',
    tool4_titre:'Tendencias',
    tool4_desc:'Curvas de evolución desde 1990, hasta 6 nombres.',
    tool4_btn:'Analizar →',
    tool5_titre:'Armonía',
    tool5_desc:'Análisis fonético: fluidez, iniciales y consonancia.',
    tool5_btn:'Probar →',
    tool6_titre:'Encuesta familiar',
    tool6_desc:'Crea una encuesta y compártela con tus seres queridos.',
    tool6_btn:'Crear →',
  },
  de: {
    rechercher:'Suchen', comparer:'Vergleichen', classement:'Rankings',
    tendances:'Trends', harmonie:'Harmonie', sondage:'Umfrage', premium:'✦ Premium',
    hero_tag:'Die Kunst, Ihr Kind zu benennen',
    hero_title:'Finden Sie den <em>perfekten</em> Vornamen',
    hero_sub:'Bedeutungen, Trends, Rankings und Klang — alles für eine sichere Wahl.',
    hero_btn1:'Einen Namen suchen', hero_btn2:'Tools entdecken',
    search_placeholder:'Vornamen eingeben…', search_btn:'Analysieren',
    analyse_loading:'Wird analysiert…', analyse_btn:'Analysieren',
    lang_select:'Land / Sprache', pays_label:'Land',
    tools_title:'Alles für die <em>richtige Wahl</em>',
    trending_title:'<em>Angesagte</em> Namen',
    page_tag_recherche:'✦ Suche & Analyse',
    page_title_recherche:'Analysieren Sie <em>jeden Vornamen</em>',
    page_sub_recherche:'Bedeutung, Etymologie, Popularität, Phonetik und Auswahlkriterien',
    lbl_signification:'Bedeutung & Etymologie',
    lbl_histoire:'Geschichte & Kultur',
    lbl_popularite:'Popularität (Schätzungen)',
    lbl_criteres:'Auswahlkriterien',
    lbl_diminutifs:'Koseformen & Spitznamen',
    lbl_similaires:'Ähnliche Namen',
    lbl_geo:'🗺 Geografische Verbreitung',
    lbl_personnalites:'⭐ Bekannte Persönlichkeiten',
    lbl_phonetique:'Phonetik', lbl_longueur:'Länge', lbl_prononciation:'Aussprache',
    tab_pays:'Nach Land', tab_regions:'Regionen',
    centrer_sur:'Fokus auf:', vue_monde:'🌍 Weltansicht',
    badge_feminine:'♀ Weiblich', badge_masculin:'♂ Männlich', badge_mixte:'⚥ Gemischt',
    badge_montant:'↑ Steigend', badge_declinant:'↓ Rückläufig', badge_stable:'→ Stabil',
    critere_harmonie:'Klangharmonie', critere_originalite:'Originalität',
    critere_intemporalite:'Zeitlosigkeit', critere_international:'Internationale Nutzung',
    classement_titre:'Namen-<em>Rankings nach Jahr oder Zeitraum</em>',
    classement_sub:'Top 20 beliebteste Namen in Ihrem Land',
    voir_classement:'Rankings anzeigen →', chargement:'Wird geladen…',
    mode_annee:'Jahr', mode_periode:'Zeitraum', genre_tous:'Alle', genre_f:'♀ Mädchen', genre_m:'♂ Jungen',
    tendances_2025:'Trends 2025',
    premium_gate:'✦ Vollständiger Premium-Bericht',
    premium_gate_desc:'Kompatibilität mit Ihrem Nachnamen, Initialanalyse, Umfrage, PDF.',
    debloquer:'Freischalten',
    outils_titre:'✦ 6 Tools',
    tool1_titre:'Suche & Analyse',
    tool1_desc:'Bedeutung, Etymologie, Popularität, Phonetik und Auswahlkriterien.',
    tool1_btn:'Erkunden →',
    tool2_titre:'Vergleich',
    tool2_desc:'Vergleichen Sie bis zu 4 Namen mit detaillierten Bewertungen.',
    tool2_btn:'Vergleichen →',
    tool3_titre:'Rankings',
    tool3_desc:'Beliebteste Namen nach Jahr oder Zeitraum in Ihrem Land.',
    tool3_btn:'Top sehen →',
    tool4_titre:'Trends',
    tool4_desc:'Entwicklungskurven seit 1990, bis zu 6 Namen gleichzeitig.',
    tool4_btn:'Analysieren →',
    tool5_titre:'Harmonie',
    tool5_desc:'Phonetische Analyse: Fluss, Initialen und Konsonanz.',
    tool5_btn:'Testen →',
    tool6_titre:'Familienumfrage',
    tool6_desc:'Erstellen Sie eine Umfrage und teilen Sie sie mit Ihren Lieben.',
    tool6_btn:'Erstellen →',
  },
  ar: {
    rechercher:'بحث', comparer:'مقارنة', classement:'تصنيفات',
    tendances:'اتجاهات', harmonie:'انسجام', sondage:'استطلاع', premium:'✦ مميز',
    hero_tag:'فن تسمية طفلك',
    hero_title:'اعثر على الاسم <em>المثالي</em>',
    hero_sub:'المعاني والاتجاهات والتصنيفات والانسجام الصوتي — كل ما تحتاجه للاختيار بثقة.',
    hero_btn1:'ابحث عن اسم', hero_btn2:'اكتشف الأدوات',
    search_placeholder:'أدخل اسماً…', search_btn:'تحليل',
    analyse_loading:'جارٍ التحليل…', analyse_btn:'تحليل',
    lang_select:'البلد / اللغة', pays_label:'البلد',
    tools_title:'كل شيء <em>للاختيار الجيد</em>',
    trending_title:'أسماء <em>رائجة</em>',
    page_tag_recherche:'✦ بحث وتحليل',
    page_title_recherche:'حلّل <em>أي اسم</em>',
    page_sub_recherche:'المعنى والاشتقاق والشعبية والصوتيات ومعايير الاختيار',
    lbl_signification:'المعنى والاشتقاق',
    lbl_histoire:'التاريخ والثقافة',
    lbl_popularite:'الشعبية (تقديرات)',
    lbl_criteres:'معايير الاختيار',
    lbl_diminutifs:'أسماء التدليل',
    lbl_similaires:'أسماء مشابهة',
    lbl_geo:'🗺 الانتشار الجغرافي',
    lbl_personnalites:'⭐ شخصيات تحمل هذا الاسم',
    lbl_phonetique:'الصوتيات', lbl_longueur:'الطول', lbl_prononciation:'النطق',
    tab_pays:'حسب البلد', tab_regions:'مناطق فرنسا',
    centrer_sur:'التركيز على:', vue_monde:'🌍 عرض العالم',
    badge_feminine:'♀ مؤنث', badge_masculin:'♂ مذكر', badge_mixte:'⚥ مختلط',
    badge_montant:'↑ في ارتفاع', badge_declinant:'↓ في انخفاض', badge_stable:'→ مستقر',
    critere_harmonie:'الانسجام الصوتي', critere_originalite:'الأصالة',
    critere_intemporalite:'الخلود', critere_international:'الاستخدام الدولي',
    classement_titre:'<em>تصنيفات</em> الأسماء حسب السنة أو الفترة',
    classement_sub:'أفضل 20 اسماً في بلدك',
    voir_classement:'عرض التصنيفات ←', chargement:'جارٍ التحميل…',
    mode_annee:'سنة', mode_periode:'فترة', genre_tous:'الكل', genre_f:'♀ بنات', genre_m:'♂ أولاد',
    tendances_2025:'اتجاهات 2025',
    premium_gate:'✦ تقرير بريميوم كامل',
    premium_gate_desc:'التوافق مع اسم العائلة، تحليل الأحرف الأولى، استطلاع، PDF.',
    debloquer:'إلغاء القفل',
    outils_titre:'✦ 6 أدوات',
    tool1_titre:'بحث وتحليل',
    tool1_desc:'المعنى والاشتقاق والشعبية والصوتيات ومعايير الاختيار.',
    tool1_btn:'← استكشاف',
    tool2_titre:'مقارنة',
    tool2_desc:'قارن حتى 4 أسماء جنباً إلى جنب مع نقاط تفصيلية.',
    tool2_btn:'← مقارنة',
    tool3_titre:'تصنيفات',
    tool3_desc:'أفضل الأسماء حسب السنة أو الفترة في بلدك.',
    tool3_btn:'← عرض الأفضل',
    tool4_titre:'اتجاهات',
    tool4_desc:'منحنيات التطور منذ 1990، حتى 6 أسماء في آنٍ واحد.',
    tool4_btn:'← تحليل',
    tool5_titre:'انسجام',
    tool5_desc:'تحليل صوتي: الطلاقة والأحرف الأولى والتناغم.',
    tool5_btn:'← اختبار',
    tool6_titre:'استطلاع عائلي',
    tool6_desc:'أنشئ استطلاعاً وشاركه مع أحبائك.',
    tool6_btn:'← إنشاء',
  },
  zh: {
    rechercher:'搜索', comparer:'比较', classement:'排行榜',
    tendances:'趋势', harmonie:'和谐', sondage:'调查', premium:'✦ 高级版',
    hero_tag:'为孩子命名的艺术',
    hero_title:'找到<em>完美</em>的名字',
    hero_sub:'含义、趋势、排名和音韵和谐——一切助您自信选择。',
    hero_btn1:'搜索名字', hero_btn2:'探索工具',
    search_placeholder:'输入名字…', search_btn:'分析',
    analyse_loading:'分析中…', analyse_btn:'分析',
    lang_select:'国家 / 语言', pays_label:'国家',
    tools_title:'一切助您<em>做好选择</em>',
    trending_title:'<em>流行</em>名字',
    page_tag_recherche:'✦ 搜索与分析',
    page_title_recherche:'分析<em>任何名字</em>',
    page_sub_recherche:'含义、词源、流行度、语音及选择标准',
    lbl_signification:'含义与词源',
    lbl_histoire:'历史与文化',
    lbl_popularite:'流行度（估计）',
    lbl_criteres:'选择标准',
    lbl_diminutifs:'昵称',
    lbl_similaires:'相似名字',
    lbl_geo:'🗺 地理分布',
    lbl_personnalites:'⭐ 拥有此名的名人',
    lbl_phonetique:'语音', lbl_longueur:'长度', lbl_prononciation:'发音',
    tab_pays:'按国家', tab_regions:'法国地区',
    centrer_sur:'聚焦：', vue_monde:'🌍 世界视图',
    badge_feminine:'♀ 女性', badge_masculin:'♂ 男性', badge_mixte:'⚥ 中性',
    badge_montant:'↑ 上升', badge_declinant:'↓ 下降', badge_stable:'→ 稳定',
    critere_harmonie:'音调和谐', critere_originalite:'独特性',
    critere_intemporalite:'经典性', critere_international:'国际使用',
    classement_titre:'按年份或时期的<em>名字排行榜</em>',
    classement_sub:'您所在国家最受欢迎的20个名字',
    voir_classement:'查看排行榜 →', chargement:'加载中…',
    mode_annee:'年份', mode_periode:'时期', genre_tous:'全部', genre_f:'♀ 女孩', genre_m:'♂ 男孩',
    tendances_2025:'2025年趋势',
    premium_gate:'✦ 完整高级报告',
    premium_gate_desc:'与姓氏的兼容性、首字母分析、调查、PDF下载。',
    debloquer:'解锁',
    outils_titre:'✦ 6个工具',
    tool1_titre:'搜索与分析',
    tool1_desc:'含义、词源、流行度、语音及选择标准。',
    tool1_btn:'探索 →',
    tool2_titre:'比较器',
    tool2_desc:'并排比较最多4个名字，附详细评分。',
    tool2_btn:'比较 →',
    tool3_titre:'排行榜',
    tool3_desc:'按年份或时期查看您所在国家的最佳名字。',
    tool3_btn:'查看 →',
    tool4_titre:'趋势',
    tool4_desc:'自1990年以来的演变曲线，最多6个名字。',
    tool4_btn:'分析 →',
    tool5_titre:'和谐',
    tool5_desc:'语音分析：流畅度、首字母和辅音。',
    tool5_btn:'测试 →',
    tool6_titre:'家庭投票',
    tool6_desc:'创建投票并与您的亲人分享。',
    tool6_btn:'创建 →',
  },
  hi: {
    rechercher:'खोजें', comparer:'तुलना', classement:'रैंकिंग',
    tendances:'रुझान', harmonie:'सामंजस्य', sondage:'सर्वेक्षण', premium:'✦ प्रीमियम',
    hero_tag:'अपने बच्चे का नाम रखने की कला',
    hero_title:'<em>सर्वश्रेष्ठ</em> नाम खोजें',
    hero_sub:'अर्थ, रुझान, रैंकिंग और ध्वनि सामंजस्य — सब कुछ आत्मविश्वास से चुनने के लिए।',
    hero_btn1:'नाम खोजें', hero_btn2:'टूल्स देखें',
    search_placeholder:'नाम दर्ज करें…', search_btn:'विश्लेषण',
    analyse_loading:'विश्लेषण हो रहा है…', analyse_btn:'विश्लेषण',
    lang_select:'देश / भाषा', pays_label:'देश',
    tools_title:'सही चुनाव के लिए <em>सब कुछ</em>',
    trending_title:'<em>लोकप्रिय</em> नाम',
    page_tag_recherche:'✦ खोज और विश्लेषण',
    page_title_recherche:'<em>किसी भी नाम</em> का विश्लेषण करें',
    page_sub_recherche:'अर्थ, व्युत्पत्ति, लोकप्रियता, ध्वनिकी और चयन मानदंड',
    lbl_signification:'अर्थ और व्युत्पत्ति',
    lbl_histoire:'इतिहास और संस्कृति',
    lbl_popularite:'लोकप्रियता (अनुमान)',
    lbl_criteres:'चयन मानदंड',
    lbl_diminutifs:'उपनाम',
    lbl_similaires:'समान नाम',
    lbl_geo:'🗺 भौगोलिक उपस्थिति',
    lbl_personnalites:'⭐ इस नाम की प्रसिद्ध हस्तियाँ',
    lbl_phonetique:'ध्वनिकी', lbl_longueur:'लंबाई', lbl_prononciation:'उच्चारण',
    tab_pays:'देश अनुसार', tab_regions:'क्षेत्र',
    centrer_sur:'फ़ोकस:', vue_monde:'🌍 विश्व दृश्य',
    badge_feminine:'♀ स्त्रीलिंग', badge_masculin:'♂ पुल्लिंग', badge_mixte:'⚥ मिश्रित',
    badge_montant:'↑ बढ़ रहा', badge_declinant:'↓ घट रहा', badge_stable:'→ स्थिर',
    critere_harmonie:'ध्वनि सामंजस्य', critere_originalite:'मौलिकता',
    critere_intemporalite:'शाश्वतता', critere_international:'अंतर्राष्ट्रीय उपयोग',
    classement_titre:'वर्ष या अवधि के अनुसार <em>नाम रैंकिंग</em>',
    classement_sub:'आपके देश के शीर्ष 20 लोकप्रिय नाम',
    voir_classement:'रैंकिंग देखें →', chargement:'लोड हो रहा है…',
    mode_annee:'वर्ष', mode_periode:'अवधि', genre_tous:'सभी', genre_f:'♀ लड़कियाँ', genre_m:'♂ लड़के',
    tendances_2025:'2025 रुझान',
    premium_gate:'✦ पूर्ण प्रीमियम रिपोर्ट',
    premium_gate_desc:'आपके उपनाम के साथ संगतता, आद्याक्षर विश्लेषण, सर्वेक्षण, PDF।',
    debloquer:'अनलॉक करें',
    outils_titre:'✦ 6 उपकरण',
    tool1_titre:'खोज और विश्लेषण',
    tool1_desc:'अर्थ, व्युत्पत्ति, लोकप्रियता, ध्वनिकी और चयन मानदंड।',
    tool1_btn:'देखें →',
    tool2_titre:'तुलनाकर्ता',
    tool2_desc:'विस्तृत स्कोर के साथ 4 नामों की तुलना करें।',
    tool2_btn:'तुलना →',
    tool3_titre:'रैंकिंग',
    tool3_desc:'आपके देश में वर्ष या अवधि के अनुसार शीर्ष नाम।',
    tool3_btn:'देखें →',
    tool4_titre:'रुझान',
    tool4_desc:'1990 से विकास वक्र, एक साथ 6 नाम।',
    tool4_btn:'विश्लेषण →',
    tool5_titre:'सामंजस्य',
    tool5_desc:'ध्वनि विश्लेषण: प्रवाह, आद्याक्षर और व्यंजन।',
    tool5_btn:'परीक्षण →',
    tool6_titre:'पारिवारिक सर्वेक्षण',
    tool6_desc:'एक सर्वेक्षण बनाएं और अपने प्रियजनों के साथ साझा करें।',
    tool6_btn:'बनाएं →',
  },
  it: {
    rechercher:'Cerca', comparer:'Confronta', classement:'Classifiche',
    tendances:'Tendenze', harmonie:'Armonia', sondage:'Sondaggio', premium:'✦ Premium',
    hero_tag:"L'arte di dare un nome al tuo bambino",
    hero_title:'Trova il nome <em>perfetto</em>',
    hero_sub:'Significati, tendenze, classifiche e armonia — tutto per scegliere con fiducia.',
    hero_btn1:'Cerca un nome', hero_btn2:'Scopri gli strumenti',
    search_placeholder:'Inserisci un nome…', search_btn:'Analizza',
    analyse_loading:'Analisi in corso…', analyse_btn:'Analizza',
    lang_select:'Paese / Lingua', pays_label:'Paese',
    tools_title:'Tutto per <em>scegliere bene</em>',
    trending_title:'Nomi <em>di tendenza</em>',
    page_tag_recherche:'✦ Ricerca & Analisi',
    page_title_recherche:'Analizza <em>qualsiasi nome</em>',
    page_sub_recherche:'Significato, etimologia, popolarità, fonetica e criteri di scelta',
    lbl_signification:'Significato & etimologia',
    lbl_histoire:'Storia & cultura',
    lbl_popularite:'Popolarità (stime)',
    lbl_criteres:'Criteri di scelta',
    lbl_diminutifs:'Diminutivi & soprannomi',
    lbl_similaires:'Nomi simili',
    lbl_geo:'🗺 Presenza geografica',
    lbl_personnalites:'⭐ Personalità con questo nome',
    lbl_phonetique:'Fonetica', lbl_longueur:'Lunghezza', lbl_prononciation:'Pronuncia',
    tab_pays:'Per paese', tab_regions:'Regioni Francia',
    centrer_sur:'Centra su:', vue_monde:'🌍 Vista mondiale',
    badge_feminine:'♀ Femminile', badge_masculin:'♂ Maschile', badge_mixte:'⚥ Misto',
    badge_montant:'↑ In crescita', badge_declinant:'↓ In calo', badge_stable:'→ Stabile',
    critere_harmonie:'Armonia sonora', critere_originalite:'Originalità',
    critere_intemporalite:'Intramontabilità', critere_international:'Uso internazionale',
    classement_titre:'<em>Classifiche</em> dei nomi per anno o periodo',
    classement_sub:'Top 20 nomi più popolari nel tuo paese',
    voir_classement:'Vedi classifiche →', chargement:'Caricamento…',
    mode_annee:'Anno', mode_periode:'Periodo', genre_tous:'Tutti', genre_f:'♀ Femmine', genre_m:'♂ Maschi',
    tendances_2025:'Tendenze 2025',
    premium_gate:'✦ Report Premium completo',
    premium_gate_desc:'Compatibilità con il cognome, analisi delle iniziali, sondaggio, PDF.',
    debloquer:'Sblocca',
    outils_titre:'✦ 6 strumenti',
    tool1_titre:'Ricerca & Analisi',
    tool1_desc:'Significato, etimologia, popolarità, fonetica e criteri di scelta.',
    tool1_btn:'Esplora →',
    tool2_titre:'Comparatore',
    tool2_desc:'Confronta fino a 4 nomi con punteggi dettagliati.',
    tool2_btn:'Confronta →',
    tool3_titre:'Classifiche',
    tool3_desc:'I migliori nomi per anno o periodo nel tuo paese.',
    tool3_btn:'Vedi top →',
    tool4_titre:'Tendenze',
    tool4_desc:'Curve di evoluzione dal 1990, fino a 6 nomi.',
    tool4_btn:'Analizza →',
    tool5_titre:'Armonia',
    tool5_desc:'Analisi fonetica: fluidità, iniziali e consonanza.',
    tool5_btn:'Testa →',
    tool6_titre:'Sondaggio famiglia',
    tool6_desc:'Crea un sondaggio e condividilo con i tuoi cari.',
    tool6_btn:'Crea →',
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
  const container = document.getElementById('paysSelectList');
  if (!container) return;
  container.innerHTML = '';
  container.className = 'pays-list';
  Object.entries(PAYS_CONFIG).forEach(([code, cfg]) => {
    const btn = document.createElement('button');
    btn.className = 'pays-list-item' + (code === window._PAYS_CODE ? ' active' : '');
    btn.textContent = cfg.flag + ' ' + cfg.nom;
    btn.onclick = () => setPays(code);
    container.appendChild(btn);
  });
  // Mettre à jour le drapeau et nom affiché
  const cfg = PAYS_CONFIG[window._PAYS_CODE] || PAYS_CONFIG['FR'];
  const flagEl = document.getElementById('pays-flag');
  const nomEl = document.getElementById('pays-nom');
  if (flagEl) flagEl.textContent = cfg.flag;
  if (nomEl) nomEl.textContent = cfg.nom;
}

// togglePaysDropdown n'est plus nécessaire avec <details> natif

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
  // Mettre à jour l'item actif dans la liste
  document.querySelectorAll('.pays-list-item').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(cfg.nom));
  });
  // Fermer le dropdown (details natif)
  const selector = document.getElementById('paysSelector');
  if (selector) selector.removeAttribute('open');
  // Appliquer les traductions sur la page
  applyTranslations();
  // Rafraîchir direction si arabe
  document.documentElement.dir = cfg.lang === 'ar' ? 'rtl' : 'ltr';
  // Notifier les pages du changement de pays
  window.dispatchEvent(new CustomEvent('paysChanged', { detail: { code, lang: cfg.lang } }));
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

  // Peupler le sélecteur (déjà dans le HTML de chaque page)
  buildPaysSelector();

  // Détecter IP si pas de préférence sauvegardée
  if (!localStorage.getItem('pays')) {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        if (data && data.country_code && PAYS_CONFIG[data.country_code]) {
          setPays(data.country_code);
        }
      }).catch(() => {});
  } else {
    // Pays déjà mémorisé — déclencher quand même l'événement pour rafraîchir les pages
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('paysChanged', { detail: { code: window._PAYS_CODE, lang: window._LANG } }));
    }, 50);
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

// ══════════════════════════════════════════════
//  PRÉNOMS PAR DÉFAUT SELON LE PAYS
// ══════════════════════════════════════════════
const PRENOMS_DEFAUT = {
  fr: { filles: ['Alma','Léonie','Adèle','Iris','Camille'], garcons: ['Gabriel','Raphaël','Malo','Arthur','Théo'], mixtes: ['Eden','Nour','Sasha','Lior'] },
  en: { filles: ['Olivia','Emma','Amelia','Sophia','Ava'], garcons: ['Oliver','Liam','Noah','George','Harry'], mixtes: ['Riley','Jordan','Taylor','Quinn'] },
  es: { filles: ['Lucía','Sofía','Valentina','Isabella','Martina'], garcons: ['Santiago','Mateo','Sebastián','Alejandro','Diego'], mixtes: ['Alexis','Andrea','Camilo','Nico'] },
  pt: { filles: ['Sofia','Ana','Beatriz','Valentina','Larissa'], garcons: ['Miguel','Arthur','Lucas','Gabriel','Pedro'], mixtes: ['Alex','Jordan','Nico','Robin'] },
  de: { filles: ['Emma','Hannah','Mia','Lena','Lea'], garcons: ['Noah','Leon','Finn','Ben','Elias'], mixtes: ['Alex','Kai','Robin','Sasha'] },
  ar: { filles: ['فاطمة','مريم','نور','سارة','ليلى'], garcons: ['محمد','أحمد','عمر','يوسف','علي'], mixtes: ['نور','ريم','دانا','لين'] },
  zh: { filles: ['芳','婷','雪','梅','燕'], garcons: ['伟','明','强','军','磊'], mixtes: ['宇','晨','悦','昊'] },
  hi: { filles: ['Aanya','Priya','Kavya','Ananya','Diya'], garcons: ['Arjun','Vihaan','Aarav','Reyansh','Sai'], mixtes: ['Ansh','Riya','Kaira','Avi'] },
  it: { filles: ['Sofia','Giulia','Aurora','Ginevra','Emma'], garcons: ['Leonardo','Francesco','Alessandro','Lorenzo','Mattia'], mixtes: ['Alex','Nico','Robin','Sasha'] },
};

function getPrenomDefaut(index) {
  var lang = window._LANG || 'fr';
  var pd = PRENOMS_DEFAUT[lang] || PRENOMS_DEFAUT['fr'];
  var all = pd.filles.concat(pd.garcons);
  return all[index % all.length] || all[0];
}

function getPrenomsSuggeres() {
  var lang = window._LANG || 'fr';
  var pd = PRENOMS_DEFAUT[lang] || PRENOMS_DEFAUT['fr'];
  return pd.filles.slice(0,3).concat(pd.garcons.slice(0,3));
}
