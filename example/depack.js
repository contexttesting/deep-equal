#!/usr/bin/env node
'use strict';
const assert = require('assert');             
const {deepStrictEqual:m} = assert;
/*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
const q = {black:30, red:31, green:32, yellow:33, blue:34, magenta:35, cyan:36, white:37, grey:90};
function r(c, g) {
  return (g = q[g]) ? `\x1b[${g}m${c}\x1b[0m` : c;
}
;const w = (...c) => {
  let g = -1;
  return "%s%s".replace(/%s/g, () => {
    g++;
    return c[g];
  });
};
function x(c, g) {
  let k = 0;
  const f = (b, a = void 0) => {
    const e = " ".repeat(2 * k);
    a = void 0 !== a ? r("+ " + z(a), "green") : null;
    b = void 0 !== b ? r("- " + z(b), "red") : null;
    const h = [];
    b && h.push(w(e, b));
    a && h.push(w(e, a));
    return h.join("\n");
  }, t = b => {
    const a = " ".repeat(2 * k);
    return w(a, b);
  }, u = (b, a) => {
    if (b instanceof Date && a instanceof Date) {
      var e = b.getTime() != a.getTime() ? !1 : void 0;
      return e ? "" : f(b, a);
    }
    if (b instanceof Date && !(a instanceof Date) || !(b instanceof Date) && a instanceof Date || Array.isArray(b) && !Array.isArray(a) || !Array.isArray(b) && Array.isArray(a)) {
      return f(b, a);
    }
    if (A(b) && A(a) || !A(b) && A(a) || A(b) && !A(a)) {
      return b != a ? f(b, a) : "";
    }
    if (b.constructor && !a.constructor) {
      return f(b.constructor.name, a);
    }
    if (!b.constructor && a.constructor) {
      return f(b, a.constructor.name);
    }
    if (b.constructor && a.constructor) {
      if (b.constructor.name != a.constructor.name) {
        return f(b.constructor.name, a.constructor.name);
      }
      e = b.valueOf();
      var h = a.valueOf();
      if (A(e) && A(h) && e != h) {
        return f(e, h);
      }
    }
    if (Array.isArray(b) && Array.isArray(a)) {
      let p;
      e = b.map((l, n) => {
        p = n;
        (l = u(l, a[n])) && (l = `${t(`[${n}]`)}\n${l}`);
        return l;
      }).filter(Boolean);
      h = a.slice(p + 1).map((l, n) => `${t(`[${p + n + 1}]`)}\n${f(void 0, l)}`);
      return [...e, ...h].join("\n");
    }
    if ("object" == typeof b && "object" == typeof a) {
      const p = [], l = [], n = [];
      Object.keys(b).forEach(d => {
        d in a ? n.push(d) : l.push(d);
      });
      Object.keys(a).forEach(d => {
        d in b || p.push(d);
      });
      e = l.map(d => f(`${d}${`: ${z(b[d])}`}`));
      h = p.map(d => f(void 0, `${d}: ${z(a[d])}`));
      const C = n.map(d => {
        k++;
        const y = u(b[d], a[d]);
        let v = "";
        y && (v += t(Array.isArray(b[d]) && Array.isArray(a[d]) ? `${d}.Array` : d), v += "\n" + y);
        k--;
        return v;
      }).filter(Boolean);
      return [...e, ...h, ...C].join("\n");
    }
    console.error("Could not compare two values: %s %s. Please file a bug with differently.", b, a);
  };
  return u(c, g);
}
const A = c => null === c ? !0 : "string number boolean symbol null undefined".split(" ").includes(typeof c), z = c => Array.isArray(c) ? `Array[${c.toString()}]` : c && c.toString ? c.toString() : `${c}`;
const B = (c, g) => {
  try {
    try {
      m(c, g, void 0);
    } catch (k) {
      const f = x(g, c);
      k.message = [k.message, f].filter(Boolean).join("\n");
      throw k;
    }
  } catch (k) {
    console.log(k.message);
  }
};
B("hello", "world");
B([10, 4, 20], [100, 4, 30]);
B({b:"example", a:10}, {a:10, c:"context-testing"});


//# sourceMappingURL=depack.js.map