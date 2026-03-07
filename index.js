import{A as O,S as E,a as v,b as D,N as j,P as z}from"./assets/vendor-DY2JEt63.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();new O(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});function F(){if(document.querySelector(".about-us-swiper"))return new E(".about-us-swiper",{slidesPerView:1,spaceBetween:30,lazy:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:"#about .swiper-pagination",type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:"#about .swiper-button-next",prevEl:"#about .swiper-button-prev"},breakpoints:{768:{pagination:{dynamicBullets:!1}}}})}F();const i=document.querySelector("[data-menu]"),H=document.querySelector("[data-menu-open]"),R=document.querySelector("[data-menu-close]"),U=document.querySelectorAll(".mobile-nav a");H.addEventListener("click",()=>{i.classList.add("is-open"),document.body.style.overflow="hidden"});R.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow=""});U.forEach(e=>{e.addEventListener("click",()=>{i.classList.remove("is-open")})});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("is-open")&&i.classList.remove("is-open")});i.addEventListener("click",e=>{e.target===i&&i.classList.remove("is-open")});const d=document.querySelector(".order-form"),c=document.querySelector(".order-modal-overlay"),$=document.querySelector(".order-close-btn"),w=document.querySelector(".order-submit-btn");function V(e){d.dataset.animalId=e,c.classList.add("is-open"),$.addEventListener("click",u),d.addEventListener("submit",B),c.addEventListener("click",q),document.addEventListener("keydown",C)}function u(){c.classList.remove("is-open"),$.removeEventListener("click",u),d.removeEventListener("submit",B),c.removeEventListener("click",q),document.removeEventListener("keydown",C),delete d.dataset.animalId,d.reset()}function q(e){e.target===c&&u()}function C(e){e.key==="Escape"&&c.classList.contains("is-open")&&u()}async function B(e){e.preventDefault(),w.disabled=!0;const{name:n,phone:t,comment:a}=e.currentTarget.elements,s=e.currentTarget.dataset.animalId,o={name:n.value.trim(),phone:t.value,animalId:s};a.value.trim()&&(o.comment=a.value.trim());try{const f=(await v.post("https://paw-hut.b.goit.study/api/orders",o)).data;u(),S(G(f),5e3)}catch(r){S(K(r.message),3e3)}finally{w.disabled=!1}}function S(e,n=3e3){const t=D.create(`
    <div class="toast">
      ${e}
    </div>
    `,{className:"toast-container"});t.show(),setTimeout(()=>{t.close()},n)}function G(e){return`

     <h3 class="toast-title">Замовлення створено ✅</h3>

      <p><strong>№ замовлення:</strong> ${e.orderNum}</p>
      <p><strong>Клієнт:</strong> ${e.name}</p>
      <p><strong>Тварина:</strong> ${e.animalName} (${e.species})</p>

      <p class="order-toast-phone">📞 ${e.phone}</p>
  `}function K(e){return` 
      <h3 class="toast-title">Сталася помилка ❌</h3>      
      <p><strong>${e}</strong></p>
      <p><small>Спробуйте ще раз або перевірте введені дані.</small></p>
  `}const l=document.querySelector(".modal-pet-backdrop"),_=document.querySelector(".modal-pet-image"),W=document.querySelector(".modal-pet-species"),J=document.querySelector(".modal-pet-name"),Q=document.querySelector(".modal-pet-age"),X=document.querySelector(".modal-pet-gender"),Y=document.querySelector(".modal-pet-desc"),Z=document.querySelector(".modal-pet-health"),ee=document.querySelector(".modal-pet-behavior");let T=null;l.addEventListener("click",se);document.addEventListener("keydown",ne);function te(e){ae(e),l.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function b(){l.classList.add("is-hidden"),document.body.style.overflow=""}function se(e){if(!l.classList.contains("is-hidden")){if(e.target===l||e.target.closest(".modal-pet-close-btn")){b();return}e.target.closest(".modal-pet-adopt-btn")&&oe()}}function ne(e){l.classList.contains("is-hidden")||e.key==="Escape"&&b()}function oe(){const e=T;b(),V(e)}function ae(e){T=e._id,_.src=e.image,_.alt=e.name,W.textContent=e.species,J.textContent=e.name,Q.textContent=e.age,X.textContent=e.gender,Y.textContent=e.description,Z.textContent=e.healthStatus,ee.textContent=e.behavior}const A="https://paw-hut.b.goit.study/api";let m=1,y="",p=[];const M=document.querySelector(".our-pets__types-list"),h=document.querySelector(".pet-list__btn"),L=document.querySelector(".pets-list"),P=document.querySelector(".loader-backdrop");function I(){P.classList.remove("is-hidden")}function x(){P.classList.add("is-hidden")}function re(){return window.innerWidth>=1280?9:8}async function ie(){I();try{await ce(),await k("",1)}catch{iziToast.error({title:"Error",message:"Failed to initialize app"})}finally{x()}}async function ce(){try{const{data:e}=await v.get(`${A}/categories`);let n='<li><button class="pets-type__btn is-active" data-id="">Всі</button></li>';n+=e.map(t=>`<li><button class="pets-type__btn" data-id="${t._id}">${t.name}</button></li>`).join(""),M.innerHTML=n}catch{iziToast.error({title:"Error",message:"Could not load categories",position:"topRight"})}}async function k(e="",n=1){const t=re(),a={page:n,limit:t,...e&&{categoryId:e}};I();try{const{data:s}=await v.get(`${A}/animals`,{params:a}),o=s.animals;n===1?(L.innerHTML="",p=o):p=[...p,...o],le(o),o.length<t||o.length===0?h.style.display="none":h.style.display="block"}catch{iziToast.error({title:"Error",message:"Failed to load animals"})}finally{setTimeout(x,300)}}function le(e){const n=e.map(t=>{const a=t.categories.map(s=>`<li class="pet-tag">${s.name}</li>`).join("");return`
        <li class="pet-card" data-id="${t._id}">
            <div class="pet-card__image-wrapper">
                <img src="${t.image}" alt="${t.name}" class="pet-card__img" loading="lazy">
            </div>
            
            <div class="pet-card__content">
                <span class="pet-card__category">${t.species}</span>
                <h3 class="pet-card__name">${t.name}</h3>
                
                <ul class="pet-card__tag-list">${a}</ul>

                <div class="pet-card__info">
                    <span class="pet-info__item">${t.age}</span>
                    <span class="pet-info__item">${t.gender}</span>
                </div>

                <p class="pet-card__description">${t.shortDescription}</p>

                <button type="button" class="pet-card__btn">Дізнатись більше</button>
            </div>
        </li>`}).join("");L.insertAdjacentHTML("beforeend",n)}M.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(m=1,y=e.target.dataset.id||"",document.querySelectorAll(".pets-type__btn").forEach(n=>n.classList.remove("is-active")),e.target.classList.add("is-active"),k(y,m))});h.addEventListener("click",()=>{m+=1,k(y,m)});ie();L.addEventListener("click",e=>{if(!e.target.classList.contains("pet-card__btn"))return;const t=e.target.closest(".pet-card").dataset.id,a=p.find(s=>s._id===t);a&&te(a)});const de="https://paw-hut.b.goit.study",ue="/api/feedbacks",pe=document.querySelector(".feedbacks"),me=document.querySelectorAll(".stories-btn"),N=document.querySelector(".loader");function fe(){N.classList.remove("loader-hidden")}function ge(){N.classList.add("loader-hidden")}const g=new E(".stories-swiper",{modules:[j,z],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});fe();fetch(`${de}${ue}`).then(e=>e.json()).then(e=>{he(e.feedbacks),g.update(),g.pagination.render(),g.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{ge()});function ye(e){const n=Math.round(e*2)/2,t=Math.floor(n),a=n%1!==0?1:0,s=5-t-a,o=`
    <svg class="star star-filled">
      <use href="/img/icons.svg#star-filled"></use>
    </svg>
  `.repeat(t),r=a?`
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
    `:"",f=`
    <svg class="star star-outline">
      <use href="/img/icons.svg#star-outline"></use>
    </svg>
  `.repeat(s);return o+r+f}function he(e){const n=e.map(t=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${ye(t.rate)}</div>
        </div>
        <p class="feedback-description">${t.description}</p>
        <p class="feedback-author">${t.author}</p>
      </div>
    </div>
  `).join("");pe.innerHTML=n}me.forEach(e=>{e.addEventListener("click",()=>e.blur())});
//# sourceMappingURL=index.js.map
