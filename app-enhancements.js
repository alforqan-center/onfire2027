(() => {
  'use strict';
  // This project is intentionally a normal responsive website. No service worker
  // registration or install-app prompt is used.
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pages = [
    {href:'dashboard.html',icon:'⌂',label:'الرئيسية',matches:['dashboard.html']},
    {href:'first-prep.html',icon:'▤',label:'الصفوف',matches:['first-prep.html','second-prep.html','third-prep.html','secondary-prep.html','first-secondary.html','second-secondary.html','third-secondary.html']},
    {href:'player.html',icon:'▶',label:'الدروس',matches:['player.html']},
    {href:'create-account.html',icon:'◎',label:'حسابي',matches:['create-account.html']}
  ];
  if (['index.html','create-account.html','first-prep.html','second-prep.html','third-prep.html','secondary-prep.html','first-secondary.html','second-secondary.html','third-secondary.html','player.html'].includes(path)) {
    const nav=document.createElement('nav'); nav.className='of-mobile-nav'; nav.setAttribute('aria-label','التنقل الرئيسي');
    pages.forEach(item=>{const a=document.createElement('a');a.href=item.href;if(item.matches.includes(path))a.setAttribute('aria-current','page');const icon=document.createElement('span');icon.className='of-nav-icon';icon.setAttribute('aria-hidden','true');icon.textContent=item.icon;const label=document.createElement('span');label.textContent=item.label;a.append(icon,label);nav.appendChild(a)});
    document.body.appendChild(nav);
  }
})();
