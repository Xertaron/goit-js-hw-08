!function(){var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",o=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return o;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=u.test(e);return i||f.test(e)?l(e.slice(2),i?2:8):a.test(e)?o:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(i);function T(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function h(){var e,n,i,o=p();if(j(o))return O(o);f=setTimeout(h,(e=o-l,n=o-c,i=t-e,d?g(i,a-n):i))}function O(e){return(f=void 0,v&&o)?T(e):(o=r=void 0,u)}function S(){var e,n=p(),i=j(n);if(o=arguments,r=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(h,t),s?T(e):u;if(d)return f=setTimeout(h,t),T(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},S.flush=function(){return void 0===f?u:O(p())},S}(e,t,{leading:o,maxWait:t,trailing:r})};let T="feedback-form-state",j=document.querySelector(".feedback-form");j.addEventListener("submit",function(e){if(e.preventDefault(),console.log({email:O.value,message:S.value}),""===O.value||""===S.value)return alert("Text fields cannot be empty!");localStorage.removeItem(T),e.currentTarget.reset(),h={}});let h=JSON.parse(localStorage.getItem(T))||{},{email:O,message:S}=j.elements;h&&(O.value=h.email||"",S.value=h.message||""),j.addEventListener("input",((e=n)&&e.__esModule?e.default:e)(function(e){h={email:O.value,message:S.value},localStorage.setItem(T,JSON.stringify(h))},500))}();
//# sourceMappingURL=03-feedback.8ce56725.js.map