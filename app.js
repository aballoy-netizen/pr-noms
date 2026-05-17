'use strict';

document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 80 ? '0 2px 20px rgba(0,0,0,.3)' : 'none';
});

// ── Appel API via proxy Netlify — affiche l'erreur EXACTE ──
async function callClaude(prompt, maxTokens) {
  maxTokens = maxTokens || 900;

  let response;
  try {
    response = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: prompt }]
      })
    });
  } catch (networkErr) {
    throw new Error('Impossible de contacter le serveur Netlify. Détail : ' + networkErr.message);
  }

  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error('Réponse non-JSON du serveur (statut HTTP ' + response.status + ').');
  }

  // Afficher l'erreur exacte renvoyée par Anthropic ou le proxy
  if (data.error) {
    const msg = typeof data.error === 'string' ? data.error
              : data.error.message || JSON.stringify(data.error);
    throw new Error('API Anthropic : ' + msg);
  }

  if (!response.ok) {
    throw new Error('Erreur HTTP ' + response.status + ' : ' + JSON.stringify(data));
  }

  if (!data.content || !data.content.length) {
    throw new Error('Réponse vide. Données reçues : ' + JSON.stringify(data).slice(0, 200));
  }

  const raw = data.content
    .map(i => i.text || '')
    .join('')
    .replace(/```json|```/g, '')
    .trim();

  try {
    return JSON.parse(raw);
  } catch (e) {
    throw new Error('JSON invalide reçu de Claude : ' + raw.slice(0, 150));
  }
}

// ── Helpers UI ──
function showLoading(container, msg) {
  msg = msg || 'Analyse en cours…';
  container.innerHTML =
    '<div class="loading-bar-wrap"><div class="loading-bar"></div></div>' +
    '<p class="loading-text">' + msg + '</p>';
}

function showError(container, msg) {
  msg = msg || 'Erreur inconnue.';
  container.innerHTML =
    '<div style="background:#fdf4f4;border:1px solid #f7c1c1;border-radius:8px;padding:1rem 1.25rem;margin:.5rem 0">' +
    '<p style="color:#c33;font-size:.88rem;font-weight:500;margin-bottom:.35rem">⚠ Erreur détaillée</p>' +
    '<p style="color:#a33;font-size:.82rem;line-height:1.6;font-family:monospace;white-space:pre-wrap;word-break:break-all">' + msg + '</p>' +
    '</div>';
}

function genderBadge(genre) {
  var map = { 'féminin': ['badge-f','♀ Féminin'], 'masculin': ['badge-m','♂ Masculin'], 'mixte': ['badge-mx','⚥ Mixte'] };
  var pair = map[genre] || ['badge-neutral', genre || '—'];
  return '<span class="badge ' + pair[0] + '">' + pair[1] + '</span>';
}

function trendBadge(tendance) {
  var map = { 'montant': ['badge-up','↑ En hausse'], 'déclinant': ['badge-dn','↓ Déclinant'], 'stable': ['badge-st','→ Stable'] };
  var pair = map[tendance] || ['badge-st', tendance || '—'];
  return '<span class="badge ' + pair[0] + '">' + pair[1] + '</span>';
}

function scoreBar(label, score) {
  var pct = Math.min(Math.max(Number(score) || 0, 0), 10) * 10;
  return '<div class="score-bar-row"><span class="score-bar-label">' + label + '</span><div class="score-bar-bg"><div class="score-bar-fill" style="width:' + pct + '%"></div></div><span class="score-bar-val">' + score + '/10</span></div>';
}

function scoreColor(s) {
  if (s >= 8) return '#5a9e6b';
  if (s >= 6) return '#b8965a';
  return '#c07060';
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

function sparklineRow(year, value, max) {
  var pct = Math.round((value / (max || 1)) * 100);
  return '<div class="sparkline-row"><span class="spark-year">' + year + '</span><div class="spark-bg"><div class="spark-fill" style="width:' + pct + '%"></div></div><span class="spark-count">' + Number(value).toLocaleString('fr-FR') + '</span></div>';
}

function gateHTML(title, desc) {
  title = title || '✦ Rapport Premium complet';
  desc = desc || 'Accédez à toutes les fonctionnalités avancées.';
  return '<div class="gate"><div class="gate-text"><strong>' + title + '</strong>' + desc + '</div><button class="gate-btn" onclick="window.location.href=\'premium.html\'">Débloquer</button></div>';
}

function cap(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
