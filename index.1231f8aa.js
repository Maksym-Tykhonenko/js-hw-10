!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,p=a||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return p.Date.now()};function b(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=u.test(t);return a||c.test(t)?f(t.slice(2),a?2:8):r.test(t)?NaN:+t}t=function(n,t,e){var o,i,r,u,c,f,a=0,l=!1,p=!1,s=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=o,r=i;return o=i=void 0,a=t,u=n.apply(r,e)}function h(n){return a=n,c=setTimeout(T,t),l?g(n):u}function j(n){var e=n-f;return void 0===f||e>=t||e<0||p&&n-a>=r}function T(){var n=m();if(j(n))return k(n);c=setTimeout(T,function(n){var e=t-(n-f);return p?v(e,r-(n-a)):e}(n))}function k(n){return c=void 0,s&&o?g(n):(o=i=void 0,u)}function w(){var n=m(),e=j(n);if(o=arguments,i=this,f=n,e){if(void 0===c)return h(f);if(p)return c=setTimeout(T,t),g(f)}return void 0===c&&(c=setTimeout(T,t)),u}return t=y(t)||0,b(e)&&(l=!!e.leading,r=(p="maxWait"in e)?d(y(e.maxWait)||0,t):r,s="trailing"in e?!!e.trailing:s),w.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=i=c=void 0},w.flush=function(){return void 0===c?u:k(m())},w};var g={input:document.querySelector("#search-box"),pokemonList:document.querySelector(".pokemon-list"),pokemonInfo:document.querySelector(".pokemon-info")};g.input.addEventListener("input",n(t)((function(n){n.preventDefault();var t=n.target.value;g.pokemonInfo.innerHTML="",(e=t,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(n){return n.json()}))).then((function(t){!function(n){var t=n.sprites,e=n.name,o=n.height,i=n.weight,r=n.base_experience,u=n.id,c="<img  src='".concat(t.front_default,"' alt='").concat(e,"' height='200' class=\"info-flag\">\n        <img  src='").concat(t.back_default,"' alt='").concat(e,"' height='200' class=\"info-flag\">\n        <p>ІМ'Я: ").concat(e,"</p>\n        <p>ЗРІСТ: ").concat(o,"</p>\n        <p>ВАГА: ").concat(i,"</p>\n        <p>СИЛА: ").concat(r,"</p>\n        <p>ID: ").concat(u,"</p>\n        ");g.pokemonInfo.insertAdjacentHTML("afterbegin",c)}(t),function(n){n.target.value=""}(n)}));var e}),1500))}();
//# sourceMappingURL=index.1231f8aa.js.map
