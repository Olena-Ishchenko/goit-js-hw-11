import{S as c,i as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const n=document.querySelector(".form"),u=document.querySelector(".gallery"),a={key:"42093583-bfe36716eb3593f6644c471e3",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};n.addEventListener("submit",s=>{s.preventDefault();const r=n.elements.search.value;a.q=r,d().then(t=>m(t)).catch(t=>console.log(t)),new c(".gallery-link"),n.reset()});function d(){const s=new URLSearchParams(a);return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function m(s){if(s.hits.length===0)f.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});else{const r=s.hits.map(t=>`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}" >
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      width = "360"
      />
    </a>
    <div class="img-text">
    <div class="img-info">
    <h3>Likes</h3>
    <p> ${t.likes}</p>
    </div>
    <div class="img-info">
    <h3>Views</h3>
    <p> ${t.views}</p>
    </div>
       <div class="img-info">
    <h3>Comments</h3>
    <p> ${t.comments}</p>
    </div>
       <div class="img-info">
    <h3>Downloads</h3>
    <p> ${t.downloads}</p>
    </div>
      </div>
  </li>`).join("");u.innerHTML=r}}
//# sourceMappingURL=commonHelpers.js.map
