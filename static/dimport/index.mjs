function e(e, t) {t.onerror = t.onload = null, URL.revokeObjectURL(t.temp), URL.revokeObjectURL(t.src), delete window[e], t.remove();}function t(e, t) {return URL.createObjectURL(new Blob([t.replace(/(^|\s|;)(import\s*)(\(|.*from\s*|)['"]([^'"]+)['"]/gi, function (t, r, n, o, i) {return r + ("(" == o ? "window.dimport" : n) + o + "'" + new URL(i, e) + "'";}).replace(/(^|\s|;)(import)(?=\()/g, "$1window.dimport")], { type: "application/javascript" }));}var r = {};function n(o) {o = new URL(o, location.href).href;try {return new Function("return import('" + o + "')").call();} catch (i) {return r[o] ? Promise.resolve(r[o]) : fetch(o).then(function (e) {return e.text();}).then(function (c) {return window.dimport = n, new Promise(function (n, a, d) {i = document.createElement("script"), d = "$" + Math.random().toString(32).slice(2), i.type = "module", i.onerror = function () {e(d, i), a(new TypeError("Failed to fetch dynamically imported module: " + o));}, i.onload = function () {n(r[o] = window[d]), e(d, i);}, i.temp = t(o, c), i.src = t(o, "import * as m from '" + i.temp + "';window." + d + "=m;"), document.head.appendChild(i);});});}}var o = void 0 !== document && document.currentScript || document.querySelector("script[data-main]");o && (o.text ? n(t(location.href, o.text)) : (o = o.getAttribute("data-main")) && n(o));export default n;