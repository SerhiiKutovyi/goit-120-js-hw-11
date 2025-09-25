import{a as c,S as g,i as u}from"./assets/vendor-DA0uMjGz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="32386885-8dbf1bc36075d10a6eaf5580b";c.defaults.baseURL="https://pixabay.com/";const d=s=>c("/api",{params:{key:m,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data).catch(t=>(t.massage,[]));let n=null;const f=s=>s.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:r,comments:o,downloads:p})=>`
      <li class='gallery-img-item'>
        <a href='${a}'>
          <img src="${t}" alt="${i} "/>
        </a>
        <div class='gallery-wrapper-text'>
          <p class='gallery-img-text'>Likes <span class='gallery-span'>${e}</span></p>
          <p class='gallery-img-text'>Views<span class='gallery-span'>${r}</span></p>
          <p class='gallery-img-text'>Comments<span class='gallery-span'>${o}</span></p>
          <p class='gallery-img-text'>Downloads<span class='gallery-span'>${p}</span></p>
        </div>
      </li>
        `).join(""),y=()=>{n?n.refresh():n=new g(".gallery a",{captionsData:"alt",captionDelay:250})},h=s=>{s.innerHTML=""},l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value.trim();h(l.gallery),t&&(l.loader.classList.remove("hidden"),d(t).then(a=>{a.hits.length===0?u.show({position:"topRight",iconUrl:"./img/Group (1).svg",messageColor:"rgba(255, 255, 255, 1)",color:"rgba(239, 64, 64, 1)",message:"Sorry, there are no images matching </br> your search query. Please try again!"}):(l.gallery.insertAdjacentHTML("beforeend",f(a.hits)),y())}).catch(a=>{a.message}).finally(()=>{l.form.reset(),l.loader.classList.add("hidden")}))});
//# sourceMappingURL=index.js.map
