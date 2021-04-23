! function(t) {
  function e(e) {
      for (var i, n, a = e[0], r = e[1], o = 0, h = []; o < a.length; o++) n = a[o], Object.prototype.hasOwnProperty.call(s, n) && s[n] && h.push(s[n][0]), s[n] = 0;
      for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      for (l && l(e); h.length;) h.shift()()
  }
  var i = {},
      s = {
          0: 0
      };
  var n = {};
  var a = {
      87: function() {
          return {
              "./pixlr_bg.js": {
                  __wbindgen_string_new: function(t, e) {
                      return i[86].exports.q(t, e)
                  },
                  __wbg_x_5b5f6fd53b89af22: function(t) {
                      return i[86].exports.l(t)
                  },
                  __wbg_y_5651dc69065e519d: function(t) {
                      return i[86].exports.m(t)
                  },
                  __wbg_width_123b78e1dc8fd338: function(t) {
                      return i[86].exports.k(t)
                  },
                  __wbg_height_a4c913c7f78835d9: function(t) {
                      return i[86].exports.h(t)
                  },
                  __wbindgen_memory: function() {
                      return i[86].exports.n()
                  },
                  __wbg_buffer_e35e010c3ba9f945: function(t) {
                      return i[86].exports.g(t)
                  },
                  __wbg_newwithbyteoffsetandlength_4959e87e20dde158: function(t, e, s) {
                      return i[86].exports.j(t, e, s)
                  },
                  __wbindgen_object_drop_ref: function(t) {
                      return i[86].exports.o(t)
                  },
                  __wbg_new_9b50398a75b17d8b: function(t, e, s, n) {
                      return i[86].exports.i(t, e, s, n)
                  },
                  __wbindgen_throw: function(t, e) {
                      return i[86].exports.r(t, e)
                  },
                  __wbindgen_rethrow: function(t) {
                      return i[86].exports.p(t)
                  }
              }
          }
      }
  };

  function r(e) {
      if (i[e]) return i[e].exports;
      var s = i[e] = {
          i: e,
          l: !1,
          exports: {}
      };
      return t[e].call(s.exports, s, s.exports, r), s.l = !0, s.exports
  }
  r.e = function(t) {
      var e = [],
          i = s[t];
      if (0 !== i)
          if (i) e.push(i[2]);
          else {
              var o = new Promise((function(e, n) {
                  i = s[t] = [e, n]
              }));
              e.push(i[2] = o);
              var h, c = document.createElement("script");
              c.charset = "utf-8", c.timeout = 120, r.nc && c.setAttribute("nonce", r.nc), c.src = function(t) {
                  return r.p + "" + ({
                      6: "native",
                      7: "vendors~tiff"
                  }[t] || t) + ".js"
              }(t);
              var l = new Error;
              h = function(e) {
                  c.onerror = c.onload = null, clearTimeout(d);
                  var i = s[t];
                  if (0 !== i) {
                      if (i) {
                          var n = e && ("load" === e.type ? "missing" : e.type),
                              a = e && e.target && e.target.src;
                          l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", l.name = "ChunkLoadError", l.type = n, l.request = a, i[1](l)
                      }
                      s[t] = void 0
                  }
              };
              var d = setTimeout((function() {
                  h({
                      type: "timeout",
                      target: c
                  })
              }), 12e4);
              c.onerror = c.onload = h, document.head.appendChild(c)
          }
      return ({
          6: [87]
      }[t] || []).forEach((function(t) {
          var i = n[t];
          if (i) e.push(i);
          else {
              var s, o = a[t](),
                  h = fetch(r.p + "" + {
                      87: "a61f9e07c29fbcb0a09d"
                  }[t] + ".module.wasm");
              if (o instanceof Promise && "function" == typeof WebAssembly.compileStreaming) s = Promise.all([WebAssembly.compileStreaming(h), o]).then((function(t) {
                  return WebAssembly.instantiate(t[0], t[1])
              }));
              else if ("function" == typeof WebAssembly.instantiateStreaming) s = WebAssembly.instantiateStreaming(h, o);
              else {
                  s = h.then((function(t) {
                      return t.arrayBuffer()
                  })).then((function(t) {
                      return WebAssembly.instantiate(t, o)
                  }))
              }
              e.push(n[t] = s.then((function(e) {
                  return r.w[t] = (e.instance || e).exports
              })))
          }
      })), Promise.all(e)
  }, r.m = t, r.c = i, r.d = function(t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: i
      })
  }, r.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(t, "__esModule", {
          value: !0
      })
  }, r.t = function(t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (r.r(i), Object.defineProperty(i, "default", {
              enumerable: !0,
              value: t
          }), 2 & e && "string" != typeof t)
          for (var s in t) r.d(i, s, function(e) {
              return t[e]
          }.bind(null, s));
      return i
  }, r.n = function(t) {
      var e = t && t.__esModule ? function() {
          return t.default
      } : function() {
          return t
      };
      return r.d(e, "a", e), e
  }, r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "/dist/", r.oe = function(t) {
      throw console.error(t), t
  }, r.w = {};
  var o = window.webpackJsonp = window.webpackJsonp || [],
      h = o.push.bind(o);
  o.push = e, o = o.slice();
  for (var c = 0; c < o.length; c++) e(o[c]);
  var l = h;
  r(r.s = 85)
}([function(t, e, i) {
  "use strict";

  function s(t) {
      return document.getElementById(t)
  }

  function n(t, ...e) {
      const i = document.createElement(t);
      if (0 === e.length) return i;
      const s = e[0],
          n = !("string" == typeof s || s instanceof HTMLElement),
          a = n ? e.slice(1) : e;
      if (n && s)
          if (s.style) {
              const t = s.style;
              delete s.style, Object.assign(i, s), "string" == typeof t ? i.setAttribute("style", t) : Object.assign(i.style, t)
          } else Object.assign(i, s);
      return i.append(...a), i
  }
  i.d(e, "b", (function() {
      return s
  })), i.d(e, "a", (function() {
      return n
  })), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
      value: function(t, e, i) {
          var s = this;
          setTimeout((function() {
              for (var n = atob(s.toDataURL(e, i).split(",")[1]), a = n.length, r = new Uint8Array(a), o = 0; o < a; o++) r[o] = n.charCodeAt(o);
              t(new Blob([r], {
                  type: e || "image/png"
              }))
          }))
      }
  })
}, function(t, e, i) {
  "use strict";
  i.d(e, "b", (function() {
      return h
  })), i.d(e, "a", (function() {
      return c
  }));
  var s = i(0),
      n = i(2),
      a = i(13),
      r = i(6),
      o = i(3);
  class h {
      static restorePrototype(t, e) {
          if (void 0 === e) return;
          if (e instanceof t) return e;
          const i = Object.create(t.prototype);
          return Object.assign(i, e)
      }
      static utf8ByteLength(t) {
          let e = t.length;
          for (let i = t.length - 1; i >= 0; i--) {
              const s = t.charCodeAt(i);
              s > 127 && s <= 2047 ? e++ : s > 2047 && s <= 65535 && (e += 2), s >= 56320 && s <= 57343 && i--
          }
          return e
      }
      static selectContent(t) {
          let e = document.createRange();
          e.selectNodeContents(t);
          let i = window.getSelection();
          i.removeAllRanges(), i.addRange(e), setTimeout((function() {
              t.focus()
          }), 0)
      }
      static scaleFit(t, e, i, s) {
          let n;
          return n = t / e > i / s ? i / t : s / e, n > 1 ? 1 : n
      }
      static scaleFill(t, e, i, s) {
          return t / e < i / s ? i / t : s / e
      }
      static inArea(t, e, i, s, n, a) {
          return a >= e && a < e + s && n >= t && n < t + i
      }
      static createCanvas(t, e) {
          t < 0 && (t = 1), e < 0 && (e = 1);
          let i = document.createElement("canvas");
          return i.width = t, i.height = e, i
      }
      static async dataURLToImageData(t) {
          if (void 0 === t) return;
          const e = await this.dataURLToCanvas(t);
          return e.getContext("2d").getImageData(0, 0, e.width, e.height)
      }
      static async blobToCanvas(t) {
          if (!t) return;
          const e = URL.createObjectURL(t),
              i = await this.dataURLToCanvas(e);
          return URL.revokeObjectURL(e), i
      }
      static async blobToImageData(t) {
          if (!t) return;
          const e = URL.createObjectURL(t),
              i = await this.dataURLToImageData(e);
          return URL.revokeObjectURL(e), i
      }
      static rgbaToArgb(t) {
          for (let e = 0; e < t.data.byteLength; e += 4) {
              let i = t.data[e],
                  s = t.data[e + 1],
                  n = t.data[e + 2],
                  a = t.data[e + 3];
              t.data[e] = a, t.data[e + 1] = i, t.data[e + 2] = s, t.data[e + 3] = n
          }
          return t
      }
      static argbToRgba(t) {
          for (let e = 0; e < t.data.byteLength; e += 4) {
              let i = t.data[e],
                  s = t.data[e + 1],
                  n = t.data[e + 2],
                  a = t.data[e + 3];
              t.data[e] = s, t.data[e + 1] = n, t.data[e + 2] = a, t.data[e + 3] = i
          }
          return t
      }
      static dataURLToCanvas(t) {
          if (void 0 !== t) return new Promise(((e, i) => {
              if (!t) return console.log("Invalid URL in dataURLToCanvas"), void e(void 0);
              const s = document.createElement("canvas"),
                  n = s.getContext("2d"),
                  a = new Image;
              a.onerror = t => i(t), a.onload = () => {
                  s.width = a.width, s.height = a.height, n.drawImage(a, 0, 0), e(s)
              }, a.src = t
          }))
      }
      static canvasToDataURL(t, e) {
          if (!t) return;
          const i = e || new r.a(0, 0, t.width, t.height),
              s = h.createCanvas(i.width, i.height);
          return s.getContext("2d").drawImage(t, -i.x, -i.y), a.a.dataURI(s)
      }
      static canvasImageData(t, e) {
          if (!t) return;
          const i = e || new r.a(0, 0, t.width, t.height);
          return t.getContext("2d").getImageData(i.x, i.y, i.width, i.height)
      }
      static canvasToBlob(t, e) {
          if (!t) return;
          const i = e || new r.a(0, 0, t.width, t.height),
              s = h.createCanvas(i.width, i.height);
          return s.getContext("2d").drawImage(t, -i.x, -i.y), new Promise(((t, e) => s.toBlob(t)))
      }
      static replaceCanvas(t, e, i) {
          if (!t || !e) return;
          let s = t.getContext("2d");
          s.save(), s.globalCompositeOperation = "copy", s.drawImage(e, i.x, i.y), s.restore(), s = void 0
      }
      static createImageCanvas(t, e, i = 0) {
          let s = h.createCanvas(t.width, t.height),
              n = s.getContext("2d");
          if (n.drawImage(t, 0, 0, t.width, t.height), n = void 0, s.width > e || s.height > e) {
              let i = r.a.bestFit(t.width, t.height, e, e);
              s = h.resizeCanvasForQuality(s, i.width, i.height)
          }
          return 0 !== i && (s = h.rotateFixedCanvas(s, i)), s
      }
      static resizeCanvasForQuality(t, e, i) {
          if (!t) return;
          if (e > t.width || i > t.width) return h.resizeCanvas(t, e, i);
          let s = h.createCanvas(e, i);
          for (var n = t.getContext("2d").getImageData(0, 0, t.width, t.height).data, a = t.width, r = t.height, o = s.width, c = s.height, l = s.getContext("2d").getImageData(0, 0, s.width, s.height), d = l.data, u = a / o, g = r / c, m = Math.ceil(u / 2), p = Math.ceil(g / 2), v = 0; v < c; v++)
              for (var f = 0; f < o; f++) {
                  for (var w = 4 * (f + v * o), y = 0, x = 0, b = 0, S = 0, k = 0, C = 0, E = (v + .5) * g, M = Math.floor(v * g); M < (v + 1) * g; M++)
                      for (var T = Math.abs(E - (M + .5)) / p, P = (f + .5) * u, D = T * T, L = Math.floor(f * u); L < (f + 1) * u; L++) {
                          var R = Math.abs(P - (L + .5)) / m,
                              O = Math.sqrt(D + R * R);
                          O >= -1 && O <= 1 && (y = 2 * O * O * O - 3 * O * O + 1) > 0 && (b += y * n[R = 4 * (L + M * a)], S += y * n[R + 1], k += y * n[R + 2], C += y * n[R + 3], x += y)
                      }
                  d[w] = b / x, d[w + 1] = S / x, d[w + 2] = k / x, d[w + 3] = C / x
              }
          return s.getContext("2d").putImageData(l, 0, 0), s
      }
      static resizeCanvas(t, e, i, s = !0) {
          if (!t) return;
          e < 1 && (e = 1), i < 1 && (i = 1);
          let n = h.createCanvas(e, i);
          var a = n.getContext("2d");
          return a.imageSmoothingQuality = "high", a.imageSmoothingEnabled = s, a.drawImage(t, 0, 0, n.width, n.height), a = void 0, n
      }
      static cropCanvas(t, e) {
          let i = h.createCanvas(e.width, e.height),
              s = i.getContext("2d");
          return s.drawImage(t, -e.x, -e.y), s = void 0, i
      }
      static extendCanvas(t, e, i) {
          let s = h.createCanvas(i.width, i.height),
              n = s.getContext("2d");
          return n.imageSmoothingQuality = "high", n.imageSmoothingEnabled = !0, n.drawImage(t, e.x - i.x, e.y - i.y, e.width, e.height), n = void 0, s
      }
      static cloneCanvasRect(t, e) {
          if (t) {
              var i = document.createElement("canvas"),
                  s = i.getContext("2d");
              return i.width = e.width, i.height = e.height, s.drawImage(t, -e.x, -e.y), s = void 0, i
          }
      }
      static cloneCanvas(t) {
          if (t) {
              var e = document.createElement("canvas"),
                  i = e.getContext("2d");
              return e.width = t.width, e.height = t.height, i.drawImage(t, 0, 0), i = void 0, e
          }
      }
      static rotateFixedCanvas(t, e) {
          if (t) {
              var i = h.createCanvas(t.width, t.height),
                  s = i.getContext("2d");
              return 180 !== e && (i.width = t.height, i.height = t.width), s.translate(i.width / 2, i.height / 2), s.rotate(e * Math.PI / 180), s.drawImage(t, -t.width / 2, -t.height / 2), s.setTransform(1, 0, 0, 1, 0, 0), s = void 0, i
          }
      }
      static rotateCanvas(t, e, i) {
          let s = h.createCanvas(i.width, i.height),
              n = s.getContext("2d");
          return n.save(), n.translate(i.width / 2, i.height / 2), n.rotate(e * Math.PI / 180), n.drawImage(t, -t.width / 2, -t.height / 2), n.restore(), n = null, s
      }
      static flipCanvas(t, e) {
          if (t) {
              var i = h.createCanvas(t.width, t.height),
                  s = i.getContext("2d");
              return s.save(), e ? (s.scale(1, -1), s.drawImage(t, 0, -t.height, t.width, t.height)) : (s.scale(-1, 1), s.drawImage(t, -t.width, 0, t.width, t.height)), s.restore(), s = void 0, i
          }
      }
      static getColorBoundsRect(t) {
          if (!t) return;
          const e = t.width,
              i = t.height;
          let s = t.getContext("2d").getImageData(0, 0, e, i);
          return h.getColorBoundsRectData(s)
      }
      static getColorBoundsRectData(t) {
          const e = t.width,
              i = t.height;
          let s, n, a = new Uint32Array(t.data.buffer),
              o = -1,
              h = -1,
              c = -1,
              l = -1;
          for (n = 0; n < i; ++n) {
              for (s = 0; s < e; ++s)
                  if (a[s + n * e] > 0) {
                      h = n;
                      break
                  }
              if (-1 !== h) break
          }
          if (-1 !== h) {
              for (n = i - 1; n >= h; --n) {
                  for (s = 0; s < e; ++s)
                      if (a[s + n * e] > 0) {
                          l = n + 1;
                          break
                      }
                  if (-1 !== l) break
              }
              for (s = 0; s < e; ++s) {
                  for (n = h; n <= l; ++n)
                      if (a[s + n * e] > 0) {
                          o = s;
                          break
                      }
                  if (-1 !== o) break
              }
              for (s = e - 1; s >= o; --s) {
                  for (n = h; n <= l; ++n)
                      if (a[s + n * e] > 0) {
                          c = s + 1;
                          break
                      }
                  if (-1 !== c) break
              }
              return new r.a(o, h, c - o, l - h)
          }
      }
      static fileSize(t) {
          let e = t.size / 1024;
          return e > 1024 ? (e / 1024).toFixed(1) + "mb" : e > 100 ? Math.round(e) + "kb" : Math.round(10 * e) / 10 + "kb"
      }
      static guid() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
              var e = 16 * Math.random() | 0;
              return ("x" == t ? e : 3 & e | 8).toString(16)
          }))
      }
      static sguid() {
          return "xxxxyxxx4xxx".replace(/[xy]/g, (function(t) {
              var e = 16 * Math.random() | 0;
              return ("x" == t ? e : 3 & e | 8).toString(16)
          }))
      }
      static clamp(t, e, i) {
          return isNaN(t) ? e : Math.min(Math.max(t, e), i)
      }
      static shuffleArray(t) {
          for (let e = t.length - 1; e > 0; e--) {
              const i = Math.floor(Math.random() * (e + 1));
              [t[e], t[i]] = [t[i], t[e]]
          }
      }
      static hasTransparency(t) {
          let e = !1,
              i = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
          for (var s = 0; s < i.length; s += 4)
              if (i[s + 3] < 255) {
                  e = !0;
                  break
              }
          return e
      }
      static findBlackAndWhitePoint(t) {
          let e = new o.a(0, 255);
          var i = Array(256);
          i.fill(0);
          var s = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
          for (let t = 0; t < s.length; t += 4) i[s[t]] += 1, i[s[t + 1]] += 1, i[s[t + 2]] += 1;
          var n = Math.round(t.width * t.height / 1e3);
          let a;
          for (a = 0; a < 256; ++a)
              if (i[a] > n) {
                  e.x = a;
                  break
              }
          for (a = 255; a >= 0; --a)
              if (i[a] > n) {
                  e.y = a;
                  break
              }
          return e.x > 100 && (e.x = 100), e.y < 155 && (e.y = 155), e
      }
      static analyseImageColors(t) {
          let e = 1,
              i = 1,
              s = h.resizeCanvas(t, 500, 500);
          const n = s.width,
              a = s.height;
          let r, o, c, l, d, u, g, m, p, v = s.getContext("2d").getImageData(0, 0, n, a).data;
          for (d = a; d--;)
              for (l = n; l--;) u = 4 * (d * n + l), r = v[u], o = v[u + 1], c = v[u + 2], g = Math.min(r, o, c), m = Math.max(r, o, c), i += m / 255, p = m - g, p && (e += p / m);
          return e = (e + i) / 5e5, e
      }
      static debounce(t, e, i) {
          window.clearTimeout(h.debounceList[t]), h.debounceList[t] = window.setTimeout((() => {
              delete h.debounceList[t], i()
          }), e)
      }
      static wait(t) {
          return new Promise(((e, i) => {
              setTimeout((() => e()), t)
          }))
      }
      static waitUIRefresh() {
          return new Promise(((t, e) => {
              window.requestAnimationFrame((() => {
                  window.requestAnimationFrame((() => {
                      t()
                  }))
              }))
          }))
      }
      static bench(t, e) {
          const i = new Date,
              s = e();
          return console.log(`Ran bench ${t} in ${(new Date).getTime()-i.getTime()}ms`), s
      }
      static async benchWait(t, e) {
          const i = new Date,
              s = await e();
          return console.log(`Ran bench ${t} in ${(new Date).getTime()-i.getTime()}ms`), s
      }
      static since(t) {
          const e = ((new Date).getTime() - t.getTime()) / 1e3;
          if (e < 0) return "It's the future man";
          const i = Math.floor(e / 86400);
          if (i >= 1) return i > 1 ? Object(n.a)("sinceDays", i) : Object(n.a)("sinceDay");
          const s = Math.floor(e / 3600);
          if (s >= 1) return s > 1 ? Object(n.a)("sinceHours", s) : Object(n.a)("sinceHour");
          const a = Math.floor(e / 60);
          return a >= 1 ? a > 1 ? Object(n.a)("sinceMinutes", a) : Object(n.a)("sinceMinute") : Object(n.a)("sinceNow")
      }
      static resetInputs(t, e = "0") {
          let i = Object(s.b)(t).querySelectorAll("input,output");
          for (let t = 0; t < i.length; t++) {
              let s = i[t];
              switch (s.type.toLowerCase()) {
                  case "range":
                  case "number":
                  case "output":
                      s.value = e;
                      break;
                  case "text":
                      s.value = ""
              }
          }
      }
      static isTextArea(t) {
          if (!t) return !1;
          if ("TEXTAREA" === t.nodeName) return !0;
          if ("INPUT" === t.nodeName) {
              const e = t,
                  i = e.type.toLowerCase();
              return "text" === i || "number" === i || "url" === i || !!e.contentEditable
          }
          return !1
      }
  }
  h.COLOR_WHITE_RGB_STRING = "rgb(255,255,255)", h.COLOR_GREEN_RGB_STRING = "rgb(32,209,139)", h.COLOR_BLUE_RGB_STRING = "rgb(0,163,218)", h.COLOR_RED_RGB_STRING = "rgb(209,72,14)", h.COLOR_HARD_STRING = "rgb(255,0,255)", h.COLOR_SOFT_STRING = "rgb(67,201,143)", h.COLOR_GREY_STRING = "rgb(75,75,75)", h.mix = (t, e, i) => e * i + t * (1 - i), h.debounceList = {};
  class c {
      constructor() {
          this.promise = new Promise(((t, e) => {
              this.resolve = t, this.reject = e
          }))
      }
      then(t, e) {
          return this.promise.then(t, e)
      } catch (t) {
          return this.promise.catch(t)
      } finally(t) {
          return this.promise.finally(t)
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return a
  }));
  var s = i(0);
  let n = Object(s.b)("config_i18n") ? JSON.parse(Object(s.b)("config_i18n").innerText) : "";

  function a(t, ...e) {
      let i = n[t];
      if (i || (console.log("No translation for key", t), i = t), !e || 0 === e.length) return i;
      let s = 0;
      return i.replace(/%(\d+\$)?(s|d|f){1}/gm, ((t, ...i) => {
          const [n, a] = i, r = n ? parseInt(n.slice(0, -1), 10) : s++;
          switch (a) {
              case "d":
                  const i = e[r];
                  return "number" != typeof i ? "NaN" : i.toFixed(0);
              case "s":
                  const s = e[r];
                  return s ? s.toString() : t;
              default:
                  return t
          }
      }))
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t = 0, e = 0) {
          this.x = t, this.y = e
      }
      distanceTo(t) {
          return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2))
      }
      angleTo(t) {
          let e = -(this.x - t.x),
              i = this.y - t.y,
              s = 360 - Math.atan2(i, e) * (180 / Math.PI);
          return s < 0 && (s += 360), s > 360 && (s -= 360), s
      }
      dot(t) {
          return this.x * t.x + this.y * t.y
      }
      lengthSQ() {
          return this.dot(this)
      }
      length() {
          return Math.sqrt(this.lengthSQ())
      }
      hypot2() {
          return this.dot(this)
      }
      hypot() {
          return Math.hypot(this.x, this.y)
      }
      add(t) {
          return t instanceof s ? new s(this.x + t.x, this.y + t.y) : new s(this.x + t, this.y + t)
      }
      neg(t) {
          return t instanceof s ? new s(this.x - t.x, this.y - t.y) : new s(this.x - t, this.y - t)
      }
      mul(t) {
          return t instanceof s ? new s(this.x * t.x, this.y * t.y) : new s(this.x * t, this.y * t)
      }
      equalTo(t) {
          return this.x === t.x && this.y === t.y
      }
      clone() {
          return new s(this.x, this.y)
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return n
  }));
  var s = i(1);
  class n {
      constructor(t = 255, e = 255, i = 255, n = 255) {
          this.isEqual = t => !!t && (this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a), this.toHEX = () => {
              const t = t => {
                  const e = t.toString(16);
                  return 1 === e.length ? "0" + e : e
              };
              return `#${t(this.r)}${t(this.g)}${t(this.b)}`
          }, this.toHEXA = () => {
              const t = t => {
                  const e = t.toString(16);
                  return 1 === e.length ? "0" + e : e
              };
              return `#${t(this.r)}${t(this.g)}${t(this.b)}${t(this.a)}`
          }, this.toRGBA = (t = this.a) => `rgba(${this.r},${this.g},${this.b},${t/255})`, this.toHue = () => {
              let t = 0,
                  e = Math.min(this.r, this.g, this.b),
                  i = Math.max(this.r, this.g, this.b);
              var s = i - e;
              return s && (t = this.r == i ? (this.g - this.b) / s * 60 : this.g == i ? 60 * (2 + (this.b - this.r) / s) : 60 * (4 + (this.r - this.g) / s)), t > 360 ? t -= 360 : t < 0 && (t += 360), 360 === t && (t = 0), t
          }, this.toHSB = () => {
              let t, e, i, s = Math.min(this.r, this.g, this.b),
                  n = Math.max(this.r, this.g, this.b);
              i = n / 255;
              var a = n - s;
              return a ? (e = a / n, t = this.r == n ? (this.g - this.b) / a * 60 : this.g == n ? 60 * (2 + (this.b - this.r) / a) : 60 * (4 + (this.r - this.g) / a), t > 360 ? t -= 360 : t < 0 && (t += 360)) : t = e = 0, {
                  h: t,
                  s: e,
                  b: i
              }
          }, this.r = s.b.clamp(t, 0, 255), this.g = s.b.clamp(e, 0, 255), this.b = s.b.clamp(i, 0, 255), this.a = s.b.clamp(n, 0, 255)
      }
      rotateHue(t) {
          let e, i, s, a = Math.min(this.r, this.g, this.b),
              r = Math.max(this.r, this.g, this.b);
          e = r / 255;
          var o = r - a;
          return o ? (i = o / r, s = this.r == r ? (this.g - this.b) / o * 60 : this.g == r ? 60 * (2 + (this.b - this.r) / o) : 60 * (4 + (this.r - this.g) / o)) : s = i = 0, s += t, s > 360 ? s -= 360 : s < 0 && (s += 360), 360 === s && (s = 0), n.fromHSB(s, i, e)
      }
      static fromRGB(t) {
          if (/^#[0-9A-F]{6}$/i.test(t)) return n.fromHEX(t);
          let e = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
          return !e || e.length < 4 ? new n : new n(Number(e[1]), Number(e[2]), Number(e[3]))
      }
      static fromHEXA(t) {
          let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          return !e || e.length < 4 ? new n : new n(parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), parseInt(e[4], 16))
      }
      static fromHEX(t, e = 255) {
          let i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          return !i || i.length < 3 ? new n : new n(parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16), e)
      }
      static fromHSB(t, e, i) {
          let s, a, r, o, h, c, l, d;
          if (0 == i) s = 0, a = 0, r = 0;
          else if (0 == e) s = a = r = i;
          else switch (o = t / 60, h = o - Math.floor(o), c = i * (1 - e), d = i * (1 - e * h), l = i * (1 - e * (1 - h)), Math.floor(o)) {
              case 0:
                  s = i, a = l, r = c;
                  break;
              case 1:
                  s = d, a = i, r = c;
                  break;
              case 2:
                  s = c, a = i, r = l;
                  break;
              case 3:
                  s = c, a = d, r = i;
                  break;
              case 4:
                  s = l, a = c, r = i;
                  break;
              case 5:
                  s = i, a = c, r = d;
                  break;
              case 6:
                  s = i, a = l, r = c
          }
          return new n(Math.round(255 * s), Math.round(255 * a), Math.round(255 * r))
      }
      clone() {
          return new n(this.r, this.g, this.b, this.a)
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "b", (function() {
      return a
  }));
  var s = i(0),
      n = i(3);

  function a(t, e) {
      const i = window.localStorage.getItem("user-settings"),
          s = JSON.parse(i || "{}");
      r[t] = s[t] = e, window.localStorage.setItem("user-settings", JSON.stringify(s)), document.dispatchEvent(new CustomEvent("user-setting-updated", {
          detail: t
      }))
  }
  const r = function() {
      const t = {
          product: "",
          api: !1,
          debug: "",
          premium: "",
          locktarget: !1,
          cdnUrl: "",
          redirectMobileUsers: !0,
          lightMode: !1,
          allTooltip: !1,
          autoSelect: !0,
          scrollZoom: !0,
          showGuides: !0,
          snapToGuides: !0,
          askToAddLayer: !0,
          askToPreResize: !0,
          maxHistoryUndos: 25,
          boxBarXSize: "medium",
          boxBarESize: "large",
          mainColor: "#ffffff",
          altColor: "#000000",
          oldColor: ["#A8534B", "#EC9D75", "#F9D697", "#DCE6A7", "#9ADFB0", "#57CBAB", "#38A793", "#5A5E5A"],
          gradients: [],
          dialogPos: new n.a(0, 0),
          user: void 0,
          eduFreePlans: ["advanced-one-year-edu-free", "advanced-one-year-edu-free-license"]
      };
      return Object.assign(t, (() => {
          const t = window.localStorage.getItem("user-settings");
          return JSON.parse(t || "{}")
      })()), Object.assign(t, (() => {
          const t = new URL(window.location.href),
              e = {};
          return t.searchParams.forEach(((t, i) => {
              e[i] = t
          })), e
      })()), Object.assign(t, (() => {
          const t = Object(s.b)("config_data");
          if (t && t.innerText) {
              let t = JSON.parse(Object(s.b)("config_data").innerText);
              return Object(s.b)("config_data").remove(), t
          }
          return {}
      })()), t.api = t.locktarget = !!t.image || !!t.referrer, "true" === t.debug && "true" === t.premium && (t.user.subscription = !0), t
  }();
  e.a = r
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return r
  }));
  var s = i(42),
      n = i(3),
      a = i(20);
  class r {
      constructor(t = 0, e = 0, i = 0, s = 0, n = 0) {
          this.x = t, this.y = e, this.width = i, this.height = s, this.rotation = n
      }
      left() {
          return this.x
      }
      right() {
          return this.x + this.width
      }
      top() {
          return this.y
      }
      bottom() {
          return this.y + this.height
      }
      size() {
          return new a.a(this.width, this.height)
      }
      center() {
          return new n.a(this.x + this.width / 2, this.y + this.height / 2)
      }
      topLeft() {
          return new n.a(this.x, this.y)
      }
      topRight() {
          return new n.a(this.right(), this.y)
      }
      bottomLeft() {
          return new n.a(this.x, this.bottom())
      }
      bottomRight() {
          return new n.a(this.right(), this.bottom())
      }
      setRight(t) {
          this.width = Math.round(t - this.x)
      }
      setBottom(t) {
          this.height = Math.round(t - this.y)
      }
      moveRight(t) {
          this.x = Math.round(t - this.width)
      }
      moveBottom(t) {
          this.y = Math.round(t - this.height)
      }
      isSet() {
          return this.x > 0 || this.y > 0 || this.width > 0 || this.height > 0 || this.rotation > 0
      }
      isInside(t) {
          return t.x >= this.x && t.x < this.x + this.width && t.y >= this.y && t.y < this.y + this.height
      }
      contains(t) {
          return t.x >= this.x && t.y >= this.y && t.bottom() <= this.bottom() && t.right() <= this.right()
      }
      equalTo(t) {
          return !!t && (this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.rotation === t.rotation)
      }
      clone() {
          return new r(this.x, this.y, this.width, this.height, this.rotation)
      }
      scale(t) {
          return new r(Math.round(this.x * t), Math.round(this.y * t), Math.round(this.width * t), Math.round(this.height * t))
      }
      flipWidthAndHeight() {
          return new r(this.y, this.x, this.height, this.width)
      }
      union(t) {
          if (!t) return this;
          const e = Math.min(this.x, t.x),
              i = Math.min(this.y, t.y),
              s = Math.max(this.x + this.width, t.x + t.width),
              n = Math.max(this.y + this.height, t.y + t.height);
          return new r(e, i, s - e, n - i)
      }
      intersect(t) {
          let e = Math.max(this.x, t.x),
              i = Math.min(this.x + this.width, t.x + t.width);
          if (i <= e) return;
          let s = Math.max(this.y, t.y),
              n = Math.min(this.y + this.height, t.y + t.height);
          return n <= s ? void 0 : new r(e, s, i - e, n - s)
      }
      rebase(t, e) {
          return new r(this.x - t, this.y - e, this.width, this.height)
      }
      gridAlign() {
          return new r(Math.floor(this.x), Math.floor(this.y), Math.ceil(this.width), Math.ceil(this.height))
      }
      getRotatedBounds() {
          if (0 === this.rotation) return this;
          let t = new s.a,
              e = this.center();
          t.translate(e), t.rotate(this.rotation * Math.PI / 180), t.invert();
          const i = t.transformPoint(this.topLeft()),
              n = t.transformPoint(this.topRight()),
              a = t.transformPoint(this.bottomLeft()),
              o = t.transformPoint(this.bottomRight());
          let h = r.fromPoints([i, n, a, o]);
          return h.x = Math.round(h.x + e.x), h.y = Math.round(h.y + e.y), h.rotation = this.rotation, h
      }
      rotatedSize(t) {
          const e = this.width,
              i = this.height,
              s = (t, e) => {
                  var i = t[0].x,
                      s = t[0].y,
                      a = t[1].x,
                      r = t[1].y,
                      o = e[0].x,
                      h = e[0].y,
                      c = e[1].x,
                      l = e[1].y;
                  return new n.a(((i * r - s * a) * (o - c) - (i - a) * (o * l - h * c)) / ((i - a) * (h - l) - (s - r) * (o - c)), ((i * r - s * a) * (h - l) - (s - r) * (o * l - h * c)) / ((i - a) * (h - l) - (s - r) * (o - c)))
              };
          let r, o, h, c, l, d, u;
          var g = t * (Math.PI / 180),
              m = [new n.a(0, 0), new n.a(e, 0), new n.a(e, i), new n.a(0, i)],
              p = ((t, e) => {
                  for (var i = new Array, s = 0; s < t.length; ++s) i.push(new n.a(t[s].x * Math.cos(e) - t[s].y * Math.sin(e), t[s].x * Math.sin(e) + t[s].y * Math.cos(e)));
                  return i
              })(m = ((t, e, i) => {
                  for (var s = new Array, a = 0; a < t.length; ++a) s.push(new n.a(t[a].x + e, t[a].y + i));
                  return s
              })(m, -e / 2, -i / 2), g);
          return t >= 0 ? (r = [new n.a(0, 0), new n.a(-e / 2, -i / 2)], h = [p[0], p[3]], d = s(r, h), o = [new n.a(0, 0), new n.a(e / 2, -i / 2)], c = [p[0], p[1]], u = s(o, c)) : (r = [new n.a(0, 0), new n.a(e / 2, -i / 2)], h = [p[1], p[2]], u = s(r, h), o = [new n.a(0, 0), new n.a(-e / 2, -i / 2)], c = [p[0], p[1]], d = s(o, c)), l = new n.a(Math.max(d.x, -u.x), Math.max(d.y, u.y)), new a.a(Math.round(-l.x - l.x), Math.round(-l.y - l.y))
      }
      pad(t) {
          return new r(this.x - t, this.y - t, this.width + 2 * t, this.height + 2 * t)
      }
      getAspect() {
          return this.width / this.height
      }
      getComparedScale(t) {
          if (t) return new a.a(this.width / t.width, this.height / t.height)
      }
      static calculate(t, e, i = 0) {
          if (!t || !e) return;
          let s = new r;
          return s.x = Math.round(t.x < e.x ? t.x : e.x), s.y = Math.round(t.y < e.y ? t.y : e.y), s.width = Math.round(t.x < e.x ? e.x - s.x : t.x - s.x), s.height = 0 !== i ? Math.round(s.width / i) : Math.round(t.y < e.y ? e.y - s.y : t.y - s.y), s
      }
      static merge(t, e) {
          if (!t && !e) return;
          if (t && !e) return t;
          if (!t && e) return e;
          const i = Math.round(Math.min(t.x, e.x)),
              s = Math.round(Math.min(t.y, e.y)),
              n = Math.round(Math.max(t.x + t.width, e.x + e.width)),
              a = Math.round(Math.max(t.y + t.height, e.y + e.height));
          return new r(i, s, n - i, a - s)
      }
      static fillFit(t, e, i, s, n = !1) {
          let a = 1;
          return a = t / e < i / s ? i / t : s / e, n && a > 1 && (a = 1), new r(Math.round((i - t * a) / 2), Math.round((s - e * a) / 2), Math.round(t * a), Math.round(e * a))
      }
      static bestFit(t, e, i, s) {
          let n = 1;
          return n = t / e > i / s ? i / t : s / e, n > 1 && (n = 1), new r(Math.round((i - t * n) / 2), Math.round((s - e * n) / 2), Math.round(t * n), Math.round(e * n))
      }
      static fromPoints(t) {
          let e = t[0].x,
              i = t[0].x,
              s = t[0].y,
              n = t[0].y;
          return t.forEach((t => {
              e = Math.min(t.x, e), i = Math.max(t.x, i), s = Math.min(t.y, s), n = Math.max(t.y, n)
          })), new r(Math.round(e), Math.round(s), Math.round(i - e), Math.round(n - s))
      }
      static fromPointRects(t, e, i) {
          let s = t[0].x,
              n = t[0].x + e,
              a = t[0].y,
              o = t[0].y + i;
          return t.forEach((t => {
              s = Math.min(t.x, s), n = Math.max(t.x + e, n), a = Math.min(t.y, a), o = Math.max(t.y + i, o)
          })), new r(s, a, n - s, o - a)
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return r
  }));
  var s = i(0),
      n = i(2);
  const a = {
      step: [.01],
      range: [0, 1],
      stops: [0, 1],
      compact: !1,
      force: !1,
      defaultValue: 0,
      labelFormat: t => String(t),
      labelParse: t => parseInt(t, 10)
  };
  class r {
      constructor(t, e = {}) {
          if (this.findElements = () => {
                  this.outlet = this.container.querySelector("input"), this.slider = this.container.querySelector(".slider"), this.knob = this.container.querySelector(".slider .knob"), this.diff = this.container.querySelector(".slider .diff"), this.bounds = this.container.querySelector(".slider .bounds"), this.label = this.container.querySelector(".info label"), this.hold = this.container.querySelector(".slider-holder")
              }, this.buildElements = () => {
                  this.container.classList.add("range-box"), this.label = document.createElement("label"), this.label.innerText = (this.options.label || this.name) + " ", this.outlet = document.createElement("input"), this.outlet.type = "text", this.outlet.autocomplete = "off", this.outlet.value = this.options.labelFormat(this.options.defaultValue);
                  const t = document.createElement("div");
                  t.className = "info", t.appendChild(this.label), t.appendChild(this.outlet), this.knob = document.createElement("div"), this.knob.innerHTML = "<div></div>", this.knob.className = "knob", this.bounds = Object(s.a)("div", {
                      className: "bounds"
                  }, this.knob), this.diff = Object(s.a)("div", {
                      className: "diff"
                  }, this.bounds), this.slider = Object(s.a)("div", {
                      className: "slider"
                  }, this.diff), this.hold = Object(s.a)("div", {
                      className: "slider-holder"
                  }, this.slider), this.container.appendChild(t), this.container.appendChild(this.hold)
              }, this.labelOver = () => {
                  this.value !== this.options.defaultValue && (this.label.innerText = Object(n.a)("reset") + " ")
              }, this.labelOut = () => {
                  this.label.innerText = (this.options.label || this.name) + " "
              }, this.labelClick = () => {
                  if (this.value === this.options.defaultValue) return;
                  const t = this.value;
                  this.options.onStart && this.options.onStart(this.value, this.name), this.reset(), this.options.onChange && this.options.onChange(this.value, this.name), this.options.onEnd && this.options.onEnd(this.value, t, this.name)
              }, this.sliderMouseDown = t => {
                  t.preventDefault(), t.stopPropagation(), this.knobDown(t), this.move(t.clientX)
              }, this.knobDown = t => {
                  document.addEventListener("mousemove", this.knobMouseMove, !1), document.addEventListener("touchmove", this.knobTouchMove, {
                      passive: !1
                  }), document.addEventListener("mouseup", this.knobUp, !0), document.addEventListener("touchend", this.knobUp, {
                      passive: !1
                  }), this.knob.classList.add("grabbed"), t.preventDefault(), t.stopPropagation(), this.downValue = this.value, this.options.onStart && setTimeout((() => this.options.onStart(this.downValue, this.name)), 0)
              }, this.move = t => {
                  const e = this.bounds.getBoundingClientRect();
                  if (t <= e.left) return void this.setAmount(0);
                  if (t >= e.right) return void this.setAmount(1);
                  const i = (t - e.left) / e.width;
                  this.setAmount(i)
              }, this.knobMouseMove = t => {
                  t.preventDefault(), t.stopPropagation(), this.move(t.clientX)
              }, this.knobTouchMove = t => {
                  t.preventDefault(), t.stopPropagation(), this.move(t.touches[0].clientX)
              }, this.knobUp = () => {
                  if (document.removeEventListener("mousemove", this.knobMouseMove, !1), document.removeEventListener("touchmove", this.knobTouchMove), document.removeEventListener("mouseup", this.knobUp, !0), document.removeEventListener("touchend", this.knobUp), this.knob.classList.remove("grabbed"), this.options.onEnd && (this.options.force || this.downValue !== this.value)) {
                      const t = this.downValue;
                      this.downValue = this.value, setTimeout((() => this.options.onEnd(this.value, t, this.name)), 0)
                  }
              }, this.outletKeyUp = t => {
                  const e = this.options.labelParse(this.outlet.value);
                  if (isNaN(e)) return;
                  const i = this.options.range[0],
                      s = this.options.range[this.options.range.length - 1],
                      n = Math.max(Math.min(e, s), i);
                  this.value = n, this.slider.classList.toggle("changed", this.value !== this.options.defaultValue), this.diff.style.backgroundImage = this.generateDiff(this.options.defaultValue, this.value);
                  const a = this.calculateAmount(this.value);
                  this.setKnob(100 * a), this.options.onChange && void 0 !== t && setTimeout((() => this.options.onChange(this.value, this.name)), 0)
              }, this.outletFocus = t => {
                  this.options.onStart && (this.downValue = this.value, this.options.onStart(this.value, this.name)), this.options.compact && (this.hold.style.display = "block")
              }, this.outletBlur = t => {
                  this.options.compact && (this.hold.style.display = "none");
                  const e = this.options.labelParse(this.outlet.value);
                  isNaN(e) || (this.outlet.value = this.options.labelFormat(this.value), this.options.onEnd && (this.options.force || this.downValue !== this.value) && void 0 !== t && this.options.onEnd(this.value, this.downValue, this.name))
              }, this.calculateAmount = t => {
                  for (let e = 1; e < this.options.range.length; e++) {
                      const i = this.options.range[e - 1],
                          s = this.options.range[e];
                      if (t >= i && t <= s) {
                          const n = this.options.stops[e - 1];
                          return n + (t - i) / (s - i) * (this.options.stops[e] - n)
                      }
                  }
                  if (t == this.options.defaultValue) throw new Error("Cant recurse on default value with calculateAmount, this is a bug");
                  return this.calculateAmount(this.options.defaultValue)
              }, this.setKnob = t => {
                  const e = 100 * this.calculateAmount(this.options.defaultValue),
                      i = this.generateDiff(e, t);
                  requestAnimationFrame((() => {
                      this.knob.style.marginLeft = `${t}%`, this.diff.style.backgroundImage = i
                  }))
              }, this.roundToStep = (t, e, i, s) => {
                  const n = t % e;
                  return 0 === n || t === i || t === s ? t : t - n
              }, this.generateDiff = (t, e) => {
                  if (t === e) return "none";
                  const i = this.knob.clientWidth - 3;
                  return (e *= this.bounds.clientWidth / this.diff.clientWidth) > t ? `linear-gradient(to right, transparent 0%, transparent ${t}%, #ddd ${t}%, #ddd calc(${e}%), transparent calc(${e}%), transparent 100%)` : `linear-gradient(to right, transparent 0%, transparent calc(${e}% + ${i}px), #ddd calc(${e}% + ${i}px), #ddd ${t}%, transparent ${t}%, transparent 100%)`
              }, this.setAmount = (t, e = !1) => {
                  const [i, s] = this.bucket(t), n = this.options.range[i], a = this.options.range[i + 1], r = this.options.step[i];
                  this.setKnob(100 * t), this.value = this.roundToStep(s * (a - n) + n, r, n, a), this.slider.classList.toggle("changed", this.value !== this.options.defaultValue), this.outlet.value = this.options.labelFormat(this.value), this.options.onChange && !e && setTimeout((() => this.options.onChange(this.value, this.name)), 0)
              }, this.bucket = t => {
                  for (let e = 1; e < this.options.stops.length; e++) {
                      const i = this.options.stops[e - 1],
                          s = this.options.stops[e];
                      if (t >= i && t <= s) return [e - 1, (t - i) / (s - i)]
                  }
                  throw new Error(`Could not assign ${t} to a bucket, this is a bug`)
              }, this.setValue = (t, e = !1) => {
                  const i = this.value;
                  void 0 === t && (t = this.options.defaultValue);
                  const s = this.options.range[0],
                      n = this.options.range[this.options.range.length - 1];
                  this.value = Math.max(Math.min(t, n), s), this.slider.classList.toggle("changed", this.isChanged()), this.outlet.value = this.options.labelFormat(this.value);
                  const a = this.calculateAmount(this.value);
                  this.setKnob(100 * a), (this.options.onChange || this.options.onEnd) && e && setTimeout((() => {
                      this.options.onChange && this.options.onChange(this.value, this.name), this.options.onEnd && this.options.onEnd(this.value, i, this.name)
                  }), 0)
              }, this.isChanged = () => this.value !== this.options.defaultValue, this.getValue = () => {
                  var t;
                  return null !== (t = this.value) && void 0 !== t ? t : 0
              }, this.reset = () => {
                  this.value = this.options.defaultValue, this.setKnob(100 * this.calculateAmount(this.value)), this.slider.classList.remove("changed"), this.outlet.value = this.options.labelFormat(this.value), this.label.innerText = (this.options.label || this.name) + " "
              }, this.cleanUp = () => {
                  document.removeEventListener("mousemove", this.knobMouseMove, !1), document.removeEventListener("touchmove", this.knobTouchMove), document.removeEventListener("mouseup", this.knobUp, !0), document.removeEventListener("touchend", this.knobUp), this.knob.removeEventListener("mousedown", this.knobDown, !1), this.knob.removeEventListener("touchstart", this.knobDown), this.slider.removeEventListener("mousedown", this.sliderMouseDown, !1), this.outlet.removeEventListener("focus", this.outletFocus, !1), this.outlet.removeEventListener("keyup", this.outletKeyUp, !1), this.outlet.removeEventListener("blur", this.outletBlur, !1), this.options.compact || (this.label.removeEventListener("mouseover", this.labelOver, !1), this.label.removeEventListener("mouseleave", this.labelOut, !1), this.label.removeEventListener("click", this.labelClick, !1))
              }, this.name = t, this.container = Object(s.b)(t), this.options = Object.assign(Object.assign({}, a), e), this.value = this.options.defaultValue, Array.isArray(this.options.step) || (this.options = Object.assign(Object.assign({}, this.options), {
                  step: [this.options.step]
              })), this.options.stops.length < 2) throw new Error("Slider need to have atleast two stops, default is [0,1]");
          if (this.options.range.length != this.options.stops.length) throw new Error("Slider range option and slide stops option, needs to be the same length");
          if (this.options.step.length != this.options.stops.length - 1) throw new Error("Step array must be the same length as the number of ranges (slider options range - 1)");
          this.options.compact && this.container.classList.add("compact");
          !!this.container.querySelector(".slider") ? this.findElements() : this.buildElements(), this.knob.addEventListener("mousedown", this.knobDown, !1), this.knob.addEventListener("touchstart", this.knobDown, {
              passive: !1
          }), this.slider.addEventListener("mousedown", this.sliderMouseDown, !1), this.outlet.addEventListener("focus", this.outletFocus, !1), this.outlet.addEventListener("keyup", this.outletKeyUp, !1), this.outlet.addEventListener("blur", this.outletBlur, !1), this.options.compact || (this.label.addEventListener("mouseover", this.labelOver, !1), this.label.addEventListener("mouseleave", this.labelOut, !1), this.label.addEventListener("click", this.labelClick, !1)), this.outlet.value !== this.options.labelFormat(this.options.defaultValue) ? (this.outletKeyUp(void 0), this.outletBlur(void 0)) : this.reset()
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return n
  }));
  var s = i(1);
  class n {
      constructor(t) {
          this.settings = {
              opacity: 1,
              blendmode: "",
              locked: !1,
              visible: !0,
              name: ""
          }, this.rotate = t => {
              this.canvas && (this.canvas = s.b.rotateFixedCanvas(this.canvas, t ? -90 : 90), this.mask && (this.mask = s.b.rotateFixedCanvas(this.mask, t ? -90 : 90)), this.rect = this.rect.flipWidthAndHeight())
          }, this.flip = t => {
              this.canvas && (this.canvas = s.b.flipCanvas(this.canvas, t), this.mask && (this.mask = s.b.flipCanvas(this.mask, t)))
          }, this.setWidth = (t, e) => {
              this.rect && (t < 1 && (t = 1), this.rect.width = t, 0 !== e && (this.rect.height = Math.round(this.rect.width / e), this.rect.height < 0 && (this.rect.height = 1)))
          }, this.setHeight = (t, e) => {
              this.rect && (t < 1 && (t = 1), this.rect.height = t, 0 !== e && (this.rect.width = Math.round(this.rect.height * e), this.rect.width < 0 && (this.rect.width = 1)))
          }, this.position = (t, e) => {
              this.rect && (void 0 !== t && (this.rect.x = t), void 0 !== e && (this.rect.y = e))
          }, this.scale = (t, e) => {
              this.rect && (this.rect.x = Math.round(this.rect.x * t), this.rect.y = Math.round(this.rect.y * e), this.rect.width = Math.round(this.rect.width * t), this.rect.height = Math.round(this.rect.height * e), this.rect.width < 0 && (this.rect.width = 1), this.rect.height < 0 && (this.rect.height = 1))
          }, this.replaceCanvas = t => {
              this.canvas || (this.canvas = s.b.createCanvas(this.rect.width, this.rect.height));
              const e = this.canvas.getContext("2d");
              e.save(), e.globalCompositeOperation = "copy", e.drawImage(t, 0, 0), e.restore()
          }, this.extendCanvas = t => {}, this.switchCanvas = (t, e) => {}, this.render = () => {}, this.calculate = (t, e, i) => {}, this.rasterize = () => {}, this.clone = () => {}, this.id = s.b.guid(), this.type = t
      }
  }
  n.TYPE_SCRATCH = "scratch", n.TYPE_ELEMENT = "element", n.TYPE_IMAGE = "image", n.TYPE_SHAPE = "shape", n.TYPE_FRAME = "frame", n.TYPE_TEXT = "text"
}, function(t, e, i) {
  "use strict";
  var s = i(5);
  e.a = (t, e) => {
      if ("undefined" == typeof ga || "function" != typeof ga.getAll) return;
      const i = ga.getAll()[0].get("name");
      ga(`${i}.send`, {
          hitType: "event",
          eventCategory: (s.a.user && "guest" !== s.a.user.name ? s.a.user.subscription ? "Premium" : "User" : "Guest") + ":" + s.a.product,
          eventAction: t,
          eventLabel: e
      })
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return a
  })), i.d(e, "b", (function() {
      return r
  }));
  var s = i(3),
      n = i(50);
  class a {
      constructor(t) {
          this.preset = t
      }
      static createCurveSet(t) {
          const e = new Array,
              i = new Array,
              n = new Array,
              a = new Array;
          for (let i = 0; i < t.preset[0].length; i += 2) e.push(new s.a(t.preset[0][i], t.preset[0][i + 1]));
          for (let e = 0; e < t.preset[1].length; e += 2) i.push(new s.a(t.preset[1][e], t.preset[1][e + 1]));
          for (let e = 0; e < t.preset[2].length; e += 2) n.push(new s.a(t.preset[2][e], t.preset[2][e + 1]));
          for (let e = 0; e < t.preset[3].length; e += 2) a.push(new s.a(t.preset[3][e], t.preset[3][e + 1]));
          return new r(1, e, i, n, a)
      }
  }
  class r {
      constructor(t = 255, e = [], i = [], s = [], n = []) {
          this.scale = t, this.rgb = e, this.red = i, this.green = s, this.blue = n, this.percent = 1
      }
      static getInterpolation(t, e) {
          let i = [],
              s = [],
              a = new Float32Array(256);
          for (var r = 0; r < e.length; r++) i.push(e[r].x * t), s.push(e[r].y * t);
          let o = new n.a(i, s);
          for (var h = 0; h < Math.ceil(i[0]); h++) a[h] = s[0];
          for (h = Math.ceil(i[0]); h < Math.ceil(i[i.length - 1]); h++) a[h] = o.interpolate(h);
          for (h = Math.ceil(i[i.length - 1]); h < 256; h++) a[h] = s[s.length - 1];
          return a
      }
      static fillPaletteMap(t, e) {
          let i = r.getInterpolation(t.scale, t.rgb),
              s = r.getInterpolation(t.scale, t.red),
              n = r.getInterpolation(t.scale, t.green),
              a = r.getInterpolation(t.scale, t.blue);
          for (let r = 0; r < 256; ++r) {
              let o = r - i[r];
              e.data[4 * r] = r - Math.round((r - (s[r] - o)) * t.percent), e.data[4 * r + 1] = r - Math.round((r - (n[r] - o)) * t.percent), e.data[4 * r + 2] = r - Math.round((r - (a[r] - o)) * t.percent)
          }
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return a
  })), i.d(e, "b", (function() {
      return o
  }));
  var s = i(4),
      n = i(1);
  class a {
      constructor(t, e) {
          this.colors = t, this.positions = e, this.toCSS = () => {
              let t = "linear-gradient(135deg";
              for (let e = 0; e < this.colors.length; ++e) t += ", " + s.a.fromHEXA(this.colors[e]).toRGBA() + " " + (100 * this.positions[e]).toFixed(0) + "%";
              return t += ")", t
          }
      }
  }
  class r {
      constructor(t, e, i) {
          this.id = t, this.color = e, this.position = i
      }
  }
  class o {
      constructor() {
          this.direction = 0, this.type = "linear", this.addStop = (t, e) => {
              e = n.b.clamp(e, 0, 1);
              const i = new r(n.b.sguid(), t, e);
              return this.stops.push(i), this.sort(), i
          }, this.removeStop = t => {
              const e = this.stops.findIndex((e => e.id === t));
              return -1 !== e && this.stops.splice(e, 1), this.sort(), this.stops[0].id
          }, this.getStop = t => {
              let e;
              return this.stops.forEach((i => {
                  i.id === t && (e = i)
              })), e
          }, this.sort = () => {
              this.stops.sort(((t, e) => t.position - e.position))
          }, this.toCSS = () => {
              let t = "linear-gradient(to right";
              for (let e = 0; e < this.stops.length; ++e) t += ", " + this.stops[e].color.toRGBA() + " " + (100 * this.stops[e].position).toFixed(0) + "%";
              return t += ")", t
          }, this.toJSON = () => JSON.stringify(this.toIGradient()), this.toIGradient = () => {
              let t = new Array;
              return this.stops.forEach((e => {
                  t.push({
                      id: e.id,
                      color: e.color.toHEXA(),
                      position: e.position
                  })
              })), {
                  type: this.type,
                  direction: this.direction,
                  stops: t
              }
          }, this.createCanvasGradient = t => {
              let e;
              if ("linear" === this.type) {
                  const i = (this.direction - 90) * Math.PI / 180,
                      s = t.canvas.width,
                      n = t.canvas.height,
                      a = Math.sqrt(s * s + n * n) / 2,
                      r = Math.asin(n / 2 / a);
                  let o = (i % (2 * Math.PI) + 4 * Math.PI) % (2 * Math.PI);
                  o > Math.PI && (o -= Math.PI), o > Math.PI / 2 && o <= Math.PI && (o = Math.PI / 2 - (o - Math.PI / 2));
                  let h = Math.PI / 2 - r - Math.abs(o),
                      c = Math.abs(r - Math.abs(o)),
                      l = Math.max(Math.cos(c) * s, Math.cos(h) * n) / 2,
                      d = Math.cos(i) * l,
                      u = Math.sin(i) * l;
                  e = t.createLinearGradient(s / 2 + d, n / 2 + u, s / 2 - d, n / 2 - u)
              } else {
                  let i = t.canvas.width / 2,
                      s = t.canvas.height / 2,
                      n = Math.max(t.canvas.width, t.canvas.height) / 2;
                  e = t.createRadialGradient(i, s, 0, i, s, n)
              }
              return this.addStopToCanvasGradient(e), e
          }, this.addStopToCanvasGradient = (t, e = !1) => {
              for (let i = 0; i < this.stops.length; ++i) t.addColorStop(this.stops[i].position, this.stops[i].color.toRGBA(e ? 255 - this.stops[i].color.a : this.stops[i].color.a))
          }, this.stops = new Array
      }
      static fromJSON(t) {
          let e = JSON.parse(t);
          return o.fromIGradient(e)
      }
      static fromIGradient(t) {
          const e = new o;
          if (e.type = t.type && "radial" === t.type ? "radial" : "linear", e.direction = t.direction, t.stops)
              for (let i = 0; i < t.stops.length; ++i) {
                  let n = "string" == typeof t.stops[i].color ? s.a.fromHEXA(t.stops[i].color) : new s.a(t.stops[i].color.r, t.stops[i].color.g, t.stops[i].color.b, t.stops[i].color.a);
                  e.addStop(n, t.stops[i].position)
              }
          return e
      }
      static fromPreset(t) {
          const e = new o;
          for (let i = 0; i < t.colors.length; ++i) e.addStop(s.a.fromHEXA(t.colors[i]), t.positions[i]);
          return e
      }
      static fromColors(t, e) {
          const i = new o;
          return i.addStop(t, 0), i.addStop(e, 1), i
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t = 0, e = 255, i = 0, s = 255, n = 1, a = .5) {
          this.minin = t, this.maxin = e, this.minout = i, this.maxout = s, this.midin = n, this.mid = a, this.map = t => (t = (t - this.minin) / (this.maxin - this.minin), t = Math.pow(t, this.midin), (t = this.minout + t * (this.maxout - this.minout)) > this.maxout ? t = this.maxout : t < this.minout && (t = this.minout), Math.round(t))
      }
      reset() {
          this.minout = 0, this.maxout = 255, this.midin = 1, this.minin = 0, this.maxin = 255, this.mid = .5
      }
      isFlat() {
          return Boolean(0 == this.minout && 255 == this.maxout && .5 == this.mid && 0 == this.minin && 255 == this.maxin)
      }
      setMid(t) {
          this.mid = (t - this.minin) / (this.maxin - this.minin), this.midin = this.midToIn(this.mid)
      }
      midToIn(t) {
          return Math.min(Math.max(Math.pow(9.99, 2 * t - 1), .1), 9.99)
      }
      static fillPaletteMap(t, e) {
          for (let i = 0; i < 256; ++i) {
              let s = t.map(i);
              e.data[4 * i] = s, e.data[4 * i + 1] = s, e.data[4 * i + 2] = s
          }
      }
      static fillRGBPaletteMap(t, e, i, s) {
          for (let n = 0; n < 256; ++n) s.data[4 * n] = t ? t.map(n) : n, s.data[4 * n + 1] = e ? e.map(n) : n, s.data[4 * n + 2] = i ? i.map(n) : n
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return P
  }));
  var s = i(1),
      n = i(0),
      a = i(20);
  var r = i(4),
      o = i(3),
      h = i(29),
      c = i(6),
      l = i(2),
      d = i(24),
      u = i(5);
  class g extends d.a {
      constructor(t, e) {
          if (super(Object(l.a)("dialogPreResizeTitle")), this.rotation = 0, this.size = 1920, this.init = () => new Promise(((t, e) => {
                  this.apply = () => {
                      Object(n.b)("preresize-never-ask-again").checked && Object(u.b)("askToPreResize", !1);
                      const e = new a.a(Number(Object(n.b)("pre-resize-width").value), Number(Object(n.b)("pre-resize-height").value)),
                          i = Object(n.b)("pre-resize-auto-rotate").checked ? this.rotation : 0;
                      this.cleanUp(), t([e, i])
                  }
              })), this.presetChange = t => {
                  let e = t.currentTarget,
                      i = Object(n.b)("pre-resize-preset").getElementsByTagName("li");
                  for (var s = 0; s < i.length; s++) i[s].classList.remove("selected");
                  e.classList.add("selected"), this.size = Number(e.getAttribute("data")), this.setSize()
              }, this.imageSizeInputChange = t => {
                  let e, i, a = t.currentTarget;
                  "pre-resize-width" === a.id ? (e = s.b.clamp(Number(a.value), 1, this.width), i = Math.round(e / this.width * this.height)) : (i = s.b.clamp(Number(a.value), 1, this.height), e = Math.round(i / this.height * this.width)), Object(n.b)("pre-resize-height").value = i.toString(), Object(n.b)("pre-resize-width").value = e.toString()
              }, this.setSize = () => {
                  let t = Object(n.b)("pre-resize-width"),
                      e = Object(n.b)("pre-resize-height");
                  this.width > this.height ? (t.value = this.size.toString(), e.value = Math.round(this.size / this.width * this.height).toString()) : (e.value = this.size.toString(), t.value = Math.round(this.size / this.height * this.width).toString())
              }, u.a.user.subscription && (this.dialog.style.width = "550px"), this.image = t, 90 === e || -90 === e ? (this.height = t.width, this.width = t.height) : (this.width = t.width, this.height = t.height), this.rotation = e, this.setContent(`\n            <span style="display: block;">${Object(l.a)("dialogPreResizeInfo1")} (<span id="pre-resize-start"></span>) ${Object(l.a)("dialogPreResizeInfo2")}</span>\n\n            <input type="checkbox" id="preresize-never-ask-again" />\n            <label class="switch pad-10" for="preresize-never-ask-again">${Object(l.a)("neverAskMeAgain")}<span></span></label>\n\n            <span id="pre-resize-auto-rotate-setting" style="display:none;">\n                <input type="checkbox" checked id="pre-resize-auto-rotate" />\n                <label class="switch pad-20" for="pre-resize-auto-rotate">${Object(l.a)("dialogPreResizeExif")}<span></span></label>\n            </span>\n        \n            <ul id="pre-resize-preset" class="push-buttons pad-20">\n                <li id="pre-resize-original" data="4096"><img src="/img/icon/layer-image.svg"><span>${Object(l.a)("original")}<br /><small id="pre-resize-uhd-size">Max 3840 px</small></span></li>\n                <li id="pre-resize-uhd" data="3840"><img src="/img/icon/size-uhd.svg"><span>${Object(l.a)("sizeUltraHD")}<br /><small>Max 3840 px</small></span></li>\n                <li id="pre-resize-fhd" data="1920" class="selected"><img src="/img/icon/size-fhd.svg"><span>${Object(l.a)("sizeFullHD")}<br /><small>Max 1920 px</small></span></li>\n                <li id="pre-resize-uhd" data="1280"><img src="/img/icon/size-web.svg"><span>${Object(l.a)("sizeWeb")}<br /><small>Max 1280 px</small></span></li>\n            </ul>\n\n            <div class="pad-20" style="text-align:right;line-height:32px;">${Object(l.a)("newSize")}<input type="number" style="text-align:center;margin-left:16px" id="pre-resize-width"/> x <input type="number" style="text-align:center" id="pre-resize-height"/></div>\n        `), this.maxSize = u.a.user.subscription ? 8192 : 4096, u.a.user.subscription ? (this.width < 3840 && this.height < 3840 && (Object(n.b)("pre-resize-uhd").style.display = "none"), Object(n.b)("pre-resize-original").setAttribute("data", Math.min(Math.max(this.width, this.height), this.maxSize).toString()), Object(n.b)("pre-resize-uhd-size").innerText = Object(l.a)("dialogPreResizeMaxSize", Math.min(Math.max(this.width, this.height), this.maxSize))) : this.width < 3840 && this.height < 3840 ? (Object(n.b)("pre-resize-uhd").style.display = "none", Object(n.b)("pre-resize-original").setAttribute("data", Math.max(this.width, this.height).toString()), Object(n.b)("pre-resize-uhd-size").innerText = Object(l.a)("dialogPreResizeMaxSize", Math.max(this.width, this.height))) : Object(n.b)("pre-resize-original").style.display = "none", 0 !== e) {
              let t = Object(n.b)("pre-resize-auto-rotate-setting");
              t.style.display = "block", t.addEventListener("change", (() => {
                  let t = Object(n.b)("pre-resize-width"),
                      e = Object(n.b)("pre-resize-height");
                  const i = t.value;
                  t.value = e.value, e.value = i
              }), !1)
          }
          Object(n.b)("pre-resize-start").innerText = this.width.toString() + " x " + this.height.toString();
          let i = Object(n.b)("pre-resize-preset").getElementsByTagName("li");
          for (var r = 0; r < i.length; r++) i[r].addEventListener("click", this.presetChange, !1);
          this.setSize(), Object(n.b)("dialog-cancel" + this.mid).style.display = "none", Object(n.b)("dialog-close" + this.mid).style.display = "none", Object(n.b)("pre-resize-width").addEventListener("change", this.imageSizeInputChange, !1), Object(n.b)("pre-resize-height").addEventListener("change", this.imageSizeInputChange, !1)
      }
  }
  class m extends d.a {
      constructor() {
          super(Object(l.a)("dialogChoiceTitle"), !0), this.init = () => new Promise(((t, e) => {
              const i = this.content.querySelector("#open-as-new"),
                  s = this.content.querySelector("#open-in-current");
              this.cancel = () => {
                  this.cleanUp(), t("close")
              }, i.onclick = () => {
                  this.cleanUp(), t("create")
              }, s.onclick = () => {
                  this.cleanUp(), t("layer")
              }
          })), this.setContent(`    \n            <small>${Object(l.a)("dialogChoiceHeadline")}</small>\n\n            <ul class="push-buttons pad-20" style="text-align: center">\n                <li id="open-as-new">\n                    <img src="/img/icon/document-new.svg" />\n                    <span>${Object(l.a)("createNew")}</span>\n                </li>\n                <li id="open-in-current">\n                    <img src="/img/icon/document-add.svg" />\n                    <span>${Object(l.a)("addCurrent")}</span>\n                </li>\n            </ul>\n        `), Object(n.b)("dialog-buttons" + this.mid).style.display = "none"
      }
  }
  var p = i(9),
      v = i(8),
      f = i(36),
      w = i(23),
      y = i(30),
      x = i(15),
      b = i(17),
      S = i(11),
      k = i(19),
      C = i(27),
      E = i(39),
      M = i(33),
      T = i(31);
  class P {
      static browseFile(t = !1, e = !1) {
          return new Promise(((i, s) => {
              Object(n.b)("browse") && Object(n.b)("browse").remove();
              let a = document.createElement("input");
              a.id = "browse", a.type = "file", ("e" === u.a.product && !e || "bg" === u.a.product) && (a.multiple = !0), a.className = "offscreen", t && (a.accept = "image/*", a.capture = "camera"), a.addEventListener("change", (() => {
                  a.files.length > 0 && i(a.files), Object(n.b)("workspace").removeChild(a)
              }), !1), Object(n.b)("workspace").appendChild(a), a.click()
          }))
      }
      static loadArrayBufferFile(t) {
          return new Promise(((e, i) => {
              const s = new FileReader;
              s.onerror = () => i(s.error), s.onloadend = () => e(s.result), s.readAsArrayBuffer(t)
          }))
      }
      static loadImageFile(t) {
          return new Promise((async(e, i) => {
              const s = URL.createObjectURL(t);
              let n = new Image;
              n.crossOrigin = "Anonymous", n.onload = () => {
                  URL.revokeObjectURL(s), n.width + n.height == 0 ? (alert("Could not open file!"), i("Could not open file!")) : e(n)
              }, n.onerror = function() {
                  URL.revokeObjectURL(s), alert("Could not open file!"), i("Could not open file!")
              }, n.name = t instanceof File ? t.name : "", n.src = s
          }))
      }
      static async openTIFF(t) {
          const e = await i.e(7).then(i.t.bind(null, 95, 7));
          let s = await P.loadArrayBufferFile(t);
          return new e.default({
              buffer: s
          })
      }
      static async openPSD(t) {
          await this.addScript("/js/psd.js", (() => window.require && window.require("psd")));
          const e = window.require("psd"),
              i = await new Response(t).arrayBuffer(),
              s = new e(new Uint8Array(i));
          return s.parse(), s
      }
      static async addScript(t, e, i = 3e4) {
          let a = !1;
          for (let e = 0; e < document.head.childNodes.length; e++) {
              const i = document.head.childNodes[e];
              if (i.nodeType === Node.ELEMENT_NODE && i.getAttribute("src") === t) {
                  a = !0;
                  break
              }
          }
          a || document.head.appendChild(Object(n.a)("script", {
              src: t
          }));
          let r = 0;
          for (; !e();) {
              if (r >= i) throw new Error(`Timeout triggered when loading script ${t}`);
              const e = 500;
              r += e, await s.b.wait(e)
          }
      }
      static dataURI(t) {
          return new Promise(((e, i) => {
              t || e(void 0), t.toBlob((t => {
                  const s = new FileReader;
                  s.onerror = t => i(t), s.onload = () => e(s.result), s.readAsDataURL(t)
              }))
          }))
      }
      static async openPXDFile(t, e) {
          document.dispatchEvent(new CustomEvent("loading", {
              detail: "start"
          }));
          const {
              PXD: n
          } = await i.e(6).then(i.bind(null, 96)), a = await P.loadArrayBufferFile(e), r = n.decode(new Uint8Array(a)), o = new f.a(s.b.guid(), e.name, r.width, r.height);
          try {
              t.supressRender = !0, t.addTab(o, "document");
              for (let e = 0; e < r.layers; e++) {
                  const e = r.takeNextLayer(),
                      i = e.width,
                      n = e.height;
                  switch (e.kind) {
                      case "bitmap":
                      case "shape":
                          {
                              if (0 === i || 0 === n) {
                                  const i = new b.a(s.b.guid(), e.name, void 0, void 0, !1);
                                  i.settings.opacity = e.alpha, i.settings.blendmode = e.blendMode, i.settings.visible = e.visible, i.settings.locked = e.locked, t.fresco.layers.push(i), e.free();
                                  continue
                              }
                              const a = s.b.createCanvas(i, n),
                                  r = a.getContext("2d"),
                                  o = e.takeCanvas();
                              r.putImageData(new ImageData(o, i, n), 0, 0);
                              const h = new b.a(s.b.guid(), e.name, a, new c.a(e.x, e.y, i, n, e.rotation), e.locked);
                              h.settings.opacity = e.alpha,
                              h.settings.blendmode = e.blendMode,
                              h.settings.visible = e.visible;
                              const l = e.takeMask();
                              if (l.length > 0) {
                                  const t = s.b.createCanvas(i, n);
                                  t.getContext("2d").putImageData(new ImageData(l, i, n), 0, 0), h.mask = t, h.render()
                              }
                              t.fresco.layers.push(h);
                              break
                          }
                      case "text":
                          {
                              const a = JSON.parse(e.meta),
                                  r = new k.a(a.textSettings.font, a.textSettings.size);
                              Object.assign(r, a.textSettings);
                              const o = new w.a(s.b.guid(), a.text, new c.a(e.x, e.y, i, n, e.rotation), r);
                              o.settings.opacity = e.alpha,
                              o.settings.blendmode = e.blendMode,
                              o.settings.visible = e.visible,
                              await T.a.loadFont(r.font),
                              r.measureText(),
                              await o.prepare(),
                              t.fresco.layers.push(o)
                          }
                  }
                  e.free()
              }
          } finally {
              r.free(), t.supressRender = !1, document.dispatchEvent(new CustomEvent("loading", {
                  detail: "stop"
              }))
          }
          await t.syncDocument(t.fresco), t.selectLayer(t.fresco.layers[0]), t.setZoom("fit"), document.dispatchEvent(new CustomEvent("layerbox-render"))
      }
      static async generatePXZFile(t, e) {
          const {
              ZipWriter: n
          } = await i.e(6).then(i.bind(null, 96)), a = t.fresco, o = "pixel" !== e.unit, h = a.color && "component" !== e.type ? a.color : void 0;
          let c = (t, e) => 0 == e ? t : c(e, t % e),
              l = t => o ? t / a.width : t,
              d = t => o ? t / a.height : t;
          const u = c(a.width, a.height),
              g = o ? a.width / u : a.width,
              m = o ? a.height / u : a.height;
          let p = {
              id: e.id,
              name: e.name,
              type: e.type,
              unit: e.unit,
              width: g,
              height: m,
              background: h,
              stack: new Array
          };
          const f = new Array,
              w = new Array;
          if ("template" === e.type) {
              const e = await new Promise((e => t.getOutputCanvas(500 / a.height).toBlob(e, "image/webp", 80)));
              f.push(new File([e], "preview.webp"))
          }
          const y = "component" === e.type ? 200 : 350,
              x = await new Promise((e => t.getOutputCanvas(y / a.height).toBlob(e, "image/webp", 70)));
          f.push(new File([x], "thumbnail.webp"));
          for (let t = 0; t < a.layers.length; t++) {
              let i = a.layers[t];
              if ("document" !== e.type && !i.settings.visible || !i.rect) continue;
              const n = s.b.sguid();
              let o = {
                  name: i.settings.name,
                  type: i.type,
                  rect: i.rect ? {
                      x: l(i.rect.x),
                      y: d(i.rect.y),
                      w: l(i.rect.width),
                      h: d(i.rect.height),
                      r: Number(i.rect.rotation.toFixed(2))
                  } : void 0,
                  blendmode: "" !== i.settings.blendmode ? i.settings.blendmode : void 0,
                  opacity: Math.round(100 * i.settings.opacity) / 100,
                  locked: i.settings.locked,
                  visible: i.settings.visible
              };
              switch (i.type) {
                  case v.a.TYPE_ELEMENT:
                  case v.a.TYPE_IMAGE:
                      o.type = v.a.TYPE_IMAGE;
                      let t = i.canvas;
                      if (i instanceof C.a && i.rect && t && (i.rect.width === t.width && i.rect.height === t.height || (t = s.b.resizeCanvasForQuality(t, i.rect.width, i.rect.height))), i.mask) {
                          let t = s.b.sguid();
                          const e = await new Promise((t => i.mask.toBlob(t, "image/webp", 60)));
                          f.push(new File([e], t + ".webp")), o.mask = t + ".webp"
                      }
                      if (t) {
                          const i = await new Promise((i => t.toBlob(i, e.ndestuctive ? "image/png" : "image/webp", e.quality)));
                          f.push(new File([i], n + (e.ndestuctive ? ".png" : ".webp"))), o.content = n + (e.ndestuctive ? ".png" : ".webp")
                      }
                      break;
                  case v.a.TYPE_TEXT:
                      let a = i,
                          h = T.a.getFontDesc(a.textSettings.font);
                      if (h && !w.find((t => t.name === h.name)) && w.push(h), o.content = a.text, o.format = {
                              size: d(a.textSettings.size),
                              align: a.textSettings.align,
                              bold: a.textSettings.bold,
                              italic: a.textSettings.italic,
                              underline: a.textSettings.undeline,
                              uppercase: a.textSettings.uppercase,
                              linespace: a.textSettings.lineSpace,
                              letterspace: a.textSettings.letterSpace,
                              font: {
                                  name: a.textSettings.font,
                                  content: h ? h.short + "." + h.type : ""
                              }
                          }, a.fill && a.fill.value && (o.format.fill = {
                              type: a.fill.getType()
                          }, a.fill.value instanceof r.a && (o.format.fill.value = a.fill.value.toHEX()), a.fill.value instanceof S.b && (o.format.fill.value = a.fill.value.toIGradient()), a.fill.value instanceof M.a)) {
                          let t = s.b.sguid();
                          f.push(new File([new Blob([a.fill.value.svg], {
                              type: "image/svg+xml;charset=utf-8"
                          })], t + ".svg")), o.format.fill.value = a.fill.value.toIPattern(t + ".svg")
                      }(a.textSettings.curve || a.textSettings.background || a.textSettings.outline || a.textSettings.shadow) && (o.style = {}, a.textSettings.curve && (o.style.curve = {
                          type: a.textSettings.curveType,
                          amount: a.textSettings.curveAmount,
                          spread: a.textSettings.curveSpread,
                          flip: a.textSettings.curveFlip
                      }), a.textSettings.background && (o.style.background = {
                          type: a.textSettings.backgroundType,
                          color: a.textSettings.backgroundColor,
                          punch: a.textSettings.backgroundPunch,
                          offset: a.textSettings.backgroundOffset
                      }), a.textSettings.outline && (o.style.outline = {
                          size: a.textSettings.outlineSize,
                          color: a.textSettings.outlineColor,
                          punch: a.textSettings.outlinePunch,
                          distance: a.textSettings.outlineDistance,
                          direction: a.textSettings.outlineDirection
                      }), a.textSettings.shadow && (o.style.shadow = {
                          blur: a.textSettings.shadowBlur,
                          color: a.textSettings.shadowColor,
                          opacity: a.textSettings.shadowAlpha,
                          distance: a.textSettings.shadowDistance,
                          direction: a.textSettings.shadowDirection
                      }));
                      break;
                  case v.a.TYPE_SHAPE:
                      let c = i;
                      if ("svg" === c.shapeSettings.variant) c.shapeSettings.content && (f.push(new File([new Blob([c.shapeSettings.content], {
                          type: "image/svg+xml;charset=utf-8"
                      })], n + ".svg")), o.content = n + ".svg"), o.format = {
                          variant: c.shapeSettings.variant
                      };
                      else if (o.content = c.shapeSettings.content, o.format = {
                              variant: c.shapeSettings.variant
                          }, c.fill && c.fill.value && (o.format.fill = {
                              type: c.fill.getType()
                          }, c.fill.value instanceof r.a && (o.format.fill.value = c.fill.value.toHEX()), c.fill.value instanceof S.b && (o.format.fill.value = c.fill.value.toIGradient()), c.fill.value instanceof M.a)) {
                          let t = s.b.sguid();
                          f.push(new File([new Blob([c.fill.value.svg], {
                              type: "image/svg+xml;charset=utf-8"
                          })], t + ".svg")), o.format.fill.value = c.fill.value.toIPattern(t + ".svg")
                      }(c.shapeSettings.shadow || c.shapeSettings.outlineSize > 0) && (o.style = {}, c.shapeSettings.outlineSize > 0 && (o.style.outline = {
                          size: c.shapeSettings.outlineSize,
                          color: c.shapeSettings.outlineColor
                      }), c.shapeSettings.shadow && (o.style.shadow = {
                          blur: c.shapeSettings.shadowBlur,
                          color: c.shapeSettings.shadowColor,
                          opacity: c.shapeSettings.shadowOpacity,
                          distance: c.shapeSettings.shadowDistance,
                          direction: c.shapeSettings.shadowDirection
                      }));
                      break;
                  case v.a.TYPE_FRAME:
                      let u = i;
                      if (u.canvas) {
                          !u.trim || u.trim.width === u.canvas.width && u.trim.height === u.canvas.height || (u.canvas = s.b.resizeCanvasForQuality(u.canvas, u.trim.width, u.trim.height));
                          const t = await new Promise((t => u.canvas.toBlob(t, "image/webp", e.quality)));
                          f.push(new File([t], n + ".webp")), o.content = n + ".webp"
                      }
                      o.frame = {
                          trim: u.trim ? {
                              x: l(u.trim.x),
                              y: d(u.trim.y),
                              w: l(u.trim.width),
                              h: d(u.trim.height),
                              r: 0
                          } : void 0,
                          clip: u.frameSettings.clip
                      }, (u.frameSettings.outline || u.frameSettings.shadow) && (o.style = {}, u.frameSettings.outline && (o.style.outline = {
                          size: u.frameSettings.outlineSize,
                          color: u.frameSettings.outlineColor
                      }), u.frameSettings.shadow && (o.style.shadow = {
                          blur: u.frameSettings.shadowBlur,
                          color: u.frameSettings.shadowColor,
                          opacity: u.frameSettings.shadowOpacity,
                          distance: u.frameSettings.shadowDistance,
                          direction: u.frameSettings.shadowDirection
                      }))
              }
              p.stack.push(o)
          }
          let b = new n;
          b.writeString("manifest.json", JSON.stringify(p), !0);
          for (let t = 0; t < f.length; t++) {
              const e = f[t];
              let i = await e.arrayBuffer(),
                  s = new Uint8Array(i);
              b.writeFile(e.name, s, e.name.endsWith(".svg"))
          }
          for (let t = 0; t < w.length; t++) {
              const e = w[t];
              let i = await T.a.getFontFile(e.name);
              if (i) {
                  let t = await i.arrayBuffer(),
                      s = new Uint8Array(t);
                  b.writeFile(e.short + "." + e.type, s, !0)
              }
          }
          const k = b.finish();
          return new Blob([k.buffer])
      }
      static async openPXZFile(t, e) {
          document.dispatchEvent(new CustomEvent("loading", {
              detail: "start"
          }));
          const {
              ZipReader: n
          } = await i.e(6).then(i.bind(null, 96));
          let a;
          try {
              t.supressRender = !0;
              let i = await e.arrayBuffer();
              a = new n(new Uint8Array(i));
              let r = a.readString("manifest.json"),
                  h = JSON.parse(r);
              const c = new f.a(s.b.guid(), h.name, h.width, h.height, h.background);
              t.addTab(c, "template");
              try {
                  let e = a.readFile("thumbnail.webp"),
                      i = await s.b.blobToCanvas(new Blob([e.buffer]));
                  t.renderPreview(i)
              } catch (t) {}
              let l = await this.parseManifest(h, new o.a, a);
              t.fresco.layers.push(...l)
          } catch (t) {
              return console.log(t), void alert("Error while loading template :(")
          } finally {
              a.free(), t.supressRender = !1, document.dispatchEvent(new CustomEvent("loading", {
                  detail: "stop"
              }))
          }
          await t.syncDocument(t.fresco), t.selectLayer(t.fresco.layers[0]), t.setZoom("fit"), document.dispatchEvent(new CustomEvent("layerbox-render"))
      }
      static async openTiffFile(t, e) {
          const i = await P.openTIFF(e);
          let s = e.name.replace(/^.*[\\\/]/, "");
          t.addImage(i.toCanvas(), s, "add")
      }
      static async openSVGFile(t, e, i = !0, s) {
          let n = await e.text();
          t.addSVGShape(n, e.name, "add")
      }
      static async openImageFile(t, e, i = !0, n) {
          const r = await P.loadImageFile(e);
          let o, h = "e" === u.a.product && i || "e" !== u.a.product ? "create" : "layer",
              l = new a.a(4096, 4096);
          if (("x" === u.a.product || "drop" === n) && (h = i && t.fresco ? await (new m).init() : t.fresco ? "layer" : "create", "close" === h)) return;
          u.a.askToPreResize && "m" !== u.a.product && "create" === h && (r.width > 2500 || r.height > 2500) ? [l, o] = await new g(r, await class {
              static rotation(t) {
                  return new Promise(((e, i) => {
                      const s = new FileReader;
                      s.onload = t => {
                          t.target || e(0);
                          const i = t.target,
                              s = new DataView(i.result);
                          65496 !== s.getUint16(0, !1) && e(0);
                          const n = s.byteLength;
                          let a = 2;
                          for (; a < n;) {
                              s.getUint16(a + 2, !1) <= 8 && e(0);
                              const t = s.getUint16(a, !1);
                              if (a += 2, 65505 === t) {
                                  1165519206 !== s.getUint32(a += 2, !1) && e(0);
                                  const t = 18761 === s.getUint16(a += 6, !1);
                                  a += s.getUint32(a + 4, t);
                                  const i = s.getUint16(a, t);
                                  a += 2;
                                  for (let n = 0; n < i; n++)
                                      if (274 === s.getUint16(a + 12 * n, t)) {
                                          switch (s.getUint16(a + 12 * n + 8, t)) {
                                              case 8:
                                                  e(-90);
                                                  break;
                                              case 6:
                                                  e(90);
                                                  break;
                                              case 3:
                                                  e(180);
                                                  break;
                                              default:
                                                  e(0)
                                          }
                                          return
                                      }
                              } else {
                                  if (65280 != (65280 & t)) break;
                                  a += s.getUint16(a, !1)
                              }
                          }
                          e(0)
                      }, s.readAsArrayBuffer(t)
                  }))
              }
          }.rotation(e)).init() : (l = c.a.bestFit(r.width, r.height, 4096, 4096).size(), o = 0);
          let d = s.b.createImageCanvas(r, l.width > l.height ? l.width : l.height, o),
              p = e.name ? e.name : r.src.replace(/^.*[\\\/]/, "");
          "create" === h && t.addTab(new f.a(s.b.guid(), p, d.width, d.height), "image"), t.addImage(d, p, n)
      }
      static async openPhotoshopFile(t, e) {
          document.dispatchEvent(new CustomEvent("loading", {
              detail: "start"
          }));
          const i = await P.openPSD(e),
              n = i.tree(),
              a = new f.a(s.b.guid(), e.name, i.header.cols, i.header.rows);
          try {
              t.supressRender = !0, t.addTab(a, "document");
              let e = n.descendants();
              for (let i = e.length - 1; i >= 0; i--) {
                  const n = e[i];
                  if (!n.isGroup()) try {
                      const a = new c.a(n.layer.left, n.layer.top, n.layer.width, n.layer.height),
                          o = n.get("typeTool");
                      let h;
                      if (o) {
                          const t = o.export();
                          let e = t.font.sizes ? t.font.sizes[0] : 12;
                          const i = t.font.name.trim(),
                              n = new k.a(i.substr(0, i.length - 1), e);
                          h = new w.a(s.b.guid(), t.value.trim(), a.clone(), n), h.textSettings.fillType = "color", h.textSettings.fillValue = new r.a(t.font.colors[0][0], t.font.colors[0][1], t.font.colors[0][2], t.font.colors[0][3]).toHEX(), h.prepare()
                      } else {
                          const t = await new Promise(((t, e) => {
                              const i = n.toPng();
                              i.onload = () => t(i), i.onerror = t => e(t)
                          }));
                          let r = s.b.createImageCanvas(t, 4096);
                          h = new b.a(s.b.guid(), n.layer.name, r, a, i == e.length - 1)
                      }
                      const l = {
                          norm: "source-over",
                          dark: "darken",
                          lite: "lighten",
                          hue: "hue",
                          sat: "saturation",
                          colr: "color",
                          lum: "luminosity",
                          mul: "multiply",
                          scrn: "screen",
                          diss: "source-over",
                          over: "overlay",
                          hLit: "hard-light",
                          sLit: "soft-light",
                          diff: "difference",
                          smud: "exclusion",
                          div: "color-doge",
                          idiv: "color-burn",
                          lbrn: "source-over",
                          lddg: "source-over",
                          vLit: "source-over",
                          lLit: "source-over",
                          pLit: "source-over",
                          hMix: "source-over",
                          pass: "source-over",
                          dkCl: "source-over",
                          lgCl: "source-over",
                          fsub: "source-over",
                          fdiv: "source-over"
                      };
                      h.settings.blendmode = l[n.layer.blendMode.blendKey] || "source-over", h.settings.visible = n.layer.visible, h.settings.opacity = n.layer.opacity / 255, t.fresco.layers.push(h)
                  } catch (t) {
                      console.log("pxd layer read", t)
                  }
              }
              t.selectLayer(t.fresco.layers[0]), await t.syncDocument(t.fresco)
          } catch (e) {
              throw t.close(a.id), e
          } finally {
              t.supressRender = !1, document.dispatchEvent(new CustomEvent("loading", {
                  detail: "stop"
              }))
          }
          t.setZoom("fit"), document.dispatchEvent(new CustomEvent("layerbox-render"))
      }
      static async print(t) {
          let e = t.getOutputCanvas(1).toDataURL();
          var i = window.open("about:blank", "_new");
          i.document.open(), i.document.write("<html><head><script>function step1(){\nsetTimeout('step2()', 10);}\nfunction step2(){window.print();window.close()}\n<\/script></head><body onload='step1()'>\n<img src='" + e + "' /></body></html>"), i.document.close()
      }
  }
  P.openDataUrl = t => new Promise(((e, i) => {
      let s = new Image;
      s.onload = () => e(s), s.onerror = t => i(t), s.src = t
  })), P.loadImage = (t, e) => new Promise(((i, s) => {
      var n = new XMLHttpRequest,
          a = !1;
      n.open("GET", t, !0), n.responseType = "arraybuffer", n.onprogress = function(t) {
          t.lengthComputable ? e(t.loaded / t.total * 100) : a || (a = !0, e(-1))
      }, n.onloadend = function() {
          n.status.toString().match(/^2/) ? (a || e(100), i(new Blob([this.response], {
              type: n.getResponseHeader("Content-Type")
          }))) : s(n)
      }, n.send()
  })), P.openFile = async(t, e, i = !0, s = "add") => {
      var n;
      Object(p.a)("open-file", e.type);
      try {
          switch (e.type) {
              case "image/psd":
              case "application/psd":
              case "application/photoshop":
              case "application/x-photoshop":
              case "image/vnd.adobe.photoshop":
                  Object(p.a)("open-file", "image/psd"), await P.openPhotoshopFile(t, e);
                  break;
              case "image/tiff":
                  await P.openTiffFile(t, e);
                  break;
              default:
                  const a = null === (n = e.name) || void 0 === n ? void 0 : n.toLowerCase();
                  if (a) {
                      if (a.endsWith(".psd")) return Object(p.a)("open-file", "image/psd"), void await P.openPhotoshopFile(t, e);
                      if (a.endsWith(".pxd")) return Object(p.a)("open-file", "image/pxd"), void await P.openPXDFile(t, e);
                      if (a.endsWith(".pxz")) return Object(p.a)("open-file", "image/pxz"), void await P.openPXZFile(t, e);
                      if (a.endsWith(".svg") && "frame" !== s) return Object(p.a)("open-file", "image/svg+xml"), void await P.openSVGFile(t, e, i, s);
                      if (a.endsWith(".otf") || a.endsWith(".ttf") || a.endsWith(".woff") || a.endsWith(".woff2")) return Object(p.a)("open-file", "font/" + e.name.split(".")[1]), void await T.a.loadFontFromUpload(e)
                  }
                  await P.openImageFile(t, e, i, s)
          }
      } catch (t) {
          throw document.dispatchEvent(new CustomEvent("loading", {
              detail: "stop"
          })), t
      }
  }, P.openComponentManifest = async(t, e) => {
      let i;
      document.dispatchEvent(new CustomEvent("loading", {
          detail: "start"
      }));
      let s = new o.a;
      try {
          const n = await fetch(e),
              a = await n.json();
          s.x = Math.round((t.fresco.width - a.width) / 2), s.y = Math.round((t.fresco.height - a.height) / 2), i = await P.parseManifest(a, s)
      } catch (t) {
          console.log(t)
      }
      i && 0 !== i.length && (await t.addLayer(i), document.dispatchEvent(new CustomEvent("loading", {
          detail: "stop"
      })), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")))
  }, P.parseManifest = async(t, e = new o.a, i) => {
      var n;
      let a = new Array;
      if (t.stack)
          for (let o = 0; o < t.stack.length; o++) {
              let l = t.stack[o];
              switch (l.type) {
                  case v.a.TYPE_IMAGE:
                  case v.a.TYPE_ELEMENT:
                      let t, o = l.rect ? new c.a(l.rect.x + e.x, l.rect.y + e.y, l.rect.w, l.rect.h, l.rect.r) : void 0;
                      if (void 0 !== l.content && i) {
                          let e = i.readFile(l.content);
                          e && (t = await s.b.blobToCanvas(new Blob([e.buffer])))
                      }
                      let d = new b.a(s.b.guid(), l.name, t, o, l.locked);
                      if (void 0 !== l.opacity && (d.settings.opacity = l.opacity), void 0 !== l.blendmode && (d.settings.blendmode = l.blendmode), void 0 !== l.locked && (d.settings.locked = l.locked), void 0 !== l.visible && (d.settings.visible = l.visible), void 0 !== l.mask && i) {
                          let t = i.readFile(l.mask);
                          t && (d.mask = await s.b.blobToCanvas(new Blob([t.buffer]))), d.render()
                      }
                      a.push(d);
                      break;
                  case v.a.TYPE_TEXT:
                      if (!l.format) continue;
                      let u = new k.a(null === (n = l.format.font) || void 0 === n ? void 0 : n.name, l.format.size);
                      void 0 !== l.format.align && (u.align = l.format.align), void 0 !== l.format.bold && (u.bold = l.format.bold), void 0 !== l.format.italic && (u.italic = l.format.italic), void 0 !== l.format.underline && (u.undeline = l.format.underline), void 0 !== l.format.uppercase && (u.uppercase = l.format.uppercase), void 0 !== l.format.linespace && (u.lineSpace = l.format.linespace), void 0 !== l.format.letterspace && (u.letterSpace = l.format.letterspace);
                      let g = new w.a(s.b.guid(), l.content, new c.a(l.rect.x + e.x, l.rect.y + e.y, l.rect.w, l.rect.h, l.rect.r), u);
                      if (void 0 !== l.opacity && (g.settings.opacity = l.opacity), void 0 !== l.blendmode && (g.settings.blendmode = l.blendmode), void 0 !== l.locked && (g.settings.locked = l.locked), u.font) {
                          let t = T.a.getFontDesc(u.font);
                          if (!t && i && l.format.font.content) {
                              let e = new Blob([i.readFile(l.format.font.content)]);
                              e && (t = await T.a.loadFontFromTemplate(e, l.format.font.name, l.format.font.content))
                          } else t && await T.a.addToDOM(t);
                          u.measureText()
                      }
                      if (l.style && (l.style.curve && (g.textSettings.curve = !0, void 0 !== l.style.curve.type && (g.textSettings.curveType = l.style.curve.type), void 0 !== l.style.curve.amount && (g.textSettings.curveAmount = l.style.curve.amount), void 0 !== l.style.curve.spread && (g.textSettings.curveSpread = l.style.curve.spread), void 0 !== l.style.curve.flip && (g.textSettings.curveFlip = l.style.curve.flip)), l.style.background && (g.textSettings.background = !0, void 0 !== l.style.background.color && (g.textSettings.backgroundColor = l.style.background.color), void 0 !== l.style.background.type && (g.textSettings.backgroundType = l.style.background.type), void 0 !== l.style.background.punch && (g.textSettings.backgroundPunch = l.style.background.punch), void 0 !== l.style.background.offset && (g.textSettings.backgroundOffset = l.style.background.offset)), l.style.outline && (g.textSettings.outline = !0, void 0 !== l.style.outline.size && (g.textSettings.outlineSize = l.style.outline.size), void 0 !== l.style.outline.color && (g.textSettings.outlineColor = l.style.outline.color), void 0 !== l.style.outline.punch && (g.textSettings.outlinePunch = l.style.outline.punch), void 0 !== l.style.outline.distance && (g.textSettings.outlineDistance = l.style.outline.distance), void 0 !== l.style.outline.direction && (g.textSettings.outlineDirection = l.style.outline.direction)), l.style.shadow && (g.textSettings.shadow = !0, void 0 !== l.style.shadow.blur && (g.textSettings.shadowBlur = l.style.shadow.blur), void 0 !== l.style.shadow.color && (g.textSettings.shadowColor = l.style.shadow.color), void 0 !== l.style.shadow.opacity && (g.textSettings.shadowAlpha = l.style.shadow.opacity), void 0 !== l.style.shadow.distance && (g.textSettings.shadowDistance = l.style.shadow.distance), void 0 !== l.style.shadow.direction && (g.textSettings.shadowDirection = l.style.shadow.direction))), void 0 !== l.format.fill) {
                          let t;
                          switch (l.format.fill.type) {
                              case "color":
                                  t = new h.a(r.a.fromHEX(l.format.fill.value));
                                  break;
                              case "gradient":
                                  t = new h.a(S.b.fromIGradient(l.format.fill.value));
                                  break;
                              case "pattern":
                                  let e = l.format.fill.value;
                                  i && (e.svg = i.readString(e.svg)), t = new h.a(await M.a.fromIPattern(e))
                          }
                          g.textSettings.fillType = t.getType(), g.textSettings.fillValue = t.getStringValue(), g.fill = t
                      }
                      await g.prepare(), a.push(g);
                      break;
                  case v.a.TYPE_SHAPE:
                      let m = new E.a;
                      if (m.variant = l.format ? l.format.variant : "svg", "svg" === m.variant) {
                          let t;
                          if (l.content && i && (t = i.readString(l.content)), !t) continue;
                          m.content = t
                      }
                      "path" === m.variant && (m.content = l.content), l.style && (l.style.outline && (void 0 !== l.style.outline.size && (m.outlineSize = l.style.outline.size), void 0 !== l.style.outline.color && (m.outlineColor = l.style.outline.color)), l.style.shadow && (m.shadow = !0, void 0 !== l.style.shadow.blur && (m.shadowBlur = l.style.shadow.blur), void 0 !== l.style.shadow.color && (m.shadowColor = l.style.shadow.color), void 0 !== l.style.shadow.opacity && (m.shadowOpacity = l.style.shadow.opacity), void 0 !== l.style.shadow.distance && (m.shadowDistance = l.style.shadow.distance), void 0 !== l.style.shadow.direction && (m.shadowDirection = l.style.shadow.direction)));
                      let p = new y.a(s.b.guid(), l.name, new c.a(l.rect.x + e.x, l.rect.y + e.y, l.rect.w, l.rect.h, l.rect.r), m);
                      if (void 0 !== l.opacity && (p.settings.opacity = l.opacity), void 0 !== l.blendmode && (p.settings.blendmode = l.blendmode), void 0 !== l.locked && (p.settings.locked = l.locked), void 0 !== l.format && void 0 !== l.format.fill) {
                          let t;
                          switch (l.format.fill.type) {
                              case "color":
                                  t = new h.a(r.a.fromHEX(l.format.fill.value));
                                  break;
                              case "gradient":
                                  t = new h.a(S.b.fromIGradient(l.format.fill.value));
                                  break;
                              case "pattern":
                                  let e = l.format.fill.value;
                                  i && (e.svg = i.readString(e.svg)), t = new h.a(await M.a.fromIPattern(e))
                          }
                          p.shapeSettings.fillType = t.getType(), p.shapeSettings.fillValue = t.getStringValue(), p.fill = t
                      }
                      await p.prepare(), a.push(p);
                      break;
                  case v.a.TYPE_FRAME:
                      let f = new x.a(s.b.guid(), l.name, new c.a(l.rect.x + e.x, l.rect.y + e.y, l.rect.w, l.rect.h, l.rect.r));
                      if (l.frame && (void 0 !== l.frame.trim && (f.trim = new c.a(l.frame.trim.x, l.frame.trim.y, l.frame.trim.w, l.frame.trim.h)), void 0 !== l.frame.clip && (f.frameSettings.clip = l.frame.clip)), l.content && i) {
                          let t = i.readFile(l.content);
                          t && (f.canvas = await s.b.blobToCanvas(new Blob([t.buffer])))
                      }
                      l.style && (l.style.outline && (f.frameSettings.outline = !0, void 0 !== l.style.outline.size && (f.frameSettings.outlineSize = l.style.outline.size), void 0 !== l.style.outline.color && (f.frameSettings.outlineColor = l.style.outline.color)), l.style.shadow && (f.frameSettings.shadow = !0, void 0 !== l.style.shadow.blur && (f.frameSettings.shadowBlur = l.style.shadow.blur), void 0 !== l.style.shadow.color && (f.frameSettings.shadowColor = l.style.shadow.color), void 0 !== l.style.shadow.opacity && (f.frameSettings.shadowOpacity = l.style.shadow.opacity), void 0 !== l.style.shadow.distance && (f.frameSettings.shadowDistance = l.style.shadow.distance), void 0 !== l.style.shadow.direction && (f.frameSettings.shadowDirection = l.style.shadow.direction))), f.prepare(), a.push(f)
              }
          }
      return a
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t = "circle", e = 40, i = .2, s = 1, n = 0, a = 1, r = 2, o = .2) {
          this.type = t, this.size = e, this.softness = i, this.opacity = s, this.angle = n, this.aspect = a, this.spikes = r, this.distance = o
      }
  }
  s.isEqual = (t, e) => !(!t || !e) && (t.type === e.type && t.size === e.size && t.softness === e.softness && t.angle === e.angle && t.aspect === e.aspect && t.spikes === e.spikes)
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return l
  }));
  var s = i(1),
      n = i(8),
      a = i(6),
      r = i(4),
      o = i(3),
      h = i(17),
      c = i(44);
  class l extends n.a {
      constructor(t = s.b.guid(), e, i, d = new c.a) {
          super(n.a.TYPE_FRAME), this.id = t, this.prepare = () => {
              this.setPath()
          }, this.calculate = (t, e, i) => {
              this.editMode && this.trim ? (this.trim.x = Math.round(t.x), this.trim.y = Math.round(t.y), this.trim.width = Math.round(e.x - t.x), this.trim.height = 0 === i ? Math.round(e.y - t.y) : Math.round(this.trim.width / (this.canvas.width / this.canvas.height)), this.trim.width < 10 && (this.trim.width = 10), this.trim.height < 10 && (this.trim.height = 10)) : (this.rect.x = Math.round(t.x), this.rect.y = Math.round(t.y), this.rect.width = Math.round(e.x - t.x), this.rect.height = 0 !== i ? Math.round(this.rect.width / i) : Math.round(e.y - t.y), this.rect.width < 10 && (this.rect.width = 10), this.rect.height < 10 && (this.rect.height = 10))
          }, this.setWidth = (t, e) => {
              this.rect && (t < 1 && (t = 1), this.editMode && this.trim ? (this.trim.width = t, 0 !== e && (this.trim.height = Math.round(this.trim.width / (this.canvas.width / this.canvas.height)))) : (this.rect.width = t, 0 !== e && (this.rect.height = this.rect.width * e)), this.render())
          }, this.setHeight = (t, e) => {
              this.rect && (t < 1 && (t = 1), this.editMode && this.trim ? (this.trim.height = t, 0 !== e && (this.trim.height = Math.round(this.trim.height / (this.canvas.height / this.canvas.width)))) : (this.rect.height = t, 0 !== e && (this.rect.width = this.rect.height / e)), this.render())
          }, this.position = (t, e) => {
              this.rect && (this.editMode ? (this.trim && (void 0 !== t && (this.trim.x = t), void 0 !== e && (this.trim.y = e)), this.render()) : (void 0 !== t && (this.rect.x = t), void 0 !== e && (this.rect.y = e), this.bect.x = this.rect.x - (this.bect.width - this.rect.width) / 2, this.bect.y = this.rect.y - (this.bect.height - this.rect.height) / 2))
          }, this.scale = (t, e) => {
              this.rect && (this.rect.x = Math.round(this.rect.x * t), this.rect.y = Math.round(this.rect.y * e), this.rect.width = Math.round(this.rect.width * t), this.rect.height = Math.round(this.rect.height * e), this.trim && (this.trim.x = Math.round(this.trim.x * t), this.trim.y = Math.round(this.trim.y * e), this.trim.width = Math.round(this.trim.width * t), this.trim.height = Math.round(this.trim.height * e)), this.render())
          }, this.rotate = t => {
              this.rect.rotation += t ? -90 : 90
          }, this.flip = t => {
              this.canvas && (this.canvas = s.b.flipCanvas(this.canvas, t), this.render())
          }, this.setPath = (t = this.frameSettings.clip, e = !1) => {
              t && (e || (this.frameSettings.clip = t), this.path2D = new Path2D(t)), this.render()
          }, this.setOutline = (t, e, i) => {
              this.frameSettings.outline = t, this.frameSettings.outlineSize = e, this.frameSettings.outlineColor = i, this.render()
          }, this.setShadow = (t, e, i, s, n, a) => {
              this.frameSettings.shadow = t, this.frameSettings.shadowBlur = e, this.frameSettings.shadowOpacity = i, this.frameSettings.shadowColor = s, this.frameSettings.shadowDistance = n, this.frameSettings.shadowDirection = a, this.render()
          }, this.setFrameSettings = t => {
              this.frameSettings = t, this.render()
          }, this.setContent = t => {
              this.canvas = t, this.fitContent()
          }, this.trimOnResize = t => {
              if (!this.trim) return;
              let e = this.rect.getComparedScale(t);
              this.trim.x = Math.round(this.trim.x * e.width), this.trim.y = Math.round(this.trim.y * e.height), this.trim.width = Math.round(this.trim.width * e.width), this.trim.height = Math.round(this.trim.height * e.height)
          }, this.fitContent = () => {
              this.canvas ? this.trim = a.a.fillFit(this.canvas.width, this.canvas.height, this.rect.width, this.rect.height) : this.trim = void 0, this.render()
          }, this.getGlobalTrim = () => {
              if (this.trim) return new a.a(this.rect.x + this.trim.x, this.rect.y + this.trim.y, this.trim.width, this.trim.height, this.rect.rotation)
          }, this.update = () => {
              if (this.bect = this.rect.clone(), this.frameSettings.shadow) {
                  let t = 100 * this.frameSettings.shadowBlur;
                  t += Math.abs(100 * this.frameSettings.shadowDistance), this.bect.width += 2 * t, this.bect.height += 2 * t, this.bect.x -= t, this.bect.y -= t
              }
          }, this.render = () => {
              this.update();
              const t = this.baked.getContext("2d");
              if (this.baked.width !== this.bect.width || this.baked.height !== this.bect.height ? (this.baked.height = this.bect.height, this.baked.width = this.bect.width) : t.clearRect(0, 0, this.baked.width, this.baked.height), this.canvas) {
                  const e = new Path2D;
                  let i = t.lineWidth = this.frameSettings.outline ? Math.round(100 * this.frameSettings.outlineSize) : 0;
                  e.addPath(this.path2D, (new DOMMatrix).scale((this.rect.width - i) / 100, (this.rect.height - i) / 100)), t.save(), t.translate(this.rect.x - this.bect.x + i / 2, this.rect.y - this.bect.y + i / 2), this.frameSettings.outline ? (t.strokeStyle = this.frameSettings.outlineColor, t.lineWidth = i, this.frameSettings.shadow && this.shadowContext(t), t.fill(e), t.stroke(e)) : this.frameSettings.shadow && (this.shadowContext(t), t.fill(e)), t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0, t.clip(e), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "high", t.drawImage(this.canvas, this.trim.x - i / 2, this.trim.y - i / 2, this.trim.width, this.trim.height), t.restore()
              } else {
                  const e = new Path2D;
                  let i = t.lineWidth = this.frameSettings.outline ? Math.round(100 * this.frameSettings.outlineSize) : 2;
                  e.addPath(this.path2D, (new DOMMatrix).scale((this.rect.width - i) / 100, (this.rect.height - i) / 100)), t.save(), t.translate(this.rect.x - this.bect.x + i / 2, this.rect.y - this.bect.y + i / 2), this.frameSettings.outline ? t.strokeStyle = this.frameSettings.outlineColor : t.strokeStyle = "#ccc", t.fillStyle = "rgba(0, 0, 0, 0.3)", this.frameSettings.shadow && this.shadowContext(t), t.fill(e), t.stroke(e), t.restore();
                  const s = new o.a(Math.round(this.bect.width / 2), Math.round(this.bect.height / 2));
                  let n = 20;
                  t.lineWidth = 8, this.rect.width > 500 && this.rect.height > 500 && (t.lineWidth = 16, n = 40), t.save(), t.strokeStyle = "rgba(255, 255, 255, 0.5)", t.beginPath(), t.moveTo(s.x - n, s.y), t.lineTo(s.x + n, s.y), t.moveTo(s.x, s.y - n), t.lineTo(s.x, s.y + n), t.closePath(), t.stroke(), t.restore()
              }
          }, this.shadowContext = t => {
              const e = r.a.fromHEX(this.frameSettings.shadowColor, Math.round(255 * this.frameSettings.shadowOpacity)).toRGBA();
              var i = (this.frameSettings.shadowDirection - 90) * Math.PI / 180,
                  s = Math.cos(i) * this.frameSettings.shadowDistance,
                  n = Math.sin(i) * this.frameSettings.shadowDistance;
              t.fillStyle = e, t.shadowColor = e, t.shadowBlur = 100 * this.frameSettings.shadowBlur, t.shadowOffsetX = 100 * s, t.shadowOffsetY = 100 * n
          }, this.replaceCanvas = t => {
              const e = this.canvas.getContext("2d");
              e.save(), e.globalCompositeOperation = "copy", e.drawImage(t, 0, 0), e.restore()
          }, this.switchCanvas = (t, e) => {
              this.canvas = t, this.trim = e.clone(), this.render()
          }, this.rasterize = () => {
              let t = this.baked ? this.baked : this.canvas,
                  e = this.bect ? this.bect.clone() : this.rect.clone();
              const i = new h.a(s.b.guid(), this.settings.name, t, e, this.settings.locked);
              return i.settings = Object.assign({}, this.settings), i.applyTransform(), i
          }, this.clone = () => {
              var t;
              let e = new l(s.b.guid(), this.settings.name + " copy", this.rect.clone(), this.frameSettings.clone());
              return e.settings = Object.assign({}, this.settings), e.trim = null === (t = this.trim) || void 0 === t ? void 0 : t.clone(), e.canvas = s.b.cloneCanvas(this.canvas), e.render(), e
          }, this.rect = i, this.settings.name = e, this.frameSettings = d, this.baked = s.b.createCanvas(i.width, i.height), this.prepare()
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t, e, i = 1) {
          this.highlight = t, this.shadow = e, this.amount = i
      }
      static fillPaletteMap(t, e) {
          for (let i = 0; i < 256; ++i) {
              let s = i / 255;
              e.data[4 * i] = Math.round(t.highlight.r * s + t.shadow.r * (1 - s)), e.data[4 * i + 1] = Math.round(t.highlight.g * s + t.shadow.g * (1 - s)), e.data[4 * i + 2] = Math.round(t.highlight.b * s + t.shadow.b * (1 - s))
          }
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return r
  }));
  var s = i(1),
      n = i(8),
      a = i(6);
  class r extends n.a {
      constructor(t = s.b.guid(), e, i, o, h = !1) {
          super(n.a.TYPE_IMAGE), this.id = t, this.calculate = (t, e, i) => {
              this.canvas && (this.rect.x = Math.round(t.x), this.rect.y = Math.round(t.y), this.rect.width = Math.round(e.x - t.x), this.rect.width < 10 && (this.rect.width = 10), 0 !== i ? this.rect.height = Math.round(this.rect.width / i) : (this.rect.height = Math.round(e.y - t.y), this.rect.height < 10 && (this.rect.height = 10)))
          }, this.scale = (t, e) => {
              this.rect && (this.rect.x = Math.round(this.rect.x * t), this.rect.y = Math.round(this.rect.y * e), this.rect.width = Math.round(this.rect.width * t), this.rect.height = Math.round(this.rect.height * e), this.applyTransform())
          }, this.wouldApplyTransform = () => !(!this.canvas || !this.rect) && (0 !== this.rect.rotation || this.rect.width !== this.canvas.width || this.rect.height !== this.canvas.height), this.applyTransform = t => {
              if (!this.wouldApplyTransform()) return !1;
              if (this.rect.width === this.canvas.width && this.rect.height === this.canvas.height || (this.canvas = s.b.resizeCanvasForQuality(this.canvas, this.rect.width, this.rect.height), this.mask && (this.mask = s.b.resizeCanvasForQuality(this.mask, this.rect.width, this.rect.height))), 0 !== this.rect.rotation) {
                  if (t) this.canvas = s.b.rotateCanvas(this.canvas, this.rect.rotation, t), this.mask && (this.mask = s.b.rotateCanvas(this.mask, this.rect.rotation, t)), this.rect = t;
                  else {
                      this.rect = this.rect.getRotatedBounds(), this.canvas = s.b.rotateCanvas(this.canvas, this.rect.rotation, this.rect), this.mask && (this.mask = s.b.rotateCanvas(this.mask, this.rect.rotation, this.rect));
                      let t = s.b.getColorBoundsRect(this.canvas);
                      t.equalTo(new a.a(0, 0, this.canvas.width, this.canvas.height)) || (this.canvas = s.b.cropCanvas(this.canvas, t), this.mask && (this.mask = s.b.cropCanvas(this.mask, t)), this.rect.width = t.width, this.rect.height = t.height, this.rect.x += t.x, this.rect.y += t.y)
                  }
                  this.rect.rotation = 0
              }
              return this.render(), !0
          }, this.switchCanvas = (t, e) => {
              this.mask && !this.rect.equalTo(e) && (this.mask = s.b.extendCanvas(this.mask, this.rect, e)), this.canvas = t, this.rect = e.clone()
          }, this.extendCanvas = t => {
              if (!this.canvas) return this.rect = t, void(this.canvas = s.b.createCanvas(t.width, t.height));
              let e = this.rect.union(t);
              this.rect.equalTo(e) || (this.canvas = s.b.extendCanvas(this.canvas, this.rect, e), this.mask && (this.mask = s.b.extendCanvas(this.mask, this.rect, e)), this.rect = e)
          }, this.hasMask = () => !!this.mask, this.addMask = (t = "clear") => {
              if (this.mask = s.b.createCanvas(this.canvas.width, this.canvas.height), "fill" === t) {
                  this.mask.getContext("2d").fillRect(0, 0, this.mask.width, this.mask.height)
              }
          }, this.invertMask = () => {
              if (this.mask) {
                  let t = s.b.createCanvas(this.mask.width, this.mask.height),
                      e = t.getContext("2d");
                  e.save(), e.fillRect(0, 0, t.width, t.height), e.globalCompositeOperation = "xor", e.drawImage(this.mask, 0, 0), e.restore(), this.mask = t
              }
          }, this.removeMask = () => {
              this.mask = void 0, this.baked = void 0
          }, this.render = () => {
              if (this.mask) {
                  if (!this.canvas) return;
                  this.baked && this.baked.width === this.canvas.width && this.baked.height === this.canvas.height || (this.baked = s.b.createCanvas(this.canvas.width, this.canvas.height));
                  var t = this.baked.getContext("2d");
                  t.save(), t.globalCompositeOperation = "copy", t.drawImage(this.canvas, 0, 0), t.globalCompositeOperation = "destination-in", t.drawImage(this.mask, 0, 0), t.restore(), t = void 0
              }
          }, this.shrinkWrap = () => {
              const t = s.b.getColorBoundsRect(this.canvas);
              if (!t) return this.canvas = void 0, this.mask = void 0, this.baked = void 0, this.rect = void 0, !0;
              if (!t.equalTo(this.rect)) {
                  const e = s.b.createCanvas(t.width, t.height);
                  return e.getContext("2d").drawImage(this.canvas, -t.x, -t.y), this.canvas = e, this.rect = t.rebase(-this.rect.x, -this.rect.y), this.mask && (this.mask = s.b.cloneCanvasRect(this.mask, t)), !0
              }
              return !1
          }, this.rasterize = () => this.clone(), this.clone = () => {
              var t;
              let e = new r(s.b.guid(), this.settings.name + " copy", s.b.cloneCanvas(this.canvas), null === (t = this.rect) || void 0 === t ? void 0 : t.clone(), !1);
              return e.settings = Object.assign({}, this.settings), e.settings.locked = !1, this.baked && (e.baked = s.b.cloneCanvas(this.baked)), this.hasMask() && (e.mask = s.b.cloneCanvas(this.mask)), e
          }, this.canvas = i, this.rect = o, this.settings.name = e, this.settings.locked = h
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return n
  }));
  var s = i(3);
  class n {
      constructor(t, e) {
          this.touchStart = t => {
              t.stopPropagation(), t.targetTouches.length > 1 || (this.isDown = !0, this.down(new s.a(t.changedTouches[0].clientX - this.stage.rasterRect.x, t.changedTouches[0].clientY - this.stage.rasterRect.y)))
          }, this.touchMove = t => {
              t.stopPropagation(), t.targetTouches.length > 1 || this.move(new s.a(t.changedTouches[0].clientX - this.stage.rasterRect.x, t.changedTouches[0].clientY - this.stage.rasterRect.y))
          }, this.touchEnd = t => {
              t.stopPropagation(), t.targetTouches.length > 1 || (this.isDown = !1, this.up(new s.a(t.changedTouches[0].clientX - this.stage.rasterRect.x, t.changedTouches[0].clientY - this.stage.rasterRect.y)))
          }, this.mouseDown = t => {
              t.stopPropagation(), this.stage.coating.override || (t.button > 0 ? t.preventDefault() : (this.isDown = !0, this.down(new s.a(t.clientX - this.stage.rasterRect.x, t.clientY - this.stage.rasterRect.y))))
          }, this.mouseMove = t => {
              t.stopPropagation(), t.buttons || !this.isDown ? this.move(new s.a(t.clientX - this.stage.rasterRect.x, t.clientY - this.stage.rasterRect.y)) : this.mouseUp(t)
          }, this.mouseUp = t => {
              t.stopPropagation(), this.isDown = !1, this.up(new s.a(t.clientX - this.stage.rasterRect.x, t.clientY - this.stage.rasterRect.y))
          }, this.dblClick = t => {
              t.stopPropagation(), this.dbl(new s.a(t.clientX - this.stage.rasterRect.x, t.clientY - this.stage.rasterRect.y))
          }, this.addMoveEventListeners = () => {
              this.stage.raster.addEventListener("touchmove", this.touchMove, {
                  passive: !1
              }), this.stage.raster.addEventListener("mousemove", this.mouseMove, !1), this.stage.raster.addEventListener("touchend", this.touchEnd, {
                  passive: !1
              }), this.stage.raster.addEventListener("mouseup", this.mouseUp, !1), this.stage.raster.addEventListener("touchleave", this.touchEnd, {
                  passive: !1
              })
          }, this.removeMoveEventListeners = () => {
              this.stage.raster.removeEventListener("touchmove", this.touchMove), this.stage.raster.removeEventListener("mousemove", this.mouseMove, !1), this.stage.raster.removeEventListener("touchend", this.touchEnd), this.stage.raster.removeEventListener("mouseup", this.mouseUp, !1), this.stage.raster.removeEventListener("touchleave", this.touchEnd)
          }, this.down = t => {}, this.move = t => {}, this.dbl = t => {}, this.up = t => {}, this.apply = () => {}, this.cancel = () => {}, this.cleanUp = () => {}, this.name = t, this.stage = e
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return a
  }));
  var s = i(0),
      n = i(1);
  class a {
      constructor(t, e) {
          this.lineSpace = 0, this.letterSpace = 0, this.align = "center", this.curve = !1, this.curveAmount = 0, this.curveType = "arc", this.curveFlip = !1, this.curveSpread = !1, this.background = !1, this.backgroundOffset = 0, this.backgroundPunch = !1, this.backgroundColor = "#555555", this.backgroundType = a.BACKGROUND_FULL, this.outline = !1, this.outlinePunch = !1, this.outlineColor = "#555555", this.outlineSize = .3, this.outlineDistance = 0, this.outlineDirection = 305, this.shadow = !1, this.shadowBlur = .3, this.shadowColor = "#444444", this.shadowAlpha = .3, this.shadowDistance = .3, this.shadowDirection = 160, this.font = t, this.size = e, this.measureText()
      }
      setSize(t) {
          this.size = t, this.measureText()
      }
      setFont(t) {
          this.font = t, this.measureText()
      }
      measureText() {
          if (this.size < 1) return;
          var t = document.createElement("canvas");
          t.width = 10 * this.size, t.height = Math.round(2 * this.size);
          var e = t.getContext("2d");
          e.textBaseline = "top", e.fillStyle = "white", e.font = this.getCssFont(), e.fillText("SfTgMjkHpqLRnliI", 0, Math.round(.5 * this.size)), e = void 0;
          const i = n.b.getColorBoundsRect(t);
          this.ascent = i.y - Math.round(.5 * this.size), this.height = i.height, this.height <= 0 && this.measureTextFallback(), this.padding = Math.round(.2 * this.height)
      }
      measureTextFallback() {
          var t = document.createElement("span");
          t.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz", t.style.fontFamily = this.font, t.style.fontSize = this.size + "px";
          var e = document.createElement("div");
          e.style.display = "inline-block", e.style.width = "1px", e.style.height = "0px";
          var i = document.createElement("div");
          i.appendChild(t), i.appendChild(e), Object(s.b)("workspace").appendChild(i);
          try {
              e.style.verticalAlign = "baseline", this.ascent = e.offsetTop - t.offsetTop + 1, e.style.verticalAlign = "bottom", this.height = e.offsetTop - t.offsetTop + 1
          } finally {
              i.remove()
          }
      }
      getLineSpacing() {
          var t;
          return Math.ceil(this.height * Number(null !== (t = this.lineSpace) && void 0 !== t ? t : 0))
      }
      getLetterSpacing() {
          var t;
          return Math.ceil(this.height / 2 * Number(null !== (t = this.letterSpace) && void 0 !== t ? t : 0))
      }
      getCssFont(t = this.size) {
          return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + t + "px " + this.font
      }
      clone() {
          const t = Object.create(a.prototype);
          return Object.assign(t, this)
      }
      equalTo(t) {
          return !!t && (this.font === t.font && this.size === t.size && this.lineSpace === t.lineSpace && this.letterSpace === t.letterSpace && this.bold === t.bold && this.italic === t.italic && this.uppercase === t.uppercase && this.fillType === t.fillType && this.fillValue === t.fillValue && this.align === t.align && this.curve === t.curve && this.curveAmount === t.curveAmount && this.curveType === t.curveType && this.curveSpread === t.curveSpread && this.curveFlip === t.curveFlip && this.background === t.background && this.backgroundPunch === t.backgroundPunch && this.backgroundColor === t.backgroundColor && this.backgroundType === t.backgroundType && this.outline === t.outline && this.outlinePunch === t.outlinePunch && this.outlineSize === t.outlineSize && this.outlineColor === t.outlineColor && this.outlineDistance === t.outlineDistance && this.outlineDirection === t.outlineDirection && this.shadow === t.shadow && this.shadowBlur === t.shadowBlur && this.shadowColor === t.shadowColor && this.shadowAlpha === t.shadowAlpha && this.shadowDistance === t.shadowDistance && this.shadowDirection === t.shadowDirection)
      }
  }
  a.BACKGROUND_FULL = "full", a.BACKGROUND_LINE = "line", a.BACKGROUND_WORD = "word"
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t = 0, e = 0) {
          this.width = t, this.height = e
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t, e, i) {
          this.color = t, this.blend = e, this.amount = i
      }
  }
}, , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return d
  }));
  var s = i(1),
      n = i(8),
      a = i(29),
      r = i(6),
      o = i(4),
      h = i(3),
      c = i(17),
      l = i(19);
  class d extends n.a {
      constructor(t = s.b.guid(), e, i, u) {
          super(n.a.TYPE_TEXT), this.id = t, this.prepare = async() => {
              this.fill || (this.fill = await a.a.fromString(this.textSettings.fillType, this.textSettings.fillValue)), this.setText()
          }, this.setText = (t = this.text) => {
              this.text = t, this.settings.name = t.substring(0, 25) + "..", this.textSettings.uppercase ? this.words = this.text.replace(/[\n]/g, " §§§ ").toUpperCase().split(" ") : this.words = this.text.replace(/[\n]/g, " §§§ ").split(" "), this.render()
          }, this.setTextSize = t => {
              this.textSettings.setSize(t), this.render()
          }, this.setLineSpace = t => {
              this.textSettings.lineSpace = t, this.render()
          }, this.setLetterSpace = t => {
              this.textSettings.letterSpace = t, this.render()
          }, this.setTextFill = (t, e = !1) => {
              this.fill = t, e || (this.textSettings.fillType = t.getType(), this.textSettings.fillValue = t.getStringValue()), this.render()
          }, this.setTextFont = (t, e = !1) => {
              this.textSettings.setFont(t), this.render(e)
          }, this.setTextUpperCase = t => {
              this.textSettings.uppercase = t, this.setText(this.text)
          }, this.setTextItalic = t => {
              this.textSettings.italic = t, this.setText(this.text)
          }, this.setTextBold = t => {
              this.textSettings.bold = t, this.setText(this.text)
          }, this.setTextAlign = t => {
              this.textSettings.align = t, this.render()
          }, this.setCurve = (t, e, i, s, n) => {
              this.textSettings.curve = t, this.textSettings.curveType = e, this.textSettings.curveAmount = i, this.textSettings.curveSpread = s, this.textSettings.curveFlip = n, this.render()
          }, this.setBackground = (t, e, i, s, n) => {
              this.textSettings.background = t, this.textSettings.backgroundType = e, this.textSettings.backgroundColor = i, this.textSettings.backgroundPunch = s, this.textSettings.backgroundOffset = n, this.render()
          }, this.setOutline = (t, e, i, s, n, a) => {
              this.textSettings.outline = t, this.textSettings.outlineSize = e, this.textSettings.outlineColor = i, this.textSettings.outlinePunch = s, this.textSettings.outlineDistance = n, this.textSettings.outlineDirection = a, this.render()
          }, this.setShadow = (t, e, i, s, n, a) => {
              this.textSettings.shadow = t, this.textSettings.shadowBlur = e, this.textSettings.shadowAlpha = i, this.textSettings.shadowColor = s, this.textSettings.shadowDistance = n, this.textSettings.shadowDirection = a, this.render()
          }, this.setTextSettings = t => {
              this.textSettings = t, this.render()
          }, this.setCanvasStyle = () => {
              var t;
              this.ctx.textBaseline = "top", this.ctx.font = this.textSettings.getCssFont(), this.ctx.strokeStyle = this.textSettings.outlineColor, this.ctx.lineWidth = Math.round(this.textSettings.outlineSize * this.textSettings.padding), this.ctx.lineJoin = "miter", this.ctx.miterLimit = 2, null === (t = this.fill) || void 0 === t || t.addToCanvas(this.ctx)
          }, this.render = (t = !1) => {
              this.speeed = t;
              let e = this.textSettings.padding;
              this.canvas || (this.canvas = document.createElement("canvas")), this.ctx = this.canvas.getContext("2d"), this.setCanvasStyle();
              const i = new h.a;
              if (this.textSettings.outline && this.textSettings.outlineDistance > 0) {
                  var s = (this.textSettings.outlineDirection - 90) * Math.PI / 180;
                  i.x = Math.cos(s) * this.textSettings.outlineDistance * e, i.y = Math.sin(s) * this.textSettings.outlineDistance * e
              }
              const n = this.textSettings.getLineSpacing();
              let a = this.textSettings.height + e + n,
                  c = this.textSettings.background ? Math.round(this.textSettings.backgroundOffset * e) : 0;
              this.textSettings.background && this.textSettings.backgroundType != l.a.BACKGROUND_FULL && (a += 2 * e);
              let d = !1,
                  u = this.splitTextIntoLines(a);
              if (this.setCanvasSize(u.length, n, a), this.setCanvasStyle(), this.textSettings.curve && "arc" === this.textSettings.curveType) {
                  if (d = !0, 0 !== this.textSettings.curveAmount) {
                      const t = this.textSettings.getLetterSpacing();
                      let e = this.ctx.measureText(" ").width,
                          [i, s] = this.calculateArcRadius();
                      d = (e + t) / ((i - this.textSettings.height / 2) * Math.PI * 2) * Math.PI * 2 < 5e-4
                  }
                  this.textSettings.curveAmount <= 0 && !d && (u = u.reverse())
              }
              for (let t = 0; t < u.length; t++) {
                  if ("" === u[t]) continue;
                  const s = this.lineWidth(u[t]);
                  this.textSettings.curve && !d ? this.drawCurveLine(u[t], e + t * a, s, c, i) : this.drawLine(u[t], e + t * a, s, c, i, d)
              }
              if (this.textSettings.shadow && !this.speeed) {
                  this.baked || (this.baked = document.createElement("canvas")), this.bect = new r.a(this.rect.x - 4 * e, this.rect.y - 4 * e, this.rect.width + 8 * e, this.rect.height + 8 * e, this.rect.rotation), this.baked.width = this.bect.width, this.baked.height = this.bect.height;
                  let t = this.baked.getContext("2d");
                  t.save();
                  s = (this.textSettings.shadowDirection - 90) * Math.PI / 180;
                  var g = Math.cos(s) * this.textSettings.shadowDistance,
                      m = Math.sin(s) * this.textSettings.shadowDistance;
                  t.shadowBlur = this.textSettings.shadowBlur * this.textSettings.padding * 2, t.shadowOffsetX = g * this.textSettings.padding * 2, t.shadowOffsetY = m * this.textSettings.padding * 2, t.shadowColor = o.a.fromHEX(this.textSettings.shadowColor, Math.round(255 * this.textSettings.shadowAlpha)).toRGBA(), t.drawImage(this.canvas, 4 * e, 4 * e), t.restore()
              } else this.resetBaked()
          }, this.resetBaked = () => {
              this.baked = void 0, this.bect = void 0
          }, this.setCanvasSize = (t, e, i) => {
              if (this.textSettings.background && this.textSettings.backgroundType != l.a.BACKGROUND_FULL ? this.rect.height = (this.textSettings.height + 3 * this.textSettings.padding) * t + e * (t - 1) - this.textSettings.padding : this.rect.height = (this.textSettings.height + this.textSettings.padding) * t + e * (t - 1) + this.textSettings.padding, this.textSettings.curve) switch (this.textSettings.curveType) {
                  case "arc":
                      let t = this.calculateArcHeight();
                      this.rect.height += t;
                      break;
                  case "circle":
                      this.rect.height = this.rect.width;
                      break;
                  case "half":
                      this.rect.height = Math.round(this.rect.width / 2)
              }
              this.canvas.width = this.rect.width, this.canvas.height = this.rect.height, this.textSettings.background && this.textSettings.backgroundType === l.a.BACKGROUND_FULL && (this.ctx.fillStyle = this.textSettings.backgroundColor, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height))
          }, this.splitTextIntoLines = t => {
              let e = "",
                  i = new Array,
                  s = this.textSettings.curve ? this.curveMaxWidth(0, t) : this.rect.width;
              for (var n = 0; n < this.words.length; n++) {
                  let a = "" != e ? e + " " + this.words[n] : this.words[n];
                  if ("§§§" === this.words[n] || this.lineWidth(a) > s && a !== this.words[n]) {
                      if (i.push(e), e = "§§§" === this.words[n] ? "" : this.words[n], this.textSettings.curve && (s = this.curveMaxWidth(i.length, t), s < 0)) return i
                  } else e = a
              }
              return i.push(e), i
          }, this.lineWidth = t => {
              let e = 0,
                  i = this.textSettings.getLineSpacing(),
                  s = this.textSettings.getLetterSpacing();
              if (this.textSettings.background && this.textSettings.backgroundType === l.a.BACKGROUND_WORD) {
                  let n = t.split(" ");
                  for (let t = 0; t < n.length; t++) e += this.measureTextWidth(n[t], s, !0) + 2 * this.textSettings.padding;
                  e += (this.textSettings.curve && "circle" === this.textSettings.curveType ? n.length : n.length - 1) * (this.textSettings.padding + i)
              } else this.textSettings.curve && "circle" === this.textSettings.curveType ? (e = this.measureTextWidth(t, s, !1), e += this.measureTextWidth(" ", s, !1)) : (e = this.measureTextWidth(t, s, !0), e += 2 * this.textSettings.padding);
              return e
          }, this.curveMaxWidth = (t, e) => {
              if ("arc" === this.textSettings.curveType) {
                  if (0 === this.textSettings.curveAmount) return this.rect.width;
                  let [t, i] = this.calculateArcRadius();
                  return this.textSettings.curveAmount < 0 && (i += -e / 4), i
              }
              if ("circle" === this.textSettings.curveType) {
                  let i = this.rect.width / 2 - this.textSettings.padding - t * e;
                  return i < e ? -1 : i * Math.PI * 2
              } {
                  let i = this.rect.width / 2 - t * e;
                  return i < e ? -1 : i * Math.PI
              }
          }, this.calculateArcHeight = () => Math.round(this.rect.width / 5 * Math.abs(this.textSettings.curveAmount)), this.calculateArcRadius = () => {
              let t = this.calculateArcHeight(),
                  e = new h.a(0, t),
                  i = new h.a(this.canvas.width / 2, 0),
                  s = new h.a(this.canvas.width, t),
                  n = (i.y - e.y) / (i.x - e.x),
                  a = (s.y - i.y) / (s.x - i.x),
                  r = -1 * ((n * a * (e.y - s.y) + a * (e.x + i.x) - n * (i.x + s.x)) / (2 * (a - n)) - (e.x + i.x) / 2) / n + (e.y + i.y) / 2;
              return [r, Math.atan2(this.rect.width / 2, r - t) * r * 2]
          }, this.drawHalfLine = (t, e, i, s, n) => {
              const a = this.textSettings.curveFlip,
                  r = this.textSettings.curveSpread,
                  o = this.textSettings.getLineSpacing(),
                  h = this.textSettings.getLetterSpacing();
              let c = !1,
                  d = this.rect.width / 2 - e,
                  u = d * Math.PI * 2;
              if (this.textSettings.background)
                  if (this.textSettings.backgroundType === l.a.BACKGROUND_LINE) {
                      let t = d - this.textSettings.height / 2;
                      t > 0 && (this.ctx.save(), this.ctx.strokeStyle = this.textSettings.backgroundColor, this.ctx.lineWidth = this.textSettings.height + 2 * this.textSettings.padding, this.ctx.beginPath(), this.ctx.ellipse(this.rect.width / 2, a ? 0 : this.rect.width / 2, t, t, 0, Math.PI, 0, a), this.ctx.stroke(), this.ctx.restore())
                  } else if (this.textSettings.backgroundType === l.a.BACKGROUND_WORD) {
                  let e = r ? -u / 4 : -i / 2,
                      s = (u / 2 - i) / t.replace(/\s/g, "").length;
                  this.ctx.save(), this.ctx.strokeStyle = this.textSettings.backgroundColor, this.ctx.lineWidth = this.textSettings.height + 2 * this.textSettings.padding;
                  let n = t.split(" ");
                  for (var g = 0; g < this.words.length; g++)
                      if (n[g] && "" !== n[g]) {
                          let t = this.measureTextWidth(n[g], h, !0) + 2 * this.textSettings.padding;
                          r && (t += s * n[g].length);
                          let i = d - this.textSettings.height / 2;
                          if (i < 0) continue;
                          let c = t / u * 360 * (Math.PI / 180),
                              l = e / u * 360 * (Math.PI / 180),
                              m = a ? 90 : 270,
                              p = m * (Math.PI / 180) + (a ? -l : l),
                              v = m * (Math.PI / 180) + (a ? -(c + l) : c + l);
                          this.ctx.beginPath(), this.ctx.arc(this.rect.width / 2, a ? 0 : this.rect.width / 2, i, p, v, a), this.ctx.stroke(), e += Math.round(t + this.textSettings.padding + o)
                      }
                  this.ctx.restore(), c = !0
              }
              if (this.ctx.save(), t.length > 0) {
                  this.ctx.translate(this.rect.width / 2, a ? 0 : this.rect.width / 2);
                  let e = a ? d - this.textSettings.height - this.textSettings.ascent : -d - this.textSettings.ascent;
                  this.ctx.textAlign = "center";
                  let l = a ? -1 : 1,
                      g = 0;
                  if (r) {
                      g = (u / 2 - i) / (c ? t.replace(/\s/g, "").length : t.length + 1) / 2, i = c ? u / 2 : u / 2 - 2 * g
                  }
                  let p = c ? 2 * h + 2 * this.textSettings.padding : 2 * this.textSettings.padding + 2 * h;
                  this.ctx.rotate((i - p) / u * Math.PI * -l), this.ctx.textAlign = "center";
                  for (var m = 0; m < t.length; m++) {
                      if (c && " " === t[m]) {
                          this.ctx.rotate((3 * this.textSettings.padding + o + h) / u * (2 * Math.PI) * l);
                          continue
                      }
                      let i = this.ctx.measureText(t[m]).width / 2;
                      this.ctx.rotate((i + g) / u * Math.PI * 2 * l), this.drawChar(t[m], 0, e + s, n), this.ctx.rotate((i + h + g) / u * Math.PI * 2 * l)
                  }
              }
              this.ctx.restore()
          }, this.drawCircleLine = (t, e, i, s, n) => {
              const a = this.textSettings.curveFlip,
                  r = this.textSettings.curveSpread,
                  o = this.textSettings.getLineSpacing(),
                  h = this.textSettings.getLetterSpacing();
              let c = !1,
                  d = this.rect.width / 2 - e,
                  u = d * Math.PI * 2;
              if (this.textSettings.background)
                  if (this.textSettings.backgroundType === l.a.BACKGROUND_LINE) {
                      let t = d - this.textSettings.height / 2;
                      t > 0 && (this.ctx.save(), this.ctx.strokeStyle = this.textSettings.backgroundColor, this.ctx.lineWidth = this.textSettings.height + 2 * this.textSettings.padding, this.ctx.beginPath(), this.ctx.ellipse(this.rect.width / 2, this.rect.width / 2, t, t, 0, 0, 2 * Math.PI), this.ctx.stroke(), this.ctx.restore())
                  } else if (this.textSettings.backgroundType === l.a.BACKGROUND_WORD) {
                  let e = r ? this.textSettings.padding / 2 + o / 2 - u / 2 : this.textSettings.padding / 2 + o / 2 - i / 2,
                      s = (u - i) / t.replace(/\s/g, "").length;
                  this.ctx.save(), this.ctx.strokeStyle = this.textSettings.backgroundColor, this.ctx.lineWidth = this.textSettings.height + 2 * this.textSettings.padding;
                  let n = t.split(" ");
                  for (var g = 0; g < this.words.length; g++)
                      if (n[g] && "" !== n[g]) {
                          let t = this.measureTextWidth(n[g], h, !0) + 2 * this.textSettings.padding;
                          r && (t += s * n[g].length);
                          let i = d - this.textSettings.height / 2;
                          if (i < 0) continue;
                          let c = t / u * 360 * (Math.PI / 180),
                              l = e / u * 360 * (Math.PI / 180),
                              m = a ? 90 : 270,
                              p = m * (Math.PI / 180) + (a ? -l : l),
                              v = m * (Math.PI / 180) + (a ? -(c + l) : c + l);
                          this.ctx.beginPath(), this.ctx.arc(this.rect.width / 2, this.rect.width / 2, i, p, v, a), this.ctx.stroke(), e += Math.round(t + this.textSettings.padding + o)
                      }
                  this.ctx.restore(), c = !0
              }
              if (this.ctx.save(), t.length > 0) {
                  this.ctx.translate(this.rect.width / 2, this.rect.width / 2);
                  let e = a ? d - this.textSettings.height - this.textSettings.ascent : -d - this.textSettings.ascent,
                      l = a ? -1 : 1,
                      g = 0;
                  if (r) {
                      g = (u - i) / (c ? t.replace(/\s/g, "").length : t.length + 1) / 2, i = c ? u : u - 2 * g
                  }
                  let p = c ? 2 * h + 3 * this.textSettings.padding + o : this.measureTextWidth(" ", h, !0);
                  this.ctx.rotate((i - p) / u * Math.PI * -l), this.ctx.textAlign = "center";
                  for (var m = 0; m < t.length; m++) {
                      if (c && " " === t[m]) {
                          this.ctx.rotate((3 * this.textSettings.padding + o + h) / u * (2 * Math.PI) * l);
                          continue
                      }
                      let i = this.ctx.measureText(t[m]).width / 2;
                      this.ctx.rotate((i + g) / u * Math.PI * 2 * l), this.drawChar(t[m], 0, e + s, n), this.ctx.rotate((i + h + g) / u * Math.PI * 2 * l)
                  }
              }
              this.ctx.restore()
          }, this.drawArcLine = (t, e, i, s, n) => {
              const a = this.textSettings.getLineSpacing(),
                  r = this.textSettings.getLetterSpacing();
              let [o, h] = this.calculateArcRadius(), c = o - e, d = c * Math.PI * 2, u = this.textSettings.curveAmount < 0, g = !1;
              if (this.textSettings.background)
                  if (this.textSettings.backgroundType === l.a.BACKGROUND_LINE) {
                      let t = c - this.textSettings.height / 2;
                      if (t > 0) {
                          let e = i / (c * Math.PI * 2) * 360 * (Math.PI / 180 / 2),
                              s = u ? this.canvas.height - o : o,
                              n = u ? 90 : 270,
                              a = n * (Math.PI / 180) - e,
                              r = n * (Math.PI / 180) + e;
                          this.ctx.save(), this.ctx.strokeStyle = this.textSettings.backgroundColor, this.ctx.lineWidth = this.textSettings.height + 2 * this.textSettings.padding, this.ctx.beginPath(), this.ctx.arc(this.rect.width / 2, s, t, a, r), this.ctx.stroke(), this.ctx.restore()
                      }
                  } else if (this.textSettings.backgroundType === l.a.BACKGROUND_WORD) {
                  let e = -i / 2;
                  this.ctx.save(), this.ctx.strokeStyle = this.textSettings.backgroundColor, this.ctx.lineWidth = this.textSettings.height + 2 * this.textSettings.padding;
                  let s = t.split(" ");
                  for (var m = 0; m < this.words.length; m++)
                      if (s[m] && "" !== s[m]) {
                          let t = this.measureTextWidth(s[m], r, !0) + 2 * this.textSettings.padding,
                              i = c - this.textSettings.height / 2;
                          if (i < 0) continue;
                          let n = c * Math.PI * 2,
                              h = t / n * 360 * (Math.PI / 180),
                              l = e / n * 360 * (Math.PI / 180),
                              d = u ? this.canvas.height - o : o,
                              g = u ? 90 : 270,
                              p = g * (Math.PI / 180) + (u ? -l : l),
                              v = g * (Math.PI / 180) + (u ? -(h + l) : h + l);
                          this.ctx.beginPath(), u ? this.ctx.arc(this.rect.width / 2, d, i, v, p) : this.ctx.arc(this.rect.width / 2, d, i, p, v), this.ctx.stroke(), e += Math.round(t + this.textSettings.padding + a)
                      }
                  this.ctx.restore(), g = !0
              }
              if (this.ctx.save(), t.length > 0) {
                  let e = u ? -1 : 1,
                      h = u ? c - this.textSettings.height - this.textSettings.ascent : -c - this.textSettings.ascent;
                  this.ctx.textAlign = "center", this.ctx.translate(this.ctx.canvas.width / 2, u ? this.canvas.height - o : o), this.ctx.rotate((i - 2 * r - 2 * this.textSettings.padding) / d * Math.PI * -e);
                  for (var p = 0; p < t.length; p++) {
                      if (g && " " === t[p]) {
                          this.ctx.rotate((3 * this.textSettings.padding + a + r) / d * (2 * Math.PI) * e);
                          continue
                      }
                      let i = this.ctx.measureText(t[p]).width;
                      i / d * Math.PI * 2 > 5e-4 ? (this.ctx.rotate(i / 2 / d * Math.PI * 2 * e), this.drawChar(t[p], 0, h + s, n), this.ctx.rotate((i / 2 + r) / d * Math.PI * 2 * e)) : (this.drawChar(t[p], i / 2, h + s, n), this.ctx.rotate((i + r) / d * Math.PI * 2 * e))
                  }
              }
              this.ctx.restore()
          }, this.drawLine = (t, e, i, s, n, a = !1) => {
              var r, o;
              let h = 0;
              const c = this.textSettings.getLetterSpacing();
              if ("center" == this.textSettings.align ? h = Math.round((this.rect.width - i) / 2) : "right" == this.textSettings.align && (h = Math.round(this.rect.width - i)), this.textSettings.background && this.textSettings.backgroundType === l.a.BACKGROUND_LINE && (this.ctx.fillStyle = this.textSettings.backgroundColor, this.ctx.fillRect(h, e - this.textSettings.padding, Math.round(i), this.textSettings.height + 2 * this.textSettings.padding), null === (r = this.fill) || void 0 === r || r.addToCanvas(this.ctx)), this.textSettings.background && this.textSettings.backgroundType === l.a.BACKGROUND_WORD) {
                  let a = this.textSettings.getLineSpacing(),
                      r = t.split(" ");
                  for (var d = 0; d < this.words.length; d++) r[d] && "" !== r[d] && (i = this.measureTextWidth(r[d], c, !0), this.ctx.fillStyle = this.textSettings.backgroundColor, this.ctx.fillRect(h, e - this.textSettings.padding, Math.round(i + 2 * this.textSettings.padding), this.textSettings.height + 2 * this.textSettings.padding), null === (o = this.fill) || void 0 === o || o.addToCanvas(this.ctx), 0 === c ? this.drawText(r[d], h + this.textSettings.padding + c, e - this.textSettings.ascent + s, n) : this.drawSpacedText(r[d], h + this.textSettings.padding + c, e - this.textSettings.ascent + s, c, n), h += Math.round(i + 3 * this.textSettings.padding + a))
              } else 0 !== c || a ? this.drawSpacedText(t, h + this.textSettings.padding + c, e - this.textSettings.ascent + s, c, n) : this.drawText(t, h + this.textSettings.padding + c, e - this.textSettings.ascent + s, n)
          }, this.drawSpacedText = (t, e, i, s, n) => {
              let a = 0,
                  r = "";
              for (; a < t.length;) r = t[a++], this.drawChar(r, e, i, n), e += this.ctx.measureText(r).width + s
          }, this.drawText = (t, e, i, s) => {
              this.textSettings.outline && 0 === s.x && 0 === s.y && !this.speeed && this.ctx.strokeText(t, e, i), !this.speeed && (this.textSettings.background && this.textSettings.backgroundPunch || this.textSettings.outline && this.textSettings.outlinePunch) && (this.ctx.globalCompositeOperation = "destination-out"), this.ctx.fillText(t, e, i), this.ctx.globalCompositeOperation = "source-over", !this.textSettings.outline || 0 === s.x && 0 === s.y || this.speeed || this.ctx.strokeText(t, e + s.x, i + s.y)
          }, this.drawChar = (t, e, i, s) => {
              this.textSettings.outline && 0 === s.x && 0 === s.y && !this.speeed && this.ctx.strokeText(t, e, i), !this.speeed && (this.textSettings.background && this.textSettings.backgroundPunch || this.textSettings.outline && this.textSettings.outlinePunch) && (this.ctx.globalCompositeOperation = "destination-out"), this.ctx.fillText(t, e, i), this.ctx.globalCompositeOperation = "source-over", !this.textSettings.outline || 0 === s.x && 0 === s.y || this.speeed || this.ctx.strokeText(t, e + s.x, i + s.y)
          }, this.measureTextWidth = (t, e, i) => {
              if (!t) return;
              let s = 0;
              if (0 !== e)
                  for (let e = 0; e < t.length; e++) s += this.ctx.measureText(t[e]).width;
              else s = this.ctx.measureText(t).width;
              return i && (s += e), s + t.length * e
          }, this.position = (t, e) => {
              this.rect && (void 0 !== t && (this.rect.x = t), void 0 !== e && (this.rect.y = e), this.bect && (this.bect.x = this.rect.x - 4 * this.textSettings.padding, this.bect.y = this.rect.y - 4 * this.textSettings.padding))
          }, this.scale = (t, e) => {
              this.textSettings.setSize(Math.round(this.textSettings.size * e)), this.rect.x = Math.round(this.rect.x * t), this.rect.y = Math.round(this.rect.y * e), this.rect.width = Math.round(this.rect.width * t), this.render()
          }, this.calculate = (t, e) => {
              this.rect.x = Math.round(t.x), this.rect.width = Math.round(e.x - t.x), this.rect.width < 20 && (this.rect.width = 20), this.render()
          }, this.setWidth = t => {
              this.rect.width = Math.round(t), this.rect.width < 20 && (this.rect.width = 20), this.render()
          }, this.getHeight = () => this.textSettings.height, this.setHeightScale = t => {
              let e = Math.round(this.textSettings.size * t);
              this.setTextSize(e)
          }, this.rotate = t => {
              this.rect.rotation += t ? -90 : 90
          }, this.rasterize = () => {
              let t = this.baked ? this.baked : this.canvas,
                  e = this.bect ? this.bect.clone() : this.rect.clone();
              const i = new c.a(s.b.guid(), this.settings.name, t, e, this.settings.locked);
              return i.settings = Object.assign({}, this.settings), i.applyTransform(), i
          }, this.clone = () => {
              let t = new d(s.b.guid(), this.text, this.rect.clone(), this.textSettings.clone());
              return t.settings = Object.assign({}, this.settings), t.rect = this.rect.clone(), t.canvas = s.b.cloneCanvas(this.canvas), t.prepare(), t
          }, this.textSettings = u, this.text = e, this.rect = i
      }
      drawCurveLine(t, e, i, s, n) {
          switch (this.textSettings.curveType) {
              case "arc":
                  this.drawArcLine(t, e, i, s, n);
                  break;
              case "circle":
                  this.drawCircleLine(t, e, i, s, n);
                  break;
              case "half":
                  this.drawHalfLine(t, e, i, s, n)
          }
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return h
  }));
  var s = i(2),
      n = i(1),
      a = i(0),
      r = i(3),
      o = i(5);
  class h {
      constructor(t, e = !0, i = !0) {
          this.setContent = (...t) => {
              t[0] instanceof HTMLElement ? this.content.append(...t) : this.content.innerHTML += t[0], this.position()
          }, this.disableApply = () => {
              const t = Object(a.b)("dialog-apply" + this.mid);
              t.classList.add("disabled"), t.onclick = void 0
          }, this.enableApply = () => {
              const t = Object(a.b)("dialog-apply" + this.mid);
              t.classList.remove("disabled"), t.onclick = () => this.apply()
          }, this.position = () => {
              this.dialog.style.left = Math.round((this.modal.offsetWidth - this.dialog.offsetWidth) / 2 + o.a.dialogPos.x) + "px", this.dialog.style.top = Math.round((this.modal.offsetHeight - this.dialog.offsetHeight) / 2 + o.a.dialogPos.y) + "px";
              let t = this.dialog.getBoundingClientRect(),
                  e = this.modal.getBoundingClientRect();
              t.bottom > e.bottom && (this.dialog.style.top = e.height - t.height < 0 ? "0px" : e.height - t.height + "px"), t.right > e.right && (this.dialog.style.left = e.width - t.width < 0 ? "0px" : e.width - t.width + "px"), this.dialog.offsetTop < 0 && (this.dialog.style.top = "0px"), this.dialog.offsetLeft < 0 && (this.dialog.style.left = "0px")
          }, this.dragStart = t => {
              t.stopPropagation(), this.p = new r.a(t.clientX, t.clientY), this.d = new r.a(this.dialog.offsetLeft, this.dialog.offsetTop), document.addEventListener("mousemove", this.dragMove, !0), document.addEventListener("mouseup", this.dragEnd, !0)
          }, this.dragMove = t => {
              t.stopPropagation(), this.dialog.style.left = Math.round(this.d.x + (t.clientX - this.p.x)) + "px", this.dialog.style.top = Math.round(this.d.y + (t.clientY - this.p.y)) + "px"
          }, this.dragEnd = t => {
              t.stopPropagation(), this.p = void 0, o.a.dialogPos.x = Math.round(this.dialog.offsetLeft - (this.modal.offsetWidth - this.dialog.offsetWidth) / 2), o.a.dialogPos.y = Math.round(this.dialog.offsetTop - (this.modal.offsetHeight - this.dialog.offsetHeight) / 2), document.removeEventListener("mousemove", this.dragMove, !0), document.removeEventListener("mouseup", this.dragEnd, !0)
          }, this.keyDown = t => {
              27 != t.keyCode || "none" === Object(a.b)("dialog-cancel" + this.mid).style.display ? 13 != t.keyCode || "none" === Object(a.b)("dialog-apply" + this.mid).style.display || this.apply() : this.cancel()
          }, this.condition = () => {
              this.cleanUp()
          }, this.cancel = () => {
              this.cleanUp()
          }, this.apply = () => {
              this.cleanUp()
          }, this.cleanUp = () => {
              document.removeEventListener("keydown", this.keyDown, !1), this.dialog.remove(), this.dialog = null, this.modal.remove(), this.modal = null
          }, this.mid = n.b.sguid(), this.modal = Object(a.a)("div", {
              id: "modal-" + this.mid,
              className: "modal"
          }), e && this.modal.classList.add("dim"), document.body.appendChild(this.modal), this.dialog = Object(a.a)("div", {
              className: "dialog"
          }), i ? this.modal.appendChild(this.dialog) : document.body.appendChild(this.dialog), this.content = Object(a.a)("div", {
              className: "content"
          }), this.dialog.append(Object(a.a)("div", {
              id: "dialog-headline",
              className: "headline",
              onmousedown: t => this.dragStart(t)
          }, t), Object(a.a)("img", {
              id: "dialog-close" + this.mid,
              className: "close",
              src: "/img/icon/close.svg",
              onclick: () => this.cancel()
          }), Object(a.a)("div", {
              id: "dialog-splitter",
              className: "splitter"
          }), this.content, Object(a.a)("div", {
              className: "buttons",
              id: "dialog-buttons" + this.mid
          }, Object(a.a)("a", {
              id: "dialog-apply" + this.mid,
              className: "button positive",
              onclick: () => this.apply()
          }, Object(s.a)("apply")), Object(a.a)("a", {
              id: "dialog-cancel" + this.mid,
              className: "button negative",
              onclick: () => this.cancel()
          }, Object(s.a)("cancel")))), document.addEventListener("keydown", this.keyDown, !1)
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return n
  }));
  var s = i(1);
  async function n() {
      try {
          return await o.open()
      } catch (t) {
          return Promise.resolve(new l)
      }
  }
  class a {
      constructor(t) {
          this.next = () => this.queue.pop(), this.queue = [new s.a];
          let e = this.queue[0];
          t.onsuccess = () => {
              const i = t.result;
              i ? (e.resolve({
                  done: !1,
                  value: i.value
              }), e = new s.a, this.queue.unshift(e), i.continue()) : e.resolve({
                  done: !0,
                  value: void 0
              })
          }, t.onerror = () => {
              e.reject(t.error)
          }
      }[Symbol.asyncIterator]() {
          return this
      }
  }
  class r {
      constructor(t) {
          this.inner = t
      }
      static bound(t, e, i = !1, s = !1) {
          return new r(IDBKeyRange.bound(t, e, i, s))
      }
      static lowerBound(t, e) {
          return new r(IDBKeyRange.lowerBound(t, e))
      }
      static upperBound(t, e) {
          return new r(IDBKeyRange.upperBound(t, e))
      }
      static only(t) {
          return new r(IDBKeyRange.only(t))
      }
      static unwrap(t) {
          return t instanceof r ? t.inner : t
      }
  }
  class o {
      constructor(t) {
          this.underlying = t
      }
      static availiable() {
          return !navigator.userAgent.includes("Edge") && !!window.indexedDB
      }
      transaction(t, ...e) {
          const i = this.underlying.transaction(e, t);
          return e.map((t => new h(i.objectStore(t))))
      }
  }
  o.open = async() => o.availiable() ? new Promise(((t, e) => {
      const i = window.indexedDB.open("pixlr", 2);
      i.onupgradeneeded = t => {
          const e = i.result;
          0 === t.oldVersion ? (e.createObjectStore("blobs"), e.createObjectStore("fonts"), e.createObjectStore("document-meta", {
              keyPath: "id"
          }), e.createObjectStore("document-selection"), e.createObjectStore("document-thumbnail"), e.createObjectStore("layer-meta", {
              keyPath: "id"
          }).createIndex("document", "document"), e.createObjectStore("layer-mask"), e.createObjectStore("layer-bitmap")) : e.deleteObjectStore("history")
      }, i.onerror = t => e(i.error), i.onsuccess = () => t(new o(i.result))
  })) : Promise.reject(new Error("Browser does not support indexedDB"));
  class h {
      constructor(t) {
          this.underlying = t
      }
      get(t) {
          return new Promise(((e, i) => {
              const s = this.underlying.get(t);
              s.onsuccess = () => e(s.result), s.onerror = () => i(s.error)
          }))
      }
      getAll(t, e) {
          return new Promise(((i, s) => {
              const n = this.underlying.getAll(r.unwrap(t), e);
              n.onsuccess = () => i(n.result), n.onerror = () => s(n.error)
          }))
      }
      iterate(t, e) {
          const i = this.underlying.openCursor(r.unwrap(t), e);
          return new a(i)
      }
      index(t) {
          const e = this.underlying.index(t);
          return new c(e)
      }
      cursor(t, e, i) {
          return new Promise(((s, n) => {
              const a = this.underlying.openCursor(r.unwrap(e), i);
              a.onsuccess = () => {
                  const e = a.result;
                  if (e) {
                      const i = t(e.value, e);
                      "number" == typeof i ? e.advance(i) : !1 !== i ? e.continue() : s()
                  } else s()
              }, a.onerror = () => n(a.error)
          }))
      }
      put(t, e) {
          return new Promise(((i, s) => {
              const n = this.underlying.put(t, e);
              n.onsuccess = () => {
                  i()
              }, n.onerror = () => {
                  s(n.error)
              }
          }))
      }
      add(t, e) {
          return new Promise(((i, s) => {
              const n = this.underlying.add(t, e);
              n.onsuccess = () => {
                  i()
              }, n.onerror = () => {
                  s(n.error)
              }
          }))
      }
      clear() {
          return new Promise(((t, e) => {
              let i = this.underlying.clear();
              i.onsuccess = () => t(), i.onerror = () => e(i.error)
          }))
      }
      count(t) {
          return new Promise(((e, i) => {
              let s;
              s = void 0 === t ? this.underlying.count() : this.underlying.count(r.unwrap(t)), s.onsuccess = () => e(s.result), s.onerror = () => i(s.error)
          }))
      }
      delete(t) {
          return new Promise(((e, i) => {
              const s = this.underlying.delete(r.unwrap(t));
              s.onsuccess = () => e(), s.onerror = () => i(s.error)
          }))
      }
  }
  class c {
      constructor(t) {
          this.underlying = t, this.name = t.name, this.keyPath = t.keyPath, this.multiEntry = t.multiEntry, this.unique = t.unique
      }
      get(t) {
          return new Promise(((e, i) => {
              const s = this.underlying.get(t);
              s.onsuccess = () => e(s.result), s.onerror = () => i(s.error)
          }))
      }
      getAll(t, e) {
          return new Promise(((i, s) => {
              const n = this.underlying.getAll(r.unwrap(t), e);
              n.onsuccess = () => i(n.result), n.onerror = () => s(n.error)
          }))
      }
      count(t) {
          return new Promise(((e, i) => {
              let s;
              s = void 0 === t ? this.underlying.count() : this.underlying.count(r.unwrap(t)), s.onsuccess = () => e(s.result), s.onerror = () => i(s.error)
          }))
      }
      cursor(t, e, i) {
          return new Promise(((s, n) => {
              const a = this.underlying.openCursor(r.unwrap(e), i);
              a.onsuccess = () => {
                  const e = a.result;
                  e ? (t(e.value, e), e.continue()) : s()
              }, a.onerror = () => n(a.error)
          }))
      }
      iterate(t, e) {
          const i = this.underlying.openCursor(r.unwrap(t), e);
          return new a(i)
      }
      getAllKeys(t, e) {
          return new Promise(((i, s) => {
              const n = this.underlying.getAllKeys(r.unwrap(t), e);
              n.onsuccess = () => i(n.result), n.onerror = () => s(n.error)
          }))
      }
  }
  class l {
      transaction(t, ...e) {
          return e.map((t => new d(t)))
      }
  }
  class d {
      constructor(t) {
          this.name = t
      }
      index(t) {
          return this
      }
      put(t, e) {}
      add(t, e) {}
      clear() {}
      delete(t) {}
      async get(t) {}
      async getAll(t, e) {
          return []
      }
      async count(t) {
          return 0
      }
      async cursor(t, e, i) {}
      iterate(t, e) {
          return {
              next: () => Promise.resolve({
                  done: !0,
                  value: void 0
              }),
              [Symbol.asyncIterator]() {
                  return this
              }
          }
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return n
  }));
  var s = i(6);
  class n {
      static roundRect(t, e, i, s, n, a = 0) {
          const r = Math.min(s / 2, n / 2, a);
          t.beginPath(), t.moveTo(e + r, i), t.lineTo(e + s - r, i), t.quadraticCurveTo(e + s, i, e + s, i + r), t.lineTo(e + s, i + n - r), t.quadraticCurveTo(e + s, i + n, e + s - r, i + n), t.lineTo(e + r, i + n), t.quadraticCurveTo(e, i + n, e, i + n - r), t.lineTo(e, i + r), t.quadraticCurveTo(e, i, e + r, i), t.closePath()
      }
  }
  n.ellipse = (t, e, i) => {
      let s = .5 * (i.x - e.x),
          n = .5 * (i.y - e.y),
          a = e.x + s,
          r = e.y + n,
          o = .01,
          h = o,
          c = 2 * Math.PI - o;
      for (t.beginPath(), t.moveTo(a + s * Math.cos(0), r + n * Math.sin(0)); h < c; h += o) t.lineTo(a + s * Math.cos(h), r + n * Math.sin(h));
      t.closePath()
  }, n.triangle = (t, e, i) => {
      t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineTo(e.x - (i.x - e.x), i.y), t.lineTo(e.x, e.y), t.closePath()
  }, n.star = (t, e, i) => {
      let s = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2));
      t.beginPath(), t.translate(e.x, e.y), t.moveTo(0, 0 - s);
      for (var n = 0; n < 5; n++) t.rotate(Math.PI / 5), t.lineTo(0, 0 - .5 * s), t.rotate(Math.PI / 5), t.lineTo(0, 0 - s);
      t.translate(-e.x, -e.y)
  }, n.heart = (t, e, i) => {
      let s = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
          n = .8 * s;
      t.save(), t.translate(e.x, e.y - s / 2), t.rotate(45 * Math.PI / 180), t.beginPath(), t.moveTo(0, 0), t.bezierCurveTo(-n, 0, -n, s, 0, s), t.lineTo(s, s), t.lineTo(s, 0), t.bezierCurveTo(s, -n, 0, -n, 0, 0), t.closePath(), t.restore()
  }, n.rectangle = (t, e, i, s, n) => {
      t.beginPath(), t.moveTo(e, i), t.lineTo(e + s, i), t.lineTo(e + s, i + n), t.lineTo(e, i + n), t.lineTo(e, i), t.closePath()
  }, n.line = (t, e, i) => {
      t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y)
  }, n.bezier = (t, e, i, s) => {
      t.beginPath(), t.moveTo(e.x, e.y), t.quadraticCurveTo(s.x, s.y, i.x, i.y)
  }, n.arc = (t, e, i) => {
      t.beginPath(), t.arc(e.x, e.y, i, 0, 2 * Math.PI)
  }, n.fill = (t, e, i, a, r) => {
      switch (e) {
          case "rectangle":
              t.fillRect(i.x, i.y, a.x - i.x, a.y - i.y);
              break;
          case "rounded":
              const e = s.a.fromPoints([i, a]);
              n.roundRect(t, e.x, e.y, e.width, e.height, r), t.fill();
              break;
          case "ellipse":
              n.ellipse(t, i, a), t.fill();
              break;
          case "triangle":
              n.triangle(t, i, a), t.fill();
              break;
          case "star":
              n.star(t, i, a), t.fill();
              break;
          case "heart":
              n.heart(t, i, a), t.fill();
              break;
          case "line":
              n.line(t, i, a), t.stroke()
      }
  }, n.stroke = (t, e, i, a, r) => {
      switch (e) {
          case "rectangle":
              t.strokeRect(i.x, i.y, a.x - i.x, a.y - i.y);
              break;
          case "rounded":
              const e = s.a.fromPoints([i, a]);
              n.roundRect(t, e.x, e.y, e.width, e.height, r), t.stroke();
              break;
          case "ellipse":
              n.ellipse(t, i, a), t.stroke();
              break;
          case "triangle":
              n.triangle(t, i, a), t.stroke();
              break;
          case "star":
              n.star(t, i, a), t.stroke();
              break;
          case "heart":
              n.heart(t, i, a), t.stroke();
              break;
          case "line":
              n.line(t, i, a), t.stroke()
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return h
  }));
  var s = i(1),
      n = i(8),
      a = i(6),
      r = i(3),
      o = i(17);
  class h extends n.a {
      constructor(t = s.b.guid(), e, i, c, l, d = 1, u = "", g = h.SCALE_METHOD_NONE) {
          super(n.a.TYPE_ELEMENT), this.id = t, this.replace = (t, e, i, s = 1, n = "", a = h.SCALE_METHOD_NONE) => {
              this.url = i, this.scalemethod = a, this.settings.name = t, this.settings.opacity = s, this.settings.blendmode = n, this.canvas = e
          }, this.rotateAndFit = (t, e) => {
              !this.settings.locked || this.variant !== h.VARIANT_BORDER && this.variant !== h.VARIANT_OVERLAY ? this.rect.rotation += t ? -90 : 90 : (this.rotate(t), this.calculate(new r.a(0, 0), new r.a(e.width, e.height), 0))
          }, this.calculate = (t, e, i) => {
              this.rect.x = Math.round(t.x), this.rect.y = Math.round(t.y), this.rect.width = Math.round(e.x - t.x), this.rect.width < 10 && (this.rect.width = 10), 0 !== i ? this.rect.height = Math.round(this.rect.width / i) : (this.rect.height = Math.round(e.y - t.y), this.rect.height < 10 && (this.rect.height = 10))
          }, this.rasterize = () => {
              const t = new o.a(s.b.guid(), this.settings.name, s.b.cloneCanvas(this.canvas), this.rect.clone(), this.settings.locked);
              return t.settings = Object.assign({}, this.settings), t.applyTransform(), t
          }, this.clone = () => {
              let t = new h(s.b.guid(), this.settings.name, s.b.cloneCanvas(this.canvas), this.url, this.variant, this.settings.opacity, this.settings.blendmode, this.scalemethod);
              return t.settings = Object.assign({}, this.settings), t.rect = this.rect.clone(), t
          }, this.url = c, this.canvas = i, this.variant = l, this.scalemethod = g, this.settings.name = e, this.settings.opacity = d, this.settings.blendmode = u, this.rect = new a.a(0, 0, i.width, i.height)
      }
  }
  h.VARIANT_OVERLAY = "overlay", h.VARIANT_STICKER = "sticker", h.VARIANT_BORDER = "border", h.VARIANT_SHAPE = "shape", h.SCALE_METHOD_STRETCH = "stretch", h.SCALE_METHOD_FILL = "fill", h.SCALE_METHOD_NONE = "none"
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return d
  }));
  var s = i(37);
  class n {
      constructor(t) {
          this.id = t, this.texture = null
      }
      createTexture(t, e, i) {
          this.texture = t.createTexture(), this.width = e, this.height = i
      }
      uploadData(t, e, i = t.NEAREST) {
          t.bindTexture(t.TEXTURE_2D, this.texture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 4), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, i), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e)
      }
      setTexture(t) {
          this.texture = t
      }
      destroy(t) {
          t.deleteTexture(this.texture)
      }
  }
  class a {
      constructor(t, e, i) {
          this.uniform = {}, this.attribute = {}, this.texture = new Map, this.program = t.createProgram(), t.attachShader(this.program, this.compile(t, e, t.VERTEX_SHADER)), t.attachShader(this.program, this.compile(t, i, t.FRAGMENT_SHADER)), t.linkProgram(this.program), t.useProgram(this.program), t.getProgramParameter(this.program, t.LINK_STATUS) || console.log(t.getProgramInfoLog(this.program));
          const s = this.collect(e, "attribute");
          for (const [e, i] of s) this.attribute[e] = t.getAttribLocation(this.program, e);
          let a = [];
          const r = this.collect(e, "uniform");
          for (const [e, i] of r) this.uniform[e] = t.getUniformLocation(this.program, e);
          const o = this.collect(i, "uniform");
          for (const [e, i] of o) this.uniform[e] = t.getUniformLocation(this.program, e), "sampler2D" === i && a.push(e);
          for (var h in a) {
              let e = a[h],
                  i = t.getUniformLocation(this.program, e);
              "texture" === e ? (t.uniform1i(i, 0), this.texture.set(0, new n(e))) : (t.uniform1i(i, 1), this.texture.set(1, new n(e)))
          }
      }
      collect(t, e) {
          const i = [],
              s = new RegExp("\\b" + e + " (\\w+) (\\w+)", "ig");
          return t.replace(s, (function(t, e, s) {
              return i.push([s, e]), t
          })), i
      }
      compile(t, e, i) {
          var s = t.createShader(i);
          return t.shaderSource(s, e), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (console.log(t.getShaderInfoLog(s)), console.log(e), null)
      }
      getTextureById(t) {
          let e = null;
          return this.texture.forEach((function(i) {
              i.id !== t || (e = i)
          })), e || (console.error("Having no texture that is named `%s`.", t), null)
      }
      destroy(t) {
          t.deleteProgram(this.program), this.texture.forEach((function(e) {
              e.destroy(t)
          })), this.texture.clear()
      }
  }
  class r {
      constructor(t, e, i) {
          this.framebuffer = t, this.renderbuffer = e, this.texture = i
      }
      destroy(t) {
          t.deleteFramebuffer(this.framebuffer), t.deleteRenderbuffer(this.renderbuffer), t.deleteTexture(this.texture)
      }
  }
  var o = i(21),
      h = i(16),
      c = i(12),
      l = i(10);
  class d {
      constructor(t) {
          this.drawShader = 0, this.sourceTexture = null, this.lastInChain = !1, this.currentFramebufferIndex = 0, this.tempFramebuffers = {}, this.width = -1, this.height = -1, this.vertexBuffer = null, this.lastTextureSlot = -1, this.debug = !1, this.addPreset = (t, e = 1) => {
              const i = s.b.named(t);
              i && (1 !== e ? i.forEach((t => {
                  switch (t.name) {
                      case "curves":
                          {
                              const i = t.value,
                                  s = l.a.createCurveSet(i);
                              s.percent = e,
                              this.addShader(t.name, s);
                              break
                          }
                      case "levels":
                          {
                              const i = t.value,
                                  s = new c.a(Math.round(i.minin * e), Math.round(255 - (255 - i.maxin) * e));
                              this.addShader(t.name, s);
                              break
                          }
                      case "toning":
                          {
                              const i = t.value,
                                  s = new h.a(i.highlight, i.shadow, i.amount * e);
                              this.addShader(t.name, s);
                              break
                          }
                      case "fill":
                          {
                              const i = t.value,
                                  s = new o.a(i.color, i.blend, i.amount * e);
                              this.addShader(t.name, s);
                              break
                          }
                      default:
                          this.addShader(t.name, t.value * e)
                  }
              })) : i.forEach((t => this.addShader(t.name, t.value))))
          }, this.cleanUp = () => {
              this.sourceTexture = null, this.canvas = null, this.ctx = null
          }, this.VERTEX_IDENTITY = "\n        precision highp float;\n        attribute vec2 apos;\n        attribute vec2 auv;\n        varying vec2 uv;\n        uniform vec4 transform;\n\n        void main(void) {\n            uv = auv;\n            gl_Position = vec4(apos.x * transform.x + transform.z, apos.y * transform.y + transform.w, 0.0, 1.0);\n        }", this.FRAGMENT_IDENTITY = "\n        precision highp float;\n        varying vec2 uv;\n        uniform sampler2D texture;\n\n        void main(void) {\n            gl_FragColor = texture2D(texture, uv);\n        }", this.GAUSSKERN_MAX = 15, this.chain = t || [], this.compiledProgram = new Map, this.canvas = document.createElement("canvas"), this.canvas.id = "shaders-temp", this.initContext(), this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1)
      }
      initContext() {
          this.ctx = this.canvas.getContext("webgl", {
              alpha: !0,
              premultipliedAlpha: !1,
              depth: !1,
              stencil: !1,
              antialias: !1
          })
      }
      handleContextLost() {
          null == this.canvas && (this.canvas = document.createElement("canvas")), this.initContext()
      }
      getError() {
          this.debug && this.ctx.getError()
      }
      addShader(t, e) {
          if ("fill" == t && 0 == e.amount || "toning" == t && 0 == e.amount || "levels" == t && e.isFlat() || null == e || 0 === e) this.removeShader(t);
          else {
              for (var i = 0; i < this.chain.length; i++)
                  if (this.chain[i].type == t) return void(this.chain[i].value = e);
              this.chain.push(new u(t, e))
          }
      }
      getShaderValue(t) {
          for (var e = 0; e < this.chain.length; e++)
              if (this.chain[e].type == t) return this.chain[e].value
      }
      removeShader(t) {
          for (var e = 0; e < this.chain.length; e++)
              if (this.chain[e].type == t) return void this.chain.splice(e, 1)
      }
      runShader(t, e) {
          switch (t) {
              case "vibrance":
                  return this.vibrance(e);
              case "saturation":
                  return this.saturation(e);
              case "brightness":
                  return this.brightness(e);
              case "lightness":
                  return this.lightness(e);
              case "temperature":
                  return this.temperature(e);
              case "balance":
                  return this.balance(e);
              case "tint":
                  return this.tint(e);
              case "hue":
                  return this.hue(e);
              case "colorize":
                  return this.colorize(e);
              case "grain":
                  return this.grain(e);
              case "noise":
                  return this.noise(e);
              case "vignette":
                  return this.vignette(e);
              case "sharpen":
                  return this.sharpen(e);
              case "blur":
                  return this.blur(e);
              case "zoom":
                  return this.zoom(e);
              case "gaussian":
                  return this.gaussian(e);
              case "smooth":
                  return this.smooth(e);
              case "denoise":
                  return this.denoise(e);
              case "contrast":
                  return this.contrast(e);
              case "desaturate":
                  return this.desaturate();
              case "invert":
                  return this.invert();
              case "exposure":
                  return this.exposure(e);
              case "highlight":
                  return this.highlight(e);
              case "shadows":
                  return this.shadows(e);
              case "dehaze":
                  return this.dehaze(e);
              case "curves":
                  return this.curves(e);
              case "toning":
                  return this.toning(e);
              case "lookup":
                  return this.lookup(e);
              case "fill":
                  return this.fill(e);
              case "levels":
                  return this.levels(e);
              case "multilevels":
                  return this.multilevels(e);
              case "threshold":
                  return this.threshold(e);
              case "bloom":
                  return this.bloom(e);
              case "glamour":
                  return this.glamour(e);
              case "posterize":
                  return this.posterize(e);
              case "fringe":
                  return this.fringe(e);
              case "pixelate":
                  return this.pixelate(e);
              case "clarity":
                  return this.clarity(e);
              case "mosaic":
                  return this.mosaic(e);
              case "polarcoordinates":
                  return this.polarcoordinates(e);
              case "scanlines":
                  return this.scanlines(e);
              case "dealiasing":
                  return this.dealiasing();
              case "alpha-invert":
                  return this.alphaInvert();
              case "alpha-mask":
                  return this.alphaMask();
              case "alpha-shift-mask":
                  return this.alphaShiftMask();
              case "outer-glow":
                  return this.outerGlow(e);
              case "inner-glow":
                  return this.innerGlow(e);
              case "sobel":
                  return this.sobel();
              case "halftone":
                  return this.halftone(e);
              case "stroke":
                  return this.stroke(e);
              case "bevel":
                  return this.bevel(e);
              case "rgb-split":
                  return this.rgbSplit(e);
              case "slice":
                  return this.slice(e);
              case "bleed":
                  return this.bleed(e);
              case "interference":
                  return this.interference(e);
              default:
                  return console.error("We don't have this type shader, " + t)
          }
      }
      reset() {
          this.chain = [], this.compiledProgram.forEach((function(t) {
              t.destroy(this.ctx)
          }), this), this.compiledProgram.clear(), this.sourceTexture && (this.activeSourceTexture = void 0, this.sourceTexture.destroy(this.ctx), this.sourceTexture = null);
          for (let t in this.tempFramebuffers) {
              this.tempFramebuffers[t].destroy(this.ctx)
          }
          this.tempFramebuffers = {}
      }
      apply(t, e = !1) {
          if (0 == this.chain.length) return t;
          this.resize(t.width, t.height), this.drawShader = 0, this.sourceTexture && this.width == t.width && this.height == t.height || (this.sourceTexture && (this.sourceTexture.destroy(this.ctx), this.sourceTexture = null), this.sourceTexture = new n("texture"), this.sourceTexture.createTexture(this.ctx, t.width, t.height)), (t !== this.activeSourceTexture || e) && (this.sourceTexture.uploadData(this.ctx, t), this.activeSourceTexture = t);
          for (var i = 0; i < this.chain.length; i++) this.lastInChain = i == this.chain.length - 1, this.runShader(this.chain[i].type, this.chain[i].value);
          return this.currentFramebufferIndex = 0, this.canvas
      }
      resize(t, e) {
          if (t != this.width || e != this.height) {
              if (this.canvas.width = this.width = t, this.canvas.height = this.height = e, !this.vertexBuffer) {
                  var i = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]);
                  this.vertexBuffer = this.ctx.createBuffer(), this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.vertexBuffer), this.ctx.bufferData(this.ctx.ARRAY_BUFFER, i, this.ctx.STATIC_DRAW)
              }
              this.ctx.viewport(0, 0, this.width, this.height);
              for (let t in this.tempFramebuffers) {
                  this.tempFramebuffers[t].destroy(this.ctx)
              }
              this.tempFramebuffers = {}
          }
      }
      getTempFramebuffer(t) {
          return this.tempFramebuffers[t] = this.tempFramebuffers[t] || this.createFramebufferTexture(this.width, this.height), this.tempFramebuffers[t]
      }
      createFramebufferTexture(t, e) {
          let i = this.ctx.createFramebuffer();
          this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, i);
          let s = this.ctx.createRenderbuffer();
          this.ctx.bindRenderbuffer(this.ctx.RENDERBUFFER, s), this.ctx.renderbufferStorage(this.ctx.RENDERBUFFER, this.ctx.DEPTH_COMPONENT16, t, e);
          let n = this.ctx.createTexture();
          return this.ctx.bindTexture(this.ctx.TEXTURE_2D, n), this.ctx.texImage2D(this.ctx.TEXTURE_2D, 0, this.ctx.RGBA, t, e, 0, this.ctx.RGBA, this.ctx.UNSIGNED_BYTE, null), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MAG_FILTER, this.ctx.NEAREST), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MIN_FILTER, this.ctx.NEAREST), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.CLAMP_TO_EDGE), this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.CLAMP_TO_EDGE), this.ctx.framebufferTexture2D(this.ctx.FRAMEBUFFER, this.ctx.COLOR_ATTACHMENT0, this.ctx.TEXTURE_2D, n, 0), this.ctx.framebufferRenderbuffer(this.ctx.FRAMEBUFFER, this.ctx.DEPTH_ATTACHMENT, this.ctx.RENDERBUFFER, s), this.ctx.bindTexture(this.ctx.TEXTURE_2D, null), this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, null), new r(i, s, n)
      }
      draw(t, e = !1) {
          if ((this.chain.length <= 1 || this.lastInChain) && !e) this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, null);
          else {
              let t = this.getTempFramebuffer(this.currentFramebufferIndex);
              this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, t.framebuffer)
          }
          this.ctx.uniform4f(t.uniform.transform, 1, 1, 0, 0), this.ctx.clear(this.ctx.COLOR_BUFFER_BIT), this.ctx.clearColor(0, 0, 0, 0), this.setTexture(t.texture), this.ctx.drawArrays(this.ctx.TRIANGLES, 0, 6), this.drawShader++, this.currentFramebufferIndex ^= 1, this.getError()
      }
      setTexture(t) {
          let e = -1;
          t.forEach((function(t, i) {
              if (this.ctx.activeTexture(this.ctx.TEXTURE0 + i), 0 === i && 0 === this.drawShader) this.ctx.bindTexture(this.ctx.TEXTURE_2D, this.sourceTexture.texture);
              else if (0 === i) {
                  let t = 1 ^ this.currentFramebufferIndex,
                      e = this.getTempFramebuffer(t);
                  this.ctx.bindTexture(this.ctx.TEXTURE_2D, e.texture)
              } else this.ctx.bindTexture(this.ctx.TEXTURE_2D, t.texture);
              e = Math.max(e, i)
          }), this);
          for (let t = e + 1; t <= this.lastTextureSlot; ++t) this.ctx.activeTexture(this.ctx.TEXTURE0 + t), this.ctx.bindTexture(this.ctx.TEXTURE_2D, null);
          this.lastTextureSlot = e
      }
      compileShader(t, e = this.VERTEX_IDENTITY) {
          let i = new a(this.ctx, e, t);
          var s = Float32Array.BYTES_PER_ELEMENT;
          return this.ctx.enableVertexAttribArray(i.attribute.apos), this.ctx.vertexAttribPointer(i.attribute.apos, 2, this.ctx.FLOAT, !1, 4 * s, 0 * s), this.ctx.enableVertexAttribArray(i.attribute.auv), this.ctx.vertexAttribPointer(i.attribute.auv, 2, this.ctx.FLOAT, !1, 4 * s, 2 * s), i
      }
      bevel(t) {
          let e = this.compiledProgram.get("bevel");
          if (!e) {
              let t = "\n                precision highp float;\n\n                varying vec2 uv;\n                \n                uniform float zeroPoint;\n                uniform vec3 lightNormal;\n                uniform float dz;\n                uniform float size;\n\n                uniform vec4 lowColor;\n                uniform vec4 highColor;\n                \n                uniform sampler2D dist;\n                uniform sampler2D texture;\n                uniform vec2 px;\n\n                vec4 straightBlend(vec4 src, vec4 dst) {\n                    float alpha = src.a + dst.a * (1.0 - src.a);\n\n                    return vec4(\n                        ((src.rgb * src.a) + (dst.rgb * dst.a) * (1.0 - src.a)) / alpha,\n                        alpha\n                    );\n                }\n                \n                void main() {                    \n                    vec2 flipuv = vec2(uv.x, 1.0 - uv.y);\n                                         \n                    /* PER PIXEL OPS */\n                    float tl = clamp(0.0, size, texture2D(dist, flipuv + vec2(-px.x, -px.y)).a);\n                    float tm = clamp(0.0, size, texture2D(dist, flipuv + vec2(    0, -px.y)).a);\n                    float tr = clamp(0.0, size, texture2D(dist, flipuv + vec2( px.x, -px.y)).a);\n                \n                    float ml = clamp(0.0, size, texture2D(dist, flipuv + vec2(-px.x,     0)).a);\n                    float mr = clamp(0.0, size, texture2D(dist, flipuv + vec2( px.x,     0)).a);\n                \n                    float bl = clamp(0.0, size, texture2D(dist, flipuv + vec2(-px.x,  px.y)).a);\n                    float bm = clamp(0.0, size, texture2D(dist, flipuv + vec2(    0,  px.y)).a);\n                    float br = clamp(0.0, size, texture2D(dist, flipuv + vec2( px.x,  px.y)).a);\n                \n                    float dx = (tr + 2.0 * mr + br) - (tl + 2.0 * ml + bl);\n                    float dy = (bl + 2.0 * bm + br) - (tl + 2.0 * tm + tr);\n                \n                    vec3 surfaceNormal = vec3(dx, dy, dz);\n                    float norm = sqrt(dx*dx + dy*dy + dz*dz);\n                \n                    // Calculate incident light amount, range [-1, 0]\n                    float incidentLight = ((dot(surfaceNormal, lightNormal) / norm) - zeroPoint) - (1.0 - zeroPoint);\n                    \n                    vec4 slopes = mix(lowColor, highColor, 1.0 - abs(incidentLight));\n                    \n                    // Texture\n                    vec4 color = texture2D(texture, uv);\n\n                    // Bevel color, only use the the color where we need it\n                    float alpha = smoothstep(1e-5, dz + 8.0, distance(vec3(0.0,0.0,dz), surfaceNormal));\n                    vec4 bevelColor = vec4(slopes.rgb, slopes.a * alpha);\n\n                    gl_FragColor = straightBlend(\n                        bevelColor,\n                        color\n                    );\n                }";
              e = this.compileShader(t), this.compiledProgram.set("bevel", e)
          }
          this.ctx.useProgram(e.program);
          e.getTextureById("dist").setTexture(t.distanceMap);
          const i = Math.sin(t.lightElevation);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.ctx.uniform1f(e.uniform.zeroPoint, i), this.ctx.uniform3f(e.uniform.lightNormal, Math.cos(t.lightElevation) * -Math.cos(t.lightAngle), Math.cos(t.lightElevation) * -Math.sin(t.lightAngle), i), this.ctx.uniform4f(e.uniform.lowColor, t.lowLightColor.r / 255, t.lowLightColor.g / 255, t.lowLightColor.b / 255, t.lowOpacity), this.ctx.uniform4f(e.uniform.highColor, t.highLightColor.r / 255, t.highLightColor.g / 255, t.highLightColor.b / 255, t.highOpacity), this.ctx.uniform1f(e.uniform.dz, 1 / t.depth), this.ctx.uniform1f(e.uniform.size, t.size), this.draw(e)
      }
      stroke(t) {
          const e = "stroke" + (t.cutout ? "-cutout" : "");
          let i = this.compiledProgram.get(e);
          if (!i) {
              let s = `\n                precision highp float;\n\n                #define CUTOUT ${t.cutout?1:0}\n\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform sampler2D distanceMap;\n                            \n                uniform vec4 glowColor;\n                uniform float size;\n\n                vec4 straightBlend(vec4 src, vec4 dst) {\n                    float alpha = src.a + dst.a * (1.0 - src.a);\n\n                    return vec4(\n                        ((src.rgb * src.a) + (dst.rgb * dst.a) * (1.0 - src.a)) / alpha,\n                        alpha\n                    );\n                }\n\n                void main(void) {           \n                    vec2 flipped = vec2(uv.x, 1.0 - uv.y);\n\n                    float distance = texture2D(distanceMap, flipped).a;\n                    float gAlpha = 1.0-smoothstep(size - 3.0, size, distance);\n\n                    vec4 gColor = vec4(\n                        glowColor.rgb, \n                        gAlpha * glowColor.a\n                    );\n\n                    vec4 texColor = texture2D(texture, uv);\n\n                    #if CUTOUT == 1\n                        vec4 tran = vec4(0);\n                        gl_FragColor = mix(gColor, tran, texColor.a);\n                    #else\n                        gl_FragColor = straightBlend(texColor, gColor);                    \n                    #endif\n                }\n            `;
              i = this.compileShader(s), this.compiledProgram.set(e, i)
          }
          this.ctx.useProgram(i.program), this.ctx.uniform4f(i.uniform.glowColor, t.color.r / 255, t.color.g / 255, t.color.b / 255, t.opacity);
          i.getTextureById("distanceMap").setTexture(t.distanceMap), this.ctx.uniform1f(i.uniform.size, t.size), this.draw(i)
      }
      innerGlow(t) {
          let e = this.compiledProgram.get("innerglow");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform sampler2D distanceMap;\n                            \n                uniform vec4 glowColor;\n                uniform float size;\n                uniform float feather;\n\n                void main(void) {           \n                    vec2 flipped = vec2(uv.x, 1.0 - uv.y);\n\n                    float distance = texture2D(distanceMap, flipped).a;\n                    float balance = 1.0-smoothstep(size * (1.0-feather), size, distance);\n\n                    vec4 texColor = texture2D(texture, uv);\n\n                    vec4 gColor = vec4(\n                        glowColor.rgb, \n                        texColor.a\n                    );\n                       \n                    gl_FragColor = mix(texColor, gColor, balance * glowColor.a);\n                }\n            ";
              e = this.compileShader(t), this.compiledProgram.set("innerglow", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform4f(e.uniform.glowColor, t.color.r / 255, t.color.g / 255, t.color.b / 255, t.opacity);
          e.getTextureById("distanceMap").setTexture(t.distanceMap), this.ctx.uniform1f(e.uniform.size, t.size), this.ctx.uniform1f(e.uniform.feather, t.feather), this.draw(e)
      }
      outerGlow(t) {
          let e = this.compiledProgram.get("outerglow");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform sampler2D distanceMap;\n                            \n                uniform vec4 glowColor;\n                uniform float size;\n                uniform float feather;\n\n                vec4 straightBlend(vec4 src, vec4 dst) {\n                    float alpha = src.a + dst.a * (1.0 - src.a);\n\n                    return vec4(\n                        ((src.rgb * src.a) + (dst.rgb * dst.a) * (1.0 - src.a)) / alpha,\n                        alpha\n                    );\n                }\n                \n                void main(void) {           \n                    vec2 flipped = vec2(uv.x, 1.0 - uv.y);\n\n                    float distance = texture2D(distanceMap, flipped).a;\n                    float gAlpha = 1.0-smoothstep(size * (1.0-feather), size, distance);\n\n                    vec4 gColor = vec4(\n                        glowColor.rgb, \n                        gAlpha * glowColor.a\n                    );\n\n                    vec4 texColor = texture2D(texture, uv);\n                    \n                    gl_FragColor = straightBlend(texColor, gColor);                    \n                }\n            ";
              e = this.compileShader(t), this.compiledProgram.set("outerglow", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform4f(e.uniform.glowColor, t.color.r / 255, t.color.g / 255, t.color.b / 255, t.opacity);
          e.getTextureById("distanceMap").setTexture(t.distanceMap), this.ctx.uniform1f(e.uniform.size, t.size), this.ctx.uniform1f(e.uniform.feather, t.feather), this.draw(e)
      }
      sobel() {
          let t = this.compiledProgram.get("sobel");
          if (!t) {
              let e = "\n                precision mediump float;\n\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n\n                uniform float m[3];\n                #define M_PI 3.1415926535897932384626433832795\n                #define GET_PIXEL(x,y) (texture2D(texture, uv + px*vec2(x,y)))\n\n                void main() {\n\n                    float dx = (length(GET_PIXEL(-1, -1)*m[0] +\n                                GET_PIXEL(-1,  0)*m[1] +\n                                GET_PIXEL(-1, +1)*m[2]) -\n                            length(GET_PIXEL(+1, -1)*m[0] +\n                                GET_PIXEL(+1,  0)*m[1] +\n                                GET_PIXEL(+1, +1)*m[2]));\n\n                    float dy = (length(GET_PIXEL(-1, -1)*m[0] +\n                                GET_PIXEL(0, -1)*m[1] +\n                                GET_PIXEL(+1, -1)*m[2]) -\n                            length(GET_PIXEL(-1, +1)*m[0] +\n                                GET_PIXEL(0, +1)*m[1] +\n                                GET_PIXEL(+1, +1)*m[2]));\n\n                    float theta = (atan(dy, dx) + M_PI) / (2.0*M_PI);\n\n                    gl_FragColor = vec4(length(vec2(dx, dy)), theta, 0.0, 1.0);\n                }";
              t = this.compileShader(e), this.compiledProgram.set("sobel", t)
          }
          if (this.ctx.useProgram(t.program), this.ctx.uniform2f(t.uniform.px, 1 / this.width, 1 / this.height), this.ctx.uniform1fv(t.uniform.m, [1, 2, 1]), this.draw(t, !0), t = this.compiledProgram.get("sobelNMS"), !t) {
              let e = "\n                precision mediump float;\n\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n\n                #define M_PI 3.1415926535897932384626433832795\n\n                void main() {\n                    vec4 cc = texture2D(texture, uv);  \n                    float theta = degrees(cc.y*M_PI*2.0); \n                    int ax = 0, ay = 0; \n                    if ((theta >= 337.5) || (theta < 22.5)) { ax = 1; ay = 0; } \n                    else if ((theta >= 22.5) && (theta < 67.5)) { ax = 1; ay = 1; } \n                    else if ((theta >= 67.5) && (theta < 112.5)) { ax = 0; ay = 1; } \n                    else if ((theta >= 112.5) && (theta < 157.5)) { ax =-1; ay = 1; } \n                    else if ((theta >= 157.5) && (theta < 202.5)) { ax =-1; ay = 0; } \n                    else if ((theta >=202.5) && (theta < 247.5)) { ax =-1; ay =-1; } \n                    else if ((theta >=247.5) && (theta < 292.5)) { ax = 0; ay =-1; } \n                    else if ((theta >= 292.5) && (theta < 337.5)) { ax = 1; ay =-1; }\n                \n                    vec4 ca = texture2D(texture, uv + px*vec2(ax, ay));\n                    vec4 cb = texture2D(texture, uv + px*vec2(-ax, -ay));\n                    gl_FragColor = vec4((((cc.x <= ca.x) || (cc.x < cb.x)) ? vec3(0) : vec3(cc.x)), 1.0);\n                }";
              t = this.compileShader(e), this.compiledProgram.set("sobelNMS", t)
          }
          this.ctx.useProgram(t.program), this.ctx.uniform2f(t.uniform.px, 1 / this.width, 1 / this.height), this.draw(t)
      }
      vibrance(t) {
          let e = this.compiledProgram.get("vibrance");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n\n                    vec4 col = texture2D(texture, uv.xy);\n                    vec3 color = col.rgb;\n                \n                    float luminance = color.r*0.299 + color.g*0.587 + color.b*0.114;\n                    float mn = min(min(color.r, color.g), color.b);\n                    float mx = max(max(color.r, color.g), color.b);\n                    float sat = (1.0-(mx - mn)) * (1.0-mx) * luminance * 5.0;\n                    vec3 lightness = vec3((mn + mx)/2.0);\n                \n                    // vibrance\n                    color = mix(color, mix(color, lightness, -amount), sat);\n                \n                    // negative vibrance\n                    gl_FragColor = vec4(mix(color, lightness, (1.0-lightness)*(1.0-amount)/2.0*abs(amount)), col.a);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("vibrance", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      lightness(t) {
          let e = this.compiledProgram.get("lightness");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.rgb += amount;\n                    gl_FragColor = color;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("lightness", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      brightness(t) {
          let e;
          if (t > 0) {
              if (e = this.compiledProgram.get("brightness-up"), !e) {
                  let t = "\n                    precision highp float;\n                    varying vec2 uv;\n                    uniform sampler2D texture;\n                    uniform float amount;\n\n                    #define PI 3.1415926535897932384626433832795\n\n                    void main() {\n                        vec4 color = texture2D(texture, uv);\n\n                        color.r = color.r + amount * sin(color.r * PI);\n                        color.g = color.g + amount * sin(color.g * PI);\n                        color.b = color.b + amount * sin(color.b * PI);\n\n                        gl_FragColor = color;\n                    }";
                  e = this.compileShader(t), this.compiledProgram.set("brightness-up", e)
              }
          } else if (e = this.compiledProgram.get("brightness-down"), !e) {
              let t = "\n                    precision highp float;\n                    varying vec2 uv;\n                    uniform sampler2D texture;\n                    uniform float amount;\n\n                    void main() {\n                        vec4 color = texture2D(texture, uv);\n     \n                        color.r = (1.0 + amount) * color.r;\n                        color.g = (1.0 + amount) * color.g;\n                        color.b = (1.0 + amount) * color.b;\n\n                        gl_FragColor = color;\n                    }";
              e = this.compileShader(t), this.compiledProgram.set("brightness-down", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t > 0 ? .35 * t : .75 * t), this.draw(e)
      }
      dealiasing() {
          let t = this.compiledProgram.get("dealiasing");
          if (!t) {
              let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.a = (color.a < 0.25) ? 0.0 : 1.0;\n                    gl_FragColor = color;\n                }";
              t = this.compileShader(e), this.compiledProgram.set("dealiasing", t)
          }
          this.ctx.useProgram(t.program), this.draw(t)
      }
      alphaInvert() {
          let t = this.compiledProgram.get("alpha-invert");
          if (!t) {
              let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.a = 1.0 - color.a;\n                    gl_FragColor = color;\n                }";
              t = this.compileShader(e), this.compiledProgram.set("alpha-invert", t)
          }
          this.ctx.useProgram(t.program), this.draw(t)
      }
      alphaMask() {
          let t = this.compiledProgram.get("alpha-mask");
          if (!t) {
              let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    gl_FragColor = vec4(0,0,0, texture2D(texture, uv).a);\n                }";
              t = this.compileShader(e), this.compiledProgram.set("alpha-mask", t)
          }
          this.ctx.useProgram(t.program), this.draw(t)
      }
      alphaShiftMask() {
          let t = this.compiledProgram.get("alpha-shift-mask");
          if (!t) {
              let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    gl_FragColor = vec4(0,0,0, texture2D(texture, uv).r);\n                }";
              t = this.compileShader(e), this.compiledProgram.set("alpha-shift-mask", t)
          }
          this.ctx.useProgram(t.program), this.draw(t)
      }
      balance(t) {
          let e = this.compiledProgram.get("balance");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                uniform float sr;\n                uniform float sg;\n                uniform float sb;\n                uniform float mr;\n                uniform float mg;\n                uniform float mb;\n                uniform float hr;\n                uniform float hg;\n                uniform float hb;\n                uniform float preserve;\n\n                #define PI 3.1415926535897932384626433832795\n\n                float Lum(vec4 c){\n                    return 0.299*c.r + 0.587*c.g + 0.114*c.b;\n                }\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    \n                    float olum = Lum(color);\n\n                    //highlight\n                    color.r = clamp(color.r + (hr * (exp(color.r) - 1.0)), 0.0, 1.0);\n                    color.g = clamp(color.g + (hg * (exp(color.g) - 1.0)), 0.0, 1.0);\n                    color.b = clamp(color.b + (hb * (exp(color.b) - 1.0)), 0.0, 1.0);\n\n                    //midtone\n                    color.r = clamp(color.r + (mr * 0.25) * sin(color.r * PI), 0.0, 1.0);\n                    color.g = clamp(color.g + (mg * 0.25) * sin(color.g * PI), 0.0, 1.0);\n                    color.b = clamp(color.b + (mb * 0.25) * sin(color.b * PI), 0.0, 1.0);\n\n                    //shadow\n                    color.r = clamp((1.0 - sr * 0.5) * color.r + (1.0 - (1.0 - sr * 0.5)), 0.0, 1.0);\n                    color.g = clamp((1.0 - sg * 0.5) * color.g + (1.0 - (1.0 - sg * 0.5)), 0.0, 1.0);\n                    color.b = clamp((1.0 - sb * 0.5) * color.b + (1.0 - (1.0 - sb * 0.5)), 0.0, 1.0);\n                    \n                    if(preserve == 1.0) {\n                        float nlum = Lum(color);\n                        color.rgb = color.rgb * (olum/nlum);\n                    }\n\n                    gl_FragColor = color;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("balance", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.sr, t.shadowRed), this.ctx.uniform1f(e.uniform.sg, t.shadowGreen), this.ctx.uniform1f(e.uniform.sb, t.shadowBlue), this.ctx.uniform1f(e.uniform.mr, t.midtoneRed), this.ctx.uniform1f(e.uniform.mg, t.midtoneGreen), this.ctx.uniform1f(e.uniform.mb, t.midtoneBlue), this.ctx.uniform1f(e.uniform.hr, t.highlightRed), this.ctx.uniform1f(e.uniform.hg, t.highlightGreen), this.ctx.uniform1f(e.uniform.hb, t.highlightBlue), this.ctx.uniform1f(e.uniform.preserve, Number(t.preserve)), this.draw(e)
      }
      temperature(t) {
          let e = this.compiledProgram.get("temperature");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.r = clamp(color.r + amount, 0.0, 1.0);\n                    color.b = clamp(color.b - amount, 0.0, 1.0);\n                    gl_FragColor = color;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("temperature", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t / 6), this.draw(e)
      }
      tint(t) {
          let e = this.compiledProgram.get("tint");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.g = clamp(color.g + amount, 0.0, 1.0);\n                    gl_FragColor = color;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("tint", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t / 6), this.draw(e)
      }
      threshold(t) {
          let e = this.compiledProgram.get("threshold");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    float value = (color.r + color.g + color.b) / 3.0 < amount ? 0.0 : 1.0;\n                    gl_FragColor = vec4(value, value, value, color.a);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("threshold", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      noise(t) {
          let e = this.compiledProgram.get("noise");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                float random(vec2 p) {\n                    vec2 r = vec2(23.14069263277926,2.665144142690225);\n                    return fract(cos(mod(12345678.,256. * dot(p,r))));\n                }\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n\n                    float noise = (random(uv) -0.5)*amount;\n\n                    gl_FragColor = vec4(color.r+noise, color.g+noise, color.b+noise, color.a);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("noise", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      halftone(t) {
          let e = this.compiledProgram.get("halftone");
          if (!e) {
              this.ctx.getExtension("OES_standard_derivatives");
              let t = "\n                #ifdef GL_OES_standard_derivatives\n                #extension GL_OES_standard_derivatives : enable\n                #endif\n\n                precision highp float;                \n\n                uniform sampler2D texture;\n                uniform vec2 size;\n                uniform float frequency;\n \n                varying vec2 uv; // Texcoords\n\n                float aastep(float threshold, float value) {\n                #ifdef GL_OES_standard_derivatives\n                    float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));\n                #else\n                    float afwidth = frequency * (1.0/size.x);\n                #endif\n                    return smoothstep(threshold-afwidth, threshold+afwidth, value);\n                }\n\n                // Explicit bilinear texture lookup to circumvent bad hardware precision.\n                // The extra arguments specify the dimension of the texture. (GLSL 1.30\n                // introduced textureSize() to get that information from the sampler.)\n                // 'dims' is the width and height of the texture, 'one' is 1.0/dims.\n                // (Precomputing 'one' saves two divisions for each lookup.)\n                vec4 texture2D_bilinear(sampler2D tex, vec2 st, vec2 dims, vec2 one) {\n                    vec2 uv = st * dims;\n                    vec2 uv00 = floor(uv - vec2(0.5)); // Lower left corner of lower left texel\n                    vec2 uvlerp = uv - uv00 - vec2(0.5); // Texel-local lerp blends [0,1]\n                    vec2 st00 = (uv00 + vec2(0.5)) * one;\n                    vec4 texel00 = texture2D(tex, st00);\n                    vec4 texel10 = texture2D(tex, st00 + vec2(one.x, 0.0));\n                    vec4 texel01 = texture2D(tex, st00 + vec2(0.0, one.y));\n                    vec4 texel11 = texture2D(tex, st00 + one);\n                    vec4 texel0 = mix(texel00, texel01, uvlerp.y); \n                    vec4 texel1 = mix(texel10, texel11, uvlerp.y); \n                    return mix(texel0, texel1, uvlerp.x);\n                }\n\n                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n                vec3 permute(vec3 x) { return mod289((( x * 34.0) + 1.0) * x); }\n                \n                float snoise(vec2 v) {\n                    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                                        0.024390243902439); // 1.0 / 41.0\n                    // First corner\n                    vec2 i = floor(v + dot(v, C.yy) );\n                    vec2 x0 = v - i + dot(i, C.xx);\n                    // Other corners\n                    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n                    vec4 x12 = x0.xyxy + C.xxzz;\n                    x12.xy -= i1;\n                    // Permutations\n                    i = mod289(i); // Avoid truncation effects in permutation\n                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n                                            + i.x + vec3(0.0, i1.x, 1.0 ));\n                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n                                            dot(x12.zw,x12.zw)), 0.0);\n                    m = m*m; m = m*m;\n                    // Gradients\n                    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n                    vec3 h = abs(x) - 0.5;\n                    vec3 a0 = x - floor(x + 0.5);\n                    // Normalise gradients implicitly by scaling m\n                    m *= 1.792843 - 0.853735 * ( a0*a0 + h*h );\n                    // Compute final noise value at P\n                    vec3 g;\n                    g.x = a0.x * x0.x + h.x * x0.y;\n                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n                    return 130.0 * dot(m, g);\n                }\n                \n                void main() {\n                    // Correct UVs for aspect ratio so we get round balls not squished\n                    vec2 auv = uv;\n                    auv.x *= size.x / size.y;\n\n                    vec3 color = texture2D_bilinear(texture, uv, size, 1.0 / size).rgb;\n\n                    float n = 0.1*snoise(auv*200.0); // Fractal noise\n                    n += 0.05*snoise(auv*400.0);\n                    n += 0.025*snoise(auv*800.0);\n\n                    vec3 white = vec3(n*0.2 + 0.97);\n                    vec3 black = vec3(n + 0.1);\n\n                    // Perform a rough RGB-to-CMYK conversion\n                    vec4 cmyk;\n                    cmyk.xyz = 1.0 - color;\n                    cmyk.w = min(cmyk.x, min(cmyk.y, cmyk.z)); // Create K\n                    cmyk.xyz -= cmyk.w; // Subtract K equivalent from CMY\n                \n                    // Distance to nearest point in a grid of\n                    // (frequency x frequency) points over the unit square\n                    vec2 Kst = frequency*mat2(0.707, -0.707, 0.707, 0.707)*auv;\n                    vec2 Kuv = 2.0*fract(Kst)-1.0;\n                    float k = aastep(0.0, sqrt(cmyk.w)-length(Kuv)+n);\n                    vec2 Cst = frequency*mat2(0.966, -0.259, 0.259, 0.966)*auv;\n                    vec2 Cuv = 2.0*fract(Cst)-1.0;\n                    float c = aastep(0.0, sqrt(cmyk.x)-length(Cuv)+n);\n                    vec2 Mst = frequency*mat2(0.966, 0.259, -0.259, 0.966)*auv;\n                    vec2 Muv = 2.0*fract(Mst)-1.0;\n                    float m = aastep(0.0, sqrt(cmyk.y)-length(Muv)+n);\n                    vec2 Yst = frequency*auv; // 0 deg\n                    vec2 Yuv = 2.0*fract(Yst)-1.0;\n                    float y = aastep(0.0, sqrt(cmyk.z)-length(Yuv)+n);\n                \n                    vec3 rgbscreen = 1.0 - 0.9*vec3(c,m,y) + n;\n                    rgbscreen = mix(rgbscreen, black, 0.85*k + 0.3*n);\n                \n                    #ifdef GL_OES_standard_derivatives\n                        float afwidth = 2.0 * frequency * max(length(dFdx(uv)), length(dFdy(uv)));\n                    #else\n                        float afwidth = frequency * (1.0/size.x);\n                    #endif\n                    \n                    float blend = smoothstep(0.7, 1.4, afwidth); \n                    gl_FragColor = vec4(mix(rgbscreen, color, blend), 1.0);\n                }\n            ";
              e = this.compileShader(t), this.compiledProgram.set("halftone", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform2f(e.uniform.size, this.width, this.height), this.ctx.uniform1f(e.uniform.frequency, Math.round(100 * t)), this.draw(e)
      }
      vignette(t) {
          let e = this.compiledProgram.get(t < 0 ? "vignette-white" : "vignette-black");
          if (!e) {
              let i = ["precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "uniform float size;", "void main() {", "vec4 color = texture2D(texture, uv);", "float dist = distance(uv, vec2(0.5, 0.5));", "float grd = smoothstep(0.8, size * 0.799, dist * (amount*0.6 + size*2.0));", "color.rgb += vec3(1.0, 1.0, 1.0) * (1.0 - grd);", "gl_FragColor = color;", "}"].join("\n"),
                  s = ["precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "uniform float size;", "void main() {", "vec4 color = texture2D(texture, uv);", "float dist = distance(uv, vec2(0.5, 0.5));", "color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount*0.75 + size*2.0));", "gl_FragColor = color;", "}"].join("\n");
              e = this.compileShader(t < 0 ? i : s), this.compiledProgram.set(t < 0 ? "vignette-white" : "vignette-black", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.size, .25), this.ctx.uniform1f(e.uniform.amount, t < 0 ? -1 * t : t), this.draw(e)
      }
      grain(t) {
          let e = this.compiledProgram.get("grain");
          if (!e) {
              let t = ["precision highp float;", "uniform sampler2D texture;", "varying vec2 uv;", "uniform float width;", "uniform float height;", "uniform float grainamount;", "uniform float timer;", "const float permTexUnit = 1.0/256.0;", "const float permTexUnitHalf = 0.5/256.0;", "float grainsize = 1.8;", "float lumamount = 1.0;", "vec4 rnm(in vec2 tc)", "{", "float noise =  sin(dot(tc + vec2(timer,timer),vec2(12.9898,78.233))) * 43758.5453;", "float noiseR =  fract(noise)*2.0-1.0;", "float noiseG =  fract(noise*1.2154)*2.0-1.0; ", "float noiseB =  fract(noise*1.3453)*2.0-1.0;", "float noiseA =  fract(noise*1.3647)*2.0-1.0;", "return vec4(noiseR,noiseG,noiseB,noiseA);", "}", "float fade(in float t) {", "return t*t*t*(t*(t*6.0-15.0)+10.0);", "}", "float pnoise3D(in vec3 p)", "{", "vec3 pi = permTexUnit*floor(p)+permTexUnitHalf;", "vec3 pf = fract(p);", "float perm00 = rnm(pi.xy).a ;", "vec3  grad000 = rnm(vec2(perm00, pi.z)).rgb * 4.0 - 1.0;", "float n000 = dot(grad000, pf);", "vec3  grad001 = rnm(vec2(perm00, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n001 = dot(grad001, pf - vec3(0.0, 0.0, 1.0));", "float perm01 = rnm(pi.xy + vec2(0.0, permTexUnit)).a ;", "vec3  grad010 = rnm(vec2(perm01, pi.z)).rgb * 4.0 - 1.0;", "float n010 = dot(grad010, pf - vec3(0.0, 1.0, 0.0));", "vec3  grad011 = rnm(vec2(perm01, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n011 = dot(grad011, pf - vec3(0.0, 1.0, 1.0));", "float perm10 = rnm(pi.xy + vec2(permTexUnit, 0.0)).a ;", "vec3  grad100 = rnm(vec2(perm10, pi.z)).rgb * 4.0 - 1.0;", "float n100 = dot(grad100, pf - vec3(1.0, 0.0, 0.0));", "vec3  grad101 = rnm(vec2(perm10, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n101 = dot(grad101, pf - vec3(1.0, 0.0, 1.0));", "float perm11 = rnm(pi.xy + vec2(permTexUnit, permTexUnit)).a ;", "vec3  grad110 = rnm(vec2(perm11, pi.z)).rgb * 4.0 - 1.0;", "float n110 = dot(grad110, pf - vec3(1.0, 1.0, 0.0));", "vec3  grad111 = rnm(vec2(perm11, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n111 = dot(grad111, pf - vec3(1.0, 1.0, 1.0));", "vec4 n_x = mix(vec4(n000, n001, n010, n011), vec4(n100, n101, n110, n111), fade(pf.x));", "vec2 n_xy = mix(n_x.xy, n_x.zw, fade(pf.y));", "float n_xyz = mix(n_xy.x, n_xy.y, fade(pf.z));", "return n_xyz;", "}", "vec2 coordRot(in vec2 tc, in float angle)", "{", "float aspect = width/height;", "float rotX = ((tc.x*2.0-1.0)*aspect*cos(angle)) - ((tc.y*2.0-1.0)*sin(angle));", "float rotY = ((tc.y*2.0-1.0)*cos(angle)) + ((tc.x*2.0-1.0)*aspect*sin(angle));", "rotX = ((rotX/aspect)*0.5+0.5);", "rotY = rotY*0.5+0.5;", "return vec2(rotX,rotY);", "}", "void main() ", "{", "vec3 rotOffset = vec3(1.425,3.892,5.835);", "vec2 rotCoordsR = coordRot(uv, timer + rotOffset.x);", "vec3 noise = vec3(pnoise3D(vec3(rotCoordsR*vec2(width/grainsize,height/grainsize),0.0)));", "vec4 tex = texture2D(texture, uv);", "vec3 col = tex.rgb;", "vec3 lumcoeff = vec3(0.299,0.587,0.114);", "float luminance = mix(0.0,dot(col, lumcoeff),lumamount);", "float lum = smoothstep(0.2,0.0,luminance);", "lum += luminance;", "noise = mix(noise,vec3(0.0),pow(lum,4.0));", "col = col+noise*grainamount;", "gl_FragColor =  vec4(col, tex.w);", "}"].join("\n");
              e = this.compileShader(t), this.compiledProgram.set("grain", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.width, this.width), this.ctx.uniform1f(e.uniform.height, this.height), this.ctx.uniform1f(e.uniform.grainamount, t / 10), this.draw(e)
      }
      sharpen(t) {
          let e = this.compiledProgram.get("sharpen");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n                uniform float m[9];\n                uniform float amount;\n\n                void main(void) {\n                    vec4 c11 = texture2D(texture, uv - px); // top left\n                    vec4 c12 = texture2D(texture, vec2(uv.x, uv.y - px.y)); // top center\n                    vec4 c13 = texture2D(texture, vec2(uv.x + px.x, uv.y - px.y)); // top right\n\n                    vec4 c21 = texture2D(texture, vec2(uv.x - px.x, uv.y) ); // mid left\n                    vec4 c22 = texture2D(texture, uv); // mid center\n                    vec4 c23 = texture2D(texture, vec2(uv.x + px.x, uv.y) ); // mid right\n\n                    vec4 c31 = texture2D(texture, vec2(uv.x - px.x, uv.y + px.y) ); // bottom left\n                    vec4 c32 = texture2D(texture, vec2(uv.x, uv.y + px.y) ); // bottom center\n                    vec4 c33 = texture2D(texture, uv + px ); // bottom right\n\n                    vec4 color = \n                        c11 * m[0] + c12 * m[1] + c13 * m[2] +\n                        c21 * m[3] + c22 * m[4] + c23 * m[5] +\n                        c31 * m[6] + c32 * m[7] + c33 * m[8];\n\n                    gl_FragColor = color * amount + (c22 * (1.0 - amount));\n                }";
              e = this.compileShader(t), this.compiledProgram.set("sharpen", e)
          }
          let i = new Float32Array([-1, -1, -1, -1, 9, -1, -1, -1, -1]);
          this.ctx.useProgram(e.program), this.ctx.uniform1fv(e.uniform.m, i), this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.ctx.uniform1f(e.uniform.amount, t / 2), this.draw(e)
      }
      blur(t, e = !1) {
          let i = this.compiledProgram.get("blur");
          if (!i) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 size;\n                float random(vec3 scale, float seed) {\n                    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n                }\n                void main() {\n                    vec4 color = vec4(0.0);\n                    float total = 0.0;\n                    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n                    for (float t = -30.0; t <= 30.0; t++) {\n                        float percent = (t + offset - 0.5) / 30.0;\n                        float weight = 1.0 - abs(percent);\n                        vec4 sample = texture2D(texture, uv + size * percent);\n                        sample.rgb *= sample.a;\n                        color += sample * weight;\n                        total += weight;\n                    }\n                    gl_FragColor = color / total;\n                    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n                }";
              i = this.compileShader(t), this.compiledProgram.set("blur", i)
          }
          let s = 40 * t / this.canvas.width,
              n = 40 * t / this.canvas.height;
          this.ctx.useProgram(i.program), this.ctx.uniform2f(i.uniform.size, 0, n), this.draw(i, !0), this.ctx.uniform2f(i.uniform.size, s, 0), this.draw(i, e)
      }
      zoom(t) {
          let e = this.compiledProgram.get("zoom");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                uniform vec2 center;\n                uniform float amount;\n                uniform vec2 px;\n                \n                float random(vec3 scale, float seed) {\n                    /* use the fragment position for a different seed per-pixel */                    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n                }\n                void main() {\n                    vec4 color = vec4(0.0);\n                    float total = 0.0;\n                    vec2 toCenter = (center - uv) * px;\n                    \n                    /* randomize the lookup values to hide the fixed number of samples */\n                    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n                    \n                    for (float t = 0.0; t <= 40.0; t++) {\n                        float percent = (t + offset) / 40.0;\n                        float weight = 4.0 * (percent - percent * percent);\n                        vec4 sample = texture2D(texture, uv + toCenter * percent * amount / px);\n                        \n                        /* switch to pre-multiplied alpha to correctly blur transparent images */\n                        sample.rgb *= sample.a;\n                        \n                        color += sample * weight;\n                        total += weight;\n                    }\n                    gl_FragColor = color / total;\n                    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("zoom", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t.amount), this.ctx.uniform2f(e.uniform.center, t.x, t.y), this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.draw(e)
      }
      makeKernel(t) {
          const e = this.GAUSSKERN_MAX + Number(!(1 & this.GAUSSKERN_MAX)),
              i = Math.sqrt(2 * Math.PI) * t,
              s = 2 * t * t;
          var n, a, r = ~~(e / 2),
              o = new Float32Array(e);
          for (a = 0, n = -r; a < e; n++, a++) o[a] = Math.exp(-n * n / s) / i;
          return o
      }
      scaleKernel(t) {
          const e = t.reduce(((t, e) => t + e)) || 1;
          return t.map((t => t / e))
      }
      gaussian(t) {
          const e = this.makeKernel(10 * t),
              i = e.length + Number(!(1 & e.length));
          let s = this.compiledProgram.get(`guass-${i}`);
          if (!s) {
              let t = `\n                precision mediump float;\n                #define KERNEL_SIZE ${i}\n                #define KERNEL_HALF KERNEL_SIZE / 2\n                // our texture\n                varying vec2 uv;\n                uniform vec2 px;\n                uniform sampler2D texture;\n                uniform float kernel[KERNEL_SIZE];\n                void main() {\n                    vec4 result = vec4(0.0);\n                    for (int i = 0; i < KERNEL_SIZE; i++) {\n                        result += texture2D(texture, uv + px*vec2(i - KERNEL_HALF))*kernel[i];\n                    }\n                    gl_FragColor = result;\n                }\n            `;
              s = this.compileShader(t), this.compiledProgram.set(`guass-${i}`, s)
          }
          this.ctx.useProgram(s.program), this.ctx.uniform2f(s.uniform.px, 0, 1 / this.height), this.ctx.uniform1fv(s.uniform.kernel, this.scaleKernel(e)), this.draw(s, !0), this.ctx.uniform2f(s.uniform.px, 1 / this.width, 0), this.draw(s)
      }
      clarity(t) {
          let e = this.compiledProgram.get("clarity");
          if (!e) {
              const t = "\n                #define GLSLIFY 1\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 px;\n                           \n                float Lum(vec3 c){\n                    return 0.299*c.r + 0.587*c.g + 0.114*c.b;\n                }\n                float BlendOverlayf(float base, float blend){\n                    return (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)));\n                }\n                vec3 BlendOverlay(vec3 base, vec3 blend){\n                    return vec3(BlendOverlayf(base.r, blend.r), BlendOverlayf(base.g, blend.g), BlendOverlayf(base.b, blend.b));\n                }\n                float BlendVividLightf(float base, float blend){\n                    float BlendColorBurnf = (((2.0 * blend) == 0.0) ? (2.0 * blend) : max((1.0 - ((1.0 - base) / (2.0 * blend))), 0.0));\n                    float BlendColorDodgef =  (((2.0 * (blend - 0.5)) == 1.0) ? (2.0 * (blend - 0.5)) : min(base / (1.0 - (2.0 * (blend - 0.5))), 1.0));\n                    return ((blend < 0.5) ? BlendColorBurnf : BlendColorDodgef);\n                }\n                vec3 BlendVividLight(vec3 base, vec3 blend){\n                    return vec3(BlendVividLightf(base.r, blend.r), BlendVividLightf(base.g, blend.g), BlendVividLightf(base.b, blend.b));\n                }\n\n                float normpdf(in float x, in float sigma) {\n                    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;\n                }\n\n                vec3 blurMap() {\n                    //declare stuff\n                    const int mSize = 11;\n                    const int kSize = (mSize-1)/2;\n                    float kernel[mSize];\n                    vec3 final_colour = vec3(0.0);\n                    \n                    //create the 1-D kernel\n                    float sigma = 7.0;\n                    float Z = 0.0;\n                    for (int j = 0; j <= kSize; ++j){\n                        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);\n                    }\n                    \n                    //get the normalization factor (as the gaussian has been clamped)\n                    for (int j = 0; j < mSize; ++j){\n                        Z += kernel[j];\n                    }\n                    \n                    //read out the texels\n                    for (int i=-kSize; i <= kSize; ++i){\n                        for (int j=-kSize; j <= kSize; ++j){\n                            final_colour += kernel[kSize+j] * kernel[kSize+i] * texture2D(texture, (uv.xy + vec2(float(i),float(j))*px)).rgb;\n                        }\n                    }\n                    return vec3(final_colour/(Z*Z));\n                }\n    \n                void main() {\n\n                    vec4 base4 = texture2D(texture, uv.xy);\n                    \n                    vec3 blurMap = blurMap();\n                    vec3 base = base4.rgb;\n                    \n                    float intensity = (amount < 0.0) ? (amount / 2.0) : amount;\n                    float lum = Lum(base);\n                  \n                    vec3 col = vec3(lum);\n                    vec3 mask = vec3(1.0 - pow(lum, 1.8));\n                    // invert blurred texture\n                    vec3 layer = vec3(1.0 - Lum(blurMap));\n                    vec3 detail = clamp(BlendVividLight(col, layer), 0.0, 1.0);\n                    // we get negative detail by inverting the detail layer\n                    vec3 inverse = mix(1.0 - detail, detail, (intensity+1.0)/2.0);\n                  \n                    gl_FragColor = vec4(BlendOverlay(base, mix(vec3(0.5), inverse, mask)), base4.a);       \n                }";
              e = this.compileShader(t), this.compiledProgram.set("clarity", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.ctx.uniform1f(e.uniform.amount, 2 * t), this.draw(e)
      }
      smooth(t) {
          let e = this.compiledProgram.get("smooth");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n                uniform float m[9];\n                uniform float amount;\n\n                void main(void) {\n                    vec4 c11 = texture2D(texture, uv - px);\n                    vec4 c12 = texture2D(texture, vec2(uv.x, uv.y - px.y));\n                    vec4 c13 = texture2D(texture, vec2(uv.x + px.x, uv.y - px.y));\n\n                    vec4 c21 = texture2D(texture, vec2(uv.x - px.x, uv.y) );\n                    vec4 c22 = texture2D(texture, uv);\n                    vec4 c23 = texture2D(texture, vec2(uv.x + px.x, uv.y) );\n\n                    vec4 c31 = texture2D(texture, vec2(uv.x - px.x, uv.y + px.y) );\n                    vec4 c32 = texture2D(texture, vec2(uv.x, uv.y + px.y) );\n                    vec4 c33 = texture2D(texture, uv + px );\n\n                    vec4 color = \n                        c11 * m[0] + c12 * m[1] + c13 * m[2] +\n                        c21 * m[3] + c22 * m[4] + c23 * m[5] +\n                        c31 * m[6] + c32 * m[7] + c33 * m[8];\n\n                    gl_FragColor = color * amount + (c22 * (1.0 - amount));\n                }";
              e = this.compileShader(t), this.compiledProgram.set("smooth", e)
          }
          let i = new Float32Array([1 / 16, 2 / 16, 1 / 16, 2 / 16, .25, 2 / 16, 1 / 16, 2 / 16, 1 / 16]);
          this.ctx.useProgram(e.program), this.ctx.uniform1fv(e.uniform.m, i), this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      denoise(t) {
          const e = Math.round(30 * t[0]);
          let i = this.compiledProgram.get("denoise" + e);
          if (!i) {
              let t = "\n                precision mediump float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                \n                uniform float sigma;\n                uniform float threshold;\n                uniform vec2 resolution;\n\n                #define INV_SQRT_OF_2PI 0.39894228040143267793994605993439  // 1.0/SQRT_OF_2PI\n                #define INV_PI 0.31830988618379067153776752674503\n                #define RADIUS %radius%.0\n              \n                void main(void) {\n\n                       float invSigmaQx2 = .5 / (sigma * sigma);      // 1.0 / (sigma^2 * 2.0)\n                       float invSigmaQx2PI = INV_PI * invSigmaQx2;    // 1.0 / (sqrt(PI) * sigma)\n                       \n                       float invThresholdSqx2 = .5 / (threshold * threshold);     // 1.0 / (sigma^2 * 2.0)\n                       float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;   // 1.0 / (sqrt(2*PI) * sigma)\n                       \n                       vec4 center = texture2D(texture,uv); \n                       \n                       float zBuff = 0.0;\n                       vec4 aBuff = vec4(0.0);\n                       \n                       for(float x=-RADIUS; x <= RADIUS; x++) {\n                           float pt = sqrt(RADIUS*RADIUS-x*x);  // pt = yRadius: have circular trend\n                           for(float y=-RADIUS; y <= RADIUS; y++) {\n   \n                               if(y >= pt || y <= pt) {\n   \n                                   vec2 d = vec2(x,y)/resolution;\n                       \n                                   float blurFactor = exp( -dot(d , d) * invSigmaQx2 ) * invSigmaQx2;\n                                   \n                                   vec4 pxx =  texture2D(texture,uv+d);\n                       \n                                   vec4 dC = pxx-center;\n                                   float deltaFactor = exp( -dot(dC, dC) * invThresholdSqx2) * invThresholdSqrt2PI * blurFactor;\n                                                       \n                                   zBuff += deltaFactor;\n                                   aBuff += deltaFactor*pxx;\n                               }\n                           }\n                       }\n                       gl_FragColor = aBuff/zBuff;\n                } ";
              i = this.compileShader(t.replace(/%radius%/g, e.toString())), this.compiledProgram.set("denoise" + e, i)
          }
          this.ctx.useProgram(i.program), this.ctx.uniform1f(i.uniform.sigma, e / 3), this.ctx.uniform1f(i.uniform.threshold, t[1]), this.ctx.uniform2f(i.uniform.resolution, this.width, this.height), this.draw(i)
      }
      colorMatrix(t) {
          let e = new Float32Array(t);
          e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255;
          let i = 1 == e[18] && 0 == e[3] && 0 == e[8] && 0 == e[13] && 0 == e[15] && 0 == e[16] && 0 == e[17] && 0 == e[19],
              s = "colorMatrix" + (i ? "0" : "1"),
              n = this.compiledProgram.get(s);
          if (!n) {
              let t = ["precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float m[20];", "void main(void) {", "vec4 c = texture2D(texture, uv);", "gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4];", "gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9];", "gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14];", "gl_FragColor.a = m[15] * c.r + m[16] * c.g + m[17] * c.b + m[18] * c.a + m[19];", "}"].join("\n"),
                  e = ["precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float m[20];", "void main(void) {", "vec4 c = texture2D(texture, uv);", "gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[4];", "gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[9];", "gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[14];", "gl_FragColor.a = c.a;", "}"].join("\n"),
                  a = i ? e : t;
              n = this.compileShader(a), this.compiledProgram.set(s, n)
          }
          this.ctx.useProgram(n.program), this.ctx.uniform1fv(n.uniform.m, e), this.draw(n)
      }
      saturation(t) {
          var e = 2 * Number(t) / 3 + 1,
              i = -.5 * (e - 1);
          this.colorMatrix([e, i, i, 0, 0, i, e, i, 0, 0, i, i, e, 0, 0, 0, 0, 0, 1, 0])
      }
      desaturate() {
          this.saturation(-1)
      }
      invert() {
          this.colorMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0])
      }
      contrast(t) {
          var e = Number(t) + 1,
              i = -128 * (e - 1);
          this.colorMatrix([e, 0, 0, 0, i, 0, e, 0, 0, i, 0, 0, e, 0, i, 0, 0, 0, 1, 0])
      }
      hue(t) {
          t = t / 180 * Math.PI;
          var e = Math.cos(t),
              i = Math.sin(t),
              s = .213,
              n = .715,
              a = .072;
          this.colorMatrix([s + .787 * e + i * -s, n + e * -n + i * -n, a + e * -a + .928 * i, 0, 0, s + e * -s + .143 * i, n + e * (1 - n) + .14 * i, a + e * -a + -.283 * i, 0, 0, s + e * -s + -.787 * i, n + e * -n + i * n, a + .928 * e + i * a, 0, 0, 0, 0, 0, 1, 0])
      }
      colorize(t) {
          const e = .3086,
              i = .6094,
              s = .082;
          var n, a, r, o = (t -= 1) / 60,
              h = Math.round(o),
              c = o - h,
              l = 1 * (1 - 1 * c),
              d = 1 * (1 - 1 * (1 - c));
          switch (h) {
              case 0:
                  n = 1, a = d, r = 0;
                  break;
              case 1:
                  n = l, a = 1, r = 0;
                  break;
              case 2:
                  n = 0, a = 1, r = d;
                  break;
              case 3:
                  n = 0, a = l, r = 1;
                  break;
              case 4:
                  n = d, a = 0, r = 1;
                  break;
              case 5:
                  n = 1, a = 0, r = l;
                  break;
              case 6:
                  n = 1, a = d, r = 0
          }
          this.colorMatrix([n * e, n * i, n * s, 0, 0, a * e, a * i, a * s, 0, 0, r * e, r * i, r * s, 0, 0, 0, 0, 0, 1, 0])
      }
      exposure(t) {
          let e = this.compiledProgram.get("exposure");
          if (!e) {
              let t = ["#define GLSLIFY 1", "precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "const float epsilon = 0.000001;", "const float mx = 1.0 - epsilon;", "const mat3 matRGBtoROMM = mat3(0.5293459296226501, 0.3300727903842926, 0.14058130979537964, 0.09837432950735092, 0.8734610080718994, 0.028164653107523918, 0.01688321679830551, 0.11767247319221497, 0.8654443025588989);", "const mat3 matROMMtoRGB = mat3(2.0340757369995117, -0.727334201335907, -0.3067416846752167, -0.22881317138671875, 1.2317301034927368, -0.0029169507324695587, -0.008569774217903614, -0.1532866358757019, 1.1618564128875732);", "float ramp(in float t){", "t *= 2.0;", "if (t >= 1.0) {", "t -= 1.0;", "t = log(0.5) / log(0.5*(1.0-t) + 0.9332*t);", "}", "return clamp(t, 0.001, 10.0);", "}", "vec3 rgb2hsv(in vec3 c) {", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsv2rgb(in vec3 c) {", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "vec3 setHue(in vec3 res, in vec3 base) {", "vec3 hsv = rgb2hsv(base);", "vec3 res_hsv = rgb2hsv(res);", "return hsv2rgb(vec3(hsv.x, res_hsv.y, res_hsv.z));", "}", "void main() {", "lowp vec4 col = texture2D(texture, uv.xy);", "vec3 base = col.rgb * matRGBtoROMM;", "float a = abs(amount) * col.a + epsilon;", "float v = pow(2.0, a*2.0+1.0)-2.0;", "float m = mx - exp(-v);", "vec3 res = (amount > 0.0) ? (1.0 - exp(-v*base)) / m : log(1.0-base*m) / -v;", "res = mix(base, res, min(a*100.0, 1.0));", "res = setHue(res, base);", "res = pow(res, vec3(ramp(1.0 - (0.0 * col.a + 1.0) / 2.0)));", "res = res * matROMMtoRGB;", "gl_FragColor = vec4(res, col.a);", "}"].join("\n");
              e = this.compileShader(t), this.compiledProgram.set("exposure", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      highlight(t) {
          let e = this.compiledProgram.get("highlight");
          if (!e) {
              let t = ["#define GLSLIFY 1", "precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "const float epsilon = 0.000001;", "const float mx = 1.0 - epsilon;", "const float PI = 3.1415926535897932384626433832795;", "const mat3 matRGBtoROMM = mat3(0.5293459296226501, 0.3300727903842926, 0.14058130979537964, 0.09837432950735092, 0.8734610080718994, 0.028164653107523918, 0.01688321679830551, 0.11767247319221497, 0.8654443025588989);", "const mat3 matROMMtoRGB = mat3(2.0340757369995117, -0.727334201335907, -0.3067416846752167, -0.22881317138671875, 1.2317301034927368, -0.0029169507324695587, -0.008569774217903614, -0.1532866358757019, 1.1618564128875732);", "float luma_romm(in vec3 color){", "return dot(color, vec3(0.242655, 0.755158, 0.002187));", "}", "float luma(in vec3 color){", "return dot(color, vec3(0.298839, 0.586811, 0.11435));", "}", "vec3 rgb2hsv(in vec3 c) {", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsv2rgb(in vec3 c) {", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "vec3 setHue(in vec3 res, in vec3 base) {", "vec3 hsv = rgb2hsv(base);", "vec3 res_hsv = rgb2hsv(res);", "return hsv2rgb(vec3(hsv.x, res_hsv.y, res_hsv.z));", "}", "float gaussian(in float x) {", "return 1.0 - exp(-PI*2.0*x*x);", "}", "void main() {", "lowp vec4 col = texture2D(texture, uv.xy);", "lowp vec3 map = col.rgb;", "vec3 base = col.rgb * matRGBtoROMM;", "float base_lum = luma(col.rgb);", "float map_lum = luma_romm(map * matRGBtoROMM);", "float exposure = mix(amount, 0.0, 1.0 - map_lum) * col.a;", "float a = abs(exposure) * col.a + epsilon;", "float v = pow(2.0, a+1.0)-2.0;", "float m = mx - exp(-v);", "vec3 res = (exposure > 0.0) ? (1.0 - exp(-v*base)) / m : log(1.0-base*m) / -v;", "res = mix(base, res, min(a*100.0, 1.0));", "res = setHue(res, base);", "res = res * matROMMtoRGB;", "gl_FragColor = vec4(res, col.a);", "}"].join("\n");
              e = this.compileShader(t), this.compiledProgram.set("highlight", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      shadows(t) {
          let e = this.compiledProgram.get("shadows");
          if (!e) {
              let t = ["#define GLSLIFY 1", "precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "const float epsilon = 0.000001;", "const float mx = 1.0 - epsilon;", "const float PI = 3.1415926535897932384626433832795;", "const mat3 matRGBtoROMM = mat3(0.5293459296226501, 0.3300727903842926, 0.14058130979537964, 0.09837432950735092, 0.8734610080718994, 0.028164653107523918, 0.01688321679830551, 0.11767247319221497, 0.8654443025588989);", "const mat3 matROMMtoRGB = mat3(2.0340757369995117, -0.727334201335907, -0.3067416846752167, -0.22881317138671875, 1.2317301034927368, -0.0029169507324695587, -0.008569774217903614, -0.1532866358757019, 1.1618564128875732);", "float luma_romm(in vec3 color){", "return dot(color, vec3(0.242655, 0.755158, 0.002187));", "}", "float luma(in vec3 color){", "return dot(color, vec3(0.298839, 0.586811, 0.11435));", "}", "vec3 rgb2hsv(in vec3 c) {", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsv2rgb(in vec3 c) {", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "vec3 setHue(in vec3 res, in vec3 base) {", "vec3 hsv = rgb2hsv(base);", "vec3 res_hsv = rgb2hsv(res);", "return hsv2rgb(vec3(hsv.x, res_hsv.y, res_hsv.z));", "}", "float gaussian(in float x) {", "return 1.0 - exp(-PI*2.0*x*x);", "}", "void main() {", "lowp vec4 col = texture2D(texture, uv.xy);", "lowp vec3 map = col.rgb;", "vec3 base = col.rgb * matRGBtoROMM;", "float base_lum = luma(col.rgb);", "float map_lum = luma_romm(map * matRGBtoROMM);", "float exposure = mix(0.0, amount, 1.0 - map_lum) * col.a;", "float a = abs(exposure) * col.a + epsilon;", "float v = pow(2.0, a+1.0)-2.0;", "float m = mx - exp(-v);", "vec3 res = (exposure > 0.0) ? (1.0 - exp(-v*base)) / m : log(1.0-base*m) / -v;", "res = mix(base, res, min(a*100.0, 1.0));", "res = setHue(res, base);", "res = res * matROMMtoRGB;", "gl_FragColor = vec4(res, col.a);", "}"].join("\n");
              e = this.compileShader(t), this.compiledProgram.set("shadows", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      dehaze(t) {
          let e = this.compiledProgram.get("dehaze");
          if (!e) {
              let t = "\n\n                #define GLSLIFY 1;\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform float amount;  // -1.0 ~ 1.0\n\n                uniform vec2 size;\n\n                float hazeMap(vec4 base) {\n                    vec3 color = vec3(1.0, 1.0, 1.0);\n                    vec2 step = vec2(1.0 / size.xy);\n                    const int patchRadius = 1; // the half size for shift in 3 x 3 patch.\n                    for (int i = -patchRadius; i <= patchRadius; ++i) {\n                       for (int j = -patchRadius; j <= patchRadius; ++j) {\n                           vec2 uv = clamp(uv + (vec2(i, j) * step), 0.0, 1.0);\n                           color = min(color, base.rgb);\n                        }\n                    }\n                    return min(color.r, min(color.g, color.b));\n                }\n\n                void main() {\n                    \n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    lowp float haze = hazeMap(base);\n\n                    float transmission = 1.0 - 0.95 * haze;\n                    const float A = 0.95; //0.95 intensity. We can consider to collect 0.1% brightest pixel from the dark channel image.\n                    const float t0 = 0.1; //0.1 in the paper, we can increase it for solving the color bleeding.\n                    float t = mix(1.0, max(t0, transmission), amount);\n                    vec3 J = (base.rgb - A) / t + A;\n                    gl_FragColor = vec4(J, base.a);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("dehaze", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform2f(e.uniform.size, this.width, this.height), this.ctx.uniform1f(e.uniform.amount, t), this.draw(e)
      }
      curves(t) {
          this.paletteMap || (this.paletteMap = new ImageData(256, 1)), void 0 !== t.preset && (t = l.a.createCurveSet(t)), l.b.fillPaletteMap(t, this.paletteMap), this.mapping(this.paletteMap)
      }
      levels(t) {
          this.paletteMap || (this.paletteMap = new ImageData(256, 1)), c.a.fillPaletteMap(t, this.paletteMap), this.mapping(this.paletteMap)
      }
      multilevels(t) {
          this.paletteMap || (this.paletteMap = new ImageData(256, 1)), c.a.fillRGBPaletteMap(t[0].isFlat() ? void 0 : t[0], t[1].isFlat() ? void 0 : t[1], t[2].isFlat() ? void 0 : t[2], this.paletteMap), this.mapping(this.paletteMap)
      }
      mapping(t) {
          let e = this.compiledProgram.get("mapping");
          if (!e) {
              let t = "\n                #define GLSLIFY 1\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform sampler2D paletteMap;\n\n                void main() {\n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    float r = texture2D(paletteMap, vec2(base.r, 0)).r;\n                    float g = texture2D(paletteMap, vec2(base.g, 0)).g;\n                    float b = texture2D(paletteMap, vec2(base.b, 0)).b;\n                    gl_FragColor = vec4(r, g, b, base.a);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("mapping", e)
          }
          this.ctx.useProgram(e.program);
          let i = e.getTextureById("paletteMap");
          i.createTexture(this.ctx, t.width, t.height), i.uploadData(this.ctx, t), this.draw(e)
      }
      lookup(t) {
          let e = this.compiledProgram.get("lookup");
          if (!e) {
              let t = "\n            precision highp float;\n            varying vec2 uv;\n\n            uniform sampler2D texture;\n            uniform sampler2D paletteMap;\n            \n            float luma(vec3 color) {\n                return dot(color, vec3(0.299, 0.587, 0.114));\n            }\n\n            void main() {\n                lowp vec4 base = texture2D(texture, uv.xy);\n                float avg = luma(base.rgb);\n                float r = texture2D(paletteMap, vec2(avg, 0)).r;\n                float g = texture2D(paletteMap, vec2(avg, 0)).g;\n                float b = texture2D(paletteMap, vec2(avg, 0)).b;\n                gl_FragColor = vec4(r, g, b, base.a);\n            }";
              e = this.compileShader(t), this.compiledProgram.set("lookup", e)
          }
          this.ctx.useProgram(e.program);
          let i = e.getTextureById("paletteMap");
          i.createTexture(this.ctx, t.width, t.height), i.uploadData(this.ctx, t), this.draw(e)
      }
      toning(t) {
          this.paletteMap || (this.paletteMap = new ImageData(256, 1)), h.a.fillPaletteMap(t, this.paletteMap);
          let e = this.compiledProgram.get("toning");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform sampler2D paletteMap;\n\n                uniform float amount;\n                \n                float luma(vec3 color) {\n                    return dot(color, vec3(0.299, 0.587, 0.114));\n                }\n\n                void main() {\n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    float avg = luma(base.rgb);\n                    float r = texture2D(paletteMap, vec2(avg, 0)).r;\n                    float g = texture2D(paletteMap, vec2(avg, 0)).g;\n                    float b = texture2D(paletteMap, vec2(avg, 0)).b;\n                    gl_FragColor = mix(base, vec4(r, g, b, base.a), amount);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("toning", e)
          }
          this.ctx.useProgram(e.program);
          let i = e.getTextureById("paletteMap");
          i.createTexture(this.ctx, this.paletteMap.width, this.paletteMap.height), i.uploadData(this.ctx, this.paletteMap), this.ctx.uniform1f(e.uniform.amount, t.amount), this.draw(e)
      }
      fill(t) {
          let e = this.compiledProgram.get("fill-" + t.blend);
          if (!e) {
              let i = "";
              switch (t.blend) {
                  case "soft-light":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendSoftLight(float base, float blend) {\n                            return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n                        }\n                        vec3 blendSoftLight(vec3 base, vec3 blend) {\n                            return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n                        }\n                        vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n                            return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendSoftLight(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "hard-light":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendOverlay(float base, float blend) {\n                            return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n                        }\n                        vec3 blendOverlay(vec3 base, vec3 blend) {\n                            return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n                        }\n                        vec3 blendHardLight(vec3 base, vec3 blend) {\n                            return blendOverlay(blend,base);\n                        }\n                        vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n                            return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendHardLight(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "vivid-light":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendColorBurn(float base, float blend) {\n                            return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n                        }\n                        float blendColorDodge(float base, float blend) {\n                            return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n                        }\n                        float blendVividLight(float base, float blend) {\n                            return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n                        }\n                        vec3 blendVividLight(vec3 base, vec3 blend) {\n                            return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n                        }\n                        vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n                            return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendVividLight(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "overlay":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendOverlay(float base, float blend) {\n                            return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n                        }\n                        vec3 blendOverlay(vec3 base, vec3 blend) {\n                            return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n                        }\n                        vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n                            return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendOverlay(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "multiply":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        vec3 blendMultiply(vec3 base, vec3 blend) {\n                            return base*blend;\n                        }\n                        vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n                            return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendMultiply(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "color-dodge":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        float blendColorDodge(float base, float blend) {\n                            return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n                        }\n                        vec3 blendColorDodge(vec3 base, vec3 blend) {\n                            return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n                        }\n                        vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n                            return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendColorDodge(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "color-burn":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        float blendColorBurn(float base, float blend) {\n                            return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n                        }\n                        vec3 blendColorBurn(vec3 base, vec3 blend) {\n                            return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n                        }\n                        vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n                            return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendColorBurn(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  case "screen":
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        float blendScreen(float base, float blend) {\n                            return 1.0-((1.0-base)*(1.0-blend));\n                        }\n                        vec3 blendScreen(vec3 base, vec3 blend) {\n                            return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n                        }\n                        vec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n                            return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendScreen(base.rgb, color.rgb, amount), base.a);\n                        }";
                      break;
                  default:
                      i = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = mix(base, color, amount);\n                        }"
              }
              e = this.compileShader(i), this.compiledProgram.set("fill-" + t.blend, e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform4f(e.uniform.color, t.color.r / 255, t.color.g / 255, t.color.b / 255, 1), this.ctx.uniform1f(e.uniform.amount, t.amount), this.draw(e)
      }
      glamour(t) {
          let e = this.compiledProgram.get("glamour");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 px;\n\n                float normpdf(in float x, in float sigma) {\n                    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;\n                }\n\n                vec3 blurMap() {\n                    //declare stuff\n                    const int mSize = 11;\n                    const int kSize = (mSize-1)/2;\n                    float kernel[mSize];\n                    vec3 final_colour = vec3(0.0);\n                    \n                    //create the 1-D kernel\n                    float sigma = 7.0;\n                    float Z = 0.0;\n                    for (int j = 0; j <= kSize; ++j){\n                        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);\n                    }\n                    \n                    //get the normalization factor (as the gaussian has been clamped)\n                    for (int j = 0; j < mSize; ++j){\n                        Z += kernel[j];\n                    }\n                    \n                    //read out the texels\n                    for (int i=-kSize; i <= kSize; ++i){\n                        for (int j=-kSize; j <= kSize; ++j){\n                            final_colour += kernel[kSize+j] * kernel[kSize+i] * texture2D(texture, (uv.xy + vec2(float(i),float(j))*px)).rgb;\n                        }\n                    }\n                    return vec3(final_colour/(Z*Z));\n                }\n\n                float luma(vec3 color) {\n                    return dot(color, vec3(0.299, 0.587, 0.114));\n                }\n\n                void main() {\n                    \n                    vec4 base = texture2D(texture, uv);\n                    vec3 color = blurMap();\n                    \n                    color = vec3(luma(color));\n\n                    color = vec3(\n                        (base.r <= 0.5) ? (2.0 * base.r * color.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - color.r)),\n                        (base.g <= 0.5) ? (2.0 * base.g * color.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - color.g)),\n                        (base.b <= 0.5) ? (2.0 * base.b * color.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - color.b))\n                    );\n                \n                    gl_FragColor = mix(base, vec4(color, base.a), amount);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("glamour", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.draw(e)
      }
      polarcoordinates(t) {
          let e = this.compiledProgram.get("polarcoordinates");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                #define PI 3.14159265359\n                #define PI_2 6.2831\n\n                uniform sampler2D texture;\n                uniform int flip;\n                uniform float overlap;\n                uniform float rotate;\n                uniform vec2 resolution;\n                uniform int symmetry;\n\n                mat2 rotate2d(float _angle){\n                    return mat2(cos(_angle),-sin(_angle),\n                                sin(_angle),cos(_angle));\n                }\n\n                vec2 squareImage(vec2 uv) {\n                    // Aspect Ratio\n                    float ar = resolution.x / resolution.y;\n\n                    // Square the image at the center if rectangular\n                    if (symmetry == 1) {\n                        if (resolution.x > resolution.y) {\n                            float leftEdge = (1.0-1.0/ar) * 0.5;\n                            float rightEdge = 1.0 - leftEdge;\n\n                            if (uv.x < leftEdge) {\n                                uv = vec2(0, uv.y); // Fill in the left edge\n                            } else if (uv.x > rightEdge) {\n                                uv = vec2(1, uv.y); // Fill in the right edge\n                            }\n                            else {\n                                uv.x -= leftEdge; // Square the image on X\n                                uv.x *= ar;\n                            }\n                        } else if (resolution.y > resolution.x) {\n                            float bottomEdge = (1.0-ar) * 0.5;\n                            float topEdge = 1.0 - bottomEdge;\n\n                            if (uv.y < bottomEdge) {\n                                uv = vec2(uv.x, 0); // Fill in the bottom edge\n                            } else if (uv.y > topEdge) {\n                                uv = vec2(uv.x, 1); // Fill in the top edge\n                            }\n                            else {\n                                uv.y -= bottomEdge; // Square the image on Y\n                                uv.y /= ar;\n                            }\n                        }\n                    }\n                    return uv;\n                }\n\n                void main(void) {           \n                    // Square the image\n                    vec2 uvc = squareImage(uv);\n\n                    // Bring uv coordinates to center 0.5\n                    uvc = uvc-0.5;\n\n                    // Rotate uv by angle\n                    uvc = rotate2d( rotate ) * uvc;\n\n                    // Cartesian to polar\n                    float r = length(uvc) * 2.0;\n                    float a = atan(uvc.x, uvc.y);\n\n                    // Move from -PI -> PI to 0 -> 1\n                    vec2 uvp = vec2(a / (PI_2 + overlap) + 0.5, r);\n\n                    // Flip the image by 180 degrees\n                    uvp = flip == 1 ? 1.0 - uvp : uvp;\n\n                    // Compute color\n                    gl_FragColor = texture2D(texture, uvp);\n                }\n            ";
              e = this.compileShader(t), this.compiledProgram.set("polarcoordinates", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1i(e.uniform.flip, t.flip ? 1 : 0), this.ctx.uniform1i(e.uniform.symmetry, t.symmetry ? 1 : 0), this.ctx.uniform1f(e.uniform.overlap, t.overlap), this.ctx.uniform1f(e.uniform.rotate, t.rotate), this.ctx.uniform2f(e.uniform.resolution, this.width, this.height), this.draw(e)
      }
      bloom(t) {
          let e = this.compiledProgram.get("bloom");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 px;\n                float thresh = .5;\n                \n                void main() {\n                    vec4 sum = vec4(0);\n                \n                    // mess of for loops due to gpu compiler/hardware limitations\n                    int j=-2;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=-1;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=0;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=1;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=2;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    sum/=25.0;\n                \n                    gl_FragColor= texture2D(texture, uv);\n                \n                    // use the blurred colour if it's bright enough\n                    if (length(sum) > thresh) {\n                        gl_FragColor += sum*amount;\n                    }\n                }";
              e = this.compileShader(t), this.compiledProgram.set("bloom", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, t), this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height), this.draw(e)
      }
      posterize(t) {
          let e = this.compiledProgram.get("posterize");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                float areas = 256.0 / amount;\n                float values = 255.0 / (amount - 1.0);\n                \n                void main() {\n                    vec4 px = texture2D(texture, uv);\n\n                    px.r = floor(values * floor((px.r*255.0) / areas))/255.0;\n                    px.g = floor(values * floor((px.g*255.0) / areas))/255.0;\n                    px.b = floor(values * floor((px.b*255.0) / areas))/255.0;\n\n                    gl_FragColor = px;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("posterize", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, 100 * t + 1), this.draw(e)
      }
      fringe(t) {
          let e = this.compiledProgram.get("fringe");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 amount;\n\n                void main() {\n                    vec2 dir = uv - vec2( .5 );\n                    float d = .7 * length( dir );\n                    normalize( dir );\n                    vec2 value = d * dir * amount;\n                \n                    vec4 c1 = texture2D( texture, uv - value);\n                    vec4 c2 = texture2D( texture, uv );\n                    vec4 c3 = texture2D( texture, uv + value);\n                    \n                    gl_FragColor = vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.b);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("fringe", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform2f(e.uniform.amount, t, t), this.draw(e)
      }
      rgbSplit(t) {
          let e = 0,
              i = 0,
              s = 0;
          const n = t.distance;
          switch (t.type) {
              case "red-blue":
                  e = n, s = -n;
                  break;
              case "green-red":
                  e = -n, i = n;
                  break;
              case "blue-green":
                  i = -n, s = n;
                  break;
              case "red":
                  e = n;
                  break;
              case "green":
                  i = n;
                  break;
              case "blue":
                  s = n
          }
          let a = this.compiledProgram.get("rgb-split");
          if (!a) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                uniform vec2 r;\n                uniform vec2 g;\n                uniform vec2 b;\n\n                void main() {\n                \n                    vec4 px = texture2D(texture, uv);\n\n                    vec4 c1 = texture2D( texture, uv - r);\n                    vec4 c2 = texture2D( texture, uv - g);\n                    vec4 c3 = texture2D( texture, uv - b);\n                    \n                    gl_FragColor = mix(px, vec4( c1.r, c2.g, c3.b, (c1.a + c2.a + c3.a)/3.0), amount);\n                }";
              a = this.compileShader(t), this.compiledProgram.set("rgb-split", a)
          }
          this.ctx.useProgram(a.program), this.ctx.uniform1f(a.uniform.amount, t.amount);
          var r = t.direction * Math.PI / 180,
              o = Math.cos(r),
              h = Math.sin(r);
          this.ctx.uniform2f(a.uniform.r, o * e, h * e), this.ctx.uniform2f(a.uniform.g, o * i, h * i), this.ctx.uniform2f(a.uniform.b, o * s, h * s), this.draw(a)
      }
      interference(t) {
          let e = this.compiledProgram.get("interference");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float seed;\n                uniform float amount;\n                uniform int direction;\n\n                float rand(vec2 co){\n                    return fract(sin(dot(co.xy, vec2(12.9898,78.233)*3.141)) * 43758.5453);\n                }\n\n                void main() {\n\n                    float rand1 = rand(vec2(seed,seed));\n                    float rand2 = rand(vec2(seed,rand1));\n                \n                    float rand1xy = rand(vec2(rand1*uv.x,rand2*uv.y));\n                    float rand2xy = rand(vec2(rand1*uv.y,rand2*uv.x));\n                  \n                    float rand1x = rand(vec2(rand1*uv.x,rand2));\n                    float rand2x = rand(vec2(rand1x,rand1x));     \n\n                    float rand1y = rand(vec2(rand1*uv.y,rand2));\n                    float rand2y = rand(vec2(rand1y,rand1y));                       \n                    \n                    if(direction == 0) {\n                        if(rand2y/100.0 > rand1y) {\n                            if(rand2xy < 0.3) gl_FragColor = vec4(rand1xy, rand1xy, rand1xy, 0.0);\n                            else gl_FragColor = texture2D(texture, uv);\n                        }\n                        else {\n                            gl_FragColor = texture2D(texture, vec2(uv.x + rand1y * amount, uv.y));\n                        }\n                    } else {\n                        if(rand2x/100.0 > rand1x) {\n                            if(rand2xy < 0.3) gl_FragColor = vec4(rand1xy, rand1xy, rand1xy, 0.0);\n                            else gl_FragColor = texture2D(texture, uv);\n                        }\n                        else {\n                            gl_FragColor = texture2D(texture, vec2(uv.x, uv.y + rand1x * amount));\n                        }\n                    }\n                }";
              e = this.compileShader(t), this.compiledProgram.set("interference", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.seed, t.seed), this.ctx.uniform1f(e.uniform.amount, t.amount / 15), this.ctx.uniform1i(e.uniform.direction, t.direction ? 1 : 0), this.draw(e)
      }
      bleed(t) {
          let e = this.compiledProgram.get("bleed");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float seed;\n                uniform float block;\n                uniform float amplitude;\n              \n                float rand(vec2 n) { \n                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n                }\n                float randomRange (in vec2 sd, in float min, in float max) {\n                    return min + rand(sd) * (max - min);\n                }\n                float insideRange(float v, float bottom, float top) {\n                   return step(bottom, v) - step(top, v);\n                }\n\n                float noise(vec2 uv, float blockiness){   \n                    vec2 lv = fract(uv);\n                    vec2 id = floor(uv);\n                    \n                    float n1 = rand(id);\n                    float n2 = rand(id+vec2(1,0));\n                    float n3 = rand(id+vec2(0,1));\n                    float n4 = rand(id+vec2(1,1));\n                    \n                    vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n\n                    return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n                }\n\n                float fbm(vec2 uv, int count, float blockiness, float complexity) {\n                    float val = 0.0;\n                    float amp = 0.5;\n                    \n                    for (int i = 0; i < 1000; i++) {\n                        if (i == count) break;\n                        \n                        val += amp * noise(uv, blockiness);\n                        amp *= 0.5;\n                        uv *= complexity;    \n                    }  \n                    return val;\n                }\n\n                const float shift = 2.0; //2\n                const float max = 10.0; //5\n\n                void main()\n                {\n                    vec4 px = texture2D(texture, uv);\n\n                    for (float i = 0.0; i < 100.0; i += 1.0) {\n\n                        if(i == 20.0) break;\n\n                        float sliceY = rand(vec2(seed, 2035.0 + float(i)));\n                        float sliceX = rand(vec2(seed, 5234.0 + float(i)));\n\n                        float sliceH = rand(vec2(seed, 2035.0 - float(i))) * 0.1;\n                        float sliceW = rand(vec2(seed, 5234.0 + float(i))) * 1.5;\n\n                        if(insideRange(uv.y, sliceY, fract(sliceY+sliceH)) == 1.0 && insideRange(uv.x, sliceX, fract(sliceX+sliceW)) == 1.0){\n                           \n                            vec2 id = floor(uv * 5.0);\n        \n                            // Generate shift amplitude\n                            float shift = amplitude * fbm(uv, int(id * 6.), shift, block);\n        \n                            float r = texture2D(texture, vec2(uv.x + shift, uv.y)).r * (1. - shift) ;\n                            float g = texture2D(texture, vec2(uv.x - shift, uv.y)).g * (1. - shift) + rand(id) * shift;\n                            float b = texture2D(texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n        \n                            px = mix(vec4(r, g, b, px.a), px, 0.5);\n                        }\n                        gl_FragColor = px;\n                    }\n                }";
              e = this.compileShader(t), this.compiledProgram.set("bleed", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.seed, t.seed), this.ctx.uniform1f(e.uniform.amplitude, t.amplitude), this.ctx.uniform1f(e.uniform.block, t.block), this.draw(e)
      }
      slice(t) {
          let e = this.compiledProgram.get("slice");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float seed;\n                uniform float amount;\n                uniform float distance;\n                uniform int line;\n\n                //2D (returns 0 - 1)\n                float random2d(vec2 n) { \n                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n                }\n                float randomRange (in vec2 sd, in float min, in float max) {\n                    return min + random2d(sd) * (max - min);\n                }\n                \n                // return 1 if v inside 1d range\n                float insideRange(float v, float bottom, float top) {\n                   return step(bottom, v) - step(top, v);\n                }\n                  \n                void main() {\n                  \n                    vec4 px = texture2D(texture, uv);\n\n                    for (float i = 0.0; i < 100.0; i += 1.0) {\n\n                        if(i == amount) break;\n\n                        float sliceY = random2d(vec2(seed, 2035.0 + float(i)));\n                        float sliceX = random2d(vec2(seed, 5234.0 + float(i)));\n\n                        float sliceH = random2d(vec2(seed, 2035.0 - float(i))) * 0.1;\n                        float sliceW = random2d(vec2(seed, 5234.0 + float(i))) * 1.5;\n\n                        float hOffset = randomRange(vec2(seed, 2035.0 + float(i)), -distance*.5, distance*.5);\n                        float wOffset = randomRange(vec2(seed, 5234.0 + float(i)), -distance, distance);\n\n                        vec2 uvOff = uv;\n                        uvOff.x += wOffset;\n                        uvOff.y += hOffset;\n\n                        if(insideRange(uv.y, sliceY, fract(sliceY+sliceH)) == 1.0 && (line == 1 || insideRange(uv.x, sliceX, fract(sliceX+sliceW)) == 1.0)){\n                            px = texture2D(texture, uvOff);\n                        }\n                    }\n                    gl_FragColor = px;\n                }";
              e = this.compileShader(t), this.compiledProgram.set("slice", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.seed, t.seed), this.ctx.uniform1f(e.uniform.amount, t.amount), this.ctx.uniform1f(e.uniform.distance, t.distance / 3), this.ctx.uniform1i(e.uniform.line, t.line ? 1 : 0), this.draw(e)
      }
      pixelate(t) {
          let e = this.compiledProgram.get("pixelate");
          if (!e) {
              const t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform vec2 resolution;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    float d = 1.0 / amount;\n                    float ar = resolution.x / resolution.y;\n                    float u = floor( uv.x / d ) * d;\n                    d = ar / amount;\n                    float v = floor( uv.y / d ) * d;\n                    gl_FragColor = texture2D(texture, vec2( u, v ) );\n                }";
              e = this.compileShader(t), this.compiledProgram.set("pixelate", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.amount, 4 * (100 - 100 * t)), this.ctx.uniform2f(e.uniform.resolution, this.width, this.height), this.draw(e)
      }
      scanlines(t) {
          let e = this.compiledProgram.get("scanlines");
          if (!e) {
              let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform float size;\n\n                uniform int colorize;\n                uniform int direction;\n\n                void main() {\n                    \n                    vec2 sl;\n                    vec4 scanlines;\n                    vec4 color = texture2D(texture, uv);\n\n                    if(direction == 0) {\n                        sl = vec2(sin(uv.y * size), cos(uv.y * size)) * amount;\n                    }\n                    else {\n                        sl = vec2(sin(uv.x * size), cos(uv.x * size)) * amount;\n                    }\n\n                    if(colorize == 1) {\n                        scanlines = vec4(sl.x, sl.y, sl.x, 1.0);\n                    } \n                    else {\n                        scanlines = vec4(sl.x, sl.x, sl.x, 1.0);\n                    }\n\n                    gl_FragColor = vec4(color.r + scanlines.r, color.g + scanlines.g, color.b + scanlines.b, color.a);\n                }";
              e = this.compileShader(t), this.compiledProgram.set("scanlines", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.size, t.direction ? Math.round(this.height / t.size) : Math.round(this.width / t.size)), this.ctx.uniform1f(e.uniform.amount, t.amount), this.ctx.uniform1i(e.uniform.colorize, t.colorize ? 1 : 0), this.ctx.uniform1i(e.uniform.direction, t.direction ? 1 : 0), this.draw(e)
      }
      mosaic(t) {
          let e = this.compiledProgram.get("mosaic");
          if (!e) {
              const t = "\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform vec2 num;\n                \n                void main()\n                {\n                    vec2 uv = uv;\n                    vec2 uv2 = floor(uv*num)/num;\n                    uv -= uv2;\n                    uv *= num;\n                    gl_FragColor = texture2D(texture, \n                                    uv2 + vec2(step(1.0-uv.y,uv.x)/(2.0*num.x),\n                                    step(uv.x,uv.y)/(2.0*num.y)));\n                }";
              e = this.compileShader(t), this.compiledProgram.set("mosaic", e)
          }
          let i = Math.round(100 * (1 - t)),
              s = Math.round(this.height / this.width * i);
          this.ctx.useProgram(e.program), this.ctx.uniform2f(e.uniform.num, i, s), this.draw(e)
      }
      art(t) {
          let e = this.compiledProgram.get("art");
          if (!e) {
              let t = ["precision highp float;", "uniform sampler2D texture;", "varying vec2 uv;", "void main() {", "vec4 color, tmp, add;", "vec2 uv = uv + vec2( sin( uv.y * 100.0 ), sin( uv.x * 100.0 )) * 0.0005;", "color = texture2D( texture, uv );", "add = tmp = texture2D( texture, uv + vec2( 0.0015, 0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( -0.0015, 0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( -0.0015, -0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0.0015, -0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0.002, 0.0 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( -0.002, 0.0 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0, 0.002 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0, -0.002 ));", "if( tmp.r < color.r ) color = tmp;", "uv = (uv - vec2(0.5)) * vec2(0.7);", "gl_FragColor = vec4(mix(color.rgb * color.rgb * vec3(1.8), color.ggg * color.ggg - vec3(0.4), vec3(dot(uv, uv))), 1.0);", "}"].join("\n");
              e = this.compileShader(t), this.compiledProgram.set("art", e)
          }
          this.ctx.useProgram(e.program), this.ctx.uniform1f(e.uniform.screenWidth, this.canvas.width), this.ctx.uniform1f(e.uniform.screenHeight, this.canvas.height), this.ctx.uniform1f(e.uniform.sampleDistance, t), this.ctx.uniform1f(e.uniform.waveFactor, .01), this.draw(e)
      }
      cloneChain() {
          const t = [];
          for (let e = 0; e < this.chain.length; e++) {
              const i = this.chain[e];
              let s;
              switch (i.type) {
                  case "curves":
                      {
                          const t = i.value,
                              e = t.rgb.map((t => t.clone())),
                              n = t.red.map((t => t.clone())),
                              a = t.green.map((t => t.clone())),
                              r = t.blue.map((t => t.clone()));
                          s = new l.b(t.scale, e, n, a, r);
                          break
                      }
                  case "levels":
                      {
                          const t = i.value;
                          s = new c.a(t.minin, t.maxin, t.minout, t.maxout, t.midin, t.mid);
                          break
                      }
                  case "toning":
                      {
                          const t = i.value;
                          s = new h.a(t.highlight.clone(), t.shadow.clone(), t.amount);
                          break
                      }
                  case "fill":
                      {
                          const t = i.value;
                          s = new o.a(t.color.clone(), t.blend, t.amount);
                          break
                      }
                  default:
                      s = i.value
              }
              t.push(new u(i.type, s))
          }
          return t
      }
  }
  class u {
      constructor(t, e) {
          this.type = t, this.value = e
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return r
  }));
  var s = i(4),
      n = i(11),
      a = i(33);
  class r {
      constructor(t) {
          this.value = t, this.getType = () => this.value instanceof s.a ? "color" : this.value instanceof n.b ? "gradient" : this.value instanceof a.a ? "pattern" : void 0, this.getStringValue = () => this.value instanceof s.a ? this.value.toHEX() : this.value instanceof n.b || this.value instanceof a.a ? this.value.toJSON() : void 0, this.addToCanvas = t => {
              this.value instanceof s.a ? t.fillStyle = this.value.toHEX() : this.value instanceof n.b ? t.fillStyle = this.value.createCanvasGradient(t) : this.value instanceof a.a && (t.fillStyle = this.value.createCanvasPattern(t))
          }
      }
  }
  r.fromString = async(t, e) => {
      let i;
      return "color" === t && /^#[0-9A-F]{6}$/i.test(e) ? i = new r(s.a.fromHEX(e)) : "gradient" === t ? i = new r(n.b.fromJSON(e)) : "pattern" === t && (i = new r(await a.a.fromJSON(e))), i
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return u
  }));
  var s = i(1),
      n = i(8),
      a = i(13),
      r = i(29),
      o = i(6),
      h = i(4),
      c = i(3),
      l = i(26),
      d = i(17);
  class u extends n.a {
      constructor(t = s.b.guid(), e, i, g) {
          super(n.a.TYPE_SHAPE), this.id = t, this.prepare = async() => {
              if ("svg" === this.shapeSettings.variant && !this.image) {
                  let t = new Blob([this.shapeSettings.content], {
                      type: "image/svg+xml"
                  });
                  this.image = await a.a.loadImageFile(t), this.rect || (this.rect = new o.a(0, 0, this.image.width, this.image.height))
              }
              "path" === this.shapeSettings.variant && (this.path2D = new Path2D(this.shapeSettings.content)), this.shapeSettings.fillType && (this.fill = await r.a.fromString(this.shapeSettings.fillType, this.shapeSettings.fillValue)), "line" === this.shapeSettings.variant && this.shapeSettings.outlineSize !== this.rect.height && (this.rect.height = this.shapeSettings.outlineSize), this.canvas || (this.canvas = s.b.createCanvas(this.rect.width, this.rect.height)), this.render()
          }, this.setVariant = t => {
              switch (t) {
                  case "rounded":
                      this.shapeSettings.variant = "rounded";
                      break;
                  case "rectangle":
                      this.shapeSettings.variant = "rectangle";
                      break;
                  case "ellipse":
                      this.shapeSettings.variant = "ellipse";
                      break;
                  case "line":
                      this.shapeSettings.variant = "line"
              }
              this.render()
          }, this.setPath = (t, e = !1) => {
              e || (this.shapeSettings.content = t), this.shapeSettings.variant = "path", this.path2D = new Path2D(t), this.render()
          }, this.setFill = (t, e = !1) => {
              this.fill = t, e || (this.shapeSettings.fillType = t.getType(), this.shapeSettings.fillValue = t.getStringValue()), this.render()
          }, this.setOutline = (t, e) => {
              this.shapeSettings.outlineSize = t, this.shapeSettings.outlineColor = e, "line" === this.shapeSettings.variant && (this.rect.height = 0 === t ? 1 : t), this.render()
          }, this.setShadow = (t, e, i, s, n, a) => {
              this.shapeSettings.shadow = t, this.shapeSettings.shadowBlur = e, this.shapeSettings.shadowOpacity = i, this.shapeSettings.shadowColor = s, this.shapeSettings.shadowDistance = n, this.shapeSettings.shadowDirection = a, this.render()
          }, this.setRadii = t => {
              this.shapeSettings.radii = t, this.render()
          }, this.render = (t = !1) => {
              if (!this.canvas) return;
              const e = this.canvas.getContext("2d");
              if (this.canvas.width !== this.rect.width || this.canvas.height !== this.rect.height ? (this.canvas.height = this.rect.height, this.canvas.width = this.rect.width) : e.clearRect(0, 0, this.canvas.width, this.canvas.height), "svg" === this.shapeSettings.variant) return e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "high", void e.drawImage(this.image, 0, 0, this.rect.width, this.rect.height);
              if ("line" === this.shapeSettings.variant) e.fillStyle = this.shapeSettings.outlineColor, e.fillRect(0, 0, this.rect.width, this.rect.height);
              else {
                  e.save();
                  let t, i = 2 * this.shapeSettings.outlineSize,
                      s = this.shapeSettings.outlineSize,
                      n = this.rect.width - i,
                      a = this.rect.height - i,
                      r = s > 0,
                      o = !(!this.fill || !this.fill.value);
                  switch (e.lineWidth = i, e.strokeStyle = this.shapeSettings.outlineColor, this.shapeSettings.variant) {
                      case "path":
                          t = new Path2D, t.addPath(this.path2D, (new DOMMatrix).scale(n / 100, a / 100)), e.translate(s, s);
                          break;
                      case "rounded":
                          l.a.roundRect(e, s, s, n, a, this.shapeSettings.radii);
                          break;
                      case "rectangle":
                          l.a.rectangle(e, s, s, n, a);
                          break;
                      case "ellipse":
                          l.a.ellipse(e, new c.a(s, s), new c.a(s + n, s + a))
                  }
                  r && t ? e.stroke(t) : r && e.stroke(), o ? this.fill.addToCanvas(e) : (e.fillStyle = "#ffffff", e.globalCompositeOperation = "destination-out"), t ? e.fill(t) : e.fill(), e.restore()
              }
              if (this.shapeSettings.shadow && !t) {
                  this.baked || (this.baked = document.createElement("canvas"));
                  var i = 100 * this.shapeSettings.shadowBlur;
                  i += Math.abs(100 * this.shapeSettings.shadowDistance), this.bect = new o.a(this.rect.x - i, this.rect.y - i, this.rect.width + 2 * i, this.rect.height + 2 * i, this.rect.rotation), this.baked.width = this.bect.width, this.baked.height = this.bect.height;
                  let t = this.baked.getContext("2d");
                  var s = (this.shapeSettings.shadowDirection - 90) * Math.PI / 180,
                      n = Math.cos(s) * this.shapeSettings.shadowDistance,
                      a = Math.sin(s) * this.shapeSettings.shadowDistance;
                  t.save(), t.shadowColor = h.a.fromHEX(this.shapeSettings.shadowColor, Math.round(255 * this.shapeSettings.shadowOpacity)).toRGBA(), t.shadowBlur = 100 * this.shapeSettings.shadowBlur, t.shadowOffsetX = 100 * n, t.shadowOffsetY = 100 * a, t.drawImage(this.canvas, i, i), t.restore()
              } else this.baked = void 0, this.bect = void 0
          }, this.calculate = (t, e, i) => {
              "line" === this.shapeSettings.variant ? (this.rect.x = Math.round(t.x), this.rect.width = Math.round(e.x - t.x)) : (this.rect.x = Math.round(t.x), this.rect.y = Math.round(t.y), this.rect.width = Math.round(e.x - t.x), this.rect.width < 2 && (this.rect.width = 2), 0 !== i ? this.rect.height = Math.round(this.rect.width / i) : (this.rect.height = Math.round(e.y - t.y), this.rect.height < 2 && (this.rect.height = 2)))
          }, this.position = (t, e) => {
              this.rect && (void 0 !== t && (this.rect.x = t), void 0 !== e && (this.rect.y = e), this.bect && (this.bect.x = this.rect.x - (this.bect.width - this.rect.width) / 2, this.bect.y = this.rect.y - (this.bect.height - this.rect.height) / 2))
          }, this.scale = (t, e) => {
              this.rect && (this.rect.x = Math.round(this.rect.x * t), this.rect.y = Math.round(this.rect.y * e), this.rect.width = Math.round(this.rect.width * t), this.rect.height = Math.round(this.rect.height * e), this.rect.width < 0 && (this.rect.width = 1), this.rect.height < 0 && (this.rect.height = 1), this.render())
          }, this.rotate = t => {
              this.rect.rotation += t ? -90 : 90
          }, this.rasterize = () => {
              let t = this.baked ? this.baked : this.canvas,
                  e = this.bect ? this.bect.clone() : this.rect.clone();
              const i = new d.a(s.b.guid(), this.settings.name, t, e, this.settings.locked);
              return i.settings = Object.assign({}, this.settings), i.applyTransform(), i
          }, this.clone = () => {
              let t = new u(s.b.guid(), this.settings.name + " copy", this.rect.clone(), this.shapeSettings.clone());
              return t.settings = Object.assign({}, this.settings), t.prepare(), t
          }, this.rect = i, this.settings.name = e, this.shapeSettings = g
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return h
  }));
  var s = i(13),
      n = i(1),
      a = i(25),
      r = i(19);
  class o {
      constructor(t, e, i = !1, s = "woff", n, a) {
          this.name = t, this.short = e, this.premium = i, this.local = !!n, this.thumb = a, this.font = n, this.type = s
      }
      static async save(t) {
          const e = await Object(a.a)(),
              [i] = e.transaction("readwrite", "fonts");
          await i.put(t, t.name)
      }
      static async delete(t) {
          const e = await Object(a.a)(),
              [i] = e.transaction("readwrite", "fonts");
          await i.delete(t.name)
      }
  }
  class h {
      static async loadFontFromTemplate(t, e, i) {
          var s, n;
          let a = null === (s = i.split(".")[0]) || void 0 === s ? void 0 : s.toLowerCase(),
              r = null === (n = i.split(".")[1]) || void 0 === n ? void 0 : n.toLowerCase();
          return await h.createLocalFontDesc(t, e, a, r)
      }
      static async loadFontFromUpload(t) {
          var e, i;
          let s = null === (e = t.name.split(".")[0]) || void 0 === e ? void 0 : e.toLowerCase(),
              n = null === (i = t.name.split(".")[1]) || void 0 === i ? void 0 : i.toLowerCase(),
              a = s.substring(0, 20).replace(" ", "").replace("-", "").toLowerCase();
          if (s = (null == s ? void 0 : s.charAt(0).toUpperCase()) + (null == s ? void 0 : s.slice(1)), h.fontList.find((t => t.name === s))) return void document.dispatchEvent(new CustomEvent("notification", {
              detail: "Font already exists!"
          }));
          let r = n;
          switch (n) {
              case "otf":
                  r = "opentype";
                  break;
              case "ttf":
                  r = "truetype"
          }
          const o = new Blob([t], {
              type: "font/" + r
          });
          let c = await h.createLocalFontDesc(o, s, a, n);
          return c && document.dispatchEvent(new CustomEvent("notification", {
              detail: "Font was added!"
          })), c
      }
      static async createLocalFontDesc(t, e, i, s) {
          const a = new o(e, i, !1, s, t);
          try {
              await h.addToDOM(a)
          } catch (t) {
              return console.log(t), void document.dispatchEvent(new CustomEvent("notification", {
                  detail: "Failed to load font!"
              }))
          }
          let c = new r.a(e, 56);
          c.height > 80 && c.setSize(Math.floor(80 / c.height * 56));
          const l = n.b.createCanvas(400, 80),
              d = l.getContext("2d");
          d.font = c.getCssFont(), d.fillStyle = "#ffffff", d.textBaseline = "top", d.fillText(e, 0, Math.round((80 - c.height) / 2));
          var u;
          return a.thumb = await (u = l, new Promise(((t, e) => {
              u.toBlob((e => {
                  t(e)
              }), "image/png")
          }))), await o.save(a), h.fontList.unshift(a), a
      }
      static async removeLocalFontDesc(t) {
          let e = h.getFontDesc(t);
          e && (await o.delete(e), h.fontList = h.fontList.filter((t => t !== e)))
      }
      static async addToDOM(t) {
          if (!t) return;
          const e = t.local ? new FontFace(t.name, await s.a.loadArrayBufferFile(t.font)) : new FontFace(t.name, `url(/font/${t.short}.woff) format('woff')`);
          if (document.fonts.has(e)) return Promise.resolve(e);
          let i = await e.load();
          return document.fonts.add(i), i
      }
      static getFontDesc(t) {
          return h.fontList.find((e => e.name === t))
      }
      static async getFontFile(t) {
          let e = this.getFontDesc(t);
          if (!e) return;
          if (e.local) return new File([e.font], e.name);
          let i = await fetch("/font/" + e.short + ".woff").then((t => t.blob()));
          return i ? new File([i], e.short + ".woff", {
              type: "font/woff"
          }) : void 0
      }
      static async loadSaved() {
          const t = await Object(a.a)(),
              [e] = t.transaction("readonly", "fonts");
          return e.iterate()
      }
  }
  h.fontList = [new o("Arial", "arial"), new o("Courier New", "courier"), new o("Georgia", "georgia"), new o("Trebuchet MS", "trebuchet"), new o("Verdana", "verdana"), new o("Aberus", "aberus"), new o("Ablation", "ablation", !0), new o("Adeft", "adeft"), new o("Adelya", "adelya", !0), new o("Adios Amigos", "adios"), new o("Adolfine", "adolfine"), new o("Agnostic", "agnostic", !0), new o("Aiden", "aiden"), new o("Amaranth", "amaranth"), new o("Amateur Typewriter", "amateur", !0), new o("Alder", "alder", !0), new o("Almondia", "almondia"), new o("Aloma Island", "alomaisland", !0), new o("Alvida", "alvida"), new o("Amoreiza", "amoreiza"), new o("AmoretteLight", "amorette"), new o("Angeleno Brush Script", "angeleno", !0), new o("Antreas", "antreas"), new o("Arm Race", "arm"), new o("Artick", "artick"), new o("Asap", "asap"), new o("Atomsfer", "atomosfer"), new o("Atthens", "atthens"), new o("Avocado Sans", "avocado", !0), new o("Baangkarr Press", "baangkarr", !0), new o("Badstar", "badstar", !0), new o("Bahram", "bahram"), new o("Baileyns", "baileyns"), new o("Barooduck", "barooduck", !0), new o("Bearley", "bearley"), new o("Beat", "beat", !0), new o("BebasNeue", "bebasneue"), new o("Bellquinas", "bellquinas"), new o("Bengrraas", "bengrraas"), new o("Beornheard", "beornheard"), new o("Berretti", "berretti"), new o("Biker New", "biker", !0), new o("Blossom Berry Script", "blossomberry", !0), new o("Boullervard", "boullervard"), new o("Bondie", "bondie", !0), new o("Bondrians", "bondrians", !0), new o("Braga Deco", "braga"), new o("Brave Hearted", "brave"), new o("Bright Orchid", "brightorchid", !0), new o("Brioche", "brioche", !0), new o("Brocklyn", "brocklyn"), new o("Bronzier", "bronzier", !0), new o("Brooklyn", "brooklyn", !0), new o("Brodetto", "brodetto"), new o("Bronela", "bronela", !0), new o("The Brownies", "brownies"), new o("Bubbble Gum", "bubbblegum", !0), new o("Brushcheetah", "brushcheetah"), new o("Butternut Script", "butternut", !0), new o("Caang", "caang"), new o("Cakehtreuks", "cakehtreuks"), new o("Cannoli Poke", "cannoli", !0), new o("Camille", "camille"), new o("Calamandria", "calamandria"), new o("Caldwell", "caldwell", !0), new o("Carafun", "carafun"), new o("Carnavonts", "carnavonts"), new o("Carvino", "carvino"), new o("Cervantes", "cervantes"), new o("Chaiaathah", "chaiaathah", !0), new o("Chalkyal", "chalkyal"), new o("Chiqarine", "chiqarine"), new o("Chukies", "chukies"), new o("Cincoyo", "cincoyo"), new o("Clockwise", "clockwise", !0), new o("Coast Redwood", "coast"), new o("Colombo", "colombo", !0), new o("College", "college", !0), new o("Companion", "companion"), new o("Corlombus", "corlombus"), new o("Conseration", "conseration", !0), new o("CuprumFFU", "cuprum"), new o("Cupello sons", "cupello", !0), new o("Costa Mala", "costamala", !0), new o("Cozy", "cozy", !0), new o("CreamyMoony", "creamy"), new o("Cross Road", "crossroad", !0), new o("Cross Road Slab", "crossroadslab", !0), new o("Daddy Day", "daddy"), new o("Dankduck", "dankduck"), new o("Darbots", "darbots", !0), new o("Davish", "davish", !0), new o("Davish Rounded", "davishround", !0), new o("Dear Journal", "dearjournal", !0), new o("Delicious", "delicious", !0), new o("Desmodus", "desmodus"), new o("Desmosedici", "desmosedici"), new o("Dhangdose", "dhangdose"), new o("Dingle", "dingle", !0), new o("Djangart Rough", "djangart"), new o("Dolington", "dolington", !0), new o("Doppelganger", "doppelganger", !0), new o("Dorr", "dorr", !0), new o("Dustin", "dustin", !0), new o("Earth And Sky", "earth"), new o("Easterica", "easterica"), new o("Eastone", "eastone"), new o("Eastwood", "eastwood", !0), new o("Echizen", "echizen"), new o("El-Karnito", "elkarnito"), new o("Elliot", "elliot"), new o("Elysian", "elysian", !0), new o("Emery", "emery"), new o("Empire View", "empire"), new o("Eugiene", "eugiene"), new o("Espano", "espano", !0), new o("Erleane", "erleane"), new o("Everleigh", "everleigh", !0), new o("Exquisite", "exquisite", !0), new o("Espano", "espano", !0), new o("Farewell Angelina", "angelina", !0), new o("Father and Son", "father"), new o("Fatherly", "fatherly"), new o("Fenord", "fenord", !0), new o("Finland", "finland", !0), new o("Flamingo", "flamingo"), new o("FoxyMist", "foxy"), new o("Forever Freedom", "forever", !0), new o("Game On", "game"), new o("Gamour", "gamour", !0), new o("Gallerina", "gallerina", !0), new o("Geronide", "geronide", !0), new o("Geronide Stamp", "geronidestamp", !0), new o("Gingle Snowland", "ginglesnowland", !0), new o("Gingerbreads", "gingerbreads"), new o("Gladiolusy", "gladiolusy", !0), new o("Glamper", "glamper", !0), new o("Goldie Dreambox", "goldiedreambox", !0), new o("Gordon", "gordon", !0), new o("Gorgeous", "gorgeous", !0), new o("Gingerly", "gingerly", !0), new o("Goorraatt", "goorraatt"), new o("Grayson", "grayson", !0), new o("Great Again", "great"), new o("Grovana", "grovana", !0), new o("Gustavo", "gustavo"), new o("Haahloddoh", "haahloddoh"), new o("Hadrea", "hadrea"), new o("Hairmusk", "hairmusk"), new o("Hakushou", "hakushou"), new o("Harietta", "harietta", !0), new o("Hattori Hanzo", "hattori"), new o("Haystacks", "haystacks", !0), new o("Heater", "heater"), new o("Hedonist", "hedonist", !0), new o("Hello Alpha", "helloa"), new o("Hello Daddy", "hellod", !0), new o("Hello People", "hello"), new o("Hello Spring", "hellospring", !0), new o("Hellowins", "hellowins"), new o("Heypatricks", "heypatricks"), new o("Highway", "highway", !0), new o("Hippo Letto", "hippo"), new o("Historia", "historia", !0), new o("Hollawind", "hollawind"), new o("Hodor", "hodor", !0), new o("Honey", "honey"), new o("Honeyspice", "honeyspice", !0), new o("Huckleberries", "huckleberries"), new o("Hymned Sans", "hymnedsans", !0), new o("Hymned Script", "hymnedscript", !0), new o("IacottNeue", "iacottneue", !0), new o("Icebold", "icebold", !0), new o("Inder", "inder"), new o("Indigo", "indigo", !0), new o("Irish gold", "irishgold"), new o("Irishgreen", "irishgreen"), new o("Its mine", "itsmine"), new o("Jacinda", "jacinda", !0), new o("Jared", "jared"), new o("Jarots", "jarots"), new o("Jomantara", "jomantara"), new o("Josefin", "josefin"), new o("Juneville", "juneville"), new o("Jura", "jura"), new o("Kajika", "kajika"), new o("Kakamora", "kakamora"), new o("Katey Blue", "kateyblue", !0), new o("Keripik", "keripik"), new o("Ketapang", "ketapang"), new o("Kindel", "kindel", !0), new o("Kingbirds", "kingbirds", !0), new o("Laahleggek", "laahleggek"), new o("Laborations", "laborations"), new o("La Fiesta", "lafiesta"), new o("Landon", "landon"), new o("Landre", "landre", !0), new o("Langley", "langley"), new o("La Vonn", "vonn"), new o("Laudya Bloods", "laudya"), new o("Leaderson", "leaderson"), new o("Leath", "leath"), new o("Legendum", "legendum"), new o("Leobronx", "leobronx"), new o("Little Edelweiss", "little"), new o("Little Girl", "littlegirl"), new o("Lotus Eater", "lotuseater", !0), new o("Lobster", "lobster"), new o("Lovalicious", "lovalicious", !0), new o("Loverstruck", "loverstruck"), new o("MaaLLaangBronks", "maallaangbronks"), new o("Madison", "madison"), new o("Magic Winter", "magicwinter"), new o("Magic Trick", "magic"), new o("Mai Leho Bahhrala", "maileho"), new o("Maldisa", "maldisa"), new o("Malinsha", "malinsha", !0), new o("Maple Leaves", "mapleleaves", !0), new o("Maxton", "maxton"), new o("Market", "market"), new o("Marones", "marones", !0), new o("Me and my dog", "meandmydog", !0), new o("Meidy", "meidy"), new o("Menighampiil", "menighampiil"), new o("Mewton", "mewton"), new o("Merry Merry", "merrymerry", !0), new o("Molot", "molot"), new o("Momday", "momday"), new o("Moms Note", "moms"), new o("Monday Lovers", "monday"), new o("Monetta", "monetta"), new o("Mongli", "mongli"), new o("Montour", "montour"), new o("Morissette Script", "morissette"), new o("Mountain", "mountain"), new o("Mooka", "mooka", !0), new o("More Magic", "moremagic", !0), new o("Morgana Sonz", "morgana", !0), new o("Nature Force", "natureforce", !0), new o("Ms Orange Sky", "ms"), new o("Najova", "najova"), new o("Natarajasana", "natarajasana"), new o("Naville", "naville"), new o("Neorah", "neorah"), new o("New Autumn", "new"), new o("No Siesta", "nosiesta"), new o("Night Jump", "nightjump"), new o("Notes", "notes", !0), new o("NoFire", "nofire"), new o("North Avellion", "northavellion", !0), new o("Northern", "northern"), new o("North High Shadow", "northhighsdw", !0), new o("North High", "northhigh", !0), new o("Novante", "novante", !0), new o("Nunu", "nunu"), new o("Offlander", "offlander", !0), new o("Oliemolly", "oliemolly", !0), new o("Oracles", "oracles"), new o("Ostern", "ostern"), new o("Otakaku", "otakaku"), new o("Out Hill", "out"), new o("Overdose", "overdose"), new o("Paabaalioot", "paabaalioot"), new o("Painted Gallery", "paintedgallery", !0), new o("Pandoura", "pandoura"), new o("PapaRocknRoll", "papa"), new o("Paradise", "paradise"), new o("Patlabour", "patlabour", !0), new o("Peach Market", "peachmarket", !0), new o("Peanut", "peanut"), new o("Peony Rose", "peonyrose", !0), new o("Perfect Thoughts", "perfectthoughts", !0), new o("Pina Colada", "pinacolada", !0), new o("Piqolo", "piqolo"), new o("Pixelo", "pixelo"), new o("Plunge", "plunge"), new o("Pop Fist", "pop"), new o("Ponch", "ponch", !0), new o("Popera", "popera"), new o("Powder", "powder", !0), new o("Practish", "practish"), new o("Print Clearly", "print"), new o("Pulsate", "pulsate", !0), new o("Qlassik", "qlassik"), new o("quatro", "quatro", !0), new o("Quattrocento", "quattrocento"), new o("Queenata", "queenata"), new o("Quella Script", "quella"), new o("Questro", "questro"), new o("Quickie Sweet", "quickie"), new o("Quill & Ink", "quillink"), new o("Quish", "quish"), new o("Ranania", "ranania"), new o("Rankings Caps", "rankingscaps", !0), new o("Raroedette", "raroedette"), new o("Rawwwing", "rawwwing"), new o("Raquella", "raquella"), new o("Reepouh", "reepouh"), new o("Regan Slab", "regan"), new o("Reewoooh", "reewoooh", !0), new o("Reilly", "reilly"), new o("Remembrance", "remembrance", !0), new o("Retrocycles", "retrocycles"), new o("Retros", "retros"), new o("Revans", "revans", !0), new o("Reynolds Square", "reynoldssquare", !0), new o("Rhapsody", "rhapsody"), new o("Riverside", "riverside"), new o("Republiko", "republiko", !0), new o("Rocky", "rocky"), new o("Roars", "roars"), new o("Rockford", "rockford", !0), new o("Rockrace", "rockrace", !0), new o("Romaniesta", "romaniesta"), new o("Romelio", "romelio"), new o("Roossooh", "roossooh"), new o("Ropa", "ropa"), new o("Rolves", "rolves", !0), new o("Roque", "roque"), new o("Rosario", "rosario"), new o("Roundaries", "roundaries"), new o("Rowan", "rowan", !0), new o("Salmonberry", "salmonberry", !0), new o("San Barley", "san"), new o("Saqanone", "saqanone"), new o("Sants", "sants"), new o("Sanur beach", "sanur"), new o("Scriptonesia", "scriptonesia", !0), new o("Secretary Typewriter", "secretary", !0), new o("Sedalia", "sedalia", !0), new o("Search", "search", !0), new o("Searchlight", "searchlight", !0), new o("See De Mayo", "see"), new o("Serenity", "serenity"), new o("The Servant", "servant"), new o("Sheraton", "sheraton", !0), new o("Shoelaces", "shoelaces", !0), new o("Silvertone", "silvertone", !0), new o("Smoother", "smoother", !0), new o("Spring Break", "springbreak", !0), new o("Spotlights Thin", "spotlightsthin", !0), new o("Spotlights Chunky", "spotlightschunky", !0), new o("Squiborn", "squiborn", !0), new o("Staatliches", "staatliches"), new o("Stardust Moonlight", "stardust"), new o("The Stoothgart", "stoothgart"), new o("Summer Coconut", "summer"), new o("Summer Joy", "summerjoy"), new o("Summer Nude", "summernude", !0), new o("Summer Peach", "summerpeach"), new o("Summer Solstice", "summersolstice", !0), new o("Summery", "summery"), new o("Sun Again", "sunagain"), new o("Sun Pepper", "sun"), new o("Sun Streets", "sunstreets"), new o("Sunny Bay", "sunnybay", !0), new o("Sunshine Boy", "sunshine"), new o("Super Slayers", "super"), new o("Surface", "surface"), new o("Sweeneey", "sweeneey"), new o("Teaspoon", "teaspoon"), new o("Tabu", "tabu"), new o("Teodore", "teodore", !0), new o("TeXGyreHeros", "texgyreheros"), new o("The Brocker", "brocker"), new o("The California", "thecalifornia"), new o("The Harison", "harison"), new o("The Love For Money", "theloveformoney", !0), new o("The Mastiff", "mastiff"), new o("The Patriot", "patriot"), new o("The Pinta", "pinta"), new o("The Roxv", "roxv"), new o("The Rogue", "rogue"), new o("The Stegris", "thestegris", !0), new o("The Queen", "queen"), new o("Thirtylane", "thirtylane", !0), new o("Titian", "titian"), new o("Todes", "todes", !0), new o("Tropical Coast", "tropicalcoast"), new o("Torberta", "torberta"), new o("Twigs", "twigs"), new o("Twirly Ballerina", "twirly", !0), new o("Unreal", "unreal"), new o("Vaganza", "vaganza"), new o("Valeria", "valeria", !0), new o("Valery", "valery"), new o("Vignette", "vignette"), new o("Von Everect", "von"), new o("The Voyager", "voyager", !0), new o("Wandering Flowers", "wandering", !0), new o("Wargate", "wargate", !0), new o("Western Shooter", "westernshooter", !0), new o("West Java", "westjava", !0), new o("Winter Sunrise", "wintersunrise", !0), new o("White Wonder", "whitewonder", !0), new o("Yanone Kaffeesatz", "kaffeesatz"), new o("Wonderul Wilderness", "wonderulwilderness", !0), new o("Yoseline", "yoseline"), new o("Zombie Dust", "zombie")], h.loadFont = t => {
      let e = h.fontList.find((e => e.name === t));
      if (e) return h.addToDOM(e)
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return h
  }));
  var s = i(0),
      n = i(1),
      a = i(4),
      r = i(3),
      o = i(14);
  class h {
      constructor(t) {
          this.getSettingsString = () => JSON.stringify(this.settings), this.setSettingsString = t => {
              this.settings = n.b.restorePrototype(o.a, JSON.parse(t)), this.generate()
          }, this.getStep = () => Math.round(this.settings.distance * this.settings.size), this.getCursorImage = (t, e = new a.a(255, 255, 255, 255)) => {
              if (!(this.canvas.width * t > 512 || this.canvas.height * t > 512)) return this.generatetOutline(t, e)
          }, this.canvas = Object(s.a)("canvas"), this.settings = t, this.context = this.canvas.getContext("2d", {
              willReadFrequently: !0
          }), this.generate()
      }
      generate(t = new a.a, e = !1) {
          let i = this.settings.softness;
          if (this.settings.size < 3) {
              if (1 === this.settings.size || i < .25) return this.canvas.width = this.settings.size, this.canvas.height = this.settings.size, this.context.fillStyle = t.toRGBA(), void this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
              i -= .25
          }
          const s = this.settings.size,
              n = (s % 2 ? s : s + 1) / 2;
          let o, h, c, l, d, u, g, m, p, v = 0,
              f = 0,
              w = new r.a(0, 0),
              y = new r.a(0, 0);
          switch (u = Math.sin(this.settings.angle * Math.PI / 180), d = Math.cos(this.settings.angle * Math.PI / 180), p = n * this.settings.aspect, w.x = d * n, w.y = u * n * -1, y.x = u * p, y.y = d * p, this.settings.type) {
              case "circle":
                  v = Math.ceil(Math.sqrt(w.x * w.x + y.x * y.x)), f = Math.ceil(Math.sqrt(w.y * w.y + y.y * y.y));
                  break;
              case "square":
                  v = Math.ceil(Math.abs(w.x) + Math.abs(y.x)), f = Math.ceil(Math.abs(w.y) + Math.abs(y.y));
                  break;
              case "diamond":
                  v = Math.ceil(Math.max(Math.abs(w.x), Math.abs(y.x))), f = Math.ceil(Math.max(Math.abs(w.y), Math.abs(y.y)))
          }
          this.settings.spikes > 2 && (v = f = Math.ceil(Math.sqrt(n * n + p * p)), y.x = u * n, y.y = d * n), this.canvas.width = 2 * v + 1, this.canvas.height = 2 * f + 1;
          const x = this.lookupTable(n, i);
          g = Math.cos(-2 * Math.PI / this.settings.spikes), m = Math.sin(-2 * Math.PI / this.settings.spikes);
          const b = this.context.canvas.width,
              S = this.context.getImageData(0, 0, b, this.context.canvas.height);
          for (c = -f; c <= f; ++c)
              for (h = -v; h <= v; ++h) {
                  let i = 0,
                      s = d * h - u * c,
                      a = Math.abs(u * h + d * c);
                  if (this.settings.spikes > 2) {
                      let t, e, i = Math.atan2(a, s);
                      for (; i > Math.PI / this.settings.spikes;) e = s, t = a, s = g * e - m * t, a = m * e + g * t, i -= 2 * Math.PI / this.settings.spikes
                  }
                  switch (a /= this.settings.aspect, this.settings.type) {
                      case "circle":
                          i = Math.sqrt(s * s + a * a);
                          break;
                      case "square":
                          i = Math.max(Math.abs(s), Math.abs(a));
                          break;
                      case "diamond":
                          i = Math.abs(s) + Math.abs(a)
                  }
                  o = i < n + 1 ? x[Math.floor(4 * i)] : 0, e && (o = o < 64 ? 0 : 255), l = 4 * ((c + f) * b + (h + v)), S.data[l] = t.r, S.data[l + 1] = t.g, S.data[l + 2] = t.b, S.data[l + 3] = o
              }
          this.context.putImageData(S, 0, 0)
      }
      generatetOutline(t = 1, e = new a.a(255, 255, 255, 255)) {
          const i = Math.round(this.canvas.width * t) || 1,
              s = Math.round(this.canvas.height * t) || 1;
          let r = n.b.createCanvas(i + 2, s + 2);
          const o = r.getContext("2d");
          o.fillStyle = e.toRGBA(), o.shadowColor = new a.a(0, 0, 0).toRGBA(), o.shadowBlur = 1, i > 20 && s > 20 && (o.fillRect(~~(i / 2) - 3, ~~(s / 2), 8, 2), o.fillRect(~~(i / 2), ~~(s / 2) - 3, 2, 8));
          let h, c, l, d, u, g = 1 != t ? n.b.resizeCanvas(this.canvas, i, s, !1).getContext("2d").getImageData(0, 0, i, s) : this.context.getImageData(0, 0, i, s);
          for (let t = 0; t < s; ++t) {
              c = !0, l = Boolean(g.data[t * i * 4 + 3] < 64);
              for (let e = 0; e < i; ++e) h = c, c = l, l = e + 1 === i || g.data[4 * (t * i + e + 1) + 3] < 64, c || (d = t - 1 < 0 || g.data[4 * ((t - 1) * i + e) + 3] < 64, u = t + 1 === s || g.data[4 * ((t + 1) * i + e) + 3] < 64, (h || d || l || u) && o.fillRect(e + 1, t + 1, 1, 1))
          }
          if (i <= 20 && s <= 20) {
              const t = n.b.createCanvas(33, 33),
                  i = t.getContext("2d");
              i.drawImage(r, Math.floor((33 - r.width) / 2), Math.floor((33 - r.height) / 2)), i.fillStyle = e.toRGBA(), i.shadowColor = new a.a(0, 0, 0).toRGBA(), i.shadowBlur = 1, i.fillRect(2, 15, 4, 2), i.fillRect(26, 15, 4, 2), i.fillRect(15, 2, 2, 4), i.fillRect(15, 26, 2, 4), r = t
          }
          return r
      }
      lookupTable(t, e) {
          const i = new Array;
          let s, n, a = 0;
          const r = new Array(4),
              o = Math.round(t + 1),
              h = 4 * Math.ceil(1 + Math.sqrt(o * o * 2));
          let c;
          for (n = e < 4e-7 ? 1e6 : .4 / e, c = 0; c < 4; c++) s = Math.abs((c + .5) / 4 - .5), r[c] = s > t ? 0 : this.gaussian(Math.pow(s / t, n)), a += r[c];
          for (c = 0; s < t || a > 1e-5; s += 1 / 4) {
              a -= r[c % 4], r[c % 4] = s > t ? 0 : this.gaussian(Math.pow(s / t, n)), a += r[c % 4];
              let e = Math.floor(63.75 * a);
              i[c++] = Math.max(0, e)
          }
          for (; c < h;) i[c++] = 0;
          return i
      }
      gaussian(t) {
          return t < -.5 ? 2 * (t = -1 - t) * t : t < .5 ? 1 - 2 * t * t : 2 * (t = 1 - t) * t
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return a
  }));
  var s = i(13),
      n = i(1);
  class a {
      constructor(t, e = 1, i = 0) {
          this.svg = t, this.scale = e, this.direction = i, this.createCanvasPattern = t => {
              let e;
              if (1 != this.scale) {
                  let i = n.b.createCanvas(Math.round(this.image.width * this.scale), Math.round(this.image.height * this.scale));
                  i.getContext("2d").drawImage(this.image, 0, 0, i.width, i.height), e = t.createPattern(i, "repeat")
              } else e = t.createPattern(this.image, "repeat");
              return 0 !== this.direction && e.setTransform((new DOMMatrix).rotate(this.direction)), e
          }, this.toCSS = () => "url(data:image/svg+xml;base64," + btoa(this.svg) + ")", this.toJSON = () => JSON.stringify(this.toIPattern())
      }
      toIPattern(t = this.svg) {
          return {
              svg: t,
              scale: this.scale,
              direction: this.direction
          }
      }
  }
  a.fromIPattern = async t => {
      let e = new a(t.svg, t.scale, t.direction),
          i = new Blob([e.svg], {
              type: "image/svg+xml"
          });
      return e.image = await s.a.loadImageFile(i), e
  }, a.fromJSON = async t => {
      let e = JSON.parse(t);
      return a.fromIPattern(e)
  }
}, , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return y
  })), i.d(e, "b", (function() {
      return x
  }));
  var s = i(1),
      n = i(25),
      a = i(13),
      r = i(6),
      o = i(29),
      h = i(4),
      c = i(23),
      l = i(17),
      d = i(15),
      u = i(30),
      g = i(27),
      m = i(8),
      p = i(19),
      v = i(44),
      f = i(39),
      w = i(31);
  class y {
      constructor(t, e, i, s, n) {
          this.name = e, this.width = i, this.height = s, this.color = n, this.id = t, this.lastModified = new Date, this.pinned = !1
      }
      async restore(t) {
          const e = await Object(n.a)();
          try {
              const [i, n] = e.transaction("readonly", "layer-meta", "document-selection"), [a, o] = await Promise.all([i.index("document").getAll(this.id), n.get(this.id)]);
              this.order || (this.order = a.sort(((t, e) => t.order - e.order)).map((t => t.id)));
              let h = [];
              if (this.order.forEach((t => {
                      const e = a.find((e => e.id === t));
                      e && ("bitmap" === e.type && (e.type = m.a.TYPE_IMAGE), e.settings.rotation && e.rect && void 0 === e.rect.rotation && (e.rect.rotation = e.settings.rotation), e.rect && void 0 === e.rect.rotation && (e.rect = new r.a(e.rect.x, e.rect.y, e.rect.width, e.rect.height, 0)), h.push(e))
                  })), h.length !== a.length) {
                  console.warn("Had layers that could not be sorted, this is a problem");
                  const t = a.filter((t => !this.order.includes(t.id)));
                  t.forEach((t => {
                      "bitmap" === t.type && (t.type = m.a.TYPE_IMAGE), t.settings.rotation && t.rect && void 0 === t.rect.rotation && (t.rect.rotation = t.settings.rotation), t.rect && void 0 === t.rect.rotation && (t.rect = new r.a(t.rect.x, t.rect.y, t.rect.width, t.rect.height, 0))
                  })), h = h.concat(t)
              }
              if (o) {
                  t.fresco.addSelection();
                  const e = t.fresco.selection;
                  e.mask = await s.b.blobToCanvas(o), e.ctx = e.mask.getContext("2d"), e.createOutline()
              }(await Promise.all(h.map((async t => {
                  const i = s.b.restorePrototype(x, t),
                      [n, a] = e.transaction("readonly", "layer-bitmap", "layer-mask"),
                      [r, o] = await Promise.all([n.get(i.id), a.get(i.id)]);
                  return i.toLayer(r, o)
              })))).forEach((e => t.fresco.layers.push(e))), t.fresco.layers.length > 0 && t.selectLayer(t.fresco.layers[0])
          } catch (t) {
              throw console.error("Restore", t), t
          }
      }
      async save() {
          const t = await Object(n.a)(),
              [e] = t.transaction("readwrite", "document-meta");
          await e.put(this)
      }
      async remove() {
          const t = await Object(n.a)(),
              [e, i, s, a, r, o] = t.transaction("readwrite", "document-meta", "document-thumbnail", "document-selection", "layer-meta", "layer-mask", "layer-bitmap"),
              h = [e.delete(this.id), i.delete(this.id), s.delete(this.id)],
              c = await a.index("document").getAll(this.id);
          for (let t = 0; t < c.length; t++) {
              const e = c[t];
              h.push(a.delete(e.id)), h.push(o.delete(e.id)), h.push(r.delete(e.id))
          }
          await Promise.all(h)
      }
      static async saveOrder(t) {
          const e = t.layers.map((t => t.id)),
              i = await Object(n.a)(),
              [s] = i.transaction("readwrite", "document-meta"),
              a = await s.get(t.id);
          a.order = e, await s.put(a)
      }
      static async duplicate(t) {
          const e = await Object(n.a)(),
              [i, a, r, o, h, c] = e.transaction("readwrite", "document-meta", "document-thumbnail", "document-selection", "layer-meta", "layer-mask", "layer-bitmap"),
              l = s.b.guid(),
              d = [(async() => {
                  const e = await a.get(t);
                  e && await a.add(e, l)
              })(), (async() => {
                  const e = await r.get(t);
                  e && await r.add(e, l)
              })()],
              u = await o.index("document").getAll(t),
              g = {};
          for (let t = 0; t < u.length; t++) {
              const e = u[t],
                  i = e.id,
                  n = s.b.guid();
              g[i] = n, d.push((async() => {
                  e.id = n, e.document = l, await o.add(e)
              })(), (async() => {
                  const t = await c.get(i);
                  t && await c.add(t, n)
              })(), (async() => {
                  const t = await h.get(i);
                  t && await h.add(t, n)
              })())
          }
          d.push((async() => {
              const e = await i.get(t);
              e.id = l, e.pinned = !1, e.order = e.order.map((t => g[t])), e.lastModified = new Date, await i.add(e)
          })()), await Promise.all(d)
      }
      static async deleteAll() {
          const t = await Object(n.a)(),
              [e] = t.transaction("readwrite", "document-meta"),
              i = await e.getAll();
          for (let t = 0; t < i.length; t++) {
              const e = s.b.restorePrototype(y, i[t]);
              e.pinned || await e.remove()
          }
      }
      async getThumbnail() {
          const t = await Object(n.a)(),
              [e] = t.transaction("readonly", "document-thumbnail"),
              i = await e.get(this.id);
          return i ? "string" == typeof i ? a.a.openDataUrl(i) : a.a.loadImageFile(i) : Promise.resolve(void 0)
      }
      static async getAll() {
          const t = await Object(n.a)(),
              [e] = t.transaction("readonly", "document-meta");
          return (await e.getAll()).map((t => s.b.restorePrototype(y, t)))
      }
      static async history() {
          return y.getAll().then((t => t.sort(((t, e) => t.lastModified === e.lastModified ? 0 : t.lastModified < e.lastModified ? 1 : -1))))
      }
      static async getByID(t) {
          const e = await Object(n.a)(),
              [i] = e.transaction("readonly", "document-meta"),
              a = await i.get(t);
          return s.b.restorePrototype(y, a)
      }
      async pin() {
          this.pinned = !0, await this.save()
      }
      async unpin() {
          this.pinned = !1, await this.save()
      }
  }
  class x {
      constructor(t, e) {
          this.order = 0, this.id = t.id, this.type = t.type, this.document = e, this.settings = t.settings, this.rect = t.rect, this.trim = t.trim, t instanceof c.a && (this.textSettings = t.textSettings, this.text = t.text), t instanceof g.a && (this.url = t.url, this.variant = t.variant, this.scalemethod = t.scalemethod), t instanceof u.a && (this.shapeSettings = t.shapeSettings), t instanceof d.a && (this.frameSettings = t.frameSettings)
      }
      async toLayer(t, e) {
          const i = "string" == typeof t ? await s.b.dataURLToCanvas(t) : await s.b.blobToCanvas(t),
              n = "string" == typeof e ? await s.b.dataURLToCanvas(e) : await s.b.blobToCanvas(e);
          switch (this.type) {
              case m.a.TYPE_IMAGE:
                  {
                      const t = new l.a(this.id, this.settings.name, i, s.b.restorePrototype(r.a, this.rect), this.settings.locked);
                      return n && (t.mask = n, t.render()),
                      t.settings = this.settings,
                      t
                  }
              case m.a.TYPE_ELEMENT:
                  {
                      const t = new g.a(this.id, this.settings.name, i, this.url, this.variant, this.settings.opacity, this.settings.blendmode, this.scalemethod);
                      return t.settings = this.settings,
                      t.rect = s.b.restorePrototype(r.a, this.rect),
                      t
                  }
              case m.a.TYPE_TEXT:
                  {
                      const t = new c.a(this.id, this.text, s.b.restorePrototype(r.a, this.rect), s.b.restorePrototype(p.a, this.textSettings));
                      return t.settings = this.settings,
                      this.textSettings.color && !this.textSettings.fillType && (t.fill = new o.a(h.a.fromHEX(this.textSettings.color)), t.textSettings.fillType = "color", t.textSettings.fillValue = this.textSettings.color),
                      await w.a.loadFont(this.textSettings.font),
                      await t.prepare(),
                      t
                  }
              case m.a.TYPE_SHAPE:
                  {
                      const t = new u.a(this.id, this.settings.name, s.b.restorePrototype(r.a, this.rect), s.b.restorePrototype(f.a, this.shapeSettings));
                      return t.settings = this.settings,
                      await t.prepare(),
                      t
                  }
              case m.a.TYPE_FRAME:
                  {
                      const t = new d.a(this.id, this.settings.name, s.b.restorePrototype(r.a, this.rect), s.b.restorePrototype(v.a, this.frameSettings));
                      return t.canvas = i,
                      t.settings = this.settings,
                      t.trim = s.b.restorePrototype(r.a, this.trim),
                      t.canvas && t.render(),
                      t
                  }
          }
      }
      static async delete(t) {
          const e = await Object(n.a)();
          let [i, s, a] = e.transaction("readwrite", "layer-bitmap", "layer-meta", "layer-mask");
          await Promise.all([i.delete(t), s.delete(t), a.delete(t)])
      }
      static async sync(t, e) {
          if (!e.hasLayer(t)) throw new Error("This is probably a bug, cant create layermeta from layer not in the fresco");
          const i = new x(t, e.id);
          let a = !1;
          if (t.type === m.a.TYPE_IMAGE || t.type === m.a.TYPE_ELEMENT ? a = t.rect && t.rect.isSet() && !!t.canvas || !t.rect && !t.canvas : t.type === m.a.TYPE_FRAME && (a = t.trim && t.trim.isSet() && !!t.canvas || !t.trim && !t.canvas), a) {
              const [e, a] = await Promise.all([s.b.canvasToBlob(t.canvas), s.b.canvasToBlob(t.mask)]), r = await Object(n.a)();
              let [o, h, c] = r.transaction("readwrite", "layer-bitmap", "layer-meta", "layer-mask");
              await Promise.all([h.put(i), e ? o.put(e, i.id) : o.delete(i.id), a ? c.put(a, i.id) : c.delete(i.id)])
          } else {
              const t = await Object(n.a)();
              let [e] = t.transaction("readwrite", "layer-meta");
              await e.put(i)
          }
          t.syncLatest = new Date
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return u
  }));
  var s = i(8),
      n = i(6),
      a = i(15),
      r = i(1),
      o = i(28),
      h = i(3),
      c = i(26);
  class l {
      constructor(t, e) {
          this.setMask = t => {
              this.mask = t, this.ctx = this.mask.getContext("2d"), this.createOutline()
          }, this.isSelected = t => {
              var e;
              return !!(null === (e = this.bounds) || void 0 === e ? void 0 : e.isInside(t)) && this.ctx.getImageData(t.x, t.y, 1, 1).data[3] >= 64
          }, this.applyOffset = () => {
              let t = r.b.cloneCanvas(this.mask);
              this.ctx.clearRect(0, 0, this.mask.width, this.mask.height), this.ctx.drawImage(t, this.offset.x, this.offset.y), this.offset.x = this.offset.y = 0, this.createOutline()
          }, this.editRectangle = (t, e, i) => {
              let s = r.b.createCanvas(this.mask.width, this.mask.height),
                  n = s.getContext("2d");
              c.a.fill(n, "rectangle", t.topLeft(), t.bottomRight()), n = void 0, this.drawOnMask(s, e, !1, i)
          }, this.editEllipse = (t, e, i, s) => {
              let n = r.b.createCanvas(this.mask.width, this.mask.height),
                  a = n.getContext("2d");
              c.a.fill(a, "ellipse", t.topLeft(), t.bottomRight()), a = void 0, this.drawOnMask(n, e, i, s)
          }, this.editBezier = (t, e, i, s) => {
              let n = r.b.createCanvas(this.mask.width, this.mask.height),
                  a = n.getContext("2d");
              a.beginPath(), a.moveTo(t[0].x, t[0].y);
              for (let e = 1; e < t.length; e += 2) e + 1 === t.length ? a.lineTo(t[e].x, t[e].y) : a.quadraticCurveTo(t[e + 1].x, t[e + 1].y, t[e].x, t[e].y);
              a.fill(), a = void 0, this.drawOnMask(n, e, i, s)
          }, this.editPolygon = (t, e, i, s) => {
              let n = r.b.createCanvas(this.mask.width, this.mask.height),
                  a = n.getContext("2d");
              a.beginPath(), a.moveTo(t[0].x, t[0].y), t.forEach((t => a.lineTo(t.x, t.y))), a.fill(), a = void 0, this.drawOnMask(n, e, i, s)
          }, this.drawOnMask = (t, e = 0, i = !1, s = !1, n = new h.a(0, 0)) => {
              if (e > 0) {
                  let i = new o.a;
                  i.addShader("blur", e), t = i.apply(t)
              } else if (i) {
                  let e = new o.a;
                  e.addShader("dealiasing", !0), t = e.apply(t)
              }
              this.ctx.save(), s && (this.ctx.globalCompositeOperation = "destination-out"), this.ctx.drawImage(t, n.x, n.y), this.ctx.restore(), this.createOutline()
          }, this.selectAll = () => {
              this.ctx.fillRect(0, 0, this.mask.width, this.mask.height), this.createOutline()
          }, this.invert = () => {
              const t = new o.a([]);
              t.addShader("alpha-invert", 1), this.mask = r.b.cloneCanvas(t.apply(this.mask)), this.ctx = this.mask.getContext("2d"), this.createOutline()
          }, this.size = (t, e) => {
              const i = r.b.createCanvas(t, e);
              this.ctx = i.getContext("2d");
              const s = Math.round(.5 * (i.width - this.mask.width)),
                  n = Math.round(.5 * (i.height - this.mask.height));
              this.ctx.drawImage(this.mask, s, n), this.mask = i, this.createOutline()
          }, this.resize = (t, e) => {
              this.mask = r.b.resizeCanvas(this.mask, t, e), this.ctx = this.mask.getContext("2d"), this.createOutline()
          }, this.createOutline = () => {
              let t = this.ctx.getImageData(0, 0, this.mask.width, this.mask.height);
              if (this.bounds = r.b.getColorBoundsRectData(t), !this.bounds) return;
              let e = this.bounds.top(),
                  i = this.bounds.left(),
                  s = this.bounds.right(),
                  n = this.bounds.bottom(),
                  a = this.mask.width,
                  o = this.mask.height;
              this.outline = new Array;
              let h, c, l, d, u, g = -1;
              for (let r = e; r < n; ++r) {
                  c = 0 === i || t.data[4 * (r * a + i - 1) + 3] < 64, l = t.data[4 * (r * a + i) + 3] < 64;
                  for (let e = i; e < s; ++e) h = c, c = l, l = e + 1 === a || t.data[4 * (r * a + e + 1) + 3] < 64, c || (g = -1, d = r - 1 < 0 || t.data[4 * ((r - 1) * a + e) + 3] < 64, u = r + 1 === o || t.data[4 * ((r + 1) * a + e) + 3] < 64, h && d && l && u ? g = 8 : h && d && u ? g = 9 : l && d && u ? g = 10 : l && d && h ? g = 11 : l && u && h ? g = 12 : h && l ? g = 13 : u && d ? g = 14 : h && d ? g = 0 : d && l ? g = 2 : h && u ? g = 5 : u && l ? g = 7 : d ? g = 1 : h ? g = 3 : l ? g = 4 : u && (g = 6), -1 !== g && this.outline.push(e, r, g))
              }
          }, this.clear = () => {
              this.ctx.clearRect(0, 0, this.mask.width, this.mask.height), this.outline = new Array
          }, this.reset = () => {
              this.ctx.clearRect(0, 0, this.mask.width, this.mask.height), this.outline = new Array, this.offset = new h.a, this.bounds = new n.a
          }, this.cleanUp = () => {
              this.outline = void 0, this.offset = void 0, this.bounds = void 0, this.mask = void 0, this.ctx = void 0
          }, this.mask = r.b.createCanvas(t, e), this.offset = new h.a, this.bounds = new n.a, this.ctx = this.mask.getContext("2d")
      }
  }
  var d = i(47);
  class u {
      constructor(t, e, i, r, o) {
          this.layerAddedCounterForUserEase = 0, this.getSelected = () => 1 !== this.selected.length ? void 0 : this.selected[0], this.getSelectedStack = () => this.selected, this.getSelectedStackRect = () => {
              let t = new Array;
              return this.selected.forEach((e => {
                  t.push(e.rect ? e.rect.clone() : void 0)
              })), t
          }, this.getSelectedStackBounds = (t = this.selected) => {
              let e;
              return 1 === t.length ? e = t[0].editMode && t[0] instanceof a.a ? t[0].trim.clone() : t[0].rect ? t[0].rect.clone() : void 0 : t.forEach((t => {
                  t.rect && (e = n.a.merge(e, t.rect.getRotatedBounds()))
              })), e
          }, this.getSelectedId = () => {
              let t = new Array;
              return this.selected.forEach((e => {
                  t.push(e.id)
              })), t
          }, this.getSelectedStackId = () => {
              if (0 === this.selected.length) return;
              if (1 === this.selected.length) return this.selected[0].id;
              let t = this.getSelectedId().join(),
                  e = 0;
              for (let i = 0; i < t.length; i++) e = (e << 5) - e + t.charCodeAt(i), e &= e;
              return e.toString()
          }, this.getLayerById = t => {
              let e;
              return this.layers.forEach((i => {
                  i.id === t && (e = i)
              })), e
          }, this.hasSelected = () => this.selected.length > 0, this.isSelectedStack = () => this.selected.length > 1, this.isSelectedType = t => 1 === this.selected.length && this.selected[0].type === t, this.isSelectedImageWithCanvas = () => (!this.selected || 1 === this.selected.length) && (this.selected[0].type === s.a.TYPE_IMAGE && !!this.selected[0].canvas), this.isSelectedShaderbleWithCanvas = () => (!this.selected || 1 === this.selected.length) && ((this.selected[0].type === s.a.TYPE_IMAGE || this.selected[0].type === s.a.TYPE_FRAME || this.selected[0].type === s.a.TYPE_ELEMENT) && !!this.selected[0].canvas), this.isSelectedById = t => {
              if (t) return -1 !== this.selected.findIndex((e => e.id === t))
          }, this.selectLayerById = (t, e = !1, i = !1) => {
              this.selected[0] && (this.selected[0].editMode = !1);
              let n = !1;
              return t ? e ? this.isSelectedById(t) ? i && (this.unselectLayerById(t), n = !0) : (this.selected.push(this.getLayerById(t)), n = !0) : this.isSelectedById(t) && 1 === this.selected.length || (this.selected = [this.getLayerById(t)], n = !0) : 0 !== this.layers.length && this.layers[0].settings.locked && this.layers[0].type === s.a.TYPE_IMAGE ? 0 === this.selected.length || 1 === this.selected.length && this.selected[0] === this.layers[0] || (this.selected = [this.layers[0]], n = !0) : 0 !== this.selected.length && (this.selected = [], n = !0), this.selected.length > 1 && this.selected.sort(((t, e) => this.layers.indexOf(t) - this.layers.indexOf(e))), n
          }, this.unselectLayerById = t => {
              const e = this.selected.findIndex((e => e.id === t));
              return -1 !== e && (this.selected.splice(e, 1), !0)
          }, this.selectLayerStack = t => {
              this.selected = t
          }, this.deleteLayerById = t => {
              const e = this.layers.findIndex((e => e.id === t));
              let i;
              return -1 !== e && (i = this.layers[e], this.layers.splice(e, 1), this.unselectLayerById(t)), !this.hasSelected() && this.layers.length > 0 && (this.selected = [this.layers[e > 0 ? e - 1 : 0]]), i
          }, this.id = t, this.name = e, this.width = i, this.height = r, this.color = o, this.layers = [], this.selected = []
      }
      addScratch() {
          return this.scratch || (this.scratch = new d.a), this.scratch
      }
      removeScratch() {
          this.scratch = void 0
      }
      hasScratch() {
          return !!this.scratch && "none" !== this.scratch.renderMode
      }
      addSelection() {
          this.selection || (this.selection = new l(this.width, this.height))
      }
      removeSelection() {
          this.selection && (this.selection.cleanUp(), this.selection = void 0)
      }
      hasSelection() {
          return this.selection && this.selection.bounds && this.selection.outline && this.selection.outline.length > 0
      }
      hasLayers() {
          return this.layers.length > 0
      }
      hasLayer(t) {
          return this.layerNr(t.id) >= 0
      }
      numLayers() {
          return this.layers.length
      }
      nextAddedLayerNumber() {
          return this.numLayers() > this.layerAddedCounterForUserEase && (this.layerAddedCounterForUserEase = this.numLayers()), (this.layerAddedCounterForUserEase + 1).toString()
      }
      lockedBackground() {
          return this.layers.length > 0 && this.layers[0].settings.locked && this.layers[0].type === s.a.TYPE_IMAGE
      }
      selectedLayerNr() {
          if (0 === this.selected.length) return -1;
          if (1 === this.selected.length) return this.layerNr(this.selected[0].id);
          let t = 0;
          return this.selected.forEach((e => {
              t = Math.max(t, this.layerNr(e.id))
          })), t
      }
      layerNr(t) {
          return this.layers.findIndex((e => e.id === t))
      }
      changeLayerOrder(t, e) {
          this.layers.splice(e, 0, this.layers.splice(t, 1)[0])
      }
      rotate(t) {
          let e = this.width;
          this.width = this.height, this.height = e;
          for (let e = 0; e < this.layers.length; e++) this.layers[e].rotate(t), this.layers[e].render()
      }
      flip(t) {
          for (let e = 0; e < this.layers.length; e++) this.layers[e].type === s.a.TYPE_IMAGE && (this.layers[e].flip(t), this.layers[e].render())
      }
      straighten(t, e, i) {
          if (this.lockedBackground()) {
              let s = this.layers[0];
              s.rect.rotation = t, s.rect.x = -(s.rect.width - e) / 2, s.rect.y = -(s.rect.height - i) / 2
          }
          this.width = e, this.height = i
      }
      crop(t) {
          this.width = t.width, this.height = t.height;
          for (let e = 0; e < this.layers.length; e++) this.layers[e].rect && (this.layers[e].rect.x -= t.x, this.layers[e].rect.y -= t.y, this.layers[e].render());
          this.selection && this.selection.size(this.width, this.height)
      }
      resize(t, e) {
          let i = t / this.width,
              s = e / this.height;
          this.width = Math.round(this.width * i), this.height = Math.round(this.height * s), this.width = t, this.height = e;
          for (let t = 0; t < this.layers.length; t++) this.layers[t].scale(i, s);
          this.selection && this.selection.resize(this.width, this.height)
      }
      size(t, e, i, s) {
          let n = i ? t : t - this.width,
              a = i ? e : e - this.height;
          if (this.width = i ? this.width + t : t, this.height = i ? this.height + e : e, "TL" != s) {
              "CL" != s && "BL" != s || (n = 0), "TC" != s && "CC" != s && "BC" != s || (n = Math.round(n / 2)), "TC" != s && "TR" != s || (a = 0), "CL" != s && "CC" != s && "CR" != s || (a = Math.round(a / 2));
              for (let t = 0; t < this.layers.length; t++) this.layers[t].rect && (this.layers[t].rect.x += n, this.layers[t].rect.y += a, this.layers[t].render())
          }
          this.selection && this.selection.size(this.width, this.height)
      }
      addLayer(t) {
          this.layerAddedCounterForUserEase++;
          let e = this.selectedLayerNr();
          return e > -1 ? this.layers.splice(e + 1, 0, t) : this.layers.push(t), this.selected = [t], t
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return h
  })), i.d(e, "b", (function() {
      return c
  }));
  var s = i(4),
      n = i(21),
      a = i(16),
      r = i(10),
      o = i(12);
  class h {
      constructor(t, e) {
          this.name = t, this.value = e
      }
  }
  class c {
      static init() {
          c.presets || (c.grouping = {
              friends: ["aladin", "alex", "amber", "anne", "antonio", "bob", "greg", "hagrid", "harry", "ivan", "jean", "josh", "karen", "lucas", "melissa", "peter", "salomon", "sara", "sophia", "tony"],
              "too-old": ["agnes", "conny", "gordon", "harrison", "henry", "logan", "olay", "porter", "sampi", "tom", "vinny"],
              instage: ["borg", "carl", "coco", "doris", "doug", "earl", "kevin", "nash", "stan", "sun", "bd orange", "blues", "country", "lemonpell", "joyful", "tiny dc", "sheberios"],
              colors: ["superone", "tonola", "reddish", "fellowing", "grassland", "springs", "justblues", "bluesteel", "flowerpot", "stinker", "violiin", "blupur", "beyllo", "wifortress"],
              retro: ["vib", "ranguit", "rangeen", "creamlow", "sven", "yenely", "ragwarm", "greered", "danligter", "trotto", "rasky", "garage", "travelster"],
              shades: ["strawberry", "clementine", "pear", "apple", "blueberry", "grapes", "dragon"],
              tuning: ["punch", "bright", "contrast", "vivid", "clairify"],
              artzy: ["mozak", "frank", "pinvet", "night vision", "darkstreet", "blomberg", "lolita", "atonic"],
              portrait: ["matte", "deep", "film", "sunny", "gritty"],
              food: ["berry", "ensalat", "morning", "corn", "sharp"],
              urban: ["cement", "style", "mold", "shimmer", "stalker", "sham"],
              nature: ["beach", "flower", "forest"]
          }, c.presets = {
              flower: [new h("vibrance", .2), new h("saturation", .1), new h("temperature", .1)],
              forest: [new h("saturation", -.2), new h("vibrance", 1), new h("clarity", .2), new h("temperature", .16), new h("tint", .2), new h("curves", new r.a([
                  [0, 0, 65, 52, 173, 190, 236, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ]))],
              beach: [new h("saturation", .2), new h("vibrance", .2), new h("curves", new r.a([
                  [0, 0, 68, 56, 199, 208, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 98, 97, 196, 201, 255, 255],
                  [0, 0, 87, 85, 201, 182, 255, 255]
              ])), new h("temperature", .1)],
              sham: [new h("saturation", -.3), new h("fill", new n.a(new s.a(153, 221, 255), "overlay", .3)), new h("curves", new r.a([
                  [60, 31, 191, 217],
                  [0, 0, 120, 134, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 120, 144, 255, 255]
              ]))],
              stalker: [new h("curves", new r.a([
                  [62, 64, 190, 191],
                  [0, 0, 133, 125, 255, 255],
                  [0, 0, 54, 65, 209, 208, 255, 255],
                  [60, 62, 96, 99, 240, 230, 255, 255]
              ])), new h("contrast", .1), new h("saturation", -.2)],
              shimmer: [new h("temperature", -.2), new h("tint", -.12), new h("fill", new n.a(new s.a(190, 11, 255), "screen", .12)), new h("curves", new r.a([
                  [8, 23, 244, 227],
                  [0, 0, 255, 255],
                  [0, 0, 131, 124, 255, 255],
                  [0, 0, 149, 112, 255, 255]
              ]))],
              mold: [new h("curves", new r.a([
                  [65, 64, 233, 233],
                  [0, 0, 138, 121, 255, 255],
                  [0, 0, 60, 75, 184, 184, 255, 255],
                  [0, 0, 64, 75, 181, 176, 255, 255]
              ])), new h("contrast", .1), new h("saturation", -.12)],
              style: [new h("curves", new r.a([
                  [0, 0, 73, 74, 191, 177, 235, 221, 255, 255],
                  [0, 26, 89, 64, 121, 126, 180, 213, 255, 255],
                  [0, 0, 71, 50, 190, 210, 255, 255],
                  [61, 64, 112, 97, 199, 198, 255, 255]
              ])), new h("vibrance", -.1), new h("saturation", -.4), new h("temperature", .1)],
              cement: [new h("curves", new r.a([
                  [0, 0, 73, 74, 191, 177, 235, 221, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 60, 54, 198, 210, 255, 255],
                  [0, 0, 73, 37, 150, 149, 199, 198, 255, 255]
              ])), new h("vibrance", -.1), new h("saturation", -.1)],
              sharp: [new h("curves", new r.a([
                  [0, 0, 42, 20, 199, 218, 224, 246, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("vibrance", .1), new h("sharpen", .1), new h("clarity", .1)],
              corn: [new h("temperature", .1), new h("vibrance", .3), new h("contrast", .1), new h("curves", new r.a([
                  [0, 0, 66, 78, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ]))],
              morning: [new h("tint", .18), new h("temperature", .1), new h("highlight", .08), new h("levels", new o.a(0, 245, 0, 255)), new h("curves", new r.a([
                  [64, 64, 150, 181, 254, 255],
                  [0, 0, 122, 138, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("fill", new n.a(new s.a(194, 120, 41), "overlay", .2))],
              ensalat: [new h("highlight", .2), new h("shadows", -.2), new h("brightness", .1), new h("levels", new o.a(10, 245, 0, 255)), new h("curves", new r.a([
                  [0, 0, 135, 119, 191, 193, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 129, 121, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("clarity", .2), new h("sharpen", .15)],
              berry: [new h("vibrance", .44), new h("curves", new r.a([
                  [0, 0, 62, 66, 121, 135, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("contrast", .2), new h("highlight", .4), new h("shadows", -.2), new h("levels", new o.a(20, 255, 0, 255))],
              gritty: [new h("saturation", -.4), new h("levels", new o.a(20, 255, 0, 255)), new h("curves", new r.a([
                  [0, 0, 50, 33, 128, 112, 190, 215, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("clarity", 1), new h("grain", .3)],
              sunny: [new h("fill", new n.a(new s.a(255, 194, 96), "overlay", .2)), new h("temperature", .1), new h("glamour", .4), new h("clarity", .3)],
              film: [new h("sharpen", .2), new h("glamour", .5), new h("grain", .5), new h("highlight", -.2), new h("shadows", -.2), new h("saturation", -.2)],
              matte: [new h("curves", new r.a([
                  [0, 50, 38, 56, 79, 82, 152, 153, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("contrast", .12), new h("saturation", -.1)],
              deep: [new h("curves", new r.a([
                  [0, 0, 117, 99, 191, 198, 255, 255],
                  [0, 0, 71, 38, 177, 209, 255, 255],
                  [0, 0, 236, 255],
                  [0, 28, 75, 101, 190, 171, 254, 233]
              ])), new h("saturation", -.3)],
              aladin: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 52, 87, 99, 255, 255],
                  [0, 0, 106, 107, 194, 190, 254, 212],
                  [0, 0, 166, 129, 254, 142]
              ]))],
              amber: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 98, 150, 255, 255],
                  [0, 0, 138, 117, 255, 255],
                  [0, 128, 254, 129]
              ]))],
              anne: [new h("contrast", .25), new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 78, 66, 135, 171, 255, 255],
                  [0, 0, 99, 87, 180, 208, 255, 255],
                  [0, 0, 94, 93, 171, 161, 255, 255]
              ]))],
              antonio: [new h("glamour", .8)],
              alex: [new h("glamour", .6)],
              bob: [new h("saturation", -.6), new h("highlight", .5)],
              greg: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 74, 50, 181, 198, 255, 255],
                  [0, 0, 61, 41, 108, 170, 158, 207, 254, 208],
                  [0, 0, 83, 56, 168, 204, 255, 255]
              ]))],
              hagrid: [new h("vibrance", .9), new h("saturation", .1), new h("clarity", .5), new h("shadows", -.3)],
              harry: [new h("fill", new n.a(new s.a(214, 178, 119), "overlay", .7)), new h("grain", .5)],
              ivan: [new h("fill", new n.a(new s.a(255, 0, 68), "overlay", .4)), new h("shadows", .15), new h("levels", new o.a(6, 255, 0, 255))],
              jean: [new h("levels", new o.a(56, 233, 0, 255)), new h("saturation", -1), new h("tint", .1), new h("exposure", .78), new h("bloom", .1)],
              josh: [new h("curves", new r.a([
                  [0, 0, 78, 52, 175, 207, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 64, 87, 129, 254, 193]
              ]))],
              karen: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 89, 144, 255, 255],
                  [0, 0, 138, 112, 255, 255],
                  [0, 0, 162, 88, 255, 255]
              ]))],
              lucas: [new h("tint", 1), new h("saturation", -.85), new h("contrast", .4), new h("shadows", 1), new h("temperature", .1)],
              melissa: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 62, 255, 255],
                  [0, 0, 255, 255],
                  [0, 61, 254, 193]
              ]))],
              peter: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 6, 31, 20, 65, 26, 87, 51, 195, 190, 254, 230],
                  [0, 11, 24, 27, 102, 131, 189, 195, 255, 255],
                  [0, 40, 126, 148, 254, 177]
              ]))],
              salomon: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 83, 50, 177, 213, 255, 255],
                  [0, 0, 69, 55, 186, 205, 255, 255],
                  [11, 56, 254, 212]
              ])), new h("contrast", -.2)],
              sara: [new h("vibrance", 1), new h("contrast", .1), new h("highlight", .3)],
              sophia: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 140, 116, 222, 254],
                  [0, 0, 70, 59, 182, 201, 255, 255],
                  [0, 29, 252, 227]
              ])), new h("saturation", .3)],
              tony: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 92, 42, 218, 252],
                  [0, 0, 73, 75, 157, 194, 255, 255],
                  [0, 27, 254, 227]
              ]))],
              agnes: [new h("desaturate", 1), new h("contrast", .5)],
              conny: [new h("saturation", -.55), new h("temperature", .25), new h("brightness", -.25), new h("levels", new o.a(14, 233, 0, 255)), new h("exposure", .35), new h("highlight", -.9)],
              gordon: [new h("desaturate", 1), new h("temperature", .7), new h("tint", .3), new h("saturation", -.2)],
              harrison: [new h("toning", new a.a(new s.a(255, 240, 215), new s.a(48, 26, 24), 1)), new h("grain", .2)],
              henry: [new h("toning", new a.a(new s.a(255, 240, 215), new s.a(48, 26, 24), 1)), new h("saturation", -.5)],
              logan: [new h("glamour", .5), new h("tint", .4), new h("saturation", -.35), new h("toning", new a.a(new s.a(255, 240, 215), new s.a(48, 26, 24), .8))],
              olay: [new h("saturation", -1), new h("grain", .5), new h("vignette", .5)],
              porter: [new h("saturation", -1), new h("vignette", .4), new h("levels", new o.a(50, 205))],
              tom: [new h("desaturate", 1)],
              sampi: [new h("toning", new a.a(new s.a(255, 228, 196), new s.a(0, 0, 0), 1)), new h("levels", new o.a(0, 217, 0, 255)), new h("temperature", .3)],
              vinny: [new h("curves", new r.a([
                  [0, 0, 133, 111, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 133, 138, 255, 255]
              ])), new h("vibrance", -1), new h("saturation", 1), new h("temperature", .8), new h("contrast", -.1), new h("highlight", .1)],
              borg: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 94, 66, 227, 255],
                  [0, 0, 93, 94, 179, 198, 255, 255],
                  [0, 19, 254, 228]
              ])), new h("fill", new n.a(new s.a(204, 255, 0), "", .1))],
              carl: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 93, 64, 227, 255],
                  [0, 0, 93, 94, 181, 189, 255, 255],
                  [0, 19, 254, 228]
              ])), new h("vignette", .3), new h("contrast", .15), new h("saturation", -.3)],
              coco: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 64, 97, 255, 255],
                  [0, 0, 142, 122, 255, 255],
                  [0, 0, 144, 112, 255, 255]
              ]))],
              doris: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 78, 48, 177, 209, 255, 255],
                  [0, 0, 92, 94, 179, 208, 255, 255],
                  [0, 52, 254, 215]
              ])), new h("saturation", -.2)],
              doug: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 64, 255, 255],
                  [0, 0, 255, 255],
                  [1, 64, 252, 193]
              ]))],
              earl: [new h("vignette", .4), new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 222, 254],
                  [0, 47, 223, 254],
                  [0, 129, 222, 255]
              ])), new h("fill", new n.a(new s.a(247, 218, 174), "multiply", .8))],
              kevin: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 75, 164, 126, 212, 255, 255],
                  [1, 37, 111, 147, 217, 217],
                  [73, 80, 149, 111, 200, 173]
              ])), new h("contrast", .15)],
              nash: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 221, 255],
                  [0, 48, 222, 252],
                  [0, 129, 226, 255]
              ])), new h("fill", new n.a(new s.a(247, 218, 174), "multiply", 1)), new h("levels", new o.a(0, 225, 0, 255))],
              stan: [new h("curves", new r.a([
                  [0, 0, 69, 54, 180, 199, 255, 255],
                  [0, 117, 64, 158, 147, 185, 208, 228, 255, 255],
                  [0, 69, 101, 131, 180, 182, 209, 224, 254, 233],
                  [1, 87, 83, 110, 168, 149, 215, 145, 254, 184]
              ]))],
              sun: [new h("fill", new n.a(new s.a(251, 242, 163), "multiply", .8)), new h("vignette", -.25)],
              "bd orange": [new h("curves", new r.a([
                  [1, 34, 43, 43, 77, 70, 97, 108, 138, 158, 173, 184, 223, 208, 254, 231],
                  [28, 3, 55, 38, 110, 92, 152, 148, 201, 208, 255, 255],
                  [0, 0, 62, 55, 193, 189, 255, 255],
                  [0, 27, 55, 75, 116, 110, 190, 149, 254, 163]
              ])), new h("grain", .33)],
              blues: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 77, 54, 181, 207, 255, 255],
                  [0, 0, 73, 51, 180, 209, 255, 255],
                  [0, 0, 54, 75, 201, 185, 255, 255]
              ]))],
              country: [new h("curves", new r.a([
                  [0, 0, 84, 74, 115, 105, 255, 255],
                  [0, 0, 73, 80, 93, 124, 255, 255],
                  [0, 0, 50, 34, 93, 105, 119, 142, 255, 255],
                  [0, 0, 85, 85, 125, 112, 255, 255]
              ]))],
              lemonpell: [new h("curves", new r.a([
                  [0, 36, 80, 84, 156, 190, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 103, 105, 158, 176, 255, 255],
                  [0, 19, 107, 83, 198, 196, 255, 255]
              ]))],
              joyful: [new h("vibrance", .3), new h("saturation", .4), new h("temperature", -.35), new h("tint", .8), new h("exposure", .3)],
              "tiny dc": [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 79, 46, 199, 217, 255, 255],
                  [9, 1, 110, 126, 254, 232],
                  [0, 46, 92, 103, 191, 158, 254, 205]
              ])), new h("grain", .3)],
              sheberios: [new h("temperature", .5), new h("saturation", .25)],
              superone: [new h("toning", new a.a(new s.a(255, 216, 153), new s.a(77, 0, 51), .8)), new h("levels", new o.a(50, 175, 0, 255))],
              tonola: [new h("toning", new a.a(new s.a(221, 255, 153), new s.a(77, 0, 51), .8)), new h("levels", new o.a(26, 213, 0, 255)), new h("saturation", .36), new h("temperature", .22)],
              reddish: [new h("toning", new a.a(new s.a(255, 214, 147), new s.a(110, 37, 0), .8)), new h("contrast", .3), new h("highlight", 1)],
              fellowing: [new h("toning", new a.a(new s.a(255, 216, 153), new s.a(77, 47, 0), .8)), new h("levels", new o.a(24, 203, 0, 255)), new h("contrast", .14), new h("saturation", .3), new h("temperature", .18)],
              grassland: [new h("toning", new a.a(new s.a(221, 255, 153), new s.a(0, 77, 25), .7)), new h("levels", new o.a(18, 227, 0, 255)), new h("contrast", .16)],
              springs: [new h("toning", new a.a(new s.a(221, 255, 153), new s.a(0, 26, 38), 1)), new h("highlight", 1), new h("levels", new o.a(40, 155, 0, 255)), new h("shadows", 1)],
              justblues: [new h("toning", new a.a(new s.a(198, 236, 255), new s.a(26, 0, 77), .79)), new h("levels", new o.a(16, 189, 0, 255)), new h("saturation", .2), new h("contrast", .2)],
              bluesteel: [new h("toning", new a.a(new s.a(255, 216, 153), new s.a(26, 0, 77), .8)), new h("levels", new o.a(0, 215, 12, 255))],
              flowerpot: [new h("toning", new a.a(new s.a(255, 153, 221), new s.a(51, 77, 0), .8)), new h("levels", new o.a(22, 215, 0, 255)), new h("vignette", -.2)],
              stinker: [new h("toning", new a.a(new s.a(255, 216, 153), new s.a(26, 0, 77), .8)), new h("levels", new o.a(0, 247, 8, 255)), new h("brightness", .14), new h("contrast", .4)],
              violiin: [new h("contrast", .32), new h("toning", new a.a(new s.a(195, 166, 255), new s.a(33, 0, 0), 1)), new h("levels", new o.a(22, 223, 0, 255)), new h("exposure", .22), new h("brightness", .12)],
              blupur: [new h("toning", new a.a(new s.a(255, 153, 221), new s.a(7, 68, 97), .8)), new h("vibrance", .7), new h("contrast", .3)],
              beyllo: [new h("vibrance", 1), new h("saturation", 1), new h("temperature", -.55), new h("tint", .1), new h("levels", new o.a(0, 255, 24, 249)), new h("toning", new a.a(new s.a(255, 213, 0), new s.a(125, 3, 84), .76)), new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 131, 115, 255, 255],
                  [0, 0, 136, 128, 255, 255],
                  [0, 0, 122, 145, 255, 255]
              ])), new h("vignette", .28)],
              wifortress: [new h("toning", new a.a(new s.a(108, 206, 255), new s.a(0, 26, 38), 1)), new h("highlight", 1), new h("levels", new o.a(40, 155, 0, 255)), new h("shadows", 1)],
              vib: [new h("vibrance", .1), new h("saturation", .5), new h("brightness", .1), new h("temperature", .5), new h("levels", new o.a(12, 253, 0, 255)), new h("highlight", .2), new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 70, 80, 198, 181, 255, 255],
                  [0, 0, 140, 135, 255, 255],
                  [0, 0, 74, 96, 200, 172, 255, 255]
              ])), new h("toning", new a.a(new s.a(255, 238, 210), new s.a(54, 6, 6), .07)), new h("contrast", -.1)],
              ranguit: [new h("saturation", .22), new h("temperature", .96), new h("tint", -.28), new h("contrast", .14), new h("brightness", -.2), new h("levels", new o.a(0, 237, 56, 255)), new h("toning", new a.a(new s.a(221, 255, 153), new s.a(41, 35, 33), .26))],
              rangeen: [new h("vibrance", 1), new h("saturation", .46), new h("temperature", .36), new h("levels", new o.a(0, 251, 14, 255)), new h("shadows", .34), new h("highlight", .12), new h("toning", new a.a(new s.a(121, 255, 224), new s.a(245, 22, 107), .12)), new h("contrast", -.1), new h("curves", new r.a([
                  [0, 0, 144, 152, 255, 255],
                  [0, 0, 136, 107, 255, 255],
                  [0, 0, 115, 102, 255, 255],
                  [0, 0, 106, 91, 255, 255]
              ]))],
              creamlow: [new h("vibrance", .82), new h("saturation", -.24), new h("temperature", 1), new h("tint", .78), new h("contrast", -.3), new h("levels", new o.a(40, 247, 0, 255)), new h("highlight", .64), new h("toning", new a.a(new s.a(221, 255, 153), new s.a(145, 39, 9), .29)), new h("curves", new r.a([
                  [0, 0, 5, 13, 78, 83, 172, 162, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 131, 120, 255, 255],
                  [0, 0, 68, 61, 175, 184, 255, 255]
              ]))],
              sven: [new h("vibrance", .7), new h("temperature", .5), new h("tint", .3), new h("exposure", .2), new h("contrast", -.2), new h("levels", new o.a(4, 255, 0, 235)), new h("highlight", -.3), new h("shadows", .3), new h("grain", .3), new h("vignette", .45)],
              yenely: [new h("tint", .5), new h("levels", new o.a(0, 235, 20, 255)), new h("saturation", -.62), new h("contrast", -.3), new h("shadows", -.6), new h("curves", new r.a([
                  [0, 0, 148, 105, 255, 255],
                  [0, 0, 92, 79, 128, 227, 255, 255],
                  [0, 0, 74, 103, 119, 172, 255, 255],
                  [0, 0, 111, 148, 255, 255]
              ])), new h("highlight", 1), new h("brightness", .14), new h("temperature", .3), new h("vibrance", 1), new h("exposure", -.1)],
              ragwarm: [new h("temperature", .62), new h("levels", new o.a(32, 255, 0, 243)), new h("highlight", -.14), new h("vignette", .28), new h("toning", new a.a(new s.a(153, 255, 187), new s.a(21, 55, 143), .07)), new h("curves", new r.a([
                  [0, 0, 126, 125, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 130, 121, 255, 255],
                  [0, 0, 138, 124, 255, 255]
              ]))],
              greered: [new h("vibrance", .32), new h("temperature", .4), new h("tint", -.5), new h("brightness", .24), new h("contrast", -.1), new h("vignette", .31), new h("shadows", .38)],
              danligter: [new h("saturation", .86), new h("temperature", -1), new h("tint", -.92), new h("brightness", .22), new h("exposure", .22), new h("contrast", .1), new h("levels", new o.a(0, 239, 0, 255)), new h("highlight", -.12), new h("dehaze", -.12), new h("toning", new a.a(new s.a(255, 216, 153), new s.a(0, 52, 77), .14)), new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [0, 0, 96, 115, 162, 194, 255, 255],
                  [0, 0, 101, 97, 185, 189, 255, 255],
                  [0, 0, 144, 130, 222, 228, 255, 255]
              ]))],
              trotto: [new h("vibrance", 1), new h("saturation", -.34), new h("temperature", 1), new h("tint", -.26), new h("levels", new o.a(24, 229, 0, 255)), new h("shadows", .14), new h("dehaze", .38), new h("toning", new a.a(new s.a(70, 250, 130), new s.a(191, 90, 32), .5)), new h("curves", new r.a([
                  [0, 0, 66, 56, 168, 171, 255, 255],
                  [0, 0, 68, 77, 191, 179, 255, 255],
                  [0, 0, 73, 80, 173, 166, 255, 255],
                  [0, 0, 82, 110, 171, 185, 255, 255]
              ])), new h("vignette", .14)],
              rasky: [new h("vibrance", 1), new h("saturation", 1), new h("temperature", -.84), new h("tint", .34), new h("dehaze", .52), new h("toning", new a.a(new s.a(203, 212, 32), new s.a(217, 24, 10), .39))],
              garage: [new h("tint", .6), new h("saturation", -.04), new h("shadows", -1), new h("grain", .42), new h("glamour", .3)],
              travelster: [new h("vibrance", .84), new h("saturation", .66), new h("contrast", .24), new h("levels", new o.a(62, 255, 0, 255)), new h("highlight", .62), new h("shadows", -.3), new h("curves", new r.a([
                  [0, 32, 136, 111, 255, 255],
                  [0, 0, 149, 161, 255, 255],
                  [0, 0, 148, 139, 255, 255],
                  [0, 0, 99, 173, 164, 213, 255, 255]
              ])), new h("toning", new a.a(new s.a(255, 216, 153), new s.a(51, 77, 0), .3)), new h("sharpen", .24), new h("grain", .23), new h("temperature", .72), new h("vignette", .13)],
              strawberry: [new h("fill", new n.a(new s.a(255, 0, 0), "soft-light", .5))],
              clementine: [new h("fill", new n.a(new s.a(255, 158, 0), "soft-light", .5))],
              pear: [new h("fill", new n.a(new s.a(170, 255, 0), "soft-light", .5))],
              apple: [new h("fill", new n.a(new s.a(0, 255, 85), "soft-light", .5))],
              blueberry: [new h("fill", new n.a(new s.a(0, 170, 255), "soft-light", .5))],
              grapes: [new h("fill", new n.a(new s.a(85, 0, 255), "soft-light", .5))],
              dragon: [new h("fill", new n.a(new s.a(255, 0, 170), "soft-light", .5))],
              punch: [new h("curves", new r.a([
                  [0, 0, 80, 64, 173, 193, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255],
                  [0, 0, 255, 255]
              ])), new h("vibrance", .5)],
              bright: [new h("highlight", -.3), new h("shadows", .5), new h("levels", new o.a(0, 215, 10, 255))],
              contrast: [new h("contrast", .2), new h("highlight", .2), new h("levels", new o.a(20, 215, 0, 255)), new h("shadows", .4)],
              vivid: [new h("vibrance", .4), new h("shadows", .25)],
              clairify: [new h("clarity", .6), new h("sharpen", .1), new h("glamour", .2)],
              mozak: [new h("mosaic", .5), new h("fringe", .2)],
              frank: [new h("fringe", .4)],
              pinvet: [new h("bloom", .33), new h("invert", 1), new h("pixelate", .7)],
              blomberg: [new h("bloom", .33), new h("invert", 1), new h("tint", 1), new h("temperature", -.8), new h("saturation", -.5)],
              lolita: [new h("fill", new n.a(new s.a(255, 153, 153), "vivid-light", 1))],
              atonic: [new h("curves", new r.a([
                  [0, 0, 255, 255],
                  [6, 235, 246, 4],
                  [131, 3, 138, 255],
                  [1, 42, 251, 213]
              ]))],
              "night vision": [new h("fill", new n.a(new s.a(30, 255, 0), "multiply", 1)), new h("levels", new o.a(0, 183, 0, 255)), new h("vignette", .85), new h("grain", .6)],
              darkstreet: [new h("temperature", -1), new h("highlight", .58), new h("shadows", -1), new h("levels", new o.a(100, 249, 0, 255)), new h("grain", 1), new h("exposure", -1)]
          })
      }
      static named(t) {
          return c.init(), this.presets[t]
      }
      static firstInGroup(t) {
          return c.init(), c.grouping[t][0]
      }
      static groups() {
          c.init();
          const t = [];
          for (const e in c.grouping) t.push(e);
          return t
      }
      static names(t) {
          c.init();
          const e = [];
          for (const i in c.grouping[t]) e.push(c.grouping[t][i]);
          return e
      }
  }
}, , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor() {
          this.radii = 0, this.outlineSize = 0, this.shadow = !1, this.shadowBlur = .3, this.shadowOpacity = .8, this.shadowColor = "#000000", this.shadowDistance = .3, this.shadowDirection = 180
      }
      clone() {
          const t = Object.create(s.prototype);
          return Object.assign(t, this)
      }
      equalTo(t) {
          return !!t && (this.variant === t.variant && this.radii === t.radii && this.content === t.content && this.fillType === t.fillType && this.fillValue === t.fillValue && this.outlineSize === t.outlineSize && this.outlineColor === t.outlineColor && this.shadow === t.shadow && this.shadowBlur === t.shadowBlur && this.shadowColor === t.shadowColor && this.shadowOpacity === t.shadowOpacity && this.shadowDistance === t.shadowDistance && this.shadowDirection === t.shadowDirection)
      }
  }
}, , , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return n
  }));
  var s = i(3);
  class n {
      constructor(t = 1, e = 0, i = 0, s = 1, a = 0, r = 0) {
          this.a = t, this.b = e, this.c = i, this.d = s, this.e = a, this.f = r, this.reset = () => {
              this.a = this.d = 1, this.b = this.c = this.e = this.f = 0
          }, this.translate = t => {
              this.transform(1, 0, 0, 1, t.x, t.y)
          }, this.rotate = t => {
              let e = Math.cos(t),
                  i = Math.sin(t);
              this.transform(e, i, -i, e, 0, 0)
          }, this.rotateDegree = function(t) {
              this.rotate(.017453292519943295 * t)
          }, this.transform = (t, e, i, s, n, a) => {
              const r = this.a,
                  o = this.b,
                  h = this.c,
                  c = this.d,
                  l = this.e,
                  d = this.f;
              this.a = r * t + h * e, this.b = o * t + c * e, this.c = r * i + h * s, this.d = o * i + c * s, this.e = r * n + h * a + l, this.f = o * n + c * a + d
          }, this.invert = () => {
              let t = this.a,
                  e = this.b,
                  i = this.c,
                  s = this.d,
                  a = this.e,
                  r = this.f,
                  o = (new n, t * s - e * i);
              this.a = s / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.e = (i * r - s * a) / o, this.f = -(t * r - e * a) / o
          }
      }
      transformPoint(t) {
          return new s.a(t.x * this.a + t.y * this.c + this.e, t.x * this.b + t.y * this.d + this.f)
      }
  }
}, , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor() {
          this.clip = "M 0,0 H 100 V 100 H 0 Z", this.outline = !1, this.outlineColor = "#555555", this.outlineSize = .3, this.shadow = !1, this.shadowBlur = .3, this.shadowOpacity = .8, this.shadowColor = "#000000", this.shadowDistance = .3, this.shadowDirection = 180
      }
      clone() {
          const t = Object.create(s.prototype);
          return Object.assign(t, this)
      }
      equalTo(t) {
          return !!t && (this.clip === t.clip && this.outline === t.outline && this.outlineSize === t.outlineSize && this.outlineColor === t.outlineColor && this.shadow === t.shadow && this.shadowBlur === t.shadowBlur && this.shadowColor === t.shadowColor && this.shadowOpacity === t.shadowOpacity && this.shadowDistance === t.shadowDistance && this.shadowDirection === t.shadowDirection)
      }
  }
}, , , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return r
  }));
  var s = i(1),
      n = i(8),
      a = i(3);
  class r extends n.a {
      constructor() {
          super(n.a.TYPE_SCRATCH), this.renderMode = "none", this.setRenderMode = t => {
              this.renderMode = t
          }, this.calculate = (t, e, i) => {
              this.canvas && (this.rect.x = Math.round(t.x), this.rect.y = Math.round(t.y), this.rect.width = Math.round(e.x - t.x), this.rect.width < 10 && (this.rect.width = 10), 0 !== i ? this.rect.height = Math.round(this.rect.width / i) : (this.rect.height = Math.round(e.y - t.y), this.rect.height < 10 && (this.rect.height = 10)))
          }, this.clear = t => {
              t ? s.b.replaceCanvas(this.canvas, t, new a.a(0, 0)) : this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.baked && this.btx.clearRect(0, 0, this.baked.width, this.baked.height)
          }, this.addBake = () => {
              this.baked = s.b.cloneCanvas(this.canvas), this.btx = this.baked.getContext("2d")
          }, this.getCanvas = () => this.baked ? this.baked : this.canvas, this.applySelection = t => {
              if (t.fresco.hasSelection()) {
                  let e = this.baked ? this.btx : this.ctx;
                  e.save(), this.baked && (e.globalCompositeOperation = "copy", e.drawImage(this.canvas, 0, 0)), e.globalCompositeOperation = "destination-in", e.drawImage(t.fresco.selection.mask, -this.rect.x, -this.rect.y), e.restore()
              }
          }, this.drawToLayer = (t, e = "source-over", i = 1) => {
              if (t && t.canvas && t.rect)
                  if (t.type === n.a.TYPE_FRAME) {
                      this.canvas.width === t.canvas.width && this.canvas.height === t.canvas.height || (t.canvas.width = this.canvas.width, t.canvas.height = this.canvas.height);
                      const e = t.canvas.getContext("2d");
                      e.clearRect(0, 0, t.canvas.width, t.canvas.height), e.drawImage(this.canvas, 0, 0)
                  } else {
                      const s = t.canvas.getContext("2d");
                      s.save(), s.globalAlpha = i, s.globalCompositeOperation = e, s.drawImage(this.baked ? this.baked : this.canvas, Math.round(this.rect.x - t.rect.x), Math.round(this.rect.y - t.rect.y), this.rect.width, this.rect.height), s.restore()
                  }
          }
      }
      setTarget(t, e, i, n) {
          this.id = t, this.rect = e.clone(), this.renderMode = i, this.canvas = n ? s.b.cloneCanvas(n) : s.b.createCanvas(e.width, e.height), this.ctx = this.canvas.getContext("2d")
      }
  }
}, function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t, e, i) {
          this.start = t, this.stop = e, this.row = i
      }
  }
}, , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return s
  }));
  class s {
      constructor(t, e) {
          var i, s, n, a, r, o, h, c, l, d, u, g, m;
          if (null != t && null != e) {
              for (c = t.length - 1, a = [], u = [], h = [], d = [], g = [], s = [], i = [], n = [], o = [], l = [], r = 0; 0 <= c ? r < c : r > c; 0 <= c ? r += 1 : r -= 1) a[r] = t[r + 1] - t[r], o[r] = e[r + 1] - e[r], l[r] = o[r] / a[r];
              for (r = 1; 1 <= c ? r < c : r > c; 1 <= c ? r += 1 : r -= 1) u[r] = 3 / a[r] * (e[r + 1] - e[r]) - 3 / a[r - 1] * (e[r] - e[r - 1]);
              for (h[0] = 1, d[0] = 0, g[0] = 0, r = 1; 1 <= c ? r < c : r > c; 1 <= c ? r += 1 : r -= 1) h[r] = 2 * (t[r + 1] - t[r - 1]) - a[r - 1] * d[r - 1], d[r] = a[r] / h[r], g[r] = (u[r] - a[r - 1] * g[r - 1]) / h[r];
              for (h[c] = 1, g[c] = 0, s[c] = 0, r = m = c - 1; m <= 0 ? r <= 0 : r >= 0; m <= 0 ? r += 1 : r -= 1) s[r] = g[r] - d[r] * s[r + 1], i[r] = (e[r + 1] - e[r]) / a[r] - a[r] * (s[r + 1] + 2 * s[r]) / 3, n[r] = (s[r + 1] - s[r]) / (3 * a[r]);
              this.x = t.slice(0, c + 1), this.a = e.slice(0, c), this.b = i, this.c = s.slice(0, c), this.d = n
          }
      }
      interpolate(t) {
          var e, i, s;
          for (i = s = this.x.length - 1;
              (s <= 0 ? i <= 0 : i >= 0) && !(this.x[i] <= t); s <= 0 ? i += 1 : i -= 1);
          return e = t - this.x[i], this.a[i] + this.b[i] * e + this.c[i] * Math.pow(e, 2) + this.d[i] * Math.pow(e, 3)
      }
  }
}, , , , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return O
  }));
  var s = i(0),
      n = i(2),
      a = i(13),
      r = i(25),
      o = i(9),
      h = i(5),
      c = i(36),
      l = i(1),
      d = i(3),
      u = i(4),
      g = i(42);
  class m {
      constructor(t) {
          this.zoomor = !1, this.hypo = void 0, this.cursorPos = new d.a(-999, -999), this.lastPos = new d.a(-999, -999), this.ants = Array(!0, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !1, !1, !1, !1, !0, !0, !0, !0, !1, !1, !1, !0, !0, !0, !0, !1, !1, !1, !0, !0, !0, !0, !1, !1, !1, !0, !0, !0, !0, !1, !1, !1), this.drawDropPreviewRect = (t, e) => {
              this.ctx.save(), this.ctx.strokeStyle = l.b.COLOR_RED_RGB_STRING, this.clear();
              const i = this.stage.rasterRect,
                  s = this.stage.zoom,
                  n = e.rect.width * s,
                  a = e.rect.height * s;
              this.ctx.strokeRect(t.x - i.x - n / 2, t.y - i.y - a / 2, n, a), this.dirty = !0, this.ctx.restore()
          }, this.setPan = (t = this.raster) => {
              this.override = !0, t.addEventListener("mousedown", this.panDown, !1), t.classList.add("grab"), this.stage.resetAnchor(), this.cursorImage && Object(s.b)("cursor-image") && this.cursorImage.remove()
          }, this.removePan = (t = this.raster) => {
              this.override = !1, t.classList.remove("grab"), t.removeEventListener("mousedown", this.panDown, !1), this.cursorImage && (Object(s.b)("workspace").appendChild(this.cursorImage), this.positionCursorImage())
          }, this.panDown = t => {
              t.stopPropagation(), this.stage.resetAnchor(), this.downPoint = new d.a(t.clientX, t.clientY), this.downAnchor = this.stage.anchor.clone(), document.addEventListener("mousemove", this.panMove, !0), document.addEventListener("mouseup", this.panUp, !0)
          }, this.panMove = t => {
              let e = ~~((t.clientX - this.downPoint.x) / this.stage.zoom),
                  i = ~~((t.clientY - this.downPoint.y) / this.stage.zoom);
              this.stage.setAnchor(new d.a(this.downAnchor.x - e, this.downAnchor.y - i)), this.stage.updateViewport()
          }, this.panUp = t => {
              document.removeEventListener("mousemove", this.panMove, !0), document.removeEventListener("mouseup", this.panUp, !0)
          }, this.setPicker = (t = this.raster) => {
              this.override = !0, t.addEventListener("mousedown", this.pickerDown, !1), t.addEventListener("mousemove", this.pickerMove, !1), t.classList.add("crosshair");
              const e = this.lastPos.clone(),
                  i = new g.a;
              let n = Object(s.a)("div", {
                  id: "color-picker-quick"
              });
              for (let t = 0; t < h.a.oldColor.length; t++) {
                  i.reset(), i.rotateDegree(14 * -t);
                  let a = i.transformPoint(new d.a(-100, 0));
                  a.x += e.x + 20, a.y += e.y - 46;
                  let r = Object(s.a)("div", {
                      classList: "color-pod small floater"
                  });
                  r.style.backgroundColor = h.a.oldColor[t], r.style.left = a.x + "px", r.style.top = a.y + "px", r.addEventListener("mousemove", (t => {
                      this.lastPos.x = t.clientX, this.lastPos.y = t.clientY, this.pickerPreview(this.lastPos.clone()), this.preview.style.backgroundColor = t.currentTarget.style.backgroundColor
                  })), r.addEventListener("click", (t => {
                      let e = u.a.fromRGB(t.currentTarget.style.backgroundColor);
                      this.preview.style.backgroundColor = e.toHEX(), document.dispatchEvent(new CustomEvent("set-color", {
                          detail: e
                      }))
                  })), n.append(r)
              }
              Object(s.b)("workspace").appendChild(n), this.preview = document.createElement("div"), this.preview.id = "color-picker-preview", this.preview.style.display = "none", Object(s.b)("workspace").appendChild(this.preview), this.cursorImage && Object(s.b)("cursor-image") && this.cursorImage.remove(), this.pickerPreview(e)
          }, this.updateHistoryPods = () => {
              var t = Object(s.b)("color-picker-quick").children;
              for (let e = 0; e < t.length; e++) t[e].style.backgroundColor = h.a.oldColor[e]
          }, this.pickerMove = t => {
              this.lastPos.x = t.clientX, this.lastPos.y = t.clientY, this.pickerPreview(this.lastPos.clone())
          }, this.pickerPreview = t => {
              if (this.preview.style.top = t.y - 50 + "px", this.preview.style.left = t.x + 10 + "px", this.preview.style.display = "block", t.x -= this.stage.canvas.offsetLeft, t.y -= this.stage.canvas.offsetTop, t.x < 0 || t.y < 0 || t.x > this.stage.canvas.width || t.y > this.stage.canvas.height) return void(this.preview.style.display = "none");
              let e = this.stage.canvas.getContext("2d").getImageData(t.x, t.y, 1, 1).data;
              this.preview.style.backgroundColor = new u.a(e[0], e[1], e[2]).toHEX()
          }, this.pickerDown = t => {
              let e = new d.a(t.clientX, t.clientY);
              if (e.x -= this.stage.canvas.offsetLeft, e.y -= this.stage.canvas.offsetTop, e.x < 0 || e.y < 0 || e.x > this.stage.canvas.width || e.y > this.stage.canvas.height) return;
              let i = this.stage.canvas.getContext("2d").getImageData(e.x, e.y, 1, 1).data;
              const s = new u.a(i[0], i[1], i[2]);
              this.updateColorHistory(s), this.updateHistoryPods(), document.dispatchEvent(new CustomEvent("set-color", {
                  detail: s
              }))
          }, this.updateColorHistory = t => {
              let e = t.toHEX(),
                  i = h.a.oldColor.findIndex((t => t === e));
              i > -1 ? h.a.oldColor.splice(0, 0, h.a.oldColor.splice(i, 1)[0]) : (h.a.oldColor.pop(), h.a.oldColor.unshift(e)), Object(h.b)("oldColor", h.a.oldColor)
          }, this.removePicker = (t = this.raster) => {
              var e;
              this.override && (this.override = !1, t.classList.remove("crosshair"), t.removeEventListener("mousedown", this.pickerDown, !1), t.removeEventListener("mousemove", this.pickerMove, !1), this.preview.remove(), null === (e = Object(s.b)("color-picker-quick")) || void 0 === e || e.remove(), this.cursorImage && (this.stage.workspace.appendChild(this.cursorImage), this.positionCursorImage()))
          }, this.setCursorImage = t => {
              this.cursorImage && Object(s.b)("cursor-image") && (this.cursorImage.remove(), this.cursorImage = void 0), this.raster.style.cursor = t ? "none" : "crosshair", t && (this.cursorImage = t, this.cursorImage.id = "cursor-image", this.stage.workspace.appendChild(this.cursorImage), this.positionCursorImage())
          }, this.animateCursorTap = () => {
              const t = Object(s.a)("div", {
                  classList: "clickEffect"
              });
              t.style.top = this.cursorPos.y + this.stage.rasterRect.y + "px", t.style.left = this.cursorPos.x + this.stage.rasterRect.x + "px", t.addEventListener("animationend", (() => t.remove())), this.stage.workspace.appendChild(t)
          }, this.positionCursorImage = () => {
              this.cursorImage && (this.cursorImage.style.left = this.cursorPos.x - ~~(this.cursorImage.width / 2) + this.raster.offsetLeft + "px", this.cursorImage.style.top = this.cursorPos.y - ~~(this.cursorImage.height / 2) + this.raster.offsetTop + "px")
          }, this.removeCursorImage = () => {
              this.raster.style.cursor = "unset", this.cursorImage && (this.cursorImage.remove(), this.cursorImage = void 0, this.cursorPos.x = this.cursorPos.y = -999)
          }, this.throttle = 0, this.mouseWheel = t => {
              if (h.a.scrollZoom && (t.preventDefault(), t.stopPropagation(), this.throttle + 20 < Date.now())) {
                  this.throttle = Date.now(), this.stage.supressRender = !0;
                  const e = new d.a(t.clientX - this.stage.rasterRect.x, t.clientY - this.stage.rasterRect.y),
                      i = this.stage.getViewPortCenter(),
                      s = this.stage.translateRasterToFresco(e);
                  this.stage.setFluidZoom(t.deltaY < 0);
                  const n = this.stage.translateRasterToFresco(e);
                  this.stage.supressRender = !1, this.stage.setAnchor(new d.a(i.x + (s.x - n.x), i.y + (s.y - n.y))), this.stage.updateViewport(), document.dispatchEvent(new CustomEvent("mouse-cord", {
                      detail: this.stage.translateRasterToFresco(e)
                  }))
              }
          }, this.mouseMove = t => {
              this.lastPos.x = t.clientX, this.lastPos.y = t.clientY, this.cursorPos.x = t.clientX - this.stage.rasterRect.x, this.cursorPos.y = t.clientY - this.stage.rasterRect.y, this.cursorImage && this.positionCursorImage(), document.dispatchEvent(new CustomEvent("mouse-cord", {
                  detail: this.stage.translateRasterToFresco(this.cursorPos)
              }))
          }, this.mouseLeave = t => {
              this.cursorPos.x = this.cursorPos.y = -999, this.positionCursorImage(), document.dispatchEvent(new CustomEvent("mouse-cord", {
                  detail: void 0
              }))
          }, this.touchMove = t => {
              if (t.targetTouches.length > 1) {
                  t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation();
                  let e = Math.hypot(t.targetTouches[0].pageX - t.targetTouches[1].pageX, t.targetTouches[0].pageY - t.targetTouches[1].pageY);
                  if (void 0 === this.hypo) return this.hypo = e, this.downPoint = new d.a((t.targetTouches[0].pageX + t.targetTouches[1].pageX) / 2, (t.targetTouches[0].pageY + t.targetTouches[1].pageY) / 2), this.stage.resetAnchor(), this.downAnchor = this.stage.anchor.clone(), void this.raster.addEventListener("touchend", this.touchEnd, {
                      passive: !1
                  });
                  if (this.hypo - e < -20 || this.hypo - e > 20) this.stage.setFluidZoom(Boolean(e > this.hypo)), this.hypo = e;
                  else {
                      const e = new d.a((t.targetTouches[0].pageX + t.targetTouches[1].pageX) / 2, (t.targetTouches[0].pageY + t.targetTouches[1].pageY) / 2),
                          i = this.stage.isHDPI ? .5 * this.stage.zoom : this.stage.zoom,
                          s = Math.round(e.x - this.downPoint.x) / i,
                          n = Math.round(e.y - this.downPoint.y) / i;
                      this.stage.setAnchor(new d.a(this.downAnchor.x - s, this.downAnchor.y - n)), this.stage.updateViewport()
                  }
              }
          }, this.touchEnd = t => {
              t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.hypo = void 0, this.downPoint = void 0, this.downAnchor = void 0, this.raster.removeEventListener("touchend", this.touchEnd)
          }, this.freeze = (t = !0) => {
              this.frozen = t, t || this.render()
          }, this.sleep = () => {
              this.sleeping = !0, this.render()
          }, this.wake = () => {
              this.sleeping = !1, this.render()
          }, this.so = 7, this.render = (t, e = !0) => {
              if (e && this.clear(), this.sleeping) return;
              if (window.clearTimeout(this.timer), !this.stage || !this.stage.fresco || this.stage.supressRender) return;
              if (!this.stage.fresco.hasSelection()) return void(t && this.ctx.putImageData(t, 0, 0));
              let i, s, n, a, r, o = this.stage.zoom,
                  h = this.stage.fresco.selection,
                  c = this.stage.getViewPort(),
                  l = this.stage.offset.x > 0 ? this.stage.offset.x : 0,
                  d = this.stage.offset.y > 0 ? this.stage.offset.y : 0;
              if (t || (t = this.getImageData()), o > 1) {
                  var u = Math.ceil(o) - 1;
                  for (let e = 0, o = 0, l = h.outline.length; e < l; e += 3)
                      if (n = h.outline[e], a = h.outline[e + 1], r = h.outline[e + 2], n + h.offset.x >= c.x && n + h.offset.x < c.x + c.width && a + h.offset.y >= c.y && a + h.offset.y < c.y + c.height) switch (i = Math.round((n + h.offset.x) * this.stage.zoom) + this.stage.offset.x, s = Math.round((a + h.offset.y) * this.stage.zoom) + this.stage.offset.y, r) {
                          case 0:
                              for (this.drawAnt(i, s, t), o = 1; o <= u; ++o) this.drawAnt(i + o, s, t), this.drawAnt(i, s + o, t);
                              break;
                          case 1:
                              for (o = 0; o <= u; ++o) this.drawAnt(i + o, s, t);
                              break;
                          case 2:
                              for (i += u, this.drawAnt(i, s, t), o = 1; o <= u; ++o) this.drawAnt(i - o, s, t), this.drawAnt(i, s + o, t);
                              break;
                          case 3:
                              for (o = 0; o <= u; ++o) this.drawAnt(i, s + o, t);
                              break;
                          case 4:
                              for (i += u, o = 0; o <= u; ++o) this.drawAnt(i, s + o, t);
                              break;
                          case 5:
                              for (s += u, this.drawAnt(i, s, t), o = 1; o <= u; ++o) this.drawAnt(i, s - o, t), this.drawAnt(i + o, s, t);
                              break;
                          case 6:
                              for (s += u, o = 0; o <= u; ++o) this.drawAnt(i + o, s, t);
                              break;
                          case 7:
                              for (i += u, s += u, this.drawAnt(i, s, t), o = 1; o <= u; ++o) this.drawAnt(i, s - o, t), this.drawAnt(i - o, s, t);
                              break;
                          case 8:
                              for (this.drawAnt(i, s, t), this.drawAnt(i + u, s + u, t), o = 1; o <= u; ++o) this.drawAnt(i + o, s, t), this.drawAnt(i, s + o, t), this.drawAnt(i + u, s - o + u, t), this.drawAnt(i - o + u, s + u, t);
                              break;
                          case 9:
                              for (this.drawAnt(i, s, t), o = 1; o <= u; ++o) this.drawAnt(i + o, s, t), this.drawAnt(i, s + o, t), this.drawAnt(i + o, s + u, t);
                              break;
                          case 10:
                              for (i += u, s += u, this.drawAnt(i, s, t), o = 1; o <= u; ++o) this.drawAnt(i + o - u, s - u, t), this.drawAnt(i, s - o, t), this.drawAnt(i - o, s, t);
                              break;
                          case 11:
                              for (o = 0; o <= u; ++o) this.drawAnt(i + o, s, t), this.drawAnt(i, s + o, t), this.drawAnt(i + u, s + o, t);
                              break;
                          case 12:
                              for (o = 0; o <= u; ++o) this.drawAnt(i + o, s + u, t), this.drawAnt(i, s + o, t), this.drawAnt(i + u, s + o, t);
                              break;
                          case 13:
                              for (o = 0; o <= u; ++o) this.drawAnt(i, s + o, t), this.drawAnt(i + u, s + o, t);
                              break;
                          case 14:
                              for (o = 0; o <= u; ++o) this.drawAnt(i + o, s, t), this.drawAnt(i + o, s + u, t)
                      }
              } else
                  for (let e = 0, u = h.outline.length; e < u; e += 3) n = h.outline[e], a = h.outline[e + 1], r = h.outline[e + 2], i = Math.round((n + h.offset.x - c.x) * o) + l, s = Math.round((a + h.offset.y - c.y) * o) + d, this.drawAnt(i, s, t);
              this.ctx.putImageData(t, 0, 0), this.dirty = !0, this.frozen || (this.timer = window.setTimeout((() => {
                  --this.so < 0 && (this.so = 7), this.frozen || this.render()
              }), 400))
          }, this.drawAnt = (t, e, i) => {
              if (e = ~~e, (t = ~~t) >= 0 && e >= 0 && t < this.raster.width && e < this.raster.height) {
                  let s = 4 * (e * this.raster.width + t);
                  this.ants[(t + this.so) % 8 * 8 + e % 8] ? (i.data[s] = 0, i.data[s + 1] = 0, i.data[s + 2] = 0, i.data[s + 3] = 255) : (i.data[s] = 255, i.data[s + 1] = 255, i.data[s + 2] = 255, i.data[s + 3] = 255)
              }
          }, this.clear = (t = !1) => {
              (t || this.dirty) && (this.ctx && this.ctx.clearRect(0, 0, this.raster.width, this.raster.height), this.dirty = !1)
          }, this.stage = t, this.raster = t.raster, this.ctx = this.raster.getContext("2d"), this.ctx.imageSmoothingEnabled = !1, this.raster.addEventListener("mousemove", this.mouseMove, !0), this.raster.addEventListener("mouseout", this.mouseLeave, !0), this.raster.addEventListener("touchmove", this.touchMove, {
              passive: !1
          }), this.raster.addEventListener("wheel", this.mouseWheel, {
              passive: !1
          }), this.raster.addEventListener("contextmenu", (t => {
              t.preventDefault()
          }), !1), "e" === h.a.product && document.addEventListener("viewport-render", (() => window.requestAnimationFrame((() => this.render()))), !1)
      }
      getImageData() {
          return this.ctx.getImageData(0, 0, this.raster.width, this.raster.height)
      }
      drawAntPolygon(t) {
          this.clear(), t.length > 0 && (this.ctx.save(), this.ctx.translate(.5, .5), this.ctx.strokeStyle = "#ffffff", this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y), t.forEach((t => {
              this.ctx.lineTo(t.x, t.y)
          })), this.ctx.stroke(), this.ctx.strokeStyle = "#000000", this.ctx.setLineDash([5, 5]), this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y), t.forEach((t => {
              this.ctx.lineTo(t.x, t.y)
          })), this.ctx.stroke(), this.ctx.restore(), this.dirty = !0), this.render(void 0, !1)
      }
      drawAntBezier(t) {
          if (this.clear(), t.length > 0) {
              this.ctx.save(), this.ctx.translate(.5, .5), this.ctx.strokeStyle = "#ffffff", this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y);
              for (let e = 1; e < t.length; e += 2) e + 1 === t.length ? this.ctx.lineTo(t[e].x, t[e].y) : this.ctx.quadraticCurveTo(t[e + 1].x, t[e + 1].y, t[e].x, t[e].y);
              this.ctx.stroke(), this.ctx.strokeStyle = "#000000", this.ctx.setLineDash([5, 5]), this.ctx.beginPath(), this.ctx.moveTo(t[0].x, t[0].y);
              for (let e = 1; e < t.length; e += 2) e + 1 === t.length ? this.ctx.lineTo(t[e].x, t[e].y) : this.ctx.quadraticCurveTo(t[e + 1].x, t[e + 1].y, t[e].x, t[e].y);
              this.ctx.stroke(), this.ctx.restore(), this.dirty = !0
          }
          this.render(void 0, !1)
      }
      drawAntRectangle(t) {
          this.clear();
          let e = this.getImageData();
          for (var i = 0; i < t.height; ++i) this.drawAnt(t.x, t.y + i, e), this.drawAnt(t.right() - 1, t.y + i, e);
          for (var s = 0; s < t.width; ++s) this.drawAnt(t.x + s, t.y, e), this.drawAnt(t.x + s, t.bottom() - 1, e);
          this.dirty = !0, this.render(e, !1)
      }
      drawAntEllipse(t) {
          this.clear();
          let e = this.getImageData();
          var i, s, n, a, r, o, h, c, l, d, u, g, m, p, v, f, w = t.width % 2 == 0 ? 1 : 0,
              y = t.height % 2 == 0 ? 1 : 0;
          i = .5 * t.width, h = 0, c = s = .5 * t.height, u = (l = i * i) * (1 - (s << 1)) + (p = (d = s * s) << 1), g = d - (m = l << 1) * ((s << 1) - 1), n = 3 * p, a = f = d << 2, r = (v = l << 2) * (s - 1), o = m * ((s << 1) - 3), this.drawAnt(t.x + h + i - w, t.y + c + s - y, e), this.drawAnt(t.x - h + i, t.y + c + s - y, e), this.drawAnt(t.x - h + i, t.y - c + s, e), this.drawAnt(t.x + h + i - w, t.y - c + s, e);
          do {
              u < 0 ? (u += n, g += a, n += f, a += f, h++) : g < 0 ? (u += n - r, n += f, r -= v, g += a - o, a += f, o -= v, h++, c--) : (u -= r, r -= v, g -= o, o -= v, c--), this.drawAnt(t.x + h + i - w, t.y + c + s - y, e), this.drawAnt(t.x - h + i, t.y + c + s - y, e), this.drawAnt(t.x - h + i, t.y - c + s, e), this.drawAnt(t.x + h + i - w, t.y - c + s, e)
          } while (c > 0);
          this.dirty = !0, this.render(e, !1)
      }
      cleanUp() {
          window.clearTimeout(this.timer)
      }
  }
  var p = i(20),
      v = i(6),
      f = i(8),
      w = i(28),
      y = i(23),
      x = i(15),
      b = i(17),
      S = i(30),
      k = i(27),
      C = i(19),
      E = i(39),
      M = i(37);

  function T(t, e) {
      var i, s, n, a;
      const r = new Date;
      switch (e.type) {
          case "bitmapChange":
              {
                  if (!t.hasLayer(e.layer)) return;
                  const i = e.layer,
                      s = i.rect ? i.rect.clone() : void 0;
                  let n, a = l.b.cloneCanvas(i.mask);
                  if (i.canvas) {
                      n = i.canvas.getContext("2d").getImageData(e.patchRect.x, e.patchRect.y, e.patchRect.width, e.patchRect.height)
                  }
                  if (e.patch) {
                      const t = e.rect,
                          n = !!i.canvas;
                      i.extendCanvas(t);
                      const a = i.canvas.getContext("2d");
                      if (n && (e.patchRect.x += s.x - i.rect.x, e.patchRect.y += s.y - i.rect.y), a.putImageData(e.patch, e.patchRect.x, e.patchRect.y), e.rect.width < i.rect.width || e.rect.height < i.rect.height) {
                          const s = l.b.createCanvas(e.rect.width, e.rect.height);
                          s.getContext("2d").drawImage(i.canvas, i.rect.x - e.rect.x, i.rect.y - e.rect.y), e.patchRect.x += i.rect.x - t.x, e.patchRect.y += i.rect.y - t.y, i.canvas = s, i.rect = t
                      }
                  } else i.canvas = null,
                  i.rect = new v.a(0, 0, 0, 0);
                  return e.mask && (i.mask = e.mask),
                  i.render(),
                  e.layer.syncRequested = r,
                  {
                      type: "bitmapChange",
                      kind: e.kind,
                      layer: i,
                      rect: s,
                      patch: n,
                      patchRect: e.patchRect.clone(),
                      mask: a
                  }
              }
          case "bitmapSwitch":
              {
                  const t = l.b.cloneCanvas(e.layer.canvas),
                      i = e.layer.trim ? e.layer.trim.clone() : e.layer.rect.clone();
                  return e.layer.switchCanvas(e.canvas, e.rect),
                  e.layer.render(),
                  e.layer.syncRequested = r,
                  {
                      type: "bitmapSwitch",
                      kind: e.kind,
                      layer: e.layer,
                      rect: i,
                      canvas: t
                  }
              }
          case "selectionAndBitmapSwitch":
              {
                  const s = l.b.cloneCanvas(e.layer.canvas),
                      n = e.layer.rect.clone();
                  e.layer.switchCanvas(e.canvas, e.rect),
                  e.layer.render(),
                  e.layer.syncRequested = r;
                  const a = l.b.cloneCanvas(null === (i = null == t ? void 0 : t.selection) || void 0 === i ? void 0 : i.mask);
                  return t.addSelection(),
                  t.selection.setMask(e.selection),
                  {
                      type: "selectionAndBitmapSwitch",
                      kind: e.kind,
                      selection: a,
                      layer: e.layer,
                      rect: n,
                      canvas: s
                  }
              }
          case "addLayer":
              {
                  const i = t.layerNr(e.layer.id),
                      s = t.deleteLayerById(e.layer.id);
                  return {
                      type: "addLayer",
                      kind: e.kind,
                      layer: s,
                      order: i
                  }
              }
          case "deleteLayer":
              return t.layers.splice(e.index, 0, e.layer), e;
          case "order":
              return t.changeLayerOrder(e.to, e.from), e;
          case "layerSettings":
              {
                  const t = Object.assign({}, e.layer.settings);
                  return e.layer.settings = e.settings,
                  e.layer.syncRequested = r,
                  {
                      type: "layerSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          case "textChange":
              {
                  const t = e.layer.text;
                  return e.layer.setText(e.text),
                  e.layer.syncRequested = r,
                  {
                      type: "textChange",
                      layer: e.layer,
                      text: t
                  }
              }
          case "textSettings":
              {
                  const t = e.layer.textSettings.clone();
                  return e.layer.textSettings = e.settings,
                  e.layer.textSettings.measureText(),
                  e.layer.prepare(),
                  e.layer.syncRequested = r,
                  {
                      type: "textSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          case "background":
              {
                  const i = t.color;
                  return t.color = e.color,
                  {
                      type: "background",
                      color: i
                  }
              }
          case "mask":
              {
                  const t = e.layer;
                  let i;
                  const s = t.hasMask();
                  if (!s && e.patch && e.layer.addMask(), e.patch) {
                      const n = e.patch,
                          a = t.mask.getContext("2d");
                      s && (i = a.getImageData(e.rect.x, e.rect.y, e.rect.width, e.rect.height)), a.putImageData(n, e.rect.x, e.rect.y)
                  } else {
                      if (s) {
                          i = t.mask.getContext("2d").getImageData(0, 0, t.mask.width, t.mask.height)
                      }
                      e.layer.removeMask()
                  }
                  return t.render(),
                  e.layer.syncRequested = r,
                  {
                      type: "mask",
                      layer: t,
                      rect: e.patch && e.rect ? e.rect : new v.a(0, 0, t.canvas.width, t.canvas.height),
                      patch: i
                  }
              }
          case "maskInvert":
              return e.layer.invertMask(), e.layer.render(), e.layer.syncRequested = r, {
                  type: "maskInvert",
                  layer: e.layer
              };
          case "adjust":
              {
                  const t = e.shaders.cloneChain();
                  return e.shaders.chain = e.chain,
                  {
                      type: "adjust",
                      layer: e.layer,
                      kind: e.kind,
                      chain: t,
                      shaders: e.shaders
                  }
              }
          case "glitch":
              {
                  const t = e.shaders.cloneChain();
                  return e.shaders.chain = e.chain,
                  {
                      type: "glitch",
                      layer: e.layer,
                      kind: e.kind,
                      chain: t,
                      shaders: e.shaders
                  }
              }
          case "effect":
              {
                  let t, i;
                  return e.tool.marked && (t = e.tool.marked.name, i = e.tool.marked.value),
                  e.tool.shaders.reset(),
                  e.name ? (e.tool.shaders.addPreset(e.name, e.value), e.tool.marked = new M.a(e.name, e.value)) : e.tool.marked = void 0,
                  {
                      type: "effect",
                      layer: e.layer,
                      kind: e.kind,
                      tool: e.tool,
                      name: t,
                      value: i
                  }
              }
          case "arrange":
              switch (e.layer.syncRequested = r, e.action.type) {
                  case "rect":
                      {
                          const t = e.layer.rect.clone();
                          return e.layer.rect = e.action.rect,
                          e.layer instanceof y.a && (t.height = e.layer.textSettings.size, e.layer.rect.height !== e.layer.textSettings.size && e.layer.setTextSize(e.layer.rect.height)),
                          e.layer instanceof x.a && e.layer.trimOnResize(t),
                          e.layer instanceof b.a || e.layer.render(),
                          {
                              type: "arrange",
                              kind: e.kind,
                              action: {
                                  type: "rect",
                                  rect: t
                              },
                              layer: e.layer
                          }
                      }
                  case "trim":
                      {
                          const t = e.layer.trim.clone();
                          return e.layer.trim = e.action.rect,
                          e.layer.render(),
                          {
                              type: "arrange",
                              kind: e.kind,
                              action: {
                                  type: "trim",
                                  rect: t
                              },
                              layer: e.layer
                          }
                      }
                  case "trans":
                      {
                          const t = l.b.cloneCanvas(e.layer.canvas),
                              i = l.b.cloneCanvas(e.layer.mask),
                              s = e.layer.rect.clone();
                          return e.layer.canvas = e.action.data,
                          e.layer.mask = e.action.mask,
                          e.layer.rect = e.action.rect,
                          e.layer.render(),
                          {
                              type: "arrange",
                              layer: e.layer,
                              kind: e.kind,
                              action: {
                                  type: "trans",
                                  data: t,
                                  mask: i,
                                  rect: s
                              }
                          }
                      }
              }
          case "arrangeStack":
              {
                  let t = e.stack,
                      i = e.rects,
                      s = new Array;
                  for (let e = 0; e < t.length; e++) {
                      let n = t[e],
                          a = n.rect ? n.rect.clone() : void 0;
                      n.rect = i[e], n instanceof y.a && (a.height = n.textSettings.size, n.rect.height !== n.textSettings.size && n.setTextSize(n.rect.height)), n instanceof x.a && n.trimOnResize(a), s.push(a), n.syncRequested = r, n.render()
                  }
                  return {
                      type: "arrangeStack",
                      id: e.id,
                      kind: "arrange",
                      stack: e.stack,
                      rects: s
                  }
              }
          case "flipLayer":
              return e.layer.flip(e.vertical), e.layer.render(), e.layer.syncRequested = r, {
                  type: "flipLayer",
                  layer: e.layer,
                  vertical: e.vertical
              };
          case "rotateLayer":
              return e.layer.rotate(!e.counterClock), e.layer.render(), e.layer.syncRequested = r, {
                  type: "rotateLayer",
                  layer: e.layer,
                  counterClock: !e.counterClock
              };
          case "crop":
              {
                  const i = new d.a(-e.offset.x, -e.offset.y),
                      s = new p.a(t.width, t.height);
                  let n;
                  if (t.crop(new v.a(e.offset.x, e.offset.y, e.size.width, e.size.height)), e.straighten) {
                      const i = t.layers[0];
                      n = l.b.cloneCanvas(i.canvas), i.syncRequested = r, i.canvas = e.straighten, i.rect = new v.a(0, 0, i.canvas.width, i.canvas.height), t.width = i.rect.width, t.height = i.rect.height
                  }
                  return t.layers.forEach((t => t.syncRequested = r)),
                  document.dispatchEvent(new CustomEvent("reset-viewport")),
                  {
                      type: "crop",
                      offset: i,
                      size: s,
                      straighten: n
                  }
              }
          case "canvasResize":
              {
                  const i = new p.a(t.width, t.height);
                  return t.size(e.size.width, e.size.height, !1, e.anchor),
                  document.dispatchEvent(new CustomEvent("reset-viewport")),
                  {
                      type: "canvasResize",
                      anchor: e.anchor,
                      size: i
                  }
              }
          case "imageResize":
              {
                  const i = new p.a(t.width, t.height),
                      s = t.layers.map((t => {
                          var e;
                          return t.syncRequested = r, {
                              layer: t,
                              rect: null === (e = t.rect) || void 0 === e ? void 0 : e.clone(),
                              mask: l.b.cloneCanvas(t.mask),
                              bitmap: l.b.cloneCanvas(t.canvas)
                          }
                      }));
                  t.width = e.size.width,
                  t.height = e.size.height;
                  for (let t = 0; t < e.layers.length; t++) {
                      const i = e.layers[t],
                          s = i.layer;
                      s.rect = i.rect, s.canvas = i.bitmap, s.mask = i.mask, s.render()
                  }
                  return t.selection && t.selection.resize(t.width, t.height),
                  document.dispatchEvent(new CustomEvent("reset-viewport")),
                  {
                      type: "imageResize",
                      size: i,
                      layers: s
                  }
              }
          case "flip":
              return t.flip(e.vertical), t.layers.forEach((t => t.syncRequested = r)), {
                  type: "flip",
                  vertical: e.vertical
              };
          case "rotate":
              return t.rotate(!e.counterClock), document.dispatchEvent(new CustomEvent("reset-viewport")), t.layers.forEach((t => t.syncRequested = r)), {
                  type: "rotate",
                  counterClock: e.counterClock
              };
          case "selectionChange":
              {
                  const i = t.selection ? l.b.cloneCanvas(t.selection.mask) : void 0;
                  return e.selection ? (t.addSelection(), t.selection.setMask(e.selection), Object.assign(Object.assign({}, e), {
                      selection: i
                  })) : (t.removeSelection(), Object.assign(Object.assign({}, e), {
                      selection: i
                  }))
              }
          case "merge":
              {
                  const i = t.layers.findIndex((t => t === e.target));
                  if (i < 0) return;
                  const [s] = t.layers.splice(i, 1);
                  return e.layers.forEach((i => {
                      const s = e.order.findIndex((t => t === i.id));
                      s < 0 ? t.layers.push(i) : t.layers.splice(s, 0, i)
                  })),
                  t.getSelected() && !t.hasLayer(t.getSelected()) && t.selectLayerById(e.layers[0].id),
                  {
                      type: "merge",
                      kind: e.kind,
                      target: s,
                      from: e.layers,
                      order: i
                  }
              }
          case "rasterize":
              {
                  const i = t.layers.findIndex((t => t.id === e.newId));
                  if (i < 0) return;
                  const [n] = t.layers.splice(i, 1, e.layer);
                  return (null === (s = null == t ? void 0 : t.getSelected()) || void 0 === s ? void 0 : s.id) === n.id && t.selectLayerById(e.layer.id),
                  {
                      type: "rasterize",
                      layer: n,
                      kind: e.kind,
                      newId: e.layer.id
                  }
              }
          case "convertSelectionToMask":
              {
                  const i = e.layer.mask;
                  return e.layer.removeMask(),
                  e.layer.syncRequested = r,
                  t.addSelection(),
                  t.selection.mask = e.selection,
                  t.selection.ctx = e.selection.getContext("2d"),
                  t.selection.createOutline(),
                  {
                      type: "convertSelectionToMask",
                      layer: e.layer,
                      mask: i
                  }
              }
          case "convertMaskToSelection":
              {
                  const i = t.selection.mask;
                  return t.removeSelection(),
                  e.layer.mask = e.mask,
                  e.layer.render(),
                  e.layer.syncRequested = r,
                  {
                      type: "convertMaskToSelection",
                      layer: e.layer,
                      selection: i
                  }
              }
          case "applyMask":
              return e.layer.canvas = e.canvas, e.layer.mask = e.mask, e.layer.rect = null === (n = e.rect) || void 0 === n ? void 0 : n.clone(), e.layer.render(), e.layer.syncRequested = r, {
                  type: "applyMask",
                  layer: e.layer
              };
          case "frameContent":
              {
                  let t, i;
                  return e.layer.canvas && (t = l.b.cloneCanvas(e.layer.canvas), i = null === (a = e.layer.trim) || void 0 === a ? void 0 : a.clone()),
                  e.layer.canvas = e.canvas,
                  e.layer.trim = e.trim,
                  e.layer.render(),
                  {
                      type: "frameContent",
                      kind: e.kind,
                      layer: e.layer,
                      canvas: t,
                      trim: i
                  }
              }
          case "frameSettings":
              {
                  const t = e.layer.frameSettings.clone();
                  return e.layer.frameSettings = e.settings,
                  e.layer.prepare(),
                  e.layer.syncRequested = r,
                  {
                      type: "frameSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          case "shapeSettings":
              {
                  const t = e.layer.shapeSettings.clone();
                  return e.layer.shapeSettings = e.settings,
                  e.layer.prepare(),
                  e.layer.syncRequested = r,
                  {
                      type: "shapeSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          default:
              throw new Error("No handler for this undo type")
      }
  }

  function P(t, e) {
      var i, s, n;
      const a = new Date;
      switch (e.type) {
          case "bitmapChange":
              {
                  const t = e.layer,
                      i = l.b.canvasImageData(e.layer.canvas, e.patchRect),
                      s = t.rect ? t.rect.clone() : void 0;
                  let n = l.b.cloneCanvas(t.mask);
                  if (e.patch) {
                      const i = e.rect,
                          n = !!t.canvas;
                      t.extendCanvas(i), n && (e.patchRect.x += s.x - t.rect.x, e.patchRect.y += s.y - t.rect.y);
                      if (t.canvas.getContext("2d").putImageData(e.patch, e.patchRect.x, e.patchRect.y), e.rect.width < t.rect.width || e.rect.height < t.rect.height) {
                          const s = l.b.createCanvas(e.rect.width, e.rect.height);
                          s.getContext("2d").drawImage(t.canvas, t.rect.x - e.rect.x, t.rect.y - e.rect.y), e.patchRect.x += t.rect.x - i.x, e.patchRect.y += t.rect.y - i.y, t.canvas = s, t.rect = i
                      }
                  } else t.canvas = null,
                  t.rect = new v.a(0, 0, 0, 0);
                  return e.mask && (t.mask = e.mask),
                  t.render(),
                  e.layer.syncRequested = a,
                  {
                      type: "bitmapChange",
                      layer: t,
                      rect: s,
                      kind: e.kind,
                      patch: i,
                      patchRect: e.patchRect.clone(),
                      mask: n
                  }
              }
          case "bitmapSwitch":
              {
                  const t = e.layer,
                      i = l.b.cloneCanvas(e.layer.canvas),
                      s = e.layer.trim ? e.layer.trim.clone() : e.layer.rect.clone();
                  return t.switchCanvas(e.canvas, e.rect),
                  t.render(),
                  e.layer.syncRequested = a,
                  {
                      type: "bitmapSwitch",
                      kind: e.kind,
                      layer: t,
                      rect: s,
                      canvas: i
                  }
              }
          case "selectionAndBitmapSwitch":
              {
                  const s = e.layer,
                      n = l.b.cloneCanvas(e.layer.canvas),
                      r = s.rect.clone();
                  s.switchCanvas(e.canvas, e.rect),
                  s.render(),
                  e.layer.syncRequested = a;
                  const o = l.b.cloneCanvas(null === (i = null == t ? void 0 : t.selection) || void 0 === i ? void 0 : i.mask);
                  return e.selection ? (t.addSelection(), t.selection.setMask(e.selection), {
                      type: "selectionAndBitmapSwitch",
                      kind: e.kind,
                      selection: o,
                      layer: s,
                      rect: r,
                      canvas: n
                  }) : (t.removeSelection(), {
                      type: "selectionAndBitmapSwitch",
                      kind: e.kind,
                      selection: o,
                      layer: s,
                      rect: r,
                      canvas: n
                  })
              }
          case "addLayer":
              return t.layers.splice(e.order, 0, e.layer), {
                  type: "addLayer",
                  kind: e.kind,
                  layer: e.layer
              };
          case "deleteLayer":
              return t.deleteLayerById(e.layer.id), e;
          case "order":
              return t.changeLayerOrder(e.to, e.from), e;
          case "layerSettings":
              {
                  const t = Object.assign({}, e.layer.settings);
                  return e.layer.settings = e.settings,
                  e.layer.syncRequested = a,
                  {
                      type: "layerSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          case "textChange":
              {
                  const t = e.layer.text;
                  return e.layer.setText(e.text),
                  e.layer.syncRequested = a,
                  {
                      type: "textChange",
                      layer: e.layer,
                      text: t
                  }
              }
          case "textSettings":
              {
                  const t = e.layer.textSettings.clone();
                  return e.layer.textSettings = e.settings,
                  e.layer.textSettings.measureText(),
                  e.layer.prepare(),
                  e.layer.syncRequested = a,
                  {
                      type: "textSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          case "background":
              {
                  const i = t.color;
                  return t.color = e.color,
                  {
                      type: "background",
                      color: i
                  }
              }
          case "mask":
              {
                  let t;
                  const i = e.layer.hasMask();
                  if (!i && e.patch && e.layer.addMask(), e.patch) {
                      const s = e.layer.mask.getContext("2d");
                      i && (t = l.b.canvasImageData(e.layer.mask, new v.a(e.rect.x, e.rect.y, e.patch.width, e.patch.height))), s.putImageData(e.patch, e.rect.x, e.rect.y)
                  } else e.layer.removeMask();
                  return e.layer.render(),
                  e.layer.syncRequested = a,
                  {
                      type: "mask",
                      layer: e.layer,
                      rect: e.rect,
                      patch: t
                  }
              }
          case "maskInvert":
              return e.layer.invertMask(), e.layer.render(), e.layer.syncRequested = a, {
                  type: "maskInvert",
                  layer: e.layer
              };
          case "adjust":
              {
                  const t = e.shaders.cloneChain();
                  return e.shaders.chain = e.chain,
                  {
                      type: "adjust",
                      layer: e.layer,
                      kind: e.kind,
                      chain: t,
                      shaders: e.shaders
                  }
              }
          case "glitch":
              {
                  const t = e.shaders.cloneChain();
                  return e.shaders.chain = e.chain,
                  {
                      type: "glitch",
                      layer: e.layer,
                      kind: e.kind,
                      chain: t,
                      shaders: e.shaders
                  }
              }
          case "effect":
              {
                  let t, i;
                  return e.tool.marked && (t = e.tool.marked.name, i = e.tool.marked.value),
                  e.tool.shaders.reset(),
                  e.name ? (e.tool.shaders.addPreset(e.name, e.value), e.tool.marked = new M.a(e.name, e.value)) : e.tool.marked = void 0,
                  {
                      type: "effect",
                      layer: e.layer,
                      kind: e.kind,
                      tool: e.tool,
                      name: t,
                      value: i
                  }
              }
          case "arrange":
              switch (e.layer.syncRequested = a, e.action.type) {
                  case "rect":
                      {
                          const t = e.layer.rect.clone();
                          return e.layer.rect = e.action.rect,
                          e.layer instanceof y.a && (t.height = e.layer.textSettings.size, e.layer.rect.height !== e.layer.textSettings.size && e.layer.setTextSize(e.layer.rect.height)),
                          e.layer instanceof x.a && e.layer.trimOnResize(t),
                          e.layer instanceof b.a || e.layer.render(),
                          {
                              type: "arrange",
                              layer: e.layer,
                              kind: e.kind,
                              action: {
                                  type: "rect",
                                  rect: t
                              }
                          }
                      }
                  case "trim":
                      {
                          const t = e.layer.trim.clone();
                          return e.layer.trim = e.action.rect,
                          e.layer.render(),
                          {
                              type: "arrange",
                              layer: e.layer,
                              kind: e.kind,
                              action: {
                                  type: "trim",
                                  rect: t
                              }
                          }
                      }
                  case "trans":
                      {
                          const t = l.b.cloneCanvas(e.layer.canvas),
                              i = l.b.cloneCanvas(e.layer.mask),
                              s = e.layer.rect.clone();
                          return e.layer.canvas = e.action.data,
                          e.layer.mask = e.action.mask,
                          e.layer.rect = e.action.rect,
                          e.layer.render(),
                          {
                              type: "arrange",
                              layer: e.layer,
                              kind: e.kind,
                              action: {
                                  type: "trans",
                                  data: t,
                                  mask: i,
                                  rect: s
                              }
                          }
                      }
              }
          case "arrangeStack":
              {
                  let t = e.stack,
                      i = e.rects,
                      s = new Array;
                  for (let e = 0; e < t.length; e++) {
                      let n = t[e],
                          r = n.rect ? n.rect.clone() : void 0;
                      n.rect = i[e], n instanceof y.a && (r.height = n.textSettings.size, n.rect.height !== n.textSettings.size && n.setTextSize(n.rect.height)), n instanceof x.a && n.trimOnResize(r), s.push(r), n.syncRequested = a, n.render()
                  }
                  return {
                      type: "arrangeStack",
                      id: e.id,
                      kind: "arrange",
                      stack: e.stack,
                      rects: s
                  }
              }
          case "flipLayer":
              return e.layer.flip(e.vertical), e.layer.render(), e.layer.syncRequested = a, {
                  type: "flipLayer",
                  layer: e.layer,
                  vertical: e.vertical
              };
          case "rotateLayer":
              return e.layer.rotate(!e.counterClock), e.layer.render(), e.layer.syncRequested = a, {
                  type: "rotateLayer",
                  layer: e.layer,
                  counterClock: !e.counterClock
              };
          case "crop":
              {
                  const i = new d.a(-e.offset.x, -e.offset.y),
                      s = new p.a(t.width, t.height);
                  let n;
                  if (t.crop(new v.a(e.offset.x, e.offset.y, e.size.width, e.size.height)), e.straighten) {
                      const i = t.layers[0];
                      n = l.b.cloneCanvas(i.canvas), i.syncRequested = a, i.canvas = e.straighten, i.rect = new v.a(0, 0, i.canvas.width, i.canvas.height), t.width = i.rect.width, t.height = i.rect.height
                  }
                  return t.layers.forEach((t => t.syncRequested = a)),
                  document.dispatchEvent(new CustomEvent("reset-viewport")),
                  {
                      type: "crop",
                      offset: i,
                      size: s,
                      straighten: n
                  }
              }
          case "canvasResize":
              {
                  const i = new p.a(t.width, t.height);
                  return t.size(e.size.width, e.size.height, !1, e.anchor),
                  document.dispatchEvent(new CustomEvent("reset-viewport")),
                  {
                      type: "canvasResize",
                      anchor: e.anchor,
                      size: i
                  }
              }
          case "imageResize":
              {
                  const i = new p.a(t.width, t.height),
                      s = t.layers.map((t => {
                          var e;
                          return t.syncRequested = a, {
                              layer: t,
                              rect: null === (e = t.rect) || void 0 === e ? void 0 : e.clone(),
                              mask: l.b.cloneCanvas(t.mask),
                              bitmap: l.b.cloneCanvas(t.canvas)
                          }
                      }));
                  t.width = e.size.width,
                  t.height = e.size.height;
                  for (let t = 0; t < e.layers.length; t++) {
                      const i = e.layers[t],
                          s = i.layer;
                      s.rect = i.rect, s.canvas = i.bitmap, s.mask = i.mask, s.render()
                  }
                  return t.selection && t.selection.resize(t.width, t.height),
                  document.dispatchEvent(new CustomEvent("reset-viewport")),
                  {
                      type: "imageResize",
                      size: i,
                      layers: s
                  }
              }
          case "flip":
              return t.flip(e.vertical), t.layers.forEach((t => t.syncRequested = a)), {
                  type: "flip",
                  vertical: e.vertical
              };
          case "rotate":
              return t.rotate(e.counterClock), document.dispatchEvent(new CustomEvent("reset-viewport")), t.layers.forEach((t => t.syncRequested = a)), {
                  type: "rotate",
                  counterClock: e.counterClock
              };
          case "selectionChange":
              {
                  const i = t.selection ? l.b.cloneCanvas(t.selection.mask) : void 0;
                  return e.selection ? (t.addSelection(), t.selection.setMask(e.selection), Object.assign(Object.assign({}, e), {
                      selection: i
                  })) : (t.removeSelection(), Object.assign(Object.assign({}, e), {
                      selection: i
                  }))
              }
          case "merge":
              {
                  const i = e.from.map((e => t.layers.find((t => t.id === e.id)))),
                      s = e.from,
                      n = t.layers.map((t => t.id));
                  return t.layers = t.layers.filter((t => !s.includes(t))),
                  t.layers.splice(e.order, 0, e.target),
                  t.getSelected() && !t.hasLayer(t.getSelected()) && t.selectLayerById(e.target.id),
                  {
                      type: "merge",
                      kind: e.kind,
                      target: e.target,
                      order: n,
                      layers: i
                  }
              }
          case "rasterize":
              {
                  const i = t.layers.findIndex((t => t.id === e.newId));
                  if (i < 0) return;
                  const [n] = t.layers.splice(i, 1, e.layer);
                  return (null === (s = null == t ? void 0 : t.getSelected()) || void 0 === s ? void 0 : s.id) === n.id && t.selectLayerById(e.layer.id),
                  {
                      type: "rasterize",
                      layer: n,
                      kind: e.kind,
                      newId: e.layer.id
                  }
              }
          case "convertSelectionToMask":
              {
                  const i = t.selection.mask;
                  return e.layer.addMask(),
                  e.layer.mask.getContext("2d").drawImage(t.selection.mask, -e.layer.rect.x, -e.layer.rect.y),
                  e.layer.render(),
                  t.removeSelection(),
                  e.layer.syncRequested = a,
                  {
                      type: "convertSelectionToMask",
                      layer: e.layer,
                      selection: i
                  }
              }
          case "convertMaskToSelection":
              {
                  const i = e.layer.mask;
                  return e.layer.removeMask(),
                  t.addSelection(),
                  t.selection.setMask(e.selection),
                  e.layer.syncRequested = a,
                  {
                      type: "convertMaskToSelection",
                      layer: e.layer,
                      mask: i
                  }
              }
          case "applyMask":
              {
                  const t = e.layer.canvas,
                      i = e.layer.mask;
                  let s = e.layer.rect.clone();
                  return e.layer.render(),
                  e.layer.canvas = e.layer.baked,
                  e.layer.removeMask(),
                  e.layer.shrinkWrap(),
                  e.layer.syncRequested = a,
                  {
                      type: "applyMask",
                      layer: e.layer,
                      canvas: t,
                      mask: i,
                      rect: s
                  }
              }
          case "frameContent":
              {
                  let t, i;
                  return e.layer.canvas && (t = l.b.cloneCanvas(e.layer.canvas), i = null === (n = e.layer.trim) || void 0 === n ? void 0 : n.clone()),
                  e.layer.canvas = e.canvas,
                  e.layer.trim = e.trim,
                  e.layer instanceof x.a && e.layer.render(),
                  {
                      type: "frameContent",
                      kind: e.kind,
                      layer: e.layer,
                      canvas: t,
                      trim: i
                  }
              }
          case "frameSettings":
              {
                  const t = e.layer.frameSettings.clone();
                  return e.layer.frameSettings = e.settings,
                  e.layer.prepare(),
                  e.layer.syncRequested = a,
                  {
                      type: "frameSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          case "shapeSettings":
              {
                  const t = e.layer.shapeSettings.clone();
                  return e.layer.shapeSettings = e.settings,
                  e.layer.prepare(),
                  e.layer.syncRequested = a,
                  {
                      type: "shapeSettings",
                      kind: e.kind,
                      layer: e.layer,
                      settings: t
                  }
              }
          default:
              throw new Error("No handler for this redo type")
      }
  }
  class D {
      constructor(t, e) {
          this.fresco = t, this.undoStack = [], this.redoStack = [], this.ignore = !1, this.dispatchHistoryStatus = () => {
              document.dispatchEvent(new CustomEvent("history-update", {
                  detail: {
                      atStart: this.undoStack.length <= 1,
                      atEnd: 0 === this.redoStack.length
                  }
              }))
          }, this.undo = () => {
              if (0 !== this.undoStack.length && "open" !== this.undoStack[this.undoStack.length - 1].data.type) try {
                  this.ignore = !0;
                  const {
                      local: t,
                      data: e
                  } = this.undoStack.pop(), i = T(this.fresco, e);
                  i && (this.redoStack.push({
                      local: t,
                      data: i
                  }), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), Object(o.a)("undo")), document.dispatchEvent(new CustomEvent("notification", {
                      detail: Object(n.a)("titleUndo")
                  })), document.dispatchEvent(new CustomEvent("sync-document", {
                      detail: this.fresco
                  })), this.dispatchHistoryStatus()
              } finally {
                  this.ignore = !1
              }
          }, this.redo = () => {
              if (0 !== this.redoStack.length) try {
                  this.ignore = !0;
                  const {
                      local: t,
                      data: e
                  } = this.redoStack.pop(), i = P(this.fresco, e);
                  i && (this.undoStack.push({
                      local: t,
                      data: i
                  }), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), Object(o.a)("redo")), document.dispatchEvent(new CustomEvent("notification", {
                      detail: Object(n.a)("titleRedo")
                  })), document.dispatchEvent(new CustomEvent("sync-document", {
                      detail: this.fresco
                  }))
              } finally {
                  this.ignore = !1, this.dispatchHistoryStatus()
              }
          }, this.getActiveTransaction = () => this.transaction, this.redos = t => this.redoStack.filter((e => e.local === t)).reverse().map((t => t.data)), this.undos = t => this.undoStack.filter((e => e.local === t)).map((t => t.data)), this.add = t => {
              if (this.ignore) return;
              if (! function(t, e) {
                      const i = new Date;
                      switch (e.type) {
                          case "open":
                              return Object(o.a)("open", e.kind), !0;
                          case "addLayer":
                              return Object(o.a)("layer-add", e.layer.type), !0;
                          case "bitmapSwitch":
                          case "bitmapChange":
                              return Object(o.a)(e.kind), e.layer.syncRequested = i, !0;
                          case "flipLayer":
                              return Object(o.a)("layer-flip"), e.layer.syncRequested = i, !0;
                          case "rotateLayer":
                              return Object(o.a)("layer-rotate"), e.layer.syncRequested = i, !0;
                          case "frameContent":
                              return Object(o.a)("frame-content"), e.layer.syncRequested = i, !0;
                          case "frameSettings":
                              return !e.layer.frameSettings.equalTo(e.settings) && (Object(o.a)("frame-settings"), e.layer.syncRequested = i, !0);
                          case "order":
                              return Object(o.a)("layer-order"), !0;
                          case "layerSettings":
                              return Object(o.a)("layer-settings", e.kind), e.layer.syncRequested = i, !0;
                          case "deleteLayer":
                              return Object(o.a)(e.layer.type + "-delete"), !0;
                          case "textChange":
                              return e.layer.text !== e.text && (Object(o.a)("text-change"), e.layer.syncRequested = i, !0);
                          case "textSettings":
                              return !e.layer.textSettings.equalTo(e.settings) && (Object(o.a)("text-settings"), e.layer.syncRequested = i, !0);
                          case "shapeSettings":
                              return !e.layer.shapeSettings.equalTo(e.settings) && (Object(o.a)("shape-settings"), e.layer.syncRequested = i, !0);
                          case "mask":
                              return Object(o.a)("mask"), e.layer.syncRequested = i, !0;
                          case "crop":
                              return Object(o.a)("crop"), t.layers.forEach((t => t.syncRequested = i)), !0;
                          case "background":
                              return Object(o.a)("background"), !0;
                          case "maskInvert":
                              return Object(o.a)("mask-invert"), e.layer.syncRequested = i, !0;
                          case "arrange":
                              switch (e.action.type) {
                                  case "rect":
                                      if (e.layer.rect.equalTo(e.action.rect)) return !1;
                                      break;
                                  case "trim":
                                      if (e.layer.trim.equalTo(e.action.rect)) return !1
                              }
                              return Object(o.a)("arrange"), !0;
                          case "arrangeStack":
                              {
                                  let t = !1;
                                  for (let i = 0; i < e.stack.length; i++) e.stack[i].rect && !e.stack[i].rect.equalTo(e.rects[i]) && (t = !0);
                                  return Object(o.a)("arrangeStack"),
                                  t
                              }
                          case "canvasResize":
                              return Object(o.a)("resize-canvas"), t.layers.forEach((t => t.syncRequested = i)), !0;
                          case "imageResize":
                              return Object(o.a)("resize-image"), e.layers.forEach((t => t.layer.syncRequested = i)), !0;
                          case "flip":
                              return Object(o.a)("flip", e.vertical ? "vertical" : "horizontal"), t.layers.forEach((t => t.syncRequested = i)), !0;
                          case "rotate":
                              return Object(o.a)("rotate", e.counterClock ? "left" : "right"), t.layers.forEach((t => t.syncRequested = i)), !0;
                          case "merge":
                              return Object(o.a)("merge-layers", e.kind), !0;
                          case "adjust":
                              return Object(o.a)("adjust", e.kind), !0;
                          case "effect":
                              return Object(o.a)("effect", e.name), !0;
                          case "glitch":
                              return Object(o.a)("glicth", e.kind), !0;
                          case "selectionChange":
                          case "selectionAndBitmapSwitch":
                              return Object(o.a)("selection", e.kind), !0;
                          case "rasterize":
                              return Object(o.a)("rasterize", e.layer.type), e.layer instanceof k.a || e.layer instanceof y.a || e.layer instanceof x.a || e.layer instanceof S.a || (console.warn("Tried to rasterize an unknown layer type"), !1);
                          case "convertSelectionToMask":
                              return Object(o.a)("selection-to-mask"), e.layer.syncRequested = i, !0;
                          case "convertMaskToSelection":
                              return Object(o.a)("mask-to-selection"), e.layer.syncRequested = i, !0;
                          case "applyMask":
                              return Object(o.a)("apply-mask"), e.layer.syncRequested = i, !0;
                          default:
                              return !1
                      }
                  }(this.fresco, t)) return;
              this.validateTransaction(t);
              const e = h.a.maxHistoryUndos;
              !this.transaction && this.undoStack.length >= e && (this.undoStack = this.undoStack.slice(this.undoStack.length + 1 - e)), this.undoStack.push({
                  local: !!this.transaction,
                  data: t
              }), this.redoStack = [], this.dispatchHistoryStatus(), "open" !== t.type && document.dispatchEvent(new CustomEvent("sync-document", {
                  detail: this.fresco
              })), (this.undoStack.length < 1 || !this.undoStack[this.undoStack.length - 1].local) && document.dispatchEvent(new CustomEvent("layerbox-render"))
          }, this.validateTransaction = t => {
              "arrange" === t.type || "adjust" === t.type || "glitch" === t.type || "effect" === t.type || "textSettings" === t.type || "frameSettings" === t.type || "shapeSettings" === t.type ? (this.transaction && this.transaction.id !== t.type + "-" + t.layer.id && this.commitTransaction(!0), this.transaction || (this.transaction = {
                  id: t.type + "-" + t.layer.id,
                  type: t.type
              })) : "arrangeStack" === t.type ? (this.transaction && this.transaction.id !== t.type + "-" + t.id && this.commitTransaction(!0), this.transaction || (this.transaction = {
                  id: t.type + "-" + t.id,
                  type: t.type
              })) : this.commitTransaction(!0)
          }, this.abortTransaction = () => {
              this.transaction && (this.transaction = void 0, this.redoStack = this.redoStack.filter((t => !t.local)), this.undoStack = this.undoStack.filter((t => !t.local)), this.dispatchHistoryStatus())
          }, this.commitTransaction = (t = !1) => {
              if (!this.transaction) return;
              const e = new Date;
              this.transaction = void 0;
              const i = this.undoStack.filter((t => t.local));
              if (0 === i.length) return;
              this.undoStack = this.undoStack.filter((t => !t.local)), this.redoStack = [];
              let s = i[0].data,
                  n = !1;
              switch (s.type) {
                  case "arrange":
                      {
                          const t = s.layer,
                              i = s.action.rect;
                          if (t instanceof b.a && t.wouldApplyTransform()) {
                              const e = l.b.cloneCanvas(t.canvas),
                                  s = l.b.cloneCanvas(t.mask);
                              t.applyTransform(), this.undoStack.push({
                                  local: !1,
                                  data: {
                                      type: "arrange",
                                      kind: "transform",
                                      layer: t,
                                      action: {
                                          type: "trans",
                                          data: e,
                                          mask: s,
                                          rect: i
                                      }
                                  }
                              })
                          } else this.undoStack.push({
                              local: !1,
                              data: {
                                  type: "arrange",
                                  kind: "arrange",
                                  layer: t,
                                  action: {
                                      type: "rect",
                                      rect: i
                                  }
                              }
                          });
                          t.syncRequested = e,
                          n = !0;
                          break
                      }
                  case "arrangeStack":
                      {
                          let t = s.stack,
                              i = s.rects,
                              a = Array(),
                              r = Array();
                          for (let s = 0; s < t.length; s++) {
                              let n = t[s],
                                  o = i[s];
                              if (n instanceof b.a && n.wouldApplyTransform()) {
                                  const t = l.b.cloneCanvas(n.canvas),
                                      e = l.b.cloneCanvas(n.mask);
                                  n.applyTransform(), this.undoStack.push({
                                      local: !1,
                                      data: {
                                          type: "arrange",
                                          kind: "transform",
                                          layer: n,
                                          action: {
                                              type: "trans",
                                              data: t,
                                              mask: e,
                                              rect: o
                                          }
                                      }
                                  })
                              } else a.push(n), r.push(o);
                              n.syncRequested = e
                          }
                          a.length > 1 ? this.undoStack.push({
                              local: !1,
                              data: {
                                  type: "arrangeStack",
                                  id: s.id,
                                  kind: "arrange",
                                  stack: a,
                                  rects: r
                              }
                          }) : 1 === a.length && this.undoStack.push({
                              local: !1,
                              data: {
                                  type: "arrange",
                                  kind: "arrange",
                                  layer: a[0],
                                  action: {
                                      type: "rect",
                                      rect: r[0]
                                  }
                              }
                          }),
                          n = !0;
                          break
                      }
                  case "glitch":
                  case "effect":
                  case "adjust":
                      break;
                  case "textSettings":
                      {
                          const t = s.layer,
                              i = s.settings;
                          this.undoStack.push({
                              local: !1,
                              data: {
                                  type: "textSettings",
                                  kind: "settings",
                                  layer: t,
                                  settings: i
                              }
                          }),
                          t.syncRequested = e,
                          n = !0;
                          break
                      }
                  case "frameSettings":
                      {
                          const t = s.layer,
                              i = s.settings;
                          this.undoStack.push({
                              local: !1,
                              data: {
                                  type: "frameSettings",
                                  kind: "settings",
                                  layer: t,
                                  settings: i
                              }
                          }),
                          t.syncRequested = e,
                          n = !0;
                          break
                      }
                  case "shapeSettings":
                      {
                          const t = s.layer,
                              i = s.settings;
                          this.undoStack.push({
                              local: !1,
                              data: {
                                  type: "shapeSettings",
                                  kind: "settings",
                                  layer: t,
                                  settings: i
                              }
                          }),
                          t.syncRequested = e,
                          n = !0;
                          break
                      }
              }
              n && !t && (document.dispatchEvent(new CustomEvent("sync-document", {
                  detail: this.fresco
              })), document.dispatchEvent(new CustomEvent("layerbox-render"))), this.dispatchHistoryStatus()
          }, this.add({
              type: "open",
              kind: e
          }), this.dispatchHistoryStatus()
      }
      jump(t) {
          if (0 !== t) try {
              if (this.ignore = !0, document.dispatchEvent(new CustomEvent("render-enabled", {
                      detail: !1
                  })), t < 0) {
                  const e = Math.min(this.undoStack.length, Math.abs(t));
                  for (let t = 0; t < e; t++) {
                      const {
                          local: t,
                          data: e
                      } = this.undoStack.pop(), i = T(this.fresco, e);
                      i && this.redoStack.push({
                          local: t,
                          data: i
                      })
                  }
                  e > 0 && (Object(o.a)("undo"), document.dispatchEvent(new CustomEvent("notification", {
                      detail: Object(n.a)("titleUndo")
                  })))
              } else {
                  const e = Math.min(this.redoStack.length, t);
                  for (let t = 0; t < e; t++) {
                      const {
                          local: t,
                          data: e
                      } = this.redoStack.pop(), i = P(this.fresco, e);
                      i && this.undoStack.push({
                          local: t,
                          data: i
                      })
                  }
                  e > 0 && (Object(o.a)("redo"), document.dispatchEvent(new CustomEvent("notification", {
                      detail: Object(n.a)("titleRedo")
                  })))
              }
              document.dispatchEvent(new CustomEvent("render-enabled", {
                  detail: !0
              })), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("sync-document", {
                  detail: this.fresco
              }))
          } finally {
              this.ignore = !1, document.dispatchEvent(new CustomEvent("render-enabled", {
                  detail: !0
              })), this.dispatchHistoryStatus()
          }
      }
  }
  var L = i(35);
  class R {
      constructor(t, e) {
          this.zoom = 1, this.zoomMode = "fit", this.anchor = new d.a(0, 0), this.fresco = t, this.history = new D(t, e)
      }
  }
  class O {
      constructor(t, e) {
          this.tabLimit = 10, this.showTabs = !1, this.bounds = 10, this.isHDPI = !1, this.canTouch = !1, this.syncDisabled = !1, this.supressRender = !1, this.zoom = 1, this.zoomMode = "fit", this.syncQueue = 0, this.browseFrameImage = async() => {
              await a.a.browseFile(!1, !0).then((async t => {
                  document.dispatchEvent(new CustomEvent("loading", {
                      detail: "start"
                  }));
                  for (let e = 0; e < t.length; e++) await a.a.openFile(this, t[e], !1, "frame");
                  document.dispatchEvent(new CustomEvent("loading", {
                      detail: "stop"
                  }))
              }))
          }, this.setFrameContent = t => {
              var e;
              const i = this.fresco.getSelected();
              let s, n;
              i.canvas && (s = l.b.cloneCanvas(i.canvas), n = null === (e = i.trim) || void 0 === e ? void 0 : e.clone()), i.setContent(t), i.editMode = !1;
              const a = s ? t ? "replace" : "delete" : "add";
              this.history.add({
                  type: "frameContent",
                  kind: a,
                  layer: i,
                  canvas: s,
                  trim: n
              }), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render"))
          }, this.fitFrameContent = () => {
              var t;
              const e = this.fresco.getSelected();
              if (e instanceof x.a) {
                  let i = null === (t = e.trim) || void 0 === t ? void 0 : t.clone();
                  e.fitContent(), this.history.add({
                      type: "arrange",
                      layer: e,
                      kind: "fitContent",
                      action: {
                          type: "trim",
                          rect: i
                      }
                  })
              }
              document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render"))
          }, this.addLayer = async t => {
              for (let e = 0; e < t.length; e++) this.fresco.addLayer(t[e]), this.history.add({
                  type: "addLayer",
                  kind: "add" + t[e].type,
                  layer: t[e]
              });
              this.fresco.selectLayerStack(t)
          }, this.addCopiedLayer = async t => {
              let e, i = new Array,
                  s = new v.a(0, 0, this.fresco.width, this.fresco.height),
                  a = this.fresco.getSelectedStackBounds(t);
              s.contains(a) || (e = new d.a(Math.round((s.width - a.width) / 2), Math.round((s.height - a.height) / 2)));
              for (let s = 0; s < t.length; s++) {
                  let r = t[s].clone();
                  r.settings.name += " " + Object(n.a)("copy"), e && (r.rect.x = r.rect.x - a.x + e.x, r.rect.y = r.rect.y - a.y + e.y), r instanceof S.a || r instanceof y.a || r instanceof x.a ? await r.prepare() : r.render(), this.fresco.addLayer(r), this.history.add({
                      type: "addLayer",
                      kind: "paste" + r.type,
                      layer: r
                  }), i.push(r)
              }
              this.fresco.selectLayerStack(i), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render"))
          }, this.duplicateLayer = async(t = !0) => {
              let e = this.fresco.getSelectedStack();
              if (0 === e.length) return;
              let i = new Array;
              for (let t = 0; t < e.length; t++) {
                  let s = e[t].clone();
                  s.settings.name += " " + Object(n.a)("copy"), s instanceof S.a || s instanceof y.a || s instanceof x.a ? await s.prepare() : s.render(), this.fresco.addLayer(s), this.history.add({
                      type: "addLayer",
                      kind: "duplicate" + s.type,
                      layer: s
                  }), i.push(s)
              }
              this.fresco.selectLayerStack(i), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), t && this.notify("duplicate")
          }, this.deleteLayer = (t = !1) => {
              let e = this.fresco.getSelectedStack();
              if (0 !== e.length) {
                  if (1 === e.length && e[0] instanceof x.a && (t || e[0].editMode)) this.setFrameContent(void 0);
                  else {
                      this.fresco.getSelectedId().forEach((t => {
                          const e = this.fresco.layerNr(t),
                              i = this.fresco.deleteLayerById(t);
                          this.history.add({
                              type: "deleteLayer",
                              layer: i,
                              index: e
                          })
                      })), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render"))
                  }
                  this.notify("deleted")
              }
          }, this.selectLayer = (t, e = !1, i = !1) => {
              this.selectLayerById(t ? t.id : void 0, e, i)
          }, this.selectLayerById = (t, e = !1, i = !1) => {
              this.fresco.selectLayerById(t, e, i) && (document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")))
          }, this.unselectLayerById = t => {
              this.fresco.unselectLayerById(t) && (document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")))
          }, this.isSelectedLayerShaderble = () => {
              var t;
              const e = null === (t = this.fresco) || void 0 === t ? void 0 : t.getSelected();
              return e && (e.type === f.a.TYPE_IMAGE || e.type === f.a.TYPE_FRAME || e.type === f.a.TYPE_ELEMENT) && !!e.canvas
          }, this.mergeVisible = () => {
              const t = this.fresco.layers.findIndex((t => t.settings.visible)),
                  e = this.fresco.layers.map((t => t.id));
              if (t < 0) return void this.notify("noMerge");
              const i = this.fresco.layers[t];
              let s = this.getOutputCanvas();
              const n = new b.a(l.b.guid(), i.settings.name, s, new v.a(0, 0, s.width, s.height), !0),
                  a = this.fresco.layers.filter((t => t.settings.visible));
              this.fresco.layers = this.fresco.layers.filter((t => !t.settings.visible)), this.fresco.layers.splice(t, 0, n), this.fresco.selectLayerById(n.id), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), this.history.add({
                  type: "merge",
                  kind: "visible",
                  order: e,
                  layers: a,
                  target: n
              }), this.notify("layersMerged")
          }, this.mergeFlatten = () => {
              let t = this.getOutputCanvas();
              const e = new b.a(l.b.guid(), Object(n.a)("background"), t, new v.a(0, 0, t.width, t.height), !0),
                  i = this.fresco.layers.slice(),
                  s = this.fresco.layers.map((t => t.id));
              this.fresco.layers = [e], this.fresco.selectLayerById(e.id), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), this.history.add({
                  type: "merge",
                  kind: "flatten",
                  layers: i,
                  order: s,
                  target: e
              }), this.notify("imageFlattend")
          }, this.moveUp = () => {
              if (this.fresco.getSelected()) {
                  let t = this.fresco.selectedLayerNr(),
                      e = t + 1;
                  (0 != t || !this.fresco.lockedBackground()) && e < this.fresco.numLayers() && this.changeOrder(t, e)
              }
          }, this.moveDown = () => {
              if (this.fresco.getSelected()) {
                  let t = this.fresco.selectedLayerNr(),
                      e = t - 1;
                  (e > 0 || !this.fresco.lockedBackground() && 1 == t) && this.changeOrder(t, e)
              }
          }, this.changeOrder = (t, e) => {
              this.fresco.changeLayerOrder(t, e), this.render(), this.history.add({
                  type: "order",
                  from: t,
                  to: e
              })
          }, this.changeVisible = (t, e) => {
              if (!t) return;
              const i = Object.assign({}, t.settings);
              t.settings.visible = e, this.history.add({
                  type: "layerSettings",
                  kind: "visible",
                  layer: t,
                  settings: i
              }), document.dispatchEvent(new CustomEvent("viewport-render"))
          }, this.changeLocked = t => {
              let e = this.fresco.getSelected();
              if (!e) return;
              const i = Object.assign({}, e.settings);
              e.settings.locked = t, this.history.add({
                  type: "layerSettings",
                  kind: "locked",
                  layer: e,
                  settings: i
              }), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.rasterize = () => {
              let t = this.fresco.getSelectedStack();
              if (0 === t.length) return;
              let e = new Array;
              for (let i = 0; i < t.length; i++) {
                  let s = t[i];
                  if (s instanceof b.a || s instanceof x.a && !s.canvas) {
                      e.push(s);
                      continue
                  }
                  const n = this.fresco.layers.findIndex((t => t.id === s.id)),
                      a = s.rasterize();
                  this.fresco.layers.splice(n, 1, a), this.history.add({
                      type: "rasterize",
                      kind: s.type,
                      newId: a.id,
                      layer: s
                  }), e.push(a)
              }
              e.length > 0 ? (this.fresco.selectLayerStack(e), this.notify("layerRasterized")) : this.notify("noRasterization"), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render"))
          }, this.cutLayer = () => {
              let t = this.fresco.getSelectedStack();
              if (t.length > 0) {
                  let e = new Array;
                  t.forEach((t => {
                      e.push(t.clone())
                  })), this.clipboard = e, this.clipboardSize = this.fresco.getSelectedStackBounds(e).size(), this.deleteLayer(), this.notify("cut")
              }
          }, this.copyLayer = () => {
              let t = this.fresco.getSelectedStack();
              if (t.length > 0) {
                  let e = new Array;
                  t.forEach((t => {
                      e.push(t.clone())
                  })), this.clipboard = e, this.clipboardSize = this.fresco.getSelectedStackBounds(e).size(), this.notify("copy")
              }
          }, this.pasteLayer = () => {
              Array.isArray(this.clipboard) && (this.addCopiedLayer(this.clipboard), this.notify("paste"))
          }, this.cut = () => {
              if (!this.fresco.hasSelection()) return void this.cutLayer();
              let t = this.copy();
              return t ? (this.clear("cut"), this.selectionDeselect(), t) : void 0
          }, this.copy = () => {
              if (!this.fresco) return;
              if (!this.fresco.hasSelection() && this.fresco.hasSelected()) return void this.copyLayer();
              const t = this.fresco.getSelected();
              if (!t || !t.rect || !t.rect.isSet()) return void this.notify("selectionEmpty");
              let e = this.fresco.selection.bounds.intersect(t.rect);
              if (e) {
                  let i = l.b.createCanvas(e.width, e.height),
                      s = i.getContext("2d");
                  s.drawImage(t.baked ? t.baked : t.canvas, t.rect.x - e.x, t.rect.y - e.y);
                  const n = new d.a(-e.x, -e.y);
                  return s.save(), s.globalCompositeOperation = "destination-in", s.drawImage(this.fresco.selection.mask, n.x, n.y), s.restore(), s = void 0, i
              }
              this.notify("selectionEmpty")
          }, this.clear = (t = "clear") => {
              if (!this.fresco || !this.fresco.hasSelection()) return !1;
              if (!this.fresco.isSelectedImageWithCanvas()) return this.notify("notAImageLayer"), !1;
              const e = this.fresco.getSelected();
              let i = this.fresco.selection.bounds.intersect(e.rect);
              if (!i) return void this.notify("selectionEmpty");
              i = i.rebase(e.rect.x, e.rect.y);
              const s = l.b.canvasImageData(e.canvas, i),
                  n = e.rect.clone();
              let a = e.canvas.getContext("2d");
              return a.save(), a.globalCompositeOperation = "destination-out", a.drawImage(this.fresco.selection.mask, -e.rect.x, -e.rect.y), a.restore(), a = void 0, e.shrinkWrap(), e.render(), e.rect && (i = i.rebase(e.rect.x - n.x, e.rect.y - n.y)), this.history.add({
                  type: "bitmapChange",
                  kind: t,
                  layer: e,
                  patchRect: i,
                  rect: n,
                  patch: s
              }), this.render(), !0
          }, this.primeCut = (t = !0) => {
              if (!this.fresco || !this.fresco.hasSelection()) return [void 0, void 0];
              const e = this.fresco.getSelected();
              if (!e || !e.rect) return this.notify("noLayerSelected"), [void 0, void 0];
              const i = this.fresco.selection.bounds.intersect(e.rect);
              if (i) {
                  let s = l.b.createCanvas(i.width, i.height),
                      n = s.getContext("2d");
                  n.drawImage(e.canvas, e.rect.x - i.x, e.rect.y - i.y);
                  const a = new d.a(-i.x, -i.y);
                  return n.save(), n.globalCompositeOperation = "destination-in", n.drawImage(this.fresco.selection.mask, a.x, a.y), n.restore(), n = void 0, t && (n = e.canvas.getContext("2d"), n.save(), n.globalCompositeOperation = "destination-out", n.drawImage(this.fresco.selection.mask, -e.rect.x, -e.rect.y), n.restore(), n = void 0, e.render()), [s, i]
              }
              return this.notify("selectionEmpty"), [void 0, void 0]
          }, this.notify = t => {
              document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)(t)
              }))
          }, this.selectionSave = () => {
              this.fresco && this.fresco.selection && (Object(s.b)("edit-selection-restore").classList.remove("disabled"), this.selection = l.b.cloneCanvas(this.fresco.selection.mask), this.notify("selectionSaved"))
          }, this.selectionRestore = () => {
              var t, e;
              this.selection && (this.history.add({
                  type: "selectionChange",
                  kind: "restore",
                  selection: l.b.cloneCanvas(null === (e = null === (t = this.fresco) || void 0 === t ? void 0 : t.selection) || void 0 === e ? void 0 : e.mask)
              }), this.fresco.addSelection(), this.fresco.selection.drawOnMask(this.selection, 0, !1, !1), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")))
          }, this.selectionAll = () => {
              var t, e;
              this.fresco && (this.history.add({
                  type: "selectionChange",
                  kind: "all",
                  selection: l.b.cloneCanvas(null === (e = null === (t = this.fresco) || void 0 === t ? void 0 : t.selection) || void 0 === e ? void 0 : e.mask)
              }), this.fresco.addSelection(), this.fresco.selection.selectAll(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")))
          }, this.selectionDeselect = () => {
              var t, e;
              this.fresco && this.fresco.selection && (this.history.add({
                  type: "selectionChange",
                  kind: "deselect",
                  selection: l.b.cloneCanvas(null === (e = null === (t = this.fresco) || void 0 === t ? void 0 : t.selection) || void 0 === e ? void 0 : e.mask)
              }), this.fresco.removeSelection(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")))
          }, this.selectionInvert = () => {
              var t, e;
              this.fresco && this.fresco.hasSelection() && (this.history.add({
                  type: "selectionChange",
                  kind: "invert",
                  selection: l.b.cloneCanvas(null === (e = null === (t = this.fresco) || void 0 === t ? void 0 : t.selection) || void 0 === e ? void 0 : e.mask)
              }), this.fresco.selection.invert(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")))
          }, this.selectionPixels = () => {
              var t, e;
              const i = this.fresco.getSelected();
              if (!i || !i.canvas) return;
              this.history.add({
                  type: "selectionChange",
                  kind: "pixels",
                  selection: l.b.cloneCanvas(null === (e = null === (t = this.fresco) || void 0 === t ? void 0 : t.selection) || void 0 === e ? void 0 : e.mask)
              }), this.fresco.addSelection();
              let s = new w.a;
              s.addShader("alpha-mask", 1), this.fresco.selection.drawOnMask(s.apply(i.canvas), 0, !1, !1, i.rect.topLeft()), s.cleanUp(), s = void 0, document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.selectionConvert = () => {
              if (!this.fresco.isSelectedImageWithCanvas()) return;
              if (!this.fresco.hasSelection()) return;
              const t = this.fresco.getSelected(),
                  e = l.b.cloneCanvas(this.fresco.selection.mask);
              t.addMask(), t.mask.getContext("2d").drawImage(this.fresco.selection.mask, -t.rect.x, -t.rect.y), this.fresco.removeSelection(), this.history.add({
                  type: "convertSelectionToMask",
                  layer: t,
                  selection: e
              }), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.maskAdd = () => {
              if (!this.fresco.isSelectedImageWithCanvas()) return;
              const t = this.fresco.getSelected();
              this.history.add({
                  type: "mask",
                  layer: t,
                  rect: t.rect.clone()
              }), t.addMask(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.maskApply = () => {
              if (!this.fresco.isSelectedImageWithCanvas()) return void document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("noCutout")
              }));
              const t = this.fresco.getSelected(),
                  e = t.mask,
                  i = t.canvas,
                  s = t.rect.clone();
              t.render(), t.canvas = t.baked, t.removeMask(), t.shrinkWrap(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("maskApplied")
              })), this.history.add({
                  type: "applyMask",
                  layer: t,
                  canvas: i,
                  mask: e,
                  rect: s
              })
          }, this.maskInvert = () => {
              if (!this.fresco.isSelectedImageWithCanvas()) return void document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("noCutout")
              }));
              const t = this.fresco.getSelected();
              t.hasMask() ? (t.invertMask(), t.render(), document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("invert")
              })), document.dispatchEvent(new CustomEvent("layer-select")), this.history.add({
                  type: "maskInvert",
                  layer: t
              })) : document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("noCutout")
              }))
          }, this.maskDelete = () => {
              if (!this.fresco.getSelected()) return;
              const t = this.fresco.getSelected();
              if (!t.hasMask()) return;
              const e = l.b.canvasImageData(t.mask);
              t.removeMask(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("reset")
              })), this.history.add({
                  type: "mask",
                  layer: t,
                  rect: new v.a(0, 0, e.width, e.height),
                  patch: e
              })
          }, this.maskExtract = () => {
              const t = this.fresco.getSelected();
              if (t && t.mask) {
                  let e = l.b.cloneCanvas(t.canvas),
                      i = e.getContext("2d");
                  i.save(), i.globalCompositeOperation = "destination-in", i.drawImage(t.mask, 0, 0), i.restore(), i = void 0;
                  let s = l.b.getColorBoundsRect(t.mask),
                      a = l.b.createCanvas(s.width, s.height);
                  i = a.getContext("2d"), i.drawImage(e, -s.x, -s.y), this.addImage(a, "Cutout", "extract"), document.dispatchEvent(new CustomEvent("notification", {
                      detail: Object(n.a)("layerCreated")
                  }))
              } else document.dispatchEvent(new CustomEvent("notification", {
                  detail: Object(n.a)("noCutout")
              }))
          }, this.maskConvert = () => {
              const t = this.fresco.getSelected();
              if (!t || !t.hasMask()) return;
              const e = t.mask;
              this.fresco.addSelection(), this.fresco.selection.drawOnMask(t.mask, 0, !1, !1, t.rect.topLeft()), t.removeMask(), this.history.add({
                  type: "convertMaskToSelection",
                  layer: t,
                  mask: e
              }), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.setZoomStep = (t, e = 1) => {
              this.fresco && (1 === e && (this.zoom = Math.round(10 * this.zoom) / 10), this.zoom += t ? this.zoom >= 5 ? 1 * e : .1 * e : this.zoom >= 6 ? -1 * e : -.1 * e, this.zoom = l.b.clamp(this.zoom, .1, 50), this.zoomMode = "free", this.updateViewport(), document.dispatchEvent(new CustomEvent("zoom-change")))
          }, this.setFluidZoom = t => {
              if (!this.fresco) return;
              const e = this.isHDPI ? .1 : .12;
              this.zoomMode = "free", this.zoom += t ? this.zoom * e : -this.zoom * e, this.zoom = l.b.clamp(this.zoom, .1, 50), this.zoom > .95 && this.zoom < 1.05 && (this.zoom = 1), this.updateViewport(), document.dispatchEvent(new CustomEvent("zoom-change"))
          }, this.setZoom = t => {
              this.fresco && ("fit" === t ? (this.zoomMode = "fit", this.zoom = l.b.scaleFit(this.fresco.width, this.fresco.height, this.raster.width - 2 * this.bounds, this.raster.height - 2 * this.bounds), this.anchor.x = Math.round(this.fresco.width / 2), this.anchor.y = Math.round(this.fresco.height / 2)) : "fill" === t ? (this.zoomMode = "fill", this.zoom = l.b.scaleFill(this.fresco.width, this.fresco.height, this.raster.width, this.raster.height), this.anchor.x = Math.round(this.fresco.width / 2), this.anchor.y = Math.round(this.fresco.height / 2)) : "free" !== t && (this.zoomMode = "free", this.zoom = Number.parseFloat(t), this.zoom = l.b.clamp(this.zoom, .1, 50)), this.updateViewport(), document.dispatchEvent(new CustomEvent("zoom-change")))
          }, this.setAnchor = t => {
              t.equalTo(this.anchor) || (this.anchor.x = l.b.clamp(t.x, 0, this.fresco.width), this.anchor.y = l.b.clamp(t.y, 0, this.fresco.height))
          }, this.resetAnchor = () => {
              this.setAnchor(this.getViewPort().center())
          }, this.resize = (t, e, i, s) => {
              this.raster.height = this.isHDPI ? 2 * s : s, this.raster.width = this.isHDPI ? 2 * i : i, this.raster.style.left = t + "px", this.raster.style.top = e + "px", this.raster.style.width = i + "px", this.raster.style.height = s + "px";
              let n = this.raster.getBoundingClientRect();
              this.rasterRect = new v.a(n.x, n.y, n.width, n.height), this.setZoom(this.zoomMode)
          }, this.updateViewport = () => {
              if (this.fresco) {
                  if (this.fresco.width * this.zoom < this.raster.width) this.canvas.width !== ~~(this.fresco.width * this.zoom) && (this.canvas.width = ~~(this.fresco.width * this.zoom)), this.isHDPI ? (this.canvas.style.left = ~~(.25 * (this.raster.width - this.canvas.width) + this.raster.offsetLeft) + "px", this.offset.x = 2 * (this.canvas.offsetLeft - this.raster.offsetLeft)) : (this.canvas.style.left = ~~(.5 * (this.raster.width - this.canvas.width) + this.raster.offsetLeft) + "px", this.offset.x = this.canvas.offsetLeft - this.raster.offsetLeft);
                  else {
                      this.canvas.style.left = this.raster.style.left, this.canvas.width = this.raster.width;
                      let t = ~~(this.anchor.x * this.zoom - this.canvas.width / 2);
                      this.offset.x = -l.b.clamp(t, 0, ~~(this.fresco.width * this.zoom - this.canvas.width))
                  }
                  if (this.fresco.height * this.zoom < this.raster.height) this.canvas.height !== ~~(this.fresco.height * this.zoom) && (this.canvas.height = ~~(this.fresco.height * this.zoom)), this.isHDPI ? (this.canvas.style.top = ~~(.25 * (this.raster.height - this.canvas.height) + this.raster.offsetTop) + "px", this.offset.y = 2 * (this.canvas.offsetTop - this.raster.offsetTop)) : (this.canvas.style.top = ~~(.5 * (this.raster.height - this.canvas.height) + this.raster.offsetTop) + "px", this.offset.y = this.canvas.offsetTop - this.raster.offsetTop);
                  else {
                      this.canvas.style.top = this.raster.style.top, this.canvas.height = this.raster.height;
                      let t = ~~(this.anchor.y * this.zoom - this.canvas.height / 2);
                      this.offset.y = -l.b.clamp(t, 0, ~~(this.fresco.height * this.zoom - this.canvas.height))
                  }
                  this.isHDPI && (this.canvas.style.width = ~~(.5 * this.canvas.width) + "px", this.canvas.style.height = ~~(.5 * this.canvas.height) + "px"), this.supressRender || document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("viewport-update"))
              }
          }, this.getViewPort = () => new v.a(this.offset.x > 0 ? 0 : -1 * ~~(this.offset.x / this.zoom), this.offset.y > 0 ? 0 : -1 * ~~(this.offset.y / this.zoom), Math.ceil(this.canvas.width / this.zoom), Math.ceil(this.canvas.height / this.zoom)), this.getViewPortCenter = () => {
              let t = new d.a;
              return t.x = (this.offset.x > 0 ? 0 : this.offset.x / this.zoom * -1) + this.canvas.width / this.zoom / 2, t.y = (this.offset.y > 0 ? 0 : this.offset.y / this.zoom * -1) + this.canvas.height / this.zoom / 2, t
          }, this.getLayerLocationRect = t => {
              if (!t.rect) return;
              const e = this.isHDPI ? .5 * this.zoom : this.zoom;
              return new v.a(Math.round(t.rect.x * e + this.offset.x), Math.round(t.rect.y * e + this.offset.y), Math.round(t.rect.width * e), Math.round(t.rect.height * e), t.rect.rotation)
          }, this.getLayerLocationTrim = t => {
              if (!t.trim) return;
              const e = this.isHDPI ? .5 * this.zoom : this.zoom;
              let i = t.getGlobalTrim();
              return new v.a(Math.round(i.x * e + this.offset.x), Math.round(i.y * e + this.offset.y), Math.round(i.width * e), Math.round(i.height * e), i.rotation)
          }, this.target = new v.a, this.render = () => {
              if (!this.supressRender && this.ctx && this.fresco) {
                  this.fresco.color ? (this.ctx.fillStyle = this.fresco.color, this.ctx.globalAlpha = 1, this.ctx.globalCompositeOperation = "source-over", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)) : this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.translate(this.offset.x < 0 ? this.offset.x : 0, this.offset.y < 0 ? this.offset.y : 0), this.ctx.scale(this.zoom, this.zoom);
                  for (var t = 0; t < this.fresco.layers.length; t++) this.fresco.layers[t].settings.visible && (this.fresco.hasScratch() && this.fresco.scratch.id === this.fresco.layers[t].id ? ("over" === this.fresco.scratch.renderMode && this.renderLayer(this.ctx, this.fresco.layers[t], this.zoom < 1), this.renderLayer(this.ctx, this.fresco.scratch, this.zoom < 1)) : this.renderLayer(this.ctx, this.fresco.layers[t], this.zoom < 1));
                  this.ctx.setTransform(1, 0, 0, 1, 0, 0)
              }
          }, this.renderLayer = (t, e, i, s) => {
              if ((e.canvas || e.baked) && e.rect) {
                  t.globalAlpha = e.settings.opacity, t.globalCompositeOperation = "" === e.settings.blendmode ? "source-over" : e.settings.blendmode, i || 0 !== e.rect.rotation ? (t.imageSmoothingQuality = "high", t.imageSmoothingEnabled = !0) : t.imageSmoothingEnabled = !1;
                  try {
                      const i = e.bect ? e.bect : e.rect;
                      void 0 !== e.rect.rotation && 0 !== e.rect.rotation ? (this.ix = i.x + i.width / 2, this.iy = i.y + i.height / 2, s && (this.ix -= s.x, this.iy -= s.y), t.save(), t.translate(this.ix, this.iy), t.rotate(e.rect.rotation * Math.PI / 180), this.target.x = -i.width / 2, this.target.y = -i.height / 2, this.target.width = i.width, this.target.height = i.height, t.drawImage(e.baked ? e.baked : e.canvas, this.target.x, this.target.y, this.target.width, this.target.height), t.restore()) : (this.target.x = i.x, this.target.y = i.y, s && (this.target.x -= s.x, this.target.y -= s.y), this.target.width = i.width, this.target.height = i.height, t.drawImage(e.baked ? e.baked : e.canvas, this.target.x, this.target.y, this.target.width, this.target.height))
                  } catch (t) {
                      console.log(t)
                  }
              }
          }, this.renderPreview = t => {
              this.ctx && t && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.drawImage(t, 0, 0, this.canvas.width, this.canvas.height))
          }, this.getThumbnail = () => {
              if (this.canvas) return this.getOutputCanvas(l.b.scaleFill(this.fresco.width, this.fresco.height, 200, 180))
          }, this.getSingleLayerOutputCanvas = () => {
              const t = this.fresco.getSelected();
              if (!t || !t.canvas) return;
              let e = l.b.createCanvas(this.fresco.width, this.fresco.height),
                  i = e.getContext("2d");
              return this.renderLayer(i, t, !1), i = null, e
          }, this.getOutputCanvas = (t = 1, e) => {
              t > 1 && (t = 1);
              let i = l.b.createCanvas(Math.round(this.fresco.width * t), Math.round(this.fresco.height * t)),
                  s = i.getContext("2d");
              (this.fresco.color || e) && (s.fillStyle = this.fresco.color ? this.fresco.color : e, s.fillRect(0, 0, i.width, i.height)), s.scale(t, t);
              for (var n = 0; n < this.fresco.layers.length; n++) {
                  const e = this.fresco.layers[n];
                  e.settings.visible && this.renderLayer(s, e, t < 1)
              }
              return s = null, i
          }, this.translateToRect = (t, e, i, s) => {
              if (i) {
                  const i = t.x - e.x,
                      s = t.y - e.y;
                  let n = Math.sqrt(i * i + s * s) / Math.sqrt(2);
                  e.x = t.x + (i > 0 ? -n : n), e.y = t.y + (s > 0 ? -n : n)
              }
              let n = t.x < e.x ? t.x : e.x,
                  a = t.y < e.y ? t.y : e.y,
                  r = t.x < e.x ? e.x : t.x,
                  o = t.y < e.y ? e.y : t.y;
              return t = this.translateRasterToFresco(new d.a(n, a), void 0, !0), (e = this.translateRasterToFresco(new d.a(r, o), void 0, !1)).x = Math.ceil(e.x), e.y = Math.ceil(e.y), s && (t = this.translateFrescoToRaster(t), e = this.translateFrescoToRaster(e)), new v.a(t.x, t.y, e.x - t.x, e.y - t.y)
          }, this.translateRasterToFresco = (t, e, i = !0) => {
              const s = this.isHDPI ? .5 * this.zoom : this.zoom;
              let n = t.x / s - this.offset.x / this.zoom,
                  a = t.y / s - this.offset.y / this.zoom;
              return e && (n -= e.x, a -= e.y), i ? new d.a(Math.floor(n), Math.floor(a)) : new d.a(n, a)
          }, this.translateFrescoToRaster = (t, e) => {
              let i = t.x,
                  s = t.y;
              const n = this.isHDPI ? .5 * this.zoom : this.zoom;
              return e && (i += e.x, s += e.y), i = Math.round(i * n) + this.offset.x, s = Math.round(s * n) + this.offset.y, new d.a(i, s)
          }, this.layerDragMove = () => {
              this.layerDrag.fresco !== this.fresco.id && this.coating.drawDropPreviewRect(this.layerDrag.position, this.layerDrag.layer)
          }, this.layerDragDrop = () => {
              const t = this.layerDrag;
              if (t.fresco === this.fresco.id) return;
              const e = this.layerDrag.layer.clone(),
                  i = new d.a(t.position.x - this.rasterRect.x, t.position.y - this.rasterRect.y),
                  s = this.translateRasterToFresco(i);
              e.rect.x = s.x - t.layer.rect.width / 2, e.rect.y = s.y - t.layer.rect.height / 2, this.fresco.addLayer(e), this.coating.clear(), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), this.history.add({
                  type: "addLayer",
                  kind: "duplicate" + e.type,
                  layer: e
              })
          }, this.close = t => {
              void 0 === t && this.fresco && (t = this.fresco.id);
              const e = this.tabs.findIndex((e => e.fresco.id === t)),
                  i = this.fresco && this.fresco.id === t;
              if (!(e < 0)) {
                  if (this.tabs.splice(e, 1), 0 === this.tabs.length) return this.history = null, this.fresco = null, this.showTabs = !1, this.coating.clear(), this.render(), document.dispatchEvent(new CustomEvent("tool-apply")), void document.dispatchEvent(new CustomEvent("layerbox-render"));
                  if (i) {
                      const t = Math.min(e, this.tabs.length - 1);
                      this.select(this.tabs[t].fresco.id)
                  } else document.dispatchEvent(new CustomEvent("fresco-select"))
              }
          }, this.web = t, this.workspace = e, this.tabs = [];
          let i = this;
          document.addEventListener("touchstart", (function t(e) {
              document.documentElement.classList.add("touch"), document.removeEventListener("touchstart", t, !1), i.canTouch = !0
          }), !1);
          this.isHDPI = "m" === h.a.product && matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches, this.canvas = this.workspace.querySelector(".canvas"), this.canvas || (this.canvas = document.createElement("canvas"), this.canvas.className = "canvas", e.appendChild(this.canvas)), this.canvas.width = this.canvas.height = 0, this.ctx = this.canvas.getContext("2d"), this.raster = this.workspace.querySelector(".raster"), this.raster || (this.raster = document.createElement("canvas"), this.raster.className = "raster", e.appendChild(this.raster)), this.anchor = new d.a(0, 0), this.offset = new d.a(0, 0), this.coating = new m(this), document.addEventListener("viewport-render", (() => window.requestAnimationFrame(this.render)), !1), document.addEventListener("sync-document", (t => this.syncDocument(t.detail))), document.addEventListener("layer-drag-move", this.layerDragMove), document.addEventListener("layer-drag-drop", this.layerDragDrop), document.addEventListener("render-enabled", (t => {
              this.supressRender = !1 === t.detail
          })), document.addEventListener("reset-viewport", (() => {
              this.setZoom(this.zoomMode)
          }))
      }
      async syncDocument(t) {
          var e, i, s;
          if (!(this.syncQueue > 0 || this.syncDisabled)) try {
              this.syncQueue++;
              let n, a = new Date;
              t.id === (null === (e = this.fresco) || void 0 === e ? void 0 : e.id) && (n = await l.b.canvasToBlob(this.getThumbnail()));
              const o = t.layers.map((t => t.id)),
                  h = await l.b.canvasToBlob(null === (i = null == t ? void 0 : t.selection) || void 0 === i ? void 0 : i.mask),
                  c = await Object(r.a)(),
                  [d, u, g, m] = c.transaction("readwrite", "document-meta", "document-thumbnail", "document-selection", "layer-meta");
              let p = l.b.restorePrototype(L.a, await d.get(t.id));
              p || (p = new L.a(t.id, t.name, t.width, t.height, t.color)), p.lastModified = a, p.width = t.width, p.color = t.color, p.height = t.height, p.selected = null === (s = null == t ? void 0 : t.getSelected()) || void 0 === s ? void 0 : s.id, p.order = o;
              const [v] = await Promise.all([m.index("document").getAllKeys(t.id), n ? u.put(n, t.id) : void 0, h ? g.put(h, t.id) : g.delete(t.id), d.put(p)]), f = v.filter((e => !t.layers.some((t => t.id === e)))), w = t.layers.filter((t => !v.includes(t.id)));
              await Promise.all(w.map((e => L.b.sync(e, t)))), await Promise.all(f.map((async t => L.b.delete(t))));
              const y = t.layers.filter((t => t.syncRequested && (!t.syncLatest || t.syncRequested > t.syncLatest)));
              await Promise.all(y.map((e => L.b.sync(e, t)))), document.cookie = "has-history=true; path=/; SameSite=Strict; expires=Fri, 31 Dec 9999 23:59:59 GMT"
          } finally {
              this.syncQueue--
          }
      }
      createNew(t, e, i, s) {
          this.web.navigate("editor"), this.addTab(new c.a(l.b.guid(), t, e, i, s), "create"), this.addEmpty(), this.setZoom("fit"), document.dispatchEvent(new CustomEvent("navigate", {
              detail: "editor"
          }))
      }
      async openFromHistory(t, e) {
          this.web.navigate("editor"), this.addTab(new c.a(t.id, t.name, t.width, t.height, t.transparent ? void 0 : t.color), "document"), this.setZoom("fit"), this.renderPreview(e), this.supressRender = !0, document.dispatchEvent(new CustomEvent("loading", {
              detail: "start"
          }));
          try {
              await t.restore(this)
          } catch (t) {
              console.log(t)
          }
          document.dispatchEvent(new CustomEvent("loading", {
              detail: "stop"
          })), this.supressRender = !1, document.dispatchEvent(new CustomEvent("fresco-select")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("selection-update")), document.dispatchEvent(new CustomEvent("resize")), document.dispatchEvent(new CustomEvent("navigate", {
              detail: "editor"
          }))
      }
      addEmpty() {
          let t = "Layer " + this.fresco.nextAddedLayerNumber(),
              e = new b.a(l.b.guid(), t);
          return this.fresco.addLayer(e), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), this.history.add({
              type: "addLayer",
              kind: "addemptyimage",
              layer: e
          }), e
      }
      addImage(t, e, i) {
          if (this.web && this.web.navigate("editor"), this.fresco || this.addTab(new c.a(l.b.guid(), e, t.width, t.height), "image"), t.height > this.fresco.height || t.width > this.fresco.width) {
              let e = v.a.fillFit(t.width, t.height, 1.5 * this.fresco.width, 1.5 * this.fresco.height, !0);
              t = l.b.resizeCanvasForQuality(t, e.width, e.height)
          }
          if ("frame" === i && this.fresco.getSelected() instanceof x.a) return void this.setFrameContent(t);
          const s = 0 === this.fresco.layers.length;
          let a = this.fresco.addLayer(new b.a(l.b.guid(), s ? Object(n.a)("background") : e, t, new v.a(0, 0, t.width, t.height), s));
          if (s) this.setZoom("fit"), this.syncDocument(this.fresco);
          else {
              let t = this.getViewPort().center();
              a.rect.x = Math.round(t.x - a.rect.width / 2), a.rect.y = Math.round(t.y - a.rect.height / 2), this.history.add({
                  type: "addLayer",
                  kind: i + "image",
                  layer: a
              })
          }
          return document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), a
      }
      async addSVGShape(t, e, i) {
          this.web.navigate("editor");
          let s = new E.a;
          s.variant = "svg", s.content = t;
          let n = new S.a(l.b.guid(), e, void 0, s);
          if (await n.prepare(), this.fresco || this.addTab(new c.a(l.b.guid(), n.settings.name, n.rect.width, n.rect.height), "shape"), this.fresco.addLayer(n), 1 === this.fresco.layers.length) this.setZoom("fit"), this.syncDocument(this.fresco);
          else {
              let t = this.getViewPort().center();
              n.rect.x = Math.round(t.x - n.rect.width / 2), n.rect.y = Math.round(t.y - n.rect.height / 2), this.history.add({
                  type: "addLayer",
                  kind: i + "shape",
                  layer: n
              })
          }
          return document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), n
      }
      async addShape(t, e, i = "add") {
          t || (t = new v.a(Math.round(this.fresco.width / 4), Math.round(this.fresco.height / 4), Math.round(this.fresco.width / 2), Math.round(this.fresco.height / 2))), e || ((e = new E.a).variant = "rectangle", e.fillType = "color", e.fillValue = "#444444");
          let s = Object(n.a)("shape") + " " + this.fresco.nextAddedLayerNumber(),
              a = new S.a(l.b.guid(), s, t, e);
          return await a.prepare(), this.fresco.addLayer(a), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), this.history.add({
              type: "addLayer",
              kind: i + "shape",
              layer: a
          }), a
      }
      addElement(t, e, i, s, n, a, r) {
          let h;
          if (Object(o.a)("add-element", i), s == k.a.VARIANT_OVERLAY || s == k.a.VARIANT_BORDER)
              if ((this.fresco.height > this.fresco.width && t.height < t.width || this.fresco.width > this.fresco.height && t.width < t.height) && (t = l.b.rotateFixedCanvas(t, 90)), h = new k.a(l.b.guid(), e, t, i, s, n, a, r), r == k.a.SCALE_METHOD_FILL) {
                  let e = v.a.fillFit(t.width, t.height, this.fresco.width, this.fresco.height);
                  h.calculate(new d.a(e.x, e.y), new d.a(e.right(), e.bottom()), 0)
              } else h.calculate(new d.a(0, 0), new d.a(this.fresco.width, this.fresco.height), 0);
          else {
              let o = v.a.bestFit(t.width, t.height, this.fresco.width, this.fresco.height);
              (t.height > this.fresco.height || t.width > this.fresco.width) && (t = l.b.resizeCanvasForQuality(t, o.width, o.height)), h = new k.a(l.b.guid(), e, t, i, s, n, a, r), h.rect.x = o.x, h.rect.y = o.y
          }
          return this.fresco.addLayer(h), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layerbox-render")), this.history.add({
              type: "addLayer",
              kind: "addelement",
              layer: h
          }), h
      }
      replaceElement(t, e, i, s, n, a) {
          if (Object(o.a)("add-element", i), !this.fresco.isSelectedType(f.a.TYPE_ELEMENT)) return;
          let r = this.fresco.getSelected();
          if (r.variant !== k.a.VARIANT_SHAPE && r.variant !== k.a.VARIANT_STICKER) {
              if ((this.fresco.height > this.fresco.width && t.height < t.width || this.fresco.width > this.fresco.height && t.width < t.height) && (t = l.b.rotateFixedCanvas(t, 90)), r.replace(e, t, i, s, n, a), a == k.a.SCALE_METHOD_FILL) {
                  let e = v.a.fillFit(t.width, t.height, this.fresco.width, this.fresco.height);
                  r.calculate(new d.a(e.x, e.y), new d.a(e.right(), e.bottom()), 0)
              } else r.calculate(new d.a(0, 0), new d.a(this.fresco.width, this.fresco.height), 0);
              return document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("layerbox-render")), L.b.sync(r, this.fresco), r
          }
      }
      async addText(t, e, i, s = "add") {
          if (!t || !e || !i) {
              t = "Lorem ipsum ..", (i = new C.a("Verdana", 40)).fillType = "color", i.fillValue = "#ffffff";
              let s = this.getViewPort();
              e = new v.a(Math.round(s.x + (s.width - Math.round(s.width / 1.2)) / 2), Math.round(s.y + s.height / 2.5), Math.round(s.width / 1.2), 40)
          }
          const n = new y.a(l.b.guid(), t, e, i);
          return await n.prepare(), this.fresco.addLayer(n), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), this.history.add({
              type: "addLayer",
              kind: s + "text",
              layer: n
          }), n
      }
      addFrame(t) {
          t || (t = new v.a(Math.round(this.fresco.width / 4), Math.round(this.fresco.height / 4), Math.round(this.fresco.width / 2), Math.round(this.fresco.height / 2)));
          let e = Object(n.a)("frame") + " " + this.fresco.nextAddedLayerNumber();
          const i = new x.a(l.b.guid(), e, t);
          return this.fresco.addLayer(i), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), this.history.add({
              type: "addLayer",
              kind: "addframe",
              layer: i
          }), i
      }
      crop(t) {
          const e = new p.a(this.fresco.width, this.fresco.height),
              i = new d.a(-t.x, -t.y);
          this.fresco.crop(t), this.updateViewport(), this.history.add({
              type: "crop",
              offset: i,
              size: e
          })
      }
      flip(t) {
          this.fresco.flip(t), this.render(), this.history.add({
              type: "flip",
              vertical: t
          })
      }
      rotate(t) {
          this.fresco.rotate(t), this.updateViewport(), this.history.add({
              type: "rotate",
              counterClock: t
          })
      }
      rotateSelected(t) {
          const e = this.fresco.getSelected();
          e ? e.settings.locked ? this.notify("layer locked") : (this.history.add({
              type: "rotateLayer",
              layer: e,
              counterClock: t
          }), e.rotate(t), document.dispatchEvent(new CustomEvent("viewport-render"))) : this.notify("no layer selected")
      }
      flipSelected(t) {
          if (!this.isSelectedLayerShaderble()) return void this.notify("onlyImageLayer");
          const e = this.fresco.getSelected();
          e.settings.locked ? this.notify("layerLocked") : (this.history.add({
              type: "flipLayer",
              layer: e,
              vertical: t
          }), e.flip(t), e.render(), this.render())
      }
      straighten(t) {
          if (!this.fresco.lockedBackground()) return;
          const e = this.fresco.layers[0].rect.rotatedSize(t);
          this.fresco.straighten(t, e.width, e.height), this.updateViewport()
      }
      mergeDown() {
          if (!this.fresco.getSelected()) return;
          const t = this.fresco.getSelected(),
              e = this.fresco.layers.findIndex((e => t.id === e.id)),
              i = this.fresco.layers.map((t => t.id));
          if (e < 1) return void this.notify("noMerger");
          const s = this.fresco.layers[e - 1],
              n = t.rect ? t.rect.getRotatedBounds() : void 0,
              a = s.rect ? s.rect.getRotatedBounds() : void 0,
              r = n ? n.union(a) : a;
          let o;
          if (r) {
              o = l.b.createCanvas(r.width, r.height);
              const e = o.getContext("2d");
              this.renderLayer(e, s, !1, r.topLeft()), this.renderLayer(e, t, !1, r.topLeft())
          }
          const h = new b.a(l.b.guid(), t.settings.name, o, r, s.settings.locked),
              c = this.fresco.layers.splice(e - 1, 2, h);
          this.fresco.selectLayerById(h.id), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("viewport-render")), this.history.add({
              type: "merge",
              kind: "down",
              layers: c,
              order: i,
              target: h
          }), this.notify("layersMerged")
      }
      addTab(t, e, i = !0) {
          this.web && this.web.navigate("editor");
          const s = new R(t, e);
          this.tabs.push(s), i && (this.fresco = s.fresco, this.history = s.history, this.setZoom("fit"), s.zoom = this.zoom, s.zoomMode = this.zoomMode, s.anchor = this.anchor, document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("layerbox-render")), this.history.dispatchHistoryStatus()), this.tabs.length > this.tabLimit && this.close(this.tabs[0].fresco.id), this.tabs.length > 1 && (this.showTabs = !0), document.dispatchEvent(new CustomEvent("fresco-select")), document.dispatchEvent(new CustomEvent("resize"))
      }
      select(t) {
          const e = this.tabs.find((e => e.fresco.id === t));
          if (!e) return;
          const i = this.tabs.find((t => {
              var e;
              return t.fresco.id === (null === (e = this.fresco) || void 0 === e ? void 0 : e.id)
          }));
          i && (i.zoom = this.zoom, i.zoomMode = this.zoomMode, i.anchor = this.anchor.clone()), this.fresco = e.fresco, this.history = e.history, this.zoom = e.zoom, this.zoomMode = e.zoomMode, this.anchor = e.anchor, this.updateViewport(), document.dispatchEvent(new CustomEvent("zoom-change")), document.dispatchEvent(new CustomEvent("layerbox-render")), document.dispatchEvent(new CustomEvent("layer-select")), document.dispatchEvent(new CustomEvent("fresco-select")), document.dispatchEvent(new CustomEvent("resize")), this.history.dispatchHistoryStatus()
      }
  }
}, , , , , , function(t, e, i) {
  "use strict";
  i.d(e, "a", (function() {
      return r
  }));
  var s = i(13),
      n = i(6),
      a = i(1);
  async function r(t, e) {
      e.addShader("alpha-shift-mask", !0);
      const i = await fetch("https://pixlr.com/auth/aicutout/token/generate", {
              method: "GET"
          }),
          r = await i.json(),
          o = new AbortController,
          {
              signal: h
          } = o,
          c = new URLSearchParams;
      c.set("token", r.message), c.set("id", "1");
      const l = n.a.bestFit(t.canvas.width, t.canvas.height, 1e3, 1e3),
          d = a.b.resizeCanvas(t.canvas, l.width, l.height).toDataURL("image/jpeg").replace("data:image/jpeg;base64,", "");
      c.set("image", JSON.stringify(d));
      const u = await fetch("https://bgremoval.api.inmaginebrain.com/inference/", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json"
          },
          body: c,
          signal: h
      });
      t.addMask();
      const g = t.mask.getContext("2d");
      g.save(), g.imageSmoothingEnabled = !0, g.imageSmoothingQuality = "high";
      const m = JSON.parse(await u.json()),
          p = await s.a.openDataUrl("data:image/jpeg;base64," + m.mask),
          v = a.b.createImageCanvas(p, 4096);
      g.drawImage(e.apply(v), 0, 0, t.mask.width, t.mask.height), g.restore(), t.render()
  }
}, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
  "use strict";
  i.r(e);
  var s = i(5),
      n = i(2),
      a = i(13),
      r = i(0),
      o = i(9),
      h = i(54),
      c = i(60),
      l = i(1),
      d = i(48),
      u = i(18),
      g = i(7),
      m = i(4),
      p = i(32),
      v = i(28),
      f = i(26),
      w = i(14);
  class y extends u.a {
      constructor(t, e) {
          super("BackgroundRemover", t), this.id = e, this.type = "", this.mode = "remove", this.activate = () => {
              this.rasterctx = this.stage.coating.ctx, Object(r.b)(`cutout-type-magic-${this.id}`).addEventListener("change", this.selectType, !1), Object(r.b)(`cutout-type-draw-${this.id}`).addEventListener("change", this.selectType, !1), Object(r.b)(`cutout-type-lasso-${this.id}`).addEventListener("change", this.selectType, !1), Object(r.b)(`cutout-type-shape-${this.id}`).addEventListener("change", this.selectType, !1), Object(r.b)(`cutout-mode-keep-${this.id}`).addEventListener("click", this.selectMode, !1), Object(r.b)(`cutout-mode-remove-${this.id}`).addEventListener("click", this.selectMode, !1), Object(r.b)(`cutout-reset-${this.id}`).addEventListener("click", this.delete, !1), Object(r.b)(`cutout-invert-${this.id}`).addEventListener("click", this.invert, !1), Object(r.b)(`cutout-hint-${this.id}`).addEventListener("change", this.renderMask, !1), document.addEventListener("keydown", this.shiftDown, !1), document.addEventListener("keyup", this.shiftUp, !1), document.addEventListener("layer-select", this.layerSelect, !1), document.addEventListener("zoom-change", this.zoomChange, !1), this.stage.raster.addEventListener("touchstart", this.touchStart, {
                  passive: !0
              }), this.stage.raster.addEventListener("mousedown", this.mouseDown, !1), this.brush = new p.a(new w.a), this.sizeSlider = new g.a(`cutout-draw-size-${this.id}`, {
                  label: Object(n.a)("size"),
                  range: [1, 500],
                  step: 1,
                  defaultValue: 50,
                  labelFormat: t => t + "px",
                  onEnd: t => {
                      this.updateBrush()
                  }
              }), this.softnessSlider = new g.a(`cutout-draw-hardness-${this.id}`, {
                  label: Object(n.a)("softness"),
                  defaultValue: .5,
                  labelFormat: t => (100 * t).toFixed(0) + "%",
                  labelParse: t => parseInt(t, 10) / 100,
                  onEnd: t => {
                      this.updateBrush()
                  }
              }), this.magicTolerance = new g.a(`cutout-magic-tolerance-${this.id}`, {
                  defaultValue: .32,
                  label: Object(n.a)("tolerance") + ":",
                  labelFormat: t => (100 * t).toFixed(0),
                  labelParse: t => parseInt(t, 10) / 100
              }), this.layerSelect(), this.setType("draw"), this.setMode("remove")
          }, this.delete = () => {
              this.selected.removeMask(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.invert = () => {
              this.selected.invertMask(), this.selected.render(), document.dispatchEvent(new CustomEvent("viewport-render")), document.dispatchEvent(new CustomEvent("layer-select"))
          }, this.layerSelect = () => {
              this.selected = this.stage.fresco.getSelected(), this.scratch = this.stage.fresco.addScratch(), this.scratch.setTarget(this.selected.id, this.selected.rect, "over"), "draw" === this.type && this.updateBrush(), this.renderMask()
          }, this.selectType = t => {
              this.setType(t.currentTarget.value)
          }, this.setType = t => {
              t !== this.type && (Object(r.b)(`cutout-${this.type}-settings-${this.id}`) && (Object(r.b)(`cutout-${this.type}-settings-${this.id}`).style.display = "none"), Object(r.b)(`cutout-type-${t}-${this.id}`).checked = !0, Object(r.b)(`cutout-${t}-settings-${this.id}`) && (Object(r.b)(`cutout-${t}-settings-${this.id}`).style.display = "block"), this.type = t, Object(r.b)(`cutout-softness-${this.id}`).style.display = "draw" === this.type ? "none" : "block", this.selected && !this.selected.hasMask() && ("shape" === this.type ? this.setMode("keep") : this.setMode("remove")), this.selected ? "draw" === this.type ? this.updateBrush() : (this.stage.coating.removeCursorImage(), this.stage.raster.style.cursor = "crosshair") : this.stage.raster.style.cursor = "auto")
          }, this.toggleMode = () => {
              this.setMode("keep" === this.mode ? "remove" : "keep")
          }, this.selectMode = t => {
              this.setMode(t.currentTarget === Object(r.b)(`cutout-mode-remove-${this.id}`) ? "remove" : "keep")
          }, this.setMode = t => {
              switch (this.mode = t, Object(r.b)(`cutout-mode-remove-${this.id}`).checked = "remove" === this.mode, Object(r.b)(`cutout-mode-keep-${this.id}`).checked = "keep" === this.mode, this.type) {
                  case "draw":
                      this.updateBrush()
              }
          }, this.zoomChange = () => {
              switch (this.type) {
                  case "draw":
                      this.updateBrush()
              }
          }, this.isKeyDown = !1, this.shiftDown = t => {
              "Shift" !== t.key || this.isKeyDown || (this.isKeyDown = !0, this.toggleMode())
          }, this.shiftUp = t => {
              "Shift" === t.key && (this.isKeyDown = !1, this.toggleMode())
          }, this.down = t => {
              if (this.selected)
                  if (this.downPoint = t, "magic" !== this.type) {
                      switch (this.type) {
                          case "draw":
                              this.downDraw(t);
                              break;
                          case "lasso":
                              this.downLasso(t);
                              break;
                          case "shape":
                              this.downShape(t)
                      }
                      this.addMoveEventListeners()
                  } else this.applyMagic(t)
          }, this.move = t => {
              switch (this.type) {
                  case "shape":
                      this.moveShape(t);
                      break;
                  case "draw":
                      this.moveDraw(t);
                      break;
                  case "lasso":
                      this.moveLasso(t)
              }
          }, this.up = t => {
              switch (this.removeMoveEventListeners(), this.type) {
                  case "shape":
                      this.applyShape(this.stage.translateRasterToFresco(this.downPoint), this.stage.translateRasterToFresco(t));
                      break;
                  case "draw":
                      this.applyDraw();
                      break;
                  case "lasso":
                      this.applyLasso()
              }
          }, this.applyMagic = t => {
              if ((t = this.stage.translateRasterToFresco(t)).x < 0 || t.y < 0 || t.x > this.selected.canvas.width || t.y > this.selected.canvas.height) return;
              const e = this.prepareMask();
              let i = document.querySelector(`input[name="cutout-smooth-${this.id}"]:checked`).value,
                  s = this.selected.canvas.getContext("2d").getImageData(t.x, t.y, 1, 1).data,
                  n = new m.a(s[0], s[1], s[2], s[3]);
              if (0 === n.a && "remove" === this.mode && "none" === i) return;
              let a = 100 * this.magicTolerance.getValue(),
                  o = (this.selected.baked && "remove" === this.mode ? this.selected.baked : this.selected.canvas).getContext("2d").getImageData(0, 0, this.selected.canvas.width, this.selected.canvas.height);
              this.cpx = new Uint32Array(o.data.buffer);
              let h = this.scratch.ctx.getImageData(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
              this.mpx = new Uint32Array(h.data.buffer), Object(r.b)(`cutout-magic-contiguous-${this.id}`).checked ? this.floodFill(t, n, a, "none" !== i) : this.allFill(n, a), this.scratch.ctx.putImageData(h, 0, 0), this.cpx = null, this.mpx = null, this.drawToMask(e, i)
          }, this.updateBrush = () => {
              this.brush || (this.brush = new p.a(new w.a)), this.brush.settings.size = this.sizeSlider.getValue(), this.brush.settings.softness = this.softnessSlider.getValue(), this.brush.generate("keep" === this.mode ? new m.a(0, 255, 0, 255) : new m.a(255, 0, 0, 255)), this.selected ? this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom)) : this.stage.coating.removeCursorImage(), Object(r.b)(`cutout-draw-brush-preview-${this.id}`).innerHTML = "", Object(r.b)(`cutout-draw-brush-preview-${this.id}`).appendChild(this.brush.canvas)
          }, this.downDraw = t => {
              this.x = this.y = -1, this.scratch.settings.opacity = .4, this.moveDraw(t)
          }, this.x = -1, this.y = -1, this.moveDraw = t => {
              let e = this.brush.getStep(),
                  i = !1;
              if (t = this.stage.translateRasterToFresco(t), -1 === this.x && (this.lx = t.x, this.ly = t.y, this.x = t.x, this.y = t.y, this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2)), i = !0), t.x !== this.x || t.y !== this.y) {
                  let s = t.x - this.x,
                      n = t.y - this.y,
                      a = s > 0 ? 1 : -1,
                      r = n > 0 ? 1 : -1;
                  if (s = s < 0 ? -s : s, n = n < 0 ? -n : n, s > n) {
                      let t = .5 * s;
                      for (let o = 1; o <= s; o++) this.x += a, t += n, t >= s && (t -= s, this.y += r), (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) && (this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2)), this.lx = this.x, this.ly = this.y, i = !0)
                  } else {
                      let t = .5 * n;
                      for (let o = 1; o <= n; o++) this.y += r, t += s, t >= n && (t -= n, this.x += a), (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) && (this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2)), this.lx = this.x, this.ly = this.y, i = !0)
                  }
              }
              i && window.requestAnimationFrame((() => this.stage.render()))
          }, this.applyDraw = () => {
              const t = this.prepareMask();
              this.drawToMask(t, "none")
          }, this.downLasso = t => {
              this.points = []
          }, this.moveLasso = t => {
              this.rasterctx.save(), this.points.push(t), this.stage.raster.style.opacity = "0.6", this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height), this.rasterctx.strokeStyle = "keep" === this.mode ? "#00ff00" : "#ff0000", this.rasterctx.lineWidth = 2, this.rasterctx.lineCap = "round", this.rasterctx.setLineDash([6]), this.rasterctx.beginPath(), this.rasterctx.moveTo(this.points[0].x, this.points[0].y), this.points.forEach((t => {
                  this.rasterctx.lineTo(t.x, t.y)
              })), this.rasterctx.stroke(), this.rasterctx.restore()
          }, this.applyLasso = () => {
              if (this.stage.raster.style.opacity = "1", this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height), this.points.length < 2) return;
              const t = this.points.map((t => this.stage.translateRasterToFresco(t))),
                  e = this.prepareMask();
              let i = document.querySelector(`input[name="cutout-smooth-${this.id}"]:checked`).value;
              this.scratch.ctx.beginPath(), this.scratch.ctx.moveTo(t[0].x, t[0].y), t.forEach((t => this.scratch.ctx.lineTo(t.x, t.y))), this.scratch.ctx.fill(), this.drawToMask(e, i)
          }, this.downShape = t => {
              this.shapeType = document.querySelector(`input[name="cutout-shape-type-${this.id}"]:checked`).value
          }, this.moveShape = t => {
              switch (this.rasterctx.save(), this.stage.raster.style.opacity = "0.6", this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height), this.rasterctx.strokeStyle = "keep" === this.mode ? "#00ff00" : "#ff0000", this.rasterctx.lineWidth = 2, this.shapeType) {
                  case "square":
                      this.rasterctx.setLineDash([6]), this.rasterctx.strokeRect(this.downPoint.x, this.downPoint.y, t.x - this.downPoint.x, t.y - this.downPoint.y);
                      break;
                  case "circle":
                      this.rasterctx.setLineDash([6]), f.a.ellipse(this.rasterctx, this.downPoint, t), this.rasterctx.stroke();
                      break;
                  case "triangle":
                      this.rasterctx.setLineDash([6]), f.a.triangle(this.rasterctx, this.downPoint, t), this.rasterctx.stroke();
                      break;
                  case "star":
                      this.rasterctx.setLineDash([6]), f.a.star(this.rasterctx, this.downPoint, t), this.rasterctx.stroke();
                      break;
                  case "heart":
                      this.rasterctx.setLineDash([6]), f.a.heart(this.rasterctx, this.downPoint, t), this.rasterctx.stroke();
                      break;
                  case "line":
                      this.rasterctx.lineWidth = 4, f.a.line(this.rasterctx, this.downPoint, t), this.rasterctx.stroke()
              }
              this.rasterctx.restore()
          }, this.applyShape = (t, e) => {
              if (t.x === e.x && t.y === e.y) return;
              this.stage.raster.style.opacity = "1", this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height), this.rasterctx.lineWidth = 4 / this.stage.zoom;
              const i = this.prepareMask(),
                  s = document.querySelector(`input[name="cutout-smooth-${this.id}"]:checked`).value;
              switch (this.shapeType) {
                  case "square":
                      this.scratch.ctx.fillRect(t.x, t.y, e.x - t.x, e.y - t.y);
                      break;
                  case "circle":
                      f.a.ellipse(this.scratch.ctx, t, e), this.scratch.ctx.fill();
                      break;
                  case "triangle":
                      f.a.triangle(this.scratch.ctx, t, e), this.scratch.ctx.fill();
                      break;
                  case "star":
                      f.a.star(this.scratch.ctx, t, e), this.scratch.ctx.fill();
                      break;
                  case "heart":
                      f.a.heart(this.scratch.ctx, t, e), this.scratch.ctx.fill();
                      break;
                  case "line":
                      f.a.line(this.scratch.ctx, t, e), this.scratch.ctx.stroke()
              }
              this.drawToMask(i, s)
          }, this.prepareMask = () => {
              if (this.selected.hasMask()) return !1;
              if (this.selected.addMask(), "remove" === this.mode) {
                  this.selected.mask.getContext("2d").fillRect(0, 0, this.selected.mask.width, this.selected.mask.height)
              }
              return !0
          }, this.renderMask = () => {
              this.selected.hasMask() && (this.selected.render(), Object(r.b)(`cutout-hint-${this.id}`).checked && this.renderGhost(), this.stage.render())
          }, this.renderGhost = () => {
              if (this.selected.hasMask()) {
                  var t = this.selected.baked.getContext("2d");
                  t.save(), t.globalAlpha = .33, t.drawImage(this.selected.canvas, 0, 0), t.restore(), t = null
              }
          }, this.cleanUp = () => {
              this.rasterctx && (Object(r.b)(`cutout-hint-${this.id}`).checked && (this.selected.render(), this.stage.render()), this.sizeSlider.cleanUp(), this.softnessSlider.cleanUp(), this.magicTolerance.cleanUp(), document.removeEventListener("keydown", this.shiftDown, !1), document.removeEventListener("keyup", this.shiftUp, !1), document.removeEventListener("zoom-change", this.zoomChange, !1), document.removeEventListener("layer-select", this.layerSelect, !1), Object(r.b)(`cutout-hint-${this.id}`).removeEventListener("change", this.renderMask, !1), Object(r.b)(`cutout-type-magic-${this.id}`).removeEventListener("change", this.selectType, !1), Object(r.b)(`cutout-type-draw-${this.id}`).removeEventListener("change", this.selectType, !1), Object(r.b)(`cutout-type-lasso-${this.id}`).removeEventListener("change", this.selectType, !1), Object(r.b)(`cutout-type-shape-${this.id}`).removeEventListener("change", this.selectType, !1), Object(r.b)(`cutout-mode-keep-${this.id}`).removeEventListener("click", this.selectMode, !1), Object(r.b)(`cutout-mode-remove-${this.id}`).removeEventListener("click", this.selectMode, !1), Object(r.b)(`cutout-reset-${this.id}`).removeEventListener("click", this.delete, !1), Object(r.b)(`cutout-invert-${this.id}`).removeEventListener("click", this.invert, !1), this.stage.raster.removeEventListener("touchstart", this.touchStart, !1), this.stage.raster.removeEventListener("mousedown", this.mouseDown, !1), this.rasterctx = null, this.selected = null, this.brush = null)
          }, this.allFill = (t, e) => {
              for (var i = 0; i < this.mpx.length; ++i) this.tolerate(i, t, e) && (this.mpx[i] = 4294967295)
          }, this.floodFill = (t, e, i, s) => {
              let n = this.selected.canvas.width,
                  a = this.selected.canvas.height,
                  r = new Array,
                  o = new Array(n * a);
              for (this.linearFill(t.x, t.y, e, i, s, r, o); r.length > 0;)
                  for (var h = r.shift(), c = h.start; c <= h.stop; ++c) h.row > 0 && !o[(h.row - 1) * n + c] && this.linearFill(c, h.row - 1, e, i, s, r, o), h.row < a - 1 && !o[(h.row + 1) * n + c] && this.linearFill(c, h.row + 1, e, i, s, r, o)
          }, this.linearFill = (t, e, i, s, n, a, r) => {
              var o = this.selected.canvas.width;
              if (r[o * e + t] = !0, this.tolerate(o * e + t, i, s)) {
                  this.mpx[o * e + t] = 4294967295;
                  for (var h = t - 1, c = t + 1; h >= 0 && !r[o * e + h];) {
                      if (r[o * e + h] = !0, !this.tolerate(o * e + h, i, s)) {
                          n && (this.mpx[o * e + h] = 4294967295);
                          break
                      }
                      this.mpx[o * e + h] = 4294967295, --h
                  }
                  for (; c < o && !r[o * e + c];) {
                      if (r[o * e + c] = !0, !this.tolerate(o * e + c, i, s)) {
                          n && (this.mpx[o * e + c] = 4294967295);
                          break
                      }
                      this.mpx[o * e + c] = 4294967295, ++c
                  }
                  a.push(new d.a(h + 1, c - 1, e))
              } else n && (this.mpx[o * e + h] = 4294967295)
          }, this.tolerate = (t, e, i) => {
              let s, n, a, r, o, h, c;
              return n = 0, a = this.cpx[t], r = a >> 24 & 255, r = e.a - r, s = r < 0 ? -r : r, s > n && (n = s), e.a > 0 && (c = a >> 16 & 255, h = a >> 8 & 255, o = 255 & a, o = e.r - o, s = o < 0 ? -o : o, s > n && (n = s), h = e.g - h, s = h < 0 ? -h : h, s > n && (n = s), c = e.b - c, s = c < 0 ? -c : c, s > n && (n = s)), n < i
          }
      }
      drawToMask(t, e) {
          if ("none" !== e) {
              let t = new v.a;
              t.addShader("blur", "light" === e ? .1 : .3), this.scratch.replaceCanvas(t.apply(this.scratch.canvas))
          }
          const i = l.b.getColorBoundsRect(this.scratch.canvas);
          if (!i) return;
          let s;
          t || (s = l.b.canvasImageData(this.selected.mask, i));
          const n = this.selected.mask.getContext("2d");
          n.save(), "remove" === this.mode && (n.globalCompositeOperation = "destination-out"), n.drawImage(this.scratch.canvas, 0, 0), n.restore(), this.scratch.clear(), this.renderMask()
      }
  }
  if ("cGl4bHIuY29t" !== btoa(document.location.hostname.split(".").slice(-2).join("."))) throw new Error;
  s.a.product = "bg", new class {
      constructor() {
          this.workspaceCount = 0, this.spaces = [], this.keyDown = t => {
              32 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.spaces.forEach((t => t.stage.coating.setPan())))
          }, this.keyUp = t => {
              32 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.spaces.forEach((t => t.stage.coating.removePan())))
          }, this.openClick = () => {
              Object(o.a)("open-browse"), a.a.browseFile().then((async t => {
                  for (let e = 0; e < t.length; e++) await this.addFile(t[e]);
                  await this.preProcess()
              }))
          }, this.dragOver = t => {
              if (t.preventDefault(), t.stopPropagation(), !Object(r.b)("modal-drop")) {
                  const t = document.createElement("div");
                  t.id = "modal-drop", t.classList.add("modal", "dim", "vertical-align"), t.innerHTML = `<div id="dim-message">${Object(n.a)("dropFile")}</div>`, document.body.appendChild(t)
              }
          }, this.dragOut = t => {
              t.preventDefault(), t.stopPropagation(), t.clientX <= 0 && Object(r.b)("modal-drop") && Object(r.b)("modal-drop").remove()
          }, this.drop = async t => {
              t.stopPropagation(), t.preventDefault(), Object(r.b)("modal-drop") && Object(r.b)("modal-drop").remove(), document.body.style.pointerEvents = "auto";
              const e = t.dataTransfer.files;
              for (var i, s = 0; i = e[s]; s++) await this.addFile(i);
              this.preProcess()
          }, this.paste = async t => {
              if (!this.isModal() && t.clipboardData.items.length > 0) {
                  const s = t.clipboardData.items;
                  let n;
                  for (var e, i = 0; e = s[i]; i++)
                      if ("file" === e.kind) {
                          n = e;
                          break
                      }
                  if (n || (n = s[0]), "file" === n.kind) {
                      if (-1 == n.type.indexOf("image")) return;
                      t.preventDefault(), t.stopPropagation();
                      const e = n.getAsFile();
                      await this.addFile(e), this.preProcess()
                  }
              }
          }, this.addFile = async t => {
              Object(o.a)("open-file", t.type);
              const e = this.workspaceCount++,
                  i = this.cloneTemplate(e);
              this.template.insertAdjacentElement("afterend", i);
              const s = new h.a(void 0, i);
              s.syncDisabled = !0, s.bounds = 5, this.resize(), await a.a.openFile(s, t), this.spaces.push({
                  id: e,
                  stage: s,
                  cutout: new y(s, e),
                  document: i,
                  processed: "no"
              }), this.resize()
          }, this.preProcess = async() => {
              Object(r.b)("home").style.display = "none", Object(r.b)("workspace").style.display = "block", this.resize();
              Boolean(document.body.offsetWidth < 850);
              const t = this.spaces.filter((t => "no" === t.processed)),
                  e = t.map((t => t.stage.fresco.getSelected()));
              for (let i = 0; i < e.length; i++) {
                  const s = e[i],
                      n = t[i];
                  n.processed = "inflight";
                  const a = Object(r.a)("div", {
                      className: "ai-overlay"
                  }, Object(r.a)("div", Object(r.a)("img", {
                      src: "/img/icon/ai.svg"
                  }), Object(r.a)("div", {
                      className: "ai-load"
                  }, Object(r.a)("div", {
                      className: "dot-floating"
                  })), Object(r.a)("div", {
                      className: "pad-10"
                  }, "Machines are doing their thing, please wait ..")));
                  n.stage.workspace.style.display = "block", n.stage.workspace.append(a);
                  try {
                      await Object(c.a)(s, this.shaders)
                  } catch (t) {
                      return console.log(t), a.innerHTML = "", void a.append(Object(r.a)("div", Object(r.a)("img", {
                          src: "/img/icon/ai-err.svg"
                      }), Object(r.a)("div", {
                          className: "pad-10"
                      }, "Oh no! Error! Something went wrong ..")))
                  }
                  n.processed = "done", n.stage.render(), a.remove()
              }
          }, this.finetune = t => {
              Object(o.a)("fine-tune");
              const e = this.spaces.find((e => e.id === t));
              null == e || e.cutout.activate(), Object(r.b)(`cutout-sub-tools-${t}`).style.display = "block", Object(r.b)(`cutout-result-info-${t}`).style.display = "none"
          }, this.close = t => {
              const e = this.spaces.findIndex((e => e.id === t));
              if (e < 0) return;
              const i = this.spaces[e];
              i.cutout.cleanUp(), i.document.remove(), this.spaces.splice(e, 1), 0 === this.spaces.length && (Object(r.b)("workspace").style.display = "none", Object(r.b)("home").style.display = "block")
          }, this.save = t => {
              const e = this.spaces.find((e => e.id === t));
              if (!e) return;
              e.stage.getOutputCanvas().toBlob((t => {
                  Object(o.a)("download", "full-res");
                  var e = document.createElement("a");
                  e.download = "pixlr-bg-result.png", e.target = "_blank", e.href = URL.createObjectURL(t), Object(r.b)("workspace").append(e), void 0 === e.download ? window.location = e.href : (e.click(), e.remove())
              }))
          }, this.resize = () => {
              l.b.debounce("rez", 200, (() => {
                  const t = Boolean(document.body.offsetWidth < 850);
                  this.spaces.forEach((e => {
                      e.stage.resize(0, 0, e.stage.workspace.offsetWidth - (t ? 0 : 243), e.stage.workspace.offsetHeight - (t ? 253 : 0)), e.stage.setZoom("fit")
                  }))
              }))
          }, this.isModal = () => document.getElementsByClassName("modal").length > 0, this.shaders = new v.a, this.template = Object(r.b)("workspace-tpl"), Object(r.b)("home-open-image").addEventListener("click", this.openClick), Object(r.b)("welcome-open-image").addEventListener("click", this.openClick), window.addEventListener("resize", this.resize), document.addEventListener("resize", this.resize), document.addEventListener("keydown", this.keyDown), document.addEventListener("keyup", this.keyUp), document.addEventListener("paste", this.paste, !0), document.addEventListener("dragover", this.dragOver, !0), document.addEventListener("dragleave", this.dragOut, !0), document.addEventListener("drop", this.drop, !0)
      }
      cloneTemplate(t) {
          const e = "-" + t,
              i = this.template.cloneNode(!0);
          i.id = `workspace-${t}`, i.querySelector("label[for='cutout-type-shape']").htmlFor += e;
          const s = i.querySelector("#cutout-type-shape");
          s.id += e, s.name += e, i.querySelector("label[for='cutout-type-magic']").htmlFor += e;
          const n = i.querySelector("#cutout-type-magic");
          n.id += e, n.name += e, i.querySelector("label[for='cutout-type-draw']").htmlFor += e;
          const a = i.querySelector("#cutout-type-draw");
          a.id += e, a.name += e, i.querySelector("label[for='cutout-type-lasso']").htmlFor += e;
          const r = i.querySelector("#cutout-type-lasso");
          r.id += e, r.name += e, i.querySelector("label[for='cutout-mode-keep']").htmlFor += e;
          const o = i.querySelector("#cutout-mode-keep");
          o.id += e, o.name += e, i.querySelector("label[for='cutout-mode-remove']").htmlFor += e;
          const h = i.querySelector("#cutout-mode-remove");
          h.id += e, h.name += e, i.querySelector("#cutout-sub-tools").id += e, i.querySelector("#cutout-result-info").id += e, i.querySelector("#cutout-softness").id += e, i.querySelector("label[for='cutout-smooth-none']").htmlFor += e;
          const c = i.querySelector("#cutout-smooth-none");
          c.id += e, c.name += e, i.querySelector("label[for='cutout-smooth-light']").htmlFor += e;
          const l = i.querySelector("#cutout-smooth-light");
          l.id += e, l.name += e, i.querySelector("label[for='cutout-smooth-medium']").htmlFor += e;
          const d = i.querySelector("#cutout-smooth-medium");
          d.id += e, d.name += e, i.querySelector("#cutout-magic-settings").id += e, i.querySelector("#cutout-magic-tolerance").id += e, i.querySelector("#cutout-magic-contiguous").id += e, i.querySelector("label[for='cutout-magic-contiguous']").htmlFor += e, i.querySelector("#cutout-draw-settings").id += e, i.querySelector("#cutout-draw-brush-preview").id += e, i.querySelector("#cutout-draw-size").id += e, i.querySelector("#cutout-draw-hardness").id += e, i.querySelector("#cutout-shape-settings").id += e, i.querySelector("label[for='cutout-shape-type-square']").htmlFor += e;
          const u = i.querySelector("#cutout-shape-type-square");
          u.id += e, u.name += e, i.querySelector("label[for='cutout-shape-type-circle']").htmlFor += e;
          const g = i.querySelector("#cutout-shape-type-circle");
          g.id += e, g.name += e, i.querySelector("label[for='cutout-shape-type-line']").htmlFor += e;
          const m = i.querySelector("#cutout-shape-type-line");
          m.id += e, m.name += e, i.querySelector("label[for='cutout-shape-type-heart']").htmlFor += e;
          const p = i.querySelector("#cutout-shape-type-heart");
          p.id += e, p.name += e, i.querySelector("label[for='cutout-shape-type-star']").htmlFor += e;
          const v = i.querySelector("#cutout-shape-type-star");
          v.id += e, v.name += e, i.querySelector("label[for='cutout-shape-type-triangle']").htmlFor += e;
          const f = i.querySelector("#cutout-shape-type-triangle");
          f.id += e, f.name += e, i.querySelector("#cutout-hint").id += e, i.querySelector("label[for='cutout-hint']").htmlFor += e;
          const w = i.querySelector("#cutout-download");
          w.id += e, w.addEventListener("click", (() => this.save(t)));
          const y = i.querySelector("#cutout-finetune");
          y.id += e, y.addEventListener("click", (() => this.finetune(t)));
          i.querySelector("#cutout-invert").id += e;
          return i.querySelector("#cutout-reset").id += e, i.querySelector(".close").addEventListener("click", (() => this.close(t))), i
      }
  }
}]);
