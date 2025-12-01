/**
 * Axyoma - Main JavaScript File
 * Manejo de navegación, formularios y interacciones globales
 */

(function() {
  'use strict';

  // ===== MOBILE NAVIGATION =====
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.querySelector('.header__nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      headerNav.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    const navLinks = document.querySelectorAll('.header__nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
      });
    });
  }

  // ===== ACTIVE NAV LINK =====
  function setActiveNavLink() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.header__nav-link');

    navLinks.forEach(link => {
      link.classList.remove('active');

      // Comparar paths
      const href = link.getAttribute('href');
      if (currentLocation === href || currentLocation.includes(href.split('/').pop())) {
        link.classList.add('active');
      }
    });
  }

  // Ejecutar al cargar la página
  setActiveNavLink();

  // ===== CONTACT FORM HANDLER =====
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validación básica
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = 'var(--color-primary)';
          field.style.backgroundColor = 'rgba(0, 102, 255, 0.1)';
        } else {
          field.style.borderColor = '';
          field.style.backgroundColor = '';
        }
      });

      if (!isValid) {
        alert('Por favor completa todos los campos requeridos');
        return;
      }

      // Validación de email
      const emailField = this.querySelector('[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          alert('Por favor ingresa un email válido');
          emailField.style.borderColor = 'var(--color-primary)';
          return;
        }
      }

      // Aquí iría la integración con backend/servicio de email
      // Por ahora, mostrar mensaje de éxito
      const formData = new FormData(this);
      console.log('Datos del formulario:', Object.fromEntries(formData));

      // Mostrar mensaje de éxito
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
      this.reset();
    });

    // Limpiar estilos de error al escribir
    const formFields = contactForm.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
      field.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    });
  }

  // ===== SMOOTH SCROLL LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ===== INTERSECTION OBSERVER PARA ANIMACIONES =====
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos con clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // ===== SCROLL EVENT PARA HEADER =====
  let lastScrollPosition = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPosition > 100) {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScrollPosition = currentScrollPosition;
  });

  // ===== LAZY LOAD PARA IMÁGENES =====
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ===== UTILITY: Agregar clase 'animate-on-scroll' a elementos específicos =====
  function addAnimationsToCards() {
    const cards = document.querySelectorAll('.card, .services__item, .news__featured-item');
    cards.forEach(card => {
      if (!card.classList.contains('animate-on-scroll')) {
        card.classList.add('animate-on-scroll');
      }
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAnimationsToCards);
  } else {
    addAnimationsToCards();
  }

  // ===== EXTERNAL LINKS EN NUEVA PESTAÑA =====
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
  });

  // ===== KEYBOARD NAVIGATION =====
  document.addEventListener('keydown', function(e) {
    // Cerrar menú móvil con ESC
    if (e.key === 'Escape' && menuToggle && menuToggle.classList.contains('active')) {
      menuToggle.classList.remove('active');
      headerNav.classList.remove('active');
    }
  });

  console.log('Axyoma - JavaScript loaded successfully');

})();
