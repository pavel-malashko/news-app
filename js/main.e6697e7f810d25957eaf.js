(()=>{var e={268:()=>{const e={searchForm:document.querySelector(".search-form"),input:document.querySelector(".input"),loadMore:document.querySelector(".load-more"),table:document.querySelector(".news-cards"),sourceList:document.querySelector(".source")};e.searchForm.addEventListener("submit",(function(r){r.preventDefault();const{table:o,input:a,sourceList:s}=e;o.innerHTML="",t=[];const l=a.value,c=s.value?`&sources=${s.value}`:"";fetch(`https://newsapi.org/v2/top-headlines?q=${l}&apiKey=3d64719634674a3898d96f75bb417e60&pageSize=40${c}`).then((e=>e.json())).then((e=>{e.articles.forEach((e=>{let{urlToImage:r,url:n,title:o}=e,a=o.substr(0,50)+"...";r=r??"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg",t.push({title:a,img:r,url:n})})),n()}))})),e.loadMore.addEventListener("click",n),e.loadMore.addEventListener("submit",n);let t=[],r=[];function n(){const r=document.createElement("tr");if(t.length)for(let n=0;n<5;n++){const n=document.createElement("br"),o=document.createElement("th"),a=document.createElement("a"),s=document.createElement("img"),l=t.shift();a.setAttribute("href",l.url),a.setAttribute("target","_blank"),a.textContent=l.title,s.setAttribute("src",l.img),s.setAttribute("alt","Image is not available"),s.setAttribute("align","bottom"),o.appendChild(a),o.appendChild(n),o.appendChild(s),r.appendChild(o),e.table.appendChild(r)}else{const t=document.createElement("h3"),n=document.createElement("th");t.textContent="There are no articles matching your request",n.appendChild(t),r.appendChild(n),e.table.appendChild(r)}}fetch("https://newsapi.org/v2/sources?apiKey=3d64719634674a3898d96f75bb417e60&language=en").then((e=>e.json())).then((t=>{t.sources.forEach((e=>{r.push({id:e.id,name:e.name})})),function(){const t=r.length;for(let n=0;n<t;n++){const t=document.createElement("option"),o=r[n],a=o.name,s=o.id;t.setAttribute("value",s),t.textContent=a,e.sourceList.appendChild(t)}}()}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(268)})()})();