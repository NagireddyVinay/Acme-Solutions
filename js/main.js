// main.js — interactions: nav toggle, theme toggle, simple slider, form validation
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-menu');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) navList.style.display = 'flex';
      else navList.style.display = '';
    });
  }

  // Theme toggle (light/dark)
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  function setTheme(theme) {
    body.classList.remove('theme-light','theme-dark');
    body.classList.add(`theme-${theme}`);
    if (themeBtn) themeBtn.setAttribute('aria-pressed', theme === 'dark');
    localStorage.setItem('site-theme', theme);
  }
  const storedTheme = localStorage.getItem('site-theme') || 'light';
  setTheme(storedTheme);
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = body.classList.contains('theme-dark') ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Simple testimonial slider (auto-advance)
  const slides = document.querySelectorAll('.testimonial-slider .slide');
  let slideIndex = 0;
  if (slides.length > 0) {
    function showSlide(i) {
      slides.forEach((s, idx) => {
        s.setAttribute('aria-hidden', idx !== i);
        s.style.display = idx === i ? 'block' : 'none';
      });
    }
    showSlide(slideIndex);
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 5000);
  }

  // Form validation (contact)
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out the required fields.';
        formMessage.style.color = 'red';
        return;
      }
      // basic email check
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        formMessage.textContent = 'Please use a valid email address.';
        formMessage.style.color = 'red';
        return;
      }

      // simulate success
      formMessage.textContent = 'Thanks! Your message has been sent.';
      formMessage.style.color = 'green';
      contactForm.reset();
    });
  }

  // Accessibility: focus visible for keyboard users
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Tab') document.body.classList.add('show-focus');
  });
});
