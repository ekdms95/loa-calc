(()=>{"use strict";function g(n,r){return!!Object.values(n).find(s=>s.tripod.find(c=>r.tripod.find(t=>t.skill===c.skill&&t.tripod===c.tripod)))}addEventListener("message",({data:n})=>{const r=function(n,r,s){const c=function(n,r){const s={18e4:[],190010:[],190020:[],190030:[],190040:[],190050:[]};return n.forEach(({tripod:c,products:t})=>{const o=t.filter(e=>e.tradeLeft>=r.tradeLeft),d=o.filter(e=>e.name.endsWith("\ubaa8\uc790")),i=o.filter(e=>e.name.endsWith("\uc0c1\uc758")),l=o.filter(e=>e.name.endsWith("\ud558\uc758")),f=o.filter(e=>e.name.endsWith("\uc7a5\uac11")),a=o.filter(e=>e.name.endsWith("\uacac\uac11")),p=o.filter(e=>![...d,...i,...l,...f,...a].find(u=>e.id===u.id));[{gear:d,code:190010},{gear:i,code:190020},{gear:l,code:190030},{gear:f,code:190040},{gear:a,code:190050},{gear:p,code:18e4}].forEach(({gear:e,code:u})=>{e.length>0&&s[u].push(Object.assign({tripod:c},function(n){var r,s,c;const t=null===(r=n.find(i=>2===i.tradeLeft))||void 0===r?void 0:r.price,o=null===(s=n.find(i=>1===i.tradeLeft))||void 0===s?void 0:s.price,d=null===(c=n.find(i=>0===i.tradeLeft))||void 0===c?void 0:c.price;return{trade2:t,trade1:o,trade0:d,price:Math.min(...[t,o,d].filter(i=>null!=i))}}(e)))})}),s}(n,s);let t=[];return function o(d,i,l){var f,a;if(i>(null!==(a=null===(f=t[t.length-1])||void 0===f?void 0:f.price)&&void 0!==a?a:1/0))return;if(l===r.length)return t.push({summary:d,price:i}),t.sort((e,u)=>e.price-u.price),void(t=t.slice(0,100));const p=c[r[l]];for(let e of p)g(d,e)||o(Object.assign(Object.assign({},d),{[r[l]]:e}),i+e.price,l+1)}([],0,0),t}(n.searchResult,n.selectedCategories,n.filter);postMessage(r)})})();