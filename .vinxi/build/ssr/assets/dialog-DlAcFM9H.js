import{jsx as o,jsxs as n}from"react/jsx-runtime";import*as l from"react";import*as a from"@radix-ui/react-dialog";import{X as c}from"lucide-react";import{k as i}from"./ssr-CYzHJ_dR.js";const b=a.Root,h=a.Trigger,m=a.Portal,v=a.Close,d=l.forwardRef(({className:e,...t},s)=>o(a.Overlay,{ref:s,className:i("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));d.displayName=a.Overlay.displayName;const f=l.forwardRef(({className:e,children:t,...s},r)=>n(m,{children:[o(d,{}),n(a.Content,{ref:r,className:i("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,n(a.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[o(c,{className:"h-4 w-4"}),o("span",{className:"sr-only",children:"Close"})]})]})]}));f.displayName=a.Content.displayName;const p=({className:e,...t})=>o("div",{className:i("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});p.displayName="DialogHeader";const g=({className:e,...t})=>o("div",{className:i("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});g.displayName="DialogFooter";const u=l.forwardRef(({className:e,...t},s)=>o(a.Title,{ref:s,className:i("text-lg font-semibold leading-none tracking-tight",e),...t}));u.displayName=a.Title.displayName;const y=l.forwardRef(({className:e,...t},s)=>o(a.Description,{ref:s,className:i("text-sm text-muted-foreground",e),...t}));y.displayName=a.Description.displayName;export{b as D,h as a,f as b,p as c,u as d,y as e,g as f,v as g};
