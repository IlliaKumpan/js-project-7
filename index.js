import{A as D,S as $,a as b,b as j,N as F,P as z}from"./assets/vendor-DY2JEt63.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();new D(".accordion-container",{elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",openMultiple:!1,collapse:!0,duration:300,showIcon:!0});function R(){if(document.querySelector(".about-us-swiper"))return new $(".about-us-swiper",{slidesPerView:1,spaceBetween:30,lazy:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:"#about .swiper-pagination",type:"bullets",dynamicBullets:!0,clickable:!0},navigation:{nextEl:"#about .swiper-button-next",prevEl:"#about .swiper-button-prev"},breakpoints:{768:{pagination:{dynamicBullets:!1}}}})}R();const i=document.querySelector("[data-menu]"),H=document.querySelector("[data-menu-open]"),U=document.querySelector("[data-menu-close]"),V=document.querySelectorAll(".mobile-nav a");H.addEventListener("click",()=>{i.classList.add("is-open"),document.body.style.overflow="hidden"});U.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow=""});V.forEach(e=>{e.addEventListener("click",()=>{i.classList.remove("is-open")})});document.addEventListener("keydown",e=>{e.key==="Escape"&&i.classList.contains("is-open")&&i.classList.remove("is-open")});i.addEventListener("click",e=>{e.target===i&&i.classList.remove("is-open")});const d=document.querySelector(".order-form"),c=document.querySelector(".order-modal-overlay"),q=document.querySelector(".order-close-btn"),S=document.querySelector(".order-submit-btn");function G(e){d.dataset.animalId=e,c.classList.add("is-open"),q.addEventListener("click",u),d.addEventListener("submit",T),c.addEventListener("click",B),document.addEventListener("keydown",C)}function u(){c.classList.remove("is-open"),q.removeEventListener("click",u),d.removeEventListener("submit",T),c.removeEventListener("click",B),document.removeEventListener("keydown",C),delete d.dataset.animalId,d.reset()}function B(e){e.target===c&&u()}function C(e){e.key==="Escape"&&c.classList.contains("is-open")&&u()}async function T(e){e.preventDefault(),S.disabled=!0;const{name:n,phone:t,comment:a}=e.currentTarget.elements,s=e.currentTarget.dataset.animalId,o={name:n.value.trim(),phone:t.value,animalId:s};a.value.trim()&&(o.comment=a.value.trim());try{const g=(await b.post("https://paw-hut.b.goit.study/api/orders",o)).data;u(),_(K(g),5e3)}catch(r){_(W(r.message),3e3)}finally{S.disabled=!1}}function _(e,n=3e3){const t=j.create(`
    <div class="toast">
      ${e}
    </div>
    `,{className:"toast-container"});t.show(),setTimeout(()=>{t.close()},n)}function K(e){return`

     <h3 class="toast-title">Замовлення створено ✅</h3>

      <p><strong>№ замовлення:</strong> ${e.orderNum}</p>
      <p><strong>Клієнт:</strong> ${e.name}</p>
      <p><strong>Тварина:</strong> ${e.animalName} (${e.species})</p>

      <p class="order-toast-phone">📞 ${e.phone}</p>
  `}function W(e){return` 
      <h3 class="toast-title">Сталася помилка ❌</h3>      
      <p><strong>${e}</strong></p>
      <p><small>Спробуйте ще раз або перевірте введені дані.</small></p>
  `}const l=document.querySelector(".modal-pet-backdrop"),E=document.querySelector(".modal-pet-image"),J=document.querySelector(".modal-pet-species"),Q=document.querySelector(".modal-pet-name"),X=document.querySelector(".modal-pet-age"),Y=document.querySelector(".modal-pet-gender"),Z=document.querySelector(".modal-pet-desc"),ee=document.querySelector(".modal-pet-health"),te=document.querySelector(".modal-pet-behavior");let A=null;l.addEventListener("click",ne);document.addEventListener("keydown",oe);function se(e){re(e),l.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function L(){l.classList.add("is-hidden"),document.body.style.overflow=""}function ne(e){if(!l.classList.contains("is-hidden")){if(e.target===l||e.target.closest(".modal-pet-close-btn")){L();return}e.target.closest(".modal-pet-adopt-btn")&&ae()}}function oe(e){l.classList.contains("is-hidden")||e.key==="Escape"&&L()}function ae(){const e=A;L(),G(e)}function re(e){A=e._id,E.src=e.image,E.alt=e.name,J.textContent=e.species,Q.textContent=e.name,X.textContent=e.age,Y.textContent=e.gender,Z.textContent=e.description,ee.textContent=e.healthStatus,te.textContent=e.behavior}const M="https://paw-hut.b.goit.study/api";let f=1,h="",m=[];const P=document.querySelector(".our-pets__types-list"),v=document.querySelector(".pet-list__btn"),k=document.querySelector(".pets-list"),I=document.querySelector(".loader-backdrop");function x(){I.classList.remove("is-hidden")}function N(){I.classList.add("is-hidden")}function ie(){return window.innerWidth>=1280?9:8}async function ce(){x();try{await le(),await w("",1)}catch{iziToast.error({title:"Error",message:"Failed to initialize app"})}finally{N()}}async function le(){try{const{data:e}=await b.get(`${M}/categories`);let n='<li><button class="pets-type__btn is-active" data-id="">Всі</button></li>';n+=e.map(t=>`<li><button class="pets-type__btn" data-id="${t._id}">${t.name}</button></li>`).join(""),P.innerHTML=n}catch{iziToast.error({title:"Error",message:"Could not load categories",position:"topRight"})}}async function w(e="",n=1){const t=ie(),a={page:n,limit:t,...e&&{categoryId:e}};x();try{const{data:s}=await b.get(`${M}/animals`,{params:a}),o=s.animals;n===1?(k.innerHTML="",m=o):m=[...m,...o],de(o),o.length<t||o.length===0?v.style.display="none":v.style.display="block"}catch{iziToast.error({title:"Error",message:"Failed to load animals"})}finally{setTimeout(N,300)}}function de(e){const n=e.map(t=>{const a=t.categories.map(s=>`<li class="pet-tag">${s.name}</li>`).join("");return`
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
        </li>`}).join("");k.insertAdjacentHTML("beforeend",n)}P.addEventListener("click",e=>{e.target.nodeName==="BUTTON"&&(f=1,h=e.target.dataset.id||"",document.querySelectorAll(".pets-type__btn").forEach(n=>n.classList.remove("is-active")),e.target.classList.add("is-active"),w(h,f))});v.addEventListener("click",()=>{f+=1,w(h,f)});ce();k.addEventListener("click",e=>{if(!e.target.classList.contains("pet-card__btn"))return;const t=e.target.closest(".pet-card").dataset.id,a=m.find(s=>s._id===t);a&&se(a)});const p="/js-project-7/assets/icons-B4Da7FRa.svg",ue="https://paw-hut.b.goit.study",pe="/api/feedbacks",me=document.querySelector(".feedbacks"),fe=document.querySelectorAll(".stories-btn"),O=document.querySelector(".loader");function ge(){O.classList.remove("loader-hidden")}function ye(){O.classList.add("loader-hidden")}const y=new $(".stories-swiper",{modules:[F,z],initialSlide:0,slidesPerGroup:1,slidesPerView:1,spaceBetween:32,navigation:{nextEl:"#stories .btn-next",prevEl:"#stories .btn-back"},pagination:{el:"#stories .stories-navigation .swiper-pagination",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerGroup:2,slidesPerView:2},1440:{slidesPerGroup:2,slidesPerView:2}}});ge();fetch(`${ue}${pe}`).then(e=>e.json()).then(e=>{ve(e.feedbacks),y.update(),y.pagination.render(),y.pagination.update()}).catch(e=>console.error("Error fetching data:",e)).finally(()=>{ye()});function he(e){const n=Math.round(e*2)/2,t=Math.floor(n),a=n%1!==0?1:0,s=5-t-a,o=`
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
    `:"",g=`
    <svg class="star star-outline">
      <use href="${p}#star-outline"></use>
    </svg>
  `.repeat(s);return o+r+g}function ve(e){const n=e.map(t=>`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="rating">
          <div class="stars">${he(t.rate)}</div>
        </div>
        <p class="feedback-description">${t.description}</p>
        <p class="feedback-author">${t.author}</p>
      </div>
    </div>
  `).join("");me.innerHTML=n}fe.forEach(e=>{e.addEventListener("click",()=>e.blur())});
//# sourceMappingURL=index.js.map
