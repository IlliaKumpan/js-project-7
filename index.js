import{A as j,S as q,a as L,b as F,N as z,P as R}from"./assets/vendor-DY2JEt63.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();new j(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});function H(){if(document.querySelector(".about-us-swiper"))return new q(".about-us-swiper",{slidesPerView:1,spaceBetween:30,lazy:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:"#about .swiper-pagination",type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:"#about .swiper-button-next",prevEl:"#about .swiper-button-prev"},breakpoints:{768:{pagination:{dynamicBullets:!1}}}})}H();const d=document.querySelector("[data-menu]"),U=document.querySelector("[data-menu-open]"),V=document.querySelector("[data-menu-close]"),G=document.querySelectorAll(".mobile-nav a"),g=()=>{d.classList.remove("is-open"),document.body.style.overflow=""};U.addEventListener("click",()=>{d.classList.add("is-open"),document.body.style.overflow="hidden"});V.addEventListener("click",g);G.forEach(e=>{e.addEventListener("click",g)});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("is-open")&&g()});d.addEventListener("click",e=>{e.target===d&&g()});const l=document.querySelector(".order-form"),i=document.querySelector(".order-modal-overlay"),B=document.querySelector(".order-close-btn"),_=document.querySelector(".order-submit-btn");function K(e){l.dataset.animalId=e,i.classList.add("is-open"),B.addEventListener("click",u),l.addEventListener("submit",T),i.addEventListener("click",C),document.addEventListener("keydown",M)}function u(){i.classList.remove("is-open"),B.removeEventListener("click",u),l.removeEventListener("submit",T),i.removeEventListener("click",C),document.removeEventListener("keydown",M),delete l.dataset.animalId,l.reset()}function C(e){e.target===i&&u()}function M(e){e.key==="Escape"&&i.classList.contains("is-open")&&u()}async function T(e){e.preventDefault(),_.disabled=!0;const{name:n,phone:t,comment:a}=e.currentTarget.elements,s=e.currentTarget.dataset.animalId,o={name:n.value.trim(),phone:t.value,animalId:s};a.value.trim()&&(o.comment=a.value.trim());try{const y=(await L.post("https://paw-hut.b.goit.study/api/orders",o)).data;u(),E(W(y),5e3)}catch(r){E(J(r.message),3e3)}finally{_.disabled=!1}}function E(e,n=3e3){const t=F.create(`
    <div class="toast">
      ${e}
    </div>
    `,{className:"toast-container"});t.show(),setTimeout(()=>{t.close()},n)}function W(e){return`

     <h3 class="toast-title">Замовлення створено ✅</h3>

      <p><strong>№ замовлення:</strong> ${e.orderNum}</p>
      <p><strong>Клієнт:</strong> ${e.name}</p>
      <p><strong>Тварина:</strong> ${e.animalName} (${e.species})</p>

      <p class="order-toast-phone">📞 ${e.phone}</p>
  `}function J(e){return` 
      <h3 class="toast-title">Сталася помилка ❌</h3>      
      <p><strong>${e}</strong></p>
      <p><small>Спробуйте ще раз або перевірте введені дані.</small></p>
  `}const c=document.querySelector(".modal-pet-backdrop"),$=document.querySelector(".modal-pet-image"),Q=document.querySelector(".modal-pet-species"),X=document.querySelector(".modal-pet-name"),Y=document.querySelector(".modal-pet-age"),Z=document.querySelector(".modal-pet-gender"),ee=document.querySelector(".modal-pet-desc"),te=document.querySelector(".modal-pet-health"),se=document.querySelector(".modal-pet-behavior");let A=null;c.addEventListener("click",oe);document.addEventListener("keydown",ae);function ne(e){ie(e),c.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function k(){c.classList.add("is-hidden"),document.body.style.overflow=""}function oe(e){if(!c.classList.contains("is-hidden")){if(e.target===c||e.target.closest(".modal-pet-close-btn")){k();return}e.target.closest(".modal-pet-adopt-btn")&&re()}}function ae(e){c.classList.contains("is-hidden")||e.key==="Escape"&&k()}function re(){const e=A;k(),K(e)}function ie(e){A=e._id,$.src=e.image,$.alt=e.name,Q.textContent=e.species,X.textContent=e.name,Y.textContent=e.age,Z.textContent=e.gender,ee.textContent=e.description,te.textContent=e.healthStatus,se.textContent=e.behavior}const P="https://paw-hut.b.goit.study/api";let f=1,b="",m=[];const I=document.querySelector(".our-pets__types-list"),v=document.querySelector(".pet-list__btn"),w=document.querySelector(".pets-list"),x=document.querySelector(".loader-backdrop");function N(){x.classList.remove("is-hidden")}function O(){x.classList.add("is-hidden")}function ce(){return window.innerWidth>=1280?9:8}async function le(){N();try{await de(),await S("",1)}catch{iziToast.error({title:"Error",message:"Failed to initialize app"})}finally{O()}}async function de(){try{const{data:e}=await L.get(`${P}/categories`);let n='<li><button class="pets-type__btn is-active" data-id="">Всі</button></li>';n+=e.map(t=>`<li><button class="pets-type__btn" data-id="${t._id}">${t.name}</button></li>`).join(""),I.innerHTML=n}catch{iziToast.error({title:"Error",message:"Could not load categories",position:"topRight"})}}async function S(e="",n=1){const t=ce(),a={page:n,limit:t,...e&&{categoryId:e}};N();try{const{data:s}=await L.get(`${P}/animals`,{params:a}),o=s.animals;n===1?(w.innerHTML="",m=o):m=[...m,...o],ue(o),o.length<t||o.length===0?v.style.display="none":v.style.display="block"}catch{iziToast.error({title:"Error",message:"Failed to load animals"})}finally{setTimeout(O,300)}}function ue(e){const n=e.map(t=>{const a=t.categories.map(s=>`<li class="pet-tag">${s.name}</li>`).join("");return`
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
        </li>`}).join("");w.insertAdjacentHTML("beforeend",n)}I.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(f=1,b=e.target.dataset.id||"",document.querySelectorAll(".pets-type__btn").forEach(n=>n.classList.remove("is-active")),e.target.classList.add("is-active"),S(b,f))});v.addEventListener("click",()=>{f+=1,S(b,f)});le();w.addEventListener("click",e=>{if(!e.target.classList.contains("pet-card__btn"))return;const t=e.target.closest(".pet-card").dataset.id,a=m.find(s=>s._id===t);a&&ne(a)});const p="/js-project-7/assets/icons-B4Da7FRa.svg",pe="https://paw-hut.b.goit.study",me="/api/feedbacks",fe=document.querySelector(".feedbacks"),ge=document.querySelectorAll(".stories-btn"),D=document.querySelector(".loader");function ye(){D.classList.remove("loader-hidden")}function he(){D.classList.add("loader-hidden")}const h=new q(".stories-swiper",{modules:[z,R],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});ye();fetch(`${pe}${me}`).then(e=>e.json()).then(e=>{ve(e.feedbacks),h.update(),h.pagination.render(),h.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{he()});function be(e){const n=Math.round(e*2)/2,t=Math.floor(n),a=n%1!==0?1:0,s=5-t-a,o=`
    <svg class="star star-filled">
      <use href="${p}#star-filled"></use>
    </svg>
  `.repeat(t),r=a?`
      <span class="star-half" aria-hidden="true">
        <svg class="star star-outline">
          <use href="${p}#star-outline"></use>
        </svg>
        <span class="star-half-fill">
          <svg class="star star-filled">
            <use href="${p}#star-filled"></use>
          </svg>
        </span>
      </span>
    `:"",y=`
    <svg class="star star-outline">
      <use href="${p}#star-outline"></use>
    </svg>
  `.repeat(s);return o+r+y}function ve(e){const n=e.map(t=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${be(t.rate)}</div>
        </div>
        <p class="feedback-description">${t.description}</p>
        <p class="feedback-author">${t.author}</p>
      </div>
    </div>
  `).join("");fe.innerHTML=n}ge.forEach(e=>{e.addEventListener("click",()=>e.blur())});
//# sourceMappingURL=index.js.map
