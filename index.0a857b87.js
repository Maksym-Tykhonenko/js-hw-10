function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),p=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(j,e),l?g(t):u}function $(t){var n=t-c;return void 0===c||n>=e||n<0||p&&t-a>=r}function j(){var t=v();if($(t))return T(t);f=setTimeout(j,function(t){var n=e-(t-c);return p?d(n,r-(t-a)):n}(t))}function T(t){return f=void 0,y&&o?g(t):(o=i=void 0,u)}function w(){var t=v(),n=$(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(p)return f=setTimeout(j,e),g(c)}return void 0===f&&(f=setTimeout(j,e)),u}return e=m(e)||0,b(n)&&(l=!!n.leading,r=(p="maxWait"in n)?s(m(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(v())},w};const y={input:document.querySelector("#search-box"),pokemonList:document.querySelector(".country-list"),pokemonInfo:document.querySelector(".country-info"),btn:document.querySelector(".btn")};y.input.addEventListener("input",t(e)((function(t){t.preventDefault();const e=t.target.value;y.pokemonInfo.innerHTML="",(n=e,fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then((t=>t.json()))).then((e=>{!function(t){const{sprites:e,name:n,height:o,weight:i,base_experience:r,id:u}=t,f=`<img  src='${e.front_default}' alt='${n}' height='200' class="info-flag">\n        <img  src='${e.back_default}' alt='${n}' height='200' class="info-flag">\n        <p>ІМ'Я: ${n}</p>\n        <p>ЗРІСТ: ${o}</p>\n        <p>ВАГА: ${i}</p>\n        <p>СИЛА: ${r}</p>\n        <p>ID: ${u}</p>\n        `;y.pokemonInfo.insertAdjacentHTML("afterbegin",f)}(e),function(t){t.target.value=""}(t)}));var n}),1500));
//# sourceMappingURL=index.0a857b87.js.map
