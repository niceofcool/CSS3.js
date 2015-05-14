(function(f){typeof define==="function"?define("stylefix",f):f()})(function(require,exports,module){"use strict";!function(e,t){function n(){}function r(t,n){n=n||q;var r=[];for(var o in S){var c,a,i=e;if(e[o]){for(c=S[o].replace("*",o).split(".");(a=c.shift())&&(i=i[a]););if("function"==typeof i)try{if(r=i(t,n),r&&r.length)break}catch(s){}}}try{r=r&&r.length?r:n.querySelectorAll(t)}catch(s){/^\w+$/.test(t)&&n.getElementsByTagName(t)}return[].slice.call(r,0)}function o(t,r,c){O=!1;var a,i,s,l,u,f,d=/^\w+:\/\/[^\/]+/;if(c=c||n,u=k[t])b(function(){r(u)},0);else if(l=L[t])l.push(r);else{L[t]=[r],a=N?new N:new ActiveXObject("Microsoft.XMLHTTP"),a.onreadystatechange=function(){4===a.readyState&&s()},s=function(){var e=a.responseText.replace(/(^\s+|\s+$)/g,"");e&&(!a.status||a.status<400||a.status>600)?(k[t]=e,L[t].forEach(function(t){t(e)})):c(a)};try{a.open("GET",t),a.send()}catch(y){C?(a=new C,a.onerror=c,a.onprogress=n,a.onload=s,a.open("GET",t),a.send()):(f=function(e){N=(i||e).XMLHttpRequest,o(t,r,c)},(i=e.mOxie)?f():require?require.async(["mOxie"],f):d.test(t)?o(t.replace(d,""),r,c):c(a))}}}function c(e,n){var r=e.textContent;return n===t?r||(e.textContent=e.innerText):(e.styleSheet&&n!==r&&(e.styleSheet.cssText=n),void(e.textContent=n))}function a(e,t){t=t||{};var n=e.replace(/[^\/]+$/,""),r=(/^[a-z]{3,10}:/.exec(n)||[""])[0],a=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(n)||[""])[0],i=/^([^?]*)\??/.exec(e)[1],s=t.style||q.createElement("style"),l=t.callback,u=t.after;o(e,function(t){n&&(t=t.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(e,t,o){return/^([a-z]{3,10}:|#)/i.test(o)?e:/^\/\//.test(o)?'url("'+r+o+'")':/^\//.test(o)?'url("'+a+o+'")':/^\?/.test(o)?'url("'+i+o+'")':'url("'+n+o+'")'}));var o=n.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");t=t.replace(new RegExp("\\b(behavior:\\s*?url\\('?\"?)"+o,"gi"),"$1"),E=s,s.setAttribute("data-href",e),u&&u.parentNode?u.parentNode.insertBefore(s,u.nextSibling):q.documentElement.childNodes[0].appendChild(s),t=d(t,!0,s),c(s,t),l&&l(s),E=null},function(){if(!u){var t=q.createElement("link");t.rel="stylesheet",t.href=e,q.documentElement.childNodes[0].appendChild(t)}})}function i(e){function t(){var t=e.href,n=o.style,r=e.parentNode;!n||r&&n.getAttribute("data-href")===t||(n.remove?n.remove():n.parentNode&&n.parentNode.removeChild(n)),r&&a(t,o)}function n(){clearTimeout(r),r=b(t,0)}var r,o={callback:function(t){t.media=e.media,t.disabled=e.disabled,o.style=t},after:e};!e[w]&&/^stylesheet$/i.test(e.rel)&&(t(),h(e,"DOMAttrModified",n),h(e,"DOMNodeRemoved",n),e.attachEvent&&e.attachEvent("onpropertychange",n))}function s(e){var t=e.disabled;c(e,d(c(e),!0,e)),e.disabled=t}function l(e){var t,n;8>A?(t=e.style.cssText,n=d(t,!1,e),t!==n&&(e.style.cssText=n)):(t=e.getAttribute("style"),n=d(t,!1,e),t!==n&&e.setAttribute("style",n))}function u(){T.length>1?(r("link").forEach(i),r("style").forEach(s),r("[style]").forEach(l),h(q,"DOMNodeInserted",function(e){var t=e.target;switch(t.tagName){case"STYLE":t!==E&&s(t);break;case"LINK":/^stylesheet$/i.test(t.rel)&&i(t);break;default:t.style&&l(t)}})):b(u,50)}function f(e,n){T.splice(n===t?T.length:n,0,e)}function d(e,t,n){return T.forEach(function(r){e=r(e,t,n)||e}),e}function y(){m(function(){D.forEach(function(e){e()}),b(u,0)})}function h(e){var t=e.addEventListener;return t?(t.apply(e,[].slice.call(arguments,1)),!0):void 0}function p(e){g||(g=q.createElement("style")),E=g,M.insertBefore(g,M.firstChild),g.styleSheet?g.styleSheet.cssText+=e:g.textContent+=e,E=null}function m(t){function n(){R||(R=!0,t())}try{return $(n)}catch(r){}if(v())b(n,0);else if(!h(q,"DOMContentLoaded",n)){q.attachEvent("onreadystatechange",function(){v()&&n()});var o;try{o=!e.frameElement&&q.documentElement}catch(c){}o&&o.doScroll&&!function a(){if(!R){try{o.doScroll("left")}catch(e){return b(a,50)}n()}}()}}function v(){return/^(complete|interactive)$/.test(q.readyState)}var g,E,x,b=e.setTimeout,S={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},T=[function(e){return e.replace(/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g,"")}],q=e.document,M=q.documentElement.children[0],C=e.XDomainRequest,N=e.XMLHttpRequest,A=q.querySelector?q.documentMode:"CSS1Compat"===q.compatMode?"XMLHttpRequest"in e?7:6:5,O=q.querySelector||C,w="data-ignore",k={},L={},D=[],R=!1;require&&![].filter?require.async(["es5-shim"],y):y(),x={query:r,get:o,cssContent:c,load:a,addRestCss:p,linkElement:i,styleElement:s,styleAttribute:l,ieVersion:A,process:u,register:f,fix:d,ready:function(e){R?e():D.push(e)}};try{module.exports=x}catch(X){e.stylefix=x}}(window);});