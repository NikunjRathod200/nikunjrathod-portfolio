// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Header scroll effect
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('show');
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:rathodnikunj200@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message (optional)
      alert('Opening your email client...');
    });
  }

  // Copy email button
  const copyEmailBtn = document.getElementById('copy-email');
  
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'rathodnikunj200@gmail.com';
      
      // Create temporary input element
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      
      // Show feedback
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = 'Copied!';
      copyEmailBtn.style.background = 'rgba(0, 217, 255, 0.2)';
      
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.style.background = '';
      }, 2000);
    });
  }

  // Add active state to navigation based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Add parallax effect to background gradients
  const bgGradients = document.querySelectorAll('.bg-gradient');
  
  if (bgGradients.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      bgGradients.forEach((gradient, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        gradient.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Add typing effect to hero text (optional enhancement)
  const heroText = document.querySelector('.hero-text h1');
  
  if (heroText && heroText.textContent) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }

    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 500);
  }

  // Add skill hover counter (fun interaction)
  const skills = document.querySelectorAll('.skill');
  
  skills.forEach(skill => {
    let hoverCount = 0;
    
    skill.addEventListener('mouseenter', () => {
      hoverCount++;
      if (hoverCount === 5) {
        skill.style.animation = 'pulse 0.5s';
        setTimeout(() => {
          skill.style.animation = '';
        }, 500);
      }
    });
  });

  // Lazy load animations for better performance
  if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('.edu, .job, .project');
    
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          lazyObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    lazyElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      lazyObserver.observe(el);
    });
  }

  // Add cursor trail effect (optional, can be removed for simpler version)
  const createCursorTrail = () => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Uncomment to enable cursor trail
    /*
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,217,255,0.3), transparent);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
    */
  };

  // createCursorTrail(); // Uncomment to enable

  console.log('Portfolio loaded successfully! 🚀');
});