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
  function d(n3, l5) {
    for (var u5 in l5)
      n3[u5] = l5[u5];
    return n3;
  }
  function _(n3) {
    var l5 = n3.parentNode;
    l5 && l5.removeChild(n3);
  }
  function g(l5, u5, t4) {
    var i5, o4, r4, f5 = {};
    for (r4 in u5)
      "key" == r4 ? i5 = u5[r4] : "ref" == r4 ? o4 = u5[r4] : f5[r4] = u5[r4];
    if (arguments.length > 2 && (f5.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l5 && null != l5.defaultProps)
      for (r4 in l5.defaultProps)
        void 0 === f5[r4] && (f5[r4] = l5.defaultProps[r4]);
    return k(l5, f5, i5, o4, null);
  }
  function k(n3, t4, i5, o4, r4) {
    var f5 = { type: n3, props: t4, key: i5, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
    return null == r4 && null != l.vnode && l.vnode(f5), f5;
  }
  function m(n3) {
    return n3.children;
  }
  function w(n3, l5) {
    this.props = n3, this.context = l5;
  }
  function C(n3, l5) {
    if (null == l5)
      return n3.__ ? C(n3.__, n3.__i + 1) : null;
    for (var u5; l5 < n3.__k.length; l5++)
      if (null != (u5 = n3.__k[l5]) && null != u5.__e)
        return u5.__e;
    return "function" == typeof n3.type ? C(n3) : null;
  }
  function x(n3) {
    var l5, u5;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l5 = 0; l5 < n3.__k.length; l5++)
        if (null != (u5 = n3.__k[l5]) && null != u5.__e) {
          n3.__e = n3.__c.base = u5.__e;
          break;
        }
      return x(n3);
    }
  }
  function P(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !S.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(S);
  }
  function S() {
    var n3, u5, t4, o4, r4, e4, c4, s5;
    for (i.sort(f); n3 = i.shift(); )
      n3.__d && (u5 = i.length, o4 = void 0, e4 = (r4 = (t4 = n3).__v).__e, c4 = [], s5 = [], t4.__P && ((o4 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(o4), O(t4.__P, o4, r4, t4.__n, void 0 !== t4.__P.ownerSVGElement, 32 & r4.__u ? [e4] : null, c4, null == e4 ? C(r4) : e4, !!(32 & r4.__u), s5), o4.__v = r4.__v, o4.__.__k[o4.__i] = o4, j(c4, o4, s5), o4.__e != e4 && x(o4)), i.length > u5 && i.sort(f));
    S.__r = 0;
  }
  function $(n3, l5, u5, t4, i5, o4, r4, f5, e4, c4, s5) {
    var a4, p4, y3, d5, _5, g3 = t4 && t4.__k || v, k3 = l5.length;
    for (u5.__d = e4, I(u5, l5, g3), e4 = u5.__d, a4 = 0; a4 < k3; a4++)
      null != (y3 = u5.__k[a4]) && "boolean" != typeof y3 && "function" != typeof y3 && (p4 = -1 === y3.__i ? h : g3[y3.__i] || h, y3.__i = a4, O(n3, y3, p4, i5, o4, r4, f5, e4, c4, s5), d5 = y3.__e, y3.ref && p4.ref != y3.ref && (p4.ref && N(p4.ref, null, y3), s5.push(y3.ref, y3.__c || d5, y3)), null == _5 && null != d5 && (_5 = d5), 65536 & y3.__u || p4.__k === y3.__k ? (e4 && !e4.isConnected && (e4 = C(p4)), e4 = H(y3, e4, n3)) : "function" == typeof y3.type && void 0 !== y3.__d ? e4 = y3.__d : d5 && (e4 = d5.nextSibling), y3.__d = void 0, y3.__u &= -196609);
    u5.__d = e4, u5.__e = _5;
  }
  function I(n3, l5, u5) {
    var t4, i5, o4, r4, f5, e4 = l5.length, c4 = u5.length, s5 = c4, a4 = 0;
    for (n3.__k = [], t4 = 0; t4 < e4; t4++)
      r4 = t4 + a4, null != (i5 = n3.__k[t4] = null == (i5 = l5[t4]) || "boolean" == typeof i5 || "function" == typeof i5 ? null : "string" == typeof i5 || "number" == typeof i5 || "bigint" == typeof i5 || i5.constructor == String ? k(null, i5, null, null, null) : y(i5) ? k(m, { children: i5 }, null, null, null) : void 0 === i5.constructor && i5.__b > 0 ? k(i5.type, i5.props, i5.key, i5.ref ? i5.ref : null, i5.__v) : i5) ? (i5.__ = n3, i5.__b = n3.__b + 1, f5 = A(i5, u5, r4, s5), i5.__i = f5, o4 = null, -1 !== f5 && (s5--, (o4 = u5[f5]) && (o4.__u |= 131072)), null == o4 || null === o4.__v ? (-1 == f5 && a4--, "function" != typeof i5.type && (i5.__u |= 65536)) : f5 !== r4 && (f5 === r4 + 1 ? a4++ : f5 > r4 ? s5 > e4 - r4 ? a4 += f5 - r4 : a4-- : f5 < r4 ? f5 == r4 - 1 && (a4 = f5 - r4) : a4 = 0, f5 !== t4 + a4 && (i5.__u |= 65536))) : (o4 = u5[r4]) && null == o4.key && o4.__e && 0 == (131072 & o4.__u) && (o4.__e == n3.__d && (n3.__d = C(o4)), V(o4, o4, false), u5[r4] = null, s5--);
    if (s5)
      for (t4 = 0; t4 < c4; t4++)
        null != (o4 = u5[t4]) && 0 == (131072 & o4.__u) && (o4.__e == n3.__d && (n3.__d = C(o4)), V(o4, o4));
  }
  function H(n3, l5, u5) {
    var t4, i5;
    if ("function" == typeof n3.type) {
      for (t4 = n3.__k, i5 = 0; t4 && i5 < t4.length; i5++)
        t4[i5] && (t4[i5].__ = n3, l5 = H(t4[i5], l5, u5));
      return l5;
    }
    n3.__e != l5 && (u5.insertBefore(n3.__e, l5 || null), l5 = n3.__e);
    do {
      l5 = l5 && l5.nextSibling;
    } while (null != l5 && 8 === l5.nodeType);
    return l5;
  }
  function A(n3, l5, u5, t4) {
    var i5 = n3.key, o4 = n3.type, r4 = u5 - 1, f5 = u5 + 1, e4 = l5[u5];
    if (null === e4 || e4 && i5 == e4.key && o4 === e4.type && 0 == (131072 & e4.__u))
      return u5;
    if (t4 > (null != e4 && 0 == (131072 & e4.__u) ? 1 : 0))
      for (; r4 >= 0 || f5 < l5.length; ) {
        if (r4 >= 0) {
          if ((e4 = l5[r4]) && 0 == (131072 & e4.__u) && i5 == e4.key && o4 === e4.type)
            return r4;
          r4--;
        }
        if (f5 < l5.length) {
          if ((e4 = l5[f5]) && 0 == (131072 & e4.__u) && i5 == e4.key && o4 === e4.type)
            return f5;
          f5++;
        }
      }
    return -1;
  }
  function F(n3, l5, u5) {
    "-" === l5[0] ? n3.setProperty(l5, null == u5 ? "" : u5) : n3[l5] = null == u5 ? "" : "number" != typeof u5 || p.test(l5) ? u5 : u5 + "px";
  }
  function L(n3, l5, u5, t4, i5) {
    var o4;
    n:
      if ("style" === l5)
        if ("string" == typeof u5)
          n3.style.cssText = u5;
        else {
          if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4)
            for (l5 in t4)
              u5 && l5 in u5 || F(n3.style, l5, "");
          if (u5)
            for (l5 in u5)
              t4 && u5[l5] === t4[l5] || F(n3.style, l5, u5[l5]);
        }
      else if ("o" === l5[0] && "n" === l5[1])
        o4 = l5 !== (l5 = l5.replace(/(PointerCapture)$|Capture$/i, "$1")), l5 = l5.toLowerCase() in n3 || "onFocusOut" === l5 || "onFocusIn" === l5 ? l5.toLowerCase().slice(2) : l5.slice(2), n3.l || (n3.l = {}), n3.l[l5 + o4] = u5, u5 ? t4 ? u5.u = t4.u : (u5.u = e, n3.addEventListener(l5, o4 ? s : c, o4)) : n3.removeEventListener(l5, o4 ? s : c, o4);
      else {
        if (i5)
          l5 = l5.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l5 && "height" != l5 && "href" != l5 && "list" != l5 && "form" != l5 && "tabIndex" != l5 && "download" != l5 && "rowSpan" != l5 && "colSpan" != l5 && "role" != l5 && l5 in n3)
          try {
            n3[l5] = null == u5 ? "" : u5;
            break n;
          } catch (n4) {
          }
        "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l5[4] ? n3.removeAttribute(l5) : n3.setAttribute(l5, u5));
      }
  }
  function M(n3) {
    return function(u5) {
      if (this.l) {
        var t4 = this.l[u5.type + n3];
        if (null == u5.t)
          u5.t = e++;
        else if (u5.t < t4.u)
          return;
        return t4(l.event ? l.event(u5) : u5);
      }
    };
  }
  function O(n3, u5, t4, i5, o4, r4, f5, e4, c4, s5) {
    var a4, h4, v5, p4, _5, g3, k3, b2, C3, x2, P2, S2, I2, H2, T, A2 = u5.type;
    if (void 0 !== u5.constructor)
      return null;
    128 & t4.__u && (c4 = !!(32 & t4.__u), r4 = [e4 = u5.__e = t4.__e]), (a4 = l.__b) && a4(u5);
    n:
      if ("function" == typeof A2)
        try {
          if (b2 = u5.props, C3 = (a4 = A2.contextType) && i5[a4.__c], x2 = a4 ? C3 ? C3.props.value : a4.__ : i5, t4.__c ? k3 = (h4 = u5.__c = t4.__c).__ = h4.__E : ("prototype" in A2 && A2.prototype.render ? u5.__c = h4 = new A2(b2, x2) : (u5.__c = h4 = new w(b2, x2), h4.constructor = A2, h4.render = q), C3 && C3.sub(h4), h4.props = b2, h4.state || (h4.state = {}), h4.context = x2, h4.__n = i5, v5 = h4.__d = true, h4.__h = [], h4._sb = []), null == h4.__s && (h4.__s = h4.state), null != A2.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = d({}, h4.__s)), d(h4.__s, A2.getDerivedStateFromProps(b2, h4.__s))), p4 = h4.props, _5 = h4.state, h4.__v = u5, v5)
            null == A2.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
          else {
            if (null == A2.getDerivedStateFromProps && b2 !== p4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(b2, x2), !h4.__e && (null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(b2, h4.__s, x2) || u5.__v === t4.__v)) {
              for (u5.__v !== t4.__v && (h4.props = b2, h4.state = h4.__s, h4.__d = false), u5.__e = t4.__e, u5.__k = t4.__k, u5.__k.forEach(function(n4) {
                n4 && (n4.__ = u5);
              }), P2 = 0; P2 < h4._sb.length; P2++)
                h4.__h.push(h4._sb[P2]);
              h4._sb = [], h4.__h.length && f5.push(h4);
              break n;
            }
            null != h4.componentWillUpdate && h4.componentWillUpdate(b2, h4.__s, x2), null != h4.componentDidUpdate && h4.__h.push(function() {
              h4.componentDidUpdate(p4, _5, g3);
            });
          }
          if (h4.context = x2, h4.props = b2, h4.__P = n3, h4.__e = false, S2 = l.__r, I2 = 0, "prototype" in A2 && A2.prototype.render) {
            for (h4.state = h4.__s, h4.__d = false, S2 && S2(u5), a4 = h4.render(h4.props, h4.state, h4.context), H2 = 0; H2 < h4._sb.length; H2++)
              h4.__h.push(h4._sb[H2]);
            h4._sb = [];
          } else
            do {
              h4.__d = false, S2 && S2(u5), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
            } while (h4.__d && ++I2 < 25);
          h4.state = h4.__s, null != h4.getChildContext && (i5 = d(d({}, i5), h4.getChildContext())), v5 || null == h4.getSnapshotBeforeUpdate || (g3 = h4.getSnapshotBeforeUpdate(p4, _5)), $(n3, y(T = null != a4 && a4.type === m && null == a4.key ? a4.props.children : a4) ? T : [T], u5, t4, i5, o4, r4, f5, e4, c4, s5), h4.base = u5.__e, u5.__u &= -161, h4.__h.length && f5.push(h4), k3 && (h4.__E = h4.__ = null);
        } catch (n4) {
          u5.__v = null, c4 || null != r4 ? (u5.__e = e4, u5.__u |= c4 ? 160 : 32, r4[r4.indexOf(e4)] = null) : (u5.__e = t4.__e, u5.__k = t4.__k), l.__e(n4, u5, t4);
        }
      else
        null == r4 && u5.__v === t4.__v ? (u5.__k = t4.__k, u5.__e = t4.__e) : u5.__e = z(t4.__e, u5, t4, i5, o4, r4, f5, c4, s5);
    (a4 = l.diffed) && a4(u5);
  }
  function j(n3, u5, t4) {
    u5.__d = void 0;
    for (var i5 = 0; i5 < t4.length; i5++)
      N(t4[i5], t4[++i5], t4[++i5]);
    l.__c && l.__c(u5, n3), n3.some(function(u6) {
      try {
        n3 = u6.__h, u6.__h = [], n3.some(function(n4) {
          n4.call(u6);
        });
      } catch (n4) {
        l.__e(n4, u6.__v);
      }
    });
  }
  function z(l5, u5, t4, i5, o4, r4, f5, e4, c4) {
    var s5, a4, v5, p4, d5, g3, k3, b2 = t4.props, m3 = u5.props, w4 = u5.type;
    if ("svg" === w4 && (o4 = true), null != r4) {
      for (s5 = 0; s5 < r4.length; s5++)
        if ((d5 = r4[s5]) && "setAttribute" in d5 == !!w4 && (w4 ? d5.localName === w4 : 3 === d5.nodeType)) {
          l5 = d5, r4[s5] = null;
          break;
        }
    }
    if (null == l5) {
      if (null === w4)
        return document.createTextNode(m3);
      l5 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", w4) : document.createElement(w4, m3.is && m3), r4 = null, e4 = false;
    }
    if (null === w4)
      b2 === m3 || e4 && l5.data === m3 || (l5.data = m3);
    else {
      if (r4 = r4 && n.call(l5.childNodes), b2 = t4.props || h, !e4 && null != r4)
        for (b2 = {}, s5 = 0; s5 < l5.attributes.length; s5++)
          b2[(d5 = l5.attributes[s5]).name] = d5.value;
      for (s5 in b2)
        if (d5 = b2[s5], "children" == s5)
          ;
        else if ("dangerouslySetInnerHTML" == s5)
          v5 = d5;
        else if ("key" !== s5 && !(s5 in m3)) {
          if ("value" == s5 && "defaultValue" in m3 || "checked" == s5 && "defaultChecked" in m3)
            continue;
          L(l5, s5, null, d5, o4);
        }
      for (s5 in m3)
        d5 = m3[s5], "children" == s5 ? p4 = d5 : "dangerouslySetInnerHTML" == s5 ? a4 = d5 : "value" == s5 ? g3 = d5 : "checked" == s5 ? k3 = d5 : "key" === s5 || e4 && "function" != typeof d5 || b2[s5] === d5 || L(l5, s5, d5, b2[s5], o4);
      if (a4)
        e4 || v5 && (a4.__html === v5.__html || a4.__html === l5.innerHTML) || (l5.innerHTML = a4.__html), u5.__k = [];
      else if (v5 && (l5.innerHTML = ""), $(l5, y(p4) ? p4 : [p4], u5, t4, i5, o4 && "foreignObject" !== w4, r4, f5, r4 ? r4[0] : t4.__k && C(t4, 0), e4, c4), null != r4)
        for (s5 = r4.length; s5--; )
          null != r4[s5] && _(r4[s5]);
      e4 || (s5 = "value", void 0 !== g3 && (g3 !== l5[s5] || "progress" === w4 && !g3 || "option" === w4 && g3 !== b2[s5]) && L(l5, s5, g3, b2[s5], false), s5 = "checked", void 0 !== k3 && k3 !== l5[s5] && L(l5, s5, k3, b2[s5], false));
    }
    return l5;
  }
  function N(n3, u5, t4) {
    try {
      "function" == typeof n3 ? n3(u5) : n3.current = u5;
    } catch (n4) {
      l.__e(n4, t4);
    }
  }
  function V(n3, u5, t4) {
    var i5, o4;
    if (l.unmount && l.unmount(n3), (i5 = n3.ref) && (i5.current && i5.current !== n3.__e || N(i5, null, u5)), null != (i5 = n3.__c)) {
      if (i5.componentWillUnmount)
        try {
          i5.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u5);
        }
      i5.base = i5.__P = null;
    }
    if (i5 = n3.__k)
      for (o4 = 0; o4 < i5.length; o4++)
        i5[o4] && V(i5[o4], u5, t4 || "function" != typeof n3.type);
    t4 || null == n3.__e || _(n3.__e), n3.__c = n3.__ = n3.__e = n3.__d = void 0;
  }
  function q(n3, l5, u5) {
    return this.constructor(n3, u5);
  }
  function B(u5, t4, i5) {
    var o4, r4, f5, e4;
    l.__ && l.__(u5, t4), r4 = (o4 = "function" == typeof i5) ? null : i5 && i5.__k || t4.__k, f5 = [], e4 = [], O(t4, u5 = (!o4 && i5 || t4).__k = g(m, null, [u5]), r4 || h, h, void 0 !== t4.ownerSVGElement, !o4 && i5 ? [i5] : r4 ? null : t4.firstChild ? n.call(t4.childNodes) : null, f5, !o4 && i5 ? i5 : r4 ? r4.__e : t4.firstChild, o4, e4), j(f5, u5, e4);
  }
  n = v.slice, l = { __e: function(n3, l5, u5, t4) {
    for (var i5, o4, r4; l5 = l5.__; )
      if ((i5 = l5.__c) && !i5.__)
        try {
          if ((o4 = i5.constructor) && null != o4.getDerivedStateFromError && (i5.setState(o4.getDerivedStateFromError(n3)), r4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n3, t4 || {}), r4 = i5.__d), r4)
            return i5.__E = i5;
        } catch (l6) {
          n3 = l6;
        }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && null == n3.constructor;
  }, w.prototype.setState = function(n3, l5) {
    var u5;
    u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u5), this.props)), n3 && d(u5, n3), null != n3 && this.__v && (l5 && this._sb.push(l5), P(this));
  }, w.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), P(this));
  }, w.prototype.render = m, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l5) {
    return n3.__v.__b - l5.__v.__b;
  }, S.__r = 0, e = 0, c = M(false), s = M(true), a = 0;

  // ../../node_modules/.pnpm/preact@10.21.0/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var f2 = 0;
  var i2 = Array.isArray;
  function u2(e4, t4, n3, o4, i5, u5) {
    t4 || (t4 = {});
    var a4, c4, p4 = t4;
    if ("ref" in p4)
      for (c4 in p4 = {}, t4)
        "ref" == c4 ? a4 = t4[c4] : p4[c4] = t4[c4];
    var l5 = { type: e4, props: p4, key: n3, ref: a4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i5, __self: u5 };
    if ("function" == typeof e4 && (a4 = e4.defaultProps))
      for (c4 in a4)
        void 0 === p4[c4] && (p4[c4] = a4[c4]);
    return l.vnode && l.vnode(l5), l5;
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
    var u5 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n3 >= u5.__.length && u5.__.push({ __V: c2 }), u5.__[n3];
  }
  function q2(n3, r4) {
    var u5 = h2(t2++, 7);
    return C2(u5.__H, r4) ? (u5.__V = n3(), u5.i = r4, u5.__h = n3, u5.__V) : u5.__;
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
    var i5 = (r2 = n3.__c).__H;
    i5 && (u3 === r2 ? (i5.__h = [], r2.__h = [], i5.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
    })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u3 = r2;
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
      clearTimeout(u5), k2 && cancelAnimationFrame(t4), setTimeout(n3);
    }, u5 = setTimeout(r4, 100);
    k2 && (t4 = requestAnimationFrame(r4));
  }
  function z2(n3) {
    var t4 = r2, u5 = n3.__c;
    "function" == typeof u5 && (n3.__c = void 0, u5()), r2 = t4;
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
      var i5, t4 = false;
      while (void 0 !== h3) {
        var r4 = h3;
        h3 = void 0;
        f4++;
        while (void 0 !== r4) {
          var o4 = r4.o;
          r4.o = void 0;
          r4.f &= -3;
          if (!(8 & r4.f) && c3(r4))
            try {
              r4.c();
            } catch (r5) {
              if (!t4) {
                i5 = r5;
                t4 = true;
              }
            }
          r4 = o4;
        }
      }
      f4 = 0;
      s3--;
      if (t4)
        throw i5;
    } else
      s3--;
  }
  var o3 = void 0;
  var h3 = void 0;
  var s3 = 0;
  var f4 = 0;
  var v3 = 0;
  function e3(i5) {
    if (void 0 !== o3) {
      var t4 = i5.n;
      if (void 0 === t4 || t4.t !== o3) {
        t4 = { i: 0, S: i5, p: o3.s, n: void 0, t: o3, e: void 0, x: void 0, r: t4 };
        if (void 0 !== o3.s)
          o3.s.n = t4;
        o3.s = t4;
        i5.n = t4;
        if (32 & o3.f)
          i5.S(t4);
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
  function u4(i5) {
    this.v = i5;
    this.i = 0;
    this.n = void 0;
    this.t = void 0;
  }
  u4.prototype.brand = i4;
  u4.prototype.h = function() {
    return true;
  };
  u4.prototype.S = function(i5) {
    if (this.t !== i5 && void 0 === i5.e) {
      i5.x = this.t;
      if (void 0 !== this.t)
        this.t.e = i5;
      this.t = i5;
    }
  };
  u4.prototype.U = function(i5) {
    if (void 0 !== this.t) {
      var t4 = i5.e, r4 = i5.x;
      if (void 0 !== t4) {
        t4.x = r4;
        i5.e = void 0;
      }
      if (void 0 !== r4) {
        r4.e = t4;
        i5.x = void 0;
      }
      if (i5 === this.t)
        this.t = r4;
    }
  };
  u4.prototype.subscribe = function(i5) {
    var t4 = this;
    return E(function() {
      var r4 = t4.value, n3 = o3;
      o3 = void 0;
      try {
        i5(r4);
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
    var i5 = o3;
    o3 = void 0;
    try {
      return this.value;
    } finally {
      o3 = i5;
    }
  };
  Object.defineProperty(u4.prototype, "value", { get: function() {
    var i5 = e3(this);
    if (void 0 !== i5)
      i5.i = this.i;
    return this.v;
  }, set: function(i5) {
    if (i5 !== this.v) {
      if (f4 > 100)
        throw new Error("Cycle detected");
      this.v = i5;
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
  function d3(i5) {
    return new u4(i5);
  }
  function c3(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n)
      if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i)
        return true;
    return false;
  }
  function a3(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n) {
      var r4 = t4.S.n;
      if (void 0 !== r4)
        t4.r = r4;
      t4.S.n = t4;
      t4.i = -1;
      if (void 0 === t4.n) {
        i5.s = t4;
        break;
      }
    }
  }
  function l3(i5) {
    var t4 = i5.s, r4 = void 0;
    while (void 0 !== t4) {
      var o4 = t4.p;
      if (-1 === t4.i) {
        t4.S.U(t4);
        if (void 0 !== o4)
          o4.n = t4.n;
        if (void 0 !== t4.n)
          t4.n.p = o4;
      } else
        r4 = t4;
      t4.S.n = t4.r;
      if (void 0 !== t4.r)
        t4.r = void 0;
      t4 = o4;
    }
    i5.s = r4;
  }
  function y2(i5) {
    u4.call(this, void 0);
    this.x = i5;
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
    var i5 = o3;
    try {
      a3(this);
      o3 = this;
      var t4 = this.x();
      if (16 & this.f || this.v !== t4 || 0 === this.i) {
        this.v = t4;
        this.f &= -17;
        this.i++;
      }
    } catch (i6) {
      this.v = i6;
      this.f |= 16;
      this.i++;
    }
    o3 = i5;
    l3(this);
    this.f &= -2;
    return true;
  };
  y2.prototype.S = function(i5) {
    if (void 0 === this.t) {
      this.f |= 36;
      for (var t4 = this.s; void 0 !== t4; t4 = t4.n)
        t4.S.S(t4);
    }
    u4.prototype.S.call(this, i5);
  };
  y2.prototype.U = function(i5) {
    if (void 0 !== this.t) {
      u4.prototype.U.call(this, i5);
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
      for (var i5 = this.t; void 0 !== i5; i5 = i5.x)
        i5.t.N();
    }
  };
  Object.defineProperty(y2.prototype, "value", { get: function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    var i5 = e3(this);
    this.h();
    if (void 0 !== i5)
      i5.i = this.i;
    if (16 & this.f)
      throw this.v;
    return this.v;
  } });
  function w3(i5) {
    return new y2(i5);
  }
  function _2(i5) {
    var r4 = i5.u;
    i5.u = void 0;
    if ("function" == typeof r4) {
      s3++;
      var n3 = o3;
      o3 = void 0;
      try {
        r4();
      } catch (t4) {
        i5.f &= -2;
        i5.f |= 8;
        g2(i5);
        throw t4;
      } finally {
        o3 = n3;
        t3();
      }
    }
  }
  function g2(i5) {
    for (var t4 = i5.s; void 0 !== t4; t4 = t4.n)
      t4.S.U(t4);
    i5.x = void 0;
    i5.s = void 0;
    _2(i5);
  }
  function p2(i5) {
    if (o3 !== this)
      throw new Error("Out-of-order effect");
    l3(this);
    o3 = i5;
    this.f &= -2;
    if (8 & this.f)
      g2(this);
    t3();
  }
  function b(i5) {
    this.x = i5;
    this.u = void 0;
    this.s = void 0;
    this.o = void 0;
    this.f = 32;
  }
  b.prototype.c = function() {
    var i5 = this.S();
    try {
      if (8 & this.f)
        return;
      if (void 0 === this.x)
        return;
      var t4 = this.x();
      if ("function" == typeof t4)
        this.u = t4;
    } finally {
      i5();
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
    var i5 = o3;
    o3 = this;
    return p2.bind(this, i5);
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
  function E(i5) {
    var t4 = new b(i5);
    try {
      t4.c();
    } catch (i6) {
      t4.d();
      throw i6;
    }
    return t4.d.bind(t4);
  }

  // ../../node_modules/.pnpm/@preact+signals@1.2.3_preact@10.21.0/node_modules/@preact/signals/dist/signals.module.js
  var v4;
  var s4;
  function l4(n3, i5) {
    l[n3] = i5.bind(null, l[n3] || function() {
    });
  }
  function d4(n3) {
    if (s4)
      s4();
    s4 = n3 && n3.S();
  }
  function p3(n3) {
    var r4 = this, f5 = n3.data, o4 = useSignal(f5);
    o4.value = f5;
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
        var n5 = o4.value.value;
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
      var i5, t4 = r4.props;
      for (var f5 in t4)
        if ("children" !== f5) {
          var o4 = t4[f5];
          if (o4 instanceof u4) {
            if (!i5)
              r4.__np = i5 = {};
            i5[f5] = o4;
            t4[f5] = o4.peek();
          }
        }
    }
    n3(r4);
  });
  l4("__r", function(n3, r4) {
    d4();
    var i5, t4 = r4.__c;
    if (t4) {
      t4.__$f &= -2;
      if (void 0 === (i5 = t4.__$u))
        t4.__$u = i5 = function(n4) {
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
    d4(i5);
    n3(r4);
  });
  l4("__e", function(n3, r4, i5, t4) {
    d4();
    v4 = void 0;
    n3(r4, i5, t4);
  });
  l4("diffed", function(n3, r4) {
    d4();
    v4 = void 0;
    var i5;
    if ("string" == typeof r4.type && (i5 = r4.__e)) {
      var t4 = r4.__np, f5 = r4.props;
      if (t4) {
        var o4 = i5.U;
        if (o4)
          for (var e4 in o4) {
            var u5 = o4[e4];
            if (void 0 !== u5 && !(e4 in t4)) {
              u5.d();
              o4[e4] = void 0;
            }
          }
        else
          i5.U = o4 = {};
        for (var a4 in t4) {
          var c4 = o4[a4], s5 = t4[a4];
          if (void 0 === c4) {
            c4 = _4(i5, a4, s5, f5);
            o4[a4] = c4;
          } else
            c4.o(s5, f5);
        }
      }
    }
    n3(r4);
  });
  function _4(n3, r4, i5, t4) {
    var f5 = r4 in n3 && void 0 === n3.ownerSVGElement, o4 = d3(i5);
    return { o: function(n4, r5) {
      o4.value = n4;
      t4 = r5;
    }, d: E(function() {
      var i6 = o4.value.value;
      if (t4[r4] !== i6) {
        t4[r4] = i6;
        if (f5)
          n3[r4] = i6;
        else if (i6)
          n3.setAttribute(r4, i6);
        else
          n3.removeAttribute(r4);
      }
    }) };
  }
  l4("unmount", function(n3, r4) {
    if ("string" == typeof r4.type) {
      var i5 = r4.__e;
      if (i5) {
        var t4 = i5.U;
        if (t4) {
          i5.U = void 0;
          for (var f5 in t4) {
            var o4 = t4[f5];
            if (o4)
              o4.d();
          }
        }
      }
    } else {
      var e4 = r4.__c;
      if (e4) {
        var u5 = e4.__$u;
        if (u5) {
          e4.__$u = void 0;
          u5.d();
        }
      }
    }
    n3(r4);
  });
  l4("__h", function(n3, r4, i5, t4) {
    if (t4 < 3 || 9 === t4)
      r4.__$f |= 2;
    n3(r4, i5, t4);
  });
  w.prototype.shouldComponentUpdate = function(n3, r4) {
    var i5 = this.__$u;
    if (!(i5 && void 0 !== i5.s || 4 & this.__$f))
      return true;
    if (3 & this.__$f)
      return true;
    for (var t4 in r4)
      return true;
    for (var f5 in n3)
      if ("__source" !== f5 && n3[f5] !== this.props[f5])
        return true;
    for (var o4 in this.props)
      if (!(o4 in n3))
        return true;
    return false;
  };
  function useSignal(n3) {
    return q2(function() {
      return d3(n3);
    }, []);
  }

  // dist/MyEl.js
  var MyEl = ({ size }) => {
    return u2("div", { children: ["This is the size: ", size, "!!!"] });
  };

  // dist/core/globals.js
  var X_ELEMENT_PROPERTIES_KEY = "_x_element_properties";

  // dist/decorator/component.js
  function Component({ tag }) {
    return function ClassDecorator(target, ctx) {
      const className = ctx.name?.toString();
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
          B(g(App, {}), shadowRoot);
        }
        static get observedAttributes() {
          return this[Symbol.metadata]?.[X_ELEMENT_PROPERTIES_KEY] ?? [];
        }
      };
    };
  }

  // dist/core/metadata-shim.js
  Symbol.metadata ?? (Symbol.metadata = Symbol.for("Symbol.metadata"));

  // dist/decorator/property.js
  function Property(args) {
    return function Deorator(_target, context) {
      const propertyName = args?.name || context.name.toString();
      console.debug(`[@Property] Property Name: ${propertyName}`, { context });
      if (Array.isArray(context.metadata[X_ELEMENT_PROPERTIES_KEY])) {
        context.metadata[X_ELEMENT_PROPERTIES_KEY] = [...context.metadata[X_ELEMENT_PROPERTIES_KEY], propertyName];
      } else {
        context.metadata[X_ELEMENT_PROPERTIES_KEY] = [propertyName];
      }
      return function(value) {
        return value;
      };
    };
  }

  // dist/decorator/state.js
  function State(args) {
    return function Deorator(value, context) {
      const fieldName = args?.name || context.name.toString();
      let { get } = value;
      console.debug(`[@State] Name: ${fieldName}`, { value, context });
      if (context.kind !== "accessor") {
        throw new Error("@State() can only be used on accessor properties (e.g. @State accessor private myState: boolean = true;)");
      }
      return {
        get() {
          const v5 = get.call(this);
          return v5?.value;
        },
        set(val) {
          const signalValue = get.call(this);
          if (signalValue) {
            signalValue.value = val;
          }
        },
        init(initialValue) {
          const value2 = d3(initialValue);
          return value2;
        }
      };
    };
  }

  // dist/main.js
  var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f5) {
      if (f5 !== void 0 && typeof f5 !== "function")
        throw new TypeError("Function expected");
      return f5;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _5, done = false;
    for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
      var context = {};
      for (var p4 in contextIn)
        context[p4] = p4 === "access" ? {} : contextIn[p4];
      for (var p4 in contextIn.access)
        context.access[p4] = contextIn.access[p4];
      context.addInitializer = function(f5) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f5 || null));
      };
      var result = (0, decorators[i5])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
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
    for (var i5 = 0; i5 < initializers.length; i5++) {
      value = useValue ? initializers[i5].call(thisArg, value) : initializers[i5].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __setFunctionName = function(f5, name, prefix) {
    if (typeof name === "symbol")
      name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f5, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f5) {
    if (kind === "a" && !f5)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f5 : !state.has(receiver))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f5 : kind === "a" ? f5.call(receiver) : f5 ? f5.value : state.get(receiver);
  };
  var __classPrivateFieldSet = function(receiver, state, value, kind, f5) {
    if (kind === "m")
      throw new TypeError("Private method is not writable");
    if (kind === "a" && !f5)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f5 : !state.has(receiver))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f5.call(receiver, value) : f5 ? f5.value = value : state.set(receiver, value), value;
  };
  var MyXElement = (() => {
    var _MyXElement_loading_accessor_storage;
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
    let _loading_decorators;
    let _loading_initializers = [];
    let _loading_extraInitializers = [];
    var MyXElement2 = _classThis = class extends _classSuper {
      get loading() {
        return __classPrivateFieldGet(this, _MyXElement_loading_accessor_storage, "f");
      }
      set loading(value) {
        __classPrivateFieldSet(this, _MyXElement_loading_accessor_storage, value, "f");
      }
      constructor() {
        super();
        this.size = __runInitializers(this, _size_initializers, d3(""));
        _MyXElement_loading_accessor_storage.set(this, (__runInitializers(this, _size_extraInitializers), __runInitializers(this, _loading_initializers, false)));
        __runInitializers(this, _loading_extraInitializers);
      }
      attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
        this.size.value = newValue;
      }
      render() {
        return u2(m, { children: [u2("h1", { children: "hi" }), u2(MyEl, { size: this.size.value }), u2("div", { children: !this.loading ? "Loading..." : "Loaded" }), u2("button", { onClick: () => {
          console.debug("clicked");
          this.loading = !this.loading;
        }, children: "Toggle" })] });
      }
      injectStyles(shadowRoot) {
        const style = document.createElement("style");
        style.textContent = "div {\n  background-color: aquamarine;\n}";
        shadowRoot.appendChild(style);
      }
    };
    _MyXElement_loading_accessor_storage = /* @__PURE__ */ new WeakMap();
    __setFunctionName(_classThis, "MyXElement");
    (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _size_decorators = [Property()];
      _loading_decorators = [State()];
      __esDecorate(_classThis, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: (obj) => "loading" in obj, get: (obj) => obj.loading, set: (obj, value) => {
        obj.loading = value;
      } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
      __esDecorate(null, null, _size_decorators, { kind: "field", name: "size", static: false, private: false, access: { has: (obj) => "size" in obj, get: (obj) => obj.size, set: (obj, value) => {
        obj.size = value;
      } }, metadata: _metadata }, _size_initializers, _size_extraInitializers);
      __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      MyXElement2 = _classThis = _classDescriptor.value;
      if (_metadata)
        Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyXElement2 = _classThis;
  })();
})();
