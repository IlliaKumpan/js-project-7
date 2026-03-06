import{A as f,S as m,N as g,P as y}from"./assets/vendor-D4q9fNXw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();new f(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});const n=document.querySelector("[data-menu]"),h=document.querySelector("[data-menu-open]"),v=document.querySelector("[data-menu-close]"),L=document.querySelectorAll(".mobile-nav a");h.addEventListener("click",()=>{n.classList.add("is-open"),document.body.style.overflow="hidden"});v.addEventListener("click",()=>{n.classList.remove("is-open"),document.body.style.overflow=""});L.forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("is-open")})});document.addEventListener("keydown",e=>{e.key==="Escape"&&n.classList.contains("is-open")&&n.classList.remove("is-open")});n.addEventListener("click",e=>{e.target===n&&n.classList.remove("is-open")});const b="https://paw-hut.b.goit.study",S="/api/feedbacks",k=document.querySelector(".feedbacks"),w=document.querySelectorAll(".stories-btn"),u=document.querySelector(".loader");function E(){u.classList.remove("loader-hidden")}function q(){u.classList.add("loader-hidden")}const l=new m(".stories-swiper",{modules:[g,y],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});E();fetch(`${b}${S}`).then(e=>e.json()).then(e=>{A(e.feedbacks),l.update(),l.pagination.render(),l.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{q()});function P(e){const o=Math.round(e*2)/2,r=Math.floor(o),a=o%1!==0?1:0,t=5-r-a,s=`
    <svg class="star star-filled">
      <use href="../img/icons.svg#star-filled"></use>
    </svg>
  `.repeat(r),i=a?`
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
    `:"",p=`
    <svg class="star star-outline">
      <use href="../img/icons.svg#star-outline"></use>
    </svg>
  `.repeat(t);return s+i+p}function A(e){const o=e.map(r=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${P(r.rate)}</div>
        </div>
        <p class="feedback-description">${r.description}</p>
        <p class="feedback-author">${r.author}</p>
      </div>
    </div>
  `).join("");k.innerHTML=o}w.forEach(e=>{e.addEventListener("click",()=>e.blur())});const c=document.querySelector(".modal-pet-backdrop");document.querySelector(".modal-pet-image");document.querySelector(".modal-pet-species");document.querySelector(".modal-pet-name");document.querySelector(".modal-pet-age");document.querySelector(".modal-pet-gender");document.querySelector(".modal-pet-desc");document.querySelector(".modal-pet-health");document.querySelector(".modal-pet-behavior");c.addEventListener("click",B);document.addEventListener("keydown",M);function d(){c.classList.add("is-hidden"),document.body.style.overflow=""}function B(e){if(!c.classList.contains("is-hidden")){if(e.target===c||e.target.closest(".modal-pet-close-btn")){d();return}e.target.closest(".modal-pet-adopt-btn")&&O()}}function M(e){c.classList.contains("is-hidden")||e.key==="Escape"&&d()}function O(){d()}
//# sourceMappingURL=index.js.map
