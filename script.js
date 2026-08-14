// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const tabs = document.querySelector('.tabs');
if(navToggle && tabs){
  navToggle.addEventListener('click', () => tabs.classList.toggle('open'));
  tabs.querySelectorAll('a').forEach(a => a.addEventListener('click', () => tabs.classList.remove('open')));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Stagger redaction bars that share a container
document.querySelectorAll('[data-redact-group]').forEach(group => {
  const bars = group.querySelectorAll('.redact');
  bars.forEach((bar, i) => {
    bar.style.setProperty('--d', `${0.5 + i * 0.35}s`);
  });
});

// Skill exposure bars: animate width in on view
const bars = document.querySelectorAll('.bar-fill');
if(bars.length && 'IntersectionObserver' in window){
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const el = e.target;
        el.style.width = el.dataset.level;
        barIo.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(b => barIo.observe(b));
}

// Current year in footer
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});