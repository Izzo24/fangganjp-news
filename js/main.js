/* ── 房感日報 · Shared JS ──────────────────────────────────── */

// ── Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  revealEls.forEach(el => io.observe(el));
}

// ── Mobile nav
const hamburger = document.querySelector('.nav-hamburger');
const navCats = document.querySelector('.nav-categories');
if (hamburger && navCats) {
  hamburger.addEventListener('click', () => {
    const open = navCats.style.display === 'flex';
    navCats.style.display = open ? 'none' : 'flex';
    navCats.style.flexDirection = open ? '' : 'column';
    navCats.style.position = open ? '' : 'absolute';
    navCats.style.top = open ? '' : '64px';
    navCats.style.left = open ? '' : '0';
    navCats.style.right = open ? '' : '0';
    navCats.style.background = open ? '' : '#fff';
    navCats.style.padding = open ? '' : '16px 24px 20px';
    navCats.style.boxShadow = open ? '' : '0 8px 24px rgba(15,27,45,0.12)';
    navCats.style.borderTop = open ? '' : '1px solid #E2E8F0';
    navCats.style.zIndex = open ? '' : '300';
  });
}

// ── Topic pillar accordion
document.querySelectorAll('.pillar-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.closest('.topic-pillar-card');
    const arts = card.querySelector('.pillar-articles');
    const btn = header.querySelector('.pillar-expand');
    if (!arts) return;
    const isOpen = arts.style.display !== 'none' && arts.style.display !== '';
    document.querySelectorAll('.pillar-articles').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.pillar-expand').forEach(b => b.classList.remove('open'));
    if (!isOpen) {
      arts.style.display = 'grid';
      btn.classList.add('open');
    }
  });
});

// ── Ticker pause on hover
const ticker = document.querySelector('.ticker-scroll');
if (ticker) {
  ticker.addEventListener('mouseenter', () => ticker.style.animationPlayState = 'paused');
  ticker.addEventListener('mouseleave', () => ticker.style.animationPlayState = 'running');
}

// ── Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-cat').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
