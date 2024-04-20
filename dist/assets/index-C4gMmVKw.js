(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var Y,p,de,H,_e,pe,z,Q,j,G,S={},he=[],we=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function E(_,e){for(var t in e)_[t]=e[t];return _}function ve(_){var e=_.parentNode;e&&e.removeChild(_)}function Ee(_,e,t){var n,o,r,l={};for(r in e)r=="key"?n=e[r]:r=="ref"?o=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?Y.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)l[r]===void 0&&(l[r]=_.defaultProps[r]);return M(_,l,n,o,null)}function M(_,e,t,n,o){var r={type:_,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++de,__i:-1,__u:0};return o==null&&p.vnode!=null&&p.vnode(r),r}function C(_){return _.children}function W(_,e){this.props=_,this.context=e}function P(_,e){if(e==null)return _.__?P(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?P(_):null}function me(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return me(_)}}function te(_){(!_.__d&&(_.__d=!0)&&H.push(_)&&!O.__r++||_e!==p.debounceRendering)&&((_e=p.debounceRendering)||pe)(O)}function O(){var _,e,t,n,o,r,l,c;for(H.sort(z);_=H.shift();)_.__d&&(e=H.length,n=void 0,r=(o=(t=_).__v).__e,l=[],c=[],t.__P&&((n=E({},o)).__v=o.__v+1,p.vnode&&p.vnode(n),X(t.__P,n,o,t.__n,t.__P.ownerSVGElement!==void 0,32&o.__u?[r]:null,l,r??P(o),!!(32&o.__u),c),n.__v=o.__v,n.__.__k[n.__i]=n,be(l,n,c),n.__e!=r&&me(n)),H.length>e&&H.sort(z));O.__r=0}function ye(_,e,t,n,o,r,l,c,u,s,a){var i,d,f,y,x,g=n&&n.__k||he,h=e.length;for(t.__d=u,He(t,e,g),u=t.__d,i=0;i<h;i++)(f=t.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(d=f.__i===-1?S:g[f.__i]||S,f.__i=i,X(_,f,d,o,r,l,c,u,s,a),y=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&B(d.ref,null,f),a.push(f.ref,f.__c||y,f)),x==null&&y!=null&&(x=y),65536&f.__u||d.__k===f.__k?(u&&!u.isConnected&&(u=P(d)),u=ge(f,u,_)):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:y&&(u=y.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=u,t.__e=x}function He(_,e,t){var n,o,r,l,c,u=e.length,s=t.length,a=s,i=0;for(_.__k=[],n=0;n<u;n++)l=n+i,(o=_.__k[n]=(o=e[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?M(null,o,null,null,null):K(o)?M(C,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?M(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=_,o.__b=_.__b+1,c=Pe(o,t,l,a),o.__i=c,r=null,c!==-1&&(a--,(r=t[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&i--,typeof o.type!="function"&&(o.__u|=65536)):c!==l&&(c===l+1?i++:c>l?a>u-l?i+=c-l:i--:c<l?c==l-1&&(i=c-l):i=0,c!==n+i&&(o.__u|=65536))):(r=t[l])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),R(r,r,!1),t[l]=null,a--);if(a)for(n=0;n<s;n++)(r=t[n])!=null&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=P(r)),R(r,r))}function ge(_,e,t){var n,o;if(typeof _.type=="function"){for(n=_.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=_,e=ge(n[o],e,t));return e}_.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Pe(_,e,t,n){var o=_.key,r=_.type,l=t-1,c=t+1,u=e[t];if(u===null||u&&o==u.key&&r===u.type&&!(131072&u.__u))return t;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;l>=0||c<e.length;){if(l>=0){if((u=e[l])&&!(131072&u.__u)&&o==u.key&&r===u.type)return l;l--}if(c<e.length){if((u=e[c])&&!(131072&u.__u)&&o==u.key&&r===u.type)return c;c++}}return-1}function ne(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||we.test(e)?t:t+"px"}function F(_,e,t,n,o){var r;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof n=="string"&&(_.style.cssText=n=""),n)for(e in n)t&&e in t||ne(_.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||ne(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?n?t.u=n.u:(t.u=Q,_.addEventListener(e,r?G:j,r)):_.removeEventListener(e,r?G:j,r);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function oe(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=Q++;else if(e.t<t.u)return;return t(p.event?p.event(e):e)}}}function X(_,e,t,n,o,r,l,c,u,s){var a,i,d,f,y,x,g,h,b,w,L,$,ee,D,I,N=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),r=[c=e.__e=t.__e]),(a=p.__b)&&a(e);e:if(typeof N=="function")try{if(h=e.props,b=(a=N.contextType)&&n[a.__c],w=a?b?b.props.value:a.__:n,t.__c?g=(i=e.__c=t.__c).__=i.__E:("prototype"in N&&N.prototype.render?e.__c=i=new N(h,w):(e.__c=i=new W(h,w),i.constructor=N,i.render=Se),b&&b.sub(i),i.props=h,i.state||(i.state={}),i.context=w,i.__n=n,d=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),N.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=E({},i.__s)),E(i.__s,N.getDerivedStateFromProps(h,i.__s))),f=i.props,y=i.state,i.__v=e,d)N.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(N.getDerivedStateFromProps==null&&h!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,w),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,w)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,y,x)})}if(i.context=w,i.props=h,i.__P=_,i.__e=!1,$=p.__r,ee=0,"prototype"in N&&N.prototype.render){for(i.state=i.__s,i.__d=!1,$&&$(e),a=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,$&&$(e),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++ee<25);i.state=i.__s,i.getChildContext!=null&&(n=E(E({},n),i.getChildContext())),d||i.getSnapshotBeforeUpdate==null||(x=i.getSnapshotBeforeUpdate(f,y)),ye(_,K(I=a!=null&&a.type===C&&a.key==null?a.props.children:a)?I:[I],e,t,n,o,r,l,c,u,s),i.base=e.__e,e.__u&=-161,i.__h.length&&l.push(i),g&&(i.__E=i.__=null)}catch(T){e.__v=null,u||r!=null?(e.__e=c,e.__u|=u?160:32,r[r.indexOf(c)]=null):(e.__e=t.__e,e.__k=t.__k),p.__e(T,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=$e(t.__e,e,t,n,o,r,l,u,s);(a=p.diffed)&&a(e)}function be(_,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)B(t[n],t[++n],t[++n]);p.__c&&p.__c(e,_),_.some(function(o){try{_=o.__h,o.__h=[],_.some(function(r){r.call(o)})}catch(r){p.__e(r,o.__v)}})}function $e(_,e,t,n,o,r,l,c,u){var s,a,i,d,f,y,x,g=t.props,h=e.props,b=e.type;if(b==="svg"&&(o=!0),r!=null){for(s=0;s<r.length;s++)if((f=r[s])&&"setAttribute"in f==!!b&&(b?f.localName===b:f.nodeType===3)){_=f,r[s]=null;break}}if(_==null){if(b===null)return document.createTextNode(h);_=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,h.is&&h),r=null,c=!1}if(b===null)g===h||c&&_.data===h||(_.data=h);else{if(r=r&&Y.call(_.childNodes),g=t.props||S,!c&&r!=null)for(g={},s=0;s<_.attributes.length;s++)g[(f=_.attributes[s]).name]=f.value;for(s in g)f=g[s],s=="children"||(s=="dangerouslySetInnerHTML"?i=f:s==="key"||s in h||F(_,s,null,f,o));for(s in h)f=h[s],s=="children"?d=f:s=="dangerouslySetInnerHTML"?a=f:s=="value"?y=f:s=="checked"?x=f:s==="key"||c&&typeof f!="function"||g[s]===f||F(_,s,f,g[s],o);if(a)c||i&&(a.__html===i.__html||a.__html===_.innerHTML)||(_.innerHTML=a.__html),e.__k=[];else if(i&&(_.innerHTML=""),ye(_,K(d)?d:[d],e,t,n,o&&b!=="foreignObject",r,l,r?r[0]:t.__k&&P(t,0),c,u),r!=null)for(s=r.length;s--;)r[s]!=null&&ve(r[s]);c||(s="value",y!==void 0&&(y!==_[s]||b==="progress"&&!y||b==="option"&&y!==g[s])&&F(_,s,y,g[s],!1),s="checked",x!==void 0&&x!==_[s]&&F(_,s,x,g[s],!1))}return _}function B(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(n){p.__e(n,t)}}function R(_,e,t){var n,o;if(p.unmount&&p.unmount(_),(n=_.ref)&&(n.current&&n.current!==_.__e||B(n,null,e)),(n=_.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){p.__e(r,e)}n.base=n.__P=null}if(n=_.__k)for(o=0;o<n.length;o++)n[o]&&R(n[o],e,t||typeof _.type!="function");t||_.__e==null||ve(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function Se(_,e,t){return this.constructor(_,t)}function Ce(_,e,t){var n,o,r,l;p.__&&p.__(_,e),o=(n=typeof t=="function")?null:t&&t.__k||e.__k,r=[],l=[],X(e,_=(!n&&t||e).__k=Ee(C,null,[_]),o||S,S,e.ownerSVGElement!==void 0,!n&&t?[t]:o?null:e.firstChild?Y.call(e.childNodes):null,r,!n&&t?t:o?o.__e:e.firstChild,n,l),be(r,_,l)}Y=he.slice,p={__e:function(_,e,t,n){for(var o,r,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(_)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(_,n||{}),l=o.__d),l)return o.__E=o}catch(c){_=c}throw _}},de=0,W.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof _=="function"&&(_=_(E({},t),this.props)),_&&E(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),te(this))},W.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),te(this))},W.prototype.render=C,H=[],pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z=function(_,e){return _.__v.__b-e.__v.__b},O.__r=0,Q=0,j=oe(!1),G=oe(!0);var V,v,q,re,Z=0,ke=[],A=[],m=p,ie=m.__b,le=m.__r,ce=m.diffed,se=m.__c,ue=m.unmount,fe=m.__;function Ne(_,e){m.__h&&m.__h(v,_,Z||e),Z=0;var t=v.__H||(v.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:A}),t.__[_]}function Le(_){return Z=1,De(xe,_)}function De(_,e,t){var n=Ne(V++,2);if(n.t=_,!n.__c&&(n.__=[t?t(e):xe(void 0,e),function(c){var u=n.__N?n.__N[0]:n.__[0],s=n.t(u,c);u!==s&&(n.__N=[s,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var o=function(c,u,s){if(!n.__c.__H)return!0;var a=n.__c.__H.__.filter(function(d){return!!d.__c});if(a.every(function(d){return!d.__N}))return!r||r.call(this,c,u,s);var i=!1;return a.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(i=!0)}}),!(!i&&n.__c.props===c)&&(!r||r.call(this,c,u,s))};v.u=!0;var r=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(c,u,s){if(this.__e){var a=r;r=void 0,o(c,u,s),r=a}l&&l.call(this,c,u,s)},v.shouldComponentUpdate=o}return n.__N||n.__}function Te(_,e){var t=Ne(V++,3);!m.__s&&We(t.__H,e)&&(t.__=_,t.i=e,v.__H.__h.push(t))}function Fe(){for(var _;_=ke.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(U),_.__H.__h.forEach(J),_.__H.__h=[]}catch(e){_.__H.__h=[],m.__e(e,_.__v)}}m.__b=function(_){v=null,ie&&ie(_)},m.__=function(_,e){_&&e.__k&&e.__k.__m&&(_.__m=e.__k.__m),fe&&fe(_,e)},m.__r=function(_){le&&le(_),V=0;var e=(v=_.__c).__H;e&&(q===v?(e.__h=[],v.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=A,t.__N=t.i=void 0})):(e.__h.forEach(U),e.__h.forEach(J),e.__h=[],V=0)),q=v},m.diffed=function(_){ce&&ce(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(ke.push(e)!==1&&re===m.requestAnimationFrame||((re=m.requestAnimationFrame)||Me)(Fe)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==A&&(t.__=t.__V),t.i=void 0,t.__V=A})),q=v=null},m.__c=function(_,e){e.some(function(t){try{t.__h.forEach(U),t.__h=t.__h.filter(function(n){return!n.__||J(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],m.__e(n,t.__v)}}),se&&se(_,e)},m.unmount=function(_){ue&&ue(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{U(n)}catch(o){e=o}}),t.__H=void 0,e&&m.__e(e,t.__v))};var ae=typeof requestAnimationFrame=="function";function Me(_){var e,t=function(){clearTimeout(n),ae&&cancelAnimationFrame(e),setTimeout(_)},n=setTimeout(t,100);ae&&(e=requestAnimationFrame(t))}function U(_){var e=v,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),v=e}function J(_){var e=v;_.__c=_.__(),v=e}function We(_,e){return!_||_.length!==e.length||e.some(function(t,n){return t!==_[n]})}function xe(_,e){return typeof e=="function"?e(_):e}var Ae=0;function k(_,e,t,n,o,r){var l,c,u={};for(c in e)c=="ref"?l=e[c]:u[c]=e[c];var s={type:_,props:u,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ae,__i:-1,__u:0,__source:o,__self:r};if(typeof _=="function"&&(l=_.defaultProps))for(c in l)u[c]===void 0&&(u[c]=l[c]);return p.vnode&&p.vnode(s),s}const Ue=()=>{const[_,e]=Le(!1);return Te(()=>{document.title="Would you like to go out with me?";const t=document.querySelector("#no"),n=()=>{t.style.position="absolute";const o=Math.random()*window.innerHeight-t.clientHeight;t.style.top=o+"px";const r=Math.random()*window.innerWidth-t.clientWidth;t.style.left=r+"px"};return t==null||t.addEventListener("click",n),t==null||t.addEventListener("mouseover",n),t==null||t.addEventListener("touchstart",n),()=>{t==null||t.removeEventListener("click",n),t==null||t.removeEventListener("mouseover",n),t==null||t.removeEventListener("touchstart",n)}},[]),_?k(Oe,{}):k(C,{children:k("div",{className:"h-screen container grid place-items-center",children:[k("h1",{className:"text-4xl text-white text-center",children:"Benimle dışarı çıkmak ister misin?"}),k("div",{children:k("img",{src:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmZ0b2ZoaDA1YmozaGMwYmNwbDNleXJsYnpsdWE2OHVtbHVzNmNkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif",alt:""})}),k("div",{className:"flex justify-center gap-1",children:[k("button",{className:"button",onClick:()=>{e(!0)},children:"Evet"}),k("button",{id:"no",className:"button",children:"Hayır"})]})]})})},Oe=()=>k("div",{className:"h-screen container grid place-items-center",children:[k("h1",{className:"text-4xl text-white text-center",children:"Bunu duyduğuma çok sevindim! 🥰"}),k("img",{src:"https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif",alt:""})]});Ce(k(Ue,{}),document.getElementById("app"));
