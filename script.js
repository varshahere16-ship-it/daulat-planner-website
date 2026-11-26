
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));

/* Reliable one-card testimonial slider */
const track=document.querySelector('.review-track');
const cards=track?[...track.querySelectorAll('.review-card')]:[];
let reviewIndex=0;
function showReview(index){
  if(!track||!cards.length)return;
  reviewIndex=(index+cards.length)%cards.length;
  track.style.transform=`translateX(-${reviewIndex*100}%)`;
}
document.querySelector('.next')?.addEventListener('click',()=>showReview(reviewIndex+1));
document.querySelector('.prev')?.addEventListener('click',()=>showReview(reviewIndex-1));
let sliderTimer=setInterval(()=>showReview(reviewIndex+1),6500);
document.querySelector('.review-wrap')?.addEventListener('mouseenter',()=>clearInterval(sliderTimer));
document.querySelector('.review-wrap')?.addEventListener('mouseleave',()=>{clearInterval(sliderTimer);sliderTimer=setInterval(()=>showReview(reviewIndex+1),6500)});

/* Soft falling petals */
const petalLayer=document.querySelector('.petal-layer');
if(petalLayer){
  for(let i=0;i<22;i++){
    const petal=document.createElement('span');
    petal.className='petal';
    petal.style.left=(Math.random()*100)+'%';
    petal.style.animationDuration=(9+Math.random()*13)+'s';
    petal.style.animationDelay=(-Math.random()*18)+'s';
    petal.style.transform=`rotate(${Math.random()*360}deg)`;
    petalLayer.appendChild(petal);
  }
}

/* Gallery lightbox */
const lightbox=document.querySelector('.lightbox');
const lightboxImage=lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',e=>{
  e.preventDefault();if(!lightbox||!lightboxImage)return;
  lightboxImage.src=item.href;lightboxImage.alt=item.querySelector('img')?.alt||'Gallery image';
  lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');
}));
function closeLightbox(){lightbox?.classList.remove('open');lightbox?.setAttribute('aria-hidden','true');if(lightboxImage)lightboxImage.src=''}
lightbox?.querySelector('button')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
