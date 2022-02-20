/*! For license information please see vendor-506c5d42485488ffab08.js.LICENSE.txt */
!function(t) {
  var e = {};
  function n(r) {
      if (e[r])
          return e[r].exports;
      var o = e[r] = {
          i: r,
          l: !1,
          exports: {}
      };
      return t[r].call(o.exports, o, o.exports, n),
      o.l = !0,
      o.exports
  }
  n.m = t,
  n.c = e,
  n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: r
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
      var r = Object.create(null);
      if (n.r(r),
      Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
      }),
      2 & e && "string" != typeof t)
          for (var o in t)
              n.d(r, o, function(e) {
                  return t[e]
              }
              .bind(null, o));
      return r
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
  n(n.s = 1342)
}({
  1: function(t, e, n) {
      "use strict";
      t.exports = n(105)
  },
  105: function(t, e, n) {
      "use strict";
      var r = n(50)
        , o = "function" === typeof Symbol && Symbol.for
        , i = o ? Symbol.for("react.element") : 60103
        , s = o ? Symbol.for("react.portal") : 60106
        , a = o ? Symbol.for("react.fragment") : 60107
        , l = o ? Symbol.for("react.strict_mode") : 60108
        , u = o ? Symbol.for("react.profiler") : 60114
        , p = o ? Symbol.for("react.provider") : 60109
        , c = o ? Symbol.for("react.context") : 60110
        , h = o ? Symbol.for("react.concurrent_mode") : 60111
        , f = o ? Symbol.for("react.forward_ref") : 60112
        , d = o ? Symbol.for("react.suspense") : 60113
        , y = o ? Symbol.for("react.memo") : 60115
        , m = o ? Symbol.for("react.lazy") : 60116
        , g = "function" === typeof Symbol && Symbol.iterator;
      function v(t, e, n, r, o, i, s, a) {
          if (!t) {
              if (t = void 0,
              void 0 === e)
                  t = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              else {
                  var l = [n, r, o, i, s, a]
                    , u = 0;
                  (t = Error(e.replace(/%s/g, (function() {
                      return l[u++]
                  }
                  )))).name = "Invariant Violation"
              }
              throw t.framesToPop = 1,
              t
          }
      }
      function b(t) {
          for (var e = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 0; r < e; r++)
              n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
          v(!1, "Minified React error #" + t + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
      }
      var x = {
          isMounted: function() {
              return !1
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
      }
        , P = {};
      function S(t, e, n) {
          this.props = t,
          this.context = e,
          this.refs = P,
          this.updater = n || x
      }
      function C() {}
      function w(t, e, n) {
          this.props = t,
          this.context = e,
          this.refs = P,
          this.updater = n || x
      }
      S.prototype.isReactComponent = {},
      S.prototype.setState = function(t, e) {
          "object" !== typeof t && "function" !== typeof t && null != t && b("85"),
          this.updater.enqueueSetState(this, t, e, "setState")
      }
      ,
      S.prototype.forceUpdate = function(t) {
          this.updater.enqueueForceUpdate(this, t, "forceUpdate")
      }
      ,
      C.prototype = S.prototype;
      var E = w.prototype = new C;
      E.constructor = w,
      r(E, S.prototype),
      E.isPureReactComponent = !0;
      var T = {
          current: null
      }
        , O = {
          current: null
      }
        , I = Object.prototype.hasOwnProperty
        , L = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
      };
      function A(t, e, n) {
          var r = void 0
            , o = {}
            , s = null
            , a = null;
          if (null != e)
              for (r in void 0 !== e.ref && (a = e.ref),
              void 0 !== e.key && (s = "" + e.key),
              e)
                  I.call(e, r) && !L.hasOwnProperty(r) && (o[r] = e[r]);
          var l = arguments.length - 2;
          if (1 === l)
              o.children = n;
          else if (1 < l) {
              for (var u = Array(l), p = 0; p < l; p++)
                  u[p] = arguments[p + 2];
              o.children = u
          }
          if (t && t.defaultProps)
              for (r in l = t.defaultProps)
                  void 0 === o[r] && (o[r] = l[r]);
          return {
              $$typeof: i,
              type: t,
              key: s,
              ref: a,
              props: o,
              _owner: O.current
          }
      }
      function _(t) {
          return "object" === typeof t && null !== t && t.$$typeof === i
      }
      var R = /\/+/g
        , N = [];
      function k(t, e, n, r) {
          if (N.length) {
              var o = N.pop();
              return o.result = t,
              o.keyPrefix = e,
              o.func = n,
              o.context = r,
              o.count = 0,
              o
          }
          return {
              result: t,
              keyPrefix: e,
              func: n,
              context: r,
              count: 0
          }
      }
      function B(t) {
          t.result = null,
          t.keyPrefix = null,
          t.func = null,
          t.context = null,
          t.count = 0,
          10 > N.length && N.push(t)
      }
      function D(t, e, n, r) {
          var o = typeof t;
          "undefined" !== o && "boolean" !== o || (t = null);
          var a = !1;
          if (null === t)
              a = !0;
          else
              switch (o) {
              case "string":
              case "number":
                  a = !0;
                  break;
              case "object":
                  switch (t.$$typeof) {
                  case i:
                  case s:
                      a = !0
                  }
              }
          if (a)
              return n(r, t, "" === e ? "." + M(t, 0) : e),
              1;
          if (a = 0,
          e = "" === e ? "." : e + ":",
          Array.isArray(t))
              for (var l = 0; l < t.length; l++) {
                  var u = e + M(o = t[l], l);
                  a += D(o, u, n, r)
              }
          else if (null === t || "object" !== typeof t ? u = null : u = "function" === typeof (u = g && t[g] || t["@@iterator"]) ? u : null,
          "function" === typeof u)
              for (t = u.call(t),
              l = 0; !(o = t.next()).done; )
                  a += D(o = o.value, u = e + M(o, l++), n, r);
          else
              "object" === o && b("31", "[object Object]" === (n = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, "");
          return a
      }
      function U(t, e, n) {
          return null == t ? 0 : D(t, "", e, n)
      }
      function M(t, e) {
          return "object" === typeof t && null !== t && null != t.key ? function(t) {
              var e = {
                  "=": "=0",
                  ":": "=2"
              };
              return "$" + ("" + t).replace(/[=:]/g, (function(t) {
                  return e[t]
              }
              ))
          }(t.key) : e.toString(36)
      }
      function X(t, e) {
          t.func.call(t.context, e, t.count++)
      }
      function F(t, e, n) {
          var r = t.result
            , o = t.keyPrefix;
          t = t.func.call(t.context, e, t.count++),
          Array.isArray(t) ? Y(t, r, n, (function(t) {
              return t
          }
          )) : null != t && (_(t) && (t = function(t, e) {
              return {
                  $$typeof: i,
                  type: t.type,
                  key: e,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner
              }
          }(t, o + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(R, "$&/") + "/") + n)),
          r.push(t))
      }
      function Y(t, e, n, r, o) {
          var i = "";
          null != n && (i = ("" + n).replace(R, "$&/") + "/"),
          U(t, F, e = k(e, i, r, o)),
          B(e)
      }
      function G() {
          var t = T.current;
          return null === t && b("321"),
          t
      }
      var H = {
          Children: {
              map: function(t, e, n) {
                  if (null == t)
                      return t;
                  var r = [];
                  return Y(t, r, null, e, n),
                  r
              },
              forEach: function(t, e, n) {
                  if (null == t)
                      return t;
                  U(t, X, e = k(null, null, e, n)),
                  B(e)
              },
              count: function(t) {
                  return U(t, (function() {
                      return null
                  }
                  ), null)
              },
              toArray: function(t) {
                  var e = [];
                  return Y(t, e, null, (function(t) {
                      return t
                  }
                  )),
                  e
              },
              only: function(t) {
                  return _(t) || b("143"),
                  t
              }
          },
          createRef: function() {
              return {
                  current: null
              }
          },
          Component: S,
          PureComponent: w,
          createContext: function(t, e) {
              return void 0 === e && (e = null),
              (t = {
                  $$typeof: c,
                  _calculateChangedBits: e,
                  _currentValue: t,
                  _currentValue2: t,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null
              }).Provider = {
                  $$typeof: p,
                  _context: t
              },
              t.Consumer = t
          },
          forwardRef: function(t) {
              return {
                  $$typeof: f,
                  render: t
              }
          },
          lazy: function(t) {
              return {
                  $$typeof: m,
                  _ctor: t,
                  _status: -1,
                  _result: null
              }
          },
          memo: function(t, e) {
              return {
                  $$typeof: y,
                  type: t,
                  compare: void 0 === e ? null : e
              }
          },
          useCallback: function(t, e) {
              return G().useCallback(t, e)
          },
          useContext: function(t, e) {
              return G().useContext(t, e)
          },
          useEffect: function(t, e) {
              return G().useEffect(t, e)
          },
          useImperativeHandle: function(t, e, n) {
              return G().useImperativeHandle(t, e, n)
          },
          useDebugValue: function() {},
          useLayoutEffect: function(t, e) {
              return G().useLayoutEffect(t, e)
          },
          useMemo: function(t, e) {
              return G().useMemo(t, e)
          },
          useReducer: function(t, e, n) {
              return G().useReducer(t, e, n)
          },
          useRef: function(t) {
              return G().useRef(t)
          },
          useState: function(t) {
              return G().useState(t)
          },
          Fragment: a,
          StrictMode: l,
          Suspense: d,
          createElement: A,
          cloneElement: function(t, e, n) {
              (null === t || void 0 === t) && b("267", t);
              var o = void 0
                , s = r({}, t.props)
                , a = t.key
                , l = t.ref
                , u = t._owner;
              if (null != e) {
                  void 0 !== e.ref && (l = e.ref,
                  u = O.current),
                  void 0 !== e.key && (a = "" + e.key);
                  var p = void 0;
                  for (o in t.type && t.type.defaultProps && (p = t.type.defaultProps),
                  e)
                      I.call(e, o) && !L.hasOwnProperty(o) && (s[o] = void 0 === e[o] && void 0 !== p ? p[o] : e[o])
              }
              if (1 === (o = arguments.length - 2))
                  s.children = n;
              else if (1 < o) {
                  p = Array(o);
                  for (var c = 0; c < o; c++)
                      p[c] = arguments[c + 2];
                  s.children = p
              }
              return {
                  $$typeof: i,
                  type: t.type,
                  key: a,
                  ref: l,
                  props: s,
                  _owner: u
              }
          },
          createFactory: function(t) {
              var e = A.bind(null, t);
              return e.type = t,
              e
          },
          isValidElement: _,
          version: "16.8.6",
          unstable_ConcurrentMode: h,
          unstable_Profiler: u,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
              ReactCurrentDispatcher: T,
              ReactCurrentOwner: O,
              assign: r
          }
      }
        , q = {
          default: H
      }
        , W = q && H || q;
      t.exports = W.default || W
  },
  106: function(t, e) {
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
  },
  12: function(t, e) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || new Function("return this")()
      } catch (r) {
          "object" === typeof window && (n = window)
      }
      t.exports = n
  },
  1342: function(t, e, n) {
      (function(t) {
          n(1343),
          t.ClipperLib = n(357),
          n(358),
          t.saveAs = n(1344),
          t.io = n(359),
          n(1346),
          n(1347),
          t.opentype = n(1359),
          n(1349),
          t.ReactObserver = n(1350),
          t.ActionCable = n(1351)
      }
      ).call(this, n(12))
  },
  1343: function(t, e) {
      !function() {
          Raphael = {};
          var t = String
            , e = t.prototype.toLowerCase
            , n = Math
            , r = n.max
            , o = n.PI
            , i = n.abs
            , s = "array"
            , a = Object.prototype.toString
            , l = {
              NaN: 1,
              Infinity: 1,
              "-Infinity": 1
          }
            , u = parseFloat
            , p = t.prototype.toUpperCase
            , c = "hasOwnProperty"
            , h = /,?([achlmqrstvxz]),?/gi
            , f = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi
            , d = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi;
          function y(t, e) {
              for (var n = 0, r = t.length; n < r; n++)
                  if (t[n] === e)
                      return t.push(t.splice(n, 1)[0])
          }
          function m(t, e, n) {
              return function r() {
                  var o = Array.prototype.slice.call(arguments, 0)
                    , i = o.join("\u2400")
                    , s = r.cache = r.cache || {}
                    , a = r.count = r.count || [];
                  return s[c](i) ? (y(a, i),
                  n ? n(s[i]) : s[i]) : (a.length >= 1e3 && delete s[a.shift()],
                  a.push(i),
                  s[i] = t.apply(e, o),
                  n ? n(s[i]) : s[i])
              }
          }
          function g(t) {
              var e = w(t);
              return e.toString = function() {
                  return this.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1")
              }
              ,
              e
          }
          function v(t) {
              var e = v.ps = v.ps || {};
              return e[t] ? e[t].sleep = 100 : e[t] = {
                  sleep: 100
              },
              setTimeout((function() {
                  for (var n in e)
                      e[c](n) && n != t && (e[n].sleep--,
                      !e[n].sleep && delete e[n])
              }
              )),
              e[t]
          }
          function b(t) {
              var e = v(t);
              if (e.abs)
                  return g(e.abs);
              if (S(t, s) && S(t && t[0], s) || (t = C(t)),
              !t || !t.length)
                  return [["M", 0, 0]];
              var n = []
                , r = 0
                , o = 0
                , i = 0
                , a = 0
                , l = 0;
              "M" == t[0][0] && (i = r = +t[0][1],
              a = o = +t[0][2],
              l++,
              n[0] = ["M", r, o]);
              for (var u, c, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), f = l, d = t.length; f < d; f++) {
                  if (n.push(u = []),
                  (c = t[f])[0] != p.call(c[0]))
                      switch (u[0] = p.call(c[0]),
                      u[0]) {
                      case "A":
                          u[1] = c[1],
                          u[2] = c[2],
                          u[3] = c[3],
                          u[4] = c[4],
                          u[5] = c[5],
                          u[6] = +(c[6] + r),
                          u[7] = +(c[7] + o);
                          break;
                      case "V":
                          u[1] = +c[1] + o;
                          break;
                      case "H":
                          u[1] = +c[1] + r;
                          break;
                      case "R":
                          for (var y = [r, o].concat(c.slice(1)), m = 2, b = y.length; m < b; m++)
                              y[m] = +y[m] + r,
                              y[++m] = +y[m] + o;
                          n.pop(),
                          n = n.concat(P(y, h));
                          break;
                      case "M":
                          i = +c[1] + r,
                          a = +c[2] + o;
                      default:
                          for (m = 1,
                          b = c.length; m < b; m++)
                              u[m] = +c[m] + (m % 2 ? r : o)
                      }
                  else if ("R" == c[0])
                      y = [r, o].concat(c.slice(1)),
                      n.pop(),
                      n = n.concat(P(y, h)),
                      u = ["R"].concat(c.slice(-2));
                  else
                      for (var w = 0, E = c.length; w < E; w++)
                          u[w] = c[w];
                  switch (u[0]) {
                  case "Z":
                      r = i,
                      o = a;
                      break;
                  case "H":
                      r = u[1];
                      break;
                  case "V":
                      o = u[1];
                      break;
                  case "M":
                      i = u[u.length - 2],
                      a = u[u.length - 1];
                  default:
                      r = u[u.length - 2],
                      o = u[u.length - 1]
                  }
              }
              return n.toString = x,
              e.abs = g(n),
              n
          }
          function x() {
              return this.join(",").replace(h, "$1")
          }
          function P(t, e) {
              for (var n = [], r = 0, o = t.length; o - 2 * !e > r; r += 2) {
                  var i = [{
                      x: +t[r - 2],
                      y: +t[r - 1]
                  }, {
                      x: +t[r],
                      y: +t[r + 1]
                  }, {
                      x: +t[r + 2],
                      y: +t[r + 3]
                  }, {
                      x: +t[r + 4],
                      y: +t[r + 5]
                  }];
                  e ? r ? o - 4 == r ? i[3] = {
                      x: +t[0],
                      y: +t[1]
                  } : o - 2 == r && (i[2] = {
                      x: +t[0],
                      y: +t[1]
                  },
                  i[3] = {
                      x: +t[2],
                      y: +t[3]
                  }) : i[0] = {
                      x: +t[o - 2],
                      y: +t[o - 1]
                  } : o - 4 == r ? i[3] = i[2] : r || (i[0] = {
                      x: +t[r],
                      y: +t[r + 1]
                  }),
                  n.push(["C", (-i[0].x + 6 * i[1].x + i[2].x) / 6, (-i[0].y + 6 * i[1].y + i[2].y) / 6, (i[1].x + 6 * i[2].x - i[3].x) / 6, (i[1].y + 6 * i[2].y - i[3].y) / 6, i[2].x, i[2].y])
              }
              return n
          }
          function S(t, n) {
              return "finite" == (n = e.call(n)) ? !l[c](+t) : "array" == n ? t instanceof Array : "null" == n && null === t || n == typeof t && null !== t || "object" == n && t === Object(t) || "array" == n && Array.isArray && Array.isArray(t) || a.call(t).slice(8, -1).toLowerCase() == n
          }
          function C(e) {
              if (!e)
                  return null;
              var n = v(e);
              if (n.arr)
                  return g(n.arr);
              var r = {
                  a: 7,
                  c: 6,
                  h: 1,
                  l: 2,
                  m: 2,
                  r: 4,
                  q: 4,
                  s: 4,
                  t: 2,
                  v: 1,
                  z: 0
              }
                , o = [];
              return S(e, s) && S(e[0], s) && (o = g(e)),
              o.length || t(e).replace(f, (function(t, e, n) {
                  var i = []
                    , s = e.toLowerCase();
                  if (n.replace(d, (function(t, e) {
                      e && i.push(+e)
                  }
                  )),
                  "m" == s && i.length > 2 && (o.push([e].concat(i.splice(0, 2))),
                  s = "l",
                  e = "m" == e ? "l" : "L"),
                  "r" == s)
                      o.push([e].concat(i));
                  else
                      for (; i.length >= r[s] && (o.push([e].concat(i.splice(0, r[s]))),
                      r[s]); )
                          ;
              }
              )),
              o.toString = C,
              n.arr = g(o),
              o
          }
          function w(t) {
              if ("function" == typeof t || Object(t) !== t)
                  return t;
              var e = new t.constructor;
              for (var n in t)
                  t[c](n) && (e[n] = w(t[n]));
              return e
          }
          function E(t, e, n, r) {
              return [t, e, n, r, n, r]
          }
          function T(t, e, n, r, o, i) {
              var s = 1 / 3
                , a = 2 / 3;
              return [s * t + a * n, s * e + a * r, s * o + a * n, s * i + a * r, o, i]
          }
          function O(t, e, r, s, a, l, u, p, c, h) {
              if (0 === r || 0 === s)
                  return E(t, e, p, c);
              var f, d = 120 * o / 180, y = o / 180 * (+a || 0), g = [], v = m((function(t, e, r) {
                  return {
                      x: t * n.cos(r) - e * n.sin(r),
                      y: t * n.sin(r) + e * n.cos(r)
                  }
              }
              ));
              if (h)
                  L = h[0],
                  A = h[1],
                  T = h[2],
                  I = h[3];
              else {
                  t = (f = v(t, e, -y)).x,
                  e = f.y,
                  p = (f = v(p, c, -y)).x,
                  c = f.y;
                  n.cos(o / 180 * a),
                  n.sin(o / 180 * a);
                  var b = (t - p) / 2
                    , x = (e - c) / 2
                    , P = b * b / (r * r) + x * x / (s * s);
                  P > 1 && (r *= P = n.sqrt(P),
                  s *= P);
                  var S = r * r
                    , C = s * s
                    , w = (l == u ? -1 : 1) * n.sqrt(i((S * C - S * x * x - C * b * b) / (S * x * x + C * b * b)))
                    , T = w * r * x / s + (t + p) / 2
                    , I = w * -s * b / r + (e + c) / 2
                    , L = n.asin(((e - I) / s).toFixed(9))
                    , A = n.asin(((c - I) / s).toFixed(9));
                  (L = t < T ? o - L : L) < 0 && (L = 2 * o + L),
                  (A = p < T ? o - A : A) < 0 && (A = 2 * o + A),
                  u && L > A && (L -= 2 * o),
                  !u && A > L && (A -= 2 * o)
              }
              var _ = A - L;
              if (i(_) > d) {
                  var R = A
                    , N = p
                    , k = c;
                  A = L + d * (u && A > L ? 1 : -1),
                  g = O(p = T + r * n.cos(A), c = I + s * n.sin(A), r, s, a, 0, u, N, k, [A, R, T, I])
              }
              _ = A - L;
              var B = n.cos(L)
                , D = n.sin(L)
                , U = n.cos(A)
                , M = n.sin(A)
                , X = n.tan(_ / 4)
                , F = 4 / 3 * r * X
                , Y = 4 / 3 * s * X
                , G = [t, e]
                , H = [t + F * D, e - Y * B]
                , q = [p + F * M, c - Y * U]
                , W = [p, c];
              if (H[0] = 2 * G[0] - H[0],
              H[1] = 2 * G[1] - H[1],
              h)
                  return [H, q, W].concat(g);
              for (var z = [], j = 0, V = (g = [H, q, W].concat(g).join().split(",")).length; j < V; j++)
                  z[j] = j % 2 ? v(g[j - 1], g[j], y).y : v(g[j], g[j + 1], y).x;
              return z
          }
          Raphael.path2curve = m((function(t, e) {
              var n = !e && v(t);
              if (!e && n.curve)
                  return g(n.curve);
              for (var o = b(t), i = e && b(e), s = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null
              }, a = {
                  x: 0,
                  y: 0,
                  bx: 0,
                  by: 0,
                  X: 0,
                  Y: 0,
                  qx: null,
                  qy: null
              }, l = function(t, e, n) {
                  var r, o;
                  if (!t)
                      return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                  switch (!(t[0]in {
                      T: 1,
                      Q: 1
                  }) && (e.qx = e.qy = null),
                  t[0]) {
                  case "M":
                      e.X = t[1],
                      e.Y = t[2];
                      break;
                  case "A":
                      t = ["C"].concat(O.apply(0, [e.x, e.y].concat(t.slice(1))));
                      break;
                  case "S":
                      "C" == n || "S" == n ? (r = 2 * e.x - e.bx,
                      o = 2 * e.y - e.by) : (r = e.x,
                      o = e.y),
                      t = ["C", r, o].concat(t.slice(1));
                      break;
                  case "T":
                      "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx,
                      e.qy = 2 * e.y - e.qy) : (e.qx = e.x,
                      e.qy = e.y),
                      t = ["C"].concat(T(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                      break;
                  case "Q":
                      e.qx = t[1],
                      e.qy = t[2],
                      t = ["C"].concat(T(e.x, e.y, t[1], t[2], t[3], t[4]));
                      break;
                  case "L":
                      t = ["C"].concat(E(e.x, e.y, t[1], t[2]));
                      break;
                  case "H":
                      t = ["C"].concat(E(e.x, e.y, t[1], e.y));
                      break;
                  case "V":
                      t = ["C"].concat(E(e.x, e.y, e.x, t[1]));
                      break;
                  case "Z":
                      t = ["C"].concat(E(e.x, e.y, e.X, e.Y))
                  }
                  return t
              }, p = function(t, e) {
                  if (t[e].length > 7) {
                      t[e].shift();
                      for (var n = t[e]; n.length; )
                          h[e] = "A",
                          i && (f[e] = "A"),
                          t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                      t.splice(e, 1),
                      x = r(o.length, i && i.length || 0)
                  }
              }, c = function(t, e, n, s, a) {
                  t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", s.x, s.y]),
                  n.bx = 0,
                  n.by = 0,
                  n.x = t[a][1],
                  n.y = t[a][2],
                  x = r(o.length, i && i.length || 0))
              }, h = [], f = [], d = "", y = "", m = 0, x = r(o.length, i && i.length || 0); m < x; m++) {
                  o[m] && (d = o[m][0]),
                  "C" != d && (h[m] = d,
                  m && (y = h[m - 1])),
                  o[m] = l(o[m], s, y),
                  "A" != h[m] && "C" == d && (h[m] = "C"),
                  p(o, m),
                  i && (i[m] && (d = i[m][0]),
                  "C" != d && (f[m] = d,
                  m && (y = f[m - 1])),
                  i[m] = l(i[m], a, y),
                  "A" != f[m] && "C" == d && (f[m] = "C"),
                  p(i, m)),
                  c(o, i, s, a, m),
                  c(i, o, a, s, m);
                  var P = o[m]
                    , S = i && i[m]
                    , C = P.length
                    , w = i && S.length;
                  s.x = P[C - 2],
                  s.y = P[C - 1],
                  s.bx = u(P[C - 4]) || s.x,
                  s.by = u(P[C - 3]) || s.y,
                  a.bx = i && (u(S[w - 4]) || a.x),
                  a.by = i && (u(S[w - 3]) || a.y),
                  a.x = i && S[w - 2],
                  a.y = i && S[w - 1]
              }
              return i || (n.curve = g(o)),
              i ? [o, i] : o
          }
          ), null, g)
      }()
  },
  1344: function(t, e, n) {
      (function(t) {
          var r, o = o || "undefined" !== typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(t) {
              "use strict";
              if ("undefined" === typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                  var e = t.document
                    , n = e.createElementNS("http://www.w3.org/1999/xhtml", "a")
                    , r = "download"in n
                    , o = function(n) {
                      var r = e.createEvent("MouseEvents");
                      r.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                      n.dispatchEvent(r)
                  }
                    , i = t.webkitRequestFileSystem
                    , s = t.requestFileSystem || i || t.mozRequestFileSystem
                    , a = function(e) {
                      (t.setImmediate || t.setTimeout)((function() {
                          throw e
                      }
                      ), 0)
                  }
                    , l = 0
                    , u = function(e) {
                      var n = function() {
                          "string" === typeof e ? (t.URL || t.webkitURL || t).revokeObjectURL(e) : e.remove()
                      };
                      t.chrome ? n() : setTimeout(n, 10)
                  }
                    , p = function(t, e, n) {
                      for (var r = (e = [].concat(e)).length; r--; ) {
                          var o = t["on" + e[r]];
                          if ("function" === typeof o)
                              try {
                                  o.call(t, n || t)
                              } catch (i) {
                                  a(i)
                              }
                      }
                  }
                    , c = function(e, a) {
                      var c, h, f, d = this, y = e.type, m = !1, g = function() {
                          p(d, ["writestart", "progress", "write", "writeend"])
                      }, v = function() {
                          !m && c || (c = (t.URL || t.webkitURL || t).createObjectURL(e)),
                          h ? h.location.href = c : void 0 == t.open(c, "_blank") && "undefined" !== typeof safari && (t.location.href = c),
                          d.readyState = d.DONE,
                          g(),
                          u(c)
                      }, b = function(t) {
                          return function() {
                              if (d.readyState !== d.DONE)
                                  return t.apply(this, arguments)
                          }
                      }, x = {
                          create: !0,
                          exclusive: !1
                      };
                      d.readyState = d.INIT,
                      a || (a = "download"),
                      r ? (c = (t.URL || t.webkitURL || t).createObjectURL(e),
                      n.href = c,
                      n.download = a,
                      o(n),
                      d.readyState = d.DONE,
                      g(),
                      u(c)) : (t.chrome && y && "application/octet-stream" !== y && (f = e.slice || e.webkitSlice,
                      e = f.call(e, 0, e.size, "application/octet-stream"),
                      m = !0),
                      i && "download" !== a && (a += ".download"),
                      ("application/octet-stream" === y || i) && (h = t),
                      s ? (l += e.size,
                      s(t.TEMPORARY, l, b((function(t) {
                          t.root.getDirectory("saved", x, b((function(t) {
                              var n = function() {
                                  t.getFile(a, x, b((function(t) {
                                      t.createWriter(b((function(n) {
                                          n.onwriteend = function(e) {
                                              h.location.href = t.toURL(),
                                              d.readyState = d.DONE,
                                              p(d, "writeend", e),
                                              u(t)
                                          }
                                          ,
                                          n.onerror = function() {
                                              var t = n.error;
                                              t.code !== t.ABORT_ERR && v()
                                          }
                                          ,
                                          ["writestart", "progress", "write", "abort"].forEach((function(t) {
                                              n["on" + t] = d["on" + t]
                                          }
                                          )),
                                          n.write(e),
                                          d.abort = function() {
                                              n.abort(),
                                              d.readyState = d.DONE
                                          }
                                          ,
                                          d.readyState = d.WRITING
                                      }
                                      )), v)
                                  }
                                  )), v)
                              };
                              t.getFile(a, {
                                  create: !1
                              }, b((function(t) {
                                  t.remove(),
                                  n()
                              }
                              )), b((function(t) {
                                  t.code === t.NOT_FOUND_ERR ? n() : v()
                              }
                              )))
                          }
                          )), v)
                      }
                      )), v)) : v())
                  }
                    , h = c.prototype;
                  return h.abort = function() {
                      this.readyState = this.DONE,
                      p(this, "abort")
                  }
                  ,
                  h.readyState = h.INIT = 0,
                  h.WRITING = 1,
                  h.DONE = 2,
                  h.error = h.onwritestart = h.onprogress = h.onwrite = h.onabort = h.onerror = h.onwriteend = null,
                  function(t, e) {
                      return new c(t,e)
                  }
              }
          }("undefined" !== typeof self && self || "undefined" !== typeof window && window || this.content);
          null !== t ? t.exports = o : null !== n(1345) && null != n(519) && (void 0 === (r = function() {
              return o
          }
          .apply(e, [])) || (t.exports = r))
      }
      ).call(this, n(106)(t))
  },
  1345: function(t, e) {
      t.exports = function() {
          throw new Error("define cannot be used indirect")
      }
  },
  1346: function(t, e) {
      THREE.OrbitControls = function(t, e) {
          this.object = t,
          this.domElement = void 0 !== e ? e : document,
          this.enabled = !0,
          this.center = new THREE.Vector3,
          this.userZoom = !0,
          this.userRotate = !0,
          this.userRotateSpeed = 1,
          this.userPan = !0,
          this.userPanSpeed = .1,
          this.autoRotate = !1,
          this.autoRotateSpeed = 2,
          this.minPolarAngle = 0,
          this.maxPolarAngle = Math.PI,
          this.minDistance = 0,
          this.maxDistance = 1 / 0,
          this.keys = {
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              BOTTOM: 40
          };
          var n, r, o = this, i = 1800, s = new THREE.Vector2, a = new THREE.Vector2, l = new THREE.Vector2, u = new THREE.Vector2, p = new THREE.Vector2, c = new THREE.Vector2, h = 0, f = 0, d = 0, y = 1, m = 1, g = new THREE.Vector3, v = -1, b = 0, x = 1, P = 2, S = v, C = {
              type: "change"
          };
          this.rotateLeft = function(t) {
              void 0 === t && (t = w()),
              d -= t
          }
          ,
          this.rotateRight = function(t) {
              void 0 === t && (t = w()),
              d += t
          }
          ,
          this.rotateUp = function(t) {
              void 0 === t && (t = w()),
              f -= t
          }
          ,
          this.rotateDown = function(t) {
              void 0 === t && (t = w()),
              f += t
          }
          ,
          this.zoomCamera = function() {
              var t = Math.pow(2, 0 - h);
              y *= t,
              S !== x && (h = 0)
          }
          ,
          this.pan = function(t) {
              t.transformD(this.object.matrix),
              t.multiplyScalar(o.userPanSpeed),
              this.object.position.add(t),
              this.center.add(t)
          }
          ,
          this.panForReal = function(t) {
              this.object.position.add(t),
              this.center.add(t),
              this.object.lookAt(this.center)
          }
          ;
          new THREE.Vector3;
          function w() {
              return 2 * Math.PI / 60 / 60 * o.autoRotateSpeed
          }
          function E(t) {
              if (!1 !== o.enabled) {
                  if (t.preventDefault(),
                  S === b)
                      a.set(t.clientX, t.clientY),
                      l.subVectors(a, s),
                      o.rotateLeft(2 * Math.PI * l.x / i * o.userRotateSpeed),
                      o.rotateUp(2 * Math.PI * l.y / i * o.userRotateSpeed),
                      s.copy(a);
                  else if (S === x)
                      p.set(t.clientX, t.clientY),
                      c.subVectors(p, u),
                      h = 1e-4 * c.y;
                  else if (S === P) {
                      var e = t.movementX || t.mozMovementX || t.webkitMovementX || t.x - n
                        , f = t.movementY || t.mozMovementY || t.webkitMovementY || t.y - r;
                      n = t.x,
                      r = t.y,
                      o.pan(new THREE.Vector3(-e * m / 50,f * m / 50,0))
                  }
                  o.update()
              }
          }
          function T(t) {
              !1 !== o.enabled && !1 !== o.userRotate && (document.removeEventListener("mousemove", E, !1),
              document.removeEventListener("mouseup", T, !1),
              S = v,
              o.update())
          }
          THREE.Vector3.prototype.transformD = function(t) {
              var e = this.x
                , n = this.y
                , r = this.z
                , o = t.elements;
              return this.x = o[0] * e + o[4] * n + o[8] * r,
              this.y = o[1] * e + o[5] * n + o[9] * r,
              this.z = o[2] * e + o[6] * n + o[10] * r,
              this
          }
          ,
          this.update = function() {
              this.zoomCamera();
              var t = this.object.position
                , e = t.clone().sub(this.center)
                , n = Math.atan2(e.y, e.x)
                , r = Math.atan2(Math.sqrt(e.x * e.x + e.y * e.y), e.z);
              this.autoRotate && this.rotateLeft(w()),
              n += d,
              r += f,
              r = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, r));
              var o = e.length() * y;
              o = Math.max(this.minDistance, Math.min(this.maxDistance, o)),
              m = o,
              e.x = o * Math.sin(r) * Math.cos(n),
              e.y = o * Math.sin(r) * Math.sin(n),
              e.z = o * Math.cos(r),
              t.copy(this.center).add(e),
              this.object.lookAt(this.center),
              d = 0,
              f = 0,
              y = 1,
              g.distanceTo(this.object.position) > 0 && (this.dispatchEvent(C),
              g.copy(this.object.position))
          }
          ;
          this.onKeyDown = onKeyDown = function(t) {
              switch (t.keyCode) {
              case o.keys.UP:
                  o.pan(new THREE.Vector3(0,1,0));
                  break;
              case o.keys.BOTTOM:
                  o.pan(new THREE.Vector3(0,-1,0));
                  break;
              case o.keys.LEFT:
                  o.pan(new THREE.Vector3(-1,0,0));
                  break;
              case o.keys.RIGHT:
                  o.pan(new THREE.Vector3(1,0,0))
              }
              return !0,
              setTimeout((function() {
                  !1
              }
              ), 100),
              o.update(),
              !0
          }
          ,
          this.domElement.addEventListener("contextmenu", (function(t) {
              t.preventDefault()
          }
          ), !1),
          this.domElement.addEventListener("mousedown", (function(t) {
              !1 !== o.enabled && !1 !== o.userRotate && (n = t.x,
              r = t.y,
              0 !== t.button || t.shiftKey ? (1 === t.button || 2 === t.button || 0 === t.button && t.shiftKey) && (S = P) : (S = b,
              s.set(t.clientX, t.clientY)),
              document.addEventListener("mousemove", E, !1),
              document.addEventListener("mouseup", T, !1),
              o.update())
          }
          )),
          this.domElement.addEventListener("wheel", (function(t) {
              if (!1 !== o.enabled && !1 !== o.userZoom) {
                  t.preventDefault(),
                  t.stopPropagation();
                  var e = t.deltaY;
                  1 !== t.deltaMode && 2 !== t.deltaMode || (e *= 10);
                  h -= e / 500,
                  o.update()
              }
          }
          )),
          this.domElement.addEventListener("touchstart", (function(t) {
              if (!1 !== o.enabled && !1 !== o.userRotate) {
                  t.preventDefault(),
                  S = b;
                  var e = t.touches[0];
                  s.set(e.clientX, e.clientY),
                  o.update()
              }
          }
          )),
          this.domElement.addEventListener("touchmove", (function(t) {
              if (!1 !== o.enabled) {
                  t.preventDefault();
                  var e = t.touches[0];
                  S === b && (a.set(e.clientX, e.clientY),
                  l.subVectors(a, s),
                  o.rotateLeft(2 * Math.PI * l.x / i * o.userRotateSpeed),
                  o.rotateUp(2 * Math.PI * l.y / i * o.userRotateSpeed),
                  s.copy(a)),
                  o.update()
              }
          }
          )),
          this.domElement.addEventListener("touchend", (function(t) {
              !1 !== o.enabled && !1 !== o.userRotate && (S = v,
              o.update())
          }
          )),
          this.domElement.addEventListener("touchcancel", (function(t) {
              !1 !== o.enabled && !1 !== o.userRotate && (S = v,
              o.update())
          }
          ))
      }
      ,
      THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype)
  },
  1347: function(t, e) {
      THREE.STLLoader = function(t) {
          this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager
      }
      ,
      THREE.STLLoader.prototype = {
          constructor: THREE.STLLoader,
          load: function(t, e, n, r) {
              var o = this
                , i = new THREE.FileLoader(o.manager);
              i.setResponseType("arraybuffer"),
              i.load(t, (function(t) {
                  e(o.parse(t))
              }
              ), n, r)
          },
          parse: function(t) {
              var e = this.ensureBinary(t);
              return function() {
                  var t;
                  if (50,
                  84 + 50 * (t = new DataView(e)).getUint32(80, !0) === t.byteLength)
                      return !0;
                  for (var n = [115, 111, 108, 105, 100], r = 0; r < 5; r++)
                      if (n[r] != t.getUint8(r, !1))
                          return !0;
                  return !1
              }() ? this.parseBinary(e) : this.parseASCII(this.ensureString(t))
          },
          parseBinary: function(t) {
              for (var e, n, r, o, i, s, a, l, u = new DataView(t), p = u.getUint32(80, !0), c = !1, h = 0; h < 70; h++)
                  1129270351 == u.getUint32(h, !1) && 82 == u.getUint8(h + 4) && 61 == u.getUint8(h + 5) && (c = !0,
                  o = [],
                  i = u.getUint8(h + 6) / 255,
                  s = u.getUint8(h + 7) / 255,
                  a = u.getUint8(h + 8) / 255,
                  l = u.getUint8(h + 9) / 255);
              for (var f = new THREE.BufferGeometry, d = [], y = [], m = 0; m < p; m++) {
                  var g = 84 + 50 * m
                    , v = u.getFloat32(g, !0)
                    , b = u.getFloat32(g + 4, !0)
                    , x = u.getFloat32(g + 8, !0);
                  if (c) {
                      var P = u.getUint16(g + 48, !0);
                      0 === (32768 & P) ? (e = (31 & P) / 31,
                      n = (P >> 5 & 31) / 31,
                      r = (P >> 10 & 31) / 31) : (e = i,
                      n = s,
                      r = a)
                  }
                  for (var S = 1; S <= 3; S++) {
                      var C = g + 12 * S;
                      d.push(u.getFloat32(C, !0)),
                      d.push(u.getFloat32(C + 4, !0)),
                      d.push(u.getFloat32(C + 8, !0)),
                      y.push(v, b, x),
                      c && o.push(e, n, r)
                  }
              }
              return f.addAttribute("position", new THREE.BufferAttribute(new Float32Array(d),3)),
              f.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(y),3)),
              c && (f.addAttribute("color", new THREE.BufferAttribute(new Float32Array(o),3)),
              f.hasColors = !0,
              f.alpha = l),
              f
          },
          parseASCII: function(t) {
              var e, n, r, o, i, s;
              e = new THREE.BufferGeometry,
              n = /facet([\s\S]*?)endfacet/g;
              for (var a = [], l = [], u = new THREE.Vector3; null !== (i = n.exec(t)); ) {
                  for (s = i[0],
                  r = /normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g; null !== (i = r.exec(s)); )
                      u.x = parseFloat(i[1]),
                      u.y = parseFloat(i[3]),
                      u.z = parseFloat(i[5]);
                  for (o = /vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g; null !== (i = o.exec(s)); )
                      a.push(parseFloat(i[1]), parseFloat(i[3]), parseFloat(i[5])),
                      l.push(u.x, u.y, u.z)
              }
              return e.addAttribute("position", new THREE.BufferAttribute(new Float32Array(a),3)),
              e.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(l),3)),
              e
          },
          ensureString: function(t) {
              if ("string" !== typeof t) {
                  var e = new Uint8Array(t);
                  if (void 0 !== window.TextDecoder)
                      return (new TextDecoder).decode(e);
                  for (var n = "", r = 0, o = t.byteLength; r < o; r++)
                      n += String.fromCharCode(e[r]);
                  return n
              }
              return t
          },
          ensureBinary: function(t) {
              if ("string" === typeof t) {
                  for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
                      e[n] = 255 & t.charCodeAt(n);
                  return e.buffer || e
              }
              return t
          }
      }
  },
  1348: function(t, e) {
      String.prototype.codePointAt || function() {
          "use strict";
          var t = function() {
              try {
                  var t = {}
                    , e = Object.defineProperty
                    , n = e(t, t, t) && e
              } catch (r) {}
              return n
          }()
            , e = function(t) {
              if (null == this)
                  throw TypeError();
              var e = String(this)
                , n = e.length
                , r = t ? Number(t) : 0;
              if (r != r && (r = 0),
              !(r < 0 || r >= n)) {
                  var o, i = e.charCodeAt(r);
                  return i >= 55296 && i <= 56319 && n > r + 1 && (o = e.charCodeAt(r + 1)) >= 56320 && o <= 57343 ? 1024 * (i - 55296) + o - 56320 + 65536 : i
              }
          };
          t ? t(String.prototype, "codePointAt", {
              value: e,
              configurable: !0,
              writable: !0
          }) : String.prototype.codePointAt = e
      }()
  },
  1349: function(t, e, n) {
      var r;
      !function(o, i) {
          "use strict";
          var s = "function"
            , a = "undefined"
            , l = "object"
            , u = "model"
            , p = "name"
            , c = "type"
            , h = "vendor"
            , f = "version"
            , d = "architecture"
            , y = "console"
            , m = "mobile"
            , g = "tablet"
            , v = "smarttv"
            , b = "wearable"
            , x = {
              extend: function(t, e) {
                  for (var n in e)
                      -1 !== "browser cpu device engine os".indexOf(n) && e[n].length % 2 === 0 && (t[n] = e[n].concat(t[n]));
                  return t
              },
              has: function(t, e) {
                  return "string" === typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
              },
              lowerize: function(t) {
                  return t.toLowerCase()
              },
              major: function(t) {
                  return "string" === typeof t ? t.split(".")[0] : i
              }
          }
            , P = {
              rgx: function() {
                  for (var t, e, n, r, o, u, p, c = 0, h = arguments; c < h.length && !u; ) {
                      var f = h[c]
                        , d = h[c + 1];
                      if (typeof t === a)
                          for (r in t = {},
                          d)
                              d.hasOwnProperty(r) && (typeof (o = d[r]) === l ? t[o[0]] = i : t[o] = i);
                      for (e = n = 0; e < f.length && !u; )
                          if (u = f[e++].exec(this.getUA()))
                              for (r = 0; r < d.length; r++)
                                  p = u[++n],
                                  typeof (o = d[r]) === l && o.length > 0 ? 2 == o.length ? typeof o[1] == s ? t[o[0]] = o[1].call(this, p) : t[o[0]] = o[1] : 3 == o.length ? typeof o[1] !== s || o[1].exec && o[1].test ? t[o[0]] = p ? p.replace(o[1], o[2]) : i : t[o[0]] = p ? o[1].call(this, p, o[2]) : i : 4 == o.length && (t[o[0]] = p ? o[3].call(this, p.replace(o[1], o[2])) : i) : t[o] = p || i;
                      c += 2
                  }
                  return t
              },
              str: function(t, e) {
                  for (var n in e)
                      if (typeof e[n] === l && e[n].length > 0) {
                          for (var r = 0; r < e[n].length; r++)
                              if (x.has(e[n][r], t))
                                  return "?" === n ? i : n
                      } else if (x.has(e[n], t))
                          return "?" === n ? i : n;
                  return t
              }
          }
            , S = {
              browser: {
                  oldsafari: {
                      version: {
                          "1.0": "/8",
                          1.2: "/1",
                          1.3: "/3",
                          "2.0": "/412",
                          "2.0.2": "/416",
                          "2.0.3": "/417",
                          "2.0.4": "/419",
                          "?": "/"
                      }
                  }
              },
              device: {
                  amazon: {
                      model: {
                          "Fire Phone": ["SD", "KF"]
                      }
                  },
                  sprint: {
                      model: {
                          "Evo Shift 4G": "7373KT"
                      },
                      vendor: {
                          HTC: "APA",
                          Sprint: "Sprint"
                      }
                  }
              },
              os: {
                  windows: {
                      version: {
                          ME: "4.90",
                          "NT 3.11": "NT3.51",
                          "NT 4.0": "NT4.0",
                          2e3: "NT 5.0",
                          XP: ["NT 5.1", "NT 5.2"],
                          Vista: "NT 6.0",
                          7: "NT 6.1",
                          8: "NT 6.2",
                          8.1: "NT 6.3",
                          10: ["NT 6.4", "NT 10.0"],
                          RT: "ARM"
                      }
                  }
              }
          }
            , C = {
              browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [p, f], [/\s(opr)\/([\w\.]+)/i], [[p, "Opera"], f], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [p, f], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[p, "IE"], f], [/(edge)\/((\d+)?[\w\.]+)/i], [p, f], [/(yabrowser)\/([\w\.]+)/i], [[p, "Yandex"], f], [/(comodo_dragon)\/([\w\.]+)/i], [[p, /_/g, " "], f], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [p, f], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[p, "UCBrowser"], f], [/(dolfin)\/([\w\.]+)/i], [[p, "Dolphin"], f], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[p, "Chrome"], f], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [f, [p, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [f, [p, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [f, [p, "Facebook"]], [/fxios\/([\w\.-]+)/i], [f, [p, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [f, [p, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [f, p], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [p, [f, P.str, S.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [p, f], [/(navigator|netscape)\/([\w\.-]+)/i], [[p, "Netscape"], f], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [p, f]],
              cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[d, "amd64"]], [/(ia32(?=;))/i], [[d, x.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[d, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[d, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[d, /ower/, "", x.lowerize]], [/(sun4\w)[;\)]/i], [[d, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[d, x.lowerize]]],
              device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [u, h, [c, g]], [/applecoremedia\/[\w\.]+ \((ipad)/], [u, [h, "Apple"], [c, g]], [/(apple\s{0,1}tv)/i], [[u, "Apple TV"], [h, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [h, u, [c, g]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [u, [h, "Amazon"], [c, g]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[u, P.str, S.device.amazon.model], [h, "Amazon"], [c, m]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [u, h, [c, m]], [/\((ip[honed|\s\w*]+);/i], [u, [h, "Apple"], [c, m]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [h, u, [c, m]], [/\(bb10;\s(\w+)/i], [u, [h, "BlackBerry"], [c, m]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [u, [h, "Asus"], [c, g]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[h, "Sony"], [u, "Xperia Tablet"], [c, g]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[h, "Sony"], [u, "Xperia Phone"], [c, m]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [h, u, [c, y]], [/android.+;\s(shield)\sbuild/i], [u, [h, "Nvidia"], [c, y]], [/(playstation\s[34portablevi]+)/i], [u, [h, "Sony"], [c, y]], [/(sprint\s(\w+))/i], [[h, P.str, S.device.sprint.vendor], [u, P.str, S.device.sprint.model], [c, m]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [h, u, [c, g]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [h, [u, /_/g, " "], [c, m]], [/(nexus\s9)/i], [u, [h, "HTC"], [c, g]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [u, [h, "Microsoft"], [c, y]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [h, "Microsoft"], [c, m]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [u, [h, "Motorola"], [c, m]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [u, [h, "Motorola"], [c, g]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[h, "Samsung"], u, [c, g]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[h, "Samsung"], u, [c, m]], [/(samsung);smarttv/i], [h, u, [c, v]], [/\(dtv[\);].+(aquos)/i], [u, [h, "Sharp"], [c, v]], [/sie-(\w+)*/i], [u, [h, "Siemens"], [c, m]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[h, "Nokia"], u, [c, m]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [u, [h, "Acer"], [c, g]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[h, "LG"], u, [c, g]], [/(lg) netcast\.tv/i], [h, u, [c, v]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [u, [h, "LG"], [c, m]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [u, [h, "Lenovo"], [c, g]], [/linux;.+((jolla));/i], [h, u, [c, m]], [/((pebble))app\/[\d\.]+\s/i], [h, u, [c, b]], [/android.+;\s(glass)\s\d/i], [u, [h, "Google"], [c, b]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[u, /_/g, " "], [h, "Xiaomi"], [c, m]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[c, x.lowerize], h, u]],
              engine: [[/windows.+\sedge\/([\w\.]+)/i], [f, [p, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [p, f], [/rv\:([\w\.]+).*(gecko)/i], [f, p]],
              os: [[/microsoft\s(windows)\s(vista|xp)/i], [p, f], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [p, [f, P.str, S.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[p, "Windows"], [f, P.str, S.os.windows.version]], [/\((bb)(10);/i], [[p, "BlackBerry"], f], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [p, f], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[p, "Symbian"], f], [/\((series40);/i], [p], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[p, "Firefox OS"], f], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [p, f], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[p, "Chromium OS"], f], [/(sunos)\s?([\w\.]+\d)*/i], [[p, "Solaris"], f], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [p, f], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[p, "iOS"], [f, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[p, "Mac OS"], [f, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [p, f]]
          }
            , w = function(t, e) {
              if (!(this instanceof w))
                  return new w(t,e).getResult();
              var n = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : "")
                , r = e ? x.extend(C, e) : C;
              return this.getBrowser = function() {
                  var t = P.rgx.apply(this, r.browser);
                  return t.major = x.major(t.version),
                  t
              }
              ,
              this.getCPU = function() {
                  return P.rgx.apply(this, r.cpu)
              }
              ,
              this.getDevice = function() {
                  return P.rgx.apply(this, r.device)
              }
              ,
              this.getEngine = function() {
                  return P.rgx.apply(this, r.engine)
              }
              ,
              this.getOS = function() {
                  return P.rgx.apply(this, r.os)
              }
              ,
              this.getResult = function() {
                  return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU()
                  }
              }
              ,
              this.getUA = function() {
                  return n
              }
              ,
              this.setUA = function(t) {
                  return n = t,
                  this
              }
              ,
              this.setUA(n),
              this
          };
          w.VERSION = "0.7.10",
          w.BROWSER = {
              NAME: p,
              MAJOR: "major",
              VERSION: f
          },
          w.CPU = {
              ARCHITECTURE: d
          },
          w.DEVICE = {
              MODEL: u,
              VENDOR: h,
              TYPE: c,
              CONSOLE: y,
              MOBILE: m,
              SMARTTV: v,
              TABLET: g,
              WEARABLE: b,
              EMBEDDED: "embedded"
          },
          w.ENGINE = {
              NAME: p,
              VERSION: f
          },
          w.OS = {
              NAME: p,
              VERSION: f
          },
          typeof e !== a ? (typeof t !== a && t.exports && (e = t.exports = w),
          e.UAParser = w) : n(519) ? (r = function() {
              return w
          }
          .call(e, n, e, t)) === i || (t.exports = r) : o.UAParser = w;
          var E = o.jQuery || o.Zepto;
          if (typeof E !== a) {
              var T = new w;
              E.ua = T.getResult(),
              E.ua.get = function() {
                  return T.getUA()
              }
              ,
              E.ua.set = function(t) {
                  T.setUA(t);
                  var e = T.getResult();
                  for (var n in e)
                      E.ua[n] = e[n]
              }
          }
      }("object" === typeof window ? window : this)
  },
  1350: function(t, e, n) {
      "use strict";
      n.r(e),
      n.d(e, "InView", (function() {
          return f
      }
      )),
      n.d(e, "_observerMap", (function() {
          return s
      }
      )),
      n.d(e, "default", (function() {
          return f
      }
      )),
      n.d(e, "observe", (function() {
          return p
      }
      )),
      n.d(e, "useInView", (function() {
          return d
      }
      ));
      var r = n(1);
      function o() {
          return (o = Object.assign || function(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
              }
              return t
          }
          ).apply(this, arguments)
      }
      function i(t, e) {
          return (i = Object.setPrototypeOf || function(t, e) {
              return t.__proto__ = e,
              t
          }
          )(t, e)
      }
      var s = new Map
        , a = new WeakMap
        , l = 0;
      function u(t) {
          return Object.keys(t).sort().filter((function(e) {
              return void 0 !== t[e]
          }
          )).map((function(e) {
              return e + "_" + ("root" === e ? (n = t.root) ? (a.has(n) || (l += 1,
              a.set(n, l.toString())),
              a.get(n)) : "0" : t[e]);
              var n
          }
          )).toString()
      }
      function p(t, e, n) {
          if (void 0 === n && (n = {}),
          !t)
              return function() {}
              ;
          var r = function(t) {
              var e = u(t)
                , n = s.get(e);
              if (!n) {
                  var r, o = new Map, i = new IntersectionObserver((function(e) {
                      e.forEach((function(e) {
                          var n, i = e.isIntersecting && r.some((function(t) {
                              return e.intersectionRatio >= t
                          }
                          ));
                          t.trackVisibility && "undefined" === typeof e.isVisible && (e.isVisible = i),
                          null == (n = o.get(e.target)) || n.forEach((function(t) {
                              t(i, e)
                          }
                          ))
                      }
                      ))
                  }
                  ),t);
                  r = i.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]),
                  n = {
                      id: e,
                      observer: i,
                      elements: o
                  },
                  s.set(e, n)
              }
              return n
          }(n)
            , o = r.id
            , i = r.observer
            , a = r.elements
            , l = a.get(t) || [];
          return a.has(t) || a.set(t, l),
          l.push(e),
          i.observe(t),
          function() {
              l.splice(l.indexOf(e), 1),
              0 === l.length && (a.delete(t),
              i.unobserve(t)),
              0 === a.size && (i.disconnect(),
              s.delete(o))
          }
      }
      var c = ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView"];
      function h(t) {
          return "function" !== typeof t.children
      }
      var f = function(t) {
          var e, n;
          function s(e) {
              var n;
              return (n = t.call(this, e) || this).node = null,
              n._unobserveCb = null,
              n.handleNode = function(t) {
                  n.node && (n.unobserve(),
                  t || n.props.triggerOnce || n.props.skip || n.setState({
                      inView: !!n.props.initialInView,
                      entry: void 0
                  })),
                  n.node = t || null,
                  n.observeNode()
              }
              ,
              n.handleChange = function(t, e) {
                  t && n.props.triggerOnce && n.unobserve(),
                  h(n.props) || n.setState({
                      inView: t,
                      entry: e
                  }),
                  n.props.onChange && n.props.onChange(t, e)
              }
              ,
              n.state = {
                  inView: !!e.initialInView,
                  entry: void 0
              },
              n
          }
          n = t,
          (e = s).prototype = Object.create(n.prototype),
          e.prototype.constructor = e,
          i(e, n);
          var a = s.prototype;
          return a.componentDidUpdate = function(t) {
              t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(),
              this.observeNode())
          }
          ,
          a.componentWillUnmount = function() {
              this.unobserve(),
              this.node = null
          }
          ,
          a.observeNode = function() {
              if (this.node && !this.props.skip) {
                  var t = this.props
                    , e = t.threshold
                    , n = t.root
                    , r = t.rootMargin
                    , o = t.trackVisibility
                    , i = t.delay;
                  this._unobserveCb = p(this.node, this.handleChange, {
                      threshold: e,
                      root: n,
                      rootMargin: r,
                      trackVisibility: o,
                      delay: i
                  })
              }
          }
          ,
          a.unobserve = function() {
              this._unobserveCb && (this._unobserveCb(),
              this._unobserveCb = null)
          }
          ,
          a.render = function() {
              if (!h(this.props)) {
                  var t = this.state
                    , e = t.inView
                    , n = t.entry;
                  return this.props.children({
                      inView: e,
                      entry: n,
                      ref: this.handleNode
                  })
              }
              var i = this.props
                , s = i.children
                , a = i.as
                , l = i.tag
                , u = function(t, e) {
                  if (null == t)
                      return {};
                  var n, r, o = {}, i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                      n = i[r],
                      e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o
              }(i, c);
              return r.createElement(a || l || "div", o({
                  ref: this.handleNode
              }, u), s)
          }
          ,
          s
      }(r.Component);
      function d(t) {
          var e = void 0 === t ? {} : t
            , n = e.threshold
            , o = e.delay
            , i = e.trackVisibility
            , s = e.rootMargin
            , a = e.root
            , l = e.triggerOnce
            , u = e.skip
            , c = e.initialInView
            , h = r.useRef()
            , f = r.useState({
              inView: !!c
          })
            , d = f[0]
            , y = f[1]
            , m = r.useCallback((function(t) {
              void 0 !== h.current && (h.current(),
              h.current = void 0),
              u || t && (h.current = p(t, (function(t, e) {
                  y({
                      inView: t,
                      entry: e
                  }),
                  e.isIntersecting && l && h.current && (h.current(),
                  h.current = void 0)
              }
              ), {
                  root: a,
                  rootMargin: s,
                  threshold: n,
                  trackVisibility: i,
                  delay: o
              }))
          }
          ), [Array.isArray(n) ? n.toString() : n, a, s, l, u, i, o]);
          Object(r.useEffect)((function() {
              h.current || !d.entry || l || u || y({
                  inView: !!c
              })
          }
          ));
          var g = [m, d.inView, d.entry];
          return g.ref = g[0],
          g.inView = g[1],
          g.entry = g[2],
          g
      }
      f.displayName = "InView",
      f.defaultProps = {
          threshold: 0,
          triggerOnce: !1,
          initialInView: !1
      }
  },
  1351: function(t, e, n) {
      !function(t) {
          "use strict";
          var e = {
              logger: self.console,
              WebSocket: self.WebSocket
          }
            , n = {
              log: function() {
                  if (this.enabled) {
                      for (var t, n = arguments.length, r = Array(n), o = 0; o < n; o++)
                          r[o] = arguments[o];
                      r.push(Date.now()),
                      (t = e.logger).log.apply(t, ["[ActionCable]"].concat(r))
                  }
              }
          }
            , r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
              return typeof t
          }
          : function(t) {
              return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }
            , o = function(t, e) {
              if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function")
          }
            , i = function() {
              function t(t, e) {
                  for (var n = 0; n < e.length; n++) {
                      var r = e[n];
                      r.enumerable = r.enumerable || !1,
                      r.configurable = !0,
                      "value"in r && (r.writable = !0),
                      Object.defineProperty(t, r.key, r)
                  }
              }
              return function(e, n, r) {
                  return n && t(e.prototype, n),
                  r && t(e, r),
                  e
              }
          }()
            , s = function() {
              return (new Date).getTime()
          }
            , a = function(t) {
              return (s() - t) / 1e3
          }
            , l = function(t, e, n) {
              return Math.max(e, Math.min(n, t))
          }
            , u = function() {
              function t(e) {
                  o(this, t),
                  this.visibilityDidChange = this.visibilityDidChange.bind(this),
                  this.connection = e,
                  this.reconnectAttempts = 0
              }
              return t.prototype.start = function() {
                  this.isRunning() || (this.startedAt = s(),
                  delete this.stoppedAt,
                  this.startPolling(),
                  addEventListener("visibilitychange", this.visibilityDidChange),
                  n.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms"))
              }
              ,
              t.prototype.stop = function() {
                  this.isRunning() && (this.stoppedAt = s(),
                  this.stopPolling(),
                  removeEventListener("visibilitychange", this.visibilityDidChange),
                  n.log("ConnectionMonitor stopped"))
              }
              ,
              t.prototype.isRunning = function() {
                  return this.startedAt && !this.stoppedAt
              }
              ,
              t.prototype.recordPing = function() {
                  this.pingedAt = s()
              }
              ,
              t.prototype.recordConnect = function() {
                  this.reconnectAttempts = 0,
                  this.recordPing(),
                  delete this.disconnectedAt,
                  n.log("ConnectionMonitor recorded connect")
              }
              ,
              t.prototype.recordDisconnect = function() {
                  this.disconnectedAt = s(),
                  n.log("ConnectionMonitor recorded disconnect")
              }
              ,
              t.prototype.startPolling = function() {
                  this.stopPolling(),
                  this.poll()
              }
              ,
              t.prototype.stopPolling = function() {
                  clearTimeout(this.pollTimeout)
              }
              ,
              t.prototype.poll = function() {
                  var t = this;
                  this.pollTimeout = setTimeout((function() {
                      t.reconnectIfStale(),
                      t.poll()
                  }
                  ), this.getPollInterval())
              }
              ,
              t.prototype.getPollInterval = function() {
                  var t = this.constructor.pollInterval
                    , e = t.min
                    , n = t.max
                    , r = t.multiplier * Math.log(this.reconnectAttempts + 1);
                  return Math.round(1e3 * l(r, e, n))
              }
              ,
              t.prototype.reconnectIfStale = function() {
                  this.connectionIsStale() && (n.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + a(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"),
                  this.reconnectAttempts++,
                  this.disconnectedRecently() ? n.log("ConnectionMonitor skipping reopening recent disconnect") : (n.log("ConnectionMonitor reopening"),
                  this.connection.reopen()))
              }
              ,
              t.prototype.connectionIsStale = function() {
                  return a(this.pingedAt ? this.pingedAt : this.startedAt) > this.constructor.staleThreshold
              }
              ,
              t.prototype.disconnectedRecently = function() {
                  return this.disconnectedAt && a(this.disconnectedAt) < this.constructor.staleThreshold
              }
              ,
              t.prototype.visibilityDidChange = function() {
                  var t = this;
                  "visible" === document.visibilityState && setTimeout((function() {
                      !t.connectionIsStale() && t.connection.isOpen() || (n.log("ConnectionMonitor reopening stale connection on visibilitychange. visibilityState = " + document.visibilityState),
                      t.connection.reopen())
                  }
                  ), 200)
              }
              ,
              t
          }();
          u.pollInterval = {
              min: 3,
              max: 30,
              multiplier: 5
          },
          u.staleThreshold = 6;
          var p = {
              message_types: {
                  welcome: "welcome",
                  disconnect: "disconnect",
                  ping: "ping",
                  confirmation: "confirm_subscription",
                  rejection: "reject_subscription"
              },
              disconnect_reasons: {
                  unauthorized: "unauthorized",
                  invalid_request: "invalid_request",
                  server_restart: "server_restart"
              },
              default_mount_path: "/cable",
              protocols: ["actioncable-v1-json", "actioncable-unsupported"]
          }
            , c = p.message_types
            , h = p.protocols
            , f = h.slice(0, h.length - 1)
            , d = [].indexOf
            , y = function() {
              function t(e) {
                  o(this, t),
                  this.open = this.open.bind(this),
                  this.consumer = e,
                  this.subscriptions = this.consumer.subscriptions,
                  this.monitor = new u(this),
                  this.disconnected = !0
              }
              return t.prototype.send = function(t) {
                  return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)),
                  !0)
              }
              ,
              t.prototype.open = function() {
                  return this.isActive() ? (n.log("Attempted to open WebSocket, but existing socket is " + this.getState()),
                  !1) : (n.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + h),
                  this.webSocket && this.uninstallEventHandlers(),
                  this.webSocket = new e.WebSocket(this.consumer.url,h),
                  this.installEventHandlers(),
                  this.monitor.start(),
                  !0)
              }
              ,
              t.prototype.close = function() {
                  if ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                      allowReconnect: !0
                  }).allowReconnect || this.monitor.stop(),
                  this.isActive())
                      return this.webSocket.close()
              }
              ,
              t.prototype.reopen = function() {
                  if (n.log("Reopening WebSocket, current state is " + this.getState()),
                  !this.isActive())
                      return this.open();
                  try {
                      return this.close()
                  } catch (t) {
                      n.log("Failed to reopen WebSocket", t)
                  } finally {
                      n.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"),
                      setTimeout(this.open, this.constructor.reopenDelay)
                  }
              }
              ,
              t.prototype.getProtocol = function() {
                  if (this.webSocket)
                      return this.webSocket.protocol
              }
              ,
              t.prototype.isOpen = function() {
                  return this.isState("open")
              }
              ,
              t.prototype.isActive = function() {
                  return this.isState("open", "connecting")
              }
              ,
              t.prototype.isProtocolSupported = function() {
                  return d.call(f, this.getProtocol()) >= 0
              }
              ,
              t.prototype.isState = function() {
                  for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                      e[n] = arguments[n];
                  return d.call(e, this.getState()) >= 0
              }
              ,
              t.prototype.getState = function() {
                  if (this.webSocket)
                      for (var t in e.WebSocket)
                          if (e.WebSocket[t] === this.webSocket.readyState)
                              return t.toLowerCase();
                  return null
              }
              ,
              t.prototype.installEventHandlers = function() {
                  for (var t in this.events) {
                      var e = this.events[t].bind(this);
                      this.webSocket["on" + t] = e
                  }
              }
              ,
              t.prototype.uninstallEventHandlers = function() {
                  for (var t in this.events)
                      this.webSocket["on" + t] = function() {}
              }
              ,
              t
          }();
          y.reopenDelay = 500,
          y.prototype.events = {
              message: function(t) {
                  if (this.isProtocolSupported()) {
                      var e = JSON.parse(t.data)
                        , r = e.identifier
                        , o = e.message
                        , i = e.reason
                        , s = e.reconnect;
                      switch (e.type) {
                      case c.welcome:
                          return this.monitor.recordConnect(),
                          this.subscriptions.reload();
                      case c.disconnect:
                          return n.log("Disconnecting. Reason: " + i),
                          this.close({
                              allowReconnect: s
                          });
                      case c.ping:
                          return this.monitor.recordPing();
                      case c.confirmation:
                          return this.subscriptions.notify(r, "connected");
                      case c.rejection:
                          return this.subscriptions.reject(r);
                      default:
                          return this.subscriptions.notify(r, "received", o)
                      }
                  }
              },
              open: function() {
                  if (n.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"),
                  this.disconnected = !1,
                  !this.isProtocolSupported())
                      return n.log("Protocol is unsupported. Stopping monitor and disconnecting."),
                      this.close({
                          allowReconnect: !1
                      })
              },
              close: function(t) {
                  if (n.log("WebSocket onclose event"),
                  !this.disconnected)
                      return this.disconnected = !0,
                      this.monitor.recordDisconnect(),
                      this.subscriptions.notifyAll("disconnected", {
                          willAttemptReconnect: this.monitor.isRunning()
                      })
              },
              error: function() {
                  n.log("WebSocket onerror event")
              }
          };
          var m = function(t, e) {
              if (null != e)
                  for (var n in e) {
                      var r = e[n];
                      t[n] = r
                  }
              return t
          }
            , g = function() {
              function t(e) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , r = arguments[2];
                  o(this, t),
                  this.consumer = e,
                  this.identifier = JSON.stringify(n),
                  m(this, r)
              }
              return t.prototype.perform = function(t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return e.action = t,
                  this.send(e)
              }
              ,
              t.prototype.send = function(t) {
                  return this.consumer.send({
                      command: "message",
                      identifier: this.identifier,
                      data: JSON.stringify(t)
                  })
              }
              ,
              t.prototype.unsubscribe = function() {
                  return this.consumer.subscriptions.remove(this)
              }
              ,
              t
          }()
            , v = function() {
              function t(e) {
                  o(this, t),
                  this.consumer = e,
                  this.subscriptions = []
              }
              return t.prototype.create = function(t, e) {
                  var n = t
                    , o = "object" === ("undefined" === typeof n ? "undefined" : r(n)) ? n : {
                      channel: n
                  }
                    , i = new g(this.consumer,o,e);
                  return this.add(i)
              }
              ,
              t.prototype.add = function(t) {
                  return this.subscriptions.push(t),
                  this.consumer.ensureActiveConnection(),
                  this.notify(t, "initialized"),
                  this.sendCommand(t, "subscribe"),
                  t
              }
              ,
              t.prototype.remove = function(t) {
                  return this.forget(t),
                  this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"),
                  t
              }
              ,
              t.prototype.reject = function(t) {
                  var e = this;
                  return this.findAll(t).map((function(t) {
                      return e.forget(t),
                      e.notify(t, "rejected"),
                      t
                  }
                  ))
              }
              ,
              t.prototype.forget = function(t) {
                  return this.subscriptions = this.subscriptions.filter((function(e) {
                      return e !== t
                  }
                  )),
                  t
              }
              ,
              t.prototype.findAll = function(t) {
                  return this.subscriptions.filter((function(e) {
                      return e.identifier === t
                  }
                  ))
              }
              ,
              t.prototype.reload = function() {
                  var t = this;
                  return this.subscriptions.map((function(e) {
                      return t.sendCommand(e, "subscribe")
                  }
                  ))
              }
              ,
              t.prototype.notifyAll = function(t) {
                  for (var e = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                      r[o - 1] = arguments[o];
                  return this.subscriptions.map((function(n) {
                      return e.notify.apply(e, [n, t].concat(r))
                  }
                  ))
              }
              ,
              t.prototype.notify = function(t, e) {
                  for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
                      r[o - 2] = arguments[o];
                  return ("string" === typeof t ? this.findAll(t) : [t]).map((function(t) {
                      return "function" === typeof t[e] ? t[e].apply(t, r) : void 0
                  }
                  ))
              }
              ,
              t.prototype.sendCommand = function(t, e) {
                  var n = t.identifier;
                  return this.consumer.send({
                      command: e,
                      identifier: n
                  })
              }
              ,
              t
          }()
            , b = function() {
              function t(e) {
                  o(this, t),
                  this._url = e,
                  this.subscriptions = new v(this),
                  this.connection = new y(this)
              }
              return t.prototype.send = function(t) {
                  return this.connection.send(t)
              }
              ,
              t.prototype.connect = function() {
                  return this.connection.open()
              }
              ,
              t.prototype.disconnect = function() {
                  return this.connection.close({
                      allowReconnect: !1
                  })
              }
              ,
              t.prototype.ensureActiveConnection = function() {
                  if (!this.connection.isActive())
                      return this.connection.open()
              }
              ,
              i(t, [{
                  key: "url",
                  get: function() {
                      return x(this._url)
                  }
              }]),
              t
          }();
          function x(t) {
              if ("function" === typeof t && (t = t()),
              t && !/^wss?:/i.test(t)) {
                  var e = document.createElement("a");
                  return e.href = t,
                  e.href = e.href,
                  e.protocol = e.protocol.replace("http", "ws"),
                  e.href
              }
              return t
          }
          function P() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S("url") || p.default_mount_path;
              return new b(t)
          }
          function S(t) {
              var e = document.head.querySelector("meta[name='action-cable-" + t + "']");
              if (e)
                  return e.getAttribute("content")
          }
          t.Connection = y,
          t.ConnectionMonitor = u,
          t.Consumer = b,
          t.INTERNAL = p,
          t.Subscription = g,
          t.Subscriptions = v,
          t.adapters = e,
          t.createWebSocketURL = x,
          t.logger = n,
          t.createConsumer = P,
          t.getConfig = S,
          Object.defineProperty(t, "__esModule", {
              value: !0
          })
      }(e)
  },
  1359: function(t, e, n) {
      "use strict";
      n.r(e),
      n.d(e, "Font", (function() {
          return yn
      }
      )),
      n.d(e, "Glyph", (function() {
          return et
      }
      )),
      n.d(e, "Path", (function() {
          return u
      }
      )),
      n.d(e, "BoundingBox", (function() {
          return a
      }
      )),
      n.d(e, "_parse", (function() {
          return G
      }
      )),
      n.d(e, "parse", (function() {
          return _n
      }
      )),
      n.d(e, "load", (function() {
          return Rn
      }
      )),
      n.d(e, "loadSync", (function() {
          return Nn
      }
      ));
      n(1348);
      var r = n(525)
        , o = n.n(r);
      function i(t, e, n, r, o) {
          return Math.pow(1 - o, 3) * t + 3 * Math.pow(1 - o, 2) * o * e + 3 * (1 - o) * Math.pow(o, 2) * n + Math.pow(o, 3) * r
      }
      function s() {
          this.x1 = Number.NaN,
          this.y1 = Number.NaN,
          this.x2 = Number.NaN,
          this.y2 = Number.NaN
      }
      s.prototype.isEmpty = function() {
          return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2)
      }
      ,
      s.prototype.addPoint = function(t, e) {
          "number" === typeof t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t,
          this.x2 = t),
          t < this.x1 && (this.x1 = t),
          t > this.x2 && (this.x2 = t)),
          "number" === typeof e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e,
          this.y2 = e),
          e < this.y1 && (this.y1 = e),
          e > this.y2 && (this.y2 = e))
      }
      ,
      s.prototype.addX = function(t) {
          this.addPoint(t, null)
      }
      ,
      s.prototype.addY = function(t) {
          this.addPoint(null, t)
      }
      ,
      s.prototype.addBezier = function(t, e, n, r, o, s, a, l) {
          const u = [t, e]
            , p = [n, r]
            , c = [o, s]
            , h = [a, l];
          this.addPoint(t, e),
          this.addPoint(a, l);
          for (let f = 0; f <= 1; f++) {
              const t = 6 * u[f] - 12 * p[f] + 6 * c[f]
                , e = -3 * u[f] + 9 * p[f] - 9 * c[f] + 3 * h[f]
                , n = 3 * p[f] - 3 * u[f];
              if (0 === e) {
                  if (0 === t)
                      continue;
                  const e = -n / t;
                  0 < e && e < 1 && (0 === f && this.addX(i(u[f], p[f], c[f], h[f], e)),
                  1 === f && this.addY(i(u[f], p[f], c[f], h[f], e)));
                  continue
              }
              const r = Math.pow(t, 2) - 4 * n * e;
              if (r < 0)
                  continue;
              const o = (-t + Math.sqrt(r)) / (2 * e);
              0 < o && o < 1 && (0 === f && this.addX(i(u[f], p[f], c[f], h[f], o)),
              1 === f && this.addY(i(u[f], p[f], c[f], h[f], o)));
              const s = (-t - Math.sqrt(r)) / (2 * e);
              0 < s && s < 1 && (0 === f && this.addX(i(u[f], p[f], c[f], h[f], s)),
              1 === f && this.addY(i(u[f], p[f], c[f], h[f], s)))
          }
      }
      ,
      s.prototype.addQuad = function(t, e, n, r, o, i) {
          const s = t + 2 / 3 * (n - t)
            , a = e + 2 / 3 * (r - e)
            , l = s + 1 / 3 * (o - t)
            , u = a + 1 / 3 * (i - e);
          this.addBezier(t, e, s, a, l, u, o, i)
      }
      ;
      var a = s;
      function l() {
          this.commands = [],
          this.fill = "black",
          this.stroke = null,
          this.strokeWidth = 1
      }
      l.prototype.moveTo = function(t, e) {
          this.commands.push({
              type: "M",
              x: t,
              y: e
          })
      }
      ,
      l.prototype.lineTo = function(t, e) {
          this.commands.push({
              type: "L",
              x: t,
              y: e
          })
      }
      ,
      l.prototype.curveTo = l.prototype.bezierCurveTo = function(t, e, n, r, o, i) {
          this.commands.push({
              type: "C",
              x1: t,
              y1: e,
              x2: n,
              y2: r,
              x: o,
              y: i
          })
      }
      ,
      l.prototype.quadTo = l.prototype.quadraticCurveTo = function(t, e, n, r) {
          this.commands.push({
              type: "Q",
              x1: t,
              y1: e,
              x: n,
              y: r
          })
      }
      ,
      l.prototype.close = l.prototype.closePath = function() {
          this.commands.push({
              type: "Z"
          })
      }
      ,
      l.prototype.extend = function(t) {
          if (t.commands)
              t = t.commands;
          else if (t instanceof a) {
              const e = t;
              return this.moveTo(e.x1, e.y1),
              this.lineTo(e.x2, e.y1),
              this.lineTo(e.x2, e.y2),
              this.lineTo(e.x1, e.y2),
              void this.close()
          }
          Array.prototype.push.apply(this.commands, t)
      }
      ,
      l.prototype.getBoundingBox = function() {
          const t = new a;
          let e = 0
            , n = 0
            , r = 0
            , o = 0;
          for (let i = 0; i < this.commands.length; i++) {
              const s = this.commands[i];
              switch (s.type) {
              case "M":
                  t.addPoint(s.x, s.y),
                  e = r = s.x,
                  n = o = s.y;
                  break;
              case "L":
                  t.addPoint(s.x, s.y),
                  r = s.x,
                  o = s.y;
                  break;
              case "Q":
                  t.addQuad(r, o, s.x1, s.y1, s.x, s.y),
                  r = s.x,
                  o = s.y;
                  break;
              case "C":
                  t.addBezier(r, o, s.x1, s.y1, s.x2, s.y2, s.x, s.y),
                  r = s.x,
                  o = s.y;
                  break;
              case "Z":
                  r = e,
                  o = n;
                  break;
              default:
                  throw new Error("Unexpected path command " + s.type)
              }
          }
          return t.isEmpty() && t.addPoint(0, 0),
          t
      }
      ,
      l.prototype.draw = function(t) {
          t.beginPath();
          for (let e = 0; e < this.commands.length; e += 1) {
              const n = this.commands[e];
              "M" === n.type ? t.moveTo(n.x, n.y) : "L" === n.type ? t.lineTo(n.x, n.y) : "C" === n.type ? t.bezierCurveTo(n.x1, n.y1, n.x2, n.y2, n.x, n.y) : "Q" === n.type ? t.quadraticCurveTo(n.x1, n.y1, n.x, n.y) : "Z" === n.type && t.closePath()
          }
          this.fill && (t.fillStyle = this.fill,
          t.fill()),
          this.stroke && (t.strokeStyle = this.stroke,
          t.lineWidth = this.strokeWidth,
          t.stroke())
      }
      ,
      l.prototype.toPathData = function(t) {
          function e(e) {
              return Math.round(e) === e ? "" + Math.round(e) : e.toFixed(t)
          }
          function n() {
              let t = "";
              for (let n = 0; n < arguments.length; n += 1) {
                  const r = arguments[n];
                  r >= 0 && n > 0 && (t += " "),
                  t += e(r)
              }
              return t
          }
          t = void 0 !== t ? t : 2;
          let r = "";
          for (let o = 0; o < this.commands.length; o += 1) {
              const t = this.commands[o];
              "M" === t.type ? r += "M" + n(t.x, t.y) : "L" === t.type ? r += "L" + n(t.x, t.y) : "C" === t.type ? r += "C" + n(t.x1, t.y1, t.x2, t.y2, t.x, t.y) : "Q" === t.type ? r += "Q" + n(t.x1, t.y1, t.x, t.y) : "Z" === t.type && (r += "Z")
          }
          return r
      }
      ,
      l.prototype.toSVG = function(t) {
          let e = '<path d="';
          return e += this.toPathData(t),
          e += '"',
          this.fill && "black" !== this.fill && (null === this.fill ? e += ' fill="none"' : e += ' fill="' + this.fill + '"'),
          this.stroke && (e += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'),
          e += "/>",
          e
      }
      ,
      l.prototype.toDOMElement = function(t) {
          const e = this.toPathData(t)
            , n = document.createElementNS("http://www.w3.org/2000/svg", "path");
          return n.setAttribute("d", e),
          n
      }
      ;
      var u = l;
      function p(t) {
          throw new Error(t)
      }
      function c(t, e) {
          t || p(e)
      }
      var h = {
          fail: p,
          argument: c,
          assert: c
      };
      const f = 2147483648
        , d = {}
        , y = {}
        , m = {};
      function g(t) {
          return function() {
              return t
          }
      }
      y.BYTE = function(t) {
          return h.argument(t >= 0 && t <= 255, "Byte value should be between 0 and 255."),
          [t]
      }
      ,
      m.BYTE = g(1),
      y.CHAR = function(t) {
          return [t.charCodeAt(0)]
      }
      ,
      m.CHAR = g(1),
      y.CHARARRAY = function(t) {
          const e = [];
          for (let n = 0; n < t.length; n += 1)
              e[n] = t.charCodeAt(n);
          return e
      }
      ,
      m.CHARARRAY = function(t) {
          return t.length
      }
      ,
      y.USHORT = function(t) {
          return [t >> 8 & 255, 255 & t]
      }
      ,
      m.USHORT = g(2),
      y.SHORT = function(t) {
          return t >= 32768 && (t = -(65536 - t)),
          [t >> 8 & 255, 255 & t]
      }
      ,
      m.SHORT = g(2),
      y.UINT24 = function(t) {
          return [t >> 16 & 255, t >> 8 & 255, 255 & t]
      }
      ,
      m.UINT24 = g(3),
      y.ULONG = function(t) {
          return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
      }
      ,
      m.ULONG = g(4),
      y.LONG = function(t) {
          return t >= f && (t = -(2 * f - t)),
          [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
      }
      ,
      m.LONG = g(4),
      y.FIXED = y.ULONG,
      m.FIXED = m.ULONG,
      y.FWORD = y.SHORT,
      m.FWORD = m.SHORT,
      y.UFWORD = y.USHORT,
      m.UFWORD = m.USHORT,
      y.LONGDATETIME = function(t) {
          return [0, 0, 0, 0, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
      }
      ,
      m.LONGDATETIME = g(8),
      y.TAG = function(t) {
          return h.argument(4 === t.length, "Tag should be exactly 4 ASCII characters."),
          [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]
      }
      ,
      m.TAG = g(4),
      y.Card8 = y.BYTE,
      m.Card8 = m.BYTE,
      y.Card16 = y.USHORT,
      m.Card16 = m.USHORT,
      y.OffSize = y.BYTE,
      m.OffSize = m.BYTE,
      y.SID = y.USHORT,
      m.SID = m.USHORT,
      y.NUMBER = function(t) {
          return t >= -107 && t <= 107 ? [t + 139] : t >= 108 && t <= 1131 ? [247 + ((t -= 108) >> 8), 255 & t] : t >= -1131 && t <= -108 ? [251 + ((t = -t - 108) >> 8), 255 & t] : t >= -32768 && t <= 32767 ? y.NUMBER16(t) : y.NUMBER32(t)
      }
      ,
      m.NUMBER = function(t) {
          return y.NUMBER(t).length
      }
      ,
      y.NUMBER16 = function(t) {
          return [28, t >> 8 & 255, 255 & t]
      }
      ,
      m.NUMBER16 = g(3),
      y.NUMBER32 = function(t) {
          return [29, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t]
      }
      ,
      m.NUMBER32 = g(5),
      y.REAL = function(t) {
          let e = t.toString();
          const n = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);
          if (n) {
              const r = parseFloat("1e" + ((n[2] ? +n[2] : 0) + n[1].length));
              e = (Math.round(t * r) / r).toString()
          }
          let r = "";
          for (let i = 0, s = e.length; i < s; i += 1) {
              const t = e[i];
              r += "e" === t ? "-" === e[++i] ? "c" : "b" : "." === t ? "a" : "-" === t ? "e" : t
          }
          r += 1 & r.length ? "f" : "ff";
          const o = [30];
          for (let i = 0, s = r.length; i < s; i += 2)
              o.push(parseInt(r.substr(i, 2), 16));
          return o
      }
      ,
      m.REAL = function(t) {
          return y.REAL(t).length
      }
      ,
      y.NAME = y.CHARARRAY,
      m.NAME = m.CHARARRAY,
      y.STRING = y.CHARARRAY,
      m.STRING = m.CHARARRAY,
      d.UTF8 = function(t, e, n) {
          const r = []
            , o = n;
          for (let i = 0; i < o; i++,
          e += 1)
              r[i] = t.getUint8(e);
          return String.fromCharCode.apply(null, r)
      }
      ,
      d.UTF16 = function(t, e, n) {
          const r = []
            , o = n / 2;
          for (let i = 0; i < o; i++,
          e += 2)
              r[i] = t.getUint16(e);
          return String.fromCharCode.apply(null, r)
      }
      ,
      y.UTF16 = function(t) {
          const e = [];
          for (let n = 0; n < t.length; n += 1) {
              const r = t.charCodeAt(n);
              e[e.length] = r >> 8 & 255,
              e[e.length] = 255 & r
          }
          return e
      }
      ,
      m.UTF16 = function(t) {
          return 2 * t.length
      }
      ;
      const v = {
          "x-mac-croatian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\u0160\u2122\xb4\xa8\u2260\u017d\xd8\u221e\xb1\u2264\u2265\u2206\xb5\u2202\u2211\u220f\u0161\u222b\xaa\xba\u03a9\u017e\xf8\xbf\xa1\xac\u221a\u0192\u2248\u0106\xab\u010c\u2026\xa0\xc0\xc3\xd5\u0152\u0153\u0110\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\uf8ff\xa9\u2044\u20ac\u2039\u203a\xc6\xbb\u2013\xb7\u201a\u201e\u2030\xc2\u0107\xc1\u010d\xc8\xcd\xce\xcf\xcc\xd3\xd4\u0111\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u03c0\xcb\u02da\xb8\xca\xe6\u02c7",
          "x-mac-cyrillic": "\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u2020\xb0\u0490\xa3\xa7\u2022\xb6\u0406\xae\xa9\u2122\u0402\u0452\u2260\u0403\u0453\u221e\xb1\u2264\u2265\u0456\xb5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040a\u045a\u0458\u0405\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026\xa0\u040b\u045b\u040c\u045c\u0455\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u201e\u040e\u045e\u040f\u045f\u2116\u0401\u0451\u044f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e",
          "x-mac-gaelic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u1e02\xb1\u2264\u2265\u1e03\u010a\u010b\u1e0a\u1e0b\u1e1e\u1e1f\u0120\u0121\u1e40\xe6\xf8\u1e41\u1e56\u1e57\u027c\u0192\u017f\u1e60\xab\xbb\u2026\xa0\xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\u1e61\u1e9b\xff\u0178\u1e6a\u20ac\u2039\u203a\u0176\u0177\u1e6b\xb7\u1ef2\u1ef3\u204a\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\u2663\xd2\xda\xdb\xd9\u0131\xdd\xfd\u0174\u0175\u1e84\u1e85\u1e80\u1e81\u1e82\u1e83",
          "x-mac-greek": "\xc4\xb9\xb2\xc9\xb3\xd6\xdc\u0385\xe0\xe2\xe4\u0384\xa8\xe7\xe9\xe8\xea\xeb\xa3\u2122\xee\xef\u2022\xbd\u2030\xf4\xf6\xa6\u20ac\xf9\xfb\xfc\u2020\u0393\u0394\u0398\u039b\u039e\u03a0\xdf\xae\xa9\u03a3\u03aa\xa7\u2260\xb0\xb7\u0391\xb1\u2264\u2265\xa5\u0392\u0395\u0396\u0397\u0399\u039a\u039c\u03a6\u03ab\u03a8\u03a9\u03ac\u039d\xac\u039f\u03a1\u2248\u03a4\xab\xbb\u2026\xa0\u03a5\u03a7\u0386\u0388\u0153\u2013\u2015\u201c\u201d\u2018\u2019\xf7\u0389\u038a\u038c\u038e\u03ad\u03ae\u03af\u03cc\u038f\u03cd\u03b1\u03b2\u03c8\u03b4\u03b5\u03c6\u03b3\u03b7\u03b9\u03be\u03ba\u03bb\u03bc\u03bd\u03bf\u03c0\u03ce\u03c1\u03c3\u03c4\u03b8\u03c9\u03c2\u03c7\u03c5\u03b6\u03ca\u03cb\u0390\u03b0\xad",
          "x-mac-icelandic": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\xe6\xf8\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026\xa0\xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u2044\u20ac\xd0\xf0\xde\xfe\xfd\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7",
          "x-mac-inuit": "\u1403\u1404\u1405\u1406\u140a\u140b\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144e\u144f\u1450\u1451\u1455\u1456\u1466\u146d\u146e\u146f\u1470\u1472\u1473\u1483\u148b\u148c\u148d\u148e\u1490\u1491\xb0\u14a1\u14a5\u14a6\u2022\xb6\u14a7\xae\xa9\u2122\u14a8\u14aa\u14ab\u14bb\u14c2\u14c3\u14c4\u14c5\u14c7\u14c8\u14d0\u14ef\u14f0\u14f1\u14f2\u14f4\u14f5\u1505\u14d5\u14d6\u14d7\u14d8\u14da\u14db\u14ea\u1528\u1529\u152a\u152b\u152d\u2026\xa0\u152e\u153e\u1555\u1556\u1557\u2013\u2014\u201c\u201d\u2018\u2019\u1558\u1559\u155a\u155d\u1546\u1547\u1548\u1549\u154b\u154c\u1550\u157f\u1580\u1581\u1582\u1583\u1584\u1585\u158f\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15a0\u15a1\u15a2\u15a3\u15a4\u15a5\u15a6\u157c\u0141\u0142",
          "x-mac-ce": "\xc4\u0100\u0101\xc9\u0104\xd6\xdc\xe1\u0105\u010c\xe4\u010d\u0106\u0107\xe9\u0179\u017a\u010e\xed\u010f\u0112\u0113\u0116\xf3\u0117\xf4\xf6\xf5\xfa\u011a\u011b\xfc\u2020\xb0\u0118\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\u0119\xa8\u2260\u0123\u012e\u012f\u012a\u2264\u2265\u012b\u0136\u2202\u2211\u0142\u013b\u013c\u013d\u013e\u0139\u013a\u0145\u0146\u0143\xac\u221a\u0144\u0147\u2206\xab\xbb\u2026\xa0\u0148\u0150\xd5\u0151\u014c\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\u014d\u0154\u0155\u0158\u2039\u203a\u0159\u0156\u0157\u0160\u201a\u201e\u0161\u015a\u015b\xc1\u0164\u0165\xcd\u017d\u017e\u016a\xd3\xd4\u016b\u016e\xda\u016f\u0170\u0171\u0172\u0173\xdd\xfd\u0137\u017b\u0141\u017c\u0122\u02c7",
          macintosh: "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\xe6\xf8\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026\xa0\xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u2044\u20ac\u2039\u203a\ufb01\ufb02\u2021\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7",
          "x-mac-romanian": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\u0102\u0218\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\u0103\u0219\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026\xa0\xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u2044\u20ac\u2039\u203a\u021a\u021b\u2021\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7",
          "x-mac-turkish": "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\xe6\xf8\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026\xa0\xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u011e\u011f\u0130\u0131\u015e\u015f\u2021\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\uf8a0\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7"
      };
      d.MACSTRING = function(t, e, n, r) {
          const o = v[r];
          if (void 0 === o)
              return;
          let i = "";
          for (let s = 0; s < n; s++) {
              const n = t.getUint8(e + s);
              i += n <= 127 ? String.fromCharCode(n) : o[127 & n]
          }
          return i
      }
      ;
      const b = "function" === typeof WeakMap && new WeakMap;
      let x;
      function P(t) {
          return t >= -128 && t <= 127
      }
      function S(t, e, n) {
          let r = 0;
          const o = t.length;
          for (; e < o && r < 64 && 0 === t[e]; )
              ++e,
              ++r;
          return n.push(128 | r - 1),
          e
      }
      function C(t, e, n) {
          let r = 0;
          const o = t.length;
          let i = e;
          for (; i < o && r < 64; ) {
              const e = t[i];
              if (!P(e))
                  break;
              if (0 === e && i + 1 < o && 0 === t[i + 1])
                  break;
              ++i,
              ++r
          }
          n.push(r - 1);
          for (let s = e; s < i; ++s)
              n.push(t[s] + 256 & 255);
          return i
      }
      function w(t, e, n) {
          let r = 0;
          const o = t.length;
          let i = e;
          for (; i < o && r < 64; ) {
              const e = t[i];
              if (0 === e)
                  break;
              if (P(e) && i + 1 < o && P(t[i + 1]))
                  break;
              ++i,
              ++r
          }
          n.push(64 | r - 1);
          for (let s = e; s < i; ++s) {
              const e = t[s];
              n.push(e + 65536 >> 8 & 255, e + 256 & 255)
          }
          return i
      }
      y.MACSTRING = function(t, e) {
          const n = function(t) {
              if (!x) {
                  x = {};
                  for (let t in v)
                      x[t] = new String(t)
              }
              const e = x[t];
              if (void 0 === e)
                  return;
              if (b) {
                  const t = b.get(e);
                  if (void 0 !== t)
                      return t
              }
              const n = v[t];
              if (void 0 === n)
                  return;
              const r = {};
              for (let o = 0; o < n.length; o++)
                  r[n.charCodeAt(o)] = o + 128;
              return b && b.set(e, r),
              r
          }(e);
          if (void 0 === n)
              return;
          const r = [];
          for (let o = 0; o < t.length; o++) {
              let e = t.charCodeAt(o);
              if (e >= 128 && (e = n[e],
              void 0 === e))
                  return;
              r[o] = e
          }
          return r
      }
      ,
      m.MACSTRING = function(t, e) {
          const n = y.MACSTRING(t, e);
          return void 0 !== n ? n.length : 0
      }
      ,
      y.VARDELTAS = function(t) {
          let e = 0;
          const n = [];
          for (; e < t.length; ) {
              const r = t[e];
              e = 0 === r ? S(t, e, n) : r >= -128 && r <= 127 ? C(t, e, n) : w(t, e, n)
          }
          return n
      }
      ,
      y.INDEX = function(t) {
          let e = 1;
          const n = [e]
            , r = [];
          for (let a = 0; a < t.length; a += 1) {
              const o = y.OBJECT(t[a]);
              Array.prototype.push.apply(r, o),
              e += o.length,
              n.push(e)
          }
          if (0 === r.length)
              return [0, 0];
          const o = []
            , i = 1 + Math.floor(Math.log(e) / Math.log(2)) / 8 | 0
            , s = [void 0, y.BYTE, y.USHORT, y.UINT24, y.ULONG][i];
          for (let a = 0; a < n.length; a += 1) {
              const t = s(n[a]);
              Array.prototype.push.apply(o, t)
          }
          return Array.prototype.concat(y.Card16(t.length), y.OffSize(i), o, r)
      }
      ,
      m.INDEX = function(t) {
          return y.INDEX(t).length
      }
      ,
      y.DICT = function(t) {
          let e = [];
          const n = Object.keys(t)
            , r = n.length;
          for (let o = 0; o < r; o += 1) {
              const r = parseInt(n[o], 0)
                , i = t[r];
              e = e.concat(y.OPERAND(i.value, i.type)),
              e = e.concat(y.OPERATOR(r))
          }
          return e
      }
      ,
      m.DICT = function(t) {
          return y.DICT(t).length
      }
      ,
      y.OPERATOR = function(t) {
          return t < 1200 ? [t] : [12, t - 1200]
      }
      ,
      y.OPERAND = function(t, e) {
          let n = [];
          if (Array.isArray(e))
              for (let r = 0; r < e.length; r += 1)
                  h.argument(t.length === e.length, "Not enough arguments given for type" + e),
                  n = n.concat(y.OPERAND(t[r], e[r]));
          else if ("SID" === e)
              n = n.concat(y.NUMBER(t));
          else if ("offset" === e)
              n = n.concat(y.NUMBER32(t));
          else if ("number" === e)
              n = n.concat(y.NUMBER(t));
          else {
              if ("real" !== e)
                  throw new Error("Unknown operand type " + e);
              n = n.concat(y.REAL(t))
          }
          return n
      }
      ,
      y.OP = y.BYTE,
      m.OP = m.BYTE;
      const E = "function" === typeof WeakMap && new WeakMap;
      function T(t, e, n) {
          for (let r = 0; r < e.length; r += 1) {
              const t = e[r];
              this[t.name] = t.value
          }
          if (this.tableName = t,
          this.fields = e,
          n) {
              const t = Object.keys(n);
              for (let e = 0; e < t.length; e += 1) {
                  const r = t[e]
                    , o = n[r];
                  void 0 !== this[r] && (this[r] = o)
              }
          }
      }
      function O(t, e, n) {
          void 0 === n && (n = e.length);
          const r = new Array(e.length + 1);
          r[0] = {
              name: t + "Count",
              type: "USHORT",
              value: n
          };
          for (let o = 0; o < e.length; o++)
              r[o + 1] = {
                  name: t + o,
                  type: "USHORT",
                  value: e[o]
              };
          return r
      }
      function I(t, e, n) {
          const r = e.length
            , o = new Array(r + 1);
          o[0] = {
              name: t + "Count",
              type: "USHORT",
              value: r
          };
          for (let i = 0; i < r; i++)
              o[i + 1] = {
                  name: t + i,
                  type: "TABLE",
                  value: n(e[i], i)
              };
          return o
      }
      function L(t, e, n) {
          const r = e.length;
          let o = [];
          o[0] = {
              name: t + "Count",
              type: "USHORT",
              value: r
          };
          for (let i = 0; i < r; i++)
              o = o.concat(n(e[i], i));
          return o
      }
      function A(t) {
          1 === t.format ? T.call(this, "coverageTable", [{
              name: "coverageFormat",
              type: "USHORT",
              value: 1
          }].concat(O("glyph", t.glyphs))) : h.assert(!1, "Can't create coverage table format 2 yet.")
      }
      function _(t) {
          T.call(this, "scriptListTable", L("scriptRecord", t, (function(t, e) {
              const n = t.script;
              let r = n.defaultLangSys;
              return h.assert(!!r, "Unable to write GSUB: script " + t.tag + " has no default language system."),
              [{
                  name: "scriptTag" + e,
                  type: "TAG",
                  value: t.tag
              }, {
                  name: "script" + e,
                  type: "TABLE",
                  value: new T("scriptTable",[{
                      name: "defaultLangSys",
                      type: "TABLE",
                      value: new T("defaultLangSys",[{
                          name: "lookupOrder",
                          type: "USHORT",
                          value: 0
                      }, {
                          name: "reqFeatureIndex",
                          type: "USHORT",
                          value: r.reqFeatureIndex
                      }].concat(O("featureIndex", r.featureIndexes)))
                  }].concat(L("langSys", n.langSysRecords, (function(t, e) {
                      const n = t.langSys;
                      return [{
                          name: "langSysTag" + e,
                          type: "TAG",
                          value: t.tag
                      }, {
                          name: "langSys" + e,
                          type: "TABLE",
                          value: new T("langSys",[{
                              name: "lookupOrder",
                              type: "USHORT",
                              value: 0
                          }, {
                              name: "reqFeatureIndex",
                              type: "USHORT",
                              value: n.reqFeatureIndex
                          }].concat(O("featureIndex", n.featureIndexes)))
                      }]
                  }
                  ))))
              }]
          }
          )))
      }
      function R(t) {
          T.call(this, "featureListTable", L("featureRecord", t, (function(t, e) {
              const n = t.feature;
              return [{
                  name: "featureTag" + e,
                  type: "TAG",
                  value: t.tag
              }, {
                  name: "feature" + e,
                  type: "TABLE",
                  value: new T("featureTable",[{
                      name: "featureParams",
                      type: "USHORT",
                      value: n.featureParams
                  }].concat(O("lookupListIndex", n.lookupListIndexes)))
              }]
          }
          )))
      }
      function N(t, e) {
          T.call(this, "lookupListTable", I("lookup", t, (function(t) {
              let n = e[t.lookupType];
              return h.assert(!!n, "Unable to write GSUB lookup type " + t.lookupType + " tables."),
              new T("lookupTable",[{
                  name: "lookupType",
                  type: "USHORT",
                  value: t.lookupType
              }, {
                  name: "lookupFlag",
                  type: "USHORT",
                  value: t.lookupFlag
              }].concat(I("subtable", t.subtables, n)))
          }
          )))
      }
      y.CHARSTRING = function(t) {
          if (E) {
              const e = E.get(t);
              if (void 0 !== e)
                  return e
          }
          let e = [];
          const n = t.length;
          for (let r = 0; r < n; r += 1) {
              const n = t[r];
              e = e.concat(y[n.type](n.value))
          }
          return E && E.set(t, e),
          e
      }
      ,
      m.CHARSTRING = function(t) {
          return y.CHARSTRING(t).length
      }
      ,
      y.OBJECT = function(t) {
          const e = y[t.type];
          return h.argument(void 0 !== e, "No encoding function for type " + t.type),
          e(t.value)
      }
      ,
      m.OBJECT = function(t) {
          const e = m[t.type];
          return h.argument(void 0 !== e, "No sizeOf function for type " + t.type),
          e(t.value)
      }
      ,
      y.TABLE = function(t) {
          let e = [];
          const n = t.fields.length
            , r = []
            , o = [];
          for (let i = 0; i < n; i += 1) {
              const n = t.fields[i]
                , s = y[n.type];
              h.argument(void 0 !== s, "No encoding function for field type " + n.type + " (" + n.name + ")");
              let a = t[n.name];
              void 0 === a && (a = n.value);
              const l = s(a);
              "TABLE" === n.type ? (o.push(e.length),
              e = e.concat([0, 0]),
              r.push(l)) : e = e.concat(l)
          }
          for (let i = 0; i < r.length; i += 1) {
              const n = o[i]
                , s = e.length;
              h.argument(s < 65536, "Table " + t.tableName + " too big."),
              e[n] = s >> 8,
              e[n + 1] = 255 & s,
              e = e.concat(r[i])
          }
          return e
      }
      ,
      m.TABLE = function(t) {
          let e = 0;
          const n = t.fields.length;
          for (let r = 0; r < n; r += 1) {
              const n = t.fields[r]
                , o = m[n.type];
              h.argument(void 0 !== o, "No sizeOf function for field type " + n.type + " (" + n.name + ")");
              let i = t[n.name];
              void 0 === i && (i = n.value),
              e += o(i),
              "TABLE" === n.type && (e += 2)
          }
          return e
      }
      ,
      y.RECORD = y.TABLE,
      m.RECORD = m.TABLE,
      y.LITERAL = function(t) {
          return t
      }
      ,
      m.LITERAL = function(t) {
          return t.length
      }
      ,
      T.prototype.encode = function() {
          return y.TABLE(this)
      }
      ,
      T.prototype.sizeOf = function() {
          return m.TABLE(this)
      }
      ,
      A.prototype = Object.create(T.prototype),
      A.prototype.constructor = A,
      _.prototype = Object.create(T.prototype),
      _.prototype.constructor = _,
      R.prototype = Object.create(T.prototype),
      R.prototype.constructor = R,
      N.prototype = Object.create(T.prototype),
      N.prototype.constructor = N;
      var k = {
          Table: T,
          Record: T,
          Coverage: A,
          ScriptList: _,
          FeatureList: R,
          LookupList: N,
          ushortList: O,
          tableList: I,
          recordList: L
      };
      function B(t, e) {
          return t.getUint8(e)
      }
      function D(t, e) {
          return t.getUint16(e, !1)
      }
      function U(t, e) {
          return t.getUint32(e, !1)
      }
      function M(t, e) {
          return t.getInt16(e, !1) + t.getUint16(e + 2, !1) / 65535
      }
      const X = {
          byte: 1,
          uShort: 2,
          short: 2,
          uLong: 4,
          fixed: 4,
          longDateTime: 8,
          tag: 4
      };
      function F(t, e) {
          this.data = t,
          this.offset = e,
          this.relativeOffset = 0
      }
      F.prototype.parseByte = function() {
          const t = this.data.getUint8(this.offset + this.relativeOffset);
          return this.relativeOffset += 1,
          t
      }
      ,
      F.prototype.parseChar = function() {
          const t = this.data.getInt8(this.offset + this.relativeOffset);
          return this.relativeOffset += 1,
          t
      }
      ,
      F.prototype.parseCard8 = F.prototype.parseByte,
      F.prototype.parseUShort = function() {
          const t = this.data.getUint16(this.offset + this.relativeOffset);
          return this.relativeOffset += 2,
          t
      }
      ,
      F.prototype.parseCard16 = F.prototype.parseUShort,
      F.prototype.parseSID = F.prototype.parseUShort,
      F.prototype.parseOffset16 = F.prototype.parseUShort,
      F.prototype.parseShort = function() {
          const t = this.data.getInt16(this.offset + this.relativeOffset);
          return this.relativeOffset += 2,
          t
      }
      ,
      F.prototype.parseF2Dot14 = function() {
          const t = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
          return this.relativeOffset += 2,
          t
      }
      ,
      F.prototype.parseULong = function() {
          const t = U(this.data, this.offset + this.relativeOffset);
          return this.relativeOffset += 4,
          t
      }
      ,
      F.prototype.parseOffset32 = F.prototype.parseULong,
      F.prototype.parseFixed = function() {
          const t = M(this.data, this.offset + this.relativeOffset);
          return this.relativeOffset += 4,
          t
      }
      ,
      F.prototype.parseString = function(t) {
          const e = this.data
            , n = this.offset + this.relativeOffset;
          let r = "";
          this.relativeOffset += t;
          for (let o = 0; o < t; o++)
              r += String.fromCharCode(e.getUint8(n + o));
          return r
      }
      ,
      F.prototype.parseTag = function() {
          return this.parseString(4)
      }
      ,
      F.prototype.parseLongDateTime = function() {
          let t = U(this.data, this.offset + this.relativeOffset + 4);
          return t -= 2082844800,
          this.relativeOffset += 8,
          t
      }
      ,
      F.prototype.parseVersion = function(t) {
          const e = D(this.data, this.offset + this.relativeOffset)
            , n = D(this.data, this.offset + this.relativeOffset + 2);
          return this.relativeOffset += 4,
          void 0 === t && (t = 4096),
          e + n / t / 10
      }
      ,
      F.prototype.skip = function(t, e) {
          void 0 === e && (e = 1),
          this.relativeOffset += X[t] * e
      }
      ,
      F.prototype.parseULongList = function(t) {
          void 0 === t && (t = this.parseULong());
          const e = new Array(t)
            , n = this.data;
          let r = this.offset + this.relativeOffset;
          for (let o = 0; o < t; o++)
              e[o] = n.getUint32(r),
              r += 4;
          return this.relativeOffset += 4 * t,
          e
      }
      ,
      F.prototype.parseOffset16List = F.prototype.parseUShortList = function(t) {
          void 0 === t && (t = this.parseUShort());
          const e = new Array(t)
            , n = this.data;
          let r = this.offset + this.relativeOffset;
          for (let o = 0; o < t; o++)
              e[o] = n.getUint16(r),
              r += 2;
          return this.relativeOffset += 2 * t,
          e
      }
      ,
      F.prototype.parseShortList = function(t) {
          const e = new Array(t)
            , n = this.data;
          let r = this.offset + this.relativeOffset;
          for (let o = 0; o < t; o++)
              e[o] = n.getInt16(r),
              r += 2;
          return this.relativeOffset += 2 * t,
          e
      }
      ,
      F.prototype.parseByteList = function(t) {
          const e = new Array(t)
            , n = this.data;
          let r = this.offset + this.relativeOffset;
          for (let o = 0; o < t; o++)
              e[o] = n.getUint8(r++);
          return this.relativeOffset += t,
          e
      }
      ,
      F.prototype.parseList = function(t, e) {
          e || (e = t,
          t = this.parseUShort());
          const n = new Array(t);
          for (let r = 0; r < t; r++)
              n[r] = e.call(this);
          return n
      }
      ,
      F.prototype.parseList32 = function(t, e) {
          e || (e = t,
          t = this.parseULong());
          const n = new Array(t);
          for (let r = 0; r < t; r++)
              n[r] = e.call(this);
          return n
      }
      ,
      F.prototype.parseRecordList = function(t, e) {
          e || (e = t,
          t = this.parseUShort());
          const n = new Array(t)
            , r = Object.keys(e);
          for (let o = 0; o < t; o++) {
              const t = {};
              for (let n = 0; n < r.length; n++) {
                  const o = r[n]
                    , i = e[o];
                  t[o] = i.call(this)
              }
              n[o] = t
          }
          return n
      }
      ,
      F.prototype.parseRecordList32 = function(t, e) {
          e || (e = t,
          t = this.parseULong());
          const n = new Array(t)
            , r = Object.keys(e);
          for (let o = 0; o < t; o++) {
              const t = {};
              for (let n = 0; n < r.length; n++) {
                  const o = r[n]
                    , i = e[o];
                  t[o] = i.call(this)
              }
              n[o] = t
          }
          return n
      }
      ,
      F.prototype.parseStruct = function(t) {
          if ("function" === typeof t)
              return t.call(this);
          {
              const e = Object.keys(t)
                , n = {};
              for (let r = 0; r < e.length; r++) {
                  const o = e[r]
                    , i = t[o];
                  n[o] = i.call(this)
              }
              return n
          }
      }
      ,
      F.prototype.parseValueRecord = function(t) {
          if (void 0 === t && (t = this.parseUShort()),
          0 === t)
              return;
          const e = {};
          return 1 & t && (e.xPlacement = this.parseShort()),
          2 & t && (e.yPlacement = this.parseShort()),
          4 & t && (e.xAdvance = this.parseShort()),
          8 & t && (e.yAdvance = this.parseShort()),
          16 & t && (e.xPlaDevice = void 0,
          this.parseShort()),
          32 & t && (e.yPlaDevice = void 0,
          this.parseShort()),
          64 & t && (e.xAdvDevice = void 0,
          this.parseShort()),
          128 & t && (e.yAdvDevice = void 0,
          this.parseShort()),
          e
      }
      ,
      F.prototype.parseValueRecordList = function() {
          const t = this.parseUShort()
            , e = this.parseUShort()
            , n = new Array(e);
          for (let r = 0; r < e; r++)
              n[r] = this.parseValueRecord(t);
          return n
      }
      ,
      F.prototype.parsePointer = function(t) {
          const e = this.parseOffset16();
          if (e > 0)
              return new F(this.data,this.offset + e).parseStruct(t)
      }
      ,
      F.prototype.parsePointer32 = function(t) {
          const e = this.parseOffset32();
          if (e > 0)
              return new F(this.data,this.offset + e).parseStruct(t)
      }
      ,
      F.prototype.parseListOfLists = function(t) {
          const e = this.parseOffset16List()
            , n = e.length
            , r = this.relativeOffset
            , o = new Array(n);
          for (let i = 0; i < n; i++) {
              const n = e[i];
              if (0 !== n)
                  if (this.relativeOffset = n,
                  t) {
                      const e = this.parseOffset16List()
                        , r = new Array(e.length);
                      for (let o = 0; o < e.length; o++)
                          this.relativeOffset = n + e[o],
                          r[o] = t.call(this);
                      o[i] = r
                  } else
                      o[i] = this.parseUShortList();
              else
                  o[i] = void 0
          }
          return this.relativeOffset = r,
          o
      }
      ,
      F.prototype.parseCoverage = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort()
            , n = this.parseUShort();
          if (1 === e)
              return {
                  format: 1,
                  glyphs: this.parseUShortList(n)
              };
          if (2 === e) {
              const t = new Array(n);
              for (let e = 0; e < n; e++)
                  t[e] = {
                      start: this.parseUShort(),
                      end: this.parseUShort(),
                      index: this.parseUShort()
                  };
              return {
                  format: 2,
                  ranges: t
              }
          }
          throw new Error("0x" + t.toString(16) + ": Coverage format must be 1 or 2.")
      }
      ,
      F.prototype.parseClassDef = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort();
          if (1 === e)
              return {
                  format: 1,
                  startGlyph: this.parseUShort(),
                  classes: this.parseUShortList()
              };
          if (2 === e)
              return {
                  format: 2,
                  ranges: this.parseRecordList({
                      start: F.uShort,
                      end: F.uShort,
                      classId: F.uShort
                  })
              };
          throw new Error("0x" + t.toString(16) + ": ClassDef format must be 1 or 2.")
      }
      ,
      F.list = function(t, e) {
          return function() {
              return this.parseList(t, e)
          }
      }
      ,
      F.list32 = function(t, e) {
          return function() {
              return this.parseList32(t, e)
          }
      }
      ,
      F.recordList = function(t, e) {
          return function() {
              return this.parseRecordList(t, e)
          }
      }
      ,
      F.recordList32 = function(t, e) {
          return function() {
              return this.parseRecordList32(t, e)
          }
      }
      ,
      F.pointer = function(t) {
          return function() {
              return this.parsePointer(t)
          }
      }
      ,
      F.pointer32 = function(t) {
          return function() {
              return this.parsePointer32(t)
          }
      }
      ,
      F.tag = F.prototype.parseTag,
      F.byte = F.prototype.parseByte,
      F.uShort = F.offset16 = F.prototype.parseUShort,
      F.uShortList = F.prototype.parseUShortList,
      F.uLong = F.offset32 = F.prototype.parseULong,
      F.uLongList = F.prototype.parseULongList,
      F.struct = F.prototype.parseStruct,
      F.coverage = F.prototype.parseCoverage,
      F.classDef = F.prototype.parseClassDef;
      const Y = {
          reserved: F.uShort,
          reqFeatureIndex: F.uShort,
          featureIndexes: F.uShortList
      };
      F.prototype.parseScriptList = function() {
          return this.parsePointer(F.recordList({
              tag: F.tag,
              script: F.pointer({
                  defaultLangSys: F.pointer(Y),
                  langSysRecords: F.recordList({
                      tag: F.tag,
                      langSys: F.pointer(Y)
                  })
              })
          })) || []
      }
      ,
      F.prototype.parseFeatureList = function() {
          return this.parsePointer(F.recordList({
              tag: F.tag,
              feature: F.pointer({
                  featureParams: F.offset16,
                  lookupListIndexes: F.uShortList
              })
          })) || []
      }
      ,
      F.prototype.parseLookupList = function(t) {
          return this.parsePointer(F.list(F.pointer((function() {
              const e = this.parseUShort();
              h.argument(1 <= e && e <= 9, "GPOS/GSUB lookup type " + e + " unknown.");
              const n = this.parseUShort()
                , r = 16 & n;
              return {
                  lookupType: e,
                  lookupFlag: n,
                  subtables: this.parseList(F.pointer(t[e])),
                  markFilteringSet: r ? this.parseUShort() : void 0
              }
          }
          )))) || []
      }
      ,
      F.prototype.parseFeatureVariationsList = function() {
          return this.parsePointer32((function() {
              const t = this.parseUShort()
                , e = this.parseUShort();
              h.argument(1 === t && e < 1, "GPOS/GSUB feature variations table unknown.");
              return this.parseRecordList32({
                  conditionSetOffset: F.offset32,
                  featureTableSubstitutionOffset: F.offset32
              })
          }
          )) || []
      }
      ;
      var G = {
          getByte: B,
          getCard8: B,
          getUShort: D,
          getCard16: D,
          getShort: function(t, e) {
              return t.getInt16(e, !1)
          },
          getULong: U,
          getFixed: M,
          getTag: function(t, e) {
              let n = "";
              for (let r = e; r < e + 4; r += 1)
                  n += String.fromCharCode(t.getInt8(r));
              return n
          },
          getOffset: function(t, e, n) {
              let r = 0;
              for (let o = 0; o < n; o += 1)
                  r <<= 8,
                  r += t.getUint8(e + o);
              return r
          },
          getBytes: function(t, e, n) {
              const r = [];
              for (let o = e; o < n; o += 1)
                  r.push(t.getUint8(o));
              return r
          },
          bytesToString: function(t) {
              let e = "";
              for (let n = 0; n < t.length; n += 1)
                  e += String.fromCharCode(t[n]);
              return e
          },
          Parser: F
      };
      function H(t, e, n) {
          t.segments.push({
              end: e,
              start: e,
              delta: -(e - n),
              offset: 0,
              glyphIndex: n
          })
      }
      var q = {
          parse: function(t, e) {
              const n = {};
              n.version = G.getUShort(t, e),
              h.argument(0 === n.version, "cmap table version should be 0."),
              n.numTables = G.getUShort(t, e + 2);
              let r = -1;
              for (let i = n.numTables - 1; i >= 0; i -= 1) {
                  const n = G.getUShort(t, e + 4 + 8 * i)
                    , o = G.getUShort(t, e + 4 + 8 * i + 2);
                  if (3 === n && (0 === o || 1 === o || 10 === o) || 0 === n && (0 === o || 1 === o || 2 === o || 3 === o || 4 === o)) {
                      r = G.getULong(t, e + 4 + 8 * i + 4);
                      break
                  }
              }
              if (-1 === r)
                  throw new Error("No valid cmap sub-tables found.");
              const o = new G.Parser(t,e + r);
              if (n.format = o.parseUShort(),
              12 === n.format)
                  !function(t, e) {
                      let n;
                      e.parseUShort(),
                      t.length = e.parseULong(),
                      t.language = e.parseULong(),
                      t.groupCount = n = e.parseULong(),
                      t.glyphIndexMap = {};
                      for (let r = 0; r < n; r += 1) {
                          const n = e.parseULong()
                            , r = e.parseULong();
                          let o = e.parseULong();
                          for (let e = n; e <= r; e += 1)
                              t.glyphIndexMap[e] = o,
                              o++
                      }
                  }(n, o);
              else {
                  if (4 !== n.format)
                      throw new Error("Only format 4 and 12 cmap tables are supported (found format " + n.format + ").");
                  !function(t, e, n, r, o) {
                      let i;
                      t.length = e.parseUShort(),
                      t.language = e.parseUShort(),
                      t.segCount = i = e.parseUShort() >> 1,
                      e.skip("uShort", 3),
                      t.glyphIndexMap = {};
                      const s = new G.Parser(n,r + o + 14)
                        , a = new G.Parser(n,r + o + 16 + 2 * i)
                        , l = new G.Parser(n,r + o + 16 + 4 * i)
                        , u = new G.Parser(n,r + o + 16 + 6 * i);
                      let p = r + o + 16 + 8 * i;
                      for (let c = 0; c < i - 1; c += 1) {
                          let e;
                          const r = s.parseUShort()
                            , o = a.parseUShort()
                            , i = l.parseShort()
                            , c = u.parseUShort();
                          for (let s = o; s <= r; s += 1)
                              0 !== c ? (p = u.offset + u.relativeOffset - 2,
                              p += c,
                              p += 2 * (s - o),
                              e = G.getUShort(n, p),
                              0 !== e && (e = e + i & 65535)) : e = s + i & 65535,
                              t.glyphIndexMap[s] = e
                      }
                  }(n, o, t, e, r)
              }
              return n
          },
          make: function(t) {
              let e, n = !0;
              for (e = t.length - 1; e > 0; e -= 1) {
                  if (t.get(e).unicode > 65535) {
                      console.log("Adding CMAP format 12 (needed!)"),
                      n = !1;
                      break
                  }
              }
              let r = [{
                  name: "version",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "numTables",
                  type: "USHORT",
                  value: n ? 1 : 2
              }, {
                  name: "platformID",
                  type: "USHORT",
                  value: 3
              }, {
                  name: "encodingID",
                  type: "USHORT",
                  value: 1
              }, {
                  name: "offset",
                  type: "ULONG",
                  value: n ? 12 : 20
              }];
              n || (r = r.concat([{
                  name: "cmap12PlatformID",
                  type: "USHORT",
                  value: 3
              }, {
                  name: "cmap12EncodingID",
                  type: "USHORT",
                  value: 10
              }, {
                  name: "cmap12Offset",
                  type: "ULONG",
                  value: 0
              }])),
              r = r.concat([{
                  name: "format",
                  type: "USHORT",
                  value: 4
              }, {
                  name: "cmap4Length",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "language",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "segCountX2",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "searchRange",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "entrySelector",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "rangeShift",
                  type: "USHORT",
                  value: 0
              }]);
              const o = new k.Table("cmap",r);
              for (o.segments = [],
              e = 0; e < t.length; e += 1) {
                  const n = t.get(e);
                  for (let t = 0; t < n.unicodes.length; t += 1)
                      H(o, n.unicodes[t], e);
                  o.segments = o.segments.sort((function(t, e) {
                      return t.start - e.start
                  }
                  ))
              }
              !function(t) {
                  t.segments.push({
                      end: 65535,
                      start: 65535,
                      delta: 1,
                      offset: 0
                  })
              }(o);
              const i = o.segments.length;
              let s = 0
                , a = []
                , l = []
                , u = []
                , p = []
                , c = []
                , h = [];
              for (e = 0; e < i; e += 1) {
                  const t = o.segments[e];
                  t.end <= 65535 && t.start <= 65535 ? (a = a.concat({
                      name: "end_" + e,
                      type: "USHORT",
                      value: t.end
                  }),
                  l = l.concat({
                      name: "start_" + e,
                      type: "USHORT",
                      value: t.start
                  }),
                  u = u.concat({
                      name: "idDelta_" + e,
                      type: "SHORT",
                      value: t.delta
                  }),
                  p = p.concat({
                      name: "idRangeOffset_" + e,
                      type: "USHORT",
                      value: t.offset
                  }),
                  void 0 !== t.glyphId && (c = c.concat({
                      name: "glyph_" + e,
                      type: "USHORT",
                      value: t.glyphId
                  }))) : s += 1,
                  n || void 0 === t.glyphIndex || (h = h.concat({
                      name: "cmap12Start_" + e,
                      type: "ULONG",
                      value: t.start
                  }),
                  h = h.concat({
                      name: "cmap12End_" + e,
                      type: "ULONG",
                      value: t.end
                  }),
                  h = h.concat({
                      name: "cmap12Glyph_" + e,
                      type: "ULONG",
                      value: t.glyphIndex
                  }))
              }
              if (o.segCountX2 = 2 * (i - s),
              o.searchRange = 2 * Math.pow(2, Math.floor(Math.log(i - s) / Math.log(2))),
              o.entrySelector = Math.log(o.searchRange / 2) / Math.log(2),
              o.rangeShift = o.segCountX2 - o.searchRange,
              o.fields = o.fields.concat(a),
              o.fields.push({
                  name: "reservedPad",
                  type: "USHORT",
                  value: 0
              }),
              o.fields = o.fields.concat(l),
              o.fields = o.fields.concat(u),
              o.fields = o.fields.concat(p),
              o.fields = o.fields.concat(c),
              o.cmap4Length = 14 + 2 * a.length + 2 + 2 * l.length + 2 * u.length + 2 * p.length + 2 * c.length,
              !n) {
                  const t = 16 + 4 * h.length;
                  o.cmap12Offset = 20 + o.cmap4Length,
                  o.fields = o.fields.concat([{
                      name: "cmap12Format",
                      type: "USHORT",
                      value: 12
                  }, {
                      name: "cmap12Reserved",
                      type: "USHORT",
                      value: 0
                  }, {
                      name: "cmap12Length",
                      type: "ULONG",
                      value: t
                  }, {
                      name: "cmap12Language",
                      type: "ULONG",
                      value: 0
                  }, {
                      name: "cmap12nGroups",
                      type: "ULONG",
                      value: h.length / 3
                  }]),
                  o.fields = o.fields.concat(h)
              }
              return o
          }
      };
      const W = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"]
        , z = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"]
        , j = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"]
        , V = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];
      function Z(t) {
          this.font = t
      }
      function J(t) {
          this.cmap = t
      }
      function K(t, e) {
          this.encoding = t,
          this.charset = e
      }
      function $(t) {
          switch (t.version) {
          case 1:
              this.names = V.slice();
              break;
          case 2:
              this.names = new Array(t.numberOfGlyphs);
              for (let e = 0; e < t.numberOfGlyphs; e++)
                  t.glyphNameIndex[e] < V.length ? this.names[e] = V[t.glyphNameIndex[e]] : this.names[e] = t.names[t.glyphNameIndex[e] - V.length];
              break;
          case 2.5:
              this.names = new Array(t.numberOfGlyphs);
              for (let e = 0; e < t.numberOfGlyphs; e++)
                  this.names[e] = V[e + t.glyphNameIndex[e]];
              break;
          case 3:
          default:
              this.names = []
          }
      }
      Z.prototype.charToGlyphIndex = function(t) {
          const e = t.codePointAt(0)
            , n = this.font.glyphs;
          if (n)
              for (let r = 0; r < n.length; r += 1) {
                  const t = n.get(r);
                  for (let n = 0; n < t.unicodes.length; n += 1)
                      if (t.unicodes[n] === e)
                          return r
              }
          return null
      }
      ,
      J.prototype.charToGlyphIndex = function(t) {
          return this.cmap.glyphIndexMap[t.codePointAt(0)] || 0
      }
      ,
      K.prototype.charToGlyphIndex = function(t) {
          const e = t.codePointAt(0)
            , n = this.encoding[e];
          return this.charset.indexOf(n)
      }
      ,
      $.prototype.nameToGlyphIndex = function(t) {
          return this.names.indexOf(t)
      }
      ,
      $.prototype.glyphIndexToName = function(t) {
          return this.names[t]
      }
      ;
      var Q = {
          line: function(t, e, n, r, o) {
              t.beginPath(),
              t.moveTo(e, n),
              t.lineTo(r, o),
              t.stroke()
          }
      };
      function tt(t) {
          this.bindConstructorValues(t)
      }
      tt.prototype.bindConstructorValues = function(t) {
          this.index = t.index || 0,
          this.name = t.name || null,
          this.unicode = t.unicode || void 0,
          this.unicodes = t.unicodes || void 0 !== t.unicode ? [t.unicode] : [],
          t.xMin && (this.xMin = t.xMin),
          t.yMin && (this.yMin = t.yMin),
          t.xMax && (this.xMax = t.xMax),
          t.yMax && (this.yMax = t.yMax),
          t.advanceWidth && (this.advanceWidth = t.advanceWidth),
          Object.defineProperty(this, "path", function(t, e) {
              let n = e || new u;
              return {
                  configurable: !0,
                  get: function() {
                      return "function" === typeof n && (n = n()),
                      n
                  },
                  set: function(t) {
                      n = t
                  }
              }
          }(0, t.path))
      }
      ,
      tt.prototype.addUnicode = function(t) {
          0 === this.unicodes.length && (this.unicode = t),
          this.unicodes.push(t)
      }
      ,
      tt.prototype.getBoundingBox = function() {
          return this.path.getBoundingBox()
      }
      ,
      tt.prototype.getPath = function(t, e, n, r, o) {
          let i, s;
          t = void 0 !== t ? t : 0,
          e = void 0 !== e ? e : 0,
          n = void 0 !== n ? n : 72,
          r || (r = {});
          let a = r.xScale
            , l = r.yScale;
          if (r.hinting && o && o.hinting && (s = this.path && o.hinting.exec(this, n)),
          s)
              i = o.hinting.getCommands(s),
              t = Math.round(t),
              e = Math.round(e),
              a = l = 1;
          else {
              i = this.path.commands;
              const t = 1 / this.path.unitsPerEm * n;
              void 0 === a && (a = t),
              void 0 === l && (l = t)
          }
          const p = new u;
          for (let u = 0; u < i.length; u += 1) {
              const n = i[u];
              "M" === n.type ? p.moveTo(t + n.x * a, e + -n.y * l) : "L" === n.type ? p.lineTo(t + n.x * a, e + -n.y * l) : "Q" === n.type ? p.quadraticCurveTo(t + n.x1 * a, e + -n.y1 * l, t + n.x * a, e + -n.y * l) : "C" === n.type ? p.curveTo(t + n.x1 * a, e + -n.y1 * l, t + n.x2 * a, e + -n.y2 * l, t + n.x * a, e + -n.y * l) : "Z" === n.type && p.closePath()
          }
          return p
      }
      ,
      tt.prototype.getContours = function() {
          if (void 0 === this.points)
              return [];
          const t = [];
          let e = [];
          for (let n = 0; n < this.points.length; n += 1) {
              const r = this.points[n];
              e.push(r),
              r.lastPointOfContour && (t.push(e),
              e = [])
          }
          return h.argument(0 === e.length, "There are still points left in the current contour."),
          t
      }
      ,
      tt.prototype.getMetrics = function() {
          const t = this.path.commands
            , e = []
            , n = [];
          for (let o = 0; o < t.length; o += 1) {
              const r = t[o];
              "Z" !== r.type && (e.push(r.x),
              n.push(r.y)),
              "Q" !== r.type && "C" !== r.type || (e.push(r.x1),
              n.push(r.y1)),
              "C" === r.type && (e.push(r.x2),
              n.push(r.y2))
          }
          const r = {
              xMin: Math.min.apply(null, e),
              yMin: Math.min.apply(null, n),
              xMax: Math.max.apply(null, e),
              yMax: Math.max.apply(null, n),
              leftSideBearing: this.leftSideBearing
          };
          return isFinite(r.xMin) || (r.xMin = 0),
          isFinite(r.xMax) || (r.xMax = this.advanceWidth),
          isFinite(r.yMin) || (r.yMin = 0),
          isFinite(r.yMax) || (r.yMax = 0),
          r.rightSideBearing = this.advanceWidth - r.leftSideBearing - (r.xMax - r.xMin),
          r
      }
      ,
      tt.prototype.draw = function(t, e, n, r, o) {
          this.getPath(e, n, r, o).draw(t)
      }
      ,
      tt.prototype.drawPoints = function(t, e, n, r) {
          function o(e, n, r, o) {
              const i = 2 * Math.PI;
              t.beginPath();
              for (let s = 0; s < e.length; s += 1)
                  t.moveTo(n + e[s].x * o, r + e[s].y * o),
                  t.arc(n + e[s].x * o, r + e[s].y * o, 2, 0, i, !1);
              t.closePath(),
              t.fill()
          }
          e = void 0 !== e ? e : 0,
          n = void 0 !== n ? n : 0,
          r = void 0 !== r ? r : 24;
          const i = 1 / this.path.unitsPerEm * r
            , s = []
            , a = []
            , l = this.path;
          for (let u = 0; u < l.commands.length; u += 1) {
              const t = l.commands[u];
              void 0 !== t.x && s.push({
                  x: t.x,
                  y: -t.y
              }),
              void 0 !== t.x1 && a.push({
                  x: t.x1,
                  y: -t.y1
              }),
              void 0 !== t.x2 && a.push({
                  x: t.x2,
                  y: -t.y2
              })
          }
          t.fillStyle = "blue",
          o(s, e, n, i),
          t.fillStyle = "red",
          o(a, e, n, i)
      }
      ,
      tt.prototype.drawMetrics = function(t, e, n, r) {
          let o;
          e = void 0 !== e ? e : 0,
          n = void 0 !== n ? n : 0,
          r = void 0 !== r ? r : 24,
          o = 1 / this.path.unitsPerEm * r,
          t.lineWidth = 1,
          t.strokeStyle = "black",
          Q.line(t, e, -1e4, e, 1e4),
          Q.line(t, -1e4, n, 1e4, n);
          const i = this.xMin || 0;
          let s = this.yMin || 0;
          const a = this.xMax || 0;
          let l = this.yMax || 0;
          const u = this.advanceWidth || 0;
          t.strokeStyle = "blue",
          Q.line(t, e + i * o, -1e4, e + i * o, 1e4),
          Q.line(t, e + a * o, -1e4, e + a * o, 1e4),
          Q.line(t, -1e4, n + -s * o, 1e4, n + -s * o),
          Q.line(t, -1e4, n + -l * o, 1e4, n + -l * o),
          t.strokeStyle = "green",
          Q.line(t, e + u * o, -1e4, e + u * o, 1e4)
      }
      ;
      var et = tt;
      function nt(t, e, n) {
          Object.defineProperty(t, e, {
              get: function() {
                  return t.path,
                  t[n]
              },
              set: function(e) {
                  t[n] = e
              },
              enumerable: !0,
              configurable: !0
          })
      }
      function rt(t, e) {
          if (this.font = t,
          this.glyphs = {},
          Array.isArray(e))
              for (let n = 0; n < e.length; n++)
                  this.glyphs[n] = e[n];
          this.length = e && e.length || 0
      }
      rt.prototype.get = function(t) {
          return "function" === typeof this.glyphs[t] && (this.glyphs[t] = this.glyphs[t]()),
          this.glyphs[t]
      }
      ,
      rt.prototype.push = function(t, e) {
          this.glyphs[t] = e,
          this.length++
      }
      ;
      var ot = {
          GlyphSet: rt,
          glyphLoader: function(t, e) {
              return new et({
                  index: e,
                  font: t
              })
          },
          ttfGlyphLoader: function(t, e, n, r, o, i) {
              return function() {
                  const s = new et({
                      index: e,
                      font: t
                  });
                  return s.path = function() {
                      n(s, r, o);
                      const e = i(t.glyphs, s);
                      return e.unitsPerEm = t.unitsPerEm,
                      e
                  }
                  ,
                  nt(s, "xMin", "_xMin"),
                  nt(s, "xMax", "_xMax"),
                  nt(s, "yMin", "_yMin"),
                  nt(s, "yMax", "_yMax"),
                  s
              }
          },
          cffGlyphLoader: function(t, e, n, r) {
              return function() {
                  const o = new et({
                      index: e,
                      font: t
                  });
                  return o.path = function() {
                      const e = n(t, o, r);
                      return e.unitsPerEm = t.unitsPerEm,
                      e
                  }
                  ,
                  o
              }
          }
      };
      function it(t, e) {
          if (t === e)
              return !0;
          if (Array.isArray(t) && Array.isArray(e)) {
              if (t.length !== e.length)
                  return !1;
              for (let n = 0; n < t.length; n += 1)
                  if (!it(t[n], e[n]))
                      return !1;
              return !0
          }
          return !1
      }
      function st(t) {
          let e;
          return e = t.length < 1240 ? 107 : t.length < 33900 ? 1131 : 32768,
          e
      }
      function at(t, e, n) {
          const r = []
            , o = []
            , i = G.getCard16(t, e);
          let s, a;
          if (0 !== i) {
              const n = G.getByte(t, e + 2);
              s = e + (i + 1) * n + 2;
              let o = e + 3;
              for (let e = 0; e < i + 1; e += 1)
                  r.push(G.getOffset(t, o, n)),
                  o += n;
              a = s + r[i]
          } else
              a = e + 2;
          for (let l = 0; l < r.length - 1; l += 1) {
              let e = G.getBytes(t, s + r[l], s + r[l + 1]);
              n && (e = n(e)),
              o.push(e)
          }
          return {
              objects: o,
              startOffset: e,
              endOffset: a
          }
      }
      function lt(t, e) {
          let n, r, o, i;
          if (28 === e)
              return n = t.parseByte(),
              r = t.parseByte(),
              n << 8 | r;
          if (29 === e)
              return n = t.parseByte(),
              r = t.parseByte(),
              o = t.parseByte(),
              i = t.parseByte(),
              n << 24 | r << 16 | o << 8 | i;
          if (30 === e)
              return function(t) {
                  let e = "";
                  const n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];
                  for (; ; ) {
                      const r = t.parseByte()
                        , o = r >> 4
                        , i = 15 & r;
                      if (15 === o)
                          break;
                      if (e += n[o],
                      15 === i)
                          break;
                      e += n[i]
                  }
                  return parseFloat(e)
              }(t);
          if (e >= 32 && e <= 246)
              return e - 139;
          if (e >= 247 && e <= 250)
              return n = t.parseByte(),
              256 * (e - 247) + n + 108;
          if (e >= 251 && e <= 254)
              return n = t.parseByte(),
              256 * -(e - 251) - n - 108;
          throw new Error("Invalid b0 " + e)
      }
      function ut(t, e, n) {
          e = void 0 !== e ? e : 0;
          const r = new G.Parser(t,e)
            , o = [];
          let i = [];
          for (n = void 0 !== n ? n : t.length; r.relativeOffset < n; ) {
              let t = r.parseByte();
              t <= 21 ? (12 === t && (t = 1200 + r.parseByte()),
              o.push([t, i]),
              i = []) : i.push(lt(r, t))
          }
          return function(t) {
              const e = {};
              for (let n = 0; n < t.length; n += 1) {
                  const r = t[n][0]
                    , o = t[n][1];
                  let i;
                  if (i = 1 === o.length ? o[0] : o,
                  e.hasOwnProperty(r) && !isNaN(e[r]))
                      throw new Error("Object " + e + " already has key " + r);
                  e[r] = i
              }
              return e
          }(o)
      }
      function pt(t, e) {
          return e = e <= 390 ? W[e] : t[e - 391]
      }
      function ct(t, e, n) {
          const r = {};
          let o;
          for (let i = 0; i < e.length; i += 1) {
              const s = e[i];
              if (Array.isArray(s.type)) {
                  const e = [];
                  e.length = s.type.length;
                  for (let r = 0; r < s.type.length; r++)
                      o = void 0 !== t[s.op] ? t[s.op][r] : void 0,
                      void 0 === o && (o = void 0 !== s.value && void 0 !== s.value[r] ? s.value[r] : null),
                      "SID" === s.type[r] && (o = pt(n, o)),
                      e[r] = o;
                  r[s.name] = e
              } else
                  o = t[s.op],
                  void 0 === o && (o = void 0 !== s.value ? s.value : null),
                  "SID" === s.type && (o = pt(n, o)),
                  r[s.name] = o
          }
          return r
      }
      const ht = [{
          name: "version",
          op: 0,
          type: "SID"
      }, {
          name: "notice",
          op: 1,
          type: "SID"
      }, {
          name: "copyright",
          op: 1200,
          type: "SID"
      }, {
          name: "fullName",
          op: 2,
          type: "SID"
      }, {
          name: "familyName",
          op: 3,
          type: "SID"
      }, {
          name: "weight",
          op: 4,
          type: "SID"
      }, {
          name: "isFixedPitch",
          op: 1201,
          type: "number",
          value: 0
      }, {
          name: "italicAngle",
          op: 1202,
          type: "number",
          value: 0
      }, {
          name: "underlinePosition",
          op: 1203,
          type: "number",
          value: -100
      }, {
          name: "underlineThickness",
          op: 1204,
          type: "number",
          value: 50
      }, {
          name: "paintType",
          op: 1205,
          type: "number",
          value: 0
      }, {
          name: "charstringType",
          op: 1206,
          type: "number",
          value: 2
      }, {
          name: "fontMatrix",
          op: 1207,
          type: ["real", "real", "real", "real", "real", "real"],
          value: [.001, 0, 0, .001, 0, 0]
      }, {
          name: "uniqueId",
          op: 13,
          type: "number"
      }, {
          name: "fontBBox",
          op: 5,
          type: ["number", "number", "number", "number"],
          value: [0, 0, 0, 0]
      }, {
          name: "strokeWidth",
          op: 1208,
          type: "number",
          value: 0
      }, {
          name: "xuid",
          op: 14,
          type: [],
          value: null
      }, {
          name: "charset",
          op: 15,
          type: "offset",
          value: 0
      }, {
          name: "encoding",
          op: 16,
          type: "offset",
          value: 0
      }, {
          name: "charStrings",
          op: 17,
          type: "offset",
          value: 0
      }, {
          name: "private",
          op: 18,
          type: ["number", "offset"],
          value: [0, 0]
      }, {
          name: "ros",
          op: 1230,
          type: ["SID", "SID", "number"]
      }, {
          name: "cidFontVersion",
          op: 1231,
          type: "number",
          value: 0
      }, {
          name: "cidFontRevision",
          op: 1232,
          type: "number",
          value: 0
      }, {
          name: "cidFontType",
          op: 1233,
          type: "number",
          value: 0
      }, {
          name: "cidCount",
          op: 1234,
          type: "number",
          value: 8720
      }, {
          name: "uidBase",
          op: 1235,
          type: "number"
      }, {
          name: "fdArray",
          op: 1236,
          type: "offset"
      }, {
          name: "fdSelect",
          op: 1237,
          type: "offset"
      }, {
          name: "fontName",
          op: 1238,
          type: "SID"
      }]
        , ft = [{
          name: "subrs",
          op: 19,
          type: "offset",
          value: 0
      }, {
          name: "defaultWidthX",
          op: 20,
          type: "number",
          value: 0
      }, {
          name: "nominalWidthX",
          op: 21,
          type: "number",
          value: 0
      }];
      function dt(t, e) {
          return ct(ut(t, 0, t.byteLength), ht, e)
      }
      function yt(t, e, n, r) {
          return ct(ut(t, e, n), ft, r)
      }
      function mt(t, e, n, r) {
          const o = [];
          for (let i = 0; i < n.length; i += 1) {
              const s = dt(new DataView(new Uint8Array(n[i]).buffer), r);
              s._subrs = [],
              s._subrsBias = 0;
              const a = s.private[0]
                , l = s.private[1];
              if (0 !== a && 0 !== l) {
                  const n = yt(t, l + e, a, r);
                  if (s._defaultWidthX = n.defaultWidthX,
                  s._nominalWidthX = n.nominalWidthX,
                  0 !== n.subrs) {
                      const r = at(t, l + n.subrs + e);
                      s._subrs = r.objects,
                      s._subrsBias = st(s._subrs)
                  }
                  s._privateDict = n
              }
              o.push(s)
          }
          return o
      }
      function gt(t, e, n) {
          let r, o, i, s;
          const a = new u
            , l = [];
          let p, c, h, f, d = 0, y = !1, m = !1, g = 0, v = 0;
          if (t.isCIDFont) {
              const n = t.tables.cff.topDict._fdSelect[e.index]
                , r = t.tables.cff.topDict._fdArray[n];
              p = r._subrs,
              c = r._subrsBias,
              h = r._defaultWidthX,
              f = r._nominalWidthX
          } else
              p = t.tables.cff.topDict._subrs,
              c = t.tables.cff.topDict._subrsBias,
              h = t.tables.cff.topDict._defaultWidthX,
              f = t.tables.cff.topDict._nominalWidthX;
          let b = h;
          function x(t, e) {
              m && a.closePath(),
              a.moveTo(t, e),
              m = !0
          }
          function P() {
              let t;
              t = l.length % 2 !== 0,
              t && !y && (b = l.shift() + f),
              d += l.length >> 1,
              l.length = 0,
              y = !0
          }
          return function n(u) {
              let h, S, C, w, E, T, O, I, L, A, _, R, N = 0;
              for (; N < u.length; ) {
                  let k = u[N];
                  switch (N += 1,
                  k) {
                  case 1:
                  case 3:
                      P();
                      break;
                  case 4:
                      l.length > 1 && !y && (b = l.shift() + f,
                      y = !0),
                      v += l.pop(),
                      x(g, v);
                      break;
                  case 5:
                      for (; l.length > 0; )
                          g += l.shift(),
                          v += l.shift(),
                          a.lineTo(g, v);
                      break;
                  case 6:
                      for (; l.length > 0 && (g += l.shift(),
                      a.lineTo(g, v),
                      0 !== l.length); )
                          v += l.shift(),
                          a.lineTo(g, v);
                      break;
                  case 7:
                      for (; l.length > 0 && (v += l.shift(),
                      a.lineTo(g, v),
                      0 !== l.length); )
                          g += l.shift(),
                          a.lineTo(g, v);
                      break;
                  case 8:
                      for (; l.length > 0; )
                          r = g + l.shift(),
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          g = i + l.shift(),
                          v = s + l.shift(),
                          a.curveTo(r, o, i, s, g, v);
                      break;
                  case 10:
                      E = l.pop() + c,
                      T = p[E],
                      T && n(T);
                      break;
                  case 11:
                      return;
                  case 12:
                      switch (k = u[N],
                      N += 1,
                      k) {
                      case 35:
                          r = g + l.shift(),
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          O = i + l.shift(),
                          I = s + l.shift(),
                          L = O + l.shift(),
                          A = I + l.shift(),
                          _ = L + l.shift(),
                          R = A + l.shift(),
                          g = _ + l.shift(),
                          v = R + l.shift(),
                          l.shift(),
                          a.curveTo(r, o, i, s, O, I),
                          a.curveTo(L, A, _, R, g, v);
                          break;
                      case 34:
                          r = g + l.shift(),
                          o = v,
                          i = r + l.shift(),
                          s = o + l.shift(),
                          O = i + l.shift(),
                          I = s,
                          L = O + l.shift(),
                          A = s,
                          _ = L + l.shift(),
                          R = v,
                          g = _ + l.shift(),
                          a.curveTo(r, o, i, s, O, I),
                          a.curveTo(L, A, _, R, g, v);
                          break;
                      case 36:
                          r = g + l.shift(),
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          O = i + l.shift(),
                          I = s,
                          L = O + l.shift(),
                          A = s,
                          _ = L + l.shift(),
                          R = A + l.shift(),
                          g = _ + l.shift(),
                          a.curveTo(r, o, i, s, O, I),
                          a.curveTo(L, A, _, R, g, v);
                          break;
                      case 37:
                          r = g + l.shift(),
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          O = i + l.shift(),
                          I = s + l.shift(),
                          L = O + l.shift(),
                          A = I + l.shift(),
                          _ = L + l.shift(),
                          R = A + l.shift(),
                          Math.abs(_ - g) > Math.abs(R - v) ? g = _ + l.shift() : v = R + l.shift(),
                          a.curveTo(r, o, i, s, O, I),
                          a.curveTo(L, A, _, R, g, v);
                          break;
                      default:
                          console.log("Glyph " + e.index + ": unknown operator 1200" + k),
                          l.length = 0
                      }
                      break;
                  case 14:
                      l.length > 0 && !y && (b = l.shift() + f,
                      y = !0),
                      m && (a.closePath(),
                      m = !1);
                      break;
                  case 18:
                      P();
                      break;
                  case 19:
                  case 20:
                      P(),
                      N += d + 7 >> 3;
                      break;
                  case 21:
                      l.length > 2 && !y && (b = l.shift() + f,
                      y = !0),
                      v += l.pop(),
                      g += l.pop(),
                      x(g, v);
                      break;
                  case 22:
                      l.length > 1 && !y && (b = l.shift() + f,
                      y = !0),
                      g += l.pop(),
                      x(g, v);
                      break;
                  case 23:
                      P();
                      break;
                  case 24:
                      for (; l.length > 2; )
                          r = g + l.shift(),
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          g = i + l.shift(),
                          v = s + l.shift(),
                          a.curveTo(r, o, i, s, g, v);
                      g += l.shift(),
                      v += l.shift(),
                      a.lineTo(g, v);
                      break;
                  case 25:
                      for (; l.length > 6; )
                          g += l.shift(),
                          v += l.shift(),
                          a.lineTo(g, v);
                      r = g + l.shift(),
                      o = v + l.shift(),
                      i = r + l.shift(),
                      s = o + l.shift(),
                      g = i + l.shift(),
                      v = s + l.shift(),
                      a.curveTo(r, o, i, s, g, v);
                      break;
                  case 26:
                      for (l.length % 2 && (g += l.shift()); l.length > 0; )
                          r = g,
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          g = i,
                          v = s + l.shift(),
                          a.curveTo(r, o, i, s, g, v);
                      break;
                  case 27:
                      for (l.length % 2 && (v += l.shift()); l.length > 0; )
                          r = g + l.shift(),
                          o = v,
                          i = r + l.shift(),
                          s = o + l.shift(),
                          g = i + l.shift(),
                          v = s,
                          a.curveTo(r, o, i, s, g, v);
                      break;
                  case 28:
                      h = u[N],
                      S = u[N + 1],
                      l.push((h << 24 | S << 16) >> 16),
                      N += 2;
                      break;
                  case 29:
                      E = l.pop() + t.gsubrsBias,
                      T = t.gsubrs[E],
                      T && n(T);
                      break;
                  case 30:
                      for (; l.length > 0 && (r = g,
                      o = v + l.shift(),
                      i = r + l.shift(),
                      s = o + l.shift(),
                      g = i + l.shift(),
                      v = s + (1 === l.length ? l.shift() : 0),
                      a.curveTo(r, o, i, s, g, v),
                      0 !== l.length); )
                          r = g + l.shift(),
                          o = v,
                          i = r + l.shift(),
                          s = o + l.shift(),
                          v = s + l.shift(),
                          g = i + (1 === l.length ? l.shift() : 0),
                          a.curveTo(r, o, i, s, g, v);
                      break;
                  case 31:
                      for (; l.length > 0 && (r = g + l.shift(),
                      o = v,
                      i = r + l.shift(),
                      s = o + l.shift(),
                      v = s + l.shift(),
                      g = i + (1 === l.length ? l.shift() : 0),
                      a.curveTo(r, o, i, s, g, v),
                      0 !== l.length); )
                          r = g,
                          o = v + l.shift(),
                          i = r + l.shift(),
                          s = o + l.shift(),
                          g = i + l.shift(),
                          v = s + (1 === l.length ? l.shift() : 0),
                          a.curveTo(r, o, i, s, g, v);
                      break;
                  default:
                      k < 32 ? console.log("Glyph " + e.index + ": unknown operator " + k) : k < 247 ? l.push(k - 139) : k < 251 ? (h = u[N],
                      N += 1,
                      l.push(256 * (k - 247) + h + 108)) : k < 255 ? (h = u[N],
                      N += 1,
                      l.push(256 * -(k - 251) - h - 108)) : (h = u[N],
                      S = u[N + 1],
                      C = u[N + 2],
                      w = u[N + 3],
                      N += 4,
                      l.push((h << 24 | S << 16 | C << 8 | w) / 65536))
                  }
              }
          }(n),
          e.advanceWidth = b,
          a
      }
      function vt(t, e) {
          let n, r = W.indexOf(t);
          return r >= 0 && (n = r),
          r = e.indexOf(t),
          r >= 0 ? n = r + W.length : (n = W.length + e.length,
          e.push(t)),
          n
      }
      function bt(t, e, n) {
          const r = {};
          for (let o = 0; o < t.length; o += 1) {
              const i = t[o];
              let s = e[i.name];
              void 0 === s || it(s, i.value) || ("SID" === i.type && (s = vt(s, n)),
              r[i.op] = {
                  name: i.name,
                  type: i.type,
                  value: s
              })
          }
          return r
      }
      function xt(t, e) {
          const n = new k.Record("Top DICT",[{
              name: "dict",
              type: "DICT",
              value: {}
          }]);
          return n.dict = bt(ht, t, e),
          n
      }
      function Pt(t) {
          const e = new k.Record("Top DICT INDEX",[{
              name: "topDicts",
              type: "INDEX",
              value: []
          }]);
          return e.topDicts = [{
              name: "topDict_0",
              type: "TABLE",
              value: t
          }],
          e
      }
      function St(t) {
          const e = []
            , n = t.path;
          e.push({
              name: "width",
              type: "NUMBER",
              value: t.advanceWidth
          });
          let r = 0
            , o = 0;
          for (let i = 0; i < n.commands.length; i += 1) {
              let t, s, a = n.commands[i];
              if ("Q" === a.type) {
                  const t = 1 / 3
                    , e = 2 / 3;
                  a = {
                      type: "C",
                      x: a.x,
                      y: a.y,
                      x1: t * r + e * a.x1,
                      y1: t * o + e * a.y1,
                      x2: t * a.x + e * a.x1,
                      y2: t * a.y + e * a.y1
                  }
              }
              if ("M" === a.type)
                  t = Math.round(a.x - r),
                  s = Math.round(a.y - o),
                  e.push({
                      name: "dx",
                      type: "NUMBER",
                      value: t
                  }),
                  e.push({
                      name: "dy",
                      type: "NUMBER",
                      value: s
                  }),
                  e.push({
                      name: "rmoveto",
                      type: "OP",
                      value: 21
                  }),
                  r = Math.round(a.x),
                  o = Math.round(a.y);
              else if ("L" === a.type)
                  t = Math.round(a.x - r),
                  s = Math.round(a.y - o),
                  e.push({
                      name: "dx",
                      type: "NUMBER",
                      value: t
                  }),
                  e.push({
                      name: "dy",
                      type: "NUMBER",
                      value: s
                  }),
                  e.push({
                      name: "rlineto",
                      type: "OP",
                      value: 5
                  }),
                  r = Math.round(a.x),
                  o = Math.round(a.y);
              else if ("C" === a.type) {
                  const n = Math.round(a.x1 - r)
                    , i = Math.round(a.y1 - o)
                    , l = Math.round(a.x2 - a.x1)
                    , u = Math.round(a.y2 - a.y1);
                  t = Math.round(a.x - a.x2),
                  s = Math.round(a.y - a.y2),
                  e.push({
                      name: "dx1",
                      type: "NUMBER",
                      value: n
                  }),
                  e.push({
                      name: "dy1",
                      type: "NUMBER",
                      value: i
                  }),
                  e.push({
                      name: "dx2",
                      type: "NUMBER",
                      value: l
                  }),
                  e.push({
                      name: "dy2",
                      type: "NUMBER",
                      value: u
                  }),
                  e.push({
                      name: "dx",
                      type: "NUMBER",
                      value: t
                  }),
                  e.push({
                      name: "dy",
                      type: "NUMBER",
                      value: s
                  }),
                  e.push({
                      name: "rrcurveto",
                      type: "OP",
                      value: 8
                  }),
                  r = Math.round(a.x),
                  o = Math.round(a.y)
              }
          }
          return e.push({
              name: "endchar",
              type: "OP",
              value: 14
          }),
          e
      }
      var Ct = {
          parse: function(t, e, n) {
              n.tables.cff = {};
              const r = at(t, function(t, e) {
                  const n = {};
                  return n.formatMajor = G.getCard8(t, e),
                  n.formatMinor = G.getCard8(t, e + 1),
                  n.size = G.getCard8(t, e + 2),
                  n.offsetSize = G.getCard8(t, e + 3),
                  n.startOffset = e,
                  n.endOffset = e + 4,
                  n
              }(t, e).endOffset, G.bytesToString)
                , o = at(t, r.endOffset)
                , i = at(t, o.endOffset, G.bytesToString)
                , s = at(t, i.endOffset);
              n.gsubrs = s.objects,
              n.gsubrsBias = st(n.gsubrs);
              const a = mt(t, e, o.objects, i.objects);
              if (1 !== a.length)
                  throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + a.length);
              const l = a[0];
              if (n.tables.cff.topDict = l,
              l._privateDict && (n.defaultWidthX = l._privateDict.defaultWidthX,
              n.nominalWidthX = l._privateDict.nominalWidthX),
              void 0 !== l.ros[0] && void 0 !== l.ros[1] && (n.isCIDFont = !0),
              n.isCIDFont) {
                  let r = l.fdArray
                    , o = l.fdSelect;
                  if (0 === r || 0 === o)
                      throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
                  r += e;
                  const s = mt(t, e, at(t, r).objects, i.objects);
                  l._fdArray = s,
                  o += e,
                  l._fdSelect = function(t, e, n, r) {
                      const o = [];
                      let i;
                      const s = new G.Parser(t,e)
                        , a = s.parseCard8();
                      if (0 === a)
                          for (let l = 0; l < n; l++) {
                              if (i = s.parseCard8(),
                              i >= r)
                                  throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + r + ")");
                              o.push(i)
                          }
                      else {
                          if (3 !== a)
                              throw new Error("CFF Table CID Font FDSelect table has unsupported format " + a);
                          {
                              const t = s.parseCard16();
                              let e, a = s.parseCard16();
                              if (0 !== a)
                                  throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + a);
                              for (let l = 0; l < t; l++) {
                                  if (i = s.parseCard8(),
                                  e = s.parseCard16(),
                                  i >= r)
                                      throw new Error("CFF table CID Font FDSelect has bad FD index value " + i + " (FD count " + r + ")");
                                  if (e > n)
                                      throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + e);
                                  for (; a < e; a++)
                                      o.push(i);
                                  a = e
                              }
                              if (e !== n)
                                  throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + e)
                          }
                      }
                      return o
                  }(t, o, n.numGlyphs, s.length)
              }
              const u = e + l.private[1]
                , p = yt(t, u, l.private[0], i.objects);
              if (n.defaultWidthX = p.defaultWidthX,
              n.nominalWidthX = p.nominalWidthX,
              0 !== p.subrs) {
                  const e = at(t, u + p.subrs);
                  n.subrs = e.objects,
                  n.subrsBias = st(n.subrs)
              } else
                  n.subrs = [],
                  n.subrsBias = 0;
              const c = at(t, e + l.charStrings);
              n.nGlyphs = c.objects.length;
              const h = function(t, e, n, r) {
                  let o, i;
                  const s = new G.Parser(t,e);
                  n -= 1;
                  const a = [".notdef"]
                    , l = s.parseCard8();
                  if (0 === l)
                      for (let u = 0; u < n; u += 1)
                          o = s.parseSID(),
                          a.push(pt(r, o));
                  else if (1 === l)
                      for (; a.length <= n; ) {
                          o = s.parseSID(),
                          i = s.parseCard8();
                          for (let t = 0; t <= i; t += 1)
                              a.push(pt(r, o)),
                              o += 1
                      }
                  else {
                      if (2 !== l)
                          throw new Error("Unknown charset format " + l);
                      for (; a.length <= n; ) {
                          o = s.parseSID(),
                          i = s.parseCard16();
                          for (let t = 0; t <= i; t += 1)
                              a.push(pt(r, o)),
                              o += 1
                      }
                  }
                  return a
              }(t, e + l.charset, n.nGlyphs, i.objects);
              0 === l.encoding ? n.cffEncoding = new K(z,h) : 1 === l.encoding ? n.cffEncoding = new K(j,h) : n.cffEncoding = function(t, e, n) {
                  let r;
                  const o = {}
                    , i = new G.Parser(t,e)
                    , s = i.parseCard8();
                  if (0 === s) {
                      const t = i.parseCard8();
                      for (let e = 0; e < t; e += 1)
                          r = i.parseCard8(),
                          o[r] = e
                  } else {
                      if (1 !== s)
                          throw new Error("Unknown encoding format " + s);
                      {
                          const t = i.parseCard8();
                          r = 1;
                          for (let e = 0; e < t; e += 1) {
                              const t = i.parseCard8()
                                , e = i.parseCard8();
                              for (let n = t; n <= t + e; n += 1)
                                  o[n] = r,
                                  r += 1
                          }
                      }
                  }
                  return new K(o,n)
              }(t, e + l.encoding, h),
              n.encoding = n.encoding || n.cffEncoding,
              n.glyphs = new ot.GlyphSet(n);
              for (let f = 0; f < n.nGlyphs; f += 1) {
                  const t = c.objects[f];
                  n.glyphs.push(f, ot.cffGlyphLoader(n, f, gt, t))
              }
          },
          make: function(t, e) {
              const n = new k.Table("CFF ",[{
                  name: "header",
                  type: "RECORD"
              }, {
                  name: "nameIndex",
                  type: "RECORD"
              }, {
                  name: "topDictIndex",
                  type: "RECORD"
              }, {
                  name: "stringIndex",
                  type: "RECORD"
              }, {
                  name: "globalSubrIndex",
                  type: "RECORD"
              }, {
                  name: "charsets",
                  type: "RECORD"
              }, {
                  name: "charStringsIndex",
                  type: "RECORD"
              }, {
                  name: "privateDict",
                  type: "RECORD"
              }])
                , r = 1 / e.unitsPerEm
                , o = {
                  version: e.version,
                  fullName: e.fullName,
                  familyName: e.familyName,
                  weight: e.weightName,
                  fontBBox: e.fontBBox || [0, 0, 0, 0],
                  fontMatrix: [r, 0, 0, r, 0, 0],
                  charset: 999,
                  encoding: 0,
                  charStrings: 999,
                  private: [0, 999]
              }
                , i = [];
              let s;
              for (let p = 1; p < t.length; p += 1)
                  s = t.get(p),
                  i.push(s.name);
              const a = [];
              n.header = new k.Record("Header",[{
                  name: "major",
                  type: "Card8",
                  value: 1
              }, {
                  name: "minor",
                  type: "Card8",
                  value: 0
              }, {
                  name: "hdrSize",
                  type: "Card8",
                  value: 4
              }, {
                  name: "major",
                  type: "Card8",
                  value: 1
              }]),
              n.nameIndex = function(t) {
                  const e = new k.Record("Name INDEX",[{
                      name: "names",
                      type: "INDEX",
                      value: []
                  }]);
                  e.names = [];
                  for (let n = 0; n < t.length; n += 1)
                      e.names.push({
                          name: "name_" + n,
                          type: "NAME",
                          value: t[n]
                      });
                  return e
              }([e.postScriptName]);
              let l = xt(o, a);
              n.topDictIndex = Pt(l),
              n.globalSubrIndex = new k.Record("Global Subr INDEX",[{
                  name: "subrs",
                  type: "INDEX",
                  value: []
              }]),
              n.charsets = function(t, e) {
                  const n = new k.Record("Charsets",[{
                      name: "format",
                      type: "Card8",
                      value: 0
                  }]);
                  for (let r = 0; r < t.length; r += 1) {
                      const o = vt(t[r], e);
                      n.fields.push({
                          name: "glyph_" + r,
                          type: "SID",
                          value: o
                      })
                  }
                  return n
              }(i, a),
              n.charStringsIndex = function(t) {
                  const e = new k.Record("CharStrings INDEX",[{
                      name: "charStrings",
                      type: "INDEX",
                      value: []
                  }]);
                  for (let n = 0; n < t.length; n += 1) {
                      const r = t.get(n)
                        , o = St(r);
                      e.charStrings.push({
                          name: r.name,
                          type: "CHARSTRING",
                          value: o
                      })
                  }
                  return e
              }(t),
              n.privateDict = function(t, e) {
                  const n = new k.Record("Private DICT",[{
                      name: "dict",
                      type: "DICT",
                      value: {}
                  }]);
                  return n.dict = bt(ft, t, e),
                  n
              }({}, a),
              n.stringIndex = function(t) {
                  const e = new k.Record("String INDEX",[{
                      name: "strings",
                      type: "INDEX",
                      value: []
                  }]);
                  e.strings = [];
                  for (let n = 0; n < t.length; n += 1)
                      e.strings.push({
                          name: "string_" + n,
                          type: "STRING",
                          value: t[n]
                      });
                  return e
              }(a);
              const u = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf();
              return o.charset = u,
              o.encoding = 0,
              o.charStrings = o.charset + n.charsets.sizeOf(),
              o.private[1] = o.charStrings + n.charStringsIndex.sizeOf(),
              l = xt(o, a),
              n.topDictIndex = Pt(l),
              n
          }
      };
      var wt = {
          parse: function(t, e) {
              const n = {}
                , r = new G.Parser(t,e);
              return n.version = r.parseVersion(),
              n.fontRevision = Math.round(1e3 * r.parseFixed()) / 1e3,
              n.checkSumAdjustment = r.parseULong(),
              n.magicNumber = r.parseULong(),
              h.argument(1594834165 === n.magicNumber, "Font header has wrong magic number."),
              n.flags = r.parseUShort(),
              n.unitsPerEm = r.parseUShort(),
              n.created = r.parseLongDateTime(),
              n.modified = r.parseLongDateTime(),
              n.xMin = r.parseShort(),
              n.yMin = r.parseShort(),
              n.xMax = r.parseShort(),
              n.yMax = r.parseShort(),
              n.macStyle = r.parseUShort(),
              n.lowestRecPPEM = r.parseUShort(),
              n.fontDirectionHint = r.parseShort(),
              n.indexToLocFormat = r.parseShort(),
              n.glyphDataFormat = r.parseShort(),
              n
          },
          make: function(t) {
              const e = Math.round((new Date).getTime() / 1e3) + 2082844800;
              let n = e;
              return t.createdTimestamp && (n = t.createdTimestamp + 2082844800),
              new k.Table("head",[{
                  name: "version",
                  type: "FIXED",
                  value: 65536
              }, {
                  name: "fontRevision",
                  type: "FIXED",
                  value: 65536
              }, {
                  name: "checkSumAdjustment",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "magicNumber",
                  type: "ULONG",
                  value: 1594834165
              }, {
                  name: "flags",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "unitsPerEm",
                  type: "USHORT",
                  value: 1e3
              }, {
                  name: "created",
                  type: "LONGDATETIME",
                  value: n
              }, {
                  name: "modified",
                  type: "LONGDATETIME",
                  value: e
              }, {
                  name: "xMin",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "yMin",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "xMax",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "yMax",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "macStyle",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "lowestRecPPEM",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "fontDirectionHint",
                  type: "SHORT",
                  value: 2
              }, {
                  name: "indexToLocFormat",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "glyphDataFormat",
                  type: "SHORT",
                  value: 0
              }],t)
          }
      };
      var Et = {
          parse: function(t, e) {
              const n = {}
                , r = new G.Parser(t,e);
              return n.version = r.parseVersion(),
              n.ascender = r.parseShort(),
              n.descender = r.parseShort(),
              n.lineGap = r.parseShort(),
              n.advanceWidthMax = r.parseUShort(),
              n.minLeftSideBearing = r.parseShort(),
              n.minRightSideBearing = r.parseShort(),
              n.xMaxExtent = r.parseShort(),
              n.caretSlopeRise = r.parseShort(),
              n.caretSlopeRun = r.parseShort(),
              n.caretOffset = r.parseShort(),
              r.relativeOffset += 8,
              n.metricDataFormat = r.parseShort(),
              n.numberOfHMetrics = r.parseUShort(),
              n
          },
          make: function(t) {
              return new k.Table("hhea",[{
                  name: "version",
                  type: "FIXED",
                  value: 65536
              }, {
                  name: "ascender",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "descender",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "lineGap",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "advanceWidthMax",
                  type: "UFWORD",
                  value: 0
              }, {
                  name: "minLeftSideBearing",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "minRightSideBearing",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "xMaxExtent",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "caretSlopeRise",
                  type: "SHORT",
                  value: 1
              }, {
                  name: "caretSlopeRun",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "caretOffset",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "reserved1",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "reserved2",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "reserved3",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "reserved4",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "metricDataFormat",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "numberOfHMetrics",
                  type: "USHORT",
                  value: 0
              }],t)
          }
      };
      var Tt = {
          parse: function(t, e, n, r, o) {
              let i, s;
              const a = new G.Parser(t,e);
              for (let l = 0; l < r; l += 1) {
                  l < n && (i = a.parseUShort(),
                  s = a.parseShort());
                  const t = o.get(l);
                  t.advanceWidth = i,
                  t.leftSideBearing = s
              }
          },
          make: function(t) {
              const e = new k.Table("hmtx",[]);
              for (let n = 0; n < t.length; n += 1) {
                  const r = t.get(n)
                    , o = r.advanceWidth || 0
                    , i = r.leftSideBearing || 0;
                  e.fields.push({
                      name: "advanceWidth_" + n,
                      type: "USHORT",
                      value: o
                  }),
                  e.fields.push({
                      name: "leftSideBearing_" + n,
                      type: "SHORT",
                      value: i
                  })
              }
              return e
          }
      };
      var Ot = {
          make: function(t) {
              const e = new k.Table("ltag",[{
                  name: "version",
                  type: "ULONG",
                  value: 1
              }, {
                  name: "flags",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "numTags",
                  type: "ULONG",
                  value: t.length
              }]);
              let n = "";
              const r = 12 + 4 * t.length;
              for (let o = 0; o < t.length; ++o) {
                  let i = n.indexOf(t[o]);
                  i < 0 && (i = n.length,
                  n += t[o]),
                  e.fields.push({
                      name: "offset " + o,
                      type: "USHORT",
                      value: r + i
                  }),
                  e.fields.push({
                      name: "length " + o,
                      type: "USHORT",
                      value: t[o].length
                  })
              }
              return e.fields.push({
                  name: "stringPool",
                  type: "CHARARRAY",
                  value: n
              }),
              e
          },
          parse: function(t, e) {
              const n = new G.Parser(t,e)
                , r = n.parseULong();
              h.argument(1 === r, "Unsupported ltag table version."),
              n.skip("uLong", 1);
              const o = n.parseULong()
                , i = [];
              for (let s = 0; s < o; s++) {
                  let r = "";
                  const o = e + n.parseUShort()
                    , s = n.parseUShort();
                  for (let e = o; e < o + s; ++e)
                      r += String.fromCharCode(t.getInt8(e));
                  i.push(r)
              }
              return i
          }
      };
      var It = {
          parse: function(t, e) {
              const n = {}
                , r = new G.Parser(t,e);
              return n.version = r.parseVersion(),
              n.numGlyphs = r.parseUShort(),
              1 === n.version && (n.maxPoints = r.parseUShort(),
              n.maxContours = r.parseUShort(),
              n.maxCompositePoints = r.parseUShort(),
              n.maxCompositeContours = r.parseUShort(),
              n.maxZones = r.parseUShort(),
              n.maxTwilightPoints = r.parseUShort(),
              n.maxStorage = r.parseUShort(),
              n.maxFunctionDefs = r.parseUShort(),
              n.maxInstructionDefs = r.parseUShort(),
              n.maxStackElements = r.parseUShort(),
              n.maxSizeOfInstructions = r.parseUShort(),
              n.maxComponentElements = r.parseUShort(),
              n.maxComponentDepth = r.parseUShort()),
              n
          },
          make: function(t) {
              return new k.Table("maxp",[{
                  name: "version",
                  type: "FIXED",
                  value: 20480
              }, {
                  name: "numGlyphs",
                  type: "USHORT",
                  value: t
              }])
          }
      };
      const Lt = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"]
        , At = {
          0: "en",
          1: "fr",
          2: "de",
          3: "it",
          4: "nl",
          5: "sv",
          6: "es",
          7: "da",
          8: "pt",
          9: "no",
          10: "he",
          11: "ja",
          12: "ar",
          13: "fi",
          14: "el",
          15: "is",
          16: "mt",
          17: "tr",
          18: "hr",
          19: "zh-Hant",
          20: "ur",
          21: "hi",
          22: "th",
          23: "ko",
          24: "lt",
          25: "pl",
          26: "hu",
          27: "es",
          28: "lv",
          29: "se",
          30: "fo",
          31: "fa",
          32: "ru",
          33: "zh",
          34: "nl-BE",
          35: "ga",
          36: "sq",
          37: "ro",
          38: "cz",
          39: "sk",
          40: "si",
          41: "yi",
          42: "sr",
          43: "mk",
          44: "bg",
          45: "uk",
          46: "be",
          47: "uz",
          48: "kk",
          49: "az-Cyrl",
          50: "az-Arab",
          51: "hy",
          52: "ka",
          53: "mo",
          54: "ky",
          55: "tg",
          56: "tk",
          57: "mn-CN",
          58: "mn",
          59: "ps",
          60: "ks",
          61: "ku",
          62: "sd",
          63: "bo",
          64: "ne",
          65: "sa",
          66: "mr",
          67: "bn",
          68: "as",
          69: "gu",
          70: "pa",
          71: "or",
          72: "ml",
          73: "kn",
          74: "ta",
          75: "te",
          76: "si",
          77: "my",
          78: "km",
          79: "lo",
          80: "vi",
          81: "id",
          82: "tl",
          83: "ms",
          84: "ms-Arab",
          85: "am",
          86: "ti",
          87: "om",
          88: "so",
          89: "sw",
          90: "rw",
          91: "rn",
          92: "ny",
          93: "mg",
          94: "eo",
          128: "cy",
          129: "eu",
          130: "ca",
          131: "la",
          132: "qu",
          133: "gn",
          134: "ay",
          135: "tt",
          136: "ug",
          137: "dz",
          138: "jv",
          139: "su",
          140: "gl",
          141: "af",
          142: "br",
          143: "iu",
          144: "gd",
          145: "gv",
          146: "ga",
          147: "to",
          148: "el-polyton",
          149: "kl",
          150: "az",
          151: "nn"
      }
        , _t = {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 5,
          11: 1,
          12: 4,
          13: 0,
          14: 6,
          15: 0,
          16: 0,
          17: 0,
          18: 0,
          19: 2,
          20: 4,
          21: 9,
          22: 21,
          23: 3,
          24: 29,
          25: 29,
          26: 29,
          27: 29,
          28: 29,
          29: 0,
          30: 0,
          31: 4,
          32: 7,
          33: 25,
          34: 0,
          35: 0,
          36: 0,
          37: 0,
          38: 29,
          39: 29,
          40: 0,
          41: 5,
          42: 7,
          43: 7,
          44: 7,
          45: 7,
          46: 7,
          47: 7,
          48: 7,
          49: 7,
          50: 4,
          51: 24,
          52: 23,
          53: 7,
          54: 7,
          55: 7,
          56: 7,
          57: 27,
          58: 7,
          59: 4,
          60: 4,
          61: 4,
          62: 4,
          63: 26,
          64: 9,
          65: 9,
          66: 9,
          67: 13,
          68: 13,
          69: 11,
          70: 10,
          71: 12,
          72: 17,
          73: 16,
          74: 14,
          75: 15,
          76: 18,
          77: 19,
          78: 20,
          79: 22,
          80: 30,
          81: 0,
          82: 0,
          83: 0,
          84: 4,
          85: 28,
          86: 28,
          87: 28,
          88: 0,
          89: 0,
          90: 0,
          91: 0,
          92: 0,
          93: 0,
          94: 0,
          128: 0,
          129: 0,
          130: 0,
          131: 0,
          132: 0,
          133: 0,
          134: 0,
          135: 7,
          136: 4,
          137: 26,
          138: 0,
          139: 0,
          140: 0,
          141: 0,
          142: 0,
          143: 28,
          144: 0,
          145: 0,
          146: 0,
          147: 0,
          148: 6,
          149: 0,
          150: 0,
          151: 0
      }
        , Rt = {
          1078: "af",
          1052: "sq",
          1156: "gsw",
          1118: "am",
          5121: "ar-DZ",
          15361: "ar-BH",
          3073: "ar",
          2049: "ar-IQ",
          11265: "ar-JO",
          13313: "ar-KW",
          12289: "ar-LB",
          4097: "ar-LY",
          6145: "ary",
          8193: "ar-OM",
          16385: "ar-QA",
          1025: "ar-SA",
          10241: "ar-SY",
          7169: "aeb",
          14337: "ar-AE",
          9217: "ar-YE",
          1067: "hy",
          1101: "as",
          2092: "az-Cyrl",
          1068: "az",
          1133: "ba",
          1069: "eu",
          1059: "be",
          2117: "bn",
          1093: "bn-IN",
          8218: "bs-Cyrl",
          5146: "bs",
          1150: "br",
          1026: "bg",
          1027: "ca",
          3076: "zh-HK",
          5124: "zh-MO",
          2052: "zh",
          4100: "zh-SG",
          1028: "zh-TW",
          1155: "co",
          1050: "hr",
          4122: "hr-BA",
          1029: "cs",
          1030: "da",
          1164: "prs",
          1125: "dv",
          2067: "nl-BE",
          1043: "nl",
          3081: "en-AU",
          10249: "en-BZ",
          4105: "en-CA",
          9225: "en-029",
          16393: "en-IN",
          6153: "en-IE",
          8201: "en-JM",
          17417: "en-MY",
          5129: "en-NZ",
          13321: "en-PH",
          18441: "en-SG",
          7177: "en-ZA",
          11273: "en-TT",
          2057: "en-GB",
          1033: "en",
          12297: "en-ZW",
          1061: "et",
          1080: "fo",
          1124: "fil",
          1035: "fi",
          2060: "fr-BE",
          3084: "fr-CA",
          1036: "fr",
          5132: "fr-LU",
          6156: "fr-MC",
          4108: "fr-CH",
          1122: "fy",
          1110: "gl",
          1079: "ka",
          3079: "de-AT",
          1031: "de",
          5127: "de-LI",
          4103: "de-LU",
          2055: "de-CH",
          1032: "el",
          1135: "kl",
          1095: "gu",
          1128: "ha",
          1037: "he",
          1081: "hi",
          1038: "hu",
          1039: "is",
          1136: "ig",
          1057: "id",
          1117: "iu",
          2141: "iu-Latn",
          2108: "ga",
          1076: "xh",
          1077: "zu",
          1040: "it",
          2064: "it-CH",
          1041: "ja",
          1099: "kn",
          1087: "kk",
          1107: "km",
          1158: "quc",
          1159: "rw",
          1089: "sw",
          1111: "kok",
          1042: "ko",
          1088: "ky",
          1108: "lo",
          1062: "lv",
          1063: "lt",
          2094: "dsb",
          1134: "lb",
          1071: "mk",
          2110: "ms-BN",
          1086: "ms",
          1100: "ml",
          1082: "mt",
          1153: "mi",
          1146: "arn",
          1102: "mr",
          1148: "moh",
          1104: "mn",
          2128: "mn-CN",
          1121: "ne",
          1044: "nb",
          2068: "nn",
          1154: "oc",
          1096: "or",
          1123: "ps",
          1045: "pl",
          1046: "pt",
          2070: "pt-PT",
          1094: "pa",
          1131: "qu-BO",
          2155: "qu-EC",
          3179: "qu",
          1048: "ro",
          1047: "rm",
          1049: "ru",
          9275: "smn",
          4155: "smj-NO",
          5179: "smj",
          3131: "se-FI",
          1083: "se",
          2107: "se-SE",
          8251: "sms",
          6203: "sma-NO",
          7227: "sms",
          1103: "sa",
          7194: "sr-Cyrl-BA",
          3098: "sr",
          6170: "sr-Latn-BA",
          2074: "sr-Latn",
          1132: "nso",
          1074: "tn",
          1115: "si",
          1051: "sk",
          1060: "sl",
          11274: "es-AR",
          16394: "es-BO",
          13322: "es-CL",
          9226: "es-CO",
          5130: "es-CR",
          7178: "es-DO",
          12298: "es-EC",
          17418: "es-SV",
          4106: "es-GT",
          18442: "es-HN",
          2058: "es-MX",
          19466: "es-NI",
          6154: "es-PA",
          15370: "es-PY",
          10250: "es-PE",
          20490: "es-PR",
          3082: "es",
          1034: "es",
          21514: "es-US",
          14346: "es-UY",
          8202: "es-VE",
          2077: "sv-FI",
          1053: "sv",
          1114: "syr",
          1064: "tg",
          2143: "tzm",
          1097: "ta",
          1092: "tt",
          1098: "te",
          1054: "th",
          1105: "bo",
          1055: "tr",
          1090: "tk",
          1152: "ug",
          1058: "uk",
          1070: "hsb",
          1056: "ur",
          2115: "uz-Cyrl",
          1091: "uz",
          1066: "vi",
          1106: "cy",
          1160: "wo",
          1157: "sah",
          1144: "ii",
          1130: "yo"
      };
      function Nt(t, e, n) {
          switch (t) {
          case 0:
              if (65535 === e)
                  return "und";
              if (n)
                  return n[e];
              break;
          case 1:
              return At[e];
          case 3:
              return Rt[e]
          }
      }
      const kt = "utf-16"
        , Bt = {
          0: "macintosh",
          1: "x-mac-japanese",
          2: "x-mac-chinesetrad",
          3: "x-mac-korean",
          6: "x-mac-greek",
          7: "x-mac-cyrillic",
          9: "x-mac-devanagai",
          10: "x-mac-gurmukhi",
          11: "x-mac-gujarati",
          12: "x-mac-oriya",
          13: "x-mac-bengali",
          14: "x-mac-tamil",
          15: "x-mac-telugu",
          16: "x-mac-kannada",
          17: "x-mac-malayalam",
          18: "x-mac-sinhalese",
          19: "x-mac-burmese",
          20: "x-mac-khmer",
          21: "x-mac-thai",
          22: "x-mac-lao",
          23: "x-mac-georgian",
          24: "x-mac-armenian",
          25: "x-mac-chinesesimp",
          26: "x-mac-tibetan",
          27: "x-mac-mongolian",
          28: "x-mac-ethiopic",
          29: "x-mac-ce",
          30: "x-mac-vietnamese",
          31: "x-mac-extarabic"
      }
        , Dt = {
          15: "x-mac-icelandic",
          17: "x-mac-turkish",
          18: "x-mac-croatian",
          24: "x-mac-ce",
          25: "x-mac-ce",
          26: "x-mac-ce",
          27: "x-mac-ce",
          28: "x-mac-ce",
          30: "x-mac-icelandic",
          37: "x-mac-romanian",
          38: "x-mac-ce",
          39: "x-mac-ce",
          40: "x-mac-ce",
          143: "x-mac-inuit",
          146: "x-mac-gaelic"
      };
      function Ut(t, e, n) {
          switch (t) {
          case 0:
              return kt;
          case 1:
              return Dt[n] || Bt[e];
          case 3:
              if (1 === e || 10 === e)
                  return kt
          }
      }
      function Mt(t) {
          const e = {};
          for (let n in t)
              e[t[n]] = parseInt(n);
          return e
      }
      function Xt(t, e, n, r, o, i) {
          return new k.Record("NameRecord",[{
              name: "platformID",
              type: "USHORT",
              value: t
          }, {
              name: "encodingID",
              type: "USHORT",
              value: e
          }, {
              name: "languageID",
              type: "USHORT",
              value: n
          }, {
              name: "nameID",
              type: "USHORT",
              value: r
          }, {
              name: "length",
              type: "USHORT",
              value: o
          }, {
              name: "offset",
              type: "USHORT",
              value: i
          }])
      }
      function Ft(t, e) {
          let n = function(t, e) {
              const n = t.length
                , r = e.length - n + 1;
              t: for (let o = 0; o < r; o++)
                  for (; o < r; o++) {
                      for (let r = 0; r < n; r++)
                          if (e[o + r] !== t[r])
                              continue t;
                      return o
                  }
              return -1
          }(t, e);
          if (n < 0) {
              n = e.length;
              let r = 0;
              const o = t.length;
              for (; r < o; ++r)
                  e.push(t[r])
          }
          return n
      }
      var Yt = {
          parse: function(t, e, n) {
              const r = {}
                , o = new G.Parser(t,e)
                , i = o.parseUShort()
                , s = o.parseUShort()
                , a = o.offset + o.parseUShort();
              for (let u = 0; u < s; u++) {
                  const e = o.parseUShort()
                    , i = o.parseUShort()
                    , s = o.parseUShort()
                    , l = o.parseUShort()
                    , u = Lt[l] || l
                    , p = o.parseUShort()
                    , c = o.parseUShort()
                    , h = Nt(e, s, n)
                    , f = Ut(e, i, s);
                  if (void 0 !== f && void 0 !== h) {
                      let e;
                      if (e = f === kt ? d.UTF16(t, a + c, p) : d.MACSTRING(t, a + c, p, f),
                      e) {
                          let t = r[u];
                          void 0 === t && (t = r[u] = {}),
                          t[h] = e
                      }
                  }
              }
              let l = 0;
              return 1 === i && (l = o.parseUShort()),
              r
          },
          make: function(t, e) {
              let n;
              const r = []
                , o = {}
                , i = Mt(Lt);
              for (let c in t) {
                  let e = i[c];
                  if (void 0 === e && (e = c),
                  n = parseInt(e),
                  isNaN(n))
                      throw new Error('Name table entry "' + c + '" does not exist, see nameTableNames for complete list.');
                  o[n] = t[c],
                  r.push(n)
              }
              const s = Mt(At)
                , a = Mt(Rt)
                , l = []
                , u = [];
              for (let c = 0; c < r.length; c++) {
                  n = r[c];
                  const t = o[n];
                  for (let r in t) {
                      const o = t[r];
                      let i = 1
                        , p = s[r]
                        , c = _t[p];
                      const h = Ut(i, c, p);
                      let f = y.MACSTRING(o, h);
                      void 0 === f && (i = 0,
                      p = e.indexOf(r),
                      p < 0 && (p = e.length,
                      e.push(r)),
                      c = 4,
                      f = y.UTF16(o));
                      const d = Ft(f, u);
                      l.push(Xt(i, c, p, n, f.length, d));
                      const m = a[r];
                      if (void 0 !== m) {
                          const t = y.UTF16(o)
                            , e = Ft(t, u);
                          l.push(Xt(3, 1, m, n, t.length, e))
                      }
                  }
              }
              l.sort((function(t, e) {
                  return t.platformID - e.platformID || t.encodingID - e.encodingID || t.languageID - e.languageID || t.nameID - e.nameID
              }
              ));
              const p = new k.Table("name",[{
                  name: "format",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "count",
                  type: "USHORT",
                  value: l.length
              }, {
                  name: "stringOffset",
                  type: "USHORT",
                  value: 6 + 12 * l.length
              }]);
              for (let c = 0; c < l.length; c++)
                  p.fields.push({
                      name: "record_" + c,
                      type: "RECORD",
                      value: l[c]
                  });
              return p.fields.push({
                  name: "strings",
                  type: "LITERAL",
                  value: u
              }),
              p
          }
      };
      const Gt = [{
          begin: 0,
          end: 127
      }, {
          begin: 128,
          end: 255
      }, {
          begin: 256,
          end: 383
      }, {
          begin: 384,
          end: 591
      }, {
          begin: 592,
          end: 687
      }, {
          begin: 688,
          end: 767
      }, {
          begin: 768,
          end: 879
      }, {
          begin: 880,
          end: 1023
      }, {
          begin: 11392,
          end: 11519
      }, {
          begin: 1024,
          end: 1279
      }, {
          begin: 1328,
          end: 1423
      }, {
          begin: 1424,
          end: 1535
      }, {
          begin: 42240,
          end: 42559
      }, {
          begin: 1536,
          end: 1791
      }, {
          begin: 1984,
          end: 2047
      }, {
          begin: 2304,
          end: 2431
      }, {
          begin: 2432,
          end: 2559
      }, {
          begin: 2560,
          end: 2687
      }, {
          begin: 2688,
          end: 2815
      }, {
          begin: 2816,
          end: 2943
      }, {
          begin: 2944,
          end: 3071
      }, {
          begin: 3072,
          end: 3199
      }, {
          begin: 3200,
          end: 3327
      }, {
          begin: 3328,
          end: 3455
      }, {
          begin: 3584,
          end: 3711
      }, {
          begin: 3712,
          end: 3839
      }, {
          begin: 4256,
          end: 4351
      }, {
          begin: 6912,
          end: 7039
      }, {
          begin: 4352,
          end: 4607
      }, {
          begin: 7680,
          end: 7935
      }, {
          begin: 7936,
          end: 8191
      }, {
          begin: 8192,
          end: 8303
      }, {
          begin: 8304,
          end: 8351
      }, {
          begin: 8352,
          end: 8399
      }, {
          begin: 8400,
          end: 8447
      }, {
          begin: 8448,
          end: 8527
      }, {
          begin: 8528,
          end: 8591
      }, {
          begin: 8592,
          end: 8703
      }, {
          begin: 8704,
          end: 8959
      }, {
          begin: 8960,
          end: 9215
      }, {
          begin: 9216,
          end: 9279
      }, {
          begin: 9280,
          end: 9311
      }, {
          begin: 9312,
          end: 9471
      }, {
          begin: 9472,
          end: 9599
      }, {
          begin: 9600,
          end: 9631
      }, {
          begin: 9632,
          end: 9727
      }, {
          begin: 9728,
          end: 9983
      }, {
          begin: 9984,
          end: 10175
      }, {
          begin: 12288,
          end: 12351
      }, {
          begin: 12352,
          end: 12447
      }, {
          begin: 12448,
          end: 12543
      }, {
          begin: 12544,
          end: 12591
      }, {
          begin: 12592,
          end: 12687
      }, {
          begin: 43072,
          end: 43135
      }, {
          begin: 12800,
          end: 13055
      }, {
          begin: 13056,
          end: 13311
      }, {
          begin: 44032,
          end: 55215
      }, {
          begin: 55296,
          end: 57343
      }, {
          begin: 67840,
          end: 67871
      }, {
          begin: 19968,
          end: 40959
      }, {
          begin: 57344,
          end: 63743
      }, {
          begin: 12736,
          end: 12783
      }, {
          begin: 64256,
          end: 64335
      }, {
          begin: 64336,
          end: 65023
      }, {
          begin: 65056,
          end: 65071
      }, {
          begin: 65040,
          end: 65055
      }, {
          begin: 65104,
          end: 65135
      }, {
          begin: 65136,
          end: 65279
      }, {
          begin: 65280,
          end: 65519
      }, {
          begin: 65520,
          end: 65535
      }, {
          begin: 3840,
          end: 4095
      }, {
          begin: 1792,
          end: 1871
      }, {
          begin: 1920,
          end: 1983
      }, {
          begin: 3456,
          end: 3583
      }, {
          begin: 4096,
          end: 4255
      }, {
          begin: 4608,
          end: 4991
      }, {
          begin: 5024,
          end: 5119
      }, {
          begin: 5120,
          end: 5759
      }, {
          begin: 5760,
          end: 5791
      }, {
          begin: 5792,
          end: 5887
      }, {
          begin: 6016,
          end: 6143
      }, {
          begin: 6144,
          end: 6319
      }, {
          begin: 10240,
          end: 10495
      }, {
          begin: 40960,
          end: 42127
      }, {
          begin: 5888,
          end: 5919
      }, {
          begin: 66304,
          end: 66351
      }, {
          begin: 66352,
          end: 66383
      }, {
          begin: 66560,
          end: 66639
      }, {
          begin: 118784,
          end: 119039
      }, {
          begin: 119808,
          end: 120831
      }, {
          begin: 1044480,
          end: 1048573
      }, {
          begin: 65024,
          end: 65039
      }, {
          begin: 917504,
          end: 917631
      }, {
          begin: 6400,
          end: 6479
      }, {
          begin: 6480,
          end: 6527
      }, {
          begin: 6528,
          end: 6623
      }, {
          begin: 6656,
          end: 6687
      }, {
          begin: 11264,
          end: 11359
      }, {
          begin: 11568,
          end: 11647
      }, {
          begin: 19904,
          end: 19967
      }, {
          begin: 43008,
          end: 43055
      }, {
          begin: 65536,
          end: 65663
      }, {
          begin: 65856,
          end: 65935
      }, {
          begin: 66432,
          end: 66463
      }, {
          begin: 66464,
          end: 66527
      }, {
          begin: 66640,
          end: 66687
      }, {
          begin: 66688,
          end: 66735
      }, {
          begin: 67584,
          end: 67647
      }, {
          begin: 68096,
          end: 68191
      }, {
          begin: 119552,
          end: 119647
      }, {
          begin: 73728,
          end: 74751
      }, {
          begin: 119648,
          end: 119679
      }, {
          begin: 7040,
          end: 7103
      }, {
          begin: 7168,
          end: 7247
      }, {
          begin: 7248,
          end: 7295
      }, {
          begin: 43136,
          end: 43231
      }, {
          begin: 43264,
          end: 43311
      }, {
          begin: 43312,
          end: 43359
      }, {
          begin: 43520,
          end: 43615
      }, {
          begin: 65936,
          end: 65999
      }, {
          begin: 66e3,
          end: 66047
      }, {
          begin: 66208,
          end: 66271
      }, {
          begin: 127024,
          end: 127135
      }];
      var Ht = {
          parse: function(t, e) {
              const n = {}
                , r = new G.Parser(t,e);
              n.version = r.parseUShort(),
              n.xAvgCharWidth = r.parseShort(),
              n.usWeightClass = r.parseUShort(),
              n.usWidthClass = r.parseUShort(),
              n.fsType = r.parseUShort(),
              n.ySubscriptXSize = r.parseShort(),
              n.ySubscriptYSize = r.parseShort(),
              n.ySubscriptXOffset = r.parseShort(),
              n.ySubscriptYOffset = r.parseShort(),
              n.ySuperscriptXSize = r.parseShort(),
              n.ySuperscriptYSize = r.parseShort(),
              n.ySuperscriptXOffset = r.parseShort(),
              n.ySuperscriptYOffset = r.parseShort(),
              n.yStrikeoutSize = r.parseShort(),
              n.yStrikeoutPosition = r.parseShort(),
              n.sFamilyClass = r.parseShort(),
              n.panose = [];
              for (let o = 0; o < 10; o++)
                  n.panose[o] = r.parseByte();
              return n.ulUnicodeRange1 = r.parseULong(),
              n.ulUnicodeRange2 = r.parseULong(),
              n.ulUnicodeRange3 = r.parseULong(),
              n.ulUnicodeRange4 = r.parseULong(),
              n.achVendID = String.fromCharCode(r.parseByte(), r.parseByte(), r.parseByte(), r.parseByte()),
              n.fsSelection = r.parseUShort(),
              n.usFirstCharIndex = r.parseUShort(),
              n.usLastCharIndex = r.parseUShort(),
              n.sTypoAscender = r.parseShort(),
              n.sTypoDescender = r.parseShort(),
              n.sTypoLineGap = r.parseShort(),
              n.usWinAscent = r.parseUShort(),
              n.usWinDescent = r.parseUShort(),
              n.version >= 1 && (n.ulCodePageRange1 = r.parseULong(),
              n.ulCodePageRange2 = r.parseULong()),
              n.version >= 2 && (n.sxHeight = r.parseShort(),
              n.sCapHeight = r.parseShort(),
              n.usDefaultChar = r.parseUShort(),
              n.usBreakChar = r.parseUShort(),
              n.usMaxContent = r.parseUShort()),
              n
          },
          make: function(t) {
              return new k.Table("OS/2",[{
                  name: "version",
                  type: "USHORT",
                  value: 3
              }, {
                  name: "xAvgCharWidth",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "usWeightClass",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "usWidthClass",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "fsType",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "ySubscriptXSize",
                  type: "SHORT",
                  value: 650
              }, {
                  name: "ySubscriptYSize",
                  type: "SHORT",
                  value: 699
              }, {
                  name: "ySubscriptXOffset",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "ySubscriptYOffset",
                  type: "SHORT",
                  value: 140
              }, {
                  name: "ySuperscriptXSize",
                  type: "SHORT",
                  value: 650
              }, {
                  name: "ySuperscriptYSize",
                  type: "SHORT",
                  value: 699
              }, {
                  name: "ySuperscriptXOffset",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "ySuperscriptYOffset",
                  type: "SHORT",
                  value: 479
              }, {
                  name: "yStrikeoutSize",
                  type: "SHORT",
                  value: 49
              }, {
                  name: "yStrikeoutPosition",
                  type: "SHORT",
                  value: 258
              }, {
                  name: "sFamilyClass",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "bFamilyType",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bSerifStyle",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bWeight",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bProportion",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bContrast",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bStrokeVariation",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bArmStyle",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bLetterform",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bMidline",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "bXHeight",
                  type: "BYTE",
                  value: 0
              }, {
                  name: "ulUnicodeRange1",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "ulUnicodeRange2",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "ulUnicodeRange3",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "ulUnicodeRange4",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "achVendID",
                  type: "CHARARRAY",
                  value: "XXXX"
              }, {
                  name: "fsSelection",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "usFirstCharIndex",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "usLastCharIndex",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "sTypoAscender",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "sTypoDescender",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "sTypoLineGap",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "usWinAscent",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "usWinDescent",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "ulCodePageRange1",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "ulCodePageRange2",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "sxHeight",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "sCapHeight",
                  type: "SHORT",
                  value: 0
              }, {
                  name: "usDefaultChar",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "usBreakChar",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "usMaxContext",
                  type: "USHORT",
                  value: 0
              }],t)
          },
          unicodeRanges: Gt,
          getUnicodeRange: function(t) {
              for (let e = 0; e < Gt.length; e += 1) {
                  const n = Gt[e];
                  if (t >= n.begin && t < n.end)
                      return e
              }
              return -1
          }
      };
      var qt = {
          parse: function(t, e) {
              const n = {}
                , r = new G.Parser(t,e);
              switch (n.version = r.parseVersion(),
              n.italicAngle = r.parseFixed(),
              n.underlinePosition = r.parseShort(),
              n.underlineThickness = r.parseShort(),
              n.isFixedPitch = r.parseULong(),
              n.minMemType42 = r.parseULong(),
              n.maxMemType42 = r.parseULong(),
              n.minMemType1 = r.parseULong(),
              n.maxMemType1 = r.parseULong(),
              n.version) {
              case 1:
                  n.names = V.slice();
                  break;
              case 2:
                  n.numberOfGlyphs = r.parseUShort(),
                  n.glyphNameIndex = new Array(n.numberOfGlyphs);
                  for (let t = 0; t < n.numberOfGlyphs; t++)
                      n.glyphNameIndex[t] = r.parseUShort();
                  n.names = [];
                  for (let t = 0; t < n.numberOfGlyphs; t++)
                      if (n.glyphNameIndex[t] >= V.length) {
                          const t = r.parseChar();
                          n.names.push(r.parseString(t))
                      }
                  break;
              case 2.5:
                  n.numberOfGlyphs = r.parseUShort(),
                  n.offset = new Array(n.numberOfGlyphs);
                  for (let t = 0; t < n.numberOfGlyphs; t++)
                      n.offset[t] = r.parseChar()
              }
              return n
          },
          make: function() {
              return new k.Table("post",[{
                  name: "version",
                  type: "FIXED",
                  value: 196608
              }, {
                  name: "italicAngle",
                  type: "FIXED",
                  value: 0
              }, {
                  name: "underlinePosition",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "underlineThickness",
                  type: "FWORD",
                  value: 0
              }, {
                  name: "isFixedPitch",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "minMemType42",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "maxMemType42",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "minMemType1",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "maxMemType1",
                  type: "ULONG",
                  value: 0
              }])
          }
      };
      const Wt = new Array(9);
      Wt[1] = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort();
          return 1 === e ? {
              substFormat: 1,
              coverage: this.parsePointer(F.coverage),
              deltaGlyphId: this.parseUShort()
          } : 2 === e ? {
              substFormat: 2,
              coverage: this.parsePointer(F.coverage),
              substitute: this.parseOffset16List()
          } : void h.assert(!1, "0x" + t.toString(16) + ": lookup type 1 format must be 1 or 2.")
      }
      ,
      Wt[2] = function() {
          const t = this.parseUShort();
          return h.argument(1 === t, "GSUB Multiple Substitution Subtable identifier-format must be 1"),
          {
              substFormat: t,
              coverage: this.parsePointer(F.coverage),
              sequences: this.parseListOfLists()
          }
      }
      ,
      Wt[3] = function() {
          const t = this.parseUShort();
          return h.argument(1 === t, "GSUB Alternate Substitution Subtable identifier-format must be 1"),
          {
              substFormat: t,
              coverage: this.parsePointer(F.coverage),
              alternateSets: this.parseListOfLists()
          }
      }
      ,
      Wt[4] = function() {
          const t = this.parseUShort();
          return h.argument(1 === t, "GSUB ligature table identifier-format must be 1"),
          {
              substFormat: t,
              coverage: this.parsePointer(F.coverage),
              ligatureSets: this.parseListOfLists((function() {
                  return {
                      ligGlyph: this.parseUShort(),
                      components: this.parseUShortList(this.parseUShort() - 1)
                  }
              }
              ))
          }
      }
      ;
      const zt = {
          sequenceIndex: F.uShort,
          lookupListIndex: F.uShort
      };
      Wt[5] = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort();
          if (1 === e)
              return {
                  substFormat: e,
                  coverage: this.parsePointer(F.coverage),
                  ruleSets: this.parseListOfLists((function() {
                      const t = this.parseUShort()
                        , e = this.parseUShort();
                      return {
                          input: this.parseUShortList(t - 1),
                          lookupRecords: this.parseRecordList(e, zt)
                      }
                  }
                  ))
              };
          if (2 === e)
              return {
                  substFormat: e,
                  coverage: this.parsePointer(F.coverage),
                  classDef: this.parsePointer(F.classDef),
                  classSets: this.parseListOfLists((function() {
                      const t = this.parseUShort()
                        , e = this.parseUShort();
                      return {
                          classes: this.parseUShortList(t - 1),
                          lookupRecords: this.parseRecordList(e, zt)
                      }
                  }
                  ))
              };
          if (3 === e) {
              const t = this.parseUShort()
                , n = this.parseUShort();
              return {
                  substFormat: e,
                  coverages: this.parseList(t, F.pointer(F.coverage)),
                  lookupRecords: this.parseRecordList(n, zt)
              }
          }
          h.assert(!1, "0x" + t.toString(16) + ": lookup type 5 format must be 1, 2 or 3.")
      }
      ,
      Wt[6] = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort();
          return 1 === e ? {
              substFormat: 1,
              coverage: this.parsePointer(F.coverage),
              chainRuleSets: this.parseListOfLists((function() {
                  return {
                      backtrack: this.parseUShortList(),
                      input: this.parseUShortList(this.parseShort() - 1),
                      lookahead: this.parseUShortList(),
                      lookupRecords: this.parseRecordList(zt)
                  }
              }
              ))
          } : 2 === e ? {
              substFormat: 2,
              coverage: this.parsePointer(F.coverage),
              backtrackClassDef: this.parsePointer(F.classDef),
              inputClassDef: this.parsePointer(F.classDef),
              lookaheadClassDef: this.parsePointer(F.classDef),
              chainClassSet: this.parseListOfLists((function() {
                  return {
                      backtrack: this.parseUShortList(),
                      input: this.parseUShortList(this.parseShort() - 1),
                      lookahead: this.parseUShortList(),
                      lookupRecords: this.parseRecordList(zt)
                  }
              }
              ))
          } : 3 === e ? {
              substFormat: 3,
              backtrackCoverage: this.parseList(F.pointer(F.coverage)),
              inputCoverage: this.parseList(F.pointer(F.coverage)),
              lookaheadCoverage: this.parseList(F.pointer(F.coverage)),
              lookupRecords: this.parseRecordList(zt)
          } : void h.assert(!1, "0x" + t.toString(16) + ": lookup type 6 format must be 1, 2 or 3.")
      }
      ,
      Wt[7] = function() {
          const t = this.parseUShort();
          h.argument(1 === t, "GSUB Extension Substitution subtable identifier-format must be 1");
          const e = this.parseUShort()
            , n = new F(this.data,this.offset + this.parseULong());
          return {
              substFormat: 1,
              lookupType: e,
              extension: Wt[e].call(n)
          }
      }
      ,
      Wt[8] = function() {
          const t = this.parseUShort();
          return h.argument(1 === t, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),
          {
              substFormat: t,
              coverage: this.parsePointer(F.coverage),
              backtrackCoverage: this.parseList(F.pointer(F.coverage)),
              lookaheadCoverage: this.parseList(F.pointer(F.coverage)),
              substitutes: this.parseUShortList()
          }
      }
      ;
      const jt = new Array(9);
      jt[1] = function(t) {
          return 1 === t.substFormat ? new k.Table("substitutionTable",[{
              name: "substFormat",
              type: "USHORT",
              value: 1
          }, {
              name: "coverage",
              type: "TABLE",
              value: new k.Coverage(t.coverage)
          }, {
              name: "deltaGlyphID",
              type: "USHORT",
              value: t.deltaGlyphId
          }]) : new k.Table("substitutionTable",[{
              name: "substFormat",
              type: "USHORT",
              value: 2
          }, {
              name: "coverage",
              type: "TABLE",
              value: new k.Coverage(t.coverage)
          }].concat(k.ushortList("substitute", t.substitute)))
      }
      ,
      jt[3] = function(t) {
          return h.assert(1 === t.substFormat, "Lookup type 3 substFormat must be 1."),
          new k.Table("substitutionTable",[{
              name: "substFormat",
              type: "USHORT",
              value: 1
          }, {
              name: "coverage",
              type: "TABLE",
              value: new k.Coverage(t.coverage)
          }].concat(k.tableList("altSet", t.alternateSets, (function(t) {
              return new k.Table("alternateSetTable",k.ushortList("alternate", t))
          }
          ))))
      }
      ,
      jt[4] = function(t) {
          return h.assert(1 === t.substFormat, "Lookup type 4 substFormat must be 1."),
          new k.Table("substitutionTable",[{
              name: "substFormat",
              type: "USHORT",
              value: 1
          }, {
              name: "coverage",
              type: "TABLE",
              value: new k.Coverage(t.coverage)
          }].concat(k.tableList("ligSet", t.ligatureSets, (function(t) {
              return new k.Table("ligatureSetTable",k.tableList("ligature", t, (function(t) {
                  return new k.Table("ligatureTable",[{
                      name: "ligGlyph",
                      type: "USHORT",
                      value: t.ligGlyph
                  }].concat(k.ushortList("component", t.components, t.components.length + 1)))
              }
              )))
          }
          ))))
      }
      ;
      var Vt = {
          parse: function(t, e) {
              const n = new F(t,e = e || 0)
                , r = n.parseVersion(1);
              return h.argument(1 === r || 1.1 === r, "Unsupported GSUB table version."),
              1 === r ? {
                  version: r,
                  scripts: n.parseScriptList(),
                  features: n.parseFeatureList(),
                  lookups: n.parseLookupList(Wt)
              } : {
                  version: r,
                  scripts: n.parseScriptList(),
                  features: n.parseFeatureList(),
                  lookups: n.parseLookupList(Wt),
                  variations: n.parseFeatureVariationsList()
              }
          },
          make: function(t) {
              return new k.Table("GSUB",[{
                  name: "version",
                  type: "ULONG",
                  value: 65536
              }, {
                  name: "scripts",
                  type: "TABLE",
                  value: new k.ScriptList(t.scripts)
              }, {
                  name: "features",
                  type: "TABLE",
                  value: new k.FeatureList(t.features)
              }, {
                  name: "lookups",
                  type: "TABLE",
                  value: new k.LookupList(t.lookups,jt)
              }])
          }
      };
      var Zt = {
          parse: function(t, e) {
              const n = new G.Parser(t,e)
                , r = n.parseULong();
              h.argument(1 === r, "Unsupported META table version."),
              n.parseULong(),
              n.parseULong();
              const o = n.parseULong()
                , i = {};
              for (let s = 0; s < o; s++) {
                  const r = n.parseTag()
                    , o = n.parseULong()
                    , s = n.parseULong()
                    , a = d.UTF8(t, e + o, s);
                  i[r] = a
              }
              return i
          },
          make: function(t) {
              const e = Object.keys(t).length;
              let n = "";
              const r = 16 + 12 * e
                , o = new k.Table("meta",[{
                  name: "version",
                  type: "ULONG",
                  value: 1
              }, {
                  name: "flags",
                  type: "ULONG",
                  value: 0
              }, {
                  name: "offset",
                  type: "ULONG",
                  value: r
              }, {
                  name: "numTags",
                  type: "ULONG",
                  value: e
              }]);
              for (let i in t) {
                  const e = n.length;
                  n += t[i],
                  o.fields.push({
                      name: "tag " + i,
                      type: "TAG",
                      value: i
                  }),
                  o.fields.push({
                      name: "offset " + i,
                      type: "ULONG",
                      value: r + e
                  }),
                  o.fields.push({
                      name: "length " + i,
                      type: "ULONG",
                      value: t[i].length
                  })
              }
              return o.fields.push({
                  name: "stringPool",
                  type: "CHARARRAY",
                  value: n
              }),
              o
          }
      };
      function Jt(t) {
          return Math.log(t) / Math.log(2) | 0
      }
      function Kt(t) {
          for (; t.length % 4 !== 0; )
              t.push(0);
          let e = 0;
          for (let n = 0; n < t.length; n += 4)
              e += (t[n] << 24) + (t[n + 1] << 16) + (t[n + 2] << 8) + t[n + 3];
          return e %= Math.pow(2, 32),
          e
      }
      function $t(t, e, n, r) {
          return new k.Record("Table Record",[{
              name: "tag",
              type: "TAG",
              value: void 0 !== t ? t : ""
          }, {
              name: "checkSum",
              type: "ULONG",
              value: void 0 !== e ? e : 0
          }, {
              name: "offset",
              type: "ULONG",
              value: void 0 !== n ? n : 0
          }, {
              name: "length",
              type: "ULONG",
              value: void 0 !== r ? r : 0
          }])
      }
      function Qt(t) {
          const e = new k.Table("sfnt",[{
              name: "version",
              type: "TAG",
              value: "OTTO"
          }, {
              name: "numTables",
              type: "USHORT",
              value: 0
          }, {
              name: "searchRange",
              type: "USHORT",
              value: 0
          }, {
              name: "entrySelector",
              type: "USHORT",
              value: 0
          }, {
              name: "rangeShift",
              type: "USHORT",
              value: 0
          }]);
          e.tables = t,
          e.numTables = t.length;
          const n = Math.pow(2, Jt(e.numTables));
          e.searchRange = 16 * n,
          e.entrySelector = Jt(n),
          e.rangeShift = 16 * e.numTables - e.searchRange;
          const r = []
            , o = [];
          let i = e.sizeOf() + $t().sizeOf() * e.numTables;
          for (; i % 4 !== 0; )
              i += 1,
              o.push({
                  name: "padding",
                  type: "BYTE",
                  value: 0
              });
          for (let s = 0; s < t.length; s += 1) {
              const e = t[s];
              h.argument(4 === e.tableName.length, "Table name" + e.tableName + " is invalid.");
              const n = e.sizeOf()
                , a = $t(e.tableName, Kt(e.encode()), i, n);
              for (r.push({
                  name: a.tag + " Table Record",
                  type: "RECORD",
                  value: a
              }),
              o.push({
                  name: e.tableName + " table",
                  type: "RECORD",
                  value: e
              }),
              i += n,
              h.argument(!isNaN(i), "Something went wrong calculating the offset."); i % 4 !== 0; )
                  i += 1,
                  o.push({
                      name: "padding",
                      type: "BYTE",
                      value: 0
                  })
          }
          return r.sort((function(t, e) {
              return t.value.tag > e.value.tag ? 1 : -1
          }
          )),
          e.fields = e.fields.concat(r),
          e.fields = e.fields.concat(o),
          e
      }
      function te(t, e, n) {
          for (let r = 0; r < e.length; r += 1) {
              const n = t.charToGlyphIndex(e[r]);
              if (n > 0) {
                  return t.glyphs.get(n).getMetrics()
              }
          }
          return n
      }
      function ee(t) {
          let e = 0;
          for (let n = 0; n < t.length; n += 1)
              e += t[n];
          return e / t.length
      }
      var ne = {
          make: Qt,
          fontToTable: function(t) {
              const e = []
                , n = []
                , r = []
                , o = []
                , i = []
                , s = []
                , a = [];
              let l, u = 0, p = 0, c = 0, h = 0, f = 0;
              for (let U = 0; U < t.glyphs.length; U += 1) {
                  const d = t.glyphs.get(U)
                    , y = 0 | d.unicode;
                  if (isNaN(d.advanceWidth))
                      throw new Error("Glyph " + d.name + " (" + U + "): advanceWidth is not a number.");
                  (l > y || void 0 === l) && y > 0 && (l = y),
                  u < y && (u = y);
                  const m = Ht.getUnicodeRange(y);
                  if (m < 32)
                      p |= 1 << m;
                  else if (m < 64)
                      c |= 1 << m - 32;
                  else if (m < 96)
                      h |= 1 << m - 64;
                  else {
                      if (!(m < 123))
                          throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
                      f |= 1 << m - 96
                  }
                  if (".notdef" === d.name)
                      continue;
                  const g = d.getMetrics();
                  e.push(g.xMin),
                  n.push(g.yMin),
                  r.push(g.xMax),
                  o.push(g.yMax),
                  s.push(g.leftSideBearing),
                  a.push(g.rightSideBearing),
                  i.push(d.advanceWidth)
              }
              const d = {
                  xMin: Math.min.apply(null, e),
                  yMin: Math.min.apply(null, n),
                  xMax: Math.max.apply(null, r),
                  yMax: Math.max.apply(null, o),
                  advanceWidthMax: Math.max.apply(null, i),
                  advanceWidthAvg: ee(i),
                  minLeftSideBearing: Math.min.apply(null, s),
                  maxLeftSideBearing: Math.max.apply(null, s),
                  minRightSideBearing: Math.min.apply(null, a)
              };
              d.ascender = t.ascender,
              d.descender = t.descender;
              const y = wt.make({
                  flags: 3,
                  unitsPerEm: t.unitsPerEm,
                  xMin: d.xMin,
                  yMin: d.yMin,
                  xMax: d.xMax,
                  yMax: d.yMax,
                  lowestRecPPEM: 3,
                  createdTimestamp: t.createdTimestamp
              })
                , m = Et.make({
                  ascender: d.ascender,
                  descender: d.descender,
                  advanceWidthMax: d.advanceWidthMax,
                  minLeftSideBearing: d.minLeftSideBearing,
                  minRightSideBearing: d.minRightSideBearing,
                  xMaxExtent: d.maxLeftSideBearing + (d.xMax - d.xMin),
                  numberOfHMetrics: t.glyphs.length
              })
                , g = It.make(t.glyphs.length)
                , v = Ht.make({
                  xAvgCharWidth: Math.round(d.advanceWidthAvg),
                  usWeightClass: t.tables.os2.usWeightClass,
                  usWidthClass: t.tables.os2.usWidthClass,
                  usFirstCharIndex: l,
                  usLastCharIndex: u,
                  ulUnicodeRange1: p,
                  ulUnicodeRange2: c,
                  ulUnicodeRange3: h,
                  ulUnicodeRange4: f,
                  fsSelection: t.tables.os2.fsSelection,
                  sTypoAscender: d.ascender,
                  sTypoDescender: d.descender,
                  sTypoLineGap: 0,
                  usWinAscent: d.yMax,
                  usWinDescent: Math.abs(d.yMin),
                  ulCodePageRange1: 1,
                  sxHeight: te(t, "xyvw", {
                      yMax: Math.round(d.ascender / 2)
                  }).yMax,
                  sCapHeight: te(t, "HIKLEFJMNTZBDPRAGOQSUVWXY", d).yMax,
                  usDefaultChar: t.hasChar(" ") ? 32 : 0,
                  usBreakChar: t.hasChar(" ") ? 32 : 0
              })
                , b = Tt.make(t.glyphs)
                , x = q.make(t.glyphs)
                , P = t.getEnglishName("fontFamily")
                , S = t.getEnglishName("fontSubfamily")
                , C = P + " " + S;
              let w = t.getEnglishName("postScriptName");
              w || (w = P.replace(/\s/g, "") + "-" + S);
              const E = {};
              for (let U in t.names)
                  E[U] = t.names[U];
              E.uniqueID || (E.uniqueID = {
                  en: t.getEnglishName("manufacturer") + ":" + C
              }),
              E.postScriptName || (E.postScriptName = {
                  en: w
              }),
              E.preferredFamily || (E.preferredFamily = t.names.fontFamily),
              E.preferredSubfamily || (E.preferredSubfamily = t.names.fontSubfamily);
              const T = []
                , O = Yt.make(E, T)
                , I = T.length > 0 ? Ot.make(T) : void 0
                , L = qt.make()
                , A = Ct.make(t.glyphs, {
                  version: t.getEnglishName("version"),
                  fullName: C,
                  familyName: P,
                  weightName: S,
                  postScriptName: w,
                  unitsPerEm: t.unitsPerEm,
                  fontBBox: [0, d.yMin, d.ascender, d.advanceWidthMax]
              })
                , _ = t.metas && Object.keys(t.metas).length > 0 ? Zt.make(t.metas) : void 0
                , R = [y, m, g, v, O, x, L, A, b];
              I && R.push(I),
              t.tables.gsub && R.push(Vt.make(t.tables.gsub)),
              _ && R.push(_);
              const N = Qt(R)
                , k = Kt(N.encode())
                , B = N.fields;
              let D = !1;
              for (let U = 0; U < B.length; U += 1)
                  if ("head table" === B[U].name) {
                      B[U].value.checkSumAdjustment = 2981146554 - k,
                      D = !0;
                      break
                  }
              if (!D)
                  throw new Error("Could not find head table with checkSum to adjust.");
              return N
          },
          computeCheckSum: Kt
      };
      function re(t, e) {
          let n = 0
            , r = t.length - 1;
          for (; n <= r; ) {
              const o = n + r >>> 1
                , i = t[o].tag;
              if (i === e)
                  return o;
              i < e ? n = o + 1 : r = o - 1
          }
          return -n - 1
      }
      function oe(t, e) {
          let n = 0
            , r = t.length - 1;
          for (; n <= r; ) {
              const o = n + r >>> 1
                , i = t[o];
              if (i === e)
                  return o;
              i < e ? n = o + 1 : r = o - 1
          }
          return -n - 1
      }
      function ie(t, e) {
          let n, r = 0, o = t.length - 1;
          for (; r <= o; ) {
              const i = r + o >>> 1;
              n = t[i];
              const s = n.start;
              if (s === e)
                  return n;
              s < e ? r = i + 1 : o = i - 1
          }
          if (r > 0)
              return n = t[r - 1],
              e > n.end ? 0 : n
      }
      function se(t, e) {
          this.font = t,
          this.tableName = e
      }
      se.prototype = {
          searchTag: re,
          binSearch: oe,
          getTable: function(t) {
              let e = this.font.tables[this.tableName];
              return !e && t && (e = this.font.tables[this.tableName] = this.createDefaultTable()),
              e
          },
          getScriptNames: function() {
              let t = this.getTable();
              return t ? t.scripts.map((function(t) {
                  return t.tag
              }
              )) : []
          },
          getDefaultScriptName: function() {
              let t = this.getTable();
              if (!t)
                  return;
              let e = !1;
              for (let n = 0; n < t.scripts.length; n++) {
                  const r = t.scripts[n].tag;
                  if ("DFLT" === r)
                      return r;
                  "latn" === r && (e = !0)
              }
              return e ? "latn" : void 0
          },
          getScriptTable: function(t, e) {
              const n = this.getTable(e);
              if (n) {
                  t = t || "DFLT";
                  const r = n.scripts
                    , o = re(n.scripts, t);
                  if (o >= 0)
                      return r[o].script;
                  if (e) {
                      const e = {
                          tag: t,
                          script: {
                              defaultLangSys: {
                                  reserved: 0,
                                  reqFeatureIndex: 65535,
                                  featureIndexes: []
                              },
                              langSysRecords: []
                          }
                      };
                      return r.splice(-1 - o, 0, e),
                      e.script
                  }
              }
          },
          getLangSysTable: function(t, e, n) {
              const r = this.getScriptTable(t, n);
              if (r) {
                  if (!e || "dflt" === e || "DFLT" === e)
                      return r.defaultLangSys;
                  const t = re(r.langSysRecords, e);
                  if (t >= 0)
                      return r.langSysRecords[t].langSys;
                  if (n) {
                      const n = {
                          tag: e,
                          langSys: {
                              reserved: 0,
                              reqFeatureIndex: 65535,
                              featureIndexes: []
                          }
                      };
                      return r.langSysRecords.splice(-1 - t, 0, n),
                      n.langSys
                  }
              }
          },
          getFeatureTable: function(t, e, n, r) {
              const o = this.getLangSysTable(t, e, r);
              if (o) {
                  let t;
                  const e = o.featureIndexes
                    , i = this.font.tables[this.tableName].features;
                  for (let r = 0; r < e.length; r++)
                      if (t = i[e[r]],
                      t.tag === n)
                          return t.feature;
                  if (r) {
                      const r = i.length;
                      return h.assert(0 === r || n >= i[r - 1].tag, "Features must be added in alphabetical order."),
                      t = {
                          tag: n,
                          feature: {
                              params: 0,
                              lookupListIndexes: []
                          }
                      },
                      i.push(t),
                      e.push(r),
                      t.feature
                  }
              }
          },
          getLookupTables: function(t, e, n, r, o) {
              const i = this.getFeatureTable(t, e, n, o)
                , s = [];
              if (i) {
                  let t;
                  const e = i.lookupListIndexes
                    , n = this.font.tables[this.tableName].lookups;
                  for (let o = 0; o < e.length; o++)
                      t = n[e[o]],
                      t.lookupType === r && s.push(t);
                  if (0 === s.length && o) {
                      t = {
                          lookupType: r,
                          lookupFlag: 0,
                          subtables: [],
                          markFilteringSet: void 0
                      };
                      const o = n.length;
                      return n.push(t),
                      e.push(o),
                      [t]
                  }
              }
              return s
          },
          getGlyphClass: function(t, e) {
              switch (t.format) {
              case 1:
                  return t.startGlyph <= e && e < t.startGlyph + t.classes.length ? t.classes[e - t.startGlyph] : 0;
              case 2:
                  const n = ie(t.ranges, e);
                  return n ? n.classId : 0
              }
          },
          getCoverageIndex: function(t, e) {
              switch (t.format) {
              case 1:
                  const n = oe(t.glyphs, e);
                  return n >= 0 ? n : -1;
              case 2:
                  const r = ie(t.ranges, e);
                  return r ? r.index + e - r.start : -1
              }
          },
          expandCoverage: function(t) {
              if (1 === t.format)
                  return t.glyphs;
              {
                  const e = []
                    , n = t.ranges;
                  for (let t = 0; t < n.length; t++) {
                      const r = n[t]
                        , o = r.start
                        , i = r.end;
                      for (let t = o; t <= i; t++)
                          e.push(t)
                  }
                  return e
              }
          }
      };
      var ae = se;
      function le(t) {
          ae.call(this, t, "gpos")
      }
      le.prototype = ae.prototype,
      le.prototype.init = function() {
          const t = this.getDefaultScriptName();
          this.defaultKerningTables = this.getKerningTables(t)
      }
      ,
      le.prototype.getKerningValue = function(t, e, n) {
          for (let r = 0; r < t.length; r++) {
              const o = t[r].subtables;
              for (let t = 0; t < o.length; t++) {
                  const r = o[t]
                    , i = this.getCoverageIndex(r.coverage, e);
                  if (!(i < 0))
                      switch (r.posFormat) {
                      case 1:
                          let t = r.pairSets[i];
                          for (let e = 0; e < t.length; e++) {
                              let r = t[e];
                              if (r.secondGlyph === n)
                                  return r.value1 && r.value1.xAdvance || 0
                          }
                          break;
                      case 2:
                          const o = this.getGlyphClass(r.classDef1, e)
                            , s = this.getGlyphClass(r.classDef2, n)
                            , a = r.classRecords[o][s];
                          return a.value1 && a.value1.xAdvance || 0
                      }
              }
          }
          return 0
      }
      ,
      le.prototype.getKerningTables = function(t, e) {
          if (this.font.tables.gpos)
              return this.getLookupTables(t, e, "kern", 2)
      }
      ;
      var ue = le;
      function pe(t) {
          ae.call(this, t, "gsub")
      }
      function ce(t, e) {
          const n = t.length;
          if (n !== e.length)
              return !1;
          for (let r = 0; r < n; r++)
              if (t[r] !== e[r])
                  return !1;
          return !0
      }
      function he(t, e, n) {
          const r = t.subtables;
          for (let o = 0; o < r.length; o++) {
              const t = r[o];
              if (t.substFormat === e)
                  return t
          }
          if (n)
              return r.push(n),
              n
      }
      pe.prototype = ae.prototype,
      pe.prototype.createDefaultTable = function() {
          return {
              version: 1,
              scripts: [{
                  tag: "DFLT",
                  script: {
                      defaultLangSys: {
                          reserved: 0,
                          reqFeatureIndex: 65535,
                          featureIndexes: []
                      },
                      langSysRecords: []
                  }
              }],
              features: [],
              lookups: []
          }
      }
      ,
      pe.prototype.getSingle = function(t, e, n) {
          const r = []
            , o = this.getLookupTables(e, n, t, 1);
          for (let i = 0; i < o.length; i++) {
              const t = o[i].subtables;
              for (let e = 0; e < t.length; e++) {
                  const n = t[e]
                    , o = this.expandCoverage(n.coverage);
                  let i;
                  if (1 === n.substFormat) {
                      const t = n.deltaGlyphId;
                      for (i = 0; i < o.length; i++) {
                          const e = o[i];
                          r.push({
                              sub: e,
                              by: e + t
                          })
                      }
                  } else {
                      const t = n.substitute;
                      for (i = 0; i < o.length; i++)
                          r.push({
                              sub: o[i],
                              by: t[i]
                          })
                  }
              }
          }
          return r
      }
      ,
      pe.prototype.getAlternates = function(t, e, n) {
          const r = []
            , o = this.getLookupTables(e, n, t, 3);
          for (let i = 0; i < o.length; i++) {
              const t = o[i].subtables;
              for (let e = 0; e < t.length; e++) {
                  const n = t[e]
                    , o = this.expandCoverage(n.coverage)
                    , i = n.alternateSets;
                  for (let t = 0; t < o.length; t++)
                      r.push({
                          sub: o[t],
                          by: i[t]
                      })
              }
          }
          return r
      }
      ,
      pe.prototype.getLigatures = function(t, e, n) {
          const r = []
            , o = this.getLookupTables(e, n, t, 4);
          for (let i = 0; i < o.length; i++) {
              const t = o[i].subtables;
              for (let e = 0; e < t.length; e++) {
                  const n = t[e]
                    , o = this.expandCoverage(n.coverage)
                    , i = n.ligatureSets;
                  for (let t = 0; t < o.length; t++) {
                      const e = o[t]
                        , n = i[t];
                      for (let t = 0; t < n.length; t++) {
                          const o = n[t];
                          r.push({
                              sub: [e].concat(o.components),
                              by: o.ligGlyph
                          })
                      }
                  }
              }
          }
          return r
      }
      ,
      pe.prototype.addSingle = function(t, e, n, r) {
          const o = he(this.getLookupTables(n, r, t, 1, !0)[0], 2, {
              substFormat: 2,
              coverage: {
                  format: 1,
                  glyphs: []
              },
              substitute: []
          });
          h.assert(1 === o.coverage.format, "Ligature: unable to modify coverage table format " + o.coverage.format);
          const i = e.sub;
          let s = this.binSearch(o.coverage.glyphs, i);
          s < 0 && (s = -1 - s,
          o.coverage.glyphs.splice(s, 0, i),
          o.substitute.splice(s, 0, 0)),
          o.substitute[s] = e.by
      }
      ,
      pe.prototype.addAlternate = function(t, e, n, r) {
          const o = he(this.getLookupTables(n, r, t, 3, !0)[0], 1, {
              substFormat: 1,
              coverage: {
                  format: 1,
                  glyphs: []
              },
              alternateSets: []
          });
          h.assert(1 === o.coverage.format, "Ligature: unable to modify coverage table format " + o.coverage.format);
          const i = e.sub;
          let s = this.binSearch(o.coverage.glyphs, i);
          s < 0 && (s = -1 - s,
          o.coverage.glyphs.splice(s, 0, i),
          o.alternateSets.splice(s, 0, 0)),
          o.alternateSets[s] = e.by
      }
      ,
      pe.prototype.addLigature = function(t, e, n, r) {
          const o = this.getLookupTables(n, r, t, 4, !0)[0];
          let i = o.subtables[0];
          i || (i = {
              substFormat: 1,
              coverage: {
                  format: 1,
                  glyphs: []
              },
              ligatureSets: []
          },
          o.subtables[0] = i),
          h.assert(1 === i.coverage.format, "Ligature: unable to modify coverage table format " + i.coverage.format);
          const s = e.sub[0]
            , a = e.sub.slice(1)
            , l = {
              ligGlyph: e.by,
              components: a
          };
          let u = this.binSearch(i.coverage.glyphs, s);
          if (u >= 0) {
              const t = i.ligatureSets[u];
              for (let e = 0; e < t.length; e++)
                  if (ce(t[e].components, a))
                      return;
              t.push(l)
          } else
              u = -1 - u,
              i.coverage.glyphs.splice(u, 0, s),
              i.ligatureSets.splice(u, 0, [l])
      }
      ,
      pe.prototype.getFeature = function(t, e, n) {
          if (/ss\d\d/.test(t))
              return this.getSingle(t, e, n);
          switch (t) {
          case "aalt":
          case "salt":
              return this.getSingle(t, e, n).concat(this.getAlternates(t, e, n));
          case "dlig":
          case "liga":
          case "rlig":
              return this.getLigatures(t, e, n)
          }
      }
      ,
      pe.prototype.add = function(t, e, n, r) {
          if (/ss\d\d/.test(t))
              return this.addSingle(t, e, n, r);
          switch (t) {
          case "aalt":
          case "salt":
              return "number" === typeof e.by ? this.addSingle(t, e, n, r) : this.addAlternate(t, e, n, r);
          case "dlig":
          case "liga":
          case "rlig":
              return this.addLigature(t, e, n, r)
          }
      }
      ;
      var fe = pe
        , de = n(19);
      function ye(t, e, n, r, o) {
          let i;
          return (e & r) > 0 ? (i = t.parseByte(),
          0 === (e & o) && (i = -i),
          i = n + i) : i = (e & o) > 0 ? n : n + t.parseShort(),
          i
      }
      function me(t, e, n) {
          const r = new G.Parser(e,n);
          let o, i;
          if (t.numberOfContours = r.parseShort(),
          t._xMin = r.parseShort(),
          t._yMin = r.parseShort(),
          t._xMax = r.parseShort(),
          t._yMax = r.parseShort(),
          t.numberOfContours > 0) {
              const e = t.endPointIndices = [];
              for (let o = 0; o < t.numberOfContours; o += 1)
                  e.push(r.parseUShort());
              t.instructionLength = r.parseUShort(),
              t.instructions = [];
              for (let o = 0; o < t.instructionLength; o += 1)
                  t.instructions.push(r.parseByte());
              const n = e[e.length - 1] + 1;
              o = [];
              for (let t = 0; t < n; t += 1)
                  if (i = r.parseByte(),
                  o.push(i),
                  (8 & i) > 0) {
                      const e = r.parseByte();
                      for (let n = 0; n < e; n += 1)
                          o.push(i),
                          t += 1
                  }
              if (h.argument(o.length === n, "Bad flags."),
              e.length > 0) {
                  const s = [];
                  let a;
                  if (n > 0) {
                      for (let r = 0; r < n; r += 1)
                          i = o[r],
                          a = {},
                          a.onCurve = !!(1 & i),
                          a.lastPointOfContour = e.indexOf(r) >= 0,
                          s.push(a);
                      let t = 0;
                      for (let e = 0; e < n; e += 1)
                          i = o[e],
                          a = s[e],
                          a.x = ye(r, i, t, 2, 16),
                          t = a.x;
                      let l = 0;
                      for (let e = 0; e < n; e += 1)
                          i = o[e],
                          a = s[e],
                          a.y = ye(r, i, l, 4, 32),
                          l = a.y
                  }
                  t.points = s
              } else
                  t.points = []
          } else if (0 === t.numberOfContours)
              t.points = [];
          else {
              t.isComposite = !0,
              t.points = [],
              t.components = [];
              let e = !0;
              for (; e; ) {
                  o = r.parseUShort();
                  const n = {
                      glyphIndex: r.parseUShort(),
                      xScale: 1,
                      scale01: 0,
                      scale10: 0,
                      yScale: 1,
                      dx: 0,
                      dy: 0
                  };
                  (1 & o) > 0 ? (2 & o) > 0 ? (n.dx = r.parseShort(),
                  n.dy = r.parseShort()) : n.matchedPoints = [r.parseUShort(), r.parseUShort()] : (2 & o) > 0 ? (n.dx = r.parseChar(),
                  n.dy = r.parseChar()) : n.matchedPoints = [r.parseByte(), r.parseByte()],
                  (8 & o) > 0 ? n.xScale = n.yScale = r.parseF2Dot14() : (64 & o) > 0 ? (n.xScale = r.parseF2Dot14(),
                  n.yScale = r.parseF2Dot14()) : (128 & o) > 0 && (n.xScale = r.parseF2Dot14(),
                  n.scale01 = r.parseF2Dot14(),
                  n.scale10 = r.parseF2Dot14(),
                  n.yScale = r.parseF2Dot14()),
                  t.components.push(n),
                  e = !!(32 & o)
              }
              if (256 & o) {
                  t.instructionLength = r.parseUShort(),
                  t.instructions = [];
                  for (let e = 0; e < t.instructionLength; e += 1)
                      t.instructions.push(r.parseByte())
              }
          }
      }
      function ge(t, e) {
          const n = [];
          for (let r = 0; r < t.length; r += 1) {
              const o = t[r]
                , i = {
                  x: e.xScale * o.x + e.scale01 * o.y + e.dx,
                  y: e.scale10 * o.x + e.yScale * o.y + e.dy,
                  onCurve: o.onCurve,
                  lastPointOfContour: o.lastPointOfContour
              };
              n.push(i)
          }
          return n
      }
      function ve(t) {
          const e = new u;
          if (!t)
              return e;
          const n = function(t) {
              const e = [];
              let n = [];
              for (let r = 0; r < t.length; r += 1) {
                  const o = t[r];
                  n.push(o),
                  o.lastPointOfContour && (e.push(n),
                  n = [])
              }
              return h.argument(0 === n.length, "There are still points left in the current contour."),
              e
          }(t);
          for (let r = 0; r < n.length; ++r) {
              const t = n[r];
              let o = null
                , i = t[t.length - 1]
                , s = t[0];
              if (i.onCurve)
                  e.moveTo(i.x, i.y);
              else if (s.onCurve)
                  e.moveTo(s.x, s.y);
              else {
                  const t = {
                      x: .5 * (i.x + s.x),
                      y: .5 * (i.y + s.y)
                  };
                  e.moveTo(t.x, t.y)
              }
              for (let n = 0; n < t.length; ++n)
                  if (o = i,
                  i = s,
                  s = t[(n + 1) % t.length],
                  i.onCurve)
                      e.lineTo(i.x, i.y);
                  else {
                      let t = o
                        , n = s;
                      o.onCurve || (t = {
                          x: .5 * (i.x + o.x),
                          y: .5 * (i.y + o.y)
                      }),
                      s.onCurve || (n = {
                          x: .5 * (i.x + s.x),
                          y: .5 * (i.y + s.y)
                      }),
                      e.quadraticCurveTo(i.x, i.y, n.x, n.y)
                  }
              e.closePath()
          }
          return e
      }
      function be(t, e) {
          if (e.isComposite)
              for (let n = 0; n < e.components.length; n += 1) {
                  const r = e.components[n]
                    , o = t.get(r.glyphIndex);
                  if (o.getPath(),
                  o.points) {
                      let t;
                      if (void 0 === r.matchedPoints)
                          t = ge(o.points, r);
                      else {
                          if (r.matchedPoints[0] > e.points.length - 1 || r.matchedPoints[1] > o.points.length - 1)
                              throw Error("Matched points out of range in " + e.name);
                          const n = e.points[r.matchedPoints[0]];
                          let i = o.points[r.matchedPoints[1]];
                          const s = {
                              xScale: r.xScale,
                              scale01: r.scale01,
                              scale10: r.scale10,
                              yScale: r.yScale,
                              dx: 0,
                              dy: 0
                          };
                          i = ge([i], s)[0],
                          s.dx = n.x - i.x,
                          s.dy = n.y - i.y,
                          t = ge(o.points, s)
                      }
                      e.points = e.points.concat(t)
                  }
              }
          return ve(e.points)
      }
      var xe = {
          getPath: ve,
          parse: function(t, e, n, r) {
              const o = new ot.GlyphSet(r);
              for (let i = 0; i < n.length - 1; i += 1) {
                  const s = n[i];
                  s !== n[i + 1] ? o.push(i, ot.ttfGlyphLoader(r, i, me, t, e + s, be)) : o.push(i, ot.glyphLoader(r, i))
              }
              return o
          }
      };
      let Pe, Se, Ce, we;
      function Ee(t) {
          this.font = t,
          this.getCommands = function(t) {
              return xe.getPath(t).commands
          }
          ,
          this._fpgmState = this._prepState = void 0,
          this._errorState = 0
      }
      function Te(t) {
          return t
      }
      function Oe(t) {
          return Math.sign(t) * Math.round(Math.abs(t))
      }
      function Ie(t) {
          return Math.sign(t) * Math.round(Math.abs(2 * t)) / 2
      }
      function Le(t) {
          return Math.sign(t) * (Math.round(Math.abs(t) + .5) - .5)
      }
      function Ae(t) {
          return Math.sign(t) * Math.ceil(Math.abs(t))
      }
      function _e(t) {
          return Math.sign(t) * Math.floor(Math.abs(t))
      }
      const Re = function(t) {
          const e = this.srPeriod;
          let n = this.srPhase;
          let r = 1;
          return t < 0 && (t = -t,
          r = -1),
          t += this.srThreshold - n,
          t = Math.trunc(t / e) * e,
          (t += n) < 0 ? n * r : t * r
      }
        , Ne = {
          x: 1,
          y: 0,
          axis: "x",
          distance: function(t, e, n, r) {
              return (n ? t.xo : t.x) - (r ? e.xo : e.x)
          },
          interpolate: function(t, e, n, r) {
              let o, i, s, a, l, u, p;
              if (!r || r === this)
                  return o = t.xo - e.xo,
                  i = t.xo - n.xo,
                  l = e.x - e.xo,
                  u = n.x - n.xo,
                  s = Math.abs(o),
                  a = Math.abs(i),
                  p = s + a,
                  0 === p ? void (t.x = t.xo + (l + u) / 2) : void (t.x = t.xo + (l * a + u * s) / p);
              o = r.distance(t, e, !0, !0),
              i = r.distance(t, n, !0, !0),
              l = r.distance(e, e, !1, !0),
              u = r.distance(n, n, !1, !0),
              s = Math.abs(o),
              a = Math.abs(i),
              p = s + a,
              0 !== p ? Ne.setRelative(t, t, (l * a + u * s) / p, r, !0) : Ne.setRelative(t, t, (l + u) / 2, r, !0)
          },
          normalSlope: Number.NEGATIVE_INFINITY,
          setRelative: function(t, e, n, r, o) {
              if (!r || r === this)
                  return void (t.x = (o ? e.xo : e.x) + n);
              const i = o ? e.xo : e.x
                , s = o ? e.yo : e.y
                , a = i + n * r.x
                , l = s + n * r.y;
              t.x = a + (t.y - l) / r.normalSlope
          },
          slope: 0,
          touch: function(t) {
              t.xTouched = !0
          },
          touched: function(t) {
              return t.xTouched
          },
          untouch: function(t) {
              t.xTouched = !1
          }
      }
        , ke = {
          x: 0,
          y: 1,
          axis: "y",
          distance: function(t, e, n, r) {
              return (n ? t.yo : t.y) - (r ? e.yo : e.y)
          },
          interpolate: function(t, e, n, r) {
              let o, i, s, a, l, u, p;
              if (!r || r === this)
                  return o = t.yo - e.yo,
                  i = t.yo - n.yo,
                  l = e.y - e.yo,
                  u = n.y - n.yo,
                  s = Math.abs(o),
                  a = Math.abs(i),
                  p = s + a,
                  0 === p ? void (t.y = t.yo + (l + u) / 2) : void (t.y = t.yo + (l * a + u * s) / p);
              o = r.distance(t, e, !0, !0),
              i = r.distance(t, n, !0, !0),
              l = r.distance(e, e, !1, !0),
              u = r.distance(n, n, !1, !0),
              s = Math.abs(o),
              a = Math.abs(i),
              p = s + a,
              0 !== p ? ke.setRelative(t, t, (l * a + u * s) / p, r, !0) : ke.setRelative(t, t, (l + u) / 2, r, !0)
          },
          normalSlope: 0,
          setRelative: function(t, e, n, r, o) {
              if (!r || r === this)
                  return void (t.y = (o ? e.yo : e.y) + n);
              const i = o ? e.xo : e.x
                , s = o ? e.yo : e.y
                , a = i + n * r.x
                , l = s + n * r.y;
              t.y = l + r.normalSlope * (t.x - a)
          },
          slope: Number.POSITIVE_INFINITY,
          touch: function(t) {
              t.yTouched = !0
          },
          touched: function(t) {
              return t.yTouched
          },
          untouch: function(t) {
              t.yTouched = !1
          }
      };
      function Be(t, e) {
          this.x = t,
          this.y = e,
          this.axis = void 0,
          this.slope = e / t,
          this.normalSlope = -t / e,
          Object.freeze(this)
      }
      function De(t, e) {
          const n = Math.sqrt(t * t + e * e);
          return e /= n,
          1 === (t /= n) && 0 === e ? Ne : 0 === t && 1 === e ? ke : new Be(t,e)
      }
      function Ue(t, e, n, r) {
          this.x = this.xo = Math.round(64 * t) / 64,
          this.y = this.yo = Math.round(64 * e) / 64,
          this.lastPointOfContour = n,
          this.onCurve = r,
          this.prevPointOnContour = void 0,
          this.nextPointOnContour = void 0,
          this.xTouched = !1,
          this.yTouched = !1,
          Object.preventExtensions(this)
      }
      Object.freeze(Ne),
      Object.freeze(ke),
      Be.prototype.distance = function(t, e, n, r) {
          return this.x * Ne.distance(t, e, n, r) + this.y * ke.distance(t, e, n, r)
      }
      ,
      Be.prototype.interpolate = function(t, e, n, r) {
          let o, i, s, a, l, u, p;
          s = r.distance(t, e, !0, !0),
          a = r.distance(t, n, !0, !0),
          o = r.distance(e, e, !1, !0),
          i = r.distance(n, n, !1, !0),
          l = Math.abs(s),
          u = Math.abs(a),
          p = l + u,
          0 !== p ? this.setRelative(t, t, (o * u + i * l) / p, r, !0) : this.setRelative(t, t, (o + i) / 2, r, !0)
      }
      ,
      Be.prototype.setRelative = function(t, e, n, r, o) {
          r = r || this;
          const i = o ? e.xo : e.x
            , s = o ? e.yo : e.y
            , a = i + n * r.x
            , l = s + n * r.y
            , u = r.normalSlope
            , p = this.slope
            , c = t.x
            , h = t.y;
          t.x = (p * c - u * a + l - h) / (p - u),
          t.y = p * (t.x - c) + h
      }
      ,
      Be.prototype.touch = function(t) {
          t.xTouched = !0,
          t.yTouched = !0
      }
      ,
      Ue.prototype.nextTouched = function(t) {
          let e = this.nextPointOnContour;
          for (; !t.touched(e) && e !== this; )
              e = e.nextPointOnContour;
          return e
      }
      ,
      Ue.prototype.prevTouched = function(t) {
          let e = this.prevPointOnContour;
          for (; !t.touched(e) && e !== this; )
              e = e.prevPointOnContour;
          return e
      }
      ;
      const Me = Object.freeze(new Ue(0,0))
        , Xe = {
          cvCutIn: 17 / 16,
          deltaBase: 9,
          deltaShift: .125,
          loop: 1,
          minDis: 1,
          autoFlip: !0
      };
      function Fe(t, e) {
          switch (this.env = t,
          this.stack = [],
          this.prog = e,
          t) {
          case "glyf":
              this.zp0 = this.zp1 = this.zp2 = 1,
              this.rp0 = this.rp1 = this.rp2 = 0;
          case "prep":
              this.fv = this.pv = this.dpv = Ne,
              this.round = Oe
          }
      }
      function Ye(t) {
          const e = t.tZone = new Array(t.gZone.length);
          for (let n = 0; n < e.length; n++)
              e[n] = new Ue(0,0)
      }
      function Ge(t, e) {
          const n = t.prog;
          let r, o = t.ip, i = 1;
          do {
              if (r = n[++o],
              88 === r)
                  i++;
              else if (89 === r)
                  i--;
              else if (64 === r)
                  o += n[o + 1] + 1;
              else if (65 === r)
                  o += 2 * n[o + 1] + 1;
              else if (r >= 176 && r <= 183)
                  o += r - 176 + 1;
              else if (r >= 184 && r <= 191)
                  o += 2 * (r - 184 + 1);
              else if (e && 1 === i && 27 === r)
                  break
          } while (i > 0);
          t.ip = o
      }
      function He(t, e) {
          exports.DEBUG && console.log(e.step, "SVTCA[" + t.axis + "]"),
          e.fv = e.pv = e.dpv = t
      }
      function qe(t, e) {
          exports.DEBUG && console.log(e.step, "SPVTCA[" + t.axis + "]"),
          e.pv = e.dpv = t
      }
      function We(t, e) {
          exports.DEBUG && console.log(e.step, "SFVTCA[" + t.axis + "]"),
          e.fv = t
      }
      function ze(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = n.pop()
            , i = e.z2[r]
            , s = e.z1[o];
          let a, l;
          exports.DEBUG && console.log("SPVTL[" + t + "]", r, o),
          t ? (a = i.y - s.y,
          l = s.x - i.x) : (a = s.x - i.x,
          l = s.y - i.y),
          e.pv = e.dpv = De(a, l)
      }
      function je(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = n.pop()
            , i = e.z2[r]
            , s = e.z1[o];
          let a, l;
          exports.DEBUG && console.log("SFVTL[" + t + "]", r, o),
          t ? (a = i.y - s.y,
          l = s.x - i.x) : (a = s.x - i.x,
          l = s.y - i.y),
          e.fv = De(a, l)
      }
      function Ve(t) {
          exports.DEBUG && console.log(t.step, "POP[]"),
          t.stack.pop()
      }
      function Ze(t, e) {
          const n = e.stack.pop()
            , r = e.z0[n]
            , o = e.fv
            , i = e.pv;
          exports.DEBUG && console.log(e.step, "MDAP[" + t + "]", n);
          let s = i.distance(r, Me);
          t && (s = e.round(s)),
          o.setRelative(r, Me, s, i),
          o.touch(r),
          e.rp0 = e.rp1 = n
      }
      function Je(t, e) {
          const n = e.z2
            , r = n.length - 2;
          let o, i, s;
          exports.DEBUG && console.log(e.step, "IUP[" + t.axis + "]");
          for (let a = 0; a < r; a++)
              o = n[a],
              t.touched(o) || (i = o.prevTouched(t),
              i !== o && (s = o.nextTouched(t),
              i === s && t.setRelative(o, o, t.distance(i, i, !1, !0), t, !0),
              t.interpolate(o, i, s, t)))
      }
      function Ke(t, e) {
          const n = e.stack
            , r = t ? e.rp1 : e.rp2
            , o = (t ? e.z0 : e.z1)[r]
            , i = e.fv
            , s = e.pv;
          let a = e.loop;
          const l = e.z2;
          for (; a--; ) {
              const r = n.pop()
                , u = l[r]
                , p = s.distance(o, o, !1, !0);
              i.setRelative(u, u, p, s),
              i.touch(u),
              exports.DEBUG && console.log(e.step, (e.loop > 1 ? "loop " + (e.loop - a) + ": " : "") + "SHP[" + (t ? "rp1" : "rp2") + "]", r)
          }
          e.loop = 1
      }
      function $e(t, e) {
          const n = e.stack
            , r = t ? e.rp1 : e.rp2
            , o = (t ? e.z0 : e.z1)[r]
            , i = e.fv
            , s = e.pv
            , a = n.pop()
            , l = e.z2[e.contours[a]];
          let u = l;
          exports.DEBUG && console.log(e.step, "SHC[" + t + "]", a);
          const p = s.distance(o, o, !1, !0);
          do {
              u !== o && i.setRelative(u, u, p, s),
              u = u.nextPointOnContour
          } while (u !== l)
      }
      function Qe(t, e) {
          const n = e.stack
            , r = t ? e.rp1 : e.rp2
            , o = (t ? e.z0 : e.z1)[r]
            , i = e.fv
            , s = e.pv
            , a = n.pop();
          let l, u;
          switch (exports.DEBUG && console.log(e.step, "SHZ[" + t + "]", a),
          a) {
          case 0:
              l = e.tZone;
              break;
          case 1:
              l = e.gZone;
              break;
          default:
              throw new Error("Invalid zone")
          }
          const p = s.distance(o, o, !1, !0)
            , c = l.length - 2;
          for (let h = 0; h < c; h++)
              u = l[h],
              i.setRelative(u, u, p, s)
      }
      function tn(t, e) {
          const n = e.stack
            , r = n.pop() / 64
            , o = n.pop()
            , i = e.z1[o]
            , s = e.z0[e.rp0]
            , a = e.fv
            , l = e.pv;
          a.setRelative(i, s, r, l),
          a.touch(i),
          exports.DEBUG && console.log(e.step, "MSIRP[" + t + "]", r, o),
          e.rp1 = e.rp0,
          e.rp2 = o,
          t && (e.rp0 = o)
      }
      function en(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = n.pop()
            , i = e.z0[o]
            , s = e.fv
            , a = e.pv;
          let l = e.cvt[r];
          exports.DEBUG && console.log(e.step, "MIAP[" + t + "]", r, "(", l, ")", o);
          let u = a.distance(i, Me);
          t && (Math.abs(u - l) < e.cvCutIn && (u = l),
          u = e.round(u)),
          s.setRelative(i, Me, u, a),
          0 === e.zp0 && (i.xo = i.x,
          i.yo = i.y),
          s.touch(i),
          e.rp0 = e.rp1 = o
      }
      function nn(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = e.z2[r];
          exports.DEBUG && console.log(e.step, "GC[" + t + "]", r),
          n.push(64 * e.dpv.distance(o, Me, t, !1))
      }
      function rn(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = n.pop()
            , i = e.z1[r]
            , s = e.z0[o]
            , a = e.dpv.distance(s, i, t, t);
          exports.DEBUG && console.log(e.step, "MD[" + t + "]", r, o, "->", a),
          e.stack.push(Math.round(64 * a))
      }
      function on(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = e.fv
            , i = e.pv
            , s = e.ppem
            , a = e.deltaBase + 16 * (t - 1)
            , l = e.deltaShift
            , u = e.z0;
          exports.DEBUG && console.log(e.step, "DELTAP[" + t + "]", r, n);
          for (let p = 0; p < r; p++) {
              const t = n.pop()
                , r = n.pop();
              if (a + ((240 & r) >> 4) !== s)
                  continue;
              let p = (15 & r) - 8;
              p >= 0 && p++,
              exports.DEBUG && console.log(e.step, "DELTAPFIX", t, "by", p * l);
              const c = u[t];
              o.setRelative(c, c, p * l, i)
          }
      }
      function sn(t, e) {
          const n = e.stack
            , r = n.pop();
          exports.DEBUG && console.log(e.step, "ROUND[]"),
          n.push(64 * e.round(r / 64))
      }
      function an(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = e.ppem
            , i = e.deltaBase + 16 * (t - 1)
            , s = e.deltaShift;
          exports.DEBUG && console.log(e.step, "DELTAC[" + t + "]", r, n);
          for (let a = 0; a < r; a++) {
              const t = n.pop()
                , r = n.pop();
              if (i + ((240 & r) >> 4) !== o)
                  continue;
              let a = (15 & r) - 8;
              a >= 0 && a++;
              const l = a * s;
              exports.DEBUG && console.log(e.step, "DELTACFIX", t, "by", l),
              e.cvt[t] += l
          }
      }
      function ln(t, e) {
          const n = e.stack
            , r = n.pop()
            , o = n.pop()
            , i = e.z2[r]
            , s = e.z1[o];
          let a, l;
          exports.DEBUG && console.log(e.step, "SDPVTL[" + t + "]", r, o),
          t ? (a = i.y - s.y,
          l = s.x - i.x) : (a = s.x - i.x,
          l = s.y - i.y),
          e.dpv = De(a, l)
      }
      function un(t, e) {
          const n = e.stack
            , r = e.prog;
          let o = e.ip;
          exports.DEBUG && console.log(e.step, "PUSHB[" + t + "]");
          for (let i = 0; i < t; i++)
              n.push(r[++o]);
          e.ip = o
      }
      function pn(t, e) {
          let n = e.ip;
          const r = e.prog
            , o = e.stack;
          exports.DEBUG && console.log(e.ip, "PUSHW[" + t + "]");
          for (let i = 0; i < t; i++) {
              let t = r[++n] << 8 | r[++n];
              32768 & t && (t = -(1 + (65535 ^ t))),
              o.push(t)
          }
          e.ip = n
      }
      function cn(t, e, n, r, o, i) {
          const s = i.stack
            , a = t && s.pop()
            , l = s.pop()
            , u = i.rp0
            , p = i.z0[u]
            , c = i.z1[l]
            , h = i.minDis
            , f = i.fv
            , d = i.dpv;
          let y, m, g, v;
          m = y = d.distance(c, p, !0, !0),
          g = m >= 0 ? 1 : -1,
          m = Math.abs(m),
          t && (v = i.cvt[a],
          r && Math.abs(m - v) < i.cvCutIn && (m = v)),
          n && m < h && (m = h),
          r && (m = i.round(m)),
          f.setRelative(c, p, g * m, d),
          f.touch(c),
          exports.DEBUG && console.log(i.step, (t ? "MIRP[" : "MDRP[") + (e ? "M" : "m") + (n ? ">" : "_") + (r ? "R" : "_") + (0 === o ? "Gr" : 1 === o ? "Bl" : 2 === o ? "Wh" : "") + "]", t ? a + "(" + i.cvt[a] + "," + v + ")" : "", l, "(d =", y, "->", g * m, ")"),
          i.rp1 = i.rp0,
          i.rp2 = l,
          e && (i.rp0 = l)
      }
      Ee.prototype.exec = function(t, e) {
          if ("number" !== typeof e)
              throw new Error("Point size is not a number!");
          if (this._errorState > 2)
              return;
          const n = this.font;
          let r = this._prepState;
          if (!r || r.ppem !== e) {
              let t = this._fpgmState;
              if (!t) {
                  Fe.prototype = Xe,
                  t = this._fpgmState = new Fe("fpgm",n.tables.fpgm),
                  t.funcs = [],
                  t.font = n,
                  exports.DEBUG && (console.log("---EXEC FPGM---"),
                  t.step = -1);
                  try {
                      Se(t)
                  } catch (o) {
                      return console.log("Hinting error in FPGM:" + o),
                      void (this._errorState = 3)
                  }
              }
              Fe.prototype = t,
              r = this._prepState = new Fe("prep",n.tables.prep),
              r.ppem = e;
              const i = n.tables.cvt;
              if (i) {
                  const t = r.cvt = new Array(i.length)
                    , o = e / n.unitsPerEm;
                  for (let e = 0; e < i.length; e++)
                      t[e] = i[e] * o
              } else
                  r.cvt = [];
              exports.DEBUG && (console.log("---EXEC PREP---"),
              r.step = -1);
              try {
                  Se(r)
              } catch (o) {
                  this._errorState < 2 && console.log("Hinting error in PREP:" + o),
                  this._errorState = 2
              }
          }
          if (!(this._errorState > 1))
              try {
                  return Ce(t, r)
              } catch (o) {
                  return this._errorState < 1 && (console.log("Hinting error:" + o),
                  console.log("Note: further hinting errors are silenced")),
                  void (this._errorState = 1)
              }
      }
      ,
      Ce = function(t, e) {
          const n = e.ppem / e.font.unitsPerEm
            , r = n;
          let o, i, s, a = t.components;
          if (Fe.prototype = e,
          a) {
              const l = e.font;
              i = [],
              o = [];
              for (let t = 0; t < a.length; t++) {
                  const e = a[t]
                    , u = l.glyphs.get(e.glyphIndex);
                  s = new Fe("glyf",u.instructions),
                  exports.DEBUG && (console.log("---EXEC COMP " + t + "---"),
                  s.step = -1),
                  we(u, s, n, r);
                  const p = Math.round(e.dx * n)
                    , c = Math.round(e.dy * r)
                    , h = s.gZone
                    , f = s.contours;
                  for (let t = 0; t < h.length; t++) {
                      const e = h[t];
                      e.xTouched = e.yTouched = !1,
                      e.xo = e.x = e.x + p,
                      e.yo = e.y = e.y + c
                  }
                  const d = i.length;
                  i.push.apply(i, h);
                  for (let t = 0; t < f.length; t++)
                      o.push(f[t] + d)
              }
              t.instructions && !s.inhibitGridFit && (s = new Fe("glyf",t.instructions),
              s.gZone = s.z0 = s.z1 = s.z2 = i,
              s.contours = o,
              i.push(new Ue(0,0), new Ue(Math.round(t.advanceWidth * n),0)),
              exports.DEBUG && (console.log("---EXEC COMPOSITE---"),
              s.step = -1),
              Se(s),
              i.length -= 2)
          } else
              s = new Fe("glyf",t.instructions),
              exports.DEBUG && (console.log("---EXEC GLYPH---"),
              s.step = -1),
              we(t, s, n, r),
              i = s.gZone;
          return i
      }
      ,
      we = function(t, e, n, r) {
          const o = t.points || []
            , i = o.length
            , s = e.gZone = e.z0 = e.z1 = e.z2 = []
            , a = e.contours = [];
          let l, u, p;
          for (let c = 0; c < i; c++)
              l = o[c],
              s[c] = new Ue(l.x * n,l.y * r,l.lastPointOfContour,l.onCurve);
          for (let c = 0; c < i; c++)
              l = s[c],
              u || (u = l,
              a.push(c)),
              l.lastPointOfContour ? (l.nextPointOnContour = u,
              u.prevPointOnContour = l,
              u = void 0) : (p = s[c + 1],
              l.nextPointOnContour = p,
              p.prevPointOnContour = l);
          if (!e.inhibitGridFit) {
              if (exports.DEBUG) {
                  console.log("PROCESSING GLYPH", e.stack);
                  for (let t = 0; t < i; t++)
                      console.log(t, s[t].x, s[t].y)
              }
              if (s.push(new Ue(0,0), new Ue(Math.round(t.advanceWidth * n),0)),
              Se(e),
              s.length -= 2,
              exports.DEBUG) {
                  console.log("FINISHED GLYPH", e.stack);
                  for (let t = 0; t < i; t++)
                      console.log(t, s[t].x, s[t].y)
              }
          }
      }
      ,
      Se = function(t) {
          let e = t.prog;
          if (!e)
              return;
          const n = e.length;
          let r;
          for (t.ip = 0; t.ip < n; t.ip++) {
              if (exports.DEBUG && t.step++,
              r = Pe[e[t.ip]],
              !r)
                  throw new Error("unknown instruction: 0x" + Number(e[t.ip]).toString(16));
              r(t)
          }
      }
      ,
      Pe = [He.bind(void 0, ke), He.bind(void 0, Ne), qe.bind(void 0, ke), qe.bind(void 0, Ne), We.bind(void 0, ke), We.bind(void 0, Ne), ze.bind(void 0, 0), ze.bind(void 0, 1), je.bind(void 0, 0), je.bind(void 0, 1), function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "SPVFS[]", n, r),
          t.pv = t.dpv = De(r, n)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "SPVFS[]", n, r),
          t.fv = De(r, n)
      }
      , function(t) {
          const e = t.stack
            , n = t.pv;
          exports.DEBUG && console.log(t.step, "GPV[]"),
          e.push(16384 * n.x),
          e.push(16384 * n.y)
      }
      , function(t) {
          const e = t.stack
            , n = t.fv;
          exports.DEBUG && console.log(t.step, "GFV[]"),
          e.push(16384 * n.x),
          e.push(16384 * n.y)
      }
      , function(t) {
          t.fv = t.pv,
          exports.DEBUG && console.log(t.step, "SFVTPV[]")
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop()
            , o = e.pop()
            , i = e.pop()
            , s = e.pop()
            , a = t.z0
            , l = t.z1
            , u = a[n]
            , p = a[r]
            , c = l[o]
            , h = l[i]
            , f = t.z2[s];
          exports.DEBUG && console.log("ISECT[], ", n, r, o, i, s);
          const d = u.x
            , y = u.y
            , m = p.x
            , g = p.y
            , v = c.x
            , b = c.y
            , x = h.x
            , P = h.y
            , S = (d - m) * (b - P) - (y - g) * (v - x)
            , C = d * g - y * m
            , w = v * P - b * x;
          f.x = (C * (v - x) - w * (d - m)) / S,
          f.y = (C * (b - P) - w * (y - g)) / S
      }
      , function(t) {
          t.rp0 = t.stack.pop(),
          exports.DEBUG && console.log(t.step, "SRP0[]", t.rp0)
      }
      , function(t) {
          t.rp1 = t.stack.pop(),
          exports.DEBUG && console.log(t.step, "SRP1[]", t.rp1)
      }
      , function(t) {
          t.rp2 = t.stack.pop(),
          exports.DEBUG && console.log(t.step, "SRP2[]", t.rp2)
      }
      , function(t) {
          const e = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "SZP0[]", e),
          t.zp0 = e,
          e) {
          case 0:
              t.tZone || Ye(t),
              t.z0 = t.tZone;
              break;
          case 1:
              t.z0 = t.gZone;
              break;
          default:
              throw new Error("Invalid zone pointer")
          }
      }
      , function(t) {
          const e = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "SZP1[]", e),
          t.zp1 = e,
          e) {
          case 0:
              t.tZone || Ye(t),
              t.z1 = t.tZone;
              break;
          case 1:
              t.z1 = t.gZone;
              break;
          default:
              throw new Error("Invalid zone pointer")
          }
      }
      , function(t) {
          const e = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "SZP2[]", e),
          t.zp2 = e,
          e) {
          case 0:
              t.tZone || Ye(t),
              t.z2 = t.tZone;
              break;
          case 1:
              t.z2 = t.gZone;
              break;
          default:
              throw new Error("Invalid zone pointer")
          }
      }
      , function(t) {
          const e = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "SZPS[]", e),
          t.zp0 = t.zp1 = t.zp2 = e,
          e) {
          case 0:
              t.tZone || Ye(t),
              t.z0 = t.z1 = t.z2 = t.tZone;
              break;
          case 1:
              t.z0 = t.z1 = t.z2 = t.gZone;
              break;
          default:
              throw new Error("Invalid zone pointer")
          }
      }
      , function(t) {
          t.loop = t.stack.pop(),
          exports.DEBUG && console.log(t.step, "SLOOP[]", t.loop)
      }
      , function(t) {
          exports.DEBUG && console.log(t.step, "RTG[]"),
          t.round = Oe
      }
      , function(t) {
          exports.DEBUG && console.log(t.step, "RTHG[]"),
          t.round = Le
      }
      , function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "SMD[]", e),
          t.minDis = e / 64
      }
      , function(t) {
          exports.DEBUG && console.log(t.step, "ELSE[]"),
          Ge(t, !1)
      }
      , function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "JMPR[]", e),
          t.ip += e - 1
      }
      , function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "SCVTCI[]", e),
          t.cvCutIn = e / 64
      }
      , void 0, void 0, function(t) {
          const e = t.stack;
          exports.DEBUG && console.log(t.step, "DUP[]"),
          e.push(e[e.length - 1])
      }
      , Ve, function(t) {
          exports.DEBUG && console.log(t.step, "CLEAR[]"),
          t.stack.length = 0
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "SWAP[]"),
          e.push(n),
          e.push(r)
      }
      , function(t) {
          const e = t.stack;
          exports.DEBUG && console.log(t.step, "DEPTH[]"),
          e.push(e.length)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "CINDEX[]", n),
          e.push(e[e.length - n])
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "MINDEX[]", n),
          e.push(e.splice(e.length - n, 1)[0])
      }
      , void 0, void 0, void 0, function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "LOOPCALL[]", n, r);
          const o = t.ip
            , i = t.prog;
          t.prog = t.funcs[n];
          for (let s = 0; s < r; s++)
              Se(t),
              exports.DEBUG && console.log(++t.step, s + 1 < r ? "next loopcall" : "done loopcall", s);
          t.ip = o,
          t.prog = i
      }
      , function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "CALL[]", e);
          const n = t.ip
            , r = t.prog;
          t.prog = t.funcs[e],
          Se(t),
          t.ip = n,
          t.prog = r,
          exports.DEBUG && console.log(++t.step, "returning from", e)
      }
      , function(t) {
          if ("fpgm" !== t.env)
              throw new Error("FDEF not allowed here");
          const e = t.stack
            , n = t.prog;
          let r = t.ip;
          const o = e.pop()
            , i = r;
          for (exports.DEBUG && console.log(t.step, "FDEF[]", o); 45 !== n[++r]; )
              ;
          t.ip = r,
          t.funcs[o] = n.slice(i + 1, r)
      }
      , void 0, Ze.bind(void 0, 0), Ze.bind(void 0, 1), Je.bind(void 0, ke), Je.bind(void 0, Ne), Ke.bind(void 0, 0), Ke.bind(void 0, 1), $e.bind(void 0, 0), $e.bind(void 0, 1), Qe.bind(void 0, 0), Qe.bind(void 0, 1), function(t) {
          const e = t.stack;
          let n = t.loop;
          const r = t.fv
            , o = e.pop() / 64
            , i = t.z2;
          for (; n--; ) {
              const s = e.pop()
                , a = i[s];
              exports.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - n) + ": " : "") + "SHPIX[]", s, o),
              r.setRelative(a, a, o),
              r.touch(a)
          }
          t.loop = 1
      }
      , function(t) {
          const e = t.stack
            , n = t.rp1
            , r = t.rp2;
          let o = t.loop;
          const i = t.z0[n]
            , s = t.z1[r]
            , a = t.fv
            , l = t.dpv
            , u = t.z2;
          for (; o--; ) {
              const p = e.pop()
                , c = u[p];
              exports.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - o) + ": " : "") + "IP[]", p, n, "<->", r),
              a.interpolate(c, i, s, l),
              a.touch(c)
          }
          t.loop = 1
      }
      , tn.bind(void 0, 0), tn.bind(void 0, 1), function(t) {
          const e = t.stack
            , n = t.rp0
            , r = t.z0[n];
          let o = t.loop;
          const i = t.fv
            , s = t.pv
            , a = t.z1;
          for (; o--; ) {
              const n = e.pop()
                , l = a[n];
              exports.DEBUG && console.log(t.step, (t.loop > 1 ? "loop " + (t.loop - o) + ": " : "") + "ALIGNRP[]", n),
              i.setRelative(l, r, 0, s),
              i.touch(l)
          }
          t.loop = 1
      }
      , function(t) {
          exports.DEBUG && console.log(t.step, "RTDG[]"),
          t.round = Ie
      }
      , en.bind(void 0, 0), en.bind(void 0, 1), function(t) {
          const e = t.prog;
          let n = t.ip;
          const r = t.stack
            , o = e[++n];
          exports.DEBUG && console.log(t.step, "NPUSHB[]", o);
          for (let i = 0; i < o; i++)
              r.push(e[++n]);
          t.ip = n
      }
      , function(t) {
          let e = t.ip;
          const n = t.prog
            , r = t.stack
            , o = n[++e];
          exports.DEBUG && console.log(t.step, "NPUSHW[]", o);
          for (let i = 0; i < o; i++) {
              let t = n[++e] << 8 | n[++e];
              32768 & t && (t = -(1 + (65535 ^ t))),
              r.push(t)
          }
          t.ip = e
      }
      , function(t) {
          const e = t.stack;
          let n = t.store;
          n || (n = t.store = []);
          const r = e.pop()
            , o = e.pop();
          exports.DEBUG && console.log(t.step, "WS", r, o),
          n[o] = r
      }
      , function(t) {
          const e = t.stack
            , n = t.store
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "RS", r);
          const o = n && n[r] || 0;
          e.push(o)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "WCVTP", n, r),
          t.cvt[r] = n / 64
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "RCVT", n),
          e.push(64 * t.cvt[n])
      }
      , nn.bind(void 0, 0), nn.bind(void 0, 1), void 0, rn.bind(void 0, 0), rn.bind(void 0, 1), function(t) {
          exports.DEBUG && console.log(t.step, "MPPEM[]"),
          t.stack.push(t.ppem)
      }
      , void 0, function(t) {
          exports.DEBUG && console.log(t.step, "FLIPON[]"),
          t.autoFlip = !0
      }
      , void 0, void 0, function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "LT[]", n, r),
          e.push(r < n ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "LTEQ[]", n, r),
          e.push(r <= n ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "GT[]", n, r),
          e.push(r > n ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "GTEQ[]", n, r),
          e.push(r >= n ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "EQ[]", n, r),
          e.push(n === r ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "NEQ[]", n, r),
          e.push(n !== r ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "ODD[]", n),
          e.push(Math.trunc(n) % 2 ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "EVEN[]", n),
          e.push(Math.trunc(n) % 2 ? 0 : 1)
      }
      , function(t) {
          let e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "IF[]", e),
          e || (Ge(t, !0),
          exports.DEBUG && console.log(t.step, "EIF[]"))
      }
      , function(t) {
          exports.DEBUG && console.log(t.step, "EIF[]")
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "AND[]", n, r),
          e.push(n && r ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "OR[]", n, r),
          e.push(n || r ? 1 : 0)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "NOT[]", n),
          e.push(n ? 0 : 1)
      }
      , on.bind(void 0, 1), function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "SDB[]", e),
          t.deltaBase = e
      }
      , function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "SDS[]", e),
          t.deltaShift = Math.pow(.5, e)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "ADD[]", n, r),
          e.push(r + n)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "SUB[]", n, r),
          e.push(r - n)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "DIV[]", n, r),
          e.push(64 * r / n)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "MUL[]", n, r),
          e.push(r * n / 64)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "ABS[]", n),
          e.push(Math.abs(n))
      }
      , function(t) {
          const e = t.stack;
          let n = e.pop();
          exports.DEBUG && console.log(t.step, "NEG[]", n),
          e.push(-n)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "FLOOR[]", n),
          e.push(64 * Math.floor(n / 64))
      }
      , function(t) {
          const e = t.stack
            , n = e.pop();
          exports.DEBUG && console.log(t.step, "CEILING[]", n),
          e.push(64 * Math.ceil(n / 64))
      }
      , sn.bind(void 0, 0), sn.bind(void 0, 1), sn.bind(void 0, 2), sn.bind(void 0, 3), void 0, void 0, void 0, void 0, function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "WCVTF[]", n, r),
          t.cvt[r] = n * t.ppem / t.font.unitsPerEm
      }
      , on.bind(void 0, 2), on.bind(void 0, 3), an.bind(void 0, 1), an.bind(void 0, 2), an.bind(void 0, 3), function(t) {
          let e, n = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "SROUND[]", n),
          t.round = Re,
          192 & n) {
          case 0:
              e = .5;
              break;
          case 64:
              e = 1;
              break;
          case 128:
              e = 2;
              break;
          default:
              throw new Error("invalid SROUND value")
          }
          switch (t.srPeriod = e,
          48 & n) {
          case 0:
              t.srPhase = 0;
              break;
          case 16:
              t.srPhase = .25 * e;
              break;
          case 32:
              t.srPhase = .5 * e;
              break;
          case 48:
              t.srPhase = .75 * e;
              break;
          default:
              throw new Error("invalid SROUND value")
          }
          n &= 15,
          t.srThreshold = 0 === n ? 0 : (n / 8 - .5) * e
      }
      , function(t) {
          let e, n = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "S45ROUND[]", n),
          t.round = Re,
          192 & n) {
          case 0:
              e = Math.sqrt(2) / 2;
              break;
          case 64:
              e = Math.sqrt(2);
              break;
          case 128:
              e = 2 * Math.sqrt(2);
              break;
          default:
              throw new Error("invalid S45ROUND value")
          }
          switch (t.srPeriod = e,
          48 & n) {
          case 0:
              t.srPhase = 0;
              break;
          case 16:
              t.srPhase = .25 * e;
              break;
          case 32:
              t.srPhase = .5 * e;
              break;
          case 48:
              t.srPhase = .75 * e;
              break;
          default:
              throw new Error("invalid S45ROUND value")
          }
          n &= 15,
          t.srThreshold = 0 === n ? 0 : (n / 8 - .5) * e
      }
      , void 0, void 0, function(t) {
          exports.DEBUG && console.log(t.step, "ROFF[]"),
          t.round = Te
      }
      , void 0, function(t) {
          exports.DEBUG && console.log(t.step, "RUTG[]"),
          t.round = Ae
      }
      , function(t) {
          exports.DEBUG && console.log(t.step, "RDTG[]"),
          t.round = _e
      }
      , Ve, Ve, void 0, void 0, void 0, void 0, void 0, function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "SCANCTRL[]", e)
      }
      , ln.bind(void 0, 0), ln.bind(void 0, 1), function(t) {
          const e = t.stack
            , n = e.pop();
          let r = 0;
          exports.DEBUG && console.log(t.step, "GETINFO[]", n),
          1 & n && (r = 35),
          32 & n && (r |= 4096),
          e.push(r)
      }
      , void 0, function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop()
            , o = e.pop();
          exports.DEBUG && console.log(t.step, "ROLL[]"),
          e.push(r),
          e.push(n),
          e.push(o)
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "MAX[]", n, r),
          e.push(Math.max(r, n))
      }
      , function(t) {
          const e = t.stack
            , n = e.pop()
            , r = e.pop();
          exports.DEBUG && console.log(t.step, "MIN[]", n, r),
          e.push(Math.min(r, n))
      }
      , function(t) {
          const e = t.stack.pop();
          exports.DEBUG && console.log(t.step, "SCANTYPE[]", e)
      }
      , function(t) {
          const e = t.stack.pop();
          let n = t.stack.pop();
          switch (exports.DEBUG && console.log(t.step, "INSTCTRL[]", e, n),
          e) {
          case 1:
              return void (t.inhibitGridFit = !!n);
          case 2:
              return void (t.ignoreCvt = !!n);
          default:
              throw new Error("invalid INSTCTRL[] selector")
          }
      }
      , void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, un.bind(void 0, 1), un.bind(void 0, 2), un.bind(void 0, 3), un.bind(void 0, 4), un.bind(void 0, 5), un.bind(void 0, 6), un.bind(void 0, 7), un.bind(void 0, 8), pn.bind(void 0, 1), pn.bind(void 0, 2), pn.bind(void 0, 3), pn.bind(void 0, 4), pn.bind(void 0, 5), pn.bind(void 0, 6), pn.bind(void 0, 7), pn.bind(void 0, 8), cn.bind(void 0, 0, 0, 0, 0, 0), cn.bind(void 0, 0, 0, 0, 0, 1), cn.bind(void 0, 0, 0, 0, 0, 2), cn.bind(void 0, 0, 0, 0, 0, 3), cn.bind(void 0, 0, 0, 0, 1, 0), cn.bind(void 0, 0, 0, 0, 1, 1), cn.bind(void 0, 0, 0, 0, 1, 2), cn.bind(void 0, 0, 0, 0, 1, 3), cn.bind(void 0, 0, 0, 1, 0, 0), cn.bind(void 0, 0, 0, 1, 0, 1), cn.bind(void 0, 0, 0, 1, 0, 2), cn.bind(void 0, 0, 0, 1, 0, 3), cn.bind(void 0, 0, 0, 1, 1, 0), cn.bind(void 0, 0, 0, 1, 1, 1), cn.bind(void 0, 0, 0, 1, 1, 2), cn.bind(void 0, 0, 0, 1, 1, 3), cn.bind(void 0, 0, 1, 0, 0, 0), cn.bind(void 0, 0, 1, 0, 0, 1), cn.bind(void 0, 0, 1, 0, 0, 2), cn.bind(void 0, 0, 1, 0, 0, 3), cn.bind(void 0, 0, 1, 0, 1, 0), cn.bind(void 0, 0, 1, 0, 1, 1), cn.bind(void 0, 0, 1, 0, 1, 2), cn.bind(void 0, 0, 1, 0, 1, 3), cn.bind(void 0, 0, 1, 1, 0, 0), cn.bind(void 0, 0, 1, 1, 0, 1), cn.bind(void 0, 0, 1, 1, 0, 2), cn.bind(void 0, 0, 1, 1, 0, 3), cn.bind(void 0, 0, 1, 1, 1, 0), cn.bind(void 0, 0, 1, 1, 1, 1), cn.bind(void 0, 0, 1, 1, 1, 2), cn.bind(void 0, 0, 1, 1, 1, 3), cn.bind(void 0, 1, 0, 0, 0, 0), cn.bind(void 0, 1, 0, 0, 0, 1), cn.bind(void 0, 1, 0, 0, 0, 2), cn.bind(void 0, 1, 0, 0, 0, 3), cn.bind(void 0, 1, 0, 0, 1, 0), cn.bind(void 0, 1, 0, 0, 1, 1), cn.bind(void 0, 1, 0, 0, 1, 2), cn.bind(void 0, 1, 0, 0, 1, 3), cn.bind(void 0, 1, 0, 1, 0, 0), cn.bind(void 0, 1, 0, 1, 0, 1), cn.bind(void 0, 1, 0, 1, 0, 2), cn.bind(void 0, 1, 0, 1, 0, 3), cn.bind(void 0, 1, 0, 1, 1, 0), cn.bind(void 0, 1, 0, 1, 1, 1), cn.bind(void 0, 1, 0, 1, 1, 2), cn.bind(void 0, 1, 0, 1, 1, 3), cn.bind(void 0, 1, 1, 0, 0, 0), cn.bind(void 0, 1, 1, 0, 0, 1), cn.bind(void 0, 1, 1, 0, 0, 2), cn.bind(void 0, 1, 1, 0, 0, 3), cn.bind(void 0, 1, 1, 0, 1, 0), cn.bind(void 0, 1, 1, 0, 1, 1), cn.bind(void 0, 1, 1, 0, 1, 2), cn.bind(void 0, 1, 1, 0, 1, 3), cn.bind(void 0, 1, 1, 1, 0, 0), cn.bind(void 0, 1, 1, 1, 0, 1), cn.bind(void 0, 1, 1, 1, 0, 2), cn.bind(void 0, 1, 1, 1, 0, 3), cn.bind(void 0, 1, 1, 1, 1, 0), cn.bind(void 0, 1, 1, 1, 1, 1), cn.bind(void 0, 1, 1, 1, 1, 2), cn.bind(void 0, 1, 1, 1, 1, 3)];
      var hn = Ee;
      const fn = Array.from || (t=>t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || []);
      function dn(t) {
          (t = t || {}).empty || (Object(de.b)(t.familyName, "When creating a new Font object, familyName is required."),
          Object(de.b)(t.styleName, "When creating a new Font object, styleName is required."),
          Object(de.b)(t.unitsPerEm, "When creating a new Font object, unitsPerEm is required."),
          Object(de.b)(t.ascender, "When creating a new Font object, ascender is required."),
          Object(de.b)(t.descender, "When creating a new Font object, descender is required."),
          Object(de.b)(t.descender < 0, "Descender should be negative (e.g. -512)."),
          this.names = {
              fontFamily: {
                  en: t.familyName || " "
              },
              fontSubfamily: {
                  en: t.styleName || " "
              },
              fullName: {
                  en: t.fullName || t.familyName + " " + t.styleName
              },
              postScriptName: {
                  en: t.postScriptName || (t.familyName + t.styleName).replace(/\s/g, "")
              },
              designer: {
                  en: t.designer || " "
              },
              designerURL: {
                  en: t.designerURL || " "
              },
              manufacturer: {
                  en: t.manufacturer || " "
              },
              manufacturerURL: {
                  en: t.manufacturerURL || " "
              },
              license: {
                  en: t.license || " "
              },
              licenseURL: {
                  en: t.licenseURL || " "
              },
              version: {
                  en: t.version || "Version 0.1"
              },
              description: {
                  en: t.description || " "
              },
              copyright: {
                  en: t.copyright || " "
              },
              trademark: {
                  en: t.trademark || " "
              }
          },
          this.unitsPerEm = t.unitsPerEm || 1e3,
          this.ascender = t.ascender,
          this.descender = t.descender,
          this.createdTimestamp = t.createdTimestamp,
          this.tables = {
              os2: {
                  usWeightClass: t.weightClass || this.usWeightClasses.MEDIUM,
                  usWidthClass: t.widthClass || this.usWidthClasses.MEDIUM,
                  fsSelection: t.fsSelection || this.fsSelectionValues.REGULAR
              }
          }),
          this.supported = !0,
          this.glyphs = new ot.GlyphSet(this,t.glyphs || []),
          this.encoding = new Z(this),
          this.position = new ue(this),
          this.substitution = new fe(this),
          this.tables = this.tables || {},
          Object.defineProperty(this, "hinting", {
              get: function() {
                  return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? this._hinting = new hn(this) : void 0
              }
          })
      }
      dn.prototype.hasChar = function(t) {
          return null !== this.encoding.charToGlyphIndex(t)
      }
      ,
      dn.prototype.charToGlyphIndex = function(t) {
          return this.encoding.charToGlyphIndex(t)
      }
      ,
      dn.prototype.charToGlyph = function(t) {
          const e = this.charToGlyphIndex(t);
          let n = this.glyphs.get(e);
          return n || (n = this.glyphs.get(0)),
          n
      }
      ,
      dn.prototype.stringToGlyphs = function(t, e) {
          e = e || this.defaultRenderOptions;
          const n = fn(t)
            , r = [];
          for (let a = 0; a < n.length; a += 1) {
              const t = n[a];
              r.push(this.charToGlyphIndex(t))
          }
          let o = r.length;
          if (e.features) {
              const t = e.script || this.substitution.getDefaultScriptName();
              let n = [];
              e.features.liga && (n = n.concat(this.substitution.getFeature("liga", t, e.language))),
              e.features.rlig && (n = n.concat(this.substitution.getFeature("rlig", t, e.language)));
              for (let e = 0; e < o; e += 1)
                  for (let t = 0; t < n.length; t++) {
                      const i = n[t]
                        , s = i.sub
                        , a = s.length;
                      let l = 0;
                      for (; l < a && s[l] === r[e + l]; )
                          l++;
                      l === a && (r.splice(e, a, i.by),
                      o = o - a + 1)
                  }
          }
          const i = new Array(o)
            , s = this.glyphs.get(0);
          for (let a = 0; a < o; a += 1)
              i[a] = this.glyphs.get(r[a]) || s;
          return i
      }
      ,
      dn.prototype.nameToGlyphIndex = function(t) {
          return this.glyphNames.nameToGlyphIndex(t)
      }
      ,
      dn.prototype.nameToGlyph = function(t) {
          const e = this.nameToGlyphIndex(t);
          let n = this.glyphs.get(e);
          return n || (n = this.glyphs.get(0)),
          n
      }
      ,
      dn.prototype.glyphIndexToName = function(t) {
          return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(t) : ""
      }
      ,
      dn.prototype.getKerningValue = function(t, e) {
          t = t.index || t,
          e = e.index || e;
          const n = this.position.defaultKerningTables;
          return n ? this.position.getKerningValue(n, t, e) : this.kerningPairs[t + "," + e] || 0
      }
      ,
      dn.prototype.defaultRenderOptions = {
          kerning: !0,
          features: {
              liga: !0,
              rlig: !0
          }
      },
      dn.prototype.forEachGlyph = function(t, e, n, r, o, i) {
          e = void 0 !== e ? e : 0,
          n = void 0 !== n ? n : 0,
          r = void 0 !== r ? r : 72,
          o = o || this.defaultRenderOptions;
          const s = 1 / this.unitsPerEm * r
            , a = this.stringToGlyphs(t, o);
          let l;
          if (o.kerning) {
              const t = o.script || this.position.getDefaultScriptName();
              l = this.position.getKerningTables(t, o.language)
          }
          for (let u = 0; u < a.length; u += 1) {
              const t = a[u];
              if (i.call(this, t, e, n, r, o),
              t.advanceWidth && (e += t.advanceWidth * s),
              o.kerning && u < a.length - 1) {
                  e += (l ? this.position.getKerningValue(l, t.index, a[u + 1].index) : this.getKerningValue(t, a[u + 1])) * s
              }
              o.letterSpacing ? e += o.letterSpacing * r : o.tracking && (e += o.tracking / 1e3 * r)
          }
          return e
      }
      ,
      dn.prototype.getPath = function(t, e, n, r, o) {
          const i = new u;
          return this.forEachGlyph(t, e, n, r, o, (function(t, e, n, r) {
              const s = t.getPath(e, n, r, o, this);
              i.extend(s)
          }
          )),
          i
      }
      ,
      dn.prototype.getPaths = function(t, e, n, r, o) {
          const i = [];
          return this.forEachGlyph(t, e, n, r, o, (function(t, e, n, r) {
              const s = t.getPath(e, n, r, o, this);
              i.push(s)
          }
          )),
          i
      }
      ,
      dn.prototype.getAdvanceWidth = function(t, e, n) {
          return this.forEachGlyph(t, 0, 0, e, n, (function() {}
          ))
      }
      ,
      dn.prototype.draw = function(t, e, n, r, o, i) {
          this.getPath(e, n, r, o, i).draw(t)
      }
      ,
      dn.prototype.drawPoints = function(t, e, n, r, o, i) {
          this.forEachGlyph(e, n, r, o, i, (function(e, n, r, o) {
              e.drawPoints(t, n, r, o)
          }
          ))
      }
      ,
      dn.prototype.drawMetrics = function(t, e, n, r, o, i) {
          this.forEachGlyph(e, n, r, o, i, (function(e, n, r, o) {
              e.drawMetrics(t, n, r, o)
          }
          ))
      }
      ,
      dn.prototype.getEnglishName = function(t) {
          const e = this.names[t];
          if (e)
              return e.en
      }
      ,
      dn.prototype.validate = function() {
          const t = []
            , e = this;
          function n(e, n) {
              e || t.push(n)
          }
          function r(t) {
              const r = e.getEnglishName(t);
              n(r && r.trim().length > 0, "No English " + t + " specified.")
          }
          r("fontFamily"),
          r("weightName"),
          r("manufacturer"),
          r("copyright"),
          r("version"),
          n(this.unitsPerEm > 0, "No unitsPerEm specified.")
      }
      ,
      dn.prototype.toTables = function() {
          return ne.fontToTable(this)
      }
      ,
      dn.prototype.toBuffer = function() {
          return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),
          this.toArrayBuffer()
      }
      ,
      dn.prototype.toArrayBuffer = function() {
          const t = this.toTables().encode()
            , e = new ArrayBuffer(t.length)
            , n = new Uint8Array(e);
          for (let r = 0; r < t.length; r++)
              n[r] = t[r];
          return e
      }
      ,
      dn.prototype.download = function(t) {
          const e = this.getEnglishName("fontFamily")
            , r = this.getEnglishName("fontSubfamily");
          t = t || e.replace(/\s/g, "") + "-" + r + ".otf";
          const o = this.toArrayBuffer();
          if (Object(de.c)())
              window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem,
              window.requestFileSystem(window.TEMPORARY, o.byteLength, (function(e) {
                  e.root.getFile(t, {
                      create: !0
                  }, (function(t) {
                      t.createWriter((function(e) {
                          const n = new DataView(o)
                            , r = new Blob([n],{
                              type: "font/opentype"
                          });
                          e.write(r),
                          e.addEventListener("writeend", (function() {
                              location.href = t.toURL()
                          }
                          ), !1)
                      }
                      ))
                  }
                  ))
              }
              ), (function(t) {
                  throw new Error(t.name + ": " + t.message)
              }
              ));
          else {
              const e = n(360)
                , r = Object(de.a)(o);
              e.writeFileSync(t, r)
          }
      }
      ,
      dn.prototype.fsSelectionValues = {
          ITALIC: 1,
          UNDERSCORE: 2,
          NEGATIVE: 4,
          OUTLINED: 8,
          STRIKEOUT: 16,
          BOLD: 32,
          REGULAR: 64,
          USER_TYPO_METRICS: 128,
          WWS: 256,
          OBLIQUE: 512
      },
      dn.prototype.usWidthClasses = {
          ULTRA_CONDENSED: 1,
          EXTRA_CONDENSED: 2,
          CONDENSED: 3,
          SEMI_CONDENSED: 4,
          MEDIUM: 5,
          SEMI_EXPANDED: 6,
          EXPANDED: 7,
          EXTRA_EXPANDED: 8,
          ULTRA_EXPANDED: 9
      },
      dn.prototype.usWeightClasses = {
          THIN: 100,
          EXTRA_LIGHT: 200,
          LIGHT: 300,
          NORMAL: 400,
          MEDIUM: 500,
          SEMI_BOLD: 600,
          BOLD: 700,
          EXTRA_BOLD: 800,
          BLACK: 900
      };
      var yn = dn;
      function mn(t, e) {
          const n = JSON.stringify(t);
          let r = 256;
          for (let o in e) {
              let t = parseInt(o);
              if (t && !(t < 256)) {
                  if (JSON.stringify(e[o]) === n)
                      return t;
                  r <= t && (r = t + 1)
              }
          }
          return e[r] = t,
          r
      }
      function gn(t, e, n) {
          const r = mn(e.name, n);
          return [{
              name: "tag_" + t,
              type: "TAG",
              value: e.tag
          }, {
              name: "minValue_" + t,
              type: "FIXED",
              value: e.minValue << 16
          }, {
              name: "defaultValue_" + t,
              type: "FIXED",
              value: e.defaultValue << 16
          }, {
              name: "maxValue_" + t,
              type: "FIXED",
              value: e.maxValue << 16
          }, {
              name: "flags_" + t,
              type: "USHORT",
              value: 0
          }, {
              name: "nameID_" + t,
              type: "USHORT",
              value: r
          }]
      }
      function vn(t, e, n) {
          const r = {}
            , o = new G.Parser(t,e);
          return r.tag = o.parseTag(),
          r.minValue = o.parseFixed(),
          r.defaultValue = o.parseFixed(),
          r.maxValue = o.parseFixed(),
          o.skip("uShort", 1),
          r.name = n[o.parseUShort()] || {},
          r
      }
      function bn(t, e, n, r) {
          const o = [{
              name: "nameID_" + t,
              type: "USHORT",
              value: mn(e.name, r)
          }, {
              name: "flags_" + t,
              type: "USHORT",
              value: 0
          }];
          for (let i = 0; i < n.length; ++i) {
              const r = n[i].tag;
              o.push({
                  name: "axis_" + t + " " + r,
                  type: "FIXED",
                  value: e.coordinates[r] << 16
              })
          }
          return o
      }
      function xn(t, e, n, r) {
          const o = {}
            , i = new G.Parser(t,e);
          o.name = r[i.parseUShort()] || {},
          i.skip("uShort", 1),
          o.coordinates = {};
          for (let s = 0; s < n.length; ++s)
              o.coordinates[n[s].tag] = i.parseFixed();
          return o
      }
      var Pn = {
          make: function(t, e) {
              const n = new k.Table("fvar",[{
                  name: "version",
                  type: "ULONG",
                  value: 65536
              }, {
                  name: "offsetToData",
                  type: "USHORT",
                  value: 0
              }, {
                  name: "countSizePairs",
                  type: "USHORT",
                  value: 2
              }, {
                  name: "axisCount",
                  type: "USHORT",
                  value: t.axes.length
              }, {
                  name: "axisSize",
                  type: "USHORT",
                  value: 20
              }, {
                  name: "instanceCount",
                  type: "USHORT",
                  value: t.instances.length
              }, {
                  name: "instanceSize",
                  type: "USHORT",
                  value: 4 + 4 * t.axes.length
              }]);
              n.offsetToData = n.sizeOf();
              for (let r = 0; r < t.axes.length; r++)
                  n.fields = n.fields.concat(gn(r, t.axes[r], e));
              for (let r = 0; r < t.instances.length; r++)
                  n.fields = n.fields.concat(bn(r, t.instances[r], t.axes, e));
              return n
          },
          parse: function(t, e, n) {
              const r = new G.Parser(t,e)
                , o = r.parseULong();
              h.argument(65536 === o, "Unsupported fvar table version.");
              const i = r.parseOffset16();
              r.skip("uShort", 1);
              const s = r.parseUShort()
                , a = r.parseUShort()
                , l = r.parseUShort()
                , u = r.parseUShort()
                , p = [];
              for (let h = 0; h < s; h++)
                  p.push(vn(t, e + i + h * a, n));
              const c = []
                , f = e + i + s * a;
              for (let h = 0; h < l; h++)
                  c.push(xn(t, f + h * u, p, n));
              return {
                  axes: p,
                  instances: c
              }
          }
      };
      const Sn = new Array(10);
      Sn[1] = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort();
          return 1 === e ? {
              posFormat: 1,
              coverage: this.parsePointer(F.coverage),
              value: this.parseValueRecord()
          } : 2 === e ? {
              posFormat: 2,
              coverage: this.parsePointer(F.coverage),
              values: this.parseValueRecordList()
          } : void h.assert(!1, "0x" + t.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.")
      }
      ,
      Sn[2] = function() {
          const t = this.offset + this.relativeOffset
            , e = this.parseUShort();
          h.assert(1 === e || 2 === e, "0x" + t.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
          const n = this.parsePointer(F.coverage)
            , r = this.parseUShort()
            , o = this.parseUShort();
          if (1 === e)
              return {
                  posFormat: e,
                  coverage: n,
                  valueFormat1: r,
                  valueFormat2: o,
                  pairSets: this.parseList(F.pointer(F.list((function() {
                      return {
                          secondGlyph: this.parseUShort(),
                          value1: this.parseValueRecord(r),
                          value2: this.parseValueRecord(o)
                      }
                  }
                  ))))
              };
          if (2 === e) {
              const t = this.parsePointer(F.classDef)
                , i = this.parsePointer(F.classDef)
                , s = this.parseUShort()
                , a = this.parseUShort();
              return {
                  posFormat: e,
                  coverage: n,
                  valueFormat1: r,
                  valueFormat2: o,
                  classDef1: t,
                  classDef2: i,
                  class1Count: s,
                  class2Count: a,
                  classRecords: this.parseList(s, F.list(a, (function() {
                      return {
                          value1: this.parseValueRecord(r),
                          value2: this.parseValueRecord(o)
                      }
                  }
                  )))
              }
          }
      }
      ,
      Sn[3] = function() {
          return {
              error: "GPOS Lookup 3 not supported"
          }
      }
      ,
      Sn[4] = function() {
          return {
              error: "GPOS Lookup 4 not supported"
          }
      }
      ,
      Sn[5] = function() {
          return {
              error: "GPOS Lookup 5 not supported"
          }
      }
      ,
      Sn[6] = function() {
          return {
              error: "GPOS Lookup 6 not supported"
          }
      }
      ,
      Sn[7] = function() {
          return {
              error: "GPOS Lookup 7 not supported"
          }
      }
      ,
      Sn[8] = function() {
          return {
              error: "GPOS Lookup 8 not supported"
          }
      }
      ,
      Sn[9] = function() {
          return {
              error: "GPOS Lookup 9 not supported"
          }
      }
      ;
      const Cn = new Array(10);
      var wn = {
          parse: function(t, e) {
              const n = new F(t,e = e || 0)
                , r = n.parseVersion(1);
              return h.argument(1 === r || 1.1 === r, "Unsupported GPOS table version " + r),
              1 === r ? {
                  version: r,
                  scripts: n.parseScriptList(),
                  features: n.parseFeatureList(),
                  lookups: n.parseLookupList(Sn)
              } : {
                  version: r,
                  scripts: n.parseScriptList(),
                  features: n.parseFeatureList(),
                  lookups: n.parseLookupList(Sn),
                  variations: n.parseFeatureVariationsList()
              }
          },
          make: function(t) {
              return new k.Table("GPOS",[{
                  name: "version",
                  type: "ULONG",
                  value: 65536
              }, {
                  name: "scripts",
                  type: "TABLE",
                  value: new k.ScriptList(t.scripts)
              }, {
                  name: "features",
                  type: "TABLE",
                  value: new k.FeatureList(t.features)
              }, {
                  name: "lookups",
                  type: "TABLE",
                  value: new k.LookupList(t.lookups,Cn)
              }])
          }
      };
      var En = {
          parse: function(t, e) {
              const n = new G.Parser(t,e)
                , r = n.parseUShort();
              if (0 === r)
                  return function(t) {
                      const e = {};
                      t.skip("uShort");
                      const n = t.parseUShort();
                      h.argument(0 === n, "Unsupported kern sub-table version."),
                      t.skip("uShort", 2);
                      const r = t.parseUShort();
                      t.skip("uShort", 3);
                      for (let o = 0; o < r; o += 1) {
                          const n = t.parseUShort()
                            , r = t.parseUShort()
                            , o = t.parseShort();
                          e[n + "," + r] = o
                      }
                      return e
                  }(n);
              if (1 === r)
                  return function(t) {
                      const e = {};
                      t.skip("uShort"),
                      t.parseULong() > 1 && console.warn("Only the first kern subtable is supported."),
                      t.skip("uLong");
                      const n = 255 & t.parseUShort();
                      if (t.skip("uShort"),
                      0 === n) {
                          const n = t.parseUShort();
                          t.skip("uShort", 3);
                          for (let r = 0; r < n; r += 1) {
                              const n = t.parseUShort()
                                , r = t.parseUShort()
                                , o = t.parseShort();
                              e[n + "," + r] = o
                          }
                      }
                      return e
                  }(n);
              throw new Error("Unsupported kern table version (" + r + ").")
          }
      };
      var Tn = {
          parse: function(t, e, n, r) {
              const o = new G.Parser(t,e)
                , i = r ? o.parseUShort : o.parseULong
                , s = [];
              for (let a = 0; a < n + 1; a += 1) {
                  let t = i.call(o);
                  r && (t *= 2),
                  s.push(t)
              }
              return s
          }
      };
      function On(t, e) {
          n(360).readFile(t, (function(t, n) {
              if (t)
                  return e(t.message);
              e(null, Object(de.d)(n))
          }
          ))
      }
      function In(t, e) {
          const n = new XMLHttpRequest;
          n.open("get", t, !0),
          n.responseType = "arraybuffer",
          n.onload = function() {
              return n.response ? e(null, n.response) : e("Font could not be loaded: " + n.statusText)
          }
          ,
          n.onerror = function() {
              e("Font could not be loaded")
          }
          ,
          n.send()
      }
      function Ln(t, e) {
          const n = [];
          let r = 12;
          for (let o = 0; o < e; o += 1) {
              const e = G.getTag(t, r)
                , o = G.getULong(t, r + 4)
                , i = G.getULong(t, r + 8)
                , s = G.getULong(t, r + 12);
              n.push({
                  tag: e,
                  checksum: o,
                  offset: i,
                  length: s,
                  compression: !1
              }),
              r += 16
          }
          return n
      }
      function An(t, e) {
          if ("WOFF" === e.compression) {
              const n = new Uint8Array(t.buffer,e.offset + 2,e.compressedLength - 2)
                , r = new Uint8Array(e.length);
              if (o()(n, r),
              r.byteLength !== e.length)
                  throw new Error("Decompression error: " + e.tag + " decompressed length doesn't match recorded length");
              return {
                  data: new DataView(r.buffer,0),
                  offset: 0
              }
          }
          return {
              data: t,
              offset: e.offset
          }
      }
      function _n(t) {
          let e, n;
          const r = new yn({
              empty: !0
          })
            , o = new DataView(t,0);
          let i, s = [];
          const a = G.getTag(o, 0);
          if (a === String.fromCharCode(0, 1, 0, 0) || "true" === a || "typ1" === a)
              r.outlinesFormat = "truetype",
              i = G.getUShort(o, 4),
              s = Ln(o, i);
          else if ("OTTO" === a)
              r.outlinesFormat = "cff",
              i = G.getUShort(o, 4),
              s = Ln(o, i);
          else {
              if ("wOFF" !== a)
                  throw new Error("Unsupported OpenType signature " + a);
              {
                  const t = G.getTag(o, 4);
                  if (t === String.fromCharCode(0, 1, 0, 0))
                      r.outlinesFormat = "truetype";
                  else {
                      if ("OTTO" !== t)
                          throw new Error("Unsupported OpenType flavor " + a);
                      r.outlinesFormat = "cff"
                  }
                  i = G.getUShort(o, 12),
                  s = function(t, e) {
                      const n = [];
                      let r = 44;
                      for (let o = 0; o < e; o += 1) {
                          const e = G.getTag(t, r)
                            , o = G.getULong(t, r + 4)
                            , i = G.getULong(t, r + 8)
                            , s = G.getULong(t, r + 12);
                          let a;
                          a = i < s && "WOFF",
                          n.push({
                              tag: e,
                              offset: o,
                              compression: a,
                              compressedLength: i,
                              length: s
                          }),
                          r += 20
                      }
                      return n
                  }(o, i)
              }
          }
          let l, u, p, c, h, f, d, y, m, g, v;
          for (let P = 0; P < i; P += 1) {
              const t = s[P];
              let i;
              switch (t.tag) {
              case "cmap":
                  i = An(o, t),
                  r.tables.cmap = q.parse(i.data, i.offset),
                  r.encoding = new J(r.tables.cmap);
                  break;
              case "cvt ":
                  i = An(o, t),
                  v = new G.Parser(i.data,i.offset),
                  r.tables.cvt = v.parseShortList(t.length / 2);
                  break;
              case "fvar":
                  u = t;
                  break;
              case "fpgm":
                  i = An(o, t),
                  v = new G.Parser(i.data,i.offset),
                  r.tables.fpgm = v.parseByteList(t.length);
                  break;
              case "head":
                  i = An(o, t),
                  r.tables.head = wt.parse(i.data, i.offset),
                  r.unitsPerEm = r.tables.head.unitsPerEm,
                  e = r.tables.head.indexToLocFormat;
                  break;
              case "hhea":
                  i = An(o, t),
                  r.tables.hhea = Et.parse(i.data, i.offset),
                  r.ascender = r.tables.hhea.ascender,
                  r.descender = r.tables.hhea.descender,
                  r.numberOfHMetrics = r.tables.hhea.numberOfHMetrics;
                  break;
              case "hmtx":
                  f = t;
                  break;
              case "ltag":
                  i = An(o, t),
                  n = Ot.parse(i.data, i.offset);
                  break;
              case "maxp":
                  i = An(o, t),
                  r.tables.maxp = It.parse(i.data, i.offset),
                  r.numGlyphs = r.tables.maxp.numGlyphs;
                  break;
              case "name":
                  m = t;
                  break;
              case "OS/2":
                  i = An(o, t),
                  r.tables.os2 = Ht.parse(i.data, i.offset);
                  break;
              case "post":
                  i = An(o, t),
                  r.tables.post = qt.parse(i.data, i.offset),
                  r.glyphNames = new $(r.tables.post);
                  break;
              case "prep":
                  i = An(o, t),
                  v = new G.Parser(i.data,i.offset),
                  r.tables.prep = v.parseByteList(t.length);
                  break;
              case "glyf":
                  p = t;
                  break;
              case "loca":
                  y = t;
                  break;
              case "CFF ":
                  l = t;
                  break;
              case "kern":
                  d = t;
                  break;
              case "GPOS":
                  c = t;
                  break;
              case "GSUB":
                  h = t;
                  break;
              case "meta":
                  g = t
              }
          }
          const b = An(o, m);
          if (r.tables.name = Yt.parse(b.data, b.offset, n),
          r.names = r.tables.name,
          p && y) {
              const t = 0 === e
                , n = An(o, y)
                , i = Tn.parse(n.data, n.offset, r.numGlyphs, t)
                , s = An(o, p);
              r.glyphs = xe.parse(s.data, s.offset, i, r)
          } else {
              if (!l)
                  throw new Error("Font doesn't contain TrueType or CFF outlines.");
              {
                  const t = An(o, l);
                  Ct.parse(t.data, t.offset, r)
              }
          }
          const x = An(o, f);
          if (Tt.parse(x.data, x.offset, r.numberOfHMetrics, r.numGlyphs, r.glyphs),
          function(t) {
              let e;
              const n = t.tables.cmap.glyphIndexMap
                , r = Object.keys(n);
              for (let o = 0; o < r.length; o += 1) {
                  const i = r[o]
                    , s = n[i];
                  e = t.glyphs.get(s),
                  e.addUnicode(parseInt(i))
              }
              for (let o = 0; o < t.glyphs.length; o += 1)
                  e = t.glyphs.get(o),
                  t.cffEncoding ? t.isCIDFont ? e.name = "gid" + o : e.name = t.cffEncoding.charset[o] : t.glyphNames.names && (e.name = t.glyphNames.glyphIndexToName(o))
          }(r),
          d) {
              const t = An(o, d);
              r.kerningPairs = En.parse(t.data, t.offset)
          } else
              r.kerningPairs = {};
          if (c) {
              const t = An(o, c);
              r.tables.gpos = wn.parse(t.data, t.offset),
              r.position.init()
          }
          if (h) {
              const t = An(o, h);
              r.tables.gsub = Vt.parse(t.data, t.offset)
          }
          if (u) {
              const t = An(o, u);
              r.tables.fvar = Pn.parse(t.data, t.offset, r.names)
          }
          if (g) {
              const t = An(o, g);
              r.tables.meta = Zt.parse(t.data, t.offset),
              r.metas = r.tables.meta
          }
          return r
      }
      function Rn(t, e) {
          ("undefined" === typeof window ? On : In)(t, (function(t, n) {
              if (t)
                  return e(t);
              let r;
              try {
                  r = _n(n)
              } catch (o) {
                  return e(o, null)
              }
              return e(null, r)
          }
          ))
      }
      function Nn(t) {
          const e = n(360).readFileSync(t);
          return _n(Object(de.d)(e))
      }
  },
  19: function(t, e, n) {
      "use strict";
      (function(t) {
          function r() {
              return "undefined" !== typeof window
          }
          function o(t) {
              const e = new ArrayBuffer(t.length)
                , n = new Uint8Array(e);
              for (let r = 0; r < t.length; ++r)
                  n[r] = t[r];
              return e
          }
          function i(e) {
              const n = new t(e.byteLength)
                , r = new Uint8Array(e);
              for (let t = 0; t < n.length; ++t)
                  n[t] = r[t];
              return n
          }
          function s(t, e) {
              if (!t)
                  throw e
          }
          n.d(e, "c", (function() {
              return r
          }
          )),
          n.d(e, "d", (function() {
              return o
          }
          )),
          n.d(e, "a", (function() {
              return i
          }
          )),
          n.d(e, "b", (function() {
              return s
          }
          ))
      }
      ).call(this, n(30).Buffer)
  },
  30: function(t, e, n) {
      "use strict";
      (function(t) {
          var r = n(37)
            , o = n(38)
            , i = n(39);
          function s() {
              return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
          }
          function a(t, e) {
              if (s() < e)
                  throw new RangeError("Invalid typed array length");
              return l.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = l.prototype : (null === t && (t = new l(e)),
              t.length = e),
              t
          }
          function l(t, e, n) {
              if (!l.TYPED_ARRAY_SUPPORT && !(this instanceof l))
                  return new l(t,e,n);
              if ("number" === typeof t) {
                  if ("string" === typeof e)
                      throw new Error("If encoding is specified then the first argument must be a string");
                  return c(this, t)
              }
              return u(this, t, e, n)
          }
          function u(t, e, n, r) {
              if ("number" === typeof e)
                  throw new TypeError('"value" argument must not be a number');
              return "undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                  if (e.byteLength,
                  n < 0 || e.byteLength < n)
                      throw new RangeError("'offset' is out of bounds");
                  if (e.byteLength < n + (r || 0))
                      throw new RangeError("'length' is out of bounds");
                  e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,n) : new Uint8Array(e,n,r);
                  l.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = l.prototype : t = h(t, e);
                  return t
              }(t, e, n, r) : "string" === typeof e ? function(t, e, n) {
                  "string" === typeof n && "" !== n || (n = "utf8");
                  if (!l.isEncoding(n))
                      throw new TypeError('"encoding" must be a valid string encoding');
                  var r = 0 | d(e, n)
                    , o = (t = a(t, r)).write(e, n);
                  o !== r && (t = t.slice(0, o));
                  return t
              }(t, e, n) : function(t, e) {
                  if (l.isBuffer(e)) {
                      var n = 0 | f(e.length);
                      return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n),
                      t
                  }
                  if (e) {
                      if ("undefined" !== typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length"in e)
                          return "number" !== typeof e.length || (r = e.length) !== r ? a(t, 0) : h(t, e);
                      if ("Buffer" === e.type && i(e.data))
                          return h(t, e.data)
                  }
                  var r;
                  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
              }(t, e)
          }
          function p(t) {
              if ("number" !== typeof t)
                  throw new TypeError('"size" argument must be a number');
              if (t < 0)
                  throw new RangeError('"size" argument must not be negative')
          }
          function c(t, e) {
              if (p(e),
              t = a(t, e < 0 ? 0 : 0 | f(e)),
              !l.TYPED_ARRAY_SUPPORT)
                  for (var n = 0; n < e; ++n)
                      t[n] = 0;
              return t
          }
          function h(t, e) {
              var n = e.length < 0 ? 0 : 0 | f(e.length);
              t = a(t, n);
              for (var r = 0; r < n; r += 1)
                  t[r] = 255 & e[r];
              return t
          }
          function f(t) {
              if (t >= s())
                  throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
              return 0 | t
          }
          function d(t, e) {
              if (l.isBuffer(t))
                  return t.length;
              if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                  return t.byteLength;
              "string" !== typeof t && (t = "" + t);
              var n = t.length;
              if (0 === n)
                  return 0;
              for (var r = !1; ; )
                  switch (e) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                      return n;
                  case "utf8":
                  case "utf-8":
                  case void 0:
                      return Y(t).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return 2 * n;
                  case "hex":
                      return n >>> 1;
                  case "base64":
                      return G(t).length;
                  default:
                      if (r)
                          return Y(t).length;
                      e = ("" + e).toLowerCase(),
                      r = !0
                  }
          }
          function y(t, e, n) {
              var r = !1;
              if ((void 0 === e || e < 0) && (e = 0),
              e > this.length)
                  return "";
              if ((void 0 === n || n > this.length) && (n = this.length),
              n <= 0)
                  return "";
              if ((n >>>= 0) <= (e >>>= 0))
                  return "";
              for (t || (t = "utf8"); ; )
                  switch (t) {
                  case "hex":
                      return A(this, e, n);
                  case "utf8":
                  case "utf-8":
                      return T(this, e, n);
                  case "ascii":
                      return I(this, e, n);
                  case "latin1":
                  case "binary":
                      return L(this, e, n);
                  case "base64":
                      return E(this, e, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return _(this, e, n);
                  default:
                      if (r)
                          throw new TypeError("Unknown encoding: " + t);
                      t = (t + "").toLowerCase(),
                      r = !0
                  }
          }
          function m(t, e, n) {
              var r = t[e];
              t[e] = t[n],
              t[n] = r
          }
          function g(t, e, n, r, o) {
              if (0 === t.length)
                  return -1;
              if ("string" === typeof n ? (r = n,
              n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
              n = +n,
              isNaN(n) && (n = o ? 0 : t.length - 1),
              n < 0 && (n = t.length + n),
              n >= t.length) {
                  if (o)
                      return -1;
                  n = t.length - 1
              } else if (n < 0) {
                  if (!o)
                      return -1;
                  n = 0
              }
              if ("string" === typeof e && (e = l.from(e, r)),
              l.isBuffer(e))
                  return 0 === e.length ? -1 : v(t, e, n, r, o);
              if ("number" === typeof e)
                  return e &= 255,
                  l.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, o);
              throw new TypeError("val must be string, number or Buffer")
          }
          function v(t, e, n, r, o) {
              var i, s = 1, a = t.length, l = e.length;
              if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                  if (t.length < 2 || e.length < 2)
                      return -1;
                  s = 2,
                  a /= 2,
                  l /= 2,
                  n /= 2
              }
              function u(t, e) {
                  return 1 === s ? t[e] : t.readUInt16BE(e * s)
              }
              if (o) {
                  var p = -1;
                  for (i = n; i < a; i++)
                      if (u(t, i) === u(e, -1 === p ? 0 : i - p)) {
                          if (-1 === p && (p = i),
                          i - p + 1 === l)
                              return p * s
                      } else
                          -1 !== p && (i -= i - p),
                          p = -1
              } else
                  for (n + l > a && (n = a - l),
                  i = n; i >= 0; i--) {
                      for (var c = !0, h = 0; h < l; h++)
                          if (u(t, i + h) !== u(e, h)) {
                              c = !1;
                              break
                          }
                      if (c)
                          return i
                  }
              return -1
          }
          function b(t, e, n, r) {
              n = Number(n) || 0;
              var o = t.length - n;
              r ? (r = Number(r)) > o && (r = o) : r = o;
              var i = e.length;
              if (i % 2 !== 0)
                  throw new TypeError("Invalid hex string");
              r > i / 2 && (r = i / 2);
              for (var s = 0; s < r; ++s) {
                  var a = parseInt(e.substr(2 * s, 2), 16);
                  if (isNaN(a))
                      return s;
                  t[n + s] = a
              }
              return s
          }
          function x(t, e, n, r) {
              return H(Y(e, t.length - n), t, n, r)
          }
          function P(t, e, n, r) {
              return H(function(t) {
                  for (var e = [], n = 0; n < t.length; ++n)
                      e.push(255 & t.charCodeAt(n));
                  return e
              }(e), t, n, r)
          }
          function S(t, e, n, r) {
              return P(t, e, n, r)
          }
          function C(t, e, n, r) {
              return H(G(e), t, n, r)
          }
          function w(t, e, n, r) {
              return H(function(t, e) {
                  for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
                      r = (n = t.charCodeAt(s)) >> 8,
                      o = n % 256,
                      i.push(o),
                      i.push(r);
                  return i
              }(e, t.length - n), t, n, r)
          }
          function E(t, e, n) {
              return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
          }
          function T(t, e, n) {
              n = Math.min(t.length, n);
              for (var r = [], o = e; o < n; ) {
                  var i, s, a, l, u = t[o], p = null, c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (o + c <= n)
                      switch (c) {
                      case 1:
                          u < 128 && (p = u);
                          break;
                      case 2:
                          128 === (192 & (i = t[o + 1])) && (l = (31 & u) << 6 | 63 & i) > 127 && (p = l);
                          break;
                      case 3:
                          i = t[o + 1],
                          s = t[o + 2],
                          128 === (192 & i) && 128 === (192 & s) && (l = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (p = l);
                          break;
                      case 4:
                          i = t[o + 1],
                          s = t[o + 2],
                          a = t[o + 3],
                          128 === (192 & i) && 128 === (192 & s) && 128 === (192 & a) && (l = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (p = l)
                      }
                  null === p ? (p = 65533,
                  c = 1) : p > 65535 && (p -= 65536,
                  r.push(p >>> 10 & 1023 | 55296),
                  p = 56320 | 1023 & p),
                  r.push(p),
                  o += c
              }
              return function(t) {
                  var e = t.length;
                  if (e <= O)
                      return String.fromCharCode.apply(String, t);
                  var n = ""
                    , r = 0;
                  for (; r < e; )
                      n += String.fromCharCode.apply(String, t.slice(r, r += O));
                  return n
              }(r)
          }
          e.Buffer = l,
          e.SlowBuffer = function(t) {
              +t != t && (t = 0);
              return l.alloc(+t)
          }
          ,
          e.INSPECT_MAX_BYTES = 50,
          l.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
              try {
                  var t = new Uint8Array(1);
                  return t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                          return 42
                      }
                  },
                  42 === t.foo() && "function" === typeof t.subarray && 0 === t.subarray(1, 1).byteLength
              } catch (e) {
                  return !1
              }
          }(),
          e.kMaxLength = s(),
          l.poolSize = 8192,
          l._augment = function(t) {
              return t.__proto__ = l.prototype,
              t
          }
          ,
          l.from = function(t, e, n) {
              return u(null, t, e, n)
          }
          ,
          l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype,
          l.__proto__ = Uint8Array,
          "undefined" !== typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: !0
          })),
          l.alloc = function(t, e, n) {
              return function(t, e, n, r) {
                  return p(e),
                  e <= 0 ? a(t, e) : void 0 !== n ? "string" === typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
              }(null, t, e, n)
          }
          ,
          l.allocUnsafe = function(t) {
              return c(null, t)
          }
          ,
          l.allocUnsafeSlow = function(t) {
              return c(null, t)
          }
          ,
          l.isBuffer = function(t) {
              return !(null == t || !t._isBuffer)
          }
          ,
          l.compare = function(t, e) {
              if (!l.isBuffer(t) || !l.isBuffer(e))
                  throw new TypeError("Arguments must be Buffers");
              if (t === e)
                  return 0;
              for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                  if (t[o] !== e[o]) {
                      n = t[o],
                      r = e[o];
                      break
                  }
              return n < r ? -1 : r < n ? 1 : 0
          }
          ,
          l.isEncoding = function(t) {
              switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                  return !0;
              default:
                  return !1
              }
          }
          ,
          l.concat = function(t, e) {
              if (!i(t))
                  throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === t.length)
                  return l.alloc(0);
              var n;
              if (void 0 === e)
                  for (e = 0,
                  n = 0; n < t.length; ++n)
                      e += t[n].length;
              var r = l.allocUnsafe(e)
                , o = 0;
              for (n = 0; n < t.length; ++n) {
                  var s = t[n];
                  if (!l.isBuffer(s))
                      throw new TypeError('"list" argument must be an Array of Buffers');
                  s.copy(r, o),
                  o += s.length
              }
              return r
          }
          ,
          l.byteLength = d,
          l.prototype._isBuffer = !0,
          l.prototype.swap16 = function() {
              var t = this.length;
              if (t % 2 !== 0)
                  throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var e = 0; e < t; e += 2)
                  m(this, e, e + 1);
              return this
          }
          ,
          l.prototype.swap32 = function() {
              var t = this.length;
              if (t % 4 !== 0)
                  throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var e = 0; e < t; e += 4)
                  m(this, e, e + 3),
                  m(this, e + 1, e + 2);
              return this
          }
          ,
          l.prototype.swap64 = function() {
              var t = this.length;
              if (t % 8 !== 0)
                  throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var e = 0; e < t; e += 8)
                  m(this, e, e + 7),
                  m(this, e + 1, e + 6),
                  m(this, e + 2, e + 5),
                  m(this, e + 3, e + 4);
              return this
          }
          ,
          l.prototype.toString = function() {
              var t = 0 | this.length;
              return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : y.apply(this, arguments)
          }
          ,
          l.prototype.equals = function(t) {
              if (!l.isBuffer(t))
                  throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === l.compare(this, t)
          }
          ,
          l.prototype.inspect = function() {
              var t = ""
                , n = e.INSPECT_MAX_BYTES;
              return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
              this.length > n && (t += " ... ")),
              "<Buffer " + t + ">"
          }
          ,
          l.prototype.compare = function(t, e, n, r, o) {
              if (!l.isBuffer(t))
                  throw new TypeError("Argument must be a Buffer");
              if (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === o && (o = this.length),
              e < 0 || n > t.length || r < 0 || o > this.length)
                  throw new RangeError("out of range index");
              if (r >= o && e >= n)
                  return 0;
              if (r >= o)
                  return -1;
              if (e >= n)
                  return 1;
              if (this === t)
                  return 0;
              for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(r, o), p = t.slice(e, n), c = 0; c < a; ++c)
                  if (u[c] !== p[c]) {
                      i = u[c],
                      s = p[c];
                      break
                  }
              return i < s ? -1 : s < i ? 1 : 0
          }
          ,
          l.prototype.includes = function(t, e, n) {
              return -1 !== this.indexOf(t, e, n)
          }
          ,
          l.prototype.indexOf = function(t, e, n) {
              return g(this, t, e, n, !0)
          }
          ,
          l.prototype.lastIndexOf = function(t, e, n) {
              return g(this, t, e, n, !1)
          }
          ,
          l.prototype.write = function(t, e, n, r) {
              if (void 0 === e)
                  r = "utf8",
                  n = this.length,
                  e = 0;
              else if (void 0 === n && "string" === typeof e)
                  r = e,
                  n = this.length,
                  e = 0;
              else {
                  if (!isFinite(e))
                      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                  e |= 0,
                  isFinite(n) ? (n |= 0,
                  void 0 === r && (r = "utf8")) : (r = n,
                  n = void 0)
              }
              var o = this.length - e;
              if ((void 0 === n || n > o) && (n = o),
              t.length > 0 && (n < 0 || e < 0) || e > this.length)
                  throw new RangeError("Attempt to write outside buffer bounds");
              r || (r = "utf8");
              for (var i = !1; ; )
                  switch (r) {
                  case "hex":
                      return b(this, t, e, n);
                  case "utf8":
                  case "utf-8":
                      return x(this, t, e, n);
                  case "ascii":
                      return P(this, t, e, n);
                  case "latin1":
                  case "binary":
                      return S(this, t, e, n);
                  case "base64":
                      return C(this, t, e, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return w(this, t, e, n);
                  default:
                      if (i)
                          throw new TypeError("Unknown encoding: " + r);
                      r = ("" + r).toLowerCase(),
                      i = !0
                  }
          }
          ,
          l.prototype.toJSON = function() {
              return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
              }
          }
          ;
          var O = 4096;
          function I(t, e, n) {
              var r = "";
              n = Math.min(t.length, n);
              for (var o = e; o < n; ++o)
                  r += String.fromCharCode(127 & t[o]);
              return r
          }
          function L(t, e, n) {
              var r = "";
              n = Math.min(t.length, n);
              for (var o = e; o < n; ++o)
                  r += String.fromCharCode(t[o]);
              return r
          }
          function A(t, e, n) {
              var r = t.length;
              (!e || e < 0) && (e = 0),
              (!n || n < 0 || n > r) && (n = r);
              for (var o = "", i = e; i < n; ++i)
                  o += F(t[i]);
              return o
          }
          function _(t, e, n) {
              for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2)
                  o += String.fromCharCode(r[i] + 256 * r[i + 1]);
              return o
          }
          function R(t, e, n) {
              if (t % 1 !== 0 || t < 0)
                  throw new RangeError("offset is not uint");
              if (t + e > n)
                  throw new RangeError("Trying to access beyond buffer length")
          }
          function N(t, e, n, r, o, i) {
              if (!l.isBuffer(t))
                  throw new TypeError('"buffer" argument must be a Buffer instance');
              if (e > o || e < i)
                  throw new RangeError('"value" argument is out of bounds');
              if (n + r > t.length)
                  throw new RangeError("Index out of range")
          }
          function k(t, e, n, r) {
              e < 0 && (e = 65535 + e + 1);
              for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o)
                  t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
          }
          function B(t, e, n, r) {
              e < 0 && (e = 4294967295 + e + 1);
              for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o)
                  t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
          }
          function D(t, e, n, r, o, i) {
              if (n + r > t.length)
                  throw new RangeError("Index out of range");
              if (n < 0)
                  throw new RangeError("Index out of range")
          }
          function U(t, e, n, r, i) {
              return i || D(t, 0, n, 4),
              o.write(t, e, n, r, 23, 4),
              n + 4
          }
          function M(t, e, n, r, i) {
              return i || D(t, 0, n, 8),
              o.write(t, e, n, r, 52, 8),
              n + 8
          }
          l.prototype.slice = function(t, e) {
              var n, r = this.length;
              if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
              e < t && (e = t),
              l.TYPED_ARRAY_SUPPORT)
                  (n = this.subarray(t, e)).__proto__ = l.prototype;
              else {
                  var o = e - t;
                  n = new l(o,void 0);
                  for (var i = 0; i < o; ++i)
                      n[i] = this[i + t]
              }
              return n
          }
          ,
          l.prototype.readUIntLE = function(t, e, n) {
              t |= 0,
              e |= 0,
              n || R(t, e, this.length);
              for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                  r += this[t + i] * o;
              return r
          }
          ,
          l.prototype.readUIntBE = function(t, e, n) {
              t |= 0,
              e |= 0,
              n || R(t, e, this.length);
              for (var r = this[t + --e], o = 1; e > 0 && (o *= 256); )
                  r += this[t + --e] * o;
              return r
          }
          ,
          l.prototype.readUInt8 = function(t, e) {
              return e || R(t, 1, this.length),
              this[t]
          }
          ,
          l.prototype.readUInt16LE = function(t, e) {
              return e || R(t, 2, this.length),
              this[t] | this[t + 1] << 8
          }
          ,
          l.prototype.readUInt16BE = function(t, e) {
              return e || R(t, 2, this.length),
              this[t] << 8 | this[t + 1]
          }
          ,
          l.prototype.readUInt32LE = function(t, e) {
              return e || R(t, 4, this.length),
              (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
          }
          ,
          l.prototype.readUInt32BE = function(t, e) {
              return e || R(t, 4, this.length),
              16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
          }
          ,
          l.prototype.readIntLE = function(t, e, n) {
              t |= 0,
              e |= 0,
              n || R(t, e, this.length);
              for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                  r += this[t + i] * o;
              return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)),
              r
          }
          ,
          l.prototype.readIntBE = function(t, e, n) {
              t |= 0,
              e |= 0,
              n || R(t, e, this.length);
              for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256); )
                  i += this[t + --r] * o;
              return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)),
              i
          }
          ,
          l.prototype.readInt8 = function(t, e) {
              return e || R(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          }
          ,
          l.prototype.readInt16LE = function(t, e) {
              e || R(t, 2, this.length);
              var n = this[t] | this[t + 1] << 8;
              return 32768 & n ? 4294901760 | n : n
          }
          ,
          l.prototype.readInt16BE = function(t, e) {
              e || R(t, 2, this.length);
              var n = this[t + 1] | this[t] << 8;
              return 32768 & n ? 4294901760 | n : n
          }
          ,
          l.prototype.readInt32LE = function(t, e) {
              return e || R(t, 4, this.length),
              this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
          }
          ,
          l.prototype.readInt32BE = function(t, e) {
              return e || R(t, 4, this.length),
              this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
          }
          ,
          l.prototype.readFloatLE = function(t, e) {
              return e || R(t, 4, this.length),
              o.read(this, t, !0, 23, 4)
          }
          ,
          l.prototype.readFloatBE = function(t, e) {
              return e || R(t, 4, this.length),
              o.read(this, t, !1, 23, 4)
          }
          ,
          l.prototype.readDoubleLE = function(t, e) {
              return e || R(t, 8, this.length),
              o.read(this, t, !0, 52, 8)
          }
          ,
          l.prototype.readDoubleBE = function(t, e) {
              return e || R(t, 8, this.length),
              o.read(this, t, !1, 52, 8)
          }
          ,
          l.prototype.writeUIntLE = function(t, e, n, r) {
              (t = +t,
              e |= 0,
              n |= 0,
              r) || N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
              var o = 1
                , i = 0;
              for (this[e] = 255 & t; ++i < n && (o *= 256); )
                  this[e + i] = t / o & 255;
              return e + n
          }
          ,
          l.prototype.writeUIntBE = function(t, e, n, r) {
              (t = +t,
              e |= 0,
              n |= 0,
              r) || N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
              var o = n - 1
                , i = 1;
              for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
                  this[e + o] = t / i & 255;
              return e + n
          }
          ,
          l.prototype.writeUInt8 = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 1, 255, 0),
              l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              this[e] = 255 & t,
              e + 1
          }
          ,
          l.prototype.writeUInt16LE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 2, 65535, 0),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
              this[e + 1] = t >>> 8) : k(this, t, e, !0),
              e + 2
          }
          ,
          l.prototype.writeUInt16BE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 2, 65535, 0),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
              this[e + 1] = 255 & t) : k(this, t, e, !1),
              e + 2
          }
          ,
          l.prototype.writeUInt32LE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 4, 4294967295, 0),
              l.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
              this[e + 2] = t >>> 16,
              this[e + 1] = t >>> 8,
              this[e] = 255 & t) : B(this, t, e, !0),
              e + 4
          }
          ,
          l.prototype.writeUInt32BE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 4, 4294967295, 0),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
              this[e + 1] = t >>> 16,
              this[e + 2] = t >>> 8,
              this[e + 3] = 255 & t) : B(this, t, e, !1),
              e + 4
          }
          ,
          l.prototype.writeIntLE = function(t, e, n, r) {
              if (t = +t,
              e |= 0,
              !r) {
                  var o = Math.pow(2, 8 * n - 1);
                  N(this, t, e, n, o - 1, -o)
              }
              var i = 0
                , s = 1
                , a = 0;
              for (this[e] = 255 & t; ++i < n && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                  this[e + i] = (t / s >> 0) - a & 255;
              return e + n
          }
          ,
          l.prototype.writeIntBE = function(t, e, n, r) {
              if (t = +t,
              e |= 0,
              !r) {
                  var o = Math.pow(2, 8 * n - 1);
                  N(this, t, e, n, o - 1, -o)
              }
              var i = n - 1
                , s = 1
                , a = 0;
              for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                  this[e + i] = (t / s >> 0) - a & 255;
              return e + n
          }
          ,
          l.prototype.writeInt8 = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 1, 127, -128),
              l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              this[e] = 255 & t,
              e + 1
          }
          ,
          l.prototype.writeInt16LE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 2, 32767, -32768),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
              this[e + 1] = t >>> 8) : k(this, t, e, !0),
              e + 2
          }
          ,
          l.prototype.writeInt16BE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 2, 32767, -32768),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
              this[e + 1] = 255 & t) : k(this, t, e, !1),
              e + 2
          }
          ,
          l.prototype.writeInt32LE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 4, 2147483647, -2147483648),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t,
              this[e + 1] = t >>> 8,
              this[e + 2] = t >>> 16,
              this[e + 3] = t >>> 24) : B(this, t, e, !0),
              e + 4
          }
          ,
          l.prototype.writeInt32BE = function(t, e, n) {
              return t = +t,
              e |= 0,
              n || N(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              l.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
              this[e + 1] = t >>> 16,
              this[e + 2] = t >>> 8,
              this[e + 3] = 255 & t) : B(this, t, e, !1),
              e + 4
          }
          ,
          l.prototype.writeFloatLE = function(t, e, n) {
              return U(this, t, e, !0, n)
          }
          ,
          l.prototype.writeFloatBE = function(t, e, n) {
              return U(this, t, e, !1, n)
          }
          ,
          l.prototype.writeDoubleLE = function(t, e, n) {
              return M(this, t, e, !0, n)
          }
          ,
          l.prototype.writeDoubleBE = function(t, e, n) {
              return M(this, t, e, !1, n)
          }
          ,
          l.prototype.copy = function(t, e, n, r) {
              if (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
                  return 0;
              if (0 === t.length || 0 === this.length)
                  return 0;
              if (e < 0)
                  throw new RangeError("targetStart out of bounds");
              if (n < 0 || n >= this.length)
                  throw new RangeError("sourceStart out of bounds");
              if (r < 0)
                  throw new RangeError("sourceEnd out of bounds");
              r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
              var o, i = r - n;
              if (this === t && n < e && e < r)
                  for (o = i - 1; o >= 0; --o)
                      t[o + e] = this[o + n];
              else if (i < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                  for (o = 0; o < i; ++o)
                      t[o + e] = this[o + n];
              else
                  Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
              return i
          }
          ,
          l.prototype.fill = function(t, e, n, r) {
              if ("string" === typeof t) {
                  if ("string" === typeof e ? (r = e,
                  e = 0,
                  n = this.length) : "string" === typeof n && (r = n,
                  n = this.length),
                  1 === t.length) {
                      var o = t.charCodeAt(0);
                      o < 256 && (t = o)
                  }
                  if (void 0 !== r && "string" !== typeof r)
                      throw new TypeError("encoding must be a string");
                  if ("string" === typeof r && !l.isEncoding(r))
                      throw new TypeError("Unknown encoding: " + r)
              } else
                  "number" === typeof t && (t &= 255);
              if (e < 0 || this.length < e || this.length < n)
                  throw new RangeError("Out of range index");
              if (n <= e)
                  return this;
              var i;
              if (e >>>= 0,
              n = void 0 === n ? this.length : n >>> 0,
              t || (t = 0),
              "number" === typeof t)
                  for (i = e; i < n; ++i)
                      this[i] = t;
              else {
                  var s = l.isBuffer(t) ? t : Y(new l(t,r).toString())
                    , a = s.length;
                  for (i = 0; i < n - e; ++i)
                      this[i + e] = s[i % a]
              }
              return this
          }
          ;
          var X = /[^+\/0-9A-Za-z-_]/g;
          function F(t) {
              return t < 16 ? "0" + t.toString(16) : t.toString(16)
          }
          function Y(t, e) {
              var n;
              e = e || 1 / 0;
              for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
                  if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                      if (!o) {
                          if (n > 56319) {
                              (e -= 3) > -1 && i.push(239, 191, 189);
                              continue
                          }
                          if (s + 1 === r) {
                              (e -= 3) > -1 && i.push(239, 191, 189);
                              continue
                          }
                          o = n;
                          continue
                      }
                      if (n < 56320) {
                          (e -= 3) > -1 && i.push(239, 191, 189),
                          o = n;
                          continue
                      }
                      n = 65536 + (o - 55296 << 10 | n - 56320)
                  } else
                      o && (e -= 3) > -1 && i.push(239, 191, 189);
                  if (o = null,
                  n < 128) {
                      if ((e -= 1) < 0)
                          break;
                      i.push(n)
                  } else if (n < 2048) {
                      if ((e -= 2) < 0)
                          break;
                      i.push(n >> 6 | 192, 63 & n | 128)
                  } else if (n < 65536) {
                      if ((e -= 3) < 0)
                          break;
                      i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                  } else {
                      if (!(n < 1114112))
                          throw new Error("Invalid code point");
                      if ((e -= 4) < 0)
                          break;
                      i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                  }
              }
              return i
          }
          function G(t) {
              return r.toByteArray(function(t) {
                  if ((t = function(t) {
                      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                  }(t).replace(X, "")).length < 2)
                      return "";
                  for (; t.length % 4 !== 0; )
                      t += "=";
                  return t
              }(t))
          }
          function H(t, e, n, r) {
              for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o)
                  e[o + n] = t[o];
              return o
          }
      }
      ).call(this, n(12))
  },
  357: function(t, e, n) {
      !function() {
          "use strict";
          var e, n = {
              use_lines: !0,
              use_xyz: !1
          }, r = !1;
          if (t.exports ? (t.exports = n,
          r = !0) : "undefined" !== typeof document ? window.ClipperLib = n : self.ClipperLib = n,
          r) {
              o = "chrome";
              e = "Netscape"
          } else {
              var o = navigator.userAgent.toString().toLowerCase();
              e = navigator.appName
          }
          var i, s = {};
          -1 != o.indexOf("chrome") && -1 == o.indexOf("chromium") ? s.chrome = 1 : s.chrome = 0,
          -1 != o.indexOf("chromium") ? s.chromium = 1 : s.chromium = 0,
          -1 != o.indexOf("safari") && -1 == o.indexOf("chrome") && -1 == o.indexOf("chromium") ? s.safari = 1 : s.safari = 0,
          -1 != o.indexOf("firefox") ? s.firefox = 1 : s.firefox = 0,
          -1 != o.indexOf("firefox/17") ? s.firefox17 = 1 : s.firefox17 = 0,
          -1 != o.indexOf("firefox/15") ? s.firefox15 = 1 : s.firefox15 = 0,
          -1 != o.indexOf("firefox/3") ? s.firefox3 = 1 : s.firefox3 = 0,
          -1 != o.indexOf("opera") ? s.opera = 1 : s.opera = 0,
          -1 != o.indexOf("msie 10") ? s.msie10 = 1 : s.msie10 = 0,
          -1 != o.indexOf("msie 9") ? s.msie9 = 1 : s.msie9 = 0,
          -1 != o.indexOf("msie 8") ? s.msie8 = 1 : s.msie8 = 0,
          -1 != o.indexOf("msie 7") ? s.msie7 = 1 : s.msie7 = 0,
          -1 != o.indexOf("msie ") ? s.msie = 1 : s.msie = 0,
          n.biginteger_used = null;
          function a(t, e, r) {
              n.biginteger_used = 1,
              null != t && ("number" == typeof t && "undefined" == typeof e ? this.fromInt(t) : "number" == typeof t ? this.fromNumber(t, e, r) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
          }
          function l() {
              return new a(null,void 0,void 0)
          }
          "Microsoft Internet Explorer" == e ? (a.prototype.am = function(t, e, n, r, o, i) {
              for (var s = 32767 & e, a = e >> 15; --i >= 0; ) {
                  var l = 32767 & this[t]
                    , u = this[t++] >> 15
                    , p = a * l + u * s;
                  o = ((l = s * l + ((32767 & p) << 15) + n[r] + (1073741823 & o)) >>> 30) + (p >>> 15) + a * u + (o >>> 30),
                  n[r++] = 1073741823 & l
              }
              return o
          }
          ,
          i = 30) : "Netscape" != e ? (a.prototype.am = function(t, e, n, r, o, i) {
              for (; --i >= 0; ) {
                  var s = e * this[t++] + n[r] + o;
                  o = Math.floor(s / 67108864),
                  n[r++] = 67108863 & s
              }
              return o
          }
          ,
          i = 26) : (a.prototype.am = function(t, e, n, r, o, i) {
              for (var s = 16383 & e, a = e >> 14; --i >= 0; ) {
                  var l = 16383 & this[t]
                    , u = this[t++] >> 14
                    , p = a * l + u * s;
                  o = ((l = s * l + ((16383 & p) << 14) + n[r] + o) >> 28) + (p >> 14) + a * u,
                  n[r++] = 268435455 & l
              }
              return o
          }
          ,
          i = 28),
          a.prototype.DB = i,
          a.prototype.DM = (1 << i) - 1,
          a.prototype.DV = 1 << i;
          a.prototype.FV = Math.pow(2, 52),
          a.prototype.F1 = 52 - i,
          a.prototype.F2 = 2 * i - 52;
          var u, p, c = new Array;
          for (u = "0".charCodeAt(0),
          p = 0; p <= 9; ++p)
              c[u++] = p;
          for (u = "a".charCodeAt(0),
          p = 10; p < 36; ++p)
              c[u++] = p;
          for (u = "A".charCodeAt(0),
          p = 10; p < 36; ++p)
              c[u++] = p;
          function h(t) {
              return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
          }
          function f(t, e) {
              var n = c[t.charCodeAt(e)];
              return null == n ? -1 : n
          }
          function d(t) {
              var e = l();
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
          function g(t) {
              this.m = t,
              this.mp = t.invDigit(),
              this.mpl = 32767 & this.mp,
              this.mph = this.mp >> 15,
              this.um = (1 << t.DB - 15) - 1,
              this.mt2 = 2 * t.t
          }
          function v(t, e) {
              return t & e
          }
          function b(t, e) {
              return t | e
          }
          function x(t, e) {
              return t ^ e
          }
          function P(t, e) {
              return t & ~e
          }
          function S(t) {
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
          function C(t) {
              for (var e = 0; 0 != t; )
                  t &= t - 1,
                  ++e;
              return e
          }
          function w() {}
          function E(t) {
              return t
          }
          function T(t) {
              this.r2 = l(),
              this.q3 = l(),
              a.ONE.dlShiftTo(2 * t.t, this.r2),
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
          g.prototype.convert = function(t) {
              var e = l();
              return t.abs().dlShiftTo(this.m.t, e),
              e.divRemTo(this.m, null, e),
              t.s < 0 && e.compareTo(a.ZERO) > 0 && this.m.subTo(e, e),
              e
          }
          ,
          g.prototype.revert = function(t) {
              var e = l();
              return t.copyTo(e),
              this.reduce(e),
              e
          }
          ,
          g.prototype.reduce = function(t) {
              for (; t.t <= this.mt2; )
                  t[t.t++] = 0;
              for (var e = 0; e < this.m.t; ++e) {
                  var n = 32767 & t[e]
                    , r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                  for (t[n = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV; )
                      t[n] -= t.DV,
                      t[++n]++
              }
              t.clamp(),
              t.drShiftTo(this.m.t, t),
              t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
          }
          ,
          g.prototype.mulTo = function(t, e, n) {
              t.multiplyTo(e, n),
              this.reduce(n)
          }
          ,
          g.prototype.sqrTo = function(t, e) {
              t.squareTo(e),
              this.reduce(e)
          }
          ,
          a.prototype.copyTo = function(t) {
              for (var e = this.t - 1; e >= 0; --e)
                  t[e] = this[e];
              t.t = this.t,
              t.s = this.s
          }
          ,
          a.prototype.fromInt = function(t) {
              this.t = 1,
              this.s = t < 0 ? -1 : 0,
              t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
          }
          ,
          a.prototype.fromString = function(t, e) {
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
              for (var r = t.length, o = !1, i = 0; --r >= 0; ) {
                  var s = 8 == n ? 255 & t[r] : f(t, r);
                  s < 0 ? "-" == t.charAt(r) && (o = !0) : (o = !1,
                  0 == i ? this[this.t++] = s : i + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i,
                  this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i,
                  (i += n) >= this.DB && (i -= this.DB))
              }
              8 == n && 0 != (128 & t[0]) && (this.s = -1,
              i > 0 && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)),
              this.clamp(),
              o && a.ZERO.subTo(this, this)
          }
          ,
          a.prototype.clamp = function() {
              for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t; )
                  --this.t
          }
          ,
          a.prototype.dlShiftTo = function(t, e) {
              var n;
              for (n = this.t - 1; n >= 0; --n)
                  e[n + t] = this[n];
              for (n = t - 1; n >= 0; --n)
                  e[n] = 0;
              e.t = this.t + t,
              e.s = this.s
          }
          ,
          a.prototype.drShiftTo = function(t, e) {
              for (var n = t; n < this.t; ++n)
                  e[n - t] = this[n];
              e.t = Math.max(this.t - t, 0),
              e.s = this.s
          }
          ,
          a.prototype.lShiftTo = function(t, e) {
              var n, r = t % this.DB, o = this.DB - r, i = (1 << o) - 1, s = Math.floor(t / this.DB), a = this.s << r & this.DM;
              for (n = this.t - 1; n >= 0; --n)
                  e[n + s + 1] = this[n] >> o | a,
                  a = (this[n] & i) << r;
              for (n = s - 1; n >= 0; --n)
                  e[n] = 0;
              e[s] = a,
              e.t = this.t + s + 1,
              e.s = this.s,
              e.clamp()
          }
          ,
          a.prototype.rShiftTo = function(t, e) {
              e.s = this.s;
              var n = Math.floor(t / this.DB);
              if (n >= this.t)
                  e.t = 0;
              else {
                  var r = t % this.DB
                    , o = this.DB - r
                    , i = (1 << r) - 1;
                  e[0] = this[n] >> r;
                  for (var s = n + 1; s < this.t; ++s)
                      e[s - n - 1] |= (this[s] & i) << o,
                      e[s - n] = this[s] >> r;
                  r > 0 && (e[this.t - n - 1] |= (this.s & i) << o),
                  e.t = this.t - n,
                  e.clamp()
              }
          }
          ,
          a.prototype.subTo = function(t, e) {
              for (var n = 0, r = 0, o = Math.min(t.t, this.t); n < o; )
                  r += this[n] - t[n],
                  e[n++] = r & this.DM,
                  r >>= this.DB;
              if (t.t < this.t) {
                  for (r -= t.s; n < this.t; )
                      r += this[n],
                      e[n++] = r & this.DM,
                      r >>= this.DB;
                  r += this.s
              } else {
                  for (r += this.s; n < t.t; )
                      r -= t[n],
                      e[n++] = r & this.DM,
                      r >>= this.DB;
                  r -= t.s
              }
              e.s = r < 0 ? -1 : 0,
              r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r),
              e.t = n,
              e.clamp()
          }
          ,
          a.prototype.multiplyTo = function(t, e) {
              var n = this.abs()
                , r = t.abs()
                , o = n.t;
              for (e.t = o + r.t; --o >= 0; )
                  e[o] = 0;
              for (o = 0; o < r.t; ++o)
                  e[o + n.t] = n.am(0, r[o], e, o, 0, n.t);
              e.s = 0,
              e.clamp(),
              this.s != t.s && a.ZERO.subTo(e, e)
          }
          ,
          a.prototype.squareTo = function(t) {
              for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0; )
                  t[n] = 0;
              for (n = 0; n < e.t - 1; ++n) {
                  var r = e.am(n, e[n], t, 2 * n, 0, 1);
                  (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                  t[n + e.t + 1] = 1)
              }
              t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
              t.s = 0,
              t.clamp()
          }
          ,
          a.prototype.divRemTo = function(t, e, n) {
              var r = t.abs();
              if (!(r.t <= 0)) {
                  var o = this.abs();
                  if (o.t < r.t)
                      return null != e && e.fromInt(0),
                      void (null != n && this.copyTo(n));
                  null == n && (n = l());
                  var i = l()
                    , s = this.s
                    , u = t.s
                    , p = this.DB - y(r[r.t - 1]);
                  p > 0 ? (r.lShiftTo(p, i),
                  o.lShiftTo(p, n)) : (r.copyTo(i),
                  o.copyTo(n));
                  var c = i.t
                    , h = i[c - 1];
                  if (0 != h) {
                      var f = h * (1 << this.F1) + (c > 1 ? i[c - 2] >> this.F2 : 0)
                        , d = this.FV / f
                        , m = (1 << this.F1) / f
                        , g = 1 << this.F2
                        , v = n.t
                        , b = v - c
                        , x = null == e ? l() : e;
                      for (i.dlShiftTo(b, x),
                      n.compareTo(x) >= 0 && (n[n.t++] = 1,
                      n.subTo(x, n)),
                      a.ONE.dlShiftTo(c, x),
                      x.subTo(i, i); i.t < c; )
                          i[i.t++] = 0;
                      for (; --b >= 0; ) {
                          var P = n[--v] == h ? this.DM : Math.floor(n[v] * d + (n[v - 1] + g) * m);
                          if ((n[v] += i.am(0, P, n, b, 0, c)) < P)
                              for (i.dlShiftTo(b, x),
                              n.subTo(x, n); n[v] < --P; )
                                  n.subTo(x, n)
                      }
                      null != e && (n.drShiftTo(c, e),
                      s != u && a.ZERO.subTo(e, e)),
                      n.t = c,
                      n.clamp(),
                      p > 0 && n.rShiftTo(p, n),
                      s < 0 && a.ZERO.subTo(n, n)
                  }
              }
          }
          ,
          a.prototype.invDigit = function() {
              if (this.t < 1)
                  return 0;
              var t = this[0];
              if (0 == (1 & t))
                  return 0;
              var e = 3 & t;
              return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
          }
          ,
          a.prototype.isEven = function() {
              return 0 == (this.t > 0 ? 1 & this[0] : this.s)
          }
          ,
          a.prototype.exp = function(t, e) {
              if (t > 4294967295 || t < 1)
                  return a.ONE;
              var n = l()
                , r = l()
                , o = e.convert(this)
                , i = y(t) - 1;
              for (o.copyTo(n); --i >= 0; )
                  if (e.sqrTo(n, r),
                  (t & 1 << i) > 0)
                      e.mulTo(r, o, n);
                  else {
                      var s = n;
                      n = r,
                      r = s
                  }
              return e.revert(n)
          }
          ,
          a.prototype.toString = function(t) {
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
              var n, r = (1 << e) - 1, o = !1, i = "", s = this.t, a = this.DB - s * this.DB % e;
              if (s-- > 0)
                  for (a < this.DB && (n = this[s] >> a) > 0 && (o = !0,
                  i = h(n)); s >= 0; )
                      a < e ? (n = (this[s] & (1 << a) - 1) << e - a,
                      n |= this[--s] >> (a += this.DB - e)) : (n = this[s] >> (a -= e) & r,
                      a <= 0 && (a += this.DB,
                      --s)),
                      n > 0 && (o = !0),
                      o && (i += h(n));
              return o ? i : "0"
          }
          ,
          a.prototype.negate = function() {
              var t = l();
              return a.ZERO.subTo(this, t),
              t
          }
          ,
          a.prototype.abs = function() {
              return this.s < 0 ? this.negate() : this
          }
          ,
          a.prototype.compareTo = function(t) {
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
          a.prototype.bitLength = function() {
              return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
          }
          ,
          a.prototype.mod = function(t) {
              var e = l();
              return this.abs().divRemTo(t, null, e),
              this.s < 0 && e.compareTo(a.ZERO) > 0 && t.subTo(e, e),
              e
          }
          ,
          a.prototype.modPowInt = function(t, e) {
              var n;
              return n = t < 256 || e.isEven() ? new m(e) : new g(e),
              this.exp(t, n)
          }
          ,
          a.ZERO = d(0),
          a.ONE = d(1),
          w.prototype.convert = E,
          w.prototype.revert = E,
          w.prototype.mulTo = function(t, e, n) {
              t.multiplyTo(e, n)
          }
          ,
          w.prototype.sqrTo = function(t, e) {
              t.squareTo(e)
          }
          ,
          T.prototype.convert = function(t) {
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
          var O = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
            , I = (1 << 26) / O[O.length - 1];
          a.prototype.chunkSize = function(t) {
              return Math.floor(Math.LN2 * this.DB / Math.log(t))
          }
          ,
          a.prototype.toRadix = function(t) {
              if (null == t && (t = 10),
              0 == this.signum() || t < 2 || t > 36)
                  return "0";
              var e = this.chunkSize(t)
                , n = Math.pow(t, e)
                , r = d(n)
                , o = l()
                , i = l()
                , s = "";
              for (this.divRemTo(r, o, i); o.signum() > 0; )
                  s = (n + i.intValue()).toString(t).substr(1) + s,
                  o.divRemTo(r, o, i);
              return i.intValue().toString(t) + s
          }
          ,
          a.prototype.fromRadix = function(t, e) {
              this.fromInt(0),
              null == e && (e = 10);
              for (var n = this.chunkSize(e), r = Math.pow(e, n), o = !1, i = 0, s = 0, l = 0; l < t.length; ++l) {
                  var u = f(t, l);
                  u < 0 ? "-" == t.charAt(l) && 0 == this.signum() && (o = !0) : (s = e * s + u,
                  ++i >= n && (this.dMultiply(r),
                  this.dAddOffset(s, 0),
                  i = 0,
                  s = 0))
              }
              i > 0 && (this.dMultiply(Math.pow(e, i)),
              this.dAddOffset(s, 0)),
              o && a.ZERO.subTo(this, this)
          }
          ,
          a.prototype.fromNumber = function(t, e, n) {
              if ("number" == typeof e)
                  if (t < 2)
                      this.fromInt(1);
                  else
                      for (this.fromNumber(t, n),
                      this.testBit(t - 1) || this.bitwiseTo(a.ONE.shiftLeft(t - 1), b, this),
                      this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e); )
                          this.dAddOffset(2, 0),
                          this.bitLength() > t && this.subTo(a.ONE.shiftLeft(t - 1), this);
              else {
                  var r = new Array
                    , o = 7 & t;
                  r.length = 1 + (t >> 3),
                  e.nextBytes(r),
                  o > 0 ? r[0] &= (1 << o) - 1 : r[0] = 0,
                  this.fromString(r, 256)
              }
          }
          ,
          a.prototype.bitwiseTo = function(t, e, n) {
              var r, o, i = Math.min(t.t, this.t);
              for (r = 0; r < i; ++r)
                  n[r] = e(this[r], t[r]);
              if (t.t < this.t) {
                  for (o = t.s & this.DM,
                  r = i; r < this.t; ++r)
                      n[r] = e(this[r], o);
                  n.t = this.t
              } else {
                  for (o = this.s & this.DM,
                  r = i; r < t.t; ++r)
                      n[r] = e(o, t[r]);
                  n.t = t.t
              }
              n.s = e(this.s, t.s),
              n.clamp()
          }
          ,
          a.prototype.changeBit = function(t, e) {
              var n = a.ONE.shiftLeft(t);
              return this.bitwiseTo(n, e, n),
              n
          }
          ,
          a.prototype.addTo = function(t, e) {
              for (var n = 0, r = 0, o = Math.min(t.t, this.t); n < o; )
                  r += this[n] + t[n],
                  e[n++] = r & this.DM,
                  r >>= this.DB;
              if (t.t < this.t) {
                  for (r += t.s; n < this.t; )
                      r += this[n],
                      e[n++] = r & this.DM,
                      r >>= this.DB;
                  r += this.s
              } else {
                  for (r += this.s; n < t.t; )
                      r += t[n],
                      e[n++] = r & this.DM,
                      r >>= this.DB;
                  r += t.s
              }
              e.s = r < 0 ? -1 : 0,
              r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r),
              e.t = n,
              e.clamp()
          }
          ,
          a.prototype.dMultiply = function(t) {
              this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
              ++this.t,
              this.clamp()
          }
          ,
          a.prototype.dAddOffset = function(t, e) {
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
          a.prototype.multiplyLowerTo = function(t, e, n) {
              var r, o = Math.min(this.t + t.t, e);
              for (n.s = 0,
              n.t = o; o > 0; )
                  n[--o] = 0;
              for (r = n.t - this.t; o < r; ++o)
                  n[o + this.t] = this.am(0, t[o], n, o, 0, this.t);
              for (r = Math.min(t.t, e); o < r; ++o)
                  this.am(0, t[o], n, o, 0, e - o);
              n.clamp()
          }
          ,
          a.prototype.multiplyUpperTo = function(t, e, n) {
              --e;
              var r = n.t = this.t + t.t - e;
              for (n.s = 0; --r >= 0; )
                  n[r] = 0;
              for (r = Math.max(e - this.t, 0); r < t.t; ++r)
                  n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
              n.clamp(),
              n.drShiftTo(1, n)
          }
          ,
          a.prototype.modInt = function(t) {
              if (t <= 0)
                  return 0;
              var e = this.DV % t
                , n = this.s < 0 ? t - 1 : 0;
              if (this.t > 0)
                  if (0 == e)
                      n = this[0] % t;
                  else
                      for (var r = this.t - 1; r >= 0; --r)
                          n = (e * n + this[r]) % t;
              return n
          }
          ,
          a.prototype.millerRabin = function(t) {
              var e = this.subtract(a.ONE)
                , n = e.getLowestSetBit();
              if (n <= 0)
                  return !1;
              var r = e.shiftRight(n);
              (t = t + 1 >> 1) > O.length && (t = O.length);
              for (var o = l(), i = 0; i < t; ++i) {
                  o.fromInt(O[Math.floor(Math.random() * O.length)]);
                  var s = o.modPow(r, this);
                  if (0 != s.compareTo(a.ONE) && 0 != s.compareTo(e)) {
                      for (var u = 1; u++ < n && 0 != s.compareTo(e); )
                          if (0 == (s = s.modPowInt(2, this)).compareTo(a.ONE))
                              return !1;
                      if (0 != s.compareTo(e))
                          return !1
                  }
              }
              return !0
          }
          ,
          a.prototype.clone = function() {
              var t = l();
              return this.copyTo(t),
              t
          }
          ,
          a.prototype.intValue = function() {
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
          a.prototype.byteValue = function() {
              return 0 == this.t ? this.s : this[0] << 24 >> 24
          }
          ,
          a.prototype.shortValue = function() {
              return 0 == this.t ? this.s : this[0] << 16 >> 16
          }
          ,
          a.prototype.signum = function() {
              return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
          }
          ,
          a.prototype.toByteArray = function() {
              var t = this.t
                , e = new Array;
              e[0] = this.s;
              var n, r = this.DB - t * this.DB % 8, o = 0;
              if (t-- > 0)
                  for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[o++] = n | this.s << this.DB - r); t >= 0; )
                      r < 8 ? (n = (this[t] & (1 << r) - 1) << 8 - r,
                      n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255,
                      r <= 0 && (r += this.DB,
                      --t)),
                      0 != (128 & n) && (n |= -256),
                      0 == o && (128 & this.s) != (128 & n) && ++o,
                      (o > 0 || n != this.s) && (e[o++] = n);
              return e
          }
          ,
          a.prototype.equals = function(t) {
              return 0 == this.compareTo(t)
          }
          ,
          a.prototype.min = function(t) {
              return this.compareTo(t) < 0 ? this : t
          }
          ,
          a.prototype.max = function(t) {
              return this.compareTo(t) > 0 ? this : t
          }
          ,
          a.prototype.and = function(t) {
              var e = l();
              return this.bitwiseTo(t, v, e),
              e
          }
          ,
          a.prototype.or = function(t) {
              var e = l();
              return this.bitwiseTo(t, b, e),
              e
          }
          ,
          a.prototype.xor = function(t) {
              var e = l();
              return this.bitwiseTo(t, x, e),
              e
          }
          ,
          a.prototype.andNot = function(t) {
              var e = l();
              return this.bitwiseTo(t, P, e),
              e
          }
          ,
          a.prototype.not = function() {
              for (var t = l(), e = 0; e < this.t; ++e)
                  t[e] = this.DM & ~this[e];
              return t.t = this.t,
              t.s = ~this.s,
              t
          }
          ,
          a.prototype.shiftLeft = function(t) {
              var e = l();
              return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
              e
          }
          ,
          a.prototype.shiftRight = function(t) {
              var e = l();
              return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
              e
          }
          ,
          a.prototype.getLowestSetBit = function() {
              for (var t = 0; t < this.t; ++t)
                  if (0 != this[t])
                      return t * this.DB + S(this[t]);
              return this.s < 0 ? this.t * this.DB : -1
          }
          ,
          a.prototype.bitCount = function() {
              for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n)
                  t += C(this[n] ^ e);
              return t
          }
          ,
          a.prototype.testBit = function(t) {
              var e = Math.floor(t / this.DB);
              return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
          }
          ,
          a.prototype.setBit = function(t) {
              return this.changeBit(t, b)
          }
          ,
          a.prototype.clearBit = function(t) {
              return this.changeBit(t, P)
          }
          ,
          a.prototype.flipBit = function(t) {
              return this.changeBit(t, x)
          }
          ,
          a.prototype.add = function(t) {
              var e = l();
              return this.addTo(t, e),
              e
          }
          ,
          a.prototype.subtract = function(t) {
              var e = l();
              return this.subTo(t, e),
              e
          }
          ,
          a.prototype.multiply = function(t) {
              var e = l();
              return this.multiplyTo(t, e),
              e
          }
          ,
          a.prototype.divide = function(t) {
              var e = l();
              return this.divRemTo(t, e, null),
              e
          }
          ,
          a.prototype.remainder = function(t) {
              var e = l();
              return this.divRemTo(t, null, e),
              e
          }
          ,
          a.prototype.divideAndRemainder = function(t) {
              var e = l()
                , n = l();
              return this.divRemTo(t, e, n),
              new Array(e,n)
          }
          ,
          a.prototype.modPow = function(t, e) {
              var n, r, o = t.bitLength(), i = d(1);
              if (o <= 0)
                  return i;
              n = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
              r = o < 8 ? new m(e) : e.isEven() ? new T(e) : new g(e);
              var s = new Array
                , a = 3
                , u = n - 1
                , p = (1 << n) - 1;
              if (s[1] = r.convert(this),
              n > 1) {
                  var c = l();
                  for (r.sqrTo(s[1], c); a <= p; )
                      s[a] = l(),
                      r.mulTo(c, s[a - 2], s[a]),
                      a += 2
              }
              var h, f, v = t.t - 1, b = !0, x = l();
              for (o = y(t[v]) - 1; v >= 0; ) {
                  for (o >= u ? h = t[v] >> o - u & p : (h = (t[v] & (1 << o + 1) - 1) << u - o,
                  v > 0 && (h |= t[v - 1] >> this.DB + o - u)),
                  a = n; 0 == (1 & h); )
                      h >>= 1,
                      --a;
                  if ((o -= a) < 0 && (o += this.DB,
                  --v),
                  b)
                      s[h].copyTo(i),
                      b = !1;
                  else {
                      for (; a > 1; )
                          r.sqrTo(i, x),
                          r.sqrTo(x, i),
                          a -= 2;
                      a > 0 ? r.sqrTo(i, x) : (f = i,
                      i = x,
                      x = f),
                      r.mulTo(x, s[h], i)
                  }
                  for (; v >= 0 && 0 == (t[v] & 1 << o); )
                      r.sqrTo(i, x),
                      f = i,
                      i = x,
                      x = f,
                      --o < 0 && (o = this.DB - 1,
                      --v)
              }
              return r.revert(i)
          }
          ,
          a.prototype.modInverse = function(t) {
              var e = t.isEven();
              if (this.isEven() && e || 0 == t.signum())
                  return a.ZERO;
              for (var n = t.clone(), r = this.clone(), o = d(1), i = d(0), s = d(0), l = d(1); 0 != n.signum(); ) {
                  for (; n.isEven(); )
                      n.rShiftTo(1, n),
                      e ? (o.isEven() && i.isEven() || (o.addTo(this, o),
                      i.subTo(t, i)),
                      o.rShiftTo(1, o)) : i.isEven() || i.subTo(t, i),
                      i.rShiftTo(1, i);
                  for (; r.isEven(); )
                      r.rShiftTo(1, r),
                      e ? (s.isEven() && l.isEven() || (s.addTo(this, s),
                      l.subTo(t, l)),
                      s.rShiftTo(1, s)) : l.isEven() || l.subTo(t, l),
                      l.rShiftTo(1, l);
                  n.compareTo(r) >= 0 ? (n.subTo(r, n),
                  e && o.subTo(s, o),
                  i.subTo(l, i)) : (r.subTo(n, r),
                  e && s.subTo(o, s),
                  l.subTo(i, l))
              }
              return 0 != r.compareTo(a.ONE) ? a.ZERO : l.compareTo(t) >= 0 ? l.subtract(t) : l.signum() < 0 ? (l.addTo(t, l),
              l.signum() < 0 ? l.add(t) : l) : l
          }
          ,
          a.prototype.pow = function(t) {
              return this.exp(t, new w)
          }
          ,
          a.prototype.gcd = function(t) {
              var e = this.s < 0 ? this.negate() : this.clone()
                , n = t.s < 0 ? t.negate() : t.clone();
              if (e.compareTo(n) < 0) {
                  var r = e;
                  e = n,
                  n = r
              }
              var o = e.getLowestSetBit()
                , i = n.getLowestSetBit();
              if (i < 0)
                  return e;
              for (o < i && (i = o),
              i > 0 && (e.rShiftTo(i, e),
              n.rShiftTo(i, n)); e.signum() > 0; )
                  (o = e.getLowestSetBit()) > 0 && e.rShiftTo(o, e),
                  (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                  e.compareTo(n) >= 0 ? (e.subTo(n, e),
                  e.rShiftTo(1, e)) : (n.subTo(e, n),
                  n.rShiftTo(1, n));
              return i > 0 && n.lShiftTo(i, n),
              n
          }
          ,
          a.prototype.isProbablePrime = function(t) {
              var e, n = this.abs();
              if (1 == n.t && n[0] <= O[O.length - 1]) {
                  for (e = 0; e < O.length; ++e)
                      if (n[0] == O[e])
                          return !0;
                  return !1
              }
              if (n.isEven())
                  return !1;
              for (e = 1; e < O.length; ) {
                  for (var r = O[e], o = e + 1; o < O.length && r < I; )
                      r *= O[o++];
                  for (r = n.modInt(r); e < o; )
                      if (r % O[e++] == 0)
                          return !1
              }
              return n.millerRabin(t)
          }
          ,
          a.prototype.square = function() {
              var t = l();
              return this.squareTo(t),
              t
          }
          ;
          var L = a;
          L.prototype.IsNegative = function() {
              return -1 == this.compareTo(L.ZERO)
          }
          ,
          L.op_Equality = function(t, e) {
              return 0 == t.compareTo(e)
          }
          ,
          L.op_Inequality = function(t, e) {
              return 0 != t.compareTo(e)
          }
          ,
          L.op_GreaterThan = function(t, e) {
              return t.compareTo(e) > 0
          }
          ,
          L.op_LessThan = function(t, e) {
              return t.compareTo(e) < 0
          }
          ,
          L.op_Addition = function(t, e) {
              return new L(t).add(new L(e))
          }
          ,
          L.op_Subtraction = function(t, e) {
              return new L(t).subtract(new L(e))
          }
          ,
          L.Int128Mul = function(t, e) {
              return new L(t).multiply(new L(e))
          }
          ,
          L.op_Division = function(t, e) {
              return t.divide(e)
          }
          ,
          L.prototype.ToDouble = function() {
              return parseFloat(this.toString())
          }
          ;
          var A = function(t, e) {
              var n;
              if ("undefined" === typeof Object.getOwnPropertyNames) {
                  for (n in e.prototype)
                      "undefined" !== typeof t.prototype[n] && t.prototype[n] !== Object.prototype[n] || (t.prototype[n] = e.prototype[n]);
                  for (n in e)
                      "undefined" === typeof t[n] && (t[n] = e[n]);
                  t.$baseCtor = e
              } else {
                  for (var r = Object.getOwnPropertyNames(e.prototype), o = 0; o < r.length; o++)
                      "undefined" === typeof Object.getOwnPropertyDescriptor(t.prototype, r[o]) && Object.defineProperty(t.prototype, r[o], Object.getOwnPropertyDescriptor(e.prototype, r[o]));
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
          A(n.PolyTree, n.PolyNode),
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
                          var r = t[0];
                          this.X = n.Clipper.Round(r.X),
                          this.Y = n.Clipper.Round(r.Y),
                          this.Z = 0
                      } else {
                          "undefined" === typeof (o = t[0]).Z && (o.Z = 0),
                          this.X = o.X,
                          this.Y = o.Y,
                          this.Z = o.Z
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
                      r = t[0];
                      this.X = n.Clipper.Round(r.X),
                      this.Y = n.Clipper.Round(r.Y)
                  } else {
                      var o = t[0];
                      this.X = o.X,
                      this.Y = o.Y
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
          n.IntRect4 = function(t, e, n, r) {
              this.left = t,
              this.top = e,
              this.right = n,
              this.bottom = r
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
              var r = e;
              do {
                  if (n.IntPoint.op_Equality(r.Pt, t))
                      return !0;
                  r = r.Next
              } while (r !== e);
              return !1
          }
          ,
          n.ClipperBase.prototype.PointOnLineSegment = function(t, e, n, r) {
              return r ? t.X === e.X && t.Y === e.Y || t.X === n.X && t.Y === n.Y || t.X > e.X === t.X < n.X && t.Y > e.Y === t.Y < n.Y && L.op_Equality(L.Int128Mul(t.X - e.X, n.Y - e.Y), L.Int128Mul(n.X - e.X, t.Y - e.Y)) : t.X === e.X && t.Y === e.Y || t.X === n.X && t.Y === n.Y || t.X > e.X === t.X < n.X && t.Y > e.Y === t.Y < n.Y && (t.X - e.X) * (n.Y - e.Y) === (n.X - e.X) * (t.Y - e.Y)
          }
          ,
          n.ClipperBase.prototype.PointOnPolygon = function(t, e, n) {
              for (var r = e; ; ) {
                  if (this.PointOnLineSegment(t, r.Pt, r.Next.Pt, n))
                      return !0;
                  if ((r = r.Next) === e)
                      break
              }
              return !1
          }
          ,
          n.ClipperBase.prototype.SlopesEqual = n.ClipperBase.SlopesEqual = function() {
              var t, e, r, o, i, s, a = arguments, l = a.length;
              return 3 === l ? (t = a[0],
              e = a[1],
              a[2] ? L.op_Equality(L.Int128Mul(t.Delta.Y, e.Delta.X), L.Int128Mul(t.Delta.X, e.Delta.Y)) : n.Cast_Int64(t.Delta.Y * e.Delta.X) === n.Cast_Int64(t.Delta.X * e.Delta.Y)) : 4 === l ? (r = a[0],
              o = a[1],
              i = a[2],
              a[3] ? L.op_Equality(L.Int128Mul(r.Y - o.Y, o.X - i.X), L.Int128Mul(r.X - o.X, o.Y - i.Y)) : n.Cast_Int64((r.Y - o.Y) * (o.X - i.X)) - n.Cast_Int64((r.X - o.X) * (o.Y - i.Y)) === 0) : (r = a[0],
              o = a[1],
              i = a[2],
              s = a[3],
              a[4] ? L.op_Equality(L.Int128Mul(r.Y - o.Y, i.X - s.X), L.Int128Mul(r.X - o.X, i.Y - s.Y)) : n.Cast_Int64((r.Y - o.Y) * (i.X - s.X)) - n.Cast_Int64((r.X - o.X) * (i.Y - s.Y)) === 0)
          }
          ,
          n.ClipperBase.SlopesEqual3 = function(t, e, r) {
              return r ? L.op_Equality(L.Int128Mul(t.Delta.Y, e.Delta.X), L.Int128Mul(t.Delta.X, e.Delta.Y)) : n.Cast_Int64(t.Delta.Y * e.Delta.X) === n.Cast_Int64(t.Delta.X * e.Delta.Y)
          }
          ,
          n.ClipperBase.SlopesEqual4 = function(t, e, r, o) {
              return o ? L.op_Equality(L.Int128Mul(t.Y - e.Y, e.X - r.X), L.Int128Mul(t.X - e.X, e.Y - r.Y)) : n.Cast_Int64((t.Y - e.Y) * (e.X - r.X)) - n.Cast_Int64((t.X - e.X) * (e.Y - r.Y)) === 0
          }
          ,
          n.ClipperBase.SlopesEqual5 = function(t, e, r, o, i) {
              return i ? L.op_Equality(L.Int128Mul(t.Y - e.Y, r.X - o.X), L.Int128Mul(t.X - e.X, r.Y - o.Y)) : n.Cast_Int64((t.Y - e.Y) * (r.X - o.X)) - n.Cast_Int64((t.X - e.X) * (r.Y - o.Y)) === 0
          }
          ,
          n.ClipperBase.prototype.Clear = function() {
              this.DisposeLocalMinimaList();
              for (var t = 0, e = this.m_edges.length; t < e; ++t) {
                  for (var r = 0, o = this.m_edges[t].length; r < o; ++r)
                      this.m_edges[t][r] = null;
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
          n.ClipperBase.prototype.InitEdge = function(t, e, r, o) {
              t.Next = e,
              t.Prev = r,
              t.Curr.X = o.X,
              t.Curr.Y = o.Y,
              n.use_xyz && (t.Curr.Z = o.Z),
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
              var r, o, i = t;
              if (i.OutIdx === n.ClipperBase.Skip) {
                  if (t = i,
                  e) {
                      for (; t.Top.Y === t.Next.Bot.Y; )
                          t = t.Next;
                      for (; t !== i && t.Dx === n.ClipperBase.horizontal; )
                          t = t.Prev
                  } else {
                      for (; t.Top.Y === t.Prev.Bot.Y; )
                          t = t.Prev;
                      for (; t !== i && t.Dx === n.ClipperBase.horizontal; )
                          t = t.Next
                  }
                  if (t === i)
                      i = e ? t.Next : t.Prev;
                  else {
                      t = e ? i.Next : i.Prev;
                      var s = new n.LocalMinima;
                      s.Next = null,
                      s.Y = t.Bot.Y,
                      s.LeftBound = null,
                      s.RightBound = t,
                      t.WindDelta = 0,
                      i = this.ProcessBound(t, e),
                      this.InsertLocalMinima(s)
                  }
                  return i
              }
              if (t.Dx === n.ClipperBase.horizontal && (r = e ? t.Prev : t.Next).OutIdx !== n.ClipperBase.Skip && (r.Dx === n.ClipperBase.horizontal ? r.Bot.X !== t.Bot.X && r.Top.X !== t.Bot.X && this.ReverseHorizontal(t) : r.Bot.X !== t.Bot.X && this.ReverseHorizontal(t)),
              r = t,
              e) {
                  for (; i.Top.Y === i.Next.Bot.Y && i.Next.OutIdx !== n.ClipperBase.Skip; )
                      i = i.Next;
                  if (i.Dx === n.ClipperBase.horizontal && i.Next.OutIdx !== n.ClipperBase.Skip) {
                      for (o = i; o.Prev.Dx === n.ClipperBase.horizontal; )
                          o = o.Prev;
                      o.Prev.Top.X > i.Next.Top.X && (i = o.Prev)
                  }
                  for (; t !== i; )
                      t.NextInLML = t.Next,
                      t.Dx === n.ClipperBase.horizontal && t !== r && t.Bot.X !== t.Prev.Top.X && this.ReverseHorizontal(t),
                      t = t.Next;
                  t.Dx === n.ClipperBase.horizontal && t !== r && t.Bot.X !== t.Prev.Top.X && this.ReverseHorizontal(t),
                  i = i.Next
              } else {
                  for (; i.Top.Y === i.Prev.Bot.Y && i.Prev.OutIdx !== n.ClipperBase.Skip; )
                      i = i.Prev;
                  if (i.Dx === n.ClipperBase.horizontal && i.Prev.OutIdx !== n.ClipperBase.Skip) {
                      for (o = i; o.Next.Dx === n.ClipperBase.horizontal; )
                          o = o.Next;
                      (o.Next.Top.X === i.Prev.Top.X || o.Next.Top.X > i.Prev.Top.X) && (i = o.Next)
                  }
                  for (; t !== i; )
                      t.NextInLML = t.Prev,
                      t.Dx === n.ClipperBase.horizontal && t !== r && t.Bot.X !== t.Next.Top.X && this.ReverseHorizontal(t),
                      t = t.Prev;
                  t.Dx === n.ClipperBase.horizontal && t !== r && t.Bot.X !== t.Next.Top.X && this.ReverseHorizontal(t),
                  i = i.Prev
              }
              return i
          }
          ,
          n.ClipperBase.prototype.AddPath = function(t, e, r) {
              n.use_lines ? r || e !== n.PolyType.ptClip || n.Error("AddPath: Open paths must be subject.") : r || n.Error("AddPath: Open paths have been disabled.");
              var o = t.length - 1;
              if (r)
                  for (; o > 0 && n.IntPoint.op_Equality(t[o], t[0]); )
                      --o;
              for (; o > 0 && n.IntPoint.op_Equality(t[o], t[o - 1]); )
                  --o;
              if (r && o < 2 || !r && o < 1)
                  return !1;
              for (var i = new Array, s = 0; s <= o; s++)
                  i.push(new n.TEdge);
              var a = !0;
              i[1].Curr.X = t[1].X,
              i[1].Curr.Y = t[1].Y,
              n.use_xyz && (i[1].Curr.Z = t[1].Z);
              var l = {
                  Value: this.m_UseFullRange
              };
              this.RangeTest(t[0], l),
              this.m_UseFullRange = l.Value,
              l.Value = this.m_UseFullRange,
              this.RangeTest(t[o], l),
              this.m_UseFullRange = l.Value,
              this.InitEdge(i[0], i[1], i[o], t[0]),
              this.InitEdge(i[o], i[0], i[o - 1], t[o]);
              for (s = o - 1; s >= 1; --s)
                  l.Value = this.m_UseFullRange,
                  this.RangeTest(t[s], l),
                  this.m_UseFullRange = l.Value,
                  this.InitEdge(i[s], i[s + 1], i[s - 1], t[s]);
              for (var u, p = i[0], c = p, h = p; ; )
                  if (c.Curr !== c.Next.Curr || !r && c.Next === p) {
                      if (c.Prev === c.Next)
                          break;
                      if (!r || !n.ClipperBase.SlopesEqual(c.Prev.Curr, c.Curr, c.Next.Curr, this.m_UseFullRange) || this.PreserveCollinear && this.Pt2IsBetweenPt1AndPt3(c.Prev.Curr, c.Curr, c.Next.Curr)) {
                          if ((c = c.Next) === h || !r && c.Next === p)
                              break
                      } else
                          c === p && (p = c.Next),
                          h = c = (c = this.RemoveEdge(c)).Prev
                  } else {
                      if (c === c.Next)
                          break;
                      c === p && (p = c.Next),
                      h = c = this.RemoveEdge(c)
                  }
              if (!r && c === c.Next || r && c.Prev === c.Next)
                  return !1;
              r || (this.m_HasOpenPaths = !0,
              p.Prev.OutIdx = n.ClipperBase.Skip),
              c = p;
              do {
                  this.InitEdge2(c, e),
                  c = c.Next,
                  a && c.Curr.Y !== p.Curr.Y && (a = !1)
              } while (c !== p);
              if (a) {
                  if (r)
                      return !1;
                  for (c.Prev.OutIdx = n.ClipperBase.Skip,
                  (d = new n.LocalMinima).Next = null,
                  d.Y = c.Bot.Y,
                  d.LeftBound = null,
                  d.RightBound = c,
                  d.RightBound.Side = n.EdgeSide.esRight,
                  d.RightBound.WindDelta = 0; c.Bot.X !== c.Prev.Top.X && this.ReverseHorizontal(c),
                  c.Next.OutIdx !== n.ClipperBase.Skip; )
                      c.NextInLML = c.Next,
                      c = c.Next;
                  return this.InsertLocalMinima(d),
                  this.m_edges.push(i),
                  !0
              }
              this.m_edges.push(i);
              var f = null;
              for (n.IntPoint.op_Equality(c.Prev.Bot, c.Prev.Top) && (c = c.Next); (c = this.FindNextLocMin(c)) !== f; ) {
                  var d;
                  null === f && (f = c),
                  (d = new n.LocalMinima).Next = null,
                  d.Y = c.Bot.Y,
                  c.Dx < c.Prev.Dx ? (d.LeftBound = c.Prev,
                  d.RightBound = c,
                  u = !1) : (d.LeftBound = c,
                  d.RightBound = c.Prev,
                  u = !0),
                  d.LeftBound.Side = n.EdgeSide.esLeft,
                  d.RightBound.Side = n.EdgeSide.esRight,
                  r ? d.LeftBound.Next === d.RightBound ? d.LeftBound.WindDelta = -1 : d.LeftBound.WindDelta = 1 : d.LeftBound.WindDelta = 0,
                  d.RightBound.WindDelta = -d.LeftBound.WindDelta,
                  (c = this.ProcessBound(d.LeftBound, u)).OutIdx === n.ClipperBase.Skip && (c = this.ProcessBound(c, u));
                  var y = this.ProcessBound(d.RightBound, !u);
                  y.OutIdx === n.ClipperBase.Skip && (y = this.ProcessBound(y, !u)),
                  d.LeftBound.OutIdx === n.ClipperBase.Skip ? d.LeftBound = null : d.RightBound.OutIdx === n.ClipperBase.Skip && (d.RightBound = null),
                  this.InsertLocalMinima(d),
                  u || (c = y)
              }
              return !0
          }
          ,
          n.ClipperBase.prototype.AddPaths = function(t, e, n) {
              for (var r = !1, o = 0, i = t.length; o < i; ++o)
                  this.AddPath(t[o], e, n) && (r = !0);
              return r
          }
          ,
          n.ClipperBase.prototype.Pt2IsBetweenPt1AndPt3 = function(t, e, r) {
              return !(n.IntPoint.op_Equality(t, r) || n.IntPoint.op_Equality(t, e) || n.IntPoint.op_Equality(r, e)) && (t.X !== r.X ? e.X > t.X === e.X < r.X : e.Y > t.Y === e.Y < r.Y)
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
                  (r = new n.Scanbeam).Y = t,
                  r.Next = this.m_Scanbeam,
                  this.m_Scanbeam = r
              } else {
                  for (var e = this.m_Scanbeam; null !== e.Next && t <= e.Next.Y; )
                      e = e.Next;
                  if (t == e.Y)
                      return;
                  var r;
                  (r = new n.Scanbeam).Y = t,
                  r.Next = e.Next,
                  e.Next = r
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
                  for (var r = this.m_Maxima; null !== r.Next && t >= r.Next.X; )
                      r = r.Next;
                  if (t === r.X)
                      return;
                  e.Next = r.Next,
                  e.Prev = r,
                  null !== r.Next && (r.Next.Prev = e),
                  r.Next = e
              }
          }
          ,
          n.Clipper.prototype.Execute = function() {
              var t = arguments
                , e = t.length
                , r = t[1]instanceof n.PolyTree;
              if (4 === e && !r) {
                  var o = t[0]
                    , i = t[1]
                    , s = t[2]
                    , a = t[3];
                  if (this.m_ExecuteLocked)
                      return !1;
                  this.m_HasOpenPaths && n.Error("Error: PolyTree struct is needed for open path clipping."),
                  this.m_ExecuteLocked = !0,
                  n.Clear(i),
                  this.m_SubjFillType = s,
                  this.m_ClipFillType = a,
                  this.m_ClipType = o,
                  this.m_UsingPolyTree = !1;
                  try {
                      (u = this.ExecuteInternal()) && this.BuildResult(i)
                  } finally {
                      this.DisposeAllPolyPts(),
                      this.m_ExecuteLocked = !1
                  }
                  return u
              }
              if (4 === e && r) {
                  o = t[0];
                  var l = t[1];
                  s = t[2],
                  a = t[3];
                  if (this.m_ExecuteLocked)
                      return !1;
                  this.m_ExecuteLocked = !0,
                  this.m_SubjFillType = s,
                  this.m_ClipFillType = a,
                  this.m_ClipType = o,
                  this.m_UsingPolyTree = !0;
                  try {
                      var u;
                      (u = this.ExecuteInternal()) && this.BuildResult2(l)
                  } finally {
                      this.DisposeAllPolyPts(),
                      this.m_ExecuteLocked = !1
                  }
                  return u
              }
              if (2 === e && !r) {
                  o = t[0],
                  i = t[1];
                  return this.Execute(o, i, n.PolyFillType.pftEvenOdd, n.PolyFillType.pftEvenOdd)
              }
              if (2 === e && r) {
                  o = t[0],
                  l = t[1];
                  return this.Execute(o, l, n.PolyFillType.pftEvenOdd, n.PolyFillType.pftEvenOdd)
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
                  for (var r = 0, o = this.m_PolyOuts.length; r < o; r++) {
                      null === (i = this.m_PolyOuts[r]).Pts || i.IsOpen || (i.IsHole ^ this.ReverseSolution) == this.Area(i) > 0 && this.ReversePolyPtLinks(i.Pts)
                  }
                  this.JoinCommonEdges();
                  for (r = 0,
                  o = this.m_PolyOuts.length; r < o; r++) {
                      var i;
                      null === (i = this.m_PolyOuts[r]).Pts || i.IsOpen || this.FixupOutPolygon(i)
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
          n.Clipper.prototype.AddJoin = function(t, e, r) {
              var o = new n.Join;
              o.OutPt1 = t,
              o.OutPt2 = e,
              o.OffPt.X = r.X,
              o.OffPt.Y = r.Y,
              n.use_xyz && (o.OffPt.Z = r.Z),
              this.m_Joins.push(o)
          }
          ,
          n.Clipper.prototype.AddGhostJoin = function(t, e) {
              var r = new n.Join;
              r.OutPt1 = t,
              r.OffPt.X = e.X,
              r.OffPt.Y = e.Y,
              n.use_xyz && (r.OffPt.Z = e.Z),
              this.m_GhostJoins.push(r)
          }
          ,
          n.Clipper.prototype.SetZ = function(t, e, r) {
              if (null !== this.ZFillFunction) {
                  if (0 !== t.Z || null === this.ZFillFunction)
                      return;
                  n.IntPoint.op_Equality(t, e.Bot) ? t.Z = e.Bot.Z : n.IntPoint.op_Equality(t, e.Top) ? t.Z = e.Top.Z : n.IntPoint.op_Equality(t, r.Bot) ? t.Z = r.Bot.Z : n.IntPoint.op_Equality(t, r.Top) ? t.Z = r.Top.Z : this.ZFillFunction(e.Bot, e.Top, r.Bot, r.Top, t)
              }
          }
          ,
          n.Clipper.prototype.InsertLocalMinimaIntoAEL = function(t) {
              for (; null !== this.m_CurrentLM && this.m_CurrentLM.Y == t; ) {
                  var e = this.m_CurrentLM.LeftBound
                    , r = this.m_CurrentLM.RightBound;
                  this.PopLocalMinima();
                  var o = null;
                  if (null === e ? (this.InsertEdgeIntoAEL(r, null),
                  this.SetWindingCount(r),
                  this.IsContributing(r) && (o = this.AddOutPt(r, r.Bot))) : null === r ? (this.InsertEdgeIntoAEL(e, null),
                  this.SetWindingCount(e),
                  this.IsContributing(e) && (o = this.AddOutPt(e, e.Bot)),
                  this.InsertScanbeam(e.Top.Y)) : (this.InsertEdgeIntoAEL(e, null),
                  this.InsertEdgeIntoAEL(r, e),
                  this.SetWindingCount(e),
                  r.WindCnt = e.WindCnt,
                  r.WindCnt2 = e.WindCnt2,
                  this.IsContributing(e) && (o = this.AddLocalMinPoly(e, r, e.Bot)),
                  this.InsertScanbeam(e.Top.Y)),
                  null !== r && (n.ClipperBase.IsHorizontal(r) ? this.AddEdgeToSEL(r) : this.InsertScanbeam(r.Top.Y)),
                  null !== e && null !== r) {
                      if (null !== o && n.ClipperBase.IsHorizontal(r) && this.m_GhostJoins.length > 0 && 0 !== r.WindDelta)
                          for (var i = 0, s = this.m_GhostJoins.length; i < s; i++) {
                              var a = this.m_GhostJoins[i];
                              this.HorzSegmentsOverlap(a.OutPt1.Pt.X, a.OffPt.X, r.Bot.X, r.Top.X) && this.AddJoin(a.OutPt1, o, a.OffPt)
                          }
                      if (e.OutIdx >= 0 && null !== e.PrevInAEL && e.PrevInAEL.Curr.X === e.Bot.X && e.PrevInAEL.OutIdx >= 0 && n.ClipperBase.SlopesEqual(e.PrevInAEL, e, this.m_UseFullRange) && 0 !== e.WindDelta && 0 !== e.PrevInAEL.WindDelta) {
                          var l = this.AddOutPt(e.PrevInAEL, e.Bot);
                          this.AddJoin(o, l, e.Top)
                      }
                      if (e.NextInAEL !== r) {
                          if (r.OutIdx >= 0 && r.PrevInAEL.OutIdx >= 0 && n.ClipperBase.SlopesEqual(r.PrevInAEL, r, this.m_UseFullRange) && 0 !== r.WindDelta && 0 !== r.PrevInAEL.WindDelta) {
                              l = this.AddOutPt(r.PrevInAEL, r.Bot);
                              this.AddJoin(o, l, r.Top)
                          }
                          var u = e.NextInAEL;
                          if (null !== u)
                              for (; u !== r; )
                                  this.IntersectEdges(r, u, e.Curr, !1),
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
              var e, r;
              switch (t.PolyTyp === n.PolyType.ptSubject ? (e = this.m_SubjFillType,
              r = this.m_ClipFillType) : (e = this.m_ClipFillType,
              r = this.m_SubjFillType),
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
                  switch (r) {
                  case n.PolyFillType.pftEvenOdd:
                  case n.PolyFillType.pftNonZero:
                      return 0 !== t.WindCnt2;
                  case n.PolyFillType.pftPositive:
                      return t.WindCnt2 > 0;
                  default:
                      return t.WindCnt2 < 0
                  }
              case n.ClipType.ctUnion:
                  switch (r) {
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
                      switch (r) {
                      case n.PolyFillType.pftEvenOdd:
                      case n.PolyFillType.pftNonZero:
                          return 0 === t.WindCnt2;
                      case n.PolyFillType.pftPositive:
                          return t.WindCnt2 <= 0;
                      default:
                          return t.WindCnt2 >= 0
                      }
                  else
                      switch (r) {
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
                  switch (r) {
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
                      for (var r = !0, o = e.PrevInAEL; null !== o; )
                          o.PolyTyp === e.PolyTyp && 0 !== o.WindDelta && (r = !r),
                          o = o.PrevInAEL;
                      t.WindCnt = r ? 0 : 1
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
                      null !== (r = t.PrevInAEL) && (r.NextInAEL = e),
                      e.PrevInAEL = r,
                      e.NextInAEL = t,
                      t.PrevInAEL = e,
                      t.NextInAEL = n;
                  else if (e.NextInAEL == t) {
                      null !== (n = t.NextInAEL) && (n.PrevInAEL = e),
                      null !== (r = e.PrevInAEL) && (r.NextInAEL = t),
                      t.PrevInAEL = r,
                      t.NextInAEL = e,
                      e.PrevInAEL = t,
                      e.NextInAEL = n
                  } else {
                      var n = t.NextInAEL
                        , r = t.PrevInAEL;
                      t.NextInAEL = e.NextInAEL,
                      null !== t.NextInAEL && (t.NextInAEL.PrevInAEL = t),
                      t.PrevInAEL = e.PrevInAEL,
                      null !== t.PrevInAEL && (t.PrevInAEL.NextInAEL = t),
                      e.NextInAEL = n,
                      null !== e.NextInAEL && (e.NextInAEL.PrevInAEL = e),
                      e.PrevInAEL = r,
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
                      null !== (r = t.PrevInSEL) && (r.NextInSEL = e),
                      e.PrevInSEL = r,
                      e.NextInSEL = t,
                      t.PrevInSEL = e,
                      t.NextInSEL = n;
                  else if (e.NextInSEL === t) {
                      null !== (n = t.NextInSEL) && (n.PrevInSEL = e),
                      null !== (r = e.PrevInSEL) && (r.NextInSEL = t),
                      t.PrevInSEL = r,
                      t.NextInSEL = e,
                      e.PrevInSEL = t,
                      e.NextInSEL = n
                  } else {
                      var n = t.NextInSEL
                        , r = t.PrevInSEL;
                      t.NextInSEL = e.NextInSEL,
                      null !== t.NextInSEL && (t.NextInSEL.PrevInSEL = t),
                      t.PrevInSEL = e.PrevInSEL,
                      null !== t.PrevInSEL && (t.PrevInSEL.NextInSEL = t),
                      e.NextInSEL = n,
                      null !== e.NextInSEL && (e.NextInSEL.PrevInSEL = e),
                      e.PrevInSEL = r,
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
          n.Clipper.prototype.AddLocalMinPoly = function(t, e, r) {
              var o, i, s;
              if (n.ClipperBase.IsHorizontal(e) || t.Dx > e.Dx ? (o = this.AddOutPt(t, r),
              e.OutIdx = t.OutIdx,
              t.Side = n.EdgeSide.esLeft,
              e.Side = n.EdgeSide.esRight,
              s = (i = t).PrevInAEL === e ? e.PrevInAEL : i.PrevInAEL) : (o = this.AddOutPt(e, r),
              t.OutIdx = e.OutIdx,
              t.Side = n.EdgeSide.esRight,
              e.Side = n.EdgeSide.esLeft,
              s = (i = e).PrevInAEL == t ? t.PrevInAEL : i.PrevInAEL),
              null !== s && s.OutIdx >= 0 && n.Clipper.TopX(s, r.Y) == n.Clipper.TopX(i, r.Y) && n.ClipperBase.SlopesEqual(i, s, this.m_UseFullRange) && 0 !== i.WindDelta && 0 !== s.WindDelta) {
                  var a = this.AddOutPt(s, r);
                  this.AddJoin(o, a, i.Top)
              }
              return o
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
                  (o = this.CreateOutRec()).IsOpen = 0 === t.WindDelta;
                  var r = new n.OutPt;
                  return o.Pts = r,
                  r.Idx = o.Idx,
                  r.Pt.X = e.X,
                  r.Pt.Y = e.Y,
                  n.use_xyz && (r.Pt.Z = e.Z),
                  r.Next = r,
                  r.Prev = r,
                  o.IsOpen || this.SetHoleState(t, o),
                  t.OutIdx = o.Idx,
                  r
              }
              var o, i = (o = this.m_PolyOuts[t.OutIdx]).Pts, s = t.Side == n.EdgeSide.esLeft;
              return s && n.IntPoint.op_Equality(e, i.Pt) ? i : !s && n.IntPoint.op_Equality(e, i.Prev.Pt) ? i.Prev : ((r = new n.OutPt).Idx = o.Idx,
              r.Pt.X = e.X,
              r.Pt.Y = e.Y,
              n.use_xyz && (r.Pt.Z = e.Z),
              r.Next = i,
              r.Prev = i.Prev,
              r.Prev.Next = r,
              i.Prev = r,
              s && (o.Pts = r),
              r)
          }
          ,
          n.Clipper.prototype.GetLastOutPt = function(t) {
              var e = this.m_PolyOuts[t.OutIdx];
              return t.Side == n.EdgeSide.esLeft ? e.Pts : e.Pts.Prev
          }
          ,
          n.Clipper.prototype.SwapPoints = function(t, e) {
              var r = new n.IntPoint(t.Value);
              t.Value.X = e.Value.X,
              t.Value.Y = e.Value.Y,
              n.use_xyz && (t.Value.Z = e.Value.Z),
              e.Value.X = r.X,
              e.Value.Y = r.Y,
              n.use_xyz && (e.Value.Z = r.Z)
          }
          ,
          n.Clipper.prototype.HorzSegmentsOverlap = function(t, e, n, r) {
              var o;
              return t > e && (o = t,
              t = e,
              e = o),
              n > r && (o = n,
              n = r,
              r = o),
              t < r && n < e
          }
          ,
          n.Clipper.prototype.SetHoleState = function(t, e) {
              for (var n = !1, r = t.PrevInAEL; null !== r; )
                  r.OutIdx >= 0 && 0 != r.WindDelta && (n = !n,
                  null === e.FirstLeft && (e.FirstLeft = this.m_PolyOuts[r.OutIdx])),
                  r = r.PrevInAEL;
              n && (e.IsHole = !0)
          }
          ,
          n.Clipper.prototype.GetDx = function(t, e) {
              return t.Y === e.Y ? n.ClipperBase.horizontal : (e.X - t.X) / (e.Y - t.Y)
          }
          ,
          n.Clipper.prototype.FirstIsBottomPt = function(t, e) {
              for (var r = t.Prev; n.IntPoint.op_Equality(r.Pt, t.Pt) && r !== t; )
                  r = r.Prev;
              var o = Math.abs(this.GetDx(t.Pt, r.Pt));
              for (r = t.Next; n.IntPoint.op_Equality(r.Pt, t.Pt) && r !== t; )
                  r = r.Next;
              var i = Math.abs(this.GetDx(t.Pt, r.Pt));
              for (r = e.Prev; n.IntPoint.op_Equality(r.Pt, e.Pt) && r !== e; )
                  r = r.Prev;
              var s = Math.abs(this.GetDx(e.Pt, r.Pt));
              for (r = e.Next; n.IntPoint.op_Equality(r.Pt, e.Pt) && r !== e; )
                  r = r.Next;
              var a = Math.abs(this.GetDx(e.Pt, r.Pt));
              return o >= s && o >= a || i >= s && i >= a
          }
          ,
          n.Clipper.prototype.GetBottomPt = function(t) {
              for (var e = null, r = t.Next; r !== t; )
                  r.Pt.Y > t.Pt.Y ? (t = r,
                  e = null) : r.Pt.Y === t.Pt.Y && r.Pt.X <= t.Pt.X && (r.Pt.X < t.Pt.X ? (e = null,
                  t = r) : r.Next !== t && r.Prev !== t && (e = r)),
                  r = r.Next;
              if (null !== e)
                  for (; e !== r; )
                      for (this.FirstIsBottomPt(r, e) || (t = e),
                      e = e.Next; n.IntPoint.op_Inequality(e.Pt, t.Pt); )
                          e = e.Next;
              return t
          }
          ,
          n.Clipper.prototype.GetLowermostRec = function(t, e) {
              null === t.BottomPt && (t.BottomPt = this.GetBottomPt(t.Pts)),
              null === e.BottomPt && (e.BottomPt = this.GetBottomPt(e.Pts));
              var n = t.BottomPt
                , r = e.BottomPt;
              return n.Pt.Y > r.Pt.Y ? t : n.Pt.Y < r.Pt.Y ? e : n.Pt.X < r.Pt.X ? t : n.Pt.X > r.Pt.X || n.Next === n ? e : r.Next === r || this.FirstIsBottomPt(n, r) ? t : e
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
              var r, o = this.m_PolyOuts[t.OutIdx], i = this.m_PolyOuts[e.OutIdx];
              r = this.Param1RightOfParam2(o, i) ? i : this.Param1RightOfParam2(i, o) ? o : this.GetLowermostRec(o, i);
              var s, a = o.Pts, l = a.Prev, u = i.Pts, p = u.Prev;
              t.Side === n.EdgeSide.esLeft ? (e.Side === n.EdgeSide.esLeft ? (this.ReversePolyPtLinks(u),
              u.Next = a,
              a.Prev = u,
              l.Next = p,
              p.Prev = l,
              o.Pts = p) : (p.Next = a,
              a.Prev = p,
              u.Prev = l,
              l.Next = u,
              o.Pts = u),
              s = n.EdgeSide.esLeft) : (e.Side === n.EdgeSide.esRight ? (this.ReversePolyPtLinks(u),
              l.Next = p,
              p.Prev = l,
              u.Next = a,
              a.Prev = u) : (l.Next = u,
              u.Prev = l,
              a.Prev = p,
              p.Next = a),
              s = n.EdgeSide.esRight),
              o.BottomPt = null,
              r === i && (i.FirstLeft !== o && (o.FirstLeft = i.FirstLeft),
              o.IsHole = i.IsHole),
              i.Pts = null,
              i.BottomPt = null,
              i.FirstLeft = o;
              var c = t.OutIdx
                , h = e.OutIdx;
              t.OutIdx = -1,
              e.OutIdx = -1;
              for (var f = this.m_ActiveEdges; null !== f; ) {
                  if (f.OutIdx === h) {
                      f.OutIdx = c,
                      f.Side = s;
                      break
                  }
                  f = f.NextInAEL
              }
              i.Idx = o.Idx
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
          n.Clipper.prototype.IntersectEdges = function(t, e, r) {
              var o = t.OutIdx >= 0
                , i = e.OutIdx >= 0;
              if (n.use_xyz && this.SetZ(r, t, e),
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
                  var a, l, u, p, c, h;
                  switch (t.PolyTyp === n.PolyType.ptSubject ? (a = this.m_SubjFillType,
                  u = this.m_ClipFillType) : (a = this.m_ClipFillType,
                  u = this.m_SubjFillType),
                  e.PolyTyp === n.PolyType.ptSubject ? (l = this.m_SubjFillType,
                  p = this.m_ClipFillType) : (l = this.m_ClipFillType,
                  p = this.m_SubjFillType),
                  a) {
                  case n.PolyFillType.pftPositive:
                      c = t.WindCnt;
                      break;
                  case n.PolyFillType.pftNegative:
                      c = -t.WindCnt;
                      break;
                  default:
                      c = Math.abs(t.WindCnt)
                  }
                  switch (l) {
                  case n.PolyFillType.pftPositive:
                      h = e.WindCnt;
                      break;
                  case n.PolyFillType.pftNegative:
                      h = -e.WindCnt;
                      break;
                  default:
                      h = Math.abs(e.WindCnt)
                  }
                  if (o && i)
                      0 !== c && 1 !== c || 0 !== h && 1 !== h || t.PolyTyp !== e.PolyTyp && this.m_ClipType !== n.ClipType.ctXor ? this.AddLocalMaxPoly(t, e, r) : (this.AddOutPt(t, r),
                      this.AddOutPt(e, r),
                      n.Clipper.SwapSides(t, e),
                      n.Clipper.SwapPolyIndexes(t, e));
                  else if (o)
                      0 !== h && 1 !== h || (this.AddOutPt(t, r),
                      n.Clipper.SwapSides(t, e),
                      n.Clipper.SwapPolyIndexes(t, e));
                  else if (i)
                      0 !== c && 1 !== c || (this.AddOutPt(e, r),
                      n.Clipper.SwapSides(t, e),
                      n.Clipper.SwapPolyIndexes(t, e));
                  else if ((0 === c || 1 === c) && (0 === h || 1 === h)) {
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
                          this.AddLocalMinPoly(t, e, r);
                      else if (1 === c && 1 === h)
                          switch (this.m_ClipType) {
                          case n.ClipType.ctIntersection:
                              f > 0 && d > 0 && this.AddLocalMinPoly(t, e, r);
                              break;
                          case n.ClipType.ctUnion:
                              f <= 0 && d <= 0 && this.AddLocalMinPoly(t, e, r);
                              break;
                          case n.ClipType.ctDifference:
                              (t.PolyTyp === n.PolyType.ptClip && f > 0 && d > 0 || t.PolyTyp === n.PolyType.ptSubject && f <= 0 && d <= 0) && this.AddLocalMinPoly(t, e, r);
                              break;
                          case n.ClipType.ctXor:
                              this.AddLocalMinPoly(t, e, r)
                          }
                      else
                          n.Clipper.SwapSides(t, e)
                  }
              } else {
                  if (0 === t.WindDelta && 0 === e.WindDelta)
                      return;
                  t.PolyTyp === e.PolyTyp && t.WindDelta !== e.WindDelta && this.m_ClipType === n.ClipType.ctUnion ? 0 === t.WindDelta ? i && (this.AddOutPt(t, r),
                  o && (t.OutIdx = -1)) : o && (this.AddOutPt(e, r),
                  i && (e.OutIdx = -1)) : t.PolyTyp !== e.PolyTyp && (0 !== t.WindDelta || 1 !== Math.abs(e.WindCnt) || this.m_ClipType === n.ClipType.ctUnion && 0 !== e.WindCnt2 ? 0 !== e.WindDelta || 1 !== Math.abs(t.WindCnt) || this.m_ClipType === n.ClipType.ctUnion && 0 !== t.WindCnt2 || (this.AddOutPt(e, r),
                  i && (e.OutIdx = -1)) : (this.AddOutPt(t, r),
                  o && (t.OutIdx = -1)))
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
                , r = t.NextInAEL;
              return t.NextInLML.OutIdx = t.OutIdx,
              null !== e ? e.NextInAEL = t.NextInLML : this.m_ActiveEdges = t.NextInLML,
              null !== r && (r.PrevInAEL = t.NextInLML),
              t.NextInLML.Side = t.Side,
              t.NextInLML.WindDelta = t.WindDelta,
              t.NextInLML.WindCnt = t.WindCnt,
              t.NextInLML.WindCnt2 = t.WindCnt2,
              (t = t.NextInLML).Curr.X = t.Bot.X,
              t.Curr.Y = t.Bot.Y,
              n.use_xyz && (t.Curr.Z = t.Bot.Z),
              t.PrevInAEL = e,
              t.NextInAEL = r,
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
              for (var r = e.Dir, o = e.Left, i = e.Right, s = t, a = null; null !== s.NextInLML && n.ClipperBase.IsHorizontal(s.NextInLML); )
                  s = s.NextInLML;
              null === s.NextInLML && (a = this.GetMaximaPair(s));
              var l = this.m_Maxima;
              if (null !== l)
                  if (r === n.Direction.dLeftToRight) {
                      for (; null !== l && l.X <= t.Bot.X; )
                          l = l.Next;
                      null !== l && l.X >= s.Top.X && (l = null)
                  } else {
                      for (; null != l.Next && l.Next.X < t.Bot.X; )
                          l = l.Next;
                      l.X <= s.Top.X && (l = null)
                  }
              for (var u = null; ; ) {
                  for (var p = t === s, c = this.GetNextInAEL(t, r); null !== c; ) {
                      if (null != l)
                          if (r === n.Direction.dLeftToRight)
                              for (; null !== l && l.X < c.Curr.X; )
                                  t.OutIdx >= 0 && this.AddOutPt(t, new n.IntPoint(l.X,t.Bot.Y)),
                                  l = l.Next;
                          else
                              for (; null !== l && l.X > c.Curr.X; )
                                  t.OutIdx >= 0 && this.AddOutPt(t, new n.IntPoint(l.X,t.Bot.Y)),
                                  l = l.Prev;
                      if (r === n.Direction.dLeftToRight && c.Curr.X > i || r === n.Direction.dRightToLeft && c.Curr.X < o)
                          break;
                      if (c.Curr.X == t.Top.X && null != t.NextInLML && c.Dx < t.NextInLML.Dx)
                          break;
                      if (t.OutIdx >= 0) {
                          u = this.AddOutPt(t, c.Curr);
                          for (var h = this.m_SortedEdges; null !== h; ) {
                              if (h.OutIdx >= 0 && this.HorzSegmentsOverlap(t.Bot.X, t.Top.X, h.Bot.X, h.Top.X)) {
                                  var f = this.GetLastOutPt(h);
                                  this.AddJoin(f, u, h.Top)
                              }
                              h = h.NextInSEL
                          }
                          this.AddGhostJoin(u, t.Bot)
                      }
                      if (c === a && p)
                          return t.OutIdx >= 0 && this.AddLocalMaxPoly(t, a, t.Top),
                          this.DeleteFromAEL(t),
                          void this.DeleteFromAEL(a);
                      if (r == n.Direction.dLeftToRight) {
                          var d = new n.IntPoint(c.Curr.X,t.Curr.Y);
                          this.IntersectEdges(t, c, d)
                      } else {
                          d = new n.IntPoint(c.Curr.X,t.Curr.Y);
                          this.IntersectEdges(c, t, d)
                      }
                      var y = this.GetNextInAEL(c, r);
                      this.SwapPositionsInAEL(t, c),
                      c = y
                  }
                  if (null == t.NextInLML || !n.ClipperBase.IsHorizontal(t.NextInLML))
                      break;
                  (t = this.UpdateEdgeIntoAEL(t)).OutIdx >= 0 && this.AddOutPt(t, t.Bot);
                  e = {
                      Dir: r,
                      Left: o,
                      Right: i
                  };
                  this.GetHorzDirection(t, e),
                  r = e.Dir,
                  o = e.Left,
                  i = e.Right
              }
              if (t.OutIdx >= 0 && null === u) {
                  u = this.GetLastOutPt(t);
                  for (h = this.m_SortedEdges; null !== h; ) {
                      if (h.OutIdx >= 0 && this.HorzSegmentsOverlap(t.Bot.X, t.Top.X, h.Bot.X, h.Top.X)) {
                          f = this.GetLastOutPt(h);
                          this.AddJoin(f, u, h.Top)
                      }
                      h = h.NextInSEL
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
                  for (var r = !0; r && null !== this.m_SortedEdges; ) {
                      for (r = !1,
                      e = this.m_SortedEdges; null !== e.NextInSEL; ) {
                          var o = e.NextInSEL
                            , i = new n.IntPoint;
                          if (e.Curr.X > o.Curr.X) {
                              this.IntersectPoint(e, o, i);
                              var s = new n.IntersectNode;
                              s.Edge1 = e,
                              s.Edge2 = o,
                              s.Pt.X = i.X,
                              s.Pt.Y = i.Y,
                              n.use_xyz && (s.Pt.Z = i.Z),
                              this.m_IntersectList.push(s),
                              this.SwapPositionsInSEL(e, o),
                              r = !0
                          } else
                              e = o
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
                      var r = this.m_IntersectList[e];
                      this.m_IntersectList[e] = this.m_IntersectList[n],
                      this.m_IntersectList[n] = r
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
          n.Clipper.prototype.IntersectPoint = function(t, e, r) {
              var o, i;
              if (r.X = 0,
              r.Y = 0,
              t.Dx === e.Dx)
                  return r.Y = t.Curr.Y,
                  void (r.X = n.Clipper.TopX(t, r.Y));
              if (0 === t.Delta.X)
                  r.X = t.Bot.X,
                  n.ClipperBase.IsHorizontal(e) ? r.Y = e.Bot.Y : (i = e.Bot.Y - e.Bot.X / e.Dx,
                  r.Y = n.Clipper.Round(r.X / e.Dx + i));
              else if (0 === e.Delta.X)
                  r.X = e.Bot.X,
                  n.ClipperBase.IsHorizontal(t) ? r.Y = t.Bot.Y : (o = t.Bot.Y - t.Bot.X / t.Dx,
                  r.Y = n.Clipper.Round(r.X / t.Dx + o));
              else {
                  o = t.Bot.X - t.Bot.Y * t.Dx;
                  var s = ((i = e.Bot.X - e.Bot.Y * e.Dx) - o) / (t.Dx - e.Dx);
                  r.Y = n.Clipper.Round(s),
                  Math.abs(t.Dx) < Math.abs(e.Dx) ? r.X = n.Clipper.Round(t.Dx * s + o) : r.X = n.Clipper.Round(e.Dx * s + i)
              }
              if (r.Y < t.Top.Y || r.Y < e.Top.Y) {
                  if (t.Top.Y > e.Top.Y)
                      return r.Y = t.Top.Y,
                      r.X = n.Clipper.TopX(e, t.Top.Y),
                      r.X < t.Top.X;
                  r.Y = e.Top.Y,
                  Math.abs(t.Dx) < Math.abs(e.Dx) ? r.X = n.Clipper.TopX(t, r.Y) : r.X = n.Clipper.TopX(e, r.Y)
              }
              r.Y > t.Curr.Y && (r.Y = t.Curr.Y,
              Math.abs(t.Dx) > Math.abs(e.Dx) ? r.X = n.Clipper.TopX(e, r.Y) : r.X = n.Clipper.TopX(t, r.Y))
          }
          ,
          n.Clipper.prototype.ProcessEdgesAtTopOfScanbeam = function(t) {
              for (var e = this.m_ActiveEdges; null !== e; ) {
                  var r = this.IsMaxima(e, t);
                  if (r) {
                      var o = this.GetMaximaPair(e);
                      r = null === o || !n.ClipperBase.IsHorizontal(o)
                  }
                  if (r) {
                      this.StrictlySimple && this.InsertMaxima(e.Top.X);
                      var i = e.PrevInAEL;
                      this.DoMaxima(e),
                      e = null === i ? this.m_ActiveEdges : i.NextInAEL
                  } else {
                      if (this.IsIntermediate(e, t) && n.ClipperBase.IsHorizontal(e.NextInLML) ? ((e = this.UpdateEdgeIntoAEL(e)).OutIdx >= 0 && this.AddOutPt(e, e.Bot),
                      this.AddEdgeToSEL(e)) : (e.Curr.X = n.Clipper.TopX(e, t),
                      e.Curr.Y = t),
                      this.StrictlySimple) {
                          i = e.PrevInAEL;
                          if (e.OutIdx >= 0 && 0 !== e.WindDelta && null !== i && i.OutIdx >= 0 && i.Curr.X === e.Curr.X && 0 !== i.WindDelta) {
                              var s = new n.IntPoint(e.Curr);
                              n.use_xyz && this.SetZ(s, i, e);
                              var a = this.AddOutPt(i, s)
                                , l = this.AddOutPt(e, s);
                              this.AddJoin(a, l, s)
                          }
                      }
                      e = e.NextInAEL
                  }
              }
              for (this.ProcessHorizontals(),
              this.m_Maxima = null,
              e = this.m_ActiveEdges; null !== e; ) {
                  if (this.IsIntermediate(e, t)) {
                      a = null;
                      e.OutIdx >= 0 && (a = this.AddOutPt(e, e.Top));
                      i = (e = this.UpdateEdgeIntoAEL(e)).PrevInAEL;
                      var u = e.NextInAEL;
                      if (null !== i && i.Curr.X === e.Bot.X && i.Curr.Y === e.Bot.Y && null !== a && i.OutIdx >= 0 && i.Curr.Y > i.Top.Y && n.ClipperBase.SlopesEqual(e, i, this.m_UseFullRange) && 0 !== e.WindDelta && 0 !== i.WindDelta) {
                          l = this.AddOutPt(i, e.Bot);
                          this.AddJoin(a, l, e.Top)
                      } else if (null !== u && u.Curr.X === e.Bot.X && u.Curr.Y == e.Bot.Y && null !== a && u.OutIdx >= 0 && u.Curr.Y > u.Top.Y && n.ClipperBase.SlopesEqual(e, u, this.m_UseFullRange) && 0 !== e.WindDelta && 0 !== u.WindDelta) {
                          l = this.AddOutPt(u, e.Bot);
                          this.AddJoin(a, l, e.Top)
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
              for (var r = t.NextInAEL; null !== r && r !== e; )
                  this.IntersectEdges(t, r, t.Top),
                  this.SwapPositionsInAEL(t, r),
                  r = t.NextInAEL;
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
              for (var e = 0, r = this.m_PolyOuts.length; e < r; e++) {
                  var o = this.m_PolyOuts[e];
                  if (null !== o.Pts) {
                      var i = o.Pts.Prev
                        , s = this.PointCount(i);
                      if (!(s < 2)) {
                          for (var a = new Array(s), l = 0; l < s; l++)
                              a[l] = i.Pt,
                              i = i.Prev;
                          t.push(a)
                      }
                  }
              }
          }
          ,
          n.Clipper.prototype.BuildResult2 = function(t) {
              t.Clear();
              for (var e = 0, r = this.m_PolyOuts.length; e < r; e++) {
                  var o = this.m_PolyOuts[e]
                    , i = this.PointCount(o.Pts);
                  if (!(o.IsOpen && i < 2 || !o.IsOpen && i < 3)) {
                      this.FixHoleLinkage(o);
                      var s = new n.PolyNode;
                      t.m_AllPolys.push(s),
                      o.PolyNode = s,
                      s.m_polygon.length = i;
                      for (var a = o.Pts.Prev, l = 0; l < i; l++)
                          s.m_polygon[l] = a.Pt,
                          a = a.Prev
                  }
              }
              for (e = 0,
              r = this.m_PolyOuts.length; e < r; e++) {
                  null !== (o = this.m_PolyOuts[e]).PolyNode && (o.IsOpen ? (o.PolyNode.IsOpen = !0,
                  t.AddChild(o.PolyNode)) : null !== o.FirstLeft && null !== o.FirstLeft.PolyNode ? o.FirstLeft.PolyNode.AddChild(o.PolyNode) : t.AddChild(o.PolyNode))
              }
          }
          ,
          n.Clipper.prototype.FixupOutPolygon = function(t) {
              var e = null;
              t.BottomPt = null;
              for (var r = t.Pts, o = this.PreserveCollinear || this.StrictlySimple; ; ) {
                  if (r.Prev === r || r.Prev === r.Next)
                      return void (t.Pts = null);
                  if (n.IntPoint.op_Equality(r.Pt, r.Next.Pt) || n.IntPoint.op_Equality(r.Pt, r.Prev.Pt) || n.ClipperBase.SlopesEqual(r.Prev.Pt, r.Pt, r.Next.Pt, this.m_UseFullRange) && (!o || !this.Pt2IsBetweenPt1AndPt3(r.Prev.Pt, r.Pt, r.Next.Pt)))
                      e = null,
                      r.Prev.Next = r.Next,
                      r.Next.Prev = r.Prev,
                      r = r.Prev;
                  else {
                      if (r === e)
                          break;
                      null === e && (e = r),
                      r = r.Next
                  }
              }
              t.Pts = r
          }
          ,
          n.Clipper.prototype.DupOutPt = function(t, e) {
              var r = new n.OutPt;
              return r.Pt.X = t.Pt.X,
              r.Pt.Y = t.Pt.Y,
              n.use_xyz && (r.Pt.Z = t.Pt.Z),
              r.Idx = t.Idx,
              e ? (r.Next = t.Next,
              r.Prev = t,
              t.Next.Prev = r,
              t.Next = r) : (r.Prev = t.Prev,
              r.Next = t,
              t.Prev.Next = r,
              t.Prev = r),
              r
          }
          ,
          n.Clipper.prototype.GetOverlap = function(t, e, n, r, o) {
              return t < e ? n < r ? (o.Left = Math.max(t, n),
              o.Right = Math.min(e, r)) : (o.Left = Math.max(t, r),
              o.Right = Math.min(e, n)) : n < r ? (o.Left = Math.max(e, n),
              o.Right = Math.min(t, r)) : (o.Left = Math.max(e, r),
              o.Right = Math.min(t, n)),
              o.Left < o.Right
          }
          ,
          n.Clipper.prototype.JoinHorz = function(t, e, r, o, i, s) {
              var a = t.Pt.X > e.Pt.X ? n.Direction.dRightToLeft : n.Direction.dLeftToRight
                , l = r.Pt.X > o.Pt.X ? n.Direction.dRightToLeft : n.Direction.dLeftToRight;
              if (a === l)
                  return !1;
              if (a === n.Direction.dLeftToRight) {
                  for (; t.Next.Pt.X <= i.X && t.Next.Pt.X >= t.Pt.X && t.Next.Pt.Y === i.Y; )
                      t = t.Next;
                  s && t.Pt.X !== i.X && (t = t.Next),
                  e = this.DupOutPt(t, !s),
                  n.IntPoint.op_Inequality(e.Pt, i) && ((t = e).Pt.X = i.X,
                  t.Pt.Y = i.Y,
                  n.use_xyz && (t.Pt.Z = i.Z),
                  e = this.DupOutPt(t, !s))
              } else {
                  for (; t.Next.Pt.X >= i.X && t.Next.Pt.X <= t.Pt.X && t.Next.Pt.Y === i.Y; )
                      t = t.Next;
                  s || t.Pt.X === i.X || (t = t.Next),
                  e = this.DupOutPt(t, s),
                  n.IntPoint.op_Inequality(e.Pt, i) && ((t = e).Pt.X = i.X,
                  t.Pt.Y = i.Y,
                  n.use_xyz && (t.Pt.Z = i.Z),
                  e = this.DupOutPt(t, s))
              }
              if (l === n.Direction.dLeftToRight) {
                  for (; r.Next.Pt.X <= i.X && r.Next.Pt.X >= r.Pt.X && r.Next.Pt.Y === i.Y; )
                      r = r.Next;
                  s && r.Pt.X !== i.X && (r = r.Next),
                  o = this.DupOutPt(r, !s),
                  n.IntPoint.op_Inequality(o.Pt, i) && ((r = o).Pt.X = i.X,
                  r.Pt.Y = i.Y,
                  n.use_xyz && (r.Pt.Z = i.Z),
                  o = this.DupOutPt(r, !s))
              } else {
                  for (; r.Next.Pt.X >= i.X && r.Next.Pt.X <= r.Pt.X && r.Next.Pt.Y === i.Y; )
                      r = r.Next;
                  s || r.Pt.X === i.X || (r = r.Next),
                  o = this.DupOutPt(r, s),
                  n.IntPoint.op_Inequality(o.Pt, i) && ((r = o).Pt.X = i.X,
                  r.Pt.Y = i.Y,
                  n.use_xyz && (r.Pt.Z = i.Z),
                  o = this.DupOutPt(r, s))
              }
              return a === n.Direction.dLeftToRight === s ? (t.Prev = r,
              r.Next = t,
              e.Next = o,
              o.Prev = e) : (t.Next = r,
              r.Prev = t,
              e.Prev = o,
              o.Next = e),
              !0
          }
          ,
          n.Clipper.prototype.JoinPoints = function(t, e, r) {
              var o = t.OutPt1
                , i = new n.OutPt
                , s = t.OutPt2
                , a = new n.OutPt
                , l = t.OutPt1.Pt.Y === t.OffPt.Y;
              if (l && n.IntPoint.op_Equality(t.OffPt, t.OutPt1.Pt) && n.IntPoint.op_Equality(t.OffPt, t.OutPt2.Pt)) {
                  if (e !== r)
                      return !1;
                  for (i = t.OutPt1.Next; i !== o && n.IntPoint.op_Equality(i.Pt, t.OffPt); )
                      i = i.Next;
                  var u = i.Pt.Y > t.OffPt.Y;
                  for (a = t.OutPt2.Next; a !== s && n.IntPoint.op_Equality(a.Pt, t.OffPt); )
                      a = a.Next;
                  return u !== a.Pt.Y > t.OffPt.Y && (u ? (i = this.DupOutPt(o, !1),
                  a = this.DupOutPt(s, !0),
                  o.Prev = s,
                  s.Next = o,
                  i.Next = a,
                  a.Prev = i,
                  t.OutPt1 = o,
                  t.OutPt2 = i,
                  !0) : (i = this.DupOutPt(o, !0),
                  a = this.DupOutPt(s, !1),
                  o.Next = s,
                  s.Prev = o,
                  i.Prev = a,
                  a.Next = i,
                  t.OutPt1 = o,
                  t.OutPt2 = i,
                  !0))
              }
              if (l) {
                  for (i = o; o.Prev.Pt.Y === o.Pt.Y && o.Prev !== i && o.Prev !== s; )
                      o = o.Prev;
                  for (; i.Next.Pt.Y === i.Pt.Y && i.Next !== o && i.Next !== s; )
                      i = i.Next;
                  if (i.Next === o || i.Next === s)
                      return !1;
                  for (a = s; s.Prev.Pt.Y === s.Pt.Y && s.Prev !== a && s.Prev !== i; )
                      s = s.Prev;
                  for (; a.Next.Pt.Y === a.Pt.Y && a.Next !== s && a.Next !== o; )
                      a = a.Next;
                  if (a.Next === s || a.Next === o)
                      return !1;
                  var p = {
                      Left: null,
                      Right: null
                  };
                  if (!this.GetOverlap(o.Pt.X, i.Pt.X, s.Pt.X, a.Pt.X, p))
                      return !1;
                  var c, h = p.Left, f = p.Right, d = new n.IntPoint;
                  return o.Pt.X >= h && o.Pt.X <= f ? (d.X = o.Pt.X,
                  d.Y = o.Pt.Y,
                  n.use_xyz && (d.Z = o.Pt.Z),
                  c = o.Pt.X > i.Pt.X) : s.Pt.X >= h && s.Pt.X <= f ? (d.X = s.Pt.X,
                  d.Y = s.Pt.Y,
                  n.use_xyz && (d.Z = s.Pt.Z),
                  c = s.Pt.X > a.Pt.X) : i.Pt.X >= h && i.Pt.X <= f ? (d.X = i.Pt.X,
                  d.Y = i.Pt.Y,
                  n.use_xyz && (d.Z = i.Pt.Z),
                  c = i.Pt.X > o.Pt.X) : (d.X = a.Pt.X,
                  d.Y = a.Pt.Y,
                  n.use_xyz && (d.Z = a.Pt.Z),
                  c = a.Pt.X > s.Pt.X),
                  t.OutPt1 = o,
                  t.OutPt2 = s,
                  this.JoinHorz(o, i, s, a, d, c)
              }
              for (i = o.Next; n.IntPoint.op_Equality(i.Pt, o.Pt) && i !== o; )
                  i = i.Next;
              var y = i.Pt.Y > o.Pt.Y || !n.ClipperBase.SlopesEqual(o.Pt, i.Pt, t.OffPt, this.m_UseFullRange);
              if (y) {
                  for (i = o.Prev; n.IntPoint.op_Equality(i.Pt, o.Pt) && i !== o; )
                      i = i.Prev;
                  if (i.Pt.Y > o.Pt.Y || !n.ClipperBase.SlopesEqual(o.Pt, i.Pt, t.OffPt, this.m_UseFullRange))
                      return !1
              }
              for (a = s.Next; n.IntPoint.op_Equality(a.Pt, s.Pt) && a !== s; )
                  a = a.Next;
              var m = a.Pt.Y > s.Pt.Y || !n.ClipperBase.SlopesEqual(s.Pt, a.Pt, t.OffPt, this.m_UseFullRange);
              if (m) {
                  for (a = s.Prev; n.IntPoint.op_Equality(a.Pt, s.Pt) && a !== s; )
                      a = a.Prev;
                  if (a.Pt.Y > s.Pt.Y || !n.ClipperBase.SlopesEqual(s.Pt, a.Pt, t.OffPt, this.m_UseFullRange))
                      return !1
              }
              return i !== o && a !== s && i !== a && (e !== r || y !== m) && (y ? (i = this.DupOutPt(o, !1),
              a = this.DupOutPt(s, !0),
              o.Prev = s,
              s.Next = o,
              i.Next = a,
              a.Prev = i,
              t.OutPt1 = o,
              t.OutPt2 = i,
              !0) : (i = this.DupOutPt(o, !0),
              a = this.DupOutPt(s, !1),
              o.Next = s,
              s.Prev = o,
              i.Prev = a,
              a.Next = i,
              t.OutPt1 = o,
              t.OutPt2 = i,
              !0))
          }
          ,
          n.Clipper.GetBounds = function(t) {
              for (var e = 0, r = t.length; e < r && 0 === t[e].length; )
                  e++;
              if (e === r)
                  return new n.IntRect(0,0,0,0);
              var o = new n.IntRect;
              for (o.left = t[e][0].X,
              o.right = o.left,
              o.top = t[e][0].Y,
              o.bottom = o.top; e < r; e++)
                  for (var i = 0, s = t[e].length; i < s; i++)
                      t[e][i].X < o.left ? o.left = t[e][i].X : t[e][i].X > o.right && (o.right = t[e][i].X),
                      t[e][i].Y < o.top ? o.top = t[e][i].Y : t[e][i].Y > o.bottom && (o.bottom = t[e][i].Y);
              return o
          }
          ,
          n.Clipper.prototype.GetBounds2 = function(t) {
              var e = t
                , r = new n.IntRect;
              for (r.left = t.Pt.X,
              r.right = t.Pt.X,
              r.top = t.Pt.Y,
              r.bottom = t.Pt.Y,
              t = t.Next; t !== e; )
                  t.Pt.X < r.left && (r.left = t.Pt.X),
                  t.Pt.X > r.right && (r.right = t.Pt.X),
                  t.Pt.Y < r.top && (r.top = t.Pt.Y),
                  t.Pt.Y > r.bottom && (r.bottom = t.Pt.Y),
                  t = t.Next;
              return r
          }
          ,
          n.Clipper.PointInPolygon = function(t, e) {
              var n = 0
                , r = e.length;
              if (r < 3)
                  return 0;
              for (var o = e[0], i = 1; i <= r; ++i) {
                  var s = i === r ? e[0] : e[i];
                  if (s.Y === t.Y && (s.X === t.X || o.Y === t.Y && s.X > t.X === o.X < t.X))
                      return -1;
                  if (o.Y < t.Y !== s.Y < t.Y)
                      if (o.X >= t.X)
                          if (s.X > t.X)
                              n = 1 - n;
                          else {
                              if (0 === (a = (o.X - t.X) * (s.Y - t.Y) - (s.X - t.X) * (o.Y - t.Y)))
                                  return -1;
                              a > 0 === s.Y > o.Y && (n = 1 - n)
                          }
                      else if (s.X > t.X) {
                          var a;
                          if (0 === (a = (o.X - t.X) * (s.Y - t.Y) - (s.X - t.X) * (o.Y - t.Y)))
                              return -1;
                          a > 0 === s.Y > o.Y && (n = 1 - n)
                      }
                  o = s
              }
              return n
          }
          ,
          n.Clipper.prototype.PointInPolygon = function(t, e) {
              var n = 0
                , r = e
                , o = t.X
                , i = t.Y
                , s = e.Pt.X
                , a = e.Pt.Y;
              do {
                  var l = (e = e.Next).Pt.X
                    , u = e.Pt.Y;
                  if (u === i && (l === o || a === i && l > o === s < o))
                      return -1;
                  if (a < i !== u < i)
                      if (s >= o)
                          if (l > o)
                              n = 1 - n;
                          else {
                              if (0 === (p = (s - o) * (u - i) - (l - o) * (a - i)))
                                  return -1;
                              p > 0 === u > a && (n = 1 - n)
                          }
                      else if (l > o) {
                          var p;
                          if (0 === (p = (s - o) * (u - i) - (l - o) * (a - i)))
                              return -1;
                          p > 0 === u > a && (n = 1 - n)
                      }
                  s = l,
                  a = u
              } while (r !== e);
              return n
          }
          ,
          n.Clipper.prototype.Poly2ContainsPoly1 = function(t, e) {
              var n = t;
              do {
                  var r = this.PointInPolygon(n.Pt, e);
                  if (r >= 0)
                      return r > 0;
                  n = n.Next
              } while (n !== t);
              return !0
          }
          ,
          n.Clipper.prototype.FixupFirstLefts1 = function(t, e) {
              for (var n = 0, r = this.m_PolyOuts.length; n < r; n++) {
                  var o = this.m_PolyOuts[n];
                  if (null !== o.Pts && null !== o.FirstLeft)
                      this.ParseFirstLeft(o.FirstLeft) === t && this.Poly2ContainsPoly1(o.Pts, e.Pts) && (o.FirstLeft = e)
              }
          }
          ,
          n.Clipper.prototype.FixupFirstLefts2 = function(t, e) {
              for (var n = 0, r = this.m_PolyOuts, o = r.length, i = r[n]; n < o; i = r[++n])
                  i.FirstLeft === t && (i.FirstLeft = e)
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
                  var r, o = this.m_Joins[t], i = this.GetOutRec(o.OutPt1.Idx), s = this.GetOutRec(o.OutPt2.Idx);
                  if (null !== i.Pts && null !== s.Pts)
                      if (!i.IsOpen && !s.IsOpen)
                          if (r = i === s ? i : this.Param1RightOfParam2(i, s) ? s : this.Param1RightOfParam2(s, i) ? i : this.GetLowermostRec(i, s),
                          this.JoinPoints(o, i, s))
                              if (i === s) {
                                  if (i.Pts = o.OutPt1,
                                  i.BottomPt = null,
                                  (s = this.CreateOutRec()).Pts = o.OutPt2,
                                  this.UpdateOutPtIdxs(s),
                                  this.m_UsingPolyTree)
                                      for (var a = 0, l = this.m_PolyOuts.length; a < l - 1; a++) {
                                          var u = this.m_PolyOuts[a];
                                          null !== u.Pts && n.Clipper.ParseFirstLeft(u.FirstLeft) === i && u.IsHole != i.IsHole && (this.Poly2ContainsPoly1(u.Pts, o.OutPt2) && (u.FirstLeft = s))
                                      }
                                  this.Poly2ContainsPoly1(s.Pts, i.Pts) ? (s.IsHole = !i.IsHole,
                                  s.FirstLeft = i,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(s, i),
                                  (s.IsHole ^ this.ReverseSolution) == this.Area(s) > 0 && this.ReversePolyPtLinks(s.Pts)) : this.Poly2ContainsPoly1(i.Pts, s.Pts) ? (s.IsHole = i.IsHole,
                                  i.IsHole = !s.IsHole,
                                  s.FirstLeft = i.FirstLeft,
                                  i.FirstLeft = s,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(i, s),
                                  (i.IsHole ^ this.ReverseSolution) == this.Area(i) > 0 && this.ReversePolyPtLinks(i.Pts)) : (s.IsHole = i.IsHole,
                                  s.FirstLeft = i.FirstLeft,
                                  this.m_UsingPolyTree && this.FixupFirstLefts1(i, s))
                              } else
                                  s.Pts = null,
                                  s.BottomPt = null,
                                  s.Idx = i.Idx,
                                  i.IsHole = r.IsHole,
                                  r === s && (i.FirstLeft = s.FirstLeft),
                                  s.FirstLeft = i,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(s, i)
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
                    , r = e.Pts;
                  if (null !== r && !e.IsOpen)
                      do {
                          for (var o = r.Next; o !== e.Pts; ) {
                              if (n.IntPoint.op_Equality(r.Pt, o.Pt) && o.Next !== r && o.Prev !== r) {
                                  var i = r.Prev
                                    , s = o.Prev;
                                  r.Prev = s,
                                  s.Next = r,
                                  o.Prev = i,
                                  i.Next = o,
                                  e.Pts = r;
                                  var a = this.CreateOutRec();
                                  a.Pts = o,
                                  this.UpdateOutPtIdxs(a),
                                  this.Poly2ContainsPoly1(a.Pts, e.Pts) ? (a.IsHole = !e.IsHole,
                                  a.FirstLeft = e,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(a, e)) : this.Poly2ContainsPoly1(e.Pts, a.Pts) ? (a.IsHole = e.IsHole,
                                  e.IsHole = !a.IsHole,
                                  a.FirstLeft = e.FirstLeft,
                                  e.FirstLeft = a,
                                  this.m_UsingPolyTree && this.FixupFirstLefts2(e, a)) : (a.IsHole = e.IsHole,
                                  a.FirstLeft = e.FirstLeft,
                                  this.m_UsingPolyTree && this.FixupFirstLefts1(e, a)),
                                  o = r
                              }
                              o = o.Next
                          }
                          r = r.Next
                      } while (r !== e.Pts)
              }
          }
          ,
          n.Clipper.Area = function(t) {
              var e = t.length;
              if (e < 3)
                  return 0;
              for (var n = 0, r = 0, o = e - 1; r < e; ++r)
                  n += (t[o].X + t[r].X) * (t[o].Y - t[r].Y),
                  o = r;
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
              var r = new Array
                , o = new n.Clipper(0);
              return o.StrictlySimple = !0,
              o.AddPath(t, n.PolyType.ptSubject, !0),
              o.Execute(n.ClipType.ctUnion, r, e, e),
              r
          }
          ,
          n.Clipper.SimplifyPolygons = function(t, e) {
              "undefined" === typeof e && (e = n.PolyFillType.pftEvenOdd);
              var r = new Array
                , o = new n.Clipper(0);
              return o.StrictlySimple = !0,
              o.AddPaths(t, n.PolyType.ptSubject, !0),
              o.Execute(n.ClipType.ctUnion, r, e, e),
              r
          }
          ,
          n.Clipper.DistanceSqrd = function(t, e) {
              var n = t.X - e.X
                , r = t.Y - e.Y;
              return n * n + r * r
          }
          ,
          n.Clipper.DistanceFromLineSqrd = function(t, e, n) {
              var r = e.Y - n.Y
                , o = n.X - e.X
                , i = r * e.X + o * e.Y;
              return (i = r * t.X + o * t.Y - i) * i / (r * r + o * o)
          }
          ,
          n.Clipper.SlopesNearCollinear = function(t, e, r, o) {
              return Math.abs(t.X - e.X) > Math.abs(t.Y - e.Y) ? t.X > e.X == t.X < r.X ? n.Clipper.DistanceFromLineSqrd(t, e, r) < o : e.X > t.X == e.X < r.X ? n.Clipper.DistanceFromLineSqrd(e, t, r) < o : n.Clipper.DistanceFromLineSqrd(r, t, e) < o : t.Y > e.Y == t.Y < r.Y ? n.Clipper.DistanceFromLineSqrd(t, e, r) < o : e.Y > t.Y == e.Y < r.Y ? n.Clipper.DistanceFromLineSqrd(e, t, r) < o : n.Clipper.DistanceFromLineSqrd(r, t, e) < o
          }
          ,
          n.Clipper.PointsAreClose = function(t, e, n) {
              var r = t.X - e.X
                , o = t.Y - e.Y;
              return r * r + o * o <= n
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
              var r = t.length;
              if (0 === r)
                  return new Array;
              for (var o = new Array(r), i = 0; i < r; ++i)
                  o[i] = new n.OutPt;
              for (i = 0; i < r; ++i)
                  o[i].Pt = t[i],
                  o[i].Next = o[(i + 1) % r],
                  o[i].Next.Prev = o[i],
                  o[i].Idx = 0;
              for (var s = e * e, a = o[0]; 0 === a.Idx && a.Next !== a.Prev; )
                  n.Clipper.PointsAreClose(a.Pt, a.Prev.Pt, s) ? (a = n.Clipper.ExcludeOp(a),
                  r--) : n.Clipper.PointsAreClose(a.Prev.Pt, a.Next.Pt, s) ? (n.Clipper.ExcludeOp(a.Next),
                  a = n.Clipper.ExcludeOp(a),
                  r -= 2) : n.Clipper.SlopesNearCollinear(a.Prev.Pt, a.Pt, a.Next.Pt, s) ? (a = n.Clipper.ExcludeOp(a),
                  r--) : (a.Idx = 1,
                  a = a.Next);
              r < 3 && (r = 0);
              var l = new Array(r);
              for (i = 0; i < r; ++i)
                  l[i] = new n.IntPoint(a.Pt),
                  a = a.Next;
              return o = null,
              l
          }
          ,
          n.Clipper.CleanPolygons = function(t, e) {
              for (var r = new Array(t.length), o = 0, i = t.length; o < i; o++)
                  r[o] = n.Clipper.CleanPolygon(t[o], e);
              return r
          }
          ,
          n.Clipper.Minkowski = function(t, e, r, o) {
              var i = o ? 1 : 0
                , s = t.length
                , a = e.length
                , l = new Array;
              if (r)
                  for (var u = 0; u < a; u++) {
                      for (var p = new Array(s), c = 0, h = t.length, f = t[c]; c < h; f = t[++c])
                          p[c] = new n.IntPoint(e[u].X + f.X,e[u].Y + f.Y);
                      l.push(p)
                  }
              else
                  for (u = 0; u < a; u++) {
                      for (p = new Array(s),
                      c = 0,
                      h = t.length,
                      f = t[c]; c < h; f = t[++c])
                          p[c] = new n.IntPoint(e[u].X - f.X,e[u].Y - f.Y);
                      l.push(p)
                  }
              var d = new Array;
              for (u = 0; u < a - 1 + i; u++)
                  for (c = 0; c < s; c++) {
                      var y = new Array;
                      y.push(l[u % a][c % s]),
                      y.push(l[(u + 1) % a][c % s]),
                      y.push(l[(u + 1) % a][(c + 1) % s]),
                      y.push(l[u % a][(c + 1) % s]),
                      n.Clipper.Orientation(y) || y.reverse(),
                      d.push(y)
                  }
              return d
          }
          ,
          n.Clipper.MinkowskiSum = function(t, e, r) {
              if (e[0]instanceof Array) {
                  u = e;
                  for (var o = new n.Paths, i = (a = new n.Clipper,
                  0); i < u.length; ++i) {
                      var s = n.Clipper.Minkowski(t, u[i], !0, r);
                      if (a.AddPaths(s, n.PolyType.ptSubject, !0),
                      r) {
                          l = n.Clipper.TranslatePath(u[i], t[0]);
                          a.AddPath(l, n.PolyType.ptClip, !0)
                      }
                  }
                  return a.Execute(n.ClipType.ctUnion, o, n.PolyFillType.pftNonZero, n.PolyFillType.pftNonZero),
                  o
              }
              var a, l = e, u = n.Clipper.Minkowski(t, l, !0, r);
              return (a = new n.Clipper).AddPaths(u, n.PolyType.ptSubject, !0),
              a.Execute(n.ClipType.ctUnion, u, n.PolyFillType.pftNonZero, n.PolyFillType.pftNonZero),
              u
          }
          ,
          n.Clipper.TranslatePath = function(t, e) {
              for (var r = new n.Path, o = 0; o < t.length; o++)
                  r.push(new n.IntPoint(t[o].X + e.X,t[o].Y + e.Y));
              return r
          }
          ,
          n.Clipper.MinkowskiDiff = function(t, e) {
              var r = n.Clipper.Minkowski(t, e, !1, !0)
                , o = new n.Clipper;
              return o.AddPaths(r, n.PolyType.ptSubject, !0),
              o.Execute(n.ClipType.ctUnion, r, n.PolyFillType.pftNonZero, n.PolyFillType.pftNonZero),
              r
          }
          ,
          n.Clipper.PolyTreeToPaths = function(t) {
              var e = new Array;
              return n.Clipper.AddPolyNodeToPaths(t, n.Clipper.NodeType.ntAny, e),
              e
          }
          ,
          n.Clipper.AddPolyNodeToPaths = function(t, e, r) {
              var o = !0;
              switch (e) {
              case n.Clipper.NodeType.ntOpen:
                  return;
              case n.Clipper.NodeType.ntClosed:
                  o = !t.IsOpen
              }
              t.m_polygon.length > 0 && o && r.push(t.m_polygon);
              for (var i = 0, s = t.Childs(), a = s.length, l = s[i]; i < a; l = s[++i])
                  n.Clipper.AddPolyNodeToPaths(l, e, r)
          }
          ,
          n.Clipper.OpenPathsFromPolyTree = function(t) {
              for (var e = new n.Paths, r = 0, o = t.ChildCount(); r < o; r++)
                  t.Childs()[r].IsOpen && e.push(t.Childs()[r].m_polygon);
              return e
          }
          ,
          n.Clipper.ClosedPathsFromPolyTree = function(t) {
              var e = new n.Paths;
              return n.Clipper.AddPolyNodeToPaths(t, n.Clipper.NodeType.ntClosed, e),
              e
          }
          ,
          A(n.Clipper, n.ClipperBase),
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
          n.ClipperOffset.prototype.AddPath = function(t, e, r) {
              var o = t.length - 1;
              if (!(o < 0)) {
                  var i = new n.PolyNode;
                  if (i.m_jointype = e,
                  i.m_endtype = r,
                  r === n.EndType.etClosedLine || r === n.EndType.etClosedPolygon)
                      for (; o > 0 && n.IntPoint.op_Equality(t[0], t[o]); )
                          o--;
                  i.m_polygon.push(t[0]);
                  for (var s = 0, a = 0, l = 1; l <= o; l++)
                      n.IntPoint.op_Inequality(i.m_polygon[s], t[l]) && (s++,
                      i.m_polygon.push(t[l]),
                      (t[l].Y > i.m_polygon[a].Y || t[l].Y === i.m_polygon[a].Y && t[l].X < i.m_polygon[a].X) && (a = s));
                  if (!(r === n.EndType.etClosedPolygon && s < 2) && (this.m_polyNodes.AddChild(i),
                  r === n.EndType.etClosedPolygon))
                      if (this.m_lowest.X < 0)
                          this.m_lowest = new n.IntPoint(this.m_polyNodes.ChildCount() - 1,a);
                      else {
                          var u = this.m_polyNodes.Childs()[this.m_lowest.X].m_polygon[this.m_lowest.Y];
                          (i.m_polygon[a].Y > u.Y || i.m_polygon[a].Y === u.Y && i.m_polygon[a].X < u.X) && (this.m_lowest = new n.IntPoint(this.m_polyNodes.ChildCount() - 1,a))
                      }
              }
          }
          ,
          n.ClipperOffset.prototype.AddPaths = function(t, e, n) {
              for (var r = 0, o = t.length; r < o; r++)
                  this.AddPath(t[r], e, n)
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
              var r = e.X - t.X
                , o = e.Y - t.Y;
              if (0 === r && 0 === o)
                  return new n.DoublePoint(0,0);
              var i = 1 / Math.sqrt(r * r + o * o);
              return r *= i,
              o *= i,
              new n.DoublePoint(o,-r)
          }
          ,
          n.ClipperOffset.prototype.DoOffset = function(t) {
              if (this.m_destPolys = new Array,
              this.m_delta = t,
              n.ClipperBase.near_zero(t))
                  for (var e = 0; e < this.m_polyNodes.ChildCount(); e++) {
                      (i = this.m_polyNodes.Childs()[e]).m_endtype === n.EndType.etClosedPolygon && this.m_destPolys.push(i.m_polygon)
                  }
              else {
                  var r;
                  this.MiterLimit > 2 ? this.m_miterLim = 2 / (this.MiterLimit * this.MiterLimit) : this.m_miterLim = .5,
                  r = this.ArcTolerance <= 0 ? n.ClipperOffset.def_arc_tolerance : this.ArcTolerance > Math.abs(t) * n.ClipperOffset.def_arc_tolerance ? Math.abs(t) * n.ClipperOffset.def_arc_tolerance : this.ArcTolerance;
                  var o = 3.14159265358979 / Math.acos(1 - r / Math.abs(t));
                  this.m_sin = Math.sin(n.ClipperOffset.two_pi / o),
                  this.m_cos = Math.cos(n.ClipperOffset.two_pi / o),
                  this.m_StepsPerRad = o / n.ClipperOffset.two_pi,
                  t < 0 && (this.m_sin = -this.m_sin);
                  for (e = 0; e < this.m_polyNodes.ChildCount(); e++) {
                      var i = this.m_polyNodes.Childs()[e];
                      this.m_srcPoly = i.m_polygon;
                      var s = this.m_srcPoly.length;
                      if (!(0 === s || t <= 0 && (s < 3 || i.m_endtype !== n.EndType.etClosedPolygon)))
                          if (this.m_destPoly = new Array,
                          1 !== s) {
                              this.m_normals.length = 0;
                              for (h = 0; h < s - 1; h++)
                                  this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[h], this.m_srcPoly[h + 1]));
                              if (i.m_endtype === n.EndType.etClosedLine || i.m_endtype === n.EndType.etClosedPolygon ? this.m_normals.push(n.ClipperOffset.GetUnitNormal(this.m_srcPoly[s - 1], this.m_srcPoly[0])) : this.m_normals.push(new n.DoublePoint(this.m_normals[s - 2])),
                              i.m_endtype === n.EndType.etClosedPolygon) {
                                  var a = s - 1;
                                  for (h = 0; h < s; h++)
                                      a = this.OffsetPoint(h, a, i.m_jointype);
                                  this.m_destPolys.push(this.m_destPoly)
                              } else if (i.m_endtype === n.EndType.etClosedLine) {
                                  for (a = s - 1,
                                  h = 0; h < s; h++)
                                      a = this.OffsetPoint(h, a, i.m_jointype);
                                  this.m_destPolys.push(this.m_destPoly),
                                  this.m_destPoly = new Array;
                                  var l = this.m_normals[s - 1];
                                  for (h = s - 1; h > 0; h--)
                                      this.m_normals[h] = new n.DoublePoint(-this.m_normals[h - 1].X,-this.m_normals[h - 1].Y);
                                  this.m_normals[0] = new n.DoublePoint(-l.X,-l.Y),
                                  a = 0;
                                  for (h = s - 1; h >= 0; h--)
                                      a = this.OffsetPoint(h, a, i.m_jointype);
                                  this.m_destPolys.push(this.m_destPoly)
                              } else {
                                  var u;
                                  for (a = 0,
                                  h = 1; h < s - 1; ++h)
                                      a = this.OffsetPoint(h, a, i.m_jointype);
                                  if (i.m_endtype === n.EndType.etOpenButt) {
                                      h = s - 1;
                                      u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[h].X + this.m_normals[h].X * t),n.ClipperOffset.Round(this.m_srcPoly[h].Y + this.m_normals[h].Y * t)),
                                      this.m_destPoly.push(u),
                                      u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[h].X - this.m_normals[h].X * t),n.ClipperOffset.Round(this.m_srcPoly[h].Y - this.m_normals[h].Y * t)),
                                      this.m_destPoly.push(u)
                                  } else {
                                      h = s - 1;
                                      a = s - 2,
                                      this.m_sinA = 0,
                                      this.m_normals[h] = new n.DoublePoint(-this.m_normals[h].X,-this.m_normals[h].Y),
                                      i.m_endtype === n.EndType.etOpenSquare ? this.DoSquare(h, a) : this.DoRound(h, a)
                                  }
                                  for (h = s - 1; h > 0; h--)
                                      this.m_normals[h] = new n.DoublePoint(-this.m_normals[h - 1].X,-this.m_normals[h - 1].Y);
                                  this.m_normals[0] = new n.DoublePoint(-this.m_normals[1].X,-this.m_normals[1].Y);
                                  for (h = (a = s - 1) - 1; h > 0; --h)
                                      a = this.OffsetPoint(h, a, i.m_jointype);
                                  i.m_endtype === n.EndType.etOpenButt ? (u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X - this.m_normals[0].X * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y - this.m_normals[0].Y * t)),
                                  this.m_destPoly.push(u),
                                  u = new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X + this.m_normals[0].X * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y + this.m_normals[0].Y * t)),
                                  this.m_destPoly.push(u)) : (a = 1,
                                  this.m_sinA = 0,
                                  i.m_endtype === n.EndType.etOpenSquare ? this.DoSquare(0, 1) : this.DoRound(0, 1)),
                                  this.m_destPolys.push(this.m_destPoly)
                              }
                          } else {
                              if (i.m_jointype === n.JoinType.jtRound)
                                  for (var p = 1, c = 0, h = 1; h <= o; h++) {
                                      this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X + p * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y + c * t)));
                                      var f = p;
                                      p = p * this.m_cos - this.m_sin * c,
                                      c = f * this.m_sin + c * this.m_cos
                                  }
                              else {
                                  p = -1,
                                  c = -1;
                                  for (var h = 0; h < 4; ++h)
                                      this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[0].X + p * t),n.ClipperOffset.Round(this.m_srcPoly[0].Y + c * t))),
                                      p < 0 ? p = 1 : c < 0 ? c = 1 : p = -1
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
                  a = t[1];
                  if (s.Clear(),
                  this.FixOrientations(),
                  this.DoOffset(a),
                  (i = new n.Clipper(0)).AddPaths(this.m_destPolys, n.PolyType.ptSubject, !0),
                  a > 0)
                      i.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftPositive, n.PolyFillType.pftPositive);
                  else {
                      u = n.Clipper.GetBounds(this.m_destPolys);
                      if ((l = new n.Path).push(new n.IntPoint(u.left - 10,u.bottom + 10)),
                      l.push(new n.IntPoint(u.right + 10,u.bottom + 10)),
                      l.push(new n.IntPoint(u.right + 10,u.top - 10)),
                      l.push(new n.IntPoint(u.left - 10,u.top - 10)),
                      i.AddPath(l, n.PolyType.ptSubject, !0),
                      i.ReverseSolution = !0,
                      i.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftNegative, n.PolyFillType.pftNegative),
                      1 === s.ChildCount() && s.Childs()[0].ChildCount() > 0) {
                          var r = s.Childs()[0];
                          s.Childs()[0] = r.Childs()[0],
                          s.Childs()[0].m_Parent = s;
                          for (var o = 1; o < r.ChildCount(); o++)
                              s.AddChild(r.Childs()[o])
                      } else
                          s.Clear()
                  }
              } else {
                  var i, s = t[0], a = t[1];
                  if (n.Clear(s),
                  this.FixOrientations(),
                  this.DoOffset(a),
                  (i = new n.Clipper(0)).AddPaths(this.m_destPolys, n.PolyType.ptSubject, !0),
                  a > 0)
                      i.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftPositive, n.PolyFillType.pftPositive);
                  else {
                      var l, u = n.Clipper.GetBounds(this.m_destPolys);
                      (l = new n.Path).push(new n.IntPoint(u.left - 10,u.bottom + 10)),
                      l.push(new n.IntPoint(u.right + 10,u.bottom + 10)),
                      l.push(new n.IntPoint(u.right + 10,u.top - 10)),
                      l.push(new n.IntPoint(u.left - 10,u.top - 10)),
                      i.AddPath(l, n.PolyType.ptSubject, !0),
                      i.ReverseSolution = !0,
                      i.Execute(n.ClipType.ctUnion, s, n.PolyFillType.pftNegative, n.PolyFillType.pftNegative),
                      s.length > 0 && s.splice(0, 1)
                  }
              }
          }
          ,
          n.ClipperOffset.prototype.OffsetPoint = function(t, e, r) {
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
                  switch (r) {
                  case n.JoinType.jtMiter:
                      var o = this.m_normals[t].X * this.m_normals[e].X + this.m_normals[t].Y * this.m_normals[e].Y + 1;
                      o >= this.m_miterLim ? this.DoMiter(t, e, o) : this.DoSquare(t, e);
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
              var r = Math.tan(Math.atan2(this.m_sinA, this.m_normals[e].X * this.m_normals[t].X + this.m_normals[e].Y * this.m_normals[t].Y) / 4);
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_delta * (this.m_normals[e].X - this.m_normals[e].Y * r)),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_delta * (this.m_normals[e].Y + this.m_normals[e].X * r)))),
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + this.m_delta * (this.m_normals[t].X + this.m_normals[t].Y * r)),n.ClipperOffset.Round(this.m_srcPoly[t].Y + this.m_delta * (this.m_normals[t].Y - this.m_normals[t].X * r))))
          }
          ,
          n.ClipperOffset.prototype.DoMiter = function(t, e, r) {
              var o = this.m_delta / r;
              this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + (this.m_normals[e].X + this.m_normals[t].X) * o),n.ClipperOffset.Round(this.m_srcPoly[t].Y + (this.m_normals[e].Y + this.m_normals[t].Y) * o)))
          }
          ,
          n.ClipperOffset.prototype.DoRound = function(t, e) {
              for (var r, o = Math.atan2(this.m_sinA, this.m_normals[e].X * this.m_normals[t].X + this.m_normals[e].Y * this.m_normals[t].Y), i = Math.max(n.Cast_Int32(n.ClipperOffset.Round(this.m_StepsPerRad * Math.abs(o))), 1), s = this.m_normals[e].X, a = this.m_normals[e].Y, l = 0; l < i; ++l)
                  this.m_destPoly.push(new n.IntPoint(n.ClipperOffset.Round(this.m_srcPoly[t].X + s * this.m_delta),n.ClipperOffset.Round(this.m_srcPoly[t].Y + a * this.m_delta))),
                  r = s,
                  s = s * this.m_cos - this.m_sin * a,
                  a = r * this.m_sin + a * this.m_cos;
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
              for (var r = 0, o = 0; o < t.length; o++)
                  r += n.Clipper.Area(t[o]);
              return r / (e * e)
          }
          ,
          n.JS.BoundsOfPath = function(t, e) {
              return n.JS.BoundsOfPaths([t], e)
          }
          ,
          n.JS.BoundsOfPaths = function(t, e) {
              e || (e = 1);
              var r = n.Clipper.GetBounds(t);
              return r.left /= e,
              r.bottom /= e,
              r.right /= e,
              r.top /= e,
              r
          }
          ,
          n.JS.Clean = function(t, e) {
              if (!(t instanceof Array))
                  return [];
              var r = t[0]instanceof Array;
              t = n.JS.Clone(t);
              if ("number" !== typeof e || null === e)
                  return n.Error("Delta is not a number in Clean()."),
                  t;
              if (0 === t.length || 1 === t.length && 0 === t[0].length || e < 0)
                  return t;
              r || (t = [t]);
              for (var o, i, s, a, l, u, p, c = t.length, h = [], f = 0; f < c; f++)
                  if (0 !== (o = (i = t[f]).length))
                      if (o < 3)
                          s = i,
                          h.push(s);
                      else {
                          for (s = i,
                          a = e * e,
                          l = i[0],
                          u = 1,
                          p = 1; p < o; p++)
                              (i[p].X - l.X) * (i[p].X - l.X) + (i[p].Y - l.Y) * (i[p].Y - l.Y) <= a || (s[u] = i[p],
                              l = i[p],
                              u++);
                          l = i[u - 1],
                          (i[0].X - l.X) * (i[0].X - l.X) + (i[0].Y - l.Y) * (i[0].Y - l.Y) <= a && u--,
                          u < o && s.splice(u, o - u),
                          s.length && h.push(s)
                      }
              return !r && h.length ? h = h[0] : r || 0 !== h.length ? r && 0 === h.length && (h = [[]]) : h = [],
              h
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
              var n, r, o, i, s = t.length, a = new Array(s);
              for (r = 0; r < s; r++) {
                  for (n = t[r].length,
                  i = new Array(n),
                  o = 0; o < n; o++)
                      i[o] = {
                          X: t[r][o].X,
                          Y: t[r][o].Y
                      };
                  a[r] = i
              }
              return e || (a = a[0]),
              a
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
              var r, o, i, s, a, l, u, p, c, h, f, d, y, m, g, v;
              t[0]instanceof Array || (t = [t]);
              var b = t.length
                , x = e * e
                , P = [];
              for (r = 0; r < b; r++)
                  if (0 !== (l = (i = t[r]).length)) {
                      for (s = 0; s < 1e6; s++) {
                          for (a = [],
                          i[(l = i.length) - 1].X !== i[0].X || i[l - 1].Y !== i[0].Y ? (f = 1,
                          i.push({
                              X: i[0].X,
                              Y: i[0].Y
                          }),
                          l = i.length) : f = 0,
                          h = [],
                          o = 0; o < l - 2; o++)
                              u = i[o],
                              c = i[o + 1],
                              p = i[o + 2],
                              g = u.X,
                              v = u.Y,
                              d = p.X - g,
                              y = p.Y - v,
                              0 === d && 0 === y || ((m = ((c.X - g) * d + (c.Y - v) * y) / (d * d + y * y)) > 1 ? (g = p.X,
                              v = p.Y) : m > 0 && (g += d * m,
                              v += y * m)),
                              (d = c.X - g) * d + (y = c.Y - v) * y <= x && (h[o + 1] = 1,
                              o++);
                          for (a.push({
                              X: i[0].X,
                              Y: i[0].Y
                          }),
                          o = 1; o < l - 1; o++)
                              h[o] || a.push({
                                  X: i[o].X,
                                  Y: i[o].Y
                              });
                          if (a.push({
                              X: i[l - 1].X,
                              Y: i[l - 1].Y
                          }),
                          f && i.pop(),
                          !h.length)
                              break;
                          i = a
                      }
                      a[(l = a.length) - 1].X === a[0].X && a[l - 1].Y === a[0].Y && a.pop(),
                      a.length > 2 && P.push(a)
                  }
              return t[0]instanceof Array || (P = P[0]),
              "undefined" == typeof P && (P = [[]]),
              P
          }
          ,
          n.JS.PerimeterOfPath = function(t, e, n) {
              if ("undefined" === typeof t)
                  return 0;
              var r, o, i = Math.sqrt, s = 0, a = 0, l = 0, u = 0, p = 0, c = t.length;
              if (c < 2)
                  return 0;
              for (e && (t[c] = t[0],
              c++); --c; )
                  a = (r = t[c]).X,
                  l = r.Y,
                  s += i((a - (u = (o = t[c - 1]).X)) * (a - u) + (l - (p = o.Y)) * (l - p));
              return e && t.pop(),
              s / n
          }
          ,
          n.JS.PerimeterOfPaths = function(t, e, r) {
              r || (r = 1);
              for (var o = 0, i = 0; i < t.length; i++)
                  o += n.JS.PerimeterOfPath(t[i], e, r);
              return o
          }
          ,
          n.JS.ScaleDownPath = function(t, e) {
              var n, r;
              for (e || (e = 1),
              n = t.length; n--; )
                  (r = t[n]).X = r.X / e,
                  r.Y = r.Y / e
          }
          ,
          n.JS.ScaleDownPaths = function(t, e) {
              var n, r, o;
              for (e || (e = 1),
              n = t.length; n--; )
                  for (r = t[n].length; r--; )
                      (o = t[n][r]).X = o.X / e,
                      o.Y = o.Y / e
          }
          ,
          n.JS.ScaleUpPath = function(t, e) {
              var n, r, o = Math.round;
              for (e || (e = 1),
              n = t.length; n--; )
                  (r = t[n]).X = o(r.X * e),
                  r.Y = o(r.Y * e)
          }
          ,
          n.JS.ScaleUpPaths = function(t, e) {
              var n, r, o, i = Math.round;
              for (e || (e = 1),
              n = t.length; n--; )
                  for (r = t[n].length; r--; )
                      (o = t[n][r]).X = i(o.X * e),
                      o.Y = i(o.Y * e)
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
              var r = new n.ExPolygon;
              r.outer = t.Contour();
              var o, i, s, a, l, u, p = t.Childs(), c = p.length;
              for (r.holes = new Array(c),
              s = 0; s < c; s++)
                  for (o = p[s],
                  r.holes[s] = o.Contour(),
                  a = 0,
                  u = (l = o.Childs()).length; a < u; a++)
                      i = l[a],
                      n.JS.AddOuterPolyNodeToExPolygons(i, e);
              e.push(r)
          }
          ,
          n.JS.ExPolygonsToPaths = function(t) {
              var e, r, o, i, s = new n.Paths;
              for (e = 0,
              o = t.length; e < o; e++)
                  for (s.push(t[e].outer),
                  r = 0,
                  i = t[e].holes.length; r < i; r++)
                      s.push(t[e].holes[r]);
              return s
          }
          ,
          n.JS.PolyTreeToExPolygons = function(t) {
              var e, r, o, i, s = new n.ExPolygons;
              for (r = 0,
              i = (o = t.Childs()).length; r < i; r++)
                  e = o[r],
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
  359: function(t, e, n) {
      (function(e) {
          var n;
          n = function() {
              return function(t) {
                  var e = {};
                  function n(r) {
                      if (e[r])
                          return e[r].exports;
                      var o = e[r] = {
                          exports: {},
                          id: r,
                          loaded: !1
                      };
                      return t[r].call(o.exports, o, o.exports, n),
                      o.loaded = !0,
                      o.exports
                  }
                  return n.m = t,
                  n.c = e,
                  n.p = "",
                  n(0)
              }([function(t, e, n) {
                  "use strict";
                  var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                      return typeof t
                  }
                  : function(t) {
                      return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  }
                    , o = n(1)
                    , i = n(7)
                    , s = n(12)
                    , a = n(3)("socket.io-client");
                  t.exports = e = u;
                  var l = e.managers = {};
                  function u(t, e) {
                      "object" === ("undefined" === typeof t ? "undefined" : r(t)) && (e = t,
                      t = void 0),
                      e = e || {};
                      var n, i = o(t), u = i.source, p = i.id, c = i.path, h = l[p] && c in l[p].nsps;
                      return e.forceNew || e["force new connection"] || !1 === e.multiplex || h ? (a("ignoring socket cache for %s", u),
                      n = s(u, e)) : (l[p] || (a("new io instance for %s", u),
                      l[p] = s(u, e)),
                      n = l[p]),
                      i.query && !e.query && (e.query = i.query),
                      n.socket(i.path, e)
                  }
                  e.protocol = i.protocol,
                  e.connect = u,
                  e.Manager = n(12),
                  e.Socket = n(36)
              }
              , function(t, e, n) {
                  "use strict";
                  var r = n(2)
                    , o = n(3)("socket.io-client:url");
                  t.exports = function(t, e) {
                      var n = t;
                      e = e || "undefined" !== typeof location && location,
                      null == t && (t = e.protocol + "//" + e.host),
                      "string" === typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
                      /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t),
                      t = "undefined" !== typeof e ? e.protocol + "//" + t : "https://" + t),
                      o("parse %s", t),
                      n = r(t)),
                      n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
                      n.path = n.path || "/";
                      var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
                      return n.id = n.protocol + "://" + i + ":" + n.port,
                      n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port),
                      n
                  }
              }
              , function(t, e) {
                  var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    , r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                  t.exports = function(t) {
                      var e = t
                        , o = t.indexOf("[")
                        , i = t.indexOf("]");
                      -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
                      for (var s = n.exec(t || ""), a = {}, l = 14; l--; )
                          a[r[l]] = s[l] || "";
                      return -1 != o && -1 != i && (a.source = e,
                      a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
                      a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                      a.ipv6uri = !0),
                      a
                  }
              }
              , function(t, e, n) {
                  (function(r) {
                      function o() {
                          var t;
                          try {
                              t = e.storage.debug
                          } catch (n) {}
                          return !t && "undefined" !== typeof r && "env"in r && (t = r.env.DEBUG),
                          t
                      }
                      (e = t.exports = n(5)).log = function() {
                          return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                      }
                      ,
                      e.formatArgs = function(t) {
                          var n = this.useColors;
                          if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
                          n) {
                              var r = "color: " + this.color;
                              t.splice(1, 0, r, "color: inherit");
                              var o = 0
                                , i = 0;
                              t[0].replace(/%[a-zA-Z%]/g, (function(t) {
                                  "%%" !== t && (o++,
                                  "%c" === t && (i = o))
                              }
                              )),
                              t.splice(i, 0, r)
                          }
                      }
                      ,
                      e.save = function(t) {
                          try {
                              null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                          } catch (n) {}
                      }
                      ,
                      e.load = o,
                      e.useColors = function() {
                          return !("undefined" === typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" === typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                      }
                      ,
                      e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function() {
                          try {
                              return window.localStorage
                          } catch (t) {}
                      }(),
                      e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                      e.formatters.j = function(t) {
                          try {
                              return JSON.stringify(t)
                          } catch (e) {
                              return "[UnexpectedJSONParseError]: " + e.message
                          }
                      }
                      ,
                      e.enable(o())
                  }
                  ).call(e, n(4))
              }
              , function(t, e) {
                  var n, r, o = t.exports = {};
                  function i() {
                      throw new Error("setTimeout has not been defined")
                  }
                  function s() {
                      throw new Error("clearTimeout has not been defined")
                  }
                  function a(t) {
                      if (n === setTimeout)
                          return setTimeout(t, 0);
                      if ((n === i || !n) && setTimeout)
                          return n = setTimeout,
                          setTimeout(t, 0);
                      try {
                          return n(t, 0)
                      } catch (e) {
                          try {
                              return n.call(null, t, 0)
                          } catch (e) {
                              return n.call(this, t, 0)
                          }
                      }
                  }
                  !function() {
                      try {
                          n = "function" === typeof setTimeout ? setTimeout : i
                      } catch (t) {
                          n = i
                      }
                      try {
                          r = "function" === typeof clearTimeout ? clearTimeout : s
                      } catch (t) {
                          r = s
                      }
                  }();
                  var l, u = [], p = !1, c = -1;
                  function h() {
                      p && l && (p = !1,
                      l.length ? u = l.concat(u) : c = -1,
                      u.length && f())
                  }
                  function f() {
                      if (!p) {
                          var t = a(h);
                          p = !0;
                          for (var e = u.length; e; ) {
                              for (l = u,
                              u = []; ++c < e; )
                                  l && l[c].run();
                              c = -1,
                              e = u.length
                          }
                          l = null,
                          p = !1,
                          function(t) {
                              if (r === clearTimeout)
                                  return clearTimeout(t);
                              if ((r === s || !r) && clearTimeout)
                                  return r = clearTimeout,
                                  clearTimeout(t);
                              try {
                                  r(t)
                              } catch (e) {
                                  try {
                                      return r.call(null, t)
                                  } catch (e) {
                                      return r.call(this, t)
                                  }
                              }
                          }(t)
                      }
                  }
                  function d(t, e) {
                      this.fun = t,
                      this.array = e
                  }
                  function y() {}
                  o.nextTick = function(t) {
                      var e = new Array(arguments.length - 1);
                      if (arguments.length > 1)
                          for (var n = 1; n < arguments.length; n++)
                              e[n - 1] = arguments[n];
                      u.push(new d(t,e)),
                      1 !== u.length || p || a(f)
                  }
                  ,
                  d.prototype.run = function() {
                      this.fun.apply(null, this.array)
                  }
                  ,
                  o.title = "browser",
                  o.browser = !0,
                  o.env = {},
                  o.argv = [],
                  o.version = "",
                  o.versions = {},
                  o.on = y,
                  o.addListener = y,
                  o.once = y,
                  o.off = y,
                  o.removeListener = y,
                  o.removeAllListeners = y,
                  o.emit = y,
                  o.prependListener = y,
                  o.prependOnceListener = y,
                  o.listeners = function(t) {
                      return []
                  }
                  ,
                  o.binding = function(t) {
                      throw new Error("process.binding is not supported")
                  }
                  ,
                  o.cwd = function() {
                      return "/"
                  }
                  ,
                  o.chdir = function(t) {
                      throw new Error("process.chdir is not supported")
                  }
                  ,
                  o.umask = function() {
                      return 0
                  }
              }
              , function(t, e, n) {
                  function r(t) {
                      var n;
                      function r() {
                          if (r.enabled) {
                              var t = r
                                , o = +new Date
                                , i = o - (n || o);
                              t.diff = i,
                              t.prev = n,
                              t.curr = o,
                              n = o;
                              for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
                                  s[a] = arguments[a];
                              s[0] = e.coerce(s[0]),
                              "string" !== typeof s[0] && s.unshift("%O");
                              var l = 0;
                              s[0] = s[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                                  if ("%%" === n)
                                      return n;
                                  l++;
                                  var o = e.formatters[r];
                                  if ("function" === typeof o) {
                                      var i = s[l];
                                      n = o.call(t, i),
                                      s.splice(l, 1),
                                      l--
                                  }
                                  return n
                              }
                              )),
                              e.formatArgs.call(t, s);
                              var u = r.log || e.log || console.log.bind(console);
                              u.apply(t, s)
                          }
                      }
                      return r.namespace = t,
                      r.enabled = e.enabled(t),
                      r.useColors = e.useColors(),
                      r.color = function(t) {
                          var n, r = 0;
                          for (n in t)
                              r = (r << 5) - r + t.charCodeAt(n),
                              r |= 0;
                          return e.colors[Math.abs(r) % e.colors.length]
                      }(t),
                      r.destroy = o,
                      "function" === typeof e.init && e.init(r),
                      e.instances.push(r),
                      r
                  }
                  function o() {
                      var t = e.instances.indexOf(this);
                      return -1 !== t && (e.instances.splice(t, 1),
                      !0)
                  }
                  (e = t.exports = r.debug = r.default = r).coerce = function(t) {
                      return t instanceof Error ? t.stack || t.message : t
                  }
                  ,
                  e.disable = function() {
                      e.enable("")
                  }
                  ,
                  e.enable = function(t) {
                      var n;
                      e.save(t),
                      e.names = [],
                      e.skips = [];
                      var r = ("string" === typeof t ? t : "").split(/[\s,]+/)
                        , o = r.length;
                      for (n = 0; n < o; n++)
                          r[n] && ("-" === (t = r[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
                      for (n = 0; n < e.instances.length; n++) {
                          var i = e.instances[n];
                          i.enabled = e.enabled(i.namespace)
                      }
                  }
                  ,
                  e.enabled = function(t) {
                      if ("*" === t[t.length - 1])
                          return !0;
                      var n, r;
                      for (n = 0,
                      r = e.skips.length; n < r; n++)
                          if (e.skips[n].test(t))
                              return !1;
                      for (n = 0,
                      r = e.names.length; n < r; n++)
                          if (e.names[n].test(t))
                              return !0;
                      return !1
                  }
                  ,
                  e.humanize = n(6),
                  e.instances = [],
                  e.names = [],
                  e.skips = [],
                  e.formatters = {}
              }
              , function(t, e) {
                  var n = 1e3
                    , r = 60 * n
                    , o = 60 * r
                    , i = 24 * o
                    , s = 365.25 * i;
                  function a(t, e, n) {
                      if (!(t < e))
                          return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
                  }
                  t.exports = function(t, e) {
                      e = e || {};
                      var l, u = typeof t;
                      if ("string" === u && t.length > 0)
                          return function(t) {
                              if (!((t = String(t)).length > 100)) {
                                  var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                                  if (e) {
                                      var a = parseFloat(e[1]);
                                      switch ((e[2] || "ms").toLowerCase()) {
                                      case "years":
                                      case "year":
                                      case "yrs":
                                      case "yr":
                                      case "y":
                                          return a * s;
                                      case "days":
                                      case "day":
                                      case "d":
                                          return a * i;
                                      case "hours":
                                      case "hour":
                                      case "hrs":
                                      case "hr":
                                      case "h":
                                          return a * o;
                                      case "minutes":
                                      case "minute":
                                      case "mins":
                                      case "min":
                                      case "m":
                                          return a * r;
                                      case "seconds":
                                      case "second":
                                      case "secs":
                                      case "sec":
                                      case "s":
                                          return a * n;
                                      case "milliseconds":
                                      case "millisecond":
                                      case "msecs":
                                      case "msec":
                                      case "ms":
                                          return a;
                                      default:
                                          return
                                      }
                                  }
                              }
                          }(t);
                      if ("number" === u && !1 === isNaN(t))
                          return e.long ? a(l = t, i, "day") || a(l, o, "hour") || a(l, r, "minute") || a(l, n, "second") || l + " ms" : function(t) {
                              return t >= i ? Math.round(t / i) + "d" : t >= o ? Math.round(t / o) + "h" : t >= r ? Math.round(t / r) + "m" : t >= n ? Math.round(t / n) + "s" : t + "ms"
                          }(t);
                      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
                  }
              }
              , function(t, e, n) {
                  var r = n(3)("socket.io-parser")
                    , o = n(8)
                    , i = n(9)
                    , s = n(10)
                    , a = n(11);
                  function l() {}
                  e.protocol = 4,
                  e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
                  e.CONNECT = 0,
                  e.DISCONNECT = 1,
                  e.EVENT = 2,
                  e.ACK = 3,
                  e.ERROR = 4,
                  e.BINARY_EVENT = 5,
                  e.BINARY_ACK = 6,
                  e.Encoder = l,
                  e.Decoder = c;
                  var u = e.ERROR + '"encode error"';
                  function p(t) {
                      var n = "" + t.type;
                      if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"),
                      t.nsp && "/" !== t.nsp && (n += t.nsp + ","),
                      null != t.id && (n += t.id),
                      null != t.data) {
                          var o = function(t) {
                              try {
                                  return JSON.stringify(t)
                              } catch (e) {
                                  return !1
                              }
                          }(t.data);
                          if (!1 === o)
                              return u;
                          n += o
                      }
                      return r("encoded %j as %s", t, n),
                      n
                  }
                  function c() {
                      this.reconstructor = null
                  }
                  function h(t) {
                      this.reconPack = t,
                      this.buffers = []
                  }
                  function f(t) {
                      return {
                          type: e.ERROR,
                          data: "parser error: " + t
                      }
                  }
                  l.prototype.encode = function(t, n) {
                      r("encoding packet %j", t),
                      e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type ? function(t, e) {
                          function n(t) {
                              var n = i.deconstructPacket(t)
                                , r = p(n.packet)
                                , o = n.buffers;
                              o.unshift(r),
                              e(o)
                          }
                          i.removeBlobs(t, n)
                      }(t, n) : n([p(t)])
                  }
                  ,
                  o(c.prototype),
                  c.prototype.add = function(t) {
                      var n;
                      if ("string" === typeof t)
                          n = function(t) {
                              var n = 0
                                , o = {
                                  type: Number(t.charAt(0))
                              };
                              if (null == e.types[o.type])
                                  return f("unknown packet type " + o.type);
                              if (e.BINARY_EVENT === o.type || e.BINARY_ACK === o.type) {
                                  for (var i = ""; "-" !== t.charAt(++n) && (i += t.charAt(n),
                                  n != t.length); )
                                      ;
                                  if (i != Number(i) || "-" !== t.charAt(n))
                                      throw new Error("Illegal attachments");
                                  o.attachments = Number(i)
                              }
                              if ("/" === t.charAt(n + 1))
                                  for (o.nsp = ""; ++n && "," !== (l = t.charAt(n)) && (o.nsp += l,
                                  n !== t.length); )
                                      ;
                              else
                                  o.nsp = "/";
                              var a = t.charAt(n + 1);
                              if ("" !== a && Number(a) == a) {
                                  for (o.id = ""; ++n; ) {
                                      var l;
                                      if (null == (l = t.charAt(n)) || Number(l) != l) {
                                          --n;
                                          break
                                      }
                                      if (o.id += t.charAt(n),
                                      n === t.length)
                                          break
                                  }
                                  o.id = Number(o.id)
                              }
                              if (t.charAt(++n)) {
                                  var u = function(t) {
                                      try {
                                          return JSON.parse(t)
                                      } catch (e) {
                                          return !1
                                      }
                                  }(t.substr(n));
                                  if (!1 === u || o.type !== e.ERROR && !s(u))
                                      return f("invalid payload");
                                  o.data = u
                              }
                              return r("decoded %s as %j", t, o),
                              o
                          }(t),
                          e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new h(n),
                          0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
                      else {
                          if (!a(t) && !t.base64)
                              throw new Error("Unknown type: " + t);
                          if (!this.reconstructor)
                              throw new Error("got binary data when not reconstructing a packet");
                          (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null,
                          this.emit("decoded", n))
                      }
                  }
                  ,
                  c.prototype.destroy = function() {
                      this.reconstructor && this.reconstructor.finishedReconstruction()
                  }
                  ,
                  h.prototype.takeBinaryData = function(t) {
                      if (this.buffers.push(t),
                      this.buffers.length === this.reconPack.attachments) {
                          var e = i.reconstructPacket(this.reconPack, this.buffers);
                          return this.finishedReconstruction(),
                          e
                      }
                      return null
                  }
                  ,
                  h.prototype.finishedReconstruction = function() {
                      this.reconPack = null,
                      this.buffers = []
                  }
              }
              , function(t, e, n) {
                  function r(t) {
                      if (t)
                          return function(t) {
                              for (var e in r.prototype)
                                  t[e] = r.prototype[e];
                              return t
                          }(t)
                  }
                  t.exports = r,
                  r.prototype.on = r.prototype.addEventListener = function(t, e) {
                      return this._callbacks = this._callbacks || {},
                      (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
                      this
                  }
                  ,
                  r.prototype.once = function(t, e) {
                      function n() {
                          this.off(t, n),
                          e.apply(this, arguments)
                      }
                      return n.fn = e,
                      this.on(t, n),
                      this
                  }
                  ,
                  r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
                      if (this._callbacks = this._callbacks || {},
                      0 == arguments.length)
                          return this._callbacks = {},
                          this;
                      var n, r = this._callbacks["$" + t];
                      if (!r)
                          return this;
                      if (1 == arguments.length)
                          return delete this._callbacks["$" + t],
                          this;
                      for (var o = 0; o < r.length; o++)
                          if ((n = r[o]) === e || n.fn === e) {
                              r.splice(o, 1);
                              break
                          }
                      return this
                  }
                  ,
                  r.prototype.emit = function(t) {
                      this._callbacks = this._callbacks || {};
                      var e = [].slice.call(arguments, 1)
                        , n = this._callbacks["$" + t];
                      if (n)
                          for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r)
                              n[r].apply(this, e);
                      return this
                  }
                  ,
                  r.prototype.listeners = function(t) {
                      return this._callbacks = this._callbacks || {},
                      this._callbacks["$" + t] || []
                  }
                  ,
                  r.prototype.hasListeners = function(t) {
                      return !!this.listeners(t).length
                  }
              }
              , function(t, e, n) {
                  var r = n(10)
                    , o = n(11)
                    , i = Object.prototype.toString
                    , s = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === i.call(Blob)
                    , a = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === i.call(File);
                  function l(t, e) {
                      if (!t)
                          return t;
                      if (o(t)) {
                          var n = {
                              _placeholder: !0,
                              num: e.length
                          };
                          return e.push(t),
                          n
                      }
                      if (r(t)) {
                          for (var i = new Array(t.length), s = 0; s < t.length; s++)
                              i[s] = l(t[s], e);
                          return i
                      }
                      if ("object" === typeof t && !(t instanceof Date)) {
                          for (var a in i = {},
                          t)
                              i[a] = l(t[a], e);
                          return i
                      }
                      return t
                  }
                  function u(t, e) {
                      if (!t)
                          return t;
                      if (t && t._placeholder)
                          return e[t.num];
                      if (r(t))
                          for (var n = 0; n < t.length; n++)
                              t[n] = u(t[n], e);
                      else if ("object" === typeof t)
                          for (var o in t)
                              t[o] = u(t[o], e);
                      return t
                  }
                  e.deconstructPacket = function(t) {
                      var e = []
                        , n = t.data
                        , r = t;
                      return r.data = l(n, e),
                      r.attachments = e.length,
                      {
                          packet: r,
                          buffers: e
                      }
                  }
                  ,
                  e.reconstructPacket = function(t, e) {
                      return t.data = u(t.data, e),
                      t.attachments = void 0,
                      t
                  }
                  ,
                  e.removeBlobs = function(t, e) {
                      var n = 0
                        , i = t;
                      !function t(l, u, p) {
                          if (!l)
                              return l;
                          if (s && l instanceof Blob || a && l instanceof File) {
                              n++;
                              var c = new FileReader;
                              c.onload = function() {
                                  p ? p[u] = this.result : i = this.result,
                                  --n || e(i)
                              }
                              ,
                              c.readAsArrayBuffer(l)
                          } else if (r(l))
                              for (var h = 0; h < l.length; h++)
                                  t(l[h], h, l);
                          else if ("object" === typeof l && !o(l))
                              for (var f in l)
                                  t(l[f], f, l)
                      }(i),
                      n || e(i)
                  }
              }
              , function(t, e) {
                  var n = {}.toString;
                  t.exports = Array.isArray || function(t) {
                      return "[object Array]" == n.call(t)
                  }
              }
              , function(t, n) {
                  t.exports = function(t) {
                      return r && e.isBuffer(t) || o && (t instanceof ArrayBuffer || function(t) {
                          return "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
                      }(t))
                  }
                  ;
                  var r = "function" === typeof e && "function" === typeof e.isBuffer
                    , o = "function" === typeof ArrayBuffer
              }
              , function(t, e, n) {
                  "use strict";
                  var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                      return typeof t
                  }
                  : function(t) {
                      return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  }
                    , o = n(13)
                    , i = n(36)
                    , s = n(8)
                    , a = n(7)
                    , l = n(38)
                    , u = n(39)
                    , p = n(3)("socket.io-client:manager")
                    , c = n(35)
                    , h = n(40)
                    , f = Object.prototype.hasOwnProperty;
                  function d(t, e) {
                      if (!(this instanceof d))
                          return new d(t,e);
                      t && "object" === ("undefined" === typeof t ? "undefined" : r(t)) && (e = t,
                      t = void 0),
                      (e = e || {}).path = e.path || "/socket.io",
                      this.nsps = {},
                      this.subs = [],
                      this.opts = e,
                      this.reconnection(!1 !== e.reconnection),
                      this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
                      this.reconnectionDelay(e.reconnectionDelay || 1e3),
                      this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
                      this.randomizationFactor(e.randomizationFactor || .5),
                      this.backoff = new h({
                          min: this.reconnectionDelay(),
                          max: this.reconnectionDelayMax(),
                          jitter: this.randomizationFactor()
                      }),
                      this.timeout(null == e.timeout ? 2e4 : e.timeout),
                      this.readyState = "closed",
                      this.uri = t,
                      this.connecting = [],
                      this.lastPing = null,
                      this.encoding = !1,
                      this.packetBuffer = [];
                      var n = e.parser || a;
                      this.encoder = new n.Encoder,
                      this.decoder = new n.Decoder,
                      this.autoConnect = !1 !== e.autoConnect,
                      this.autoConnect && this.open()
                  }
                  t.exports = d,
                  d.prototype.emitAll = function() {
                      for (var t in this.emit.apply(this, arguments),
                      this.nsps)
                          f.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
                  }
                  ,
                  d.prototype.updateSocketIds = function() {
                      for (var t in this.nsps)
                          f.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
                  }
                  ,
                  d.prototype.generateId = function(t) {
                      return ("/" === t ? "" : t + "#") + this.engine.id
                  }
                  ,
                  s(d.prototype),
                  d.prototype.reconnection = function(t) {
                      return arguments.length ? (this._reconnection = !!t,
                      this) : this._reconnection
                  }
                  ,
                  d.prototype.reconnectionAttempts = function(t) {
                      return arguments.length ? (this._reconnectionAttempts = t,
                      this) : this._reconnectionAttempts
                  }
                  ,
                  d.prototype.reconnectionDelay = function(t) {
                      return arguments.length ? (this._reconnectionDelay = t,
                      this.backoff && this.backoff.setMin(t),
                      this) : this._reconnectionDelay
                  }
                  ,
                  d.prototype.randomizationFactor = function(t) {
                      return arguments.length ? (this._randomizationFactor = t,
                      this.backoff && this.backoff.setJitter(t),
                      this) : this._randomizationFactor
                  }
                  ,
                  d.prototype.reconnectionDelayMax = function(t) {
                      return arguments.length ? (this._reconnectionDelayMax = t,
                      this.backoff && this.backoff.setMax(t),
                      this) : this._reconnectionDelayMax
                  }
                  ,
                  d.prototype.timeout = function(t) {
                      return arguments.length ? (this._timeout = t,
                      this) : this._timeout
                  }
                  ,
                  d.prototype.maybeReconnectOnOpen = function() {
                      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                  }
                  ,
                  d.prototype.open = d.prototype.connect = function(t, e) {
                      if (p("readyState %s", this.readyState),
                      ~this.readyState.indexOf("open"))
                          return this;
                      p("opening %s", this.uri),
                      this.engine = o(this.uri, this.opts);
                      var n = this.engine
                        , r = this;
                      this.readyState = "opening",
                      this.skipReconnect = !1;
                      var i = l(n, "open", (function() {
                          r.onopen(),
                          t && t()
                      }
                      ))
                        , s = l(n, "error", (function(e) {
                          if (p("connect_error"),
                          r.cleanup(),
                          r.readyState = "closed",
                          r.emitAll("connect_error", e),
                          t) {
                              var n = new Error("Connection error");
                              n.data = e,
                              t(n)
                          } else
                              r.maybeReconnectOnOpen()
                      }
                      ));
                      if (!1 !== this._timeout) {
                          var a = this._timeout;
                          p("connect attempt will timeout after %d", a);
                          var u = setTimeout((function() {
                              p("connect attempt timed out after %d", a),
                              i.destroy(),
                              n.close(),
                              n.emit("error", "timeout"),
                              r.emitAll("connect_timeout", a)
                          }
                          ), a);
                          this.subs.push({
                              destroy: function() {
                                  clearTimeout(u)
                              }
                          })
                      }
                      return this.subs.push(i),
                      this.subs.push(s),
                      this
                  }
                  ,
                  d.prototype.onopen = function() {
                      p("open"),
                      this.cleanup(),
                      this.readyState = "open",
                      this.emit("open");
                      var t = this.engine;
                      this.subs.push(l(t, "data", u(this, "ondata"))),
                      this.subs.push(l(t, "ping", u(this, "onping"))),
                      this.subs.push(l(t, "pong", u(this, "onpong"))),
                      this.subs.push(l(t, "error", u(this, "onerror"))),
                      this.subs.push(l(t, "close", u(this, "onclose"))),
                      this.subs.push(l(this.decoder, "decoded", u(this, "ondecoded")))
                  }
                  ,
                  d.prototype.onping = function() {
                      this.lastPing = new Date,
                      this.emitAll("ping")
                  }
                  ,
                  d.prototype.onpong = function() {
                      this.emitAll("pong", new Date - this.lastPing)
                  }
                  ,
                  d.prototype.ondata = function(t) {
                      this.decoder.add(t)
                  }
                  ,
                  d.prototype.ondecoded = function(t) {
                      this.emit("packet", t)
                  }
                  ,
                  d.prototype.onerror = function(t) {
                      p("error", t),
                      this.emitAll("error", t)
                  }
                  ,
                  d.prototype.socket = function(t, e) {
                      var n = this.nsps[t];
                      if (!n) {
                          n = new i(this,t,e),
                          this.nsps[t] = n;
                          var r = this;
                          n.on("connecting", o),
                          n.on("connect", (function() {
                              n.id = r.generateId(t)
                          }
                          )),
                          this.autoConnect && o()
                      }
                      function o() {
                          ~c(r.connecting, n) || r.connecting.push(n)
                      }
                      return n
                  }
                  ,
                  d.prototype.destroy = function(t) {
                      var e = c(this.connecting, t);
                      ~e && this.connecting.splice(e, 1),
                      this.connecting.length || this.close()
                  }
                  ,
                  d.prototype.packet = function(t) {
                      p("writing packet %j", t);
                      var e = this;
                      t.query && 0 === t.type && (t.nsp += "?" + t.query),
                      e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
                      this.encoder.encode(t, (function(n) {
                          for (var r = 0; r < n.length; r++)
                              e.engine.write(n[r], t.options);
                          e.encoding = !1,
                          e.processPacketQueue()
                      }
                      )))
                  }
                  ,
                  d.prototype.processPacketQueue = function() {
                      if (this.packetBuffer.length > 0 && !this.encoding) {
                          var t = this.packetBuffer.shift();
                          this.packet(t)
                      }
                  }
                  ,
                  d.prototype.cleanup = function() {
                      p("cleanup");
                      for (var t = this.subs.length, e = 0; e < t; e++)
                          this.subs.shift().destroy();
                      this.packetBuffer = [],
                      this.encoding = !1,
                      this.lastPing = null,
                      this.decoder.destroy()
                  }
                  ,
                  d.prototype.close = d.prototype.disconnect = function() {
                      p("disconnect"),
                      this.skipReconnect = !0,
                      this.reconnecting = !1,
                      "opening" === this.readyState && this.cleanup(),
                      this.backoff.reset(),
                      this.readyState = "closed",
                      this.engine && this.engine.close()
                  }
                  ,
                  d.prototype.onclose = function(t) {
                      p("onclose"),
                      this.cleanup(),
                      this.backoff.reset(),
                      this.readyState = "closed",
                      this.emit("close", t),
                      this._reconnection && !this.skipReconnect && this.reconnect()
                  }
                  ,
                  d.prototype.reconnect = function() {
                      if (this.reconnecting || this.skipReconnect)
                          return this;
                      var t = this;
                      if (this.backoff.attempts >= this._reconnectionAttempts)
                          p("reconnect failed"),
                          this.backoff.reset(),
                          this.emitAll("reconnect_failed"),
                          this.reconnecting = !1;
                      else {
                          var e = this.backoff.duration();
                          p("will wait %dms before reconnect attempt", e),
                          this.reconnecting = !0;
                          var n = setTimeout((function() {
                              t.skipReconnect || (p("attempting reconnect"),
                              t.emitAll("reconnect_attempt", t.backoff.attempts),
                              t.emitAll("reconnecting", t.backoff.attempts),
                              t.skipReconnect || t.open((function(e) {
                                  e ? (p("reconnect attempt error"),
                                  t.reconnecting = !1,
                                  t.reconnect(),
                                  t.emitAll("reconnect_error", e.data)) : (p("reconnect success"),
                                  t.onreconnect())
                              }
                              )))
                          }
                          ), e);
                          this.subs.push({
                              destroy: function() {
                                  clearTimeout(n)
                              }
                          })
                      }
                  }
                  ,
                  d.prototype.onreconnect = function() {
                      var t = this.backoff.attempts;
                      this.reconnecting = !1,
                      this.backoff.reset(),
                      this.updateSocketIds(),
                      this.emitAll("reconnect", t)
                  }
              }
              , function(t, e, n) {
                  t.exports = n(14),
                  t.exports.parser = n(21)
              }
              , function(t, e, n) {
                  var r = n(15)
                    , o = n(8)
                    , i = n(3)("engine.io-client:socket")
                    , s = n(35)
                    , a = n(21)
                    , l = n(2)
                    , u = n(29);
                  function p(t, e) {
                      if (!(this instanceof p))
                          return new p(t,e);
                      e = e || {},
                      t && "object" === typeof t && (e = t,
                      t = null),
                      t ? (t = l(t),
                      e.hostname = t.host,
                      e.secure = "https" === t.protocol || "wss" === t.protocol,
                      e.port = t.port,
                      t.query && (e.query = t.query)) : e.host && (e.hostname = l(e.host).host),
                      this.secure = null != e.secure ? e.secure : "undefined" !== typeof location && "https:" === location.protocol,
                      e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
                      this.agent = e.agent || !1,
                      this.hostname = e.hostname || ("undefined" !== typeof location ? location.hostname : "localhost"),
                      this.port = e.port || ("undefined" !== typeof location && location.port ? location.port : this.secure ? 443 : 80),
                      this.query = e.query || {},
                      "string" === typeof this.query && (this.query = u.decode(this.query)),
                      this.upgrade = !1 !== e.upgrade,
                      this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/",
                      this.forceJSONP = !!e.forceJSONP,
                      this.jsonp = !1 !== e.jsonp,
                      this.forceBase64 = !!e.forceBase64,
                      this.enablesXDR = !!e.enablesXDR,
                      this.timestampParam = e.timestampParam || "t",
                      this.timestampRequests = e.timestampRequests,
                      this.transports = e.transports || ["polling", "websocket"],
                      this.transportOptions = e.transportOptions || {},
                      this.readyState = "",
                      this.writeBuffer = [],
                      this.prevBufferLen = 0,
                      this.policyPort = e.policyPort || 843,
                      this.rememberUpgrade = e.rememberUpgrade || !1,
                      this.binaryType = null,
                      this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
                      this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}),
                      !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
                      this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
                      this.pfx = e.pfx || null,
                      this.key = e.key || null,
                      this.passphrase = e.passphrase || null,
                      this.cert = e.cert || null,
                      this.ca = e.ca || null,
                      this.ciphers = e.ciphers || null,
                      this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized,
                      this.forceNode = !!e.forceNode,
                      this.isReactNative = "undefined" !== typeof navigator && "string" === typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
                      ("undefined" === typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders),
                      e.localAddress && (this.localAddress = e.localAddress)),
                      this.id = null,
                      this.upgrades = null,
                      this.pingInterval = null,
                      this.pingTimeout = null,
                      this.pingIntervalTimer = null,
                      this.pingTimeoutTimer = null,
                      this.open()
                  }
                  t.exports = p,
                  p.priorWebsocketSuccess = !1,
                  o(p.prototype),
                  p.protocol = a.protocol,
                  p.Socket = p,
                  p.Transport = n(20),
                  p.transports = n(15),
                  p.parser = n(21),
                  p.prototype.createTransport = function(t) {
                      i('creating transport "%s"', t);
                      var e = function(t) {
                          var e = {};
                          for (var n in t)
                              t.hasOwnProperty(n) && (e[n] = t[n]);
                          return e
                      }(this.query);
                      e.EIO = a.protocol,
                      e.transport = t;
                      var n = this.transportOptions[t] || {};
                      return this.id && (e.sid = this.id),
                      new r[t]({
                          query: e,
                          socket: this,
                          agent: n.agent || this.agent,
                          hostname: n.hostname || this.hostname,
                          port: n.port || this.port,
                          secure: n.secure || this.secure,
                          path: n.path || this.path,
                          forceJSONP: n.forceJSONP || this.forceJSONP,
                          jsonp: n.jsonp || this.jsonp,
                          forceBase64: n.forceBase64 || this.forceBase64,
                          enablesXDR: n.enablesXDR || this.enablesXDR,
                          timestampRequests: n.timestampRequests || this.timestampRequests,
                          timestampParam: n.timestampParam || this.timestampParam,
                          policyPort: n.policyPort || this.policyPort,
                          pfx: n.pfx || this.pfx,
                          key: n.key || this.key,
                          passphrase: n.passphrase || this.passphrase,
                          cert: n.cert || this.cert,
                          ca: n.ca || this.ca,
                          ciphers: n.ciphers || this.ciphers,
                          rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                          perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                          extraHeaders: n.extraHeaders || this.extraHeaders,
                          forceNode: n.forceNode || this.forceNode,
                          localAddress: n.localAddress || this.localAddress,
                          requestTimeout: n.requestTimeout || this.requestTimeout,
                          protocols: n.protocols || void 0,
                          isReactNative: this.isReactNative
                      })
                  }
                  ,
                  p.prototype.open = function() {
                      var t;
                      if (this.rememberUpgrade && p.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
                          t = "websocket";
                      else {
                          if (0 === this.transports.length) {
                              var e = this;
                              return void setTimeout((function() {
                                  e.emit("error", "No transports available")
                              }
                              ), 0)
                          }
                          t = this.transports[0]
                      }
                      this.readyState = "opening";
                      try {
                          t = this.createTransport(t)
                      } catch (n) {
                          return this.transports.shift(),
                          void this.open()
                      }
                      t.open(),
                      this.setTransport(t)
                  }
                  ,
                  p.prototype.setTransport = function(t) {
                      i("setting transport %s", t.name);
                      var e = this;
                      this.transport && (i("clearing existing transport %s", this.transport.name),
                      this.transport.removeAllListeners()),
                      this.transport = t,
                      t.on("drain", (function() {
                          e.onDrain()
                      }
                      )).on("packet", (function(t) {
                          e.onPacket(t)
                      }
                      )).on("error", (function(t) {
                          e.onError(t)
                      }
                      )).on("close", (function() {
                          e.onClose("transport close")
                      }
                      ))
                  }
                  ,
                  p.prototype.probe = function(t) {
                      i('probing transport "%s"', t);
                      var e = this.createTransport(t, {
                          probe: 1
                      })
                        , n = !1
                        , r = this;
                      function o() {
                          if (r.onlyBinaryUpgrades) {
                              var o = !this.supportsBinary && r.transport.supportsBinary;
                              n = n || o
                          }
                          n || (i('probe transport "%s" opened', t),
                          e.send([{
                              type: "ping",
                              data: "probe"
                          }]),
                          e.once("packet", (function(o) {
                              if (!n)
                                  if ("pong" === o.type && "probe" === o.data) {
                                      if (i('probe transport "%s" pong', t),
                                      r.upgrading = !0,
                                      r.emit("upgrading", e),
                                      !e)
                                          return;
                                      p.priorWebsocketSuccess = "websocket" === e.name,
                                      i('pausing current transport "%s"', r.transport.name),
                                      r.transport.pause((function() {
                                          n || "closed" !== r.readyState && (i("changing transport and sending upgrade packet"),
                                          h(),
                                          r.setTransport(e),
                                          e.send([{
                                              type: "upgrade"
                                          }]),
                                          r.emit("upgrade", e),
                                          e = null,
                                          r.upgrading = !1,
                                          r.flush())
                                      }
                                      ))
                                  } else {
                                      i('probe transport "%s" failed', t);
                                      var s = new Error("probe error");
                                      s.transport = e.name,
                                      r.emit("upgradeError", s)
                                  }
                          }
                          )))
                      }
                      function s() {
                          n || (n = !0,
                          h(),
                          e.close(),
                          e = null)
                      }
                      function a(n) {
                          var o = new Error("probe error: " + n);
                          o.transport = e.name,
                          s(),
                          i('probe transport "%s" failed because of error: %s', t, n),
                          r.emit("upgradeError", o)
                      }
                      function l() {
                          a("transport closed")
                      }
                      function u() {
                          a("socket closed")
                      }
                      function c(t) {
                          e && t.name !== e.name && (i('"%s" works - aborting "%s"', t.name, e.name),
                          s())
                      }
                      function h() {
                          e.removeListener("open", o),
                          e.removeListener("error", a),
                          e.removeListener("close", l),
                          r.removeListener("close", u),
                          r.removeListener("upgrading", c)
                      }
                      p.priorWebsocketSuccess = !1,
                      e.once("open", o),
                      e.once("error", a),
                      e.once("close", l),
                      this.once("close", u),
                      this.once("upgrading", c),
                      e.open()
                  }
                  ,
                  p.prototype.onOpen = function() {
                      if (i("socket open"),
                      this.readyState = "open",
                      p.priorWebsocketSuccess = "websocket" === this.transport.name,
                      this.emit("open"),
                      this.flush(),
                      "open" === this.readyState && this.upgrade && this.transport.pause) {
                          i("starting upgrade probes");
                          for (var t = 0, e = this.upgrades.length; t < e; t++)
                              this.probe(this.upgrades[t])
                      }
                  }
                  ,
                  p.prototype.onPacket = function(t) {
                      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                          switch (i('socket receive: type "%s", data "%s"', t.type, t.data),
                          this.emit("packet", t),
                          this.emit("heartbeat"),
                          t.type) {
                          case "open":
                              this.onHandshake(JSON.parse(t.data));
                              break;
                          case "pong":
                              this.setPing(),
                              this.emit("pong");
                              break;
                          case "error":
                              var e = new Error("server error");
                              e.code = t.data,
                              this.onError(e);
                              break;
                          case "message":
                              this.emit("data", t.data),
                              this.emit("message", t.data)
                          }
                      else
                          i('packet received with socket readyState "%s"', this.readyState)
                  }
                  ,
                  p.prototype.onHandshake = function(t) {
                      this.emit("handshake", t),
                      this.id = t.sid,
                      this.transport.query.sid = t.sid,
                      this.upgrades = this.filterUpgrades(t.upgrades),
                      this.pingInterval = t.pingInterval,
                      this.pingTimeout = t.pingTimeout,
                      this.onOpen(),
                      "closed" !== this.readyState && (this.setPing(),
                      this.removeListener("heartbeat", this.onHeartbeat),
                      this.on("heartbeat", this.onHeartbeat))
                  }
                  ,
                  p.prototype.onHeartbeat = function(t) {
                      clearTimeout(this.pingTimeoutTimer);
                      var e = this;
                      e.pingTimeoutTimer = setTimeout((function() {
                          "closed" !== e.readyState && e.onClose("ping timeout")
                      }
                      ), t || e.pingInterval + e.pingTimeout)
                  }
                  ,
                  p.prototype.setPing = function() {
                      var t = this;
                      clearTimeout(t.pingIntervalTimer),
                      t.pingIntervalTimer = setTimeout((function() {
                          i("writing ping packet - expecting pong within %sms", t.pingTimeout),
                          t.ping(),
                          t.onHeartbeat(t.pingTimeout)
                      }
                      ), t.pingInterval)
                  }
                  ,
                  p.prototype.ping = function() {
                      var t = this;
                      this.sendPacket("ping", (function() {
                          t.emit("ping")
                      }
                      ))
                  }
                  ,
                  p.prototype.onDrain = function() {
                      this.writeBuffer.splice(0, this.prevBufferLen),
                      this.prevBufferLen = 0,
                      0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                  }
                  ,
                  p.prototype.flush = function() {
                      "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length),
                      this.transport.send(this.writeBuffer),
                      this.prevBufferLen = this.writeBuffer.length,
                      this.emit("flush"))
                  }
                  ,
                  p.prototype.write = p.prototype.send = function(t, e, n) {
                      return this.sendPacket("message", t, e, n),
                      this
                  }
                  ,
                  p.prototype.sendPacket = function(t, e, n, r) {
                      if ("function" === typeof e && (r = e,
                      e = void 0),
                      "function" === typeof n && (r = n,
                      n = null),
                      "closing" !== this.readyState && "closed" !== this.readyState) {
                          (n = n || {}).compress = !1 !== n.compress;
                          var o = {
                              type: t,
                              data: e,
                              options: n
                          };
                          this.emit("packetCreate", o),
                          this.writeBuffer.push(o),
                          r && this.once("flush", r),
                          this.flush()
                      }
                  }
                  ,
                  p.prototype.close = function() {
                      if ("opening" === this.readyState || "open" === this.readyState) {
                          this.readyState = "closing";
                          var t = this;
                          this.writeBuffer.length ? this.once("drain", (function() {
                              this.upgrading ? r() : e()
                          }
                          )) : this.upgrading ? r() : e()
                      }
                      function e() {
                          t.onClose("forced close"),
                          i("socket closing - telling transport to close"),
                          t.transport.close()
                      }
                      function n() {
                          t.removeListener("upgrade", n),
                          t.removeListener("upgradeError", n),
                          e()
                      }
                      function r() {
                          t.once("upgrade", n),
                          t.once("upgradeError", n)
                      }
                      return this
                  }
                  ,
                  p.prototype.onError = function(t) {
                      i("socket error %j", t),
                      p.priorWebsocketSuccess = !1,
                      this.emit("error", t),
                      this.onClose("transport error", t)
                  }
                  ,
                  p.prototype.onClose = function(t, e) {
                      "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (i('socket close with reason: "%s"', t),
                      clearTimeout(this.pingIntervalTimer),
                      clearTimeout(this.pingTimeoutTimer),
                      this.transport.removeAllListeners("close"),
                      this.transport.close(),
                      this.transport.removeAllListeners(),
                      this.readyState = "closed",
                      this.id = null,
                      this.emit("close", t, e),
                      this.writeBuffer = [],
                      this.prevBufferLen = 0)
                  }
                  ,
                  p.prototype.filterUpgrades = function(t) {
                      for (var e = [], n = 0, r = t.length; n < r; n++)
                          ~s(this.transports, t[n]) && e.push(t[n]);
                      return e
                  }
              }
              , function(t, e, n) {
                  var r = n(16)
                    , o = n(18)
                    , i = n(32)
                    , s = n(33);
                  e.polling = function(t) {
                      var e = !1
                        , n = !1
                        , s = !1 !== t.jsonp;
                      if ("undefined" !== typeof location) {
                          var a = "https:" === location.protocol
                            , l = location.port;
                          l || (l = a ? 443 : 80),
                          e = t.hostname !== location.hostname || l !== t.port,
                          n = t.secure !== a
                      }
                      if (t.xdomain = e,
                      t.xscheme = n,
                      "open"in new r(t) && !t.forceJSONP)
                          return new o(t);
                      if (!s)
                          throw new Error("JSONP disabled");
                      return new i(t)
                  }
                  ,
                  e.websocket = s
              }
              , function(t, e, n) {
                  var r = n(17);
                  t.exports = function(t) {
                      var e = t.xdomain
                        , n = t.xscheme
                        , o = t.enablesXDR;
                      try {
                          if ("undefined" !== typeof XMLHttpRequest && (!e || r))
                              return new XMLHttpRequest
                      } catch (i) {}
                      try {
                          if ("undefined" !== typeof XDomainRequest && !n && o)
                              return new XDomainRequest
                      } catch (i) {}
                      if (!e)
                          try {
                              return new (self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                          } catch (i) {}
                  }
              }
              , function(t, e) {
                  try {
                      t.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
                  } catch (n) {
                      t.exports = !1
                  }
              }
              , function(t, e, n) {
                  var r = n(16)
                    , o = n(19)
                    , i = n(8)
                    , s = n(30)
                    , a = n(3)("engine.io-client:polling-xhr");
                  function l() {}
                  function u(t) {
                      if (o.call(this, t),
                      this.requestTimeout = t.requestTimeout,
                      this.extraHeaders = t.extraHeaders,
                      "undefined" !== typeof location) {
                          var e = "https:" === location.protocol
                            , n = location.port;
                          n || (n = e ? 443 : 80),
                          this.xd = "undefined" !== typeof location && t.hostname !== location.hostname || n !== t.port,
                          this.xs = t.secure !== e
                      }
                  }
                  function p(t) {
                      this.method = t.method || "GET",
                      this.uri = t.uri,
                      this.xd = !!t.xd,
                      this.xs = !!t.xs,
                      this.async = !1 !== t.async,
                      this.data = void 0 !== t.data ? t.data : null,
                      this.agent = t.agent,
                      this.isBinary = t.isBinary,
                      this.supportsBinary = t.supportsBinary,
                      this.enablesXDR = t.enablesXDR,
                      this.requestTimeout = t.requestTimeout,
                      this.pfx = t.pfx,
                      this.key = t.key,
                      this.passphrase = t.passphrase,
                      this.cert = t.cert,
                      this.ca = t.ca,
                      this.ciphers = t.ciphers,
                      this.rejectUnauthorized = t.rejectUnauthorized,
                      this.extraHeaders = t.extraHeaders,
                      this.create()
                  }
                  if (t.exports = u,
                  t.exports.Request = p,
                  s(u, o),
                  u.prototype.supportsBinary = !0,
                  u.prototype.request = function(t) {
                      return (t = t || {}).uri = this.uri(),
                      t.xd = this.xd,
                      t.xs = this.xs,
                      t.agent = this.agent || !1,
                      t.supportsBinary = this.supportsBinary,
                      t.enablesXDR = this.enablesXDR,
                      t.pfx = this.pfx,
                      t.key = this.key,
                      t.passphrase = this.passphrase,
                      t.cert = this.cert,
                      t.ca = this.ca,
                      t.ciphers = this.ciphers,
                      t.rejectUnauthorized = this.rejectUnauthorized,
                      t.requestTimeout = this.requestTimeout,
                      t.extraHeaders = this.extraHeaders,
                      new p(t)
                  }
                  ,
                  u.prototype.doWrite = function(t, e) {
                      var n = "string" !== typeof t && void 0 !== t
                        , r = this.request({
                          method: "POST",
                          data: t,
                          isBinary: n
                      })
                        , o = this;
                      r.on("success", e),
                      r.on("error", (function(t) {
                          o.onError("xhr post error", t)
                      }
                      )),
                      this.sendXhr = r
                  }
                  ,
                  u.prototype.doPoll = function() {
                      a("xhr poll");
                      var t = this.request()
                        , e = this;
                      t.on("data", (function(t) {
                          e.onData(t)
                      }
                      )),
                      t.on("error", (function(t) {
                          e.onError("xhr poll error", t)
                      }
                      )),
                      this.pollXhr = t
                  }
                  ,
                  i(p.prototype),
                  p.prototype.create = function() {
                      var t = {
                          agent: this.agent,
                          xdomain: this.xd,
                          xscheme: this.xs,
                          enablesXDR: this.enablesXDR
                      };
                      t.pfx = this.pfx,
                      t.key = this.key,
                      t.passphrase = this.passphrase,
                      t.cert = this.cert,
                      t.ca = this.ca,
                      t.ciphers = this.ciphers,
                      t.rejectUnauthorized = this.rejectUnauthorized;
                      var e = this.xhr = new r(t)
                        , n = this;
                      try {
                          a("xhr open %s: %s", this.method, this.uri),
                          e.open(this.method, this.uri, this.async);
                          try {
                              if (this.extraHeaders)
                                  for (var o in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0),
                                  this.extraHeaders)
                                      this.extraHeaders.hasOwnProperty(o) && e.setRequestHeader(o, this.extraHeaders[o])
                          } catch (i) {}
                          if ("POST" === this.method)
                              try {
                                  this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                              } catch (i) {}
                          try {
                              e.setRequestHeader("Accept", "*/*")
                          } catch (i) {}
                          "withCredentials"in e && (e.withCredentials = !0),
                          this.requestTimeout && (e.timeout = this.requestTimeout),
                          this.hasXDR() ? (e.onload = function() {
                              n.onLoad()
                          }
                          ,
                          e.onerror = function() {
                              n.onError(e.responseText)
                          }
                          ) : e.onreadystatechange = function() {
                              if (2 === e.readyState)
                                  try {
                                      var t = e.getResponseHeader("Content-Type");
                                      n.supportsBinary && "application/octet-stream" === t && (e.responseType = "arraybuffer")
                                  } catch (i) {}
                              4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout((function() {
                                  n.onError(e.status)
                              }
                              ), 0))
                          }
                          ,
                          a("xhr data %s", this.data),
                          null
                      } catch (i) {
                          return void setTimeout((function() {
                              n.onError(i)
                          }
                          ), 0)
                      }
                      "undefined" !== typeof document && (this.index = p.requestsCount++,
                      p.requests[this.index] = this)
                  }
                  ,
                  p.prototype.onSuccess = function() {
                      this.emit("success"),
                      this.cleanup()
                  }
                  ,
                  p.prototype.onData = function(t) {
                      this.emit("data", t),
                      this.onSuccess()
                  }
                  ,
                  p.prototype.onError = function(t) {
                      this.emit("error", t),
                      this.cleanup(!0)
                  }
                  ,
                  p.prototype.cleanup = function(t) {
                      if ("undefined" !== typeof this.xhr && null !== this.xhr) {
                          if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l,
                          t)
                              try {
                                  this.xhr.abort()
                              } catch (e) {}
                          "undefined" !== typeof document && delete p.requests[this.index],
                          this.xhr = null
                      }
                  }
                  ,
                  p.prototype.onLoad = function() {
                      var t;
                      try {
                          var e;
                          try {
                              e = this.xhr.getResponseHeader("Content-Type")
                          } catch (n) {}
                          t = "application/octet-stream" === e && this.xhr.response || this.xhr.responseText
                      } catch (n) {
                          this.onError(n)
                      }
                      null != t && this.onData(t)
                  }
                  ,
                  p.prototype.hasXDR = function() {
                      return "undefined" !== typeof XDomainRequest && !this.xs && this.enablesXDR
                  }
                  ,
                  p.prototype.abort = function() {
                      this.cleanup()
                  }
                  ,
                  p.requestsCount = 0,
                  p.requests = {},
                  "undefined" !== typeof document)
                      if ("function" === typeof attachEvent)
                          attachEvent("onunload", h);
                      else if ("function" === typeof addEventListener) {
                          var c = "onpagehide"in self ? "pagehide" : "unload";
                          addEventListener(c, h, !1)
                      }
                  function h() {
                      for (var t in p.requests)
                          p.requests.hasOwnProperty(t) && p.requests[t].abort()
                  }
              }
              , function(t, e, n) {
                  var r = n(20)
                    , o = n(29)
                    , i = n(21)
                    , s = n(30)
                    , a = n(31)
                    , l = n(3)("engine.io-client:polling");
                  t.exports = p;
                  var u = null != new (n(16))({
                      xdomain: !1
                  }).responseType;
                  function p(t) {
                      var e = t && t.forceBase64;
                      u && !e || (this.supportsBinary = !1),
                      r.call(this, t)
                  }
                  s(p, r),
                  p.prototype.name = "polling",
                  p.prototype.doOpen = function() {
                      this.poll()
                  }
                  ,
                  p.prototype.pause = function(t) {
                      var e = this;
                      function n() {
                          l("paused"),
                          e.readyState = "paused",
                          t()
                      }
                      if (this.readyState = "pausing",
                      this.polling || !this.writable) {
                          var r = 0;
                          this.polling && (l("we are currently polling - waiting to pause"),
                          r++,
                          this.once("pollComplete", (function() {
                              l("pre-pause polling complete"),
                              --r || n()
                          }
                          ))),
                          this.writable || (l("we are currently writing - waiting to pause"),
                          r++,
                          this.once("drain", (function() {
                              l("pre-pause writing complete"),
                              --r || n()
                          }
                          )))
                      } else
                          n()
                  }
                  ,
                  p.prototype.poll = function() {
                      l("polling"),
                      this.polling = !0,
                      this.doPoll(),
                      this.emit("poll")
                  }
                  ,
                  p.prototype.onData = function(t) {
                      var e = this;
                      l("polling got data %s", t),
                      i.decodePayload(t, this.socket.binaryType, (function(t, n, r) {
                          if ("opening" === e.readyState && e.onOpen(),
                          "close" === t.type)
                              return e.onClose(),
                              !1;
                          e.onPacket(t)
                      }
                      )),
                      "closed" !== this.readyState && (this.polling = !1,
                      this.emit("pollComplete"),
                      "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
                  }
                  ,
                  p.prototype.doClose = function() {
                      var t = this;
                      function e() {
                          l("writing close packet"),
                          t.write([{
                              type: "close"
                          }])
                      }
                      "open" === this.readyState ? (l("transport open - closing"),
                      e()) : (l("transport not open - deferring close"),
                      this.once("open", e))
                  }
                  ,
                  p.prototype.write = function(t) {
                      var e = this;
                      this.writable = !1;
                      var n = function() {
                          e.writable = !0,
                          e.emit("drain")
                      };
                      i.encodePayload(t, this.supportsBinary, (function(t) {
                          e.doWrite(t, n)
                      }
                      ))
                  }
                  ,
                  p.prototype.uri = function() {
                      var t = this.query || {}
                        , e = this.secure ? "https" : "http"
                        , n = "";
                      return !1 !== this.timestampRequests && (t[this.timestampParam] = a()),
                      this.supportsBinary || t.sid || (t.b64 = 1),
                      t = o.encode(t),
                      this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
                      t.length && (t = "?" + t),
                      e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                  }
              }
              , function(t, e, n) {
                  var r = n(21)
                    , o = n(8);
                  function i(t) {
                      this.path = t.path,
                      this.hostname = t.hostname,
                      this.port = t.port,
                      this.secure = t.secure,
                      this.query = t.query,
                      this.timestampParam = t.timestampParam,
                      this.timestampRequests = t.timestampRequests,
                      this.readyState = "",
                      this.agent = t.agent || !1,
                      this.socket = t.socket,
                      this.enablesXDR = t.enablesXDR,
                      this.pfx = t.pfx,
                      this.key = t.key,
                      this.passphrase = t.passphrase,
                      this.cert = t.cert,
                      this.ca = t.ca,
                      this.ciphers = t.ciphers,
                      this.rejectUnauthorized = t.rejectUnauthorized,
                      this.forceNode = t.forceNode,
                      this.isReactNative = t.isReactNative,
                      this.extraHeaders = t.extraHeaders,
                      this.localAddress = t.localAddress
                  }
                  t.exports = i,
                  o(i.prototype),
                  i.prototype.onError = function(t, e) {
                      var n = new Error(t);
                      return n.type = "TransportError",
                      n.description = e,
                      this.emit("error", n),
                      this
                  }
                  ,
                  i.prototype.open = function() {
                      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening",
                      this.doOpen()),
                      this
                  }
                  ,
                  i.prototype.close = function() {
                      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
                      this.onClose()),
                      this
                  }
                  ,
                  i.prototype.send = function(t) {
                      if ("open" !== this.readyState)
                          throw new Error("Transport not open");
                      this.write(t)
                  }
                  ,
                  i.prototype.onOpen = function() {
                      this.readyState = "open",
                      this.writable = !0,
                      this.emit("open")
                  }
                  ,
                  i.prototype.onData = function(t) {
                      var e = r.decodePacket(t, this.socket.binaryType);
                      this.onPacket(e)
                  }
                  ,
                  i.prototype.onPacket = function(t) {
                      this.emit("packet", t)
                  }
                  ,
                  i.prototype.onClose = function() {
                      this.readyState = "closed",
                      this.emit("close")
                  }
              }
              , function(t, e, n) {
                  var r, o = n(22), i = n(23), s = n(24), a = n(25), l = n(26);
                  "undefined" !== typeof ArrayBuffer && (r = n(27));
                  var u = "undefined" !== typeof navigator && /Android/i.test(navigator.userAgent)
                    , p = "undefined" !== typeof navigator && /PhantomJS/i.test(navigator.userAgent)
                    , c = u || p;
                  e.protocol = 3;
                  var h = e.packets = {
                      open: 0,
                      close: 1,
                      ping: 2,
                      pong: 3,
                      message: 4,
                      upgrade: 5,
                      noop: 6
                  }
                    , f = o(h)
                    , d = {
                      type: "error",
                      data: "parser error"
                  }
                    , y = n(28);
                  function m(t, e, n) {
                      for (var r = new Array(t.length), o = a(t.length, n), i = function(t, n, o) {
                          e(n, (function(e, n) {
                              r[t] = n,
                              o(e, r)
                          }
                          ))
                      }, s = 0; s < t.length; s++)
                          i(s, t[s], o)
                  }
                  e.encodePacket = function(t, n, r, o) {
                      "function" === typeof n && (o = n,
                      n = !1),
                      "function" === typeof r && (o = r,
                      r = null);
                      var i = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                      if ("undefined" !== typeof ArrayBuffer && i instanceof ArrayBuffer)
                          return function(t, n, r) {
                              if (!n)
                                  return e.encodeBase64Packet(t, r);
                              var o = t.data
                                , i = new Uint8Array(o)
                                , s = new Uint8Array(1 + o.byteLength);
                              s[0] = h[t.type];
                              for (var a = 0; a < i.length; a++)
                                  s[a + 1] = i[a];
                              return r(s.buffer)
                          }(t, n, o);
                      if ("undefined" !== typeof y && i instanceof y)
                          return function(t, n, r) {
                              if (!n)
                                  return e.encodeBase64Packet(t, r);
                              if (c)
                                  return function(t, n, r) {
                                      if (!n)
                                          return e.encodeBase64Packet(t, r);
                                      var o = new FileReader;
                                      return o.onload = function() {
                                          e.encodePacket({
                                              type: t.type,
                                              data: o.result
                                          }, n, !0, r)
                                      }
                                      ,
                                      o.readAsArrayBuffer(t.data)
                                  }(t, n, r);
                              var o = new Uint8Array(1);
                              o[0] = h[t.type];
                              var i = new y([o.buffer, t.data]);
                              return r(i)
                          }(t, n, o);
                      if (i && i.base64)
                          return function(t, n) {
                              var r = "b" + e.packets[t.type] + t.data.data;
                              return n(r)
                          }(t, o);
                      var s = h[t.type];
                      return void 0 !== t.data && (s += r ? l.encode(String(t.data), {
                          strict: !1
                      }) : String(t.data)),
                      o("" + s)
                  }
                  ,
                  e.encodeBase64Packet = function(t, n) {
                      var r, o = "b" + e.packets[t.type];
                      if ("undefined" !== typeof y && t.data instanceof y) {
                          var i = new FileReader;
                          return i.onload = function() {
                              var t = i.result.split(",")[1];
                              n(o + t)
                          }
                          ,
                          i.readAsDataURL(t.data)
                      }
                      try {
                          r = String.fromCharCode.apply(null, new Uint8Array(t.data))
                      } catch (u) {
                          for (var s = new Uint8Array(t.data), a = new Array(s.length), l = 0; l < s.length; l++)
                              a[l] = s[l];
                          r = String.fromCharCode.apply(null, a)
                      }
                      return o += btoa(r),
                      n(o)
                  }
                  ,
                  e.decodePacket = function(t, n, r) {
                      if (void 0 === t)
                          return d;
                      if ("string" === typeof t) {
                          if ("b" === t.charAt(0))
                              return e.decodeBase64Packet(t.substr(1), n);
                          if (r && !1 === (t = function(t) {
                              try {
                                  t = l.decode(t, {
                                      strict: !1
                                  })
                              } catch (e) {
                                  return !1
                              }
                              return t
                          }(t)))
                              return d;
                          var o = t.charAt(0);
                          return Number(o) == o && f[o] ? t.length > 1 ? {
                              type: f[o],
                              data: t.substring(1)
                          } : {
                              type: f[o]
                          } : d
                      }
                      o = new Uint8Array(t)[0];
                      var i = s(t, 1);
                      return y && "blob" === n && (i = new y([i])),
                      {
                          type: f[o],
                          data: i
                      }
                  }
                  ,
                  e.decodeBase64Packet = function(t, e) {
                      var n = f[t.charAt(0)];
                      if (!r)
                          return {
                              type: n,
                              data: {
                                  base64: !0,
                                  data: t.substr(1)
                              }
                          };
                      var o = r.decode(t.substr(1));
                      return "blob" === e && y && (o = new y([o])),
                      {
                          type: n,
                          data: o
                      }
                  }
                  ,
                  e.encodePayload = function(t, n, r) {
                      "function" === typeof n && (r = n,
                      n = null);
                      var o = i(t);
                      return n && o ? y && !c ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void m(t, (function(t, r) {
                          e.encodePacket(t, !!o && n, !1, (function(t) {
                              r(null, function(t) {
                                  return t.length + ":" + t
                              }(t))
                          }
                          ))
                      }
                      ), (function(t, e) {
                          return r(e.join(""))
                      }
                      )) : r("0:")
                  }
                  ,
                  e.decodePayload = function(t, n, r) {
                      if ("string" !== typeof t)
                          return e.decodePayloadAsBinary(t, n, r);
                      var o;
                      if ("function" === typeof n && (r = n,
                      n = null),
                      "" === t)
                          return r(d, 0, 1);
                      for (var i, s, a = "", l = 0, u = t.length; l < u; l++) {
                          var p = t.charAt(l);
                          if (":" === p) {
                              if ("" === a || a != (i = Number(a)))
                                  return r(d, 0, 1);
                              if (a != (s = t.substr(l + 1, i)).length)
                                  return r(d, 0, 1);
                              if (s.length) {
                                  if (o = e.decodePacket(s, n, !1),
                                  d.type === o.type && d.data === o.data)
                                      return r(d, 0, 1);
                                  if (!1 === r(o, l + i, u))
                                      return
                              }
                              l += i,
                              a = ""
                          } else
                              a += p
                      }
                      return "" !== a ? r(d, 0, 1) : void 0
                  }
                  ,
                  e.encodePayloadAsArrayBuffer = function(t, n) {
                      if (!t.length)
                          return n(new ArrayBuffer(0));
                      m(t, (function(t, n) {
                          e.encodePacket(t, !0, !0, (function(t) {
                              return n(null, t)
                          }
                          ))
                      }
                      ), (function(t, e) {
                          var r = e.reduce((function(t, e) {
                              var n;
                              return t + (n = "string" === typeof e ? e.length : e.byteLength).toString().length + n + 2
                          }
                          ), 0)
                            , o = new Uint8Array(r)
                            , i = 0;
                          return e.forEach((function(t) {
                              var e = "string" === typeof t
                                , n = t;
                              if (e) {
                                  for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++)
                                      r[s] = t.charCodeAt(s);
                                  n = r.buffer
                              }
                              o[i++] = e ? 0 : 1;
                              var a = n.byteLength.toString();
                              for (s = 0; s < a.length; s++)
                                  o[i++] = parseInt(a[s]);
                              for (o[i++] = 255,
                              r = new Uint8Array(n),
                              s = 0; s < r.length; s++)
                                  o[i++] = r[s]
                          }
                          )),
                          n(o.buffer)
                      }
                      ))
                  }
                  ,
                  e.encodePayloadAsBlob = function(t, n) {
                      m(t, (function(t, n) {
                          e.encodePacket(t, !0, !0, (function(t) {
                              var e = new Uint8Array(1);
                              if (e[0] = 1,
                              "string" === typeof t) {
                                  for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++)
                                      r[o] = t.charCodeAt(o);
                                  t = r.buffer,
                                  e[0] = 0
                              }
                              var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString()
                                , s = new Uint8Array(i.length + 1);
                              for (o = 0; o < i.length; o++)
                                  s[o] = parseInt(i[o]);
                              if (s[i.length] = 255,
                              y) {
                                  var a = new y([e.buffer, s.buffer, t]);
                                  n(null, a)
                              }
                          }
                          ))
                      }
                      ), (function(t, e) {
                          return n(new y(e))
                      }
                      ))
                  }
                  ,
                  e.decodePayloadAsBinary = function(t, n, r) {
                      "function" === typeof n && (r = n,
                      n = null);
                      for (var o = t, i = []; o.byteLength > 0; ) {
                          for (var a = new Uint8Array(o), l = 0 === a[0], u = "", p = 1; 255 !== a[p]; p++) {
                              if (u.length > 310)
                                  return r(d, 0, 1);
                              u += a[p]
                          }
                          o = s(o, 2 + u.length),
                          u = parseInt(u);
                          var c = s(o, 0, u);
                          if (l)
                              try {
                                  c = String.fromCharCode.apply(null, new Uint8Array(c))
                              } catch (y) {
                                  var h = new Uint8Array(c);
                                  for (c = "",
                                  p = 0; p < h.length; p++)
                                      c += String.fromCharCode(h[p])
                              }
                          i.push(c),
                          o = s(o, u)
                      }
                      var f = i.length;
                      i.forEach((function(t, o) {
                          r(e.decodePacket(t, n, !0), o, f)
                      }
                      ))
                  }
              }
              , function(t, e) {
                  t.exports = Object.keys || function(t) {
                      var e = []
                        , n = Object.prototype.hasOwnProperty;
                      for (var r in t)
                          n.call(t, r) && e.push(r);
                      return e
                  }
              }
              , function(t, n, r) {
                  var o = r(10)
                    , i = Object.prototype.toString
                    , s = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === i.call(Blob)
                    , a = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === i.call(File);
                  t.exports = function t(n) {
                      if (!n || "object" !== typeof n)
                          return !1;
                      if (o(n)) {
                          for (var r = 0, i = n.length; r < i; r++)
                              if (t(n[r]))
                                  return !0;
                          return !1
                      }
                      if ("function" === typeof e && e.isBuffer && e.isBuffer(n) || "function" === typeof ArrayBuffer && n instanceof ArrayBuffer || s && n instanceof Blob || a && n instanceof File)
                          return !0;
                      if (n.toJSON && "function" === typeof n.toJSON && 1 === arguments.length)
                          return t(n.toJSON(), !0);
                      for (var l in n)
                          if (Object.prototype.hasOwnProperty.call(n, l) && t(n[l]))
                              return !0;
                      return !1
                  }
              }
              , function(t, e) {
                  t.exports = function(t, e, n) {
                      var r = t.byteLength;
                      if (e = e || 0,
                      n = n || r,
                      t.slice)
                          return t.slice(e, n);
                      if (e < 0 && (e += r),
                      n < 0 && (n += r),
                      n > r && (n = r),
                      e >= r || e >= n || 0 === r)
                          return new ArrayBuffer(0);
                      for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++,
                      a++)
                          i[a] = o[s];
                      return i.buffer
                  }
              }
              , function(t, e) {
                  function n() {}
                  t.exports = function(t, e, r) {
                      var o = !1;
                      return r = r || n,
                      i.count = t,
                      0 === t ? e() : i;
                      function i(t, n) {
                          if (i.count <= 0)
                              throw new Error("after called too many times");
                          --i.count,
                          t ? (o = !0,
                          e(t),
                          e = r) : 0 !== i.count || o || e(null, n)
                      }
                  }
              }
              , function(t, e) {
                  var n, r, o, i = String.fromCharCode;
                  function s(t) {
                      for (var e, n, r = [], o = 0, i = t.length; o < i; )
                          (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                          o--) : r.push(e);
                      return r
                  }
                  function a(t, e) {
                      if (t >= 55296 && t <= 57343) {
                          if (e)
                              throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                          return !1
                      }
                      return !0
                  }
                  function l(t, e) {
                      return i(t >> e & 63 | 128)
                  }
                  function u(t, e) {
                      if (0 == (4294967168 & t))
                          return i(t);
                      var n = "";
                      return 0 == (4294965248 & t) ? n = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (a(t, e) || (t = 65533),
                      n = i(t >> 12 & 15 | 224),
                      n += l(t, 6)) : 0 == (4292870144 & t) && (n = i(t >> 18 & 7 | 240),
                      n += l(t, 12),
                      n += l(t, 6)),
                      n += i(63 & t | 128)
                  }
                  function p() {
                      if (o >= r)
                          throw Error("Invalid byte index");
                      var t = 255 & n[o];
                      if (o++,
                      128 == (192 & t))
                          return 63 & t;
                      throw Error("Invalid continuation byte")
                  }
                  function c(t) {
                      var e, i;
                      if (o > r)
                          throw Error("Invalid byte index");
                      if (o == r)
                          return !1;
                      if (e = 255 & n[o],
                      o++,
                      0 == (128 & e))
                          return e;
                      if (192 == (224 & e)) {
                          if ((i = (31 & e) << 6 | p()) >= 128)
                              return i;
                          throw Error("Invalid continuation byte")
                      }
                      if (224 == (240 & e)) {
                          if ((i = (15 & e) << 12 | p() << 6 | p()) >= 2048)
                              return a(i, t) ? i : 65533;
                          throw Error("Invalid continuation byte")
                      }
                      if (240 == (248 & e) && (i = (7 & e) << 18 | p() << 12 | p() << 6 | p()) >= 65536 && i <= 1114111)
                          return i;
                      throw Error("Invalid UTF-8 detected")
                  }
                  t.exports = {
                      version: "2.1.2",
                      encode: function(t, e) {
                          for (var n = !1 !== (e = e || {}).strict, r = s(t), o = r.length, i = -1, a = ""; ++i < o; )
                              a += u(r[i], n);
                          return a
                      },
                      decode: function(t, e) {
                          var a = !1 !== (e = e || {}).strict;
                          n = s(t),
                          r = n.length,
                          o = 0;
                          for (var l, u = []; !1 !== (l = c(a)); )
                              u.push(l);
                          return function(t) {
                              for (var e, n = t.length, r = -1, o = ""; ++r < n; )
                                  (e = t[r]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296),
                                  e = 56320 | 1023 & e),
                                  o += i(e);
                              return o
                          }(u)
                      }
                  }
              }
              , function(t, e) {
                  !function() {
                      "use strict";
                      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++)
                          n[t.charCodeAt(r)] = r;
                      e.encode = function(e) {
                          var n, r = new Uint8Array(e), o = r.length, i = "";
                          for (n = 0; n < o; n += 3)
                              i += t[r[n] >> 2],
                              i += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                              i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                              i += t[63 & r[n + 2]];
                          return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
                          i
                      }
                      ,
                      e.decode = function(t) {
                          var e, r, o, i, s, a = .75 * t.length, l = t.length, u = 0;
                          "=" === t[t.length - 1] && (a--,
                          "=" === t[t.length - 2] && a--);
                          var p = new ArrayBuffer(a)
                            , c = new Uint8Array(p);
                          for (e = 0; e < l; e += 4)
                              r = n[t.charCodeAt(e)],
                              o = n[t.charCodeAt(e + 1)],
                              i = n[t.charCodeAt(e + 2)],
                              s = n[t.charCodeAt(e + 3)],
                              c[u++] = r << 2 | o >> 4,
                              c[u++] = (15 & o) << 4 | i >> 2,
                              c[u++] = (3 & i) << 6 | 63 & s;
                          return p
                      }
                  }()
              }
              , function(t, e) {
                  var n = "undefined" !== typeof n ? n : "undefined" !== typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" !== typeof MSBlobBuilder ? MSBlobBuilder : "undefined" !== typeof MozBlobBuilder && MozBlobBuilder
                    , r = function() {
                      try {
                          return 2 === new Blob(["hi"]).size
                      } catch (t) {
                          return !1
                      }
                  }()
                    , o = r && function() {
                      try {
                          return 2 === new Blob([new Uint8Array([1, 2])]).size
                      } catch (t) {
                          return !1
                      }
                  }()
                    , i = n && n.prototype.append && n.prototype.getBlob;
                  function s(t) {
                      return t.map((function(t) {
                          if (t.buffer instanceof ArrayBuffer) {
                              var e = t.buffer;
                              if (t.byteLength !== e.byteLength) {
                                  var n = new Uint8Array(t.byteLength);
                                  n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),
                                  e = n.buffer
                              }
                              return e
                          }
                          return t
                      }
                      ))
                  }
                  function a(t, e) {
                      e = e || {};
                      var r = new n;
                      return s(t).forEach((function(t) {
                          r.append(t)
                      }
                      )),
                      e.type ? r.getBlob(e.type) : r.getBlob()
                  }
                  function l(t, e) {
                      return new Blob(s(t),e || {})
                  }
                  "undefined" !== typeof Blob && (a.prototype = Blob.prototype,
                  l.prototype = Blob.prototype),
                  t.exports = r ? o ? Blob : l : i ? a : void 0
              }
              , function(t, e) {
                  e.encode = function(t) {
                      var e = "";
                      for (var n in t)
                          t.hasOwnProperty(n) && (e.length && (e += "&"),
                          e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                      return e
                  }
                  ,
                  e.decode = function(t) {
                      for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                          var i = n[r].split("=");
                          e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                      }
                      return e
                  }
              }
              , function(t, e) {
                  t.exports = function(t, e) {
                      var n = function() {};
                      n.prototype = e.prototype,
                      t.prototype = new n,
                      t.prototype.constructor = t
                  }
              }
              , function(t, e) {
                  "use strict";
                  var n, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), o = {}, i = 0, s = 0;
                  function a(t) {
                      var e = "";
                      do {
                          e = r[t % 64] + e,
                          t = Math.floor(t / 64)
                      } while (t > 0);
                      return e
                  }
                  function l() {
                      var t = a(+new Date);
                      return t !== n ? (i = 0,
                      n = t) : t + "." + a(i++)
                  }
                  for (; s < 64; s++)
                      o[r[s]] = s;
                  l.encode = a,
                  l.decode = function(t) {
                      var e = 0;
                      for (s = 0; s < t.length; s++)
                          e = 64 * e + o[t.charAt(s)];
                      return e
                  }
                  ,
                  t.exports = l
              }
              , function(t, e, n) {
                  (function(e) {
                      var r = n(19)
                        , o = n(30);
                      t.exports = p;
                      var i, s = /\n/g, a = /\\n/g;
                      function l() {}
                      function u() {
                          return "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : {}
                      }
                      function p(t) {
                          if (r.call(this, t),
                          this.query = this.query || {},
                          !i) {
                              var e = u();
                              i = e.___eio = e.___eio || []
                          }
                          this.index = i.length;
                          var n = this;
                          i.push((function(t) {
                              n.onData(t)
                          }
                          )),
                          this.query.j = this.index,
                          "function" === typeof addEventListener && addEventListener("beforeunload", (function() {
                              n.script && (n.script.onerror = l)
                          }
                          ), !1)
                      }
                      o(p, r),
                      p.prototype.supportsBinary = !1,
                      p.prototype.doClose = function() {
                          this.script && (this.script.parentNode.removeChild(this.script),
                          this.script = null),
                          this.form && (this.form.parentNode.removeChild(this.form),
                          this.form = null,
                          this.iframe = null),
                          r.prototype.doClose.call(this)
                      }
                      ,
                      p.prototype.doPoll = function() {
                          var t = this
                            , e = document.createElement("script");
                          this.script && (this.script.parentNode.removeChild(this.script),
                          this.script = null),
                          e.async = !0,
                          e.src = this.uri(),
                          e.onerror = function(e) {
                              t.onError("jsonp poll error", e)
                          }
                          ;
                          var n = document.getElementsByTagName("script")[0];
                          n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                          this.script = e,
                          "undefined" !== typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                              var t = document.createElement("iframe");
                              document.body.appendChild(t),
                              document.body.removeChild(t)
                          }
                          ), 100)
                      }
                      ,
                      p.prototype.doWrite = function(t, e) {
                          var n = this;
                          if (!this.form) {
                              var r, o = document.createElement("form"), i = document.createElement("textarea"), l = this.iframeId = "eio_iframe_" + this.index;
                              o.className = "socketio",
                              o.style.position = "absolute",
                              o.style.top = "-1000px",
                              o.style.left = "-1000px",
                              o.target = l,
                              o.method = "POST",
                              o.setAttribute("accept-charset", "utf-8"),
                              i.name = "d",
                              o.appendChild(i),
                              document.body.appendChild(o),
                              this.form = o,
                              this.area = i
                          }
                          function u() {
                              p(),
                              e()
                          }
                          function p() {
                              if (n.iframe)
                                  try {
                                      n.form.removeChild(n.iframe)
                                  } catch (e) {
                                      n.onError("jsonp polling iframe removal error", e)
                                  }
                              try {
                                  var t = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                                  r = document.createElement(t)
                              } catch (e) {
                                  (r = document.createElement("iframe")).name = n.iframeId,
                                  r.src = "javascript:0"
                              }
                              r.id = n.iframeId,
                              n.form.appendChild(r),
                              n.iframe = r
                          }
                          this.form.action = this.uri(),
                          p(),
                          t = t.replace(a, "\\\n"),
                          this.area.value = t.replace(s, "\\n");
                          try {
                              this.form.submit()
                          } catch (c) {}
                          this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                              "complete" === n.iframe.readyState && u()
                          }
                          : this.iframe.onload = u
                      }
                  }
                  ).call(e, function() {
                      return this
                  }())
              }
              , function(t, n, r) {
                  var o, i, s = r(20), a = r(21), l = r(29), u = r(30), p = r(31), c = r(3)("engine.io-client:websocket");
                  if ("undefined" === typeof self)
                      try {
                          i = r(34)
                      } catch (d) {}
                  else
                      o = self.WebSocket || self.MozWebSocket;
                  var h = o || i;
                  function f(t) {
                      t && t.forceBase64 && (this.supportsBinary = !1),
                      this.perMessageDeflate = t.perMessageDeflate,
                      this.usingBrowserWebSocket = o && !t.forceNode,
                      this.protocols = t.protocols,
                      this.usingBrowserWebSocket || (h = i),
                      s.call(this, t)
                  }
                  t.exports = f,
                  u(f, s),
                  f.prototype.name = "websocket",
                  f.prototype.supportsBinary = !0,
                  f.prototype.doOpen = function() {
                      if (this.check()) {
                          var t = this.uri()
                            , e = this.protocols
                            , n = {
                              agent: this.agent,
                              perMessageDeflate: this.perMessageDeflate
                          };
                          n.pfx = this.pfx,
                          n.key = this.key,
                          n.passphrase = this.passphrase,
                          n.cert = this.cert,
                          n.ca = this.ca,
                          n.ciphers = this.ciphers,
                          n.rejectUnauthorized = this.rejectUnauthorized,
                          this.extraHeaders && (n.headers = this.extraHeaders),
                          this.localAddress && (n.localAddress = this.localAddress);
                          try {
                              this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new h(t,e) : new h(t) : new h(t,e,n)
                          } catch (r) {
                              return this.emit("error", r)
                          }
                          void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                          this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                          this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
                          this.addEventListeners()
                      }
                  }
                  ,
                  f.prototype.addEventListeners = function() {
                      var t = this;
                      this.ws.onopen = function() {
                          t.onOpen()
                      }
                      ,
                      this.ws.onclose = function() {
                          t.onClose()
                      }
                      ,
                      this.ws.onmessage = function(e) {
                          t.onData(e.data)
                      }
                      ,
                      this.ws.onerror = function(e) {
                          t.onError("websocket error", e)
                      }
                  }
                  ,
                  f.prototype.write = function(t) {
                      var n = this;
                      this.writable = !1;
                      for (var r = t.length, o = 0, i = r; o < i; o++)
                          !function(t) {
                              a.encodePacket(t, n.supportsBinary, (function(o) {
                                  if (!n.usingBrowserWebSocket) {
                                      var i = {};
                                      t.options && (i.compress = t.options.compress),
                                      n.perMessageDeflate && ("string" === typeof o ? e.byteLength(o) : o.length) < n.perMessageDeflate.threshold && (i.compress = !1)
                                  }
                                  try {
                                      n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i)
                                  } catch (d) {
                                      c("websocket closed before onclose event")
                                  }
                                  --r || (n.emit("flush"),
                                  setTimeout((function() {
                                      n.writable = !0,
                                      n.emit("drain")
                                  }
                                  ), 0))
                              }
                              ))
                          }(t[o])
                  }
                  ,
                  f.prototype.onClose = function() {
                      s.prototype.onClose.call(this)
                  }
                  ,
                  f.prototype.doClose = function() {
                      "undefined" !== typeof this.ws && this.ws.close()
                  }
                  ,
                  f.prototype.uri = function() {
                      var t = this.query || {}
                        , e = this.secure ? "wss" : "ws"
                        , n = "";
                      return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
                      this.timestampRequests && (t[this.timestampParam] = p()),
                      this.supportsBinary || (t.b64 = 1),
                      (t = l.encode(t)).length && (t = "?" + t),
                      e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
                  }
                  ,
                  f.prototype.check = function() {
                      return !!h && !("__initialize"in h && this.name === f.prototype.name)
                  }
              }
              , function(t, e) {}
              , function(t, e) {
                  var n = [].indexOf;
                  t.exports = function(t, e) {
                      if (n)
                          return t.indexOf(e);
                      for (var r = 0; r < t.length; ++r)
                          if (t[r] === e)
                              return r;
                      return -1
                  }
              }
              , function(t, e, n) {
                  "use strict";
                  var r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                      return typeof t
                  }
                  : function(t) {
                      return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  }
                    , o = n(7)
                    , i = n(8)
                    , s = n(37)
                    , a = n(38)
                    , l = n(39)
                    , u = n(3)("socket.io-client:socket")
                    , p = n(29)
                    , c = n(23);
                  t.exports = d;
                  var h = {
                      connect: 1,
                      connect_error: 1,
                      connect_timeout: 1,
                      connecting: 1,
                      disconnect: 1,
                      error: 1,
                      reconnect: 1,
                      reconnect_attempt: 1,
                      reconnect_failed: 1,
                      reconnect_error: 1,
                      reconnecting: 1,
                      ping: 1,
                      pong: 1
                  }
                    , f = i.prototype.emit;
                  function d(t, e, n) {
                      this.io = t,
                      this.nsp = e,
                      this.json = this,
                      this.ids = 0,
                      this.acks = {},
                      this.receiveBuffer = [],
                      this.sendBuffer = [],
                      this.connected = !1,
                      this.disconnected = !0,
                      this.flags = {},
                      n && n.query && (this.query = n.query),
                      this.io.autoConnect && this.open()
                  }
                  i(d.prototype),
                  d.prototype.subEvents = function() {
                      if (!this.subs) {
                          var t = this.io;
                          this.subs = [a(t, "open", l(this, "onopen")), a(t, "packet", l(this, "onpacket")), a(t, "close", l(this, "onclose"))]
                      }
                  }
                  ,
                  d.prototype.open = d.prototype.connect = function() {
                      return this.connected || (this.subEvents(),
                      this.io.open(),
                      "open" === this.io.readyState && this.onopen(),
                      this.emit("connecting")),
                      this
                  }
                  ,
                  d.prototype.send = function() {
                      var t = s(arguments);
                      return t.unshift("message"),
                      this.emit.apply(this, t),
                      this
                  }
                  ,
                  d.prototype.emit = function(t) {
                      if (h.hasOwnProperty(t))
                          return f.apply(this, arguments),
                          this;
                      var e = s(arguments)
                        , n = {
                          type: (void 0 !== this.flags.binary ? this.flags.binary : c(e)) ? o.BINARY_EVENT : o.EVENT,
                          data: e,
                          options: {}
                      };
                      return n.options.compress = !this.flags || !1 !== this.flags.compress,
                      "function" === typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids),
                      this.acks[this.ids] = e.pop(),
                      n.id = this.ids++),
                      this.connected ? this.packet(n) : this.sendBuffer.push(n),
                      this.flags = {},
                      this
                  }
                  ,
                  d.prototype.packet = function(t) {
                      t.nsp = this.nsp,
                      this.io.packet(t)
                  }
                  ,
                  d.prototype.onopen = function() {
                      if (u("transport is open - connecting"),
                      "/" !== this.nsp)
                          if (this.query) {
                              var t = "object" === r(this.query) ? p.encode(this.query) : this.query;
                              u("sending connect packet with query %s", t),
                              this.packet({
                                  type: o.CONNECT,
                                  query: t
                              })
                          } else
                              this.packet({
                                  type: o.CONNECT
                              })
                  }
                  ,
                  d.prototype.onclose = function(t) {
                      u("close (%s)", t),
                      this.connected = !1,
                      this.disconnected = !0,
                      delete this.id,
                      this.emit("disconnect", t)
                  }
                  ,
                  d.prototype.onpacket = function(t) {
                      var e = t.nsp === this.nsp
                        , n = t.type === o.ERROR && "/" === t.nsp;
                      if (e || n)
                          switch (t.type) {
                          case o.CONNECT:
                              this.onconnect();
                              break;
                          case o.EVENT:
                          case o.BINARY_EVENT:
                              this.onevent(t);
                              break;
                          case o.ACK:
                          case o.BINARY_ACK:
                              this.onack(t);
                              break;
                          case o.DISCONNECT:
                              this.ondisconnect();
                              break;
                          case o.ERROR:
                              this.emit("error", t.data)
                          }
                  }
                  ,
                  d.prototype.onevent = function(t) {
                      var e = t.data || [];
                      u("emitting event %j", e),
                      null != t.id && (u("attaching ack callback to event"),
                      e.push(this.ack(t.id))),
                      this.connected ? f.apply(this, e) : this.receiveBuffer.push(e)
                  }
                  ,
                  d.prototype.ack = function(t) {
                      var e = this
                        , n = !1;
                      return function() {
                          if (!n) {
                              n = !0;
                              var r = s(arguments);
                              u("sending ack %j", r),
                              e.packet({
                                  type: c(r) ? o.BINARY_ACK : o.ACK,
                                  id: t,
                                  data: r
                              })
                          }
                      }
                  }
                  ,
                  d.prototype.onack = function(t) {
                      var e = this.acks[t.id];
                      "function" === typeof e ? (u("calling ack %s with %j", t.id, t.data),
                      e.apply(this, t.data),
                      delete this.acks[t.id]) : u("bad ack %s", t.id)
                  }
                  ,
                  d.prototype.onconnect = function() {
                      this.connected = !0,
                      this.disconnected = !1,
                      this.emit("connect"),
                      this.emitBuffered()
                  }
                  ,
                  d.prototype.emitBuffered = function() {
                      var t;
                      for (t = 0; t < this.receiveBuffer.length; t++)
                          f.apply(this, this.receiveBuffer[t]);
                      for (this.receiveBuffer = [],
                      t = 0; t < this.sendBuffer.length; t++)
                          this.packet(this.sendBuffer[t]);
                      this.sendBuffer = []
                  }
                  ,
                  d.prototype.ondisconnect = function() {
                      u("server disconnect (%s)", this.nsp),
                      this.destroy(),
                      this.onclose("io server disconnect")
                  }
                  ,
                  d.prototype.destroy = function() {
                      if (this.subs) {
                          for (var t = 0; t < this.subs.length; t++)
                              this.subs[t].destroy();
                          this.subs = null
                      }
                      this.io.destroy(this)
                  }
                  ,
                  d.prototype.close = d.prototype.disconnect = function() {
                      return this.connected && (u("performing disconnect (%s)", this.nsp),
                      this.packet({
                          type: o.DISCONNECT
                      })),
                      this.destroy(),
                      this.connected && this.onclose("io client disconnect"),
                      this
                  }
                  ,
                  d.prototype.compress = function(t) {
                      return this.flags.compress = t,
                      this
                  }
                  ,
                  d.prototype.binary = function(t) {
                      return this.flags.binary = t,
                      this
                  }
              }
              , function(t, e) {
                  t.exports = function(t, e) {
                      for (var n = [], r = (e = e || 0) || 0; r < t.length; r++)
                          n[r - e] = t[r];
                      return n
                  }
              }
              , function(t, e) {
                  "use strict";
                  t.exports = function(t, e, n) {
                      return t.on(e, n),
                      {
                          destroy: function() {
                              t.removeListener(e, n)
                          }
                      }
                  }
              }
              , function(t, e) {
                  var n = [].slice;
                  t.exports = function(t, e) {
                      if ("string" == typeof e && (e = t[e]),
                      "function" != typeof e)
                          throw new Error("bind() requires a function");
                      var r = n.call(arguments, 2);
                      return function() {
                          return e.apply(t, r.concat(n.call(arguments)))
                      }
                  }
              }
              , function(t, e) {
                  function n(t) {
                      t = t || {},
                      this.ms = t.min || 100,
                      this.max = t.max || 1e4,
                      this.factor = t.factor || 2,
                      this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
                      this.attempts = 0
                  }
                  t.exports = n,
                  n.prototype.duration = function() {
                      var t = this.ms * Math.pow(this.factor, this.attempts++);
                      if (this.jitter) {
                          var e = Math.random()
                            , n = Math.floor(e * this.jitter * t);
                          t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                      }
                      return 0 | Math.min(t, this.max)
                  }
                  ,
                  n.prototype.reset = function() {
                      this.attempts = 0
                  }
                  ,
                  n.prototype.setMin = function(t) {
                      this.ms = t
                  }
                  ,
                  n.prototype.setMax = function(t) {
                      this.max = t
                  }
                  ,
                  n.prototype.setJitter = function(t) {
                      this.jitter = t
                  }
              }
              ])
          }
          ,
          t.exports = n()
      }
      ).call(this, n(30).Buffer)
  },
  360: function(t, e) {},
  37: function(t, e, n) {
      "use strict";
      e.byteLength = function(t) {
          var e = u(t)
            , n = e[0]
            , r = e[1];
          return 3 * (n + r) / 4 - r
      }
      ,
      e.toByteArray = function(t) {
          var e, n, r = u(t), s = r[0], a = r[1], l = new i(function(t, e, n) {
              return 3 * (e + n) / 4 - n
          }(0, s, a)), p = 0, c = a > 0 ? s - 4 : s;
          for (n = 0; n < c; n += 4)
              e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)],
              l[p++] = e >> 16 & 255,
              l[p++] = e >> 8 & 255,
              l[p++] = 255 & e;
          2 === a && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4,
          l[p++] = 255 & e);
          1 === a && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2,
          l[p++] = e >> 8 & 255,
          l[p++] = 255 & e);
          return l
      }
      ,
      e.fromByteArray = function(t) {
          for (var e, n = t.length, o = n % 3, i = [], s = 16383, a = 0, l = n - o; a < l; a += s)
              i.push(p(t, a, a + s > l ? l : a + s));
          1 === o ? (e = t[n - 1],
          i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1],
          i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
          return i.join("")
      }
      ;
      for (var r = [], o = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, l = s.length; a < l; ++a)
          r[a] = s[a],
          o[s.charCodeAt(a)] = a;
      function u(t) {
          var e = t.length;
          if (e % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
          var n = t.indexOf("=");
          return -1 === n && (n = e),
          [n, n === e ? 0 : 4 - n % 4]
      }
      function p(t, e, n) {
          for (var o, i, s = [], a = e; a < n; a += 3)
              o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]),
              s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
          return s.join("")
      }
      o["-".charCodeAt(0)] = 62,
      o["_".charCodeAt(0)] = 63
  },
  38: function(t, e) {
      e.read = function(t, e, n, r, o) {
          var i, s, a = 8 * o - r - 1, l = (1 << a) - 1, u = l >> 1, p = -7, c = n ? o - 1 : 0, h = n ? -1 : 1, f = t[e + c];
          for (c += h,
          i = f & (1 << -p) - 1,
          f >>= -p,
          p += a; p > 0; i = 256 * i + t[e + c],
          c += h,
          p -= 8)
              ;
          for (s = i & (1 << -p) - 1,
          i >>= -p,
          p += r; p > 0; s = 256 * s + t[e + c],
          c += h,
          p -= 8)
              ;
          if (0 === i)
              i = 1 - u;
          else {
              if (i === l)
                  return s ? NaN : 1 / 0 * (f ? -1 : 1);
              s += Math.pow(2, r),
              i -= u
          }
          return (f ? -1 : 1) * s * Math.pow(2, i - r)
      }
      ,
      e.write = function(t, e, n, r, o, i) {
          var s, a, l, u = 8 * i - o - 1, p = (1 << u) - 1, c = p >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = r ? 0 : i - 1, d = r ? 1 : -1, y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
          for (e = Math.abs(e),
          isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
          s = p) : (s = Math.floor(Math.log(e) / Math.LN2),
          e * (l = Math.pow(2, -s)) < 1 && (s--,
          l *= 2),
          (e += s + c >= 1 ? h / l : h * Math.pow(2, 1 - c)) * l >= 2 && (s++,
          l /= 2),
          s + c >= p ? (a = 0,
          s = p) : s + c >= 1 ? (a = (e * l - 1) * Math.pow(2, o),
          s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, o),
          s = 0)); o >= 8; t[n + f] = 255 & a,
          f += d,
          a /= 256,
          o -= 8)
              ;
          for (s = s << o | a,
          u += o; u > 0; t[n + f] = 255 & s,
          f += d,
          s /= 256,
          u -= 8)
              ;
          t[n + f - d] |= 128 * y
      }
  },
  39: function(t, e) {
      var n = {}.toString;
      t.exports = Array.isArray || function(t) {
          return "[object Array]" == n.call(t)
      }
  },
  50: function(t, e, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols
        , o = Object.prototype.hasOwnProperty
        , i = Object.prototype.propertyIsEnumerable;
      function s(t) {
          if (null === t || void 0 === t)
              throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t)
      }
      t.exports = function() {
          try {
              if (!Object.assign)
                  return !1;
              var t = new String("abc");
              if (t[5] = "de",
              "5" === Object.getOwnPropertyNames(t)[0])
                  return !1;
              for (var e = {}, n = 0; n < 10; n++)
                  e["_" + String.fromCharCode(n)] = n;
              if ("0123456789" !== Object.getOwnPropertyNames(e).map((function(t) {
                  return e[t]
              }
              )).join(""))
                  return !1;
              var r = {};
              return "abcdefghijklmnopqrst".split("").forEach((function(t) {
                  r[t] = t
              }
              )),
              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
          } catch (o) {
              return !1
          }
      }() ? Object.assign : function(t, e) {
          for (var n, a, l = s(t), u = 1; u < arguments.length; u++) {
              for (var p in n = Object(arguments[u]))
                  o.call(n, p) && (l[p] = n[p]);
              if (r) {
                  a = r(n);
                  for (var c = 0; c < a.length; c++)
                      i.call(n, a[c]) && (l[a[c]] = n[a[c]])
              }
          }
          return l
      }
  },
  519: function(t, e) {
      (function(e) {
          t.exports = e
      }
      ).call(this, {})
  },
  525: function(t, e) {
      function n() {
          this.table = new Uint16Array(16),
          this.trans = new Uint16Array(288)
      }
      function r(t, e) {
          this.source = t,
          this.sourceIndex = 0,
          this.tag = 0,
          this.bitcount = 0,
          this.dest = e,
          this.destLen = 0,
          this.ltree = new n,
          this.dtree = new n
      }
      var o = new n
        , i = new n
        , s = new Uint8Array(30)
        , a = new Uint16Array(30)
        , l = new Uint8Array(30)
        , u = new Uint16Array(30)
        , p = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
        , c = new n
        , h = new Uint8Array(320);
      function f(t, e, n, r) {
          var o, i;
          for (o = 0; o < n; ++o)
              t[o] = 0;
          for (o = 0; o < 30 - n; ++o)
              t[o + n] = o / n | 0;
          for (i = r,
          o = 0; o < 30; ++o)
              e[o] = i,
              i += 1 << t[o]
      }
      var d = new Uint16Array(16);
      function y(t, e, n, r) {
          var o, i;
          for (o = 0; o < 16; ++o)
              t.table[o] = 0;
          for (o = 0; o < r; ++o)
              t.table[e[n + o]]++;
          for (t.table[0] = 0,
          i = 0,
          o = 0; o < 16; ++o)
              d[o] = i,
              i += t.table[o];
          for (o = 0; o < r; ++o)
              e[n + o] && (t.trans[d[e[n + o]]++] = o)
      }
      function m(t) {
          t.bitcount-- || (t.tag = t.source[t.sourceIndex++],
          t.bitcount = 7);
          var e = 1 & t.tag;
          return t.tag >>>= 1,
          e
      }
      function g(t, e, n) {
          if (!e)
              return n;
          for (; t.bitcount < 24; )
              t.tag |= t.source[t.sourceIndex++] << t.bitcount,
              t.bitcount += 8;
          var r = t.tag & 65535 >>> 16 - e;
          return t.tag >>>= e,
          t.bitcount -= e,
          r + n
      }
      function v(t, e) {
          for (; t.bitcount < 24; )
              t.tag |= t.source[t.sourceIndex++] << t.bitcount,
              t.bitcount += 8;
          var n = 0
            , r = 0
            , o = 0
            , i = t.tag;
          do {
              r = 2 * r + (1 & i),
              i >>>= 1,
              ++o,
              n += e.table[o],
              r -= e.table[o]
          } while (r >= 0);
          return t.tag = i,
          t.bitcount -= o,
          e.trans[n + r]
      }
      function b(t, e, n) {
          var r, o, i, s, a, l;
          for (r = g(t, 5, 257),
          o = g(t, 5, 1),
          i = g(t, 4, 4),
          s = 0; s < 19; ++s)
              h[s] = 0;
          for (s = 0; s < i; ++s) {
              var u = g(t, 3, 0);
              h[p[s]] = u
          }
          for (y(c, h, 0, 19),
          a = 0; a < r + o; ) {
              var f = v(t, c);
              switch (f) {
              case 16:
                  var d = h[a - 1];
                  for (l = g(t, 2, 3); l; --l)
                      h[a++] = d;
                  break;
              case 17:
                  for (l = g(t, 3, 3); l; --l)
                      h[a++] = 0;
                  break;
              case 18:
                  for (l = g(t, 7, 11); l; --l)
                      h[a++] = 0;
                  break;
              default:
                  h[a++] = f
              }
          }
          y(e, h, 0, r),
          y(n, h, r, o)
      }
      function x(t, e, n) {
          for (; ; ) {
              var r, o, i, p, c = v(t, e);
              if (256 === c)
                  return 0;
              if (c < 256)
                  t.dest[t.destLen++] = c;
              else
                  for (r = g(t, s[c -= 257], a[c]),
                  o = v(t, n),
                  p = i = t.destLen - g(t, l[o], u[o]); p < i + r; ++p)
                      t.dest[t.destLen++] = t.dest[p]
          }
      }
      function P(t) {
          for (var e, n; t.bitcount > 8; )
              t.sourceIndex--,
              t.bitcount -= 8;
          if ((e = 256 * (e = t.source[t.sourceIndex + 1]) + t.source[t.sourceIndex]) !== (65535 & ~(256 * t.source[t.sourceIndex + 3] + t.source[t.sourceIndex + 2])))
              return -3;
          for (t.sourceIndex += 4,
          n = e; n; --n)
              t.dest[t.destLen++] = t.source[t.sourceIndex++];
          return t.bitcount = 0,
          0
      }
      !function(t, e) {
          var n;
          for (n = 0; n < 7; ++n)
              t.table[n] = 0;
          for (t.table[7] = 24,
          t.table[8] = 152,
          t.table[9] = 112,
          n = 0; n < 24; ++n)
              t.trans[n] = 256 + n;
          for (n = 0; n < 144; ++n)
              t.trans[24 + n] = n;
          for (n = 0; n < 8; ++n)
              t.trans[168 + n] = 280 + n;
          for (n = 0; n < 112; ++n)
              t.trans[176 + n] = 144 + n;
          for (n = 0; n < 5; ++n)
              e.table[n] = 0;
          for (e.table[5] = 32,
          n = 0; n < 32; ++n)
              e.trans[n] = n
      }(o, i),
      f(s, a, 4, 3),
      f(l, u, 2, 1),
      s[28] = 0,
      a[28] = 258,
      t.exports = function(t, e) {
          var n, s, a = new r(t,e);
          do {
              switch (n = m(a),
              g(a, 2, 0)) {
              case 0:
                  s = P(a);
                  break;
              case 1:
                  s = x(a, o, i);
                  break;
              case 2:
                  b(a, a.ltree, a.dtree),
                  s = x(a, a.ltree, a.dtree);
                  break;
              default:
                  s = -3
              }
              if (0 !== s)
                  throw new Error("Data error")
          } while (!n);
          return a.destLen < a.dest.length ? "function" === typeof a.dest.slice ? a.dest.slice(0, a.destLen) : a.dest.subarray(0, a.destLen) : a.dest
      }
  }
});
