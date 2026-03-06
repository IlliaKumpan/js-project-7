import{A as p,S as f,N as m,P as g}from"./assets/vendor-D4q9fNXw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();new p(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});const h="https://paw-hut.b.goit.study",y="/api/feedbacks",v=document.querySelector(".feedbacks"),b=document.querySelectorAll(".stories-btn"),d=document.querySelector(".loader");function S(){d.classList.remove("loader-hidden")}function L(){d.classList.add("loader-hidden")}const c=new f(".stories-swiper",{modules:[m,g],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});S();fetch(`${h}${y}`).then(e=>e.json()).then(e=>{w(e.feedbacks),c.update(),c.pagination.render(),c.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{L()});function k(e){const r=Math.round(e*2)/2,o=Math.floor(r),a=r%1!==0?1:0,t=5-o-a,s=`
    <svg class="star star-filled">
      <use href="../img/icons.svg#star-filled"></use>
    </svg>
  `.repeat(o),n=a?`
      <span class="star-half" aria-hidden="true">
        <svg class="star star-outline">
          <use href="../img/icons.svg#star-outline"></use>
        </svg>
        <span class="star-half-fill">
          <svg class="star star-filled">
            <use href="../img/icons.svg#star-filled"></use>
          </svg>
        </span>
      </span>
    `:"",u=`
    <svg class="star star-outline">
      <use href="../img/icons.svg#star-outline"></use>
    </svg>
  `.repeat(t);return s+n+u}function w(e){const r=e.map(o=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${k(o.rate)}</div>
        </div>
        <p class="feedback-description">${o.description}</p>
        <p class="feedback-author">${o.author}</p>
      </div>
    </div>
  `).join("");v.innerHTML=r}b.forEach(e=>{e.addEventListener("click",()=>e.blur())});const i=document.querySelector(".modal-pet-backdrop");document.querySelector(".modal-pet-image");document.querySelector(".modal-pet-species");document.querySelector(".modal-pet-name");document.querySelector(".modal-pet-age");document.querySelector(".modal-pet-gender");document.querySelector(".modal-pet-desc");document.querySelector(".modal-pet-health");document.querySelector(".modal-pet-behavior");i.addEventListener("click",P);document.addEventListener("keydown",q);function l(){i.classList.add("is-hidden"),document.body.style.overflow=""}function P(e){if(!i.classList.contains("is-hidden")){if(e.target===i||e.target.closest(".modal-pet-close-btn")){l();return}e.target.closest(".modal-pet-adopt-btn")&&E()}}function q(e){i.classList.contains("is-hidden")||e.key==="Escape"&&l()}function E(){l()}
//# sourceMappingURL=index.js.map
