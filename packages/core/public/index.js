"use strict";
(() => {
  // ../../node_modules/.pnpm/preact@10.21.0/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c;
  var s;
  var a;
  var h = {};
  var v = [];
  var p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function d(n3, l6) {
    for (var u6 in l6)
      n3[u6] = l6[u6];
    return n3;
  }
  function _(n3) {
    var l6 = n3.parentNode;
    l6 && l6.removeChild(n3);
  }
  function g(l6, u6, t4) {
    var i6, o5, r4, f6 = {};
    for (r4 in u6)
      "key" == r4 ? i6 = u6[r4] : "ref" == r4 ? o5 = u6[r4] : f6[r4] = u6[r4];
    if (arguments.length > 2 && (f6.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l6 && null != l6.defaultProps)
      for (r4 in l6.defaultProps)
        void 0 === f6[r4] && (f6[r4] = l6.defaultProps[r4]);
    return k(l6, f6, i6, o5, null);
  }
  function k(n3, t4, i6, o5, r4) {
    var f6 = { type: n3, props: t4, key: i6, ref: o5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
    return null == r4 && null != l.vnode && l.vnode(f6), f6;
  }
  function m(n3) {
    return n3.children;
  }
  function w(n3, l6) {
    this.props = n3, this.context = l6;
  }
  function C(n3, l6) {
    if (null == l6)
      return n3.__ ? C(n3.__, n3.__i + 1) : null;
    for (var u6; l6 < n3.__k.length; l6++)
      if (null != (u6 = n3.__k[l6]) && null != u6.__e)
        return u6.__e;
    return "function" == typeof n3.type ? C(n3) : null;
  }
  function x(n3) {
    var l6, u6;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l6 = 0; l6 < n3.__k.length; l6++)
        if (null != (u6 = n3.__k[l6]) && null != u6.__e) {
          n3.__e = n3.__c.base = u6.__e;
          break;
        }
      return x(n3);
    }
  }
  function P(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !S.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(S);
  }
  function S() {
    var n3, u6, t4, o5, r4, e4, c5, s6;
    for (i.sort(f); n3 = i.shift(); )
      n3.__d && (u6 = i.length, o5 = void 0, e4 = (r4 = (t4 = n3).__v).__e, c5 = [], s6 = [], t4.__P && ((o5 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(o5), O(t4.__P, o5, r4, t4.__n, void 0 !== t4.__P.ownerSVGElement, 32 & r4.__u ? [e4] : null, c5, null == e4 ? C(r4) : e4, !!(32 & r4.__u), s6), o5.__v = r4.__v, o5.__.__k[o5.__i] = o5, j(c5, o5, s6), o5.__e != e4 && x(o5)), i.length > u6 && i.sort(f));
    S.__r = 0;
  }
  function $(n3, l6, u6, t4, i6, o5, r4, f6, e4, c5, s6) {
    var a5, p5, y4, d6, _5, g3 = t4 && t4.__k || v, k3 = l6.length;
    for (u6.__d = e4, I(u6, l6, g3), e4 = u6.__d, a5 = 0; a5 < k3; a5++)
      null != (y4 = u6.__k[a5]) && "boolean" != typeof y4 && "function" != typeof y4 && (p5 = -1 === y4.__i ? h : g3[y4.__i] || h, y4.__i = a5, O(n3, y4, p5, i6, o5, r4, f6, e4, c5, s6), d6 = y4.__e, y4.ref && p5.ref != y4.ref && (p5.ref && N(p5.ref, null, y4), s6.push(y4.ref, y4.__c || d6, y4)), null == _5 && null != d6 && (_5 = d6), 65536 & y4.__u || p5.__k === y4.__k ? (e4 && !e4.isConnected && (e4 = C(p5)), e4 = H(y4, e4, n3)) : "function" == typeof y4.type && void 0 !== y4.__d ? e4 = y4.__d : d6 && (e4 = d6.nextSibling), y4.__d = void 0, y4.__u &= -196609);
    u6.__d = e4, u6.__e = _5;
  }
  function I(n3, l6, u6) {
    var t4, i6, o5, r4, f6, e4 = l6.length, c5 = u6.length, s6 = c5, a5 = 0;
    for (n3.__k = [], t4 = 0; t4 < e4; t4++)
      r4 = t4 + a5, null != (i6 = n3.__k[t4] = null == (i6 = l6[t4]) || "boolean" == typeof i6 || "function" == typeof i6 ? null : "string" == typeof i6 || "number" == typeof i6 || "bigint" == typeof i6 || i6.constructor == String ? k(null, i6, null, null, null) : y(i6) ? k(m, { children: i6 }, null, null, null) : void 0 === i6.constructor && i6.__b > 0 ? k(i6.type, i6.props, i6.key, i6.ref ? i6.ref : null, i6.__v) : i6) ? (i6.__ = n3, i6.__b = n3.__b + 1, f6 = A(i6, u6, r4, s6), i6.__i = f6, o5 = null, -1 !== f6 && (s6--, (o5 = u6[f6]) && (o5.__u |= 131072)), null == o5 || null === o5.__v ? (-1 == f6 && a5--, "function" != typeof i6.type && (i6.__u |= 65536)) : f6 !== r4 && (f6 === r4 + 1 ? a5++ : f6 > r4 ? s6 > e4 - r4 ? a5 += f6 - r4 : a5-- : f6 < r4 ? f6 == r4 - 1 && (a5 = f6 - r4) : a5 = 0, f6 !== t4 + a5 && (i6.__u |= 65536))) : (o5 = u6[r4]) && null == o5.key && o5.__e && 0 == (131072 & o5.__u) && (o5.__e == n3.__d && (n3.__d = C(o5)), V(o5, o5, false), u6[r4] = null, s6--);
    if (s6)
      for (t4 = 0; t4 < c5; t4++)
        null != (o5 = u6[t4]) && 0 == (131072 & o5.__u) && (o5.__e == n3.__d && (n3.__d = C(o5)), V(o5, o5));
  }
  function H(n3, l6, u6) {
    var t4, i6;
    if ("function" == typeof n3.type) {
      for (t4 = n3.__k, i6 = 0; t4 && i6 < t4.length; i6++)
        t4[i6] && (t4[i6].__ = n3, l6 = H(t4[i6], l6, u6));
      return l6;
    }
    n3.__e != l6 && (u6.insertBefore(n3.__e, l6 || null), l6 = n3.__e);
    do {
      l6 = l6 && l6.nextSibling;
    } while (null != l6 && 8 === l6.nodeType);
    return l6;
  }
  function A(n3, l6, u6, t4) {
    var i6 = n3.key, o5 = n3.type, r4 = u6 - 1, f6 = u6 + 1, e4 = l6[u6];
    if (null === e4 || e4 && i6 == e4.key && o5 === e4.type && 0 == (131072 & e4.__u))
      return u6;
    if (t4 > (null != e4 && 0 == (131072 & e4.__u) ? 1 : 0))
      for (; r4 >= 0 || f6 < l6.length; ) {
        if (r4 >= 0) {
          if ((e4 = l6[r4]) && 0 == (131072 & e4.__u) && i6 == e4.key && o5 === e4.type)
            return r4;
          r4--;
        }
        if (f6 < l6.length) {
          if ((e4 = l6[f6]) && 0 == (131072 & e4.__u) && i6 == e4.key && o5 === e4.type)
            return f6;
          f6++;
        }
      }
    return -1;
  }
  function F(n3, l6, u6) {
    "-" === l6[0] ? n3.setProperty(l6, null == u6 ? "" : u6) : n3[l6] = null == u6 ? "" : "number" != typeof u6 || p.test(l6) ? u6 : u6 + "px";
  }
  function L(n3, l6, u6, t4, i6) {
    var o5;
    n:
      if ("style" === l6)
        if ("string" == typeof u6)
          n3.style.cssText = u6;
        else {
          if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4)
            for (l6 in t4)
              u6 && l6 in u6 || F(n3.style, l6, "");
          if (u6)
            for (l6 in u6)
              t4 && u6[l6] === t4[l6] || F(n3.style, l6, u6[l6]);
        }
      else if ("o" === l6[0] && "n" === l6[1])
        o5 = l6 !== (l6 = l6.replace(/(PointerCapture)$|Capture$/i, "$1")), l6 = l6.toLowerCase() in n3 || "onFocusOut" === l6 || "onFocusIn" === l6 ? l6.toLowerCase().slice(2) : l6.slice(2), n3.l || (n3.l = {}), n3.l[l6 + o5] = u6, u6 ? t4 ? u6.u = t4.u : (u6.u = e, n3.addEventListener(l6, o5 ? s : c, o5)) : n3.removeEventListener(l6, o5 ? s : c, o5);
      else {
        if (i6)
          l6 = l6.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l6 && "height" != l6 && "href" != l6 && "list" != l6 && "form" != l6 && "tabIndex" != l6 && "download" != l6 && "rowSpan" != l6 && "colSpan" != l6 && "role" != l6 && l6 in n3)
          try {
            n3[l6] = null == u6 ? "" : u6;
            break n;
          } catch (n4) {
          }
        "function" == typeof u6 || (null == u6 || false === u6 && "-" !== l6[4] ? n3.removeAttribute(l6) : n3.setAttribute(l6, u6));
      }
  }
  function M(n3) {
    return function(u6) {
      if (this.l) {
        var t4 = this.l[u6.type + n3];
        if (null == u6.t)
          u6.t = e++;
        else if (u6.t < t4.u)
          return;
        return t4(l.event ? l.event(u6) : u6);
      }
    };
  }
  function O(n3, u6, t4, i6, o5, r4, f6, e4, c5, s6) {
    var a5, h5, v6, p5, _5, g3, k3, b3, C3, x2, P2, S2, I2, H2, T, A2 = u6.type;
    if (void 0 !== u6.constructor)
      return null;
    128 & t4.__u && (c5 = !!(32 & t4.__u), r4 = [e4 = u6.__e = t4.__e]), (a5 = l.__b) && a5(u6);
    n:
      if ("function" == typeof A2)
        try {
          if (b3 = u6.props, C3 = (a5 = A2.contextType) && i6[a5.__c], x2 = a5 ? C3 ? C3.props.value : a5.__ : i6, t4.__c ? k3 = (h5 = u6.__c = t4.__c).__ = h5.__E : ("prototype" in A2 && A2.prototype.render ? u6.__c = h5 = new A2(b3, x2) : (u6.__c = h5 = new w(b3, x2), h5.constructor = A2, h5.render = q), C3 && C3.sub(h5), h5.props = b3, h5.state || (h5.state = {}), h5.context = x2, h5.__n = i6, v6 = h5.__d = true, h5.__h = [], h5._sb = []), null == h5.__s && (h5.__s = h5.state), null != A2.getDerivedStateFromProps && (h5.__s == h5.state && (h5.__s = d({}, h5.__s)), d(h5.__s, A2.getDerivedStateFromProps(b3, h5.__s))), p5 = h5.props, _5 = h5.state, h5.__v = u6, v6)
            null == A2.getDerivedStateFromProps && null != h5.componentWillMount && h5.componentWillMount(), null != h5.componentDidMount && h5.__h.push(h5.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && b3 !== p5 && null != h5.componentWillReceiveProps && h5.componentWillReceiveProps(b3, x2), !h5.__e && (null != h5.shouldComponentUpdate && false === h5.shouldComponentUpdate(b3, h5.__s, x2) || u6.__v === t4.__v)) {
              for (u6.__v !== t4.__v && (h5.props = b3, h5.state = h5.__s, h5.__d = false), u6.__e = t4.__e, u6.__k = t4.__k, u6.__k.forEach(function(n4) {
                n4 && (n4.__ = u6);
              }), P2 = 0; P2 < h5._sb.length; P2++)
                h5.__h.push(h5._sb[P2]);
              h5._sb = [], h5.__h.length && f6.push(h5);
              break n;
            }
            null != h5.componentWillUpdate && h5.componentWillUpdate(b3, h5.__s, x2), null != h5.componentDidUpdate && h5.__h.push(function() {
              h5.componentDidUpdate(p5, _5, g3);
            });
          }
          if (h5.context = x2, h5.props = b3, h5.__P = n3, h5.__e = false, S2 = l.__r, I2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (h5.state = h5.__s, h5.__d = false, S2 && S2(u6), a5 = h5.render(h5.props, h5.state, h5.context), H2 = 0; H2 < h5._sb.length; H2++)
              h5.__h.push(h5._sb[H2]);
            h5._sb = [];
          } else
            do {
              h5.__d = false, S2 && S2(u6), a5 = h5.render(h5.props, h5.state, h5.context), h5.state = h5.__s;
            } while (h5.__d && ++I2 < 25);
          h5.state = h5.__s, null != h5.getChildContext && (i6 = d(d({}, i6), h5.getChildContext())), v6 || null == h5.getSnapshotBeforeUpdate || (g3 = h5.getSnapshotBeforeUpdate(p5, _5)), $(n3, y(T = null != a5 && a5.type === m && null == a5.key ? a5.props.children : a5) ? T : [T], u6, t4, i6, o5, r4, f6, e4, c5, s6), h5.base = u6.__e, u6.__u &= -161, h5.__h.length && f6.push(h5), k3 && (h5.__E = h5.__ = null);
        } catch (n4) {
          u6.__v = null, c5 || null != r4 ? (u6.__e = e4, u6.__u |= c5 ? 160 : 32, r4[r4.indexOf(e4)] = null) : (u6.__e = t4.__e, u6.__k = t4.__k), l.__e(n4, u6, t4);
        }
      else
        null == r4 && u6.__v === t4.__v ? (u6.__k = t4.__k, u6.__e = t4.__e) : u6.__e = z(t4.__e, u6, t4, i6, o5, r4, f6, c5, s6);
    (a5 = l.diffed) && a5(u6);
  }
  function j(n3, u6, t4) {
    u6.__d = void 0;
    for (var i6 = 0; i6 < t4.length; i6++)
      N(t4[i6], t4[++i6], t4[++i6]);
    l.__c && l.__c(u6, n3), n3.some(function(u7) {
      try {
        n3 = u7.__h, u7.__h = [], n3.some(function(n4) {
          n4.call(u7);
        });
      } catch (n4) {
        l.__e(n4, u7.__v);
      }
    });
  }
  function z(l6, u6, t4, i6, o5, r4, f6, e4, c5) {
    var s6, a5, v6, p5, d6, g3, k3, b3 = t4.props, m4 = u6.props, w5 = u6.type;
    if ("svg" === w5 && (o5 = true), null != r4) {
      for (s6 = 0; s6 < r4.length; s6++)
        if ((d6 = r4[s6]) && "setAttribute" in d6 == !!w5 && (w5 ? d6.localName === w5 : 3 === d6.nodeType)) {
          l6 = d6, r4[s6] = null;
          break;
        }
    }
    if (null == l6) {
      if (null === w5)
        return document.createTextNode(m4);
      l6 = o5 ? document.createElementNS("http://www.w3.org/2000/svg", w5) : document.createElement(w5, m4.is && m4), r4 = null, e4 = false;
    }
    if (null === w5)
      b3 === m4 || e4 && l6.data === m4 || (l6.data = m4);
    else {
      if (r4 = r4 && n.call(l6.childNodes), b3 = t4.props || h, !e4 && null != r4)
        for (b3 = {}, s6 = 0; s6 < l6.attributes.length; s6++)
          b3[(d6 = l6.attributes[s6]).name] = d6.value;
      for (s6 in b3)
        if (d6 = b3[s6], "children" == s6)
          ;
        else if ("dangerouslySetInnerHTML" == s6)
          v6 = d6;
        else if ("key" !== s6 && !(s6 in m4)) {
          if ("value" == s6 && "defaultValue" in m4 || "checked" == s6 && "defaultChecked" in m4)
            continue;
          L(l6, s6, null, d6, o5);
        }
      for (s6 in m4)
        d6 = m4[s6], "children" == s6 ? p5 = d6 : "dangerouslySetInnerHTML" == s6 ? a5 = d6 : "value" == s6 ? g3 = d6 : "checked" == s6 ? k3 = d6 : "key" === s6 || e4 && "function" != typeof d6 || b3[s6] === d6 || L(l6, s6, d6, b3[s6], o5);
      if (a5)
        e4 || v6 && (a5.__html === v6.__html || a5.__html === l6.innerHTML) || (l6.innerHTML = a5.__html), u6.__k = [];
      else if (v6 && (l6.innerHTML = ""), $(l6, y(p5) ? p5 : [p5], u6, t4, i6, o5 && "foreignObject" !== w5, r4, f6, r4 ? r4[0] : t4.__k && C(t4, 0), e4, c5), null != r4)
        for (s6 = r4.length; s6--; )
          null != r4[s6] && _(r4[s6]);
      e4 || (s6 = "value", void 0 !== g3 && (g3 !== l6[s6] || "progress" === w5 && !g3 || "option" === w5 && g3 !== b3[s6]) && L(l6, s6, g3, b3[s6], false), s6 = "checked", void 0 !== k3 && k3 !== l6[s6] && L(l6, s6, k3, b3[s6], false));
    }
    return l6;
  }
  function N(n3, u6, t4) {
    try {
      "function" == typeof n3 ? n3(u6) : n3.current = u6;
    } catch (n4) {
      l.__e(n4, t4);
    }
  }
  function V(n3, u6, t4) {
    var i6, o5;
    if (l.unmount && l.unmount(n3), (i6 = n3.ref) && (i6.current && i6.current !== n3.__e || N(i6, null, u6)), null != (i6 = n3.__c)) {
      if (i6.componentWillUnmount)
        try {
          i6.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u6);
        }
      i6.base = i6.__P = null;
    }
    if (i6 = n3.__k)
      for (o5 = 0; o5 < i6.length; o5++)
        i6[o5] && V(i6[o5], u6, t4 || "function" != typeof n3.type);
    t4 || null == n3.__e || _(n3.__e), n3.__c = n3.__ = n3.__e = n3.__d = void 0;
  }
  function q(n3, l6, u6) {
    return this.constructor(n3, u6);
  }
  function B(u6, t4, i6) {
    var o5, r4, f6, e4;
    l.__ && l.__(u6, t4), r4 = (o5 = "function" == typeof i6) ? null : i6 && i6.__k || t4.__k, f6 = [], e4 = [], O(t4, u6 = (!o5 && i6 || t4).__k = g(m, null, [u6]), r4 || h, h, void 0 !== t4.ownerSVGElement, !o5 && i6 ? [i6] : r4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, f6, !o5 && i6 ? i6 : r4 ? r4.__e : t4.firstChild, o5, e4), j(f6, u6, e4);
  }
  n = v.slice, l = { __e: function(n3, l6, u6, t4) {
    for (var i6, o5, r4; l6 = l6.__; )
      if ((i6 = l6.__c) && !i6.__)
        try {
          if ((o5 = i6.constructor) && null != o5.getDerivedStateFromError && (i6.setState(o5.getDerivedStateFromError(n3)), r4 = i6.__d), null != i6.componentDidCatch && (i6.componentDidCatch(n3, t4 || {}), r4 = i6.__d), r4)
            return i6.__E = i6;
        } catch (l7) {
          n3 = l7;
        }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && null == n3.constructor;
  }, w.prototype.setState = function(n3, l6) {
    var u6;
    u6 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u6), this.props)), n3 && d(u6, n3), null != n3 && this.__v && (l6 && this._sb.push(l6), P(this));
  }, w.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), P(this));
  }, w.prototype.render = m, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l6) {
    return n3.__v.__b - l6.__v.__b;
  }, S.__r = 0, e = 0, c = M(false), s = M(true), a = 0;

  // ../../node_modules/.pnpm/preact@10.21.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  var i2 = Array.isArray;
  function u2(e4, t4, n3, o5, i6, u6) {
    t4 || (t4 = {});
    var a5, c5, p5 = t4;
    if ("ref" in p5)
      for (c5 in p5 = {}, t4)
        "ref" == c5 ? a5 = t4[c5] : p5[c5] = t4[c5];
    var l6 = { type: e4, props: p5, key: n3, ref: a5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i6, __self: u6 };
    if ("function" == typeof e4 && (a5 = e4.defaultProps))
      for (c5 in a5)
        void 0 === p5[c5] && (p5[c5] = a5[c5]);
    return l.vnode && l.vnode(l6), l6;
  }

  // ../../node_modules/.pnpm/preact@10.21.0/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u3;
  var i3;
  var o2 = 0;
  var f3 = [];
  var c2 = [];
  var e2 = l;
  var a2 = e2.__b;
  var v2 = e2.__r;
  var l2 = e2.diffed;
  var m2 = e2.__c;
  var s2 = e2.unmount;
  var d2 = e2.__;
  function h2(n3, t4) {
    e2.__h && e2.__h(r2, n3, o2 || t4), o2 = 0;
    var u6 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n3 >= u6.__.length && u6.__.push({ __V: c2 }), u6.__[n3];
  }
  function q2(n3, r4) {
    var u6 = h2(t2++, 7);
    return C2(u6.__H, r4) ? (u6.__V = n3(), u6.i = r4, u6.__h = n3, u6.__V) : u6.__;
  }
  function j2() {
    for (var n3; n3 = f3.shift(); )
      if (n3.__P && n3.__H)
        try {
          n3.__H.__h.forEach(z2), n3.__H.__h.forEach(B2), n3.__H.__h = [];
        } catch (t4) {
          n3.__H.__h = [], e2.__e(t4, n3.__v);
        }
  }
  e2.__b = function(n3) {
    r2 = null, a2 && a2(n3);
  }, e2.__ = function(n3, t4) {
    n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), d2 && d2(n3, t4);
  }, e2.__r = function(n3) {
    v2 && v2(n3), t2 = 0;
    var i6 = (r2 = n3.__c).__H;
    i6 && (u3 === r2 ? (i6.__h = [], r2.__h = [], i6.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
    })) : (i6.__h.forEach(z2), i6.__h.forEach(B2), i6.__h = [], t2 = 0)), u3 = r2;
  }, e2.diffed = function(n3) {
    l2 && l2(n3);
    var t4 = n3.__c;
    t4 && t4.__H && (t4.__H.__h.length && (1 !== f3.push(t4) && i3 === e2.requestAnimationFrame || ((i3 = e2.requestAnimationFrame) || w2)(j2)), t4.__H.__.forEach(function(n4) {
      n4.i && (n4.__H = n4.i), n4.__V !== c2 && (n4.__ = n4.__V), n4.i = void 0, n4.__V = c2;
    })), u3 = r2 = null;
  }, e2.__c = function(n3, t4) {
    t4.some(function(n4) {
      try {
        n4.__h.forEach(z2), n4.__h = n4.__h.filter(function(n5) {
          return !n5.__ || B2(n5);
        });
      } catch (r4) {
        t4.some(function(n5) {
          n5.__h && (n5.__h = []);
        }), t4 = [], e2.__e(r4, n4.__v);
      }
    }), m2 && m2(n3, t4);
  }, e2.unmount = function(n3) {
    s2 && s2(n3);
    var t4, r4 = n3.__c;
    r4 && r4.__H && (r4.__H.__.forEach(function(n4) {
      try {
        z2(n4);
      } catch (n5) {
        t4 = n5;
      }
    }), r4.__H = void 0, t4 && e2.__e(t4, r4.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n3) {
    var t4, r4 = function() {
      clearTimeout(u6), k2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u6 = setTimeout(r4, 100);
    k2 && (t4 = requestAnimationFrame(r4));
  }
  function z2(n3) {
    var t4 = r2, u6 = n3.__c;
    "function" == typeof u6 && (n3.__c = void 0, u6()), r2 = t4;
  }
  function B2(n3) {
    var t4 = r2;
    n3.__c = n3.__(), r2 = t4;
  }
  function C2(n3, t4) {
    return !n3 || n3.length !== t4.length || t4.some(function(t5, r4) {
      return t5 !== n3[r4];
    });
  }

  // ../../node_modules/.pnpm/@preact+signals-core@1.6.0/node_modules/@preact/signals-core/dist/signals-core.module.js
  var i4 = Symbol.for("preact-signals");
  function t3() {
    if (!(s3 > 1)) {
      var i6, t4 = false;
      while (void 0 !== h3) {
        var r4 = h3;
        h3 = void 0;
        f4++;
        while (void 0 !== r4) {
          var o5 = r4.o;
          r4.o = void 0;
          r4.f &= -3;
          if (!(8 & r4.f) && c3(r4))
            try {
              r4.c();
            } catch (r5) {
              if (!t4) {
                i6 = r5;
                t4 = true;
              }
            }
          r4 = o5;
        }
      }
      f4 = 0;
      s3--;
      if (t4)
        throw i6;
    } else
      s3--;
  }
  var o3 = void 0;
  var h3 = void 0;
  var s3 = 0;
  var f4 = 0;
  var v3 = 0;
  function e3(i6) {
    if (void 0 !== o3) {
      var t4 = i6.n;
      if (void 0 === t4 || t4.t !== o3) {
        t4 = { i: 0, S: i6, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t4 };
        if (void 0 !== o3.s)
          o3.s.n = t4;
        o3.s = t4;
        i6.n = t4;
        if (32 & o3.f)
          i6.S(t4);
        return t4;
      } else if (-1 === t4.i) {
        t4.i = 0;
        if (void 0 !== t4.n) {
          t4.n.p = t4.p;
          if (void 0 !== t4.p)
            t4.p.n = t4.n;
          t4.p = o3.s;
          t4.n = void 0;
          o3.s.n = t4;
          o3.s = t4;
        }
        return t4;
      }
    }
  }
  function u4(i6) {
    this.v = i6;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
  }
  u4.prototype.brand = i4;
  u4.prototype.h = function() {
    return true;
  };
  u4.prototype.S = function(i6) {
    if (this.t !== i6 && void 0 === i6.e) {
      i6.x = this.t;
      if (void 0 !== this.t)
        this.t.e = i6;
      this.t = i6;
    }
  };
  u4.prototype.U = function(i6) {
    if (void 0 !== this.t) {
      var t4 = i6.e, r4 = i6.x;
      if (void 0 !== t4) {
        t4.x = r4;
        i6.e = void 0;
      }
      if (void 0 !== r4) {
        r4.e = t4;
        i6.x = void 0;
      }
      if (i6 === this.t)
        this.t = r4;
    }
  };
  u4.prototype.subscribe = function(i6) {
    var t4 = this;
    return E(function() {
      var r4 = t4.value, n3 = o3;
      o3 = void 0;
      try {
        i6(r4);
      } finally {
        o3 = n3;
      }
    });
  };
  u4.prototype.valueOf = function() {
    return this.value;
  };
  u4.prototype.toString = function() {
    return this.value + "";
  };
  u4.prototype.toJSON = function() {
    return this.value;
  };
  u4.prototype.peek = function() {
    var i6 = o3;
    o3 = void 0;
    try {
      return this.value;
    } finally {
      o3 = i6;
    }
  };
  Object.defineProperty(u4.prototype, "value", { get: function() {
    var i6 = e3(this);
    if (void 0 !== i6)
      i6.i = this.i;
    return this.v;
  }, set: function(i6) {
    if (i6 !== this.v) {
      if (f4 > 100)
        throw new Error("Cycle detected");
      this.v = i6;
      this.i++;
      v3++;
      s3++;
      try {
        for (var r4 = this.t; void 0 !== r4; r4 = r4.x)
          r4.t.N();
      } finally {
        t3();
      }
    }
  } });
  function d3(i6) {
    return new u4(i6);
  }
  function c3(i6) {
    for (var t4 = i6.s; void 0 !== t4; t4 = t4.n)
      if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i)
        return true;
    return false;
  }
  function a3(i6) {
    for (var t4 = i6.s; void 0 !== t4; t4 = t4.n) {
      var r4 = t4.S.n;
      if (void 0 !== r4)
        t4.r = r4;
      t4.S.n = t4;
      t4.i = -1;
      if (void 0 === t4.n) {
        i6.s = t4;
        break;
      }
    }
  }
  function l3(i6) {
    var t4 = i6.s, r4 = void 0;
    while (void 0 !== t4) {
      var o5 = t4.p;
      if (-1 === t4.i) {
        t4.S.U(t4);
        if (void 0 !== o5)
          o5.n = t4.n;
        if (void 0 !== t4.n)
          t4.n.p = o5;
      } else
        r4 = t4;
      t4.S.n = t4.r;
      if (void 0 !== t4.r)
        t4.r = void 0;
      t4 = o5;
    }
    i6.s = r4;
  }
  function y2(i6) {
    u4.call(this, void 0);
    this.x = i6;
    this.s = void 0;
    this.g = v3 - 1;
    this.f = 4;
  }
  (y2.prototype = new u4()).h = function() {
    this.f &= -3;
    if (1 & this.f)
      return false;
    if (32 == (36 & this.f))
      return true;
    this.f &= -5;
    if (this.g === v3)
      return true;
    this.g = v3;
    this.f |= 1;
    if (this.i > 0 && !c3(this)) {
      this.f &= -2;
      return true;
    }
    var i6 = o3;
    try {
      a3(this);
      o3 = this;
      var t4 = this.x();
      if (16 & this.f || this.v !== t4 || 0 === this.i) {
        this.v = t4;
        this.f &= -17;
        this.i++;
      }
    } catch (i7) {
      this.v = i7;
      this.f |= 16;
      this.i++;
    }
    o3 = i6;
    l3(this);
    this.f &= -2;
    return true;
  };
  y2.prototype.S = function(i6) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
        t4.S.S(t4);
    }
    u4.prototype.S.call(this, i6);
  };
  y2.prototype.U = function(i6) {
    if (void 0 !== this.t) {
      u4.prototype.U.call(this, i6);
      if (void 0 === this.t) {
        this.f &= -33;
        for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
          t4.S.U(t4);
      }
    }
  };
  y2.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i6 = this.t; void 0 !== i6; i6 = i6.x)
        i6.t.N();
    }
  };
  Object.defineProperty(y2.prototype, "value", { get: function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    var i6 = e3(this);
    this.h();
    if (void 0 !== i6)
      i6.i = this.i;
    if (16 & this.f)
      throw this.v;
    return this.v;
  } });
  function w3(i6) {
    return new y2(i6);
  }
  function _2(i6) {
    var r4 = i6.u;
    i6.u = void 0;
    if ("function" == typeof r4) {
      s3++;
      var n3 = o3;
      o3 = void 0;
      try {
        r4();
      } catch (t4) {
        i6.f &= -2;
        i6.f |= 8;
        g2(i6);
        throw t4;
      } finally {
        o3 = n3;
        t3();
      }
    }
  }
  function g2(i6) {
    for (var t4 = i6.s; void 0 !== t4; t4 = t4.n)
      t4.S.U(t4);
    i6.x = void 0;
    i6.s = void 0;
    _2(i6);
  }
  function p2(i6) {
    if (o3 !== this)
      throw new Error("Out-of-order effect");
    l3(this);
    o3 = i6;
    this.f &= -2;
    if (8 & this.f)
      g2(this);
    t3();
  }
  function b(i6) {
    this.x = i6;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  b.prototype.c = function() {
    var i6 = this.S();
    try {
      if (8 & this.f)
        return;
      if (void 0 === this.x)
        return;
      var t4 = this.x();
      if ("function" == typeof t4)
        this.u = t4;
    } finally {
      i6();
    }
  };
  b.prototype.S = function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _2(this);
    a3(this);
    s3++;
    var i6 = o3;
    o3 = this;
    return p2.bind(this, i6);
  };
  b.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.o = h3;
      h3 = this;
    }
  };
  b.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f))
      g2(this);
  };
  function E(i6) {
    var t4 = new b(i6);
    try {
      t4.c();
    } catch (i7) {
      t4.d();
      throw i7;
    }
    return t4.d.bind(t4);
  }

  // ../../node_modules/.pnpm/@preact+signals@1.2.3_preact@10.21.0/node_modules/@preact/signals/dist/signals.module.js
  var v4;
  var s4;
  function l4(n3, i6) {
    l[n3] = i6.bind(null, l[n3] || function() {
    });
  }
  function d4(n3) {
    if (s4)
      s4();
    s4 = n3 && n3.S();
  }
  function p3(n3) {
    var r4 = this, f6 = n3.data, o5 = useSignal(f6);
    o5.value = f6;
    var e4 = q2(function() {
      var n4 = r4.__v;
      while (n4 = n4.__)
        if (n4.__c) {
          n4.__c.__$f |= 4;
          break;
        }
      r4.__$u.c = function() {
        var n5;
        if (!t(e4.peek()) && 3 === (null == (n5 = r4.base) ? void 0 : n5.nodeType))
          r4.base.data = e4.peek();
        else {
          r4.__$f |= 1;
          r4.setState({});
        }
      };
      return w3(function() {
        var n5 = o5.value.value;
        return 0 === n5 ? 0 : true === n5 ? "" : n5 || "";
      });
    }, []);
    return e4.value;
  }
  p3.displayName = "_st";
  Object.defineProperties(u4.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: p3 }, props: { configurable: true, get: function() {
    return { data: this };
  } }, __b: { configurable: true, value: 1 } });
  l4("__b", function(n3, r4) {
    if ("string" == typeof r4.type) {
      var i6, t4 = r4.props;
      for (var f6 in t4)
        if ("children" !== f6) {
          var o5 = t4[f6];
          if (o5 instanceof u4) {
            if (!i6)
              r4.__np = i6 = {};
            i6[f6] = o5;
            t4[f6] = o5.peek();
          }
        }
    }
    n3(r4);
  });
  l4("__r", function(n3, r4) {
    d4();
    var i6, t4 = r4.__c;
    if (t4) {
      t4.__$f &= -2;
      if (void 0 === (i6 = t4.__$u))
        t4.__$u = i6 = function(n4) {
          var r5;
          E(function() {
            r5 = this;
          });
          r5.c = function() {
            t4.__$f |= 1;
            t4.setState({});
          };
          return r5;
        }();
    }
    v4 = t4;
    d4(i6);
    n3(r4);
  });
  l4("__e", function(n3, r4, i6, t4) {
    d4();
    v4 = void 0;
    n3(r4, i6, t4);
  });
  l4("diffed", function(n3, r4) {
    d4();
    v4 = void 0;
    var i6;
    if ("string" == typeof r4.type && (i6 = r4.__e)) {
      var t4 = r4.__np, f6 = r4.props;
      if (t4) {
        var o5 = i6.U;
        if (o5)
          for (var e4 in o5) {
            var u6 = o5[e4];
            if (void 0 !== u6 && !(e4 in t4)) {
              u6.d();
              o5[e4] = void 0;
            }
          }
        else
          i6.U = o5 = {};
        for (var a5 in t4) {
          var c5 = o5[a5], s6 = t4[a5];
          if (void 0 === c5) {
            c5 = _4(i6, a5, s6, f6);
            o5[a5] = c5;
          } else
            c5.o(s6, f6);
        }
      }
    }
    n3(r4);
  });
  function _4(n3, r4, i6, t4) {
    var f6 = r4 in n3 && void 0 === n3.ownerSVGElement, o5 = d3(i6);
    return { o: function(n4, r5) {
      o5.value = n4;
      t4 = r5;
    }, d: E(function() {
      var i7 = o5.value.value;
      if (t4[r4] !== i7) {
        t4[r4] = i7;
        if (f6)
          n3[r4] = i7;
        else if (i7)
          n3.setAttribute(r4, i7);
        else
          n3.removeAttribute(r4);
      }
    }) };
  }
  l4("unmount", function(n3, r4) {
    if ("string" == typeof r4.type) {
      var i6 = r4.__e;
      if (i6) {
        var t4 = i6.U;
        if (t4) {
          i6.U = void 0;
          for (var f6 in t4) {
            var o5 = t4[f6];
            if (o5)
              o5.d();
          }
        }
      }
    } else {
      var e4 = r4.__c;
      if (e4) {
        var u6 = e4.__$u;
        if (u6) {
          e4.__$u = void 0;
          u6.d();
        }
      }
    }
    n3(r4);
  });
  l4("__h", function(n3, r4, i6, t4) {
    if (t4 < 3 || 9 === t4)
      r4.__$f |= 2;
    n3(r4, i6, t4);
  });
  w.prototype.shouldComponentUpdate = function(n3, r4) {
    var i6 = this.__$u;
    if (!(i6 && void 0 !== i6.s || 4 & this.__$f))
      return true;
    if (3 & this.__$f)
      return true;
    for (var t4 in r4)
      return true;
    for (var f6 in n3)
      if ("__source" !== f6 && n3[f6] !== this.props[f6])
        return true;
    for (var o5 in this.props)
      if (!(o5 in n3))
        return true;
    return false;
  };
  function useSignal(n3) {
    return q2(function() {
      return d3(n3);
    }, []);
  }

  // ../../node_modules/.pnpm/preact@10.21.0/node_modules/preact/devtools/dist/devtools.module.js
  "undefined" != typeof window && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.21.0", l, { Fragment: m, Component: w });

  // ../../node_modules/.pnpm/preact@10.21.0/node_modules/preact/debug/dist/debug.module.js
  var o4 = {};
  function a4(e4) {
    return e4.type === m ? "Fragment" : "function" == typeof e4.type ? e4.type.displayName || e4.type.name : "string" == typeof e4.type ? e4.type : "#text";
  }
  var i5 = [];
  var s5 = [];
  function c4() {
    return i5.length > 0 ? i5[i5.length - 1] : null;
  }
  var l5 = true;
  function u5(e4) {
    return "function" == typeof e4.type && e4.type != m;
  }
  function f5(n3) {
    for (var e4 = [n3], t4 = n3; null != t4.__o; )
      e4.push(t4.__o), t4 = t4.__o;
    return e4.reduce(function(n4, e5) {
      n4 += "  in " + a4(e5);
      var t5 = e5.__source;
      return t5 ? n4 += " (at " + t5.fileName + ":" + t5.lineNumber + ")" : l5 && console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."), l5 = false, n4 + "\n";
    }, "");
  }
  var p4 = "function" == typeof WeakMap;
  function d5(n3) {
    var e4 = [];
    return n3.__k ? (n3.__k.forEach(function(n4) {
      n4 && "function" == typeof n4.type ? e4.push.apply(e4, d5(n4)) : n4 && "string" == typeof n4.type && e4.push(n4.type);
    }), e4) : e4;
  }
  function h4(n3) {
    return n3 ? "function" == typeof n3.type ? null === n3.__ ? null !== n3.__e && null !== n3.__e.parentNode ? n3.__e.parentNode.localName : "" : h4(n3.__) : n3.type : "";
  }
  var v5 = w.prototype.setState;
  function y3(n3) {
    return "table" === n3 || "tfoot" === n3 || "tbody" === n3 || "thead" === n3 || "td" === n3 || "tr" === n3 || "th" === n3;
  }
  w.prototype.setState = function(n3, e4) {
    return null == this.__v && null == this.state && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f5(c4())), v5.call(this, n3, e4);
  };
  var m3 = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
  var b2 = w.prototype.forceUpdate;
  function w4(n3) {
    var e4 = n3.props, t4 = a4(n3), o5 = "";
    for (var r4 in e4)
      if (e4.hasOwnProperty(r4) && "children" !== r4) {
        var i6 = e4[r4];
        "function" == typeof i6 && (i6 = "function " + (i6.displayName || i6.name) + "() {}"), i6 = Object(i6) !== i6 || i6.toString ? i6 + "" : Object.prototype.toString.call(i6), o5 += " " + r4 + "=" + JSON.stringify(i6);
      }
    var s6 = e4.children;
    return "<" + t4 + o5 + (s6 && s6.length ? ">..</" + t4 + ">" : " />");
  }
  w.prototype.forceUpdate = function(n3) {
    return null == this.__v ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f5(c4())) : null == this.__P && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f5(this.__v)), b2.call(this, n3);
  }, function() {
    !function() {
      var n4 = l.__b, t5 = l.diffed, o5 = l.__, r5 = l.vnode, a5 = l.__r;
      l.diffed = function(n5) {
        u5(n5) && s5.pop(), i5.pop(), t5 && t5(n5);
      }, l.__b = function(e4) {
        u5(e4) && i5.push(e4), n4 && n4(e4);
      }, l.__ = function(n5, e4) {
        s5 = [], o5 && o5(n5, e4);
      }, l.vnode = function(n5) {
        n5.__o = s5.length > 0 ? s5[s5.length - 1] : null, r5 && r5(n5);
      }, l.__r = function(n5) {
        u5(n5) && s5.push(n5), a5 && a5(n5);
      };
    }();
    var n3 = false, t4 = l.__b, r4 = l.diffed, c5 = l.vnode, l6 = l.__r, v6 = l.__e, b3 = l.__, g3 = l.__h, E2 = p4 ? { useEffect: /* @__PURE__ */ new WeakMap(), useLayoutEffect: /* @__PURE__ */ new WeakMap(), lazyPropTypes: /* @__PURE__ */ new WeakMap() } : null, k3 = [];
    l.__e = function(n4, e4, t5, o5) {
      if (e4 && e4.__c && "function" == typeof n4.then) {
        var r5 = n4;
        n4 = new Error("Missing Suspense. The throwing component was: " + a4(e4));
        for (var i6 = e4; i6; i6 = i6.__)
          if (i6.__c && i6.__c.__c) {
            n4 = r5;
            break;
          }
        if (n4 instanceof Error)
          throw n4;
      }
      try {
        (o5 = o5 || {}).componentStack = f5(e4), v6(n4, e4, t5, o5), "function" != typeof n4.then && setTimeout(function() {
          throw n4;
        });
      } catch (n5) {
        throw n5;
      }
    }, l.__ = function(n4, e4) {
      if (!e4)
        throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var t5;
      switch (e4.nodeType) {
        case 1:
        case 11:
        case 9:
          t5 = true;
          break;
        default:
          t5 = false;
      }
      if (!t5) {
        var o5 = a4(n4);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + e4 + " instead: render(<" + o5 + " />, " + e4 + ");");
      }
      b3 && b3(n4, e4);
    }, l.__b = function(e4) {
      var r5 = e4.type;
      if (n3 = true, void 0 === r5)
        throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + w4(e4) + "\n\n" + f5(e4));
      if (null != r5 && "object" == typeof r5) {
        if (void 0 !== r5.__k && void 0 !== r5.__e)
          throw new Error("Invalid type passed to createElement(): " + r5 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a4(e4) + " = " + w4(r5) + ";\n  let vnode = <My" + a4(e4) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f5(e4));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r5) ? "array" : r5));
      }
      if (void 0 !== e4.ref && "function" != typeof e4.ref && "object" != typeof e4.ref && !("$$typeof" in e4))
        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof e4.ref + "] instead\n" + w4(e4) + "\n\n" + f5(e4));
      if ("string" == typeof e4.type) {
        for (var i6 in e4.props)
          if ("o" === i6[0] && "n" === i6[1] && "function" != typeof e4.props[i6] && null != e4.props[i6])
            throw new Error(`Component's "` + i6 + '" property should be a function, but got [' + typeof e4.props[i6] + "] instead\n" + w4(e4) + "\n\n" + f5(e4));
      }
      if ("function" == typeof e4.type && e4.type.propTypes) {
        if ("Lazy" === e4.type.displayName && E2 && !E2.lazyPropTypes.has(e4.type)) {
          var s6 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var c6 = e4.type();
            E2.lazyPropTypes.set(e4.type, true), console.warn(s6 + "Component wrapped in lazy() is " + a4(c6));
          } catch (n4) {
            console.warn(s6 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var l7 = e4.props;
        e4.type.__f && delete (l7 = function(n4, e5) {
          for (var t5 in e5)
            n4[t5] = e5[t5];
          return n4;
        }({}, l7)).ref, function(n4, e5, t5, r6, a5) {
          Object.keys(n4).forEach(function(t6) {
            var i7;
            try {
              i7 = n4[t6](e5, t6, r6, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n5) {
              i7 = n5;
            }
            i7 && !(i7.message in o4) && (o4[i7.message] = true, console.error("Failed prop type: " + i7.message + (a5 && "\n" + a5() || "")));
          });
        }(e4.type.propTypes, l7, 0, a4(e4), function() {
          return f5(e4);
        });
      }
      t4 && t4(e4);
    };
    var _5, T = 0;
    l.__r = function(e4) {
      l6 && l6(e4), n3 = true;
      var t5 = e4.__c;
      if (t5 === _5 ? T++ : T = 1, T >= 25)
        throw new Error("Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: " + a4(e4));
      _5 = t5;
    }, l.__h = function(e4, t5, o5) {
      if (!e4 || !n3)
        throw new Error("Hook can only be invoked from render methods.");
      g3 && g3(e4, t5, o5);
    };
    var I2 = function(n4, e4) {
      return { get: function() {
        var t5 = "get" + n4 + e4;
        k3 && k3.indexOf(t5) < 0 && (k3.push(t5), console.warn("getting vnode." + n4 + " is deprecated, " + e4));
      }, set: function() {
        var t5 = "set" + n4 + e4;
        k3 && k3.indexOf(t5) < 0 && (k3.push(t5), console.warn("setting vnode." + n4 + " is not allowed, " + e4));
      } };
    }, j3 = { nodeName: I2("nodeName", "use vnode.type"), attributes: I2("attributes", "use vnode.props"), children: I2("children", "use vnode.props.children") }, O2 = Object.create({}, j3);
    l.vnode = function(n4) {
      var e4 = n4.props;
      if (null !== n4.type && null != e4 && ("__source" in e4 || "__self" in e4)) {
        var t5 = n4.props = {};
        for (var o5 in e4) {
          var r5 = e4[o5];
          "__source" === o5 ? n4.__source = r5 : "__self" === o5 ? n4.__self = r5 : t5[o5] = r5;
        }
      }
      n4.__proto__ = O2, c5 && c5(n4);
    }, l.diffed = function(e4) {
      var t5, o5 = e4.type, i6 = e4.__;
      if (e4.__k && e4.__k.forEach(function(n4) {
        if ("object" == typeof n4 && n4 && void 0 === n4.type) {
          var t6 = Object.keys(n4).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + t6 + "}.\n\n" + f5(e4));
        }
      }), "string" == typeof o5 && (y3(o5) || "p" === o5)) {
        var s6 = h4(i6);
        if ("" !== s6)
          "table" === o5 && "td" !== s6 && y3(s6) ? (console.log(s6, i6.__e), console.error("Improper nesting of table. Your <table> should not have a table-node parent." + w4(e4) + "\n\n" + f5(e4))) : "thead" !== o5 && "tfoot" !== o5 && "tbody" !== o5 || "table" === s6 ? "tr" === o5 && "thead" !== s6 && "tfoot" !== s6 && "tbody" !== s6 && "table" !== s6 ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + w4(e4) + "\n\n" + f5(e4)) : "td" === o5 && "tr" !== s6 ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + w4(e4) + "\n\n" + f5(e4)) : "th" === o5 && "tr" !== s6 && console.error("Improper nesting of table. Your <th> should have a <tr>." + w4(e4) + "\n\n" + f5(e4)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + w4(e4) + "\n\n" + f5(e4));
        else if ("p" === o5) {
          var c6 = d5(e4).filter(function(n4) {
            return m3.test(n4);
          });
          c6.length && console.error("Improper nesting of paragraph. Your <p> should not have " + c6.join(", ") + "as child-elements." + w4(e4) + "\n\n" + f5(e4));
        }
      }
      if (n3 = false, r4 && r4(e4), null != e4.__k)
        for (var l7 = [], u6 = 0; u6 < e4.__k.length; u6++) {
          var p5 = e4.__k[u6];
          if (p5 && null != p5.key) {
            var v7 = p5.key;
            if (-1 !== l7.indexOf(v7)) {
              console.error('Following component has two or more children with the same key attribute: "' + v7 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + w4(e4) + "\n\n" + f5(e4));
              break;
            }
            l7.push(v7);
          }
        }
      if (null != e4.__c && null != e4.__c.__H) {
        var b4 = e4.__c.__H.__;
        if (b4)
          for (var g4 = 0; g4 < b4.length; g4 += 1) {
            var E3 = b4[g4];
            if (E3.__H) {
              for (var k4 = 0; k4 < E3.__H.length; k4++)
                if ((t5 = E3.__H[k4]) != t5) {
                  var _6 = a4(e4);
                  throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + g4 + " in component " + _6 + " was called with NaN.");
                }
            }
          }
      }
    };
  }();

  // dist/Large.js
  var Large = () => {
    return u2("div", { children: Array(1e4).fill(Math.random()).map((n3) => u2("div", { children: n3 })) });
  };

  // dist/MyEl.js
  var MyEl = ({ size }) => {
    return u2("div", { children: ["This is the size: ", size, " + ", size, " = ", size * 2, "!!!"] });
  };

  // dist/core/globals.js
  var X_ELEMENT_PROPERTIES_KEY = "_x_element_properties";

  // dist/decorator/component.js
  function Component({ tag }) {
    return function ClassDecorator(target, ctx) {
      var _a2;
      const className = (_a2 = ctx.name) === null || _a2 === void 0 ? void 0 : _a2.toString();
      console.debug(`[@Component] Class Name: ${className}`);
      if ("render" in target) {
        throw new Error("You have to define a render method.");
      }
      ctx.addInitializer(function() {
        customElements.define(tag, this);
      });
      return class XElement extends target {
        constructor(...args) {
          super();
          const shadowRoot = this.attachShadow({ mode: "open" });
          if (typeof this.injectStyles === "function") {
            this.injectStyles(shadowRoot);
          }
          const App = this.render.bind(this);
          B(g(App, null), shadowRoot);
        }
        attributeChangedCallback(name, oldValue, newValue) {
          if (typeof super.attributeChangedCallback !== "undefined") {
            super.attributeChangedCallback(name, oldValue, newValue);
          } else {
            console.log(`[@Component] Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
            if (name in this && oldValue !== newValue) {
              this[name] = newValue;
            }
          }
        }
        static get observedAttributes() {
          var _a3, _b;
          return (_b = (_a3 = this[Symbol.metadata]) === null || _a3 === void 0 ? void 0 : _a3[X_ELEMENT_PROPERTIES_KEY]) !== null && _b !== void 0 ? _b : [];
        }
      };
    };
  }

  // dist/core/metadata-shim.js
  var _a;
  (_a = Symbol.metadata) !== null && _a !== void 0 ? _a : Symbol.metadata = Symbol.for("Symbol.metadata");

  // dist/decorator/property.js
  function Property(args) {
    function result(target, context) {
      const propertyName = (args === null || args === void 0 ? void 0 : args.name) || context.name.toString();
      console.debug(`[@Property] Property Name: ${propertyName}`, { context });
      if (Array.isArray(context.metadata[X_ELEMENT_PROPERTIES_KEY])) {
        context.metadata[X_ELEMENT_PROPERTIES_KEY] = [...context.metadata[X_ELEMENT_PROPERTIES_KEY], propertyName];
      } else {
        context.metadata[X_ELEMENT_PROPERTIES_KEY] = [propertyName];
      }
      switch (context.kind) {
        case "accessor":
          const { get } = target;
          return {
            get() {
              const v6 = get.call(this);
              return v6;
            },
            set(val) {
              const signalValue = get.call(this);
              if (signalValue) {
                signalValue.value = val;
              }
              if (args === null || args === void 0 ? void 0 : args.reflect)
                this.setAttribute(propertyName, val);
            },
            init(initialValue) {
              const value = d3(initialValue);
              return value;
            }
          };
        case "field":
          return function(value) {
            return value;
          };
      }
    }
    ;
    return result;
  }

  // dist/main.js
  var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f6) {
      if (f6 !== void 0 && typeof f6 !== "function")
        throw new TypeError("Function expected");
      return f6;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _5, done = false;
    for (var i6 = decorators.length - 1; i6 >= 0; i6--) {
      var context = {};
      for (var p5 in contextIn)
        context[p5] = p5 === "access" ? {} : contextIn[p5];
      for (var p5 in contextIn.access)
        context.access[p5] = contextIn.access[p5];
      context.addInitializer = function(f6) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f6 || null));
      };
      var result = (0, decorators[i6])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_5 = accept(result.get))
          descriptor.get = _5;
        if (_5 = accept(result.set))
          descriptor.set = _5;
        if (_5 = accept(result.init))
          initializers.unshift(_5);
      } else if (_5 = accept(result)) {
        if (kind === "field")
          initializers.unshift(_5);
        else
          descriptor[key] = _5;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __runInitializers = function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i6 = 0; i6 < initializers.length; i6++) {
      value = useValue ? initializers[i6].call(thisArg, value) : initializers[i6].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __setFunctionName = function(f6, name, prefix) {
    if (typeof name === "symbol")
      name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f6, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f6) {
    if (kind === "a" && !f6)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f6 : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f6 : kind === "a" ? f6.call(receiver) : f6 ? f6.value : state.get(receiver);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f6) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f6)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f6 : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f6.call(receiver, value) : f6 ? f6.value = value : state.set(receiver, value), value;
  };
  var MyXElement = (() => {
    var _MyXElement_size_accessor_storage, _MyXElement_name_accessor_storage, _MyXElement_loading_accessor_storage;
    let _classDecorators = [Component({
      tag: "my-custom-element",
      style: "main.scss"
    })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = HTMLElement;
    let _size_decorators;
    let _size_initializers = [];
    let _size_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    var MyXElement2 = _classThis = class extends _classSuper {
      get size() {
        return __classPrivateFieldGet(this, _MyXElement_size_accessor_storage, "f");
      }
      set size(value) {
        __classPrivateFieldSet(this, _MyXElement_size_accessor_storage, value, "f");
      }
      get name() {
        return __classPrivateFieldGet(this, _MyXElement_name_accessor_storage, "f");
      }
      set name(value) {
        __classPrivateFieldSet(this, _MyXElement_name_accessor_storage, value, "f");
      }
      get loading() {
        return __classPrivateFieldGet(this, _MyXElement_loading_accessor_storage, "f");
      }
      set loading(value) {
        __classPrivateFieldSet(this, _MyXElement_loading_accessor_storage, value, "f");
      }
      constructor() {
        super();
        _MyXElement_size_accessor_storage.set(this, __runInitializers(this, _size_initializers, 0));
        _MyXElement_name_accessor_storage.set(this, (__runInitializers(this, _size_extraInitializers), __runInitializers(this, _name_initializers, "")));
        _MyXElement_loading_accessor_storage.set(this, (__runInitializers(this, _name_extraInitializers), d3(false)));
      }
      render() {
        const isLoading = this.loading.value;
        return u2(m, { children: [u2("h1", { children: "hi" }), u2("br", {}), u2(MyEl, { size: this.size }), u2("br", {}), u2("div", { children: !isLoading ? "Loading..." : "Loaded" }), u2("br", {}), u2("button", { onClick: () => {
          console.debug("clicked");
          this.name = `${this.size} is now`;
          this.loading.value = !this.loading.value;
        }, children: "Toggle" }), u2(Large, {})] });
      }
      injectStyles(shadowRoot) {
        const style = document.createElement("style");
        style.textContent = "div {\n  background-color: aquamarine;\n}";
        shadowRoot.appendChild(style);
      }
    };
    _MyXElement_size_accessor_storage = /* @__PURE__ */ new WeakMap();
    _MyXElement_name_accessor_storage = /* @__PURE__ */ new WeakMap();
    _MyXElement_loading_accessor_storage = /* @__PURE__ */ new WeakMap();
    __setFunctionName(_classThis, "MyXElement");
    (() => {
      var _a2;
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a2 = _classSuper[Symbol.metadata]) !== null && _a2 !== void 0 ? _a2 : null) : void 0;
      _size_decorators = [Property()];
      _name_decorators = [Property()];
      __esDecorate(_classThis, null, _size_decorators, { kind: "accessor", name: "size", static: false, private: false, access: { has: (obj) => "size" in obj, get: (obj) => obj.size, set: (obj, value) => {
        obj.size = value;
      } }, metadata: _metadata }, _size_initializers, _size_extraInitializers);
      __esDecorate(_classThis, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: (obj) => "name" in obj, get: (obj) => obj.name, set: (obj, value) => {
        obj.name = value;
      } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
      __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      MyXElement2 = _classThis = _classDescriptor.value;
      if (_metadata)
        Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyXElement2 = _classThis;
  })();
})();
//# sourceMappingURL=xelement.js.map
