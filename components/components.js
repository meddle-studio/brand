/* Meddle components: the behaviors described in brand/visual/motion.md and motion.json.
   Load at the end of <body>: <script src="components/components.js"></script>
   No dependencies. Everything degrades to visible, static content without it.

   1. theme-crossfade  Give each section its static theme class AND a matching data-scroll-theme, e.g.
                       <section class="m-theme-light" data-scroll-theme="light">. Without JS each section keeps
                       its own theme. With JS the static class is removed and the .m-root element (usually <body>)
                       crossfades between themes over 800ms as each section crosses the viewport midpoint.
                       Sections with a theme class but NO data-scroll-theme stay fixed "islands".
   2. reveal           .m-reveal fades up (1500ms). .m-reveal-list fades its <li> items right, in turn.
   3. tooltip-follow   Add data-tooltip="Book an intro call" to a link and include
                       <div class="m-tooltip" aria-hidden="true"></div> once per page. Desktop only.
   4. nav-autohide     Add data-autohide to a fixed/sticky nav: hides on scroll down, returns on scroll up.
                       Optional data-autohide-after=".m-hero": only hide once scrolled past that element.
   5. hero             .m-hero__nav: publishes its height as --m-nav-h (the sticky wordmark stops above it).
   6. scrollspy        Add data-scrollspy to a nav of #anchor links: the link for the section in view gets
                       .is-active + aria-current (the first link stays active near the top of the page). */

(() => {
  document.documentElement.classList.add('m-js');
  const root = document.querySelector('.m-root') || document.body;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. Theme crossfade
  const triggers = [...document.querySelectorAll('[data-scroll-theme]')];
  if (triggers.length) {
    // No-JS fallback: triggers may also carry a static .m-theme-* class so they look right without JS.
    // With JS, strip it so they follow the page-level crossfade instead of acting as islands.
    triggers.forEach((el) => { if (el !== root) el.classList.remove('m-theme-dark', 'm-theme-light', 'm-theme-sheet'); });
    const initial = [...root.classList].find((c) => c.startsWith('m-theme-')) || 'm-theme-dark';
    const apply = () => {
      const mid = innerHeight / 2;
      let theme = initial;
      for (const el of triggers) if (el.getBoundingClientRect().top < mid) theme = `m-theme-${el.dataset.scrollTheme}`;
      if (!root.classList.contains(theme)) {
        root.classList.remove('m-theme-dark', 'm-theme-light', 'm-theme-sheet');
        root.classList.add(theme);
      }
    };
    addEventListener('scroll', apply, { passive: true });
    addEventListener('resize', apply);
    apply();
  }

  // 2. Reveals
  const reveals = document.querySelectorAll('.m-reveal, .m-reveal-list');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-in'));
  } else {
    document.querySelectorAll('.m-reveal-list').forEach((list) =>
      [...list.children].forEach((li, i) => { li.style.transitionDelay = `${i * 120}ms`; }));
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }), { threshold: 0.3 });
    reveals.forEach((el) => io.observe(el));
  }

  // 3. Tooltip
  const tip = document.querySelector('.m-tooltip');
  if (tip && matchMedia('(hover: hover) and (min-width: 992px)').matches) {
    document.querySelectorAll('[data-tooltip]').forEach((el) => {
      el.addEventListener('mouseenter', () => { tip.textContent = el.dataset.tooltip; tip.classList.add('is-visible'); });
      el.addEventListener('mousemove', (e) => { tip.style.left = `${e.clientX + 14}px`; tip.style.top = `${e.clientY + 14}px`; });
      el.addEventListener('mouseleave', () => tip.classList.remove('is-visible'));
    });
  }

  // 4. Nav auto-hide
  document.querySelectorAll('[data-autohide]').forEach((nav) => {
    let last = scrollY;
    const after = nav.dataset.autohideAfter && document.querySelector(nav.dataset.autohideAfter);
    const threshold = () => (after ? after.offsetTop + after.offsetHeight + 50 : nav.offsetHeight);
    nav.style.transition = 'transform var(--m-duration-quick) var(--m-ease-in-out)';
    addEventListener('scroll', () => {
      const y = scrollY;
      nav.style.transform = y > last && y > threshold() ? 'translateY(-120%)' : '';
      last = y;
    }, { passive: true });
  });

  // 5. Hero: publish the nav height so the sticky wordmark stops just above it
  const heroNav = document.querySelector('.m-hero__nav');
  if (heroNav) {
    const setNavH = () => document.documentElement.style.setProperty('--m-nav-h', `${heroNav.offsetHeight}px`);
    setNavH(); addEventListener('resize', setNavH);
  }

  // 6. Scrollspy
  document.querySelectorAll('[data-scrollspy]').forEach((nav) => {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const targets = links.map((a) => document.getElementById(a.getAttribute('href').slice(1)));
    const spy = () => {
      let active = links[0];
      if (scrollY > 200) targets.forEach((t, i) => { if (t && t.getBoundingClientRect().top < innerHeight * 0.4) active = links[i]; });
      links.forEach((a) => { const on = a === active; a.classList.toggle('is-active', on); on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
    };
    addEventListener('scroll', spy, { passive: true }); spy();
  });
})();
