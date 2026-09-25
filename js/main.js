/* Zyra: interações do site (sem dependências) */
(function () {
  'use strict';

  const WHATSAPP_NUMBER = '5562920023208';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuToggle && mobileMenu) {
    const setOpen = (open) => {
      menuToggle.setAttribute('aria-expanded', String(open));
      mobileMenu.classList.toggle('hidden', !open);
    };
    menuToggle.addEventListener('click', () => {
      setOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });
    mobileMenu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => setOpen(false))
    );
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ---------- Header com estado ao rolar ---------- */
  const header = document.querySelector('[data-header]');
  if (header) {
    const onScroll = () => {
      const scrolled = window.scrollY > 12;
      header.classList.toggle('is-scrolled', scrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    /* Marca que o reveal foi inicializado; o failsafe no HTML usa isso */
    window.__zyraRevealInit = true;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      reveals.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Acordeões (FAQ e vagas) ---------- */
  document.querySelectorAll('[data-accordion]').forEach((group) => {
    const single = group.hasAttribute('data-single');
    group.querySelectorAll('[data-acc-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const panel = document.getElementById(trigger.getAttribute('aria-controls'));
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        if (single && !isOpen) {
          group.querySelectorAll('[data-acc-trigger]').forEach((t) => {
            if (t !== trigger) {
              t.setAttribute('aria-expanded', 'false');
              const p = document.getElementById(t.getAttribute('aria-controls'));
              if (p) p.setAttribute('data-open', 'false');
            }
          });
        }
        trigger.setAttribute('aria-expanded', String(!isOpen));
        if (panel) panel.setAttribute('data-open', String(!isOpen));
      });
    });
  });

  /* ---------- Formulário -> WhatsApp ---------- */
  const wa = (msg) =>
    'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);

  const contactForm = document.getElementById('form-contato');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const nome = (data.get('nome') || '').toString().trim();
      const negocio = (data.get('negocio') || '').toString().trim();
      const objetivo = (data.get('objetivo') || '').toString().trim();
      const whats = (data.get('whatsapp') || '').toString().trim();
      const msg =
        'Olá, time Zyra!\n\n' +
        'Nome: ' + (nome || '-') + '\n' +
        'Negócio: ' + (negocio || '-') + '\n' +
        'Objetivo: ' + (objetivo || '-') + '\n' +
        'WhatsApp: ' + (whats || '-') + '\n\n' +
        'Quero um diagnóstico inicial gratuito.';
      window.open(wa(msg), '_blank', 'noopener');
    });
  }

  const careerForm = document.getElementById('form-carreira');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(careerForm);
      const val = (k) => (data.get(k) || '').toString().trim() || '-';
      const msg =
        'Olá, time Zyra! Quero me candidatar.\n\n' +
        'Nome: ' + val('nome') + '\n' +
        'E-mail: ' + val('email') + '\n' +
        'WhatsApp: ' + val('whatsapp') + '\n' +
        'Vaga de interesse: ' + val('vaga') + '\n' +
        'LinkedIn / Portfólio: ' + val('portfolio') + '\n' +
        'Currículo: ' + val('curriculo') + '\n\n' +
        'Sobre mim: ' + val('sobre') + '\n\n' +
        '(Vou anexar meu currículo nesta conversa.)';
      window.open(wa(msg), '_blank', 'noopener');
    });
  }

  /* ---------- Links de candidatura rápida ---------- */
  document.querySelectorAll('[data-apply]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const vaga = link.getAttribute('data-apply');
      const target = document.getElementById('form-carreira');
      if (target) {
        const select = target.querySelector('[name="vaga"]');
        if (select) select.value = vaga;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        const first = target.querySelector('input, select, textarea');
        if (first) setTimeout(() => first.focus({ preventScroll: true }), 400);
      }
    });
  });

  /* ---------- Ano no rodapé ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
