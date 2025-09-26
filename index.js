import{a as c,S as u,i as p}from"./assets/vendor-DA0uMjGz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const m="32386885-8dbf1bc36075d10a6eaf5580b";c.defaults.baseURL="https://pixabay.com/";const g=e=>c("/api",{params:{key:m,q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(s=>s.data).catch(s=>(s.massage,[]));let i=null;const f=e=>e.map(({webformatURL:s,largeImageURL:a,tags:n,likes:t,views:r,comments:l,downloads:d})=>`
      <li class='gallery-img-item'>
        <a href='${a}'>
          <img src="${s}" alt="${n} "/>
        </a>
        <div class='gallery-wrapper-text'>
          <p class='gallery-img-text'>Likes <span class='gallery-span'>${t}</span></p>
          <p class='gallery-img-text'>Views<span class='gallery-span'>${r}</span></p>
          <p class='gallery-img-text'>Comments<span class='gallery-span'>${l}</span></p>
          <p class='gallery-img-text'>Downloads<span class='gallery-span'>${d}</span></p>
        </div>
      </li>
        `).join(""),y=()=>{i?i.refresh():i=new u(".gallery a",{captionsData:"alt",captionDelay:250})},h=e=>{e.innerHTML=""},b=e=>{e.classList.remove("hidden")},L=e=>{e.classList.add("hidden")},x=e=>{e.disabled=!0},v=e=>{e.disabled=!1},q=e=>{e.reset()},o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-position"),button:document.querySelector(".form-btn")};o.form.addEventListener("submit",e=>{e.preventDefault();const s=e.target.elements.search.value.trim();h(o.gallery),s&&(b(o.loader),x(o.button),g(s).then(a=>{a.hits.length===0?p.show({position:"topRight",iconUrl:"./img/Group (1).svg",messageColor:"rgba(255, 255, 255, 1)",color:"rgba(239, 64, 64, 1)",message:"Sorry, there are no images matching </br> your search query. Please try again!"}):(o.gallery.insertAdjacentHTML("beforeend",f(a.hits)),y())}).catch(a=>{a.message}).finally(()=>{q(o.form),L(o.loader),v(o.button)}))});
//# sourceMappingURL=index.js.map
