"use strict";(()=>{var Y,v,Ht,rt,j,Pt,Ut,et,_t,nt,it,ie,M={},Dt=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,st=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function $t(e){var t=e.parentNode;t&&t.removeChild(e)}function at(e,t,n){var i,o,r,s={};for(r in t)r=="key"?i=t[r]:r=="ref"?o=t[r]:s[r]=t[r];if(arguments.length>2&&(s.children=arguments.length>3?Y.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return B(e,s,i,o,null)}function B(e,t,n,i,o){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Ht,__i:-1,__u:0};return o==null&&v.vnode!=null&&v.vnode(r),r}function T(e){return e.children}function D(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?H(e):null}function Ft(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ft(e)}}function Tt(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!G.__r++||Pt!==v.debounceRendering)&&((Pt=v.debounceRendering)||Ut)(G)}function G(){var e,t,n,i,o,r,s,a;for(j.sort(et);e=j.shift();)e.__d&&(t=j.length,i=void 0,r=(o=(n=e).__v).__e,s=[],a=[],n.__P&&((i=P({},o)).__v=o.__v+1,v.vnode&&v.vnode(i),ut(n.__P,i,o,n.__n,n.__P.ownerSVGElement!==void 0,32&o.__u?[r]:null,s,r??H(o),!!(32&o.__u),a),i.__v=o.__v,i.__.__k[i.__i]=i,Mt(s,i,a),i.__e!=r&&Ft(i)),j.length>t&&j.sort(et));G.__r=0}function At(e,t,n,i,o,r,s,a,f,u,c){var _,g,l,d,p,m=i&&i.__k||Dt,h=t.length;for(n.__d=f,re(n,t,m),f=n.__d,_=0;_<h;_++)(l=n.__k[_])!=null&&typeof l!="boolean"&&typeof l!="function"&&(g=l.__i===-1?M:m[l.__i]||M,l.__i=_,ut(e,l,g,o,r,s,a,f,u,c),d=l.__e,l.ref&&g.ref!=l.ref&&(g.ref&&ft(g.ref,null,l),c.push(l.ref,l.__c||d,l)),p==null&&d!=null&&(p=d),65536&l.__u||g.__k===l.__k?(f&&!f.isConnected&&(f=H(g)),f=zt(l,f,e)):typeof l.type=="function"&&l.__d!==void 0?f=l.__d:d&&(f=d.nextSibling),l.__d=void 0,l.__u&=-196609);n.__d=f,n.__e=p}function re(e,t,n){var i,o,r,s,a,f=t.length,u=n.length,c=u,_=0;for(e.__k=[],i=0;i<f;i++)s=i+_,(o=e.__k[i]=(o=t[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?B(null,o,null,null,null):st(o)?B(T,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?B(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,a=_e(o,n,s,c),o.__i=a,r=null,a!==-1&&(c--,(r=n[a])&&(r.__u|=131072)),r==null||r.__v===null?(a==-1&&_--,typeof o.type!="function"&&(o.__u|=65536)):a!==s&&(a===s+1?_++:a>s?c>f-s?_+=a-s:_--:a<s?a==s-1&&(_=a-s):_=0,a!==i+_&&(o.__u|=65536))):(r=n[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),ot(r,r,!1),n[s]=null,c--);if(c)for(i=0;i<u;i++)(r=n[i])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=H(r)),ot(r,r))}function zt(e,t,n){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=zt(i[o],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function _e(e,t,n,i){var o=e.key,r=e.type,s=n-1,a=n+1,f=t[n];if(f===null||f&&o==f.key&&r===f.type&&!(131072&f.__u))return n;if(i>(f!=null&&!(131072&f.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((f=t[s])&&!(131072&f.__u)&&o==f.key&&r===f.type)return s;s--}if(a<t.length){if((f=t[a])&&!(131072&f.__u)&&o==f.key&&r===f.type)return a;a++}}return-1}function Nt(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||oe.test(t)?n:n+"px"}function X(e,t,n,i,o){var r;t:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Nt(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Nt(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i?n.u=i.u:(n.u=_t,e.addEventListener(t,r?it:nt,r)):e.removeEventListener(t,r?it:nt,r);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=n??"";break t}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function jt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=_t++;else if(t.t<n.u)return;return n(v.event?v.event(t):t)}}}function ut(e,t,n,i,o,r,s,a,f,u){var c,_,g,l,d,p,m,h,k,C,W,z,Ct,I,tt,E=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),r=[a=t.__e=n.__e]),(c=v.__b)&&c(t);t:if(typeof E=="function")try{if(h=t.props,k=(c=E.contextType)&&i[c.__c],C=c?k?k.props.value:c.__:i,n.__c?m=(_=t.__c=n.__c).__=_.__E:("prototype"in E&&E.prototype.render?t.__c=_=new E(h,C):(t.__c=_=new D(h,C),_.constructor=E,_.render=ae),k&&k.sub(_),_.props=h,_.state||(_.state={}),_.context=C,_.__n=i,g=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),E.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=P({},_.__s)),P(_.__s,E.getDerivedStateFromProps(h,_.__s))),l=_.props,d=_.state,_.__v=t,g)E.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(E.getDerivedStateFromProps==null&&h!==l&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(h,C),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(h,_.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(_.props=h,_.state=_.__s,_.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(q){q&&(q.__=t)}),W=0;W<_._sb.length;W++)_.__h.push(_._sb[W]);_._sb=[],_.__h.length&&s.push(_);break t}_.componentWillUpdate!=null&&_.componentWillUpdate(h,_.__s,C),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(l,d,p)})}if(_.context=C,_.props=h,_.__P=e,_.__e=!1,z=v.__r,Ct=0,"prototype"in E&&E.prototype.render){for(_.state=_.__s,_.__d=!1,z&&z(t),c=_.render(_.props,_.state,_.context),I=0;I<_._sb.length;I++)_.__h.push(_._sb[I]);_._sb=[]}else do _.__d=!1,z&&z(t),c=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++Ct<25);_.state=_.__s,_.getChildContext!=null&&(i=P(P({},i),_.getChildContext())),g||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(l,d)),At(e,st(tt=c!=null&&c.type===T&&c.key==null?c.props.children:c)?tt:[tt],t,n,i,o,r,s,a,f,u),_.base=t.__e,t.__u&=-161,_.__h.length&&s.push(_),m&&(_.__E=_.__=null)}catch(q){t.__v=null,f||r!=null?(t.__e=a,t.__u|=f?160:32,r[r.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),v.__e(q,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=se(n.__e,t,n,i,o,r,s,f,u);(c=v.diffed)&&c(t)}function Mt(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)ft(n[i],n[++i],n[++i]);v.__c&&v.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){v.__e(r,o.__v)}})}function se(e,t,n,i,o,r,s,a,f){var u,c,_,g,l,d,p,m=n.props,h=t.props,k=t.type;if(k==="svg"&&(o=!0),r!=null){for(u=0;u<r.length;u++)if((l=r[u])&&"setAttribute"in l==!!k&&(k?l.localName===k:l.nodeType===3)){e=l,r[u]=null;break}}if(e==null){if(k===null)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,h.is&&h),r=null,a=!1}if(k===null)m===h||a&&e.data===h||(e.data=h);else{if(r=r&&Y.call(e.childNodes),m=n.props||M,!a&&r!=null)for(m={},u=0;u<e.attributes.length;u++)m[(l=e.attributes[u]).name]=l.value;for(u in m)if(l=m[u],u!="children"){if(u=="dangerouslySetInnerHTML")_=l;else if(u!=="key"&&!(u in h)){if(u=="value"&&"defaultValue"in h||u=="checked"&&"defaultChecked"in h)continue;X(e,u,null,l,o)}}for(u in h)l=h[u],u=="children"?g=l:u=="dangerouslySetInnerHTML"?c=l:u=="value"?d=l:u=="checked"?p=l:u==="key"||a&&typeof l!="function"||m[u]===l||X(e,u,l,m[u],o);if(c)a||_&&(c.__html===_.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(_&&(e.innerHTML=""),At(e,st(g)?g:[g],t,n,i,o&&k!=="foreignObject",r,s,r?r[0]:n.__k&&H(n,0),a,f),r!=null)for(u=r.length;u--;)r[u]!=null&&$t(r[u]);a||(u="value",d!==void 0&&(d!==e[u]||k==="progress"&&!d||k==="option"&&d!==m[u])&&X(e,u,d,m[u],!1),u="checked",p!==void 0&&p!==e[u]&&X(e,u,p,m[u],!1))}return e}function ft(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){v.__e(i,n)}}function ot(e,t,n){var i,o;if(v.unmount&&v.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||ft(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){v.__e(r,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&ot(i[o],t,n||typeof e.type!="function");n||e.__e==null||$t(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function ae(e,t,n){return this.constructor(e,n)}function Ot(e,t,n){var i,o,r,s;v.__&&v.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],s=[],ut(t,e=(!i&&n||t).__k=at(T,null,[e]),o||M,M,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Y.call(t.childNodes):null,r,!i&&n?n:o?o.__e:t.firstChild,i,s),Mt(r,e,s)}Y=Dt.slice,v={__e:function(e,t,n,i){for(var o,r,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,i||{}),s=o.__d),s)return o.__E=o}catch(a){e=a}throw e}},Ht=0,rt=function(e){return e!=null&&e.constructor==null},D.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Tt(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Tt(this))},D.prototype.render=T,j=[],Ut=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,et=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,_t=0,nt=jt(!1),it=jt(!0),ie=0;var ue=0,we=Array.isArray;function x(e,t,n,i,o,r){t||(t={});var s,a,f=t;if("ref"in f)for(a in f={},t)a=="ref"?s=t[a]:f[a]=t[a];var u={type:e,props:f,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ue,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(s=e.defaultProps))for(a in s)f[a]===void 0&&(f[a]=s[a]);return v.vnode&&v.vnode(u),u}var ct,w,lt,Vt,Lt=0,Yt=[],K=[],b=v,Rt=b.__b,Wt=b.__r,It=b.diffed,qt=b.__c,Xt=b.unmount,Bt=b.__;function fe(e,t){b.__h&&b.__h(w,e,Lt||t),Lt=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:K}),n.__[e]}function pt(e,t){var n=fe(ct++,7);return de(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function le(){for(var e;e=Yt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(J),e.__H.__h.forEach(dt),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){w=null,Rt&&Rt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Bt&&Bt(e,t)},b.__r=function(e){Wt&&Wt(e),ct=0;var t=(w=e.__c).__H;t&&(lt===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=K,n.__N=n.i=void 0})):(t.__h.forEach(J),t.__h.forEach(dt),t.__h=[],ct=0)),lt=w},b.diffed=function(e){It&&It(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Yt.push(t)!==1&&Vt===b.requestAnimationFrame||((Vt=b.requestAnimationFrame)||ce)(le)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==K&&(n.__=n.__V),n.i=void 0,n.__V=K})),lt=w=null},b.__c=function(e,t){t.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(i){return!i.__||dt(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],b.__e(i,n.__v)}}),qt&&qt(e,t)},b.unmount=function(e){Xt&&Xt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{J(i)}catch(o){t=o}}),n.__H=void 0,t&&b.__e(t,n.__v))};var Gt=typeof requestAnimationFrame=="function";function ce(e){var t,n=function(){clearTimeout(i),Gt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);Gt&&(t=requestAnimationFrame(n))}function J(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function dt(e){var t=w;e.__c=e.__(),w=t}function de(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}var pe=Symbol.for("preact-signals");function vt(){if($>1)$--;else{for(var e,t=!1;O!==void 0;){var n=O;for(O=void 0,ht++;n!==void 0;){var i=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Jt(n))try{n.c()}catch(o){t||(e=o,t=!0)}n=i}}if(ht=0,$--,t)throw e}}var y=void 0;var O=void 0,$=0,ht=0,Z=0;function Kt(e){if(y!==void 0){var t=e.n;if(t===void 0||t.t!==y)return t={i:0,S:e,p:y.s,n:void 0,t:y,e:void 0,x:void 0,r:t},y.s!==void 0&&(y.s.n=t),y.s=t,e.n=t,32&y.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=y.s,t.n=void 0,y.s.n=t,y.s=t),t}}function S(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}S.prototype.brand=pe;S.prototype.h=function(){return!0};S.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};S.prototype.U=function(e){if(this.t!==void 0){var t=e.e,n=e.x;t!==void 0&&(t.x=n,e.e=void 0),n!==void 0&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}};S.prototype.subscribe=function(e){var t=this;return L(function(){var n=t.value,i=y;y=void 0;try{e(n)}finally{y=i}})};S.prototype.valueOf=function(){return this.value};S.prototype.toString=function(){return this.value+""};S.prototype.toJSON=function(){return this.value};S.prototype.peek=function(){var e=y;y=void 0;try{return this.value}finally{y=e}};Object.defineProperty(S.prototype,"value",{get:function(){var e=Kt(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ht>100)throw new Error("Cycle detected");this.v=e,this.i++,Z++,$++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{vt()}}}});function N(e){return new S(e)}function Jt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Zt(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Qt(e){for(var t=e.s,n=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=n}function F(e){S.call(this,void 0),this.x=e,this.s=void 0,this.g=Z-1,this.f=4}(F.prototype=new S).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Z))return!0;if(this.g=Z,this.f|=1,this.i>0&&!Jt(this))return this.f&=-2,!0;var e=y;try{Zt(this),y=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return y=e,Qt(this),this.f&=-2,!0};F.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}S.prototype.S.call(this,e)};F.prototype.U=function(e){if(this.t!==void 0&&(S.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};F.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(F.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Kt(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function mt(e){return new F(e)}function te(e){var t=e.u;if(e.u=void 0,typeof t=="function"){$++;var n=y;y=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,yt(e),i}finally{y=n,vt()}}}function yt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,te(e)}function he(e){if(y!==this)throw new Error("Out-of-order effect");Qt(this),y=e,this.f&=-2,8&this.f&&yt(this),vt()}function V(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}V.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};V.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,te(this),Zt(this),$++;var e=y;return y=this,he.bind(this,e)};V.prototype.N=function(){2&this.f||(this.f|=2,this.o=O,O=this)};V.prototype.d=function(){this.f|=8,1&this.f||yt(this)};function L(e){var t=new V(e);try{t.c()}catch(n){throw t.d(),n}return t.d.bind(t)}var bt,gt;function A(e,t){v[e]=t.bind(null,v[e]||function(){})}function Q(e){gt&&gt(),gt=e&&e.S()}function ee(e){var t=this,n=e.data,i=me(n);i.value=n;var o=pt(function(){for(var r=t.__v;r=r.__;)if(r.__c){r.__c.__$f|=4;break}return t.__$u.c=function(){var s;!rt(o.peek())&&((s=t.base)==null?void 0:s.nodeType)===3?t.base.data=o.peek():(t.__$f|=1,t.setState({}))},mt(function(){var s=i.value.value;return s===0?0:s===!0?"":s||""})},[]);return o.value}ee.displayName="_st";Object.defineProperties(S.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ee},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});A("__b",function(e,t){if(typeof t.type=="string"){var n,i=t.props;for(var o in i)if(o!=="children"){var r=i[o];r instanceof S&&(n||(t.__np=n={}),n[o]=r,i[o]=r.peek())}}e(t)});A("__r",function(e,t){Q();var n,i=t.__c;i&&(i.__$f&=-2,(n=i.__$u)===void 0&&(i.__$u=n=function(o){var r;return L(function(){r=this}),r.c=function(){i.__$f|=1,i.setState({})},r}())),bt=i,Q(n),e(t)});A("__e",function(e,t,n,i){Q(),bt=void 0,e(t,n,i)});A("diffed",function(e,t){Q(),bt=void 0;var n;if(typeof t.type=="string"&&(n=t.__e)){var i=t.__np,o=t.props;if(i){var r=n.U;if(r)for(var s in r){var a=r[s];a!==void 0&&!(s in i)&&(a.d(),r[s]=void 0)}else n.U=r={};for(var f in i){var u=r[f],c=i[f];u===void 0?(u=ve(n,f,c,o),r[f]=u):u.o(c,o)}}}e(t)});function ve(e,t,n,i){var o=t in e&&e.ownerSVGElement===void 0,r=N(n);return{o:function(s,a){r.value=s,i=a},d:L(function(){var s=r.value.value;i[t]!==s&&(i[t]=s,o?e[t]=s:s?e.setAttribute(t,s):e.removeAttribute(t))})}}A("unmount",function(e,t){if(typeof t.type=="string"){var n=t.__e;if(n){var i=n.U;if(i){n.U=void 0;for(var o in i){var r=i[o];r&&r.d()}}}}else{var s=t.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}e(t)});A("__h",function(e,t,n,i){(i<3||i===9)&&(t.__$f|=2),e(t,n,i)});D.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&n.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var i in t)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var r in this.props)if(!(r in e))return!0;return!1};function me(e){return pt(function(){return N(e)},[])}var ne=({size:e})=>x("div",{children:["This is the size: ",e,"!!!"]});var U="_x_element_properties";function St({tag:e}){return function(n,i){var o;let r=(o=i.name)===null||o===void 0?void 0:o.toString();if(console.debug(`[@Component] Class Name: ${r}`),"render"in n)throw new Error("You have to define a render method.");return i.addInitializer(function(){customElements.define(e,this)}),class extends n{constructor(...a){super();let f=this.attachShadow({mode:"open"});typeof this.injectStyles=="function"&&this.injectStyles(f);let u=this.render.bind(this);Ot(at(u,{}),f)}static get observedAttributes(){var a,f;return(f=(a=this[Symbol.metadata])===null||a===void 0?void 0:a[U])!==null&&f!==void 0?f:[]}}}}var kt;(kt=Symbol.metadata)!==null&&kt!==void 0||(Symbol.metadata=Symbol.for("Symbol.metadata"));function wt(e){return function(n,i){let o=e?.name||i.name.toString();return console.debug(`[@Property] Property Name: ${o}`,{context:i}),Array.isArray(i.metadata[U])?i.metadata[U]=[...i.metadata[U],o]:i.metadata[U]=[o],function(r){return r}}}function Et(e){return function(n,i){let o=e?.name||i.name.toString(),{get:r}=n;if(console.debug(`[@State] Name: ${o}`,{value:n,context:i}),i.kind!=="accessor")throw new Error("@State() can only be used on accessor properties (e.g. @State accessor private myState: boolean = true;)");return{get(){let s=r.call(this);return s?.value},set(s){let a=r.call(this);a&&(a.value=s)},init(s){return N(s)}}}}var xt=function(e,t,n,i,o,r){function s(h){if(h!==void 0&&typeof h!="function")throw new TypeError("Function expected");return h}for(var a=i.kind,f=a==="getter"?"get":a==="setter"?"set":"value",u=!t&&e?i.static?e:e.prototype:null,c=t||(u?Object.getOwnPropertyDescriptor(u,i.name):{}),_,g=!1,l=n.length-1;l>=0;l--){var d={};for(var p in i)d[p]=p==="access"?{}:i[p];for(var p in i.access)d.access[p]=i.access[p];d.addInitializer=function(h){if(g)throw new TypeError("Cannot add initializers after decoration has completed");r.push(s(h||null))};var m=(0,n[l])(a==="accessor"?{get:c.get,set:c.set}:c[f],d);if(a==="accessor"){if(m===void 0)continue;if(m===null||typeof m!="object")throw new TypeError("Object expected");(_=s(m.get))&&(c.get=_),(_=s(m.set))&&(c.set=_),(_=s(m.init))&&o.unshift(_)}else(_=s(m))&&(a==="field"?o.unshift(_):c[f]=_)}u&&Object.defineProperty(u,i.name,c),g=!0},R=function(e,t,n){for(var i=arguments.length>2,o=0;o<t.length;o++)n=i?t[o].call(e,n):t[o].call(e);return i?n:void 0},ye=function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})},ge=function(e,t,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(e):i?i.value:t.get(e)},be=function(e,t,n,i,o){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?o.call(e,n):o?o.value=n:t.set(e,n),n},rn=(()=>{var e;let t=[St({tag:"my-custom-element",style:"main.scss"})],n,i=[],o,r=HTMLElement,s,a=[],f=[],u,c=[],_=[];var g=o=class extends r{get loading(){return ge(this,e,"f")}set loading(l){be(this,e,l,"f")}constructor(){super(),this.size=R(this,a,N("")),e.set(this,(R(this,f),R(this,c,!1))),R(this,_)}attributeChangedCallback(l,d,p){console.log(`Attribute ${l} has changed from ${d} to ${p}.`),this.size.value=p}render(){return x(T,{children:[x("h1",{children:"hi"}),x(ne,{size:this.size.value}),x("div",{children:this.loading?"Loaded":"Loading..."}),x("button",{onClick:()=>{console.debug("clicked"),this.loading=!this.loading},children:"Toggle"})]})}injectStyles(l){let d=document.createElement("style");d.textContent=`div {
  background-color: aquamarine;
}`,l.appendChild(d)}};return e=new WeakMap,ye(o,"MyXElement"),(()=>{var l;let d=typeof Symbol=="function"&&Symbol.metadata?Object.create((l=r[Symbol.metadata])!==null&&l!==void 0?l:null):void 0;s=[wt()],u=[Et()],xt(o,null,u,{kind:"accessor",name:"loading",static:!1,private:!1,access:{has:p=>"loading"in p,get:p=>p.loading,set:(p,m)=>{p.loading=m}},metadata:d},c,_),xt(null,null,s,{kind:"field",name:"size",static:!1,private:!1,access:{has:p=>"size"in p,get:p=>p.size,set:(p,m)=>{p.size=m}},metadata:d},a,f),xt(null,n={value:o},t,{kind:"class",name:o.name,metadata:d},null,i),g=o=n.value,d&&Object.defineProperty(o,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d}),R(o,i)})(),g=o})();})();
//# sourceMappingURL=xelement.js.map
