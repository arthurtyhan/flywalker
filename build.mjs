// 產生靜態網站：node build.mjs  →  dist/
// Builds the static site into dist/ (Chinese at /, English at /en/).
import fs from 'node:fs';
import path from 'node:path';
import * as S from './content/site.mjs';

const OUT = 'dist';
const L = { zh: 'zh-Hant-TW', en: 'en' };

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// 著作條目內允許 <i>，其餘一律跳脫
const rich = (s = '') => esc(s).replace(/&lt;(\/?)i&gt;/g, '<$1i>');
const tx = (o, lang) => (o == null ? '' : typeof o === 'string' ? o : o[lang] ?? o.zh ?? '');

const UI = {
  nav: {
    index: { zh: '首頁', en: 'Home' },
    about: { zh: '關於我', en: 'About' },
    research: { zh: '研究', en: 'Research' },
    teaching: { zh: '教學', en: 'Teaching' },
    lab: { zh: '實驗室', en: 'Lab' },
    service: { zh: '服務', en: 'Service' },
  },
  switchLang: { zh: 'English', en: '中文' },
  updated: { zh: '最後更新', en: 'Last updated' },
  contact: { zh: '聯絡我', en: 'Contact' },
};
const PAGES = ['index', 'about', 'research', 'teaching', 'lab', 'service'];
const ay2y = (ay) => ay + 1911; // 民國學年度 → 西元

function layout(lang, page, title, body) {
  const base = lang === 'en' ? '../' : '';
  const href = (p) => (p === 'index' ? './' : `${p}.html`);
  const other = lang === 'en' ? `../${page === 'index' ? '' : page + '.html'}` : `en/${page === 'index' ? '' : page + '.html'}`;
  const name = tx(S.profile.name, lang);
  const nav = PAGES.map((p) => `<a href="${href(p)}"${p === page ? ' aria-current="page"' : ''}>${tx(UI.nav[p], lang)}</a>`).join('');
  return `<!doctype html>
<html lang="${L[lang]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title ? `${title}｜${name}` : `${name}｜${tx(S.profile.title, lang)}`)}</title>
<meta name="description" content="${esc(tx(S.profile.tagline, lang))}">
<link rel="alternate" hreflang="zh-Hant" href="${lang === 'zh' ? href(page) : other}">
<link rel="alternate" hreflang="en" href="${lang === 'en' ? href(page) : other}">
<link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/style.css">
</head>
<body class="page-${page}">
<a class="skip" href="#main">${lang === 'en' ? 'Skip to content' : '跳到主要內容'}</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="./"><span class="brand-dot">韓</span><span>${esc(name)}</span></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="nav" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav id="nav" class="nav">${nav}<a class="lang" href="${other}" hreflang="${lang === 'en' ? 'zh-Hant' : 'en'}">🌐 ${tx(UI.switchLang, lang)}</a></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap footer-inner">
    <div>
      <strong>${esc(name)}</strong><br>${esc(tx(S.profile.title, lang))}<br>
      <a href="mailto:${S.profile.email}">${S.profile.email}</a> · ${esc(S.profile.phone)}
    </div>
    <div class="footer-note">${tx(UI.updated, lang)}：${S.updated} · Made with ☀️ in Taitung</div>
  </div>
</footer>
<script src="${base}assets/main.js" defer></script>
</body>
</html>`;
}

const section = (id, heading, inner, cls = '') => `<section id="${id}" class="section ${cls}"><div class="wrap"><h2 class="section-title">${heading}</h2>${inner}</div></section>`;
const pageHead = (emoji, title, sub) => `<section class="page-head"><div class="wrap"><div class="page-emoji" aria-hidden="true">${emoji}</div><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</div></section>`;
const doiLink = (d) => (d ? ` <a class="doi" href="https://doi.org/${esc(d)}" target="_blank" rel="noopener">DOI</a>` : '');

// ---------------- 各頁 ----------------
function home(lang) {
  const P = S.profile;
  const zh = lang === 'zh';
  const journals = S.publications.filter((p) => p.type === 'journal').length;
  const tpr = S.projects.filter((p) => p.kind === 'tpr').length;
  const stats = [
    [journals, zh ? '篇 SCIE／ESCI 期刊論文' : 'SCIE/ESCI journal papers'],
    [tpr, zh ? '件教育部教學實踐研究計畫' : 'MOE teaching-practice projects'],
    [S.patents.length, zh ? '項專利' : 'patents'],
    [S.studentAwards.length, zh ? '場指導學生競賽獲獎' : 'student competition wins'],
  ];
  const links = P.links.filter((l) => l.url).map((l) => `<a class="pill" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(tx(l.label, lang))} ↗</a>`).join('');
  return `
<section class="hero">
  <div class="wrap hero-inner">
    <div class="hero-text">
      <p class="hello">${esc(tx(P.greeting, lang))}</p>
      <h1>${esc(tx(P.name, lang))}${zh ? ' <span class="en-name">Tuan-Yung Han</span>' : ''}</h1>
      <p class="hero-title">${esc(tx(P.title, lang))}<br><span class="badge">${esc(tx(P.role, lang))}</span></p>
      <p class="tagline">${esc(tx(P.tagline, lang))}</p>
      <ul class="chips">${P.keywords.map((k) => `<li>${esc(tx(k, lang))}</li>`).join('')}</ul>
      <div class="cta"><a class="btn primary" href="#contact">✉️ ${tx(UI.contact, lang)}</a><a class="btn" href="research.html">📚 ${zh ? '看我的研究' : 'My research'}</a></div>
    </div>
    <div class="hero-photo">
      <div class="blob" aria-hidden="true"></div>
      <img src="${P.photo}" alt="${esc(tx(P.name, lang))}" width="320" height="320" onerror="this.onerror=null;this.src='${lang === 'en' ? '../' : ''}assets/avatar.svg'">
      <span class="sticker s1" aria-hidden="true">📡</span><span class="sticker s2" aria-hidden="true">🤖</span><span class="sticker s3" aria-hidden="true">☀️</span>
    </div>
  </div>
</section>
<section class="stats"><div class="wrap stats-grid">${stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div></section>
${section('focus', zh ? '我在做什麼 🔭' : 'What I work on 🔭', `<div class="cards three">${S.researchThemes.map((t) => `<article class="card"><div class="card-icon">${t.icon}</div><h3>${esc(tx(t.title, lang))}</h3><p>${esc(tx(t.desc, lang))}</p></article>`).join('')}</div>`)}
${section('news', zh ? '最新消息 📣' : 'News 📣', `<ul class="news">${S.news.map((n) => `<li><time>${n.date}</time><span>${esc(tx(n, lang))}</span></li>`).join('')}</ul>`, 'tint')}
${section('students', zh ? '給同學的話 💌' : 'A note to students 💌', `<div class="note-card"><p>${esc(tx(S.toStudents, lang))}</p><a class="btn primary" href="mailto:${P.email}">${zh ? '寫信給我' : 'Email me'}</a></div>`)}
${section('contact', zh ? '聯絡方式 ✉️' : 'Get in touch ✉️', `<div class="contact-grid">
  <div class="contact-item"><span>📧</span><div><small>Email</small><a href="mailto:${P.email}">${P.email}</a></div></div>
  <div class="contact-item"><span>☎️</span><div><small>${zh ? '電話' : 'Phone'}</small><a href="tel:+886-89-226389,7050">${esc(P.phone)}</a></div></div>
  <div class="contact-item wide"><span>📍</span><div><small>${zh ? '研究室' : 'Office'}</small>${esc(tx(P.office, lang))}</div></div>
  <div class="contact-item wide"><span>🕒</span><div><small>Office Hours</small>${esc(tx(P.officeHours, lang))}</div></div>
</div>${links ? `<div class="pill-row">${links}</div>` : ''}`, 'tint')}`;
}

function about(lang) {
  const zh = lang === 'zh';
  const tl = (items) => `<ol class="timeline">${items.map((e) => `<li>${e.period ? `<time>${e.period}</time>` : ''}<span>${esc(tx(e, lang))}</span></li>`).join('')}</ol>`;
  return `${pageHead('🙋', zh ? '關於我' : 'About Me', esc(tx(S.life.intro, lang)))}
${section('edu', zh ? '學歷 🎓' : 'Education 🎓', `<ul class="list-cards">${S.education.map((e) => `<li>${esc(tx(e, lang))}</li>`).join('')}</ul>`)}
${section('exp', zh ? '經歷 🧭' : 'Experience 🧭', tl(S.experience), 'tint')}
${section('honors', zh ? '榮譽 🏅' : 'Honors 🏅', `<ul class="award-list">${S.honors.map((h) => `<li><b>${h.year}</b><span>${esc(tx(h, lang))}</span></li>`).join('')}</ul>`)}
${section('certs', zh ? '證照與認證 📜' : 'Certifications 📜', `<div class="cards two">${S.certifications.map((c) => `<div class="mini-card"><strong>${esc(tx(c, lang))}</strong><small>${[c.date, c.id].filter(Boolean).map(esc).join(' · ')}</small></div>`).join('')}</div>`, 'tint')}
${section('life', zh ? '生活裡的我 ✈️' : 'Life outside work ✈️', `<p class="lead">${zh ? '去過的地方（陸續增加中…）' : 'Places I have visited (and counting…)'}</p><ul class="chips travel">${S.life.travel.map((t) => `<li>📍 ${esc(tx(t, lang))}</li>`).join('')}</ul><div class="cards three fun"><div class="card"><div class="card-icon">🥋</div><h3>${zh ? '合氣道三段' : 'Aikido 3rd Dan'}</h3><p>${zh ? '也具備大專院校合氣道 C 級教練資格。' : 'Also a certified Level-C university Aikido coach.'}</p></div><div class="card"><div class="card-icon">📖</div><h3>${zh ? '閱讀與電影' : 'Books & Movies'}</h3><p>${zh ? '下班後的充電時間。' : 'How I recharge after work.'}</p></div><div class="card"><div class="card-icon">🎵</div><h3>${zh ? '音樂與運動' : 'Music & Sports'}</h3><p>${zh ? '讓生活保持節奏感！' : 'Keeping life in rhythm!'}</p></div></div>`)}`;
}

function research(lang) {
  const zh = lang === 'zh';
  const types = [['journal', zh ? '期刊論文' : 'Journal Papers'], ['intl', zh ? '國際會議論文' : 'International Conferences'], ['domestic', zh ? '國內會議論文' : 'Domestic Conferences'], ['book', zh ? '書籍與技術報告' : 'Books & Reports']];
  const topicLabel = { edu: zh ? '教育' : 'Education', antenna: zh ? '天線' : 'Antenna', other: zh ? '其他' : 'Other' };
  const filters = `<div class="filters" role="group" aria-label="filter"><button class="on" data-f="all">${zh ? '全部' : 'All'}</button><button data-f="edu">🤖 ${zh ? '教育研究' : 'Education'}</button><button data-f="antenna">📡 ${zh ? '天線設計' : 'Antennas'}</button></div>`;
  const pubs = types.map(([t, label]) => {
    const items = S.publications.filter((p) => p.type === t);
    return `<h3 class="sub">${label} <small>(${items.length})</small></h3><ol class="pubs" reversed>${items.map((p) => `<li data-topic="${p.topic}"><span class="tag ${p.topic}">${topicLabel[p.topic]}</span> ${rich(p.text).replace(/T\.-Y\. Han\*?|Tuan-Yung Han\*?|T\. Han|韓端勇/g, (m) => `<b class="me">${m}</b>`)}${doiLink(p.doi)}</li>`).join('')}</ol>`;
  }).join('');
  const role = { pi: zh ? '主持人' : 'PI', copi: zh ? '共同主持人' : 'Co-PI', '': '' };
  const kinds = [['tpr', zh ? '教學實踐研究計畫' : 'Teaching Practice Research'], ['research', zh ? '學術研究計畫' : 'Research Projects'], ['industry', zh ? '產學合作' : 'Industry Collaboration'], ['other', zh ? '其他計畫' : 'Other Projects']];
  const projs = kinds.map(([k, label]) => {
    const items = S.projects.filter((p) => p.kind === k);
    return `<h3 class="sub">${label} <small>(${items.length})</small></h3><ul class="projects">${items.map((p) => `<li><time>${p.period}</time><div><strong>${esc(tx(p, lang))}</strong>${p.award ? ` <span class="badge gold">⭐ ${zh ? '績優計畫' : 'Outstanding'}</span>` : ''}<small>${[role[p.role], tx(p.agency, lang), p.id].filter(Boolean).map(esc).join(' · ')}</small></div></li>`).join('')}</ul>`;
  }).join('');
  return `${pageHead('📚', zh ? '研究' : 'Research', zh ? '從天線的電磁波，到課堂裡的學習動機——我喜歡用工程方法解決真實問題。' : 'From electromagnetic waves to classroom motivation — I enjoy solving real problems with engineering.')}
${section('themes', zh ? '研究主題' : 'Research Themes', `<div class="cards three">${S.researchThemes.map((t) => `<article class="card"><div class="card-icon">${t.icon}</div><h3>${esc(tx(t.title, lang))}</h3><p>${esc(tx(t.desc, lang))}</p></article>`).join('')}</div>`)}
${section('pubs', zh ? '著作 📝' : 'Publications 📝', `<p class="hint">${zh ? '* 為通訊作者；可依主題篩選。' : '* corresponding author. Filter by topic:'}</p>${filters}${pubs}`, 'tint')}
${section('projects', zh ? '研究計畫 🔬' : 'Projects 🔬', `${projs}<h3 class="sub">${zh ? '指導大專學生研究計畫' : 'Supervised Undergraduate Research (NSC)'}</h3><ul class="projects">${S.studentProjects.map((p) => `<li><time>${p.period}</time><div><strong>${esc(tx(p, lang))}</strong><small>${p.id}</small></div></li>`).join('')}</ul>`)}
${section('patents', zh ? '專利 💡' : 'Patents 💡', `<div class="cards three">${S.patents.map((p) => `<div class="card"><span class="badge">${esc(tx(p.kind, lang))}</span><h3>${esc(tx(p, lang))}</h3><p>${zh ? '中華民國' : 'Taiwan (R.O.C.)'} ${p.no}</p></div>`).join('')}</div>`, 'tint')}`;
}

function teaching(lang) {
  const zh = lang === 'zh';
  const tpr = S.projects.filter((p) => p.kind === 'tpr');
  return `${pageHead('🍎', zh ? '教學' : 'Teaching', zh ? '我相信好的課堂是有溫度的：讓同學先動手、再思考、最後願意分享。' : 'I believe a good classroom is a warm one: students build first, think deeply, then share.')}
${section('philosophy', zh ? '我的教學 ✏️' : 'How I teach ✏️', `<div class="cards three">
<div class="card"><div class="card-icon">🔄</div><h3>${zh ? '翻轉教室' : 'Flipped Classroom'}</h3><p>${zh ? '課前自學、課堂討論與實作，搭配引導式反思，讓學習更主動。' : 'Pre-class self-study, in-class discussion and practice, with guided reflection.'}</p></div>
<div class="card"><div class="card-icon">🤖</div><h3>${zh ? '生成式 AI 與聊天機器人' : 'Generative AI & Chatbots'}</h3><p>${zh ? '用 AI 擬題、情境學習與 WSQ 策略，培養批判性思考。' : 'AI-supported problem-posing, scenario learning and WSQ to build critical thinking.'}</p></div>
<div class="card"><div class="card-icon">🎲</div><h3>${zh ? '遊戲化與正念' : 'Gamification & Mindfulness'}</h3><p>${zh ? '小組計分賽讓課堂好玩，正念調節照顧學習情緒。' : 'Team scoreboards keep it fun; mindfulness supports well-being.'}</p></div>
</div>`)}
${section('tpr', zh ? '教學實踐研究 🧪' : 'Teaching Practice Research 🧪', `<ol class="timeline">${tpr.map((p) => `<li><time>${p.period}</time><span>${esc(tx(p, lang))}${p.award ? ` <span class="badge gold">⭐ ${zh ? '績優' : 'Outstanding'}</span>` : ''}</span></li>`).join('')}</ol>`, 'tint')}
${section('courses', zh ? '實驗室課程 🔧' : 'Lab Courses 🔧', `<ul class="chips big">${S.lab.courses.map((c) => `<li>${esc(tx(c, lang))} <small>${c.hrs}${zh ? ' 學時' : ' hrs'}</small></li>`).join('')}</ul>`)}
${section('resources', zh ? '課程資源 🎒' : 'Course Resources 🎒', `<div class="cards two">${S.teachingResources.map((r) => `<a class="card link-card" href="${esc(r.url)}" target="_blank" rel="noopener"><div class="card-icon">${r.icon}</div><h3>${esc(tx(r.title, lang))} ↗</h3><p>${esc(tx(r.desc, lang))}</p></a>`).join('')}</div>
<h3 class="sub">${zh ? '📄 寫 Word 報告你需要知道的事' : '📄 Writing reports in Word'}</h3><ul class="chips">${S.wordTips.map((w) => `<li><a href="${esc(w.url)}" target="_blank" rel="noopener">${esc(tx(w, lang))} ↗</a></li>`).join('')}</ul>`, 'tint')}`;
}

function labPage(lang) {
  const zh = lang === 'zh';
  return `${pageHead('🔌', tx(S.lab.name, lang), esc(tx(S.lab.intro, lang)))}
${section('equip', zh ? '儀器設備 🧰' : 'Equipment 🧰', `<div class="equip-grid">${S.lab.equipment.map((e) => `<div class="equip"><span class="equip-icon">${e.icon}</span>${e.qty ? `<b>${e.qty}</b>` : ''}<strong>${esc(tx(e, lang))}</strong>${e.model ? `<small>${esc(e.model)}</small>` : ''}</div>`).join('')}</div>
<div class="cert-row"><span class="badge">✅ ${zh ? '乙級數位電子 術科檢定場' : 'Level-B Digital Electronics Test Site'}</span><span class="badge">✅ ${zh ? '丙級工業電子 術科檢定場' : 'Level-C Industrial Electronics Test Site'}</span></div>`)}
${section('courses', zh ? '可配合之課程 📘' : 'Courses Supported 📘', `<ul class="chips big">${S.lab.courses.map((c) => `<li>${esc(tx(c, lang))} <small>${c.hrs}${zh ? ' 學時' : ' hrs'}</small></li>`).join('')}</ul>`, 'tint')}
${section('awards', zh ? '學生競賽成果 🏆' : 'Student Achievements 🏆', `<p class="hint">${zh ? '自走車、機器人、AI 創意應用……同學們的努力都在這裡！' : 'Robot cars, humanoid robots, AI applications — our students make it happen!'}</p><ul class="award-list">${S.studentAwards.map((a) => `<li><b>${a.year}</b><span>${esc(tx(a, lang))}</span></li>`).join('')}</ul>`)}`;
}

function service(lang) {
  const zh = lang === 'zh';
  const ayLabel = (ay) => (zh ? `${ay} 學年度` : `AY${ay2y(ay)}–${String(ay2y(ay) + 1).slice(2)}`);
  const acc = (rows) => rows.map((r, i) => `<details${i === 0 ? ' open' : ''}><summary>${ayLabel(r.ay)} <small>(${r.items.length})</small></summary><ul>${r.items.map((it) => `<li>${esc(tx(it, lang))}</li>`).join('')}</ul></details>`).join('');
  return `${pageHead('🤝', zh ? '服務' : 'Service', zh ? '行政、輔導與專業服務的足跡。' : 'Administration, mentoring and professional service.')}
<nav class="wrap jump"><a href="#admin">${zh ? '行政服務' : 'Administration'}</a><a href="#mentor">${zh ? '輔導服務' : 'Mentoring'}</a><a href="#pro">${zh ? '專業服務' : 'Professional'}</a></nav>
${section('admin', zh ? '行政服務 🏫' : 'Administration 🏫', `<ol class="timeline">${S.adminRoles.map((e) => `<li><time>${e.period}</time><span>${esc(tx(e, lang))}</span></li>`).join('')}</ol><h3 class="sub">${zh ? '各級委員會' : 'Committees'}</h3><div class="accordion">${acc(S.committees)}</div>`)}
${section('mentor', zh ? '輔導服務 🌱' : 'Mentoring 🌱', `<div class="accordion">${acc(S.mentoring)}</div>`, 'tint')}
${section('pro', zh ? '專業服務 🌏' : 'Professional Service 🌏', `<div class="accordion">${acc(S.professionalService)}</div>`)}`;
}

// ---------------- 輸出 ----------------
const builders = { index: home, about, research, teaching, lab: labPage, service };
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) fs.rmSync(path.join(OUT, f), { recursive: true, force: true });
fs.cpSync('src', OUT, { recursive: true });
for (const lang of ['zh', 'en']) {
  const dir = lang === 'en' ? path.join(OUT, 'en') : OUT;
  fs.mkdirSync(dir, { recursive: true });
  for (const p of PAGES) {
    const title = p === 'index' ? '' : p === 'lab' ? tx(S.lab.name, lang) : tx(UI.nav[p], lang);
    let html = layout(lang, p, title, builders[p](lang));
    if (lang === 'en') html = html.replace(/src="assets\//g, 'src="../assets/');
    fs.writeFileSync(path.join(dir, p === 'index' ? 'index.html' : `${p}.html`), html);
  }
}
console.log('Built →', path.resolve(OUT));
