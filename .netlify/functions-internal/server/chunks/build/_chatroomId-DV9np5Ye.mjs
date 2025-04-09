import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createFileRoute, Link } from '@tanstack/react-router';
import * as F from 'react';
import F__default, { memo, useRef, useCallback, useEffect, createContext, forwardRef, useMemo, useState, isValidElement, useContext, Suspense, useLayoutEffect } from 'react';
import { v4 } from 'uuid';
import { AnimatePresence as AnimatePresence$1, motion as motion$1 } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { animate, useMotionValue, useSpring, AnimatePresence, motion } from 'motion/react';
import { SparklesIcon, UserIcon, ChevronDown, Globe, Telescope, BrainCircuit, Split, ArrowUpIcon, AudioLines, ChevronRight, Folder, FileText, Check, Bot, Star, Settings, MessageSquareIcon, XIcon, CheckIcon, Smile, MessageSquare, Edit } from 'lucide-react';
import * as V from '@radix-ui/react-dropdown-menu';
import * as de from '@radix-ui/react-scroll-area';
import { a as a$1, r } from './getRequestClient-CzduEbyq.mjs';
import { atom, useSetAtom, useAtom } from 'jotai';
import { z } from 'zod';
import { marked } from 'marked';
import rr from 'react-markdown';
import sr from 'remark-gfm';
import * as We from '@radix-ui/react-hover-card';
import { encode } from 'qss';
import * as a from '@radix-ui/react-dialog';
import * as fe$1 from '@radix-ui/react-tooltip';
import { toast } from 'sonner';
import { J } from './client-DM3TFEX8.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@tanstack/start-server-core';
import 'tiny-invariant';

function M(...t) {
  return twMerge(clsx(t));
}
const nn = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), D = F.forwardRef(({ className: t, variant: n, size: r, asChild: a = false, ...h }, l) => jsx(a ? Slot : "button", { className: M("cursor-pointer", nn({ variant: n, size: r, className: t })), ref: l, ...h }));
D.displayName = "Button";
const qe = memo(({ blur: t = 0, inactiveZone: n = 0.7, proximity: r = 0, spread: a = 20, variant: h = "default", glow: l = false, className: i, movementDuration: m = 2, borderWidth: C = 1, disabled: f = true }) => {
  const N = useRef(null), s = useRef({ x: 0, y: 0 }), k = useRef(0), I = useCallback((d) => {
    N.current && (k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
      var _a, _b;
      const p = N.current;
      if (!p) return;
      const { left: w, top: c, width: x, height: _ } = p.getBoundingClientRect(), B = (_a = d == null ? void 0 : d.x) != null ? _a : s.current.x, g = (_b = d == null ? void 0 : d.y) != null ? _b : s.current.y;
      d && (s.current = { x: B, y: g });
      const L = [w + x * 0.5, c + _ * 0.5], y = Math.hypot(B - L[0], g - L[1]), b = 0.5 * Math.min(x, _) * n;
      if (y < b) {
        p.style.setProperty("--active", "0");
        return;
      }
      const v = B > w - r && B < w + x + r && g > c - r && g < c + _ + r;
      if (p.style.setProperty("--active", v ? "1" : "0"), !v) return;
      const T = parseFloat(p.style.getPropertyValue("--start")) || 0, E = (180 * Math.atan2(g - L[1], B - L[0]) / Math.PI + 90 - T + 180) % 360 - 180, P = T + E;
      animate(T, P, { duration: m, ease: [0.16, 1, 0.3, 1], onUpdate: ($) => {
        p.style.setProperty("--start", String($));
      } });
    }));
  }, [n, r, m]);
  return useEffect(() => {
    if (f) return;
    const d = () => I(), p = (w) => I(w);
    return window.addEventListener("scroll", d, { passive: true }), document.body.addEventListener("pointermove", p, { passive: true }), () => {
      k.current && cancelAnimationFrame(k.current), window.removeEventListener("scroll", d), document.body.removeEventListener("pointermove", p);
    };
  }, [I, f]), jsxs(Fragment, { children: [jsx("div", { className: M("pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity", l && "opacity-100", h === "white" && "border-white", f && "!block") }), jsx("div", { ref: N, style: { "--blur": `${t}px`, "--spread": a, "--start": "0", "--active": "0", "--glowingeffect-border-width": `${C}px`, "--repeating-conic-gradient-times": "5", "--gradient": h === "white" ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )` : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )` }, className: M("pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity", l && "opacity-100", t > 0 && "blur-[var(--blur)] ", i, f && "!hidden"), children: jsx("div", { className: M("glow", "rounded-[inherit]", 'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]', "after:[border:var(--glowingeffect-border-width)_solid_transparent]", "after:[background:var(--gradient)] after:[background-attachment:fixed]", "after:opacity-[var(--active)] after:transition-opacity after:duration-300", "after:[mask-clip:padding-box,border-box]", "after:[mask-composite:intersect]", "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]") }) })] });
});
qe.displayName = "GlowingEffect";
const Xe = F.forwardRef(({ className: t, ...n }, r) => jsx("textarea", { className: M("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: r, ...n }));
Xe.displayName = "Textarea";
const Ve = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function rn({ selectedAgents: t, onSelectAgents: n, isOpen: r, onClose: a, multiSelectMode: h = false, maxSelections: l = 4, searchTerm: i = "", onAgentSelect: m, keyboardNavigation: C = false }) {
  const [f, N] = useState(Ve), [s, k] = useState("provider"), I = useRef(null), [d, p] = useState(0), [w, c] = useState([]);
  useRef(false);
  const [x, _] = useState(i);
  useEffect(() => {
    const y = (b) => {
      I.current && !I.current.contains(b.target) && a();
    };
    return r && document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, [r, a]), useEffect(() => {
    if (!r || !C) return;
    const y = (b) => {
      if (b.key === "ArrowDown") b.preventDefault(), p((v) => v < w.length - 1 ? v + 1 : v);
      else if (b.key === "ArrowUp") b.preventDefault(), p((v) => v > 0 ? v - 1 : 0);
      else if (b.key === "Enter" && d >= 0 && d < w.length) {
        b.preventDefault(), b.stopPropagation();
        const v = w[d];
        m ? m(v) : g(v);
      }
    };
    return document.addEventListener("keydown", y, { capture: true }), () => {
      document.removeEventListener("keydown", y, { capture: true });
    };
  }, [r, C, d, w, m]), useEffect(() => {
    _(i);
  }, [i]), useEffect(() => {
    if (!r) return;
    const y = i.toLowerCase(), b = Ve.map((T) => {
      const O = T.name.toLowerCase().includes(y), E = T.agents.filter(($) => $.name.toLowerCase().includes(y)), P = y ? O || E.length > 0 : T.expanded;
      return { ...T, expanded: P, agents: E };
    }).filter((T) => T.name.toLowerCase().includes(y) || T.agents.length > 0);
    N(b);
    const v = [];
    b.forEach((T) => {
      T.expanded && v.push(...T.agents);
    }), c(v), v.length > 0 && p(0), y && v.length === 0 && a();
  }, [i, r, a]);
  const B = (y) => {
    N(f.map((b) => b.id === y ? { ...b, expanded: !b.expanded } : b));
  }, g = (y) => {
    const b = t.some((v) => v.id === y.id);
    h ? b ? n(t.filter((v) => v.id !== y.id)) : t.length < l && n([...t, y]) : (n([y]), m || a());
  }, L = (y) => {
    const b = f.find((v) => v.id === y);
    return b ? t.filter((v) => b.agents.some((T) => T.id === v.id)).length : 0;
  };
  return r ? jsxs("div", { ref: I, className: "w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 h-[350px] flex flex-col", children: [jsxs("div", { className: "flex border-b border-gray-200 flex-shrink-0", children: [jsx("button", { className: M("flex-1 py-2 text-sm font-medium", s === "provider" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => k("provider"), children: "AI Agents" }), jsx("button", { className: M("flex-1 py-2 text-sm font-medium", s === "agent" ? "border-b-2 border-black" : "text-gray-500"), onClick: () => k("agent"), children: "Agents" })] }), i && jsxs("div", { className: "px-3 py-2 text-xs text-gray-500 border-b border-gray-200", children: ['Searching for: "', i, '"'] }), jsxs("div", { className: "overflow-y-auto flex-1", children: [f.length === 0 && jsx("div", { className: "p-3 text-sm text-gray-500", children: "No agents found" }), f.map((y) => {
    const b = L(y.id);
    return jsxs("div", { className: "text-sm", children: [jsxs("div", { className: "flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer", onClick: () => B(y.id), children: [b > 0 && jsx("div", { className: "flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 text-xs font-medium mr-1", children: b }), y.expanded ? jsx(ChevronDown, { className: "h-4 w-4 text-gray-500 mr-1" }) : jsx(ChevronRight, { className: "h-4 w-4 text-gray-500 mr-1" }), jsx(Folder, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { children: y.name })] }), y.expanded && y.agents.map((v) => {
      const T = t.some((P) => P.id === v.id), E = w.findIndex((P) => P.id === v.id) === d;
      return jsxs("div", { className: M("flex items-center pl-10 pr-3 py-2 cursor-pointer", E ? "bg-gray-200" : "hover:bg-gray-100"), onClick: () => {
        m ? m(v) : g(v);
      }, children: [jsx(FileText, { className: "h-4 w-4 text-gray-500 mr-2" }), jsx("span", { className: "flex-1", children: v.name }), T && jsx(Check, { className: "h-4 w-4 text-red-500" })] }, v.id);
    })] }, y.id);
  })] })] }) : null;
}
function an({ ...t }) {
  return jsx(V.Root, { "data-slot": "dropdown-menu", ...t });
}
function on({ ...t }) {
  return jsx(V.Trigger, { "data-slot": "dropdown-menu-trigger", ...t });
}
function sn({ className: t, sideOffset: n = 4, ...r }) {
  return jsx(V.Portal, { children: jsx(V.Content, { "data-slot": "dropdown-menu-content", sideOffset: n, className: M("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", t), ...r }) });
}
function ln({ className: t, children: n, checked: r, ...a }) {
  return jsxs(V.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: M("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t), checked: r, ...a, children: [jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: jsx(V.ItemIndicator, { children: jsx(CheckIcon, { className: "size-4" }) }) }), n] });
}
function cn(t, n = 1) {
  const r = useRef(null);
  return useLayoutEffect(() => {
    const a = r.current;
    if (a) {
      const h = window.getComputedStyle(a), l = Number.parseInt(h.lineHeight, 10) || 20, i = Number.parseInt(h.paddingTop, 10) + Number.parseInt(h.paddingBottom, 10), m = l * n + i;
      a.style.height = "0px";
      const C = Math.max(a.scrollHeight, m);
      a.style.height = `${C + 2}px`;
    }
  }, [r, t, n]), r;
}
const ue = 768;
function dn() {
  const [t, n] = F.useState(void 0);
  return F.useEffect(() => {
    const r = window.matchMedia(`(max-width: ${ue - 1}px)`), a = () => {
      n(window.innerWidth < ue);
    };
    return r.addEventListener("change", a), n(window.innerWidth < ue), () => r.removeEventListener("change", a);
  }, []), !!t;
}
const { Children: un, isValidElement: mn, cloneElement: fn } = F__default, te = (t) => t.includes("gpt") ? jsx(BrainCircuit, { className: "h-5 w-5" }) : t.includes("claude") ? jsx(Bot, { className: "h-5 w-5" }) : t.includes("llama") ? jsx(Star, { className: "h-5 w-5" }) : jsx(BrainCircuit, { className: "h-5 w-5" }), Oe = { id: "gpt-4o", name: "GPT-4o", description: "Most capable model" }, Ce = createContext({}), $e = ["What's the first rule of Fight Club?", "Who is Tyler Durden?", "Where is Andrew Laeddis Hiding?", "Write a Javascript method to reverse a string", "How to assemble your own PC?", "Explain quantum computing in simple terms", "Write a short story about a robot that falls in love", "What are the ethical implications of AI?", "Design a database schema for a social media app", "Explain how blockchain works to a 5-year-old", "Create a regex for validating email addresses", "What's the difference between REST and GraphQL?", "Suggest five names for my tech startup", "How would you implement a binary search tree?", "Explain the concept of recursion with an example", "Write a haiku about coding at midnight", "What's the significance of P vs NP problem?", "How does natural language processing work?", "Explain the CAP theorem in distributed systems", "Design a simple chatbot algorithm", "What are the pros and cons of microservices?", "How would you optimize a slow-loading website?", "Explain neural networks without technical jargon", "What is technical debt and how do you manage it?", "Write a function to detect a palindrome"], hn = [{ id: "openai", name: "OpenAI", expanded: true, agents: [{ id: "gpt-4o", name: "GPT-4o", description: "Most capable agent" }, { id: "gpt-4-turbo", name: "GPT-4 Turbo", description: "Fast and powerful" }, { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", description: "Balanced performance" }] }, { id: "anthropic", name: "Anthropic", agents: [{ id: "claude-3-opus", name: "Claude 3 Opus", description: "Most powerful Claude agent" }, { id: "claude-3-sonnet", name: "Claude 3 Sonnet", description: "Balanced performance" }, { id: "claude-3-haiku", name: "Claude 3 Haiku", description: "Fast responses" }] }, { id: "meta", name: "Meta", agents: [{ id: "llama-3-70b", name: "Llama 3 70B", description: "Largest Llama agent" }, { id: "llama-3-8b", name: "Llama 3 8B", description: "Efficient performance" }] }];
function Se({ children: t, className: n, variant: r = "default", value: a, onChange: h, onSubmit: l, loading: i, onStop: m, rows: C = 1, hasMessages: f = false, onAISelect: N, onMentionSelectionChange: s }) {
  const [k, I] = useState(0), d = useRef(null), p = dn(), w = useRef(null), c = useRef(null), [x, _] = useState(/* @__PURE__ */ new Set()), [B, g] = useState(false), [L, y] = useState([Oe]), [b, v] = useState(false), [T, O] = useState(false), [E, P] = useState(null), $ = useRef([]), j = useRef(-1), [Z, le] = useState(a || ""), [Fn, at] = useState(0), [Te, Ee] = useState({ top: 0, left: 10 }), [Vn, ot] = useState([]), st = (u) => {
    if (E !== null && b) {
      if (u.key === "Enter") {
        u.preventDefault();
        return;
      } else if (u.key === "Escape") {
        u.preventDefault(), v(false), P(null), j.current = -1, s && s(false);
        return;
      }
    }
    if (u.key === "Enter" && !u.shiftKey && l) {
      if (typeof Z != "string" || Z.trim().length === 0) return;
      if (E !== null) {
        u.preventDefault();
        return;
      }
      u.preventDefault(), l();
    }
  };
  useEffect(() => {
    if (b && w.current) {
      const u = w.current.getBoundingClientRect();
      Ee({ top: u.top - 370, left: u.left + 10 });
      const S = () => {
        if (w.current) {
          const A = w.current.getBoundingClientRect();
          Ee({ top: A.top - 370, left: A.left + 10 });
        }
      };
      return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
    }
  }, [b]);
  const ce = () => {
    d.current = setInterval(() => {
      I((u) => (u + 1) % $e.length);
    }, 4e3);
  }, Re = () => {
    document.visibilityState !== "visible" && d.current ? (clearInterval(d.current), d.current = null) : document.visibilityState === "visible" && !f && ce();
  };
  useEffect(() => (f || ce(), document.addEventListener("visibilitychange", Re), () => {
    d.current && clearInterval(d.current), document.removeEventListener("visibilitychange", Re);
  }), [f]), useEffect(() => {
    f && d.current ? (clearInterval(d.current), d.current = null) : !f && !d.current && ce();
  }, [f]), useEffect(() => {
    a !== void 0 && le(a);
  }, [a]);
  const Le = [{ icon: jsx(Globe, { className: "h-4 w-4" }), label: "Web-Search", description: "Quick web look-up" }, { icon: jsx(Telescope, { className: "h-4 w-4" }), label: "Deep-Research", description: "Deep web research, on specific input" }, { icon: jsx(BrainCircuit, { className: "h-4 w-4" }), label: "Reasoning", description: "Think deeply, before answering" }], Pe = (u) => {
    _((S) => {
      const A = new Set(S);
      return A.has(u) ? A.delete(u) : A.add(u), A;
    });
  }, it = (u) => {
    O(u), v(true);
  }, ze = () => {
    T ? (O(false), y([Oe]), v(false)) : it(true);
  };
  useEffect(() => {
    if (b && E !== null) {
      const u = [];
      hn.forEach((S) => {
        const A = S.agents.filter((z) => E ? z.name.toLowerCase().includes(E.toLowerCase()) : true);
        u.push(...A.map((z) => ({ id: z.id, name: z.name, description: z.description })));
      }), ot(u), at(u.length > 0 ? 0 : -1);
    }
  }, [E, b]);
  const Be = (u) => {
    const S = [];
    let A = 0;
    for (; A < u.length; ) {
      const z = u.indexOf("@", A);
      if (z === -1) break;
      if (!(z === 0 || u[z - 1] === " ")) {
        A = z + 1;
        continue;
      }
      let H = u.indexOf(" ", z + 1);
      H === -1 && (H = u.length), S.push({ start: z, end: H, consumed: false }), A = H;
    }
    return S;
  }, lt = (u) => {
    const S = u.target.value;
    le(S), h && h(u);
    const A = Be(S);
    if ($.current = A, A.length === 0) {
      P(null), b && !T && v(false), j.current = -1, s && s(false);
      return;
    }
    const z = A[A.length - 1];
    if (z.end === S.length) {
      const H = S.slice(z.start + 1, z.end);
      P(H), j.current = A.length - 1, b || (v(true), O(false)), s && s(true);
    } else E !== null && (P(null), b && !T && v(false), j.current = -1, s && s(false));
  }, ct = (u) => {
    var _a;
    const S = { id: u.id, name: u.name, description: u.description, icon: te(u.id) };
    if (E !== null && j.current >= 0) {
      const A = $.current[j.current];
      if (A && c.current) {
        const z = Z.substring(0, A.start), W = Z.substring(A.end), H = z + `@${S.name}` + (W.startsWith(" ") ? "" : " ") + W;
        if (le(H), h && c.current) {
          const ee = (_a = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")) == null ? void 0 : _a.set;
          if (ee) {
            ee.call(c.current, H);
            const mt = new Event("input", { bubbles: true });
            c.current.dispatchEvent(mt);
          }
        }
        y([S]), v(false), P(null), j.current = -1, s && s(false);
        const ut = Be(H);
        $.current = ut, setTimeout(() => {
          if (c.current) {
            c.current.focus();
            const ee = z.length + `@${S.name} `.length;
            c.current.selectionStart = ee, c.current.selectionEnd = ee;
          }
        }, 0);
      }
    }
  }, _e = { value: Z, onChange: lt, onSubmit: l, loading: i, onStop: m, variant: r, rows: C, placeholder: f ? "Type a message..." : $e[k], hasMessages: f, onAISelect: N, onMentionSelectionChange: s }, dt = () => {
    const u = x.size;
    return p ? jsx("div", { className: "flex items-center justify-center py-3 px-2", children: jsxs(an, { open: B, onOpenChange: g, children: [jsx(on, { asChild: true, children: jsxs(D, { variant: "ghost", className: "h-8 px-4 rounded-full flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200", children: [jsx(Settings, { className: "h-4 w-4" }), jsxs("span", { className: "text-xs font-medium", children: ["Tools ", u > 0 && `(${u})`] })] }) }), jsx(sn, { align: "end", className: "w-56", onCloseAutoFocus: (S) => S.preventDefault(), children: Le.map((S, A) => jsx(ln, { checked: x.has(A), onCheckedChange: () => Pe(A), onSelect: (z) => z.preventDefault(), children: jsxs("div", { className: "flex items-center gap-2", children: [S.icon, jsx("span", { children: S.label })] }) }, S.label)) })] }) }) : jsx("div", { className: "flex flex-wrap items-center gap-2 py-3 px-2", children: Le.map((S, A) => jsxs(D, { variant: "ghost", className: `h-8 px-4 rounded-full flex items-center gap-2 ${x.has(A) ? "bg-gray-300 text-gray-800 hover:bg-gray-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`, onClick: () => Pe(A), children: [S.icon, jsx("span", { className: "text-xs font-medium", children: S.label })] }, S.label)) });
  };
  return jsx(Ce.Provider, { value: _e, children: jsxs("div", { className: "relative w-full", children: [b && jsx("div", { className: "fixed z-[999] shadow-lg", style: { top: `${Te.top}px`, left: `${Te.left}px` }, children: jsx(rn, { selectedAgents: L.map((u) => ({ id: u.id, name: u.name, description: u.description })), onSelectAgents: (u) => {
    E || y(u.map((S) => ({ id: S.id, name: S.name, description: S.description, icon: te(S.id) })));
  }, isOpen: b, onClose: () => {
    v(false), P(null), j.current = -1, s && s(false);
  }, multiSelectMode: T, maxSelections: 4, searchTerm: E || "", onAgentSelect: E !== null ? ct : void 0, keyboardNavigation: E !== null }) }), jsxs("div", { ref: w, className: M("relative", r === "default" && "flex flex-col items-end w-full p-2 rounded-2xl border border-input bg-transparent focus-within:ring-1 focus-within:ring-slate-300 focus-within:outline-none", r === "unstyled" && "flex items-start gap-2 w-full", n), children: [jsx(qe, { blur: 0, borderWidth: 1.7, spread: 25, glow: true, disabled: false, proximity: 64, inactiveZone: 0.01 }), jsxs("div", { className: "relative flex flex-col items-end w-full z-10", children: [jsxs("div", { className: "flex w-full items-end", children: [jsx(D, { type: "button", variant: "ghost", size: "icon", className: "h-10 w-10 rounded-full hover:bg-gray-100 mr-2", onClick: ze, children: te(L[0].id) }), un.map(t, (u) => {
    if (mn(u)) {
      const S = u.type;
      if (S && (S.displayName === "ChatInputTextArea" || S === ie)) return fn(u, { ref: (z) => {
        c.current = z;
        const W = u.ref;
        typeof W == "function" ? W(z) : W && "current" in W && (W.current = z);
      }, placeholder: E !== null ? "Type model name..." : _e.placeholder, onKeyDown: st });
    }
    return u;
  })] }), jsx("div", { className: "flex w-full items-center justify-between mt-2", children: jsxs("div", { className: "flex items-center gap-2", children: [T && L.length > 1 && jsxs("div", { className: "flex items-center gap-1", children: [jsx("div", { className: "flex -space-x-1", children: L.slice(0, 2).map((u, S) => jsx("div", { className: "h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center border border-white", children: u.icon || te(u.id) }, u.id)) }), jsxs("span", { className: "text-xs text-gray-500", children: [L.length, " models"] })] }), jsxs(D, { type: "button", variant: "ghost", className: M("h-8 rounded-full px-3 flex items-center gap-1.5 text-xs font-normal", T ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-gray-100 hover:bg-gray-100"), onClick: ze, children: [jsx(Split, { className: "h-4 w-4" }), jsx("span", { children: "Multiprompt" })] }), dt()] }) })] })] })] }) });
}
Se.displayName = "ChatInput";
function ie({ onSubmit: t, value: n, onChange: r, className: a, variant: h, ...l }) {
  var _a, _b;
  const i = useContext(Ce), [m, C] = useState(""), f = (_a = n != null ? n : i.value) != null ? _a : m, N = r != null ? r : i.onChange, s = t != null ? t : i.onSubmit, k = (_b = i.rows) != null ? _b : 1, I = i.placeholder || "", d = i.hasMessages || false, p = useRef(null), w = h != null ? h : i.variant === "default" ? "unstyled" : "default", c = cn(f, k), x = useCallback((g) => {
    c && (typeof c == "function" ? c(g) : "current" in c && (c.current = g)), p.current = g;
  }, [c]);
  return jsxs("div", { className: "relative w-full", children: [jsx(Xe, { ref: x, ...l, value: f, onChange: (g) => {
    N ? N(g) : C(g.target.value);
  }, onKeyDown: (g) => {
    if (s && g.key === "Enter" && !g.shiftKey) {
      if (typeof f != "string" || f.trim().length === 0) return;
      g.preventDefault(), s();
    }
  }, className: M("max-h-[400px] min-h-0 resize-none overflow-x-hidden", w === "unstyled" && "border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none", a), rows: k, placeholder: void 0 }), !f && jsx("div", { className: "absolute pointer-events-none top-0 left-0 right-0 bottom-0 flex items-center px-3 py-2", children: jsx(AnimatePresence$1, { mode: "wait", children: d ? jsx("span", { className: "text-muted-foreground truncate", children: I }) : jsx(motion$1.span, { initial: { opacity: 0, y: -5 }, animate: { opacity: 0.5, y: 0 }, exit: { opacity: 0, y: 5 }, transition: { duration: 0.3 }, className: "text-muted-foreground truncate", children: I }, I) }) })] });
}
ie.displayName = "ChatInputTextArea";
function Me({ onSubmit: t, loading: n, onStop: r, className: a, ...h }) {
  const l = useContext(Ce), i = n != null ? n : l.loading, m = r != null ? r : l.onStop, C = t != null ? t : l.onSubmit;
  if (i && m) return jsx(D, { onClick: m, className: M("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", a), ...h, children: jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-label": "Stop", children: [jsx("title", { children: "Stop" }), jsx("rect", { x: "6", y: "6", width: "12", height: "12" })] }) });
  const f = typeof l.value != "string" || l.value.trim().length === 0, N = l.audio;
  return jsxs("div", { className: "flex gap-1", children: [jsx(D, { className: M("shrink-0 rounded-full p-1.5 h-fit border dark:border-zinc-600 hover:cursor-pointer", a), disabled: f, onClick: (s) => {
    s.preventDefault(), f || (C == null ? void 0 : C());
  }, ...h, children: jsx(ArrowUpIcon, {}) }), jsx(D, { className: M("shrink-0 rounded-full p-1.5 h-fit border bg-red-500 hover:bg-red-600/95! dark:border-zinc-600 hover:cursor-pointer", a), disabled: N, onClick: (s) => {
    s.preventDefault(), f || (C == null ? void 0 : C());
  }, ...h, children: jsx(AudioLines, {}) })] });
}
Me.displayName = "ChatInputSubmit";
const Qe = F.forwardRef(({ className: t, children: n, ...r }, a) => jsxs(de.Root, { ref: a, className: M("relative overflow-hidden", t), ...r, children: [jsx(de.Viewport, { className: "h-full w-full rounded-[inherit]", children: n }), jsx(Je, {}), jsx(de.Corner, {})] }));
Qe.displayName = de.Root.displayName;
const Je = F.forwardRef(({ className: t, orientation: n = "vertical", ...r }, a) => jsx(de.ScrollAreaScrollbar, { ref: a, orientation: n, className: M("flex touch-none select-none transition-colors", n === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", n === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t), ...r, children: jsx(de.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" }) }));
Je.displayName = de.ScrollAreaScrollbar.displayName;
function pn() {
  const t = useRef(null), [n, r] = useState(false), [a, h] = useState(true), l = useRef(false), i = useRef(false), m = useRef(false), C = useRef(false), f = useCallback((d) => d == null ? void 0 : d.closest("[data-radix-scroll-area-viewport]"), []), N = useCallback((d) => {
    const { scrollTop: p, scrollHeight: w, clientHeight: c } = d;
    return Math.abs(w - p - c) < 10;
  }, []), s = useCallback((d) => {
    d && d.scrollTo({ top: d.scrollHeight, behavior: "instant" });
  }, []), k = useCallback((d) => {
    const { scrollHeight: p, clientHeight: w } = d, c = p > w, x = N(d);
    r(c && !x), i.current || h(x);
  }, [N]);
  return useEffect(() => {
    const d = t.current, p = f(d);
    if (!d || !p) return;
    s(p);
    const w = setTimeout(() => {
      l.current || (s(p), C.current = true);
    }, 200), c = new ResizeObserver(() => {
      !C.current && !l.current && s(p);
    });
    return c.observe(d), () => {
      clearTimeout(w), c.disconnect();
    };
  }, [f, s]), useEffect(() => {
    const d = t.current, p = f(d);
    if (!d || !p) return;
    k(p);
    const w = () => {
      C.current || (C.current = true), m.current || (l.current = true), i.current || k(p);
    }, c = () => {
      i.current = true, l.current = true;
    }, x = () => {
      i.current = false, k(p);
    }, _ = () => {
      i.current = true, l.current = true, setTimeout(() => {
        i.current = false, k(p);
      }, 200);
    };
    let B;
    const g = new MutationObserver(() => {
      m.current = true, window.clearTimeout(B), (a && !l.current || a && C.current && !i.current) && p.scrollTo({ top: p.scrollHeight, behavior: "instant" }), k(p), B = window.setTimeout(() => {
        m.current = false;
      }, 100);
    });
    return p.addEventListener("scroll", w, { passive: true }), p.addEventListener("touchstart", c), p.addEventListener("touchend", x), p.addEventListener("wheel", _, { passive: true }), g.observe(d, { childList: true, subtree: true, attributes: true, characterData: true }), () => {
      window.clearTimeout(B), g.disconnect(), p.removeEventListener("scroll", w), p.removeEventListener("touchstart", c), p.removeEventListener("touchend", x), p.removeEventListener("wheel", _);
    };
  }, [f, k, a]), [t, n, () => {
    const d = f(t.current);
    d && (h(true), l.current = false, d.scrollTo({ top: d.scrollHeight, behavior: m.current ? "instant" : "smooth" }));
  }];
}
function gn({ onClick: t, alignment: n = "right", className: r }) {
  return jsx(D, { variant: "secondary", size: "icon", className: M("absolute bottom-4 rounded-full shadow-lg hover:bg-secondary", { left: "left-4", center: "left-1/2 -translate-x-1/2", right: "right-4" }[n], r), onClick: t, children: jsx(ChevronDown, { className: "h-4 w-4" }) });
}
const Ie = forwardRef(({ children: t, className: n, scrollButtonAlignment: r = "right" }, a) => {
  const [h, l, i] = pn();
  return jsxs(Qe, { className: "flex-1 relative", ref: a, children: [jsx("div", { ref: h, children: jsx("div", { className: M(n, "min-h-0 z-10"), children: t }) }), l && jsx(gn, { onClick: i, alignment: r, className: "absolute bottom-4 rounded-full shadow-lg hover:bg-secondary" })] });
});
Ie.displayName = "ChatMessageArea";
atom([]);
atom();
atom();
atom([]);
const Ae = atom();
atom({});
atom(null);
atom("projects");
atom({});
atom({});
const ve = "my-4 overflow-x-auto w-fit rounded-xl text-zinc-50 bg-zinc-900 dark:bg-zinc-900 border border-border p-4", xe = (t) => typeof t == "string" ? t : Array.isArray(t) ? t.map(xe).join("") : isValidElement(t) ? xe(t.props.children) : "", Ye = memo(async ({ children: t, className: n, language: r, ...a }) => {
  const { codeToTokens: h, bundledLanguages: l } = await import('shiki'), i = xe(t);
  if (!(r in l)) return jsx("pre", { ...a, className: M(ve, n), children: jsx("code", { className: "whitespace-pre-wrap", children: t }) });
  const { tokens: m } = await h(i, { lang: r, themes: { light: "github-dark", dark: "github-light" } });
  return jsx("pre", { ...a, className: M(ve, n), children: jsx("code", { className: "whitespace-pre-wrap", children: m.map((C, f) => jsxs("span", { children: [C.map((N, s) => {
    const k = typeof N.htmlStyle == "string" ? void 0 : N.htmlStyle;
    return jsx("span", { style: k, children: N.content }, `token-${s}`);
  }), f !== m.length - 1 && `
`] }, `line-${f}`)) }) });
});
Ye.displayName = "HighlightedPre";
const Ze = ({ children: t, language: n, className: r, ...a }) => jsx(Suspense, { fallback: jsx("pre", { ...a, className: M(ve, r), children: jsx("code", { className: "whitespace-pre-wrap", children: t }) }), children: jsx(Ye, { language: n, ...a, children: t }) });
Ze.displayName = "CodeBlock";
const bn = { h1: ({ children: t, ...n }) => jsx("h1", { className: "mt-2 scroll-m-20 text-4xl font-bold", ...n, children: t }), h2: ({ children: t, ...n }) => jsx("h2", { className: "mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", ...n, children: t }), h3: ({ children: t, ...n }) => jsx("h3", { className: "mt-4 scroll-m-20 text-xl font-semibold tracking-tight", ...n, children: t }), h4: ({ children: t, ...n }) => jsx("h4", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...n, children: t }), h5: ({ children: t, ...n }) => jsx("h5", { className: "mt-4 scroll-m-20 text-lg font-semibold tracking-tight", ...n, children: t }), h6: ({ children: t, ...n }) => jsx("h6", { className: "mt-4 scroll-m-20 text-base font-semibold tracking-tight", ...n, children: t }), p: ({ children: t, ...n }) => jsx("p", { className: "leading-6 [&:not(:first-child)]:mt-4", ...n, children: t }), strong: ({ children: t, ...n }) => jsx("span", { className: "font-semibold", ...n, children: t }), a: ({ children: t, ...n }) => jsx("a", { className: "font-medium underline underline-offset-4", target: "_blank", rel: "noreferrer", ...n, children: t }), ol: ({ children: t, ...n }) => jsx("ol", { className: "my-4 ml-6 list-decimal", ...n, children: t }), ul: ({ children: t, ...n }) => jsx("ul", { className: "my-4 ml-6 list-disc", ...n, children: t }), li: ({ children: t, ...n }) => jsx("li", { className: "mt-2", ...n, children: t }), blockquote: ({ children: t, ...n }) => jsx("blockquote", { className: "mt-4 border-l-2 pl-6 italic", ...n, children: t }), hr: (t) => jsx("hr", { className: "my-4 md:my-8", ...t }), table: ({ children: t, ...n }) => jsx("div", { className: "my-6 w-full overflow-y-auto", children: jsx("table", { className: "relative w-full overflow-hidden border-none text-sm", ...n, children: t }) }), tr: ({ children: t, ...n }) => jsx("tr", { className: "last:border-b-none m-0 border-b", ...n, children: t }), th: ({ children: t, ...n }) => jsx("th", { className: "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", ...n, children: t }), td: ({ children: t, ...n }) => jsx("td", { className: "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", ...n, children: t }), img: ({ alt: t, ...n }) => jsx("img", { className: "rounded-md", alt: t, ...n }), code: ({ children: t, node: n, className: r, ...a }) => {
  const h = /language-(\w+)/.exec(r || "");
  return h ? jsx(Ze, { language: h[1], className: r, ...a, children: t }) : jsx("code", { className: M("rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", r), ...a, children: t });
}, pre: ({ children: t }) => jsx(Fragment, { children: t }) };
function vn(t) {
  return t ? marked.lexer(t).map((r) => r.raw) : [];
}
const et = memo(({ content: t, className: n }) => jsx(rr, { remarkPlugins: [sr], components: bn, className: n, children: t }), (t, n) => t.content === n.content);
et.displayName = "MemoizedMarkdownBlock";
const ye = memo(({ content: t, id: n, className: r }) => useMemo(() => vn(t || ""), [t]).map((h, l) => jsx(et, { content: h, className: r }, `${n}-block_${l}`)));
ye.displayName = "MarkdownContent";
const xn = ({ children: t, url: n, className: r, width: a = 200, height: h = 125, isStatic: l = false, imageSrc: i = "" }) => {
  let m;
  l ? m = i : m = `https://api.microlink.io/?${encode({ url: n, screenshot: true, meta: false, embed: "screenshot.url", colorScheme: "dark", "viewport.isMobile": true, "viewport.deviceScaleFactor": 1, "viewport.width": a * 3, "viewport.height": h * 3 })}`;
  const [C, f] = F__default.useState(false), [N, s] = F__default.useState(false);
  F__default.useEffect(() => {
    s(true);
  }, []);
  const k = { stiffness: 100, damping: 15 }, I = useMotionValue(0), d = useSpring(I, k), p = (w) => {
    const c = w.target.getBoundingClientRect(), _ = (w.clientX - c.left - c.width / 2) / 2;
    I.set(_);
  };
  return jsxs(Fragment, { children: [N ? jsx("div", { className: "hidden", children: jsx("img", { src: m, width: a, height: h, alt: "hidden image" }) }) : null, jsxs(We.Root, { openDelay: 50, closeDelay: 100, onOpenChange: (w) => {
    f(w);
  }, children: [jsx(We.Trigger, { onMouseMove: p, className: M("text-black dark:text-white", r), href: n, target: "_blank", rel: "noopener noreferrer", children: t }), jsx(We.Content, { className: "[transform-origin:var(--radix-hover-card-content-transform-origin)]", side: "top", align: "center", sideOffset: 10, children: jsx(AnimatePresence, { children: C && jsx(motion.div, { initial: { opacity: 0, y: 20, scale: 0.6 }, animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } }, exit: { opacity: 0, y: 20, scale: 0.6 }, className: "shadow-xl rounded-xl", style: { x: d }, children: jsx(Link, { to: n, className: "block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800", style: { fontSize: 0 }, target: "_blank", rel: "noopener noreferrer", children: jsx("img", { src: l ? i : m, width: a, height: h, className: "rounded-lg", alt: "preview image" }) }) }) }) })] })] });
}, yn = cva("flex gap-4 w-full", { variants: { variant: { default: "", bubble: "", full: "p-5" }, type: { incoming: "justify-start mr-auto", outgoing: "justify-end ml-auto" } }, compoundVariants: [{ variant: "full", type: "outgoing", className: "bg-muted" }, { variant: "full", type: "incoming", className: "bg-background" }], defaultVariants: { variant: "default", type: "incoming" } }), tt = F__default.createContext(null), nt = () => F__default.useContext(tt), we = F__default.forwardRef(({ className: t, variant: n = "default", type: r = "incoming", id: a, children: h, ...l }, i) => jsx(tt.Provider, { value: { variant: n, type: r, id: a }, children: jsx("div", { ref: i, className: M(yn({ variant: n, type: r, className: t })), ...l, children: h }) }));
we.displayName = "ChatMessage";
const wn = cva("w-8 h-8 flex items-center rounded-full justify-center ring-1 shrink-0 bg-transparent overflow-hidden", { variants: { type: { incoming: "ring-border", outgoing: "ring-muted-foreground/30" } }, defaultVariants: { type: "incoming" } }), Ne = F__default.forwardRef(({ className: t, icon: n, imageSrc: r, ...a }, h) => {
  var _a, _b;
  const i = (_b = (_a = nt()) == null ? void 0 : _a.type) != null ? _b : "incoming", m = n != null ? n : i === "incoming" ? jsx(SparklesIcon, {}) : jsx(UserIcon, {});
  return jsx("div", { ref: h, className: M(wn({ type: i, className: t })), ...a, children: r ? jsx("img", { src: r, alt: "Avatar", className: "h-full w-full object-cover" }) : jsx("div", { className: "translate-y-px [&_svg]:size-4 [&_svg]:shrink-0", children: m }) });
});
Ne.displayName = "ChatMessageAvatar";
const Nn = cva("flex flex-col gap-2", { variants: { variant: { default: "", bubble: "rounded-xl px-3 py-2", full: "" }, type: { incoming: "", outgoing: "" } }, compoundVariants: [{ variant: "bubble", type: "incoming", className: "bg-secondary text-secondary-foreground" }, { variant: "bubble", type: "outgoing", className: "bg-primary text-primary-foreground" }], defaultVariants: { variant: "default", type: "incoming" } }), kn = () => jsxs("div", { className: "relative overflow-hidden", children: [jsx("span", { className: "text-sm text-muted-foreground", children: "View thinking process" }), jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" })] }), ke = F__default.forwardRef(({ className: t, content: n, id: r, showCursor: a = false, reasoning: h = "", isReasoning: l = false, sources: i = [], children: m, ...C }, f) => {
  var _a, _b, _c;
  const N = nt(), [s, k] = F__default.useState(false), I = (_a = N == null ? void 0 : N.variant) != null ? _a : "default", d = (_b = N == null ? void 0 : N.type) != null ? _b : "incoming", p = (_c = r != null ? r : N == null ? void 0 : N.id) != null ? _c : "";
  return jsxs("div", { ref: f, className: M(Nn({ variant: I, type: d, className: t })), ...C, children: [h && h.length > 0 && jsxs("div", { className: "w-full mt-2 border rounded-md overflow-hidden", children: [jsxs("button", { type: "button", onClick: () => k(!s), className: "w-full flex items-center justify-between px-3 py-4 text-sm text-muted-foreground bg-[#F8FAFC] hover:cursor-pointer transition-colors", children: [jsx("span", { children: n === "" ? jsx(kn, {}) : "View thinking process" }), jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: `h-4 w-4 shrink-0 transition-transform duration-200 ${s ? "rotate-180" : ""}`, children: jsx("path", { d: "m6 9 6 6 6-6" }) })] }), s && jsx("div", { className: "bg-[#F8FAFC] px-3 py-4 text-sm whitespace-pre-wrap", children: jsx(ye, { id: `${p}-reasoning`, content: h }) })] }), n.length > 0 && jsxs(Fragment, { children: [jsx(ye, { id: p, content: n }), a && jsx("span", { className: "ml-1 inline-block h-4 w-2 animate-pulse bg-current" })] }), i && i.length > 0 && jsxs("div", { className: "mt-3 border-t pt-2 text-sm", children: [jsx("p", { className: "font-medium text-muted-foreground mb-2", children: "Sources:" }), jsx("div", { className: "space-y-2", children: i.map((w, c) => jsxs("div", { className: "flex items-start gap-2", children: [jsxs("span", { className: "text-xs text-muted-foreground mt-1", children: ["[", c + 1, "]"] }), jsx(xn, { url: w.url, className: "text-primary hover:underline flex-1", children: w.title || w.url })] }, w.id)) })] }), m] });
});
ke.displayName = "ChatMessageContent";
function Cn({ ...t }) {
  return jsx(a.Root, { "data-slot": "sheet", ...t });
}
function Sn({ ...t }) {
  return jsx(a.Close, { "data-slot": "sheet-close", ...t });
}
function Mn({ ...t }) {
  return jsx(a.Portal, { "data-slot": "sheet-portal", ...t });
}
function In({ className: t, ...n }) {
  return jsx(a.Overlay, { "data-slot": "sheet-overlay", className: M("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/10", t), ...n });
}
function An({ className: t, children: n, side: r = "right", ...a$1 }) {
  return jsxs(Mn, { children: [jsx(In, {}), jsxs(a.Content, { "data-slot": "sheet-content", className: M("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", r === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", r === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", r === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", r === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", t), ...a$1, children: [n, jsxs(a.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [jsx(XIcon, { className: "size-4" }), jsx("span", { className: "sr-only", children: "Close" })] })] })] });
}
function Tn({ className: t, ...n }) {
  return jsx("div", { "data-slot": "sheet-header", className: M("flex flex-col gap-1.5 p-4", t), ...n });
}
function En({ className: t, ...n }) {
  return jsx(a.Title, { "data-slot": "sheet-title", className: M("text-foreground font-semibold tracking-tight", t), ...n });
}
function Rn({ delayDuration: t = 0, ...n }) {
  return jsx(fe$1.Provider, { "data-slot": "tooltip-provider", delayDuration: t, ...n });
}
function me({ ...t }) {
  return jsx(Rn, { children: jsx(fe$1.Root, { "data-slot": "tooltip", ...t }) });
}
function fe({ ...t }) {
  return jsx(fe$1.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function he({ className: t, sideOffset: n = 4, children: r, ...a }) {
  return jsx(fe$1.Portal, { children: jsxs(fe$1.Content, { "data-slot": "tooltip-content", sideOffset: n, className: M("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs", t), ...a, children: [r, jsx(fe$1.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] }) });
}
function Ln({ onReact: t, onReply: n, onEdit: r, className: a, messageData: h }) {
  const [l, i] = useState(false), m = useRef(null), C = useRef(null), f = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F389}", "\u{1F64C}", "\u{1F440}"], N = (s) => {
    t && t(s), i(false);
  };
  return useEffect(() => {
    const s = (k) => {
      m.current && !m.current.contains(k.target) && C.current && !C.current.contains(k.target) && i(false);
    };
    return document.addEventListener("mousedown", s), () => {
      document.removeEventListener("mousedown", s);
    };
  }, []), jsxs("div", { className: `relative w-[7.5rem] ${a}`, children: [jsxs("div", { className: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm flex items-center px-1 relative", children: [jsxs(me, { children: [jsx(fe, { asChild: true, children: jsx("button", { ref: C, className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: () => i(!l), "aria-label": "Add reaction", children: jsx(Smile, { className: "h-5 w-5" }) }) }), jsx(he, { sideOffset: 8, children: "Add reaction" })] }), jsxs(me, { children: [jsx(fe, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: n, "aria-label": "Reply", children: jsx(MessageSquare, { className: "h-5 w-5" }) }) }), jsx(he, { sideOffset: 8, children: "Reply" })] }), jsxs(me, { children: [jsx(fe, { asChild: true, children: jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400", onClick: r, "aria-label": "Edit", children: jsx(Edit, { className: "h-5 w-5" }) }) }), jsx(he, { sideOffset: 8, children: "Edit" })] })] }), l && jsx("div", { ref: m, className: "absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-2 z-10", children: jsx("div", { className: "flex gap-1", children: f.map((s, k) => jsx("button", { onClick: () => N(s), className: "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full text-lg", children: s }, k)) }) })] });
}
const pe = ({ messageData: t, isLastChunk: n = true, userID: r, userImage: a, onReply: h, chatroom: l }) => {
  var _a, _b;
  const [i, m] = useState(false), C = t.data.senderId === r, [f] = useAtom(Ae), N = (f == null ? void 0 : f.members.length) !== 1;
  if (!C) {
    const s = (_b = (_a = l == null ? void 0 : l.members) == null ? void 0 : _a.find((k) => k.user.id === t.data.senderId)) == null ? void 0 : _b.user.image;
    return jsxs("div", { className: `relative group py-3 ${N ? "hover:bg-gray-100 px-2 rounded-lg" : ""} `, onMouseEnter: () => m(true), onMouseLeave: () => m(false), children: [jsxs(we, { id: t.data.id || t.identifier, className: "w-full overflow-hidden", children: [jsx(Ne, { icon: t.data.isAiGenerated ? jsx(SparklesIcon, {}) : jsx(UserIcon, {}), imageSrc: t.data.isAiGenerated ? void 0 : s, className: "flex-shrink-0" }), jsx(ke, { content: t.data.content, showCursor: !n && t.data.isAiGenerated, reasoning: t.data.reasoning, isReasoning: !!t.data.reasoning && t.data.reasoning.length > 0, sources: t.data.sources, className: "break-words overflow-hidden" })] }, t.data.id || t.identifier), N && jsx("div", { className: `absolute -top-7 -right-2 transition-opacity duration-200 ${i ? "opacity-100" : "opacity-0"}`, children: jsx(Ln, { messageData: t, onReply: h }) })] });
  }
  return jsx("div", { className: "relative group py-2", onMouseEnter: () => m(true), onMouseLeave: () => m(false), children: jsxs(we, { id: t.data.id || t.identifier, variant: "bubble", type: "outgoing", className: "w-full overflow-hidden", children: [jsx(ke, { content: t.data.content, sources: t.data.sources, className: "break-words overflow-hidden" }), a && jsx(Ne, { imageSrc: a, className: "flex-shrink-0" })] }, t.data.id || t.identifier) });
}, Pn = ({ message: t, userID: n, userImage: r$1, stream: a, allMessages: h = [] }) => {
  const [l, i] = useState(false), [m, C] = useState(""), [f, N] = useState(false), [s] = useAtom(Ae), k = t.data.id || t.identifier, I = useMemo(() => h.filter((g) => g.data.parentMessageId === k).map((g) => g.data), [h, k]), d = I.length > 0, w = !!!t.data.parentMessageId && (d || t.data.isThreadStarter), c = async () => {
    if (!(!m.trim() || !s || f)) {
      N(true);
      try {
        const g = k, L = v4();
        if (a) await a.send({ data: { chatroomId: s.id, parentMessageId: g, isAiGenerated: false, senderId: n, content: m.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: L, isLastChunk: true, startIndex: 0, totalChunks: 1 });
        else {
          const b = await r().chats.chat({ userId: n, chatroomId: s.id });
          await b.send({ data: { chatroomId: s.id, parentMessageId: g, isAiGenerated: false, senderId: n, content: m.trim(), attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: L, isLastChunk: true, startIndex: 0, totalChunks: 1 }), b.close();
        }
        C("");
      } catch (g) {
        console.error("Error sending reply:", g), toast.error("Failed to send reply. Please try again.");
      } finally {
        N(false);
      }
    }
  }, x = () => {
    var _a, _b;
    const g = I[I.length - 1], L = I.length, [y, b] = useState(false), [v, T] = useState(false), O = useMemo(() => {
      const E = new Set(I.map((P) => P.senderId));
      return Array.from(E).map((P) => {
        var _a2, _b2;
        const $ = (_a2 = s == null ? void 0 : s.members) == null ? void 0 : _a2.find((j) => j.user.id === P);
        return { id: P, isAi: ((_b2 = I.find((j) => j.senderId === P)) == null ? void 0 : _b2.isAiGenerated) || false, name: ($ == null ? void 0 : $.user.name) || "User", image: $ == null ? void 0 : $.user.image };
      });
    }, [I, s]);
    return jsxs(D, { variant: "ghost", size: "sm", className: "w-full sm:w-[90%] md:w-[80%] flex items-center justify-start gap-1 py-1 text-xs text-muted-foreground bg-white relative", onClick: () => i(true), onMouseEnter: () => {
      b(true), T(true);
    }, onMouseLeave: () => {
      b(false), T(false);
    }, children: [jsxs("div", { className: "flex items-center min-w-[80px] z-10", children: [jsx(MessageSquareIcon, { size: 12, className: "mr-1" }), jsxs("span", { children: [L, " ", L === 1 ? "reply" : "replies"] })] }), jsxs("div", { className: "relative h-6 flex-1 overflow-hidden", children: [jsxs("div", { className: `absolute left-0 flex transition-all duration-500 ease-in-out ${v ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"}`, children: [O.slice(0, 3).map((E, P) => jsx("div", { className: "w-6 h-6 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: E.isAi ? jsx(SparklesIcon, { size: 12 }) : E.image ? jsx("img", { src: E.image, className: "w-6 h-6 rounded-md", alt: "user" }) : jsx(UserIcon, { size: 12 }) }, P)), O.length > 3 && jsx("div", { className: "w-5 h-5 rounded-md flex items-center justify-center ml-2 bg-gray-100", children: jsxs("span", { className: "text-xs", children: ["+", O.length - 3] }) })] }), jsx("div", { className: `absolute left-0 h-6 flex items-center transition-all duration-500 ease-in-out ${v ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"}`, children: jsxs("div", { className: "ml-2 flex items-center w-full overflow-hidden", children: [(g == null ? void 0 : g.isAiGenerated) ? jsx(SparklesIcon, { size: 12, className: "flex-shrink-0" }) : (() => {
      var _a2;
      const E = (_a2 = s == null ? void 0 : s.members) == null ? void 0 : _a2.find(($) => $.user.id === (g == null ? void 0 : g.senderId)), P = E == null ? void 0 : E.user.image;
      return P ? jsx("img", { src: P, className: "w-6 h-6 rounded-md flex-shrink-0", alt: (E == null ? void 0 : E.user.name) || "User" }) : jsx(UserIcon, { size: 12, className: "flex-shrink-0" });
    })(), g && jsxs("span", { className: "ml-2 truncate text-muted-foreground/70 w-full max-w-[calc(100%-24px)]", children: [((_a = g.content) == null ? void 0 : _a.substring(0, 70)) || "", ((_b = g.content) == null ? void 0 : _b.length) > 70 ? "..." : ""] })] }) })] }), jsx(ChevronRight, { className: `ml-auto transition-all duration-300 ease-in-out z-10 ${y ? "opacity-100 text-black" : "opacity-0"}` })] });
  }, _ = useRef(t.data.content);
  useEffect(() => {
    _.current = t.data.content;
  }, [t.data.content]);
  const B = () => {
    i(true);
  };
  return jsxs("div", { className: `relative w-full ${d ? "hover:bg-gray-100 px-2 rounded-lg" : ""}`, children: [jsx(pe, { messageData: { ...t, data: { ...t.data, content: _.current } }, isLastChunk: t.isLastChunk, userID: n, userImage: r$1, onReply: B, chatroom: s }), w && jsx("div", { className: "pl-4 sm:pl-8 pb-1", children: jsx(x, {}) }), jsx(Cn, { open: l, onOpenChange: i, children: jsxs(An, { side: "right", className: "p-0 flex flex-col w-full sm:min-w-[600px] md:min-w-[750px] lg:min-w-[800px] xl:min-w-[900px] max-w-[95vw]", children: [jsx(Tn, { className: "px-3 sm:px-4 py-3 border-b sticky top-0 bg-white z-10", children: jsxs("div", { className: "flex justify-between items-center", children: [jsx(En, { className: "text-base sm:text-lg", children: d ? `Thread (${I.length} ${I.length === 1 ? "reply" : "replies"})` : "Reply to message" }), jsx(Sn, { className: "hover:cursor-pointer" })] }) }), jsxs("div", { className: "flex-1 flex flex-col h-[calc(100vh-140px)] overflow-hidden", children: [jsx(Ie, { scrollButtonAlignment: "right", className: "flex-1 px-1 sm:px-2 py-4", children: jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "w-full border-b border-gray-200 mb-6 p-2 sm:p-3 hover:bg-gray-100", style: { maxWidth: "95%" }, children: jsx(pe, { messageData: { ...t, data: { ...t.data, content: _.current } }, isLastChunk: t.isLastChunk, userID: n, userImage: r$1, onReply: B, chatroom: s }) }), I.map((g) => jsx("div", { className: "w-full border-b border-gray-200 mb-4 hover:bg-gray-100 p-2 sm:p-3", style: { maxWidth: "95%" }, children: jsx(pe, { messageData: { identifier: g.id, data: g, startIndex: 0, totalChunks: 1, isLastChunk: true }, isLastChunk: true, userID: n, userImage: r$1, onReply: B, chatroom: s }) }, g.id))] }) }), jsx("div", { className: "p-2 sm:p-3 border-t mt-auto bg-white", children: jsxs(Se, { value: m, onChange: (g) => C(g.target.value), onSubmit: c, hasMessages: true, children: [jsx(ie, { placeholder: f ? "Sending..." : "Reply in thread...", autoFocus: true, disabled: f, onKeyDown: (g) => {
    g.key === "Enter" && !g.shiftKey && (g.preventDefault(), c());
  } }), jsx(Me, { disabled: !m.trim() || f })] }) })] })] }) })] });
};
function zn(t, n) {
  return t.members.find((r) => r.user.id === n);
}
const Bn = J("app_routes_authed_layout_chat_chatroomId_tsx--fetchChatroomWithMessages_createServerFn_handler", "/_server", (t, n) => rt.__executeServer(t, n)), rt = createServerFn().validator((t) => t).handler(Bn, async ({ data: t }) => {
  const { data: n } = await a$1().chatrooms.getChatroom(t.chatroomId);
  return { chatroom: n };
}), je = createFileRoute("/_authed/_layout/chat/$chatroomId")({ params: z.object({ chatroomId: z.string() }), beforeLoad: async (t) => {
  const { chatroomId: n } = t.params;
  return { chatroom: (await rt({ data: { chatroomId: n } })).chatroom };
}, component: _n });
function _n({ className: t, ...n }) {
  const { userId: r$1, chatroom: a } = je.useRouteContext(), { chatroomId: h } = je.useParams(), l = useRef(void 0), [i, m] = useState(false), [C, f] = useState([]), [N, s] = useState(""), k = useSetAtom(Ae), I = useRef(null), d = async (c) => {
    if (!(i || !N.trim() && !c)) try {
      if (!l.current && (await p(a.id), !l.current)) {
        console.error("Couldn't establish chat connection");
        return;
      }
      await l.current.send({ data: { chatroomId: a.id || "", parentMessageId: null, isThreadStarter: false, senderId: r$1, content: c || N, attachments: [], isReasoning: false, reasoning: "", sources: [] }, identifier: v4(), isLastChunk: true, startIndex: 0, totalChunks: 1 }), s("");
    } catch (x) {
      console.error("Error sending message:", x);
    }
  };
  useEffect(() => {
    var _a;
    if (k(a), ((_a = a.messages) == null ? void 0 : _a.length) > 0) {
      const c = a.messages.map((x) => ({ identifier: x.id, data: x, startIndex: 0, totalChunks: 1, isLastChunk: true }));
      f(c);
    } else f([]);
    return p(a.id), () => {
      l.current && l.current.close();
    };
  }, [h]);
  const p = async (c) => {
    l.current && l.current.close(), m(true);
    try {
      l.current = await r().chats.chat({ userId: r$1, chatroomId: c || c || "" }), l.current.socket.on("close", () => {
        console.log("Socket closed, will attempt to reconnect if needed");
      }), l.current.socket.on("open", async () => {
        m(false);
        const x = localStorage.getItem("pendingMessage");
        x && (await d(x), localStorage.removeItem("pendingMessage"));
      });
      for await (const x of l.current) f((_) => {
        const B = _.findIndex((L) => L.identifier === x.identifier);
        if (x.identifier.startsWith("parent-")) return _;
        if (B >= 0) {
          const L = [..._], y = L[B];
          if (x.isLastChunk) L[B] = x;
          else {
            const b = x.startIndex <= 1, v = { ...y, data: { ...y.data, content: b ? x.data.content : y.data.content + x.data.content, reasoning: b ? x.data.reasoning || "" : (y.data.reasoning || "") + (x.data.reasoning || ""), sources: x.data.sources ? [...y.data.sources || [], ...x.data.sources.filter((T) => !(y.data.sources || []).some((O) => O.id === T.id))] : y.data.sources }, isLastChunk: x.isLastChunk, totalChunks: x.totalChunks, startIndex: x.startIndex };
            L[B] = v;
          }
          return L;
        } else return [..._, x];
      });
    } catch (x) {
      console.error("Error connecting to chat:", x), m(false);
    }
  }, w = jsxs(Se, { value: N, onChange: (c) => s(c.target.value), onSubmit: d, hasMessages: C.length > 0, children: [jsx(ie, { placeholder: i ? "Connecting..." : "Type a message...", autoFocus: true, disabled: i, onKeyDown: (c) => {
    c.key === "Enter" && !c.shiftKey && (c.preventDefault(), d());
  } }), jsx(Me, { disabled: i || !N.trim() })] });
  return jsxs("div", { className: "flex-1 flex flex-col h-full", ...n, children: [jsx(Ie, { scrollButtonAlignment: "center", className: "flex-1 overflow-y-auto", children: jsxs("div", { className: "max-w-4xl mx-auto w-full px-4 py-8 space-y-4", children: [C.filter((c) => !c.data.parentMessageId).map((c) => {
    var _a;
    return jsx(Pn, { message: c, userID: r$1, userImage: (_a = zn(a, c.data.senderId)) == null ? void 0 : _a.user.image, stream: l.current, allMessages: C }, c.identifier || c.data.id);
  }), jsx("div", { ref: I })] }) }), jsx("div", { className: "px-2 py-4 max-w-4xl mx-auto w-full", children: w })] });
}

export { Bn as fetchChatroomWithMessages_createServerFn_handler };
//# sourceMappingURL=_chatroomId-DV9np5Ye.mjs.map
