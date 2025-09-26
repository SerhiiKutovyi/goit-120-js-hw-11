import{a as c,S as m,i as g}from"./assets/vendor-DA0uMjGz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const f="32386885-8dbf1bc36075d10a6eaf5580b";c.defaults.baseURL="https://pixabay.com/api/";const y=e=>c("",{params:{key:f,q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(s=>s.data).catch(s=>(s.message,[])),h=e=>{e.disabled=!0},b=e=>{e.disabled=!1},L=e=>{e.reset()};let i=null;const v=(e,s)=>{const a=e.map(({webformatURL:n,largeImageURL:t,tags:r,likes:l,views:d,comments:p,downloads:u})=>`
      <li class='gallery-img-item'>
        <a href='${t}'>
          <img src="${n}" alt="${r} "/>
        </a>
        <div class='gallery-wrapper-text'>
          <p class='gallery-img-text'>Likes <span class='gallery-span'>${l}</span></p>
          <p class='gallery-img-text'>Views<span class='gallery-span'>${d}</span></p>
          <p class='gallery-img-text'>Comments<span class='gallery-span'>${p}</span></p>
          <p class='gallery-img-text'>Downloads<span class='gallery-span'>${u}</span></p>
        </div>
      </li>
        `).join("");s.insertAdjacentHTML("beforeend",a),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})},x=e=>{e.innerHTML=""},q=e=>{e.classList.remove("hidden")},S=e=>{e.classList.add("hidden")},o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-position"),button:document.querySelector(".form-btn")};o.form.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.search.value.trim();x(o.gallery),s&&(q(o.loader),h(o.button),y(s).then(a=>{a.hits.length===0?g.show({position:"topRight",iconUrl:"./img/Group (1).svg",messageColor:"rgba(255, 255, 255, 1)",color:"rgba(239, 64, 64, 1)",message:"Sorry, there are no images matching </br> your search query. Please try again!"}):v(a.hits,o.gallery)}).catch(a=>{a.message}).finally(()=>{L(o.form),S(o.loader),b(o.button)}))});
//# sourceMappingURL=index.js.map
