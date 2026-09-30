/* Meddle social tile generator. Every choice stays inside the kit:
   tokens and type come from tokens.css, the wordmark is the locked SVG, copy is linted with
   brand/verbal/lexicon.js (generated from concepts.md), and export is blocked while a kit check fails. */
(() => {
  const $ = (s) => document.querySelector(s);
  const L = window.MEDDLE_LEXICON || { rules: [], allowed: [], mechanics: [], lines: [] };
  const STORE = 'meddle-social-tiles-v1';
  const SIGNOFF = 'Fortune favors the daring.';
  const defaults = { layout: 'statement', format: '1080x1080', theme: 'dark', headline: "It's time you seized an *unfair advantage*.", support: '', cite: '', role: '', kicker: 'Meddle · Point of view', focus: 'center', page: '', pages: '' };
  const load = () => { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } };
  const save = () => { try { const { image, ...rest } = state; localStorage.setItem(STORE, JSON.stringify(rest)); } catch { /* storage unavailable */ } };
  const state = { ...defaults, ...load(), image: null };
  const tile = $('#tile');
  let fitOk = true;

  // ---------- controls ----------
  for (const name of ['layout', 'format', 'theme']) {
    document.querySelectorAll(`input[name=${name}]`).forEach((input) => {
      input.checked = input.value === state[name];
      input.addEventListener('change', () => { state[name] = input.value; update(); });
    });
  }
  for (const id of ['headline', 'support', 'cite', 'role', 'kicker', 'focus', 'page', 'pages']) {
    const el = $('#' + id);
    el.value = state[id];
    el.addEventListener('input', () => { state[id] = el.value; update(); });
  }
  const approved = $('#approved');
  L.lines.forEach((line) => { const o = document.createElement('option'); o.value = line; o.textContent = line.replace(/\*/g, ''); approved.appendChild(o); });
  // Italic payoff: wrap the selected words in *asterisks*, replacing any earlier payoff (one per surface).
  // With nothing selected, it removes the payoff.
  const headlineEl = $('#headline');
  function applyPayoff() {
    const v = headlineEl.value;
    let a = headlineEl.selectionStart, b = headlineEl.selectionEnd;
    while (a < b && /[\s*]/.test(v[a])) a++;          // trim spaces/asterisks from the selection
    while (b > a && /[\s*.,!?;:]/.test(v[b - 1])) b--;  // keep trailing punctuation roman
    const plainIndex = (i) => v.slice(0, i).replace(/\*/g, '').length; // map positions once asterisks are gone
    const plain = v.replace(/\*/g, '');
    let next = plain, caret;
    if (b > a) {
      const [pa, pb] = [plainIndex(a), plainIndex(b)];
      next = plain.slice(0, pa) + '*' + plain.slice(pa, pb) + '*' + plain.slice(pb);
      caret = pb + 2;
    }
    headlineEl.value = next; state.headline = next; update();
    headlineEl.focus(); if (caret != null) headlineEl.setSelectionRange(caret, caret);
  }
  $('#payoff-btn').addEventListener('click', applyPayoff);
  headlineEl.addEventListener('keydown', (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'i') { e.preventDefault(); applyPayoff(); } });

  approved.addEventListener('change', () => { if (!approved.value) return; state.headline = approved.value; $('#headline').value = approved.value; approved.value = ''; update(); });
  $('#image').addEventListener('change', (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { state.image = reader.result; update(); };
    reader.readAsDataURL(file);
  });

  // ---------- helpers ----------
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  const wordmark = (cls) => { const d = el('div', cls); d.appendChild($('#wm-tpl').content.firstElementChild.cloneNode(true)); return d; };
  const pageLabel = () => { const p = parseInt(state.page, 10), n = parseInt(state.pages, 10); return p ? String(p).padStart(2, '0') + (n ? ' / ' + String(n).padStart(2, '0') : '') : ''; };

  function parseHeadline(raw) {
    const pairs = (raw.match(/\*[^*\n]+\*/g) || []).length;
    let payoff = null, i = 0;
    let text = raw.trim().replace(/ (\S+)\s*$/, ' $1'); // no widows: bind the last two words
    let html = esc(text).replace(/\*([^*\n]+)\*/g, (m, inner) => { i++; if (i === 1) { payoff = inner.replace(/ /g, ' '); return `<em>${inner}</em>`; } return inner; });
    html = html.replace(/\*/g, '').replace(/\n/g, '<br>');
    return { html, pairs, payoff };
  }

  function lint(text) {
    let t = text.replace(/\*/g, '');
    for (const a of L.allowed) t = t.replace(new RegExp(a.source, a.flags), (m) => ' '.repeat(m.length));
    const out = { errors: [], warns: [] };
    for (const r of L.rules) for (const m of t.matchAll(new RegExp(r.source, r.flags))) (r.level === 'error' ? out.errors : out.warns).push(`“${m[0]}” → ${r.instead}`);
    for (const r of L.mechanics) for (const m of t.matchAll(new RegExp(r.source, r.flags))) out.warns.push(r.msg);
    out.warns = [...new Set(out.warns)];
    return out;
  }

  function fit(node, box, min, max, u) {
    const fits = (s) => { node.style.fontSize = s * u + 'px'; return node.scrollHeight <= box.clientHeight + 1 && node.scrollWidth <= box.clientWidth + 1; };
    if (fits(max)) return true;
    if (!fits(min)) return false;
    let lo = min, hi = max;
    for (let k = 0; k < 14; k++) { const mid = (lo + hi) / 2; if (fits(mid)) lo = mid; else hi = mid; }
    fits(lo);
    return true;
  }

  function header(ghost) {
    const h = el('header', 't-head');
    h.appendChild(wordmark(ghost ? 't-wm ghost' : 't-wm'));
    if (state.kicker.trim()) h.appendChild(el('div', 't-meta', esc(state.kicker.trim())));
    h.appendChild(el('div', 't-meta t-pg', pageLabel()));
    return h;
  }

  // ---------- render ----------
  function render() {
    const [w, h] = state.format.split('x').map(Number);
    const u = w / 1080;
    const layout = state.layout;
    const theme = layout === 'hero' ? 'dark' : state.theme;
    tile.className = `tile m-theme-${theme} layout-${layout}${w / h > 1.4 ? ' is-wide' : ''}`;
    tile.style.width = w + 'px'; tile.style.height = h + 'px';
    tile.style.setProperty('--u', u + 'px');
    tile.innerHTML = '';
    const head = parseHeadline(layout === 'signoff' ? SIGNOFF : state.headline);
    fitOk = true;
    const img = () => { const i = el('img'); i.src = state.image; i.alt = ''; i.style.objectPosition = state.focus; return i; };

    if (layout === 'statement') {
      tile.appendChild(header(true));
      const main = el('div', 't-main'); const box = el('div', 't-fit bottom'); const p = el('p', 't-statement', head.html);
      box.appendChild(p); main.appendChild(box);
      if (state.support.trim()) main.appendChild(el('p', 't-support', esc(state.support.trim())));
      tile.appendChild(main); fitOk = fit(p, box, 40, 104, u);
    } else if (layout === 'display') {
      tile.appendChild(header(false));
      const main = el('div', 't-main'); const box = el('div', 't-fit center'); const p = el('p', 't-display', head.html);
      box.appendChild(p); main.appendChild(box); tile.appendChild(main); fitOk = fit(p, box, 70, 230, u);
    } else if (layout === 'quote') {
      tile.appendChild(header(true));
      const main = el('div', 't-main'); main.appendChild(el('div', 't-mark', '“'));
      const box = el('div', 't-fit'); const p = el('p', 't-quote', head.html); box.appendChild(p); main.appendChild(box);
      if (state.cite.trim()) main.appendChild(el('p', 't-cite', esc(state.cite.trim()) + (state.role.trim() ? `<span class="role">${esc(state.role.trim())}</span>` : '')));
      tile.appendChild(main); fitOk = fit(p, box, 34, 76, u);
    } else if (layout === 'case') {
      tile.appendChild(header(true));
      const main = el('div', 't-main'); const frame = el('div', 't-frame');
      frame.appendChild(state.image ? img() : el('div', 't-empty', 'Add an image'));
      const copy = el('div', 't-copy'); const box = el('div', 't-fit bottom'); const p = el('p', 't-case', head.html);
      box.appendChild(p); copy.appendChild(box);
      if (state.support.trim()) copy.appendChild(el('p', 't-support', esc(state.support.trim())));
      main.appendChild(frame); main.appendChild(copy); tile.appendChild(main); fitOk = fit(p, box, 34, 84, u);
    } else if (layout === 'hero') {
      if (state.image) { const i = img(); i.className = 't-hero-img'; tile.appendChild(i); } else tile.appendChild(el('div', 't-hero-empty', 'Add an image'));
      if (state.kicker.trim()) tile.appendChild(el('div', 't-hero-kicker', esc(state.kicker.trim())));
      if (pageLabel()) tile.appendChild(el('div', 't-hero-kicker t-hero-pg', pageLabel()));
      tile.appendChild(wordmark('t-bleed'));
    } else if (layout === 'signoff') {
      const main = el('div', 't-main'); const box = el('div', 't-fit'); const p = el('p', 't-signoff', head.html);
      box.appendChild(p); main.appendChild(box); main.appendChild(el('p', 't-url', 'meddle.studio'));
      main.appendChild(wordmark('t-bleed')); tile.appendChild(main); fitOk = fit(p, box, 48, 124, u);
    }
    scale(w, h);
    $('#dims').textContent = `${w} × ${h} · ${layout} · ${layout === 'hero' ? 'image' : theme}`;
    return head;
  }

  function scale(w, h) {
    const stage = document.querySelector('.stage');
    const s = Math.min((stage.clientWidth - 64) / w, (stage.clientHeight - 110) / h, 1);
    $('#scaler').style.transform = `scale(${s})`;
    $('#box').style.width = w * s + 'px'; $('#box').style.height = h * s + 'px';
  }

  // ---------- kit checks ----------
  function checks(head) {
    const items = []; const add = (level, text, note) => items.push({ level, text, note });
    const layout = state.layout;
    const usesHeadline = layout !== 'hero' && layout !== 'signoff';
    if (usesHeadline && !state.headline.trim()) add('err', 'Add a headline');
    if (['statement', 'display', 'case'].includes(layout)) {
      if (head.pairs > 1) add('err', 'One italic payoff per surface', 'Only the first *phrase* is set in italic. Remove the extra asterisks.');
      else if (head.pairs === 1) {
        const filler = /^(the|a|an|of|to|in|on|for|with|is|it)$/i.test(head.payoff.trim());
        add(filler ? 'warn' : 'ok', `Italic payoff: “${head.payoff}”`, filler ? 'That’s a filler word. Italicize the payoff, not the setup.' : null);
      } else add('ok', 'No italic payoff', 'Fine if something else on the tile interferes. Wrap one phrase in *asterisks* to add one.');
    }
    if (layout === 'quote' && head.pairs > 1) add('err', 'One emphasis per quote');
    const text = [usesHeadline || layout === 'quote' ? state.headline : '', state.support, state.kicker, layout === 'quote' ? state.cite + ' ' + state.role : ''].join('\n');
    const lr = lint(text);
    lr.errors.forEach((e) => add('err', 'Off-brand word: ' + e, 'From the Avoid table in concepts.md.'));
    lr.warns.forEach((w) => add('warn', w));
    if (!lr.errors.length && !lr.warns.length) add('ok', 'Copy passes the kit linter');
    const words = (usesHeadline ? state.headline : '').replace(/\*/g, '').trim().split(/\s+/).filter(Boolean).length;
    if (words > 15) add('warn', `Long for a tile: ${words} words`, 'One idea per tile. Aim for 15 words or fewer, and move the rest to the post caption.');
    if (!fitOk) add('err', 'Too long for this format', 'Cut words or choose a taller format. Type never shrinks below the kit minimum.');
    if ((layout === 'case' || layout === 'hero') && !state.image) add('err', 'Add an image', 'Real work or reference imagery (art-direction.md).');
    if (layout === 'hero') add('ok', 'The image plus the edge-to-edge wordmark are this tile’s one interference');
    if (layout === 'signoff') add('ok', 'The sign-off line is fixed: Fortune favors the daring.');
    add('ok', `Wordmark locked: 4.56:1, ${layout === 'hero' || layout === 'signoff' ? 'edge to edge' : layout === 'display' ? 'corner, full contrast' : 'corner, ghost'}`);
    const list = $('#rules'); list.innerHTML = '';
    for (const it of items) { const li = el('li', it.level, esc(it.text) + (it.note ? `<small>${esc(it.note)}</small>` : '')); list.appendChild(li); }
    const blocked = items.some((i) => i.level === 'err');
    $('#export').disabled = blocked;
    $('#status').textContent = blocked ? 'Fix the × checks to export.' : '';
  }

  function syncFields() {
    const layout = state.layout;
    document.querySelectorAll('[data-for]').forEach((n) => { n.hidden = !n.dataset.for.split(' ').includes(layout); });
    $('#headline-label').textContent = layout === 'quote' ? 'Quote (no quotation marks)' : 'Headline';
    document.querySelectorAll('input[name=theme]').forEach((i) => { i.disabled = layout === 'hero'; });
  }

  function update() { syncFields(); const head = render(); checks(head); save(); }

  // ---------- export ----------
  let fontCSS;
  const getFontCSS = () => fontCSS || (fontCSS = (async () => {
    const url = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:opsz,wght@14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
    const css = await (await fetch(url)).text();
    const blocks = css.split('/* ').filter((b) => b.startsWith('latin */')).map((b) => b.slice('latin */'.length));
    let out = '';
    for (const b of blocks) {
      const m = b.match(/url\((https:[^)]+)\)/); if (!m) continue;
      const blob = await (await fetch(m[1])).blob();
      const data = await new Promise((resolve) => { const fr = new FileReader(); fr.onload = () => resolve(fr.result); fr.readAsDataURL(blob); });
      out += b.replace(m[1], data);
    }
    return out;
  })());

  $('#export').addEventListener('click', async () => {
    const [w, h] = state.format.split('x').map(Number);
    const btn = $('#export'); btn.disabled = true;
    try {
      $('#status').textContent = 'Embedding fonts…';
      const fontEmbedCSS = await getFontCSS();
      $('#status').textContent = 'Rendering…';
      const dataUrl = await window.htmlToImage.toPng(tile, { width: w, height: h, pixelRatio: 1, fontEmbedCSS, cacheBust: false });
      const a = document.createElement('a');
      a.href = dataUrl; a.download = `meddle-${state.layout}-${w}x${h}.png`; a.click();
      $('#status').textContent = 'Exported ' + a.download;
      window.__lastExport = dataUrl; // for automated checks
    } catch (err) {
      $('#status').textContent = 'Export failed: ' + (err && err.message ? err.message : err);
    } finally { btn.disabled = false; }
  });

  addEventListener('resize', () => { const [w, h] = state.format.split('x').map(Number); scale(w, h); });
  update();
  document.fonts.ready.then(update);
})();
