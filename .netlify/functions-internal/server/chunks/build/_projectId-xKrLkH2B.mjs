import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useNavigate, Link } from '@tanstack/react-router';
import { useAtom, useSetAtom } from 'jotai';
import { ag as Sa, P as Ps, G as Ge, O, m as me, v as ve, u as ue, n as ne, c as ce, a9 as Ue, aa as Se, ab as Fe, j as v, h as la, p as Ee$1, _ as _e, q as Oe, T as Te, a3 as ge, a1 as te, e as ee, a2 as Nt, ah as Ss, a0 as dt } from '../nitro/nitro.mjs';
import { Home, ChevronRight, Briefcase, FolderOpen, Lock, MessageSquarePlus, MessageCircle, Users, Settings, Trash2, FileIcon, AlertCircle, ChevronDown, ChevronUp, UploadCloud, Upload, CheckCircle, FileText, Music, Film } from 'lucide-react';
import * as F from 'react';
import { useState, useEffect } from 'react';
import { N as Ne, p as pe, x as xe, y as ye, l as le } from './collapsible-CDbmAWwx.mjs';
import { toast } from 'sonner';
import { b, f, p, u, y, g, h, v as v$1 } from './dialog-C9He1Myg.mjs';
import { d } from './checkbox-DFHaXq5B.mjs';
import { cva } from 'class-variance-authority';
import { useFileUpload, FileUpload } from '@ark-ui/react';
import { i } from './avatar-CT0TpV53.mjs';
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

const st = cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", { variants: { variant: { default: "bg-background text-foreground", destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive", warning: "border-amber-500/50 text-amber-700 [&>svg]:text-amber-700" } }, defaultVariants: { variant: "default" } }), Ae = F.forwardRef(({ className: l, variant: g, ...u }, v$1) => jsx("div", { ref: v$1, role: "alert", className: v(st({ variant: g }), l), ...u }));
Ae.displayName = "Alert";
const lt = F.forwardRef(({ className: l, ...g }, u) => jsx("h5", { ref: u, className: v("mb-1 font-medium leading-none tracking-tight", l), ...g }));
lt.displayName = "AlertTitle";
const Ee = F.forwardRef(({ className: l, ...g }, u) => jsx("div", { ref: u, className: v("text-sm [&_p]:leading-relaxed", l), ...g }));
Ee.displayName = "AlertDescription";
function it({ project: l, onProjectUpdated: g$1, trigger: u$1, userId: v }) {
  const A = useNavigate(), P = useSetAtom(Ps), [b$1, C] = useState(false), [j, M] = useState(false), [k, D] = useState(false), [E, N] = useState(false), [i, w] = useState(""), [m, F] = useState({ name: "", description: "", isPrivate: false }), [S, T] = useState(true);
  useEffect(() => {
    var _a;
    if (b$1) {
      F({ name: l.name || "", description: l.description || "", isPrivate: l.isPrivate || false });
      const r = ((_a = l.members) == null ? void 0 : _a.length) || 0;
      T(r <= 1), N(false), w("");
    }
  }, [b$1, l]);
  const R = (r) => {
    F({ ...m, [r.target.name]: r.target.value });
  }, $ = (r) => {
    F({ ...m, isPrivate: r });
  }, O$1 = async (r) => {
    var _a;
    if (r.preventDefault(), !l.id) {
      toast.error("Project not found");
      return;
    }
    if (!m.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    if (m.isPrivate && !S && !l.isPrivate) {
      toast.error("Cannot make a project private when it has multiple members");
      return;
    }
    M(true);
    try {
      const { data: n } = await ge().chatrooms.updateProject(l.id, { teamspaceId: l.teamspaceId, context: l.context, creatorId: v, name: m.name, description: m.description, isPrivate: m.isPrivate, members: m.isPrivate ? [] : (_a = l.members) == null ? void 0 : _a.map((f) => ({ projectId: l.id, userId: f.user.id, role: f.role, invitedByUserId: v })) });
      g$1(n), toast.success("Project settings updated successfully"), C(false);
    } catch (n) {
      console.error("Error updating project:", n), toast.error("Failed to update project");
    } finally {
      M(false);
    }
  }, s = async () => {
    if (i !== l.name) {
      toast.error("Project name does not match");
      return;
    }
    D(true);
    try {
      await ge().chatrooms.deleteProject(l.id), toast.success("Project deleted successfully"), C(false), l.teamspaceId ? (P((r) => r.map((f) => ({ ...f, projects: f.projects.filter((y) => y.id !== l.id) }))), A({ to: "/teamspace/$teamspaceId", params: { teamspaceId: l.teamspaceId } })) : A({ to: "/chat" });
    } catch (r) {
      console.error("Error deleting project:", r), toast.error("Failed to delete project");
    } finally {
      D(false);
    }
  };
  return jsxs(b, { open: b$1, onOpenChange: C, children: [jsx(h, { asChild: true, children: u$1 || jsxs(O, { size: "sm", variant: "outline", className: "hover:cursor-pointer", children: [jsx(Settings, { className: "h-4 w-4 mr-2" }), " Project Settings"] }) }), jsx(f, { className: "sm:max-w-[500px]", children: E ? jsxs("div", { children: [jsxs(p, { children: [jsx("div", { className: "h-1.5 bg-red-500 w-full absolute top-0 left-0 rounded-t-lg" }), jsxs(u, { className: "text-xl mt-2 text-red-600 flex items-center", children: [jsx(Trash2, { className: "h-5 w-5 mr-2" }), " Delete Project"] }), jsx(y, { children: "This action cannot be undone. This will permanently delete the project and remove all associated chats and data." })] }), jsxs("div", { className: "py-4", children: [jsx("div", { className: "bg-red-50 border border-red-200 rounded-md p-4 mb-4", children: jsxs("div", { className: "flex items-center", children: [jsx("span", { className: "text-xl mr-2", children: "\u{1F4A9}" }), jsxs("p", { className: "text-sm text-red-800", children: ["Are you absolutely sure you want to delete ", jsx("strong", { children: l.name }), "? This action is irreversible!"] })] }) }), jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "confirmName", className: "text-sm font-medium", children: ["To confirm, type ", jsx("span", { className: "font-bold", children: l.name }), " below:"] }), jsx(ee, { id: "confirmName", value: i, onChange: (r) => w(r.target.value), placeholder: `Type "${l.name}" to confirm` })] }), jsxs("div", { className: "flex justify-between mt-6", children: [jsx(O, { type: "button", variant: "outline", onClick: () => N(false), disabled: k, children: "Cancel" }), jsx(O, { type: "button", variant: "destructive", className: "bg-red-600 hover:bg-red-700", onClick: s, disabled: i !== l.name || k, children: k ? "Deleting..." : "Permanently Delete Project" })] })] })] }) : jsxs("form", { onSubmit: O$1, children: [jsxs(p, { children: [jsx("div", { className: "h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg" }), jsx(u, { className: "text-xl mt-2", children: "Project Settings" }), jsx(y, { children: "Update the details and settings of your project" })] }), jsxs("div", { className: "grid gap-4 py-4", children: [jsxs("div", { className: "grid gap-2", children: [jsxs(te, { htmlFor: "name", children: ["Project Name ", jsx("span", { className: "text-red-500", children: "*" })] }), jsx(ee, { id: "name", name: "name", value: m.name, onChange: R, placeholder: "e.g. Marketing Campaign", required: true })] }), jsxs("div", { className: "grid gap-2", children: [jsx(te, { htmlFor: "description", children: "Description" }), jsx(Nt, { id: "description", name: "description", value: m.description, onChange: R, placeholder: "What is this project about?", rows: 3 })] }), jsxs("div", { className: "flex items-center space-x-2", children: [jsx(d, { id: "isPrivate", checked: m.isPrivate, onCheckedChange: $, disabled: !S && !l.isPrivate }), jsxs("div", { className: "grid gap-1.5 leading-none", children: [jsxs(te, { htmlFor: "isPrivate", className: `text-sm font-medium leading-none flex items-center ${!S && !l.isPrivate ? "text-muted-foreground" : ""}`, children: [jsx(Lock, { className: "h-3.5 w-3.5 mr-1.5 text-muted-foreground" }), "Make project private"] }), jsx("p", { className: "text-xs text-muted-foreground", children: "Private projects are only visible to invited members" })] })] }), !S && !l.isPrivate && jsxs(Ae, { variant: "warning", className: "bg-amber-50 text-amber-800 border-amber-200", children: [jsx(AlertCircle, { className: "h-4 w-4" }), jsx(Ee, { children: "Projects with multiple members cannot be made private" })] }), jsx("div", { className: "border-t pt-4 mt-2", children: jsxs("div", { className: "flex flex-col space-y-2", children: [jsx("h3", { className: "text-sm font-medium text-red-600", children: "Danger Zone" }), jsx("p", { className: "text-xs text-muted-foreground", children: "Once you delete a project, there is no going back. This action cannot be undone." }), jsxs(O, { type: "button", variant: "destructive", className: "mt-2 bg-red-600 hover:bg-red-700", onClick: () => N(true), children: [jsx(Trash2, { className: "h-4 w-4 mr-2" }), " Delete Project"] })] }) })] }), jsxs(g, { children: [jsx(v$1, { asChild: true, children: jsx(O, { variant: "outline", type: "button", disabled: j, children: "Cancel" }) }), jsx(O, { type: "submit", className: "bg-emerald-600 hover:bg-emerald-700", disabled: j, children: j ? "Saving..." : "Save Changes" })] })] }) })] });
}
const je = ({ teamspaceId: l = null, projectId: g = null, chatroomId: u$1 = null, organizationId: v$1, receiverIds: A = [], onUploadComplete: P, compact: b$1 = false, files: C = [], className: j = "" }) => {
  const [M, k] = useState(false), [D, E] = useState(false), [N, i] = useState(false), [w, m] = useState([]), F = useFileUpload({ maxFiles: 10, maxFileSize: 50 * 1024 * 1024 }), S = (r) => {
    const n = r.type;
    return n.startsWith("image/") || n.startsWith("video/") || n.startsWith("audio/") ? "MEDIA" : "DOCUMENT";
  }, T = () => {
    F.clearFiles(), E(false), i(false), m([]);
  }, R = (r) => {
    k(r), r || T();
  }, $ = (r) => {
    if (r === 0) return "0 Bytes";
    const n = 1024, f = ["Bytes", "KB", "MB", "GB"], y = Math.floor(Math.log(r) / Math.log(n));
    return parseFloat((r / Math.pow(n, y)).toFixed(1)) + " " + f[y];
  }, O$1 = (r, n = 28) => {
    if (!r) return "";
    if (r.length <= n) return r;
    const f = r.split(".").pop() || "", y = r.substring(0, r.length - f.length - 1);
    return y.length <= n - 6 ? r : `${y.substring(0, n - 6 - f.length)}...${f.length > 0 ? "." + f : ""}`;
  }, s = async (r) => {
    if (!r.length || !v$1) return;
    E(true), i(false);
    const n = r.map(async (p) => {
      try {
        const I = new FormData(), a = S(p), c = { teamspaceId: l || null, projectId: g || null, chatroomId: u$1 || null, organizationId: v$1, uploadType: a };
        I.append("metadata", JSON.stringify(c)), A.length > 0 && I.append("receiverIds", JSON.stringify(A)), I.append("file", p);
        const o = await ge().fileManagement.uploadFilesWithMetadata("POST", I);
        if (!o.ok) throw new Error(`Upload failed for ${p.name}: ${o.statusText} (${o.status})`);
        return console.log(`Upload successful for: ${p.name}`), { success: true, fileName: p.name, fileSize: p.size, fileType: p.type, uploadType: a };
      } catch (I) {
        return console.error(`Error uploading file ${p.name}:`, I instanceof Error ? I.message : String(I)), { success: false, fileName: p.name, error: I instanceof Error ? I.message : String(I) };
      }
    }), f = await Promise.allSettled(n), y = f.filter((p) => p.status === "fulfilled" && p.value.success === true).map((p) => p.value);
    f.filter((p) => p.status === "rejected" || p.status === "fulfilled" && !p.value.success), m(y), E(false), i(true), P && y.length > 0 && P(y);
  };
  return jsxs(b, { open: M, onOpenChange: R, children: [jsx(h, { asChild: true, children: jsxs(O, { variant: "outline", size: b$1 ? "sm" : "default", className: v("text-emerald-600 border-emerald-200 hover:bg-emerald-50", j), children: [jsx(UploadCloud, { className: v("mr-2", b$1 ? "h-4 w-4" : "h-5 w-5") }), "Upload"] }) }), jsxs(f, { className: "sm:max-w-md w-[95vw] max-h-[90vh] overflow-hidden flex flex-col", children: [jsx(p, { className: "flex-shrink-0", children: jsx(u, { children: "Upload Files" }) }), jsx("div", { className: "py-4 flex-1 overflow-y-auto", children: jsx(FileUpload.RootProvider, { value: F, children: jsxs("div", { className: "w-full", children: [jsx(FileUpload.Context, { children: (r) => jsxs(Fragment, { children: [r.acceptedFiles.length === 0 && !N && jsx(FileUpload.Dropzone, { className: "border-2 border-dashed border-gray-300 rounded-lg text-center p-4 sm:p-8 bg-gray-50 hover:bg-gray-100 transition-colors", children: jsxs("div", { className: "flex flex-col items-center", children: [jsx(UploadCloud, { className: "h-10 w-10 sm:h-12 sm:w-12 text-emerald-500 mb-3" }), jsx("p", { className: "text-gray-700 font-medium mb-1", children: "Drag and drop files here" }), jsx("p", { className: "text-gray-500 text-sm mb-4", children: "or" }), jsx(FileUpload.Trigger, { asChild: true, children: jsx(O, { children: "Choose Files" }) })] }) }), r.acceptedFiles.length > 0 && !D && !N && jsxs("div", { className: "space-y-4", children: [jsx("div", { className: "border rounded-md", children: jsx("div", { className: "max-h-[30vh] overflow-y-auto space-y-1 px-2 py-2", children: r.acceptedFiles.map((n) => jsxs(FileUpload.Item, { file: n, className: "flex items-center p-2 rounded hover:bg-gray-50 transition-colors", children: [jsx(FileUpload.ItemPreview, { type: "image/*", className: "w-10 h-10 min-w-[2.5rem] mr-3 bg-gray-100 flex items-center justify-center rounded overflow-hidden", children: jsx(FileUpload.ItemPreviewImage, { className: "max-w-full max-h-full object-cover" }) }), jsx(FileUpload.ItemPreview, { type: ".*", className: "w-10 h-10 min-w-[2.5rem] mr-3 bg-gray-100 flex items-center justify-center rounded", children: jsx(FileIcon, { className: "h-5 w-5 text-gray-500" }) }), jsxs("div", { className: "flex-1 min-w-0 pr-2", children: [jsx("div", { className: "font-medium text-sm truncate", title: n.name, children: O$1(n.name) }), jsx("div", { className: "text-xs text-gray-500", children: $(n.size) })] }), jsx(FileUpload.ItemDeleteTrigger, { className: "ml-1 text-red-500 hover:text-red-700 p-1 flex-shrink-0", children: jsx(Trash2, { className: "h-4 w-4" }) })] }, `${n.name}-${n.size}`)) }) }), jsxs("div", { className: "flex flex-col space-y-2", children: [jsxs(O, { onClick: () => s(r.acceptedFiles), className: "w-full", children: [jsx(Upload, { className: "h-4 w-4 mr-2" }), "Upload ", r.acceptedFiles.length, " File", r.acceptedFiles.length !== 1 ? "s" : ""] }), jsx("div", { className: "text-center", children: jsxs(FileUpload.Trigger, { className: "text-xs text-emerald-600 hover:underline inline-flex items-center", children: [jsx("span", { className: "mr-1", children: "+" }), "Add More Files"] }) })] })] }), D && jsxs("div", { className: "py-8 flex flex-col items-center justify-center", children: [jsxs("div", { className: "w-16 h-16 relative mb-4", children: [jsx("div", { className: "w-full h-full rounded-full border-4 border-emerald-100 animate-pulse" }), jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: jsxs("svg", { className: "animate-spin h-8 w-8 text-emerald-500", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }) })] }), jsx("p", { className: "font-medium text-gray-700", children: "Uploading files..." }), jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Please wait while your files are being uploaded" })] }), N && jsxs("div", { className: "py-8 flex flex-col items-center justify-center", children: [jsx("div", { className: "w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4", children: jsx(CheckCircle, { className: "h-8 w-8 text-emerald-600" }) }), jsx("p", { className: "font-medium text-gray-700", children: "Upload Complete!" }), jsxs("p", { className: "text-sm text-gray-500 mt-1 mb-4", children: ["Successfully uploaded ", w.length, " file", w.length !== 1 ? "s" : ""] }), jsxs("div", { className: "flex space-x-3", children: [jsx(O, { onClick: () => {
    T(), k(false);
  }, variant: "outline", children: "Close" }), jsx(O, { onClick: () => {
    T();
  }, children: "Upload More Files" })] })] })] }) }), jsx(FileUpload.HiddenInput, {})] }) }) })] })] });
}, nt = (l) => {
  if (!l || !l.fileType) return jsx("div", { className: "flex items-center justify-center h-full w-full bg-gray-200", children: jsx(FileIcon, { className: "h-4 w-4 text-gray-500" }) });
  switch (l.fileType) {
    case "IMAGE":
      return jsx("div", { className: "relative w-full h-full bg-gray-100 overflow-hidden", children: jsx("img", { src: l.fileUrl || "", alt: l.fileName || "Image preview", className: "h-full w-full object-cover", loading: "lazy", onError: (g) => {
        g.target.outerHTML = '<div class="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><path d="M8.5 10.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5Z"/><path d="M21 15l-5-5L5 21"/><path d="m2 2 20 20"/><path d="M14.5 4.5h6v6"/><path d="M17 11.5a5 5 0 1 0-8-4"/></svg></div>';
      } }) });
    case "VIDEO":
      return jsx("div", { className: "bg-gradient-to-br from-indigo-50 to-indigo-100 h-full w-full flex items-center justify-center", children: jsx(Film, { className: "h-4 w-4 text-indigo-500" }) });
    case "AUDIO":
      return jsx("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 h-full w-full flex items-center justify-center", children: jsx(Music, { className: "h-4 w-4 text-purple-500" }) });
    case "PDF":
      return jsx("div", { className: "bg-gradient-to-br from-red-50 to-red-100 h-full w-full flex items-center justify-center", children: jsx(FileText, { className: "h-4 w-4 text-red-500" }) });
    case "DOCUMENT":
      return jsx("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 h-full w-full flex items-center justify-center", children: jsx(FileText, { className: "h-4 w-4 text-blue-500" }) });
    case "FILE":
    default:
      return jsx("div", { className: "bg-gradient-to-br from-gray-50 to-gray-100 h-full w-full flex items-center justify-center", children: jsx(FileIcon, { className: "h-4 w-4 text-gray-500" }) });
  }
}, Ie = (l) => {
  switch (l) {
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
}, ct = ({ members: l }) => {
  const [g, u] = useState(false), [v, A] = useState(false), P = 5, b = l.filter((i, w, m) => w === m.findIndex((F) => {
    var _a, _b;
    return ((_a = F.user) == null ? void 0 : _a.id) === ((_b = i.user) == null ? void 0 : _b.id);
  })), C = b.filter((i) => !i.hasLeft), j = b.filter((i) => i.hasLeft), M = (i, w) => {
    const m = { OWNER: 0, ADMIN: 1, CONTRIBUTOR: 2, VIEWER: 3 };
    return (m[i.role] || 4) - (m[w.role] || 4);
  }, k = [...C].sort(M), D = [...j].sort(M), E = g ? k : k.slice(0, C.length >= P ? P : C.length), N = C.length > P && !g;
  return jsxs("div", { className: "space-y-3", children: [jsx("div", { children: E.map((i$1) => {
    var _a, _b, _c, _d, _e2, _f;
    return jsx("div", { className: "py-1.5", children: jsxs("div", { className: "relative flex items-center justify-between group", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(i, { className: "h-7 w-7", children: ((_a = i$1.user) == null ? void 0 : _a.image) ? jsx("img", { src: i$1.user.image, alt: ((_b = i$1.user) == null ? void 0 : _b.name) || "User" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = i$1.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx(la, { children: jsxs(Ee$1, { children: [jsx(_e, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px]", children: ((_d = i$1.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Oe, { children: [jsx("p", { children: ((_e2 = i$1.user) == null ? void 0 : _e2.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = i$1.user) == null ? void 0 : _f.email })] })] }) })] }), jsx(dt, { className: Ie(i$1.role), children: i$1.role })] }) }, i$1.id);
  }) }), N && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => u(true), children: jsxs("span", { className: "flex items-center", children: ["Show ", C.length - P, " More ", jsx(ChevronDown, { className: "ml-1 h-3 w-3" })] }) }), g && C.length > P && jsx(O, { variant: "ghost", size: "sm", className: "w-full text-xs h-7", onClick: () => u(false), children: jsxs("span", { className: "flex items-center", children: ["Show Less ", jsx(ChevronUp, { className: "ml-1 h-3 w-3" })] }) }), j.length > 0 && jsxs(xe, { open: v, onOpenChange: A, className: "mt-3", children: [jsxs("div", { className: "flex items-center text-xs text-muted-foreground", children: [jsx("div", { className: "h-px bg-border flex-grow mr-2" }), jsx(ye, { asChild: true, children: jsxs("button", { className: "flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors", children: [jsxs("span", { children: ["Former Members (", j.length, ")"] }), v ? jsx(ChevronUp, { className: "h-3 w-3" }) : jsx(ChevronDown, { className: "h-3 w-3" })] }) }), jsx("div", { className: "h-px bg-border flex-grow ml-2" })] }), jsx(le, { className: "pt-2", children: jsx("div", { className: "space-y-1.5", children: D.map((i$1) => {
    var _a, _b, _c, _d, _e2, _f;
    return jsx("div", { children: jsxs("div", { className: "relative flex items-center justify-between group py-1.5", children: [jsx("div", { className: "absolute inset-0 rounded-md bg-muted/30 pointer-events-none" }), jsxs("div", { className: "flex items-center gap-2 z-10", children: [jsxs("div", { className: "relative", children: [jsx(i, { className: "h-7 w-7", children: ((_a = i$1.user) == null ? void 0 : _a.image) ? jsx("img", { src: i$1.user.image, alt: ((_b = i$1.user) == null ? void 0 : _b.name) || "User", className: "filter grayscale" }) : jsx("div", { className: "bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs", children: (((_c = i$1.user) == null ? void 0 : _c.name) || "U").charAt(0) }) }), jsx("div", { className: "absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center", children: jsx("span", { className: "text-[8px]", children: "\xD7" }) })] }), jsx(la, { children: jsxs(Ee$1, { children: [jsx(_e, { asChild: true, children: jsx("span", { className: "text-sm font-medium truncate max-w-[120px] text-muted-foreground", children: ((_d = i$1.user) == null ? void 0 : _d.name) || "Unknown User" }) }), jsxs(Oe, { children: [jsx("p", { children: ((_e2 = i$1.user) == null ? void 0 : _e2.name) || "Unknown User" }), jsx("p", { className: "text-xs text-muted-foreground", children: (_f = i$1.user) == null ? void 0 : _f.email }), jsx("p", { className: "text-xs text-red-500 mt-1", children: "No longer a member" })] })] }) })] }), jsx(dt, { className: `${Ie(i$1.role)} opacity-70`, children: i$1.role })] }) }, i$1.id);
  }) }) })] })] });
}, tr = function() {
  var _a, _b, _c, _d, _e2;
  const { projectId: g$1 } = Sa.useParams(), [u$1, v$1] = useState(false), [A, P] = useState(true), [b$1, C] = useState(""), [j, M] = useState(""), [k, D] = useState(false), [E, N] = useState(false), [i, w] = useState(null), [m, F] = useState(false), [S, T] = useAtom(Ps), R = useSetAtom(Ge), $ = Sa.useRouteContext(), [O$1] = useState($.userId), s = S.flatMap((a) => a.projects || []).find((a) => a.id === g$1), r = S.find((a) => a.id === (s == null ? void 0 : s.teamspaceId));
  useEffect(() => {
    s && (P(false), console.log("files", s.files));
  }, [s]);
  const n = useNavigate();
  if (A) return jsxs("div", { className: "flex-1 flex flex-col h-full", children: [jsx("div", { className: "h-1.5 bg-gray-200 w-full" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1", children: [jsxs("div", { className: "mb-8 relative", children: [jsx(Ne, { className: "h-10 w-60 mb-2" }), jsx(Ne, { className: "h-4 w-full max-w-md mb-4" })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsxs("div", { className: "md:col-span-2 space-y-6", children: [jsx("div", { children: jsx(Ne, { className: "h-32 w-full mb-6" }) }), jsxs("div", { children: [jsx("div", { className: "flex justify-between items-center mb-4", children: jsx(Ne, { className: "h-8 w-40" }) }), jsxs("div", { className: "space-y-3", children: [jsx(Ne, { className: "h-16 w-full" }), jsx(Ne, { className: "h-16 w-full" })] })] })] }), jsxs("div", { className: "space-y-6", children: [jsx(Ne, { className: "h-60 w-full" }), jsx(Ne, { className: "h-60 w-full" })] })] })] })] });
  if (!s) return jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-8 text-center", children: [jsx("h2", { className: "text-2xl font-bold mb-4", children: "Project not found" }), jsx("p", { className: "text-muted-foreground mb-6", children: "The project you're looking for doesn't exist or you don't have access to it." }), r ? jsx(O, { variant: "outline", asChild: true, children: jsx(Link, { to: "/teamspace/$teamspaceId", params: { teamspaceId: r.id }, children: "Back to Teamspace" }) }) : jsx(O, { variant: "outline", asChild: true, children: jsx(Link, { to: "/chat", children: "Go to Chat" }) })] });
  const f$1 = async (a = "") => {
    var _a2;
    if (u$1) return;
    v$1(true);
    const c = Ss({ currentUserId: O$1, project: s, teamspace: r });
    try {
      const { data: o } = await ge().chatrooms.createChatroom({ chatroomCreatorId: O$1, chatroomMembers: c, isPrivate: false, projectId: s.id, name: a.trim() || "New Chat Conversation", teamIds: [], type: "PROJECT_CHATROOM" });
      (_a2 = s.chatrooms) == null ? void 0 : _a2.push(o), R(o), n({ to: "/chat/$chatroomId", params: { chatroomId: o.id } });
    } catch (o) {
      console.error("Error creating chatroom:", o);
    } finally {
      v$1(false), N(false), M("");
    }
  }, y$1 = async () => {
    var _a2;
    if (!(!b$1.trim() || u$1)) try {
      v$1(true);
      const a = Ss({ currentUserId: O$1, project: s, teamspace: r }), { data: c } = await ge().chatrooms.createChatroom({ chatroomCreatorId: O$1, chatroomMembers: a, isPrivate: false, projectId: s.id, name: "New Chat Conversation", teamIds: [], type: "PROJECT_CHATROOM" });
      (_a2 = s.chatrooms) == null ? void 0 : _a2.push(c), localStorage.setItem("pendingMessage", b$1), R(c), n({ to: "/chat/$chatroomId", params: { chatroomId: c.id } });
    } catch (a) {
      console.error("Error starting quick chat:", a), v$1(false);
    }
  }, p$1 = (a) => {
    const c = S.map((o) => {
      var _a2;
      return o.id === (r == null ? void 0 : r.id) ? { ...o, projects: (_a2 = o.projects) == null ? void 0 : _a2.map((x) => x.id === (s == null ? void 0 : s.id) ? a : x) } : o;
    });
    T(c);
  }, I = async (a) => {
    if (!(!a.id || m)) try {
      F(true), await ge().chatrooms.deleteOneProjectFile({ fileId: a.id, projectId: s.id }), T((c) => c.map((o) => {
        var _a2;
        return o.id === (r == null ? void 0 : r.id) ? { ...o, projects: (_a2 = o.projects) == null ? void 0 : _a2.map((x) => {
          var _a3;
          return x.id === (s == null ? void 0 : s.id) ? { ...x, files: (_a3 = x.files) == null ? void 0 : _a3.filter((W) => W.id !== a.id) } : x;
        }) } : o;
      }));
    } catch (c) {
      console.error("Error deleting file:", c);
    } finally {
      F(false), w(null);
    }
  };
  return jsxs("div", { className: "flex-1 flex flex-col h-full", children: [jsx("div", { className: "h-1.5 bg-emerald-500 w-full flex-shrink-0" }), jsxs("div", { className: "p-6 max-w-5xl mx-auto w-full flex-1 overflow-y-auto", children: [jsxs("div", { className: "flex items-center text-sm text-muted-foreground mb-4", children: [jsxs(Link, { to: "/chat", className: "flex items-center hover:text-foreground transition-colors", children: [jsx(Home, { className: "h-3.5 w-3.5 mr-1" }), "Home"] }), r && jsxs(Fragment, { children: [jsx(ChevronRight, { className: "h-3.5 w-3.5 mx-1.5" }), jsxs(Link, { to: "/teamspace/$teamspaceId", params: { teamspaceId: r.id }, className: "flex items-center hover:text-foreground transition-colors", children: [jsx(Briefcase, { className: "h-3.5 w-3.5 mr-1.5" }), r.name] })] }), jsx(ChevronRight, { className: "h-3.5 w-3.5 mx-1.5" }), jsxs("span", { className: "font-medium text-foreground flex items-center", children: [jsx(FolderOpen, { className: "h-3.5 w-3.5 mr-1.5" }), "Project"] })] }), jsxs("div", { className: "mb-8 relative", children: [jsxs("div", { className: "flex items-center gap-3 mb-2", children: [jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700", children: jsx(FolderOpen, { className: "h-5 w-5" }) }), jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold", children: s.name }), jsxs("div", { className: "flex items-center mt-1", children: [jsx("span", { className: "inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20", children: "Project" }), s.isPrivate && jsxs("span", { className: "ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20", children: [jsx(Lock, { className: "h-3 w-3 mr-1" }), "Private"] }), r && jsxs("span", { className: "ml-2 text-sm text-muted-foreground flex items-center", children: [jsx(Briefcase, { className: "h-3 w-3 mr-1" }), r.name] })] })] })] }), jsx("div", { className: "mt-2", children: jsx("p", { className: "text-muted-foreground", children: s.description || "No description provided" }) }), jsx("div", { className: "absolute top-0 right-0", children: jsx(it, { project: s, userId: O$1, onProjectUpdated: p$1 }) })] }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [jsxs("div", { className: "md:col-span-2 space-y-6", children: [jsxs(me, { className: "border-b-4 border-b-emerald-500", children: [jsxs(ve, { className: "pb-3", children: [jsx(ue, { children: "New chat in this project" }), jsx(ne, { children: "Start a new conversation in the context of this project" })] }), jsx(ce, { children: jsxs(Ue, { value: b$1, onChange: (a) => C(a.target.value), onSubmit: y$1, hasMessages: false, children: [jsx(Se, { placeholder: u$1 ? "Creating chat..." : "Type a message to start a new chat...", disabled: u$1, onKeyDown: (a) => {
    a.key === "Enter" && !a.shiftKey && (a.preventDefault(), y$1());
  } }), jsx(Fe, { disabled: u$1 || !b$1.trim() })] }) })] }), jsxs("div", { children: [jsxs("div", { className: "flex justify-between items-center mb-4", children: [jsx("h2", { className: "text-xl font-semibold", children: "Chats in this project" }), E ? jsxs("div", { className: "flex items-center gap-2", children: [jsx("input", { type: "text", className: "px-3 py-1 border rounded-md text-sm", placeholder: "Chatroom name...", value: j, onChange: (a) => M(a.target.value), onKeyDown: (a) => {
    a.key === "Enter" ? f$1(j) : a.key === "Escape" && (N(false), M(""));
  }, autoFocus: true }), jsx(O, { size: "sm", onClick: () => f$1(j), disabled: u$1, className: "bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer", children: "Create" }), jsx(O, { size: "sm", variant: "ghost", onClick: () => {
    N(false), M("");
  }, className: "hover:cursor-pointer", children: "Cancel" })] }) : jsxs(O, { size: "sm", onClick: () => N(true), disabled: u$1, className: "bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer", children: [jsx(MessageSquarePlus, { className: "h-4 w-4 mr-2" }), " New Chat"] })] }), s.chatrooms && s.chatrooms.length > 0 ? jsx("div", { className: "space-y-3", children: s.chatrooms.map((a) => {
    var _a2;
    return jsx(me, { className: v("cursor-pointer transition-all border-l-4 border-l-transparent", "hover:shadow-md hover:border-l-emerald-500 hover:bg-muted/30"), onClick: () => {
      R(a), n({ to: "/chat" });
    }, children: jsx(ve, { className: "py-3", children: jsxs("div", { className: "flex items-center justify-between", children: [jsxs(ue, { className: "text-base flex items-center", children: [jsx(MessageCircle, { className: "h-4 w-4 mr-2" }), a.name, a.isPrivate && jsx(la, { children: jsxs(Ee$1, { children: [jsx(_e, { asChild: true, children: jsx("span", { children: jsx(Lock, { className: "h-3 w-3 ml-2 text-red-500" }) }) }), jsx(Oe, { children: jsx("p", { children: "Private" }) })] }) })] }), jsx("div", { className: "flex items-center gap-3 text-muted-foreground text-xs", children: jsxs("div", { className: "flex items-center", children: [jsx(Users, { className: "h-3 w-3 mr-1" }), ((_a2 = a.members) == null ? void 0 : _a2.length) || 1] }) })] }) }) }, a.id);
  }) }) : jsxs("div", { className: "border rounded-lg p-8 text-center bg-muted/20", children: [jsx("h3", { className: "font-medium mb-2", children: "No chats yet" }), jsx("p", { className: "text-muted-foreground mb-4", children: "Start by creating your first chat in this project" }), jsxs(O, { variant: "outline", onClick: () => N(true), className: "border-emerald-600/20 text-emerald-700 hover:bg-emerald-50", children: [jsx(MessageSquarePlus, { className: "h-4 w-4 mr-2" }), " Create Chat"] })] })] })] }), jsxs("div", { className: "space-y-6", children: [jsxs(me, { className: "border-t-4 border-t-emerald-500", children: [jsxs(ve, { children: [jsxs(ue, { className: "flex items-center justify-between", children: [jsx("span", { children: "Project Context" }), jsx(O, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0 hover:cursor-pointer", onClick: () => D(!k), children: jsx(Settings, { className: "h-4 w-4" }) })] }), jsx(ne, { children: "Information about this project's purpose" })] }), jsx(ce, { children: k ? jsxs("div", { className: "space-y-4", children: [jsx("textarea", { className: "w-full min-h-[150px] p-3 border rounded-md", placeholder: "Describe what this teamspace is used for...", value: s.context }), jsxs("div", { className: "flex justify-end space-x-2", children: [jsx(O, { variant: "outline", size: "sm", onClick: () => D(false), children: "Cancel" }), jsx(O, { size: "sm", onClick: () => D(false), children: "Save" })] })] }) : jsx("div", { className: "text-sm", children: jsx("p", { children: s.context }) }) })] }), jsxs(me, { className: "border-t-4 border-t-emerald-500", children: [jsxs(ve, { children: [jsx(ue, { children: "Members" }), jsx(ne, { children: "People with access to this project" })] }), jsx(ce, { children: s.members && s.members.length > 0 ? jsx(ct, { members: s.members }) : jsx("div", { className: "text-sm text-muted-foreground", children: "Only you have access to this project" }) }), jsx(Te, { children: jsx(pe, { type: "project", projectId: s.id, teamspaceId: s.teamspaceId, members: s.members || [], userId: O$1, onMembersChanged: () => {
    ge().chatrooms.getTeamspaces().then(({ data: a }) => {
      a && T(a);
    });
  }, children: jsxs(O, { size: "sm", variant: "outline", className: "w-full border-emerald-600/20 text-emerald-700 hover:bg-emerald-50 hover:cursor-pointer", children: [jsx(Users, { className: "h-4 w-4 mr-2" }), " Manage Members"] }) }) })] }), jsxs(me, { className: "border-t-4 border-t-emerald-500", children: [jsx(ve, { children: jsx(ue, { children: "Project Stats" }) }), jsx(ce, { children: jsxs("div", { className: "space-y-2", children: [jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Chats" }), jsx("span", { className: "font-medium", children: ((_a = s.chatrooms) == null ? void 0 : _a.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Members" }), jsx("span", { className: "font-medium", children: ((_b = s.members) == null ? void 0 : _b.length) || 1 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Files" }), jsx("span", { className: "font-medium", children: ((_c = s.files) == null ? void 0 : _c.length) || 0 })] }), jsxs("div", { className: "flex justify-between", children: [jsx("span", { className: "text-muted-foreground", children: "Created" }), jsx("span", { className: "font-medium", children: new Date(s.createdAt).toLocaleDateString() })] }), s.isPrivate && jsxs("div", { className: "flex justify-between items-center pt-2 mt-2 border-t", children: [jsxs("span", { className: "text-muted-foreground flex items-center", children: [jsx(Lock, { className: "h-3.5 w-3.5 mr-1.5 text-red-500" }), "Visibility"] }), jsx("span", { className: "font-medium text-sm bg-gray-100 px-2 py-0.5 rounded", children: "Private" })] })] }) })] }), jsxs(me, { className: "border-t-4 border-t-emerald-500", children: [jsxs(ve, { className: "pb-2", children: [jsxs(ue, { className: "flex items-center justify-between", children: [jsx("span", { children: "Project Files" }), s.files && s.files.length > 0 && jsx(je, { teamspaceId: r == null ? void 0 : r.id, projectId: s.id, organizationId: ((_d = $.session) == null ? void 0 : _d.activeOrganizationId) || "", compact: true, files: s.files || [], className: "ml-auto", onUploadComplete: (a) => {
    console.log("Files uploaded successfully", a), ge().chatrooms.getProject(s.id).then(({ data: c }) => {
      c && T((o) => o.map((x) => {
        var _a2;
        return x.id === (r == null ? void 0 : r.id) ? { ...x, projects: (_a2 = x.projects) == null ? void 0 : _a2.map((W) => W.id === s.id ? c : W) } : x;
      }));
    }).catch((c) => {
      console.error("Error refreshing project data:", c);
    });
  } })] }), jsx(ne, { children: "Upload and manage files for this project" })] }), jsx(ce, { children: s.files && s.files.length > 0 ? jsx("div", { className: "space-y-2 max-h-64 overflow-y-auto pr-1", children: s.files.map((a, c) => jsxs("div", { className: "flex items-center p-2 border rounded bg-white hover:bg-gray-50 transition-colors", children: [jsx("div", { className: "w-10 h-10 mr-3 bg-gray-100 flex items-center justify-center rounded overflow-hidden flex-shrink-0", children: nt(a) }), jsxs("div", { className: "flex-1 truncate", children: [jsx("a", { href: a.fileUrl, target: "_blank", rel: "noopener noreferrer", className: "font-medium text-sm truncate hover:underline hover:text-emerald-600", title: a.fileName, children: a.fileName || `File ${c + 1}` }), jsx("p", { className: "text-xs text-muted-foreground", children: new Date(a.createdAt).toLocaleDateString() })] }), jsx(O, { variant: "ghost", size: "sm", className: "text-red-500 hover:text-red-700 hover:bg-red-50", onClick: (o) => {
    o.preventDefault(), o.stopPropagation(), w(a);
  }, children: jsx(Trash2, { className: "h-4 w-4" }) })] }, a.id || c)) }) : jsxs("div", { className: "text-center py-8 bg-muted/10 rounded-lg border border-dashed min-h-[160px] flex flex-col items-center justify-center", children: [jsx("div", { className: "bg-gray-50 p-4 rounded-full mb-3", children: jsx(FileIcon, { className: "h-8 w-8 text-emerald-600" }) }), jsx("p", { className: "text-base font-medium text-gray-700 mb-1", children: "No files uploaded yet" }), jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Add files to this project" }), jsx(je, { teamspaceId: r == null ? void 0 : r.id, projectId: s.id, organizationId: ((_e2 = $.session) == null ? void 0 : _e2.activeOrganizationId) || "", onUploadComplete: (a) => {
    console.log("Files uploaded successfully", a), ge().chatrooms.getProject(s.id).then(({ data: c }) => {
      c && T((o) => o.map((x) => {
        var _a2;
        return x.id === (r == null ? void 0 : r.id) ? { ...x, projects: (_a2 = x.projects) == null ? void 0 : _a2.map((W) => W.id === s.id ? c : W) } : x;
      }));
    }).catch((c) => {
      console.error("Error refreshing project data:", c);
    });
  } })] }) })] })] })] })] }), jsx(b, { open: !!i, onOpenChange: (a) => !a && w(null), children: jsxs(f, { children: [jsxs(p, { children: [jsxs(u, { className: "flex items-center", children: [jsx(AlertCircle, { className: "h-5 w-5 text-red-500 mr-2" }), "Delete File"] }), jsxs(y, { children: ["Are you sure you want to delete ", jsx("span", { className: "font-medium", children: i == null ? void 0 : i.fileName }), "? This action cannot be undone."] })] }), jsxs(g, { children: [jsx(O, { variant: "outline", onClick: () => w(null), disabled: m, children: "Cancel" }), jsx(O, { variant: "destructive", onClick: () => i && I(i), className: "bg-red-600 hover:bg-red-700 text-white", disabled: m, children: m ? "Deleting..." : "Delete" })] })] }) })] });
};

export { tr as component };
//# sourceMappingURL=_projectId-xKrLkH2B.mjs.map
