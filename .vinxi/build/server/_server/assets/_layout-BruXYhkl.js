import{b as r}from"./getRequestClient-CzduEbyq.js";import{c as a}from"./client-DM3TFEX8.js";import{createServerFn as s}from"@tanstack/start-client-core";import"@tanstack/start-server-core";import"tiny-invariant";const o=a("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler","/_server",(e,t)=>c.__executeServer(e,t)),c=s().handler(o,async()=>{try{const e=r(),{data:t}=await e.chatrooms.getParticipatingTeamspaces();return t}catch{return[]}}),n=a("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler","/_server",(e,t)=>_.__executeServer(e,t)),_=s().handler(n,async()=>{const e=r(),{data:t}=await e.chatrooms.getParticipatingChatroomsWithLatestMessages();return console.log("chatrooms",t),t});export{n as getChatrooms_createServerFn_handler,o as getTeamspaces_createServerFn_handler};
