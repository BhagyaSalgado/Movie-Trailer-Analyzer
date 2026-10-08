/* ===== Render ===== */
let cum=0;
document.getElementById('timeline').innerHTML=MILESTONES.map(m=>{
  const prev=cum;cum+=m.marks;
  return `<li class="tl"><span class="date">${m.date}</span><h3>${m.title}</h3><p>${m.desc}</p>
  <div class="marks"><span><b>Marks allocated:</b> ${m.marks}%</span><span class="bar" aria-hidden="true"><i style="width:${prev}%"></i><i class="cur" style="width:${m.marks}%"></i></span></div></li>`;
}).join('');
const getBtn=url=>Array.isArray(url)?`<div class="multi">${url.map(([l,u])=>`<a class="get" href="${u}" target="_blank" rel="noopener"><svg width="16" height="16"><use href="#i-dl"/></svg>${l}</a>`).join('')}</div>`:url?`<a class="get" href="${url}" target="_blank" rel="noopener"><svg width="16" height="16"><use href="#i-dl"/></svg>View / Download</a>`:`<span class="get soon"><svg width="16" height="16"><use href="#i-dl"/></svg>Available soon</span>`;
document.getElementById('docs').innerHTML=DOCS.map(([t,d,u])=>`<div class="card dl"><span class="ftype pdf"><svg width="20" height="20"><use href="#i-file"/></svg>PDF</span><h3>${t}</h3><p>${d}</p>${getBtn(u)}</div>`).join('');
document.getElementById('pres').innerHTML=PRES.map(([t,u])=>`<div class="card dl"><span class="ftype ppt"><svg width="20" height="20"><use href="#i-slides"/></svg>SLIDES</span><h3>${t}</h3><p></p>${getBtn(u)}</div>`).join('');
const person=p=>`<div class="card person"><div class="photo">${p.photo?`<img src="${p.photo}" alt="${p.name}" loading="lazy">`:`<svg><use href="#i-user"/></svg>`}</div><div class="body"><h3>${p.name}</h3><div class="role">${p.role}</div><div class="meta">${p.meta}</div>
  <div class="links">${p.linkedin?`<a href="${p.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="16" height="16"><use href="#i-in"/></svg></a>`:""}${p.email?`<a href="mailto:${p.email}" aria-label="Email"><svg width="16" height="16"><use href="#i-mail"/></svg></a>`:""}</div></div></div>`;
document.getElementById('sups').innerHTML=SUPS.map(person).join('');
document.getElementById('team').innerHTML=TEAM.map(person).join('');

/* contact form (preview only) */
/* contact form via Formspree */
const cf=document.getElementById('cf');
cf.addEventListener('submit',async e=>{
  e.preventDefault();
  const ok=document.getElementById('cf-ok');
  if(cf.action.includes('YOUR_FORM_ID')){ok.textContent='Contact form not connected yet. Add your Formspree form ID in index.html.';ok.hidden=false;return;}
  try{
    const r=await fetch(cf.action,{method:'POST',body:new FormData(cf),headers:{Accept:'application/json'}});
    ok.textContent=r.ok?'Thank you! Your message has been sent.':'Sorry, something went wrong. Please email us directly.';
  }catch{ok.textContent='Sorry, something went wrong. Please email us directly.';}
  ok.hidden=false;if(ok.textContent.startsWith('Thank'))cf.reset();
});

/* demo video */
if(DEMO_VIDEO_ID){document.getElementById('video').innerHTML=`<iframe src="https://www.youtube.com/embed/${DEMO_VIDEO_ID}" title="System demonstration" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;}

/* mobile menu */
const menu=document.getElementById('menu'),bg=document.getElementById('burger');
bg.addEventListener('click',()=>{const o=menu.classList.toggle('open');bg.setAttribute('aria-expanded',o);});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

/* active link on scroll */
const links=[...document.querySelectorAll('.menu>li>a')];
const secs=['home','milestones','about','contact'].map(id=>document.getElementById(id));
addEventListener('scroll',()=>{
  let cur='';secs.forEach(s=>{if(s.getBoundingClientRect().top<120)cur=s.id;});
  links.forEach(a=>a.parentElement.classList.toggle('active',a.getAttribute('href')==='#'+cur));
},{passive:true});

/* hero background: film-frame grid (static draw, no animation loop) */
(function(){
  const c=document.getElementById('bg'),x=c.getContext('2d');
  function draw(){
    const r=c.getBoundingClientRect(),d=devicePixelRatio||1;c.width=r.width*d;c.height=r.height*d;x.scale(d,d);
    const W=r.width,H=r.height,fw=150,fh=92,gap=14;
    let seed=7;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;
    for(let row=0;row*(fh+gap+18)<H+fh;row++){
      const y=row*(fh+gap+18)+8, off=(row%2)*-60;
      x.fillStyle='rgba(255,255,255,.05)';x.fillRect(0,y-6,W,fh+12);
      for(let i=0;i*16<W;i++){x.fillStyle='rgba(13,27,62,.9)';x.fillRect(i*16+4,y-4,8,4);x.fillRect(i*16+4,y+fh,8,4);}
      for(let col=0;off+col*(fw+gap)<W;col++){
        const fx=off+col*(fw+gap),h=200+rnd()*60,l=14+rnd()*22;
        const g=x.createLinearGradient(fx,y,fx+fw,y+fh);g.addColorStop(0,`hsl(${h},55%,${l}%)`);g.addColorStop(1,`hsl(${h+30},60%,${l*.6}%)`);
        x.fillStyle=g;x.fillRect(fx,y,fw,fh);
      }
    }
  }
  draw();addEventListener('resize',()=>{const x2=c.getContext('2d');x2.setTransform(1,0,0,1,0,0);draw();});
})();

/* link to the shared Drive folder */
document.getElementById('drive-all').href=DRIVE_FOLDER;
