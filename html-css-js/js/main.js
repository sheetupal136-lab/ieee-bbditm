// ===================================================================
// IEEE BBDITM MASTER JAVASCRIPT CONTROLLER
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. THEME TOGGLE (LIGHT / DARK)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlEl = document.documentElement;
  
  const savedTheme = localStorage.getItem('ieee_theme') || 'light';
  htmlEl.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlEl.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      localStorage.setItem('ieee_theme', next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    const label = themeToggleBtn.querySelector('.theme-label');
    const icon = themeToggleBtn.querySelector('.theme-icon');
    if (theme === 'dark') {
      if (label) label.textContent = 'Light';
      if (icon) icon.textContent = '☀️';
    } else {
      if (label) label.textContent = 'Dark';
      if (icon) icon.textContent = '🌙';
    }
  }

  // 2. STICKY NAVBAR SCROLL
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 15) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // 3. MOBILE MENU
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // 4. CONTACT MODAL
  const contactModal = document.getElementById('contactModal');
  const openContactBtns = document.querySelectorAll('.open-contact-btn');
  const closeContactBtn = document.getElementById('closeContactBtn');
  const contactForm = document.getElementById('contactForm');
  const formSuccessMsg = document.getElementById('formSuccessMsg');

  openContactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (contactModal) contactModal.classList.add('open');
    });
  });

  if (closeContactBtn) {
    closeContactBtn.addEventListener('click', () => {
      if (contactModal) contactModal.classList.remove('open');
    });
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) contactModal.classList.remove('open');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = 'Submitting...';

      setTimeout(() => {
        contactForm.style.display = 'none';
        if (formSuccessMsg) formSuccessMsg.style.display = 'block';
      }, 700);
    });
  }

  // 5. BANNER LIGHTBOX
  const bannerCard = document.getElementById('bannerCard');
  const chartLightbox = document.getElementById('chartLightbox');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  if (bannerCard && chartLightbox) {
    bannerCard.addEventListener('click', () => {
      chartLightbox.classList.add('open');
    });
  }

  if (closeLightboxBtn && chartLightbox) {
    closeLightboxBtn.addEventListener('click', () => {
      chartLightbox.classList.remove('open');
    });
  }

  if (chartLightbox) {
    chartLightbox.addEventListener('click', (e) => {
      if (e.target === chartLightbox) chartLightbox.classList.remove('open');
    });
  }

  const teamLightbox = document.getElementById('teamLightbox');
  if (teamLightbox) {
    teamLightbox.addEventListener('click', (e) => {
      if (e.target === teamLightbox) teamLightbox.classList.remove('open');
    });
  }

  // 6. 3D ROTATING AWARDS CAROUSEL
  const carouselEl = document.getElementById('awardCarousel');
  if (carouselEl) {
    let angle = 0;
    let isPaused = false;
    const cards = carouselEl.querySelectorAll('.award-item');
    const total = cards.length;
    const radius = window.innerWidth < 640 ? 180 : 300;

    function renderCircle() {
      cards.forEach((card, idx) => {
        const theta = ((idx / total) * 360 + angle) * (Math.PI / 180);
        const x = Math.sin(theta) * radius;
        const z = Math.cos(theta) * radius;
        card.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${theta * (180 / Math.PI)}deg)`;
        card.style.opacity = z < 0 ? (0.4 + (z / radius) * 0.3) : 1;
      });
    }

    renderCircle();

    setInterval(() => {
      if (!isPaused) {
        angle += 0.35;
        renderCircle();
      }
    }, 25);

    carouselEl.addEventListener('mouseenter', () => { isPaused = true; });
    carouselEl.addEventListener('mouseleave', () => { isPaused = false; });
  }

  // 6.5 RE-DROP 3D LETTERS IN HERO
  window.reDropLetters = function() {
    const lettersBox = document.getElementById('hero3dLetters');
    if (!lettersBox) return;
    const letters = lettersBox.querySelectorAll('.ieee-3d-letter');
    letters.forEach((el, idx) => {
      el.className = 'ieee-3d-letter';
      void el.offsetWidth; // trigger reflow
      el.className = `ieee-3d-letter animate-letter-drop-${idx + 1}`;
    });
  };

  // Initialize Globe & Chatbot
  if (typeof initIEEEGlobe === 'function') {
    initIEEEGlobe('globeContainer');
  }
  if (typeof initIEEEChatbot === 'function') {
    initIEEEChatbot();
  }
});


