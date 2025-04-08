import{jsx as e,jsxs as a}from"react/jsx-runtime";import{UserPlus as X,MoreHorizontal as Z,Settings as A,Trash2 as z}from"lucide-react";import*as c from"react";import{useState as h,useMemo as ee}from"react";import{Label as ae}from"@radix-ui/react-label";import{k as m,A as se,B as d,ae as le,C as N,a as O,b as R,c as j,d as v,J as ne,K as ie,M as te,N as re,Q as S,O as de,a5 as w}from"./ssr-CRECmsRj.js";import{D as L,a as oe,b as H,d as P,f as G,c as ce,e as me}from"./dialog-D-gnK3nI.js";import{toast as F}from"sonner";import{C as he}from"./checkbox-CemXfzpm.js";import"@tanstack/react-router";import"jotai";import"@tanstack/router-core";import"@tanstack/start-client-core";import"@tanstack/start-server-core";import"zod";import"@radix-ui/react-slot";import"class-variance-authority";import"clsx";import"tailwind-merge";import"better-auth/react";import"better-auth/client/plugins";import"input-otp";import"@radix-ui/react-select";import"@radix-ui/react-tooltip";import"@radix-ui/react-radio-group";import"@radix-ui/react-scroll-area";import"framer-motion";import"motion/react";import"@radix-ui/react-dropdown-menu";import"uuid";import"marked";import"react-markdown";import"remark-gfm";import"@radix-ui/react-hover-card";import"qss";import"@radix-ui/react-dialog";import"tiny-invariant";import"node:stream";import"isbot";import"react-dom/server";import"@radix-ui/react-checkbox";const B=c.forwardRef(({className:t,...i},n)=>e("div",{className:"relative w-full overflow-auto",children:e("table",{ref:n,className:m("w-full caption-bottom text-sm",t),...i})}));B.displayName="Table";const $=c.forwardRef(({className:t,...i},n)=>e("thead",{ref:n,className:m("[&_tr]:border-b",t),...i}));$.displayName="TableHeader";const Y=c.forwardRef(({className:t,...i},n)=>e("tbody",{ref:n,className:m("[&_tr:last-child]:border-0",t),...i}));Y.displayName="TableBody";const pe=c.forwardRef(({className:t,...i},n)=>e("tfoot",{ref:n,className:m("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...i}));pe.displayName="TableFooter";const y=c.forwardRef(({className:t,...i},n)=>e("tr",{ref:n,className:m("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...i}));y.displayName="TableRow";const p=c.forwardRef(({className:t,...i},n)=>e("th",{ref:n,className:m("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...i}));p.displayName="TableHead";const u=c.forwardRef(({className:t,...i},n)=>e("td",{ref:n,className:m("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...i}));u.displayName="TableCell";const ue=c.forwardRef(({className:t,...i},n)=>e("caption",{ref:n,className:m("mt-4 text-sm text-muted-foreground",t),...i}));ue.displayName="TableCaption";const ge=({viewMode:t,onChange:i})=>a("div",{className:"border rounded-md p-1 flex",children:[a(d,{variant:t==="grid"?"default":"ghost",size:"sm",className:"rounded-sm",onClick:()=>i("grid"),children:[a("div",{className:"grid grid-cols-2 gap-0.5 h-3 w-3 mr-2",children:[e("div",{className:"bg-current rounded-sm"}),e("div",{className:"bg-current rounded-sm"}),e("div",{className:"bg-current rounded-sm"}),e("div",{className:"bg-current rounded-sm"})]}),"Grid"]}),a(d,{variant:t==="table"?"default":"ghost",size:"sm",className:"rounded-sm",onClick:()=>i("table"),children:[a("div",{className:"flex flex-col justify-between h-3 w-3 mr-2",children:[e("div",{className:"bg-current h-0.5 w-full rounded-sm"}),e("div",{className:"bg-current h-0.5 w-full rounded-sm"}),e("div",{className:"bg-current h-0.5 w-full rounded-sm"})]}),"Table"]})]}),U=[{id:"gpt-4o",name:"GPT-4o",enabled:!0},{id:"gpt-4o-mini",name:"GPT-4o Mini",enabled:!0},{id:"claude-3.5-sonnet",name:"Claude 3.5 Sonnet",enabled:!1},{id:"claude-3-opus",name:"Claude 3 Opus",enabled:!1},{id:"claude-3-haiku",name:"Claude 3 Haiku",enabled:!1},{id:"gemini-1.5-pro",name:"Gemini 1.5 Pro",enabled:!1},{id:"gemini-1.5-flash",name:"Gemini 1.5 Flash",enabled:!1}],sa=function(){const{data:i}=se(),n=i,[g,E]=h([]),[_,f]=h(!1),[J,x]=h(!1),[b,K]=h(null),[C,M]=h(!1),[T,Q]=h("grid"),I=ee(()=>{const s=n?.members.map(r=>({id:r.id,invitationId:void 0,email:r.user.email,name:r.user.name,status:"accepted",role:r.role,models:U})),o=n?.invitations.filter(r=>r.status==="pending")?.map(r=>({id:void 0,invitationId:r.id,email:r.email,name:r.email.split("@")[0]??"Unkown Name",status:r.status,role:r.role,models:U}));return[...s??[],...o??[]]},[n]),V=async()=>{const s=g.filter(l=>n.invitations.some(o=>o.email.toLowerCase()===l.email.toLowerCase()&&o.status==="pending")||n.members.some(o=>o.user.email.toLowerCase()===l.email.toLowerCase()));if(s.length>0){let l=s.map(o=>o.email+", ").toString();l=l.substring(0,l.length-2),F.error(`You have already invited ${l}.`);return}M(!0),await Promise.all(g.map(async l=>{await w.inviteMember({email:l.email,role:l.role,organizationId:n.id})})),F.success(`${g.length} new invitations have been sent succesfully - wait for their acceptantance.`),M(!1),f(!1)},D=async(s,l)=>{s&&!l?await w.removeMember({memberIdOrEmail:s,organizationId:n.id}):l&&await w.cancelInvitation({invitationId:l})},q=s=>{},W=()=>{},k=s=>{K({...s}),x(!0)};return n?a("div",{className:"space-y-6 m-8",children:[a("div",{className:"flex items-center justify-between",children:[a("div",{children:[a("h1",{className:"text-3xl font-bold tracking-tight",children:[n?.name+" - "," Team Members"]}),e("p",{className:"text-muted-foreground mt-1",children:"Manage your organization's team members and their permissions"})]}),a("div",{className:"flex items-center gap-2",children:[e(ge,{viewMode:T,onChange:Q}),a(L,{open:_,onOpenChange:f,children:[e(oe,{asChild:!0,children:a(d,{children:[e(X,{className:"mr-2 h-4 w-4"}),"Invite Member"]})}),a(H,{className:"min-w-1/3 flex flex-col items-center",children:[e(P,{className:"text-center",children:"Invite new members"}),e(le,{invitees:g,setInvitees:E}),a(G,{children:[e(d,{variant:"outline",onClick:()=>f(!1),children:"Cancel"}),e(d,{onClick:V,disabled:g.length===0||C,children:C?"Sending...":"Send Invitation"})]})]})]})]})]}),e(L,{open:J,onOpenChange:x,children:a(H,{className:"sm:max-w-md",children:[a(ce,{children:[e(P,{children:"AI Model Access"}),a(me,{children:["Configure which AI models ",b?.name," can access"]})]}),e("div",{className:"space-y-4 py-2 max-h-[60vh] overflow-y-auto",children:b?.models.map(s=>a("div",{className:"flex items-center justify-between py-2 border-b",children:[a("div",{className:"flex items-center space-x-2",children:[e(he,{id:`model-${s.id}`,checked:s.enabled,onCheckedChange:()=>q(s.id)}),e(ae,{htmlFor:`model-${s.id}`,className:"cursor-pointer",children:s.name})]}),s.enabled?e("span",{className:"text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full",children:"Enabled"}):e("span",{className:"text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full",children:"Disabled"})]},s.id))}),a(G,{children:[e(d,{variant:"outline",onClick:()=>x(!1),children:"Cancel"}),e(d,{onClick:W,children:"Save Changes"})]})]})}),T==="grid"?a(N,{children:[a(O,{children:[e(R,{children:"Team Members"}),a(j,{children:["Your organization has ",n.members.length," members"]})]}),e(v,{children:e("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3",children:I.map(s=>e(N,{className:"overflow-hidden border bg-background",children:e(v,{className:"p-0",children:a("div",{className:"flex flex-col",children:[a("div",{className:"flex items-center justify-between p-4",children:[a("div",{className:"flex items-center space-x-3",children:[e("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary",children:s.name.charAt(0).toUpperCase()}),a("div",{children:[a("p",{className:"font-medium",children:[s.name," - ",s.email]}),a("div",{className:"flex items-center space-x-2",children:[e("span",{className:"text-sm text-muted-foreground",children:s.role}),s.status==="pending"&&e("span",{className:"text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full",children:"Pending"})]})]})]}),a(ne,{children:[e(ie,{asChild:!0,children:a(d,{variant:"ghost",size:"icon",children:[e(Z,{className:"h-4 w-4"}),e("span",{className:"sr-only",children:"Menu"})]})}),a(te,{align:"end",children:[e(re,{children:"Actions"}),a(S,{onClick:()=>k(s),children:[e(A,{className:"mr-2 h-4 w-4"}),"Configure AI Models"]}),e(de,{}),a(S,{className:"text-destructive",onClick:()=>D(s.email,s.invitationId),children:[e(z,{className:"mr-2 h-4 w-4"}),s.status==="accepted"?"Remove Member":"Cancel invitation"]})]})]})]}),a("div",{className:"border-t p-4 bg-muted/40",children:[a("div",{className:"flex justify-between",children:[e("span",{className:"text-xs text-muted-foreground",children:"AI Models"}),a("span",{className:"text-xs font-medium",children:[s.models.filter(l=>l.enabled).length," of ",s.models.length," enabled"]})]}),a("div",{className:"mt-2 flex flex-wrap gap-1",children:[s.models.filter(l=>l.enabled).slice(0,3).map(l=>e("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded-full",children:l.name},l.id)),s.models.filter(l=>l.enabled).length>3&&a("span",{className:"text-xs bg-primary/10 text-primary px-2 py-1 rounded-full",children:["+",s.models.filter(l=>l.enabled).length-3," more"]}),s.models.filter(l=>l.enabled).length===0&&e("span",{className:"text-xs text-muted-foreground",children:"No models enabled"})]})]})]})})},s.email))})})]}):a(N,{children:[a(O,{children:[e(R,{children:"Team Members"}),a(j,{children:["Your organization has ",n.members.length," members"]})]}),e(v,{children:a(B,{children:[e($,{children:a(y,{children:[e(p,{children:"Name"}),e(p,{children:"Role"}),e(p,{children:"Status"}),e(p,{children:"AI Models"}),e(p,{className:"text-right",children:"Actions"})]})}),e(Y,{children:I.map(s=>a(y,{children:[e(u,{className:"font-medium",children:a("div",{className:"flex items-center space-x-2",children:[e("div",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm",children:s.name.charAt(0).toUpperCase()}),a("span",{children:[s.name," - ",s.email]})]})}),e(u,{children:s.role}),e(u,{children:s.status==="accepted"?a("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:[e("span",{className:"h-1.5 w-1.5 rounded-full bg-green-600 mr-1"}),"Active"]}):a("span",{className:"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800",children:[e("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-600 mr-1"}),"Pending"]})}),e(u,{children:a("div",{className:"flex items-center space-x-1",children:[e("span",{className:"text-sm font-medium",children:s.models.filter(l=>l.enabled).length}),e("span",{className:"text-sm text-muted-foreground",children:"enabled"})]})}),e(u,{className:"text-right",children:a("div",{className:"flex items-center justify-end space-x-1",children:[a(d,{variant:"ghost",size:"sm",onClick:()=>k(s),children:[e(A,{className:"h-4 w-4"}),e("span",{className:"sr-only",children:"Configure AI Models"})]}),a(d,{variant:"ghost",size:"sm",onClick:()=>D(s.email,s.invitationId),children:[e(z,{className:"h-4 w-4 text-destructive"}),e("span",{className:"sr-only",children:"Delete"})]})]})})]},s.id))})]})})]})]}):e("div",{className:"flex items-center justify-center h-full",children:e("div",{className:"animate-pulse",children:"Loading..."})})};export{sa as component};
