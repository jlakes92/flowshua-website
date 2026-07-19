const desktopNavigation=window.matchMedia('(min-width:901px)');
function setMobileNavigation(button,open,{restoreFocus=false}={}){
  const links=document.getElementById(button.getAttribute('aria-controls'));
  if(!links)return;
  links.classList.toggle('mobile-open',open);
  button.setAttribute('aria-expanded',String(open));
  button.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  if(restoreFocus)button.focus();
}
document.querySelectorAll('[data-mobile-menu]').forEach(button=>{
  button.setAttribute('aria-controls','site-links');
  button.setAttribute('aria-expanded','false');
  button.addEventListener('click',()=>setMobileNavigation(button,button.getAttribute('aria-expanded')!=='true'));
});
document.querySelectorAll('#site-links a').forEach(link=>link.addEventListener('click',()=>{
  const button=document.querySelector('[data-mobile-menu]');
  if(button)setMobileNavigation(button,false);
}));
document.addEventListener('keydown',event=>{
  if(event.key!=='Escape')return;
  const button=document.querySelector('[data-mobile-menu][aria-expanded="true"]');
  if(button)setMobileNavigation(button,false,{restoreFocus:true});
});
function resetDesktopNavigation(){
  if(!desktopNavigation.matches)return;
  document.querySelectorAll('[data-mobile-menu]').forEach(button=>setMobileNavigation(button,false));
}
desktopNavigation.addEventListener('change',resetDesktopNavigation);
resetDesktopNavigation();
const projects={aircraft:{type:'Project recovery system',title:'Aircraft Rehaul Project Controls',desc:'A fictional 12-week aircraft recovery project that tracks scope, work packages, parts, schedule risk, quality checks, budget, and final return-to-service sign-off.',tags:['Project controls','Recovery planning','Risk and dependency tracking'],href:'case-studies/aircraft-rehaul-project-controls/',button:'View Case Study'},ops:{type:'Operations system',title:'Operations Hub',desc:'A fictional operations workspace that brings turnovers, maintenance, vendor follow-up, and guest-ready decisions into one clear view.',tags:['Operations visibility','Ownership tracking','Workflow coordination'],href:'ops-hub/index.html',button:'Open Ops Hub'},field:{type:'Knowledge management system',title:'Field Knowledge Playbook',desc:'A practical workbook concept for helping service teams capture recurring issues, preserve experienced technician knowledge, and turn completed work into better training.',tags:['Knowledge capture','Repeatable learning','Team onboarding'],href:'field-knowledge-playbook/index.html',button:'View Field Playbook'}};
function renderFeatured(key){const p=projects[key];if(!p)return;document.querySelectorAll('[data-project-tab]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.projectTab===key)));const box=document.querySelector('#featured-project');if(box)box.innerHTML=`<span class="label">${p.type}</span><h3>${p.title}</h3><p class="muted">${p.desc}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><a class="button primary" href="${p.href}">${p.button}</a>`}
document.querySelectorAll('[data-project-tab]').forEach(b=>b.addEventListener('click',()=>renderFeatured(b.dataset.projectTab)));renderFeatured('aircraft');
