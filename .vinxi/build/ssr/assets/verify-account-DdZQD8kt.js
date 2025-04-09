import{jsxs as i,jsx as e}from"react/jsx-runtime";import{useState as o}from"react";import{useNavigate as I,Link as x}from"@tanstack/react-router";import{C as O,a as P,b as m,c as S,d as c,I as T,e as V,f as a,g as v,h as L,B as y,i as R,s as q,R as D}from"./ssr-COB6f1MO.js";import{toast as d}from"sonner";import"jotai";import"@tanstack/router-core";import"@tanstack/start-client-core";import"@tanstack/start-server-core";import"zod";import"@radix-ui/react-slot";import"class-variance-authority";import"clsx";import"tailwind-merge";import"@radix-ui/react-label";import"better-auth/react";import"better-auth/client/plugins";import"lucide-react";import"input-otp";import"@radix-ui/react-select";import"@radix-ui/react-tooltip";import"@radix-ui/react-radio-group";import"@radix-ui/react-scroll-area";import"framer-motion";import"motion/react";import"@radix-ui/react-dropdown-menu";import"uuid";import"marked";import"react-markdown";import"remark-gfm";import"@radix-ui/react-hover-card";import"qss";import"@radix-ui/react-dialog";import"tiny-invariant";import"node:stream";import"isbot";import"react-dom/server";const Y=({emailReqParam:p})=>{const[r,s]=o(""),[n,N]=o(p),[l,w]=o(""),[u,h]=o(!1),f=r.length===6&&/^\d{6}$/.test(r)&&n.length>3&&l.length>7,g=I(),C=async()=>{h(!0);const{data:t}=await R.verifyEmail({email:n,otp:r});if(t?.user.id){const{data:b}=await q.email({email:n,password:l,rememberMe:!0});b?.user.id?(d.info("You have been verified"),setTimeout(()=>g({to:"/chat"}),1e3)):(d.info("You have been verified - sign in"),setTimeout(()=>g({to:"/sign-in"}),1e3))}else d.info("Something went wrong - try verifying again");h(!1)};return i("div",{className:"flex flex-col items-center mt-20 text-center text-sm ",children:[i("div",{className:"flex flex-col sm:w-[40%] w-full items-center gap-y-2 mb-6",children:[e("h3",{children:"You must be verified to create an organization."}),e("p",{className:"text-gray-500",children:"Please verify your account to proceed."})]}),i(O,{className:"w-full max-w-lg",children:[i(P,{children:[e(m,{children:"Verification Required"}),e(S,{children:"Please enter the 6-character code sent to your email"})]}),e(c,{className:"flex flex-col items-center",children:e("div",{className:"space-y-2",children:e(T,{maxLength:6,value:r,onChange:t=>s(t),children:i(V,{children:[e(a,{index:0}),e(a,{index:1}),e(a,{index:2}),e(a,{index:3}),e(a,{index:4}),e(a,{index:5})]})})})}),e(c,{className:"flex flex-col items-center text-left",children:i("div",{className:"space-y-2",children:[e(m,{children:"Email"}),e(v,{id:"email",type:"email",value:n,onChange:t=>N(t.target.value.toLowerCase()),required:!0})]})}),e(c,{className:"flex flex-col items-center text-left",children:i("div",{className:"space-y-2",children:[e(m,{children:"Your password"}),e(v,{id:"password",type:"password",minLength:8,value:l,onChange:t=>w(t.target.value),required:!0})]})}),i(L,{className:"flex flex-col",children:[i("div",{className:"flex justify-center gap-x-6",children:[e(y,{disabled:u||!f,onClick:()=>C(),children:u?"Verifying...":"Verify"}),e(y,{variant:"outline",onClick:()=>window.location.reload(),children:"Cancel"})]}),i("div",{className:"mt-6 mb-2",children:[i("span",{className:"text-gray-500",children:["Don't have an account?"," "]}),e(x,{to:"/sign-up",className:"text-primary hover:underline ml-0.5",children:"Sign up"})]}),i("div",{children:[i("span",{className:"text-gray-500",children:["Already verified?"," "]}),e(x,{to:"/sign-in",viewTransition:!0,className:"text-primary hover:underline ml-0.5",children:"Sign in"})]})]})]})]})},ve=function(){const r=D.useSearch({select:s=>s.email});return e(Y,{emailReqParam:r})};export{ve as component};
