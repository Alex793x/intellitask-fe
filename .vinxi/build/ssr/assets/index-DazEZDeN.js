import{jsx as e,jsxs as a}from"react/jsx-runtime";import{useNavigate as L,Link as I}from"@tanstack/react-router";import{useState as s,useEffect as k}from"react";import{A,X as T,B as n,C as v,a as C,b as N,c as m,d as z,L as O,g as j,G as F,h as B,a5 as b}from"./ssr-CRECmsRj.js";import{toast as p}from"sonner";import{Users as G,Save as J}from"lucide-react";import{D as M,b as U,d as q,f as E}from"./dialog-D-gnK3nI.js";import"jotai";import"@tanstack/router-core";import"@tanstack/start-client-core";import"@tanstack/start-server-core";import"zod";import"@radix-ui/react-slot";import"class-variance-authority";import"clsx";import"tailwind-merge";import"@radix-ui/react-label";import"better-auth/react";import"better-auth/client/plugins";import"input-otp";import"@radix-ui/react-select";import"@radix-ui/react-tooltip";import"@radix-ui/react-radio-group";import"@radix-ui/react-scroll-area";import"framer-motion";import"motion/react";import"@radix-ui/react-dropdown-menu";import"uuid";import"marked";import"react-markdown";import"remark-gfm";import"@radix-ui/react-hover-card";import"qss";import"@radix-ui/react-dialog";import"tiny-invariant";import"node:stream";import"isbot";import"react-dom/server";const Se=function(){const{data:l,refetch:D}=A(),i=l,[r,h]=s(""),[o,g]=s(""),[u,d]=s(!0),[x,c]=s(!1);L();const{changeActiveOrganizationIfAny:y}=T();k(()=>{l&&(h(i.name),g(JSON.parse(i.metadata).description),d(!1))},[l]);const w=async()=>{if(!r||!o){p.error("Organization name is required");return}d(!0);const{data:t,error:f}=await b.update({data:{name:r,metadata:{description:o}}});t?p.info("Organization credentials updated!"):f&&(p.error("Organization credentials could not be updated!"),console.error("Organization credentials could not be updated!",f)),D(),d(!1)},S=async()=>{await b.delete({organizationId:i.id}),y()};return i?a("div",{className:"space-y-8 m-8",children:[a("div",{children:[a("h1",{className:"text-3xl font-bold tracking-tight",children:["Organization Settings - ",i?.name]}),e("p",{className:"text-muted-foreground mt-1",children:"Manage your organization preferences"})]}),e(M,{open:x,onOpenChange:c,children:a(U,{children:[e(q,{children:"Confirm Deletion"}),e("p",{children:"Are you sure you want to delete this organization? This action cannot be undone."}),a(E,{children:[e(n,{variant:"outline",onClick:()=>c(!1),children:"Cancel"}),e(n,{variant:"destructive",onClick:()=>S(),children:"Delete Organization"})]})]})}),a("div",{className:"grid gap-6 md:grid-cols-2",children:[a(v,{children:[a(C,{className:"flex flex-row justify-between",children:[a("div",{children:[e(N,{children:"General Information"}),e(m,{children:"Update your organization's basic details."}),a(m,{children:[i?.name," has a total of ",i?.members.length??0," members and ",i.invitations.filter(t=>t.status==="pending").length??0," pending invitaitons."]})]}),e("div",{children:e(n,{children:a(I,{className:"flex",to:"/members",children:[e(G,{className:"mr-2 h-4 w-4"}),e("span",{children:"Manage members"})]})})})]}),a(z,{className:"space-y-4",children:[a("div",{className:"space-y-2",children:[e(O,{htmlFor:"org-name",children:"Organization Name"}),e(j,{id:"org-name",maxLength:50,value:r,onChange:t=>h(t.target.value)})]}),a("div",{className:"space-y-2",children:[e(O,{htmlFor:"org-description",children:"Description"}),e(F,{id:"org-description",value:o,maxLength:1e3,onChange:t=>g(t.target.value),rows:4})]})]}),e(B,{children:a(n,{onClick:w,disabled:u||r===i.name&&o===JSON.parse(i.metadata??"{description: ''}").description,children:[e(J,{className:"mr-2 h-4 w-4"}),u?"Saving...":"Save Changes"]})})]}),a(v,{children:[a(C,{children:[e(N,{children:"Danger Zone"}),e(m,{children:"Irreversible actions for your organization"})]}),e(z,{className:"space-y-4",children:a("div",{className:"rounded-lg border border-destructive/20 p-4",children:[e("h3",{className:"font-medium text-destructive",children:"Delete Organization"}),e("p",{className:"mt-1 text-sm text-muted-foreground",children:"This action cannot be undone. All data will be permanently deleted."}),e(n,{variant:"destructive",className:"mt-4",onClick:()=>c(!0),children:"Delete Organization"})]})})]})]})]}):e("div",{className:"flex items-center justify-center h-full",children:"Loading..."})};export{Se as component};
