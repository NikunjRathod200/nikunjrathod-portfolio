(function(){
  // small utilities: smooth scroll and nav toggle
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
          // close mobile nav if open
          document.getElementById('main-nav').classList.remove('open');
        }
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  navToggle.addEventListener('click', ()=>{
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
  });

  // Contact form: open mailto with prefilled subject/body
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const to = 'rathodnikunj200@gmail.com'; // updated to your email
    const subject = encodeURIComponent(`Portfolio contact from ${name || email}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });

  // Copy email button
  document.getElementById('copy-email').addEventListener('click', async ()=>{
    const email = 'you@example.com';
    try{
      await navigator.clipboard.writeText(email);
      alert('Email copied to clipboard: ' + email);
    }catch(e){
      prompt('Copy this email', email);
    }
  });
})();
