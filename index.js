import{a as c,S as u,i as f}from"./assets/vendor-DA0uMjGz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="32386885-8dbf1bc36075d10a6eaf5580b";c.defaults.baseURL="https://pixabay.com/";const m=s=>c("/api",{params:{key:g,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data).catch(r=>(r.massage,[]));let n=null;const d=s=>s.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:t,comments:l,downloads:p})=>`
      <li class='gallery-img-item'>
        <a href='${a}'>
          <img src="${r}" alt="${o} "/>
        </a>
        <div class='gallery-wrapper-text'>
          <p class='gallery-img-text'>Likes <span class='gallery-span'>${e}</span></p>
          <p class='gallery-img-text'>Views<span class='gallery-span'>${t}</span></p>
          <p class='gallery-img-text'>Comments<span class='gallery-span'>${l}</span></p>
          <p class='gallery-img-text'>Downloads<span class='gallery-span'>${p}</span></p>
        </div>
      </li>
        `).join(""),y=()=>{n?n.refresh():n=new u(".gallery a",{captionsData:"alt",captionDelay:250})},h=s=>{s.innerHTML=""},i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery")};i.form.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search.value.trim();h(i.gallery),r&&m(r).then(a=>{console.log(a),a.hits.length===0?f.show({title:"Hey",message:"What would you like to add?"}):(i.gallery.insertAdjacentHTML("beforeend",d(a.hits)),y())}).catch(a=>{a.message})});
//# sourceMappingURL=index.js.map
