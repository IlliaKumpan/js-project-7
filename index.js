import{A as m,S as u,N as g,P as y}from"./assets/vendor-CkcdLvYx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();new m(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});function v(){if(document.querySelector(".about-us-swiper"))return new u(".about-us-swiper",{slidesPerView:1,spaceBetween:30,lazy:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{pagination:{dynamicBullets:!1}}}})}const n=document.querySelector("[data-menu]"),h=document.querySelector("[data-menu-open]"),b=document.querySelector("[data-menu-close]"),L=document.querySelectorAll(".mobile-nav a");h.addEventListener("click",()=>{n.classList.add("is-open"),document.body.style.overflow="hidden"});b.addEventListener("click",()=>{n.classList.remove("is-open"),document.body.style.overflow=""});L.forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("is-open")})});document.addEventListener("keydown",e=>{e.key==="Escape"&&n.classList.contains("is-open")&&n.classList.remove("is-open")});n.addEventListener("click",e=>{e.target===n&&n.classList.remove("is-open")});const c=document.querySelector(".modal-pet-backdrop");document.querySelector(".modal-pet-image");document.querySelector(".modal-pet-species");document.querySelector(".modal-pet-name");document.querySelector(".modal-pet-age");document.querySelector(".modal-pet-gender");document.querySelector(".modal-pet-desc");document.querySelector(".modal-pet-health");document.querySelector(".modal-pet-behavior");c.addEventListener("click",S);document.addEventListener("keydown",w);function d(){c.classList.add("is-hidden"),document.body.style.overflow=""}function S(e){if(!c.classList.contains("is-hidden")){if(e.target===c||e.target.closest(".modal-pet-close-btn")){d();return}e.target.closest(".modal-pet-adopt-btn")&&k()}}function w(e){c.classList.contains("is-hidden")||e.key==="Escape"&&d()}function k(){d()}const E="https://paw-hut.b.goit.study",q="/api/feedbacks",P=document.querySelector(".feedbacks"),B=document.querySelectorAll(".stories-btn"),p=document.querySelector(".loader");function A(){p.classList.remove("loader-hidden")}function M(){p.classList.add("loader-hidden")}const l=new u(".stories-swiper",{modules:[g,y],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});A();fetch(`${E}${q}`).then(e=>e.json()).then(e=>{C(e.feedbacks),l.update(),l.pagination.render(),l.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{M()});function O(e){const o=Math.round(e*2)/2,r=Math.floor(o),i=o%1!==0?1:0,t=5-r-i,s=`
    <svg class="star star-filled">
      <use href="img/icons.svg#star-filled"></use>
    </svg>
  `.repeat(r),a=i?`
      <span class="star-half" aria-hidden="true">
        <svg class="star star-outline">
          <use href="../img/icons.svg#star-outline"></use>
        </svg>
        <span class="star-half-fill">
          <svg class="star star-filled">
            <use href="img/icons.svg#star-filled"></use>
          </svg>
        </span>
      </span>
    `:"",f=`
    <svg class="star star-outline">
      <use href="img/icons.svg#star-outline"></use>
    </svg>
  `.repeat(t);return s+a+f}function C(e){const o=e.map(r=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${O(r.rate)}</div>
        </div>
        <p class="feedback-description">${r.description}</p>
        <p class="feedback-author">${r.author}</p>
      </div>
    </div>
  `).join("");P.innerHTML=o}B.forEach(e=>{e.addEventListener("click",()=>e.blur())});v();
//# sourceMappingURL=index.js.map
