!function(t) {
  var e = {};
  function n(i) {
      if (e[i])
          return e[i].exports;
      var r = e[i] = {
          i: i,
          l: !1,
          exports: {}
      };
      return t[i].call(r.exports, r, r.exports, n),
      r.l = !0,
      r.exports
  }
  n.m = t,
  n.c = e,
  n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: i
      })
  }
  ,
  n.r = function(t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
      }),
      Object.defineProperty(t, "__esModule", {
          value: !0
      })
  }
  ,
  n.t = function(t, e) {
      if (1 & e && (t = n(t)),
      8 & e)
          return t;
      if (4 & e && "object" === typeof t && t && t.__esModule)
          return t;
      var i = Object.create(null);
      if (n.r(i),
      Object.defineProperty(i, "default", {
          enumerable: !0,
          value: t
      }),
      2 & e && "string" != typeof t)
          for (var r in t)
              n.d(i, r, function(e) {
                  return t[e]
              }
              .bind(null, r));
      return i
  }
  ,
  n.n = function(t) {
      var e = t && t.__esModule ? function() {
          return t.default
      }
      : function() {
          return t
      }
      ;
      return n.d(e, "a", e),
      e
  }
  ,
  n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }
  ,
  n.p = "https://d1ruu3w8cmk6tc.cloudfront.net/assets/packs/",
  n(n.s = 1247)
}({
  103: function(t, e) {
      Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
          configurable: !0,
          writable: !0,
          value: function() {
              var t = "undefined" === typeof arguments[0] ? 1 : Number(arguments[0]) || 0
                , e = []
                , n = e.forEach
                , i = function(t, r) {
                  n.call(t, (function(t) {
                      r > 0 && Array.isArray(t) ? i(t, r - 1) : e.push(t)
                  }
                  ))
              };
              return i(this, t),
              e
          }
      })
  },
  104: function(t, e, n) {
      (function(t) {
          let e;
          e = "undefined" !== typeof window && null !== window ? window : "undefined" !== typeof self && null !== self ? self : t,
          null == e.performance && (e.performance = {
              now: ()=>Date.now()
          })
      }
      ).call(this, n(12))
  },
  12: function(t, e) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || new Function("return this")()
      } catch (i) {
          "object" === typeof window && (n = window)
      }
      t.exports = n
  },
  1247: function(t, e, n) {
      (function(t) {
          t.earcut = n(1248),
          t.JSPoly = n(1249),
          n(103),
          n(104),
          t.ClipperLib = n(357),
          n(358),
          t.EASEL = {},
          n(72),
          n(73),
          n(74),
          n(70),
          n(1250),
          n(352),
          n(353),
          n(354),
          n(355),
          n(356),
          n(59),
          n(60),
          n(61),
          n(62),
          n(45),
          n(63),
          n(57),
          n(64),
          n(65),
          n(66),
          n(67),
          n(68),
          n(69),
          n(71),
          n(58),
          n(190),
          n(191);
          const e = EASEL.taskExecutor(self);
          e.on("calculate-meshes", EASEL.toolpathOperations.calculateMeshes),
          e.on("calculate-toolpaths", EASEL.toolpathOperations.generateToolpaths),
          e.on("calculate-exploded-objects", EASEL.toolpathOperations.generateExplodedObjects),
          e.on("calculate-medial-axis", EASEL.toolpathOperations.generateMedialAxis),
          e.on("calculate-simple-shapes", EASEL.toolpathOperations.generateSimpleShapes)
      }
      ).call(this, n(12))
  },
  1248: function(t, e, n) {
      t.exports = function t(e, n, i) {
          function r(s, l) {
              if (!n[s]) {
                  if (!e[s]) {
                      if (o)
                          return o(s, !0);
                      var a = new Error("Cannot find module '" + s + "'");
                      throw a.code = "MODULE_NOT_FOUND",
                      a
                  }
                  var u = n[s] = {
                      exports: {}
                  };
                  e[s][0].call(u.exports, (function(t) {
                      var n = e[s][1][t];
                      return r(n || t)
                  }
                  ), u, u.exports, t, e, n, i)
              }
              return n[s].exports
          }
          for (var o = !1, s = 0; s < i.length; s++)
              r(i[s]);
          return r
      }({
          1: [function(t, e, n) {
              "use strict";
              function i(t, e, n) {
                  n = n || 2;
                  var i, o, l, a, u, p, c, f = e && e.length, d = f ? e[0] * n : t.length, y = r(t, 0, d, n, !0), m = [];
                  if (!y)
                      return m;
                  if (f && (y = h(t, e, y, n)),
                  t.length > 80 * n) {
                      i = l = t[0],
                      o = a = t[1];
                      for (var x = n; x < d; x += n)
                          (u = t[x]) < i && (i = u),
                          (p = t[x + 1]) < o && (o = p),
                          u > l && (l = u),
                          p > a && (a = p);
                      c = Math.max(l - i, a - o)
                  }
                  return s(y, m, n, i, o, c),
                  m
              }
              function r(t, e, n, i, r) {
                  var o, s;
                  if (r === w(t, e, n, i) > 0)
                      for (o = e; o < n; o += i)
                          s = I(o, t[o], t[o + 1], s);
                  else
                      for (o = n - i; o >= e; o -= i)
                          s = I(o, t[o], t[o + 1], s);
                  return s && P(s, s.next) && (b(s),
                  s = s.next),
                  s
              }
              function o(t, e) {
                  if (!t)
                      return t;
                  e || (e = t);
                  var n, i = t;
                  do {
                      if (n = !1,
                      i.steiner || !P(i, i.next) && 0 !== E(i.prev, i, i.next))
                          i = i.next;
                      else {
                          if (b(i),
                          (i = e = i.prev) === i.next)
                              return null;
                          n = !0
                      }
                  } while (n || i !== e);
                  return e
              }
              function s(t, e, n, i, r, h, c) {
                  if (t) {
                      !c && h && y(t, i, r, h);
                      for (var f, d, m = t; t.prev !== t.next; )
                          if (f = t.prev,
                          d = t.next,
                          h ? a(t, i, r, h) : l(t))
                              e.push(f.i / n),
                              e.push(t.i / n),
                              e.push(d.i / n),
                              b(t),
                              t = d.next,
                              m = d.next;
                          else if ((t = d) === m) {
                              c ? 1 === c ? s(t = u(t, e, n), e, n, i, r, h, 2) : 2 === c && p(t, e, n, i, r, h) : s(o(t), e, n, i, r, h, 1);
                              break
                          }
                  }
              }
              function l(t) {
                  var e = t.prev
                    , n = t
                    , i = t.next;
                  if (E(e, n, i) >= 0)
                      return !1;
                  for (var r = t.next.next; r !== t.prev; ) {
                      if (v(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && E(r.prev, r, r.next) >= 0)
                          return !1;
                      r = r.next
                  }
                  return !0
              }
              function a(t, e, n, i) {
                  var r = t.prev
                    , o = t
                    , s = t.next;
                  if (E(r, o, s) >= 0)
                      return !1;
                  for (var l = r.x < o.x ? r.x < s.x ? r.x : s.x : o.x < s.x ? o.x : s.x, a = r.y < o.y ? r.y < s.y ? r.y : s.y : o.y < s.y ? o.y : s.y, u = r.x > o.x ? r.x > s.x ? r.x : s.x : o.x > s.x ? o.x : s.x, p = r.y > o.y ? r.y > s.y ? r.y : s.y : o.y > s.y ? o.y : s.y, h = x(l, a, e, n, i), c = x(u, p, e, n, i), f = t.nextZ; f && f.z <= c; ) {
                      if (f !== t.prev && f !== t.next && v(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) && E(f.prev, f, f.next) >= 0)
                          return !1;
                      f = f.nextZ
                  }
                  for (f = t.prevZ; f && f.z >= h; ) {
                      if (f !== t.prev && f !== t.next && v(r.x, r.y, o.x, o.y, s.x, s.y, f.x, f.y) && E(f.prev, f, f.next) >= 0)
                          return !1;
                      f = f.prevZ
                  }
                  return !0
              }
              function u(t, e, n) {
                  var i = t;
                  do {
                      var r = i.prev
                        , o = i.next.next;
                      !P(r, o) && S(r, i, i.next, o) && A(r, o) && A(o, r) && (e.push(r.i / n),
                      e.push(i.i / n),
                      e.push(o.i / n),
                      b(i),
                      b(i.next),
                      i = t = o),
                      i = i.next
                  } while (i !== t);
                  return i
              }
              function p(t, e, n, i, r, l) {
                  var a = t;
                  do {
                      for (var u = a.next.next; u !== a.prev; ) {
                          if (a.i !== u.i && g(a, u)) {
                              var p = C(a, u);
                              return a = o(a, a.next),
                              p = o(p, p.next),
                              s(a, e, n, i, r, l),
                              void s(p, e, n, i, r, l)
                          }
                          u = u.next
                      }
                      a = a.next
                  } while (a !== t)
              }
              function h(t, e, n, i) {
                  var s, l, a, u = [];
                  for (s = 0,
                  l = e.length; s < l; s++)
                      (a = r(t, e[s] * i, s < l - 1 ? e[s + 1] * i : t.length, i, !1)) === a.next && (a.steiner = !0),
                      u.push(_(a));
                  for (u.sort(c),
                  s = 0; s < u.length; s++)
                      f(u[s], n),
                      n = o(n, n.next);
                  return n
              }
              function c(t, e) {
                  return t.x - e.x
              }
              function f(t, e) {
                  if (e = d(t, e)) {
                      var n = C(e, t);
                      o(n, n.next)
                  }
              }
              function d(t, e) {
                  var n, i = e, r = t.x, o = t.y, s = -1 / 0;
                  do {
                      if (o <= i.y && o >= i.next.y) {
                          var l = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                          if (l <= r && l > s) {
                              if (s = l,
                              l === r) {
                                  if (o === i.y)
                                      return i;
                                  if (o === i.next.y)
                                      return i.next
                              }
                              n = i.x < i.next.x ? i : i.next
                          }
                      }
                      i = i.next
                  } while (i !== e);
                  if (!n)
                      return null;
                  if (r === s)
                      return n.prev;
                  var a, u = n, p = n.x, h = n.y, c = 1 / 0;
                  for (i = n.next; i !== u; )
                      r >= i.x && i.x >= p && v(o < h ? r : s, o, p, h, o < h ? s : r, o, i.x, i.y) && ((a = Math.abs(o - i.y) / (r - i.x)) < c || a === c && i.x > n.x) && A(i, t) && (n = i,
                      c = a),
                      i = i.next;
                  return n
              }
              function y(t, e, n, i) {
                  var r = t;
                  do {
                      null === r.z && (r.z = x(r.x, r.y, e, n, i)),
                      r.prevZ = r.prev,
                      r.nextZ = r.next,
                      r = r.next
                  } while (r !== t);
                  r.prevZ.nextZ = null,
                  r.prevZ = null,
                  m(r)
              }
              function m(t) {
                  var e, n, i, r, o, s, l, a, u = 1;
                  do {
                      for (n = t,
                      t = null,
                      o = null,
                      s = 0; n; ) {
                          for (s++,
                          i = n,
                          l = 0,
                          e = 0; e < u && (l++,
                          i = i.nextZ); e++)
                              ;
                          for (a = u; l > 0 || a > 0 && i; )
                              0 === l ? (r = i,
                              i = i.nextZ,
                              a--) : 0 !== a && i ? n.z <= i.z ? (r = n,
                              n = n.nextZ,
                              l--) : (r = i,
                              i = i.nextZ,
                              a--) : (r = n,
                              n = n.nextZ,
                              l--),
                              o ? o.nextZ = r : t = r,
                              r.prevZ = o,
                              o = r;
                          n = i
                      }
                      o.nextZ = null,
                      u *= 2
                  } while (s > 1);
                  return t
              }
              function x(t, e, n, i, r) {
                  return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) / r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) / r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
              }
              function _(t) {
                  var e = t
                    , n = t;
                  do {
                      e.x < n.x && (n = e),
                      e = e.next
                  } while (e !== t);
                  return n
              }
              function v(t, e, n, i, r, o, s, l) {
                  return (r - s) * (e - l) - (t - s) * (o - l) >= 0 && (t - s) * (i - l) - (n - s) * (e - l) >= 0 && (n - s) * (o - l) - (r - s) * (i - l) >= 0
              }
              function g(t, e) {
                  return t.next.i !== e.i && t.prev.i !== e.i && !L(t, e) && A(t, e) && A(e, t) && T(t, e)
              }
              function E(t, e, n) {
                  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
              }
              function P(t, e) {
                  return t.x === e.x && t.y === e.y
              }
              function S(t, e, n, i) {
                  return !!(P(t, e) && P(n, i) || P(t, i) && P(n, e)) || E(t, e, n) > 0 !== E(t, e, i) > 0 && E(n, i, t) > 0 !== E(n, i, e) > 0
              }
              function L(t, e) {
                  var n = t;
                  do {
                      if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && S(n, n.next, t, e))
                          return !0;
                      n = n.next
                  } while (n !== t);
                  return !1
              }
              function A(t, e) {
                  return E(t.prev, t, t.next) < 0 ? E(t, e, t.next) >= 0 && E(t, t.prev, e) >= 0 : E(t, e, t.prev) < 0 || E(t, t.next, e) < 0
              }
              function T(t, e) {
                  var n = t
                    , i = !1
                    , r = (t.x + e.x) / 2
                    , o = (t.y + e.y) / 2;
                  do {
                      n.y > o !== n.next.y > o && r < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (i = !i),
                      n = n.next
                  } while (n !== t);
                  return i
              }
              function C(t, e) {
                  var n = new O(t.i,t.x,t.y)
                    , i = new O(e.i,e.x,e.y)
                    , r = t.next
                    , o = e.prev;
                  return t.next = e,
                  e.prev = t,
                  n.next = r,
                  r.prev = n,
                  i.next = n,
                  n.prev = i,
                  o.next = i,
                  i.prev = o,
                  i
              }
              function I(t, e, n, i) {
                  var r = new O(t,e,n);
                  return i ? (r.next = i.next,
                  r.prev = i,
                  i.next.prev = r,
                  i.next = r) : (r.prev = r,
                  r.next = r),
                  r
              }
              function b(t) {
                  t.next.prev = t.prev,
                  t.prev.next = t.next,
                  t.prevZ && (t.prevZ.nextZ = t.nextZ),
                  t.nextZ && (t.nextZ.prevZ = t.prevZ)
              }
              function O(t, e, n) {
                  this.i = t,
                  this.x = e,
                  this.y = n,
                  this.prev = null,
                  this.next = null,
                  this.z = null,
                  this.prevZ = null,
                  this.nextZ = null,
                  this.steiner = !1
              }
              function w(t, e, n, i) {
                  for (var r = 0, o = e, s = n - i; o < n; o += i)
                      r += (t[s] - t[o]) * (t[o + 1] + t[s + 1]),
                      s = o;
                  return r
              }
              e.exports = i,
              i.deviation = function(t, e, n, i) {
                  var r = e && e.length
                    , o = r ? e[0] * n : t.length
                    , s = Math.abs(w(t, 0, o, n));
                  if (r)
                      for (var l = 0, a = e.length; l < a; l++) {
                          var u = e[l] * n
                            , p = l < a - 1 ? e[l + 1] * n : t.length;
                          s -= Math.abs(w(t, u, p, n))
                      }
                  var h = 0;
                  for (l = 0; l < i.length; l += 3) {
                      var c = i[l] * n
                        , f = i[l + 1] * n
                        , d = i[l + 2] * n;
                      h += Math.abs((t[c] - t[d]) * (t[f + 1] - t[c + 1]) - (t[c] - t[f]) * (t[d + 1] - t[c + 1]))
                  }
                  return 0 === s && 0 === h ? 0 : Math.abs((h - s) / s)
              }
              ,
              i.flatten = function(t) {
                  for (var e = t[0][0].length, n = {
                      vertices: [],
                      holes: [],
                      dimensions: e
                  }, i = 0, r = 0; r < t.length; r++) {
                      for (var o = 0; o < t[r].length; o++)
                          for (var s = 0; s < e; s++)
                              n.vertices.push(t[r][o][s]);
                      r > 0 && (i += t[r - 1].length,
                      n.holes.push(i))
                  }
                  return n
              }
          }
          , {}]
      }, {}, [1])(1)
  },
  1249: function(t, e, n) {
      var i;
      i = function() {
          return function(t) {
              var e = {};
              function n(i) {
                  if (e[i])
                      return e[i].exports;
                  var r = e[i] = {
                      i: i,
                      l: !1,
                      exports: {}
                  };
                  return t[i].call(r.exports, r, r.exports, n),
                  r.l = !0,
                  r.exports
              }
              return n.m = t,
              n.c = e,
              n.d = function(t, e, i) {
                  n.o(t, e) || Object.defineProperty(t, e, {
                      enumerable: !0,
                      get: i
                  })
              }
              ,
              n.r = function(t) {
                  "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                      value: "Module"
                  }),
                  Object.defineProperty(t, "__esModule", {
                      value: !0
                  })
              }
              ,
              n.t = function(t, e) {
                  if (1 & e && (t = n(t)),
                  8 & e)
                      return t;
                  if (4 & e && "object" === typeof t && t && t.__esModule)
                      return t;
                  var i = Object.create(null);
                  if (n.r(i),
                  Object.defineProperty(i, "default", {
                      enumerable: !0,
                      value: t
                  }),
                  2 & e && "string" != typeof t)
                      for (var r in t)
                          n.d(i, r, function(e) {
                              return t[e]
                          }
                          .bind(null, r));
                  return i
              }
              ,
              n.n = function(t) {
                  var e = t && t.__esModule ? function() {
                      return t.default
                  }
                  : function() {
                      return t
                  }
                  ;
                  return n.d(e, "a", e),
                  e
              }
              ,
              n.o = function(t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e)
              }
              ,
              n.p = "",
              n(n.s = 9)
          }([function(t, e) {
              t.exports = function(t) {
                  return t.webpackPolyfill || (t.deprecate = function() {}
                  ,
                  t.paths = [],
                  t.children || (t.children = []),
                  Object.defineProperty(t, "loaded", {
                      enumerable: !0,
                      get: function() {
                          return t.l
                      }
                  }),
                  Object.defineProperty(t, "id", {
                      enumerable: !0,
                      get: function() {
                          return t.i
                      }
                  }),
                  t.webpackPolyfill = 1),
                  t
              }
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a;
                  ({EPSILON: e} = n(2)),
                  a = function(t) {
                      return t > 0 ? Math.floor(t) : Math.ceil(t)
                  }
                  ,
                  l = function(t, n, i) {
                      return null == i && (i = e),
                      Math.abs(t - n) < e
                  }
                  ,
                  i = function(t, e, n, i) {
                      return t * i - e * n
                  }
                  ,
                  o = function(t) {
                      return t > 0
                  }
                  ,
                  r = function(t) {
                      return t < 0
                  }
                  ,
                  s = function(t) {
                      return 0 === t
                  }
                  ,
                  null !== t && (t.exports = {
                      crossProduct: i,
                      nearlyEqual: l,
                      roundTowardsZero: a,
                      isPos: o,
                      isNeg: r,
                      isZero: s
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e;
                  e = function(t, e) {
                      return t >> 3 === e
                  }
                  ,
                  null !== t && (t.exports = {
                      EPSILON: 1e-5,
                      GEOMETRY_CATEGORY_POINT: 0,
                      GEOMETRY_CATEGORY_SEGMENT: 1,
                      SOURCE_CATEGORY_SINGLE_POINT: 0,
                      SOURCE_CATEGORY_SEGMENT_START_POINT: 1,
                      SOURCE_CATEGORY_SEGMENT_END_POINT: 2,
                      SOURCE_CATEGORY_INITIAL_SEGMENT: 8,
                      SOURCE_CATEGORY_REVERSE_SEGMENT: 9,
                      SOURCE_CATEGORY_GEOMETRY_SHIFT: 3,
                      SOURCE_CATEGORY_BITMASK: 31,
                      belongs: e,
                      LOW: 0,
                      HIGH: 1,
                      LEFT: 0,
                      RIGHT: 1,
                      CLOCKWISE: 0,
                      COUNTERCLOCKWISE: 1,
                      REVERSE: 0,
                      FORWARD: 1,
                      NEGATIVE: 0,
                      POSITIVE: 1,
                      HORIZONTAL: 0,
                      VERTICAL: 1,
                      WEST: 0,
                      EAST: 1,
                      SOUTH: 2,
                      NORTH: 3,
                      PROXIMAL: 2,
                      DOWN: 4,
                      UP: 5,
                      clockwise_winding: 0,
                      counterclockwise_winding: 1,
                      unknown_winding: 2,
                      IS_INVERSE: 32,
                      BITS_SHIFT: 5,
                      BITS_MASK: 31,
                      BIT_IS_LINEAR: 1,
                      BIT_IS_PRIMARY: 2
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r;
                  ({nearlyEqual: r} = n(1)),
                  e = function(t, e) {
                      return r(t.x(), e.x())
                  }
                  ,
                  i = function(t) {
                      return e(t.point0(), t.point1())
                  }
                  ,
                  null !== t && (t.exports = {
                      arePointsVertical: e,
                      isSiteEventVertical: i
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i;
                  ({nearlyEqual: i} = n(1)),
                  e = function() {
                      class t {
                          constructor(t, e) {
                              this.x = t,
                              this.y = e
                          }
                          assign(t) {
                              return this.x = t.x,
                              this.y = t.y
                          }
                          clone() {
                              return new t(this.x,this.y)
                          }
                          equals(t) {
                              return i(t.x, this.x) && i(t.y, this.y)
                          }
                          lessThan(t) {
                              return this.x < t.x || i(this.x, t.x) && this.y < t.y
                          }
                          greaterThan(t) {
                              return !lessThan(t)
                          }
                      }
                      return t.prototype.x = 0,
                      t.prototype.y = 0,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      Point: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i;
                  i = n(13).voronoi_builder,
                  e = function(t, e, n, r, o=null) {
                      var s, l, a, u, p, h, c, f, d, y;
                      for (s = new i,
                      a = 0,
                      p = t.length; a < p; a++)
                          ({x: d, y: y} = t[a]),
                          s.insert_point(d, y);
                      for (u = 0,
                      h = e.length; u < h; u++)
                          c = (f = e[u]).low(),
                          l = f.high(),
                          s.insert_segment(c.x, c.y, l.x, l.y);
                      return s.construct(n, r, o)
                  }
                  ,
                  null !== t && (t.exports = {
                      constructVoronoi: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i;
                  ({nearlyEqual: e} = n(1)),
                  i = function(t, n) {
                      return e(t.x(), n.x()) ? t.y() < n.y() : t.x() < n.x()
                  }
                  ,
                  null !== t && (t.exports = {
                      pointComparisonPredicate: i
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u;
                  ({crossProduct: e, roundTowardsZero: u, isZero: r, isNeg: i} = n(1)),
                  a = {
                      RIGHT: -1,
                      COLLINEAR: 0,
                      LEFT: 1
                  },
                  s = function(t) {
                      return r(t) ? a.COLLINEAR : i(t) ? a.RIGHT : a.LEFT
                  }
                  ,
                  l = function(t, n, i, r) {
                      return s(e(t, n, i, r))
                  }
                  ,
                  o = function(t, n, i) {
                      var r, o, l, a;
                      return r = u(t.x()) - u(n.x()),
                      o = u(n.x()) - u(i.x()),
                      l = u(t.y()) - u(n.y()),
                      a = u(n.y()) - u(i.y()),
                      s(e(r, l, o, a))
                  }
                  ,
                  null !== t && (t.exports = {
                      orientations: a,
                      orientationForXYPairs: l,
                      orientationForPoints: o
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i;
                  ({nearlyEqual: i} = n(1)),
                  e = function() {
                      class t {
                          static origin() {
                              return new t(0,0)
                          }
                          constructor(t, e) {
                              this.x_ = t,
                              this.y_ = e
                          }
                          clone() {
                              return this
                          }
                          equals(t) {
                              return i(this.x(), t.x()) && i(this.y(), t.y())
                          }
                          lessThan(t) {
                              return i(this.x(), t.x()) ? this.y() < t.y() : this.x() < t.x()
                          }
                          print() {
                              return `(${this.x()}, ${this.y()})`
                          }
                          to_json() {
                              return {
                                  x: this.x(),
                                  y: this.y()
                              }
                          }
                          x() {
                              return this.x_
                          }
                          y() {
                              return this.y_
                          }
                      }
                      return t.prototype.x_ = 0,
                      t.prototype.y_ = 0,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      Point2d: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u, p, h, c;
                  ({EPSILON: e, SOURCE_CATEGORY_SINGLE_POINT: o, SOURCE_CATEGORY_SEGMENT_START_POINT: r} = n(2)),
                  u = n(10),
                  ({Point: i} = n(4)),
                  ({Segment: s} = n(11)),
                  ({nearlyEqual: p} = n(1)),
                  ({VoronoiDiagram: l} = n(12)),
                  ({constructVoronoi: a} = n(5)),
                  n(5).construct_voronoi,
                  h = n(23).voronoi_diagnostics,
                  c = n(24).voronoi_visual_utils,
                  this.JSPoly = {
                      points_: [],
                      segments_: [],
                      colors: {
                          unclassified: 11,
                          secondary: 1,
                          outer_primary: 2,
                          inner_primary: 3,
                          hole_primary: 4
                      },
                      parabola_discretization_method: {
                          ERROR_2D: 0,
                          RADIUS: 1,
                          CENTRAL_ANGLE: 2
                      },
                      number_type: {
                          INTEGERS: 0,
                          BIG_INTEGERS: 1
                      },
                      point_in_poly: function(t, n) {
                          var i, r, o, s, l;
                          for (r = !1,
                          i = 0,
                          o = n.length - 1; i < n.length; )
                              s = n[i],
                              l = n[o],
                              s.y - t.y > e !== l.y - t.y > e && (l.x - s.x) * (t.y - s.y) / (l.y - s.y) + s.x - t.x > e && (r = !r),
                              o = i++;
                          return r
                      },
                      clear: function() {
                          return this.points_ = [],
                          this.segments_ = []
                      },
                      equals: p,
                      equal_points: function(t, e) {
                          return this.equals(t.x, e.x) && this.equals(t.y, e.y)
                      },
                      generate_points_and_segments: function(t, e) {
                          var n, r, o, l, a, u, p, h, c;
                          if (a = [],
                          c = [],
                          0 === t.length)
                              return {
                                  points: a,
                                  segments: c
                              };
                          for ((r = u = new i(t[0].x,t[0].y)).is_hole = e,
                          o = l = 1,
                          p = t.length; 1 <= p ? l < p : l > p; o = 1 <= p ? ++l : --l)
                              (n = new i(t[o].x,t[o].y)).is_hole = e,
                              (h = new s(u,n)).is_hole = e,
                              c.push(h),
                              u = n;
                          return this.equal_points(t[0], t[t.length - 1]) || ((h = new s(u,r)).is_hole = e,
                          c.push(h)),
                          {
                              points: a,
                              segments: c
                          }
                      },
                      construct_voronoi_diagram_for_rounded_data: function(t, e, n, i=null) {
                          var r, o, s, u, p;
                          for (this.clear(),
                          u = this.generate_points_and_segments(t, !1),
                          this.points_ = this.points_.concat(u.points),
                          this.segments_ = this.segments_.concat(u.segments),
                          o = 0,
                          s = e.length; o < s; o++)
                              r = e[o],
                              u = this.generate_points_and_segments(r, !0),
                              this.points_ = this.points_.concat(u.points),
                              this.segments_ = this.segments_.concat(u.segments);
                          return p = new l,
                          a(this.points_, this.segments_, p, n, i),
                          p
                      },
                      construct_voronoi_diagram: function(t, e, n=this.number_type.INTEGERS, i=null) {
                          return ({boundary: t, holes: e} = this.round_input_data(t, e)),
                          this.construct_voronoi_diagram_for_rounded_data(t, e, n, i)
                      },
                      construct_voronoi_diagram_with_edge_classification: function(t, e, n=this.number_type.INTEGERS, i=null) {
                          var r;
                          return ({boundary: t, holes: e} = this.round_input_data(t, e)),
                          r = this.construct_voronoi_diagram_for_rounded_data(t, e, n),
                          this.classify_edges(r, t, e, i),
                          r
                      },
                      create_edge_json_data_for_testing: function(t) {
                          var e, n, i, r, o, s, l;
                          for (i = [],
                          r = 0,
                          o = (l = t.edges()).length; r < o; r++)
                              n = l[r],
                              (e = {}).is_finite = n.is_finite(),
                              e.is_infinite = n.is_infinite(),
                              e.is_primary = n.is_primary(),
                              e.is_secondary = n.is_secondary(),
                              e.is_linear = n.is_linear(),
                              e.is_curved = n.is_curved(),
                              null === n.vertex0() ? e.vertex0 = null : ((s = {}).x = n.vertex0().x(),
                              s.y = n.vertex0().y(),
                              e.vertex0 = s),
                              null === n.vertex1() ? e.vertex1 = null : ((s = {}).x = n.vertex1().x(),
                              s.y = n.vertex1().y(),
                              e.vertex1 = s),
                              e.color = n.color(),
                              i.push(e);
                          return i
                      },
                      retrieve_point: function(t) {
                          var e, n;
                          return n = t.source_index(),
                          (e = t.source_category()) === o ? this.points_[n] : (n -= this.points_.length,
                          e === r ? this.segments_[n].low() : this.segments_[n].high())
                      },
                      retrieve_segment: function(t) {
                          var e;
                          return e = t.source_index() - this.points_.length,
                          this.segments_[e]
                      },
                      get_cells_angle: function(t) {
                          var e, n, i;
                          return e = function(t, e, n) {
                              var i;
                              return i = (t.x - e.x) * (n.x - e.x) + (n.y - e.y) * (t.y - e.y),
                              Math.acos(i / (Math.hypot(t.x - e.x, t.y - e.y) * Math.hypot(n.x - e.x, n.y - e.y)))
                          }
                          ,
                          t.cell().contains_point() || t.twin().cell().contains_point() ? null : (n = this.retrieve_segment(t.cell()),
                          i = this.retrieve_segment(t.twin().cell()),
                          n.low().equals(i.low()) ? e(n.high(), n.low(), i.high()) : n.high().equals(i.low()) ? e(n.low(), n.high(), i.high()) : n.low().equals(i.high()) ? e(n.high(), n.low(), i.low()) : n.high().equals(i.high()) ? e(n.low(), n.high(), i.low()) : null)
                      },
                      distance_to_point: function(t, e) {
                          return Math.hypot(t.x - e.x, t.y - e.y)
                      },
                      distance_to_segment: function(t, e) {
                          var n, i, r, o;
                          return n = e.low().x,
                          r = e.low().y,
                          i = e.high().x,
                          o = e.high().y,
                          Math.abs((o - r) * t.x - (i - n) * t.y + i * r - o * n) / Math.hypot(r - o, n - i)
                      },
                      create_output_segments: function(t, e, n, r, o, s=.1, l=this.parabola_discretization_method.ERROR_2D, a=-1) {
                          var u, p, h, f, d, y, m, x, _, v, g, E, P, S, L;
                          if ((P = []).push(new i(t.vertex0().x(),t.vertex0().y())),
                          P.push(new i(t.vertex1().x(),t.vertex1().y())),
                          t.is_curved())
                              for (m = t.cell().contains_point() ? this.retrieve_point(t.cell()) : this.retrieve_point(t.twin().cell()),
                              S = t.cell().contains_point() ? this.retrieve_segment(t.twin().cell()) : this.retrieve_segment(t.cell()),
                              l === this.parabola_discretization_method.RADIUS ? r || (new c).discretize2(m, S, s, P) : l === this.parabola_discretization_method.ERROR_2D ? r || (new c).discretize(m, S, s, P) : l === this.parabola_discretization_method.CENTRAL_ANGLE && (r || (new c).discretize_central_angle(m, S, s, P)),
                              p = 0,
                              f = P.length; p < f; p++)
                                  (E = P[p]).radius = this.distance_to_point(m, E),
                                  o && (E.sites = [{
                                      type: "point",
                                      site: {
                                          x: m.x,
                                          y: m.y
                                      }
                                  }, {
                                      type: "segment",
                                      site: {
                                          x1: S.low().x,
                                          y1: S.low().y,
                                          x2: S.high().x,
                                          y2: S.high().y
                                      }
                                  }]);
                          else if (t.cell().contains_point() && t.twin().cell().contains_point())
                              for (m = this.retrieve_point(t.cell()),
                              -1 !== a && (new c).discretize_point_point(m, S, a, P),
                              h = 0,
                              d = P.length; h < d; h++)
                                  (E = P[h]).radius = this.distance_to_point(m, E),
                                  o && (x = this.retrieve_point(t.twin().cell()),
                                  E.sites = [{
                                      type: "point",
                                      site: {
                                          x: m.x,
                                          y: m.y
                                      }
                                  }, {
                                      type: "point",
                                      site: {
                                          x: x.x,
                                          y: x.y
                                      }
                                  }]);
                          else {
                              if (t.cell().contains_point() || t.twin().cell().contains_point())
                                  return !1;
                              S = this.retrieve_segment(t.cell()),
                              P[0].radius = this.distance_to_segment(P[0], S),
                              P[1].radius = this.distance_to_segment(P[1], S),
                              o && (L = this.retrieve_segment(t.twin().cell()),
                              P[0].sites = [{
                                  type: "segment",
                                  site: {
                                      x1: S.low().x,
                                      y1: S.low().y,
                                      x2: S.high().x,
                                      y2: S.high().y
                                  }
                              }, {
                                  type: "segment",
                                  site: {
                                      x1: L.low().x,
                                      y1: L.low().y,
                                      x2: L.high().x,
                                      y2: L.high().y
                                  }
                              }],
                              P[1].sites = [{
                                  type: "segment",
                                  site: {
                                      x1: S.low().x,
                                      y1: S.low().y,
                                      x2: S.high().x,
                                      y2: S.high().y
                                  }
                              }, {
                                  type: "segment",
                                  site: {
                                      x1: L.low().x,
                                      y1: L.low().y,
                                      x2: L.high().x,
                                      y2: L.high().y
                                  }
                              }])
                          }
                          for (v = P[0],
                          u = y = 1,
                          g = P.length; 1 <= g ? y < g : y > g; u = 1 <= g ? ++y : --y)
                              _ = P[u],
                              n.push({
                                  point0: {
                                      x: v.x,
                                      y: v.y,
                                      radius: v.radius
                                  },
                                  point1: {
                                      x: _.x,
                                      y: _.y,
                                      radius: _.radius
                                  },
                                  sites: o ? v.sites : void 0
                              }),
                              v = _;
                          return !0
                      },
                      cppgen: u,
                      colorPrimaryEdges: function(t, e, n, i) {
                          var r, o, s, l;
                          for (l = [t],
                          s = 0,
                          null != n && i({
                              twinEdges: l.length,
                              iteration: s
                          }); l.length > 0 && !(null != n && s > n); ) {
                              for (o = l[0],
                              l.splice(0, 1),
                              s++,
                              null != n && i({
                                  twinEdges: l.length,
                                  iteration: s
                              }),
                              o.color(e),
                              r = o.next_primary(); r !== o && null != r && r.color() === this.colors.unclassified && (r.twin().color() === this.colors.unclassified && l.unshift(r.twin()),
                              !(null != n && s > n)); )
                                  r.color(e),
                                  r = r.next_primary(),
                                  s++,
                                  null != n && i({
                                      twinEdges: l.length,
                                      iteration: s
                                  });
                              l = l.filter((function(t) {
                                  return t.color() === JSPoly.colors.unclassified
                              }
                              ))
                          }
                          null != n && i({
                              twinEdges: l.length,
                              iteration: s
                          })
                      },
                      get_non_border_point: function(t) {
                          var e, n, i, r, o;
                          if (n = (o = function(t) {
                              return {
                                  x: t.x(),
                                  y: t.y()
                              }
                          }
                          )(t.vertex0()),
                          i = o(t.vertex1()),
                          t.cell().contains_point()) {
                              if (e = this.retrieve_point(t.cell()),
                              !this.equal_points(n, e))
                                  return n
                          } else if (r = this.retrieve_segment(t.cell()),
                          !this.equal_points(n, r.low()) && !this.equal_points(n, r.high()))
                              return n;
                          return i
                      },
                      classify_edges: function(t, e, n, i=new h([],[]), r=null, o=function() {}
                      ) {
                          var s, l, a, u, p, c, f, d, y, m, x, _, v, g, E, P;
                          for (P = [],
                          l = 0,
                          u = (E = t.edges()).length; l < u; l++)
                              (s = E[l]).is_primary() ? s.is_infinite() ? s.color(this.colors.outer_primary) : (s.color(this.colors.unclassified),
                              P.push(s)) : s.color(this.colors.secondary);
                          for (_ = [m = {
                              x: 0,
                              y: 0
                          }],
                          a = 0,
                          p = (v = [].concat([e], n)).length; a < p; a++)
                              if (0 !== (x = v[a]).length) {
                                  for (d = 0,
                                  c = x.length; d < c; d++)
                                      g = x[d],
                                      _.push(g);
                                  this.equal_points(x[0], x[x.length - 1]) || _.push(x[0]),
                                  _.push(m)
                              }
                          for (y = 0,
                          f = P.length; y < f; y++)
                              (s = P[y]).color() !== this.colors.inner_primary && (g = this.get_non_border_point(s),
                              this.point_in_poly(g, _) && (s.color(this.colors.inner_primary),
                              s.twin().color(this.colors.inner_primary)));
                          return t.edges()
                      },
                      dump: function(t, e, n="") {
                          return console.error(n + JSON.stringify({
                              boundary: t,
                              holes: e
                          }))
                      },
                      round_input_data: function(t, e) {
                          return {
                              boundary: t.map((function(t) {
                                  return {
                                      x: Math.round(t.x),
                                      y: Math.round(t.y)
                                  }
                              }
                              )),
                              holes: e.map((function(t) {
                                  return t.map((function(t) {
                                      return {
                                          x: Math.round(t.x),
                                          y: Math.round(t.y)
                                      }
                                  }
                                  ))
                              }
                              ))
                          }
                      },
                      construct_medial_axis: function(t, e, n=.1, i=this.parabola_discretization_method.CENTRAL_ANGLE, r=3 * Math.PI / 4, o=-1, s=this.number_type.INTEGERS, l={
                          no_parabola: !1,
                          show_sites: !1
                      }, a=null) {
                          var u, p, c, f, d, y, m, x, _, v, g, E, P, S, L, A, T, C, I, b, O, w;
                          for (p = new h(t,e,r,l),
                          ({no_parabola: L, show_sites: O} = l),
                          ({boundary: t, holes: e} = this.round_input_data(t, e)),
                          w = this.construct_voronoi_diagram_for_rounded_data(t, e, s, a),
                          d = this.classify_edges(w, t, e, p).filter((function(t) {
                              return t.color() === JSPoly.colors.inner_primary
                          }
                          )),
                          C = [],
                          f = new Set(d); f.size > 0; ) {
                              for (c = (m = (y = f.values()).next()).value; !m.done; ) {
                                  for (b = (_ = m.value).prev(); null != b && b.is_secondary() && b !== _; )
                                      b = b.twin().prev();
                                  if (!f.has(b)) {
                                      c = _;
                                      break
                                  }
                                  m = y.next()
                              }
                              for (S = []; f.has(c); ) {
                                  for (C.push(c),
                                  S.push(c),
                                  u = c.next(),
                                  T = c; null != u && u.is_secondary() && T !== u; )
                                      u = u.twin().next();
                                  f.delete(c),
                                  c = u
                              }
                              for (v = 0,
                              E = S.length; v < E; v++)
                                  A = S[v],
                                  f.delete(A.twin())
                          }
                          for (I = [],
                          g = 0,
                          P = (x = C.filter((function(t) {
                              var e;
                              return !(null != (e = JSPoly.get_cells_angle(t)) && e > r)
                          }
                          ))).length; g < P; g++)
                              if ((c = x[g]).color() === this.colors.inner_primary) {
                                  if (p.isInvalidPrimaryEdge(c) || p.isNaNEdge(c))
                                      return this.dump(t, e, "Medial axis generation failed: found an edge either invalid primary or values containing NaN \n"),
                                      [];
                                  if ((!this.equals(c.vertex0().x(), c.vertex1().x()) || !this.equals(c.vertex0().y(), c.vertex1().y())) && !this.create_output_segments(c, w, I, L, O, n, i, o))
                                      return this.dump(t, e, "Medial axis generation failed: invalid edge found, the edge should be either curved or linear \n"),
                                      []
                              }
                          return I
                      }
                  },
                  null !== t && (t.exports = this.JSPoly)
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e;
                  e = class {
                      constructor() {}
                      equal_points(t, e) {
                          return Math.abs(t.x - e.x) < EPSILON && Math.abs(t.y - e.y) < EPSILON
                      }
                      input_data(t) {
                          var e, n, i, r, o, s;
                          for (s = "",
                          e = n = 0,
                          o = t.length - 1; 0 <= o ? n < o : n > o; e = 0 <= o ? ++n : --n)
                              i = t[e],
                              r = t[e + 1],
                              s += `addTwoPoints(${Math.round(i.x)}, ${Math.round(i.y)}, ${Math.round(r.x)}, ${Math.round(r.y)}, points, segments);\n`;
                          return this.equal_points(t[0], t[t.length - 1]) || (i = t[t.length - 1],
                          r = t[0],
                          s += `addTwoPoints(${Math.round(i.x)}, ${Math.round(i.y)}, ${Math.round(r.x)}, ${Math.round(r.y)}, points, segments);\n`),
                          s
                      }
                      generate(t, e) {
                          var n, i, r, o;
                          for (o = "",
                          o += this.input_data(t),
                          n = 0,
                          i = e.length; n < i; n++)
                              r = e[n],
                              o += this.input_data(r);
                          return o
                      }
                  }
                  ,
                  null !== t && (t.exports = {
                      cppgen: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i;
                  ({Point: e} = n(4)),
                  i = function() {
                      class t {
                          constructor(t, e) {
                              this.lowPt = t,
                              this.highPt = e
                          }
                          assign(t) {
                              return this.lowPt = t.lowPt.clone(),
                              this.highPt = t.highPt.clone()
                          }
                          equals(t) {
                              return this.lowPt.equals(t.lowPt) && this.highPt.equals(t.hightPt)
                          }
                          low() {
                              return this.lowPt
                          }
                          high() {
                              return this.highPt
                          }
                          lessThan(t) {
                              return this.lowPt.equals(t.lowPt) ? this.highPt.lessThan(t.highPt) : this.lowPt.lessThan(t.lowPt)
                          }
                          greaterThan(t) {
                              return !lessThan(t)
                          }
                      }
                      return t.prototype.lowPt = null,
                      t.prototype.highPt = null,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      Segment: i
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u, p, h, c, f, d, y, m;
                  ({EPSILON: s, BIT_IS_LINEAR: r, BIT_IS_PRIMARY: o, BITS_MASK: e, BITS_SHIFT: i, GEOMETRY_CATEGORY_POINT: l, GEOMETRY_CATEGORY_SEGMENT: a, SOURCE_CATEGORY_BITMASK: u, belongs: d} = n(2)),
                  ({nearlyEqual: y} = n(1)),
                  p = function() {
                      class t {
                          constructor(t, e) {
                              this.source_index_ = t,
                              this.incident_edge_ = null,
                              this.color_ = e
                          }
                          contains_point() {
                              var t;
                              return t = this.source_category(),
                              d(t, l)
                          }
                          contains_segment() {
                              var t;
                              return t = this.source_category(),
                              d(t, a)
                          }
                          source_index() {
                              return this.source_index_
                          }
                          source_category() {
                              return this.color_ & u
                          }
                          is_generate() {
                              return null === this.incident_edge_
                          }
                          incident_edge(t) {
                              if (void 0 === t)
                                  return this.incident_edge_;
                              this.incident_edge_ = t
                          }
                          color(t) {
                              return void 0 !== t ? (this.color_ &= e,
                              void (this.color_ |= t << i)) : this.color_ >> i
                          }
                      }
                      return t.prototype.source_index_ = 0,
                      t.prototype.incident_edge_ = null,
                      t.prototype.color_ = 0,
                      t
                  }
                  .call(this),
                  f = function() {
                      class t {
                          constructor(t, e) {
                              this.x_ = t,
                              this.y_ = e,
                              this.incident_edge_ = null,
                              this.color_ = 0
                          }
                          x() {
                              return this.x_
                          }
                          y() {
                              return this.y_
                          }
                          is_degenerate() {
                              return null === this.incident_edge_
                          }
                          incident_edge(t) {
                              if (void 0 === t)
                                  return this.incident_edge_;
                              this.incident_edge_ = t
                          }
                          color(t) {
                              return void 0 !== t ? (this.color_ &= e,
                              void (this.color_ |= t << i)) : this.color_ >> i
                          }
                          to_json() {
                              return {
                                  x: parseFloat(this.x_.toFixed(6)),
                                  y: parseFloat(this.y_.toFixed(6))
                              }
                          }
                      }
                      return t.prototype.x_ = 0,
                      t.prototype.y_ = 0,
                      t
                  }
                  .call(this),
                  c = function() {
                      class t {
                          constructor(t, e) {
                              t && (this.color_ |= r),
                              e && (this.color_ |= o)
                          }
                          cell(t) {
                              if (void 0 === t)
                                  return this.cell_;
                              this.cell_ = t
                          }
                          vertex0(t) {
                              if (void 0 === t)
                                  return this.vertex_;
                              this.vertex_ = t
                          }
                          vertex1() {
                              return this.twin_.vertex0()
                          }
                          twin(t) {
                              if (void 0 === t)
                                  return this.twin_;
                              this.twin_ = t
                          }
                          next(t) {
                              if (void 0 === t)
                                  return this.next_;
                              this.next_ = t
                          }
                          prev(t) {
                              if (void 0 === t)
                                  return this.prev_;
                              this.prev_ = t
                          }
                          rot_next() {
                              return this.prev_.twin()
                          }
                          rot_prev() {
                              return this.twin_.next()
                          }
                          is_finite() {
                              return null != this.vertex0() && null != this.vertex1()
                          }
                          is_infinite() {
                              return null == this.vertex0() || null == this.vertex1()
                          }
                          is_linear() {
                              return (this.color_ & r) > 0
                          }
                          is_curved() {
                              return 0 === (this.color_ & r)
                          }
                          is_primary() {
                              return (this.color_ & o) > 0
                          }
                          is_secondary() {
                              return 0 === (this.color_ & o)
                          }
                          color(t) {
                              return void 0 !== t ? (this.color_ &= e,
                              void (this.color_ |= t << i)) : this.color_ >> i
                          }
                          prev_primary() {
                              var t;
                              for (t = this.prev_; null != t ? t.is_secondary() : void 0; )
                                  t = t.twin().prev();
                              if (t !== this.twin_)
                                  return t
                          }
                          next_primary() {
                              var t;
                              for (t = this.next_; null != t ? t.is_secondary() : void 0; )
                                  t = t.twin().next();
                              if (t !== this.twin_)
                                  return t
                          }
                          to_json() {
                              var t, e;
                              return t = null != this.vertex0() ? {
                                  x: parseFloat(this.vertex0().x().toFixed(6)),
                                  y: parseFloat(this.vertex0().y().toFixed(6))
                              } : null,
                              e = null != this.vertex1() ? {
                                  x: parseFloat(this.vertex1().x().toFixed(6)),
                                  y: parseFloat(this.vertex1().y().toFixed(6))
                              } : null,
                              {
                                  is_finite: this.is_finite(),
                                  is_linear: this.is_linear(),
                                  is_primary: this.is_primary(),
                                  color: this.color(),
                                  vertex0: t,
                                  vertex1: e
                              }
                          }
                      }
                      return t.prototype.cell_ = null,
                      t.prototype.vertex_ = null,
                      t.prototype.twin_ = null,
                      t.prototype.next_ = null,
                      t.prototype.prev_ = null,
                      t.prototype.color_ = 0,
                      t
                  }
                  .call(this),
                  m = function(t, e) {
                      return y(t.x(), e.x()) && y(t.y(), e.y())
                  }
                  ,
                  h = function() {
                      class t {
                          constructor() {
                              this.cells_ = [],
                              this.vertices_ = [],
                              this.edges_ = []
                          }
                          clear() {
                              return this.cells_ = [],
                              this.vertices_ = [],
                              this.edges_ = []
                          }
                          cells() {
                              return this.cells_
                          }
                          vertices() {
                              return this.vertices_
                          }
                          edges() {
                              return this.edges_
                          }
                          num_cells() {
                              return this.cells_.length
                          }
                          num_edges() {
                              return this.edges_.length
                          }
                          num_vertices() {
                              return this.vertices_.length
                          }
                          process_single_site(t) {
                              return this.cells_.push(new p(t.initial_index(),t.source_category()))
                          }
                          insert_new_edge(t, e) {
                              var n, i, r, o, s, l;
                              return s = t.sorted_index(),
                              l = e.sorted_index(),
                              r = this.is_linear_edge(t, e),
                              o = this.is_primary_edge(t, e),
                              this.edges_.push(new c(r,o)),
                              n = this.edges_[this.edges_.length - 1],
                              this.edges_.push(new c(r,o)),
                              i = this.edges_[this.edges_.length - 1],
                              0 === this.cells_.length && this.cells_.push(new p(t.initial_index(),t.source_category())),
                              this.cells_.push(new p(e.initial_index(),e.source_category())),
                              n.cell(this.cells_[s]),
                              i.cell(this.cells_[l]),
                              n.twin(i),
                              i.twin(n),
                              {
                                  first: n,
                                  second: i
                              }
                          }
                          insert_new_edge_from_previous_edge(t, e, n, i, r) {
                              var o, s, l, a, u;
                              return this.vertices_.push(new f(n.x(),n.y())),
                              u = this.vertices_[this.vertices_.length - 1],
                              i.vertex0(u),
                              r.vertex0(u),
                              o = this.is_linear_edge(t, e),
                              s = this.is_primary_edge(t, e),
                              this.edges_.push(new c(o,s)),
                              (l = this.edges_[this.edges_.length - 1]).cell(this.cells_[t.sorted_index()]),
                              this.edges_.push(new c(o,s)),
                              (a = this.edges_[this.edges_.length - 1]).cell(this.cells_[e.sorted_index()]),
                              l.twin(a),
                              a.twin(l),
                              a.vertex0(u),
                              i.prev(l),
                              l.next(i),
                              i.twin().next(r),
                              r.prev(i.twin()),
                              r.twin().next(a),
                              a.prev(r.twin()),
                              {
                                  first: l,
                                  second: a
                              }
                          }
                          build() {
                              var t, e, n, i, r, o, s, l, a, u, p, h, c, f, d, y, x, _, v, g, E, P, S, L, A, T, C;
                              for (f = 0,
                              u = a = 0,
                              v = this.edges_.length; a < v; u = a += 2)
                                  T = this.edges_[u].vertex0(),
                                  C = this.edges_[u].vertex1(),
                                  null != T && null != C && m(T, C) ? this.remove_edge(this.edges_[u]) : (u !== f && (this.edges_[f] = this.edges_[u],
                                  this.edges_[f + 1] = this.edges_[u + 1],
                                  n = this.edges_[f],
                                  i = this.edges_[f + 1],
                                  n.twin(i),
                                  i.twin(n),
                                  null != n.prev() && (n.prev().next(n),
                                  i.next().prev(i)),
                                  null != i.prev() && (n.next().prev(n),
                                  i.prev().next(i))),
                                  f += 2);
                              for (this.edges_.splice(f, this.edges_.length - f),
                              p = 0,
                              x = (g = this.edges_).length; p < x; p++)
                                  (r = g[p]).cell().incident_edge(r),
                                  null != r.vertex0() && r.vertex0().incident_edge(r);
                              if (d = 0,
                              this.vertices_.length > 0)
                                  for (u = h = 0,
                                  E = this.vertices_.length - 1; 0 <= E ? h < E : h > E; u = 0 <= E ? ++h : --h)
                                      if (null != this.vertices_[u].incident_edge()) {
                                          if (u !== d)
                                              for (this.vertices_[d] = this.vertices_[u],
                                              e = (A = this.vertices_[d]).incident_edge(); e.vertex0(A),
                                              (e = e.rot_next()) !== A.incident_edge(); )
                                                  ;
                                          ++d
                                      }
                              if (this.vertices_.splice(d, this.vertices_.length - d),
                              0 === this.vertices_.length) {
                                  if (0 !== this.edges_.length) {
                                      for (l = 0,
                                      (o = this.edges_[l]).next(o),
                                      o.prev(o),
                                      ++l,
                                      o = this.edges_[l],
                                      ++l; l <= this.edges_.length - 1; )
                                          s = this.edges_[l],
                                          ++l,
                                          o.next(s),
                                          o.prev(s),
                                          s.next(o),
                                          s.prev(o),
                                          o = this.edges_[l],
                                          ++l;
                                      return o.next(o),
                                      o.prev(o)
                                  }
                                  for (S = [],
                                  c = 0,
                                  _ = (P = this.cells_).length; c < _; c++)
                                      if (!(t = P[c]).is_degenerate()) {
                                          for (y = t.incident_edge(); null != y.prev() && (y = y.prev()) !== t.incident_edge(); )
                                              ;
                                          if (null == y.prev()) {
                                              for (L = t.incident_edge(); null != L.next(); )
                                                  L = L.next();
                                              y.prev(L),
                                              S.push(L.next(y))
                                          }
                                      }
                                  return S
                              }
                          }
                          is_primary_edge(t, e) {
                              var n, i;
                              return n = t.is_segment(),
                              i = e.is_segment(),
                              n && !i ? !t.point0().equals(e.point0()) && !t.point1().equals(e.point0()) : !(!n && i) || !e.point0().equals(t.point0()) && !e.point1().equals(t.point0())
                          }
                          is_linear_edge(t, e) {
                              return !this.is_primary_edge(t, e) || !(t.is_segment() ^ e.is_segment())
                          }
                          remove_edge(t) {
                              var e, n, i, r, o, s, l, a;
                              for (a = t.vertex0(),
                              l = t.twin().rot_next(); l !== t.twin(); )
                                  l.vertex0(a),
                                  l = l.rot_next();
                              return e = t,
                              r = t.twin(),
                              i = e.rot_prev(),
                              n = e.rot_next(),
                              s = r.rot_prev(),
                              o = r.rot_next(),
                              n.twin().next(s),
                              s.prev(n.twin()),
                              i.prev(o.twin()),
                              o.twin().next(i)
                          }
                      }
                      return t.prototype.cells_ = [],
                      t.prototype.vertices_ = [],
                      t.prototype.edges_ = [],
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      VoronoiDiagram: h
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u, p, h, c, f, d, y, m, x, _, v, g, E, P;
                  ({SOURCE_CATEGORY_SINGLE_POINT: p, SOURCE_CATEGORY_SEGMENT_START_POINT: u, SOURCE_CATEGORY_SEGMENT_END_POINT: a, SOURCE_CATEGORY_REVERSE_SEGMENT: l, SOURCE_CATEGORY_INITIAL_SEGMENT: s} = n(2)),
                  ({ordered_queue: g, ordered_map: v, list: x} = n(14)),
                  ({nodeComparisonPredicate: _} = n(15)),
                  ({pointComparisonPredicate: E} = n(6)),
                  ({isSiteEventVertical: m, arePointsVertical: c} = n(3)),
                  ({event_comparison_predicate: y, circle_formation_predicate_big: d, circle_formation_predicate: f} = n(17)),
                  ({Point2d: o} = n(8)),
                  ({SiteEvent: h} = n(19)),
                  ({CircleEvent: r} = n(20)),
                  ({BeachLineNodeKey: i} = n(21)),
                  ({BeachLineNodeData: e} = n(22)),
                  P = function() {
                      class t {
                          event_comparison(t, e) {
                              return y(e.first, t.first)
                          }
                          end_point_comparison(t, e) {
                              return E(e.first, t.first)
                          }
                          point_comparison_(t, e) {
                              return E(t, e)
                          }
                          constructor() {
                              this.index_ = 0,
                              this.circle_events_ = new g(this.event_comparison),
                              this.end_points_ = new g(this.end_point_comparison),
                              this.beach_line_ = new v(_),
                              this.site_events_ = new x
                          }
                          insert_point(t, e) {
                              return this.site_events_.push(h.event_for_point(t, e, this.index_)),
                              this.index_++
                          }
                          insert_segment(t, e, n, i) {
                              var r, s, l, a;
                              for (new o(t,e),
                              new o(n,i),
                              r = 0,
                              s = (a = h.events_for_segment(t, e, n, i, this.index_)).length; r < s; r++)
                                  l = a[r],
                                  this.site_events_.push(l);
                              return this.index_++
                          }
                          print_beachline() {
                              var t, e;
                              for (e = "beach_line: \n",
                              t = this.beach_line_.begin(); t !== this.beach_line_.end(); )
                                  e += "    ",
                                  e += t.key().print(),
                                  e += "  -  ",
                                  null != t.value() && (e += t.value().print()),
                                  e += "\n",
                                  t = t.next();
                              return e += "\n"
                          }
                          print_site_events() {
                              var t, e;
                              for (e = "site_events:\n",
                              t = this.site_events_.begin(); t !== this.site_events_.end(); )
                                  t === this.site_event_iterator_ ? e += " >> " : e += "    ",
                                  e += t.value().print(),
                                  t === this.site_event_iterator_ && (e += " << "),
                                  t = t.next(),
                                  e += "\n";
                              return e += "\n"
                          }
                          print_current_end_point_top() {
                              var t;
                              return t = "end_points(" + this.end_points_.size() + "):\n",
                              this.end_points_.size() > 0 && (t += "    ",
                              t += this.end_points_.top().first.print(),
                              t += "  -  ",
                              t += this.end_points_.top().second.key().print(),
                              t += "\n"),
                              t
                          }
                          print_circle_events() {
                              return "circle_events: \n" + this.circle_events_.print()
                          }
                          site_events_to_json() {
                              var t, e, n;
                              for (e = [],
                              n = this.site_events_.begin(); n !== this.site_events_.end(); )
                                  (t = n.value().to_json()).current = n === this.site_event_iterator_,
                                  e.push(t),
                                  n = n.next();
                              return e
                          }
                          beachline_to_json() {
                              var t, e, n;
                              if (e = [],
                              0 === this.beach_line_.size())
                                  return e;
                              for (n = this.beach_line_.begin(); n !== this.beach_line_.end(); )
                                  (t = {}).key = n.key().to_json(),
                                  t.value = null != n.value() ? n.value().to_json() : null,
                                  n = n.next(),
                                  e.push(t);
                              return e
                          }
                          output_to_json(t) {
                              var e, n, i, r, o, s, l, a, u, p;
                              for (n = [],
                              p = [],
                              i = 0,
                              o = (l = t.edges_).length; i < o; i++)
                                  e = l[i],
                                  n.push(e.to_json());
                              for (r = 0,
                              s = (a = t.vertices_).length; r < s; r++)
                                  u = a[r],
                                  p.push(u.to_json());
                              return {
                                  edges: n,
                                  vertices: p,
                                  cells: "TODO"
                              }
                          }
                          generate_iteration_json_node(t, e) {
                              return {
                                  iteration: t,
                                  beachline: this.beachline_to_json(),
                                  site_events: this.site_events_to_json(),
                                  circle_events: this.circle_events_.to_json(),
                                  end_points: this.end_points_.to_json(),
                                  diagram: this.output_to_json(e)
                              }
                          }
                          construct(t, e, n=null) {
                              var i;
                              for (this.init_sites_queue(),
                              null != n && n.push(this.generate_iteration_json_node("AFTER init_sites_queue", t)),
                              this.init_beach_line(t),
                              null != n && n.push(this.generate_iteration_json_node("AFTER init_beach_line", t)),
                              i = 0; !this.circle_events_.empty() || this.site_event_iterator_ !== this.site_events_.end(); )
                                  for (i++,
                                  this.circle_events_.empty() ? (this.process_site_event(t, e),
                                  null != n && n.push(this.generate_iteration_json_node("AFTER top process_site_event ITERATION: " + i, t))) : this.site_event_iterator_ === this.site_events_.end() ? (this.process_circle_event(t, e),
                                  null != n && n.push(this.generate_iteration_json_node("AFTER top process_circle_event ITERATION: " + i, t))) : y(this.site_event_iterator_.value(), this.circle_events_.top().first) ? (this.process_site_event(t, e),
                                  null != n && n.push(this.generate_iteration_json_node("AFTER bottom process_site_event ITERATION: " + i, t))) : (this.process_circle_event(t, e),
                                  null != n && n.push(this.generate_iteration_json_node("AFTER bottom process_circle_event ITERATION: " + i, t))); !this.circle_events_.empty() && !this.circle_events_.top().first.is_active(); )
                                      this.circle_events_.pop(),
                                      null != n && n.push(this.generate_iteration_json_node("AFTER circle_events_.pop() ITERATION: " + i, t));
                              return this.beach_line_.clear(),
                              t.build()
                          }
                          clear() {
                              return this.index_ = 0,
                              this.site_events_.clear()
                          }
                          init_sites_queue() {
                              var t, e, n, i;
                              for (this.site_events_.jsSort(y),
                              this.site_events_ = this.site_events_.uniqueWithTieBreaker((function(t, e) {
                                  return t.equals(e)
                              }
                              ), (function(t, e) {
                                  return t.initial_index_ - e.initial_index_
                              }
                              )),
                              t = e = 0,
                              n = (i = this.site_events_.toArray()).length; e < n; t = ++e)
                                  i[t].value().sorted_index(t);
                              this.site_event_iterator_ = this.site_events_.begin()
                          }
                          init_beach_line(t) {
                              var e;
                              if (!this.site_events_.empty())
                                  if (1 === this.site_events_.size())
                                      t.process_single_site(this.site_events_.begin().value()),
                                      this.site_event_iterator_ = this.site_event_iterator_.next();
                                  else {
                                      for (e = 0; this.site_event_iterator_ !== this.site_events_.end() && c(this.site_event_iterator_.value().point0(), this.site_events_.begin().value().point0()) && m(this.site_event_iterator_.value()); )
                                          this.site_event_iterator_ = this.site_event_iterator_.next(),
                                          ++e;
                                      1 === e ? this.init_beach_line_default(t) : this.init_beach_line_collinear_sites(t)
                                  }
                          }
                          init_beach_line_default(t) {
                              var e, n;
                              e = this.site_events_.begin(),
                              n = (n = this.site_events_.begin()).next(),
                              this.insert_new_arc(e.value(), e.value(), n.value(), this.beach_line_.end(), t),
                              this.site_event_iterator_ = this.site_event_iterator_.next()
                          }
                          init_beach_line_collinear_sites(t) {
                              var n, r, o, s;
                              for (r = this.site_events_.begin(),
                              o = (o = this.site_events_.begin()).next(); o !== this.site_event_iterator_; )
                                  s = new i(r.value(),o.value()),
                                  n = t.insert_new_edge(r.value(), o.value()).first,
                                  this.beach_line_.insert(s, new e(n)),
                                  r = r.next(),
                                  o = o.next()
                          }
                          deactivate_circle_event(t) {
                              null != t.circle_event() && (t.circle_event().deactivate(),
                              t.circle_event(null))
                          }
                          process_site_event(t, e) {
                              var n, r, o, s, l, a, u, p, h, c, f, d;
                              if (d = this.site_event_iterator_.value().clone(),
                              r = this.site_event_iterator_.next(),
                              d.is_segment())
                                  for (; r !== this.site_events_.end() && r.value().is_segment() && r.value().point0().equals(d.point0()); )
                                      r = r.next();
                              else
                                  for (; !this.end_points_.empty() && this.end_points_.top().first.equals(d.point0()); )
                                      n = this.end_points_.top().second,
                                      this.end_points_.pop(),
                                      this.beach_line_.erase(n);
                              for (s = new i(this.site_event_iterator_.value()),
                              a = this.beach_line_.lowerBound(s); this.site_event_iterator_ !== r; )
                                  d = this.site_event_iterator_.value().clone(),
                                  o = a,
                                  a === this.beach_line_.end() ? (h = (o = o.prev()).key().right_site(),
                                  a = this.insert_new_arc(h, h, d, a, t),
                                  this.activate_circle_event(o.key().left_site(), o.key().right_site(), d, a, e)) : a === this.beach_line_.begin() ? (h = a.key().left_site(),
                                  o = this.insert_new_arc(h, h, d, a, t),
                                  d.is_segment() && d.inverse(),
                                  this.activate_circle_event(d, a.key().left_site(), a.key().right_site(), a, e),
                                  a = o) : (f = a.key().left_site(),
                                  p = a.key().right_site(),
                                  this.deactivate_circle_event(a.value()),
                                  c = (o = o.prev()).key().right_site(),
                                  u = o.key().left_site(),
                                  l = this.insert_new_arc(c, f, d, a, t),
                                  this.activate_circle_event(u, c, d, l, e),
                                  d.is_segment() && d.inverse(),
                                  this.activate_circle_event(d, f, p, a, e),
                                  a = l),
                                  this.site_event_iterator_ = this.site_event_iterator_.next()
                          }
                          process_circle_event(t, e) {
                              var n, i, r, o, s, l, a, u, p, h;
                              r = (o = this.circle_events_.top()).first,
                              l = s = o.second,
                              u = s.key().right_site(),
                              i = s.value().edge(),
                              n = (s = s.prev()).value().edge(),
                              !(a = s.key().left_site()).is_segment() && u.is_segment() && u.point1().equals(a.point0()) && u.inverse(),
                              s.key().right_site(u),
                              s.value().edge(t.insert_new_edge_from_previous_edge(a, u, r, n, i).first),
                              this.beach_line_.erase(l),
                              l = s,
                              this.circle_events_.pop(),
                              s !== this.beach_line_.begin() && (this.deactivate_circle_event(s.value()),
                              p = (s = s.prev()).key().left_site(),
                              this.activate_circle_event(p, a, u, l, e)),
                              (l = l.next()) !== this.beach_line_.end() && (this.deactivate_circle_event(l.value()),
                              h = l.key().right_site(),
                              this.activate_circle_event(a, u, h, l, e))
                          }
                          insert_new_arc(t, n, r, o, s) {
                              var l, a, u, p;
                              return a = new i(t,r),
                              p = new i(r,n),
                              r.is_segment() && p.left_site().inverse(),
                              l = s.insert_new_edge(n, r),
                              o = this.beach_line_.insert(p, new e(l.second)),
                              r.is_segment() && ((u = new i(r,r)).right_site().inverse(),
                              o = this.beach_line_.insert(u, new e(null)),
                              this.end_points_.push({
                                  first: r.point1(),
                                  second: o
                              })),
                              o = this.beach_line_.insert(a, new e(l.first))
                          }
                          activate_circle_event(t, e, n, i, o) {
                              var s, l;
                              s = new r,
                              (o === this.number_type.INTEGERS && f(t, e, n, s) || o === this.number_type.BIG_INTEGERS && d(t, e, n, s)) && (l = this.circle_events_.push({
                                  first: s,
                                  second: i
                              }),
                              i.value().circle_event(l.first))
                          }
                          test_end_points_datastructure() {
                              var t, e, n, i, r;
                              for (t = {},
                              e = new o(2,3),
                              n = new o(3,1),
                              i = new o(2,2),
                              this.end_points_.push({
                                  first: e,
                                  second: t
                              }),
                              this.end_points_.push({
                                  first: n,
                                  second: t
                              }),
                              this.end_points_.push({
                                  first: i,
                                  second: t
                              }),
                              console.log("### test_end_points_datastructure ###"),
                              console.log("    expected: (2, 2), (2, 3), (3, 1) ordering"),
                              r = []; !this.end_points_.empty(); )
                                  console.log("    " + this.end_points_.top().first.print()),
                                  r.push(this.end_points_.pop());
                              return r
                          }
                      }
                      return t.prototype.site_events_ = null,
                      t.prototype.site_event_iterator_ = null,
                      t.prototype.end_points_ = null,
                      t.prototype.circle_events_ = null,
                      t.prototype.beach_line_ = null,
                      t.prototype.index_ = 0,
                      t.prototype.number_type = {
                          INTEGERS: 0,
                          BIG_INTEGERS: 1
                      },
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      voronoi_builder: P
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, n, i, r, o, s, l, a, u;
                  o = function() {
                      class t {
                          constructor(t, e=null) {
                              this._owningList = t,
                              this._value = e
                          }
                          next(t) {
                              return void 0 !== t ? (this._next = t,
                              this) : this._next
                          }
                          prev(t) {
                              return void 0 !== t ? (this._prev = t,
                              this) : this._prev
                          }
                          owningList(t) {
                              return void 0 !== t ? (this._owningList = t,
                              this) : this._owningList
                          }
                          isFirst() {
                              return null == this._prev
                          }
                          value(t) {
                              return void 0 !== t ? (this._value = t,
                              this) : this._value
                          }
                          clearConnections() {
                              return this._prev = null,
                              this._next = null,
                              !0
                          }
                      }
                      return t.prototype.attr = [],
                      t.prototype._owningList = null,
                      t.prototype._prev = null,
                      t.prototype._next = null,
                      t.prototype._value = null,
                      t
                  }
                  .call(this),
                  r = function() {
                      class t {
                          constructor(t, e, n) {
                              var i, r, s, l;
                              if (null == t)
                                  return this._last = new o(this),
                                  this;
                              if (t instanceof Array) {
                                  for (this._last = new o(this),
                                  i = r = s = null != e ? e : 0,
                                  l = null != n ? n : t.length; s <= l ? r < l : r > l; i = s <= l ? ++r : --r)
                                      this.push(t[i]);
                                  return this
                              }
                              throw new Error("TODO: Implement create for these parameters")
                          }
                          swap(t, e) {
                              var n, i, r, o;
                              if (!this.contains(t) || !this.contains(e))
                                  throw new Error("items should belong to this list");
                              if (t === this.end() || e === this.end())
                                  throw new Error("swapping reserved @end item is not allowed");
                              i = t.prev(),
                              n = t.next(),
                              o = e.prev(),
                              r = e.next(),
                              t === o && e === n ? (t.prev(e),
                              t.next(r),
                              e.next(t),
                              e.prev(i),
                              null != i && i.next(e),
                              null != r && r.prev(t)) : t === r && e === i ? (t.next(e),
                              t.prev(o),
                              e.prev(t),
                              e.next(n),
                              null != o && o.next(t),
                              null != n && n.prev(e)) : (t.prev(o),
                              e.next(n),
                              t.next(r),
                              e.prev(i),
                              null != i && i.next(e),
                              null != n && n.prev(e),
                              null != r && r.prev(t),
                              null != o && o.next(t)),
                              null === t.prev() && (this._first = t),
                              null === e.prev() && (this._first = e)
                          }
                          sort(t) {
                              var e, n, i;
                              if (null != (e = this.begin()) && null != e.next())
                                  for (; e !== this.end().prev(); ) {
                                      for (n = e.next(); n !== this.end(); )
                                          t(e.value(), n.value()) ? n = n.next() : (i = n.next(),
                                          this.swap(e, n),
                                          e = n,
                                          n = i);
                                      e = e.next()
                                  }
                          }
                          jsSort(t) {
                              var e, n, i, r, o, s, l;
                              if (null != this._first && null != this._first.next()) {
                                  for (o = function(e, n) {
                                      return t(e.value(), n.value()) ? -1 : 1
                                  }
                                  ,
                                  (e = this.toArray()).sort(o),
                                  this._first = e[0],
                                  s = e[0],
                                  n = e[0],
                                  i = r = 1,
                                  l = e.length; 1 <= l ? r < l : r > l; i = 1 <= l ? ++r : --r)
                                      n = e[i],
                                      s._next = n,
                                      n._prev = s,
                                      s = n;
                                  n._next = this._last,
                                  this._last._prev = n
                              }
                          }
                          print() {
                              var t, e;
                              for (t = this.begin(),
                              e = "["; t !== this.end(); )
                                  e += JSON.stringify(t.value()),
                                  e += (t = t.next()) !== this.end() ? ", \n" : "\n";
                              e += "]",
                              console.log(e)
                          }
                          to_json() {
                              return {
                                  TODO: "list"
                              }
                          }
                          unique(e) {
                              var n, i, r, o;
                              if (0 === this._length)
                                  return null;
                              for (r = new t,
                              o = new t,
                              r.push(this.end().prev().value()),
                              i = this.end().prev().value(),
                              n = this.end().prev().prev(); null !== n; )
                                  e(i, n.value()) || (r.push(n.value()),
                                  i = n.value()),
                                  n = n.prev();
                              for (n = r.end().prev(); null !== n; )
                                  o.push(n.value()),
                                  n = n.prev();
                              return o
                          }
                          uniqueWithTieBreaker(e, n) {
                              var i, r, o, s;
                              if (0 === this._length)
                                  return null;
                              for (s = new t,
                              r = this._first.value(),
                              o = [this._first.value()],
                              i = this._first.next(); i !== this._last; )
                                  e(r, i.value()) ? o.push(i.value()) : (s.push(o.sort(n)[0]),
                                  o = [r = i.value()]),
                                  i = i.next();
                              return s.push(o.sort(n)[0]),
                              s
                          }
                          clear() {
                              return this._first = null,
                              this._length = 0
                          }
                          contains(t) {
                              return null != t && t.owningList() === this
                          }
                          erase(t) {
                              var e, n;
                              if (null != t && !this.contains(t))
                                  throw new Error("item is null or not part of this list");
                              return n = t.prev(),
                              null != (e = t.next()) && e.prev(n),
                              null != n && n.next(e),
                              null == n && (this._first = e),
                              t.clearConnections(),
                              t.owningList(null),
                              this._length--,
                              null
                          }
                          insert(t, e) {
                              var n, i;
                              if (null != t && !this.contains(t))
                                  throw new Error("item1 is null or not part of this list");
                              return e instanceof o ? (i = this.end().prev(),
                              n = this.end(),
                              null != t && (i = t.prev(),
                              n = t),
                              null != e && (e.next(n),
                              e.prev(i),
                              null != n && n.prev(e),
                              null != i && i.next(e),
                              null == i && (this._first = e),
                              this._length++),
                              e) : this.insert(t, new o(this,e))
                          }
                          push(t) {
                              return this.insert(null, t)
                          }
                          begin() {
                              return this._first
                          }
                          beginValue() {
                              if (null != this._first)
                                  return this._first.value();
                              throw new Error("List is empty")
                          }
                          end() {
                              return this._last
                          }
                          size() {
                              return this._length
                          }
                          empty() {
                              return this._length <= 0
                          }
                          concat(t) {
                              throw new Error("List concat is not implemented")
                          }
                          at(t) {
                              var e, n;
                              for (n = this.begin(),
                              e = 0; n !== this.end && e < this._length; ) {
                                  if (e === t)
                                      return n;
                                  e++,
                                  n = n.next()
                              }
                              throw new Error("Index out of bound")
                          }
                          toArray() {
                              var t, e;
                              for (t = [],
                              e = this.begin(); e !== this.end(); )
                                  t.push(e),
                                  e = e.next();
                              return t
                          }
                      }
                      return t.prototype._first = null,
                      t.prototype._last = null,
                      t.prototype._length = 0,
                      t
                  }
                  .call(this),
                  e = class {
                      constructor(t) {
                          var e;
                          if (null == (null != t ? t.strategy : void 0))
                              throw "Must pass options.strategy, a strategy";
                          if (null == (null != t ? t.comparator : void 0))
                              throw "Must pass options.comparator, a comparator";
                          this.priv = new t.strategy(t),
                          this.length = (null != t && null != (e = t.initialValues) ? e.length : void 0) || 0
                      }
                      queue(t) {
                          this.length++,
                          this.priv.queue(t)
                      }
                      dequeue(t) {
                          if (!this.length)
                              throw "Empty queue";
                          return this.length--,
                          this.priv.dequeue()
                      }
                      peek(t) {
                          if (!this.length)
                              throw "Empty queue";
                          return this.priv.peek()
                      }
                      clear() {
                          return this.length = 0,
                          this.priv.clear()
                      }
                      empty() {
                          return 0 === this.length
                      }
                      print() {
                          return this.priv.print()
                      }
                      to_json() {
                          return this.priv.to_json()
                      }
                  }
                  ,
                  i = function(t, e, n) {
                      var i, r, o;
                      for (r = 0,
                      i = t.length; r < i; )
                          n(t[o = r + i >>> 1], e) ? r = o + 1 : i = o;
                      return r
                  }
                  ,
                  n = class {
                      constructor(t) {
                          var e;
                          this.options = t,
                          this.comparator = this.options.comparator,
                          this.data = (null != (e = this.options.initialValues) ? e.slice(0) : void 0) || [],
                          this.data.sort(this.comparator).reverse()
                      }
                      queue(t) {
                          var e;
                          e = i(this.data, t, this.comparator),
                          this.data.splice(e, 0, t)
                      }
                      dequeue() {
                          return this.data.pop()
                      }
                      peek() {
                          return this.data[this.data.length - 1]
                      }
                      clear() {
                          this.data.length = 0
                      }
                      print() {
                          var t, e;
                          for (t = this.data.length - 1,
                          e = ""; t >= 0; )
                              null != this.data[t].value && null != this.data[t].value().first && null != this.data[t].value().first.print && (e += this.data[t].value().first.print() + "\n"),
                              t--;
                          return e
                      }
                      to_json() {
                          var t, e;
                          for (e = [],
                          t = this.data.length - 1; t >= 0; )
                              null != this.data[t].value && null != this.data[t].value().first && null != this.data[t].value().first.to_json && e.push(this.data[t].value().first.to_json()),
                              t--;
                          return e
                      }
                  }
                  ,
                  u = class extends e {
                      constructor(t) {
                          t || (t = {}),
                          t.strategy || (t.strategy = n),
                          t.comparator || (t.comparator = function(t, e) {
                              return (t || 0) - (e || 0)
                          }
                          ),
                          super(t)
                      }
                  }
                  ,
                  a = function() {
                      class t {
                          constructor(t) {
                              if (this.c_list_ = new r,
                              this.c_ = new u({
                                  comparator: function(e, n) {
                                      return t(e.value(), n.value())
                                  }
                              }),
                              null == t)
                                  throw "comparator is not provided for ordered queue"
                          }
                          empty() {
                              return this.c_.empty()
                          }
                          top() {
                              return this.c_.peek().value()
                          }
                          pop() {
                              var t;
                              return t = this.c_.peek(),
                              this.c_.dequeue(),
                              this.c_list_.erase(t)
                          }
                          push(t) {
                              return this.c_list_.push(t),
                              this.c_.queue(this.c_list_.end().prev()),
                              this.c_list_.end().prev().value()
                          }
                          clear() {
                              return this.c_.clear(),
                              this.c_list_.clear()
                          }
                          size() {
                              return this.c_list_.size()
                          }
                          print() {
                              return this.c_.print()
                          }
                          to_json() {
                              return this.c_.to_json()
                          }
                      }
                      return t.prototype.c_list_ = null,
                      t.prototype.c_ = null,
                      t
                  }
                  .call(this),
                  l = function() {
                      class t {
                          constructor(t, e=null, n=null) {
                              this._owningMap = t,
                              this._key = e,
                              this._value = n
                          }
                          next(t) {
                              return void 0 !== t ? (this._next = t,
                              this) : this._next
                          }
                          prev(t) {
                              return void 0 !== t ? (this._prev = t,
                              this) : this._prev
                          }
                          owningMap(t) {
                              return void 0 !== t ? (this._owningMap = t,
                              this) : this._owningMap
                          }
                          isFirst() {
                              return null == this._prev
                          }
                          key(t) {
                              return void 0 !== t ? (this._key = t,
                              this) : this._key
                          }
                          value(t) {
                              return void 0 !== t ? (this._value = t,
                              this) : this._value
                          }
                          clearConnections() {
                              return this._prev = null,
                              this._next = null,
                              !0
                          }
                      }
                      return t.prototype.attr = [],
                      t.prototype._owningMap = null,
                      t.prototype._prev = null,
                      t.prototype._next = null,
                      t.prototype._key = null,
                      t.prototype._value = null,
                      t
                  }
                  .call(this),
                  s = function() {
                      class t {
                          constructor(t) {
                              if (this._comparator = t,
                              null == t)
                                  throw new Error("comparator should be defined for the map");
                              this._last = new l(this)
                          }
                          insertBefore(t, e) {
                              var n, i;
                              return i = this._last.prev(),
                              n = this._last,
                              null != t && (i = t.prev(),
                              n = t),
                              e.next(n),
                              e.prev(i),
                              null != n && n.prev(e),
                              null != i && i.next(e),
                              null == i && (this._first = e),
                              this._length++,
                              e
                          }
                          insert(t, e) {
                              var n, i, r, o;
                              if (t instanceof l) {
                                  for (i = t,
                                  n = this.begin(); n !== this.end() && null !== n; ) {
                                      if (i.key() === n.key())
                                          return n.value(i.value()),
                                          n;
                                      if (this._comparator(i.key(), n.key()))
                                          return this.insertBefore(n, i);
                                      n = n.next()
                                  }
                                  return this.insertBefore(null, i)
                              }
                              return r = t,
                              o = e,
                              this.insert(new l(this,r,o))
                          }
                          lowerBound(t) {
                              var e;
                              for (e = this.begin(); e !== this.end(); ) {
                                  if (!this._comparator(e.key(), t))
                                      return e;
                                  e = e.next()
                              }
                              return this.end()
                          }
                          swap(t, e) {
                              var n, i, r, o;
                              if (!this.contains(t) || !this.contains(e))
                                  throw new Error("items should belong to this list");
                              if (t === this.end() || e === this.end())
                                  throw new Error("swapping reserved @end item is not allowed");
                              i = t.prev(),
                              n = t.next(),
                              o = e.prev(),
                              r = e.next(),
                              t === o && e === n ? (t.prev(e),
                              t.next(r),
                              e.next(t),
                              e.prev(i),
                              null != i && i.next(e),
                              null != r && r.prev(t)) : t === r && e === i ? (t.next(e),
                              t.prev(o),
                              e.prev(t),
                              e.next(n),
                              null != o && o.next(t),
                              null != n && n.prev(e)) : (t.prev(o),
                              e.next(n),
                              t.next(r),
                              e.prev(i),
                              null != i && i.next(e),
                              null != n && n.prev(e),
                              null != r && r.prev(t),
                              null != o && o.next(t)),
                              null === t.prev() && (this._first = t),
                              null === e.prev() && (this._first = e)
                          }
                          print() {
                              var t, e;
                              for (t = this.begin(),
                              e = "as is: ["; t !== this.end(); )
                                  e += JSON.stringify(t.key()),
                                  e += (t = t.next()) !== this.end() ? ", " : "";
                              for (e += "] reverse: [",
                              t = this.end().prev(); null != t; )
                                  e += JSON.stringify(t.key()),
                                  e += null != (t = t.prev()) ? ", " : "";
                              e += "]",
                              console.log(e)
                          }
                          clear() {
                              return this._first = null,
                              this._last.prev(null),
                              this._length = 0
                          }
                          contains(t) {
                              return null != t && t.owningMap() === this
                          }
                          erase(t) {
                              var e, n;
                              if (null != t && !this.contains(t))
                                  throw new Error("item is null or not part of this list");
                              return n = t.prev(),
                              null != (e = t.next()) && e.prev(n),
                              null != n && n.next(e),
                              null == n && (this._first = e),
                              t.clearConnections(),
                              t.owningMap(null),
                              this._length--,
                              null
                          }
                          begin() {
                              return this._first
                          }
                          end() {
                              return this._last
                          }
                          size() {
                              return this._length
                          }
                          empty() {
                              return this._length <= 0
                          }
                          at(t) {
                              var e, n;
                              for (n = this.begin(),
                              e = 0; n !== this.end() && e < this._length; ) {
                                  if (e === t)
                                      return n;
                                  e++,
                                  n = n.next()
                              }
                              throw new Error("Index out of bound")
                          }
                      }
                      return t.prototype._first = null,
                      t.prototype._last = null,
                      t.prototype._length = 0,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      list: r,
                      ordered_queue: a,
                      ordered_map: s,
                      list_item: o
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s;
                  ({isSiteEventVertical: i} = n(3)),
                  ({pointComparisonPredicate: s} = n(6)),
                  ({distancePredicate: e} = n(16)),
                  ({nearlyEqual: r} = n(1)),
                  o = function(t, n) {
                      var o, l, a, u, p, h, c, f, d;
                      return o = function(t) {
                          return s(t.point0(), t.point1()) ? t.point0() : t.point1()
                      }
                      ,
                      a = function(t, e=!0) {
                          return t.left_site().sorted_index() === t.right_site().sorted_index() ? {
                              yValue: t.left_site().y0(),
                              siteIndexComparison: 0
                          } : t.left_site().sorted_index() > t.right_site().sorted_index() ? !e && t.left_site().is_segment() && i(t.left_site()) ? {
                              yValue: t.left_site().y0(),
                              siteIndexComparison: 1
                          } : {
                              yValue: t.left_site().y1(),
                              siteIndexComparison: 1
                          } : {
                              yValue: t.right_site().y0(),
                              siteIndexComparison: -1
                          }
                      }
                      ,
                      h = (l = function(t) {
                          return t.left_site().sorted_index() > t.right_site().sorted_index() ? t.left_site() : t.right_site()
                      }
                      )(t),
                      c = l(n),
                      u = o(h),
                      p = o(c),
                      r(u.x(), p.x()) ? h.sorted_index() === c.sorted_index() ? (f = a(t),
                      d = a(n),
                      f.yValue < d.yValue || f.yValue === d.yValue && f.siteIndexComparison < d.siteIndexComparison) : h.sorted_index() < c.sorted_index() ? (f = a(t, !1),
                      d = a(n, !0),
                      f.yValue !== d.yValue ? f.yValue < d.yValue : !h.is_segment() && f.siteIndexComparison < 0) : (f = a(t, !0),
                      d = a(n, !1),
                      f.yValue !== d.yValue ? f.yValue < d.yValue : !!c.is_segment() || d.siteIndexComparison > 0) : u.x() < p.x() ? e(t.left_site(), t.right_site(), p) : u.x() > p.x() ? !e(n.left_site(), n.right_site(), u) : void 0
                  }
                  ,
                  null !== t && (t.exports = {
                      nodeComparisonPredicate: o
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u, p, h, c, f, d, y, m, x;
                  ({roundTowardsZero: x, nearlyEqual: f, isNeg: p, crossProduct: e} = n(1)),
                  ({isSiteEventVertical: h} = n(3)),
                  ({orientationForPoints: d, orientationForXYPairs: y, orientations: m} = n(7)),
                  c = {
                      LESS: -1,
                      UNDEFINED: 0,
                      MORE: 1
                  },
                  i = function(t, e, n) {
                      return t.is_segment() ? e.is_segment() ? s(t, e, n) : r(e, t, n, !0) : e.is_segment() ? r(t, e, n, !1) : o(t, e, n)
                  }
                  ,
                  o = function(t, e, n) {
                      var i, r;
                      if (i = t.point0(),
                      r = e.point0(),
                      i.x() > r.x()) {
                          if (n.y() <= i.y())
                              return !1
                      } else {
                          if (!(i.x() < r.x()))
                              return i.y() + r.y() < 2 * n.y();
                          if (n.y() >= r.y())
                              return !0
                      }
                      return a(t, n) < a(e, n)
                  }
                  ,
                  r = function(t, e, n, i) {
                      var r;
                      return (r = l(t, e, n, i)) !== c.UNDEFINED ? r === c.LESS : 1 === (i ^ a(t, n) < u(e, n))
                  }
                  ,
                  s = function(t, e, n) {
                      return t.sorted_index() === e.sorted_index() ? d(t.point0(), t.point1(), n) === m.LEFT : u(t, n) < u(e, n)
                  }
                  ,
                  a = function(t, e) {
                      var n, i;
                      return ((n = t.x() - e.x()) * n + (i = t.y() - e.y()) * i) / (2 * n)
                  }
                  ,
                  u = function(t, n) {
                      var i, r, o, s, l, a, u, c, f;
                      return h(t) ? (t.x() - n.x()) / 2 : (a = t.point0(),
                      i = (u = t.point1()).x() - a.x(),
                      r = u.y() - a.y(),
                      o = Math.sqrt(i * i + r * r),
                      o = p(r) ? (o - r) / (i * i) : 1 / (r + o),
                      c = x(u.x()) - x(a.x()),
                      f = x(u.y()) - x(a.y()),
                      s = x(n.x()) - x(a.x()),
                      l = x(n.y()) - x(a.y()),
                      o * e(c, f, s, l))
                  }
                  ,
                  l = function(t, e, n, i) {
                      var r, o, s, l, a, u, p, _, v;
                      return v = t.point0(),
                      _ = e.point0(),
                      p = e.point1(),
                      d(_, p, n) !== m.RIGHT ? e.is_inverse() ? c.MORE : c.LESS : (s = n.x() - v.x(),
                      l = n.y() - v.y(),
                      r = p.x() - _.x(),
                      o = p.y() - _.y(),
                      h(e) ? n.y() < v.y() && !i ? c.MORE : n.y() > v.y() && i ? c.LESS : c.UNDEFINED : y(x(p.x()) - x(_.x()), x(p.y()) - x(_.y()), x(n.x()) - x(v.x()), x(n.y()) - x(v.y())) === m.LEFT ? e.is_inverse() ? i ? c.UNDEFINED : c.MORE : i ? c.LESS : c.UNDEFINED : f(a = r * (l + s) * (l - s), u = 2 * o * s * l) ? c.UNDEFINED : a > u ^ i ? i ? c.LESS : c.MORE : c.UNDEFINED)
                  }
                  ,
                  null !== t && (t.exports = {
                      distancePredicate: i
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u, p, h, c, f, d, y, m, x, _, v, g, E, P, S, L, A, T;
                  ({EPSILON: r} = n(2)),
                  ({BigIntegerFromInt: i, BigInteger: e} = n(18)),
                  ({isSiteEventVertical: y} = n(3)),
                  ({roundTowardsZero: g, isPos: d, isNeg: c, isZero: m} = n(1)),
                  ({orientationForPoints: _, orientations: v} = n(7)),
                  T = function(t) {
                      return g(t)
                  }
                  ,
                  x = function(t) {
                      return 0 === t.compareTo(e.ZERO)
                  }
                  ,
                  f = function(t) {
                      return t.compareTo(e.ZERO) < 0
                  }
                  ,
                  h = Math.sqrt,
                  p = function(t, e) {
                      if ("site_event" === t.eventType() && "site_event" === e.eventType())
                          return Math.abs(t.x0() - e.x0()) > r ? t.x0() < e.x0() : t.is_segment() ? y(e) ? !!y(t) && t.y0() < e.y0() && Math.abs(t.y0() - e.y0()) > r : !!y(t) || (Math.abs(t.y0() - e.y0()) > r ? t.y0() < e.y0() : _(t.point1(), t.point0(), e.point1()) === v.LEFT) : e.is_segment() ? !y(e) || t.y0() < e.y0() || Math.abs(t.y0() - e.y0()) < r : t.y0() < e.y0() && Math.abs(t.y0() - e.y0()) > r;
                      if ("site_event" === t.eventType() && "circle_event" === e.eventType())
                          return t.x0() < e.lower_x() && Math.abs(t.x0() - e.lower_x()) > r;
                      if ("circle_event" === t.eventType() && "site_event" === e.eventType())
                          return t.lower_x() < e.x0() && Math.abs(t.lower_x() - e.x0()) > r;
                      if ("circle_event" === t.eventType() && "circle_event" === e.eventType())
                          return Math.abs(t.lower_x() - e.lower_x()) > r ? t.lower_x() < e.lower_x() : t.y() < e.y() && Math.abs(t.y() - e.y()) > r;
                      throw new Error("event_comparison_predicate should never reach here!")
                  }
                  ,
                  o = {
                      ppp: function(t, e, n) {
                          return _(t.point0(), e.point0(), n.point0()) === v.RIGHT
                      },
                      pps: function(t, e, n, i) {
                          var r, o;
                          if (2 === i)
                              return !n.point0().equals(t.point0()) || !n.point1().equals(e.point0());
                          if (r = _(t.point0(), e.point0(), n.point0()),
                          o = _(t.point0(), e.point0(), n.point1()),
                          1 === i && t.x0() >= e.x0()) {
                              if (r !== v.RIGHT)
                                  return !1
                          } else if (3 === i && e.x0() >= t.x0()) {
                              if (o !== v.RIGHT)
                                  return !1
                          } else if (r !== v.RIGHT && o !== v.RIGHT)
                              return !1;
                          return !0
                      },
                      pss: function(t, e, n, i) {
                          if (e.sorted_index() === n.sorted_index())
                              return !1;
                          if (2 === i) {
                              if (!e.is_inverse() && n.is_inverse())
                                  return !1;
                              if (e.is_inverse() === n.is_inverse() && _(e.point0(), t.point0(), n.point1()) !== v.RIGHT)
                                  return !1
                          }
                          return !0
                      },
                      sss: function(t, e, n) {
                          return t.sorted_index() !== e.sorted_index() && e.sorted_index() !== n.sorted_index()
                      }
                  },
                  E = {
                      eval1: function(t, e) {
                          return t instanceof Array ? t[0] * Math.sqrt(e[0]) : t * Math.sqrt(e)
                      },
                      eval2: function(t, e, n, i) {
                          return t instanceof Array ? E.eval2(t[0], e[0], t[1], e[1]) : E.eval1(t, e) + E.eval1(n, i)
                      },
                      eval3: function(t, e, n, i, r, o) {
                          return t instanceof Array ? E.eval3(t[0], e[0], t[1], e[1], t[2], e[2]) : E.eval2(t, e, n, i) + E.eval1(r, o)
                      },
                      eval4: function(t, e, n, i, r, o, s, l) {
                          return t instanceof Array ? E.eval4(t[0], e[0], t[1], e[1], t[2], e[2], t[3], e[3]) : E.eval2(t, e, n, i) + E.eval2(r, o, s, l)
                      }
                  },
                  P = {
                      eval1: function(t, e) {
                          var n, i, r, o;
                          return n = t,
                          r = e,
                          t instanceof Array && (n = t[0],
                          r = e[0]),
                          i = n.toDouble(),
                          o = r.toDouble(),
                          i * Math.sqrt(o)
                      },
                      eval2: function(t, e, n, i) {
                          var r, o;
                          return t instanceof Array ? P.eval2(t[0], e[0], t[1], e[1]) : (r = P.eval1(t, e),
                          o = P.eval1(n, i),
                          !c(r) && !c(o) || !d(r) && !d(o) ? r + o : t.multiply(t).multiply(e).subtract(n.multiply(n).multiply(i)).toDouble() / (r - o))
                      },
                      eval3: function(t, e, n, r, o, s) {
                          var l, a, u, p;
                          return t instanceof Array ? P.eval3(t[0], e[0], t[1], e[1], t[2], e[2]) : (l = P.eval2(t, e, n, r),
                          a = P.eval1(o, s),
                          !c(l) && !c(a) || !d(l) && !d(a) ? l + a : (p = [],
                          (u = [])[0] = t.multiply(t).multiply(e).add(n.multiply(n).multiply(r)).subtract(o.multiply(o).multiply(s)),
                          p[0] = i(1),
                          u[1] = t.multiply(n).multiply(i(2)),
                          p[1] = e.multiply(r),
                          P.eval2(u, p) / (l - a)))
                      },
                      eval4: function(t, e, n, r, o, s, l, a) {
                          var u, p, h, f;
                          return t instanceof Array ? P.eval4(t[0], e[0], t[1], e[1], t[2], e[2], t[3], e[3]) : (u = P.eval2(t, e, n, r),
                          p = P.eval2(o, s, l, a),
                          !c(u) && !c(p) || !d(u) && !d(p) ? u + p : (f = [],
                          (h = [])[0] = t.multiply(t).multiply(e).add(n.multiply(n).multiply(r)).subtract(o.multiply(o).multiply(s)).subtract(l.multiply(l).multiply(a)),
                          f[0] = i(1),
                          h[1] = t.multiply(n).multiply(i(2)),
                          f[1] = e.multiply(r),
                          h[2] = o.multiply(l).multiply(i(-2)),
                          f[2] = s.multiply(a),
                          P.eval3(h, f) / (u - p)))
                      }
                  },
                  A = function(t, e) {
                      return t[3] + t[0] * Math.sqrt(e[0]) + t[1] * Math.sqrt(e[1]) + t[2] * Math.sqrt(e[3] * (Math.sqrt(e[0] * e[1]) + e[2]))
                  }
                  ,
                  L = function(t, e) {
                      var n, r, o, s;
                      return n = [],
                      r = [],
                      x(t[3]) ? (o = P.eval2(t, e),
                      n[0] = i(1),
                      r[0] = e[0].multiply(e[1]),
                      n[1] = e[2],
                      r[1] = i(1),
                      s = P.eval1(t[2], e[3]) * h(P.eval2(n, r)),
                      !c(o) && !c(s) || !d(o) && !d(s) ? o + s : (n[0] = t[0].multiply(t[0]).multiply(e[0]).add(t[1].multiply(t[1]).multiply(e[1])).subtract(t[2].multiply(t[2]).multiply(e[3]).multiply(e[2])),
                      r[0] = i(1),
                      n[1] = t[0].multiply(t[1]).multiply(i(2)).subtract(t[2].multiply(t[2]).multiply(e[3])),
                      r[1] = e[0].multiply(e[1]),
                      P.eval2(n, r) / (o - s))) : (n[0] = i(1),
                      r[0] = e[0].multiply(e[1]),
                      n[1] = e[2],
                      r[1] = i(1),
                      s = P.eval1(t[2], e[3]) * h(P.eval2(n, r)),
                      n[0] = t[0],
                      r[0] = e[0],
                      n[1] = t[1],
                      r[1] = e[1],
                      n[2] = t[3],
                      r[2] = i(1),
                      o = P.eval3(n, r),
                      !c(o) && !c(s) || !d(o) && !d(s) ? o + s : (n[0] = t[3].multiply(t[0]).multiply(i(2)),
                      n[1] = t[3].multiply(t[1]).multiply(i(2)),
                      n[2] = t[0].multiply(t[0]).multiply(e[0]).add(t[1].multiply(t[1]).multiply(e[1])).add(t[3].multiply(t[3])).subtract(t[2].multiply(t[2]).multiply(e[2]).multiply(e[3])),
                      n[3] = t[0].multiply(t[1]).multiply(i(2)).subtract(t[2].multiply(t[2]).multiply(e[3])),
                      r[3] = e[0].multiply(e[1]),
                      S(n, r) / (o - s)))
                  }
                  ,
                  S = function(t, e) {
                      var n, r, o, s;
                      return n = [],
                      r = [],
                      o = P.eval2(t[0], e[0], t[1], e[1]),
                      s = P.eval2(t[2], e[2], t[3], e[3]),
                      !c(o) && !c(s) || !d(o) && !d(s) ? o + s : (n[0] = t[0].multiply(t[0]).multiply(e[0]).add(t[1].multiply(t[1]).multiply(e[1])).subtract(t[2].multiply(t[2])).subtract(t[3].multiply(t[3]).multiply(e[0]).multiply(e[1])),
                      r[0] = i(1),
                      n[1] = t[0].multiply(t[1]).subtract(t[2].multiply(t[3])).multiply(i(2)),
                      r[1] = e[3],
                      P.eval2(n, r) / (o - s))
                  }
                  ,
                  s = {
                      ppp: function(t, e, n, i, r=!0, o=!0, s=!0) {
                          var l, a, u, p, f, d, y, m, x, _, v, E;
                          p = [],
                          v = [],
                          E = [],
                          (u = [])[0] = g(t.x()) - g(e.x()),
                          u[1] = g(e.x()) - g(n.x()),
                          u[2] = g(t.x()) - g(n.x()),
                          p[0] = g(t.y()) - g(e.y()),
                          p[1] = g(e.y()) - g(n.y()),
                          p[2] = g(t.y()) - g(n.y()),
                          v[0] = g(t.x()) + g(e.x()),
                          v[1] = g(e.x()) + g(n.x()),
                          E[0] = g(t.y()) + g(e.y()),
                          E[1] = g(e.y()) + g(n.y()),
                          f = .5 / T(u[0] * p[1] - u[1] * p[0]),
                          y = u[0] * v[0] + p[0] * E[0],
                          m = u[1] * v[1] + p[1] * E[1],
                          (r || s) && (l = y * p[1] - m * p[0],
                          i.x(l * f),
                          s && (_ = (u[0] * u[0] + p[0] * p[0]) * (u[1] * u[1] + p[1] * p[1]) * (u[2] * u[2] + p[2] * p[2]),
                          x = h(_),
                          c(i.x()) ? (d = (l * l - _) * f / (l + x),
                          i.lower_x(d)) : c(f) ? i.lower_x(i.x() - x * f) : i.lower_x(i.x() + x * f))),
                          o && (a = m * u[0] - y * u[1],
                          i.y(a * f))
                      },
                      pps: function(t, e, n, i, r, o=!0, s=!0, l=!0) {
                          var a, u, p, c, f, d, y, x, _, v, P, S, L, A, T, C, I, b, O;
                          return p = [],
                          c = [],
                          L = (v = g(n.y1()) - g(n.y0())) * v + (P = g(n.x0()) - g(n.x1())) * P,
                          b = g(e.y()) - g(t.y()),
                          O = g(t.x()) - g(e.x()),
                          T = g(t.x()) + g(e.x()),
                          C = g(t.y()) + g(e.y()),
                          I = v * b + P * O,
                          f = b * P - O * v,
                          y = g(n.y1()) - g(t.y()),
                          a = v * (g(t.x()) - g(n.x1())) - P * y,
                          y = g(n.y1()) - g(e.y()),
                          A = a + (u = v * (g(e.x()) - g(n.x1())) - P * y),
                          m(f) ? (S = I * I - A * A,
                          f = I * A,
                          p[0] = f * T * 2 + S * b,
                          c[0] = L,
                          p[1] = f * A * 2 + S * I,
                          c[1] = 1,
                          p[2] = f * C * 2 + S * O,
                          x = 1 / f,
                          o && r.x(.25 * p[0] * x),
                          s && r.y(.25 * p[2] * x),
                          void (l && r.lower_x(.25 * E.eval2(p, c) * x / h(L)))) : (d = (I * I + f * f) * a * u * 4,
                          _ = 1 / f,
                          _ *= _,
                          (o || l) && (p[0] = T * f * f + I * A * b,
                          c[0] = 1,
                          p[1] = 2 === i ? -b : b,
                          c[1] = d,
                          o && r.x(.5 * E.eval2(p, c) * _)),
                          (s || l) && (p[2] = C * f * f + I * A * O,
                          c[2] = 1,
                          p[3] = 2 === i ? -O : O,
                          c[3] = d,
                          s && r.y(.5 * E.eval2(p[2], c[2], p[3], c[3]) * _)),
                          l ? (c[0] = c[0] * L,
                          c[1] = c[1] * L,
                          p[2] = A * (f * f + I * I),
                          c[2] = 1,
                          p[3] = 2 === i ? -I : I,
                          c[3] = d,
                          r.lower_x(.5 * E.eval4(p, c) * _ / h(L))) : void 0)
                      },
                      pss: function(t, e, n, i, r, o=!0, s=!0, l=!0) {
                          var a, u, p, h, f, d, y, x, _, v, P, S, L, C, I, b, O, w, N, B, Y, X;
                          return a = [],
                          u = [],
                          p = [],
                          h = [],
                          f = [],
                          N = e.point1(),
                          O = e.point0(),
                          B = n.point0(),
                          w = n.point1(),
                          a[0] = g(O.x()) - g(N.x()),
                          u[0] = g(O.y()) - g(N.y()),
                          a[1] = g(w.x()) - g(B.x()),
                          u[1] = g(w.y()) - g(B.y()),
                          b = a[1] * u[0] - a[0] * u[1],
                          m(b) ? (v = 2 * T(a[0] * a[0] + u[0] * u[0]),
                          p[0] = u[0] * (g(B.x()) - g(N.x())) - a[0] * (g(B.y()) - g(N.y())),
                          P = a[0] * (g(t.y()) - g(N.y())) - u[0] * (g(t.x()) - g(N.x())),
                          S = u[0] * (g(t.x()) - g(B.x())) - a[0] * (g(t.y()) - g(B.y())),
                          f[0] = P * S,
                          f[1] = 1,
                          s && (h[0] = u[0] * (2 === i ? 2 : -2),
                          h[1] = a[0] * a[0] * (g(N.y()) + g(B.y())) - a[0] * u[0] * (g(N.x()) + g(B.x()) - 2 * g(t.x())) + u[0] * u[0] * (2 * g(t.y())),
                          y = E.eval2(h, f),
                          r.y(y / v)),
                          void ((o || l) && (h[0] = a[0] * (2 === i ? 2 : -2),
                          h[1] = u[0] * u[0] * (g(N.x()) + g(B.x())) - a[0] * u[0] * (g(N.y()) + g(B.y()) - 2 * g(t.y())) + a[0] * a[0] * (2 * g(t.x())),
                          o && (d = E.eval2(h, f),
                          r.x(d / v)),
                          l && (h[2] = c(p[0]) ? -p[0] : p[0],
                          f[2] = a[0] * a[0] + u[0] * u[0],
                          I = E.eval3(h, f),
                          r.lower_x(I / v))))) : (p[0] = u[0] * O.x() - a[0] * O.y(),
                          p[1] = a[1] * w.y() - u[1] * w.x(),
                          L = a[0] * p[1] + a[1] * p[0],
                          C = u[0] * p[1] + u[1] * p[0],
                          P = L - b * t.x(),
                          S = C - b * t.y(),
                          m(P) && m(S) ? (d = L / (v = b),
                          y = C / v,
                          r.x(d),
                          r.y(y),
                          void r.lower_x(d)) : (Y = (2 === i ? 1 : -1) * (c(b) ? 1 : -1),
                          h[0] = a[1] * -P + u[1] * -S,
                          h[1] = a[0] * -P + u[0] * -S,
                          h[2] = Y,
                          h[3] = 0,
                          f[0] = a[0] * a[0] + u[0] * u[0],
                          f[1] = a[1] * a[1] + u[1] * u[1],
                          f[2] = a[0] * a[1] + u[0] * u[1],
                          f[3] = (a[0] * S - u[0] * P) * (a[1] * S - u[1] * P) * -2,
                          v = (X = A(h, f)) * b,
                          s && (h[0] = u[1] * (P * P + S * S) - C * (P * a[1] + S * u[1]),
                          h[1] = u[0] * (P * P + S * S) - C * (P * a[0] + S * u[0]),
                          h[2] = C * Y,
                          _ = A(h, f),
                          r.y(_ / v)),
                          (o || l) && (h[0] = a[1] * (P * P + S * S) - L * (P * a[1] + S * u[1]),
                          h[1] = a[0] * (P * P + S * S) - L * (P * a[0] + S * u[0]),
                          h[2] = L * Y,
                          o && (x = A(h, f),
                          r.x(x / v)),
                          l) ? (h[3] = b * (P * P + S * S) * (c(X) ? -1 : 1),
                          I = A(h, f),
                          r.lower_x(I / v)) : void 0))
                      },
                      sss: function(t, e, n, i, r=!0, o=!0, s=!0) {
                          var l, a, u, p, h, c, f, d, y, m, x, _, v, P, S, L;
                          for (a = [],
                          u = [],
                          p = [],
                          h = [],
                          (l = [])[0] = g(t.x1()) - g(t.x0()),
                          l[1] = g(e.x1()) - g(e.x0()),
                          l[2] = g(n.x1()) - g(n.x0()),
                          a[0] = g(t.y1()) - g(t.y0()),
                          a[1] = g(e.y1()) - g(e.y0()),
                          a[2] = g(n.y1()) - g(n.y0()),
                          u[0] = g(t.x0()) * g(t.y1()) - g(t.y0()) * g(t.x1()),
                          u[1] = g(e.x0()) * g(e.y1()) - g(e.y0()) * g(e.x1()),
                          u[2] = g(n.x0()) * g(n.y1()) - g(n.y0()) * g(n.x1()),
                          y = _ = 0; _ < 3; y = ++_)
                              h[y] = l[y] * l[y] + a[y] * a[y];
                          for (y = P = 0; P < 3; y = ++P)
                              m = (y + 1) % 3,
                              x = (y + 2) % 3,
                              p[y] = l[m] * a[x] - l[x] * a[m];
                          if (d = E.eval3(p, h),
                          o) {
                              for (y = S = 0; S < 3; y = ++S)
                                  m = (y + 1) % 3,
                                  x = (y + 2) % 3,
                                  p[y] = a[m] * u[x] - a[x] * u[m];
                              f = E.eval3(p, h),
                              i.y(f / d)
                          }
                          if (r || s) {
                              for (p[3] = 0,
                              y = L = 0; L < 3; y = ++L)
                                  m = (y + 1) % 3,
                                  x = (y + 2) % 3,
                                  p[y] = l[m] * u[x] - l[x] * u[m],
                                  s && (p[3] = p[3] + p[y] * a[y]);
                              if (r && (c = E.eval3(p, h),
                              i.x(c / d)),
                              s)
                                  return h[3] = 1,
                                  v = E.eval4(p, h),
                                  i.lower_x(v / d)
                          }
                      }
                  },
                  l = {
                      ppp: function(t, e, n, r, o=!0, s=!0, l=!0) {
                          var a, u, p, f, d, y, m, x, _, v, E, P;
                          f = [],
                          E = [],
                          P = [],
                          (p = [])[0] = i(g(t.x()) - g(e.x())),
                          p[1] = i(g(e.x()) - g(n.x())),
                          p[2] = i(g(t.x()) - g(n.x())),
                          f[0] = i(g(t.y()) - g(e.y())),
                          f[1] = i(g(e.y()) - g(n.y())),
                          f[2] = i(g(t.y()) - g(n.y())),
                          E[0] = i(g(t.x()) + g(e.x())),
                          E[1] = i(g(e.x()) + g(n.x())),
                          P[0] = i(g(t.y()) + g(e.y())),
                          P[1] = i(g(e.y()) + g(n.y())),
                          d = .5 / p[0].multiply(f[1]).subtract(p[1].multiply(f[0])).toDouble(),
                          m = p[0].multiply(E[0]).add(f[0].multiply(P[0])),
                          x = p[1].multiply(E[1]).add(f[1].multiply(P[1])),
                          (o || l) && (a = m.multiply(f[1]).subtract(x.multiply(f[0])),
                          r.x(a.toDouble() * d),
                          l && (v = p[0].multiply(p[0]).add(f[0].multiply(f[0])).multiply(p[1].multiply(p[1]).add(f[1].multiply(f[1]))).multiply(p[2].multiply(p[2]).add(f[2].multiply(f[2]))),
                          _ = h(v.toDouble()),
                          c(r.x()) ? (y = a.multiply(a).subtract(v).toDouble() * d / (a.toDouble() + _),
                          r.lower_x(y)) : c(d) ? r.lower_x(r.x() - _ * d) : r.lower_x(r.x() + _ * d))),
                          s && (u = x.multiply(p[0]).subtract(m.multiply(p[1])),
                          r.y(u.toDouble() * d))
                      },
                      pps: function(t, e, n, r, o, s=!0, l=!0, a=!0) {
                          var u, p, c, f, d, y, m, _, v, E, S, L, A, T, C, I, b, O, w, N;
                          return c = [],
                          f = [],
                          S = i(g(n.y1()) - g(n.y0())),
                          L = i(g(n.x0()) - g(n.x1())),
                          T = S.multiply(S).add(L.multiply(L)),
                          w = i(g(e.y()) - g(t.y())),
                          N = i(g(t.x()) - g(e.x())),
                          I = i(g(t.x()) + g(e.x())),
                          b = i(g(t.y()) + g(e.y())),
                          O = S.multiply(w).add(L.multiply(N)),
                          d = w.multiply(L).subtract(N.multiply(S)),
                          m = i(g(n.y1()) - g(t.y())),
                          _ = i(g(t.x()) - g(n.x1())),
                          u = S.multiply(_).subtract(L.multiply(m)),
                          m = i(g(n.y1()) - g(e.y())),
                          _ = i(g(e.x()) - g(n.x1())),
                          p = S.multiply(_).subtract(L.multiply(m)),
                          C = u.add(p),
                          x(d) ? (A = O.multiply(O).subtract(C.multiply(C)),
                          d = O.multiply(C),
                          c[0] = d.multiply(I).multiply(i(2)).add(A.multiply(w)),
                          f[0] = T,
                          c[1] = d.multiply(C).multiply(i(2)).add(A.multiply(O)),
                          f[1] = i(1),
                          c[2] = d.multiply(b).multiply(i(2)).add(A.multiply(N)),
                          v = 1 / d.toDouble(),
                          s && o.x(.25 * c[0].toDouble() * v),
                          l && o.y(.25 * c[2].toDouble() * v),
                          void (a && o.lower_x(.25 * P.eval2(c, f) * v / h(T.toDouble())))) : (y = O.multiply(O).add(d.multiply(d)).multiply(u).multiply(p).multiply(i(4)),
                          E = 1 / d.toDouble(),
                          E *= E,
                          (s || a) && (c[0] = I.multiply(d).multiply(d).add(O.multiply(C).multiply(w)),
                          f[0] = i(1),
                          c[1] = 2 === r ? w.negate() : w,
                          f[1] = y,
                          s && o.x(.5 * P.eval2(c, f) * E)),
                          (l || a) && (c[2] = b.multiply(d).multiply(d).add(O.multiply(C).multiply(N)),
                          f[2] = i(1),
                          c[3] = 2 === r ? N.negate() : N,
                          f[3] = y,
                          l && o.y(.5 * P.eval2(c[2], f[2], c[3], f[3]) * E)),
                          a ? (f[0] = f[0].multiply(T),
                          f[1] = f[1].multiply(T),
                          c[2] = C.multiply(d.multiply(d).add(O.multiply(O))),
                          f[2] = i(1),
                          c[3] = 2 === r ? O.negate() : O,
                          f[3] = y,
                          o.lower_x(.5 * P.eval4(c, f) * E / h(T.toDouble()))) : void 0)
                      },
                      pss: function(t, e, n, r, o, s=!0, l=!0, a=!0) {
                          var u, p, h, d, y, m, _, v, E, S, A, T, C, I, b, O, w, N, B, Y, X, D;
                          return u = [],
                          p = [],
                          h = [],
                          d = [],
                          y = [],
                          B = e.point1(),
                          w = e.point0(),
                          Y = n.point0(),
                          N = n.point1(),
                          u[0] = i(g(w.x()) - g(B.x())),
                          p[0] = i(g(w.y()) - g(B.y())),
                          u[1] = i(g(N.x()) - g(Y.x())),
                          p[1] = i(g(N.y()) - g(Y.y())),
                          O = u[1].multiply(p[0]).subtract(u[0].multiply(p[1])),
                          x(O) ? (S = 2 * u[0].multiply(u[0]).add(p[0].multiply(p[0])).toDouble(),
                          h[0] = p[0].multiply(i(g(Y.x()) - g(B.x()))).subtract(u[0].multiply(i(g(Y.y()) - g(B.y())))),
                          A = u[0].multiply(i(g(t.y()) - g(B.y()))).subtract(p[0].multiply(i(g(t.x()) - g(B.x())))),
                          T = p[0].multiply(i(g(t.x()) - g(Y.x()))).subtract(u[0].multiply(i(g(t.y()) - g(Y.y())))),
                          y[0] = A.multiply(T),
                          y[1] = i(1),
                          l && (d[0] = p[0].multiply(i(2 === r ? 2 : -2)),
                          d[1] = u[0].multiply(u[0]).multiply(i(g(B.y()) + g(Y.y()))).subtract(u[0].multiply(p[0]).multiply(i(g(B.x()) + g(Y.x()) - 2 * g(t.x())))).add(p[0].multiply(p[0]).multiply(i(2 * g(t.y())))),
                          _ = P.eval2(d, y),
                          o.y(_ / S)),
                          void ((s || a) && (d[0] = u[0].multiply(i(2 === r ? 2 : -2)),
                          d[1] = p[0].multiply(p[0]).multiply(i(g(B.x()) + g(Y.x()))).subtract(u[0].multiply(p[0]).multiply(i(g(B.y()) + g(Y.y()) - 2 * g(t.y())))).add(u[0].multiply(u[0]).multiply(i(2 * g(t.x())))),
                          s && (m = P.eval2(d, y),
                          o.x(m / S)),
                          a && (d[2] = f(h[0]) ? h[0].negate() : h[0],
                          y[2] = u[0].multiply(u[0]).add(p[0].multiply(p[0])),
                          b = P.eval3(d, y),
                          o.lower_x(b / S))))) : (h[0] = p[0].multiply(i(w.x())).subtract(u[0].multiply(i(w.y()))),
                          h[1] = u[1].multiply(i(N.y())).subtract(p[1].multiply(i(N.x()))),
                          C = u[0].multiply(h[1]).add(u[1].multiply(h[0])),
                          I = p[0].multiply(h[1]).add(p[1].multiply(h[0])),
                          A = C.subtract(O.multiply(i(t.x()))),
                          T = I.subtract(O.multiply(i(t.y()))),
                          x(A) && x(T) ? (S = O.toDouble(),
                          m = C.toDouble() / S,
                          _ = I.toDouble() / S,
                          o.x(m),
                          o.y(_),
                          void o.lower_x(m)) : (X = i((2 === r ? 1 : -1) * (f(O) ? 1 : -1)),
                          d[0] = u[1].multiply(A.negate()).add(p[1].multiply(T.negate())),
                          d[1] = u[0].multiply(A.negate()).add(p[0].multiply(T.negate())),
                          d[2] = X,
                          d[3] = i(0),
                          y[0] = u[0].multiply(u[0]).add(p[0].multiply(p[0])),
                          y[1] = u[1].multiply(u[1]).add(p[1].multiply(p[1])),
                          y[2] = u[0].multiply(u[1]).add(p[0].multiply(p[1])),
                          y[3] = u[0].multiply(T).subtract(p[0].multiply(A)).multiply(u[1].multiply(T).subtract(p[1].multiply(A))).multiply(i(-2)),
                          S = (D = L(d, y)) * O.toDouble(),
                          l && (d[0] = p[1].multiply(A.multiply(A).add(T.multiply(T))).subtract(I.multiply(A.multiply(u[1]).add(T.multiply(p[1])))),
                          d[1] = p[0].multiply(A.multiply(A).add(T.multiply(T))).subtract(I.multiply(A.multiply(u[0]).add(T.multiply(p[0])))),
                          d[2] = I.multiply(X),
                          E = L(d, y),
                          o.y(E / S)),
                          void ((s || a) && (d[0] = u[1].multiply(A.multiply(A).add(T.multiply(T))).subtract(C.multiply(A.multiply(u[1]).add(T.multiply(p[1])))),
                          d[1] = u[0].multiply(A.multiply(A).add(T.multiply(T))).subtract(C.multiply(A.multiply(u[0]).add(T.multiply(p[0])))),
                          d[2] = C.multiply(X),
                          s && (v = L(d, y),
                          o.x(v / S)),
                          a && (d[3] = O.multiply(A.multiply(A).add(T.multiply(T))).multiply(c(D) ? i(-1) : i(1)),
                          b = L(d, y),
                          o.lower_x(b / S))))))
                      },
                      sss: function(t, e, n, r, o=!0, s=!0, l=!0) {
                          var a, u, p, h, c, f, d, y, m, x, _, v, E, S, L, A;
                          for (u = [],
                          p = [],
                          h = [],
                          c = [],
                          (a = [])[0] = i(g(t.x1()) - g(t.x0())),
                          a[1] = i(g(e.x1()) - g(e.x0())),
                          a[2] = i(g(n.x1()) - g(n.x0())),
                          u[0] = i(g(t.y1()) - g(t.y0())),
                          u[1] = i(g(e.y1()) - g(e.y0())),
                          u[2] = i(g(n.y1()) - g(n.y0())),
                          p[0] = i(g(t.x0()) * g(t.y1()) - g(t.y0()) * g(t.x1())),
                          p[1] = i(g(e.x0()) * g(e.y1()) - g(e.y0()) * g(e.x1())),
                          p[2] = i(g(n.x0()) * g(n.y1()) - g(n.y0()) * g(n.x1())),
                          m = v = 0; v < 3; m = ++v)
                              c[m] = a[m].multiply(a[m]).add(u[m].multiply(u[m]));
                          for (m = S = 0; S < 3; m = ++S)
                              x = (m + 1) % 3,
                              _ = (m + 2) % 3,
                              h[m] = a[x].multiply(u[_]).subtract(a[_].multiply(u[x]));
                          if (y = P.eval3(h, c),
                          s) {
                              for (m = L = 0; L < 3; m = ++L)
                                  x = (m + 1) % 3,
                                  _ = (m + 2) % 3,
                                  h[m] = u[x].multiply(p[_]).subtract(u[_].multiply(p[x]));
                              d = P.eval3(h, c),
                              r.y(d / y)
                          }
                          if (o || l) {
                              for (h[3] = i(0),
                              m = A = 0; A < 3; m = ++A)
                                  x = (m + 1) % 3,
                                  _ = (m + 2) % 3,
                                  h[m] = a[x].multiply(p[_]).subtract(a[_].multiply(p[x])),
                                  l && (h[3] = h[3].add(h[m].multiply(u[m])));
                              o && (f = P.eval3(h, c),
                              r.x(f / y)),
                              l && (c[3] = i(1),
                              E = P.eval4(h, c),
                              r.lower_x(E / y))
                          }
                      }
                  },
                  a = function(t, e, n, i) {
                      var l;
                      if (l = function(t, e) {
                          var n, i;
                          return !(!e.is_segment() || !y(e)) && (n = e.is_inverse() ? e.y1() : e.y0(),
                          i = e.is_inverse() ? e.y0() : e.y1(),
                          n - t.y() > r || t.y() - i > r)
                      }
                      ,
                      t.is_segment())
                          if (e.is_segment())
                              if (n.is_segment()) {
                                  if (!o.sss(t, e, n))
                                      return !1;
                                  s.sss(t, e, n, i)
                              } else {
                                  if (!o.pss(n, t, e, 3))
                                      return !1;
                                  s.pss(n, t, e, 3, i)
                              }
                          else if (n.is_segment()) {
                              if (!o.pss(e, t, n, 2))
                                  return !1;
                              s.pss(e, t, n, 2, i)
                          } else {
                              if (!o.pps(e, n, t, 1))
                                  return !1;
                              s.pps(e, n, t, 1, i)
                          }
                      else if (e.is_segment())
                          if (n.is_segment()) {
                              if (!o.pss(t, e, n, 1))
                                  return !1;
                              s.pss(t, e, n, 1, i)
                          } else {
                              if (!o.pps(t, n, e, 2))
                                  return !1;
                              s.pps(t, n, e, 2, i)
                          }
                      else if (n.is_segment()) {
                          if (!o.pps(t, e, n, 3))
                              return !1;
                          s.pps(t, e, n, 3, i)
                      } else {
                          if (!o.ppp(t, e, n))
                              return !1;
                          s.ppp(t, e, n, i)
                      }
                      return !(l(i, t) || l(i, e) || l(i, n))
                  }
                  ,
                  u = function(t, e, n, i) {
                      var s;
                      if (s = function(t, e) {
                          var n, i;
                          return !(!e.is_segment() || !y(e)) && (n = e.is_inverse() ? e.y1() : e.y0(),
                          i = e.is_inverse() ? e.y0() : e.y1(),
                          n - t.y() > r || t.y() - i > r)
                      }
                      ,
                      t.is_segment())
                          if (e.is_segment())
                              if (n.is_segment()) {
                                  if (!o.sss(t, e, n))
                                      return !1;
                                  l.sss(t, e, n, i)
                              } else {
                                  if (!o.pss(n, t, e, 3))
                                      return !1;
                                  l.pss(n, t, e, 3, i)
                              }
                          else if (n.is_segment()) {
                              if (!o.pss(e, t, n, 2))
                                  return !1;
                              l.pss(e, t, n, 2, i)
                          } else {
                              if (!o.pps(e, n, t, 1))
                                  return !1;
                              l.pps(e, n, t, 1, i)
                          }
                      else if (e.is_segment())
                          if (n.is_segment()) {
                              if (!o.pss(t, e, n, 1))
                                  return !1;
                              l.pss(t, e, n, 1, i)
                          } else {
                              if (!o.pps(t, n, e, 2))
                                  return !1;
                              l.pps(t, n, e, 2, i)
                          }
                      else if (n.is_segment()) {
                          if (!o.pps(t, e, n, 3))
                              return !1;
                          l.pps(t, e, n, 3, i)
                      } else {
                          if (!o.ppp(t, e, n))
                              return !1;
                          l.ppp(t, e, n, i)
                      }
                      return !(s(i, t) || s(i, e) || s(i, n))
                  }
                  ,
                  null !== t && (t.exports = {
                      event_comparison_predicate: p,
                      circle_formation_predicate: a,
                      circle_formation_predicate_big: u
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              var i, r, o = !1;
              function s(t, e, n) {
                  null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
              }
              function l() {
                  return new s(null)
              }
              t.exports && (o = !0),
              o ? i = "Netscape" : (navigator.userAgent.toString().toLowerCase(),
              i = navigator.appName),
              "Microsoft Internet Explorer" == i ? (s.prototype.am = function(t, e, n, i, r, o) {
                  for (var s = 32767 & e, l = e >> 15; --o >= 0; ) {
                      var a = 32767 & this[t]
                        , u = this[t++] >> 15
                        , p = l * a + u * s;
                      r = ((a = s * a + ((32767 & p) << 15) + n[i] + (1073741823 & r)) >>> 30) + (p >>> 15) + l * u + (r >>> 30),
                      n[i++] = 1073741823 & a
                  }
                  return r
              }
              ,
              r = 30) : "Netscape" != i ? (s.prototype.am = function(t, e, n, i, r, o) {
                  for (; --o >= 0; ) {
                      var s = e * this[t++] + n[i] + r;
                      r = Math.floor(s / 67108864),
                      n[i++] = 67108863 & s
                  }
                  return r
              }
              ,
              r = 26) : (s.prototype.am = function(t, e, n, i, r, o) {
                  for (var s = 16383 & e, l = e >> 14; --o >= 0; ) {
                      var a = 16383 & this[t]
                        , u = this[t++] >> 14
                        , p = l * a + u * s;
                      r = ((a = s * a + ((16383 & p) << 14) + n[i] + r) >> 28) + (p >> 14) + l * u,
                      n[i++] = 268435455 & a
                  }
                  return r
              }
              ,
              r = 28),
              s.prototype.DB = r,
              s.prototype.DM = (1 << r) - 1,
              s.prototype.DV = 1 << r,
              s.prototype.FV = Math.pow(2, 52),
              s.prototype.F1 = 52 - r,
              s.prototype.F2 = 2 * r - 52;
              var a, u, p = new Array;
              for (a = "0".charCodeAt(0),
              u = 0; u <= 9; ++u)
                  p[a++] = u;
              for (a = "a".charCodeAt(0),
              u = 10; u < 36; ++u)
                  p[a++] = u;
              for (a = "A".charCodeAt(0),
              u = 10; u < 36; ++u)
                  p[a++] = u;
              function h(t) {
                  return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
              }
              function c(t, e) {
                  var n = p[t.charCodeAt(e)];
                  return null == n ? -1 : n
              }
              function f(t) {
                  var e = l();
                  return e.fromInt(t),
                  e
              }
              function d(t) {
                  var e, n = 1;
                  return 0 != (e = t >>> 16) && (t = e,
                  n += 16),
                  0 != (e = t >> 8) && (t = e,
                  n += 8),
                  0 != (e = t >> 4) && (t = e,
                  n += 4),
                  0 != (e = t >> 2) && (t = e,
                  n += 2),
                  0 != (e = t >> 1) && (t = e,
                  n += 1),
                  n
              }
              function y(t) {
                  this.m = t
              }
              function m(t) {
                  this.m = t,
                  this.mp = t.invDigit(),
                  this.mpl = 32767 & this.mp,
                  this.mph = this.mp >> 15,
                  this.um = (1 << t.DB - 15) - 1,
                  this.mt2 = 2 * t.t
              }
              function x(t, e) {
                  return t & e
              }
              function _(t, e) {
                  return t | e
              }
              function v(t, e) {
                  return t ^ e
              }
              function g(t, e) {
                  return t & ~e
              }
              function E(t) {
                  if (0 == t)
                      return -1;
                  var e = 0;
                  return 0 == (65535 & t) && (t >>= 16,
                  e += 16),
                  0 == (255 & t) && (t >>= 8,
                  e += 8),
                  0 == (15 & t) && (t >>= 4,
                  e += 4),
                  0 == (3 & t) && (t >>= 2,
                  e += 2),
                  0 == (1 & t) && ++e,
                  e
              }
              function P(t) {
                  for (var e = 0; 0 != t; )
                      t &= t - 1,
                      ++e;
                  return e
              }
              function S() {}
              function L(t) {
                  return t
              }
              function A(t) {
                  this.r2 = l(),
                  this.q3 = l(),
                  s.ONE.dlShiftTo(2 * t.t, this.r2),
                  this.mu = this.r2.divide(t),
                  this.m = t
              }
              y.prototype.convert = function(t) {
                  return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
              }
              ,
              y.prototype.revert = function(t) {
                  return t
              }
              ,
              y.prototype.reduce = function(t) {
                  t.divRemTo(this.m, null, t)
              }
              ,
              y.prototype.mulTo = function(t, e, n) {
                  t.multiplyTo(e, n),
                  this.reduce(n)
              }
              ,
              y.prototype.sqrTo = function(t, e) {
                  t.squareTo(e),
                  this.reduce(e)
              }
              ,
              m.prototype.convert = function(t) {
                  var e = l();
                  return t.abs().dlShiftTo(this.m.t, e),
                  e.divRemTo(this.m, null, e),
                  t.s < 0 && e.compareTo(s.ZERO) > 0 && this.m.subTo(e, e),
                  e
              }
              ,
              m.prototype.revert = function(t) {
                  var e = l();
                  return t.copyTo(e),
                  this.reduce(e),
                  e
              }
              ,
              m.prototype.reduce = function(t) {
                  for (; t.t <= this.mt2; )
                      t[t.t++] = 0;
                  for (var e = 0; e < this.m.t; ++e) {
                      var n = 32767 & t[e]
                        , i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                      for (t[n = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV; )
                          t[n] -= t.DV,
                          t[++n]++
                  }
                  t.clamp(),
                  t.drShiftTo(this.m.t, t),
                  t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
              }
              ,
              m.prototype.mulTo = function(t, e, n) {
                  t.multiplyTo(e, n),
                  this.reduce(n)
              }
              ,
              m.prototype.sqrTo = function(t, e) {
                  t.squareTo(e),
                  this.reduce(e)
              }
              ,
              s.prototype.copyTo = function(t) {
                  for (var e = this.t - 1; e >= 0; --e)
                      t[e] = this[e];
                  t.t = this.t,
                  t.s = this.s
              }
              ,
              s.prototype.fromInt = function(t) {
                  this.t = 1,
                  this.s = t < 0 ? -1 : 0,
                  t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
              }
              ,
              s.prototype.fromString = function(t, e) {
                  var n;
                  if (16 == e)
                      n = 4;
                  else if (8 == e)
                      n = 3;
                  else if (256 == e)
                      n = 8;
                  else if (2 == e)
                      n = 1;
                  else if (32 == e)
                      n = 5;
                  else {
                      if (4 != e)
                          return void this.fromRadix(t, e);
                      n = 2
                  }
                  this.t = 0,
                  this.s = 0;
                  for (var i = t.length, r = !1, o = 0; --i >= 0; ) {
                      var l = 8 == n ? 255 & t[i] : c(t, i);
                      l < 0 ? "-" == t.charAt(i) && (r = !0) : (r = !1,
                      0 == o ? this[this.t++] = l : o + n > this.DB ? (this[this.t - 1] |= (l & (1 << this.DB - o) - 1) << o,
                      this[this.t++] = l >> this.DB - o) : this[this.t - 1] |= l << o,
                      (o += n) >= this.DB && (o -= this.DB))
                  }
                  8 == n && 0 != (128 & t[0]) && (this.s = -1,
                  o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
                  this.clamp(),
                  r && s.ZERO.subTo(this, this)
              }
              ,
              s.prototype.clamp = function() {
                  for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                      --this.t
              }
              ,
              s.prototype.dlShiftTo = function(t, e) {
                  var n;
                  for (n = this.t - 1; n >= 0; --n)
                      e[n + t] = this[n];
                  for (n = t - 1; n >= 0; --n)
                      e[n] = 0;
                  e.t = this.t + t,
                  e.s = this.s
              }
              ,
              s.prototype.drShiftTo = function(t, e) {
                  for (var n = t; n < this.t; ++n)
                      e[n - t] = this[n];
                  e.t = Math.max(this.t - t, 0),
                  e.s = this.s
              }
              ,
              s.prototype.lShiftTo = function(t, e) {
                  var n, i = t % this.DB, r = this.DB - i, o = (1 << r) - 1, s = Math.floor(t / this.DB), l = this.s << i & this.DM;
                  for (n = this.t - 1; n >= 0; --n)
                      e[n + s + 1] = this[n] >> r | l,
                      l = (this[n] & o) << i;
                  for (n = s - 1; n >= 0; --n)
                      e[n] = 0;
                  e[s] = l,
                  e.t = this.t + s + 1,
                  e.s = this.s,
                  e.clamp()
              }
              ,
              s.prototype.rShiftTo = function(t, e) {
                  e.s = this.s;
                  var n = Math.floor(t / this.DB);
                  if (n >= this.t)
                      e.t = 0;
                  else {
                      var i = t % this.DB
                        , r = this.DB - i
                        , o = (1 << i) - 1;
                      e[0] = this[n] >> i;
                      for (var s = n + 1; s < this.t; ++s)
                          e[s - n - 1] |= (this[s] & o) << r,
                          e[s - n] = this[s] >> i;
                      i > 0 && (e[this.t - n - 1] |= (this.s & o) << r),
                      e.t = this.t - n,
                      e.clamp()
                  }
              }
              ,
              s.prototype.subTo = function(t, e) {
                  for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r; )
                      i += this[n] - t[n],
                      e[n++] = i & this.DM,
                      i >>= this.DB;
                  if (t.t < this.t) {
                      for (i -= t.s; n < this.t; )
                          i += this[n],
                          e[n++] = i & this.DM,
                          i >>= this.DB;
                      i += this.s
                  } else {
                      for (i += this.s; n < t.t; )
                          i -= t[n],
                          e[n++] = i & this.DM,
                          i >>= this.DB;
                      i -= t.s
                  }
                  e.s = i < 0 ? -1 : 0,
                  i < -1 ? e[n++] = this.DV + i : i > 0 && (e[n++] = i),
                  e.t = n,
                  e.clamp()
              }
              ,
              s.prototype.multiplyTo = function(t, e) {
                  var n = this.abs()
                    , i = t.abs()
                    , r = n.t;
                  for (e.t = r + i.t; --r >= 0; )
                      e[r] = 0;
                  for (r = 0; r < i.t; ++r)
                      e[r + n.t] = n.am(0, i[r], e, r, 0, n.t);
                  e.s = 0,
                  e.clamp(),
                  this.s != t.s && s.ZERO.subTo(e, e)
              }
              ,
              s.prototype.squareTo = function(t) {
                  for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0; )
                      t[n] = 0;
                  for (n = 0; n < e.t - 1; ++n) {
                      var i = e.am(n, e[n], t, 2 * n, 0, 1);
                      (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                      t[n + e.t + 1] = 1)
                  }
                  t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                  t.s = 0,
                  t.clamp()
              }
              ,
              s.prototype.divRemTo = function(t, e, n) {
                  var i = t.abs();
                  if (!(i.t <= 0)) {
                      var r = this.abs();
                      if (r.t < i.t)
                          return null != e && e.fromInt(0),
                          void (null != n && this.copyTo(n));
                      null == n && (n = l());
                      var o = l()
                        , a = this.s
                        , u = t.s
                        , p = this.DB - d(i[i.t - 1]);
                      p > 0 ? (i.lShiftTo(p, o),
                      r.lShiftTo(p, n)) : (i.copyTo(o),
                      r.copyTo(n));
                      var h = o.t
                        , c = o[h - 1];
                      if (0 != c) {
                          var f = c * (1 << this.F1) + (h > 1 ? o[h - 2] >> this.F2 : 0)
                            , y = this.FV / f
                            , m = (1 << this.F1) / f
                            , x = 1 << this.F2
                            , _ = n.t
                            , v = _ - h
                            , g = null == e ? l() : e;
                          for (o.dlShiftTo(v, g),
                          n.compareTo(g) >= 0 && (n[n.t++] = 1,
                          n.subTo(g, n)),
                          s.ONE.dlShiftTo(h, g),
                          g.subTo(o, o); o.t < h; )
                              o[o.t++] = 0;
                          for (; --v >= 0; ) {
                              var E = n[--_] == c ? this.DM : Math.floor(n[_] * y + (n[_ - 1] + x) * m);
                              if ((n[_] += o.am(0, E, n, v, 0, h)) < E)
                                  for (o.dlShiftTo(v, g),
                                  n.subTo(g, n); n[_] < --E; )
                                      n.subTo(g, n)
                          }
                          null != e && (n.drShiftTo(h, e),
                          a != u && s.ZERO.subTo(e, e)),
                          n.t = h,
                          n.clamp(),
                          p > 0 && n.rShiftTo(p, n),
                          a < 0 && s.ZERO.subTo(n, n)
                      }
                  }
              }
              ,
              s.prototype.invDigit = function() {
                  if (this.t < 1)
                      return 0;
                  var t = this[0];
                  if (0 == (1 & t))
                      return 0;
                  var e = 3 & t;
                  return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
              }
              ,
              s.prototype.isEven = function() {
                  return 0 == (this.t > 0 ? 1 & this[0] : this.s)
              }
              ,
              s.prototype.exp = function(t, e) {
                  if (t > 4294967295 || t < 1)
                      return s.ONE;
                  var n = l()
                    , i = l()
                    , r = e.convert(this)
                    , o = d(t) - 1;
                  for (r.copyTo(n); --o >= 0; )
                      if (e.sqrTo(n, i),
                      (t & 1 << o) > 0)
                          e.mulTo(i, r, n);
                      else {
                          var a = n;
                          n = i,
                          i = a
                      }
                  return e.revert(n)
              }
              ,
              s.prototype.toString = function(t) {
                  if (this.s < 0)
                      return "-" + this.negate().toString(t);
                  var e;
                  if (16 == t)
                      e = 4;
                  else if (8 == t)
                      e = 3;
                  else if (2 == t)
                      e = 1;
                  else if (32 == t)
                      e = 5;
                  else {
                      if (4 != t)
                          return this.toRadix(t);
                      e = 2
                  }
                  var n, i = (1 << e) - 1, r = !1, o = "", s = this.t, l = this.DB - s * this.DB % e;
                  if (s-- > 0)
                      for (l < this.DB && (n = this[s] >> l) > 0 && (r = !0,
                      o = h(n)); s >= 0; )
                          l < e ? (n = (this[s] & (1 << l) - 1) << e - l,
                          n |= this[--s] >> (l += this.DB - e)) : (n = this[s] >> (l -= e) & i,
                          l <= 0 && (l += this.DB,
                          --s)),
                          n > 0 && (r = !0),
                          r && (o += h(n));
                  return r ? o : "0"
              }
              ,
              s.prototype.negate = function() {
                  var t = l();
                  return s.ZERO.subTo(this, t),
                  t
              }
              ,
              s.prototype.abs = function() {
                  return this.s < 0 ? this.negate() : this
              }
              ,
              s.prototype.compareTo = function(t) {
                  var e = this.s - t.s;
                  if (0 != e)
                      return e;
                  var n = this.t;
                  if (0 != (e = n - t.t))
                      return this.s < 0 ? -e : e;
                  for (; --n >= 0; )
                      if (0 != (e = this[n] - t[n]))
                          return e;
                  return 0
              }
              ,
              s.prototype.bitLength = function() {
                  return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM)
              }
              ,
              s.prototype.mod = function(t) {
                  var e = l();
                  return this.abs().divRemTo(t, null, e),
                  this.s < 0 && e.compareTo(s.ZERO) > 0 && t.subTo(e, e),
                  e
              }
              ,
              s.prototype.modPowInt = function(t, e) {
                  var n;
                  return n = t < 256 || e.isEven() ? new y(e) : new m(e),
                  this.exp(t, n)
              }
              ,
              s.ZERO = f(0),
              s.ONE = f(1),
              S.prototype.convert = L,
              S.prototype.revert = L,
              S.prototype.mulTo = function(t, e, n) {
                  t.multiplyTo(e, n)
              }
              ,
              S.prototype.sqrTo = function(t, e) {
                  t.squareTo(e)
              }
              ,
              A.prototype.convert = function(t) {
                  if (t.s < 0 || t.t > 2 * this.m.t)
                      return t.mod(this.m);
                  if (t.compareTo(this.m) < 0)
                      return t;
                  var e = l();
                  return t.copyTo(e),
                  this.reduce(e),
                  e
              }
              ,
              A.prototype.revert = function(t) {
                  return t
              }
              ,
              A.prototype.reduce = function(t) {
                  for (t.drShiftTo(this.m.t - 1, this.r2),
                  t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                  t.clamp()),
                  this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                  this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                      t.dAddOffset(1, this.m.t + 1);
                  for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                      t.subTo(this.m, t)
              }
              ,
              A.prototype.mulTo = function(t, e, n) {
                  t.multiplyTo(e, n),
                  this.reduce(n)
              }
              ,
              A.prototype.sqrTo = function(t, e) {
                  t.squareTo(e),
                  this.reduce(e)
              }
              ;
              var T = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
                , C = (1 << 26) / T[T.length - 1];
              s.prototype.chunkSize = function(t) {
                  return Math.floor(Math.LN2 * this.DB / Math.log(t))
              }
              ,
              s.prototype.toRadix = function(t) {
                  if (null == t && (t = 10),
                  0 == this.signum() || t < 2 || t > 36)
                      return "0";
                  var e = this.chunkSize(t)
                    , n = Math.pow(t, e)
                    , i = f(n)
                    , r = l()
                    , o = l()
                    , s = "";
                  for (this.divRemTo(i, r, o); r.signum() > 0; )
                      s = (n + o.intValue()).toString(t).substr(1) + s,
                      r.divRemTo(i, r, o);
                  return o.intValue().toString(t) + s
              }
              ,
              s.prototype.fromRadix = function(t, e) {
                  this.fromInt(0),
                  null == e && (e = 10);
                  for (var n = this.chunkSize(e), i = Math.pow(e, n), r = !1, o = 0, l = 0, a = 0; a < t.length; ++a) {
                      var u = c(t, a);
                      u < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (r = !0) : (l = e * l + u,
                      ++o >= n && (this.dMultiply(i),
                      this.dAddOffset(l, 0),
                      o = 0,
                      l = 0))
                  }
                  o > 0 && (this.dMultiply(Math.pow(e, o)),
                  this.dAddOffset(l, 0)),
                  r && s.ZERO.subTo(this, this)
              }
              ,
              s.prototype.fromNumber = function(t, e, n) {
                  if ("number" == typeof e)
                      if (t < 2)
                          this.fromInt(1);
                      else
                          for (this.fromNumber(t, n),
                          this.testBit(t - 1) || this.bitwiseTo(s.ONE.shiftLeft(t - 1), _, this),
                          this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); )
                              this.dAddOffset(2, 0),
                              this.bitLength() > t && this.subTo(s.ONE.shiftLeft(t - 1), this);
                  else {
                      var i = new Array
                        , r = 7 & t;
                      i.length = 1 + (t >> 3),
                      e.nextBytes(i),
                      r > 0 ? i[0] &= (1 << r) - 1 : i[0] = 0,
                      this.fromString(i, 256)
                  }
              }
              ,
              s.prototype.bitwiseTo = function(t, e, n) {
                  var i, r, o = Math.min(t.t, this.t);
                  for (i = 0; i < o; ++i)
                      n[i] = e(this[i], t[i]);
                  if (t.t < this.t) {
                      for (r = t.s & this.DM,
                      i = o; i < this.t; ++i)
                          n[i] = e(this[i], r);
                      n.t = this.t
                  } else {
                      for (r = this.s & this.DM,
                      i = o; i < t.t; ++i)
                          n[i] = e(r, t[i]);
                      n.t = t.t
                  }
                  n.s = e(this.s, t.s),
                  n.clamp()
              }
              ,
              s.prototype.changeBit = function(t, e) {
                  var n = s.ONE.shiftLeft(t);
                  return this.bitwiseTo(n, e, n),
                  n
              }
              ,
              s.prototype.addTo = function(t, e) {
                  for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r; )
                      i += this[n] + t[n],
                      e[n++] = i & this.DM,
                      i >>= this.DB;
                  if (t.t < this.t) {
                      for (i += t.s; n < this.t; )
                          i += this[n],
                          e[n++] = i & this.DM,
                          i >>= this.DB;
                      i += this.s
                  } else {
                      for (i += this.s; n < t.t; )
                          i += t[n],
                          e[n++] = i & this.DM,
                          i >>= this.DB;
                      i += t.s
                  }
                  e.s = i < 0 ? -1 : 0,
                  i > 0 ? e[n++] = i : i < -1 && (e[n++] = this.DV + i),
                  e.t = n,
                  e.clamp()
              }
              ,
              s.prototype.dMultiply = function(t) {
                  this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                  ++this.t,
                  this.clamp()
              }
              ,
              s.prototype.dAddOffset = function(t, e) {
                  if (0 != t) {
                      for (; this.t <= e; )
                          this[this.t++] = 0;
                      for (this[e] += t; this[e] >= this.DV; )
                          this[e] -= this.DV,
                          ++e >= this.t && (this[this.t++] = 0),
                          ++this[e]
                  }
              }
              ,
              s.prototype.multiplyLowerTo = function(t, e, n) {
                  var i, r = Math.min(this.t + t.t, e);
                  for (n.s = 0,
                  n.t = r; r > 0; )
                      n[--r] = 0;
                  for (i = n.t - this.t; r < i; ++r)
                      n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
                  for (i = Math.min(t.t, e); r < i; ++r)
                      this.am(0, t[r], n, r, 0, e - r);
                  n.clamp()
              }
              ,
              s.prototype.multiplyUpperTo = function(t, e, n) {
                  --e;
                  var i = n.t = this.t + t.t - e;
                  for (n.s = 0; --i >= 0; )
                      n[i] = 0;
                  for (i = Math.max(e - this.t, 0); i < t.t; ++i)
                      n[this.t + i - e] = this.am(e - i, t[i], n, 0, 0, this.t + i - e);
                  n.clamp(),
                  n.drShiftTo(1, n)
              }
              ,
              s.prototype.modInt = function(t) {
                  if (t <= 0)
                      return 0;
                  var e = this.DV % t
                    , n = this.s < 0 ? t - 1 : 0;
                  if (this.t > 0)
                      if (0 == e)
                          n = this[0] % t;
                      else
                          for (var i = this.t - 1; i >= 0; --i)
                              n = (e * n + this[i]) % t;
                  return n
              }
              ,
              s.prototype.millerRabin = function(t) {
                  var e = this.subtract(s.ONE)
                    , n = e.getLowestSetBit();
                  if (n <= 0)
                      return !1;
                  var i = e.shiftRight(n);
                  (t = t + 1 >> 1) > T.length && (t = T.length);
                  for (var r = l(), o = 0; o < t; ++o) {
                      r.fromInt(T[Math.floor(Math.random() * T.length)]);
                      var a = r.modPow(i, this);
                      if (0 != a.compareTo(s.ONE) && 0 != a.compareTo(e)) {
                          for (var u = 1; u++ < n && 0 != a.compareTo(e); )
                              if (0 == (a = a.modPowInt(2, this)).compareTo(s.ONE))
                                  return !1;
                          if (0 != a.compareTo(e))
                              return !1
                      }
                  }
                  return !0
              }
              ,
              s.prototype.clone = function() {
                  var t = l();
                  return this.copyTo(t),
                  t
              }
              ,
              s.prototype.intValue = function() {
                  if (this.s < 0) {
                      if (1 == this.t)
                          return this[0] - this.DV;
                      if (0 == this.t)
                          return -1
                  } else {
                      if (1 == this.t)
                          return this[0];
                      if (0 == this.t)
                          return 0
                  }
                  return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
              }
              ,
              s.prototype.byteValue = function() {
                  return 0 == this.t ? this.s : this[0] << 24 >> 24
              }
              ,
              s.prototype.shortValue = function() {
                  return 0 == this.t ? this.s : this[0] << 16 >> 16
              }
              ,
              s.prototype.signum = function() {
                  return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
              }
              ,
              s.prototype.toByteArray = function() {
                  var t = this.t
                    , e = new Array;
                  e[0] = this.s;
                  var n, i = this.DB - t * this.DB % 8, r = 0;
                  if (t-- > 0)
                      for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[r++] = n | this.s << this.DB - i); t >= 0; )
                          i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i,
                          n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255,
                          i <= 0 && (i += this.DB,
                          --t)),
                          0 != (128 & n) && (n |= -256),
                          0 == r && (128 & this.s) != (128 & n) && ++r,
                          (r > 0 || n != this.s) && (e[r++] = n);
                  return e
              }
              ,
              s.prototype.equals = function(t) {
                  return 0 == this.compareTo(t)
              }
              ,
              s.prototype.min = function(t) {
                  return this.compareTo(t) < 0 ? this : t
              }
              ,
              s.prototype.max = function(t) {
                  return this.compareTo(t) > 0 ? this : t
              }
              ,
              s.prototype.and = function(t) {
                  var e = l();
                  return this.bitwiseTo(t, x, e),
                  e
              }
              ,
              s.prototype.or = function(t) {
                  var e = l();
                  return this.bitwiseTo(t, _, e),
                  e
              }
              ,
              s.prototype.xor = function(t) {
                  var e = l();
                  return this.bitwiseTo(t, v, e),
                  e
              }
              ,
              s.prototype.andNot = function(t) {
                  var e = l();
                  return this.bitwiseTo(t, g, e),
                  e
              }
              ,
              s.prototype.not = function() {
                  for (var t = l(), e = 0; e < this.t; ++e)
                      t[e] = this.DM & ~this[e];
                  return t.t = this.t,
                  t.s = ~this.s,
                  t
              }
              ,
              s.prototype.shiftLeft = function(t) {
                  var e = l();
                  return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                  e
              }
              ,
              s.prototype.shiftRight = function(t) {
                  var e = l();
                  return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                  e
              }
              ,
              s.prototype.getLowestSetBit = function() {
                  for (var t = 0; t < this.t; ++t)
                      if (0 != this[t])
                          return t * this.DB + E(this[t]);
                  return this.s < 0 ? this.t * this.DB : -1
              }
              ,
              s.prototype.bitCount = function() {
                  for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                      t += P(this[n] ^ e);
                  return t
              }
              ,
              s.prototype.testBit = function(t) {
                  var e = Math.floor(t / this.DB);
                  return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
              }
              ,
              s.prototype.setBit = function(t) {
                  return this.changeBit(t, _)
              }
              ,
              s.prototype.clearBit = function(t) {
                  return this.changeBit(t, g)
              }
              ,
              s.prototype.flipBit = function(t) {
                  return this.changeBit(t, v)
              }
              ,
              s.prototype.add = function(t) {
                  var e = l();
                  return this.addTo(t, e),
                  e
              }
              ,
              s.prototype.subtract = function(t) {
                  var e = l();
                  return this.subTo(t, e),
                  e
              }
              ,
              s.prototype.multiply = function(t) {
                  var e = l();
                  return this.multiplyTo(t, e),
                  e
              }
              ,
              s.prototype.divide = function(t) {
                  var e = l();
                  return this.divRemTo(t, e, null),
                  e
              }
              ,
              s.prototype.remainder = function(t) {
                  var e = l();
                  return this.divRemTo(t, null, e),
                  e
              }
              ,
              s.prototype.divideAndRemainder = function(t) {
                  var e = l()
                    , n = l();
                  return this.divRemTo(t, e, n),
                  new Array(e,n)
              }
              ,
              s.prototype.modPow = function(t, e) {
                  var n, i, r = t.bitLength(), o = f(1);
                  if (r <= 0)
                      return o;
                  n = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
                  i = r < 8 ? new y(e) : e.isEven() ? new A(e) : new m(e);
                  var s = new Array
                    , a = 3
                    , u = n - 1
                    , p = (1 << n) - 1;
                  if (s[1] = i.convert(this),
                  n > 1) {
                      var h = l();
                      for (i.sqrTo(s[1], h); a <= p; )
                          s[a] = l(),
                          i.mulTo(h, s[a - 2], s[a]),
                          a += 2
                  }
                  var c, x, _ = t.t - 1, v = !0, g = l();
                  for (r = d(t[_]) - 1; _ >= 0; ) {
                      for (r >= u ? c = t[_] >> r - u & p : (c = (t[_] & (1 << r + 1) - 1) << u - r,
                      _ > 0 && (c |= t[_ - 1] >> this.DB + r - u)),
                      a = n; 0 == (1 & c); )
                          c >>= 1,
                          --a;
                      if ((r -= a) < 0 && (r += this.DB,
                      --_),
                      v)
                          s[c].copyTo(o),
                          v = !1;
                      else {
                          for (; a > 1; )
                              i.sqrTo(o, g),
                              i.sqrTo(g, o),
                              a -= 2;
                          a > 0 ? i.sqrTo(o, g) : (x = o,
                          o = g,
                          g = x),
                          i.mulTo(g, s[c], o)
                      }
                      for (; _ >= 0 && 0 == (t[_] & 1 << r); )
                          i.sqrTo(o, g),
                          x = o,
                          o = g,
                          g = x,
                          --r < 0 && (r = this.DB - 1,
                          --_)
                  }
                  return i.revert(o)
              }
              ,
              s.prototype.modInverse = function(t) {
                  var e = t.isEven();
                  if (this.isEven() && e || 0 == t.signum())
                      return s.ZERO;
                  for (var n = t.clone(), i = this.clone(), r = f(1), o = f(0), l = f(0), a = f(1); 0 != n.signum(); ) {
                      for (; n.isEven(); )
                          n.rShiftTo(1, n),
                          e ? (r.isEven() && o.isEven() || (r.addTo(this, r),
                          o.subTo(t, o)),
                          r.rShiftTo(1, r)) : o.isEven() || o.subTo(t, o),
                          o.rShiftTo(1, o);
                      for (; i.isEven(); )
                          i.rShiftTo(1, i),
                          e ? (l.isEven() && a.isEven() || (l.addTo(this, l),
                          a.subTo(t, a)),
                          l.rShiftTo(1, l)) : a.isEven() || a.subTo(t, a),
                          a.rShiftTo(1, a);
                      n.compareTo(i) >= 0 ? (n.subTo(i, n),
                      e && r.subTo(l, r),
                      o.subTo(a, o)) : (i.subTo(n, i),
                      e && l.subTo(r, l),
                      a.subTo(o, a))
                  }
                  return 0 != i.compareTo(s.ONE) ? s.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a),
                  a.signum() < 0 ? a.add(t) : a) : a
              }
              ,
              s.prototype.pow = function(t) {
                  return this.exp(t, new S)
              }
              ,
              s.prototype.gcd = function(t) {
                  var e = this.s < 0 ? this.negate() : this.clone()
                    , n = t.s < 0 ? t.negate() : t.clone();
                  if (e.compareTo(n) < 0) {
                      var i = e;
                      e = n,
                      n = i
                  }
                  var r = e.getLowestSetBit()
                    , o = n.getLowestSetBit();
                  if (o < 0)
                      return e;
                  for (r < o && (o = r),
                  o > 0 && (e.rShiftTo(o, e),
                  n.rShiftTo(o, n)); e.signum() > 0; )
                      (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                      (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                      e.compareTo(n) >= 0 ? (e.subTo(n, e),
                      e.rShiftTo(1, e)) : (n.subTo(e, n),
                      n.rShiftTo(1, n));
                  return o > 0 && n.lShiftTo(o, n),
                  n
              }
              ,
              s.prototype.isProbablePrime = function(t) {
                  var e, n = this.abs();
                  if (1 == n.t && n[0] <= T[T.length - 1]) {
                      for (e = 0; e < T.length; ++e)
                          if (n[0] == T[e])
                              return !0;
                      return !1
                  }
                  if (n.isEven())
                      return !1;
                  for (e = 1; e < T.length; ) {
                      for (var i = T[e], r = e + 1; r < T.length && i < C; )
                          i *= T[r++];
                      for (i = n.modInt(i); e < r; )
                          if (i % T[e++] == 0)
                              return !1
                  }
                  return n.millerRabin(t)
              }
              ,
              s.prototype.square = function() {
                  var t = l();
                  return this.squareTo(t),
                  t
              }
              ,
              s.prototype.toDouble = function() {
                  return parseFloat(this.toString(10))
              }
              ;
              var I = s;
              t.exports && (t.exports = {
                  BigIntegerFromInt: function(t) {
                      return new s(t.toString(),10)
                  },
                  BigInteger: I
              })
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r, o, s, l, a, u, p;
                  ({SOURCE_CATEGORY_SINGLE_POINT: u, SOURCE_CATEGORY_INITIAL_SEGMENT: o, SOURCE_CATEGORY_REVERSE_SEGMENT: s, SOURCE_CATEGORY_SEGMENT_START_POINT: a, SOURCE_CATEGORY_SEGMENT_END_POINT: l, SOURCE_CATEGORY_BITMASK: r, IS_INVERSE: e} = n(2)),
                  ({Point2d: i} = n(8)),
                  p = function() {
                      class t {
                          static event_for_point(e, n, r) {
                              var o;
                              return o = u,
                              new t(new i(e,n),new i(e,n),r,0,o)
                          }
                          static events_for_segment(e, n, r, u, p) {
                              var h, c, f;
                              return h = new i(e,n),
                              f = new t(h,h,p,0,a),
                              c = new i(r,u),
                              [f, new t(c,c,p,0,l), h.lessThan(c) ? new t(h,c,p,0,o) : new t(c,h,p,0,s)]
                          }
                          constructor(t, e, n, r, o) {
                              null == t && (t = i.origin()),
                              null == e && (e = t),
                              this.point0_ = t.clone(),
                              this.point1_ = e.clone(),
                              this.initial_index_ = n || 0,
                              this.sorted_index_ = r || 0,
                              this.flags_ = o || 0
                          }
                          clone() {
                              return new t(this.point0(),this.point1(),this.initial_index(),this.sorted_index(),this.flags_)
                          }
                          eventType() {
                              return "site_event"
                          }
                          equals(t) {
                              return this.point0().equals(t.point0()) && this.point1().equals(t.point1())
                          }
                          x() {
                              return this.point0_.x()
                          }
                          y() {
                              return this.point0_.y()
                          }
                          x0() {
                              return this.point0_.x()
                          }
                          y0() {
                              return this.point0_.y()
                          }
                          x1() {
                              return this.point1_.x()
                          }
                          y1() {
                              return this.point1_.y()
                          }
                          point0() {
                              return this.point0_
                          }
                          point1() {
                              return this.point1_
                          }
                          initial_index(t) {
                              return this.initial_index_
                          }
                          source_category() {
                              return this.flags_ & r
                          }
                          sorted_index(t) {
                              return void 0 !== t ? (this.sorted_index_ = t,
                              this) : this.sorted_index_
                          }
                          is_inverse() {
                              return (this.flags_ & e) > 0
                          }
                          inverse() {
                              var t;
                              return t = this.point1_,
                              this.point1_ = this.point0_.clone(),
                              this.point0_ = t.clone(),
                              this.flags_ ^= e,
                              this
                          }
                          is_point() {
                              return this.point0_.equals(this.point1_)
                          }
                          is_segment() {
                              return !this.is_point()
                          }
                          print() {
                              return `site_event { p0: ${this.point0().print()}, p1: ${this.point1().print()}, params: s-${this.sorted_index_} i-${this.initial_index_} f-${this.flags_} }`
                          }
                          to_json() {
                              return {
                                  p0: this.point0().to_json(),
                                  p1: this.point1().to_json(),
                                  params: "s-" + this.sorted_index_ + " i-" + this.initial_index_ + " f-" + this.flags_
                              }
                          }
                      }
                      return t.prototype.point0_ = null,
                      t.prototype.point1_ = null,
                      t.prototype.sorted_index_ = 0,
                      t.prototype.initial_index_ = 0,
                      t.prototype.flags_ = 0,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      SiteEvent: p
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e;
                  e = function() {
                      class t {
                          constructor(t, e, n) {
                              this.center_x_ = t || 0,
                              this.center_y_ = e || 0,
                              this.lower_x_ = n || 0,
                              this.is_active_ = !0
                          }
                          eventType() {
                              return "circle_event"
                          }
                          x(t) {
                              return void 0 !== t ? (this.center_x_ = t,
                              this) : this.center_x_
                          }
                          y(t) {
                              return void 0 !== t ? (this.center_y_ = t,
                              this) : this.center_y_
                          }
                          lower_x(t) {
                              return void 0 !== t ? (this.lower_x_ = t,
                              this) : this.lower_x_
                          }
                          lower_y() {
                              return this.center_y_
                          }
                          is_active() {
                              return this.is_active_
                          }
                          deactivate() {
                              return this.is_active_ = !1,
                              this
                          }
                          print() {
                              var t;
                              return t = this.is_active() ? 1 : 0,
                              `circle_event { c_x: ${this.center_x_} c_y: ${this.center_y_} lower_x: ${this.lower_x_} is_active: ${t} }`
                          }
                          to_json() {
                              return {
                                  c_x: parseFloat(this.center_x_.toFixed(6)),
                                  c_y: parseFloat(this.center_y_.toFixed(6)),
                                  lower_x: parseFloat(this.lower_x_.toFixed(6)),
                                  is_active: this.is_active() ? 1 : 0
                              }
                          }
                      }
                      return t.prototype.center_x_ = 0,
                      t.prototype.center_y_ = 0,
                      t.prototype.lower_x_ = 0,
                      t.prototype.is_active_ = !0,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      CircleEvent: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e;
                  e = function() {
                      class t {
                          constructor(t, e) {
                              var n;
                              n = e || t,
                              this.left_site_ = t.clone(),
                              this.right_site_ = n.clone()
                          }
                          left_site(t) {
                              return void 0 !== t ? (this.left_site_ = t,
                              this) : this.left_site_
                          }
                          right_site(t) {
                              return void 0 !== t ? (this.right_site_ = t,
                              this) : this.right_site_
                          }
                          print() {
                              return `beach_node_key { left_site: ${this.left_site_.print()} right_site: ${this.right_site_.print()} }`
                          }
                          to_json() {
                              return {
                                  left_site: this.left_site_.to_json(),
                                  right_site: this.right_site_.to_json()
                              }
                          }
                      }
                      return t.prototype.left_site_ = null,
                      t.prototype.right_site_ = null,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      BeachLineNodeKey: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e;
                  e = function() {
                      class t {
                          constructor(t) {
                              this.circle_event_ = null,
                              this.edge_ = t
                          }
                          circle_event(t) {
                              return void 0 !== t ? (this.circle_event_ = t,
                              this) : this.circle_event_
                          }
                          edge(t) {
                              return void 0 !== t ? (this.edge_ = t,
                              this) : this.edge_
                          }
                          print() {
                              var t;
                              return `beach_line_node_data { circle_event: ${(null != (t = this.circle_event()) ? t.print() : void 0) || "NULL"} edge: TODO}`
                          }
                          to_json() {
                              var t, e;
                              return {
                                  circle_event: (null != (t = this.circle_event()) ? t.to_json() : void 0) || null,
                                  edge: (null != (e = this.edge_) ? e.to_json() : void 0) || null
                              }
                          }
                      }
                      return t.prototype.circle_event_ = null,
                      t.prototype.edge_ = null,
                      t
                  }
                  .call(this),
                  null !== t && (t.exports = {
                      BeachLineNodeData: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e;
                  e = class {
                      constructor(t, e, n, i) {
                          this.path = t,
                          this.holes = e,
                          this.filtering_angle = n,
                          this.debug_flags = i
                      }
                      showErrorAndDumpData(t) {
                          var e;
                          return e = "Invalid medial axis detected!\n",
                          null != t && (e += "Possible cause: " + t + "\n"),
                          e += "Input data: \n",
                          e += "  path: " + JSON.stringify(this.path) + "\n",
                          e += "  holes: " + JSON.stringify(this.holes) + "\n",
                          e += "  filtering_angle: " + JSON.stringify(this.filtering_angle) + "\n",
                          e += "  debug_flags: " + JSON.stringify(this.debug_flags) + "\n",
                          console.error(e)
                      }
                      isNaNEdge(t) {
                          return !!(isNaN(t.vertex0().x()) || isNaN(t.vertex0().y()) || isNaN(t.vertex1().x()) || isNaN(t.vertex1().y())) && (this.showErrorAndDumpData("Self intersecting polygon?"),
                          !0)
                      }
                      isInvalidPrimaryEdge(t) {
                          return (!t.is_primary() || null == t.vertex0() || null == t.vertex1()) && (this.showErrorAndDumpData("Not a primary edge"),
                          !0)
                      }
                  }
                  ,
                  null !== t && (t.exports = {
                      voronoi_diagnostics: e
                  })
              }
              ).call(this, n(0)(t))
          }
          , function(t, e, n) {
              (function(t) {
                  var e, i, r;
                  ({roundTowardsZero: i} = n(1)),
                  ({Point: e} = n(4)),
                  r = class {
                      constructor() {}
                      discretize(t, n, r, o) {
                          var s, l, a, u, p, h, c, f, d, y, m, x, _, v, g, E, P, S, L, A, T;
                          if (E = (T = (L = i(n.high().x) - i(n.low().x)) * L + (A = i(n.high().y) - i(n.low().y)) * A) * this.get_point_projection(o[0], n),
                          g = T * this.get_point_projection(o[1], n),
                          P = L * (_ = i(t.x) - i(n.low().x)) + A * (v = i(t.y) - i(n.low().y)),
                          0 === (S = L * v - A * _))
                              return u = "Invalid parabola detected: \npoint: " + JSON.stringify(t) + "\nsegment: " + JSON.stringify(n) + "\ndiscretization: " + JSON.stringify(o),
                              void console.error(u);
                          for (c = o[1],
                          o.pop(),
                          (x = []).unshift(g),
                          s = E,
                          l = this.parabola_y(s, P, S),
                          f = r * r * T; x.length > 0; )
                              y = x[0],
                              (a = (a = ((m = this.parabola_y(y, P, S)) - l) * ((d = (m - l) / (y - s) * S + P) - s) - (y - s) * (this.parabola_y(d, P, S) - l)) * a / ((m - l) * (m - l) + (y - s) * (y - s))) <= f ? (x.shift(),
                              p = (L * y - A * m) / T + i(n.low().x),
                              h = (L * m + A * y) / T + i(n.low().y),
                              o.push(new e(p,h)),
                              s = y,
                              l = m) : x.unshift(d);
                          return o[o.length - 1] = c
                      }
                      discretize2(t, n, r, o) {
                          var s, l, a, u, p, h, c, f, d, y, m, x, _, v, g, E, P, S, L, A, T, C, I, b, O, w;
                          if (L = (w = (b = i(n.high().x) - i(n.low().x)) * b + (O = i(n.high().y) - i(n.low().y)) * O) * this.get_point_projection(o[0], n),
                          E = w * this.get_point_projection(o[1], n),
                          C = b * (_ = i(t.x) - i(n.low().x)) + O * (v = i(t.y) - i(n.low().y)),
                          0 === (I = b * v - O * _))
                              return u = "Invalid parabola detected: \npoint: " + JSON.stringify(t) + "\nsegment: " + JSON.stringify(n) + "\ndiscretization: " + JSON.stringify(o),
                              void console.error(u);
                          if (T = L > E,
                          S = Math.min(L, E),
                          P = Math.max(L, E),
                          a = r * Math.sqrt(w),
                          g = [],
                          S <= C && C <= P) {
                              for (s = C,
                              l = I / 2; S < s; )
                                  g.unshift({
                                      x: s,
                                      y: l
                                  }),
                                  l += a,
                                  s = this.parabola_x_low(l, C, I);
                              for (s = C,
                              l = I / 2,
                              p = !0; s < P; )
                                  p || g.push({
                                      x: s,
                                      y: l
                                  }),
                                  l += a,
                                  s = this.parabola_x_high(l, C, I),
                                  p = !1
                          } else if (C < S)
                              for (s = S,
                              l = this.parabola_y(s, C, I),
                              p = !0; s < P; )
                                  p || g.push({
                                      x: s,
                                      y: l
                                  }),
                                  l += a,
                                  s = this.parabola_x_high(l, C, I),
                                  p = !1;
                          else if (P < C)
                              for (s = S,
                              l = this.parabola_y(s, C, I),
                              p = !0; s < P && (p || g.push({
                                  x: s,
                                  y: l
                              }),
                              !((l -= a) < I / 2)); )
                                  s = this.parabola_x_low(l, C, I),
                                  p = !1;
                          for (d = o[1],
                          o.pop(),
                          T && g.reverse(),
                          h = 0,
                          y = g.length; h < y; h++)
                              c = (b * (m = (A = g[h]).x) - O * (x = A.y)) / w + i(n.low().x),
                              f = (b * x + O * m) / w + i(n.low().y),
                              o.push(new e(c,f));
                          return o.push(d)
                      }
                      discretize_central_angle(t, n, r, o) {
                          var s, l, a, u, p, h, c, f, d, y, m, x, _, v, g, E, P, S, L, A, T, C, I, b, O, w, N, B;
                          if (L = (b = (C = i(n.high().x) - i(n.low().x)) * C + (I = i(n.high().y) - i(n.low().y)) * I) * this.get_point_projection(o[0], n),
                          S = b * this.get_point_projection(o[1], n),
                          A = C * (E = i(t.x) - i(n.low().x)) + I * (P = i(t.y) - i(n.low().y)),
                          0 === (T = C * P - I * E))
                              return c = "Invalid parabola detected: \npoint: " + JSON.stringify(t) + "\nsegment: " + JSON.stringify(n) + "\ndiscretization: " + JSON.stringify(o),
                              void console.error(c);
                          for (y = o[1],
                          o.pop(),
                          (g = []).unshift(S),
                          u = L,
                          p = this.parabola_y(u, A, T),
                          l = A,
                          a = T; g.length > 0; )
                              _ = g[0],
                              x = ((v = this.parabola_y(_, A, T)) - p) / (_ - u) * T + A,
                              this.parabola_y(x, A, T),
                              O = _ - l,
                              w = v - a,
                              N = u - l,
                              B = p - a,
                              0 === (m = Math.sqrt((O * O + w * w) * (N * N + B * B))) ? (console.error("Division by zero!"),
                              s = 0) : (h = (O * N + w * B) / m,
                              s = Math.acos(h)),
                              s <= r ? (g.shift(),
                              f = (C * _ - I * v) / b + i(n.low().x),
                              d = (C * v + I * _) / b + i(n.low().y),
                              o.push(new e(f,d)),
                              u = _,
                              p = v) : g.unshift(x);
                          return o[o.length - 1] = y
                      }
                      discretize_point_point(t, n, i, r) {
                          var o, s, l, a, u, p, h, c, f, d, y, m;
                          for (p = function(t, e, n, i) {
                              var r, o;
                              return r = t - n,
                              o = e - i,
                              Math.sqrt(r * r + o * o)
                          }
                          ,
                          h = r[1],
                          r.pop(),
                          (m = []).unshift(h),
                          o = r[0].x,
                          s = r[0].y; m.length > 0; )
                              c = (o + (d = m[0].x)) / 2,
                              f = (s + (y = m[0].y)) / 2,
                              l = p(o, s, t.x, t.y),
                              a = p(c, f, t.x, t.y),
                              u = p(d, y, t.x, t.y),
                              Math.abs(l - u) <= i && Math.abs(l - a) <= i ? (m.shift(),
                              r.push(new e(d,y)),
                              o = d,
                              s = y) : m.unshift({
                                  x: c,
                                  y: f
                              });
                          return r.push(h)
                      }
                      parabola_y(t, e, n) {
                          return ((t - e) * (t - e) + n * n) / (n + n)
                      }
                      parabola_x_low(t, e, n) {
                          var i;
                          return (i = 2 * n * t - n * n) < 0 ? (console.error("can't discretisize! trying to get a square root of a negative number !!"),
                          null) : e - Math.sqrt(i)
                      }
                      parabola_x_high(t, e, n) {
                          var i;
                          return (i = 2 * n * t - n * n) < 0 ? (console.error("can't discretisize! trying to get a square root of a negative number !!"),
                          null) : e + Math.sqrt(i)
                      }
                      get_point_projection(t, e) {
                          var n, r;
                          return n = i(e.high().x) - i(e.low().x),
                          r = i(e.high().y) - i(e.low().y),
                          (n * (t.x - i(e.low().x)) + r * (t.y - i(e.low().y))) / (n * n + r * r)
                      }
                  }
                  ,
                  null !== t && (t.exports = {
                      voronoi_visual_utils: r
                  })
              }
              ).call(this, n(0)(t))
          }
          ])
      }
      ,
      t.exports = i()
  },
  1250: function(t, e, n) {
      n(1251),
      n(1252),
      n(1253),
      n(342),
      n(1254),
      n(1255),
      n(1256),
      n(1257),
      n(1258),
      n(341),
      n(1259),
      n(1260),
      n(1261),
      n(1262),
      n(1263),
      n(1264),
      n(1265),
      n(1266),
      n(1267),
      n(1268),
      n(1269),
      n(1270),
      n(1271)
  },
  1251: function(t, e) {
      var n, i;
      EASEL.orderComparators = (n = function(t, e, n, r) {
          if (null != t && null != e) {
              if (null != n && null != r && i(t, e))
                  return n - r;
              const o = Math.floor(t.minX)
                , s = Math.floor(e.minX);
              return o === s ? (o % 2 === 0 ? 1 : -1) * (t.minY - e.minY) : o - s
          }
          return 0
      }
      ,
      i = function(t, e) {
          return !(t.maxX < e.minX) && !(t.minX > e.maxX) && !(t.minY > e.maxY) && !(t.maxY < e.minY)
      }
      ,
      {
          numerical: (t,e)=>t - e,
          entitiesByXY: (t,e)=>n(t.boundary.boundingBox(), e.boundary.boundingBox()),
          toolpathObjectsByBoundingBoxAndXY: (t,e)=>n(t.boundingBox, e.boundingBox, t.enclosedArea, e.enclosedArea),
          boundingBoxComparator: n
      })
  },
  1252: function(t, e) {
      EASEL.polygonalPreviewer = {
          generate(t, e) {
              const {dimensions: n, textureBottoms: i, lastBit: r, strokeBit: o, volumes: s, tile: l} = e
                , a = null != l ? l.getOffsetDistance() : 0
                , u = EASEL.previewMeshSerializer(n.x, n.y, n.z)
                , p = EASEL.previewMeshSerializer(n.x, n.y, n.z + 3e-4)
                , h = function(t, e, n) {
                  let r;
                  for (r = 0; r < i.length; r++) {
                      if (i[r] <= -n)
                          break
                  }
                  const o = t.first().points
                    , s = e.all().map((t=>t.points))
                    , l = EASEL.shapeTriangulator.triangulate(o, s);
                  return u.addTriangles(l, {
                      depth: n,
                      texture: r
                  })
              }
                , c = function(t, e) {
                  for (let n = 0; n < i.length; n++) {
                      let r;
                      const o = i[n];
                      [r,t] = EASEL.shapeTriangulator.clip(t, o),
                      r.length > 0 && u.addTriangles(r, {
                          clip: e,
                          depth: 0,
                          texture: n
                      })
                  }
              };
              return t.addStep((()=>EASEL.toolpathObjectsGenerators.fromVolumes({
                  volumes: s,
                  bit: o,
                  materialThickness: n.z,
                  tile: l,
                  isPreview: !0
              }))),
              t.addStep((t=>{
                  const {x: e, y: i, z: o} = n
                    , s = r.type() === EASEL.bitGroups.v ? 0 : -t.endDepth
                    , l = [{
                      x: 0,
                      y: 0 - a,
                      z: s
                  }, {
                      x: 0,
                      y: 0 - a,
                      z: -o
                  }, {
                      x: 0,
                      y: i - a,
                      z: s
                  }, {
                      x: 0,
                      y: i - a,
                      z: -o
                  }, {
                      x: e,
                      y: 0 - a,
                      z: s
                  }, {
                      x: e,
                      y: 0 - a,
                      z: -o
                  }, {
                      x: e,
                      y: i - a,
                      z: s
                  }, {
                      x: e,
                      y: i - a,
                      z: -o
                  }]
                    , u = [[1, 4, 5], [4, 1, 0], [2, 3, 7], [7, 6, 2], [1, 3, 2], [1, 2, 0], [4, 6, 7], [7, 5, 4]].map((t=>[l[t[2]], l[t[1]], l[t[0]]]));
                  return c(u, !1),
                  {
                      object: t
                  }
              }
              )),
              t.addStep({
                  weight: 20
              }, (function({object: e}) {
                  const i = [{
                      x: 0,
                      y: 0 - a
                  }, {
                      x: n.x,
                      y: 0 - a
                  }, {
                      x: n.x,
                      y: n.y - a
                  }, {
                      x: 0,
                      y: n.y - a
                  }, {
                      x: 0,
                      y: 0 - a
                  }]
                    , o = EASEL.paths([EASEL.path(i)])
                    , s = [0, ...e.depths.slice(0, e.depths.length - 1)];
                  for (let n = 0; n < s.length; n++) {
                      const i = s[n]
                        , l = e.depths[n];
                      t.addStep({
                          name: "nonIntersectingPathGroups"
                      }, (function() {
                          const t = e.getSilhouette(r, i)
                            , n = EASEL.strategyCommon.nonIntersectingPathGroups(t)
                            , s = o.exclusion(t);
                          return {
                              cutArea: t,
                              cutGroups: n,
                              uncutArea: s,
                              uncutGroups: EASEL.strategyCommon.nonIntersectingPathGroups(s)
                          }
                      }
                      )),
                      t.addStep({
                          weight: 10
                      }, (function({cutArea: n, cutGroups: o, uncutGroups: s}) {
                          for (const {boundary: e, holes: p} of o)
                              r.type() === EASEL.bitGroups.v ? t.addStep({
                                  name: "EASEL.vCarving.generateVoronoiDiagram"
                              }, (function() {
                                  const t = EASEL.vCarving.generateVoronoiDiagram(e, p, r.radianTipAngle(), i);
                                  let n = [];
                                  for (let[e,i] of t)
                                      o = e,
                                      s = i,
                                      n = n.concat(EASEL.vCarving.triangulateRegion(o, s));
                                  var o, s;
                                  return n
                              }
                              )) : t.addStep({
                                  name: "EASEL.layerByLayer().triangulateExtrusion"
                              }, (function() {
                                  t.addStep((function() {
                                      const {points: t} = e.first();
                                      return EASEL.layerByLayer().triangulateExtrusion(t, -i, -l)
                                  }
                                  ));
                                  for (const e of p.all())
                                      t.addStep((function(t) {
                                          return t = t.concat(EASEL.layerByLayer().triangulateExtrusion(e.points, -i, -l))
                                      }
                                      ))
                              }
                              )),
                              t.addStep({
                                  name: "addTriangles"
                              }, (function(t) {
                                  c(t)
                              }
                              ));
                          for (const {boundary: e, holes: r} of s)
                              t.addStep({
                                  name: "addPath"
                              }, (()=>h(e, r, i))),
                              t.addStep({
                                  name: "addUncutEdgeTriangles"
                              }, (()=>e.all().map((t=>c(EASEL.layerByLayer().triangulateExtrusion(t.points, -i, -l, !0), !1)))));
                          const a = e.getSilhouette(null, i)
                            , u = EASEL.strategyCommon.simplifyLayer(a.exclusion(n));
                          for (const {boundary: e, holes: r} of EASEL.strategyCommon.nonIntersectingPathGroups(u))
                              t.addStep({
                                  name: "highlightRendering"
                              }, (function() {
                                  const t = e.first().points
                                    , n = r.all().map((t=>t.points))
                                    , o = EASEL.shapeTriangulator.triangulate(t, n);
                                  return p.addTriangles(o, {
                                      depth: i,
                                      color: 13378048,
                                      opacity: .5
                                  })
                              }
                              ))
                      }
                      ))
                  }
                  const l = e.depths[e.depths.length - 1];
                  null != l && l !== n.z && h(o, EASEL.paths(), l)
              }
              )),
              t.addStep((()=>({
                  material: u,
                  highlight: p
              }))),
              t
          }
      }
  },
  1253: function(t, e) {
      EASEL.previewMeshSerializer = function(t, e, n) {
          const i = 1 / t
            , r = 1 / e
            , o = [];
          return {
              addTriangles: function(t, e) {
                  null == e && (e = {});
                  const {vertices: n, uvs: s} = function(t) {
                      const e = new Float32Array(9 * t.length)
                        , n = new Float32Array(6 * t.length);
                      for (let o = 0; o < t.length; o++) {
                          const s = t[o];
                          e[9 * o + 0] = s[0].x,
                          e[9 * o + 1] = s[0].y,
                          e[9 * o + 2] = s[0].z,
                          e[9 * o + 3] = s[1].x,
                          e[9 * o + 4] = s[1].y,
                          e[9 * o + 5] = s[1].z,
                          e[9 * o + 6] = s[2].x,
                          e[9 * o + 7] = s[2].y,
                          e[9 * o + 8] = s[2].z,
                          n[6 * o + 0] = i * s[0].x,
                          n[6 * o + 1] = r * s[0].y,
                          n[6 * o + 2] = i * s[1].x,
                          n[6 * o + 3] = r * s[1].y,
                          n[6 * o + 4] = i * s[2].x,
                          n[6 * o + 5] = r * s[2].y
                      }
                      return {
                          vertices: e,
                          uvs: n
                      }
                  }(t);
                  o.push({
                      uv: s,
                      position: n,
                      options: e
                  })
              },
              toSerialForm: ()=>({
                  x: t,
                  y: e,
                  z: n,
                  meshes: o
              })
          }
      }
  },
  1254: function(t, e) {
      EASEL.shapeTriangulator = function() {
          const t = function(t, e) {
              let n = 0;
              for (; n < e.length; )
                  t.push(e[n].x),
                  t.push(e[n].y),
                  n++
          };
          return {
              triangulate: function(e, n) {
                  const i = [];
                  t(i, e);
                  const r = [];
                  let o = e.length
                    , s = 0;
                  for (; s < n.length; )
                      r.push(o),
                      o += n[s].length,
                      t(i, n[s]),
                      s++;
                  const l = earcut(i, r, 2)
                    , a = [];
                  for (s = 0; s < l.length; ) {
                      const t = l.slice(s, s + 3).map((t=>({
                          x: i[2 * t],
                          y: i[2 * t + 1],
                          z: 0
                      })));
                      a.push(t),
                      s += 3
                  }
                  return a
              },
              clip: function(t, e) {
                  const n = []
                    , i = [];
                  for (let r of Array.from(t))
                      if (!(isNaN(r[0].z) || isNaN(r[1].z) || isNaN(r[2].z)))
                          if (e <= r[0].z && e <= r[1].z && e <= r[2].z)
                              n.push(r);
                          else if (r[0].z <= e && r[1].z <= e && r[2].z <= e)
                              i.push(r);
                          else {
                              let t;
                              for (; !(r[2].z <= e && e <= r[0].z); )
                                  r = [r[1], r[2], r[0]];
                              if (e <= r[1].z) {
                                  t = EASEL.math.pointOnSegmentAtZ(r[0], r[2], e);
                                  const o = EASEL.math.pointOnSegmentAtZ(r[1], r[2], e);
                                  n.push([r[0], r[1], o]),
                                  n.push([r[0], o, t]),
                                  i.push([t, o, r[2]])
                              } else {
                                  const o = EASEL.math.pointOnSegmentAtZ(r[0], r[1], e);
                                  t = EASEL.math.pointOnSegmentAtZ(r[0], r[2], e),
                                  n.push([r[0], o, t]),
                                  i.push([o, r[1], r[2]]),
                                  i.push([t, o, r[2]])
                              }
                          }
                  return [n, i]
              }
          }
      }()
  },
  1255: function(t, e) {
      EASEL.surfacing = function() {
          const t = function(t, e) {
              if (null == t || 0 === t.length)
                  return [];
              if (null == e || 0 === e.length)
                  return t;
              let n = [];
              return t[0].x === e[e.length - 1].x && t[0].y === e[e.length - 1].y ? n = e.concat(t.slice(1)) : e[0].x === t[t.length - 1].x && e[0].y === t[t.length - 1].y ? n = t.concat(e.slice(1)) : t[0].x === e[0].x && t[0].y === e[0].y ? n = t.slice(1).reverse().concat(e) : t[t.length - 1].x === e[e.length - 1].x && t[t.length - 1].y === e[e.length - 1].y && (n = t.concat(e.slice(0, e.length - 1).reverse())),
              n
          };
          return {
              computeStartDepth: function(t) {
                  let e = 0;
                  const n = t.overlaps.isContainedBy.filter((t=>"pocket" === t.type));
                  return n.length > 0 && (e = n.sort(((t,e)=>t.boundary.area() - e.boundary.area()))[0].depth),
                  e
              },
              computeSurfacingCurve: function(t, e, n, i, r, o, s) {
                  let l, a;
                  const u = .005 * s;
                  return "pocket" === e ? (l = EASEL.matrix().scaledBy(r, n - i).translatedBy(0, i),
                  a = l.transformedPath(t)) : (l = EASEL.matrix().scaledBy(u - r, n - i).translatedBy(r, i),
                  a = l.transformedPath(t)),
                  o && a.reverse(),
                  a
              },
              computeSmoothingCurve: function(e, n, i, r) {
                  const o = e[0]
                    , s = e[e.length - 1]
                    , l = o.y - r
                    , a = s.y
                    , u = s.y - r / 2
                    , p = -r
                    , h = s.x + r;
                  let c = !1
                    , f = []
                    , d = [];
                  i === ("pocket" === n) ? (f = [{
                      x: p,
                      y: a
                  }, {
                      x: p,
                      y: l
                  }, {
                      x: o.x,
                      y: l
                  }],
                  d = [{
                      x: p,
                      y: u
                  }, {
                      x: p,
                      y: l
                  }, {
                      x: o.x - r / 2,
                      y: l
                  }]) : (f = [{
                      x: h,
                      y: a
                  }, {
                      x: h,
                      y: l
                  }, {
                      x: o.x,
                      y: l
                  }],
                  d = [{
                      x: h,
                      y: u
                  }, {
                      x: h,
                      y: l
                  }, {
                      x: o.x + r / 2,
                      y: l
                  }],
                  c = !0),
                  d.push({
                      x: d[2].x,
                      y: u
                  });
                  const y = EASEL.paths.fromPointArrays([e]).offsetStrokes(r / 2)
                    , m = EASEL.paths.fromPointArrays([e.concat(f)]).intersection(EASEL.paths.fromPointArrays([d]))
                    , x = y.intersectionWithStrokes(m).all().map((t=>t.points));
                  let _ = [];
                  if (x.length > 2 || 0 === x.length)
                      throw new Error("Clipper operation result incorrect number of paths, couldn't generate smoothing curve!");
                  if (_ = t(x[0], x[1]),
                  0 === _.length)
                      throw new Error("Couldn't generate smoothing curve!");
                  _[0].y > _[_.length - 1].y && _.reverse();
                  return function(t, e, n) {
                      return n && t[t.length - 1].x > e[e.length - 1].x && e.push({
                          x: t[t.length - 1].x,
                          y: e[e.length - 1].y
                      }),
                      e
                  }(e, EASEL.matrix().translatedBy(0, r / 2).transformedPath(_), c)
              },
              linkIfFragmented: t
          }
      }
  },
  1256: function(t, e) {
      EASEL.tabs = function() {
          const t = (t,e)=>({
              x: t.x,
              y: t.y,
              z: e
          })
            , e = function(t, e, n) {
              const i = [];
              for (let r of e) {
                  const e = t.closestPointAndDistanceTo(r.center);
                  e.distance < n / 2 && i.push({
                      point: e.point,
                      segmentIndex: e.index,
                      length: r.length,
                      height: r.height
                  })
              }
              return i.sort(((t,e)=>t.segmentIndex - e.segmentIndex))
          }
            , n = t=>EASEL.pathUtils.pointsEqual(t[0], t[t.length - 1])
            , i = function(t, e) {
              let n = [];
              for (let i = 0; i < e.length; i++) {
                  const s = e[i];
                  n.push(o(s.point, s.length / 2, t, s.segmentIndex, s.height, i)),
                  n.push(r(s.point, s.length / 2, t, s.segmentIndex, s.height, i))
              }
              return n = n.filter((t=>null != t)),
              n.sort((function(t, e) {
                  return t.index === e.index ? e.distance - t.distance : t.index - e.index
              }
              ))
          };
          var r = function(t, e, i, o, s, l) {
              let a;
              const u = EASEL.math.distance(t, i[o]);
              return u >= e ? (a = EASEL.math.pointAtDistance(t, i[o], e, u),
              {
                  point: a,
                  index: o,
                  distance: u - e,
                  rising: !1,
                  height: s,
                  tabId: l
              }) : o !== i.length - 1 || n(i) ? r(i[o], e - u, i, (o + 1) % i.length, s, l) : {
                  point: i[i.length - 1],
                  index: i.length - 1,
                  distance: 0,
                  rising: !1,
                  height: s,
                  tabId: l
              }
          }
            , o = function(t, e, i, r, s, l) {
              let a;
              const u = EASEL.math.distance(t, i[r - 1]);
              if (u > e)
                  return a = EASEL.math.pointAtDistance(t, i[r - 1], e, u),
                  {
                      point: a,
                      index: r,
                      distance: e + EASEL.math.distance(t, i[r]),
                      rising: !0,
                      height: s,
                      tabId: l
                  };
              if (u === e || 1 === r && !n(i))
                  return {
                      point: i[r - 1],
                      index: r - 1,
                      distance: 0,
                      rising: !0,
                      height: s,
                      tabId: l
                  };
              {
                  const t = 1 !== r ? r - 1 : i.length - 1;
                  return o(i[t], e - u, i, t, s, l)
              }
          };
          const s = function(e, n, i) {
              let r = 0;
              const o = []
                , s = n - i[r].height;
              let l = [];
              for (var a of i.slice().reverse())
                  a.rising ? l = l.filter((t=>t !== a.tabId)) : l.push(a.tabId);
              let u = l.length;
              for (let p = 0; p < e.length; p++) {
                  const l = e[p];
                  let a = null;
                  for (; r < i.length && p === i[r].index; ) {
                      const l = i[r];
                      l.rising ? (0 === u && 0 !== l.index && o.push(t(l.point, -n)),
                      o.push(t(l.point, -s)),
                      u++) : (o.push(t(l.point, -s)),
                      1 !== u || l.index === e.length - 1 && 0 === l.distance || o.push(t(l.point, -n)),
                      u--),
                      a = l,
                      r++
                  }
                  null != a && EASEL.pathUtils.pointsEqual(a.point, l) || o.push(t(l, u > 0 ? -s : -n))
              }
              return o
          };
          return {
              endPointsIntoBottomPath: s,
              findFallingEnd: r,
              findRisingEnd: o,
              findCenters: e,
              createBottomPathsWithTabs: function(n) {
                  const r = [];
                  for (let o of n.strokes.all()) {
                      if (n.tabs.length > 0) {
                          const {tabs: t} = n
                            , l = e(o, t, n.strokeSize)
                            , a = i(o.points, l);
                          if (a.length > 0) {
                              r.push(EASEL.path(s(o.points, n.depth, a)));
                              continue
                          }
                      }
                      r.push(EASEL.path(o.points.map((e=>t(e, -n.depth)))))
                  }
                  return r
              }
          }
      }()
  },
  1257: function(t, e, n) {
      EASEL.toolpathObjectsGenerators = function() {
          const t = function(t, e, n) {
              let i;
              const r = n.getPointArrays();
              return i = "outline" === t.cut.type ? e.intersectionWithStrokes(r) : e.intersection(r),
              i
          }
            , e = function(t, e, n) {
              null == e && (e = 0),
              null == n && (n = []);
              const i = EASEL.toolpathObject();
              return 0 === t.length || (i.entities = t.slice().sort(((t,e)=>t.shapeIndex - e.shapeIndex)),
              i.depths = t.map((t=>t.depth)).sort(EASEL.orderComparators.numerical).filter(((t,e,n)=>t !== n[e - 1])),
              i.startDepth = e,
              i.depths.length > 0 && (i.endDepth = i.depths.slice(-1)[0]),
              i.silhouettes = n.slice(),
              i.computeBoundingBox(),
              i.computeEnclosedArea()),
              i
          };
          return {
              fromVolumes: function(e) {
                  let {volumes: n, bit: i, materialThickness: r, tile: o, isPreview: s} = e;
                  const l = EASEL.toolpathObject();
                  let a = 0;
                  null != o && (n = n.filter((function(t) {
                      return "drill" !== t.cut.type || !(t.shape.center.y < o.getOffsetDistance() || t.shape.center.y > o.getOffsetDistance() + o.getDimensions().y) && (0 === o.getOffsetDistance() || t.shape.center.y > o.getOffsetDistance() + o.getOverlapDistance())
                  }
                  )));
                  for (const u of n) {
                      const e = i.inchWidth(u.cut.depth);
                      let n = EASEL.volumeHelper.segmentsWithOffsets(u, e);
                      null != u.cut.tabs && u.cut.tabs.forEach((function(t) {
                          if (t.center = EASEL.volumeHelper.rotatedPoint(u, t.center),
                          null != o)
                              return t.center.y -= o.getOffsetDistance()
                      }
                      )),
                      null != o && (n = s ? n : t(u, n, o),
                      n = n.translate(0, -1 * o.getOffsetDistance()),
                      "drill" === u.cut.type && (u.shape.center.y -= o.getOffsetDistance())),
                      "outline" === u.cut.type ? l.entities.push(EASEL.profile(n, u, a++, e, u.cut.depth === r)) : "fill" === u.cut.type ? l.entities.push(EASEL.pocket(n, u, a++)) : "drill" === u.cut.type && l.entities.push(EASEL.drill(u, a++, e)),
                      l.depths.push(u.cut.depth)
                  }
                  return l.depths = l.depths.sort(EASEL.orderComparators.numerical).filter(((t,e,n)=>t !== n[e - 1])),
                  l.depths.length > 0 && (l.endDepth = l.depths.slice(-1)[0]),
                  l.silhouettes = [],
                  l
              },
              fromEntityArray: e,
              generateToolpathObjectsAtDepth: function(t, n, i) {
                  let r, o, s, l, a;
                  null == i && (i = []);
                  const u = [];
                  let p = t.slice(0).sort(((t,e)=>e.shapeIndex - t.shapeIndex));
                  p = p.filter((t=>"drill" === t.type && t.depth >= n || "drill" !== t.type));
                  const h = []
                    , c = [];
                  for (o = 0; o < p.length; o++)
                      r = p[o],
                      r.id = o,
                      h.push(r.depth < n ? 4 : 0),
                      c.push({});
                  for (o = 0; o < p.length; o++) {
                      r = p[o];
                      const t = [...r.overlaps.contains, ...r.overlaps.isContainedBy, ...r.overlaps.intersects];
                      for (let e of t)
                          if (p.includes(e)) {
                              let t = null;
                              t = null != c[e.id][o] ? c[e.id][o].region : r.outerBoundary.intersection(e.outerBoundary),
                              c[o][e.id] = {
                                  node: e,
                                  region: t
                              }
                          }
                  }
                  const f = function(t, e) {
                      delete c[t][e],
                      delete c[e][t]
                  };
                  let d = EASEL.paths();
                  for (o = 0; o < p.length; o++) {
                      if (r = p[o],
                      d.boundingBoxIntersection(r.boundary)) {
                          const t = [];
                          if (d.contains(r.boundary)) {
                              for (l in c[o])
                                  a = c[o][l],
                                  t.push([o, l]);
                              h[o] |= 1
                          } else
                              for (l in c[o])
                                  a = c[o][l],
                                  a.node.shapeIndex < r.shapeIndex && d.contains(a.region) && t.push([o, a.node.id]);
                          for (let e of t)
                              f(e[0], e[1])
                      }
                      d = d.union(r.boundary)
                  }
                  for (o = 0; o < c.length; o++) {
                      var y = c[o];
                      if (!(1 & h[o])) {
                          r = p[o];
                          const t = [];
                          for (l in y)
                              a = y[l],
                              a.node.id > r.id && t.push(a.node.id);
                          t.sort(EASEL.orderComparators.numerical),
                          d = EASEL.paths();
                          let e = o + 1;
                          for (let n of t) {
                              for (; e < n; )
                                  1 & h[e] || (d = d.union(p[e].boundary)),
                                  e++;
                              d.contains(c[o][n].region) && f(o, n)
                          }
                      }
                  }
                  var m = function(t, e, n) {
                      if (null == n && (n = []),
                      !(3 & h[t] || null != n[t]))
                          if (e.push(p[t]),
                          4 & h[t])
                              n[t] = 2;
                          else
                              for (s in h[t] |= 2,
                              c[t])
                                  a = c[t][s],
                                  m(a.node.id, e, n)
                  };
                  for (o = 0; o < p.length; o++)
                      if (r = p[o],
                      !(4 & h[o])) {
                          const t = [];
                          m(o, t, []),
                          t.length > 0 && u.push(e(t, n, i))
                      }
                  return u.sort(EASEL.orderComparators.toolpathObjectsByBoundingBoxAndXY),
                  u
              },
              generateNestedToolpathObjects: function(t) {
                  const n = [];
                  var i = function(t, e, r) {
                      for (let o of t.orderCutsByContainment(e)) {
                          let t = e;
                          o.depths.includes(r) && (o.startDepth = e,
                          o.endDepth = r,
                          n.push(o),
                          t = o.endDepth);
                          const s = o.depths.filter((t=>t > r));
                          if (0 === s.length)
                              continue;
                          const l = EASEL.toolpathObjectsGenerators.generateToolpathObjectsAtDepth(o.entities, s[0], o.silhouettes);
                          for (let e of l)
                              i(e, t, s[0])
                      }
                  };
                  for (let r of t)
                      for (let t of r.depths)
                          if (t > 0) {
                              i(e(r.entities, 0, r.silhouettes), 0, t);
                              break
                          }
                  return n
              },
              pushContainmentOverlap: function(t, e) {
                  t.overlaps.contains.push(e),
                  e.overlaps.isContainedBy.push(t)
              },
              pushIntersectingOverlap: function(t, e) {
                  t.overlaps.intersects.push(e),
                  e.overlaps.intersects.push(t)
              }
          }
      }()
  },
  1258: function(t, e) {
      EASEL.toolpathOperations = (()=>{
          const t = function(t) {
              let e = {};
              return ["bit", "detailBit", "strokeBit", "lastBit"].filter((e=>t[e])).forEach((n=>{
                  e[n] = EASEL.bit(t[n])
              }
              )),
              EASEL.shallowMerge(t, e)
          }
            , e = function(t) {
              return t ? EASEL.tile(t) : void 0
          }
            , n = function(n) {
              let {jobSettings: i, strategy: r, tile: o} = n;
              return i = t(i),
              i = function(t) {
                  const {toolpathPrecision: e} = EASEL.strategyCommon;
                  return EASEL.shallowMerge(t, {
                      materialThickness: e(t.materialThickness, t.preferredUnit),
                      depthPerPass: e(t.depthPerPass, t.preferredUnit),
                      volumes: t.volumes.map((n=>EASEL.merge(n, {
                          cut: {
                              depth: e(n.cut.depth, t.preferredUnit)
                          }
                      })))
                  })
              }(i),
              r = function(t) {
                  return {
                      layer_by_layer: EASEL.layerByLayerStrategy,
                      v_carving: EASEL.vCarvingStrategy
                  }[t]
              }(r),
              o = e(o),
              EASEL.shallowMerge(n, {
                  jobSettings: i,
                  strategy: r,
                  tile: o
              })
          };
          return {
              calculateMeshes: function(n) {
                  n = t(n),
                  n = EASEL.shallowMerge(n, {
                      tile: e(n.tile)
                  });
                  const i = EASEL.polygonalPreviewer.generate(EASEL.operation(), n);
                  return i.addStep((function(t) {
                      var e, n;
                      return n = t.material,
                      e = t.highlight,
                      {
                          material: n.toSerialForm(),
                          highlight: e.toSerialForm()
                      }
                  }
                  )),
                  i
              },
              generateToolpaths: function(t) {
                  const e = (t = n(t)).strategy.generateToolpaths(EASEL.operation(), t);
                  return e.addStep((function(t) {
                      return t.map((function(t) {
                          return {
                              points: t.points,
                              props: t.props
                          }
                      }
                      ))
                  }
                  )),
                  e
              },
              generateExplodedObjects: function(t) {
                  t = n(t);
                  const e = EASEL.strategyCommon.generateToolpathObjects(EASEL.operation(), t);
                  return e.addStep((t=>t.map((t=>t.entities.map((t=>t.outerBoundary.all().map((t=>t.points)))).flat())))),
                  e
              },
              generateMedialAxis: function(t) {
                  return t = n(t),
                  EASEL.vCarvingStrategy.generateMedialAxisShapes(EASEL.operation(), t)
              },
              generateSimpleShapes: function(t) {
                  return t = n(t),
                  EASEL.vCarvingStrategy.generateSimpleShapes(EASEL.operation(), t)
              }
          }
      }
      )()
  },
  1259: function(t, e) {
      EASEL.profileTrace = function(t, e, n, i) {
          return t.map((t=>{
              if (t = t.map((t=>({
                  x: t.x,
                  y: t.y,
                  z: Math.max(e, t.z)
              }))),
              null == i)
                  return [EASEL.path(t)];
              const r = [];
              let o = n
                , s = t[0].z
                , l = [{
                  x: t[0].x,
                  y: t[0].y,
                  z: s
              }];
              for (const e of t.slice(1)) {
                  if (s === e.z) {
                      l.push({
                          x: e.x,
                          y: e.y,
                          z: s
                      });
                      continue
                  }
                  const t = s < o ? Math.min(o, n) : n
                    , a = s < n ? EASEL.ramping.profile(l, s, t, i) : [];
                  r.push(EASEL.path(a.concat(l))),
                  o = s,
                  s = e.z,
                  l = [{
                      x: e.x,
                      y: e.y,
                      z: s
                  }]
              }
              const a = s < o ? Math.min(o, n) : n
                , u = s < n ? EASEL.ramping.profile(l, s, a, i) : [];
              return r.push(EASEL.path(u.concat(l))),
              r
          }
          )).flat()
      }
  },
  1260: function(t, e) {
      EASEL.rasterFill = function() {
          const t = function(t, e, n) {
              if (!e.any())
                  return t;
              const i = e.all()
                , r = i[i.length - 1].points;
              let o = r[r.length - 1];
              const s = t.all().map((t=>{
                  const e = t.rebaseNear(o, 1.2 * n);
                  return o = e.points[e.points.length - 1],
                  e
              }
              ));
              return EASEL.paths(s)
          };
          return function(e, n, i, r, o, s) {
              if (!e.any())
                  return EASEL.paths();
              o = o || 0;
              const l = (e = e.withZ(n)).transform(EASEL.matrix().rotatedBy(-o))
                , a = function(t, e) {
                  const {minX: n, maxX: i, minY: r, maxY: o} = t
                    , s = [];
                  for (let l = r, a = 0; l <= o; l += e,
                  a++) {
                      const t = {
                          x: n,
                          y: l
                      }
                        , e = {
                          x: i,
                          y: l
                      };
                      s.push(a % 2 === 0 ? [t, e] : [e, t])
                  }
                  return EASEL.paths.fromPointArrays(s)
              }((({minX: t, minY: e, maxX: n, maxY: i},r)=>({
                  minX: t - r,
                  minY: e - r,
                  maxX: n + r,
                  maxY: i + r
              }))(l.boundingBox(), r), r);
              if (!s) {
                  const i = a.transform(EASEL.matrix().rotatedBy(o)).intersectionWithStrokes(e.offset(-r / 2))
                    , s = t(e, i, r)
                    , l = i.add(s).all();
                  return EASEL.pathUtils.nearestNeighborSort(l),
                  EASEL.paths(l).withZ(n)
              }
              const u = [];
              let p = a.intersectionWithStrokes(l.offset(-r / 2)).withZ(n).all();
              for (; p.length > 0; ) {
                  let t = p.shift().points
                    , e = EASEL.ramping.zigZagIn(t, n, i, s);
                  e = e.concat(t);
                  const r = [];
                  for (const n of p) {
                      const i = t[t.length - 1];
                      if (i.y === n.points[0].y) {
                          r.push(n);
                          continue
                      }
                      const [o,s] = n.points;
                      let a = null;
                      l.containsSegment(i, o) && (a = [o, s]),
                      l.containsSegment(i, s) && (null == a || Math.abs(i.x - s.x) < Math.abs(i.x - o.x)) && (a = [s, o]),
                      null != a ? (e = e.concat(a),
                      t = a) : r.push(n)
                  }
                  u.push(EASEL.path(e)),
                  p = r.reverse()
              }
              const h = EASEL.paths(u).transform(EASEL.matrix().rotatedBy(o))
                , c = t(e, h, r);
              return h.add(c)
          }
      }()
  },
  1261: function(t, e) {
      EASEL.drill = function(t, e, n) {
          const i = {}
            , r = EASEL.matrix().scaledBy(n / 2, n / 2).translatedBy(t.shape.center.x, t.shape.center.y);
          return i.type = "drill",
          i.boundary = EASEL.paths.fromPointArrays([EASEL.linearizer.ellipse(EASEL.polylineGenerator.MAX_ERROR, r)]),
          i.volume = t,
          i.depth = null != t ? t.cut.depth : void 0,
          i.shapeIndex = e,
          i.id = -1,
          i.overlaps = {
              contains: [],
              isContainedBy: [],
              intersects: []
          },
          i.outerBoundary = i.boundary,
          i.innerBoundary = i.boundary,
          i.x = t.shape.center.x,
          i.y = t.shape.center.y,
          i.explode = ()=>[i],
          i.shallowCopy = ()=>EASEL.drill(t, e, n),
          i
      }
  },
  1262: function(t, e) {
      EASEL.pocket = function(t, e, n) {
          const i = {
              type: "pocket"
          };
          return i.boundary = t,
          i.volume = e,
          i.depth = null != e ? e.cut.depth + (e.cut.additionalDepthAmount || 0) : void 0,
          i.shapeIndex = n,
          i.id = -1,
          i.overlaps = {
              contains: [],
              isContainedBy: [],
              intersects: []
          },
          i.outerBoundary = i.boundary,
          i.innerBoundary = i.boundary,
          i.surfacingCurves = e.cut.useProfile ? {
              width: e.cut.profileSettings.width,
              bezier: e.cut.profileSettings.path,
              surface: [{
                  offset: 0,
                  depth: 0
              }, {
                  offset: e.cut.profileSettings.width,
                  depth: i.depth
              }],
              smoothing: [{
                  offset: 0,
                  depth: 0
              }, {
                  offset: e.cut.profileSettings.width,
                  depth: i.depth
              }]
          } : void 0,
          i.explode = function() {
              let i, r, o = t;
              if (o.all().length <= 1)
                  return [EASEL.pocket(o, e, n)];
              o = o.sort(((t,e)=>Math.abs(t.area()) - Math.abs(e.area())));
              const s = o.withProps({
                  outerPath: null
              }).all().slice();
              for (let t = 0; t < s.length - 1; t++)
                  for (let e = t + 1; e < s.length; e++)
                      if (r = s[t],
                      i = s[e],
                      r.area() < 0 && i.area() > 0 && EASEL.paths([i]).contains(EASEL.paths([r]))) {
                          s[t] = r.withProps({
                              outerPath: i
                          });
                          break
                      }
              return EASEL.paths(s).selectWithoutProp("outerPath").all().map((t=>{
                  const i = EASEL.paths(s).select((e=>e.props.outerPath === t))
                    , r = EASEL.paths([t, ...i.all()]);
                  return EASEL.pocket(r, e, n)
              }
              )).sort(EASEL.orderComparators.entitiesByXY)
          }
          ,
          i.shallowCopy = ()=>EASEL.pocket(t, e, n),
          i
      }
  },
  1263: function(t, e) {
      EASEL.profile = function(t, e, n, i, r) {
          null == i && (i = .125),
          r = r || !1;
          const o = {
              type: "profile"
          };
          o.boundary = t.offsetStrokes(i / 2),
          o.volume = e;
          const s = e.cut.additionalDepthAmount || 0;
          o.depth = null != e ? e.cut.depth + s : void 0,
          o.shapeIndex = n,
          o.id = -1,
          o.overlaps = {
              contains: [],
              isContainedBy: [],
              intersects: []
          },
          o.outerBoundary = t.closed().union(o.boundary),
          o.innerBoundary = t.closed().exclusion(o.boundary);
          return o.strokes = t,
          o.tabs = function() {
              const {cut: t} = e;
              return r && t.tabPreference && null != t.tabs ? t.tabs.map((e=>({
                  center: e.center,
                  length: t.tabLength + i,
                  height: t.tabHeight + s
              }))) : []
          }(),
          o.strokeSize = i,
          o.isCutout = r,
          o.surfacingCurves = e.cut.useProfile ? {
              width: e.cut.profileSettings.width,
              bezier: e.cut.profileSettings.path,
              surface: [{
                  offset: 0,
                  depth: 0
              }, {
                  offset: e.cut.profileSettings.width,
                  depth: o.depth
              }],
              smoothing: [{
                  offset: 0,
                  depth: 0
              }, {
                  offset: e.cut.profileSettings.width,
                  depth: o.depth
              }]
          } : void 0,
          o.explode = function() {
              return t.all().length <= 1 ? [o] : t.all().map((t=>EASEL.profile(EASEL.paths([t]), e, n, i, r))).sort(EASEL.orderComparators.entitiesByXY)
          }
          ,
          o.shallowCopy = ()=>EASEL.profile(t, e, n, i, r),
          o
      }
      ,
      EASEL.profile.fromStrokes = function(t, e) {
          return e.all().map((e=>EASEL.profile(EASEL.paths([e]), t.volume, t.shapeIndex, t.strokeSize, t.isCutout))).sort(EASEL.orderComparators.entitiesByXY)
      }
  },
  1264: function(t, e) {
      EASEL.toolpathObject = function() {
          const t = {
              silhouettes: [],
              entities: [],
              startDepth: 0,
              endDepth: 0,
              depths: [],
              boundingBox: null,
              enclosedArea: 1 / 0,
              orderCutsByContainment: (...e)=>n(t, ...e),
              computeBoundingBox: (...e)=>i(t, ...e),
              explodeEntities: (...e)=>r(t, ...e),
              explode: (...e)=>o(t, ...e),
              getBoundary: (...e)=>s(t, ...e),
              getSilhouette: (...e)=>l(t, ...e),
              calculateSilhouettes: (...e)=>a(t, ...e),
              computeSurfacingCurves: (...e)=>u(t, ...e),
              computeEnclosedArea: (...e)=>p(t, ...e)
          };
          return t
      }
      ;
      var n = function(t, e) {
          let n;
          const i = function(n) {
              const i = [n]
                , r = [n]
                , o = t=>t.depth > e || t.shapeIndex > n.shapeIndex
                , s = e=>r.indexOf(e) < 0 && -1 !== t.entities.indexOf(e)
                , l = t=>"pocket" === t.type || "drill" === t.type
                , a = function(t) {
                  return r.push(t),
                  i.push(t)
              };
              for (; i.length > 0; ) {
                  const t = i.pop();
                  for (let e of t.overlaps.intersects.filter(s).filter(o))
                      a(e);
                  for (let e of t.overlaps.isContainedBy.filter(s).filter(l).filter(o))
                      a(e);
                  if (l(t))
                      for (let e of t.overlaps.contains.filter(s).filter(o))
                          a(e)
              }
              return r
          };
          let r = [];
          const o = [];
          for (let h of t.entities.filter((t=>t.depth > e)))
              r.indexOf(h) < 0 && (n = i(h),
              r = r.concat(n),
              o.push(n));
          let s = [];
          for (n of o)
              s = s.concat(EASEL.toolpathObjectsGenerators.generateToolpathObjectsAtDepth(n, t.startDepth, t.silhouettes));
          s.sort(EASEL.orderComparators.toolpathObjectsByBoundingBoxAndXY);
          const l = [];
          for (let h = 0; h < s.length; h++) {
              const t = s[h];
              for (let e = h + 1; e < s.length; e++) {
                  const n = s[e];
                  EASEL.pathUtils.boundingBoxContains(t.boundingBox, n.boundingBox) ? (null == l[h] && (l[h] = []),
                  l[h].push(e)) : EASEL.pathUtils.boundingBoxContains(n.boundingBox, t.boundingBox) && (null == l[e] && (l[e] = []),
                  l[e].push(h))
              }
          }
          const a = []
            , u = [];
          var p = function(t) {
              if (!u[t]) {
                  if (null != l[t])
                      for (let e of l[t])
                          p(e);
                  return a.push(s[t]),
                  u[t] = !0
              }
          };
          for (let h = 0; h < s.length; h++)
              p(h);
          return a
      }
        , i = function(t) {
          const e = {
              minX: 1 / 0,
              minY: 1 / 0,
              maxX: -1 / 0,
              maxY: -1 / 0
          }
            , n = t.entities.filter((e=>e.depth >= t.startDepth));
          for (let i of n)
              if (null != i.boundary && null != i.boundary.boundingBox()) {
                  const t = i.boundary.boundingBox();
                  e.minX = Math.min(e.minX, t.minX),
                  e.minY = Math.min(e.minY, t.minY),
                  e.maxX = Math.max(e.maxX, t.maxX),
                  e.maxY = Math.max(e.maxY, t.maxY)
              }
          return t.boundingBox = e,
          t
      }
        , r = function(t) {
          return t.entities = EASEL.flatten(t.entities.map((t=>t.explode()))),
          t
      }
        , o = function(t) {
          const e = []
            , n = [];
          for (let o = 0; o < t.entities.length; o++) {
              const i = t.entities[o];
              if ("drill" !== i.type) {
                  n.push(i);
                  for (let e = o + 1; e < t.entities.length; e++) {
                      const n = t.entities[e];
                      "drill" !== n.type && i.outerBoundary.boundingBoxIntersection(n.outerBoundary) && (n.innerBoundary.contains(i.outerBoundary) ? EASEL.toolpathObjectsGenerators.pushContainmentOverlap(n, i) : i.innerBoundary.contains(n.outerBoundary) ? EASEL.toolpathObjectsGenerators.pushContainmentOverlap(i, n) : i.outerBoundary.intersection(n.outerBoundary).any() && EASEL.toolpathObjectsGenerators.pushIntersectingOverlap(i, n))
                  }
              } else
                  e.push(i)
          }
          const i = function(t) {
              let e, n;
              const i = Array(t.length);
              for (n = 0; n < t.length; n++)
                  e = t[n],
                  e.id = n,
                  i[n] = 0;
              const r = t=>0 === i[t.id]
                , o = [];
              for (n = 0; n < t.length; n++)
                  if (e = t[n],
                  0 === i[n]) {
                      const t = [e];
                      i[n] = 1;
                      let s = [].concat(e.overlaps.contains.filter(r), e.overlaps.isContainedBy.filter(r), e.overlaps.intersects.filter(r));
                      for (; s.length > 0; ) {
                          const e = s.shift();
                          1 !== i[e.id] && (t.push(e),
                          i[e.id] = 1,
                          s = s.concat(e.overlaps.contains.filter(r), e.overlaps.isContainedBy.filter(r), e.overlaps.intersects.filter(r)))
                      }
                      o.push(t)
                  }
              return o
          }(n);
          let r = [];
          for (let o of t.depths)
              if (o > 0) {
                  for (let e of i)
                      r = r.concat(EASEL.toolpathObjectsGenerators.generateToolpathObjectsAtDepth(e, o, t.silhouettes));
                  break
              }
          return r.sort(EASEL.orderComparators.toolpathObjectsByBoundingBoxAndXY),
          e.length > 0 && r.unshift(EASEL.toolpathObjectsGenerators.fromEntityArray(e, 0)),
          r
      }
        , s = function(t, e, n) {
          null == n && (n = EASEL.paths());
          for (let i of Array.from(t.entities)) {
              const t = EASEL.strategyCommon.getBoundary(i, e);
              i.depth >= e ? "pocket" === i.type && (n = n.union(t)) : "pocket" !== i.type && "profile" !== i.type || (n = n.exclusion(t))
          }
          return n
      }
        , l = function(t, e, n) {
          let i, r;
          null == n && (n = 0);
          const o = null != e && e.type() !== EASEL.bitGroups.v ? e.inchWidth() / 2 : 0;
          let s = EASEL.paths()
            , l = EASEL.paths();
          const a = [];
          for (i of t.entities)
              if (i.depth > n)
                  "pocket" === i.type ? s = s.union(i.boundary) : "drill" === i.type ? l = l.union(i.boundary) : a.push({
                      entity: i,
                      paths: i.strokes
                  });
              else
                  for (r of ("drill" !== i.type && (s = s.exclusion(i.boundary)),
                  "drill" !== i.type && (l = l.exclusion(i.boundary)),
                  a))
                      r.paths = r.paths.exclusionFromStrokes(i.boundary.expand(r.entity.strokeSize / 2));
          o > 0 && (s = s.contract(o).expand(o));
          let u = EASEL.paths();
          for (r of a)
              u = u.union(r.paths.offsetStrokes(r.entity.strokeSize / 2));
          const p = s.union(u).union(l);
          return 0 === o ? EASEL.strategyCommon.simplifyLayer(p) : p
      }
        , a = function(t, e) {
          if (t.silhouettes.length > 0)
              return t;
          const n = EASEL.paths();
          for (let i of t.depths.slice().reverse())
              if (0 !== i) {
                  const r = t.getBoundary(i, n);
                  t.silhouettes.push({
                      region: r.contract(e / 2),
                      depth: i
                  })
              }
          return t
      }
        , u = function(t, e, n) {
          const {computeStartDepth: i, computeSurfacingCurve: r, computeSmoothingCurve: o} = EASEL.surfacing();
          for (let a of t.entities)
              if (null != a.surfacingCurves) {
                  const {width: t} = a.surfacingCurves
                    , u = i(a)
                    , p = a.depth;
                  if (u === p)
                      continue;
                  const h = p < u;
                  var s = r(EASEL.pathPolylineGenerator(.001, EASEL.matrix()).toPolylines([a.surfacingCurves.bezier])[0], a.type, u, p, t, h, e)
                    , l = o(s, a.type, h, n);
                  a.surfacingCurves.surface = s.map((t=>({
                      offset: t.x,
                      depth: t.y
                  }))),
                  a.surfacingCurves.smoothing = l.map((t=>({
                      offset: t.x,
                      depth: t.y
                  })))
              }
          return t
      }
        , p = function(t) {
          let e = EASEL.pathUtils.infiniteBox();
          for (let n of t.entities) {
              let {boundary: t} = n;
              "profile" === n.type && (t = n.strokes.closed()),
              t.any() && (e = EASEL.pathUtils.unionBoundingBoxes(e, t.boundingBox()))
          }
          return t.enclosedArea = EASEL.pathUtils.boundingBoxArea(e),
          t
      };
      null == EASEL.info && void 0 && (n = EASEL.timeProfiling.timeDecorator("toolpathObject", n),
      i = EASEL.timeProfiling.timeDecorator("toolpathObject", i),
      r = EASEL.timeProfiling.timeDecorator("toolpathObject", r),
      o = EASEL.timeProfiling.profileDecorator("explode", EASEL.timeProfiling.timeDecorator("toolpathObject", o)),
      s = EASEL.timeProfiling.timeDecorator("toolpathObject", s),
      l = EASEL.timeProfiling.timeDecorator("toolpathObject", l),
      a = EASEL.timeProfiling.timeDecorator("toolpathObject", a),
      u = EASEL.timeProfiling.timeDecorator("toolpathObject", u),
      p = EASEL.timeProfiling.timeDecorator("toolpathObject", p))
  },
  1265: function(t, e) {
      EASEL.drilling = {
          generateToolpaths(t, e) {
              const n = Math.floor(t.startDepth / e) * e
                , i = []
                , r = t.entities.filter((t=>"drill" === t.type)).reverse();
              for (let o of r) {
                  const {x: t, y: r} = o
                    , s = [];
                  let l = n;
                  for (; l < o.depth; )
                      s.push({
                          x: t,
                          y: r,
                          z: -l
                      }),
                      s.push({
                          x: t,
                          y: r,
                          z: -n
                      }),
                      l += e;
                  s.push({
                      x: t,
                      y: r,
                      z: -o.depth
                  }),
                  i.push(EASEL.path(s))
              }
              return i
          },
          unique: t=>t.filter((t=>"drill" === t.cut.type)).sort(((t,e)=>t.shape.center.x === e.shape.center.x ? t.shape.center.y === e.shape.center.y ? e.cut.depth - t.cut.depth : t.shape.center.y - e.shape.center.y : t.shape.center.x - e.shape.center.x)).filter(((t,e,n)=>0 === e || t.shape.center.x !== n[e - 1].shape.center.x || t.shape.center.y !== n[e - 1].shape.center.y))
      }
  },
  1266: function(t, e) {
      EASEL.layerByLayer = function() {
          const t = EASEL.paths()
            , e = function(e, n) {
              let i = t;
              for (let t of e) {
                  const e = EASEL.strategyCommon.getBoundary(t, n);
                  (t.depth > n || EASEL.math.closeTo(t.depth, n)) && t.depth > 0 ? "pocket" !== t.type && null == t.surfacingCurves || (i = i.union(e)) : "pocket" !== t.type && "profile" !== t.type || (i = i.exclusion(e))
              }
              return i
          }
            , n = function(e, n, i) {
              let r, o = r = t;
              for (let t of e) {
                  const e = EASEL.strategyCommon.getBoundary(t, n);
                  t.depth > n ? ("pocket" !== t.type && null == t.surfacingCurves || (r = r.union(e)),
                  "pocket" !== t.type && null == t.surfacingCurves || (o = o.exclusion(e))) : t.depth === n ? ("pocket" !== t.type && null == t.surfacingCurves || (r = r.union(e)),
                  "pocket" !== t.type && null == t.surfacingCurves || (o = o.union(e))) : "pocket" !== t.type && "profile" !== t.type || (o = o.exclusion(e),
                  r = r.exclusion(e))
              }
              return o.expand(i).intersection(r)
          }
            , i = function(e, n, i, r) {
              const o = .005 * r
                , s = .5 * r;
              let l = t;
              for (let t = 0; t < e.length; t++) {
                  const r = e[t]
                    , a = t === i ? o : -s;
                  let u = EASEL.strategyCommon.getBoundary(r, n);
                  r.depth >= n ? (u = u.offset(a),
                  "pocket" !== r.type && null == r.surfacingCurves || (l = l.union(u))) : "pocket" !== r.type && "profile" !== r.type || (u = u.offset(-a),
                  l = l.exclusion(u))
              }
              return l
          };
          return {
              createIntermediateLayer: e,
              createBottomLayer: n,
              generateLayersForPockets: function(t, i) {
                  const {jobSettings: {bit: r, depthPerPass: o}} = i
                    , s = r.inchWidth();
                  let l = Math.floor(t.startDepth / o) * o;
                  EASEL.math.closeTo(t.startDepth / o, Math.ceil(t.startDepth / o)) && (l = Math.ceil(t.startDepth / o) * o);
                  const {endDepth: a} = t;
                  if (a <= t.startDepth)
                      return [];
                  const u = [];
                  let p = l
                    , h = l + o;
                  const c = t.depths.filter((e=>t.startDepth < e && e <= a));
                  for (const d of c) {
                      for (var f; h < d && !EASEL.math.closeTo(h, d); )
                          (f = e(t.entities, h)).any() && u.push({
                              z: -h,
                              zTop: -p,
                              layer: f
                          }),
                          p = h,
                          h += o;
                      EASEL.math.closeTo(h, d) ? (f = e(t.entities, h),
                      h += o) : f = n(t.entities, d, s),
                      f.any() && u.push({
                          z: -d,
                          zTop: -p,
                          layer: f
                      })
                  }
                  return u
              },
              generateSurfacingToolpaths: function(t, e, n) {
                  let r, o;
                  if (t.endDepth <= t.startDepth)
                      return null;
                  let s = r = o = null;
                  const l = [];
                  for (let a = 0; a < t.entities.length; a++) {
                      const u = t.entities[a];
                      if (null != u.surfacingCurves)
                          for (let {boundary: p, depth: h} of Array.from(EASEL.strategyCommon.getSmoothingBoundaries(u, e * n))) {
                              const e = i(t.entities, h, a, n);
                              p = p.intersectionWithStrokes(e);
                              for (let t of Array.from(p.all()))
                                  t = t.withZ(-h),
                                  s = t.points[0],
                                  null == o && (o = {
                                      x: s.x,
                                      y: s.y,
                                      z: s.z
                                  }),
                                  l.push(t.withProps({
                                      rapid: !1
                                  })),
                                  r = t.points[t.points.length - 1]
                          }
                  }
                  return {
                      pathArray: l,
                      startPoint: o,
                      endPoint: r
                  }
              },
              triangulateExtrusion: function(t, e, n, i) {
                  null == i && (i = !1);
                  const r = [];
                  for (let o = 0; o < t.length; o++) {
                      const s = t[o]
                        , l = t[(o + 1) % t.length];
                      i ? (r.push([{
                          x: l.x,
                          y: l.y,
                          z: e
                      }, {
                          x: s.x,
                          y: s.y,
                          z: e
                      }, {
                          x: s.x,
                          y: s.y,
                          z: n
                      }]),
                      r.push([{
                          x: l.x,
                          y: l.y,
                          z: n
                      }, {
                          x: l.x,
                          y: l.y,
                          z: e
                      }, {
                          x: s.x,
                          y: s.y,
                          z: n
                      }])) : (r.push([{
                          x: s.x,
                          y: s.y,
                          z: e
                      }, {
                          x: l.x,
                          y: l.y,
                          z: e
                      }, {
                          x: s.x,
                          y: s.y,
                          z: n
                      }]),
                      r.push([{
                          x: l.x,
                          y: l.y,
                          z: e
                      }, {
                          x: l.x,
                          y: l.y,
                          z: n
                      }, {
                          x: s.x,
                          y: s.y,
                          z: n
                      }]))
                  }
                  return r
              }
          }
      }
  },
  1267: function(t, e) {
      EASEL.layerByLayerStrategy = {
          generateToolpaths: function(t, e) {
              let {jobSettings: n, tile: i} = e;
              const {safetyHeight: r, retractHeight: o} = n
                , s = EASEL.layerByLayer()
                , {safeRapid: l} = EASEL.safeRapidProcessor(r, o)
                , a = []
                , u = function() {
                  let t = null;
                  return function(e) {
                      let {paths: n, silhouettes: i, retractFirst: r} = e
                        , o = null == e.retract || e.retract;
                      const s = o;
                      null != r && (o = r);
                      for (let u of n.all())
                          u.points.length > 0 && (null != t && a.push(l(t, u, i, o)),
                          a.push(u),
                          o = s,
                          t = u)
                  }
              }();
              return EASEL.strategyCommon.generateToolpathObjects(t, e),
              t.addStep({
                  weight: 4
              }, (e=>{
                  let r = null;
                  t.addStep({
                      name: "never-shipped: 3D surfacing"
                  }, (function() {
                      if (n.volumes.some((t=>t.cut.useProfile))) {
                          const t = n.bit.inchWidth()
                            , i = n.useDetailBit ? n.detailBit.inchWidth() : n.bit.inchWidth();
                          e = e.map((e=>e.computeSurfacingCurves(t, i))),
                          r = e
                      }
                  }
                  )),
                  t.addStep({
                      name: "object.calculateSilhouettes"
                  }, (function() {
                      e = e.map((t=>t.calculateSilhouettes(n.bit.inchWidth())))
                  }
                  )),
                  t.addStep({
                      name: "EASEL.toolpathObjectsGenerators.generateNestedToolpathObjects"
                  }, (function() {
                      e = EASEL.toolpathObjectsGenerators.generateNestedToolpathObjects(e)
                  }
                  )),
                  t.addStep({
                      name: "EASEL.strategyCommon.tilingSortByBoundsContainment"
                  }, (function() {
                      null != i && (e = EASEL.strategyCommon.tilingSortByBoundsContainment(e))
                  }
                  )),
                  t.addStep((()=>({
                      objects: e,
                      surfacingObjects: r
                  })))
              }
              )),
              t.addStep({
                  weight: 20
              }, (function({objects: i, surfacingObjects: r}) {
                  const o = n.useDetailBit ? n.detailBit.inchWidth() : n.bit.inchWidth()
                    , l = .5 * n.bit.inchWidth()
                    , a = .5 * o
                    , p = .5 * n.bit.inchWidth()
                    , h = n.stepOver * o
                    , c = n.stepOver * n.bit.inchWidth();
                  for (let f = 0; f < i.length; f++) {
                      const r = i[f];
                      t.addStep({
                          name: "toolpath objects loop"
                      }, (function() {
                          if (n.cutTypes.fill && (t.addStep({
                              name: "layerByLayer.generateLayersForPockets"
                          }, (()=>s.generateLayersForPockets(r, e))),
                          t.addStep({
                              name: "toolpath object layers loop"
                          }, (i=>{
                              for (let {layer: o, z: s, zTop: f} of i)
                                  "detail" === n.passType ? (t.addStep({
                                      name: "detail first half"
                                  }, (function() {
                                      const t = o.contract(l + h).expand(l)
                                        , n = o.contract(a).withZ(s)
                                        , i = n.exclusion(t).expand(a).intersection(n).contract(h);
                                      return {
                                          detailFillPaths: EASEL.strategyCommon.fill(i, s, f, h, e),
                                          detailRegion: n
                                      }
                                  }
                                  )),
                                  t.addStep({
                                      name: "addToolpaths (safeRapid)"
                                  }, (function({detailFillPaths: t, detailRegion: e}) {
                                      u({
                                          paths: t,
                                          silhouettes: r.silhouettes,
                                          retract: !1,
                                          retractFirst: !0
                                      }),
                                      u({
                                          paths: e,
                                          silhouettes: r.silhouettes
                                      })
                                  }
                                  ))) : (t.addStep({
                                      name: "rough/all first half"
                                  }, (function() {
                                      const t = "roughing" === n.passType ? o.contract(l + h) : o.contract(p);
                                      return EASEL.strategyCommon.fill(t, s, f, c, e)
                                  }
                                  )),
                                  t.addStep({
                                      name: "addToolpaths (safeRapid)"
                                  }, (t=>{
                                      u({
                                          paths: t,
                                          silhouettes: r.silhouettes,
                                          retract: !1,
                                          retractFirst: !0
                                      })
                                  }
                                  )))
                          }
                          ))),
                          n.cutTypes.drill) {
                              const t = EASEL.drilling.generateToolpaths(r, e.jobSettings.depthPerPass);
                              u({
                                  paths: EASEL.paths(t),
                                  silhouettes: r.silhouettes
                              })
                          }
                          if (n.cutTypes.outline)
                              return t.addStep({
                                  name: "generateToolpathsForProfiles"
                              }, (()=>EASEL.strategyCommon.generateToolpathsForProfiles(r, e))),
                              t.addStep({
                                  name: "addToolpaths (safeRapid)"
                              }, (function(t) {
                                  u({
                                      paths: t,
                                      silhouettes: r.silhouettes
                                  })
                              }
                              ))
                      }
                      ))
                  }
                  if ("detail" === n.passType && null != r)
                      for (let e = 0; e < r.length; e++) {
                          const r = i[e];
                          t.addStep((function() {
                              const t = s.generateSurfacingToolpaths(r, n.profileStepOver, o);
                              null != t && t.pathArray.length > 0 && u({
                                  paths: EASEL.paths(t.pathArray),
                                  silhouettes: r.silhouettes
                              })
                          }
                          ))
                      }
              }
              )),
              t.addStep((()=>EASEL.flatten(a))),
              t
          }
      }
  },
  1268: function(t, e) {
      EASEL.safeRapidProcessor = function(t, e) {
          const n = function(t, e, n) {
              return n.containsSegment(t, e)
          }
            , i = t
            , r = Math.min(t, e)
            , o = (t,e)=>t > e + 1e-5
            , s = function(t, e, n, i) {
              const s = -t.z
                , l = -e.z;
              return i || o(s, n) || o(l, n) ? n - r : n
          };
          return {
              isInside: n,
              safeRapid: function(t, e, r, o, l) {
                  let a;
                  null == o && (o = !1),
                  null == l && (l = !0);
                  const u = t.points[t.points.length - 1]
                    , p = e.points[0];
                  let h = {};
                  if (e.props.comment && (h.comment = e.props.comment),
                  u.x === p.x && u.y === p.y)
                      return u.z === p.z ? EASEL.path([]).withProps(h) : EASEL.path([{
                          x: u.x,
                          y: u.y,
                          z: u.z
                      }, {
                          x: p.x,
                          y: p.y,
                          z: p.z
                      }]).withProps(EASEL.merge(h, {
                          rapid: !0
                      }));
                  if (a = Math.hypot(u.y - p.y, u.x - p.x) < Math.max(t.props.offsetDistance || 0, e.props.offsetDistance || 0) ? r[0] : function(t, e) {
                      if (!(t.length > 0))
                          return;
                      if (e(t[0]))
                          return t[0];
                      if (!e(t[t.length - 1]))
                          return;
                      let n = 1
                        , i = t.length - 1;
                      for (; n < i; ) {
                          const r = Math.floor((n + i) / 2);
                          e(t[r]) ? i = r : n = r + 1
                      }
                      return t[n]
                  }(r, (({region: t})=>n(u, p, t))),
                  null != a) {
                      const {depth: t} = a
                        , e = -s(u, p, t, o)
                        , n = Math.max(u.z, p.z, e)
                        , i = [];
                      return u.z !== n && i.push({
                          x: u.x,
                          y: u.y,
                          z: u.z
                      }),
                      i.push({
                          x: u.x,
                          y: u.y,
                          z: n
                      }),
                      i.push({
                          x: p.x,
                          y: p.y,
                          z: n
                      }),
                      p.z !== n && i.push({
                          x: p.x,
                          y: p.y,
                          z: p.z
                      }),
                      -t > u.z && -t > p.z && l ? EASEL.path(i).withProps(EASEL.merge(h, {
                          rapid: !0
                      })) : EASEL.path(i).withProps(h)
                  }
                  return EASEL.path([{
                      x: u.x,
                      y: u.y,
                      z: u.z
                  }, {
                      x: u.x,
                      y: u.y,
                      z: i
                  }, {
                      x: p.x,
                      y: p.y,
                      z: i
                  }, {
                      x: p.x,
                      y: p.y,
                      z: p.z
                  }]).withProps(EASEL.merge(h, {
                      rapid: !0
                  }))
              },
              calculateRetractDepth: s
          }
      }
  },
  1269: function(t, e) {
      EASEL.strategyCommon = function() {
          const t = function(t, e) {
              if (e <= t[0].depth)
                  return t[0].offset;
              if (e > t[t.length - 1].depth)
                  return t[t.length - 1].offset;
              for (let n = 1; n < t.length; n++) {
                  const i = t[n - 1]
                    , r = t[n];
                  if (e <= r.depth) {
                      if (r.depth !== i.depth) {
                          const t = (e - i.depth) / (r.depth - i.depth);
                          return i.offset + t * (r.offset - i.offset)
                      }
                      return i.offset
                  }
              }
              return 0
          }
            , e = function(t, e) {
              return "pocket" === t.type && (e = -e),
              0 === e ? t.boundary : t.boundary.offset(e)
          }
            , n = function(t, e) {
              const n = [];
              n.push(t[0]);
              for (let i = 1; i < t.length; i++) {
                  const r = t[i - 1]
                    , o = t[i]
                    , s = Math.hypot(r.offset - o.offset, r.depth - o.depth);
                  if (s > e && Math.abs(r.offset - o.offset) > 1e-5) {
                      let t = e;
                      for (; s > t; )
                          n.push({
                              offset: r.offset + t * (o.offset - r.offset) / s,
                              depth: r.depth + t * (o.depth - r.depth) / s
                          }),
                          t += e
                  }
                  n.push(o)
              }
              return n
          }
            , i = (t,e)=>Math.abs(t.area()) - Math.abs(e.area())
            , r = 16 / 32768
            , o = function(t, e) {
              const n = t.entities.slice().reverse()
                , i = [];
              let r = EASEL.paths();
              for (let o of n)
                  if (o.depth >= t.endDepth) {
                      if ("profile" === o.type) {
                          const t = o.strokes.exclusionFromStrokes(r);
                          t.any() && i.push(EASEL.profile.fromStrokes(o, t))
                      }
                  } else
                      r = r.union(o.boundary.expand(e / 2));
              return EASEL.flatten(i)
          }
            , s = function(t, e, n, i, r, o) {
              let s = !0;
              if (t.tabs && t.tabs.length > 0) {
                  s = i <= t.depth - t.tabs[0].height
              }
              const l = o > 0 && n.isClosed() && s;
              l && (n = n.rebaseDistance((i - r) / Math.tan(o)));
              const a = EASEL.profileTrace([n.points], -i, -r, o);
              if (l && e.length > 0) {
                  const t = e.slice(-1)[0].points
                    , n = t[t.length - 1]
                    , i = t[0];
                  (n.x !== i.x || n.y !== i.y || n.z !== i.z) && EASEL.math.closeTo(n.x, i.x) && EASEL.math.closeTo(n.y, i.y) && EASEL.math.closeTo(n.z, i.z) && (i.x = n.x,
                  i.y = n.y,
                  i.z = n.z)
              }
              return [e.concat(a), n]
          };
          return {
              getBoundary: function(n, i) {
                  return null == n.surfacingCurves ? n.boundary : e(n, t(n.surfacingCurves.surface, i))
              },
              getOffsetAtDepth: t,
              getSmoothingBoundaries: function(t, i) {
                  const r = t.surfacingCurves.smoothing;
                  return 0 === r.length ? [] : n(r, i).map((n=>({
                      boundary: e(t, n.offset),
                      depth: n.depth
                  })))
              },
              getSmoothingPoints: n,
              toolpathPrecision: function(t, e) {
                  return "mm" === e && (t = Math.round(254 * t) / 254),
                  Math.round(1e5 * t) / 1e5
              },
              generateToolpathObjects: function(t, e) {
                  const {jobSettings: n, tile: i} = e;
                  return t.addStep({
                      name: "EASEL.toolpathObjectsGenerators.fromVolumes"
                  }, (function() {
                      return EASEL.toolpathObjectsGenerators.fromVolumes({
                          volumes: n.volumes,
                          bit: n.strokeBit,
                          materialThickness: n.materialThickness,
                          tile: i,
                          isPreview: !1
                      })
                  }
                  )),
                  t.addStep({
                      name: "explodeEntities & explode"
                  }, (function(t) {
                      return t.explodeEntities(),
                      t.explode()
                  }
                  )),
                  t
              },
              nonIntersectingPathGroups: function(t) {
                  if (0 === t.all().length)
                      return [];
                  const e = (t = t.sort(i)).withProps({
                      outerPath: !1
                  }).all();
                  for (let n = 0; n < e.length - 1; n++)
                      for (let t = n + 1; t < e.length; t++) {
                          const i = e[n]
                            , r = e[t];
                          if (i.area() < 0 && r.area() > 0 && EASEL.paths([r]).contains(EASEL.paths([i]))) {
                              e[n] = i.withProps({
                                  outerPath: r
                              });
                              break
                          }
                      }
                  return EASEL.paths(e).selectWithoutProp("outerPath").all().map((t=>({
                      boundary: EASEL.paths([t]),
                      holes: EASEL.paths(e).select((e=>e.props.outerPath === t))
                  })))
              },
              simplifyLayer: t=>t.simplify().contract(r, EASEL.pathOffsetter.JOIN_TYPE_MITER).expand(r, EASEL.pathOffsetter.JOIN_TYPE_MITER).simplify().clean(),
              tilingSortByBoundsContainment: function(t) {
                  if (t.length < 2)
                      return t;
                  let e = t.length - 1;
                  for (; e > 0; ) {
                      const r = t[e].boundingBox;
                      let o = null
                        , s = 0;
                      for (; s < e; ) {
                          const e = t[s].entities.some((t=>t.isCutout))
                            , l = t[s].boundingBox;
                          if (e && (i = r,
                          (n = l).minX < i.minX && i.maxX < n.maxX && n.minY < i.minY && i.maxY < n.maxY)) {
                              o = s;
                              break
                          }
                          s++
                      }
                      null != o ? t.splice(o, 0, t.splice(e, 1)[0]) : e--
                  }
                  var n, i;
                  return t
              },
              fill: function(t, e, n, i, r) {
                  switch (r.fillingMethod) {
                  case "raster":
                      return EASEL.rasterFill(t, e, n, i, r.fillingDirection, r.rampingAngle);
                  case "offset":
                  default:
                      return EASEL.offsetFill(t, e, n, i, r.rampingAngle)
                  }
              },
              correctAndPruneNonCriticalRegionsOfProfiles: o,
              generateToolpathsForProfiles: function(t, e) {
                  const {jobSettings: {strokeBit: n, depthPerPass: i}, rampingAngle: r} = e
                    , l = Math.floor(t.startDepth / i) * i
                    , {endDepth: a} = t;
                  let u = [];
                  const p = o(t, n.inchWidth());
                  for (let o of p) {
                      if (o.depth <= t.startDepth)
                          continue;
                      const e = Math.min(a, o.depth)
                        , n = EASEL.tabs.createBottomPathsWithTabs(o);
                      for (const t of n) {
                          let n = t
                            , a = l;
                          if (null == o.surfacingCurves) {
                              let t = l + i;
                              for (; t < e && !EASEL.math.closeTo(t, e); )
                                  [u,n] = s(o, u, n, t, a, r),
                                  n.isOpen() && (n = n.reverse()),
                                  a = t,
                                  t += i;
                              EASEL.math.closeTo(t, e) && !EASEL.math.closeTo(o.depth, e) && ([u,n] = s(o, u, n, t, a, r))
                          }
                          EASEL.math.closeTo(e, o.depth) && ([u,n] = s(o, u, n, e, a, r))
                      }
                  }
                  return EASEL.paths(u)
              }
          }
      }()
  },
  1270: function(t, e) {
      EASEL.vCarving = function() {
          const t = function(t, n, i, r, o, s) {
              const l = EASEL.strategyCommon.fill(t, n, i, r, s);
              return e(l, o)
          };
          var e = function(t) {
              let e;
              if (!t.any())
                  return null;
              let n = e = null;
              const i = [];
              for (let r of Array.from(t.all())) {
                  const t = r.points[0];
                  null == n && (n = {
                      x: t.x,
                      y: t.y,
                      z: t.z
                  }),
                  i.push(r.withProps({
                      rapid: !1
                  })),
                  e = r.points[r.points.length - 1]
              }
              return {
                  paths: EASEL.paths(i),
                  startPoint: n,
                  endPoint: {
                      x: e.x,
                      y: e.y,
                      z: e.z
                  }
              }
          };
          const n = function(t) {
              let {paths: e, silhouettes: n, toolpaths: i, safeRapid: r, retractFirst: o, allowRapidsThroughClearedRegionFirst: s} = t
                , l = !!t.retract
                , a = !!t.allowRapidsThroughClearedRegion;
              const u = l
                , p = a;
              null != o && (l = o),
              null != s && (a = s);
              for (let h of e.all())
                  if (h.points.length > 0) {
                      if (i.length > 0) {
                          const t = i[i.length - 1];
                          i.push(r(t, h, n, l, a))
                      }
                      i.push(h),
                      l = u,
                      a = p
                  }
          }
            , i = function(n, i, r) {
              let {jobSettings: {bit: o, detailBit: s, useDetailBit: l, depthPerPass: a, stepOver: u, passType: p, vBitDetailStepOver: h}} = r;
              return i.addStep((function() {
                  if (n.endDepth <= n.startDepth)
                      return [];
                  const c = o.inchWidth()
                    , f = null != s ? s.inchWidth() : void 0
                    , d = l ? s.radianTipAngle() : o.radianTipAngle()
                    , y = EASEL.layerByLayer()
                    , m = Math.floor(n.startDepth / a) * a
                    , x = n.endDepth
                    , _ = u * c
                    , v = "detail" === p ? h * f : h * c
                    , g = .5 * c
                    , E = Math.tan(d / 2)
                    , P = []
                    , S = [];
                  let L = m
                    , A = m + a;
                  return i.addStep((function() {
                      const t = y.createIntermediateLayer(n.entities, x);
                      for (; A < x && !EASEL.math.closeTo(A, x); )
                          ((t,e,r)=>{
                              i.addStep((function() {
                                  const i = "roughing" === p ? v : 0
                                    , o = (e - n.startDepth) * E + i
                                    , s = r.contract(o);
                                  s.any() && P.push({
                                      z: -e,
                                      zTop: -t,
                                      layer: s,
                                      bottomLayer: !1
                                  })
                              }
                              ))
                          }
                          )(L, A, t),
                          L = A,
                          A += a;
                      var e, r, o;
                      e = L,
                      r = A,
                      o = t,
                      i.addStep((function() {
                          let t = 2 * v;
                          "roughing" === p && (t = g);
                          let i = y.createBottomLayer(n.entities, x, t);
                          const s = o.contract((x - n.startDepth) * E);
                          if (s.any())
                              if (i = i.intersection(s).map((t=>t.close())),
                              EASEL.math.closeTo(r, x))
                                  if ("roughing" === p) {
                                      if (s.any())
                                          return P.push({
                                              z: -r,
                                              zTop: -e,
                                              layer: s,
                                              bottomLayer: !1
                                          })
                                  } else {
                                      if ("detail" === p)
                                          return i.any() && P.push({
                                              z: -r,
                                              zTop: -e,
                                              layer: i,
                                              bottomLayer: !0,
                                              roughingLayer: s
                                          }),
                                          P.push({
                                              z: -r,
                                              zTop: -e,
                                              layer: s,
                                              bottomLayer: !1
                                          });
                                      {
                                          const t = s.exclusion(i);
                                          if (t.any() && P.push({
                                              z: -r,
                                              zTop: -e,
                                              layer: t,
                                              bottomLayer: !1
                                          }),
                                          i.any())
                                              return P.push({
                                                  z: -r,
                                                  zTop: -e,
                                                  layer: i,
                                                  bottomLayer: !0
                                              })
                                      }
                                  }
                              else if (i.any())
                                  return P.push({
                                      z: -x,
                                      zTop: -e,
                                      layer: i,
                                      bottomLayer: !0,
                                      roughingLayer: s
                                  })
                      }
                      ))
                  }
                  )),
                  i.addStep((function() {
                      for (let {layer: o, z: s, zTop: l, bottomLayer: a, roughingLayer: u} of P)
                          ((o,s,l,a,u)=>{
                              i.addStep((function() {
                                  let i = null;
                                  if ("detail" === p)
                                      if (a) {
                                          u = u.contract(g).expand(g);
                                          const a = o
                                            , p = a.exclusion(u);
                                          if (p.any()) {
                                              const u = p.expand(4 * v).intersection(a).contract(3 * v);
                                              u.any() && (i = t(u, s, l, v, n, r),
                                              null != i && S.push({
                                                  toolpaths: i,
                                                  retract: !0
                                              }));
                                              for (let t = 2; t >= 1; t--) {
                                                  const r = o.contract(t * v);
                                                  i = e(r.withZ(s), n),
                                                  null != i && S.push({
                                                      toolpaths: i,
                                                      retract: !0,
                                                      reorderable: !0
                                                  })
                                              }
                                              i = e(o.withZ(s), n),
                                              null != i && S.push({
                                                  toolpaths: i,
                                                  retract: !0,
                                                  reorderable: !0
                                              })
                                          }
                                      } else
                                          i = e(o.withZ(s), n),
                                          null != i && S.push({
                                              toolpaths: i,
                                              retract: !0,
                                              reorderable: !0
                                          });
                                  else {
                                      const e = "roughing" === p ? o.contract(g) : o;
                                      i = t(e, s, l, a && "roughing" !== p ? v : _, n, r),
                                      null != i && S.push({
                                          toolpaths: i,
                                          retract: !1
                                      })
                                  }
                              }
                              ))
                          }
                          )(o, s, l, a, u)
                  }
                  )),
                  i.addStep({
                      name: "EASEL.vCarving.clearingPassSort"
                  }, (()=>{
                      if (!r.vcarveNearestNeighbor)
                          return S;
                      for (const t of S) {
                          if (!t.reorderable)
                              continue;
                          const e = t.toolpaths.paths.all()
                            , n = e.slice();
                          EASEL.pathUtils.nearestNeighborSort(n),
                          EASEL.pathUtils.traversalWeight(n) < EASEL.pathUtils.traversalWeight(e) && (t.toolpaths.paths = EASEL.paths(n))
                      }
                      return S
                  }
                  ))
              }
              ))
          }
            , r = 4096
            , o = ({x: t, y: e})=>({
              x: t * r,
              y: e * r
          })
            , s = ({x: t, y: e, radius: n})=>({
              x: t / r,
              y: e / r,
              radius: n / r
          })
            , l = function({x: t, y: e, radius: n}, i, r) {
              null == r && (r = 0);
              return {
                  x: t,
                  y: e,
                  z: r - n / i
              }
          }
            , a = function(t) {
              const e = t.depths.filter((e=>e > t.startDepth));
              if (0 === e.length)
                  return null;
              const n = EASEL.layerByLayer().createIntermediateLayer(t.entities, e[0]);
              return EASEL.strategyCommon.simplifyLayer(n)
          }
            , u = function(t, e) {
              let n = [];
              const i = [];
              for (var {boundary: l, holes: a} of EASEL.strategyCommon.nonIntersectingPathGroups(t)) {
                  const t = l.first().points.map(o)
                    , u = a.all().map((t=>t.points.map(o)));
                  let p = JSPoly.construct_medial_axis(t, u, .03, JSPoly.parabola_discretization_method.CENTRAL_ANGLE, 3 * Math.PI / 4, r * e, JSPoly.number_type.BIG_INTEGERS);
                  p = p.map((({point0: t, point1: e})=>({
                      point0: s(t),
                      point1: s(e)
                  }))),
                  n = n.concat(p),
                  i.push({
                      boundary: l.first().points,
                      holes: a.all().map((t=>t.points)),
                      medialAxis: p
                  })
              }
              return {
                  medialAxis: n,
                  rawShapes: i
              }
          }
            , p = function(t, e, n) {
              const i = Math.tan(e / 2)
                , r = i * n
                , o = a(t);
              let s = u(o, r).medialAxis;
              s = s.map((({point0: e, point1: n})=>({
                  point0: l(e, i, -t.startDepth),
                  point1: l(n, i, -t.startDepth)
              })));
              return {
                  medialAxis: s,
                  flatAreaRegion: o.contract((t.endDepth - t.startDepth) * i)
              }
          }
            , h = (t,e,n)=>t + n * (e - t)
            , c = function(t, e, n) {
              let i, r, o;
              return t.point0.z >= e && t.point1.z >= e ? t : t.point0.z <= e && t.point1.z <= e ? (n.push([{
                  x: t.point0.x,
                  y: t.point0.y
              }, {
                  x: t.point1.x,
                  y: t.point1.y
              }]),
              null) : (t.point0.z > e && t.point1.z < e ? (i = (e - t.point0.z) / (t.point1.z - t.point0.z),
              r = h(t.point0.x, t.point1.x, i),
              o = h(t.point0.y, t.point1.y, i),
              n.push([{
                  x: r,
                  y: o
              }, {
                  x: t.point1.x,
                  y: t.point1.y
              }]),
              t.point1.x = r,
              t.point1.y = o,
              t.point1.z = e) : t.point0.z < e && t.point1.z > e && (i = (e - t.point1.z) / (t.point0.z - t.point1.z),
              r = h(t.point1.x, t.point0.x, i),
              o = h(t.point1.y, t.point0.y, i),
              n.push([{
                  x: t.point0.x,
                  y: t.point0.y
              }, {
                  x: r,
                  y: o
              }]),
              t.point0.x = r,
              t.point0.y = o,
              t.point0.z = e),
              t)
          }
            , f = function(t) {
              const e = [];
              let n = [];
              for (let[i,r] of t) {
                  const t = n[n.length - 1];
                  null != t && i && JSPoly.equal_points(t, i) ? n.push(r) : (n.length > 0 && e.push(n),
                  n = [i, r])
              }
              return n.length > 0 && e.push(n),
              e
          }
            , d = function(t, e) {
              const {jobSettings: {bit: n, detailBit: i, useDetailBit: r, depthPerPass: o}} = e
                , s = -t.endDepth
                , l = r ? i.radianTipAngle() : n.radianTipAngle()
                , a = p(t, l, o);
              if (null == a)
                  return null;
              let {medialAxis: u, flatAreaRegion: h} = a
                , d = [];
              return u = u.map((t=>c(t, s, d))),
              d = f(d),
              u = u.filter((t=>null != t)),
              u = u.concat(function(t, e, n) {
                  let i = EASEL.paths.fromPointArrays(t);
                  i = i.exclusionFromStrokes(e);
                  const r = [];
                  for (let o of i.all())
                      if (null != o) {
                          let t = null;
                          for (let e of o.points)
                              t && r.push({
                                  point0: {
                                      x: t.x,
                                      y: t.y,
                                      z: n
                                  },
                                  point1: {
                                      x: e.x,
                                      y: e.y,
                                      z: n
                                  }
                              }),
                              t = e
                      }
                  return r
              }(d, h, s)),
              function(t) {
                  let e = null;
                  const n = [];
                  let i = [];
                  for (let s of t)
                      null != e ? (r = e,
                      o = s.point0,
                      EASEL.math.closeTo(r.x, o.x) && EASEL.math.closeTo(r.y, o.y) && EASEL.math.closeTo(r.z, o.z) || (i.length > 0 && n.push(EASEL.path(i).withProps({
                          rapid: !1
                      })),
                      i = [{
                          x: s.point0.x,
                          y: s.point0.y,
                          z: s.point0.z
                      }])) : i = [{
                          x: s.point0.x,
                          y: s.point0.y,
                          z: s.point0.z
                      }],
                      i.push({
                          x: s.point1.x,
                          y: s.point1.y,
                          z: s.point1.z
                      }),
                      e = i[i.length - 1];
                  var r, o;
                  return i.length > 0 ? (n.push(EASEL.path(i).withProps({
                      rapid: !1
                  })),
                  EASEL.pathUtils.nearestNeighborSort(n),
                  n[0] = n[0].withProps({
                      comment: "v-carve cleanup"
                  }),
                  EASEL.paths(n)) : null
              }(u)
          };
          return {
              generateSimplifiedLayer: a,
              generateMedialAxis: u,
              generateMedialAxisToolpaths: p,
              generateVoronoiDiagram: function(t, e, n, i) {
                  let r;
                  const a = Math.tan(n / 2)
                    , u = t.first().points.map(o)
                    , p = Array.from(e.all()).map((t=>t.points.map(o)))
                    , h = JSPoly.construct_voronoi_diagram_with_edge_classification(u, p).edges().filter((t=>t.color() === JSPoly.colors.inner_primary && !JSPoly.equal_points({
                      x: t.vertex0().x(),
                      y: t.vertex0().y()
                  }, {
                      x: t.vertex1().x(),
                      y: t.vertex1().y()
                  })))
                    , c = [];
                  for (; h.length > 0; ) {
                      var f, d, y;
                      let t = h[0];
                      for (; null != (f = t.prev_primary()) && f !== h[0] && h.includes(f); )
                          t = f;
                      const e = t.cell();
                      for (var m = [t.vertex0()]; h.includes(t) && t.cell() === e; )
                          m.push(t.vertex1()),
                          h.splice(h.indexOf(t), 1),
                          t = t.next_primary();
                      if (e.contains_point()) {
                          var x = JSPoly.retrieve_point(e);
                          y = m.map((t=>(r = JSPoly.distance_to_point({
                              x: t.x(),
                              y: t.y()
                          }, x),
                          l(s({
                              x: t.x(),
                              y: t.y(),
                              radius: r
                          }), a, -i)))),
                          d = [l(s({
                              x: x.x,
                              y: x.y,
                              radius: 0
                          }), a, -i)]
                      } else {
                          var _ = JSPoly.retrieve_segment(e);
                          y = m.map((t=>(r = JSPoly.distance_to_segment({
                              x: t.x(),
                              y: t.y()
                          }, _),
                          l(s({
                              x: t.x(),
                              y: t.y(),
                              radius: r
                          }), a, -i)))),
                          d = [l(s({
                              x: _.high().x,
                              y: _.high().y,
                              radius: 0
                          }), a, -i), l(s({
                              x: _.low().x,
                              y: _.low().y,
                              radius: 0
                          }), a, -i)]
                      }
                      c.push([y, d])
                  }
                  return c
              },
              generateToolpathsForPockets: i,
              trimSegment: c,
              calculateSilhouettes: function(t, e) {
                  const {jobSettings: {bit: n, detailBit: i, useDetailBit: r, depthPerPass: o, passType: s}} = e;
                  if (t.silhouettes.length > 0)
                      return t;
                  const l = t.depths.slice().filter((t=>0 !== t));
                  if (0 === l.length)
                      return t;
                  const a = r ? i.radianTipAngle() : n.radianTipAngle()
                    , u = "roughing" === s && n.type() !== EASEL.bitGroups.v ? n.inchWidth() / 2 : 0
                    , p = [];
                  let h = t.getBoundary(l[0]);
                  const c = EASEL.paths();
                  let f = 0
                    , d = 0;
                  const y = Math.tan(a / 2);
                  for (let m of l) {
                      for (; d < m; ) {
                          const t = h.contract(y * (d - f) + u);
                          t.any() && p.push({
                              region: t,
                              depth: d
                          }),
                          d += o
                      }
                      const e = h.contract(y * (m - f) + u);
                      e.any() && p.push({
                          region: e,
                          depth: m
                      }),
                      h = c;
                      for (let n of t.entities)
                          h = n.depth > m ? h.union(e.intersection(n.boundary)) : h.exclusion(e.intersection(n.boundary.expand((m - n.depth) * y)));
                      EASEL.math.closeTo(d, m) && (d += o),
                      f = m
                  }
                  return t.silhouettes = p.reverse(),
                  t
              },
              triangulateRegion: (t,e)=>(()=>{
                  const n = [];
                  for (; t.length > 1 || e.length > 1; ) {
                      const i = t[0]
                        , r = e[0]
                        , o = t[1]
                        , s = e[1];
                      null != o && (null == s || EASEL.math.distance(r, o) < EASEL.math.distance(i, s)) ? (t = t.slice(1),
                      n.push([i, o, r])) : (e = e.slice(1),
                      n.push([i, s, r]))
                  }
                  return n
              }
              )(),
              generateNestedToolpathObjects: function(t, e) {
                  const n = Math.tan(e / 2)
                    , i = [];
                  var r = function(e, o, s) {
                      const l = []
                        , a = function(t, e) {
                          let n = EASEL.paths();
                          for (let i of t) {
                              const {boundary: t} = i;
                              i.depth > e ? "pocket" === i.type && (n = n.union(t)) : "pocket" !== i.type && "profile" !== i.type || (n = n.exclusion(t))
                          }
                          return n
                      }(e, o).contract((s - o) * n)
                        , u = function(t, e) {
                          let n = EASEL.paths();
                          for (let i of t) {
                              const {boundary: t} = i;
                              i.depth > e && "profile" === i.type ? n = n.union(t) : "pocket" !== i.type && "profile" !== i.type || (n = n.exclusion(t))
                          }
                          return n
                      }(e, s)
                        , p = a.union(u);
                      for (let t of e)
                          if (t.depth >= s) {
                              let e = t
                                , {boundary: n} = t
                                , i = "profile" === t.type ? t.strokes : null;
                              e = t.shallowCopy(),
                              n = p.intersection(n),
                              null != i && (i = i.intersectionWithStrokes(p)),
                              n.any() && (e.boundary = n,
                              null != i && (e.strokes = i),
                              l.push(e))
                          }
                      if (l.length > 0)
                          for (let n of EASEL.toolpathObjectsGenerators.fromEntityArray(l, 0, t.silhouettes).explode())
                              for (let t of n.orderCutsByContainment(s)) {
                                  const e = t.depths.filter((t=>t > s));
                                  e.length > 0 && (t.startDepth = s,
                                  t.endDepth = e[0],
                                  i.push(t),
                                  r(t.entities, t.startDepth, t.endDepth))
                              }
                  };
                  for (let o of t.orderCutsByContainment(0)) {
                      const t = o.depths.filter((t=>t > 0));
                      o.startDepth = 0,
                      o.endDepth = t[0],
                      i.push(o),
                      r(o.entities, o.startDepth, o.endDepth)
                  }
                  return i
              },
              generateToolpathsForObject: function(t, e, r, o, s) {
                  const {jobSettings: l} = o;
                  l.cutTypes.fill && (e.addStep({
                      name: "EASEL.vCarving.generateToolpathsForPockets"
                  }, (function() {
                      i(t, e, o)
                  }
                  )),
                  e.addStep({
                      name: "addToolpaths (safeRapid)"
                  }, (function(e) {
                      for (let i of e)
                          n({
                              paths: i.toolpaths.paths,
                              toolpaths: s,
                              safeRapid: r,
                              silhouettes: t.silhouettes,
                              retract: i.retract
                          })
                  }
                  )),
                  "roughing" !== l.passType && (e.addStep({
                      name: "EASEL.vCarving.generateFinalPass"
                  }, (()=>d(t, o))),
                  e.addStep({
                      name: "addToolpaths (safeRapid)"
                  }, (function(e) {
                      null != e && n({
                          paths: e,
                          toolpaths: s,
                          safeRapid: r,
                          silhouettes: t.silhouettes,
                          retract: !0
                      })
                  }
                  )))),
                  "roughing" !== l.passType && (l.cutTypes.drill && e.addStep((function() {
                      const e = EASEL.drilling.generateToolpaths(t, o.jobSettings.depthPerPass);
                      n({
                          paths: EASEL.paths(e),
                          toolpaths: s,
                          safeRapid: r,
                          silhouettes: [],
                          retract: !0
                      })
                  }
                  )),
                  l.cutTypes.outline && (e.addStep({
                      name: "generateToolpathsForProfiles"
                  }, (()=>EASEL.strategyCommon.generateToolpathsForProfiles(t, o))),
                  e.addStep({
                      name: "addToolpaths (safeRapid)"
                  }, (function(t) {
                      n({
                          paths: t,
                          toolpaths: s,
                          safeRapid: r,
                          silhouettes: [],
                          retract: !0
                      })
                  }
                  ))))
              },
              joinSegments: f
          }
      }()
  },
  1271: function(t, e) {
      EASEL.vCarvingStrategy = function() {
          const t = function(t, e) {
              const {useDetailBit: n, detailBit: i, bit: r, strokeBit: o} = e.jobSettings;
              return EASEL.strategyCommon.generateToolpathObjects(t, e),
              t.addStep({
                  name: "EASEL.vCarving.calculateSilhouettes"
              }, (function(t) {
                  return t = t.map((t=>EASEL.vCarving.calculateSilhouettes(t, e)))
              }
              )),
              t.addStep({
                  name: "EASEL.vCarving.generateNestedToolpathObjects"
              }, (function(t) {
                  const e = n ? i.radianTipAngle() : r.radianTipAngle();
                  return t = EASEL.flatten(t.map((t=>EASEL.vCarving.generateNestedToolpathObjects(t, e, o.inchWidth()))))
              }
              )),
              t
          };
          var e = function(t, e) {
              const {jobSettings: {bit: n, detailBit: i, useDetailBit: r, depthPerPass: o}} = e
                , s = (r ? i : n).radianTipAngle()
                , l = EASEL.vCarving.generateSimplifiedLayer(t)
                , a = Math.tan(s / 2) * o;
              return EASEL.vCarving.generateMedialAxis(l, a).rawShapes
          }
            , n = function(t) {
              return EASEL.vCarving.generateSimplifiedLayer(t).all().map((t=>t.points))
          };
          return {
              generateToolpaths: function(e, n) {
                  const {safetyHeight: i, retractHeight: r} = n.jobSettings
                    , o = [];
                  return t(e, n),
                  e.addStep({
                      name: "EASEL.vCarving.generateToolpathsForObject",
                      weight: 20
                  }, (function(t) {
                      for (let s of t) {
                          const {safeRapid: t} = EASEL.safeRapidProcessor(i, r);
                          EASEL.vCarving.generateToolpathsForObject(s, e, t, n, o)
                      }
                  }
                  )),
                  e.addStep((()=>EASEL.flatten(o))),
                  e
              },
              generateMedialAxisShapes: function(n, i) {
                  return t(n, i),
                  n.addStep({
                      name: "EASEL.vCarving.createMedialAxis"
                  }, (t=>t.map((t=>e(t, i))))),
                  n
              },
              generateSimpleShapes: function(e, i) {
                  return t(e, i),
                  e.addStep({
                      name: "EASEL.vCarving.createSimpleLayer"
                  }, (t=>t.map((t=>n(t))))),
                  e
              }
          }
      }()
  },
  190: function(t, e) {
      EASEL.operation = function() {
          const t = (t,e,n)=>({
              callback: t,
              weight: e,
              name: n,
              substeps: [],
              substepsWeight: 0
          });
          let e;
          const n = {};
          let i, r = t((function() {}
          ), 1, "TOTAL"), o = 1, s = 0;
          var l = function(t, i) {
              var a;
              return null != t.name && (a = t.name,
              null != n[a] ? n[a].resume() : n[a] = EASEL.timedEvent()),
              r = t,
              Promise.resolve(t.callback(i)).then((function(n) {
                  return r = void 0,
                  delete t.callback,
                  0 === t.substeps.length && (s += o * t.weight),
                  Promise.resolve(null != e && e(s)).then((()=>n))
              }
              )).then((function(e) {
                  const i = o;
                  o *= t.weight / t.substepsWeight;
                  let r = Promise.resolve(e);
                  for (let n of t.substeps)
                      r = r.then((t=>l(n, t)));
                  return delete t.substeps,
                  r.then((function(e) {
                      return o = i,
                      null != t.name && function(t) {
                          n[t].pause()
                      }(t.name),
                      e
                  }
                  ))
              }
              ))
          };
          return {
              addStep: function(e, n) {
                  let i, o = null;
                  null != n ? ({name: o, weight: i} = e) : "function" === typeof e ? (n = e,
                  o = null,
                  i = 1) : ({name: o, weight: i, callback: n} = e),
                  i || (i = 1),
                  o || (o = null),
                  r.substeps.push(t(n, i, o)),
                  r.substepsWeight += i
              },
              run: function(t) {
                  return null == t && (t = {}),
                  ({update: e} = t),
                  null != i ? i : i = l(r)
              },
              performance: function() {
                  const t = [];
                  for (let e in n)
                      t.push(n[e].end().then((t=>({
                          name: e,
                          duration: t
                      }))));
                  return Promise.all(t).then((t=>{
                      const e = {};
                      for (let {name: n, duration: i} of t)
                          e[n] = i;
                      return e
                  }
                  ))
              }
          }
      }
  },
  191: function(t, e, n) {
      EASEL.taskExecutor = function(t) {
          const e = {};
          return t.onmessage = function(t) {
              let n, i;
              const {jobId: r, type: o, params: s, maxRunTime: l} = t.data;
              isFinite(l) && (i = performance.now() + l,
              n = !1);
              const a = e[o] && e[o](s);
              if (!a)
                  throw new Error({
                      "Unknown message type": +o
                  });
              return a.run({
                  update: t=>{
                      if (null != i && performance.now() > i)
                          return n = !0,
                          Promise.reject();
                      self.postMessage({
                          type: "progress-updated",
                          jobId: r,
                          payload: {
                              progress: t
                          }
                      })
                  }
              }).then((t=>{
                  self.postMessage({
                      type: "done",
                      jobId: r,
                      payload: t
                  })
              }
              )).then((function() {
                  a.performance().then((function(t) {
                      0
                  }
                  )),
                  EASEL.timeProfiling.performance().then((function(t) {
                      0
                  }
                  ))
              }
              )).catch((function(t) {
                  n ? self.postMessage({
                      type: "canceled",
                      jobId: r
                  }) : self.postMessage({
                      type: "error",
                      jobId: r,
                      payload: {
                          message: t.message,
                          stack: t.stack
                      }
                  })
              }
              ))
          }
          ,
          {
              on: (t,n)=>{
                  e[t] = n
              }
          }
      }
  },
  341: function(t, e) {
      EASEL.offsetFill = function(t, e, n, i, r, o) {
          null == o && (o = 1e3);
          const s = t.all().map((t=>t.points)).filter((t=>t.length > 0));
          if (0 === s.length)
              return EASEL.paths();
          if (null == r) {
              const t = s.map((t=>EASEL.path(t, {
                  offsetDistance: 0
              })))
                , n = EASEL.pathOffsetter.offsetArray(s, -i, o);
              for (let e = 0; e < n.length; e++)
                  for (const r of n[e])
                      t.push(EASEL.path(r, {
                          offsetDistance: (e + 1) * i
                      }));
              return t.reverse(),
              EASEL.pathUtils.nearestNeighborSort(t),
              EASEL.paths(t).withZ(e)
          }
          let l = EASEL.pathOffsetter.pathTree(s, 0);
          const a = [];
          for (const p of l) {
              let t = [p];
              for (; t.length > 0; ) {
                  const e = t.shift()
                    , n = [e.points];
                  for (const i of e.children)
                      n.push(i.points),
                      t = t.concat(i.children);
                  a.push(n)
              }
          }
          const u = [];
          for (const p of a) {
              let t = EASEL.pathOffsetter.offsetTree(p, -i, o);
              for (; t.length > 0; ) {
                  const n = t.shift();
                  for (n.paths = [EASEL.path(n.points).withZ(e)],
                  delete n.points; 1 === n.children.length; ) {
                      const t = n.children[0];
                      n.paths.unshift(EASEL.path(t.points).withZ(e)),
                      delete t.points,
                      n.children = t.children
                  }
                  let i = n.paths[0].points;
                  for (let t = 1; t < n.paths.length; t++) {
                      const e = i[i.length - 1];
                      n.paths[t] = n.paths[t].rebaseNear(e, 0),
                      i = n.paths[t].points
                  }
                  t = t.concat(n.children),
                  u.unshift(n)
              }
          }
          return EASEL.paths(u.map((t=>{
              const o = t.offset > 0 ? {
                  offsetDistance: t.offset * i
              } : {}
                , s = EASEL.ramping.loopIn(t.paths[0].points, e, n, r);
              return EASEL.path(s.concat(...t.paths.map((t=>t.points))).flat(), o)
          }
          )))
      }
  },
  342: function(t, e) {
      EASEL.ramping = {
          profile(t, e, n, i) {
              return EASEL.path(t).isClosed() ? this.loopIn(t, e, n, i) : this.zigZagIn(t, e, n, i)
          },
          loopIn(t, e, n, i) {
              const r = Math.tan(i)
                , o = [];
              let s = {
                  x: t[0].x,
                  y: t[0].y,
                  z: e
              };
              for (let l = t.length - 2; s.z < n; l--) {
                  0 == l && (l = t.length - 1);
                  let e = {
                      x: t[l].x,
                      y: t[l].y
                  };
                  e.z = s.z + r * Math.hypot(e.x - s.x, e.y - s.y),
                  e.z > n && (e = this.lerp(s, e, (n - s.z) / (e.z - s.z)),
                  e.z = n),
                  o.unshift(e),
                  s = e
              }
              return o
          },
          zigZagIn(t, e, n, i) {
              const r = n - e
                , o = Math.tan(i);
              let s = t[0];
              const l = [{
                  x: s.x,
                  y: s.y,
                  z: n
              }]
                , a = [{
                  x: s.x,
                  y: s.y,
                  z: e
              }];
              let u = 0
                , p = 0;
              for (let {x: h, y: c} of t.slice(1)) {
                  const t = Math.hypot(h - s.x, c - s.y)
                    , i = o * t;
                  if (u + i > r / 2) {
                      const t = this.lerp(s, {
                          x: h,
                          y: c
                      }, (r / 2 - u) / i);
                      l.push({
                          x: t.x,
                          y: t.y,
                          z: e + r / 2
                      }),
                      u = r / 2;
                      break
                  }
                  u += i,
                  p += t,
                  l.push({
                      x: h,
                      y: c,
                      z: n - u
                  }),
                  a.unshift({
                      x: h,
                      y: c,
                      z: e + u
                  }),
                  s = {
                      x: h,
                      y: c
                  }
              }
              if (u < r / 2) {
                  l.pop(),
                  a[0].z = e + r / 2;
                  let {x: t, y: n} = a[0]
                    , i = 0;
                  for (let o = 1; o < a.length; o++)
                      i += Math.hypot(a[o].x - t, a[o].y - n) / p * (r / 2),
                      l[l.length - o].z = e + r / 2 + i,
                      a[o].z = e + r / 2 - i,
                      t = a[o].x,
                      n = a[o].y
              }
              return l.concat(a)
          },
          lerp: (t,e,n)=>({
              x: t.x + (e.x - t.x) * n,
              y: t.y + (e.y - t.y) * n
          })
      }
  },
  352: function(t, e) {
      EASEL.linearizer = function() {
          const t = (t,e)=>t.transformedPoint({
              x: Math.cos(e),
              y: Math.sin(e)
          })
            , e = function(n, i, r, o) {
              const s = (r + o) / 2
                , l = t(i, r)
                , a = t(i, o)
                , u = t(i, s);
              return EASEL.math.distToSegment(u, l, a).distance < n ? [l, a] : e(n, i, r, s).concat(e(n, i, s, o).slice(1))
          };
          return {
              ellipseArc: e,
              ellipse: function(n, i) {
                  const r = e(n, i, 0, 2 * Math.PI);
                  return r[r.length - 1] = t(i, 0),
                  r
              }
          }
      }()
  },
  353: function(t, e) {
      EASEL.pathOffsetter = function() {
          const t = {}
            , e = 32768
            , n = 32.768
            , i = t=>t.map((t=>({
              X: Math.round(t.x * e),
              Y: Math.round(t.y * e)
          })))
            , r = t=>t.map((t=>({
              x: t.X / e,
              y: t.Y / e
          })))
            , o = function(t) {
              return ClipperLib.JS.Lighten(t, 64)
          }
            , s = function(t, n, i, r, s) {
              const l = r ? ClipperLib.EndType.etClosedPolygon : ClipperLib.EndType.etOpenRound;
              null == s ? (s = new ClipperLib.ClipperOffset).MiterLimit = 5 : s.Clear();
              const a = new ClipperLib.Paths;
              return s.AddPaths(t, i, l, r),
              s.Execute(a, n * e),
              o(a).filter((t=>t.length > 0)).map((t=>t.concat([t[0]])))
          }
            , l = function(t, e) {
              const n = [];
              for (const i of t) {
                  a(n, {
                      points: i,
                      offset: e,
                      children: []
                  })
              }
              return n
          }
            , a = function(t, e) {
              for (let n = t.length - 1; n >= 0; n--)
                  if (p(e, t[n]))
                      e.children.push(t[n]),
                      t.splice(n, 1);
                  else if (p(t[n], e))
                      return u(t[n], e);
              return t.push(e),
              e
          }
            , u = function(t, e) {
              let n;
              for (; null != (n = t.children.find((t=>p(t, e)))); )
                  t = n;
              for (let i = t.children.length - 1; i >= 0; i--) {
                  const n = t.children[i];
                  p(e, n) && (e.children.push(n),
                  t.children.splice(i, 1))
              }
              return t.children.push(e),
              t
          }
            , p = function(t, e) {
              switch (EASEL.polygonUtils.pointInPolygon([t], e.points[0])) {
              case "ONPATH":
                  return console.log("unexpected on path", e.points[0]),
                  !0;
              case "INSIDE":
                  return !0
              }
              return !1
          }
            , h = function(t, e, o) {
              const s = new ClipperLib.Clipper;
              e = e.map(i),
              e = ClipperLib.JS.Clean(e, n),
              s.AddPaths(e, ClipperLib.PolyType.ptSubject, !0),
              o = o.map(i),
              o = ClipperLib.JS.Clean(o, n),
              s.AddPaths(o, ClipperLib.PolyType.ptClip, !0);
              const l = ClipperLib.PolyFillType.pftNonZero
                , a = ClipperLib.PolyFillType.pftNonZero;
              return s.Execute(t, e, l, a),
              e.map(r)
          }
            , c = function(t, e, o) {
              const s = new ClipperLib.Clipper;
              e = function(t) {
                  if (!(t instanceof Array))
                      return [];
                  if (0 === (t = ClipperLib.JS.Clone(t)).length || 1 === t.length && 0 === t[0].length)
                      return t;
                  const e = t.length
                    , n = [];
                  for (let r = 0; r < e; r++) {
                      var i;
                      const e = t[r]
                        , o = e.length;
                      if (0 === o)
                          continue;
                      if (o < 3) {
                          i = e,
                          n.push(i);
                          continue
                      }
                      i = e;
                      let s = e[0]
                        , l = 1;
                      for (let t = 1; t < o; t++)
                          (e[t].X - s.X) * (e[t].X - s.X) + (e[t].Y - s.Y) * (e[t].Y - s.Y) <= 1073.741824 || (i[l] = e[t],
                          s = e[t],
                          l++);
                      if (l < o && i.splice(l, o - l),
                      i.length > 1) {
                          const t = i[i.length - 1].Y;
                          for (l = i.length - 2; l > 0 && t === i[l].Y; )
                              l -= 1;
                          l !== i.length - 2 ? (n.push(i.slice(0, l + 2)),
                          n.push(i.slice(l + 1, i.length))) : n.push(i)
                      }
                  }
                  return n
              }(e = e.map(i)),
              s.AddPaths(e, ClipperLib.PolyType.ptSubject, !1),
              o = o.map(i),
              o = ClipperLib.JS.Clean(o, n),
              s.AddPaths(o, ClipperLib.PolyType.ptClip, !0);
              const l = ClipperLib.PolyFillType.pftNonZero
                , a = ClipperLib.PolyFillType.pftNonZero
                , u = new ClipperLib.PolyTree;
              s.Execute(t, u, l, a);
              return ClipperLib.Clipper.PolyTreeToPaths(u).map(r)
          };
          return t.area = t=>ClipperLib.JS.AreaOfPolygon(i(t), e),
          t.clean = function(t) {
              return t = t.map(i),
              t = (t = ClipperLib.JS.Clean(t, n)).map(r)
          }
          ,
          t.lighten = function(t) {
              return t = t.map(i),
              t = (t = o(t)).map(r)
          }
          ,
          t.simplify = function(t, e) {
              return null == e && (e = ClipperLib.PolyFillType.pftNonZero),
              t = t.map(i),
              t = (t = ClipperLib.Clipper.SimplifyPolygons(t, e)).map(r)
          }
          ,
          t.perimeter = t=>ClipperLib.JS.PerimeterOfPath(i(t), !1, e),
          t.offset = function(t, e, n, l) {
              return t = t.map(i),
              l && (t = o(t)),
              s(t, e, n, l).map(r)
          }
          ,
          t.offsetArray = function(t, e, n) {
              const l = new ClipperLib.ClipperOffset;
              l.MiterLimit = 5;
              const a = [];
              let u = o(t.map(i));
              for (; n-- > 0; ) {
                  const t = s(u, e, ClipperLib.JoinType.jtRound, !0, l);
                  if (0 === t.length)
                      break;
                  a.push(t.map(r)),
                  u = t
              }
              return a
          }
          ,
          t.pathTree = l,
          t.offsetTree = function(t, e, n) {
              const u = new ClipperLib.ClipperOffset;
              u.MiterLimit = 5;
              let p = 0;
              const h = l(t, p);
              let c = o(t.map(i));
              for (; c.length > 0 && p++ < n; ) {
                  const t = s(c, e, ClipperLib.JoinType.jtRound, !0, u);
                  for (const e of t) {
                      const t = {
                          points: r(e),
                          offset: p,
                          children: []
                      };
                      a(h, t) === t && console.error("Expected existing parent after offseting", t.points[0])
                  }
                  c = t
              }
              return h
          }
          ,
          t.add = (t,e)=>h(ClipperLib.ClipType.ctUnion, t, e),
          t.remove = function(t, e, n) {
              return null == n && (n = !0),
              n ? h(ClipperLib.ClipType.ctDifference, t, e) : c(ClipperLib.ClipType.ctDifference, t, e)
          }
          ,
          t.intersect = function(t, e, n) {
              return null == n && (n = !0),
              n ? h(ClipperLib.ClipType.ctIntersection, t, e) : c(ClipperLib.ClipType.ctIntersection, t, e)
          }
          ,
          t.JOIN_TYPE_SQUARE = 0,
          t.JOIN_TYPE_ROUND = 1,
          t.JOIN_TYPE_MITER = 2,
          t.FILL_TYPE_EVEN_ODD = 0,
          t.FILL_TYPE_NON_ZERO = 1,
          t
      }()
  },
  354: function(t, e) {
      EASEL.pathPolylineGenerator = function(t, e) {
          const n = {}
            , i = {
              x: 0,
              y: 0
          }
            , r = t=>[e.transformedPoint(t)]
            , o = function(n) {
              let o = []
                , s = null;
              for (let h of n)
                  o = null == s || null == s.rh && null == h.lh ? o.concat(r(h)) : o.concat((l = s,
                  a = s.rh,
                  u = h.lh,
                  p = h,
                  null == a && (a = i),
                  null == u && (u = i),
                  a = {
                      x: l.x + a.x,
                      y: l.y + a.y
                  },
                  u = {
                      x: p.x + u.x,
                      y: p.y + u.y
                  },
                  EASEL.subdivider.subdivideCubicBezier(e.transformedPoint(l), e.transformedPoint(a), e.transformedPoint(u), e.transformedPoint(p), t))),
                  s = h;
              var l, a, u, p;
              return o
          };
          return n.toPolyline = o,
          n.toPolylines = t=>t.map((t=>o(t))),
          n
      }
  },
  355: function(t, e) {
      EASEL.polylineGenerator = function() {
          const t = {}
            , e = .001
            , n = function(t) {
              return t.length > 0 && t.push(t[0]),
              t
          }
            , i = function(t, e) {
              const n = e.maxX - e.minX
                , i = e.maxY - e.minY
                , r = 0 === n ? 0 : t.width / n
                , o = 0 === i ? 0 : t.height / i;
              return EASEL.matrix().translatedBy(-(e.minX + e.maxX) / 2, -(e.minY + e.maxY) / 2).scaledBy(r, o)
          }
            , r = function(t) {
              if (0 === t.points.length)
                  return [];
              const n = EASEL.pathUtils.pathBoundingBox(t.points)
                , r = EASEL.matrix().premultipliedBy(i(t, n)).premultipliedBy(EASEL.shapeUtils.shapeMatrix(t));
              return EASEL.pathPolylineGenerator(e, r).toPolylines(t.points)
          };
          var o = function(t) {
              const i = EASEL.matrix().premultipliedBy(EASEL.shapeUtils.shapeMatrix(t))
                , r = Math.min(t.cornerRadius.x, t.width / 2)
                , o = Math.min(t.cornerRadius.y, t.height / 2)
                , s = t.width / 2 - r
                , l = t.height / 2 - o
                , a = EASEL.matrix().scaledBy(r, o)
                , u = a.translatedBy(s, l)
                , p = a.translatedBy(-s, l)
                , h = a.translatedBy(-s, -l)
                , c = a.translatedBy(s, -l);
              let f = [];
              return f = f.concat(EASEL.linearizer.ellipseArc(e, u, 0, .5 * Math.PI)),
              f = f.concat(EASEL.linearizer.ellipseArc(e, p, .5 * Math.PI, Math.PI)),
              f = f.concat(EASEL.linearizer.ellipseArc(e, h, Math.PI, 1.5 * Math.PI)),
              f = f.concat(EASEL.linearizer.ellipseArc(e, c, 1.5 * Math.PI, 2 * Math.PI)),
              [n(f.map((t=>i.transformedPoint(t))))]
          };
          return t.MAX_ERROR = e,
          t.process = function(t) {
              let s = [];
              switch (t.type) {
              case "path":
                  s = r(t);
                  break;
              case "polygon":
                  s = function(t) {
                      if (0 === t.points.length)
                          return [];
                      const e = EASEL.pathUtils.pointsBoundingBox(t.points)
                        , r = EASEL.matrix().premultipliedBy(i(t, e)).premultipliedBy(EASEL.shapeUtils.shapeMatrix(t));
                      return [n(Array.from(t.points).map((t=>r.transformedPoint(t))))]
                  }(t);
                  break;
              case "polyline":
                  s = function(t) {
                      if (0 === t.points.length)
                          return [];
                      const e = EASEL.pathUtils.pointsBoundingBox(t.points)
                        , n = EASEL.matrix().premultipliedBy(i(t, e)).premultipliedBy(EASEL.shapeUtils.shapeMatrix(t));
                      return [Array.from(t.points).map((t=>n.transformedPoint(t)))]
                  }(t);
                  break;
              case "ellipse":
                  s = function(t) {
                      const n = EASEL.matrix().scaledBy(t.width / 2, t.height / 2).premultipliedBy(EASEL.shapeUtils.shapeMatrix(t));
                      return [EASEL.linearizer.ellipse(e, n)]
                  }(t);
                  break;
              case "line":
                  s = (t=>[[t.point1, t.point2]])(t);
                  break;
              case "rectangle":
                  s = function(t) {
                      if (null != t.cornerRadius && (0 !== t.cornerRadius.x || 0 !== t.cornerRadius.y))
                          return o(t);
                      const e = EASEL.matrix().premultipliedBy(EASEL.shapeUtils.shapeMatrix(t))
                        , i = [{
                          x: -t.width / 2,
                          y: -t.height / 2
                      }, {
                          x: -t.width / 2,
                          y: t.height / 2
                      }, {
                          x: t.width / 2,
                          y: t.height / 2
                      }, {
                          x: t.width / 2,
                          y: -t.height / 2
                      }];
                      return [n(Array.from(i).map((t=>e.transformedPoint(t))))]
                  }(t);
                  break;
              case "text":
                  s = function(t) {
                      if (!isFinite(t.width) || !isFinite(t.height))
                          return [];
                      const e = null != EASEL.textHelper ? EASEL.textHelper.textShapeToPathShape(t) : t.fontPath;
                      return null == e ? [] : r(e)
                  }(t);
                  break;
              case "drill":
                  s = function(t) {
                      return [[{
                          x: t.center.x,
                          y: t.center.y
                      }]]
                  }(t)
              }
              return EASEL.paths.fromPointArrays(s)
          }
          ,
          t
      }()
  },
  356: function(t, e) {
      EASEL.subdivider = function() {
          const t = {}
            , e = {};
          var n = function(t, e, i) {
              if (function(t) {
                  const e = t[0]
                    , n = t[t.length - 1]
                    , i = EASEL.math.distToSegment(t[1], e, n).distance
                    , r = EASEL.math.distToSegment(t[2], e, n).distance;
                  return .75 * Math.max(i, r)
              }(t) < i)
                  return [t[t.length - 1]];
              {
                  const {l: r, r: o} = e(t);
                  return n(r, e, i).concat(n(o, e, i))
              }
          };
          const i = function(t, e, n) {
              let i;
              const r = 1 - t;
              return i = {
                  x: e.x * r + n.x * t,
                  y: e.y * r + n.y * t
              },
              i
          };
          var r = function(t) {
              let e;
              const [n,r,o,s] = t
                , l = i(.5, n, r)
                , a = i(.5, r, o)
                , u = i(.5, o, s)
                , p = i(.5, l, a)
                , h = i(.5, a, u)
                , c = i(.5, p, h);
              return e = {
                  l: [n, l, p, c],
                  r: [c, h, u, s]
              },
              e
          };
          return t.subdivideCubicBezier = function(t, i, o, s, l) {
              let a;
              const u = [t, i, o, s];
              return null != e[a = function(t, e) {
                  return `${t.map((t=>`${t.x}_${t.y}`)).join("-")}-${e}`
              }(u, l)] ? e[a] : e[a] = n(u, r, l)
          }
          ,
          t
      }()
  },
  357: function(t, e, n) {
      !function() {
          "use strict";
          var e, n = {
              use_lines: !0,
              use_xyz: !1
          }, i = !1;
          if (t.exports ? (t.exports = n,
          i = !0) : "undefined" !== typeof document ? window.ClipperLib = n : self.ClipperLib = n,
          i) {
              r = "chrome";
              e = "Netscape"
          } else {
              var r = navigator.userAgent.toString().toLowerCase();
              e = navigator.appName
          }
          var o, s = {};
          -1 != r.indexOf("chrome") && -1 == r.indexOf("chromium") ? s.chrome = 1 : s.chrome = 0,
          -1 != r.indexOf("chromium") ? s.chromium = 1 : s.chromium = 0,
          -1 != r.indexOf("safari") && -1 == r.indexOf("chrome") && -1 == r.indexOf("chromium") ? s.safari = 1 : s.safari = 0,
          -1 != r.indexOf("firefox") ? s.firefox = 1 : s.firefox = 0,
          -1 != r.indexOf("firefox/17") ? s.firefox17 = 1 : s.firefox17 = 0,
          -1 != r.indexOf("firefox/15") ? s.firefox15 = 1 : s.firefox15 = 0,
          -1 != r.indexOf("firefox/3") ? s.firefox3 = 1 : s.firefox3 = 0,
          -1 != r.indexOf("opera") ? s.opera = 1 : s.opera = 0,
          -1 != r.indexOf("msie 10") ? s.msie10 = 1 : s.msie10 = 0,
          -1 != r.indexOf("msie 9") ? s.msie9 = 1 : s.msie9 = 0,
          -1 != r.indexOf("msie 8") ? s.msie8 = 1 : s.msie8 = 0,
          -1 != r.indexOf("msie 7") ? s.msie7 = 1 : s.msie7 = 0,
          -1 != r.indexOf("msie ") ? s.msie = 1 : s.msie = 0,
          n.biginteger_used = null;
          function l(t, e, i) {
              n.biginteger_used = 1,
              null != t && ("number" == typeof t && "undefined" == typeof e ? this.fromInt(t) : "number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
          }
          function a() {
              return new l(null,void 0,void 0)
          }
          "Microsoft Internet Explorer" == e ? (l.prototype.am = function(t, e, n, i, r, o) {
              for (var s = 32767 & e, l = e >> 15; --o >= 0; ) {
                  var a = 32767 & this[t]
                    , u = this[t++] >> 15
                    , p = l * a + u * s;
                  r = ((a = s * a + ((32767 & p) << 15) + n[i] + (1073741823 & r)) >>> 30) + (p >>> 15) + l * u + (r >>> 30),
                  n[i++] = 1073741823 & a
              }
              return r
          }
          ,
          o = 30) : "Netscape" != e ? (l.prototype.am = function(t, e, n, i, r, o) {
              for (; --o >= 0; ) {
                  var s = e * this[t++] + n[i] + r;
                  r = Math.floor(s / 67108864),
                  n[i++] = 67108863 & s
              }
              return r
          }
          ,
          o = 26) : (l.prototype.am = function(t, e, n, i, r, o) {
              for (var s = 16383 & e, l = e >> 14; --o >= 0; ) {
                  var a = 16383 & this[t]
                    , u = this[t++] >> 14
                    , p = l * a + u * s;
                  r = ((a = s * a + ((16383 & p) << 14) + n[i] + r) >> 28) + (p >> 14) + l * u,
                  n[i++] = 268435455 & a
              }
              return r
          }
          ,
          o = 28),
          l.prototype.DB = o,
          l.prototype.DM = (1 << o) - 1,
          l.prototype.DV = 1 << o;
          l.prototype.FV = Math.pow(2, 52),
          l.prototype.F1 = 52 - o,
          l.prototype.F2 = 2 * o - 52;
          var u, p, h = new Array;
          for (u = "0".charCodeAt(0),
          p = 0; p <= 9; ++p)
              h[u++] = p;
          for (u = "a".charCodeAt(0),
          p = 10; p < 36; ++p)
              h[u++] = p;
          for (u = "A".charCodeAt(0),
          p = 10; p < 36; ++p)
              h[u++] = p;
          function c(t) {
              return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
          }
          function f(t, e) {
              var n = h[t.charCodeAt(e)];
              return null == n ? -1 : n
          }
          function d(t) {
              var e = a();
              return e.fromInt(t),
              e
          }
          function y(t) {
              var e, n = 1;
              return 0 != (e = t >>> 16) && (t = e,
              n += 16),
              0 != (e = t >> 8) && (t = e,
              n += 8),
              0 != (e = t >> 4) && (t = e,
              n += 4),
              0 != (e = t >> 2) && (t = e,
              n += 2),
              0 != (e = t >> 1) && (t = e,
              n += 1),
              n
          }
          function m(t) {
              this.m = t
          }
          function x(t) {
              this.m = t,
              this.mp = t.invDigit(),
              this.mpl = 32767 & this.mp,
              this.mph = this.mp >> 15,
              this.um = (1 << t.DB - 15) - 1,
              this.mt2 = 2 * t.t
          }
          function _(t, e) {
              return t & e
          }
          function v(t, e) {
              return t | e
          }
          function g(t, e) {
              return t ^ e
          }
          function E(t, e) {
              return t & ~e
          }
          function P(t) {
              if (0 == t)
                  return -1;
              var e = 0;
              return 0 == (65535 & t) && (t >>= 16,
              e += 16),
              0 == (255 & t) && (t >>= 8,
              e += 8),
              0 == (15 & t) && (t >>= 4,
              e += 4),
              0 == (3 & t) && (t >>= 2,
              e += 2),
              0 == (1 & t) && ++e,
              e
          }
          function S(t) {
              for (var e = 0; 0 != t; )
                  t &= t - 1,
                  ++e;
              return e
          }
          function L() {}
          function A(t) {
              return t
          }
          function T(t) {
              this.r2 = a(),
              this.q3 = a(),
              l.ONE.dlShiftTo(2 * t.t, this.r2),
              this.mu = this.r2.divide(t),
              this.m = t
          }
          m.prototype.convert = function(t) {
              return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
          }
          ,
          m.prototype.revert = function(t) {
              return t
          }
          ,
          m.prototype.reduce = function(t) {
              t.divRemTo(this.m, null, t)
          }
          ,
          m.prototype.mulTo = function(t, e, n) {
              t.multiplyTo(e, n),
              this.reduce(n)
          }
          ,
          m.prototype.sqrTo = function(t, e) {
              t.squareTo(e),
              this.reduce(e)
          }
          ,
          x.prototype.convert = function(t) {
              var e = a();
              return t.abs().dlShiftTo(this.m.t, e),
              e.divRemTo(this.m, null, e),
              t.s < 0 && e.compareTo(l.ZERO) > 0 && this.m.subTo(e, e),
              e
          }
          ,
          x.prototype.revert = function(t) {
              var e = a();
              return t.copyTo(e),
              this.reduce(e),
              e
          }
          ,
          x.prototype.reduce = function(t) {
              for (; t.t <= this.mt2; )
                  t[t.t++] = 0;
              for (var e = 0; e < this.m.t; ++e) {
                  var n = 32767 & t[e]
                    , i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                  for (t[n = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV; )
                      t[n] -= t.DV,
                      t[++n]++
              }
              t.clamp(),
              t.drShiftTo(this.m.t, t),
              t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
          }
          ,
          x.prototype.mulTo = function(t, e, n) {
              t.multiplyTo(e, n),
              this.reduce(n)
          }
          ,
          x.prototype.sqrTo = function(t, e) {
              t.squareTo(e),
              this.reduce(e)
          }
          ,
          l.prototype.copyTo = function(t) {
              for (var e = this.t - 1; e >= 0; --e)
                  t[e] = this[e];
              t.t = this.t,
              t.s = this.s
          }
          ,
          l.prototype.fromInt = function(t) {
              this.t = 1,
              this.s = t < 0 ? -1 : 0,
              t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
          }
          ,
          l.prototype.fromString = function(t, e) {
              var n;
              if (16 == e)
                  n = 4;
              else if (8 == e)
                  n = 3;
              else if (256 == e)
                  n = 8;
              else if (2 == e)
                  n = 1;
              else if (32 == e)
                  n = 5;
              else {
                  if (4 != e)
                      return void this.fromRadix(t, e);
                  n = 2
              }
              this.t = 0,
              this.s = 0;
              for (var i = t.length, r = !1, o = 0; --i >= 0; ) {
                  var s = 8 == n ? 255 & t[i] : f(t, i);
                  s < 0 ? "-" == t.charAt(i) && (r = !0) : (r = !1,
                  0 == o ? this[this.t++] = s : o + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - o) - 1) << o,
                  this[this.t++] = s >> this.DB - o) : this[this.t - 1] |= s << o,
                  (o += n) >= this.DB && (o -= this.DB))
              }
              8 == n && 0 != (128 & t[0]) && (this.s = -1,
              o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)),
              this.clamp(),
              r && l.ZERO.subTo(this, this)
          }
          ,
          l.prototype.clamp = function() {
              for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                  --this.t
          }
          ,
          l.prototype.dlShiftTo = function(t, e) {
              var n;
              for (n = this.t - 1; n >= 0; --n)
                  e[n + t] = this[n];
              for (n = t - 1; n >= 0; --n)
                  e[n] = 0;
              e.t = this.t + t,
              e.s = this.s
          }
          ,
          l.prototype.drShiftTo = function(t, e) {
              for (var n = t; n < this.t; ++n)
                  e[n - t] = this[n];
              e.t = Math.max(this.t - t, 0),
              e.s = this.s
          }
          ,
          l.prototype.lShiftTo = function(t, e) {
              var n, i = t % this.DB, r = this.DB - i, o = (1 << r) - 1, s = Math.floor(t / this.DB), l = this.s << i & this.DM;
              for (n = this.t - 1; n >= 0; --n)
                  e[n + s + 1] = this[n] >> r | l,
                  l = (this[n] & o) << i;
              for (n = s - 1; n >= 0; --n)
                  e[n] = 0;
              e[s] = l,
              e.t = this.t + s + 1,
              e.s = this.s,
              e.clamp()
          }
          ,
          l.prototype.rShiftTo = function(t, e) {
              e.s = this.s;
              var n = Math.floor(t / this.DB);
              if (n >= this.t)
                  e.t = 0;
              else {
                  var i = t % this.DB
                    , r = this.DB - i
                    , o = (1 << i) - 1;
                  e[0] = this[n] >> i;
                  for (var s = n + 1; s < this.t; ++s)
                      e[s - n - 1] |= (this[s] & o) << r,
                      e[s - n] = this[s] >> i;
                  i > 0 && (e[this.t - n - 1] |= (this.s & o) << r),
                  e.t = this.t - n,
                  e.clamp()
              }
          }
          ,
          l.prototype.subTo = function(t, e) {
              for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r; )
                  i += this[n] - t[n],
                  e[n++] = i & this.DM,
                  i >>= this.DB;
              if (t.t < this.t) {
                  for (i -= t.s; n < this.t; )
                      i += this[n],
                      e[n++] = i & this.DM,
                      i >>= this.DB;
                  i += this.s
              } else {
                  for (i += this.s; n < t.t; )
                      i -= t[n],
                      e[n++] = i & this.DM,
                      i >>= this.DB;
                  i -= t.s
              }
              e.s = i < 0 ? -1 : 0,
              i < -1 ? e[n++] = this.DV + i : i > 0 && (e[n++] = i),
              e.t = n,
              e.clamp()
          }
          ,
          l.prototype.multiplyTo = function(t, e) {
              var n = this.abs()
                , i = t.abs()
                , r = n.t;
              for (e.t = r + i.t; --r >= 0; )
                  e[r] = 0;
              for (r = 0; r < i.t; ++r)
                  e[r + n.t] = n.am(0, i[r], e, r, 0, n.t);
              e.s = 0,
              e.clamp(),
              this.s != t.s && l.ZERO.subTo(e, e)
          }
          ,
          l.prototype.squareTo = function(t) {
              for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0; )
                  t[n] = 0;
              for (n = 0; n < e.t - 1; ++n) {
                  var i = e.am(n, e[n], t, 2 * n, 0, 1);
                  (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                  t[n + e.t + 1] = 1)
              }
              t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
              t.s = 0,
              t.clamp()
          }
          ,
          l.prototype.divRemTo = function(t, e, n) {
              var i = t.abs();
              if (!(i.t <= 0)) {
                  var r = this.abs();
                  if (r.t < i.t)
                      return null != e && e.fromInt(0),
                      void (null != n && this.copyTo(n));
                  null == n && (n = a());
                  var o = a()
                    , s = this.s
                    , u = t.s
                    , p = this.DB - y(i[i.t - 1]);
                  p > 0 ? (i.lShiftTo(p, o),
                  r.lShiftTo(p, n)) : (i.copyTo(o),
                  r.copyTo(n));
                  var h = o.t
                    , c = o[h - 1];
                  if (0 != c) {
                      var f = c * (1 << this.F1) + (h > 1 ? o[h - 2] >> this.F2 : 0)
                        , d = this.FV / f
                        , m = (1 << this.F1) / f
                        , x = 1 << this.F2
                        , _ = n.t
                        , v = _ - h
                        , g = null == e ? a() : e;
                      for (o.dlShiftTo(v, g),
                      n.compareTo(g) >= 0 && (n[n.t++] = 1,
                      n.subTo(g, n)),
                      l.ONE.dlShiftTo(h, g),
                      g.subTo(o, o); o.t < h; )
                          o[o.t++] = 0;
                      for (; --v >= 0; ) {
                          var E = n[--_] == c ? this.DM : Math.floor(n[_] * d + (n[_ - 1] + x) * m);
                          if ((n[_] += o.am(0, E, n, v, 0, h)) < E)
                              for (o.dlShiftTo(v, g),
                              n.subTo(g, n); n[_] < --E; )
                                  n.subTo(g, n)
                      }
                      null != e && (n.drShiftTo(h, e),
                      s != u && l.ZERO.subTo(e, e)),
                      n.t = h,
                      n.clamp(),
                      p > 0 && n.rShiftTo(p, n),
                      s < 0 && l.ZERO.subTo(n, n)
                  }
              }
          }
          ,
          l.prototype.invDigit = function() {
              if (this.t < 1)
                  return 0;
              var t = this[0];
              if (0 == (1 & t))
                  return 0;
              var e = 3 & t;
              return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
          }
          ,
          l.prototype.isEven = function() {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s)
          }
          ,
          l.prototype.exp = function(t, e) {
              if (t > 4294967295 || t < 1)
                  return l.ONE;
              var n = a()
                , i = a()
                , r = e.convert(this)
                , o = y(t) - 1;
              for (r.copyTo(n); --o >= 0; )
                  if (e.sqrTo(n, i),
                  (t & 1 << o) > 0)
                      e.mulTo(i, r, n);
                  else {
                      var s = n;
                      n = i,
                      i = s
                  }
              return e.revert(n)
          }
          ,
          l.prototype.toString = function(t) {
              if (this.s < 0)
                  return "-" + this.negate().toString(t);
              var e;
              if (16 == t)
                  e = 4;
              else if (8 == t)
                  e = 3;
              else if (2 == t)
                  e = 1;
              else if (32 == t)
                  e = 5;
              else {
                  if (4 != t)
                      return this.toRadix(t);
                  e = 2
              }
              var n, i = (1 << e) - 1, r = !1, o = "", s = this.t, l = this.DB - s * this.DB % e;
              if (s-- > 0)
                  for (l < this.DB && (n = this[s] >> l) > 0 && (r = !0,
                  o = c(n)); s >= 0; )
                      l < e ? (n = (this[s] & (1 << l) - 1) << e - l,
                      n |= this[--s] >> (l += this.DB - e)) : (n = this[s] >> (l -= e) & i,
                      l <= 0 && (l += this.DB,
                      --s)),
                      n > 0 && (r = !0),
                      r && (o += c(n));
              return r ? o : "0"
          }
          ,
          l.prototype.negate = function() {
              var t = a();
              return l.ZERO.subTo(this, t),
              t
          }
          ,
          l.prototype.abs = function() {
              return this.s < 0 ? this.negate() : this
          }
          ,
          l.prototype.compareTo = function(t) {
              var e = this.s - t.s;
              if (0 != e)
                  return e;
              var n = this.t;
              if (0 != (e = n - t.t))
                  return this.s < 0 ? -e : e;
              for (; --n >= 0; )
                  if (0 != (e = this[n] - t[n]))
                      return e;
              return 0
          }
          ,
          l.prototype.bitLength = function() {
              return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
          }
          ,
          l.prototype.mod = function(t) {
              var e = a();
              return this.abs().divRemTo(t, null, e),
              this.s < 0 && e.compareTo(l.ZERO) > 0 && t.subTo(e, e),
              e
          }
          ,
          l.prototype.modPowInt = function(t, e) {
              var n;
              return n = t < 256 || e.isEven() ? new m(e) : new x(e),
              this.exp(t, n)
          }
          ,
          l.ZERO = d(0),
          l.ONE = d(1),
          L.prototype.convert = A,
          L.prototype.revert = A,
          L.prototype.mulTo = function(t, e, n) {
              t.multiplyTo(e, n)
          }
          ,
          L.prototype.sqrTo = function(t, e) {
              t.squareTo(e)
          }
          ,
          T.prototype.convert = function(t) {
              if (t.s < 0 || t.t > 2 * this.m.t)
                  return t.mod(this.m);
              if (t.compareTo(this.m) < 0)
                  return t;
              var e = a();
              return t.copyTo(e),
              this.reduce(e),
              e
          }
          ,
          T.prototype.revert = function(t) {
              return t
          }
          ,
          T.prototype.reduce = function(t) {
              for (t.drShiftTo(this.m.t - 1, this.r2),
              t.t > this.m.t + 1 && (t.t = this.m.t + 1,
              t.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0; )
                  t.dAddOffset(1, this.m.t + 1);
              for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0; )
                  t.subTo(this.m, t)
          }
          ,
          T.prototype.mulTo = function(t, e, n) {
              t.multiplyTo(e, n),
              this.reduce(n)
          }
          ,
          T.prototype.sqrTo = function(t, e) {
              t.squareTo(e),
              this.reduce(e)
          }
          ;
          var C = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
            , I = (1 << 26) / C[C.length - 1];
          l.prototype.chunkSize = function(t) {
              return Math.floor(Math.LN2 * this.DB / Math.log(t))
          }
          ,
          l.prototype.toRadix = function(t) {
              if (null == t && (t = 10),
              0 == this.signum() || t < 2 || t > 36)
                  return "0";
              var e = this.chunkSize(t)
                , n = Math.pow(t, e)
                , i = d(n)
                , r = a()
                , o = a()
                , s = "";
              for (this.divRemTo(i, r, o); r.signum() > 0; )
                  s = (n + o.intValue()).toString(t).substr(1) + s,
                  r.divRemTo(i, r, o);
              return o.intValue().toString(t) + s
          }
          ,
          l.prototype.fromRadix = function(t, e) {
              this.fromInt(0),
              null == e && (e = 10);
              for (var n = this.chunkSize(e), i = Math.pow(e, n), r = !1, o = 0, s = 0, a = 0; a < t.length; ++a) {
                  var u = f(t, a);
                  u < 0 ? "-" == t.charAt(a) && 0 == this.signum() && (r = !0) : (s = e * s + u,
                  ++o >= n && (this.dMultiply(i),
                  this.dAddOffset(s, 0),
                  o = 0,
                  s = 0))
              }
              o > 0 && (this.dMultiply(Math.pow(e, o)),
              this.dAddOffset(s, 0)),
              r && l.ZERO.subTo(this, this)
          }
          ,
          l.prototype.fromNumber = function(t, e, n) {
              if ("number" == typeof e)
                  if (t < 2)
                      this.fromInt(1);
                  else
                      for (this.fromNumber(t, n),
                      this.testBit(t - 1) || this.bitwiseTo(l.ONE.shiftLeft(t - 1), v, this),
                      this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); )
                          this.dAddOffset(2, 0),
                          this.bitLength() > t && this.subTo(l.ONE.shiftLeft(t - 1), this);
              else {
                  var i = new Array
                    , r = 7 & t;
                  i.length = 1 + (t >> 3),
                  e.nextBytes(i),
                  r > 0 ? i[0] &= (1 << r) - 1 : i[0] = 0,
                  this.fromString(i, 256)
              }
          }
          ,
          l.prototype.bitwiseTo = function(t, e, n) {
              var i, r, o = Math.min(t.t, this.t);
              for (i = 0; i < o; ++i)
                  n[i] = e(this[i], t[i]);
              if (t.t < this.t) {
                  for (r = t.s & this.DM,
                  i = o; i < this.t; ++i)
                      n[i] = e(this[i], r);
                  n.t = this.t
              } else {
                  for (r = this.s & this.DM,
                  i = o; i < t.t; ++i)
                      n[i] = e(r, t[i]);
                  n.t = t.t
              }
              n.s = e(this.s, t.s),
              n.clamp()
          }
          ,
          l.prototype.changeBit = function(t, e) {
              var n = l.ONE.shiftLeft(t);
              return this.bitwiseTo(n, e, n),
              n
          }
          ,
          l.prototype.addTo = function(t, e) {
              for (var n = 0, i = 0, r = Math.min(t.t, this.t); n < r; )
                  i += this[n] + t[n],
                  e[n++] = i & this.DM,
                  i >>= this.DB;
              if (t.t < this.t) {
                  for (i += t.s; n < this.t; )
                      i += this[n],
                      e[n++] = i & this.DM,
                      i >>= this.DB;
                  i += this.s
              } else {
                  for (i += this.s; n < t.t; )
                      i += t[n],
                      e[n++] = i & this.DM,
                      i >>= this.DB;
                  i += t.s
              }
              e.s = i < 0 ? -1 : 0,
              i > 0 ? e[n++] = i : i < -1 && (e[n++] = this.DV + i),
              e.t = n,
              e.clamp()
          }
          ,
          l.prototype.dMultiply = function(t) {
              this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
              ++this.t,
              this.clamp()
          }
          ,
          l.prototype.dAddOffset = function(t, e) {
              if (0 != t) {
                  for (; this.t <= e; )
                      this[this.t++] = 0;
                  for (this[e] += t; this[e] >= this.DV; )
                      this[e] -= this.DV,
                      ++e >= this.t && (this[this.t++] = 0),
                      ++this[e]
              }
          }
          ,
          l.prototype.multiplyLowerTo = function(t, e, n) {
              var i, r = Math.min(this.t + t.t, e);
              for (n.s = 0,
              n.t = r; r > 0; )
                  n[--r] = 0;
              for (i = n.t - this.t; r < i; ++r)
                  n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
              for (i = Math.min(t.t, e); r < i; ++r)
                  this.am(0, t[r], n, r, 0, e - r);
              n.clamp()
          }
          ,
          l.prototype.multiplyUpperTo = function(t, e, n) {
              --e;
              var i = n.t = this.t + t.t - e;
              for (n.s = 0; --i >= 0; )
                  n[i] = 0;
              for (i = Math.max(e - this.t, 0); i < t.t; ++i)
                  n[this.t + i - e] = this.am(e - i, t[i], n, 0, 0, this.t + i - e);
              n.clamp(),
              n.drShiftTo(1, n)
          }
          ,
          l.prototype.modInt = function(t) {
              if (t <= 0)
                  return 0;
              var e = this.DV % t
                , n = this.s < 0 ? t - 1 : 0;
              if (this.t > 0)
                  if (0 == e)
                      n = this[0] % t;
                  else
                      for (var i = this.t - 1; i >= 0; --i)
                          n = (e * n + this[i]) % t;
              return n
          }
          ,
          l.prototype.millerRabin = function(t) {
              var e = this.subtract(l.ONE)
                , n = e.getLowestSetBit();
              if (n <= 0)
                  return !1;
              var i = e.shiftRight(n);
              (t = t + 1 >> 1) > C.length && (t = C.length);
              for (var r = a(), o = 0; o < t; ++o) {
                  r.fromInt(C[Math.floor(Math.random() * C.length)]);
                  var s = r.modPow(i, this);
                  if (0 != s.compareTo(l.ONE) && 0 != s.compareTo(e)) {
                      for (var u = 1; u++ < n && 0 != s.compareTo(e); )
                          if (0 == (s = s.modPowInt(2, this)).compareTo(l.ONE))
                              return !1;
                      if (0 != s.compareTo(e))
                          return !1
                  }
              }
              return !0
          }
          ,
          l.prototype.clone = function() {
              var t = a();
              return this.copyTo(t),
              t
          }
          ,
          l.prototype.intValue = function() {
              if (this.s < 0) {
                  if (1 == this.t)
                      return this[0] - this.DV;
                  if (0 == this.t)
                      return -1
              } else {
                  if (1 == this.t)
                      return this[0];
                  if (0 == this.t)
                      return 0
              }
              return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
          }
          ,
          l.prototype.byteValue = function() {
              return 0 == this.t ? this.s : this[0] << 24 >> 24
          }
          ,
          l.prototype.shortValue = function() {
              return 0 == this.t ? this.s : this[0] << 16 >> 16
          }
          ,
          l.prototype.signum = function() {
              return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
          }
          ,
          l.prototype.toByteArray = function() {
              var t = this.t
                , e = new Array;
              e[0] = this.s;
              var n, i = this.DB - t * this.DB % 8, r = 0;
              if (t-- > 0)
                  for (i < this.DB && (n = this[t] >> i) != (this.s & this.DM) >> i && (e[r++] = n | this.s << this.DB - i); t >= 0; )
                      i < 8 ? (n = (this[t] & (1 << i) - 1) << 8 - i,
                      n |= this[--t] >> (i += this.DB - 8)) : (n = this[t] >> (i -= 8) & 255,
                      i <= 0 && (i += this.DB,
                      --t)),
                      0 != (128 & n) && (n |= -256),
                      0 == r && (128 & this.s) != (128 & n) && ++r,
                      (r > 0 || n != this.s) && (e[r++] = n);
              return e
          }
          ,
          l.prototype.equals = function(t) {
              return 0 == this.compareTo(t)
          }
          ,
          l.prototype.min = function(t) {
              return this.compareTo(t) < 0 ? this : t
          }
          ,
          l.prototype.max = function(t) {
              return this.compareTo(t) > 0 ? this : t
          }
          ,
          l.prototype.and = function(t) {
              var e = a();
              return this.bitwiseTo(t, _, e),
              e
          }
          ,
          l.prototype.or = function(t) {
              var e = a();
              return this.bitwiseTo(t, v, e),
              e
          }
          ,
          l.prototype.xor = function(t) {
              var e = a();
              return this.bitwiseTo(t, g, e),
              e
          }
          ,
          l.prototype.andNot = function(t) {
              var e = a();
              return this.bitwiseTo(t, E, e),
              e
          }
          ,
          l.prototype.not = function() {
              for (var t = a(), e = 0; e < this.t; ++e)
                  t[e] = this.DM & ~this[e];
              return t.t = this.t,
              t.s = ~this.s,
              t
          }
          ,
          l.prototype.shiftLeft = function(t) {
              var e = a();
              return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
              e
          }
          ,
          l.prototype.shiftRight = function(t) {
              var e = a();
              return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
              e
          }
          ,
          l.prototype.getLowestSetBit = function() {
              for (var t = 0; t < this.t; ++t)
                  if (0 != this[t])
                      return t * this.DB + P(this[t]);
              return this.s < 0 ? this.t * this.DB : -1
          }
          ,
          l.prototype.bitCount = function() {
              for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                  t += S(this[n] ^ e);
              return t
          }
          ,
          l.prototype.testBit = function(t) {
              var e = Math.floor(t / this.DB);
              return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
          }
          ,
          l.prototype.setBit = function(t) {
              return this.changeBit(t, v)
          }
          ,
          l.prototype.clearBit = function(t) {
              return this.changeBit(t, E)
          }
          ,
          l.prototype.flipBit = function(t) {
              return this.changeBit(t, g)
          }
          ,
          l.prototype.add = function(t) {
              var e = a();
              return this.addTo(t, e),
              e
          }
          ,
          l.prototype.subtract = function(t) {
              var e = a();
              return this.subTo(t, e),
              e
          }
          ,
          l.prototype.multiply = function(t) {
              var e = a();
              return this.multiplyTo(t, e),
              e
          }
          ,
          l.prototype.divide = function(t) {
              var e = a();
              return this.divRemTo(t, e, null),
              e
          }
          ,
          l.prototype.remainder = function(t) {
              var e = a();
              return this.divRemTo(t, null, e),
              e
          }
          ,
          l.prototype.divideAndRemainder = function(t) {
              var e = a()
                , n = a();
              return this.divRemTo(t, e, n),
              new Array(e,n)
          }
          ,
          l.prototype.modPow = function(t, e) {
              var n, i, r = t.bitLength(), o = d(1);
              if (r <= 0)
                  return o;
              n = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
              i = r < 8 ? new m(e) : e.isEven() ? new T(e) : new x(e);
              var s = new Array
                , l = 3
                , u = n - 1
                , p = (1 << n) - 1;
              if (s[1] = i.convert(this),
              n > 1) {
                  var h = a();
                  for (i.sqrTo(s[1], h); l <= p; )
                      s[l] = a(),
                      i.mulTo(h, s[l - 2], s[l]),
                      l += 2
              }
              var c, f, _ = t.t - 1, v = !0, g = a();
              for (r = y(t[_]) - 1; _ >= 0; ) {
                  for (r >= u ? c = t[_] >> r - u & p : (c = (t[_] & (1 << r + 1) - 1) << u - r,
                  _ > 0 && (c |= t[_ - 1] >> this.DB + r - u)),
                  l = n; 0 == (1 & c); )
                      c >>= 1,
                      --l;
                  if ((r -= l) < 0 && (r += this.DB,
                  --_),
                  v)
                      s[c].copyTo(o),
                      v = !1;
                  else {
                      for (; l > 1; )
                          i.sqrTo(o, g),
                          i.sqrTo(g, o),
                          l -= 2;
                      l > 0 ? i.sqrTo(o, g) : (f = o,
                      o = g,
                      g = f),
                      i.mulTo(g, s[c], o)
                  }
                  for (; _ >= 0 && 0 == (t[_] & 1 << r); )
                      i.sqrTo(o, g),
                      f = o,
                      o = g,
                      g = f,
                      --r < 0 && (r = this.DB - 1,
                      --_)
              }
              return i.revert(o)
          }
          ,
          l.prototype.modInverse = function(t) {
              var e = t.isEven();
              if (this.isEven() && e || 0 == t.signum())
                  return l.ZERO;
              for (var n = t.clone(), i = this.clone(), r = d(1), o = d(0), s = d(0), a = d(1); 0 != n.signum(); ) {
                  for (; n.isEven(); )
                      n.rShiftTo(1, n),
                      e ? (r.isEven() && o.isEven() || (r.addTo(this, r),
                      o.subTo(t, o)),
                      r.rShiftTo(1, r)) : o.isEven() || o.subTo(t, o),
                      o.rShiftTo(1, o);
                  for (; i.isEven(); )
                      i.rShiftTo(1, i),
                      e ? (s.isEven() && a.isEven() || (s.addTo(this, s),
                      a.subTo(t, a)),
                      s.rShiftTo(1, s)) : a.isEven() || a.subTo(t, a),
                      a.rShiftTo(1, a);
                  n.compareTo(i) >= 0 ? (n.subTo(i, n),
                  e && r.subTo(s, r),
                  o.subTo(a, o)) : (i.subTo(n, i),
                  e && s.subTo(r, s),
                  a.subTo(o, a))
              }
              return 0 != i.compareTo(l.ONE) ? l.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a),
              a.signum() < 0 ? a.add(t) : a) : a
          }
          ,
          l.prototype.pow = function(t) {
              return this.exp(t, new L)
          }
          ,
          l.prototype.gcd = function(t) {
              var e = this.s < 0 ? this.negate() : this.clone()
                , n = t.s < 0 ? t.negate() : t.clone();
              if (e.compareTo(n) < 0) {
                  var i = e;
                  e = n,
                  n = i
              }
              var r = e.getLowestSetBit()
                , o = n.getLowestSetBit();
              if (o < 0)
                  return e;
              for (r < o && (o = r),
              o > 0 && (e.rShiftTo(o, e),
              n.rShiftTo(o, n)); e.signum() > 0; )
                  (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                  (r = n.getLowestSetBit()) > 0 && n.rShiftTo(r, n),
                  e.compareTo(n) >= 0 ? (e.subTo(n, e),
                  e.rShiftTo(1, e)) : (n.subTo(e, n),
                  n.rShiftTo(1, n));
              return o > 0 && n.lShiftTo(o, n),
              n
          }
          ,
          l.prototype.isProbablePrime = function(t) {
              var e, n = this.abs();
              if (1 == n.t && n[0] <= C[C.length - 1]) {
                  for (e = 0; e < C.length; ++e)
                      if (n[0] == C[e])
                          return !0;
                  return !1
              }
              if (n.isEven())
                  return !1;
              for (e = 1; e < C.length; ) {
                  for (var i = C[e], r = e + 1; r < C.length && i < I; )
                      i *= C[r++];
                  for (i = n.modInt(i); e < r; )
                      if (i % C[e++] == 0)
                          return !1
              }
              return n.millerRabin(t)
          }
          ,
          l.prototype.square = function() {
              var t = a();
              return this.squareTo(t),
              t
          }
          ;
          var b = l;
          b.prototype.IsNegative = function() {
              return -1 == this.compareTo(b.ZERO)
          }
          ,
          b.op_Equality = function(t, e) {
              return 0 == t.compareTo(e)
          }
          ,
          b.op_Inequality = function(t, e) {
              return 0 != t.compareTo(e)
          }
          ,
          b.op_GreaterThan = function(t, e) {
              return t.compareTo(e) > 0
          }
          ,
          b.op_LessThan = function(t, e) {
              return t.compareTo(e) < 0
          }
          ,
          b.op_Addition = function(t, e) {
              return new b(t).add(new b(e))
          }
          ,
          b.op_Subtraction = function(t, e) {
              return new b(t).subtract(new b(e))
          }
          ,
          b.Int128Mul = function(t, e) {
              return new b(t).multiply(new b(e))
          }
          ,
          b.op_Division = function(t, e) {
              return t.divide(e)
          }
          ,
          b.prototype.ToDouble = function() {
              return parseFloat(this.toString())
          }
          ;
          var O = function(t, e) {
              var n;
              if ("undefined" === typeof Object.getOwnPropertyNames) {
                  for (n in e.prototype)
                      "undefined" !== typeof t.prototype[n] && t.prototype[n] !== Object.prototype[n] || (t.prototype[n] = e.prototype[n]);
                  for (n in e)
                      "undefined" === typeof t[n] && (t[n] = e[n]);
                  t.$baseCtor = e
              } else {
                  for (var i = Object.getOwnPropertyNames(e.prototype), r = 0; r < i.length; r++)
                      "undefined" === typeof Object.getOwnPropertyDescriptor(t.prototype, i[r]) && Object.defineProperty(t.prototype, i[r], Object.getOwnPropertyDescriptor(e.prototype, i[r]));
                  for (n in e)
                      "undefined" === typeof t[n] && (t[n] = e[n]);
                  t.$baseCtor = e
              }
          };
          n.Path = function() {
              return []
          }
          ,
          n.Paths = function() {
              return []
          }
          ,
          n.DoublePoint = function() {
              var t = arguments;
              this.X = 0,
              this.Y = 0,
              1 === t.length ? (this.X = t[0].X,
              this.Y = t[0].Y) : 2 === t.length && (this.X = t[0],
              this.Y = t[1])
          }
          ,
          n.DoublePoint0 = function() {
              this.X = 0,
              this.Y = 0
          }
          ,
          n.DoublePoint1 = function(t) {
              this.X = t.X,
              this.Y = t.Y
          }
          ,
          n.DoublePoint2 = function(t, e) {
              this.X = t,
              this.Y = e
          }
          ,
          n.PolyNode = function() {
              this.m_Parent = null,
              this.m_polygon = new n.Path,
              this.m_Index = 0,
              this.m_jointype = 0,
              this.m_endtype = 0,
              this.m_Childs = [],
              this.IsOpen = !1
          }
          ,
          n.PolyNode.prototype.IsHoleNode = function() {
              for (var t = !0, e = this.m_Parent; null !== e; )
                  t = !t,
                  e = e.m_Parent;
              return t
          }
          ,
          n.PolyNode.prototype.ChildCount = function() {
              return this.m_Childs.length
          }
          ,
          n.PolyNode.prototype.Contour = function() {
              return this.m_polygon
          }
          ,
          n.PolyNode.prototype.AddChild = function(t) {
              var e = this.m_Childs.length;
              this.m_Childs.push(t),
              t.m_Parent = this,
              t.m_Index = e
          }
          ,
          n.PolyNode.prototype.GetNext = function() {
              return this.m_Childs.length > 0 ? this.m_Childs[0] : this.GetNextSiblingUp()
          }
          ,
          n.PolyNode.prototype.GetNextSiblingUp = function() {
              return null === this.m_Parent ? null : this.m_Index === this.m_Parent.m_Childs.length - 1 ? this.m_Parent.GetNextSiblingUp() : this.m_Parent.m_Childs[this.m_Index + 1]
          }
          ,
          n.PolyNode.prototype.Childs = function() {
              return this.m_Childs
          }
          ,
          n.PolyNode.prototype.Parent = function() {
              return this.m_Parent
          }
          ,
          n.PolyNode.prototype.IsHole = function() {
              return this.IsHoleNode()
          }
          ,
          n.PolyTree = function() {
              this.m_AllPolys = [],
              n.PolyNode.call(this)
          }
          ,
          n.PolyTree.prototype.Clear = function() {
              for (var t = 0, e = this.m_AllPolys.length; t < e; t++)
                  this.m_AllPolys[t] = null;
              this.m_AllPolys.length = 0,
              this.m_Childs.length = 0
          }
          ,
          n.PolyTree.prototype.GetFirst = function() {
              return this.m_Childs.length > 0 ? this.m_Childs[0] : null
          }
          ,
          n.PolyTree.prototype.Total = function() {
              var t = this.m_AllPolys.length;
              return t > 0 && this.m_Childs[0] !== this.m_AllPolys[0] && t--,
              t
          }
          ,
          O(n.PolyTree, n.PolyNode),
          n.Math_Abs_Int64 = n.Math_Abs_Int32 = n.Math_Abs_Double = function(t) {
              return Math.abs(t)
          }
          ,
          n.Math_Max_Int32_Int32 = function(t, e) {
              return Math.max(t, e)
          }
          ,
          s.msie || s.opera || s.safari ? n.Cast_Int32 = function(t) {
              return 0 | t
          }
          : n.Cast_Int32 = function(t) {
              return ~~t
          }
          ,
          s.chrome ? n.Cast_Int64 = function(t) {
              return t < -2147483648 || t > 2147483647 ? t < 0 ? Math.ceil(t) : Math.floor(t) : ~~t
          }
          : s.firefox && "function" === typeof Number.toInteger ? n.Cast_Int64 = function(t) {
              return Number.toInteger(t)
          }
          : s.msie7 || s.msie8 ? n.Cast_Int64 = function(t) {
              return parseInt(t, 10)
          }
          : s.msie ? n.Cast_Int64 = function(t) {
              return t < -2147483648 || t > 2147483647 ? t < 0 ? Math.ceil(t) : Math.floor(t) : 0 | t
          }
          : n.Cast_Int64 = function(t) {
              return t < 0 ? Math.ceil(t) : Math.floor(t)
          }
          ,
          n.Clear = function(t) {
              t.length = 0
          }
          ,
          n.PI = 3.141592653589793,
          n.PI2 = 6.283185307179586,
          n.IntPoint = function() {
              var t = arguments
                , e = t.length;
              if (this.X = 0,
              this.Y = 0,
              n.use_xyz)
                  if (this.Z = 0,
                  3 === e)
                      this.X = t[0],
                      this.Y = t[1],
                      this.Z = t[2];
                  else if (2 === e)
                      this.X = t[0],
                      this.Y = t[1],
                      this.Z = 0;
                  else if (1 === e)
                      if (t[0]instanceof n.DoublePoint) {
                          var i = t[0];
                          this.X = n.Clipper.Round(i.X),
                          this.Y = n.Clipper.Round(i.Y),
                          this.Z = 0
                      } else {
                          "undefined" === typeof (r = t[0]).Z && (r.Z = 0),
                          this.X = r.X,
                          this.Y = r.Y,
                          this.Z = r.Z
                      }
                  else
                      this.X = 0,
                      this.Y = 0,
                      this.Z = 0;
              else if (2 === e)
                  this.X = t[0],
                  this.Y = t[1];
              else if (1 === e)
                  if (t[0]instanceof n.DoublePoint) {
                      i = t[0];
                      this.X = n.Clipper.Round(i.X),
                      this.Y = n.Clipper.Round(i.Y)
                  } else {
                      var r = t[0];
                      this.X = r.X,
                      this.Y = r.Y
                  }
              else
                  this.X = 0,
                  this.Y = 0
          }
          ,
          n.IntPoint.op_Equality = function(t, e) {
              return t.X === e.X && t.Y === e.Y
          }
          ,
          n.IntPoint.op_Inequality = function(t, e) {
              return t.X !== e.X || t.Y !== e.Y
          }
          ,
          n.use_xyz ? (n.IntPoint0 = function() {
              this.X = 0,
              this.Y = 0,
              this.Z = 0
          }
          ,
          n.IntPoint1 = function(t) {
              this.X = t.X,
              this.Y = t.Y,
              this.Z = t.Z
          }
          ,
          n.IntPoint1dp = function(t) {
              this.X = n.Clipper.Round(t.X),
              this.Y = n.Clipper.Round(t.Y),
              this.Z = 0
          }
          ,
          n.IntPoint2 = function(t, e) {
              this.X = t,
              this.Y = e,
              this.Z = 0
          }
          ,
          n.IntPoint3 = function(t, e, n) {
              this.X = t,
              this.Y = e,
              this.Z = n
          }
          ) : (n.IntPoint0 = function() {
              this.X = 0,
              this.Y = 0
          }
          ,
          n.IntPoint1 = function(t) {
              this.X = t.X,
              this.Y = t.Y
          }
          ,
          n.IntPoint1dp = function(t) {
              this.X = n.Clipper.Round(t.X),
              this.Y = n.Clipper.Round(t.Y)
          }
          ,
          n.IntPoint2 = function(t, e) {
              this.X = t,
              this.Y = e
          }
          ),
          n.IntRect = function() {
              var t = arguments
                , e = t.length;
              4 === e ? (this.left = t[0],
              this.top = t[1],
              this.right = t[2],
              this.bottom = t[3]) : 1 === e ? (this.left = ir.left,
              this.top = ir.top,
              this.right = ir.right,
              this.bottom = ir.bottom) : (this.left = 0,
              this.top = 0,
              this.right = 0,
              this.bottom = 0)
          }
          ,
          n.IntRect0 = function() {
              this.left = 0,
              this.top = 0,
              this.right = 0,
              this.bottom = 0
          }
          ,
          n.IntRect1 = function(t) {
              this.left = t.left,
              this.top = t.top,
              this.right = t.right,
              this.bottom = t.bottom
          }
          ,
          n.IntRect4 = function(t, e, n, i) {
              this.left = t,
              this.top = e,
              this.right = n,
              this.bottom = i
          }
          ,
          n.ClipType = {
              ctIntersection: 0,
              ctUnion: 1,
              ctDifference: 2,
              ctXor: 3
          },
          n.PolyType = {
              ptSubject: 0,
              ptClip: 1
          },
          n.PolyFillType = {
              pftEvenOdd: 0,
              pftNonZero: 1,
              pftPositive: 2,
              pftNegative: 3
          },
          n.JoinType = {
              jtSquare: 0,
              jtRound: 1,
              jtMiter: 2
          },
          n.EndType = {
              etOpenSquare: 0,
              etOpenRound: 1,
              etOpenButt: 2,
              etClosedLine: 3,
              etClosedPolygon: 4
          },
          n.EdgeSide = {
              esLeft: 0,
              esRight: 1
          },
          n.Direction = {
              dRightToLeft: 0,
              dLeftToRight: 1
          },
          n.TEdge = function() {
              this.Bot = new n.IntPoint,
              this.Curr = new n.IntPoint,
              this.Top = new n.IntPoint,
              this.Delta = new n.IntPoint,
              this.Dx = 0,
              this.PolyTyp = n.PolyType.ptSubject,
              this.Side = n.EdgeSide.esLeft,
              this.WindDelta = 0,
              this.WindCnt = 0,
              this.WindCnt2 = 0,
              this.OutIdx = 0,
              this.Next = null,
              this.Prev = null,
              this.NextInLML = null,
              this.NextInAEL = null,
              this.PrevInAEL = null,
              this.NextInSEL = null,
              this.PrevInSEL = null
          }
          ,
          n.IntersectNode = function() {
              this.Edge1 = null,
              this.Edge2 = null,
              this.Pt = new n.IntPoint
          }
          ,
          n.MyIntersectNodeSort = function() {}
          ,
          n.MyIntersectNodeSort.Compare = function(t, e) {
              var n = e.Pt.Y - t.Pt.Y;
              return n > 0 ? 1 : n < 0 ? -1 : 0
          }
          ,
          n.LocalMinima = function() {
              this.Y = 0,
              this.LeftBound = null,
              this.RightBound = null,
              this.Next = null
          }
          ,
          n.Scanbeam = function() {
              this.Y = 0,
              this.Next = null
          }
          ,
          n.Maxima = function() {
              this.X = 0,
              this.Next = null,
              this.Prev = null
          }
          ,
          n.OutRec = function() {
              this.Idx = 0,
              this.IsHole = !1,
              this.IsOpen = !1,
              this.FirstLeft = null,
              this.Pts = null,
              this.BottomPt = null,
              this.PolyNode = null
          }
          ,
          n.OutPt = function() {
              this.Idx = 0,
              this.Pt = new n.IntPoint,
              this.Next = null,
              this.Prev = null
          }
          ,
          n.Join = function() {
              this.OutPt1 = null,
              this.OutPt2 = null,
              this.OffPt = new n.IntPoint
          }
          ,
          n.ClipperBase = function() {
              this.m_MinimaList = null,
              this.m_CurrentLM = null,
              this.m_edges = new Array,
              this.m_UseFullRange = !1,
              this.m_HasOpenPaths = !1,
              this.PreserveCollinear = !1,
              this.m_MinimaList = null,
              this.m_CurrentLM = null,
              this.m_UseFullRange = !1,
              this.m_HasOpenPaths = !1
          }
          ,
          n.ClipperBase.horizontal = -9007199254740992,
          n.ClipperBase.Skip = -2,
          n.ClipperBase.Unassigned = -1,
          n.ClipperBase.tolerance = 1e-20,
          n.ClipperBase.loRange = 47453132,
          n.ClipperBase.hiRange = 0xfffffffffffff,
          n.ClipperBase.near_zero = function(t) {
              return t > -n.ClipperBase.tolerance && t < n.ClipperBase.tolerance
          }
          ,
          n.ClipperBase.IsHorizontal = function(t) {
              return 0 === t.Delta.Y
          }
          ,
          n.ClipperBase.prototype.PointIsVertex = function(t, e) {
              var i = e;
              do {
                  if (n.IntPoint.op_Equality(i.Pt, t))
                      return !0;
                  i = i.Next
              } while (i !== e);
              return !1
          }
          ,
          n.ClipperBase.prototype.PointOnLineSegment = function(t, e, n, i) {
              return i ? t.X === e.X && t.Y === e.Y || t.X === n.X && t.Y === n.Y || t.X > e.X === t.X < n.X && t.Y > e.Y === t.Y < n.Y && b.op_Equality(b.Int128Mul(t.X - e.X, n.Y - e.Y), b.Int128Mul(n.X - e.X, t.Y - e.Y)) : t.X === e.X && t.Y === e.Y || t.X === n.X && t.Y === n.Y || t.X > e.X === t.X < n.X && t.Y > e.Y === t.Y < n.Y && (t.X - e.X) * (n.Y - e.Y) === (n.X - e.X) * (t.Y - e.Y)
          }
          ,
          n.ClipperBase.prototype.PointOnPolygon = function(t, e, n) {
              for (var i = e; ; ) {
                  if (this.PointOnLineSegment(t, i.Pt, i.Next.Pt, n))
                      return !0;
                  if ((i = i.Next) === e)
                      break
              }
              return !1
          }
          ,
          n.ClipperBase.prototype.SlopesEqual = n.ClipperBase.SlopesEqual = function() {
              var t, e, i, r, o, s, l = arguments, a = l.length;
              return 3 === a ? (t = l[0],
              e = l[1],
              l[2] ? b.op_Equality(b.Int128Mul(t.Delta.Y, e.Delta.X), b.Int128Mul(t.Delta.X, e.Delta.Y)) : n.Cast_Int64(t.Delta.Y * e.Delta.X) === n.Cast_Int64(t.Delta.X * e.Delta.Y)) : 4 === a ? (i = l[0],
              r = l[1],
              o = l[2],
              l[3] ? b.op_Equality(b.Int128Mul(i.Y - r.Y, r.X - o.X), b.Int128Mul(i.X - r.X, r.Y - o.Y)) : n.Cast_Int64((i.Y - r.Y) * (r.X - o.X)) - n.Cast_Int64((i.X - r.X) * (r.Y - o.Y)) === 0) : (i = l[0],
              r = l[1],
              o = l[2],
              s = l[3],
              l[4] ? b.op_Equality(b.Int128Mul(i.Y - r.Y, o.X - s.X), b.Int128Mul(i.X - r.X, o.Y - s.Y)) : n.Cast_Int64((i.Y - r.Y) * (o.X - s.X)) - n.Cast_Int64((i.X - r.X) * (o.Y - s.Y)) === 0)
          }
          ,
          n.ClipperBase.SlopesEqual3 = function(t, e, i) {
              return i ? b.op_Equality(b.Int128Mul(t.Delta.Y, e.Delta.X), b.Int128Mul(t.Delta.X, e.Delta.Y)) : n.Cast_Int64(t.Delta.Y * e.Delta.X) === n.Cast_Int64(t.Delta.X * e.Delta.Y)
          }
          ,
          n.ClipperBase.SlopesEqual4 = function(t, e, i, r) {
              return r ? b.op_Equality(b.Int128Mul(t.Y - e.Y, e.X - i.X), b.Int128Mul(t.X - e.X, e.Y - i.Y)) : n.Cast_Int64((t.Y - e.Y) * (e.X - i.X)) - n.Cast_Int64((t.X - e.X) * (e.Y - i.Y)) === 0
          }
          ,
          n.ClipperBase.SlopesEqual5 = function(t, e, i, r, o) {
              return o ? b.op_Equality(b.Int128Mul(t.Y - e.Y, i.X - r.X), b.Int128Mul(t.X - e.X, i.Y - r.Y)) : n.Cast_Int64((t.Y - e.Y) * (i.X - r.X)) - n.Cast_Int64((t.X - e.X) * (i.Y - r.Y)) === 0
          }
          ,
          n.ClipperBase.prototype.Clear = function() {
              this.DisposeLocalMinimaList();
              for (var t = 0, e = this.m_edges.length; t < e; ++t) {
                  for (var i = 0, r = this.m_edges[t].length; i < r; ++i)
                      this.m_edges[t][i] = null;
                  n.Clear(this.m_edges[t])
              }
              n.Clear(this.m_edges),
              this.m_UseFullRange = !1,
              this.m_HasOpenPaths = !1
          }
          ,
          n.ClipperBase.prototype.DisposeLocalMinimaList = function() {
              for (; null !== this.m_MinimaList; ) {
                  var t = this.m_MinimaList.Next;
                  this.m_MinimaList = null,
                  this.m_MinimaList = t
              }
              this.m_CurrentLM = null
          }
          ,
          n.ClipperBase.prototype.RangeTest = function(t, e) {
              e.Value ? (t.X > n.ClipperBase.hiRange || t.Y > n.ClipperBase.hiRange || -t.X > n.ClipperBase.hiRange || -t.Y > n.ClipperBase.hiRange) && n.Error("Coordinate outside allowed range in RangeTest().") : (t.X > n.ClipperBase.loRange || t.Y > n.ClipperBase.loRange || -t.X > n.ClipperBase.loRange || -t.Y > n.ClipperBase.loRange) && (e.Value = !0,
              this.RangeTest(t, e))
          }
          ,
          n.ClipperBase.prototype.InitEdge = function(t, e, i, r) {
              t.Next = e,
              t.Prev = i,
              t.Curr.X = r.X,
              t.Curr.Y = r.Y,
              n.use_xyz && (t.Curr.Z = r.Z),
              t.OutIdx = -1
          }
          ,
          n.ClipperBase.prototype.InitEdge2 = function(t, e) {
              t.Curr.Y >= t.Next.Curr.Y ? (t.Bot.X = t.Curr.X,
              t.Bot.Y = t.Curr.Y,
              n.use_xyz && (t.Bot.Z = t.Curr.Z),
              t.Top.X = t.Next.Curr.X,
              t.Top.Y = t.Next.Curr.Y,
              n.use_xyz && (t.Top.Z = t.Next.Curr.Z)) : (t.Top.X = t.Curr.X,
              t.Top.Y = t.Curr.Y,
              n.use_xyz && (t.Top.Z = t.Curr.Z),
              t.Bot.X = t.Next.Curr.X,
              t.Bot.Y = t.Next.Curr.Y,
              n.use_xyz && (t.Bot.Z = t.Next.Curr.Z)),
              this.SetDx(t),
              t.PolyTyp = e
          }
          ,
          n.ClipperBase.prototype.FindNextLocMin = function(t) {
              for (var e; ; ) {
                  for (; n.IntPoint.op_Inequality(t.Bot, t.Prev.Bot) || n.IntPoint.op_Equality(t.Curr, t.Top); )
                      t = t.Next;
                  if (t.Dx !== n.ClipperBase.horizontal && t.Prev.Dx !== n.ClipperBase.horizontal)
                      break;
                  for (; t.Prev.Dx === n.ClipperBase.horizontal; )
                      t = t.Prev;
                  for (e = t; t.Dx === n.ClipperBase.horizontal; )
                      t = t.Next;
                  if (t.Top.Y !== t.Prev.Bot.Y) {
                      e.Prev.Bot.X < t.Bot.X && (t = e);
                      break
                  }
              }
              return t
          }
          ,
          n.ClipperBase.prototype.ProcessBound = function(t, e) {
              var i, r, o = t;
              if (o.OutIdx === n.ClipperBase.Skip) {
                  if (t = o,
                  e) {
                      for (; t.Top.Y === t.Next.Bot.Y; )
                          t = t.Next;
                      for (; t !== o && t.Dx === n.ClipperBase.horizontal; )
                          t = t.Prev
                  } else {
                      for (; t.Top.Y === t.Prev.Bot.Y; )
                          t = t.Prev;
                      for (; t !== o && t.Dx === n.ClipperBase.horizontal; )
                          t = t.Next
                  }
                  if (t === o)
                      o = e ? t.Next : t.Prev;
                  else {
                      t = e ? o.Next : o.Prev;
                      var s = new n.LocalMinima;
                      s.Next = null,
                      s.Y = t.Bot.Y,
                      s.LeftBound = null,
                      s.RightBound = t,
                      t.WindDelta = 0,
                      o = this.ProcessBound(t, e),
                      this.InsertLocalMinima(s)
                  }
                  return o
              }
              if (t.Dx === n.ClipperBase.horizontal && (i = e ? t.Prev : t.Next).OutIdx !== n.ClipperBase.Skip && (i.Dx === n.ClipperBase.horizontal ? i.Bot.X !== t.Bot.X && i.Top.X !== t.Bot.X && this.ReverseHorizontal(t) : i.Bot.X !== t.Bot.X && this.ReverseHorizontal(t)),
              i = t,
              e) {
                  for (; o.Top.Y === o.Next.Bot.Y && o.Next.OutIdx !== n.ClipperBase.Skip; )
                      o = o.Next;
                  if (o.Dx === n.ClipperBase.horizontal && o.Next.OutIdx !== n.ClipperBase.Skip) {
                      for (r = o; r.Prev.Dx === n.ClipperBase.horizontal; )
                          r = r.Prev;
                      r.Prev.Top.X > o.Next.Top.X && (o = r.Prev)
                  }
                  for (; t !== o; )
                      t.NextInLML = t.Next,
                      t.Dx === n.ClipperBase.horizontal && t !== i && t.Bot.X !== t.Prev.Top.X && this.ReverseHorizontal(t),
                      t = t.Next;
                  t.Dx === n.ClipperBase.horizontal && t !== i && t.Bot.X !== t.Prev.Top.X && this.ReverseHorizontal(t),
                  o = o.Next
              } else {
                  for (; o.Top.Y === o.Prev.Bot.Y && o.Prev.OutIdx !== n.ClipperBase.Skip; )
                      o = o.Prev;
                  if (o.Dx === n.ClipperBase.horizontal && o.Prev.OutIdx !== n.ClipperBase.Skip) {
                      for (r = o; r.Next.Dx === n.ClipperBase.horizontal; )
                          r = r.Next;
                      (r.Next.Top.X === o.Prev.Top.X || r.Next.Top.X > o.Prev.Top.X) && (o = r.Next)
                  }
                  for (; t !== o; )
                      t.NextInLML = t.Prev,
                      t.Dx === n.ClipperBase.horizontal && t !== i && t.Bot.X !== t.Next.Top.X && this.ReverseHorizontal(t),
                      t = t.Prev;
                  t.Dx === n.ClipperBase.horizontal && t !== i && t.Bot.X !== t.Next.Top.X && this.ReverseHorizontal(t),
                  o = o.Prev
              }
              return o
          }
          ,
          n.ClipperBase.prototype.AddPath = function(t, e, i) {
              n.use_lines ? i || e !== n.PolyType.ptClip || n.Error("AddPath: Open paths must be subject.") : i || n.Error("AddPath: Open paths have been disabled.");
              var r = t.length - 1;
              if (i)
                  for (; r > 0 && n.IntPoint.op_Equality(t[r], t[0]); )
                      --r;
              for (; r > 0 && n.IntPoint.op_Equality(t[r], t[r - 1]); )
                  --r;
              if (i && r < 2 || !i && r < 1)
                  return !1;
              for (var o = new Array, s = 0; s <= r; s++)
                  o.push(new n.TEdge);
              var l = !0;
              o[1].Curr.X = t[1].X,
              o[1].Curr.Y = t[1].Y,
              n.use_xyz && (o[1].Curr.Z = t[1].Z);
              var a = {
                  Value: this.m_UseFullRange
              };
              this.RangeTest(t[0], a),
              this.m_UseFullRange = a.Value,
              a.Value = this.m_UseFullRange,
              this.RangeTest(t[r], a),
              this.m_UseFullRange = a.Value,
              this.InitEdge(o[0], o[1], o[r], t[0]),
              this.InitEdge(o[r], o[0], o[r - 1], t[r]);
              for (s = r - 1; s >= 1; --s)
                  a.Value = this.m_UseFullRange,
                  this.RangeTest(t[s], a),
                  this.m_UseFullRange = a.Value,
                  this.InitEdge(o[s], o[s + 1], o[s - 1], t[s]);
              for (var u, p = o[0], h = p, c = p; ; )
                  if (h.Curr !== h.Next.Curr || !i && h.Next === p) {
                      if (h.Prev === h.Next)
                          break;
                      if (!i || !n.ClipperBase.SlopesEqual(h.Prev.Curr, h.Curr, h.Next.Curr, this.m_UseFullRange) || this.PreserveCollinear && this.Pt2IsBetweenPt1AndPt3(h.Prev.Curr, h.Curr, h.Next.Curr)) {
                          if ((h = h.Next) === c || !i && h.Next === p)
                              break
                      } else
                          h === p && (p = h.Next),
                          c = h = (h = this.RemoveEdge(h)).Prev
                  } else {
                      if (h === h.Next)
                          break;
                      h === p && (p = h.Next),
                      c = h = this.RemoveEdge(h)
                  }
              if (!i && h === h.Next || i && h.Prev === h.Next)
                  return !1;
              i || (this.m_HasOpenPaths = !0,
              p.Prev.OutIdx = n.ClipperBase.Skip),
              h = p;
              do {
                  this.InitEdge2(h, e),
                  h = h.Next,
                  l && h.Curr.Y !== p.Curr.Y && (l = !1)
              } while (h !== p);
              if (l) {
                  if (i)
                      return !1;
                  for (h.Prev.OutIdx = n.ClipperBase.Skip,
                  (d = new n.LocalMinima).Next = null,
                  d.Y = h.Bot.Y,
                  d.LeftBound = null,
                  d.RightBound = h,
                  d.RightBound.Side = n.EdgeSide.esRight,
                  d.RightBound.WindDelta = 0; h.Bot.X !== h.Prev.Top.X && this.ReverseHorizontal(h),
                  h.Next.OutIdx !== n.ClipperBase.Skip; )
                      h.NextInLML = h.Next,
                      h = h.Next;
                  return this.InsertLocalMinima(d),
                  this.m_edges.push(o),
                  !0
              }
              this.m_edges.push(o);
              var f = null;
              for (n.IntPoint.op_Equality(h.Prev.Bot, h.Prev.Top) && (h = h.Next); (h = this.FindNextLocMin(h)) !== f; ) {
                  var d;
                  null === f && (f = h),
                  (d = new n.LocalMinima).Next = null,
                  d.Y = h.Bot.Y,
                  h.Dx < h.Prev.Dx ? (d.LeftBound = h.Prev,
                  d.RightBound = h,
                  u = !1) : (d.LeftBound = h,
                  d.RightBound = h.Prev,
                  u = !0),
                  d.LeftBound.Side = n.EdgeSide.esLeft,
                  d.RightBound.Side = n.EdgeSide.esRight,
                  i ? d.LeftBound.Next === d.RightBound ? d.LeftBound.WindDelta = -1 : d.LeftBound.WindDelta = 1 : d.LeftBound.WindDelta = 0,
                  d.RightBound.WindDelta = -d.LeftBound.WindDelta,
                  (h = this.ProcessBound(d.LeftBound, u)).OutIdx === n.ClipperBase.Skip && (h = this.ProcessBound(h, u));
                  var y = this.ProcessBound(d.RightBound, !u);
                  y.OutIdx === n.ClipperBase.Skip && (y = this.ProcessBound(y, !u)),
                  d.LeftBound.OutIdx === n.ClipperBase.Skip ? d.LeftBound = null : d.RightBound.OutIdx === n.ClipperBase.Skip && (d.RightBound = null),
                  this.InsertLocalMinima(d),
                  u || (h = y)
              }
              return !0
          }
          ,
          n.ClipperBase.prototype.AddPaths = function(t, e, n) {
              for (var i = !1, r = 0, o = t.length; r < o; ++r)
                  this.AddPath(t[r], e, n) && (i = !0);
              return i
          }
          ,
          n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3 = function(t, e, i) {
              return !(n.IntPoint.op_Equality(t, i) || n.IntPoint.op_Equality(t, e) || n.IntPoint.op_Equality(i, e)) && (t.X !== i.X ? e.X > t.X === e.X < i.X : e.Y > t.Y === e.Y < i.Y)
          }
          ,
          n.ClipperBase.prototype.RemoveEdge = function(t) {
              t.Prev.Next = t.Next,
              t.Next.Prev = t.Prev;
              var e = t.Next;
              return t.Prev = null,
              e
          }
          ,
          n.ClipperBase.prototype.SetDx = function(t) {
              t.Delta.X = t.Top.X - t.Bot.X,
              t.Delta.Y = t.Top.Y - t.Bot.Y,
              0 === t.Delta.Y ? t.Dx = n.ClipperBase.horizontal : t.Dx = t.Delta.X / t.Delta.Y
          }
          ,
          n.ClipperBase.prototype.InsertLocalMinima = function(t) {
              if (null === this.m_MinimaList)
                  this.m_MinimaList = t;
              else if (t.Y >= this.m_MinimaList.Y)
                  t.Next = this.m_MinimaList,
                  this.m_MinimaList = t;
              else {
                  for (var e = this.m_MinimaList; null !== e.Next && t.Y < e.Next.Y; )
                      e = e.Next;
                  t.Next = e.Next,
                  e.Next = t
              }
          }
          ,
          n.ClipperBase.prototype.PopLocalMinima = function() {
              null !== this.m_CurrentLM && (this.m_CurrentLM = this.m_CurrentLM.Next)
          }
          ,
          n.ClipperBase.prototype.ReverseHorizontal = function(t) {
              var e = t.Top.X;
              t.Top.X = t.Bot.X,
              t.Bot.X = e,
              n.use_xyz && (e = t.Top.Z,
              t.Top.Z = t.Bot.Z,
              t.Bot.Z = e)
          }
          ,
          n.ClipperBase.prototype.Reset = function() {
              if (this.m_CurrentLM = this.m_MinimaList,
              null !== this.m_CurrentLM)
                  for (var t = this.m_MinimaList; null !== t; ) {
                      var e = t.LeftBound;
                      null !== e && (e.Curr.X = e.Bot.X,
                      e.Curr.Y = e.Bot.Y,
                      n.use_xyz && (e.Curr.Z = e.Bot.Z),
                      e.Side = n.EdgeSide.esLeft,
                      e.OutIdx = n.ClipperBase.Unassigned),
                      null !== (e = t.RightBound) && (e.Curr.X = e.Bot.X,
                      e.Curr.Y = e.Bot.Y,
                      n.use_xyz && (e.Curr.Z = e.Bot.Z),
                      e.Side = n.EdgeSide.esRight,
                      e.OutIdx = n.ClipperBase.Unassigned),
                      t = t.Next
                  }
          }
          ,
          n.Clipper = function(t) {
              "undefined" === typeof t && (t = 0),
              this.m_PolyOuts = null,
              this.m_ClipType = n.ClipType.ctIntersection,
              this.m_Scanbeam = null,
              this.m_Maxima = null,
              this.m_ActiveEdges = null,
              this.m_SortedEdges = null,
              this.m_IntersectList = null,
              this.m_IntersectNodeComparer = null,
              this.m_ExecuteLocked = !1,
              this.m_ClipFillType = n.PolyFillType.pftEvenOdd,
              this.m_SubjFillType = n.PolyFillType.pftEvenOdd,
              this.m_Joins = null,
              this.m_GhostJoins = null,
              this.m_UsingPolyTree = !1,
              this.ReverseSolution = !1,
              this.StrictlySimple = !1,
              n.ClipperBase.call(this),
              this.m_Scanbeam = null,
              this.m_Maxima = null,
              this.m_ActiveEdges = null,
              this.m_SortedEdges = null,
              this.m_IntersectList = new Array,
              this.m_IntersectNodeComparer = n.MyIntersectNodeSort.Compare,
              this.m_ExecuteLocked = !1,
              this.m_UsingPolyTree = !1,
              this.m_PolyOuts = new Array,
              this.m_Joins = new Array,
              this.m_GhostJoins = new Array,
              this.ReverseSolution = 0 !== (1 & t),
              this.StrictlySimple = 0 !== (2 & t),
              this.PreserveCollinear = 0 !== (4 & t),
              n.use_xyz && (this.ZFillFunction = null)
          }
          ,
          n.Clipper.ioReverseSolution = 1,
          n.Clipper.ioStrictlySimple = 2,
          n.Clipper.ioPreserveCollinear = 4,
          n.Clipper.prototype.Clear = function() {
              0 !== this.m_edges.length && (this.DisposeAllPolyPts(),
              n.ClipperBase.prototype.Clear.call(this))
          }
          ,
          n.Clipper.prototype.DisposeScanbeamList = function() {
              for (; null !== this.m_Scanbeam; ) {
                  var t = this.m_Scanbeam.Next;
                  this.m_Scanbeam = null,
                  this.m_Scanbeam = t
              }
          }
          ,
          n.Clipper.prototype.Reset = function() {
              n.ClipperBase.prototype.Reset.call(this),
              this.m_Scanbeam = null,
              this.m_Maxima = null,
              this.m_ActiveEdges = null,
              this.m_SortedEdges = null;
              for (var t = this.m_MinimaList; null !== t; )
                  this.InsertScanbeam(t.Y),
                  t = t.Next
          }
          ,
          n.Clipper.prototype.InsertScanbeam = function(t) {
              if (null === this.m_Scanbeam)
                  this.m_Scanbeam = new n.Scanbeam,
                  this.m_Scanbeam.Next = null,
                  this.m_Scanbeam.Y = t;
              else if (t > this.m_Scanbeam.Y) {
                  (i = new n.Scanbeam).Y = t,
                  i.Next = this.m_Scanbeam,
                  this.m_Scanbeam = i
              } else {
                  for (var e = this.m_Scanbeam; null !== e.Next && t <= e.Next.Y; )
                      e = e.Next;
                  if (t == e.Y)
                      return;
                  var i;
                  (i = new n.Scanbeam).Y = t,
                  i.Next = e.Next,
                  e.Next = i
              }
          }
          ,
          n.Clipper.prototype.InsertMaxima = function(t) {
              var e = new n.Maxima;
              if (e.X = t,
              null === this.m_Maxima)
                  this.m_Maxima = e,
                  this.m_Maxima.Next = null,
                  this.m_Maxima.Prev = null;
              else if (t < this.m_Maxima.X)
                  e.Next = this.m_Maxima,
                  e.Prev = null,
                  this.m_Maxima = e;
              else {
                  for (var i = this.m_Maxima; null !== i.Next && t >= i.Next.X; )
                      i = i.Next;
                  if (t === i.X)
                      return;
                  e.Next = i.Next,
                  e.Prev = i,
                  null !== i.Next && (i.Next.Prev = e),
                  i.Next = e
              }
          }
          ,
          n.Clipper.prototype.Execute = function() {
              var t = arguments
                , e = t.length
                , i = t[1]instanceof n.PolyTree;
              if (4 === e && !i) {
                  var r = t[0]
                    , o = t[1]
                    , s = t[2]
                    , l = t[3];
                  if (this.m_ExecuteLocked)
                      return !1;
                  this.m_HasOpenPaths && n.Error("Error: PolyTree struct is needed for open path clipping."),
                  this.m_ExecuteLocked = !0,
                  n.Clear(o),
                  this.m_SubjFillType = s,
                  this.m_ClipFillType = l,
                  this.m_ClipType = r,
                  this.m_UsingPolyTree = !1;
                  try {
                      (u = this.ExecuteInternal()) && this.BuildResult(o)
                  } finally {
                      this.DisposeAllPolyPts(),
                      this.m_ExecuteLocked = !1
                  }
                  return u
              }
              if (4 === e && i) {
                  r = t[0];
                  var a = t[1];
                  s = t[2],
                  l = t[3];
                  if (this.m_ExecuteLocked)
                      return !1;
                  this.m_ExecuteLocked = !0,
                  this.m_SubjFillType = s,
                  this.m_ClipFillType = l,
                  this.m_ClipType = r,
                  this.m_UsingPolyTree = !0;
                  try {
                      var u;
                      (u = this.ExecuteInternal()) && this.BuildResult2(a)
                  } finally {
                      this.DisposeAllPolyPts(),
                      this.m_ExecuteLocked = !1
                  }
                  return u
              }
              if (2 === e && !i) {
                  r = t[0],
                  o = t[1];
                  return this.Execute(r, o, n.PolyFillType.pftEvenOdd, n.PolyFillType.pftEvenOdd)
              }
              if (2 === e && i) {
                  r = t[0],
                  a = t[1];
                  return this.Execute(r, a, n.PolyFillType.pftEvenOdd, n.PolyFillType.pftEvenOdd)
              }
          }
          ,
          n.Clipper.prototype.FixHoleLinkage = function(t) {
              if (null !== t.FirstLeft && (t.IsHole === t.FirstLeft.IsHole || null === t.FirstLeft.Pts)) {
                  for (var e = t.FirstLeft; null !== e && (e.IsHole === t.IsHole || null === e.Pts); )
                      e = e.FirstLeft;
                  t.FirstLeft = e
              }
          }
          ,
          n.Clipper.prototype.ExecuteInternal = function() {
              try {
                  if (this.Reset(),
                  null === this.m_CurrentLM)
                      return !1;
                  var t = this.PopScanbeam();
                  do {
                      if (this.InsertLocalMinimaIntoAEL(t),
                      this.ProcessHorizontals(),
                      n.Clear(this.m_GhostJoins),
                      null === this.m_Scanbeam)
                          break;
                      var e = this.PopScanbeam();
                      if (!this.ProcessIntersections(e))
                          return !1;
                      this.ProcessEdgesAtTopOfScanbeam(e),
                      t = e
                  } while (null !== this.m_Scanbeam || null !== this.m_CurrentLM);
                  for (var i = 0, r = this.m_PolyOuts.length; i < r; i++) {
                      null === (o = this.m_PolyOuts[i]).Pts || o.IsOpen || (o.IsHole ^ this.ReverseSolution) == this.Area(o) > 0 && this.ReversePolyPtLinks(o.Pts)
                  }
                  this.JoinCommonEdges();
                  for (i = 0,
                  r = this.m_PolyOuts.length; i < r; i++) {
                      var o;
                      null === (o = this.m_PolyOuts[i]).Pts || o.IsOpen || this.FixupOutPolygon(o)
                  }
                  return this.StrictlySimple && this.DoSimplePolygons(),
                  !0
              } finally {
                  n.Clear(this.m_Joins),
                  n.Clear(this.m_GhostJoins)
              }
          }
          ,
          n.Clipper.prototype.PopScanbeam = function() {
              var t = this.m_Scanbeam.Y;
              return this.m_Scanbeam = this.m_Scanbeam.Next,
              t
          }
          ,
          n.Clipper.prototype.DisposeAllPolyPts = function() {
              for (var t = 0, e = this.m_PolyOuts.length; t < e; ++t)
                  this.DisposeOutRec(t);
              n.Clear(this.m_PolyOuts)
          }
          ,
          n.Clipper.prototype.DisposeOutRec = function(t) {
              var e = this.m_PolyOuts[t];
              e.Pts = null,
              e = null,
              this.m_PolyOuts[t] = null
          }
          ,
          n.Clipper.prototype.AddJoin = function(t, e, i) {
              var r = new n.Join;
              r.OutPt1 = t,
              r.OutPt2 = e,
              r.OffPt.X = i.X,
              r.OffPt.Y = i.Y,
              n.use_xyz && (r.OffPt.Z = i.Z),
              this.m_Joins.push(r)
          }
          ,
          n.Clipper.prototype.AddGhostJoin = function(t, e) {
              var i = new n.Join;
              i.OutPt1 = t,
              i.OffPt.X = e.X,
              i.OffPt.Y = e.Y,
              n.use_xyz && (i.OffPt.Z = e.Z),
              this.m_GhostJoins.push(i)
          }
          ,
          n.Clipper.prototype.SetZ = function(t, e, i) {
              if (null !== this.ZFillFunction) {
                  if (0 !== t.Z || null === this.ZFillFunction)
                      return;
                  n.IntPoint.op_Equality(t, e.Bot) ? t.Z = e.Bot.Z : n.IntPoint.op_Equality(t, e.Top) ? t.Z = e.Top.Z : n.IntPoint.op_Equality(t, i.Bot) ? t.Z = i.Bot.Z : n.IntPoint.op_Equality(t, i.Top) ? t.Z = i.Top.Z : this.ZFillFunction(e.Bot, e.Top, i.Bot, i.Top, t)
              }
          }
          ,
          n.Clipper.prototype.InsertLocalMinimaIntoAEL = function(t) {
              for (; null !== this.m_CurrentLM && this.m_CurrentLM.Y == t; ) {
                  var e = this.m_CurrentLM.LeftBound
                    , i = this.m_CurrentLM.RightBound;
                  this.PopLocalMinima();
                  var r = null;
                  if (null === e ? (this.InsertEdgeIntoAEL(i, null),
                  this.SetWindingCount(i),
                  this.IsContributing(i) && (r = this.AddOutPt(i, i.Bot))) : null === i ? (this.InsertEdgeIntoAEL(e, null),
                  this.SetWindingCount(e),
                  this.IsContributing(e) && (r = this.AddOutPt(e, e.Bot)),
                  this.InsertScanbeam(e.Top.Y)) : (this.InsertEdgeIntoAEL(e, null),
                  this.InsertEdgeIntoAEL(i, e),
                  this.SetWindingCount(e),
                  i.WindCnt = e.WindCnt,
                  i.WindCnt2 = e.WindCnt2,
                  this.IsContributing(e) && (r = this.AddLocalMinPoly(e, i, e.Bot)),
                  this.InsertScanbeam(e.Top.Y)),
                  null !== i && (n.ClipperBase.IsHorizontal(i) ? this.AddEdgeToSEL(i) : this.InsertScanbeam(i.Top.Y)),
                  null !== e && null !== i) {
                      if (null !== r && n.ClipperBase.IsHorizontal(i) && this.m_GhostJoins.length > 0 && 0 !== i.WindDelta)
                          for (var o = 0, s = this.m_GhostJoins.length; o < s; o++) {
                              var l = this.m_GhostJoins[o];
                              this.HorzSegmentsOverlap(l.OutPt1.Pt.X, l.OffPt.X, i.Bot.X, i.Top.X) && this.AddJoin(l.OutPt1, r, l.OffPt)
                          }
                      if (e.OutIdx >= 0 && null !== e.PrevInAEL && e.PrevInAEL.Curr.X === e.Bot.X && e.PrevInAEL.OutIdx >= 0 && n.ClipperBase.SlopesEqual(e.PrevInAEL, e, this.m_UseFullRange) && 0 !== e.WindDelta && 0 !== e.PrevInAEL.WindDelta) {
                          var a = this.AddOutPt(e.PrevInAEL, e.Bot);
                          this.AddJoin(r, a, e.Top)
                      }
                      if (e.NextInAEL !== i) {
                          if (i.OutIdx >= 0 && i.PrevInAEL.OutIdx >= 0 && n.ClipperBase.SlopesEqual(i.PrevInAEL, i, this.m_UseFullRange) && 0 !== i.WindDelta && 0 !== i.PrevInAEL.WindDelta) {
                              a = this.AddOutPt(i.PrevInAEL, i.Bot);
                              this.AddJoin(r, a, i.Top)
                          }
                          var u = e.NextInAEL;
                          if (null !== u)
                              for (; u !== i; )
                                  this.IntersectEdges(i, u, e.Curr, !1),
                                  u = u.NextInAEL
                      }
                  }
              }
          }
          ,
          n.Clipper.prototype.InsertEdgeIntoAEL = function(t, e) {
              if (null === this.m_ActiveEdges)
                  t.PrevInAEL = null,
                  t.NextInAEL = null,
                  this.m_ActiveEdges = t;
              else if (null === e && this.E2InsertsBeforeE1(this.m_ActiveEdges, t))
                  t.PrevInAEL = null,
                  t.NextInAEL = this.m_ActiveEdges,
                  this.m_ActiveEdges.PrevInAEL = t,
                  this.m_ActiveEdges = t;
              else {
                  for (null === e && (e = this.m_ActiveEdges); null !== e.NextInAEL && !this.E2InsertsBeforeE1(e.NextInAEL, t); )
                      e = e.NextInAEL;
                  t.NextInAEL = e.NextInAEL,
                  null !== e.NextInAEL && (e.NextInAEL.PrevInAEL = t),
                  t.PrevInAEL = e,
                  e.NextInAEL = t
              }
          }
          ,
          n.Clipper.prototype.E2InsertsBeforeE1 = function(t, e) {
              return e.Curr.X === t.Curr.X ? e.Top.Y > t.Top.Y ? e.Top.X < n.Clipper.TopX(t, e.Top.Y) : t.Top.X > n.Clipper.TopX(e, t.Top.Y) : e.Curr.X < t.Curr.X
          }
          ,
          n.Clipper.prototype.IsEvenOddFillType = function(t) {
              return t.PolyTyp === n.PolyType.ptSubject ? this.m_SubjFillType === n.PolyFillType.pftEvenOdd : this.m_ClipFillType === n.PolyFillType.pftEvenOdd
          }
          ,
          n.Clipper.prototype.IsEvenOddAltFillType = function(t) {
              return t.PolyTyp === n.PolyType.ptSubject ? this.m_ClipFillType === n.PolyFillType.pftEvenOdd : this.m_SubjFillType === n.PolyFillType.pftEvenOdd
          }
          ,
          n.Clipper.prototype.IsContributing = function(t) {
              var e, i;
              switch (t.PolyTyp === n.PolyType.ptSubject ? (e = this.m_SubjFillType,
              i = this.m_ClipFillType) : (e = this.m_ClipFillType,
              i = this.m_SubjFillType),
              e) {
              case n.PolyFillType.pftEvenOdd:
                  if (0 === t.WindDelta && 1 !== t.WindCnt)
                      return !1;
                  break;
              case n.PolyFillType.pftNonZero:
                  if (1 !== Math.abs(t.WindCnt))
                      return !1;
                  break;
              case n.PolyFillType.pftPositive:
                  if (1 !== t.WindCnt)
                      return !1;
                  break;
              default:
                  if (-1 !== t.WindCnt)
                      return !1
              }
              switch (this.m_ClipType) {
              case n.ClipType.ctIntersection:
                  switch (i) {
                  case n.PolyFillType.pftEvenOdd:
                  case n.PolyFillType.pftNonZero:
                      return 0 !== t.WindCnt2;
                  case n.PolyFillType.pftPositive:
                      return t.WindCnt2 > 0;
                  default:
                      return t.WindCnt2 < 0
                  }
              case n.ClipType.ctUnion:
                  switch (i) {
                  case n.PolyFillType.pftEvenOdd:
                  case n.PolyFillType.pftNonZero:
                      return 0 === t.WindCnt2;
                  case n.PolyFillType.pftPositive:
                      return t.WindCnt2 <= 0;
                  default:
                      return t.WindCnt2 >= 0
                  }
              case n.ClipType.ctDifference:
                  if (t.PolyTyp === n.PolyType.ptSubject)
                      switch (i) {
                      case n.PolyFillType.pftEvenOdd:
                      case n.PolyFillType.pftNonZero:
                          return 0 === t.WindCnt2;
                      case n.PolyFillType.pftPositive:
                          return t.WindCnt2 <= 0;
                      default:
                          return t.WindCnt2 >= 0
                      }
                  else
                      switch (i) {
                      case n.PolyFillType.pftEvenOdd:
                      case n.PolyFillType.pftNonZero:
                          return 0 !== t.WindCnt2;
                      case n.PolyFillType.pftPositive:
                          return t.WindCnt2 > 0;
                      default:
                          return t.WindCnt2 < 0
                      }
              case n.ClipType.ctXor:
                  if (0 !== t.WindDelta)
                      return !0;
                  switch (i) {
                  case n.PolyFillType.pftEvenOdd:
                  case n.PolyFillType.pftNonZero:
                      return 0 === t.WindCnt2;
                  case n.PolyFillType.pftPositive:
                      return t.WindCnt2 <= 0;
                  default:
                      return t.WindCnt2 >= 0
                  }
              }
              return !0
          }
          ,
          n.Clipper.prototype.SetWindingCount = function(t) {
              for (var e = t.PrevInAEL; null !== e && (e.PolyTyp !== t.PolyTyp || 0 === e.WindDelta); )
                  e = e.PrevInAEL;
              if (null === e)
                  t.WindCnt = 0 === t.WindDelta ? 1 : t.WindDelta,
                  t.WindCnt2 = 0,
                  e = this.m_ActiveEdges;
              else if (0 === t.WindDelta && this.m_ClipType !== n.ClipType.ctUnion)
                  t.WindCnt = 1,
                  t.WindCnt2 = e.WindCnt2,
                  e = e.NextInAEL;
              else if (this.IsEvenOddFillType(t)) {
                  if (0 === t.WindDelta) {
                      for (var i = !0, r = e.PrevInAEL; null !== r; )
                          r.PolyTyp === e.PolyTyp && 0 !== r.WindDelta && (i = !i),
                          r = r.PrevInAEL;
                      t.WindCnt = i ? 0 : 1
                  } else
                      t.WindCnt = t.WindDelta;
                  t.WindCnt2 = e.WindCnt2,
                  e = e.NextInAEL
              } else
                  e.WindCnt * e.WindDelta < 0 ? Math.abs(e.WindCnt) > 1 ? e.WindDelta * t.WindDelta < 0 ? t.WindCnt = e.WindCnt : t.WindCnt = e.WindCnt + t.WindDelta : t.WindCnt = 0 === t.WindDelta ? 1 : t.WindDelta : 0 === t.WindDelta ? t.WindCnt = e.WindCnt < 0 ? e.WindCnt - 1 : e.WindCnt + 1 : e.WindDelta * t.WindDelta < 0 ? t.WindCnt = e.WindCnt : t.WindCnt = e.WindCnt + t.WindDelta,
                  t.WindCnt2 = e.WindCnt2,
                  e = e.NextInAEL;
              if (this.IsEvenOddAltFillType(t))
                  for (; e !== t; )
                      0 !== e.WindDelta && (t.WindCnt2 = 0 === t.WindCnt2 ? 1 : 0),
                      e = e.NextInAEL;
              else
                  for (; e !== t; )
                      t.WindCnt2 += e.WindDelta,
                      e = e.NextInAEL
          }
          ,
          n.Clipper.prototype.AddEdgeToSEL = function(t) {
              null === this.m_SortedEdges ? (this.m_SortedEdges = t,
              t.PrevInSEL = null,
              t.NextInSEL = null) : (t.NextInSEL = this.m_SortedEdges,
              t.PrevInSEL = null,
              this.m_SortedEdges.PrevInSEL = t,
              this.m_SortedEdges = t)
          }
          ,
          n.Clipper.prototype.CopyAELToSEL = function() {
              var t = this.m_ActiveEdges;
              for (this.m_SortedEdges = t; null !== t; )
                  t.PrevInSEL = t.PrevInAEL,
                  t.NextInSEL = t.NextInAEL,
                  t = t.NextInAEL
          }
          ,
          n.Clipper.prototype.SwapPositionsInAEL = function(t, e) {
              if (t.NextInAEL != t.PrevInAEL && e.NextInAEL != e.PrevInAEL) {
                  if (t.NextInAEL == e)
                      null !== (n = e.NextInAEL) && (n.PrevInAEL = t),
                      null !== (i = t.PrevInAEL) && (i.NextInAEL = e),
                      e.PrevInAEL = i,
                      e.NextInAEL = t,
                      t.PrevInAEL = e,
                      t.NextInAEL = n;
                  else if (e.NextInAEL == t) {
                      null !== (n = t.NextInAEL) && (n.PrevInAEL = e),
                      null !== (i = e.PrevInAEL) && (i.NextInAEL = t),
                      t.PrevInAEL = i,
                      t.NextInAEL = e,
                      e.PrevInAEL = t,
                      e.NextInAEL = n
                  } else {
                      var n = t.NextInAEL
                        , i = t.PrevInAEL;
                      t.NextInAEL = e.NextInAEL,
                      null !== t.NextInAEL && (t.NextInAEL.PrevInAEL = t),
                      t.PrevInAEL = e.PrevInAEL,
                      null !== t.PrevInAEL && (t.PrevInAEL.NextInAEL = t),
                      e.NextInAEL = n,
                      null !== e.NextInAEL && (e.NextInAEL.PrevInAEL = e),
                      e.PrevInAEL = i,
                      null !== e.PrevInAEL && (e.PrevInAEL.NextInAEL = e)
                  }
                  null === t.PrevInAEL ? this.m_ActiveEdges = t : null === e.PrevInAEL && (this.m_ActiveEdges = e)
              }
          }
          ,
          n.Clipper.prototype.SwapPositionsInSEL = function(t, e) {
              if ((null !== t.NextInSEL || null !== t.PrevInSEL) && (null !== e.NextInSEL || null !== e.PrevInSEL)) {
                  if (t.NextInSEL === e)
                      null !== (n = e.NextInSEL) && (n.PrevInSEL = t),
                      null !== (i = t.PrevInSEL) && (i.NextInSEL = e),
                      e.PrevInSEL = i,
                      e.NextInSEL = t,
                      t.PrevInSEL = e,
                      t.NextInSEL = n;
                  else if (e.NextInSEL === t) {
                      null !== (n = t.NextInSEL) && (n.PrevInSEL = e),
                      null !== (i = e.PrevInSEL) && (i.NextInSEL = t),
                      t.PrevInSEL = i,
                      t.NextInSEL = e,
                      e.PrevInSEL = t,
                      e.NextInSEL = n
                  } else {
                      var n = t.NextInSEL
                        , i = t.PrevInSEL;
                      t.NextInSEL = e.NextInSEL,
                      null !== t.NextInSEL && (t.NextInSEL.PrevInSEL = t),
                      t.PrevInSEL = e.PrevInSEL,
                      null !== t.PrevInSEL && (t.PrevInSEL.NextInSEL = t),
                      e.NextInSEL = n,
                      null !== e.NextInSEL && (e.NextInSEL.PrevInSEL = e),
                      e.PrevInSEL = i,
                      null !== e.PrevInSEL && (e.PrevInSEL.NextInSEL = e)
                  }
                  null === t.PrevInSEL ? this.m_SortedEdges = t : null === e.PrevInSEL && (this.m_SortedEdges = e)
              }
          }
          ,
          n.Clipper.prototype.AddLocalMaxPoly = function(t, e, n) {
              this.AddOutPt(t, n),
              0 === e.WindDelta && this.AddOutPt(e, n),
              t.OutIdx === e.OutIdx ? (t.OutIdx = -1,
              e.OutIdx = -1) : t.OutIdx < e.OutIdx ? this.AppendPolygon(t, e) : this.AppendPolygon(e, t)
          }
          ,
          n.Clipper.prototype.AddLocalMinPoly = function(t, e, i) {
              var r, o, s;
              if (n.ClipperBase.IsHorizontal(e) || t.Dx > e.Dx ? (r = this.AddOutPt(t, i),
              e.OutIdx = t.OutIdx,
              t.Side = n.EdgeSide.esLeft,
              e.Side = n.EdgeSide.esRight,
              s = (o = t).PrevInAEL === e ? e.PrevInAEL : o.PrevInAEL) : (r = this.AddOutPt(e, i),
              t.OutIdx = e.OutIdx,
              t.Side = n.EdgeSide.esRight,
              e.Side = n.EdgeSide.esLeft,
              s = (o = e).PrevInAEL == t ? t.PrevInAEL : o.PrevInAEL),
              null !== s && s.OutIdx >= 0 && n.Clipper.TopX(s, i.Y) == n.Clipper.TopX(o, i.Y) && n.ClipperBase.SlopesEqual(o, s, this.m_UseFullRange) && 0 !== o.WindDelta && 0 !== s.WindDelta) {
                  var l = this.AddOutPt(s, i);
                  this.AddJoin(r, l, o.Top)
              }
              return r
          }
          ,
          n.Clipper.prototype.CreateOutRec = function() {
              var t = new n.OutRec;
              return t.Idx = -1,
              t.IsHole = !1,
              t.IsOpen = !1,
              t.FirstLeft = null,
              t.Pts = null,
              t.BottomPt = null,
              t.PolyNode = null,
              this.m_PolyOuts.push(t),
              t.Idx = this.m_PolyOuts.length - 1,
              t
          }
          ,
          n.Clipper.prototype.AddOutPt = function(t, e) {
              if (t.OutIdx < 0) {
                  (r = this.CreateOutRec()).IsOpen = 0 === t.WindDelta;
                  var i = new n.OutPt;
                  return r.Pts = i,
                  i.Idx = r.Idx,
                  i.Pt.X = e.X,
                  i.Pt.Y = e.Y,
                  n.use_xyz && (i.Pt.Z = e.Z),
                  i.Next = i,
                  i.Prev = i,
                  r.IsOpen || this.SetHoleState(t, r),
                  t.OutIdx = r.Idx,
                  i
              }
              var r, o = (r = this.m_PolyOuts[t.OutIdx]).Pts, s = t.Side == n.EdgeSide.esLeft;
              return s && n.IntPoint.op_Equality(e, o.Pt) ? o : !s && n.IntPoint.op_Equality(e, o.Prev.Pt) ? o.Prev : ((i = new n.OutPt).Idx = r.Idx,
              i.Pt.X = e.X,
              i.Pt.Y = e.Y,
              n.use_xyz && (i.Pt.Z = e.Z),
              i.Next = o,
              i.Prev = o.Prev,
              i.Prev.Next = i,
              o.Prev = i,
              s && (r.Pts = i),
              i)
          }
          ,
          n.Clipper.prototype.GetLastOutPt = function(t) {
              var e = this.m_PolyOuts[t.OutIdx];
              return t.Side == n.EdgeSide.esLeft ? e.Pts : e.Pts.Prev
          }
          ,
          n.Clipper.prototype.SwapPoints = function(t, e) {
              var i = new n.IntPoint(t.Value);
              t.Value.X = e.Value.X,
              t.Value.Y = e.Value.Y,
              n.use_xyz && (t.Value.Z = e.Value.Z),
              e.Value.X = i.X,
              e.Value.Y = i.Y,
              n.use_xyz && (e.Value.Z = i.Z)
          }
          ,
          n.Clipper.prototype.HorzSegmentsOverlap = function(t, e, n, i) {
              var r;
              return t > e && (r = t,
              t = e,
              e = r),
              n > i && (r = n,
              n = i,
              i = r),
              t < i && n < e
          }
          ,
          n.Clipper.prototype.SetHoleState = function(t, e) {
              for (var n = !1, i = t.PrevInAEL; null !== i; )
                  i.OutIdx >= 0 && 0 != i.WindDelta && (n = !n,
                  null === e.FirstLeft && (e.FirstLeft = this.m_PolyOuts[i.OutIdx])),
                  i = i.PrevInAEL;
              n && (e.IsHole = !0)
          }
          ,
          n.Clipper.prototype.GetDx = function(t, e) {
              return t.Y === e.Y ? n.ClipperBase.horizontal : (e.X - t.X) / (e.Y - t.Y)
          }
          ,
          n.Clipper.prototype.FirstIsBottomPt = function(t, e) {
              for (var i = t.Prev; n.IntPoint.op_Equality(i.Pt, t.Pt) && i !== t; )
                  i = i.Prev;
              var r = Math.abs(this.GetDx(t.Pt, i.Pt));
              for (i = t.Next; n.IntPoint.op_Equality(i.Pt, t.Pt) && i !== t; )
                  i = i.Next;
              var o = Math.abs(this.GetDx(t.Pt, i.Pt));
              for (i = e.Prev; n.IntPoint.op_Equality(i.Pt, e.Pt) && i !== e; )
                  i = i.Prev;
              var s = Math.abs(this.GetDx(e.Pt, i.Pt));
              for (i = e.Next; n.IntPoint.op_Equality(i.Pt, e.Pt) && i !== e; )
                  i = i.Next;
              var l = Math.abs(this.GetDx(e.Pt, i.Pt));
              return r >= s && r >= l || o >= s && o >= l
          }
          ,
          n.Clipper.prototype.GetBottomPt = function(t) {
              for (var e = null, i = t.Next; i !== t; )
                  i.Pt.Y > t.Pt.Y ? (t = i,
                  e = null) : i.Pt.Y === t.Pt.Y && i.Pt.X <= t.Pt.X && (i.Pt.X < t.Pt.X ? (e = null,
                  t = i) : i.Next !== t && i.Prev !== t && (e = i)),
                  i = i.Next;
              if (null !== e)
                  for (; e !== i; )
                      for (this.FirstIsBottomPt(i, e) || (t = e),
                      e = e.Next; n.IntPoint.op_Inequality(e.Pt, t.Pt); )
                          e = e.Next;
              return t
          }
          ,
          n.Clipper.prototype.GetLowermostRec = function(t, e) {
              null === t.BottomPt && (t.BottomPt = this.GetBottomPt(t.Pts)),
              null === e.BottomPt && (e.BottomPt = this.GetBottomPt(e.Pts));
              var n = t.BottomPt
                , i = e.BottomPt;
              return n.Pt.Y > i.Pt.Y ? t : n.Pt.Y < i.Pt.Y ? e : n.Pt.X < i.Pt.X ? t : n.Pt.X > i.Pt.X || n.Next === n ? e : i.Next === i || this.FirstIsBottomPt(n, i) ? t : e
          }
          ,
          n.Clipper.prototype.Param1RightOfParam2 = function(t, e) {
              do {
                  if ((t = t.FirstLeft) === e)
                      return !0
              } while (null !== t);
              return !1
          }
          ,
          n.Clipper.prototype.GetOutRec = function(t) {
              for (var e = this.m_PolyOuts[t]; e !== this.m_PolyOuts[e.Idx]; )
                  e = this.m_PolyOuts[e.Idx];
              return e
          }
          ,
          n.Clipper.prototype.AppendPolygon = function(t, e) {
              var i, r = this.m_PolyOuts[t.OutIdx], o = this.m_PolyOuts[e.OutIdx];
              i = this.Param1RightOfParam2(r, o) ? o : this.Param1RightOfParam2(o, r) ? r : this.GetLowermostRec(r, o);
              var s, l = r.Pts, a = l.Prev, u = o.Pts, p = u.Prev;
              t.Side === n.EdgeSide.esLeft ? (e.Side === n.EdgeSide.esLeft ? (this.ReversePolyPtLinks(u),
              u.Next = l,
              l.Prev = u,
              a.Next = p,
              p.Prev = a,
              r.Pts = p) : (p.Next = l,
              l.Prev = p,
              u.Prev = a,
              a.Next = u,
              r.Pts = u),
              s = n.EdgeSide.esLeft) : (e.Side === n.EdgeSide.esRight ? (this.ReversePolyPtLinks(u),
              a.Next = p,
              p.Prev = a,
              u.Next = l,
              l.Prev = u) : (a.Next = u,
              u.Prev = a,
              l.Prev = p,
              p.Next = l),
              s = n.EdgeSide.esRight),
              r.BottomPt = null,
              i === o && (o.FirstLeft !== r && (r.FirstLeft = o.FirstLeft),
              r.IsHole = o.IsHole),
              o.Pts = null,
              o.BottomPt = null,
              o.FirstLeft = r;
              var h = t.OutIdx
                , c = e.OutIdx;
              t.OutIdx = -1,
              e.OutIdx = -1;
              for (var f = this.m_ActiveEdges; null !== f; ) {
                  if (f.OutIdx === c) {
                      f.OutIdx = h,
                      f.Side = s;
                      break
                  }
                  f = f.NextInAEL
              }
              o.Idx = r.Idx
          }
          ,
          n.Clipper.prototype.ReversePolyPtLinks = function(t) {
              if (null !== t) {
                  var e, n;
                  e = t;
                  do {
                      n = e.Next,
                      e.Next = e.Prev,
                      e.Prev = n,
                      e = n
                  } while (e !== t)
              }
          }
          ,
          n.Clipper.SwapSides = function(t, e) {
              var n = t.Side;
              t.Side = e.Side,
              e.Side = n
          }
          ,
          n.Clipper.SwapPolyIndexes = function(t, e) {
              var n = t.OutIdx;
              t.OutIdx = e.OutIdx,
              e.OutIdx = n
          }
          ,
          n.Clipper.prototype.IntersectEdges = function(t, e, i) {
              var r = t.OutIdx >= 0
                , o = e.OutIdx >= 0;
              if (n.use_xyz && this.SetZ(i, t, e),
              !n.use_lines || 0 !== t.WindDelta && 0 !== e.WindDelta) {
                  if (t.PolyTyp === e.PolyTyp)
                      if (this.IsEvenOddFillType(t)) {
                          var s = t.WindCnt;
                          t.WindCnt = e.WindCnt,
                          e.WindCnt = s
                      } else
                          t.WindCnt + e.WindDelta === 0 ? t.WindCnt = -t.WindCnt : t.WindCnt += e.WindDelta,
                          e.WindCnt - t.WindDelta === 0 ? e.WindCnt = -e.WindCnt : e.WindCnt -= t.WindDelta;
                  else
                      this.IsEvenOddFillType(e) ? t.WindCnt2 = 0 === t.WindCnt2 ? 1 : 0 : t.WindCnt2 += e.WindDelta,
                      this.IsEvenOddFillType(t) ? e.WindCnt2 = 0 === e.WindCnt2 ? 1 : 0 : e.WindCnt2 -= t.WindDelta;
                  var l, a, u, p, h, c;
                  switch (t.PolyTyp === n.PolyType.ptSubject ? (l = this.m_SubjFillType,
                  u = this.m_ClipFillType) : (l = this.m_ClipFillType,
                  u = this.m_SubjFillType),
                  e.PolyTyp === n.PolyType.ptSubject ? (a = this.m_SubjFillType,
                  p = this.m_ClipFillType) : (a = this.m_ClipFillType,
                  p = this.m_SubjFillType),
                  l) {
                  case n.PolyFillType.pftPositive:
                      h = t.WindCnt;
                      break;
                  case n.PolyFillType.pftNegative:
                      h = -t.WindCnt;
                      break;
                  default:
                      h = Math.abs(t.WindCnt)
                  }
                  switch (a) {
                  case n.PolyFillType.pftPositive:
                      c = e.WindCnt;
                      break;
                  case n.PolyFillType.pftNegative:
                      c = -e.WindCnt;
                      break;
                  default:
                      c = Math.abs(e.WindCnt)
                  }
                  if (r && o)
                      0 !== h && 1 !== h || 0 !== c && 1 !== c || t.PolyTyp !== e.PolyTyp && this.m_ClipType !== n.ClipType.ctXor ? this.AddLocalMaxPoly(t, e, i) : (this.AddOutPt(t, i),
                      this.AddOutPt(e, i),
                      n.Clipper.SwapSides(t, e),
                      n.Clipper.SwapPolyIndexes(t, e));
                  else if (r)
                      0 !== c && 1 !== c || (this.AddOutPt(t, i),
                      n.Clipper.SwapSides(t, e),
                      n.Clipper.SwapPolyIndexes(t, e));
                  else if (o)
                      0 !== h && 1 !== h || (this.AddOutPt(e, i),
                      n.Clipper.SwapSides(t, e),
                      n.Clipper.SwapPolyIndexes(t, e));
                  else if ((0 === h || 1 === h) && (0 === c || 1 === c)) {
                      var f, d;
                      switch (u) {
                      case n.PolyFillType.pftPositive:
                          f = t.WindCnt2;
                          break;
                      case n.PolyFillType.pftNegative:
                          f = -t.WindCnt2;
                          break;
                      default:
                          f = Math.abs(t.WindCnt2)
                      }
                      switch (p) {
                      case n.PolyFillType.pftPositive:
                          d = e.WindCnt2;
                          break;
                      case n.PolyFillType.pftNegative:
                          d = -e.WindCnt2;
                          break;
                      default:
                          d = Math.abs(e.WindCnt2)
                      }
                      if (t.PolyTyp !== e.PolyTyp)
                          this.AddLocalMinPoly(t, e, i);
                      else if (1 === h && 1 === c)
                          switch (this.m_ClipType) {
                          case n.ClipType.ctIntersection:
                              f > 0 && d > 0 && this.AddLocalMinPoly(t, e, i);
                              break;
                          case n.ClipType.ctUnion:
                              f <= 0 && d <= 0 && this.AddLocalMinPoly(t, e, i);
                              break;
                          case n.ClipType.ctDifference:
                              (t.PolyTyp === n.PolyType.ptClip && f > 0 && d > 0 || t.PolyTyp === n.PolyType.ptSubject && f <= 0 && d <= 0) && this.AddLocalMinPoly(t, e, i);
                              break;
                          case n.ClipType.ctXor:
                              this.AddLocalMinPoly(t, e, i)
                          }
                      else
                          n.Clipper.SwapSides(t, e)
                  }
              } else {
                  if (0 === t.WindDelta && 0 === e.WindDelta)
                      return;
                  t.PolyTyp === e.PolyTyp && t.WindDelta !== e.WindDelta && this.m_ClipType === n.ClipType.ctUnion ? 0 === t.WindDelta ? o && (this.AddOutPt(t, i),
                  r && (t.OutIdx = -1)) : r && (this.AddOutPt(e, i),
                  o && (e.OutIdx = -1)) : t.PolyTyp !== e.PolyTyp && (0 !== t.WindDelta || 1 !== Math.abs(e.WindCnt) || this.m_ClipType === n.ClipType.ctUnion && 0 !== e.WindCnt2 ? 0 !== e.WindDelta || 1 !== Math.abs(t.WindCnt) || this.m_ClipType === n.ClipType.ctUnion && 0 !== t.WindCnt2 || (this.AddOutPt(e, i),
                  o && (e.OutIdx = -1)) : (this.AddOutPt(t, i),
                  r && (t.OutIdx = -1)))
              }
          }
          ,
          n.Clipper.prototype.DeleteFromAEL = function(t) {
              var e = t.PrevInAEL
                , n = t.NextInAEL;
              null === e && null === n && t !== this.m_ActiveEdges || (null !== e ? e.NextInAEL = n : this.m_ActiveEdges = n,
              null !== n && (n.PrevInAEL = e),
              t.NextInAEL = null,
              t.PrevInAEL = null)
          }
          ,
          n.Clipper.prototype.DeleteFromSEL = function(t) {
              var e = t.PrevInSEL
                , n = t.NextInSEL;
              null === e && null === n && t !== this.m_SortedEdges || (null !== e ? e.NextInSEL = n : this.m_SortedEdges = n,
              null !== n && (n.PrevInSEL = e),
              t.NextInSEL = null,
              t.PrevInSEL = null)
          }
          ,
          n.Clipper.prototype.UpdateEdgeIntoAEL = function(t) {
              null === t.NextInLML && n.Error("UpdateEdgeIntoAEL: invalid call");
              var e = t.PrevInAEL
                , i = t.NextInAEL;
              return t.NextInLML.OutIdx = t.OutIdx,
              null !== e ? e.NextInAEL = t.NextInLML : this.m_ActiveEdges = t.NextInLML,
              null !== i && (i.PrevInAEL = t.NextInLML),
              t.NextInLML.Side = t.Side,
              t.NextInLML.WindDelta = t.WindDelta,
              t.NextInLML.WindCnt = t.WindCnt,
              t.NextInLML.WindCnt2 = t.WindCnt2,
              (t = t.NextInLML).Curr.X = t.Bot.X,
              t.Curr.Y = t.Bot.Y,
              n.use_xyz && (t.Curr.Z = t.Bot.Z),
              t.PrevInAEL = e,
              t.NextInAEL = i,
              n.ClipperBase.IsHorizontal(t) || this.InsertScanbeam(t.Top.Y),
              t
          }
          ,
          n.Clipper.prototype.ProcessHorizontals = function() {
              for (var t = this.m_SortedEdges; null !== t; )
                  this.DeleteFromSEL(t),
                  this.ProcessHorizontal(t),
                  t = this.m_SortedEdges
          }
          ,
          n.Clipper.prototype.GetHorzDirection = function(t, e) {
              t.Bot.X < t.Top.X ? (e.Left = t.Bot.X,
              e.Right = t.Top.X,
              e.Dir = n.Direction.dLeftToRight) : (e.Left = t.Top.X,
              e.Right = t.Bot.X,
              e.Dir = n.Direction.dRightToLeft)
          }
          ,
          n.Clipper.prototype.ProcessHorizontal = function(t) {
              var e = {
                  Dir: null,
                  Left: null,
                  Right: null
              };
              this.GetHorzDirection(t, e);
              for (var i = e.Dir, r = e.Left, o = e.Right, s = t, l = null; null !== s.NextInLML && n.ClipperBase.IsHorizontal(s.NextInLML); )
                  s = s.NextInLML;
              null === s.NextInLML && (l = this.GetMaximaPair(s));
              var a = this.m_Maxima;
              if (null !== a)
                  if (i === n.Direction.dLeftToRight) {
                      for (; null !== a && a.X <= t.Bot.X; )
                          a = a.Next;
                      null !== a && a.X >= s.Top.X && (a = null)
                  } else {
                      for (; null != a.Next && a.Next.X < t.Bot.X; )
                          a = a.Next;
                      a.X <= s.Top.X && (a = null)
                  }
              for (var u = null; ; ) {
                  for (var p = t === s, h = this.GetNextInAEL(t, i); null !== h; ) {
                      if (null != a)
                          if (i === n.Direction.dLeftToRight)
                              for (; null !== a && a.X < h.Curr.X; )
                                  t.OutIdx >= 0 && this.AddOutPt(t, new n.IntPoint(a.X,t.Bot.Y)),
                                  a = a.Next;
                          else
                              for (; null !== a && a.X > h.Curr.X; )
                                  t.OutIdx >= 0 && this.AddOutPt(t, new n.IntPoint(a.X,t.Bot.Y)),
                                  a = a.Prev;
                      if (i === n.Direction.dLeftToRight && h.Curr.X > o || i === n.Direction.dRightToLeft && h.Curr.X < r)
                          break;
                      if (h.Curr.X == t.Top.X && null != t.NextInLML && h.Dx < t.NextInLML.Dx)
                          break;
                      if (t.OutIdx >= 0) {
                          u = this.AddOutPt(t, h.Curr);
                          for (var c = this.m_SortedEdges; null !== c; ) {
                              if (c.OutIdx >= 0 && this.HorzSegmentsOverlap(t.Bot.X, t.Top.X, c.Bot.X, c.Top.X)) {
                                  var f = this.GetLastOutPt(c);
                                  this.AddJoin(f, u, c.Top)
                              }
                              c = c.NextInSEL
                          }
                          this.AddGhostJoin(u, t.Bot)
                      }
                      if (h === l && p)
                          return t.OutIdx >= 0 && this.AddLocalMaxPoly(t, l, t.Top),
                          this.DeleteFromAEL(t),
                          void this.DeleteFromAEL(l);
                      if (i == n.Direction.dLeftToRight) {
                          var d = new n.IntPoint(h.Curr.X,t.Curr.Y);
                          this.IntersectEdges(t, h, d)
                      } else {
                          d = new n.IntPoint(h.Curr.X,t.Curr.Y);
                          this.IntersectEdges(h, t, d)
                      }
                      var y = this.GetNextInAEL(h, i);
                      this.SwapPositionsInAEL(t, h),
                      h = y
                  }
                  if (null == t.NextInLML || !n.ClipperBase.IsHorizontal(t.NextInLML))
                      break;
                  (t = this.UpdateEdgeIntoAEL(t)).OutIdx >= 0 && this.AddOutPt(t, t.Bot);
                  e = {
                      Dir: i,
                      Left: r,
                      Right: o
                  };
                  this.GetHorzDirection(t, e),
                  i = e.Dir,
                  r = e.Left,
                  o = e.Right
              }
              if (t.OutIdx >= 0 && null === u) {
                  u = this.GetLastOutPt(t);
                  for (c = this.m_SortedEdges; null !== c; ) {
                      if (c.OutIdx >= 0 && this.HorzSegmentsOverlap(t.Bot.X, t.Top.X, c.Bot.X, c.Top.X)) {
                          f = this.GetLastOutPt(c);
                          this.AddJoin(f, u, c.Top)
                      }
                      c = c.NextInSEL
                  }
                  this.AddGhostJoin(u, t.Top)
              }
              if (null !== t.NextInLML)
                  if (t.OutIdx >= 0) {
                      if (u = this.AddOutPt(t, t.Top),
                      0 === (t = this.UpdateEdgeIntoAEL(t)).WindDelta)
                          return;
                      var m = t.PrevInAEL;
                      y = t.NextInAEL;
                      if (null !== m && m.Curr.X === t.Bot.X && m.Curr.Y === t.Bot.Y && 0 !== m.WindDelta && m.OutIdx >= 0 && m.Curr.Y > m.Top.Y && n.ClipperBase.SlopesEqual(t, m, this.m_UseFullRange)) {
                          f = this.AddOutPt(m, t.Bot);
                          this.AddJoin(u, f, t.Top)
                      } else if (null !== y && y.Curr.X === t.Bot.X && y.Curr.Y === t.Bot.Y && 0 !== y.WindDelta && y.OutIdx >= 0 && y.Curr.Y > y.Top.Y && n.ClipperBase.SlopesEqual(t, y, this.m_UseFullRange)) {
                          f = this.AddOutPt(y, t.Bot);
                          this.AddJoin(u, f, t.Top)
                      }
                  } else
                      t = this.UpdateEdgeIntoAEL(t);
              else
                  t.OutIdx >= 0 && this.AddOutPt(t, t.Top),
                  this.DeleteFromAEL(t)
          }
          ,
          n.Clipper.prototype.GetNextInAEL = function(t, e) {
              return e === n.Direction.dLeftToRight ? t.NextInAEL : t.PrevInAEL
          }
          ,
          n.Clipper.prototype.IsMinima = function(t) {
              return null !== t && t.Prev.NextInLML !== t && t.Next.NextInLML !== t
          }
          ,
          n.Clipper.prototype.IsMaxima = function(t, e) {
              return null !== t && t.Top.Y === e && null === t.NextInLML
          }
          ,
          n.Clipper.prototype.IsIntermediate = function(t, e) {
              return t.Top.Y === e && null !== t.NextInLML
          }
          ,
          n.Clipper.prototype.GetMaximaPair = function(t) {
              var e = null;
              return n.IntPoint.op_Equality(t.Next.Top, t.Top) && null === t.Next.NextInLML ? e = t.Next : n.IntPoint.op_Equality(t.Prev.Top, t.Top) && null === t.Prev.NextInLML && (e = t.Prev),
              null === e || -2 != e.OutIdx && (e.NextInAEL != e.PrevInAEL || n.ClipperBase.IsHorizontal(e)) ? e : null
          }
          ,
          n.Clipper.prototype.ProcessIntersections = function(t) {
              if (null === this.m_ActiveEdges)
                  return !0;
              try {
                  if (this.BuildIntersectList(t),
                  0 === this.m_IntersectList.length)
                      return !0;
                  if (1 !== this.m_IntersectList.length && !this.FixupIntersectionOrder())
                      return !1;
                  this.ProcessIntersectList()
              } catch (e) {
                  this.m_SortedEdges = null,
                  this.m_IntersectList.length = 0,
                  n.Error("ProcessIntersections error")
              }
              return this.m_SortedEdges = null,
              !0
          }
          ,
          n.Clipper.prototype.BuildIntersectList = function(t) {
              if (null !== this.m_ActiveEdges) {
                  var e = this.m_ActiveEdges;
                  for (this.m_SortedEdges = e; null !== e; )
                      e.PrevInSEL = e.PrevInAEL,
                      e.NextInSEL = e.NextInAEL,
                      e.Curr.X = n.Clipper.TopX(e, t),
                      e = e.NextInAEL;
                  for (var i = !0; i && null !== this.m_SortedEdges; ) {
                      for (i = !1,
                      e = this.m_SortedEdges; null !== e.NextInSEL; ) {
                          var r = e.NextInSEL
                            , o = new n.IntPoint;
                          if (e.Curr.X > r.Curr.X) {
                              this.IntersectPoint(e, r, o);
                              var s = new n.IntersectNode;
                              s.Edge1 = e,
                              s.Edge2 = r,
                              s.Pt.X = o.X,
                              s.Pt.Y = o.Y,
                              n.use_xyz && (s.Pt.Z = o.Z),
                              this.m_IntersectList.push(s),
                              this.SwapPositionsInSEL(e, r),
                              i = !0
                          } else
                              e = r
                      }
                      if (null === e.PrevInSEL)
                          break;
                      e.PrevInSEL.NextInSEL = null
                  }
                  this.m_SortedEdges = null
              }
          }
          ,
          n.Clipper.prototype.EdgesAdjacent = function(t) {
              return t.Edge1.NextInSEL === t.Edge2 || t.Edge1.PrevInSEL === t.Edge2
          }
          ,
          n.Clipper.IntersectNodeSort = function(t, e) {
              return e.Pt.Y - t.Pt.Y
          }
          ,
          n.Clipper.prototype.FixupIntersectionOrder = function() {
              this.m_IntersectList.sort(this.m_IntersectNodeComparer),
              this.CopyAELToSEL();
              for (var t = this.m_IntersectList.length, e = 0; e < t; e++) {
                  if (!this.EdgesAdjacent(this.m_IntersectList[e])) {
                      for (var n = e + 1; n < t && !this.EdgesAdjacent(this.m_IntersectList[n]); )
                          n++;
                      if (n === t)
                          return !1;
                      var i = this.m_IntersectList[e];
                      this.m_IntersectList[e] = this.m_IntersectList[n],
                      this.m_IntersectList[n] = i
                  }
                  this.SwapPositionsInSEL(this.m_IntersectList[e].Edge1, this.m_IntersectList[e].Edge2)
              }
              return !0
          }
          ,
          n.Clipper.prototype.ProcessIntersectList = function() {
              for (var t = 0, e = this.m_IntersectList.length; t < e; t++) {
                  var n = this.m_IntersectList[t];
                  this.IntersectEdges(n.Edge1, n.Edge2, n.Pt),
                  this.SwapPositionsInAEL(n.Edge1, n.Edge2)
              }
              this.m_IntersectList.length = 0
          }
          ;
          s.msie ? n.Clipper.Round = function(t) {
              return t < 0 ? Math.ceil(t - .5) : Math.round(t)
          }
          : s.chromium ? n.Clipper.Round = function(t) {
              return t < 0 ? -Math.round(Math.abs(t)) : Math.round(t)
          }
          : s.safari ? n.Clipper.Round = function(t) {
              return t < 0 ? (t -= .5) < -2147483648 ? Math.ceil(t) : 0 | t : (t += .5) > 2147483647 ? Math.floor(t) : 0 | t
          }
          : n.Clipper.Round = function(t) {
              return t < 0 ? Math.ceil(t - .5) : Math.floor(t + .5)
          }
          ,
          n.Clipper.TopX = function(t, e) {
              return e === t.Top.Y ? t.Top.X : t.Bot.X + n.Clipper.Round(t.Dx * (e - t.Bot.Y))
          }
          ,
          n.Clipper.prototype.IntersectPoint = function(t, e, i) {
              var r, o;
              if (i.X = 0,
              i.Y = 0,
              t.Dx === e.Dx)
                  return i.Y = t.Curr.Y,
                  void (i.X = n.Clipper.TopX(t, i.Y));
              if (0 === t.Delta.X)
                  i.X = t.Bot.X,
                  n.ClipperBase.IsHorizontal(e) ? i.Y = e.Bot.Y : (o = e.Bot.Y - e.Bot.X / e.Dx,
                  i.Y = n.Clipper.Round(i.X / e.Dx + o));
              else if (0 === e.Delta.X)
                  i.X = e.Bot.X,
                  n.ClipperBase.IsHorizontal(t) ? i.Y = t.Bot.Y : (r = t.Bot.Y - t.Bot.X / t.Dx,
                  i.Y = n.Clipper.Round(i.X / t.Dx + r));
              else {
                  r = t.Bot.X - t.Bot.Y * t.Dx;
                  var s = ((o = e.Bot.X - e.Bot.Y * e.Dx) - r) / (t.Dx - e.Dx);
                  i.Y = n.Clipper.Round(s),
                  Math.abs(t.Dx) < Math.abs(e.Dx) ? i.X = n.Clipper.Round(t.Dx * s + r) : i.X = n.Clipper.Round(e.Dx * s + o)
              }
              if (i.Y < t.Top.Y || i.Y < e.Top.Y) {
                  if (t.Top.Y > e.Top.Y)
                      return i.Y = t.Top.Y,
                      i.X = n.Clipper.TopX(e, t.Top.Y),
                      i.X < t.Top.X;
                  i.Y = e.Top.Y,
                  Math.abs(t.Dx) < Math.abs(e.Dx) ? i.X = n.Clipper.TopX(t, i.Y) : i.X = n.Clipper.TopX(e, i.Y)
              }
              i.Y > t.Curr.Y && (i.Y = t.Curr.Y,
              Math.abs(t.Dx) > Math.abs(e.Dx) ? i.X = n.Clipper.TopX(e, i.Y) : i.X = n.Clipper.TopX(t, i.Y))
          }
          ,
          n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam = function(t) {
              for (var e = this.m_ActiveEdges; null !== e; ) {
                  var i = this.IsMaxima(e, t);
                  if (i) {
                      var r = this.GetMaximaPair(e);
                      i = null === r || !n.ClipperBase.IsHorizontal(r)
                  }
                  if (i) {
                      this.StrictlySimple && this.InsertMaxima(e.Top.X);
                      var o = e.PrevInAEL;
                      this.DoMaxima(e),
                      e = null === o ? this.m_ActiveEdges : o.NextInAEL
                  } else {
                      if (this.IsIntermediate(e, t) && n.ClipperBase.IsHorizontal(e.NextInLML) ? ((e = this.UpdateEdgeIntoAEL(e)).OutIdx >= 0 && this.AddOutPt(e, e.Bot),
                      this.AddEdgeToSEL(e)) : (e.Curr.X = n.Clipper.TopX(e, t),
                      e.Curr.Y = t),
                      this.StrictlySimple) {
                          o = e.PrevInAEL;
                          if (e.OutIdx >= 0 && 0 !== e.WindDelta && null !== o && o.OutIdx >= 0 && o.Curr.X === e.Curr.X && 0 !== o.WindDelta) {
                              var s = new n.IntPoint(e.Curr);
                              n.use_xyz && this.SetZ(s, o, e);
                              var l = this.AddOutPt(o, s)
                                , a = this.AddOutPt(e, s);
                              this.AddJoin(l, a, s)
                          }
                      }
                      e = e.NextInAEL
                  }
              }
              for (this.ProcessHorizontals(),
              this.m_Maxima = null,
              e = this.m_ActiveEdges; null !== e; ) {
                  if (this.IsIntermediate(e, t)) {
                      l = null;
                      e.OutIdx >= 0 && (l = this.AddOutPt(e, e.Top));
                      o = (e = this.UpdateEdgeIntoAEL(e)).PrevInAEL;
                      var u = e.NextInAEL;
                      if (null !== o && o.Curr.X === e.Bot.X && o.Curr.Y === e.Bot.Y && null !== l && o.OutIdx >= 0 && o.Curr.Y > o.Top.Y && n.ClipperBase.SlopesEqual(e, o, this.m_UseFullRange) && 0 !== e.WindDelta && 0 !== o.WindDelta) {
                          a = this.AddOutPt(o, e.Bot);
                          this.AddJoin(l, a, e.Top)
                      } else if (null !== u && u.Curr.X === e.Bot.X && u.Curr.Y == e.Bot.Y && null !== l && u.OutIdx >= 0 && u.Curr.Y > u.Top.Y && n.ClipperBase.SlopesEqual(e, u, this.m_UseFullRange) && 0 !== e.WindDelta && 0 !== u.WindDelta) {
                          a = this.AddOutPt(u, e.Bot);
                          this.AddJoin(l, a, e.Top)
                      }
                  }
                  e = e.NextInAEL
              }
          }
          ,
          n.Clipper.prototype.DoMaxima = function(t) {
              var e = this.GetMaximaPair(t);
              if (null === e)
                  return t.OutIdx >= 0 && this.AddOutPt(t, t.Top),
                  void this.DeleteFromAEL(t);
              for (var i = t.NextInAEL; null !== i && i !== e; )
                  this.IntersectEdges(t, i, t.Top),
                  this.SwapPositionsInAEL(t, i),
                  i = t.NextInAEL;
              -1 === t.OutIdx && -1 === e.OutIdx ? (this.DeleteFromAEL(t),
              this.DeleteFromAEL(e)) : t.OutIdx >= 0 && e.OutIdx >= 0 ? (t.OutIdx >= 0 && this.AddLocalMaxPoly(t, e, t.Top),
              this.DeleteFromAEL(t),
              this.DeleteFromAEL(e)) : n.use_lines && 0 === t.WindDelta ? (t.OutIdx >= 0 && (this.AddOutPt(t, t.Top),
              t.OutIdx = -1),
              this.DeleteFromAEL(t),
              e.OutIdx >= 0 && (this.AddOutPt(e, t.Top),
              e.OutIdx = -1),
              this.DeleteFromAEL(e)) : n.Error("DoMaxima error")
          }
          ,
          n.Clipper.ReversePaths = function(t) {
              for (var e = 0, n = t.length; e < n; e++)
                  t[e].reverse()
          }
          ,
          n.Clipper.Orientation = function(t) {
              return n.Clipper.Area(t) >= 0
          }
          ,
          n.Clipper.prototype.PointCount = function(t) {
              if (null === t)
                  return 0;
              var e = 0
                , n = t;
              do {
                  e++,
                  n = n.Next
              } while (n !== t);
              return e
          }
          ,
          n.Clipper.prototype.BuildResult = function(t) {
              n.Clear(t);
              for (var e = 0, i = this.m_PolyOuts.length; e < i; e++) {
                  var r = this.m_PolyOuts[e];
                  if (null !== r.Pts) {
                      var o = r.Pts.Prev
                        , s = this.PointCount(o);
                      if (!(s < 2)) {
                          for (var l = new Array(s), a = 0; a < s; a++)
                              l[a] = o.Pt,
                              o = o.Prev;
                          t.push(l)
                      }
                  }
              }
          }
          ,
          n.Clipper.prototype.BuildResult2 = function(t) {
              t.Clear();
              for (var e = 0, i = this.m_PolyOuts.length; e < i; e++) {
                  var r = this.m_PolyOuts[e]
                    , o = this.PointCount(r.Pts);
                  if (!(r.IsOpen && o < 2 || !r.IsOpen && o < 3)) {
                      this.FixHoleLinkage(r);
                      var s = new n.PolyNode;
                      t.m_AllPolys.push(s),
                      r.PolyNode = s,
                      s.m_polygon.length = o;
                      for (var l = r.Pts.Prev, a = 0; a < o; a++)
                          s.m_polygon[a] = l.Pt,
                          l = l.Prev
                  }
              }
              for (e = 0,
              i = this.m_PolyOuts.length; e < i; e++) {
                  null !== (r = this.m_PolyOuts[e]).PolyNode && (r.IsOpen ? (r.PolyNode.IsOpen = !0,
                  t.AddChild(r.PolyNode)) : null !== r.FirstLeft && null !== r.FirstLeft.PolyNode ? r.FirstLeft.PolyNode.AddChild(r.PolyNode) : t.AddChild(r.PolyNode))
              }
          }
          ,
          n.Clipper.prototype.FixupOutPolygon = function(t) {
              var e = null;
              t.BottomPt = null;
              for (var i = t.Pts, r = this.PreserveCollinear || this.StrictlySimple; ; ) {
                  if (i.Prev === i || i.Prev === i.Next)
                      return void (t.Pts = null);
                  if (n.IntPoint.op_Equality(i.Pt, i.Next.Pt) || n.IntPoint.op_Equality(i.Pt, i.Prev.Pt) || n.ClipperBase.SlopesEqual(i.Prev.Pt, i.Pt, i.Next.Pt, this.m_UseFullRange) && (!r || !this.Pt2IsBetweenPt1AndPt3(i.Prev.Pt, i.Pt, i.Next.Pt)))
                      e = null,
                      i.Prev.Next = i.Next,
                      i.Next.Prev = i.Prev,
                      i = i.Prev;
                  else {
                      if (i === e)
                          break;
                      null === e && (e = i),
                      i = i.Next
                  }
              }
              t.Pts = i
          }
          ,
          n.Clipper.prototype.DupOutPt = function(t, e) {
              var i = new n.OutPt;
              return i.Pt.X = t.Pt.X,
              i.Pt.Y = t.Pt.Y,
              n.use_xyz && (i.Pt.Z = t.Pt.Z),
              i.Idx = t.Idx,
              e ? (i.Next = t.Next,
              i.Prev = t,
              t.Next.Prev = i,
              t.Next = i) : (i.Prev = t.Prev,
              i.Next = t,
              t.Prev.Next = i,
              t.Prev = i),
              i
          }
          ,
          n.Clipper.prototype.GetOverlap = function(t, e, n, i, r) {
              return t < e ? n < i ? (r.Left = Math.max(t, n),
              r.Right = Math.min(e, i)) : (r.Left = Math.max(t, i),
              r.Right = Math.min(e, n)) : n < i ? (r.Left = Math.max(e, n),
              r.Right = Math.min(t, i)) : (r.Left = Math.max(e, i),
              r.Right = Math.min(t, n)),
              r.Left < r.Right
          }
          ,
          n.Clipper.prototype.JoinHorz = function(t, e, i, r, o, s) {
              var l = t.Pt.X > e.Pt.X ? n.Direction.dRightToLeft : n.Direction.dLeftToRight
                , a = i.Pt.X > r.Pt.X ? n.Direction.dRightToLeft : n.Direction.dLeftToRight;
              if (l === a)
                  return !1;
              if (l === n.Direction.dLeftToRight) {
                  for (; t.Next.Pt.X <= o.X && t.Next.Pt.X >= t.Pt.X && t.Next.Pt.Y === o.Y; )
                      t = t.Next;
                  s && t.Pt.X !== o.X && (t = t.Next),
                  e = this.DupOutPt(t, !s),
                  n.IntPoint.op_Inequality(e.Pt, o) && ((t = e).Pt.X = o.X,
                  t.Pt.Y = o.Y,
                  n.use_xyz && (t.Pt.Z = o.Z),
                  e = this.DupOutPt(t, !s))
              } else {
                  for (; t.Next.Pt.X >= o.X && t.Next.Pt.X <= t.Pt.X && t.Next.Pt.Y === o.Y; )
                      t = t.Next;
                  s || t.Pt.X === o.X || (t = t.Next),
                  e = this.DupOutPt(t, s),
                  n.IntPoint.op_Inequality(e.Pt, o) && ((t = e).Pt.X = o.X,
                  t.Pt.Y = o.Y,
                  n.use_xyz && (t.Pt.Z = o.Z),
                  e = this.DupOutPt(t, s))
              }
              if (a === n.Direction.dLeftToRight) {
                  for (; i.Next.Pt.X <= o.X && i.Next.Pt.X >= i.Pt.X && i.Next.Pt.Y === o.Y; )
                      i = i.Next;
                  s && i.Pt.X !== o.X && (i = i.Next),
                  r = this.DupOutPt(i, !s),
                  n.IntPoint.op_Inequality(r.Pt, o) && ((i = r).Pt.X = o.X,
                  i.Pt.Y = o.Y,
                  n.use_xyz && (i.Pt.Z = o.Z),
                  r = this.DupOutPt(i, !s))
              } else {
                  for (; i.Next.Pt.X >= o.X && i.Next.Pt.X <= i.Pt.X && i.Next.Pt.Y === o.Y; )
                      i = i.Next;
                  s || i.Pt.X === o.X || (i = i.Next),
                  r = this.DupOutPt(i, s),
                  n.IntPoint.op_Inequality(r.Pt, o) && ((i = r).Pt.X = o.X,
                  i.Pt.Y = o.Y,
                  n.use_xyz && (i.Pt.Z = o.Z),
                  r = this.DupOutPt(i, s))
              }
              return l === n.Direction.dLeftToRight === s ? (t.Prev = i,
              i.Next = t,
              e.Next = r,
              r.Prev = e) : (t.Next = i,
              i.Prev = t,
              e.Prev = r,
              r.Next = e),
              !0
          }
          ,
          n.Clipper.prototype.JoinPoints = function(t, e, i) {
              var r = t.OutPt1
                , o = new n.OutPt
                , s = t.OutPt2
                , l = new n.OutPt
                , a = t.OutPt1.Pt.Y === t.OffPt.Y;
              if (a && n.IntPoint.op_Equality(t.OffPt, t.OutPt1.Pt) && n.IntPoint.op_Equality(t.OffPt, t.OutPt2.Pt)) {
                  if (e !== i)
                      return !1;
                  for (o = t.OutPt1.Next; o !== r && n.IntPoint.op_Equality(o.Pt, t.OffPt); )
                      o = o.Next;
                  var u = o.Pt.Y > t.OffPt.Y;
                  for (l = t.OutPt2.Next; l !== s && n.IntPoint.op_Equality(l.Pt, t.OffPt); )
                      l = l.Next;
                  return u !== l.Pt.Y > t.OffPt.Y && (u ? (o = this.DupOutPt(r, !1),
                  l = this.DupOutPt(s, !0),
                  r.Prev = s,
                  s.Next = r,
                  o.Next = l,
                  l.Prev = o,
                  t.OutPt1 = r,
                  t.OutPt2 = o,
                  !0) : (o = this.DupOutPt(r, !0),
                  l = this.DupOutPt(s, !1),
                  r.Next = s,
                  s.Prev = r,
                  o.Prev = l,
                  l.Next = o,
                  t.OutPt1 = r,
                  t.OutPt2 = o,
                  !0))
              }
              if (a) {
                  for (o = r; r.Prev.Pt.Y === r.Pt.Y && r.Prev !== o && r.Prev !== s; )
                      r = r.Prev;
                  for (; o.Next.Pt.Y === o.Pt.Y && o.Next !== r && o.Next !== s; )
                      o = o.Next;
                  if (o.Next === r || o.Next === s)
                      return !1;
                  for (l = s; s.Prev.Pt.Y === s.Pt.Y && s.Prev !== l && s.Prev !== o; )
                      s = s.Prev;
                  for (; l.Next.Pt.Y === l.Pt.Y && l.Next !== s && l.Next !== r; )
                      l = l.Next;
                  if (l.Next === s || l.Next === r)
                      return !1;
                  var p = {
                      Left: null,
                      Right: null
                  };
                  if (!this.GetOverlap(r.Pt.X, o.Pt.X, s.Pt.X, l.Pt.X, p))
                      return !1;
                  var h, c = p.Left, f = p.Right, d = new n.IntPoint;
                  return r.Pt.X >= c && r.Pt.X <= f ? (d.X = r.Pt.X,
                  d.Y = r.Pt.Y,
                  n.use_xyz && (d.Z = r.Pt.Z),
                  h = r.Pt.X > o.Pt.X) : s.Pt.X >= c && s.Pt.X <= f ? (d.X = s.Pt.X,
                  d.Y = s.Pt.Y,
                  n.use_xyz && (d.Z = s.Pt.Z),
                  h = s.Pt.X > l.Pt.X) : o.Pt.X >= c && o.Pt.X <= f ? (d.X = o.Pt.X,
                  d.Y = o.Pt.Y,
                  n.use_xyz && (d.Z = o.Pt.Z),
                  h = o.Pt.X > r.Pt.X) : (d.X = l.Pt.X,
                  d.Y = l.Pt.Y,
                  n.use_xyz && (d.Z = l.Pt.Z),
                  h = l.Pt.X > s.Pt.X),
                  t.OutPt1 = r,
                  t.OutPt2 = s,
                  this.JoinHorz(r, o, s, l, d, h)
              }
              for (o = r.Next; n.IntPoint.op_Equality(o.Pt, r.Pt) && o !== r; )
                  o = o.Next;
              var y = o.Pt.Y > r.Pt.Y || !n.ClipperBase.SlopesEqual(r.Pt, o.Pt, t.OffPt, this.m_UseFullRange);
              if (y) {
                  for (o = r.Prev; n.IntPoint.op_Equality(o.Pt, r.Pt) && o !== r; )
                      o = o.Prev;
                  if (o.Pt.Y > r.Pt.Y || !n.ClipperBase.SlopesEqual(r.Pt, o.Pt, t.OffPt, this.m_UseFullRange))
                      return !1
              }
              for (l = s.Next; n.IntPoint.op_Equality(l.Pt, s.Pt) && l !== s; )
                  l = l.Next;
              var m = l.Pt.Y > s.Pt.Y || !n.ClipperBase.SlopesEqual(s.Pt, l.Pt, t.OffPt, this.m_UseFullRange);
              if (m) {
                  for (l = s.Prev; n.IntPoint.op_Equality(l.Pt, s.Pt) && l !== s; )
                      l = l.Prev;
                  if (l.Pt.Y > s.Pt.Y || !n.ClipperBase.SlopesEqual(s.Pt, l.Pt, t.OffPt, this.m_UseFullRange))
                      return !1
              }
              return o !== r && l !== s && o !== l && (e !== i || y !== m) && (y ? (o = this.DupOutPt(r, !1),
              l = this.DupOutPt(s, !0),
              r.Prev = s,
              s.Next = r,
              o.Next = l,
              l.Prev = o,
              t.OutPt1 = r,
              t.OutPt2 = o,
              !0) : (o = this.DupOutPt(r, !0),
              l = this.DupOutPt(s, !1),
              r.Next = s,
              s.Prev = r,
              o.Prev = l,
              l.Next = o,
              t.OutPt1 = r,
              t.OutPt2 = o,
              !0))
          }
          ,
          n.Clipper.GetBounds = function(t) {
              for (var e = 0, i = t.length; e < i && 0 === t[e].length; )
                  e++;
              if (e === i)
                  return new n.IntRect(0,0,0,0);
              var r = new n.IntRect;
              for (r.left = t[e][0].X,
              r.right = r.left,
              r.top = t[e][0].Y,
              r.bottom = r.top; e < i; e++)
                  for (var o = 0, s = t[e].length; o < s; o++)
                      t[e][o].X < r.left ? r.left = t[e][o].X : t[e][o].X > r.right && (r.right = t[e][o].X),
                      t[e][o].Y < r.top ? r.top = t[e][o].Y : t[e][o].Y > r.bottom && (r.bottom = t[e][o].Y);
              return r
          }
          ,
          n.Clipper.prototype.GetBounds2 = function(t) {
              var e = t
                , i = new n.IntRect;
              for (i.left = t.Pt.X,
              i.right = t.Pt.X,
              i.top = t.Pt.Y,
              i.bottom = t.Pt.Y,
              t = t.Next; t !== e; )
                  t.Pt.X < i.left && (i.left = t.Pt.X),
                  t.Pt.X > i.right && (i.right = t.Pt.X),
                  t.Pt.Y < i.top && (i.top = t.Pt.Y),
                  t.Pt.Y > i.bottom && (i.bottom = t.Pt.Y),
                  t = t.Next;
              return i
          }
          ,
          n.Clipper.PointInPolygon = function(t, e) {
              var n = 0
                , i = e.length;
              if (i < 3)
                  return 0;
              for (var r = e[0], o = 1; o <= i; ++o) {
                  var s = o === i ? e[0] : e[o];
                  if (s.Y === t.Y && (s.X === t.X || r.Y === t.Y && s.X > t.X === r.X < t.X))
                      return -1;
                  if (r.Y < t.Y !== s.Y < t.Y)
                      if (r.X >= t.X)
                          if (s.X > t.X)
                              n = 1 - n;
                          else {
                              if (0 === (l = (r.X - t.X) * (s.Y - t.Y) - (s.X - t.X) * (r.Y - t.Y)))
                                  return -1;
                              l > 0 === s.Y > r.Y && (n = 1 - n)
                          }
                      else if (s.X > t.X) {
                          var l;
                          if (0 === (l = (r.X - t.X) * (s.Y - t.Y) - (s.X - t.X) * (r.Y - t.Y)))
                              return -1;
                          l > 0 === s.Y > r.Y && (n = 1 - n)
                      }
                  r = s
              }
              return n
          }
          ,
          n.Clipper.prototype.PointInPolygon = function(t, e) {
              var n = 0
                , i = e
                , r = t.X
                , o = t.Y
                , s = e.Pt.X
                , l = e.Pt.Y;
              do {
                  var a = (e = e.Next).Pt.X
                    , u = e.Pt.Y;
                  if (u === o && (a === r || l === o && a > r === s < r))
                      return -1;
                  if (l < o !== u < o)
                      if (s >= r)
                          if (a > r)
                              n = 1 - n;
                          else {
                              if (0 === (p = (s - r) * (u - o) - (a - r) * (l - o)))
                                  return -1;
                              p > 0 === u > l && (n = 1 - n)
                          }
                      else if (a > r) {
                          var p;
                          if (0 === (p = (s - r) * (u - o) - (a - r) * (l - o)))
                              return -1;
                          p > 0 === u > l && (n = 1 - n)
                      }
                  s = a,
                  l = u
              } while (i !== e);
              return n
          }
          ,
          n.Clipper.prototype.Poly2ContainsPoly1 = function(t, e) {
              var n = t;
              do {
                  var i = this.PointInPolygon(n.Pt, e);
                  if (i >= 0)
                      return i > 0;
                  n = n.Next
              } while (n !== t);
              return !0
          }
          ,
          n.Clipper.prototype.FixupFirstLefts1 = function(t, e) {
              for (var n = 0, i = this.m_PolyOuts.length; n < i; n++) {
                  var r = this.m_PolyOuts[n];
                  if (null !== r.Pts && null !== r.FirstLeft)
                      this.ParseFirstLeft(r.FirstLeft) === t && this.Poly2ContainsPoly1(r.Pts, e.Pts) && (r.FirstLeft = e)
              }
          }
          ,
          n.Clipper.prototype.FixupFirstLefts2 = function(t, e) {
              for (var n = 0, i = this.m_PolyOuts, r = i.length, o = i[n]; n < r; o = i[++n])
                  o.FirstLeft === t && (o.FirstLeft = e)
          }
          ,
          n.Clipper.ParseFirstLeft = function(t) {
              for (; null !== t && null === t.Pts; )
                  t = t.FirstLeft;
              return t
          }
          ,
          n.Clipper.prototype.JoinCommonEdges = function() {
              for (var t = 0, e = this.m_Joins.length; t < e; t++) {
                  var i, r = this.m_Joins[t], o = this.GetOutRec(r.OutPt1.Idx), s = this.GetOutRec(r.OutPt2.Idx);
                  if (null !== o.Pts && null !== s.Pts)
                      if (!o.IsOpen && !s.IsOpen)
                          if (i = o === s ? o : this.Param1RightOfParam2(o, s) ? s : this.Param1RightOfParam2(s, o) ? o : this.GetLowermostRec(o, s),
                          this.JoinPoints(r, o, s))
                              if (o === s) {
                                  if (o.Pts = r.OutPt1,
                                  o.BottomPt = null,
                                  (s = this.CreateOutRec()).Pts = r.OutPt2,
                                  this.UpdateOutPtIdxs(s),
                                  this.m_UsingPolyTree)
                                      for (var l = 0, a = this.m_PolyOuts.length; l < a - 1; l++) {
                                          var u = this.m_PolyOuts[l];
                                          null !== u.Pts && n.Clipper.ParseFirstLeft(u.FirstLeft) === o && u.IsHole != o.IsHole && (this.Poly2ContainsPoly1(u.Pts, r.OutPt2) && (u.FirstLeft = s))
                                      }
                                  this.Poly2ContainsPoly1(s.Pts, o.Pts) ? (s.IsHole = !o.IsHole,
                                  s.FirstLeft = o,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(s, o),
                                  (s.IsHole ^ this.ReverseSolution) == this.Area(s) > 0 && this.ReversePolyPtLinks(s.Pts)) : this.Poly2ContainsPoly1(o.Pts, s.Pts) ? (s.IsHole = o.IsHole,
                                  o.IsHole = !s.IsHole,
                                  s.FirstLeft = o.FirstLeft,
                                  o.FirstLeft = s,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(o, s),
                                  (o.IsHole ^ this.ReverseSolution) == this.Area(o) > 0 && this.ReversePolyPtLinks(o.Pts)) : (s.IsHole = o.IsHole,
                                  s.FirstLeft = o.FirstLeft,
                                  this.m_UsingPolyTree && this.FixupFirstLefts1(o, s))
                              } else
                                  s.Pts = null,
                                  s.BottomPt = null,
                                  s.Idx = o.Idx,
                                  o.IsHole = i.IsHole,
                                  i === s && (o.FirstLeft = s.FirstLeft),
                                  s.FirstLeft = o,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(s, o)
              }
          }
          ,
          n.Clipper.prototype.UpdateOutPtIdxs = function(t) {
              var e = t.Pts;
              do {
                  e.Idx = t.Idx,
                  e = e.Prev
              } while (e !== t.Pts)
          }
          ,
          n.Clipper.prototype.DoSimplePolygons = function() {
              for (var t = 0; t < this.m_PolyOuts.length; ) {
                  var e = this.m_PolyOuts[t++]
                    , i = e.Pts;
                  if (null !== i && !e.IsOpen)
                      do {
                          for (var r = i.Next; r !== e.Pts; ) {
                              if (n.IntPoint.op_Equality(i.Pt, r.Pt) && r.Next !== i && r.Prev !== i) {
                                  var o = i.Prev
                                    , s = r.Prev;
                                  i.Prev = s,
                                  s.Next = i,
                                  r.Prev = o,
                                  o.Next = r,
                                  e.Pts = i;
                                  var l = this.CreateOutRec();
                                  l.Pts = r,
                                  this.UpdateOutPtIdxs(l),
                                  this.Poly2ContainsPoly1(l.Pts, e.Pts) ? (l.IsHole = !e.IsHole,
                                  l.FirstLeft = e,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(l, e)) : this.Poly2ContainsPoly1(e.Pts, l.Pts) ? (l.IsHole = e.IsHole,
                                  e.IsHole = !l.IsHole,
                                  l.FirstLeft = e.FirstLeft,
                                  e.FirstLeft = l,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(e, l)) : (l.IsHole = e.IsHole,
                                  l.FirstLeft = e.FirstLeft,
                                  this.m_UsingPolyTree && this.FixupFirstLefts1(e, l)),
                                  r = i
                              }
                              r = r.Next
                          }
                          i = i.Next
                      } while (i !== e.Pts)
              }
          }
          ,
          n.Clipper.Area = function(t) {
              var e = t.length;
              if (e < 3)
                  return 0;
              for (var n = 0, i = 0, r = e - 1; i < e; ++i)
                  n += (t[r].X + t[i].X) * (t[r].Y - t[i].Y),
                  r = i;
              return .5 * -n
          }
          ,
          n.Clipper.prototype.Area = function(t) {
              var e = t.Pts;
              if (null === e)
                  return 0;
              var n = 0;
              do {
                  n += (e.Prev.Pt.X + e.Pt.X) * (e.Prev.Pt.Y - e.Pt.Y),
                  e = e.Next
              } while (e !== t.Pts);
              return .5 * n
          }
          ,
          n.Clipper.SimplifyPolygon = function(t, e) {
              var i = new Array
                , r = new n.Clipper(0);
              return r.StrictlySimple = !0,
              r.AddPath(t, n.PolyType.ptSubject, !0),
              r.Execute(n.ClipType.ctUnion, i, e, e),
              i
          }
          ,
          n.Clipper.SimplifyPolygons = function(t, e) {
              "undefined" === typeof e && (e = n.PolyFillType.pftEvenOdd);
              var i = new Array
                , r = new n.Clipper(0);
              return r.StrictlySimple = !0,
              r.AddPaths(t, n.PolyType.ptSubject, !0),
              r.Execute(n.ClipType.ctUnion, i, e, e),
              i
          }
          ,
          n.Clipper.DistanceSqrd = function(t, e) {
              var n = t.X - e.X
                , i = t.Y - e.Y;
              return n * n + i * i
          }
          ,
          n.Clipper.DistanceFromLineSqrd = function(t, e, n) {
              var i = e.Y - n.Y
                , r = n.X - e.X
                , o = i * e.X + r * e.Y;
              return (o = i * t.X + r * t.Y - o) * o / (i * i + r * r)
          }
          ,
          n.Clipper.SlopesNearCollinear = function(t, e, i, r) {
              return Math.abs(t.X - e.X) > Math.abs(t.Y - e.Y) ? t.X > e.X == t.X < i.X ? n.Clipper.DistanceFromLineSqrd(t, e, i) < r : e.X > t.X == e.X < i.X ? n.Clipper.DistanceFromLineSqrd(e, t, i) < r : n.Clipper.DistanceFromLineSqrd(i, t, e) < r : t.Y > e.Y == t.Y < i.Y ? n.Clipper.DistanceFromLineSqrd(t, e, i) < r : e.Y > t.Y == e.Y < i.Y ? n.Clipper.DistanceFromLineSqrd(e, t, i) < r : n.Clipper.DistanceFromLineSqrd(i, t, e) < r
          }
          ,
          n.Clipper.PointsAreClose = function(t, e, n) {
              var i = t.X - e.X
                , r = t.Y - e.Y;
              return i * i + r * r <= n
          }
          ,
          n.Clipper.ExcludeOp = function(t) {
              var e = t.Prev;
              return e.Next = t.Next,
              t.Next.Prev = e,
              e.Idx = 0,
              e
          }
          ,
          n.Clipper.CleanPolygon = function(t, e) {
              "undefined" === typeof e && (e = 1.415);
              var i = t.length;
              if (0 === i)
                  return new Array;
              for (var r = new Array(i), o = 0; o < i; ++o)
                  r[o] = new n.OutPt;
              for (o = 0; o < i; ++o)
                  r[o].Pt = t[o],
                  r[o].Next = r[(o + 1) % i],
                  r[o].Next.Prev = r[o],
                  r[o].Idx = 0;
              for (var s = e * e, l = r[0]; 0 === l.Idx && l.Next !== l.Prev; )
                  n.Clipper.PointsAreClose(l.Pt, l.Prev.Pt, s) ? (l = n.Clipper.ExcludeOp(l),
                  i--) : n.Clipper.PointsAreClose(l.Prev.Pt, l.Next.Pt, s) ? (n.Clipper.ExcludeOp(l.Next),
                  l = n.Clipper.ExcludeOp(l),
                  i -= 2) : n.Clipper.SlopesNearCollinear(l.Prev.Pt, l.Pt, l.Next.Pt, s) ? (l = n.Clipper.ExcludeOp(l),
                  i--) : (l.Idx = 1,
                  l = l.Next);
              i < 3 && (i = 0);
              var a = new Array(i);
              for (o = 0; o < i; ++o)
                  a[o] = new n.IntPoint(l.Pt),
                  l = l.Next;
              return r = null,
              a
          }
          ,
          n.Clipper.CleanPolygons = function(t, e) {
              for (var i = new Array(t.length), r = 0, o = t.length; r < o; r++)
                  i[r] = n.Clipper.CleanPolygon(t[r], e);
              return i
          }
          ,
          n.Clipper.Minkowski = function(t, e, i, r) {
              var o = r ? 1 : 0
                , s = t.length
                , l = e.length
                , a = new Array;
              if (i)
                  for (var u = 0; u < l; u++) {
                      for (var p = new Array(s), h = 0, c = t.length, f = t[h]; h < c; f = t[++h])
                          p[h] = new n.IntPoint(e[u].X + f.X,e[u].Y + f.Y);
                      a.push(p)
                  }
              else
                  for (u = 0; u < l; u++) {
                      for (p = new Array(s),
                      h = 0,
                      c = t.length,
                      f = t[h]; h < c; f = t[++h])
                          p[h] = new n.IntPoint(e[u].X - f.X,e[u].Y - f.Y);
                      a.push(p)
                  }
              var d = new Array;
              for (u = 0; u < l - 1 + o; u++)
                  for (h = 0; h < s; h++) {
                      var y = new Array;
                      y.push(a[u % l][h % s]),
                      y.push(a[(u + 1) % l][h % s]),
                      y.push(a[(u + 1) % l][(h + 1) % s]),
                      y.push(a[u % l][(h + 1) % s]),
                      n.Clipper.Orientation(y) || y.reverse(),
                      d.push(y)
                  }
              return d
          }
          ,
          n.Clipper.MinkowskiSum = function(t, e, i) {
              if (e[0]instanceof Array) {
                  u = e;
                  for (var r = new n.Paths, o = (l = new n.Clipper,
                  0); o < u.length; ++o) {
                      var s = n.Clipper.Minkowski(t, u[o], !0, i);
                      if (l.AddPaths(s, n.PolyType.ptSubject, !0),
                      i) {
                          a = n.Clipper.TranslatePath(u[o], t[0]);
                          l.AddPath(a, n.PolyType.ptClip, !0)
                      }
                  }
                  return l.Execute(n.ClipType.ctUnion, r, n.PolyFillType.pftNonZero, n.PolyFillType.pftNonZero),
                  r
              }
              var l, a = e, u = n.Clipper.Minkowski(t, a, !0, i);
              return (l = new n.Clipper).AddPaths(u, n.PolyType.ptSubject, !0),
              l.Execute(n.ClipType.ctUnion, u, n.PolyFillType.pftNonZero, n.PolyFillType.pftNonZero),
              u
          }
          ,
          n.Clipper.TranslatePath = function(t, e) {
              for (var i = new n.Path, r = 0; r < t.length; r++)
                  i.push(new n.IntPoint(t[r].X + e.X,t[r].Y + e.Y));
              return i
          }
          ,
          n.Clipper.MinkowskiDiff = function(t, e) {
              var i = n.Clipper.Minkowski(t, e, !1, !0)
                , r = new n.Clipper;
              return r.AddPaths(i, n.PolyType.ptSubject, !0),
              r.Execute(n.ClipType.ctUnion, i, n.PolyFillType.pftNonZero, n.PolyFillType.pftNonZero),
              i
          }
          ,
          n.Clipper.PolyTreeToPaths = function(t) {
              var e = new Array;
              return n.Clipper.AddPolyNodeToPaths(t, n.Clipper.NodeType.ntAny, e),
              e
          }
          ,
          n.Clipper.AddPolyNodeToPaths = function(t, e, i) {
              var r = !0;
              switch (e) {
              case n.Clipper.NodeType.ntOpen:
                  return;
              case n.Clipper.NodeType.ntClosed:
                  r = !t.IsOpen
              }
              t.m_polygon.length > 0 && r && i.push(t.m_polygon);
              for (var o = 0, s = t.Childs(), l = s.length, a = s[o]; o < l; a = s[++o])
                  n.Clipper.AddPolyNodeToPaths(a, e, i)
          }
          ,
          n.Clipper.OpenPathsFromPolyTree = function(t) {
              for (var e = new n.Paths, i = 0, r = t.ChildCount(); i < r; i++)
                  t.Childs()[i].IsOpen && e.push(t.Childs()[i].m_polygon);
              return e
          }
          ,
          n.Clipper.ClosedPathsFromPolyTree = function(t) {
              var e = new n.Paths;
              return n.Clipper.AddPolyNodeToPaths(t, n.Clipper.NodeType.ntClosed, e),
              e
          }
          ,
          O(n.Clipper, n.ClipperBase),
          n.Clipper.NodeType = {
              ntAny: 0,
              ntOpen: 1,
              ntClosed: 2
          },
          n.ClipperOffset = function(t, e) {
              "undefined" === typeof t && (t = 2),
              "undefined" === typeof e && (e = n.ClipperOffset.def_arc_tolerance),
              this.m_destPolys = new n.Paths,
              this.m_srcPoly = new n.Path,
              this.m_destPoly = new n.Path,
              this.m_normals = new Array,
              this.m_delta = 0,
              this.m_sinA = 0,
              this.m_sin = 0,
              this.m_cos = 0,
              this.m_miterLim = 0,
              this.m_StepsPerRad = 0,
              this.m_lowest = new n.IntPoint,
              this.m_polyNodes = new n.PolyNode,
              this.MiterLimit = t,
              this.ArcTolerance = e,
              this.m_lowest.X = -1
          }
          ,
          n.ClipperOffset.two_pi = 6.28318530717959,
          n.ClipperOffset.def_arc_tolerance = .25,
          n.ClipperOffset.prototype.Clear = function() {
              n.Clear(this.m_polyNodes.Childs()),
              this.m_lowest.X = -1
          }
          ,
          n.ClipperOffset.Round = n.Clipper.Round,
          n.ClipperOffset.prototype.AddPath = function(t, e, i) {
              var r = t.length - 1;
              if (!(r < 0)) {
                  var o = new n.PolyNode;
                  if (o.m_jointype = e,
                  o.m_endtype = i,
                  i === n.EndType.etClosedLine || i === n.EndType.etClosedPolygon)
                      for (; r > 0 && n.IntPoint.op_Equality(t[0], t[r]); )
                          r--;
                  o.m_polygon.push(t[0]);
                  for (var s = 0, l = 0, a = 1; a <= r; a++)
                      n.IntPoint.op_Inequality(o.m_polygon[s], t[a]) && (s++,
                      o.m_polygon.push(t[a]),
                      (t[a].Y > o.m_polygon[l].Y || t[a].Y === o.m_polygon[l].Y && t[a].X < o.m_polygon[l].X) && (l = s));
                  if (!(i === n.EndType.etClosedPolygon && s < 2) && (this.m_polyNodes.AddChild(o),
                  i === n.EndType.etClosedPolygon))
                      if (this.m_lowest.X < 0)
                          this.m_lowest = new n.IntPoint(this.m_polyNodes.ChildCount() - 1,l);
                      else {
                          var u = this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];
                          (o.m_polygon[l].Y > u.Y || o.m_polygon[l].Y === u.Y && o.m_polygon[l].X < u.X) && (this.m_lowest = new n.IntPoint(this.m_polyNodes.ChildCount() - 1,l))
                      }
              }
          }
          ,
          n.ClipperOffset.prototype.AddPaths = function(t, e, n) {
              for (var i = 0, r = t.length; i < r; i++)
                  this.AddPath(t[i], e, n)
          }
          ,
          n.ClipperOffset.prototype.FixOrientations = function() {
              if (this.m_lowest.X >= 0 && !n.Clipper.Orientation(this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon))
                  for (var t = 0; t < this.m_polyNodes.ChildCount(); t++) {
                      ((e = this.m_polyNodes.Childs()[t]).m_endtype === n.EndType.etClosedPolygon || e.m_endtype === n.EndType.etClosedLine && n.Clipper.Orientation(e.m_polygon)) && e.m_polygon.reverse()
                  }
              else
                  for (t = 0; t < this.m_polyNodes.ChildCount(); t++) {
                      var e;
                      (e = this.m_polyNodes.Childs()[t]).m_endtype !== n.EndType.etClosedLine || n.Clipper.Orientation(e.m_polygon) || e.m_polygon.reverse()
                  }
          }
          ,
          n.ClipperOffset.GetUnitNormal = function(t, e) {
              var i = e.X - t.X
                , r = e.Y - t.Y;
              if (0 === i && 0 === r)
                  return new n.DoublePoint(0,0);
              var o = 1 / Math.sqrt(i * i + r * r);
              return i *= o,
              r *= o,
              new n.DoublePoint(r,-i)
          }
          ,
          n.ClipperOffset.prototype.DoOffset = function(t) {
              if (this.m_destPolys = new Array,
              this.m_delta = t,
              n.ClipperBase.near_zero(t))
                  for (var e = 0; e < this.m_polyNodes.ChildCount(); e++) {
                      (o = this.m_polyNodes.Childs()[e]).m_endtype === n.EndType.etClosedPolygon && this.m_destPolys.push(o.m_polygon)
                  }
              else {
                  var i;
                  this.MiterLimit > 2 ? this.m_miterLim = 2 / (this.MiterLimit * this.MiterLimit) : this.m_miterLim = .5,
                  i = this.ArcTolerance <= 0 ? n.ClipperOffset.def_arc_tolerance : this.ArcTolerance > Math.abs(t) * n.ClipperOffset.def_arc_tolerance ? Math.abs(t) * n.ClipperOffset.def_arc_tolerance : this.ArcTolerance;
                  var r = 3.14159265358979 / Math.acos(1 - i / Math.abs(t));
                  this.m_sin = Math.sin(n.ClipperOffset.two_pi / r),
                  this.m_cos = Math.cos(n.ClipperOffset.two_pi / r),
                  this.m_StepsPerRad = r / n.ClipperOffset.two_pi,
                  t < 0 && (this.m_sin = -this.m_sin);
                  for (e = 0; e < this.m_polyNodes.ChildCount(); e++) {
                      var o = this.m_polyNodes.Childs()[e];
                      this.m_srcPoly = o.m_polygon;
                      var s = this.m_srcPoly.length;
                      if (!(0 === s || t <= 0 && (s < 3 || o.m_endtype !== n.EndType.etClosedPolygon)))
                          if (this.m_destPoly = new Array,
                          1 !== s) {
                              this.m_normals.length = 0;
                              for (c = 0; c < s - 1; c++)
                                  this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[c], this.m_srcPoly[c + 1]));
                              if (o.m_endtype === n.EndType.etClosedLine || o.m_endtype === n.EndType.etClosedPolygon ? this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[s - 1], this.m_srcPoly[0])) : this.m_normals.push(new n.DoublePoint(this.m_normals[s - 2])),
                              o.m_endtype === n.EndType.etClosedPolygon) {
                                  var l = s - 1;
                                  for (c = 0; c < s; c++)
                                      l = this.OffsetPoint(c, l, o.m_jointype);
                                  this.m_destPolys.push(this.m_destPoly)
                              } else if (o.m_endtype === n.EndType.etClosedLine) {
                                  for (l = s - 1,
                                  c = 0; c < s; c++)
                                      l = this.OffsetPoint(c, l, o.m_jointype);
                                  this.m_destPolys.push(this.m_destPoly),
                                  this.m_destPoly = new Array;
                                  var a = this.m_normals[s - 1];
                                  for (c = s - 1; c > 0; c--)
                                      this.m_normals[c] = new n.DoublePoint(-this.m_normals[c - 1].X,-this.m_normals[c - 1].Y);
                                  this.m_normals[0] = new n.DoublePoint(-a.X,-a.Y),
                                  l = 0;
                                  for (c = s - 1; c >= 0; c--)
                                      l = this.OffsetPoint(c, l, o.m_jointype);
                                  this.m_destPolys.push(this.m_destPoly)
                              } else {
                                  var u;
                                  for (l = 0,
                                  c = 1; c < s - 1; ++c)
                                      l = this.OffsetPoint(c, l, o.m_jointype);
                                  if (o.m_endtype === n.EndType.etOpenButt) {
                                      c = s - 1;
                                      u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[c].X + this.m_normals[c].X * t),n.ClipperOffset.Round(this.m_srcPoly[c].Y + this.m_normals[c].Y * t)),
                                      this.m_destPoly.push(u),
                                      u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[c].X - this.m_normals[c].X * t),n.ClipperOffset.Round(this.m_srcPoly[c].Y - this.m_normals[c].Y * t)),
                                      this.m_destPoly.push(u)
                                  } else {
                                      c = s - 1;
                                      l = s - 2,
                                      this.m_sinA = 0,
                                      this.m_normals[c] = new n.DoublePoint(-this.m_normals[c].X,-this.m_normals[c].Y),
                                      o.m_endtype === n.EndType.etOpenSquare ? this.DoSquare(c, l) : this.DoRound(c, l)
                                  }
                                  for (c = s - 1; c > 0; c--)
                                      this.m_normals[c] = new n.DoublePoint(-this.m_normals[c - 1].X,-this.m_normals[c - 1].Y);
                                  this.m_normals[0] = new n.DoublePoint(-this.m_normals[1].X,-this.m_normals[1].Y);
                                  for (c = (l = s - 1) - 1; c > 0; --c)
                                      l = this.OffsetPoint(c, l, o.m_jointype);
                                  o.m_endtype === n.EndType.etOpenButt ? (u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X - this.m_normals[0].X * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y - this.m_normals[0].Y * t)),
                                  this.m_destPoly.push(u),
                                  u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X + this.m_normals[0].X * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y + this.m_normals[0].Y * t)),
                                  this.m_destPoly.push(u)) : (l = 1,
                                  this.m_sinA = 0,
                                  o.m_endtype === n.EndType.etOpenSquare ? this.DoSquare(0, 1) : this.DoRound(0, 1)),
                                  this.m_destPolys.push(this.m_destPoly)
                              }
                          } else {
                              if (o.m_jointype === n.JoinType.jtRound)
                                  for (var p = 1, h = 0, c = 1; c <= r; c++) {
                                      this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X + p * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y + h * t)));
                                      var f = p;
                                      p = p * this.m_cos - this.m_sin * h,
                                      h = f * this.m_sin + h * this.m_cos
                                  }
                              else {
                                  p = -1,
                                  h = -1;
                                  for (var c = 0; c < 4; ++c)
                                      this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X + p * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y + h * t))),
                                      p < 0 ? p = 1 : h < 0 ? h = 1 : p = -1
                              }
                              this.m_destPolys.push(this.m_destPoly)
                          }
                  }
              }
          }
          ,
          n.ClipperOffset.prototype.Execute = function() {
              var t = arguments
                , e = t[0]instanceof n.PolyTree;
              if (e) {
                  s = t[0],
                  l = t[1];
                  if (s.Clear(),
                  this.FixOrientations(),
                  this.DoOffset(l),
                  (o = new n.Clipper(0)).AddPaths(this.m_destPolys, n.PolyType.ptSubject, !0),
                  l > 0)
                      o.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftPositive, n.PolyFillType.pftPositive);
                  else {
                      u = n.Clipper.GetBounds(this.m_destPolys);
                      if ((a = new n.Path).push(new n.IntPoint(u.left - 10,u.bottom + 10)),
                      a.push(new n.IntPoint(u.right + 10,u.bottom + 10)),
                      a.push(new n.IntPoint(u.right + 10,u.top - 10)),
                      a.push(new n.IntPoint(u.left - 10,u.top - 10)),
                      o.AddPath(a, n.PolyType.ptSubject, !0),
                      o.ReverseSolution = !0,
                      o.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftNegative, n.PolyFillType.pftNegative),
                      1 === s.ChildCount() && s.Childs()[0].ChildCount() > 0) {
                          var i = s.Childs()[0];
                          s.Childs()[0] = i.Childs()[0],
                          s.Childs()[0].m_Parent = s;
                          for (var r = 1; r < i.ChildCount(); r++)
                              s.AddChild(i.Childs()[r])
                      } else
                          s.Clear()
                  }
              } else {
                  var o, s = t[0], l = t[1];
                  if (n.Clear(s),
                  this.FixOrientations(),
                  this.DoOffset(l),
                  (o = new n.Clipper(0)).AddPaths(this.m_destPolys, n.PolyType.ptSubject, !0),
                  l > 0)
                      o.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftPositive, n.PolyFillType.pftPositive);
                  else {
                      var a, u = n.Clipper.GetBounds(this.m_destPolys);
                      (a = new n.Path).push(new n.IntPoint(u.left - 10,u.bottom + 10)),
                      a.push(new n.IntPoint(u.right + 10,u.bottom + 10)),
                      a.push(new n.IntPoint(u.right + 10,u.top - 10)),
                      a.push(new n.IntPoint(u.left - 10,u.top - 10)),
                      o.AddPath(a, n.PolyType.ptSubject, !0),
                      o.ReverseSolution = !0,
                      o.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftNegative, n.PolyFillType.pftNegative),
                      s.length > 0 && s.splice(0, 1)
                  }
              }
          }
          ,
          n.ClipperOffset.prototype.OffsetPoint = function(t, e, i) {
              if (this.m_sinA = this.m_normals[e].X * this.m_normals[t].Y - this.m_normals[t].X * this.m_normals[e].Y,
              Math.abs(this.m_sinA * this.m_delta) < 1) {
                  if (this.m_normals[e].X * this.m_normals[t].X + this.m_normals[t].Y * this.m_normals[e].Y > 0)
                      return this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[e].X * this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[e].Y * this.m_delta))),
                      e
              } else
                  this.m_sinA > 1 ? this.m_sinA = 1 : this.m_sinA < -1 && (this.m_sinA = -1);
              if (this.m_sinA * this.m_delta < 0)
                  this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[e].X * this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[e].Y * this.m_delta))),
                  this.m_destPoly.push(new n.IntPoint(this.m_srcPoly[t])),
                  this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[t].X * this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[t].Y * this.m_delta)));
              else
                  switch (i) {
                  case n.JoinType.jtMiter:
                      var r = this.m_normals[t].X * this.m_normals[e].X + this.m_normals[t].Y * this.m_normals[e].Y + 1;
                      r >= this.m_miterLim ? this.DoMiter(t, e, r) : this.DoSquare(t, e);
                      break;
                  case n.JoinType.jtSquare:
                      this.DoSquare(t, e);
                      break;
                  case n.JoinType.jtRound:
                      this.DoRound(t, e)
                  }
              return e = t
          }
          ,
          n.ClipperOffset.prototype.DoSquare = function(t, e) {
              var i = Math.tan(Math.atan2(this.m_sinA, this.m_normals[e].X * this.m_normals[t].X + this.m_normals[e].Y * this.m_normals[t].Y) / 4);
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_delta * (this.m_normals[e].X - this.m_normals[e].Y * i)),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_delta * (this.m_normals[e].Y + this.m_normals[e].X * i)))),
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_delta * (this.m_normals[t].X + this.m_normals[t].Y * i)),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_delta * (this.m_normals[t].Y - this.m_normals[t].X * i))))
          }
          ,
          n.ClipperOffset.prototype.DoMiter = function(t, e, i) {
              var r = this.m_delta / i;
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + (this.m_normals[e].X + this.m_normals[t].X) * r),n.ClipperOffset.Round(this.m_srcPoly[t].Y + (this.m_normals[e].Y + this.m_normals[t].Y) * r)))
          }
          ,
          n.ClipperOffset.prototype.DoRound = function(t, e) {
              for (var i, r = Math.atan2(this.m_sinA, this.m_normals[e].X * this.m_normals[t].X + this.m_normals[e].Y * this.m_normals[t].Y), o = Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad * Math.abs(r))), 1), s = this.m_normals[e].X, l = this.m_normals[e].Y, a = 0; a < o; ++a)
                  this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + s * this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[t].Y + l * this.m_delta))),
                  i = s,
                  s = s * this.m_cos - this.m_sin * l,
                  l = i * this.m_sin + l * this.m_cos;
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_normals[t].X * this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_normals[t].Y * this.m_delta)))
          }
          ,
          n.Error = function(t) {
              try {
                  throw new Error(t)
              } catch (e) {
                  alert(e.message)
              }
          }
          ,
          n.JS = {},
          n.JS.AreaOfPolygon = function(t, e) {
              return e || (e = 1),
              n.Clipper.Area(t) / (e * e)
          }
          ,
          n.JS.AreaOfPolygons = function(t, e) {
              e || (e = 1);
              for (var i = 0, r = 0; r < t.length; r++)
                  i += n.Clipper.Area(t[r]);
              return i / (e * e)
          }
          ,
          n.JS.BoundsOfPath = function(t, e) {
              return n.JS.BoundsOfPaths([t], e)
          }
          ,
          n.JS.BoundsOfPaths = function(t, e) {
              e || (e = 1);
              var i = n.Clipper.GetBounds(t);
              return i.left /= e,
              i.bottom /= e,
              i.right /= e,
              i.top /= e,
              i
          }
          ,
          n.JS.Clean = function(t, e) {
              if (!(t instanceof Array))
                  return [];
              var i = t[0]instanceof Array;
              t = n.JS.Clone(t);
              if ("number" !== typeof e || null === e)
                  return n.Error("Delta is not a number in Clean()."),
                  t;
              if (0 === t.length || 1 === t.length && 0 === t[0].length || e < 0)
                  return t;
              i || (t = [t]);
              for (var r, o, s, l, a, u, p, h = t.length, c = [], f = 0; f < h; f++)
                  if (0 !== (r = (o = t[f]).length))
                      if (r < 3)
                          s = o,
                          c.push(s);
                      else {
                          for (s = o,
                          l = e * e,
                          a = o[0],
                          u = 1,
                          p = 1; p < r; p++)
                              (o[p].X - a.X) * (o[p].X - a.X) + (o[p].Y - a.Y) * (o[p].Y - a.Y) <= l || (s[u] = o[p],
                              a = o[p],
                              u++);
                          a = o[u - 1],
                          (o[0].X - a.X) * (o[0].X - a.X) + (o[0].Y - a.Y) * (o[0].Y - a.Y) <= l && u--,
                          u < r && s.splice(u, r - u),
                          s.length && c.push(s)
                      }
              return !i && c.length ? c = c[0] : i || 0 !== c.length ? i && 0 === c.length && (c = [[]]) : c = [],
              c
          }
          ,
          n.JS.Clone = function(t) {
              if (!(t instanceof Array))
                  return [];
              if (0 === t.length)
                  return [];
              if (1 === t.length && 0 === t[0].length)
                  return [[]];
              var e = t[0]instanceof Array;
              e || (t = [t]);
              var n, i, r, o, s = t.length, l = new Array(s);
              for (i = 0; i < s; i++) {
                  for (n = t[i].length,
                  o = new Array(n),
                  r = 0; r < n; r++)
                      o[r] = {
                          X: t[i][r].X,
                          Y: t[i][r].Y
                      };
                  l[i] = o
              }
              return e || (l = l[0]),
              l
          }
          ,
          n.JS.Lighten = function(t, e) {
              if (!(t instanceof Array))
                  return [];
              if ("number" !== typeof e || null === e)
                  return n.Error("Tolerance is not a number in Lighten()."),
                  n.JS.Clone(t);
              if (0 === t.length || 1 === t.length && 0 === t[0].length || e < 0)
                  return n.JS.Clone(t);
              var i, r, o, s, l, a, u, p, h, c, f, d, y, m, x, _;
              t[0]instanceof Array || (t = [t]);
              var v = t.length
                , g = e * e
                , E = [];
              for (i = 0; i < v; i++)
                  if (0 !== (a = (o = t[i]).length)) {
                      for (s = 0; s < 1e6; s++) {
                          for (l = [],
                          o[(a = o.length) - 1].X !== o[0].X || o[a - 1].Y !== o[0].Y ? (f = 1,
                          o.push({
                              X: o[0].X,
                              Y: o[0].Y
                          }),
                          a = o.length) : f = 0,
                          c = [],
                          r = 0; r < a - 2; r++)
                              u = o[r],
                              h = o[r + 1],
                              p = o[r + 2],
                              x = u.X,
                              _ = u.Y,
                              d = p.X - x,
                              y = p.Y - _,
                              0 === d && 0 === y || ((m = ((h.X - x) * d + (h.Y - _) * y) / (d * d + y * y)) > 1 ? (x = p.X,
                              _ = p.Y) : m > 0 && (x += d * m,
                              _ += y * m)),
                              (d = h.X - x) * d + (y = h.Y - _) * y <= g && (c[r + 1] = 1,
                              r++);
                          for (l.push({
                              X: o[0].X,
                              Y: o[0].Y
                          }),
                          r = 1; r < a - 1; r++)
                              c[r] || l.push({
                                  X: o[r].X,
                                  Y: o[r].Y
                              });
                          if (l.push({
                              X: o[a - 1].X,
                              Y: o[a - 1].Y
                          }),
                          f && o.pop(),
                          !c.length)
                              break;
                          o = l
                      }
                      l[(a = l.length) - 1].X === l[0].X && l[a - 1].Y === l[0].Y && l.pop(),
                      l.length > 2 && E.push(l)
                  }
              return t[0]instanceof Array || (E = E[0]),
              "undefined" == typeof E && (E = [[]]),
              E
          }
          ,
          n.JS.PerimeterOfPath = function(t, e, n) {
              if ("undefined" === typeof t)
                  return 0;
              var i, r, o = Math.sqrt, s = 0, l = 0, a = 0, u = 0, p = 0, h = t.length;
              if (h < 2)
                  return 0;
              for (e && (t[h] = t[0],
              h++); --h; )
                  l = (i = t[h]).X,
                  a = i.Y,
                  s += o((l - (u = (r = t[h - 1]).X)) * (l - u) + (a - (p = r.Y)) * (a - p));
              return e && t.pop(),
              s / n
          }
          ,
          n.JS.PerimeterOfPaths = function(t, e, i) {
              i || (i = 1);
              for (var r = 0, o = 0; o < t.length; o++)
                  r += n.JS.PerimeterOfPath(t[o], e, i);
              return r
          }
          ,
          n.JS.ScaleDownPath = function(t, e) {
              var n, i;
              for (e || (e = 1),
              n = t.length; n--; )
                  (i = t[n]).X = i.X / e,
                  i.Y = i.Y / e
          }
          ,
          n.JS.ScaleDownPaths = function(t, e) {
              var n, i, r;
              for (e || (e = 1),
              n = t.length; n--; )
                  for (i = t[n].length; i--; )
                      (r = t[n][i]).X = r.X / e,
                      r.Y = r.Y / e
          }
          ,
          n.JS.ScaleUpPath = function(t, e) {
              var n, i, r = Math.round;
              for (e || (e = 1),
              n = t.length; n--; )
                  (i = t[n]).X = r(i.X * e),
                  i.Y = r(i.Y * e)
          }
          ,
          n.JS.ScaleUpPaths = function(t, e) {
              var n, i, r, o = Math.round;
              for (e || (e = 1),
              n = t.length; n--; )
                  for (i = t[n].length; i--; )
                      (r = t[n][i]).X = o(r.X * e),
                      r.Y = o(r.Y * e)
          }
          ,
          n.ExPolygons = function() {
              return []
          }
          ,
          n.ExPolygon = function() {
              this.outer = null,
              this.holes = null
          }
          ,
          n.JS.AddOuterPolyNodeToExPolygons = function(t, e) {
              var i = new n.ExPolygon;
              i.outer = t.Contour();
              var r, o, s, l, a, u, p = t.Childs(), h = p.length;
              for (i.holes = new Array(h),
              s = 0; s < h; s++)
                  for (r = p[s],
                  i.holes[s] = r.Contour(),
                  l = 0,
                  u = (a = r.Childs()).length; l < u; l++)
                      o = a[l],
                      n.JS.AddOuterPolyNodeToExPolygons(o, e);
              e.push(i)
          }
          ,
          n.JS.ExPolygonsToPaths = function(t) {
              var e, i, r, o, s = new n.Paths;
              for (e = 0,
              r = t.length; e < r; e++)
                  for (s.push(t[e].outer),
                  i = 0,
                  o = t[e].holes.length; i < o; i++)
                      s.push(t[e].holes[i]);
              return s
          }
          ,
          n.JS.PolyTreeToExPolygons = function(t) {
              var e, i, r, o, s = new n.ExPolygons;
              for (i = 0,
              o = (r = t.Childs()).length; i < o; i++)
                  e = r[i],
                  n.JS.AddOuterPolyNodeToExPolygons(e, s);
              return s
          }
      }()
  },
  358: function(t, e) {
      ClipperLib.Error = function(t) {
          "undefined" !== typeof window && window.onerror && window.onerror(t, "clipper.js", 0, 0)
      }
  },
  45: function(t, e, n) {
      (function(e) {
          const n = function() {
              const t = t=>t * t
                , e = (t,e)=>Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                , n = (t,e)=>({
                  x: t.x - e.x,
                  y: t.y - e.y
              })
                , i = function(t, e) {
                  const n = e / r(t) || 0;
                  return {
                      x: t.x * n,
                      y: t.y * n
                  }
              };
              var r = t=>e(t, {
                  x: 0,
                  y: 0
              });
              return {
                  clamp: (t,e,n)=>Math.min(n, Math.max(e, t)),
                  distance: e,
                  sub: n,
                  scaleTo: i,
                  distToSegment: function(n, i, r) {
                      const o = ((e,n)=>t(e.x - n.x) + t(e.y - n.y))(i, r);
                      if (0 === o)
                          return {
                              distance: e(n, i),
                              point: i
                          };
                      const s = ((n.x - i.x) * (r.x - i.x) + (n.y - i.y) * (r.y - i.y)) / o;
                      switch (!1) {
                      case !(s < 0):
                          return {
                              distance: e(n, i),
                              point: i
                          };
                      case !(s > 1):
                          return {
                              distance: e(n, r),
                              point: r
                          };
                      default:
                          var l = {
                              x: i.x + s * (r.x - i.x),
                              y: i.y + s * (r.y - i.y)
                          };
                          return {
                              distance: e(n, l),
                              point: l
                          }
                      }
                  },
                  magnitude: r,
                  moveToward: (t,e,r)=>{
                      return o = t,
                      s = i(n(e, t), r),
                      {
                          x: o.x + s.x,
                          y: o.y + s.y
                      };
                      var o, s
                  }
                  ,
                  normalize: t=>i(t, 1),
                  pointAtDistance: (t,e,n,i)=>({
                      x: t.x + n * (e.x - t.x) / i,
                      y: t.y + n * (e.y - t.y) / i
                  }),
                  distance3D: (t,e)=>Math.hypot(t.x - e.x, t.y - e.y, t.z - e.z),
                  pointAtDistance3D: (t,e,n,i)=>({
                      x: t.x + n * (e.x - t.x) / i,
                      y: t.y + n * (e.y - t.y) / i,
                      z: t.z + n * (e.z - t.z) / i
                  }),
                  pointOnSegmentAtZ: function(t, e, n) {
                      const i = (n - t.z) / (e.z - t.z);
                      return {
                          x: t.x + i * (e.x - t.x),
                          y: t.y + i * (e.y - t.y),
                          z: n
                      }
                  },
                  BEZIER_MAGIC_NUMBER: .5522847498,
                  closeTo: function(t, e, n) {
                      return null == n && (n = 1e-5),
                      Math.abs(t - e) < n
                  }
              }
          }();
          t.exports = n,
          e.EASEL && (EASEL.math = n)
      }
      ).call(this, n(12))
  },
  57: function(t, e) {
      !function() {
          const t = function(e, n) {
              let i;
              if (null == n)
                  return n;
              if ("object" !== typeof n)
                  return n;
              if (n instanceof Date)
                  return new Date(n);
              if ("[object Array]" === Object.prototype.toString.call(n))
                  return n.map((e=>t(null, e)));
              null != e && "object" === typeof e || (e = {});
              for (let r of Object.keys(n || {}))
                  i = n[r],
                  e[r] = t(e[r], i);
              return e
          };
          EASEL.merge = function(...e) {
              let n = null;
              for (const i of e)
                  n = t(n, i);
              return n
          }
          ,
          EASEL.shallowMerge = function(...t) {
              const e = {};
              for (const n of t)
                  for (const t of Object.keys(n || {})) {
                      const i = n[t];
                      e[t] = i
                  }
              return e
          }
          ,
          EASEL.setIn = function(t, e, n) {
              return 0 === e.length ? n : ((t = EASEL.shallowMerge(t))[e[0]] = EASEL.setIn(t[e[0]], e.slice(1), n),
              t)
          }
          ,
          EASEL.mergeInObj = function(t, e, n) {
              return 0 === e.length ? EASEL.shallowMerge(t, n) : ((t = EASEL.shallowMerge(t))[e[0]] = EASEL.mergeInObj(t[e[0]], e.slice(1), n),
              t)
          }
      }()
  },
  58: function(t, e) {
      EASEL.units = function() {
          const t = {}
            , e = {
              in: 1,
              mm: 25.4
          }
            , n = {
              in: 3,
              mm: 1
          }
            , i = ()=>EASEL.unitSelectors.getPreferredUnit(EASEL.store.getState())
            , r = t=>e[o((t=>t.split("/")[0])(t))]
            , o = function(t) {
              switch (t.trim()) {
              case "in":
              case "inch":
              case "inches":
              case '"':
                  return "in";
              case "mm":
                  return "mm"
              }
          }
            , s = (t,e)=>parseFloat((t * r(e)).toFixed(n[e]));
          return t.defaultPrecision = n,
          t.normalizeUnitName = o,
          t.preferredUnitsPerInch = ()=>e[i()],
          t.inchesPerPreferredUnit = ()=>1 / e[i()],
          t.unitsPerInch = r,
          t.inchesPerUnit = t=>1 / r(t),
          t.unitConversionMultiplyValue = function(t) {
              return "in" === t ? 1 / e.mm : e.mm
          }
          ,
          t.convertToUnit = function(t, e, n) {
              return t * EASEL.units.inchesPerUnit(e) * r(n)
          }
          ,
          t.convertFromIn = s,
          t.formatDimensions = (t,e)=>t.filter(Boolean).map((t=>s(t, e))).join(" \xd7 ") + " " + e,
          t
      }()
  },
  59: function(t, e) {
      EASEL.bitGroups = {
          upcut: "Upcut",
          straight: "Straight cut",
          downcut: "Downcut",
          compression: "Compression",
          v: "V"
      }
  },
  60: function(t, e) {
      EASEL.caching = function(t) {
          let e = null;
          return function() {
              return null != t && (e = t(),
              t = null),
              e
          }
      }
  },
  61: function(t, e) {
      EASEL.cutUtils = {
          outlineOffset: function(t, e) {
              let n;
              return "inside" === t.outlineStyle ? n = -1 : "on-path" === t.outlineStyle ? n = 0 : "outside" === t.outlineStyle && (n = 1),
              n * e / 2
          }
      }
  },
  62: function(t, e) {
      EASEL.flatten = function(t) {
          let e = [];
          for (let n = 0; n < t.length; n += 1e4)
              e = e.concat(...t.slice(n, n + 1e4));
          return e
      }
  },
  63: function(t, e) {
      EASEL.matrix = function(t, e, n, i, r, o) {
          null == t && (t = 1),
          null == e && (e = 0),
          null == n && (n = 0),
          null == i && (i = 1),
          null == r && (r = 0),
          null == o && (o = 0);
          const s = {};
          var l = function(s) {
              const [l,a,u,p,h,c] = s.toArray();
              return EASEL.matrix(l * t + u * e, a * t + p * e, l * n + u * i, a * n + p * i, l * r + u * o + h, a * r + p * o + c)
          };
          const a = s=>{
              const l = {
                  x: t * s.x + n * s.y + r,
                  y: e * s.x + i * s.y + o
              };
              return null != s.z && (l.z = s.z),
              l
          }
          ;
          return s.isIdentity = ()=>1 === t && 0 === e && 0 === n && 1 === i && 0 === r && 0 === o,
          s.translatedBy = (t,e)=>l(EASEL.matrix(1, 0, 0, 1, t, e)),
          s.scaledBy = function(t, e) {
              if (!isFinite(t) || !isFinite(e))
                  throw new Error(`Inputs to #scaledBy must by numbers: x=${t}, y=${e}`);
              return l(EASEL.matrix(t, 0, 0, e, 0, 0))
          }
          ,
          s.rotatedBy = function(t) {
              const e = Math.cos(t)
                , n = Math.sin(t);
              return l(EASEL.matrix(e, n, -n, e, 0, 0))
          }
          ,
          s.premultipliedBy = l,
          s.transformedPoint = a,
          s.transformedVector = r=>({
              x: t * r.x + n * r.y,
              y: e * r.x + i * r.y
          }),
          s.transformedPath = t=>t.map((t=>a(t))),
          s.inverse = function() {
              const s = t * i - n * e;
              if (0 === s)
                  throw new Error(`#inverse called on non-invertible matrix: [${t}, ${e}, ${n}, ${i}, ${r}, ${o}]`);
              const [l,a,u,p,h,c] = [i, -e, -n, t, n * o - r * i, -(t * o - r * e)];
              return EASEL.matrix(l / s, a / s, u / s, p / s, h / s, c / s)
          }
          ,
          s.toArray = ()=>[t, e, n, i, r, o],
          s
      }
  },
  64: function(t, e) {
      EASEL.path = function(t, e) {
          null == e && (e = {});
          const n = {};
          n.points = t,
          n.props = e;
          const i = ()=>0 === t.length
            , r = ()=>t.length > 1 && EASEL.pathUtils.pointsEqual(t[0], t[t.length - 1])
            , o = ()=>t.length > 1 && !EASEL.pathUtils.pointsEqual(t[0], t[t.length - 1])
            , s = function(e) {
              null == e && (e = 4);
              const n = function(t) {
                  return t.toFixed(e)
              };
              return t.map((t=>`${n(t.x)},${n(t.y)}`)).join(" ")
          }
            , l = EASEL.caching((()=>EASEL.pathOffsetter.area(t)))
            , a = EASEL.caching((()=>EASEL.pathOffsetter.perimeter(t)));
          n.includesPoint = function(e, n) {
              for (const i of t)
                  if (e === i.x && n === i.y)
                      return !0;
              return !1
          }
          ;
          const u = EASEL.caching((function() {
              if (0 === t.length)
                  return null;
              let e = 1 / 0
                , n = 1 / 0
                , i = -1 / 0
                , r = -1 / 0;
              for (const o of t)
                  e > o.x && (e = o.x),
                  n > o.y && (n = o.y),
                  i < o.x && (i = o.x),
                  r < o.y && (r = o.y);
              return {
                  minX: e,
                  minY: n,
                  maxX: i,
                  maxY: r
              }
          }
          ));
          return n.isEmpty = i,
          n.isClosed = r,
          n.isOpen = o,
          n.firstPoint = ()=>t.length > 0 ? t[0] : null,
          n.lastPoint = ()=>t.length > 0 ? t[t.length - 1] : null,
          n.area = l,
          n.perimeter = a,
          n.toString = ()=>`[${t.map((t=>null != t.z ? `{x: ${t.x}, y: ${t.y}, z: ${t.z}}` : `{x: ${t.x}, y: ${t.y}}`)).join(", ")}]`,
          n.svgPathData = function(t) {
              return i() ? "" : "M" + s(t) + (r() ? "Z" : "")
          }
          ,
          n.svgShape = function(t) {
              if (i())
                  return "";
              return `<${r() ? "polygon" : "polyline"} points="${s(t)}" />`
          }
          ,
          n.close = function() {
              return i() || r() ? n : EASEL.path([].concat(t, [t[0]]), e)
          }
          ,
          n.reverse = ()=>EASEL.path([].concat(t).reverse(), e),
          n.transform = n=>EASEL.path(n.transformedPath(t), e),
          n.rebaseNear = function(r, s) {
              if (i() || o())
                  return n;
              let l = Math.hypot(t[0].x - r.x, t[0].y - r.y);
              if (l <= s)
                  return n;
              let a = 0;
              for (let e = 1; e < t.length - 1; e++) {
                  const n = Math.hypot(t[e].x - r.x, t[e].y - r.y);
                  if (n < l && (a = e,
                  l = n,
                  n <= s))
                      break
              }
              if (0 == a)
                  return n;
              const u = t.slice(a)
                , p = t.slice(1, a + 1);
              return EASEL.path([...u, ...p], e)
          }
          ,
          n.rebaseDistance = function(e) {
              if (e < 0)
                  throw new Error("path.rebaseDistance: negative distances unsupported");
              if (o() || 0 === e || t.length < 3)
                  return n;
              for (let n = 1; ; n++) {
                  const i = t[n - 1]
                    , r = t[n]
                    , o = r.x - i.x
                    , s = r.y - i.y
                    , l = Math.hypot(o, s);
                  if (e - l <= 0) {
                      const r = (l - e) / l
                        , a = {
                          x: i.x + o * (1 - r),
                          y: i.y + s * (1 - r)
                      };
                      null != i.z && (a.z = i.z);
                      const u = t.slice(n)
                        , p = t.slice(1, n);
                      return EASEL.path([a, ...u, ...p, a])
                  }
                  e -= l,
                  n == t.length - 1 && (n = 0)
              }
          }
          ,
          n.boundingBox = u,
          n.withZ = function(n) {
              return EASEL.path(t.map((({x: t, y: e})=>({
                  x: t,
                  y: e,
                  z: n
              }))), e)
          }
          ,
          n.withProps = function(t) {
              null == t && (t = {});
              const e = {};
              for (const i of Object.keys(n.props))
                  e[i] = n.props[i];
              for (const n of Object.keys(t))
                  e[n] = t[n];
              return EASEL.path(n.points, e)
          }
          ,
          n.crossesSegment = function(e, n, i, r) {
              const o = EASEL.matrix().translatedBy(-e, -n).rotatedBy(-Math.atan2(r - n, i - e))
                , s = o.transformedPoint({
                  x: i,
                  y: r
              }).x
                , l = {
                  x: e,
                  y: n
              }
                , a = {
                  x: i,
                  y: r
              };
              if (t.length > 1)
                  for (let u = 0; u < t.length; u++) {
                      let e = t[u];
                      if (EASEL.pathUtils.pointsEqual(e, l) || EASEL.pathUtils.pointsEqual(e, a))
                          continue;
                      let n = t[(u + 1) % t.length];
                      if (!EASEL.pathUtils.pointsEqual(n, l) && !EASEL.pathUtils.pointsEqual(n, a) && (e = o.transformedPoint(e),
                      n = o.transformedPoint(n),
                      e.y < 0 && 0 < n.y || n.y < 0 && 0 < e.y)) {
                          const t = -e.y / (n.y - e.y)
                            , i = e.x + t * (n.x - e.x);
                          if (0 < i && i < s)
                              return !0
                      }
                  }
              return !1
          }
          ,
          n.closestPointAndDistanceTo = function(e) {
              let n = 1 / 0
                , i = null
                , r = -1
                , o = t[0];
              for (let s = 1; s < t.length; s++) {
                  const l = t[s]
                    , {distance: a, point: u} = EASEL.math.distToSegment(e, o, l);
                  a < n && (n = a,
                  i = u,
                  r = s),
                  o = l
              }
              return {
                  distance: n,
                  point: i,
                  index: r
              }
          }
          ,
          n
      }
  },
  65: function(t, e) {
      EASEL.pathUtils = function() {
          const t = ()=>({
              minX: 1 / 0,
              maxX: -1 / 0,
              minY: 1 / 0,
              maxY: -1 / 0
          })
            , e = function(t) {
              const e = {
                  minX: 1 / 0,
                  maxX: -1 / 0,
                  minY: 1 / 0,
                  maxY: -1 / 0
              };
              for (const n of t)
                  e.minX = Math.min(e.minX, n.x),
                  e.maxX = Math.max(e.maxX, n.x),
                  e.minY = Math.min(e.minY, n.y),
                  e.maxY = Math.max(e.maxY, n.y);
              return e
          }
            , n = function(t, e, n, i) {
              const r = 3 * e - t - 3 * n + i
                , o = 3 * t - 6 * e + 3 * n
                , s = -3 * t + 3 * e
                , l = t
                , a = 3 * r
                , u = 2 * o
                , p = s
                , h = [0, 1, -p / u, (-u + Math.sqrt(u * u - 4 * a * p)) / (2 * a), (-u - Math.sqrt(u * u - 4 * a * p)) / (2 * a)].filter((t=>0 <= t && t <= 1)).map((t=>r * t * t * t + o * t * t + s * t + l));
              return {
                  min: Math.min.apply(null, h),
                  max: Math.max.apply(null, h)
              }
          }
            , i = function(t, e, i, r) {
              null == e && (e = {
                  x: 0,
                  y: 0
              }),
              null == i && (i = {
                  x: 0,
                  y: 0
              });
              const o = n(t.x, t.x + e.x, r.x + i.x, r.x)
                , s = n(t.y, t.y + e.y, r.y + i.y, r.y);
              return {
                  minX: o.min,
                  minY: s.min,
                  maxX: o.max,
                  maxY: s.max
              }
          }
            , r = function(t) {
              const n = e(t);
              let r = null;
              for (const e of t) {
                  if (r && (null != r.rh || null != e.lh)) {
                      const t = i(r, r.rh, e.lh, e);
                      n.minX = Math.min(n.minX, t.minX),
                      n.maxX = Math.max(n.maxX, t.maxX),
                      n.minY = Math.min(n.minY, t.minY),
                      n.maxY = Math.max(n.maxY, t.maxY)
                  }
                  r = e
              }
              return n
          }
            , o = (t,e)=>({
              x: t.x + e.x,
              y: t.y + e.y
          })
            , s = (t,e)=>({
              x: e.x - t.x,
              y: e.y - t.y
          })
            , l = function(t, e) {
              const n = e.transformedPoint(t);
              for (const i of ["lh", "rh"])
                  null != t[i] && (n[i] = s(n, e.transformedPoint(o(t, t[i]))));
              return n
          }
            , a = function(t) {
              return t.maxX < t.minX || t.maxY < t.minY ? 0 : (t.maxX - t.minX) * (t.maxY - t.minY)
          };
          return {
              transformedPath: (t,e)=>t.map((t=>t.map((t=>l(t, e))))),
              transformedPathPoint: l,
              pointsBoundingBox: e,
              pathBoundingBox: function(t) {
                  const e = {
                      minX: 1 / 0,
                      maxX: -1 / 0,
                      minY: 1 / 0,
                      maxY: -1 / 0
                  };
                  for (const n of t) {
                      const t = r(n);
                      e.minX = Math.min(t.minX, e.minX),
                      e.maxX = Math.max(t.maxX, e.maxX),
                      e.minY = Math.min(t.minY, e.minY),
                      e.maxY = Math.max(t.maxY, e.maxY)
                  }
                  return e
              },
              infiniteBox: t,
              pointsEqual: (t,e)=>t.x === e.x && t.y === e.y && (null == t.z || t.z === e.z),
              unionBoundingBoxes: (t,e)=>({
                  minX: Math.min(t.minX, e.minX),
                  maxX: Math.max(t.maxX, e.maxX),
                  minY: Math.min(t.minY, e.minY),
                  maxY: Math.max(t.maxY, e.maxY)
              }),
              boundingBoxArea: a,
              boundingBoxContains: (t,e)=>a(t) > a(e) && t.minX <= e.minX && e.maxX <= t.maxX && t.minY <= e.minY && e.maxY <= t.maxY,
              nearestNeighborSort: t=>{
                  for (let e = 0; e < t.length - 1; e++) {
                      const n = t[e].points[t[e].points.length - 1];
                      let i = t[e + 1]
                        , r = n.x - i.points[0].x
                        , o = n.y - i.points[0].y
                        , s = r * r + o * o;
                      for (let l = e + 2; l < t.length; l++) {
                          const r = t[l]
                            , o = n.x - r.points[0].x
                            , a = n.y - r.points[0].y
                            , u = o * o + a * a;
                          u < s && (t[l] = i,
                          t[e + 1] = r,
                          i = r,
                          s = u)
                      }
                  }
              }
              ,
              traversalWeight: function(t) {
                  let e = 0;
                  for (let n = 0; n < t.length - 1; n++) {
                      const i = t[n].points
                        , r = t[n + 1].points;
                      if (0 === i.length || 0 === r.length)
                          continue;
                      const o = i[i.length - 1].x - r[0].x
                        , s = i[i.length - 1].y - r[0].y;
                      e += Math.hypot(o, s)
                  }
                  return e
              }
          }
      }()
  },
  66: function(t, e) {
      EASEL.paths = function() {
          const t = 1e-5
            , e = {}
            , n = "paths"
            , i = function() {
              let t = 0;
              return e=>null != e._EASEL_paths_cacheIdentifier ? e._EASEL_paths_cacheIdentifier : e._EASEL_paths_cacheIdentifier = t++
          }();
          e.union = function(t, ...e) {
              let n = t.all().map((t=>t.points))
                , i = [];
              for (const r of e)
                  i = i.concat(r.all().map((t=>t.points)));
              return n = EASEL.pathOffsetter.add(n, i),
              n.map((t=>EASEL.path(t)))
          }
          ,
          e.intersection = function(t, ...e) {
              let n = t.all().map((t=>t.points));
              for (const i of e) {
                  if (0 === n.length)
                      break;
                  n = EASEL.pathOffsetter.intersect(n, i.all().map((t=>t.points)))
              }
              return n.map((t=>EASEL.path(t)))
          }
          ,
          e.exclusion = function(t, ...e) {
              let n = t.all().map((t=>t.points));
              for (const i of e) {
                  if (0 === n.length)
                      break;
                  n = EASEL.pathOffsetter.remove(n, i.all().map((t=>t.points)))
              }
              return n.map((t=>EASEL.path(t)))
          }
          ,
          e.exclusionFromStrokes = function(t, ...e) {
              const n = [];
              for (let i of t.all()) {
                  const {props: t} = i;
                  let r = [i.points];
                  for (const n of e)
                      r.length > 0 && n.all().length > 0 && (r = EASEL.pathOffsetter.remove(r, n.all().map((t=>t.points)), !1));
                  for (let e of r)
                      n.push(EASEL.path(e, t))
              }
              return n
          }
          ,
          e.intersectionWithStrokes = function(t, ...e) {
              const n = [];
              for (let i of t.all()) {
                  const {props: t} = i;
                  let r = [i.points];
                  for (let n of e)
                      r.length > 0 && (r = EASEL.pathOffsetter.intersect(r, n.all().map((t=>t.points)), !1));
                  for (let e of r)
                      n.push(EASEL.path(e, t))
              }
              return n
          }
          ,
          e.clean = function(t) {
              return EASEL.pathOffsetter.clean(t.all().map((t=>t.points))).map((t=>EASEL.path(t).close()))
          }
          ,
          e.simplify = function(t, e) {
              null == e && (e = EASEL.pathOffsetter.FILL_TYPE_NON_ZERO);
              return EASEL.pathOffsetter.simplify(t.all().map((t=>t.points)), e).map((t=>EASEL.path(t).close()))
          }
          ,
          e.lighten = function(t) {
              return EASEL.pathOffsetter.lighten(t.all().map((t=>t.points))).map((t=>EASEL.path(t)))
          }
          ,
          e.offset = function(t, e, n) {
              null == n && (n = EASEL.pathOffsetter.JOIN_TYPE_ROUND);
              return EASEL.pathOffsetter.offset(t.all().map((t=>t.points)), e, n, !0).map((t=>EASEL.path(t)))
          }
          ,
          e.expand = function(t, n, i) {
              return null == i && (i = EASEL.pathOffsetter.JOIN_TYPE_ROUND),
              e.offset(t, n, i)
          }
          ,
          e.contract = function(t, n, i) {
              return null == i && (i = EASEL.pathOffsetter.JOIN_TYPE_ROUND),
              e.offset(t, -n, i)
          }
          ,
          e.offsetStrokes = function(t, e) {
              return EASEL.pathOffsetter.offset(t.all().map((t=>t.points)), e, EASEL.pathOffsetter.JOIN_TYPE_ROUND, !1).map((t=>EASEL.path(t)))
          }
          ,
          e.transform = (t,e)=>t.all().map((t=>t.transform(e))),
          e.scale = (t,n)=>e.transform(t, EASEL.matrix().scaledBy(n, n)),
          e.translate = (t,n,i)=>e.transform(t, EASEL.matrix().translatedBy(n, i)),
          e.withZ = (t,e)=>t.all().map((t=>t.withZ(e))),
          e.add = function(t, ...e) {
              const n = [].concat(t.all());
              for (const i of e)
                  n.push.apply(n, i.all());
              return n
          }
          ,
          e.withProps = function(t, e) {
              return null == e && (e = {}),
              t.all().map((t=>t.withProps(e)))
          }
          ,
          e.selectWithProp = (t,e)=>t.all().filter((t=>t.props[e])),
          e.selectWithoutProp = (t,e)=>t.all().filter((t=>!t.props[e])),
          e.open = t=>t.all().filter((t=>t.isOpen())),
          e.closed = t=>t.all().filter((t=>t.isClosed())),
          e.select = (t,e)=>t.all().filter((t=>e(t))),
          e.map = (t,e)=>t.all().map((t=>e(t))),
          e.sort = (t,e)=>t.all().slice().sort(e);
          const r = function(t, ...e) {
              const r = e.map((e=>"object" === typeof e && "function" === typeof e.getUniqueIdentifier ? `[path ${e.getUniqueIdentifier()}]` : "function" === typeof e ? `[function ${i(e)}]` : "object" === typeof e || t === n ? `[data ${i(e)}]` : e));
              return `[${[t, ...r].join(" ")}]`
          }
            , o = function(t, e, n, ...i) {
              return null != t ? t(e, (()=>s(e, n, ...i))) : s(e, n, ...i)
          };
          var s = function(l, a, ...u) {
              if ("union" === a) {
                  let t = !1
                    , e = [];
                  for (let n of u)
                      "union" === n.operation && null != n.params ? (t = !0,
                      e = e.concat(n.params)) : e.push(n);
                  if (t)
                      return s(l, a, ...e)
              }
              const p = {};
              let h = 0;
              for (const t of u)
                  t && null != t.depth && (h = Math.max(h, t.depth + 1));
              const c = EASEL.paths.sharedInstanceCache || EASEL.simpleCache();
              for (const t in e)
                  p[t] = function(...e) {
                      const n = r(t, p, ...e);
                      return o(c, n, t, p, ...e)
                  }
                  ;
              const f = EASEL.caching((function() {
                  const t = a === n ? u[0] || [] : e[a](...u);
                  return p.depth = h = 0,
                  p.params = u = null,
                  t
              }
              ));
              h > 200 && f();
              const d = EASEL.caching((()=>new Promise((t=>t(f())))))
                , y = function(t) {
                  null == t && (t = ()=>!0);
                  for (let e of f())
                      if (t(e))
                          return !0;
                  return !1
              }
                , m = EASEL.caching((function() {
                  if (!y())
                      return null;
                  let t = 1 / 0
                    , e = 1 / 0
                    , n = -1 / 0
                    , i = -1 / 0;
                  for (let r of f()) {
                      const o = r.boundingBox();
                      t > o.minX && (t = o.minX),
                      e > o.minY && (e = o.minY),
                      n < o.maxX && (n = o.maxX),
                      i < o.maxY && (i = o.maxY)
                  }
                  return {
                      minX: t,
                      minY: e,
                      maxX: n,
                      maxY: i
                  }
              }
              ));
              var x = EASEL.caching((function() {
                  const t = m();
                  return null === t ? 0 : (t.maxX - t.minX) * (t.maxY - t.minY)
              }
              ));
              var _ = EASEL.caching((function() {
                  if (!y())
                      return 0;
                  _ = 0;
                  for (const t of f())
                      _ += t.area();
                  return _
              }
              ));
              return p.describe = ()=>l,
              p.toPromise = d,
              p.getUniqueIdentifier = ()=>i(p),
              p.depth = h,
              p.params = u,
              p.all = f,
              p.first = ()=>f()[0],
              p.last = ()=>{
                  const t = f();
                  return t[t.length - 1]
              }
              ,
              p.any = y,
              p.closestPointTo = function(t) {
                  let e = null;
                  for (let n of f()) {
                      const i = n.closestPointAndDistanceTo(t);
                      null != i && (null == e || i.distance < e.distance) && (e = i)
                  }
                  return e ? e.point : null
              }
              ,
              p.area = _,
              p.toString = ()=>`[${Array.from(f()).map((t=>t.toString())).join(", ")}]`,
              p.svgPath = t=>`<path d="${f().map((e=>e.svgPathData(t))).join(" ")}"/>`,
              p.contains = t=>x() >= t.boundingBoxArea() && t.boundingBoxIntersection(p) && !t.exclusion(p).any(),
              p.containsSegment = (t,e)=>{
                  for (const r of f())
                      if (r.crossesSegment(t.x, t.y, e.x, e.y))
                          return !1;
                  const n = EASEL.polygonUtils.pointInPolygon(f(), t)
                    , i = EASEL.polygonUtils.pointInPolygon(f(), e);
                  if ("ONPATH" === n && "ONPATH" === i)
                      return !EASEL.paths([EASEL.path([t, e])]).exclusionFromStrokes(p).any();
                  if (!("INSIDE" === n && "INSIDE" === i || "ONPATH" === n && "INSIDE" === i || "INSIDE" === n && "ONPATH" === i))
                      return !1;
                  for (let r of f()) {
                      const n = EASEL.polygonUtils.pointInPolygon([r], t)
                        , i = EASEL.polygonUtils.pointInPolygon([r], e);
                      if ("ONPATH" === n && "ONPATH" === i)
                          return !1;
                      if (n !== i && "ONPATH" !== n && "ONPATH" !== i)
                          return !1
                  }
                  return !0
              }
              ,
              p.boundingBox = m,
              p.boundingBoxIntersection = function(e) {
                  if (null == e)
                      return null;
                  const n = m()
                    , i = e.boundingBox();
                  return null !== n && null !== i && (!(i.minX - n.maxX > t) && (!(n.minX - i.maxX > t) && (!(n.minY - i.maxY > t) && !(i.minY - n.maxY > t))))
              }
              ,
              p.boundingBoxArea = x,
              p.operation = a,
              p
          };
          return function(...t) {
              const e = r(n, ...t);
              return o(EASEL.paths.sharedInstanceCache, e, n, ...t)
          }
      }(),
      EASEL.paths.fromPointArrays = t=>EASEL.paths(t.map((t=>EASEL.path(t)))),
      EASEL.paths.sharedInstanceCache = null
  },
  67: function(t, e) {
      EASEL.polygonUtils = function() {
          const t = (t,e)=>EASEL.math.closeTo(t, e, 1e-6)
            , e = function(e, n) {
              return t(e.x, n.x) && t(e.y, n.y)
          };
          var n = function(e, i, r) {
              if (i.y > r.y)
                  return n(e, r, i);
              const o = "NO_INTERSECTION"
                , s = "INTERSECTION"
                , l = "ONPATH";
              if (i.y === r.y) {
                  const t = Math.min(i.x, r.x)
                    , n = Math.max(i.x, r.x);
                  return e.y === i.y && e.x <= n && e.x >= t ? l : o
              }
              if (e.y <= i.y || e.y > r.y)
                  return o;
              if (e.x > Math.max(i.x, r.x))
                  return o;
              if (e.x < Math.min(i.x, r.x))
                  return s;
              {
                  const n = {
                      dy: r.y - i.y,
                      dx: r.x - i.x
                  }
                    , a = function(e, n) {
                      const i = e.dx
                        , r = e.dy
                        , o = n.dx
                        , s = n.dy;
                      return t(r * o, s * i) ? 0 : r * o > s * i ? 1 : -1
                  }({
                      dy: e.y - i.y,
                      dx: e.x - i.x
                  }, n);
                  return 0 === a ? l : 1 === a ? s : o
              }
          };
          return {
              pointInPolygon: function(t, i) {
                  let r = 0;
                  for (const o of t) {
                      const {points: t} = o;
                      for (let o = 1; o < t.length; o++) {
                          const s = t[o - 1]
                            , l = t[o];
                          if (e(s, i) || e(l, i))
                              return "ONPATH";
                          const a = n(i, s, l);
                          if ("ONPATH" === a)
                              return "ONPATH";
                          "INTERSECTION" === a && (r += 1)
                      }
                  }
                  return r % 2 === 1 ? "INSIDE" : "OUTSIDE"
              }
          }
      }()
  },
  68: function(t, e) {
      EASEL.shapeUtils = function() {
          const t = function(t, e) {
              const n = e.maxX - e.minX
                , i = e.maxY - e.minY
                , r = 0 === n ? 1 : t.width / n
                , o = 0 === i ? 1 : t.height / i;
              return EASEL.matrix().translatedBy(-(e.minX + e.maxX) / 2, -(e.minY + e.maxY) / 2).scaledBy(r, o)
          }
            , e = function(t) {
              const e = t.flipping && t.flipping.horizontal ? -1 : 1
                , n = t.flipping && t.flipping.vertical ? -1 : 1;
              return EASEL.matrix().scaledBy(e, n).rotatedBy(t.rotation || 0).translatedBy(t.center.x, t.center.y)
          }
            , n = function(n, i) {
              const r = EASEL.pathUtils.pathBoundingBox(n.points)
                , o = EASEL.pathUtils.pathBoundingBox(i)
                , s = t(n, r)
                , l = s.transformedVector({
                  x: o.maxX - o.minX,
                  y: o.maxY - o.minY
              })
                , a = s.premultipliedBy(e(n)).transformedPoint({
                  x: (o.maxX + o.minX) / 2,
                  y: (o.maxY + o.minY) / 2
              });
              return EASEL.merge(n, {
                  width: l.x,
                  height: l.y,
                  center: a,
                  points: i
              })
          }
            , i = (t,e)=>0 === e || e === t.length - 1
            , r = function(t) {
              const e = t[0]
                , n = t[t.length - 1];
              return e.x === n.x && e.y === n.y
          }
            , o = (t,e)=>r(t) && i(t, e);
          return {
              boundingBoxMatrix: t,
              shapeMatrix: e,
              pathWithTranslatedPoint: function({shape: i, constraint: r, pointType: o, subpathIndex: s, pointIndex: l, delta: a}) {
                  const u = EASEL.pathUtils.pathBoundingBox(i.points)
                    , p = EASEL.matrix().premultipliedBy(t(i, u)).premultipliedBy(e(i));
                  let h = EASEL.pathUtils.transformedPathPoint(i.points[s][l], p);
                  switch (o) {
                  case "anchor":
                      h.x += a.x,
                      h.y += a.y;
                      break;
                  case "lh":
                  case "rh":
                      null == h[o] && (h[o] = {
                          x: 0,
                          y: 0
                      }),
                      h[o].x += a.x,
                      h[o].y += a.y,
                      h = function(t, e, n) {
                          const i = "lh" === e ? "rh" : "lh";
                          switch (t = EASEL.merge(t),
                          n) {
                          case EASEL.pathConstants.constraints.MIRRORED:
                              t[i] = {
                                  x: -t[e].x,
                                  y: -t[e].y
                              };
                              break;
                          case EASEL.pathConstants.constraints.ASYMMETRIC:
                              null == t[i] && (t[i] = {
                                  x: 0,
                                  y: 0
                              });
                              var r = EASEL.math.normalize(t[e])
                                , o = EASEL.math.magnitude(t[i]);
                              t[i] = {
                                  x: -r.x * o,
                                  y: -r.y * o
                              }
                          }
                          return t
                      }(h, o, r)
                  }
                  const c = EASEL.pathUtils.transformedPathPoint(h, p.inverse())
                    , f = EASEL.merge(i.points);
                  if (f[s][l] = c,
                  l === f[s].length - 1 || 0 === l) {
                      h = i.points[s][l];
                      const t = f[s].length - 1 - l
                        , e = i.points[s][t];
                      h.x === e.x && h.y === e.y && (f[s][t] = c)
                  }
                  return n(i, f)
              },
              pathWithRemovedPoint: function({shape: t, subpathIndex: e, pointIndex: i}) {
                  if ([].concat.apply([], t.points).length < 2)
                      return null;
                  const r = [];
                  for (let n = 0; n < t.points.length; n++) {
                      const o = t.points[n];
                      if (n === e) {
                          if (o.length > 1) {
                              const t = o.slice(0, i).concat(o.slice(i + 1))
                                , e = o.length - 1;
                              0 === i && o[i].x === o[e].x && o[i].y === o[e].y ? t[t.length - 1] = t[0] : i === e && o[i].x === o[0].x && o[i].y === o[0].y && (t[0] = t[t.length - 1]),
                              r.push(t)
                          }
                      } else
                          r.push(o)
                  }
                  return n(t, r)
              },
              pathifyShape: function(t) {
                  const e = EASEL.math.BEZIER_MAGIC_NUMBER
                    , n = {
                      type: "path"
                  };
                  switch (t.type) {
                  case "path":
                      n.points = t.points;
                      break;
                  case "polygon":
                      n.points = [t.points.concat([t.points[0]])];
                      break;
                  case "polyline":
                      n.points = [t.points];
                      break;
                  case "rectangle":
                      var {x: i, y: r} = t.cornerRadius || {
                          x: 0,
                          y: 0
                      };
                      if (0 === i && 0 === r)
                          n.points = [[{
                              x: 0,
                              y: 0
                          }, {
                              x: 1,
                              y: 0
                          }, {
                              x: 1,
                              y: 1
                          }, {
                              x: 0,
                              y: 1
                          }, {
                              x: 0,
                              y: 0
                          }]];
                      else {
                          const o = t.width / 2
                            , s = t.height / 2;
                          i = Math.min(i, o),
                          r = Math.min(r, s),
                          n.points = [[{
                              x: -(o - i),
                              y: -s
                          }, {
                              x: o - i,
                              y: -s,
                              rh: {
                                  x: e * i,
                                  y: 0
                              }
                          }, {
                              x: o,
                              y: -(s - r),
                              lh: {
                                  x: 0,
                                  y: -e * r
                              }
                          }, {
                              x: o,
                              y: s - r,
                              rh: {
                                  x: 0,
                                  y: e * r
                              }
                          }, {
                              x: o - i,
                              y: s,
                              lh: {
                                  x: e * i,
                                  y: 0
                              }
                          }, {
                              x: -(o - i),
                              y: s,
                              rh: {
                                  x: -e * i,
                                  y: 0
                              }
                          }, {
                              x: -o,
                              y: s - r,
                              lh: {
                                  x: 0,
                                  y: e * r
                              }
                          }, {
                              x: -o,
                              y: -(s - r),
                              rh: {
                                  x: 0,
                                  y: -e * r
                              }
                          }, {
                              x: -(o - i),
                              y: -s,
                              lh: {
                                  x: -e * i,
                                  y: 0
                              }
                          }]]
                      }
                      break;
                  case "ellipse":
                      n.points = [[{
                          x: 0,
                          y: 1,
                          lh: {
                              x: -e,
                              y: 0
                          },
                          rh: {
                              x: e,
                              y: 0
                          }
                      }, {
                          x: 1,
                          y: 0,
                          lh: {
                              x: 0,
                              y: e
                          },
                          rh: {
                              x: 0,
                              y: -e
                          }
                      }, {
                          x: 0,
                          y: -1,
                          lh: {
                              x: e,
                              y: 0
                          },
                          rh: {
                              x: -e,
                              y: 0
                          }
                      }, {
                          x: -1,
                          y: 0,
                          lh: {
                              x: 0,
                              y: -e
                          },
                          rh: {
                              x: 0,
                              y: e
                          }
                      }, {
                          x: 0,
                          y: 1,
                          lh: {
                              x: -e,
                              y: 0
                          },
                          rh: {
                              x: e,
                              y: 0
                          }
                      }]];
                      break;
                  case "line":
                      var {point1: o, point2: s} = t;
                      n.center = {
                          x: (o.x + s.x) / 2,
                          y: (o.y + s.y) / 2
                      },
                      n.width = Math.abs(o.x - s.x),
                      n.height = Math.abs(o.y - s.y),
                      n.rotation = 0,
                      n.points = [[o, s]]
                  }
                  if (null != n.points)
                      return EASEL.merge(EASEL.permit(t, "center", "width", "height", "rotation", "flipping"), n)
              },
              pathWithMirroredPoint: function({shape: t, subpathIndex: e, pointIndex: s}) {
                  const l = EASEL.merge(t.points)
                    , a = l[e]
                    , u = i(a, s) && !r(a) ? EASEL.curveHandleUtils.handlesForTerminalPoint(a, 0 === s) : EASEL.curveHandleUtils.handlesForNonTerminalPoint(a, s);
                  if (a[s] = EASEL.merge(a[s], u),
                  o(t.points[e], s)) {
                      a[t.points[e].length - 1 - s] = a[s]
                  }
                  return n(t, l)
              },
              pathWithStraightPoint: function({shape: t, subpathIndex: e, pointIndex: i}) {
                  const r = EASEL.merge(t.points);
                  if (r[e][i].lh = r[e][i].rh = null,
                  o(t.points[e], i)) {
                      const n = t.points[e].length - 1 - i;
                      r[e][n] = r[e][i]
                  }
                  return n(t, r)
              },
              proFeatures: function(t) {
                  let e = [];
                  return "text" === t.type && (EASEL.fonts[t.font] || e.push({
                      type: "font",
                      name: t.font
                  }),
                  t.textEffect && "None" !== t.textEffect.name && e.push({
                      type: "textEffect",
                      name: t.textEffect.name
                  })),
                  t.icon && t.icon.pro && e.push({
                      type: "icon",
                      name: t.icon.name
                  }),
                  t.combinedProFeatures && (e = e.concat(t.combinedProFeatures)),
                  e
              }
          }
      }()
  },
  69: function(t, e) {
      EASEL.simpleCache = function() {
          const t = {};
          return (e,n)=>null != t[e] ? t[e] : t[e] = n()
      }
  },
  70: function(t, e) {
      EASEL.timeProfiling = function() {
          let t = {};
          const e = ()=>t = {};
          return {
              performance: function() {
                  const n = [];
                  for (let e in t) {
                      const i = t[e];
                      for (let t in i) {
                          const r = i[t]
                            , o = r.timer
                            , s = r.calls
                            , l = o.end().then((n=>({
                              prefix: e,
                              name: t,
                              duration: n,
                              calls: s
                          })));
                          n.push(l)
                      }
                  }
                  return e(),
                  Promise.all(n)
              },
              profileDecorator: (t,e)=>function() {
                  console.profile(t);
                  const n = e.apply(null, arguments);
                  return console.profileEnd(t),
                  n
              }
              ,
              reset: e,
              timeDecorator: (e,n)=>function() {
                  t[e] = t[e] || {},
                  null == t[e][n.name] ? (t[e][n.name] = {},
                  t[e][n.name].timer = EASEL.timedEvent(),
                  t[e][n.name].calls = 1) : (t[e][n.name].timer.resume(),
                  t[e][n.name].calls += 1);
                  const i = n.apply(null, arguments);
                  return t[e][n.name].timer.pause(),
                  i
              }
          }
      }()
  },
  71: function(t, e) {
      EASEL.timedEvent = function(t) {
          null == t && (t = Date.now());
          let e = 0
            , n = null
            , i = null;
          const r = new Promise((function(t, e) {
              i = t,
              n = e
          }
          ));
          return {
              pause: function(i) {
                  const r = i || Date.now();
                  return null == t ? n(new Error("Trying to pause a paused timer")) : t <= r ? (e = r - t + e,
                  void (t = null)) : n(new Error("Trying to pause a timer before it started"))
              },
              resume: function(e) {
                  const i = e || Date.now();
                  if (null != t)
                      return n(new Error("Trying to resume a running timer"));
                  t = i
              },
              end: function() {
                  return null != t ? n(new Error("Trying to end a running timer")) : i(e),
                  r
              }
          }
      }
  },
  72: function(t, e) {
      EASEL.bit = function(t) {
          const e = {
              .5: "1/2",
              .25: "1/4",
              .125: "1/8",
              .0625: "1/16",
              .03125: "1/32"
          }
            , n = Math.PI / 180;
          if (!t)
              return null;
          const {type: i, width: r, unit: o, tipAngle: s} = t;
          let l;
          l = "in" === o ? null != e[r] ? e[r] : r.toFixed(3) : r.toFixed(1);
          const a = function() {
              if (null != s)
                  return `${s}\xb0`
          }
            , u = function() {
              if (null != l)
                  return `${l} ${o}`
          }
            , p = ()=>i === EASEL.bitGroups.v ? a() : u();
          return {
              angleAndDegree: a,
              inchWidth: t=>{
                  const e = r * EASEL.units.inchesPerUnit(o);
                  if (i === EASEL.bitGroups.v && null != t && t > 0) {
                      const i = 2 * t * Math.tan(s * n / 2);
                      return Math.min(e, i)
                  }
                  return e
              }
              ,
              description: p,
              longDescription: ()=>{
                  if (null == i)
                      return p();
                  const t = i !== EASEL.bitGroups.v ? i.toLowerCase() : i;
                  return `${p()} ${t}`
              }
              ,
              shortDescription: ()=>i === EASEL.bitGroups.v ? `${s}\xb0` : l,
              widthAndUnit: u,
              explode: ()=>t,
              type: ()=>i,
              radianTipAngle: ()=>s * n,
              degreeTipAngle: ()=>s
          }
      }
  },
  73: function(t, e) {
      EASEL.tile = function(t) {
          const {offset: e, rect: n, overlapDistance: i} = t;
          function r() {
              return {
                  x: n[1].x - n[0].x,
                  y: n[2].y - n[0].y
              }
          }
          return {
              getRect: function() {
                  return n
              },
              getDimensions: r,
              getOffsetDistance: function() {
                  return e
              },
              getOffsetDisplayString: function() {
                  const t = EASEL.unitSelectors.getPreferredUnit(EASEL.store.getState());
                  return `${EASEL.units.convertFromIn(e, t)} ${t}`
              },
              formatDimensions: function() {
                  const t = EASEL.unitSelectors.getPreferredUnit(EASEL.store.getState());
                  return `${EASEL.units.convertFromIn(e, t)} ${t} -> ${EASEL.units.convertFromIn(r().y + e, t)}  ${t}`
              },
              getPointArrays: function() {
                  return EASEL.paths.fromPointArrays([n])
              },
              getOverlapDistance: function() {
                  return i
              },
              explode: function() {
                  return t
              }
          }
      }
  },
  74: function(t, e) {
      EASEL.volumeHelper = function() {
          const t = t=>t.reduce(((t,e)=>EASEL.pathUtils.unionBoundingBoxes(t, function(t) {
              let e, n, i, r;
              switch (t.type) {
              case "drill":
                  return ({x: i, y: r} = t.center),
                  {
                      minX: i,
                      maxX: i,
                      minY: r,
                      maxY: r
                  };
              case "line":
                  {
                      const {point1: {x: e, y: n}, point2: {x: i, y: r}} = t;
                      return {
                          minX: Math.min(e, i),
                          maxX: Math.max(e, i),
                          minY: Math.min(n, r),
                          maxY: Math.max(n, r)
                      }
                  }
              }
              ({x: i, y: r} = t.center);
              const {width: o, height: s, rotation: l} = t;
              switch (l) {
              case void 0:
              case 0:
              case Math.PI:
                  n = o / 2,
                  e = s / 2;
                  break;
              case Math.PI / 2:
              case 3 * Math.PI / 2:
                  n = s / 2,
                  e = o / 2;
                  break;
              default:
                  {
                      const t = Math.abs(Math.sin(l))
                        , i = Math.abs(Math.cos(l));
                      n = (s * t + o * i) / 2,
                      e = (s * i + o * t) / 2
                  }
              }
              return {
                  minX: i - n,
                  maxX: i + n,
                  minY: r - e,
                  maxY: r + e
              }
          }(e.shape))), EASEL.pathUtils.infiniteBox())
            , e = function(e) {
              const n = t(e);
              return (n.maxX + n.minX) / 2
          }
            , n = function(e) {
              const n = t(e);
              return (n.maxY + n.minY) / 2
          }
            , i = function(t, i, r) {
              const o = null != t.shape.rotation ? t.shape.rotation : 0;
              if (0 === o || 360 === o)
                  return i;
              const s = null != t.shape.center ? t.shape.center : {
                  x: e([t]),
                  y: n([t])
              };
              return EASEL.matrix().translatedBy(-s.x, -s.y).rotatedBy(o * r).translatedBy(s.x, s.y).transformedPoint(i)
          }
            , r = t=>t.filter((t=>"drill" !== t.shape.type));
          return {
              boundingBox: t,
              boundingBoxLeft: e=>t(e).minX,
              boundingBoxHorizontalCenter: e,
              boundingBoxRight: e=>t(e).maxX,
              boundingBoxBottom: e=>t(e).minY,
              boundingBoxVerticalCenter: n,
              boundingBoxTop: e=>t(e).maxY,
              boundingBoxWidth: function(e) {
                  if (1 === e.length) {
                      const {shape: t} = e[0];
                      return "line" === t.type ? Math.abs(t.point1.x - t.point2.x) : "drill" === t.type ? 0 : t.width
                  }
                  {
                      const n = t(e);
                      return n.maxX - n.minX
                  }
              },
              boundingBoxHeight: function(e) {
                  if (1 === e.length) {
                      const {shape: t} = e[0];
                      return "line" === t.type ? Math.abs(t.point1.y - t.point2.y) : "drill" === t.type ? 0 : t.height
                  }
                  {
                      const n = t(e);
                      return n.maxY - n.minY
                  }
              },
              rotatedPoint: (t,e)=>i(t, e, 1),
              segmentsWithOffsets: function(t, e) {
                  return function(t, e, n) {
                      if ("outline" === t.cut.type) {
                          const i = n.open();
                          let r = n.closed();
                          return r = "text" === t.shape.type ? r.simplify(EASEL.pathOffsetter.FILL_TYPE_NON_ZERO) : r.simplify(EASEL.pathOffsetter.FILL_TYPE_EVEN_ODD),
                          r = r.offset(EASEL.cutUtils.outlineOffset(t.cut, e)),
                          i.add(r)
                      }
                      return "drill" === t.cut.type ? n : n.lighten().simplify()
                  }(t, e, EASEL.polylineGenerator.process(t.shape))
              },
              unRotatedPoint: (t,e)=>i(t, e, -1),
              combinableVolumes: r,
              combinableVolumeIds: t=>r(t).map((t=>t.id)),
              isOneDrillHoleSelected: function(t) {
                  return 1 === t.length && "drill" === t[0].shape.type
              },
              areOnlyDrillHolesSelected: function(t) {
                  return t.length > 0 && t.length === t.filter((t=>"drill" === t.shape.type)).length
              },
              allSelectedShapesMatchingCutDepth: function(t) {
                  return t.length > 0 && 0 === t.filter((e=>e.cut.depth !== t[0].cut.depth)).length
              }
          }
      }()
  }
});
