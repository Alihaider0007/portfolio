(function () {
  'use strict';

  const KEY_THEME = 'portfolio-theme';
  const DEFAULT_THEME = 'dark';

  // ----- Theme -----
  function getStoredTheme() {
    try {
      return localStorage.getItem(KEY_THEME) || DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(KEY_THEME, theme);
    } catch (_) {}
  }

  function initTheme() {
    const theme = getStoredTheme();
    setTheme(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  // ----- Nav -----
  const NAV_SECTIONS = ['about', 'skills', 'projects', 'certifications', 'experience', 'contact'];

  function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    const nav = document.getElementById('nav');

    function close() {
      links?.classList.remove('open');
    }

    toggle?.addEventListener('click', () => {
      links?.classList.toggle('open');
    });

    links?.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => close());
    });

    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (nav) {
        if (y > 80) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
      }
      lastY = y;
    }, { passive: true });
  }

  function initNavActive() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    let ticking = false;

    function updateActive() {
      const scrollY = window.scrollY;
      const trigger = window.innerHeight * 0.35;
      let current = null;

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i]);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= trigger) {
          current = NAV_SECTIONS[i];
          break;
        }
      }

      navLinks.forEach((a) => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const id = href.slice(1);
        const isActive = id === current;
        a.classList.toggle('active', isActive);
        a.setAttribute('aria-current', isActive ? 'location' : null);
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateActive);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActive();
  }

  // ----- Smooth scroll -----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ----- Section visibility (animate on scroll) -----
  function initSectionObserver() {
    const sections = document.querySelectorAll('.section');
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '-80px 0px -60px 0px', threshold: 0.1 }
    );
    sections.forEach((s) => ob.observe(s));
  }

  // ----- Contact form -----
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name')?.value?.trim();
      const email = form.querySelector('#email')?.value?.trim();
      const message = form.querySelector('#message')?.value?.trim();
      if (!name || !email || !message) return;

      // Placeholder: no backend. Show success and reset.
      // In production, send to your API or use Formspree/Netlify Forms etc.
      form.reset();
      alert('Thanks for your message! I\'ll get back to you soon.');
    });
  }

  // ----- Footer year -----
  function setFooterYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  // ----- Lucide icons -----
  function initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  // ----- Theme toggle button -----
  function initThemeToggle() {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  }

  // ----- Run -----
  initTheme();
  initThemeToggle();
  initNav();
  initNavActive();
  initSmoothScroll();
  initSectionObserver();
  initContactForm();
  setFooterYear();
  initIcons();
})();
