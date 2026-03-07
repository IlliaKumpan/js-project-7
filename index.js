import{A as f,S as u,N as y,P as g}from"./assets/vendor-Bf42XYi7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();new f(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});function b(){if(document.querySelector(".about-us-swiper"))return new u(".about-us-swiper",{slidesPerView:1,spaceBetween:30,lazy:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:"#about .swiper-pagination",type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:"#about .swiper-button-next",prevEl:"#about .swiper-button-prev"},breakpoints:{768:{pagination:{dynamicBullets:!1}}}})}const n=document.querySelector("[data-menu]"),v=document.querySelector("[data-menu-open]"),h=document.querySelector("[data-menu-close]"),S=document.querySelectorAll(".mobile-nav a");v.addEventListener("click",()=>{n.classList.add("is-open"),document.body.style.overflow="hidden"});h.addEventListener("click",()=>{n.classList.remove("is-open"),document.body.style.overflow=""});S.forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("is-open")})});document.addEventListener("keydown",e=>{e.key==="Escape"&&n.classList.contains("is-open")&&n.classList.remove("is-open")});n.addEventListener("click",e=>{e.target===n&&n.classList.remove("is-open")});document.querySelector(".order-form");document.querySelector(".order-modal-overlay");document.querySelector(".order-close-btn");document.querySelector(".order-submit-btn");const c=document.querySelector(".modal-pet-backdrop");document.querySelector(".modal-pet-image");document.querySelector(".modal-pet-species");document.querySelector(".modal-pet-name");document.querySelector(".modal-pet-age");document.querySelector(".modal-pet-gender");document.querySelector(".modal-pet-desc");document.querySelector(".modal-pet-health");document.querySelector(".modal-pet-behavior");let L=null;c.addEventListener("click",w);document.addEventListener("keydown",k);function d(){c.classList.add("is-hidden"),document.body.style.overflow=""}function w(e){if(!c.classList.contains("is-hidden")){if(e.target===c||e.target.closest(".modal-pet-close-btn")){d();return}e.target.closest(".modal-pet-adopt-btn")&&q()}}function k(e){c.classList.contains("is-hidden")||e.key==="Escape"&&d()}function q(){const e=L;d(),openOrderModal(e)}const E="https://paw-hut.b.goit.study",P="/api/feedbacks",A=document.querySelector(".feedbacks"),B=document.querySelectorAll(".stories-btn"),p=document.querySelector(".loader");function M(){p.classList.remove("loader-hidden")}function O(){p.classList.add("loader-hidden")}const l=new u(".stories-swiper",{modules:[y,g],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});M();fetch(`${E}${P}`).then(e=>e.json()).then(e=>{I(e.feedbacks),l.update(),l.pagination.render(),l.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{O()});function C(e){const o=Math.round(e*2)/2,r=Math.floor(o),a=o%1!==0?1:0,t=5-r-a,s=`
    <svg class="star star-filled">
      <use href="/img/icons.svg#star-filled"></use>
    </svg>
  `.repeat(r),i=a?`
      <span class="star-half" aria-hidden="true">
        <svg class="star star-outline">
          <use href="/img/icons.svg#star-outline"></use>
        </svg>
        <span class="star-half-fill">
          <svg class="star star-filled">
            <use href="/img/icons.svg#star-filled"></use>
          </svg>
        </span>
      </span>
    `:"",m=`
    <svg class="star star-outline">
      <use href="/img/icons.svg#star-outline"></use>
    </svg>
  `.repeat(t);return s+i+m}function I(e){const o=e.map(r=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${C(r.rate)}</div>
        </div>
        <p class="feedback-description">${r.description}</p>
        <p class="feedback-author">${r.author}</p>
      </div>
    </div>
  `).join("");A.innerHTML=o}B.forEach(e=>{e.addEventListener("click",()=>e.blur())});b();
//# sourceMappingURL=index.js.map
