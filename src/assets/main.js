// 手機選單
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

// 著作依主題篩選
const filters = document.querySelectorAll('.filters button');
filters.forEach((b) =>
  b.addEventListener('click', () => {
    filters.forEach((x) => x.classList.toggle('on', x === b));
    const f = b.dataset.f;
    document.querySelectorAll('.pubs li').forEach((li) => {
      li.classList.toggle('hide', f !== 'all' && li.dataset.topic !== f);
    });
  })
);
