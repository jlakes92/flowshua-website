const desktopNavigation=window.matchMedia('(min-width:901px)');
document.querySelectorAll('.skip-link').forEach(link=>link.addEventListener('click',()=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(target)target.focus();
}));
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
