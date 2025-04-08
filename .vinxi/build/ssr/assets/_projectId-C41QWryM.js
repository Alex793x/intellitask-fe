import{jsx as e,jsxs as t,Fragment as Pe}from"react/jsx-runtime";import{useNavigate as Me,Link as J}from"@tanstack/react-router";import{useSetAtom as ke,useAtom as ze}from"jotai";import{k as _,z as De,B as d,L as K,g as de,G as Re,D as z,T as re,p as ae,q as se,r as le,F as me,ag as he,y as Be,C as H,a as V,b as q,c as Z,d as G,a9 as Le,aa as $e,ab as We,h as He,ah as ue}from"./ssr-CYzHJ_dR.js";import{Settings as Fe,Lock as Q,AlertCircle as Te,Trash2 as X,UploadCloud as pe,FileIcon as Y,Upload as Ve,CheckCircle as qe,ChevronDown as fe,ChevronUp as ge,FileText as xe,Music as _e,Film as Ge,Home as Je,ChevronRight as ve,Briefcase as Ne,FolderOpen as be,MessageSquarePlus as we,MessageCircle as Ke,Users as ye}from"lucide-react";import*as ne from"react";import{useState as h,useEffect as Ue}from"react";import{C as Ze,a as Qe,b as Xe,S as B,M as Ye}from"./collapsible-w45DTOyU.js";import{toast as L}from"sonner";import{D as ce,a as Se,b as oe,c as ee,d as te,e as ie,f as Oe,g as et}from"./dialog-DlAcFM9H.js";import{C as tt}from"./checkbox-Ql2DCfKB.js";import{cva as rt}from"class-variance-authority";import{useFileUpload as at,FileUpload as U}from"@ark-ui/react";import{A as Ce}from"./avatar-ydPSFCwJ.js";import"@tanstack/router-core";import"@tanstack/start-client-core";import"@tanstack/start-server-core";import"zod";import"@radix-ui/react-slot";import"clsx";import"tailwind-merge";import"@radix-ui/react-label";import"better-auth/react";import"better-auth/client/plugins";import"input-otp";import"@radix-ui/react-select";import"@radix-ui/react-tooltip";import"@radix-ui/react-radio-group";import"@radix-ui/react-scroll-area";import"framer-motion";import"motion/react";import"@radix-ui/react-dropdown-menu";import"uuid";import"marked";import"react-markdown";import"remark-gfm";import"@radix-ui/react-hover-card";import"qss";import"@radix-ui/react-dialog";import"tiny-invariant";import"node:stream";import"isbot";import"react-dom/server";import"@radix-ui/react-tabs";import"@radix-ui/react-collapsible";import"@radix-ui/react-checkbox";import"@radix-ui/react-avatar";const st=rt("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",warning:"border-amber-500/50 text-amber-700 [&>svg]:text-amber-700"}},defaultVariants:{variant:"default"}}),Ae=ne.forwardRef(({className:l,variant:g,...u},v)=>e("div",{ref:v,role:"alert",className:_(st({variant:g}),l),...u}));Ae.displayName="Alert";const lt=ne.forwardRef(({className:l,...g},u)=>e("h5",{ref:u,className:_("mb-1 font-medium leading-none tracking-tight",l),...g}));lt.displayName="AlertTitle";const Ee=ne.forwardRef(({className:l,...g},u)=>e("div",{ref:u,className:_("text-sm [&_p]:leading-relaxed",l),...g}));Ee.displayName="AlertDescription";function it({project:l,onProjectUpdated:g,trigger:u,userId:v}){const A=Me(),P=ke(De),[b,C]=h(!1),[j,M]=h(!1),[k,D]=h(!1),[E,N]=h(!1),[i,w]=h(""),[m,F]=h({name:"",description:"",isPrivate:!1}),[S,T]=h(!0);Ue(()=>{if(b){F({name:l.name||"",description:l.description||"",isPrivate:l.isPrivate||!1});const r=l.members?.length||0;T(r<=1),N(!1),w("")}},[b,l]);const R=r=>{F({...m,[r.target.name]:r.target.value})},$=r=>{F({...m,isPrivate:r})},O=async r=>{if(r.preventDefault(),!l.id){L.error("Project not found");return}if(!m.name.trim()){L.error("Project name is required");return}if(m.isPrivate&&!S&&!l.isPrivate){L.error("Cannot make a project private when it has multiple members");return}M(!0);try{const{data:n}=await z().chatrooms.updateProject(l.id,{teamspaceId:l.teamspaceId,context:l.context,creatorId:v,name:m.name,description:m.description,isPrivate:m.isPrivate,members:m.isPrivate?[]:l.members?.map(f=>({projectId:l.id,userId:f.user.id,role:f.role,invitedByUserId:v}))});g(n),L.success("Project settings updated successfully"),C(!1)}catch(n){console.error("Error updating project:",n),L.error("Failed to update project")}finally{M(!1)}},s=async()=>{if(i!==l.name){L.error("Project name does not match");return}D(!0);try{await z().chatrooms.deleteProject(l.id),L.success("Project deleted successfully"),C(!1),l.teamspaceId?(P(r=>r.map(f=>({...f,projects:f.projects.filter(y=>y.id!==l.id)}))),A({to:"/teamspace/$teamspaceId",params:{teamspaceId:l.teamspaceId}})):A({to:"/chat"})}catch(r){console.error("Error deleting project:",r),L.error("Failed to delete project")}finally{D(!1)}};return t(ce,{open:b,onOpenChange:C,children:[e(Se,{asChild:!0,children:u||t(d,{size:"sm",variant:"outline",className:"hover:cursor-pointer",children:[e(Fe,{className:"h-4 w-4 mr-2"})," Project Settings"]})}),e(oe,{className:"sm:max-w-[500px]",children:E?t("div",{children:[t(ee,{children:[e("div",{className:"h-1.5 bg-red-500 w-full absolute top-0 left-0 rounded-t-lg"}),t(te,{className:"text-xl mt-2 text-red-600 flex items-center",children:[e(X,{className:"h-5 w-5 mr-2"})," Delete Project"]}),e(ie,{children:"This action cannot be undone. This will permanently delete the project and remove all associated chats and data."})]}),t("div",{className:"py-4",children:[e("div",{className:"bg-red-50 border border-red-200 rounded-md p-4 mb-4",children:t("div",{className:"flex items-center",children:[e("span",{className:"text-xl mr-2",children:"💩"}),t("p",{className:"text-sm text-red-800",children:["Are you absolutely sure you want to delete ",e("strong",{children:l.name}),"? This action is irreversible!"]})]})}),t("div",{className:"grid gap-2",children:[t(K,{htmlFor:"confirmName",className:"text-sm font-medium",children:["To confirm, type ",e("span",{className:"font-bold",children:l.name})," below:"]}),e(de,{id:"confirmName",value:i,onChange:r=>w(r.target.value),placeholder:`Type "${l.name}" to confirm`})]}),t("div",{className:"flex justify-between mt-6",children:[e(d,{type:"button",variant:"outline",onClick:()=>N(!1),disabled:k,children:"Cancel"}),e(d,{type:"button",variant:"destructive",className:"bg-red-600 hover:bg-red-700",onClick:s,disabled:i!==l.name||k,children:k?"Deleting...":"Permanently Delete Project"})]})]})]}):t("form",{onSubmit:O,children:[t(ee,{children:[e("div",{className:"h-1.5 bg-emerald-500 w-full absolute top-0 left-0 rounded-t-lg"}),e(te,{className:"text-xl mt-2",children:"Project Settings"}),e(ie,{children:"Update the details and settings of your project"})]}),t("div",{className:"grid gap-4 py-4",children:[t("div",{className:"grid gap-2",children:[t(K,{htmlFor:"name",children:["Project Name ",e("span",{className:"text-red-500",children:"*"})]}),e(de,{id:"name",name:"name",value:m.name,onChange:R,placeholder:"e.g. Marketing Campaign",required:!0})]}),t("div",{className:"grid gap-2",children:[e(K,{htmlFor:"description",children:"Description"}),e(Re,{id:"description",name:"description",value:m.description,onChange:R,placeholder:"What is this project about?",rows:3})]}),t("div",{className:"flex items-center space-x-2",children:[e(tt,{id:"isPrivate",checked:m.isPrivate,onCheckedChange:$,disabled:!S&&!l.isPrivate}),t("div",{className:"grid gap-1.5 leading-none",children:[t(K,{htmlFor:"isPrivate",className:`text-sm font-medium leading-none flex items-center ${!S&&!l.isPrivate?"text-muted-foreground":""}`,children:[e(Q,{className:"h-3.5 w-3.5 mr-1.5 text-muted-foreground"}),"Make project private"]}),e("p",{className:"text-xs text-muted-foreground",children:"Private projects are only visible to invited members"})]})]}),!S&&!l.isPrivate&&t(Ae,{variant:"warning",className:"bg-amber-50 text-amber-800 border-amber-200",children:[e(Te,{className:"h-4 w-4"}),e(Ee,{children:"Projects with multiple members cannot be made private"})]}),e("div",{className:"border-t pt-4 mt-2",children:t("div",{className:"flex flex-col space-y-2",children:[e("h3",{className:"text-sm font-medium text-red-600",children:"Danger Zone"}),e("p",{className:"text-xs text-muted-foreground",children:"Once you delete a project, there is no going back. This action cannot be undone."}),t(d,{type:"button",variant:"destructive",className:"mt-2 bg-red-600 hover:bg-red-700",onClick:()=>N(!0),children:[e(X,{className:"h-4 w-4 mr-2"})," Delete Project"]})]})})]}),t(Oe,{children:[e(et,{asChild:!0,children:e(d,{variant:"outline",type:"button",disabled:j,children:"Cancel"})}),e(d,{type:"submit",className:"bg-emerald-600 hover:bg-emerald-700",disabled:j,children:j?"Saving...":"Save Changes"})]})]})})]})}const je=({teamspaceId:l=null,projectId:g=null,chatroomId:u=null,organizationId:v,receiverIds:A=[],onUploadComplete:P,compact:b=!1,files:C=[],className:j=""})=>{const[M,k]=h(!1),[D,E]=h(!1),[N,i]=h(!1),[w,m]=h([]),F=at({maxFiles:10,maxFileSize:50*1024*1024}),S=r=>{const n=r.type;return n.startsWith("image/")||n.startsWith("video/")||n.startsWith("audio/")?"MEDIA":"DOCUMENT"},T=()=>{F.clearFiles(),E(!1),i(!1),m([])},R=r=>{k(r),r||T()},$=r=>{if(r===0)return"0 Bytes";const n=1024,f=["Bytes","KB","MB","GB"],y=Math.floor(Math.log(r)/Math.log(n));return parseFloat((r/Math.pow(n,y)).toFixed(1))+" "+f[y]},O=(r,n=28)=>{if(!r)return"";if(r.length<=n)return r;const f=r.split(".").pop()||"",y=r.substring(0,r.length-f.length-1);return y.length<=n-6?r:`${y.substring(0,n-6-f.length)}...${f.length>0?"."+f:""}`},s=async r=>{if(!r.length||!v)return;E(!0),i(!1);const n=r.map(async p=>{try{const I=new FormData,a=S(p),c={teamspaceId:l||null,projectId:g||null,chatroomId:u||null,organizationId:v,uploadType:a};I.append("metadata",JSON.stringify(c)),A.length>0&&I.append("receiverIds",JSON.stringify(A)),I.append("file",p);const o=await z().fileManagement.uploadFilesWithMetadata("POST",I);if(!o.ok)throw new Error(`Upload failed for ${p.name}: ${o.statusText} (${o.status})`);return console.log(`Upload successful for: ${p.name}`),{success:!0,fileName:p.name,fileSize:p.size,fileType:p.type,uploadType:a}}catch(I){return console.error(`Error uploading file ${p.name}:`,I instanceof Error?I.message:String(I)),{success:!1,fileName:p.name,error:I instanceof Error?I.message:String(I)}}}),f=await Promise.allSettled(n),y=f.filter(p=>p.status==="fulfilled"&&p.value.success===!0).map(p=>p.value);f.filter(p=>p.status==="rejected"||p.status==="fulfilled"&&!p.value.success),m(y),E(!1),i(!0),P&&y.length>0&&P(y)};return t(ce,{open:M,onOpenChange:R,children:[e(Se,{asChild:!0,children:t(d,{variant:"outline",size:b?"sm":"default",className:_("text-emerald-600 border-emerald-200 hover:bg-emerald-50",j),children:[e(pe,{className:_("mr-2",b?"h-4 w-4":"h-5 w-5")}),"Upload"]})}),t(oe,{className:"sm:max-w-md w-[95vw] max-h-[90vh] overflow-hidden flex flex-col",children:[e(ee,{className:"flex-shrink-0",children:e(te,{children:"Upload Files"})}),e("div",{className:"py-4 flex-1 overflow-y-auto",children:e(U.RootProvider,{value:F,children:t("div",{className:"w-full",children:[e(U.Context,{children:r=>t(Pe,{children:[r.acceptedFiles.length===0&&!N&&e(U.Dropzone,{className:"border-2 border-dashed border-gray-300 rounded-lg text-center p-4 sm:p-8 bg-gray-50 hover:bg-gray-100 transition-colors",children:t("div",{className:"flex flex-col items-center",children:[e(pe,{className:"h-10 w-10 sm:h-12 sm:w-12 text-emerald-500 mb-3"}),e("p",{className:"text-gray-700 font-medium mb-1",children:"Drag and drop files here"}),e("p",{className:"text-gray-500 text-sm mb-4",children:"or"}),e(U.Trigger,{asChild:!0,children:e(d,{children:"Choose Files"})})]})}),r.acceptedFiles.length>0&&!D&&!N&&t("div",{className:"space-y-4",children:[e("div",{className:"border rounded-md",children:e("div",{className:"max-h-[30vh] overflow-y-auto space-y-1 px-2 py-2",children:r.acceptedFiles.map(n=>t(U.Item,{file:n,className:"flex items-center p-2 rounded hover:bg-gray-50 transition-colors",children:[e(U.ItemPreview,{type:"image/*",className:"w-10 h-10 min-w-[2.5rem] mr-3 bg-gray-100 flex items-center justify-center rounded overflow-hidden",children:e(U.ItemPreviewImage,{className:"max-w-full max-h-full object-cover"})}),e(U.ItemPreview,{type:".*",className:"w-10 h-10 min-w-[2.5rem] mr-3 bg-gray-100 flex items-center justify-center rounded",children:e(Y,{className:"h-5 w-5 text-gray-500"})}),t("div",{className:"flex-1 min-w-0 pr-2",children:[e("div",{className:"font-medium text-sm truncate",title:n.name,children:O(n.name)}),e("div",{className:"text-xs text-gray-500",children:$(n.size)})]}),e(U.ItemDeleteTrigger,{className:"ml-1 text-red-500 hover:text-red-700 p-1 flex-shrink-0",children:e(X,{className:"h-4 w-4"})})]},`${n.name}-${n.size}`))})}),t("div",{className:"flex flex-col space-y-2",children:[t(d,{onClick:()=>s(r.acceptedFiles),className:"w-full",children:[e(Ve,{className:"h-4 w-4 mr-2"}),"Upload ",r.acceptedFiles.length," File",r.acceptedFiles.length!==1?"s":""]}),e("div",{className:"text-center",children:t(U.Trigger,{className:"text-xs text-emerald-600 hover:underline inline-flex items-center",children:[e("span",{className:"mr-1",children:"+"}),"Add More Files"]})})]})]}),D&&t("div",{className:"py-8 flex flex-col items-center justify-center",children:[t("div",{className:"w-16 h-16 relative mb-4",children:[e("div",{className:"w-full h-full rounded-full border-4 border-emerald-100 animate-pulse"}),e("div",{className:"absolute inset-0 flex items-center justify-center",children:t("svg",{className:"animate-spin h-8 w-8 text-emerald-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})]}),e("p",{className:"font-medium text-gray-700",children:"Uploading files..."}),e("p",{className:"text-sm text-gray-500 mt-1",children:"Please wait while your files are being uploaded"})]}),N&&t("div",{className:"py-8 flex flex-col items-center justify-center",children:[e("div",{className:"w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4",children:e(qe,{className:"h-8 w-8 text-emerald-600"})}),e("p",{className:"font-medium text-gray-700",children:"Upload Complete!"}),t("p",{className:"text-sm text-gray-500 mt-1 mb-4",children:["Successfully uploaded ",w.length," file",w.length!==1?"s":""]}),t("div",{className:"flex space-x-3",children:[e(d,{onClick:()=>{T(),k(!1)},variant:"outline",children:"Close"}),e(d,{onClick:()=>{T()},children:"Upload More Files"})]})]})]})}),e(U.HiddenInput,{})]})})})]})]})},nt=l=>{if(!l||!l.fileType)return e("div",{className:"flex items-center justify-center h-full w-full bg-gray-200",children:e(Y,{className:"h-4 w-4 text-gray-500"})});switch(l.fileType){case"IMAGE":return e("div",{className:"relative w-full h-full bg-gray-100 overflow-hidden",children:e("img",{src:l.fileUrl||"",alt:l.fileName||"Image preview",className:"h-full w-full object-cover",loading:"lazy",onError:g=>{g.target.outerHTML='<div class="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-off"><path d="M8.5 10.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5Z"/><path d="M21 15l-5-5L5 21"/><path d="m2 2 20 20"/><path d="M14.5 4.5h6v6"/><path d="M17 11.5a5 5 0 1 0-8-4"/></svg></div>'}})});case"VIDEO":return e("div",{className:"bg-gradient-to-br from-indigo-50 to-indigo-100 h-full w-full flex items-center justify-center",children:e(Ge,{className:"h-4 w-4 text-indigo-500"})});case"AUDIO":return e("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 h-full w-full flex items-center justify-center",children:e(_e,{className:"h-4 w-4 text-purple-500"})});case"PDF":return e("div",{className:"bg-gradient-to-br from-red-50 to-red-100 h-full w-full flex items-center justify-center",children:e(xe,{className:"h-4 w-4 text-red-500"})});case"DOCUMENT":return e("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 h-full w-full flex items-center justify-center",children:e(xe,{className:"h-4 w-4 text-blue-500"})});case"FILE":default:return e("div",{className:"bg-gradient-to-br from-gray-50 to-gray-100 h-full w-full flex items-center justify-center",children:e(Y,{className:"h-4 w-4 text-gray-500"})})}},Ie=l=>{switch(l){case"OWNER":return"bg-green-100 text-green-800 border-green-200";case"ADMIN":return"bg-red-100 text-red-800 border-red-200";case"CONTRIBUTOR":return"bg-blue-100 text-blue-800 border-blue-200";case"VIEWER":return"bg-gray-100 text-gray-800 border-gray-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},ct=({members:l})=>{const[g,u]=h(!1),[v,A]=h(!1),P=5,b=l.filter((i,w,m)=>w===m.findIndex(F=>F.user?.id===i.user?.id)),C=b.filter(i=>!i.hasLeft),j=b.filter(i=>i.hasLeft),M=(i,w)=>{const m={OWNER:0,ADMIN:1,CONTRIBUTOR:2,VIEWER:3};return(m[i.role]||4)-(m[w.role]||4)},k=[...C].sort(M),D=[...j].sort(M),E=g?k:k.slice(0,C.length>=P?P:C.length),N=C.length>P&&!g;return t("div",{className:"space-y-3",children:[e("div",{children:E.map(i=>e("div",{className:"py-1.5",children:t("div",{className:"relative flex items-center justify-between group",children:[t("div",{className:"flex items-center gap-2",children:[e(Ce,{className:"h-7 w-7",children:i.user?.image?e("img",{src:i.user.image,alt:i.user?.name||"User"}):e("div",{className:"bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs",children:(i.user?.name||"U").charAt(0)})}),e(re,{children:t(ae,{children:[e(se,{asChild:!0,children:e("span",{className:"text-sm font-medium truncate max-w-[120px]",children:i.user?.name||"Unknown User"})}),t(le,{children:[e("p",{children:i.user?.name||"Unknown User"}),e("p",{className:"text-xs text-muted-foreground",children:i.user?.email})]})]})})]}),e(me,{className:Ie(i.role),children:i.role})]})},i.id))}),N&&e(d,{variant:"ghost",size:"sm",className:"w-full text-xs h-7",onClick:()=>u(!0),children:t("span",{className:"flex items-center",children:["Show ",C.length-P," More ",e(fe,{className:"ml-1 h-3 w-3"})]})}),g&&C.length>P&&e(d,{variant:"ghost",size:"sm",className:"w-full text-xs h-7",onClick:()=>u(!1),children:t("span",{className:"flex items-center",children:["Show Less ",e(ge,{className:"ml-1 h-3 w-3"})]})}),j.length>0&&t(Ze,{open:v,onOpenChange:A,className:"mt-3",children:[t("div",{className:"flex items-center text-xs text-muted-foreground",children:[e("div",{className:"h-px bg-border flex-grow mr-2"}),e(Qe,{asChild:!0,children:t("button",{className:"flex items-center gap-1 px-2 py-1 rounded-sm hover:bg-muted/50 transition-colors",children:[t("span",{children:["Former Members (",j.length,")"]}),v?e(ge,{className:"h-3 w-3"}):e(fe,{className:"h-3 w-3"})]})}),e("div",{className:"h-px bg-border flex-grow ml-2"})]}),e(Xe,{className:"pt-2",children:e("div",{className:"space-y-1.5",children:D.map(i=>e("div",{children:t("div",{className:"relative flex items-center justify-between group py-1.5",children:[e("div",{className:"absolute inset-0 rounded-md bg-muted/30 pointer-events-none"}),t("div",{className:"flex items-center gap-2 z-10",children:[t("div",{className:"relative",children:[e(Ce,{className:"h-7 w-7",children:i.user?.image?e("img",{src:i.user.image,alt:i.user?.name||"User",className:"filter grayscale"}):e("div",{className:"bg-gray-200 h-full w-full flex items-center justify-center text-gray-700 text-xs",children:(i.user?.name||"U").charAt(0)})}),e("div",{className:"absolute -bottom-1 -right-1 rounded-full w-3 h-3 bg-muted border border-background flex items-center justify-center",children:e("span",{className:"text-[8px]",children:"×"})})]}),e(re,{children:t(ae,{children:[e(se,{asChild:!0,children:e("span",{className:"text-sm font-medium truncate max-w-[120px] text-muted-foreground",children:i.user?.name||"Unknown User"})}),t(le,{children:[e("p",{children:i.user?.name||"Unknown User"}),e("p",{className:"text-xs text-muted-foreground",children:i.user?.email}),e("p",{className:"text-xs text-red-500 mt-1",children:"No longer a member"})]})]})})]}),e(me,{className:`${Ie(i.role)} opacity-70`,children:i.role})]})},i.id))})})]})]})},tr=function(){const{projectId:g}=he.useParams(),[u,v]=h(!1),[A,P]=h(!0),[b,C]=h(""),[j,M]=h(""),[k,D]=h(!1),[E,N]=h(!1),[i,w]=h(null),[m,F]=h(!1),[S,T]=ze(De),R=ke(Be),$=he.useRouteContext(),[O]=h($.userId),s=S.flatMap(a=>a.projects||[]).find(a=>a.id===g),r=S.find(a=>a.id===s?.teamspaceId);Ue(()=>{s&&(P(!1),console.log("files",s.files))},[s]);const n=Me();if(A)return t("div",{className:"flex-1 flex flex-col h-full",children:[e("div",{className:"h-1.5 bg-gray-200 w-full"}),t("div",{className:"p-6 max-w-5xl mx-auto w-full flex-1",children:[t("div",{className:"mb-8 relative",children:[e(B,{className:"h-10 w-60 mb-2"}),e(B,{className:"h-4 w-full max-w-md mb-4"})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[t("div",{className:"md:col-span-2 space-y-6",children:[e("div",{children:e(B,{className:"h-32 w-full mb-6"})}),t("div",{children:[e("div",{className:"flex justify-between items-center mb-4",children:e(B,{className:"h-8 w-40"})}),t("div",{className:"space-y-3",children:[e(B,{className:"h-16 w-full"}),e(B,{className:"h-16 w-full"})]})]})]}),t("div",{className:"space-y-6",children:[e(B,{className:"h-60 w-full"}),e(B,{className:"h-60 w-full"})]})]})]})]});if(!s)return t("div",{className:"flex-1 flex flex-col items-center justify-center p-8 text-center",children:[e("h2",{className:"text-2xl font-bold mb-4",children:"Project not found"}),e("p",{className:"text-muted-foreground mb-6",children:"The project you're looking for doesn't exist or you don't have access to it."}),r?e(d,{variant:"outline",asChild:!0,children:e(J,{to:"/teamspace/$teamspaceId",params:{teamspaceId:r.id},children:"Back to Teamspace"})}):e(d,{variant:"outline",asChild:!0,children:e(J,{to:"/chat",children:"Go to Chat"})})]});const f=async(a="")=>{if(u)return;v(!0);const c=ue({currentUserId:O,project:s,teamspace:r});try{const{data:o}=await z().chatrooms.createChatroom({chatroomCreatorId:O,chatroomMembers:c,isPrivate:!1,projectId:s.id,name:a.trim()||"New Chat Conversation",teamIds:[],type:"PROJECT_CHATROOM"});s.chatrooms?.push(o),R(o),n({to:"/chat/$chatroomId",params:{chatroomId:o.id}})}catch(o){console.error("Error creating chatroom:",o)}finally{v(!1),N(!1),M("")}},y=async()=>{if(!(!b.trim()||u))try{v(!0);const a=ue({currentUserId:O,project:s,teamspace:r}),{data:c}=await z().chatrooms.createChatroom({chatroomCreatorId:O,chatroomMembers:a,isPrivate:!1,projectId:s.id,name:"New Chat Conversation",teamIds:[],type:"PROJECT_CHATROOM"});s.chatrooms?.push(c),localStorage.setItem("pendingMessage",b),R(c),n({to:"/chat/$chatroomId",params:{chatroomId:c.id}})}catch(a){console.error("Error starting quick chat:",a),v(!1)}},p=a=>{const c=S.map(o=>o.id===r?.id?{...o,projects:o.projects?.map(x=>x.id===s?.id?a:x)}:o);T(c)},I=async a=>{if(!(!a.id||m))try{F(!0),await z().chatrooms.deleteOneProjectFile({fileId:a.id,projectId:s.id}),T(c=>c.map(o=>o.id===r?.id?{...o,projects:o.projects?.map(x=>x.id===s?.id?{...x,files:x.files?.filter(W=>W.id!==a.id)}:x)}:o))}catch(c){console.error("Error deleting file:",c)}finally{F(!1),w(null)}};return t("div",{className:"flex-1 flex flex-col h-full",children:[e("div",{className:"h-1.5 bg-emerald-500 w-full flex-shrink-0"}),t("div",{className:"p-6 max-w-5xl mx-auto w-full flex-1 overflow-y-auto",children:[t("div",{className:"flex items-center text-sm text-muted-foreground mb-4",children:[t(J,{to:"/chat",className:"flex items-center hover:text-foreground transition-colors",children:[e(Je,{className:"h-3.5 w-3.5 mr-1"}),"Home"]}),r&&t(Pe,{children:[e(ve,{className:"h-3.5 w-3.5 mx-1.5"}),t(J,{to:"/teamspace/$teamspaceId",params:{teamspaceId:r.id},className:"flex items-center hover:text-foreground transition-colors",children:[e(Ne,{className:"h-3.5 w-3.5 mr-1.5"}),r.name]})]}),e(ve,{className:"h-3.5 w-3.5 mx-1.5"}),t("span",{className:"font-medium text-foreground flex items-center",children:[e(be,{className:"h-3.5 w-3.5 mr-1.5"}),"Project"]})]}),t("div",{className:"mb-8 relative",children:[t("div",{className:"flex items-center gap-3 mb-2",children:[e("div",{className:"flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700",children:e(be,{className:"h-5 w-5"})}),t("div",{children:[e("h1",{className:"text-3xl font-bold",children:s.name}),t("div",{className:"flex items-center mt-1",children:[e("span",{className:"inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20",children:"Project"}),s.isPrivate&&t("span",{className:"ml-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20",children:[e(Q,{className:"h-3 w-3 mr-1"}),"Private"]}),r&&t("span",{className:"ml-2 text-sm text-muted-foreground flex items-center",children:[e(Ne,{className:"h-3 w-3 mr-1"}),r.name]})]})]})]}),e("div",{className:"mt-2",children:e("p",{className:"text-muted-foreground",children:s.description||"No description provided"})}),e("div",{className:"absolute top-0 right-0",children:e(it,{project:s,userId:O,onProjectUpdated:p})})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[t("div",{className:"md:col-span-2 space-y-6",children:[t(H,{className:"border-b-4 border-b-emerald-500",children:[t(V,{className:"pb-3",children:[e(q,{children:"New chat in this project"}),e(Z,{children:"Start a new conversation in the context of this project"})]}),e(G,{children:t(Le,{value:b,onChange:a=>C(a.target.value),onSubmit:y,hasMessages:!1,children:[e($e,{placeholder:u?"Creating chat...":"Type a message to start a new chat...",disabled:u,onKeyDown:a=>{a.key==="Enter"&&!a.shiftKey&&(a.preventDefault(),y())}}),e(We,{disabled:u||!b.trim()})]})})]}),t("div",{children:[t("div",{className:"flex justify-between items-center mb-4",children:[e("h2",{className:"text-xl font-semibold",children:"Chats in this project"}),E?t("div",{className:"flex items-center gap-2",children:[e("input",{type:"text",className:"px-3 py-1 border rounded-md text-sm",placeholder:"Chatroom name...",value:j,onChange:a=>M(a.target.value),onKeyDown:a=>{a.key==="Enter"?f(j):a.key==="Escape"&&(N(!1),M(""))},autoFocus:!0}),e(d,{size:"sm",onClick:()=>f(j),disabled:u,className:"bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer",children:"Create"}),e(d,{size:"sm",variant:"ghost",onClick:()=>{N(!1),M("")},className:"hover:cursor-pointer",children:"Cancel"})]}):t(d,{size:"sm",onClick:()=>N(!0),disabled:u,className:"bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer",children:[e(we,{className:"h-4 w-4 mr-2"})," New Chat"]})]}),s.chatrooms&&s.chatrooms.length>0?e("div",{className:"space-y-3",children:s.chatrooms.map(a=>e(H,{className:_("cursor-pointer transition-all border-l-4 border-l-transparent","hover:shadow-md hover:border-l-emerald-500 hover:bg-muted/30"),onClick:()=>{R(a),n({to:"/chat"})},children:e(V,{className:"py-3",children:t("div",{className:"flex items-center justify-between",children:[t(q,{className:"text-base flex items-center",children:[e(Ke,{className:"h-4 w-4 mr-2"}),a.name,a.isPrivate&&e(re,{children:t(ae,{children:[e(se,{asChild:!0,children:e("span",{children:e(Q,{className:"h-3 w-3 ml-2 text-red-500"})})}),e(le,{children:e("p",{children:"Private"})})]})})]}),e("div",{className:"flex items-center gap-3 text-muted-foreground text-xs",children:t("div",{className:"flex items-center",children:[e(ye,{className:"h-3 w-3 mr-1"}),a.members?.length||1]})})]})})},a.id))}):t("div",{className:"border rounded-lg p-8 text-center bg-muted/20",children:[e("h3",{className:"font-medium mb-2",children:"No chats yet"}),e("p",{className:"text-muted-foreground mb-4",children:"Start by creating your first chat in this project"}),t(d,{variant:"outline",onClick:()=>N(!0),className:"border-emerald-600/20 text-emerald-700 hover:bg-emerald-50",children:[e(we,{className:"h-4 w-4 mr-2"})," Create Chat"]})]})]})]}),t("div",{className:"space-y-6",children:[t(H,{className:"border-t-4 border-t-emerald-500",children:[t(V,{children:[t(q,{className:"flex items-center justify-between",children:[e("span",{children:"Project Context"}),e(d,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0 hover:cursor-pointer",onClick:()=>D(!k),children:e(Fe,{className:"h-4 w-4"})})]}),e(Z,{children:"Information about this project's purpose"})]}),e(G,{children:k?t("div",{className:"space-y-4",children:[e("textarea",{className:"w-full min-h-[150px] p-3 border rounded-md",placeholder:"Describe what this teamspace is used for...",value:s.context}),t("div",{className:"flex justify-end space-x-2",children:[e(d,{variant:"outline",size:"sm",onClick:()=>D(!1),children:"Cancel"}),e(d,{size:"sm",onClick:()=>D(!1),children:"Save"})]})]}):e("div",{className:"text-sm",children:e("p",{children:s.context})})})]}),t(H,{className:"border-t-4 border-t-emerald-500",children:[t(V,{children:[e(q,{children:"Members"}),e(Z,{children:"People with access to this project"})]}),e(G,{children:s.members&&s.members.length>0?e(ct,{members:s.members}):e("div",{className:"text-sm text-muted-foreground",children:"Only you have access to this project"})}),e(He,{children:e(Ye,{type:"project",projectId:s.id,teamspaceId:s.teamspaceId,members:s.members||[],userId:O,onMembersChanged:()=>{z().chatrooms.getTeamspaces().then(({data:a})=>{a&&T(a)})},children:t(d,{size:"sm",variant:"outline",className:"w-full border-emerald-600/20 text-emerald-700 hover:bg-emerald-50 hover:cursor-pointer",children:[e(ye,{className:"h-4 w-4 mr-2"})," Manage Members"]})})})]}),t(H,{className:"border-t-4 border-t-emerald-500",children:[e(V,{children:e(q,{children:"Project Stats"})}),e(G,{children:t("div",{className:"space-y-2",children:[t("div",{className:"flex justify-between",children:[e("span",{className:"text-muted-foreground",children:"Chats"}),e("span",{className:"font-medium",children:s.chatrooms?.length||0})]}),t("div",{className:"flex justify-between",children:[e("span",{className:"text-muted-foreground",children:"Members"}),e("span",{className:"font-medium",children:s.members?.length||1})]}),t("div",{className:"flex justify-between",children:[e("span",{className:"text-muted-foreground",children:"Files"}),e("span",{className:"font-medium",children:s.files?.length||0})]}),t("div",{className:"flex justify-between",children:[e("span",{className:"text-muted-foreground",children:"Created"}),e("span",{className:"font-medium",children:new Date(s.createdAt).toLocaleDateString()})]}),s.isPrivate&&t("div",{className:"flex justify-between items-center pt-2 mt-2 border-t",children:[t("span",{className:"text-muted-foreground flex items-center",children:[e(Q,{className:"h-3.5 w-3.5 mr-1.5 text-red-500"}),"Visibility"]}),e("span",{className:"font-medium text-sm bg-gray-100 px-2 py-0.5 rounded",children:"Private"})]})]})})]}),t(H,{className:"border-t-4 border-t-emerald-500",children:[t(V,{className:"pb-2",children:[t(q,{className:"flex items-center justify-between",children:[e("span",{children:"Project Files"}),s.files&&s.files.length>0&&e(je,{teamspaceId:r?.id,projectId:s.id,organizationId:$.session?.activeOrganizationId||"",compact:!0,files:s.files||[],className:"ml-auto",onUploadComplete:a=>{console.log("Files uploaded successfully",a),z().chatrooms.getProject(s.id).then(({data:c})=>{c&&T(o=>o.map(x=>x.id===r?.id?{...x,projects:x.projects?.map(W=>W.id===s.id?c:W)}:x))}).catch(c=>{console.error("Error refreshing project data:",c)})}})]}),e(Z,{children:"Upload and manage files for this project"})]}),e(G,{children:s.files&&s.files.length>0?e("div",{className:"space-y-2 max-h-64 overflow-y-auto pr-1",children:s.files.map((a,c)=>t("div",{className:"flex items-center p-2 border rounded bg-white hover:bg-gray-50 transition-colors",children:[e("div",{className:"w-10 h-10 mr-3 bg-gray-100 flex items-center justify-center rounded overflow-hidden flex-shrink-0",children:nt(a)}),t("div",{className:"flex-1 truncate",children:[e("a",{href:a.fileUrl,target:"_blank",rel:"noopener noreferrer",className:"font-medium text-sm truncate hover:underline hover:text-emerald-600",title:a.fileName,children:a.fileName||`File ${c+1}`}),e("p",{className:"text-xs text-muted-foreground",children:new Date(a.createdAt).toLocaleDateString()})]}),e(d,{variant:"ghost",size:"sm",className:"text-red-500 hover:text-red-700 hover:bg-red-50",onClick:o=>{o.preventDefault(),o.stopPropagation(),w(a)},children:e(X,{className:"h-4 w-4"})})]},a.id||c))}):t("div",{className:"text-center py-8 bg-muted/10 rounded-lg border border-dashed min-h-[160px] flex flex-col items-center justify-center",children:[e("div",{className:"bg-gray-50 p-4 rounded-full mb-3",children:e(Y,{className:"h-8 w-8 text-emerald-600"})}),e("p",{className:"text-base font-medium text-gray-700 mb-1",children:"No files uploaded yet"}),e("p",{className:"text-sm text-muted-foreground mb-4",children:"Add files to this project"}),e(je,{teamspaceId:r?.id,projectId:s.id,organizationId:$.session?.activeOrganizationId||"",onUploadComplete:a=>{console.log("Files uploaded successfully",a),z().chatrooms.getProject(s.id).then(({data:c})=>{c&&T(o=>o.map(x=>x.id===r?.id?{...x,projects:x.projects?.map(W=>W.id===s.id?c:W)}:x))}).catch(c=>{console.error("Error refreshing project data:",c)})}})]})})]})]})]})]}),e(ce,{open:!!i,onOpenChange:a=>!a&&w(null),children:t(oe,{children:[t(ee,{children:[t(te,{className:"flex items-center",children:[e(Te,{className:"h-5 w-5 text-red-500 mr-2"}),"Delete File"]}),t(ie,{children:["Are you sure you want to delete ",e("span",{className:"font-medium",children:i?.fileName}),"? This action cannot be undone."]})]}),t(Oe,{children:[e(d,{variant:"outline",onClick:()=>w(null),disabled:m,children:"Cancel"}),e(d,{variant:"destructive",onClick:()=>i&&I(i),className:"bg-red-600 hover:bg-red-700 text-white",disabled:m,children:m?"Deleting...":"Delete"})]})]})})]})};export{tr as component};
