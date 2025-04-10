import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet, useNavigate, Link } from '@tanstack/react-router';
import { G as Ge, k as ks, R as Rs, y as ya, f as ns, r as ra$1, h as la$1, j as v, P as Ps, A as As, o as di, p as ui, E as Ee, _ as _e, O, q as Oe, s as pa$1, $ as $r, t as ta$1, w as gs, x as ys, z as vs, B as ni, C as ii, D as ci, F as ai, H as li, I as ri, J as oi, K as wt$1, L as Bs, M as Js, N as Ks, S as pi, W as Ws, U as zr, V as mi, X as hi, Y as si, Z as Ct$1, a0 as dt, a1 as te, e as ee, a2 as Nt$1, a3 as ge } from '../nitro/nitro.mjs';
import * as F from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { SquarePen, PanelLeftIcon, ChevronDown, Factory, Users, Settings, Server, Plus, ChevronLeft, ChevronRight, ChevronUp, Briefcase, MessageSquare, ChevronsUpDown, Sparkles, BadgeCheck, CreditCard, Bell, LogOut, Check, PlusCircle, X, BriefcaseIcon, Search, FolderOpen, Folder } from 'lucide-react';
import * as ot from '@radix-ui/react-separator';
import { useAtomValue, useSetAtom, useAtom } from 'jotai';
import { toast } from 'sonner';
import { b, h, f, p, u, y, g, v as v$1 } from './dialog-CqF9cN5d.mjs';
import { d } from './checkbox-9fEplYbK.mjs';
import { v4 } from 'uuid';
import { Command } from 'cmdk';
import { i, n, f as f$1 } from './avatar-BAkCClnt.mjs';
import { u as u$1 } from './useSignOut-hVi5Ju03.mjs';
import { AvatarImage } from '@radix-ui/react-avatar';
import { createServerFn } from '@tanstack/start-client-core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:url';
import '@tanstack/router-core';
import 'tiny-invariant';
import '@tanstack/start-server-core';
import 'zod';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-label';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'input-otp';
import '@radix-ui/react-select';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-radio-group';
import '@radix-ui/react-scroll-area';
import 'framer-motion';
import 'motion/react';
import '@radix-ui/react-dropdown-menu';
import 'marked';
import 'react-markdown';
import 'remark-gfm';
import '@radix-ui/react-hover-card';
import 'qss';
import '@radix-ui/react-dialog';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import '@radix-ui/react-checkbox';

function Pe({ className: r, orientation: s = "horizontal", decorative: n = true, ...d }) {
  return jsx(ot.Root, { "data-slot": "separator-root", decorative: n, orientation: s, className: v("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", r), ...d });
}
const xt = "sidebar_state", Nt = 60 * 60 * 24 * 7, wt = "16rem", Ct = "18rem", yt = "3rem", It = "b", ea = F.createContext(null);
function oe() {
  const r = F.useContext(ea);
  if (!r) throw new Error("useSidebar must be used within a SidebarProvider.");
  return r;
}
const De = F.forwardRef(({ defaultOpen: r = true, open: s, onOpenChange: n, className: d, style: u, children: I, ...m }, N) => {
  const C = ra$1(), [c, M] = F.useState(false), [w, b] = F.useState(r), l = s != null ? s : w, h = F.useCallback((y) => {
    const T = typeof y == "function" ? y(l) : y;
    n ? n(T) : b(T), document.cookie = `${xt}=${T}; path=/; max-age=${Nt}`;
  }, [n, l]), x = F.useCallback(() => C ? M((y) => !y) : h((y) => !y), [C, h, M]);
  F.useEffect(() => {
    const y = (T) => {
      T.key === It && (T.metaKey || T.ctrlKey) && (T.preventDefault(), x());
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [x]);
  const g = l ? "expanded" : "collapsed", $ = F.useMemo(() => ({ state: g, open: l, setOpen: h, isMobile: C, openMobile: c, setOpenMobile: M, toggleSidebar: x }), [g, l, h, C, c, M, x]);
  return jsx(ea.Provider, { value: $, children: jsx(la$1, { delayDuration: 0, children: jsx("div", { "data-slot": "sidebar-wrapper", style: { "--sidebar-width": wt, "--sidebar-width-icon": yt, ...u }, className: v("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", d), ref: N, ...m, children: I }) }) });
});
De.displayName = "SidebarProvider";
function St({ side: r = "left", variant: s = "sidebar", collapsible: n = "offcanvas", className: d, children: u, ...I }) {
  const { isMobile: m, state: N, openMobile: C, setOpenMobile: c } = oe();
  return n === "none" ? jsx("div", { "data-slot": "sidebar", className: v("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", d), ...I, children: u }) : m ? jsxs(Bs, { open: C, onOpenChange: c, ...I, children: [jsxs(Js, { className: "sr-only", children: [jsx(Ks, { children: "Sidebar" }), jsx(pi, { children: "Displays the mobile sidebar." })] }), jsx(Ws, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: { "--sidebar-width": Ct }, side: r, children: jsx("div", { className: "flex h-full w-full flex-col", children: u }) })] }) : jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": N, "data-collapsible": N === "collapsed" ? n : "", "data-variant": s, "data-side": r, "data-slot": "sidebar", children: [jsx("div", { className: v("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", s === "floating" || s === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), jsx("div", { className: v("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", r === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", s === "floating" || s === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", d), ...I, children: jsx("div", { "data-sidebar": "sidebar", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: u }) })] });
}
function aa({ className: r, onClick: s, ...n }) {
  const { toggleSidebar: d } = oe();
  return jsxs(O, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: v("h-7 w-7", r), onClick: (u) => {
    s == null ? void 0 : s(u), d();
  }, ...n, children: [jsx(PanelLeftIcon, {}), jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] });
}
function Tt({ className: r, ...s }) {
  const { toggleSidebar: n } = oe();
  return jsx("button", { "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: n, title: "Toggle Sidebar", className: v("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", r), ...s });
}
function ta({ className: r, ...s }) {
  return jsx("main", { "data-slot": "sidebar-inset", className: v("bg-background relative flex min-h-svh flex-1 flex-col", "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", r), ...s });
}
function jt({ className: r, ...s }) {
  return jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: v("flex flex-col gap-2 p-2", r), ...s });
}
function kt({ className: r, ...s }) {
  return jsx("div", { "data-slot": "sidebar-footer", "data-sidebar": "footer", className: v("flex flex-col gap-2 p-2", r), ...s });
}
function Mt({ className: r, ...s }) {
  return jsx(Pe, { "data-slot": "sidebar-separator", "data-sidebar": "separator", className: v("bg-sidebar-border mx-2 w-auto", r), ...s });
}
function Pt({ className: r, ...s }) {
  return jsx("div", { "data-slot": "sidebar-content", "data-sidebar": "content", className: v("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", r), ...s });
}
function ie({ className: r, ...s }) {
  return jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: v("relative flex w-full min-w-0 flex-col p-2", r), ...s });
}
function ne({ className: r, asChild: s = false, ...n }) {
  return jsx(s ? Slot : "div", { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: v("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", r), ...n });
}
function Z({ className: r, ...s }) {
  return jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: v("flex w-full min-w-0 flex-col gap-1", r), ...s });
}
function q({ className: r, ...s }) {
  return jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: v("group/menu-item relative", r), ...s });
}
const Dt = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", { variants: { variant: { default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground", outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]" }, size: { default: "h-8 text-sm", sm: "h-7 text-xs", lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!" } }, defaultVariants: { variant: "default", size: "default" } });
function K({ asChild: r = false, isActive: s = false, variant: n = "default", size: d = "default", tooltip: u, className: I, ...m }) {
  const N = r ? Slot : "button", { isMobile: C, state: c } = oe(), M = jsx(N, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": d, "data-active": s, className: v(Dt({ variant: n, size: d }), I), ...m });
  return u ? (typeof u == "string" && (u = { children: u }), jsxs(Ee, { children: [jsx(_e, { asChild: true, children: M }), jsx(Oe, { side: "right", align: "center", hidden: c !== "collapsed" || C, ...u })] })) : M;
}
function At({ items: r, className: s }) {
  const n = useNavigate(), [d, u] = useAtom(mi), [I, m] = useAtom(hi), [N, C] = F.useState(false), [c, M] = F.useState(null), [w, b] = useAtom(Ps), [l, h] = useAtom(As), [x, g] = useAtom(Ge);
  F.useEffect(() => {
    if (l) {
      const i = r.find((o) => {
        var _a2;
        return (_a2 = o.projects) == null ? void 0 : _a2.find((p) => p.id === l);
      });
      i && ((!w || w !== i.id) && b(i.id), u((o) => ({ ...o, [i.id]: true })));
    }
  }, [l, r, b, w]), F.useEffect(() => {
    var _a2;
    if (x == null ? void 0 : x.projectId) {
      const i = x.projectId;
      let o;
      for (const p of r) {
        const P = (_a2 = p.projects) == null ? void 0 : _a2.find((O) => O.id === i);
        if (P) {
          o = P, (!w || w !== p.id) && b(p.id), u((O) => ({ ...O, [p.id]: true }));
          break;
        }
      }
      o && (!l || l !== o.id) && h(o.id), o && m((p) => ({ ...p, [o.id]: true }));
    }
  }, [x, r, b, h, w, l]);
  const $ = (i) => {
    u((o) => ({ ...o, [i.id]: !o[i.id] })), (!w || w !== i.id) && (b(i.id), l && l !== i.id && (h(void 0), g(void 0)));
  }, y = (i) => {
    b(i.id), l && l !== i.id && (h(void 0), g(void 0)), n({ to: "/teamspace/$teamspaceId", params: { teamspaceId: i.id }, viewTransition: true });
  }, T = (i) => {
    if (m((o) => ({ ...o, [i.id]: !o[i.id] })), !w || w !== i.teamspaceId) {
      const o = r.find((p) => p.id === i.teamspaceId);
      o && (b(o.id), u((p) => ({ ...p, [o.id]: true })));
    }
    h(i.id), x && x.projectId !== i.id && g(void 0), n({ to: "/project/$projectId", params: { projectId: i.id }, viewTransition: true });
  }, R = (i) => {
    var _a2;
    if (i.projectId) {
      let o;
      for (const p of r) {
        const P = (_a2 = p.projects) == null ? void 0 : _a2.find((O) => O.id === i.projectId);
        if (P) {
          o = P, (!w || w !== p.id) && b(p.id);
          break;
        }
      }
      o && h(o.id);
    }
    g(i), n({ to: "/chat/$chatroomId", params: { chatroomId: i.id }, viewTransition: true });
  }, U = () => {
    C(!N);
  }, Y = (i) => {
    M(i.id), C(false), y(i);
  }, ee = (i, o = 2) => {
    const p = (x == null ? void 0 : x.id) === i.id, P = o * 12;
    return jsx("div", { children: jsx(q, { children: jsxs(K, { className: "w-full justify-start hover:bg-accent/50", onClick: () => R(i), style: { paddingLeft: `${P}px` }, children: [jsx(MessageSquare, { className: `mr-2 h-4 w-4 ${p ? "text-orange-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }) }, i.id);
  }, le = (i, o = 1) => {
    const p = I[i.id], P = l === i.id, O = i.chatrooms && i.chatrooms.length > 0, ae = o * 12;
    return jsxs("div", { children: [jsx(q, { children: jsxs(K, { className: "w-full justify-start hover:bg-accent/50", onClick: () => T(i), style: { paddingLeft: `${ae}px` }, children: [p && O ? jsx(FolderOpen, { className: `mr-2 h-5 w-5 ${P ? "text-emerald-500" : ""}` }) : jsx(Folder, { className: `mr-2 h-5 w-5 ${P ? "text-emerald-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }), O && p && jsx("div", { children: i.chatrooms.map((Q) => ee(Q, o + 1)) })] }, i.id);
  }, E = (i, o = 0, p = false) => {
    const P = d[i.id], O = w === i.id || p, ae = i.projects && i.projects.length > 0, Q = o === 0 ? 0 : o * 12;
    return jsxs("div", { children: [jsx(q, { children: jsxs(K, { className: "w-full justify-start hover:bg-accent/50", onClick: () => {
      y(i), $(i);
    }, style: { paddingLeft: Q ? `${Q}px` : void 0 }, children: [P ? jsx(BriefcaseIcon, { className: `mr-2 h-5 w-5 ${O ? "text-indigo-500" : ""}` }) : jsx(Briefcase, { className: `mr-2 h-5 w-5 ${O ? "text-indigo-500" : ""}` }), i.name.length > 20 ? i.name.slice(0, 20) + "..." : i.name] }) }), ae && P && jsx("div", { children: i.projects.map((ce) => le(ce, o + 1)) })] }, i.id);
  }, ve = r.slice(0, 4), F$1 = r.length > 4 ? r.slice(4) : [], de = c ? r.find((i) => i.id === c) : null;
  return jsxs("div", { className: s, children: [ve.map((i) => E(i)), de && E(de, 0, true), F$1.length > 0 && jsxs("div", { children: [jsx(q, { children: jsxs(K, { className: "w-full justify-start mt-1 text-muted-foreground", onClick: U, children: [N ? jsx(ChevronUp, { className: "mr-2 h-4 w-4" }) : jsx(ChevronDown, { className: "mr-2 h-4 w-4" }), "Show ", F$1.length, " more"] }) }), N && jsx("div", { className: "pl-2 py-1 space-y-1 border-l-2 border-muted ml-2 mt-1", children: F$1.map((i) => jsx(q, { children: jsxs(K, { className: "w-full justify-start text-sm hover:bg-accent/50", onClick: () => Y(i), children: [jsx(Briefcase, { className: `mr-2 h-4 w-4 ${w === i.id ? "text-primary" : ""}` }), i.name] }) }, i.id)) })] })] });
}
const Ot = "/_build/assets/IntelliOptima-Black-Text-Logo-z-6OsVSl.webp", ra = F.forwardRef(({ className: r, ...s }, n) => jsx(Command, { ref: n, className: v("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", r), ...s }));
ra.displayName = Command.displayName;
const sa = F.forwardRef(({ className: r, ...s }, n) => jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [jsx(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), jsx(Command.Input, { ref: n, className: v("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", r), ...s })] }));
sa.displayName = Command.Input.displayName;
const ia = F.forwardRef(({ className: r, ...s }, n) => jsx(Command.List, { ref: n, className: v("max-h-[300px] overflow-y-auto overflow-x-hidden", r), ...s }));
ia.displayName = Command.List.displayName;
const na = F.forwardRef((r, s) => jsx(Command.Empty, { ref: s, className: "py-6 text-center text-sm", ...r }));
na.displayName = Command.Empty.displayName;
const oa = F.forwardRef(({ className: r, ...s }, n) => jsx(Command.Group, { ref: n, className: v("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", r), ...s }));
oa.displayName = Command.Group.displayName;
const _t = F.forwardRef(({ className: r, ...s }, n) => jsx(Command.Separator, { ref: n, className: v("-mx-1 h-px bg-border", r), ...s }));
_t.displayName = Command.Separator.displayName;
const la = F.forwardRef(({ className: r, ...s }, n) => jsx(Command.Item, { ref: n, className: v("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", r), ...s }));
la.displayName = Command.Item.displayName;
function Rt() {
  const r = useNavigate(), [s, n] = useState(false), d$1 = useSetAtom(ks), u$1 = useSetAtom(Ps), I = useSetAtom(As), m = zr(), [N, C] = useState(false), [c, M] = useState(1), w = [{ id: 1, label: "Teamspace Details" }, { id: 2, label: "Teamspace Members" }, { id: 3, label: "Project Details" }, { id: 4, label: "Project Members" }], [b$1, l] = useState({ name: "", description: "", context: "" }), [h$1, x] = useState({ name: "Default Project", description: "", context: "", isPrivate: false }), [g$1, $] = useState([]), [y$1, T] = useState([]), [R, U] = useState("CONTRIBUTOR"), [Y, ee$1] = useState(""), [le, E] = useState([]), [ve, F] = useState(false), de = (t) => {
    ee$1(t), F(true);
    const { data: v } = m;
    if (!v || !v.members) {
      E([]), F(false);
      return;
    }
    ge().auth.handler().then(({ user: j }) => {
      const _ = j == null ? void 0 : j.email;
      setTimeout(() => {
        if (t.trim() === "") E([]);
        else try {
          console.log("Organization members:", v.members);
          const G = v.members.filter((k) => {
            if (!(k == null ? void 0 : k.user)) return false;
            const H = k.user.name && k.user.name.toLowerCase().includes(t.toLowerCase()), me = k.user.email && k.user.email.toLowerCase().includes(t.toLowerCase()), te = _ && k.user.email === _;
            return (H || me) && !te;
          }).map((k) => (console.log("Processing member:", k), { memberId: k.id, userId: k.user.id, name: k.user.name || "Unknown", email: k.user.email || "", image: k.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(k.user.name || "Unknown")}`, role: "CONTRIBUTOR" }));
          console.log("Search results:", G), E(G);
        } catch (G) {
          console.error("Error filtering organization members:", G), E([]);
        }
        F(false);
      }, 300);
    }).catch((j) => {
      console.error("Error getting current user:", j), F(false), E([]);
    });
  }, i$1 = (t) => {
    if (console.log("Adding user to teamspace:", t), g$1.some((j) => j.email === t.email)) {
      toast.error("This user has already been added");
      return;
    }
    const v = { id: v4(), userId: t.userId, role: R, invitedByUserId: "", teamspaceId: "", email: t.email, name: t.name || "Unknown", image: t.image };
    console.log("Created new teamspace member:", v), $((j) => [...j, v]), ee$1(""), E([]);
  }, o = (t) => {
    l({ ...b$1, [t.target.name]: t.target.value });
  }, p$1 = (t) => {
    x({ ...h$1, [t.target.name]: t.target.value });
  }, P = (t) => {
    x({ ...h$1, isPrivate: t });
  }, O$1 = (t) => {
    t && ($(g$1.filter((v) => v.id !== t)), T(y$1.filter((v) => v.id !== t)));
  }, ae = () => {
    if (c === 1 && !b$1.name.trim()) {
      toast.error("Teamspace name is required");
      return;
    }
    if (c === 2 && console.log("Teamspace members before going to step 3:", g$1), c === 3 && !h$1.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    M(c + 1);
  }, Q = () => {
    M(c - 1);
  }, ce = (t) => {
    switch (t) {
      case "OWNER":
        return "bg-green-100 text-green-800";
      case "ADMIN":
        return "bg-red-100 text-red-800";
      case "MEMBER":
        return "bg-blue-100 text-blue-800";
      case "VIEWER":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  useEffect(() => {
    c === 4 && (console.log("Entering step 4 - Project Members selection"), T([]));
  }, [c]);
  const ba = (t, v) => {
    if (console.log("Toggle project member:", t.name, v), v) {
      const j = { id: t.id, projectId: "", userId: t.userId, role: t.role, invitedByUserId: "", email: t.email, name: t.name, image: t.image };
      console.log("Adding to project members:", j), T((_) => [..._, j]);
    } else console.log("Removing from project members:", t.id), T((j) => j.filter((_) => _.id !== t.id));
  }, Ae = async (t) => {
    if (t.preventDefault(), !s) {
      n(true);
      try {
        const v = ge(), { session: j, userID: _, user: G } = await v.auth.handler();
        console.log("Current user:", { userID: _, email: G.email }), console.log("All teamspace members before filtering:", g$1);
        const k = g$1.filter((D) => D.email && D.email !== G.email).map((D) => (console.log("Adding member to teamspace API request:", D), { userId: D.userId, role: D.role, invitedByUserId: _, teamspaceId: "" }));
        console.log("Final teamspace members list for API:", k), console.log("Creating teamspace:", b$1.name);
        const { data: H } = await v.chatrooms.createTeamspace({ name: b$1.name, description: b$1.description, context: b$1.context, creatorId: _, members: k });
        console.log("Teamspace created:", H), console.log("All project members before filtering:", y$1);
        const me = y$1.filter((D) => D.email && D.email !== G.email).map((D) => (console.log("Adding member to project API request:", D), { projectId: "", userId: D.userId, role: D.role, invitedByUserId: _ }));
        console.log("Final project members list for API:", me), console.log("Creating project:", h$1.name);
        const { data: te } = await v.chatrooms.createProject({ teamspaceId: H.id, name: h$1.name, description: h$1.description, context: h$1.context, creatorId: _, isPrivate: h$1.isPrivate, members: me });
        console.log("Project created:", te), H.projects.push(te), d$1((D) => [...D, H]), u$1(H.id), I(te.id), toast.success("Teamspace and project created successfully"), C(false), setTimeout(() => {
          r({ to: "/teamspace/$teamspaceId", params: { teamspaceId: H.id }, viewTransition: true });
        }, 100);
      } catch (v) {
        console.error("Error creating teamspace:", v), toast.error("Failed to create teamspace");
      } finally {
        n(false);
      }
    }
  }, Oe$1 = () => {
    M(1), l({ name: "", description: "", context: "" }), x({ name: "Default Project", description: "", context: "", isPrivate: false }), $([]), T([]), U("CONTRIBUTOR"), ee$1(""), E([]), F(false);
  };
  useEffect(() => {
    N || Oe$1();
  }, [N]);
  const va = () => {
    switch (c) {
      case 1:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "1" }) }), "Teamspace Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "teamspace-name", children: ["Teamspace Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ee, { id: "teamspace-name", name: "name", value: b$1.name, onChange: o, placeholder: "e.g. Marketing Team", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "teamspace-description", children: "Description" }), jsx(Nt$1, { id: "teamspace-description", name: "description", value: b$1.description, onChange: o, placeholder: "What is this teamspace for?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "teamspace-context", children: "Context" }), jsx(Nt$1, { id: "teamspace-context", name: "context", value: b$1.context, onChange: o, placeholder: "Any additional context for AI assistants" })] })] })] });
      case 2:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "2" }) }), "Teamspace Members"] }), jsxs("div", { className: "space-y-4", children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(te, { children: "Search for users" }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(te, { htmlFor: "member-role", className: "text-sm", children: "Role:" }), jsxs("select", { id: "member-role", value: R, onChange: (t) => U(t.target.value), className: "px-3 py-1 text-sm border rounded-md", children: [jsx("option", { value: "OWNER", children: "Owner" }), jsx("option", { value: "ADMIN", children: "Admin" }), jsx("option", { value: "CONTRIBUTOR", children: "Contributor" }), jsx("option", { value: "VIEWER", children: "Viewer" })] })] })] }), jsx("div", { className: "relative", children: jsxs(ra, { className: "rounded-lg border shadow-md", children: [jsx(sa, { placeholder: "Search users by name or email...", value: Y, onValueChange: de }), jsx(ia, { children: ve ? jsx("div", { className: "py-6 text-center text-sm", children: "Searching..." }) : le.length === 0 && Y ? jsx(na, { children: "No users found." }) : jsx(oa, { heading: "Users", children: jsx(Ct$1, { className: "h-[200px]", children: le.map((t) => jsxs(la, { value: t.email, className: "flex items-center justify-between cursor-pointer", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(i, { children: jsx("img", { src: t.image, alt: t.name }) }), jsxs("div", { children: [jsx("p", { className: "text-sm font-medium", children: t.name }), jsx("p", { className: "text-xs text-muted-foreground", children: t.email })] })] }), jsx(O, { type: "button", variant: "ghost", size: "icon", onClick: () => i$1(t), children: jsx(PlusCircle, { className: "h-4 w-4" }) })] }, t.memberId)) }) }) })] }) }), g$1.length > 0 && jsxs("div", { className: "mt-4", children: [jsx("h4", { className: "text-sm font-medium mb-2", children: "Selected Members" }), jsx(Ct$1, { className: "h-[200px]", children: jsx("div", { className: "border rounded-md divide-y", children: g$1.map((t) => jsxs("div", { className: "flex items-center justify-between p-3", children: [jsxs("div", { className: "flex items-center gap-3", children: [t.image && jsx(i, { className: "h-8 w-8", children: jsx("img", { src: t.image, alt: t.name || t.email || "" }) }), jsxs("div", { children: [t.name && jsx("p", { className: "text-sm font-medium", children: t.name }), jsx("p", { className: "text-xs text-muted-foreground", children: t.email })] }), jsx(dt, { className: ce(t.role), children: t.role })] }), jsxs(O, { variant: "ghost", size: "sm", onClick: () => O$1(t.id), className: "h-8 w-8 p-0", children: [jsx(X, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Remove" })] })] }, t.id)) }) })] }), g$1.length === 0 && jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "No members added yet. You will be added as an Owner automatically." })] })] });
      case 3:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "3" }) }), "Project Details"] }), jsxs("div", { className: "grid gap-3", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "project-name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ee, { id: "project-name", name: "name", value: h$1.name, onChange: p$1, placeholder: "e.g. General", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "project-description", children: "Description" }), jsx(Nt$1, { id: "project-description", name: "description", value: h$1.description, onChange: p$1, placeholder: "What is this project about?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "project-context", children: "Context" }), jsx(Nt$1, { id: "project-context", name: "context", value: h$1.context, onChange: p$1, placeholder: "Any specific context for this project" })] }), jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [jsx(d, { id: "isPrivate", checked: h$1.isPrivate, onCheckedChange: P }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsx(te, { htmlFor: "isPrivate", className: "text-sm font-medium leading-none flex items-center", children: "Make project private" }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] })] })] });
      case 4:
        return jsxs("div", { className: "space-y-4", children: [jsxs("h3", { className: "font-medium text-lg flex items-center", children: [jsx("div", { className: "flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mr-2", children: jsx("span", { className: "text-xs font-semibold", children: "4" }) }), "Project Members"] }), jsx("p", { className: "text-sm text-muted-foreground", children: "Select which teamspace members to include in this project:" }), jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: ["Available members: ", g$1.length, ", Selected for project: ", y$1.length] }), g$1.length > 0 ? jsx(Ct$1, { className: "h-[300px] border rounded-md", children: jsx("div", { className: "divide-y", children: g$1.map((t) => {
          var _a2;
          const v = y$1.some((j) => j.id === t.id);
          return jsx("div", { className: "flex items-center justify-between p-3", children: jsxs("div", { className: "flex items-center gap-3", children: [jsx(d, { id: `project-member-${t.id}`, checked: v, onCheckedChange: (j) => {
            ba(t, !!j);
          } }), jsxs("div", { className: "flex items-center gap-2", children: [t.image && jsx(i, { className: "h-8 w-8", children: jsx("img", { src: t.image, alt: t.name || t.email || "" }) }), jsxs("div", { children: [t.name && jsx("p", { className: "text-sm font-medium", children: t.name }), jsx("p", { className: "text-xs text-muted-foreground", children: t.email }), jsxs("p", { className: "text-xs text-muted-foreground", children: ["User ID: ", (_a2 = t.userId) == null ? void 0 : _a2.slice(0, 6), "..."] })] })] }), jsx(dt, { className: ce(t.role), children: t.role })] }) }, t.id);
        }) }) }) : jsx("p", { className: "text-sm", children: "No teamspace members to select from. You will be added as an Owner automatically." })] });
      default:
        return null;
    }
  }, xa = () => jsx("div", { className: "flex justify-center mb-6", children: w.map((t, v) => jsxs("div", { className: "flex items-center", children: [jsx("div", { className: `flex items-center justify-center w-8 h-8 rounded-full border-2 ${t.id === c ? t.id <= 2 ? "border-indigo-600 bg-indigo-600 text-white" : "border-emerald-600 bg-emerald-600 text-white" : t.id < c ? t.id <= 2 ? "border-indigo-600 bg-indigo-100 text-indigo-600" : "border-emerald-600 bg-emerald-100 text-emerald-600" : "border-gray-300 bg-white text-gray-500"}`, children: t.id < c ? jsx(Check, { className: "w-4 h-4" }) : jsx("span", { className: "text-xs", children: t.id }) }), v < w.length - 1 && jsx("div", { className: `w-10 h-1 ${t.id < c ? t.id <= 1 ? "bg-indigo-600" : "bg-emerald-600" : "bg-gray-300"}` })] }, t.id)) });
  return jsx(la$1, { children: jsxs(Ee, { children: [jsx(_e, { asChild: true, children: jsxs(b, { open: N, onOpenChange: (t) => {
    s && !t || C(t);
  }, children: [jsx(h, { asChild: true, children: jsxs(O, { variant: "ghost", size: "icon", className: "h-6 w-6 p-0 ml-1 rounded-full hover:cursor-pointer", children: [jsx(Plus, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Create Teamspace" })] }) }), jsx(f, { className: "sm:max-w-[600px]", children: jsxs("form", { onSubmit: (t) => {
    t.preventDefault(), c === 4 && Ae(t);
  }, children: [jsxs(p, { children: [jsx("div", { className: `h-1.5 w-full absolute top-0 left-0 rounded-t-lg ${c <= 2 ? "bg-indigo-500" : "bg-emerald-500"}` }), jsx(u, { className: "text-xl mt-2", children: "Create New Teamspace" }), jsx(y, { children: "Create a teamspace with a default project to organize your work." })] }), xa(), jsx("div", { className: "py-4", children: va() }), jsxs(g, { className: "flex justify-between", children: [jsx("div", { children: c > 1 && jsxs(O, { type: "button", variant: "outline", onClick: Q, disabled: s, children: [jsx(ChevronLeft, { className: "h-4 w-4 mr-2" }), "Back"] }) }), jsxs("div", { className: "flex gap-2", children: [jsx(v$1, { asChild: true, children: jsx(O, { variant: "outline", type: "button", disabled: s, onClick: Oe$1, children: "Cancel" }) }), c < 4 ? jsxs(O, { type: "button", onClick: ae, className: `${c <= 2 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`, disabled: s, children: ["Next", jsx(ChevronRight, { className: "h-4 w-4 ml-2" })] }) : jsx(O, { type: "button", onClick: (t) => Ae(t), className: "bg-emerald-600 hover:bg-emerald-700", disabled: s, children: s ? "Creating..." : "Create Teamspace & Project" })] })] })] }) })] }) }), jsx(Oe, { children: jsx("p", { children: "Create Teamspace" }) })] }) });
}
function zt() {
  const { isMobile: r } = oe(), s = ta$1().data, n$1 = u$1(), d = s == null ? void 0 : s.user;
  return jsx(Z, { children: jsx(q, { children: jsxs(gs, { children: [jsx(ys, { asChild: true, children: jsxs(K, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [jsxs(i, { className: "h-8 w-8 rounded-lg", children: [jsx(n, { src: (d == null ? void 0 : d.image) || "", alt: (d == null ? void 0 : d.name) || "" }), jsx(f$1, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: d == null ? void 0 : d.name }), jsx("span", { className: "truncate text-xs", children: d == null ? void 0 : d.email })] }), jsx(ChevronsUpDown, { className: "ml-auto size-4" })] }) }), jsxs(vs, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: r ? "bottom" : "right", align: "start", sideOffset: 4, children: [jsx(si, { className: "p-0 font-normal", children: jsxs("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [jsxs(i, { className: "h-8 w-8 rounded-lg", children: [jsx(n, { src: (d == null ? void 0 : d.image) || "", alt: (d == null ? void 0 : d.name) || "" }), jsx(f$1, { className: "rounded-lg", children: "CN" })] }), jsxs("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [jsx("span", { className: "truncate font-semibold", children: d == null ? void 0 : d.name }), jsx("span", { className: "truncate text-xs", children: d == null ? void 0 : d.email })] })] }) }), jsx(oi, {}), jsx(ni, { children: jsxs(ri, { children: [jsx(Sparkles, {}), "Upgrade to Pro"] }) }), jsx(oi, {}), jsxs(ni, { children: [jsxs(ri, { children: [jsx(BadgeCheck, {}), "Account"] }), jsxs(ri, { children: [jsx(CreditCard, {}), "Billing"] }), jsxs(ri, { children: [jsx(Bell, {}), "Notifications"] })] }), jsx(oi, {}), jsxs(ri, { onClick: n$1, className: "text-red-500 focus:text-red-500", children: [jsx(LogOut, {}), "Log out"] })] })] }) }) });
}
function da({ ...r }) {
  const s = useNavigate(), n = useAtomValue(ks), d = useAtomValue(Rs), [u, I] = useAtom(Ge), m = useSetAtom(Ps), N = useSetAtom(As), C = useMemo(() => di(d || []), [d]), c = useMemo(() => {
    const l = /* @__PURE__ */ new Date(), h = new Date(l.getTime() - 7 * 24 * 60 * 60 * 1e3), x = new Date(l.getTime() - 30 * 24 * 60 * 60 * 1e3), g = C.slice(0, 5), $ = C.filter((R) => ui(R) >= h && !g.some((Y) => Y.id === R.id)).slice(0, 5), y = C.filter((R) => {
      const U = ui(R);
      return U < h && U >= x;
    }).slice(0, 5), T = C.filter((R) => ui(R) < x).slice(0, 5);
    return { recent: g, previousWeek: $, previousMonth: y, previous: T };
  }, [C]), M = (l) => {
    var _a2;
    if (I(l), l.projectId) {
      const h = n == null ? void 0 : n.find((x) => {
        var _a3;
        return (_a3 = x.projects) == null ? void 0 : _a3.some((g) => g.id === l.projectId);
      });
      if (h) {
        m(h.id);
        const x = (_a2 = h.projects) == null ? void 0 : _a2.find((g) => g.id === l.projectId);
        x && N(x.id);
      }
    } else m(void 0), N(void 0);
    s({ to: "/chat/$chatroomId", params: { chatroomId: l.id }, viewTransition: true });
  }, w = () => {
    I(void 0), N(void 0), m(void 0), setTimeout(() => {
      s({ to: "/chat", viewTransition: true });
    }, 100);
  }, b = (l) => jsx(q, { children: jsx(K, { className: "max-w-full text-left", onClick: () => M(l), children: jsxs("div", { className: "flex items-center w-full overflow-hidden", children: [jsx(MessageSquare, { className: `h-4 w-4 flex-shrink-0 ${(u == null ? void 0 : u.id) === l.id ? "text-orange-500" : ""}` }), jsx("span", { className: "ml-2 truncate", children: l.name.length > 20 ? l.name.slice(0, 20) + "..." : l.name })] }) }) }, l.id);
  return jsxs(St, { className: "border-r-0 overflow-hidden", ...r, children: [jsx(jt, { children: jsxs("div", { className: "flex items-center justify-between p-2", children: [jsx("button", { className: "flex items-start hover:cursor-pointer", onClick: w, children: jsx("img", { src: Ot, alt: "IntelliOptima", className: "h-8 object-contain object-left" }) }), jsx(la$1, { children: jsxs(Ee, { children: [jsx(_e, { asChild: true, children: jsxs(O, { size: "icon", variant: "ghost", onClick: w, children: [jsx(SquarePen, { className: "h-5 w-5" }), jsx("span", { className: "sr-only", children: "New Chat" })] }) }), jsx(Oe, { children: jsx("p", { children: "New Chat" }) })] }) })] }) }), jsx(Pt, { className: "overflow-hidden", children: jsxs("div", { className: "flex flex-col gap-4 overflow-hidden", children: [jsxs(ie, { children: [jsxs("div", { className: "flex items-center justify-between", children: [jsx(ne, { children: "Teamspaces" }), jsx(Rt, {})] }), jsx(Z, { children: jsx(At, { items: n }) })] }), jsx(Mt, {}), jsxs(ie, { children: [jsx(ne, { children: "Recent" }), jsx(Z, { children: c.recent.map(b) })] }), c.previousWeek.length > 0 && jsxs(ie, { children: [jsx(ne, { children: "Previous 7 Days" }), jsx(Z, { children: c.previousWeek.map(b) })] }), c.previousMonth.length > 0 && jsxs(ie, { children: [jsx(ne, { children: "Previous 30 Days" }), jsx(Z, { children: c.previousMonth.map(b) })] }), c.previous.length > 0 && jsxs(ie, { children: [jsx(ne, { children: "Previous" }), jsx(Z, { children: c.previous.map(b) })] }), !C.length && jsx("div", { className: "px-4 py-3 text-sm text-muted-foreground", children: "No recent chats. Start a new conversation using the button above." })] }) }), jsx(Tt, {}), jsx(kt, { className: "flex items-center", children: jsx(zt, {}) })] });
}
function ca({ ...r }) {
  return jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function ma({ className: r, ...s }) {
  return jsx("ol", { "data-slot": "breadcrumb-list", className: v("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", r), ...s });
}
function ha({ className: r, ...s }) {
  return jsx("li", { "data-slot": "breadcrumb-item", className: v("inline-flex items-center gap-1.5", r), ...s });
}
function ua({ className: r, ...s }) {
  return jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: v("text-foreground font-normal", r), ...s });
}
const Et = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-building-2'%3e%3cpath%20d='M6%2022V4a2%202%200%200%201%202-2h8a2%202%200%200%201%202%202v18Z'/%3e%3cpath%20d='M6%2012H4a2%202%200%200%200-2%202v6a2%202%200%200%200%202%202h2'/%3e%3cpath%20d='M18%209h2a2%202%200%200%201%202%202v9a2%202%200%200%201-2%202h-2'/%3e%3cpath%20d='M10%206h4'/%3e%3cpath%20d='M10%2010h4'/%3e%3cpath%20d='M10%2014h4'/%3e%3cpath%20d='M10%2018h4'/%3e%3c/svg%3e", pa = () => {
  var _a2;
  const { activeOrganization: r, changeActiveOrganization: s } = pa$1(), { data: n } = $r(), d = (_a2 = ta$1().data) == null ? void 0 : _a2.user, u = r == null ? void 0 : r.members.some((m) => m.user.email === (d == null ? void 0 : d.email) && (m.role === "owner" || m.role === "admin")), I = async (m) => {
    await s(m);
  };
  return jsx("div", { className: "flex items-center gap-4", children: jsxs(gs, { children: [jsx(ys, { asChild: true, children: jsxs(O, { variant: "ghost", className: "flex items-center gap-2 p-1", children: [jsx(i, { className: "h-8 w-8", children: jsx(AvatarImage, { src: (r == null ? void 0 : r.logo) || Et, alt: d == null ? void 0 : d.name, className: "h-8 w-8" }) }), r && jsxs("div", { className: "flex items-center gap-1", children: [jsx("span", { className: "", children: r.name }), jsx(ChevronDown, { className: "h-4 w-4" })] })] }) }), jsx(vs, { align: "end", className: "w-56", children: jsxs(ni, { children: [jsxs(ii, { children: [jsx(ci, { children: jsxs(Link, { className: "flex", to: "/organizations", children: [jsx(Factory, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Organizations" })] }) }), jsx(ai, { children: jsxs(li, { children: [n && n.map((m) => jsx(ri, { onClick: () => I(m.id), className: m.id === (r == null ? void 0 : r.id) ? "bg-accent" : "", children: m.name }, m.id)), jsx(oi, {}), jsx(ri, { asChild: true, children: jsx(Link, { to: "/organizations", children: "Manage Organizations" }) })] }) })] }), jsx(ri, { asChild: true, disabled: !u, children: jsxs(Link, { to: "/members", children: [jsx(Users, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Team Members" })] }) }), jsx(ri, { asChild: true, disabled: !u, children: jsxs(Link, { to: "/organization-settings", children: [jsx(Settings, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "Settings" })] }) }), jsx(ri, { asChild: true, disabled: !u, children: jsxs(Link, { to: "/chat", children: [jsx(Server, { className: "mr-2 h-4 w-4" }), jsx("span", { children: "AI Providers" })] }) })] }) })] }) });
}, Bt = wt$1("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server"), ga = createServerFn().handler(Bt), Lt = wt$1("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server"), fa = createServerFn().handler(Lt);
function Pr() {
  const r = useAtomValue(Ge), s = useSetAtom(ks), n = useSetAtom(Rs), { userId: d } = ya.useRouteContext();
  return ns(d), useEffect(() => {
    const u = async () => {
      const m = await ga();
      s(m);
    }, I = async () => {
      const m = await fa();
      n(m);
    };
    Promise.all([u(), I()]);
  }, []), jsxs(De, { children: [jsx(da, {}), jsxs(ta, { className: "flex flex-col h-screen overflow-y-auto", children: [jsxs("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4", children: [jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(aa, {}), jsx(Pe, { orientation: "vertical", className: "mr-2 h-4" }), jsx(ca, { children: jsx(ma, { children: jsx(ha, { children: jsx(ua, { className: "line-clamp-1", children: r == null ? void 0 : r.name }) }) }) })] }), jsx(pa, {})] }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
}
const Dr = function() {
  const s = useAtomValue(Ge), n = useSetAtom(ks), d = useSetAtom(Rs), { userId: u } = ya.useRouteContext();
  return ns(u), useEffect(() => {
    const I = async () => {
      const N = await ga();
      n(N);
    }, m = async () => {
      const N = await fa();
      d(N);
    };
    Promise.all([I(), m()]);
  }, []), jsxs(De, { children: [jsx(da, {}), jsxs(ta, { className: "flex flex-col h-screen overflow-y-auto", children: [jsxs("header", { className: "sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background p-4", children: [jsxs("div", { className: "flex flex-1 items-center gap-2 px-3", children: [jsx(aa, {}), jsx(Pe, { orientation: "vertical", className: "mr-2 h-4" }), jsx(ca, { children: jsx(ma, { children: jsx(ha, { children: jsx(ua, { className: "line-clamp-1", children: s == null ? void 0 : s.name }) }) }) })] }), jsx(pa, {})] }), jsx("div", { className: "h-full overflow-y-hidden", children: jsx(Outlet, {}) })] })] });
};

export { Dr as component, Pr as default };
//# sourceMappingURL=_layout-BzA0fZOk.mjs.map
