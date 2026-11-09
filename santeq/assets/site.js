'use strict';
(() => {
 const form=document.querySelector('#contact-form');
 if(form)form.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);
  location.href='mailto:info@santeq.nl?subject='+encodeURIComponent(data.get('subject'))+'&body='+encodeURIComponent(String(data.get('message'))+'\n\nMet vriendelijke groet,\n'+data.get('name'));
 });
 for(const link of document.querySelectorAll('nav a')){
  if(new URL(link.href).pathname===location.pathname)link.setAttribute('aria-current','page');
 }
})();
