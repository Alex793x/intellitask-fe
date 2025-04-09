import { jsxs, jsx } from 'react/jsx-runtime';
import { useAtom, useSetAtom } from 'jotai';
import { af as Ta, k as ks, t as ta, O, m as me, j as v, v as ve, u as ue, h as la, E as Ee, _ as _e, q as Oe, n as ne, T as Te, c as ce, a3 as ge, A as As, a1 as te, e as ee, a2 as Nt, a0 as dt } from '../nitro/nitro.mjs';
import { Home, ChevronRight, Briefcase, Settings, Lock, FileText, Users, FolderPlus, RefreshCw, PlusCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { N as Ne, p as pe, x as xe, y as ye, l as le } from './collapsible-DPhAy_Tj.mjs';
import { toast } from 'sonner';
import { b, h, f, p, u, y, g, v as v$1 } from './dialog-Dg_okaGf.mjs';
import { d } from './checkbox-DBeqRmac.mjs';
import { i } from './avatar-DxBgJCBX.mjs';
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
import '@tanstack/start-client-core';
import 'zod';
import '@radix-ui/react-slot';
import 'class-variance-authority';
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
import 'uuid';
import 'marked';
import 'react-markdown';
import 'remark-gfm';
import '@radix-ui/react-hover-card';
import 'qss';
import '@radix-ui/react-dialog';
import 'node:stream';
import 'isbot';
import 'react-dom/server';
import '@radix-ui/react-tabs';
import '@radix-ui/react-collapsible';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-avatar';

function X({ teamspaceId: p$1, children: o }) {
  const N = useNavigate(), [d$1, u$1] = useState(false), c = useSetAtom(ks), v = useSetAtom(As), [i, n] = useState({ name: "", description: "", context: "", isPrivate: false }), m = (r) => {
    n({ ...i, [r.target.name]: r.target.value });
  }, b$1 = (r) => {
    n({ ...i, isPrivate: r });
  };
  return jsxs(b, { children: [jsx(h, { asChild: true, children: o || jsxs(O, { size: "sm", className: "bg-indigo-600 hover:bg-indigo-700 text-white hover:cursor-pointer", children: [jsx(FolderPlus, { className: "h-4 w-4 mr-2" }), " New Project"] }) }), jsx(f, { className: "sm:max-w-[500px]", children: jsxs("form", { onSubmit: async (r) => {
    if (r.preventDefault(), !i.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    u$1(true);
    try {
      const a = ge(), g = (await a.auth.handler()).userID, { data: h } = await a.chatrooms.createProject({ teamspaceId: p$1, name: i.name, description: i.description, context: i.context, creatorId: g, isPrivate: i.isPrivate, members: [{ projectId: "", userId: g, role: "OWNER", invitedByUserId: g, hasAccepted: true }] });
      v(h.id), c((I) => I.map((C) => C.id === p$1 ? { ...C, projects: [...C.projects, h] } : C)), toast.success("Project created successfully"), N({ to: "/project/$projectId", params: { projectId: h.id }, viewTransition: true });
    } catch (a) {
      console.error("Error creating project:", a), toast.error("Failed to create project");
    } finally {
      u$1(false);
    }
  }, children: [jsxs(p, { children: [jsx("div", { className: "h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg" }), jsx(u, { className: "text-xl mt-2", children: "Create New Project" }), jsx(y, { children: "Create a project in this teamspace to organize your work." })] }), jsxs("div", { className: "grid gap-4 py-4", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "project-name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ee, { id: "project-name", name: "name", value: i.name, onChange: m, placeholder: "e.g. Marketing Campaign", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "project-description", children: "Description" }), jsx(Nt, { id: "project-description", name: "description", value: i.description, onChange: m, placeholder: "What is this project about?" })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "project-context", children: "Context" }), jsx(Nt, { id: "project-context", name: "context", value: i.context, onChange: m, placeholder: "Any specific context for this project" })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(d, { id: "isPrivate", checked: i.isPrivate, onCheckedChange: b$1 }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsxs(te, { htmlFor: "isPrivate", className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center", children: [jsx(Lock, { className: "h-3.5 w-3.5 mr-1.5 text-muted-foreground" }), "Make project private"] }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] })] }), jsxs(g, { children: [jsx(v$1, { asChild: true, children: jsx(O, { variant: "outline", type: "button", disabled: d$1, children: "Cancel" }) }), jsx(O, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", disabled: d$1, children: d$1 ? "Creating..." : "Create Project" })] })] }) })] });
}
const _ = (p) => {
  switch (p) {
    case "OWNER":
      return "bg-green-100 text-green-800 border-green-200";
    case "ADMIN":
      return "bg-red-100 text-red-800 border-red-200";
    case "CONTRIBUTOR":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "VIEWER":
      return "bg-gray-100 text-gray-800 border-gray-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};
function je({ members: p }) {
  const [o, N] = useState(false), [d, u] = useState(false), c = 5, v = p.filter((t, g, h) => g === h.findIndex((I) => {
    var _a, _b;
    return ((_a = I.user) == null ? void 0 : _a.id) === ((_b = t.user) == null ? void 0 : _b.id);
  })), i$1 = v.filter((t) => !t.hasLeft), n = v.filter((t) => t.hasLeft), m = (t, g) => {
    const h = { OWNER: 0, ADMIN: 1, CONTRIBUTOR: 2, VIEWER: 3 };
    return (h[t.role] || 4) - (h[g.role] || 4);
  }, b = [...i$1].sort(m), w = [...n].sort(m), r = o ? b : b.slice(0, i$1.length >= c ? c : i$1.length), a = i$1.length > c && !o;
  return jsxs("div", { className: "space-y-3", children: [jsx("div", { children: r.map((t) => {
    var _a, _b, _c, _d, _e$1, _f;
    return jsx("div", { className: "py-1.5", children: jsxs("div", { className: "flex items-center justify-between group", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(i, { className: "h-7 w-7", children: ((_a = t.user) == null ? void 0 : _a.image) ? jsx("img", { src: t.user.image, alt: ((_b = t.user) == null ? void 0 : _b.name) || "User" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = t.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx(la, { children: jsxs(Ee, { children: [jsx(_e, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px]", children: ((_d = t.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Oe, { children: [jsx("p", { children: ((_e$1 = t.user) == null ? void 0 : _e$1.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = t.user) == null ? void 0 : _f.email })] })] }) })] }), jsx(dt, { className: _(t.role), children: t.role })] }) }, t.id);
  }) }), a && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => N(true), children: jsxs("span", { className: "flex items-center", children: ["Show ", i$1.length - c, " More ", jsx(ChevronDown, { className: "ml-1 h-3 w-3" })] }) }), o && i$1.length > c && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => N(false), children: jsxs("span", { className: "flex items-center", children: ["Show Less ", jsx(ChevronUp, { className: "ml-1 h-3 w-3" })] }) }), n.length > 0 && jsxs(xe, { open: d, onOpenChange: u, className: "mt-3", children: [jsxs("div", { className: "flex items-center text-xs text-muted-foreground", children: [jsx("div", { className: "h-px bg-border flex-grow mr-2" }), jsx(ye, { asChild: true, children: jsxs("button", { className: "flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors", children: [jsxs("span", { children: ["Former Members (", n.length, ")"] }), d ? jsx(ChevronUp, { className: "h-3 w-3" }) : jsx(ChevronDown, { className: "h-3 w-3" })] }) }), jsx("div", { className: "h-px bg-border flex-grow ml-2" })] }), jsx(le, { className: "pt-2", children: jsx("div", { className: "space-y-1.5", children: w.map((t) => {
    var _a, _b, _c, _d, _e$1, _f;
    return jsx("div", { children: jsxs("div", { className: "relative flex items-center justify-between group py-1.5", children: [jsx("div", { className: "absolute inset-0 rounded-md bg-muted/30 pointer-events-none" }), jsxs("div", { className: "flex items-center gap-2 z-10", children: [jsxs("div", { className: "relative", children: [jsx(i, { className: "h-7 w-7", children: ((_a = t.user) == null ? void 0 : _a.image) ? jsx("img", { src: t.user.image, alt: ((_b = t.user) == null ? void 0 : _b.name) || "User", className: "filter grayscale" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = t.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx("div", { className: "absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center", children: jsx("span", { className: "text-[8px]", children: "\xD7" }) })] }), jsx(la, { children: jsxs(Ee, { children: [jsx(_e, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px] text-muted-foreground", children: ((_d = t.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Oe, { children: [jsx("p", { children: ((_e$1 = t.user) == null ? void 0 : _e$1.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = t.user) == null ? void 0 : _f.email }), jsx("p", { className: "text-xs text-red-500 mt-1", children: "No longer a member" })] })] }) })] }), jsx(dt, { className: `${_(t.role)} opacity-70`, children: t.role })] }) }, t.id);
  }) }) })] })] });
}
const xs = function() {
  var _a, _b;
  const { teamspaceId: o } = Ta.useParams(), [N, d] = useAtom(ks), [u, c] = useState(false), [v$1, i] = useState(true), { data: n, isPending: m } = ta(), [b, w] = useState("");
  useEffect(() => {
    n && w(n.session.userId);
  }, [m, n]);
  const r = N.find((a) => a.id === o);
  return useEffect(() => {
    r && i(false);
  }, [r]), v$1 ? jsxs("div", { className: "flex-1 flex flex-col", children: [jsx("div", { className: "h-1.5 bg-gray-200 w-full" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1", children: [jsxs("div", { className: "mb-8 relative", children: [jsx(Ne, { className: "h-10 w-60 mb-2" }), jsx(Ne, { className: "h-4 w-full max-w-md mb-4" })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsx("div", { className: "md:col-span-2 space-y-6", children: jsxs("div", { children: [jsx("div", { className: "flex justify-between items-center mb-4", children: jsx(Ne, { className: "h-8 w-40" }) }), jsxs("div", { className: "space-y-3", children: [jsx(Ne, { className: "h-24 w-full" }), jsx(Ne, { className: "h-24 w-full" })] })] }) }), jsxs("div", { className: "space-y-6", children: [jsx(Ne, { className: "h-60 w-full" }), jsx(Ne, { className: "h-60 w-full" })] })] })] })] }) : r ? jsxs("div", { className: "flex-1 flex flex-col", children: [jsx("div", { className: "h-1.5 bg-indigo-500 w-full" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1", children: [jsxs("div", { className: "flex items-center text-sm text-muted-foreground mb-4", children: [jsxs(Link, { to: "/chat", className: "flex items-center hover:text-foreground transition-colors", children: [jsx(Home, { className: "h-3.5 w-3.5 mr-1" }), "Home"] }), jsx(ChevronRight, { className: "h-3.5 w-3.5 mx-1.5" }), jsxs("span", { className: "font-medium text-foreground flex items-center", children: [jsx(Briefcase, { className: "h-3.5 w-3.5 mr-1.5" }), "Teamspace"] })] }), jsxs("div", { className: "mb-8 relative", children: [jsxs("div", { className: "flex items-center gap-3 mb-2", children: [jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700", children: jsx(Briefcase, { className: "h-5 w-5" }) }), jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold", children: r.name }), jsxs("div", { className: "flex items-center mt-1", children: [jsx("span", { className: "inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20", children: "Teamspace" }), r.members && r.members.length > 0 && jsxs("span", { className: "ml-2 text-sm text-muted-foreground", children: [r.members.length, " member", r.members.length !== 1 ? "s" : ""] })] })] })] }), jsx("div", { className: "mt-2", children: jsx("p", { className: "text-muted-foreground", children: r.description || "No description provided" }) }), jsx("div", { className: "absolute top-0 right-0", children: jsxs(O, { size: "sm", variant: "outline", children: [jsx(Settings, { className: "h-4 w-4 mr-2" }), " Teamspace Settings"] }) })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsxs("div", { className: "md:col-span-2 space-y-6", children: [jsxs("div", { children: [jsxs("div", { className: "flex justify-between items-center mb-4", children: [jsx("h2", { className: "text-xl font-semibold", children: "Projects" }), jsx(X, { teamspaceId: r.id })] }), r.projects && r.projects.length > 0 ? jsx("div", { className: "space-y-3", children: r.projects.map((a) => {
    var _a2, _b2, _c, _d;
    return jsx(me, { className: v("cursor-pointer transition-all border-l-4 border-l-transparent", "hover:shadow-md hover:border-l-indigo-500 hover:bg-muted/30"), children: jsxs(Link, { to: "/project/$projectId", params: { projectId: a.id }, className: "block", children: [jsxs(ve, { className: "pb-2", children: [jsxs(ue, { className: "text-lg flex items-center", children: [a.name, a.isPrivate && jsx(la, { children: jsxs(Ee, { children: [jsx(_e, { asChild: true, children: jsx("span", { children: jsx(Lock, { className: "h-3 w-3 ml-2 text-red-500" }) }) }), jsx(Oe, { children: jsx("p", { children: "Private" }) })] }) })] }), jsx(ne, { children: a.description || "No description" })] }), jsx(Te, { className: "pt-2 text-sm text-muted-foreground", children: jsxs("div", { className: "flex items-center gap-4", children: [jsxs("div", { className: "flex items-center", children: [jsx(FileText, { className: "h-4 w-4 mr-1" }), ((_a2 = a.chatrooms) == null ? void 0 : _a2.length) || 0, " chat", ((_b2 = a.chatrooms) == null ? void 0 : _b2.length) !== 1 ? "s" : ""] }), jsxs("div", { className: "flex items-center", children: [jsx(Users, { className: "h-4 w-4 mr-1" }), ((_c = a.members) == null ? void 0 : _c.length) || 1, " member", ((_d = a.members) == null ? void 0 : _d.length) !== 1 ? "s" : ""] })] }) })] }) }, a.id);
  }) }) : jsxs("div", { className: "border rounded-lg p-8 text-center bg-muted/20", children: [jsx("h3", { className: "font-medium mb-2", children: "No projects yet" }), jsx("p", { className: "text-muted-foreground mb-4", children: "Start by creating your first project in this teamspace" }), jsx(X, { teamspaceId: o, children: jsxs(O, { variant: "outline", children: [jsx(FolderPlus, { className: "h-4 w-4 mr-2" }), " Create Project"] }) })] })] }), jsxs("div", { children: [jsx("h2", { className: "text-xl font-semibold mb-4", children: "Recent Activity" }), jsx("div", { className: "border rounded-lg p-4 bg-muted/20 text-center", children: jsx("p", { className: "text-muted-foreground", children: "Activity feed coming soon" }) })] })] }), jsxs("div", { className: "space-y-6", children: [jsxs(me, { className: "border-t-4 border-t-indigo-500", children: [jsxs(ve, { children: [jsxs(ue, { className: "flex items-center justify-between", children: [jsx("span", { children: "Teamspace Context" }), jsx(O, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 hover:cursor-pointer", onClick: () => c(!u), children: jsx(Settings, { className: "h-4 w-4" }) })] }), jsx(ne, { children: "Add context about what this teamspace is for" })] }), jsx(ce, { children: u ? jsxs("div", { className: "space-y-4", children: [jsx("textarea", { className: "w-full min-h-[150px] p-3 border rounded-md", placeholder: "Describe what this teamspace is used for...", value: r.context }), jsxs("div", { className: "flex justify-end space-x-2", children: [jsx(O, { variant: "outline", size: "sm", onClick: () => c(false), children: "Cancel" }), jsx(O, { size: "sm", onClick: () => c(false), children: "Save" })] })] }) : jsx("div", { className: "text-sm", children: jsx("p", { children: r.context }) }) })] }), jsxs(me, { className: "border-t-4 border-t-indigo-500", children: [jsxs(ve, { children: [jsx(ue, { children: "Members" }), jsx(ne, { children: "People with access to this teamspace" })] }), jsx(ce, { children: r.members && r.members.length > 0 ? jsx(je, { members: r.members }) : jsx("div", { className: "text-sm text-muted-foreground", children: "Only you have access to this teamspace" }) }), jsx(Te, { children: jsx(pe, { type: "teamspace", teamspaceId: r.id, members: r.members || [], userId: b, onMembersChanged: () => {
    ge().chatrooms.getTeamspaces().then(({ data: a }) => {
      a && d(a);
    });
  }, children: jsxs(O, { size: "sm", variant: "outline", className: "w-full border-indigo-600/20 text-indigo-700 hover:bg-indigo-50 hover:cursor-pointer", children: [jsx(Users, { className: "h-4 w-4 mr-2" }), " Manage Members"] }) }) })] }), jsxs(me, { className: "border-t-4 border-t-indigo-500", children: [jsx(ve, { children: jsxs(ue, { className: "flex items-center justify-between", children: [jsx("span", { children: "Teamspace Stats" }), jsx(O, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: jsx(RefreshCw, { className: "h-4 w-4" }) })] }) }), jsx(ce, { children: jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Projects" }), jsx("span", { className: "font-medium", children: ((_a = r.projects) == null ? void 0 : _a.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Members" }), jsx("span", { className: "font-medium", children: ((_b = r.members) == null ? void 0 : _b.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Created" }), jsx("span", { className: "font-medium", children: new Date(r.createdAt).toLocaleDateString() })] })] }) })] })] })] })] })] }) : jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-8 text-center", children: [jsx("h2", { className: "text-2xl font-bold mb-4", children: "No teamspace selected" }), jsx("p", { className: "text-muted-foreground mb-6", children: "Select a teamspace from the sidebar to view its details and projects" }), jsxs(O, { variant: "outline", children: [jsx(PlusCircle, { className: "h-4 w-4 mr-2" }), " Create New Teamspace"] })] });
};

export { xs as component };
//# sourceMappingURL=_teamspaceId--N8GkDKO.mjs.map
