import { jsxs, jsx } from 'react/jsx-runtime';
import { useEffect, useState, useRef } from 'react';
import { g as ga, _ } from '../nitro/nitro.mjs';
import { X, Menu, Sparkles, Calendar, Bot, Braces, Users, Brain, Zap, Globe, MessageSquare, Star, Database, Lock, Check, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
import 'jotai';
import 'sonner';
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

const Z = ({ userId: n }) => {
  const [l, s] = useState(false), [i, d] = useState(false);
  useEffect(() => {
    const r = () => {
      window.scrollY > 20 ? s(true) : s(false);
    };
    return window.addEventListener("scroll", r), () => window.removeEventListener("scroll", r);
  }, []);
  const o = () => d(!i);
  return jsxs("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${l ? "glass-card py-3" : "py-6"}`, children: [jsx("div", { className: "container mx-auto px-6", children: jsxs("div", { className: "flex items-center justify-between", children: [jsx("a", { href: "/", className: "text-2xl font-heading font-bold text-foreground animate-enter", children: "IntelliOptima" }), jsxs("nav", { className: "hidden md:flex items-center space-x-6", children: [jsx("a", { href: "#features", className: "nav-link", children: "Features" }), jsx("a", { href: "#benefits", className: "nav-link", children: "Benefits" }), jsx("a", { href: "#about", className: "nav-link", children: "About" }), jsx("a", { href: "#contact", className: "nav-link", children: "Contact" }), jsx(Link, { to: "/sign-in", viewTransition: true, children: jsx(_, { className: "hover:cursor-pointer", children: "Access Beta" }) })] }), jsx("button", { className: "md:hidden text-foreground", onClick: o, "aria-label": "Toggle menu", children: i ? jsx(X, { size: 24 }) : jsx(Menu, { size: 24 }) })] }) }), jsx("div", { className: `md:hidden absolute top-full left-0 z-50 w-full glass-card p-4 transition-all duration-300 ${i ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`, children: jsxs("nav", { className: "flex flex-col space-y-4", children: [jsx("a", { href: "#features", className: "nav-link", children: "Features" }), jsx("a", { href: "#benefits", className: "nav-link", children: "Benefits" }), jsx("a", { href: "#about", className: "nav-link", children: "About" }), jsx("a", { href: "#contact", className: "nav-link", children: "Contact" }), jsx(Link, { to: "/sign-in", onClick: o, children: jsx(_, { className: "w-full", children: "Access Beta" }) })] }) })] });
}, g = ["Easily", "Securely", "Efficiently", "Cheaply"], K = () => {
  const [n, l] = useState(0), [s, i] = useState(false);
  useRef(null);
  const d = useRef(null);
  useEffect(() => {
    const u = (f) => {
      if (!d.current) return;
      const { clientX: k, clientY: A } = f, { left: z, top: C, width: S, height: O } = d.current.getBoundingClientRect(), B = (k - z) / S, _ = (A - C) / O, M = (B - 0.5) * 30, T = (_ - 0.5) * 30;
      d.current.style.setProperty("--move-x", `${M}px`), d.current.style.setProperty("--move-y", `${T}px`);
    };
    return document.addEventListener("mousemove", u), () => document.removeEventListener("mousemove", u);
  }, []), useEffect(() => {
    const u = setInterval(() => {
      i(true), l((f) => (f + 1) % g.length), setTimeout(() => {
        i(false);
      }, 1e3);
    }, 2e3);
    return () => clearInterval(u);
  }, []);
  const o = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }, r = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } } }, h = { initial: { rotateX: -90, opacity: 0, y: "100%" }, enter: { rotateX: 0, opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 150, duration: 0.5 } }, exit: { rotateX: 90, opacity: 0, y: "-100%", transition: { duration: 0.4 } } };
  return jsxs("section", { ref: d, className: "min-h-screen flex items-center relative overflow-hidden pt-20", style: { "--move-x": "0px", "--move-y": "0px" }, children: [jsx("div", { className: "absolute inset-0 -z-10 dot-pattern opacity-30" }), jsx("div", { className: "absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl", style: { transform: "translateX(calc(var(--move-x) * -0.7)) translateY(calc(var(--move-y) * -0.7))" } }), jsx("div", { className: "absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl", style: { transform: "translateX(calc(var(--move-x) * 0.7)) translateY(calc(var(--move-y) * 0.7))" } }), jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [jsx("div", { className: "absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite]" }), jsx("div", { className: "absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite_0.5s]" }), jsx("div", { className: "absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite_1s]" }), jsx("div", { className: "absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[pulse_4s_ease-in-out_infinite_1.5s]" })] }), jsx("div", { className: "container mx-auto px-6 relative z-10", children: jsxs(motion.div, { className: "flex flex-col lg:flex-row items-center gap-12", variants: o, initial: "hidden", animate: "visible", children: [jsxs(motion.div, { className: "flex-1 text-center lg:text-left", variants: r, children: [jsxs(motion.div, { className: "inline-flex items-center mb-4 glass-card px-4 py-1.5 rounded-full", variants: r, whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 400, damping: 10 }, children: [jsx(Sparkles, { className: "h-4 w-4 mr-2 text-primary" }), jsx("span", { className: "text-sm font-medium text-primary", children: "Simplified AI adoption" })] }), jsxs(motion.h1, { className: "mb-6 text-4xl md:text-6xl lg:text-7xl font-bold", variants: r, children: ["Access multiple AI models", jsx("span", { className: "inline-flex ml-2", children: jsx("div", { className: "perspective-3d overflow-hidden h-[1.2em] mr-2 relative", children: jsx(AnimatePresence, { mode: "wait", children: jsx(motion.span, { className: "bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 inline-block pb-2 relative px-2 -mx-2", variants: h, initial: "initial", animate: "enter", exit: "exit", style: { transformOrigin: "center center" }, children: g[n] }, g[n]) }) }) })] }), jsx(motion.p, { className: "text-lg mb-8 text-foreground/80 max-w-2xl mx-auto lg:mx-0", variants: r, children: "One centralised platform to manage all your AI models, with enterprise-grade security, simple access management, and powerful collaboration features." }), jsxs(motion.div, { className: "flex flex-col sm:flex-row justify-center lg:justify-start gap-4", variants: r, children: [jsxs(_, { size: "lg", className: "rounded-full flex items-center gap-2 hover:cursor-pointer", onClick: () => window.open("https://calendly.com/intellioptima", "_blank"), children: [jsx(Calendar, { size: 20 }), "Schedule a Meeting"] }), jsx("a", { href: "/entry", children: jsx(_, { size: "lg", variant: "outline", className: "group hover:cursor-pointer", children: jsx("span", { className: "", children: "Access Beta" }) }) })] })] }), jsx(motion.div, { className: "flex-1 w-full max-w-xl", variants: r, children: jsx(motion.div, { className: "relative", initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: jsxs("div", { className: "glass-card rounded-xl overflow-hidden shadow-lg border border-white/20 relative", children: [jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-slow" }), jsxs("div", { className: "bg-muted/40 p-4 border-b border-border/50 flex items-center justify-between backdrop-blur-md", children: [jsxs("div", { className: "flex items-center gap-3", children: [jsx(motion.div, { className: "w-3 h-3 rounded-full bg-red-400", whileHover: { scale: 1.2 } }), jsx(motion.div, { className: "w-3 h-3 rounded-full bg-yellow-400", whileHover: { scale: 1.2 } }), jsx(motion.div, { className: "w-3 h-3 rounded-full bg-green-400", whileHover: { scale: 1.2 } })] }), jsx("div", { className: "text-xs font-medium", children: "IntelliOptima" }), jsx("div", { className: "w-10" })] }), jsxs("div", { className: "p-6 flex gap-4", children: [jsxs("div", { className: "w-1/4 flex flex-col gap-3", children: [jsx(motion.div, { className: "w-full h-10 bg-secondary rounded-md", initial: { width: "70%" }, animate: { width: "100%" }, transition: { repeat: 1 / 0, repeatType: "reverse", duration: 2, ease: "easeInOut" } }), jsx("div", { className: "w-full h-10 bg-secondary/70 rounded-md" }), jsx("div", { className: "w-full h-10 bg-secondary/70 rounded-md" }), jsx("div", { className: "w-full h-10 bg-secondary/70 rounded-md" }), jsx("div", { className: "h-px bg-border my-2" }), jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "p-1.5 bg-primary/20 rounded-md", children: jsx(Bot, { size: 16, className: "text-primary" }) }), jsx("div", { className: "text-xs", children: "GPT-4o" })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "p-1.5 bg-blue-500/20 rounded-md", children: jsx(Braces, { size: 16, className: "text-blue-500" }) }), jsx("div", { className: "text-xs", children: "Sonnet-3.7" })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "p-1.5 bg-purple-500/20 rounded-md", children: jsx(Users, { size: 16, className: "text-purple-500" }) }), jsx("div", { className: "text-xs", children: "Team" })] })] }), jsxs("div", { className: "w-3/4 flex flex-col gap-4", children: [jsxs(motion.div, { className: "w-full bg-background rounded-lg p-4 shadow-sm", whileHover: { y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }, transition: { type: "spring", stiffness: 300, damping: 20 }, children: [jsx("div", { className: "h-3 w-3/4 bg-secondary rounded-full" }), jsx("div", { className: "mt-2 h-2 w-1/2 bg-secondary/70 rounded-full" }), jsx("div", { className: "mt-1 h-2 w-2/3 bg-secondary/70 rounded-full" })] }), jsxs(motion.div, { className: "w-full bg-primary/5 rounded-lg p-4 shadow-sm", animate: { boxShadow: ["0 2px 4px rgba(0,0,0,0.05)", "0 4px 8px rgba(0,0,0,0.1)", "0 2px 4px rgba(0,0,0,0.05)"] }, transition: { duration: 2, repeat: 1 / 0 }, children: [jsxs("div", { className: "flex justify-between items-start mb-2", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "p-1 bg-primary/20 rounded-full", children: jsx(Bot, { size: 14, className: "text-primary" }) }), jsx("div", { className: "text-xs font-medium", children: "GPT-4o" })] }), jsx("div", { className: "text-[10px] text-foreground/50", children: "Just now" })] }), jsx(motion.div, { className: "h-2 w-0 bg-primary/20 rounded-full", animate: { width: "100%" }, transition: { duration: 1.5 } }), jsx(motion.div, { className: "mt-1 h-2 w-0 bg-primary/20 rounded-full", animate: { width: "100%" }, transition: { duration: 1.5, delay: 0.2 } }), jsx(motion.div, { className: "mt-1 h-2 w-0 bg-primary/20 rounded-full", animate: { width: "75%" }, transition: { duration: 1.5, delay: 0.4 } })] }), jsxs(motion.div, { className: "w-full bg-blue-500/5 rounded-lg p-4 shadow-sm", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.2, duration: 0.5 }, children: [jsxs("div", { className: "flex justify-between items-start mb-2", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx("div", { className: "p-1 bg-blue-500/20 rounded-full", children: jsx(Braces, { size: 14, className: "text-blue-500" }) }), jsx("div", { className: "text-xs font-medium", children: "Sonnet-3.7" })] }), jsx("div", { className: "text-[10px] text-foreground/50", children: "Just now" })] }), jsx(motion.div, { className: "h-2 w-0 bg-blue-500/20 rounded-full", animate: { width: "100%" }, transition: { duration: 1.5, delay: 1.4 } }), jsx(motion.div, { className: "mt-1 h-2 w-0 bg-blue-500/20 rounded-full", animate: { width: "90%" }, transition: { duration: 1.5, delay: 1.6 } }), jsx(motion.div, { className: "mt-1 h-2 w-0 bg-blue-500/20 rounded-full", animate: { width: "60%" }, transition: { duration: 1.5, delay: 1.8 } })] })] })] })] }) }) })] }) })] });
}, Q = [{ links: [{ name: "Features", href: "#features" }, { name: "Pricing", href: "#pricing" }, { name: "Benefits", href: "#benefits" }, { name: "Contact", href: "#contact" }] }], ee = () => jsx("footer", { className: "bg-muted/20 border-t border-border", children: jsxs("div", { className: "container mx-auto px-6 py-12", children: [jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8", children: [jsxs("div", { className: "lg:col-span-2", children: [jsx("div", { className: "text-2xl font-heading font-bold text-foreground mb-4", children: "AICollaborate" }), jsx("p", { className: "text-foreground/70 mb-6 max-w-md", children: "The leading platform for real-time collaboration between teams and AI models. Transform your workflow today." }), jsxs("div", { className: "flex space-x-4", children: [jsx("a", { href: "#", className: "text-foreground/60 hover:text-primary transition-colors", "aria-label": "Twitter", children: jsx(Twitter, { size: 20 }) }), jsx("a", { href: "#", className: "text-foreground/60 hover:text-primary transition-colors", "aria-label": "LinkedIn", children: jsx(Linkedin, { size: 20 }) }), jsx("a", { href: "#", className: "text-foreground/60 hover:text-primary transition-colors", "aria-label": "GitHub", children: jsx(Github, { size: 20 }) }), jsx("a", { href: "#", className: "text-foreground/60 hover:text-primary transition-colors", "aria-label": "Email", children: jsx(Mail, { size: 20 }) })] })] }), Q.map((n) => jsx("div", { children: jsx("ul", { className: "space-y-3", children: n.links.map((l) => jsx("li", { children: jsx("a", { href: l.href, className: "text-foreground/70 hover:text-primary transition-colors", children: l.name }) }, l.name)) }) }, n.links[0].name))] }), jsx("div", { className: "mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center", children: jsxs("p", { className: "text-foreground/60 mb-4 md:mb-0", children: ["\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " IntelliOptima. All rights reserved."] }) })] }) }), ae = () => {
  if (typeof navigator > "u") return false;
  const n = navigator.userAgent.toLowerCase();
  return n.indexOf("safari") > -1 && n.indexOf("chrome") === -1;
}, te = [{ icon: Brain, title: "Multiple AI Models", description: "Connect with different AI models simultaneously to leverage their unique capabilities." }, { icon: Users, title: "Real-time Collaboration", description: "Work together with your team and AIs in the same teamspace, instantly." }, { icon: Zap, title: "Instant Responses", description: "Get immediate feedback and solutions from AI models without waiting." }, { icon: Globe, title: "AI Collaboration", description: "Share prompts, workflows and AI outputs with your team seamlessly." }, { icon: MessageSquare, title: "Contextual Conversations", description: "AIs remember the context of your conversations for more relevant assistance." }, { icon: Star, title: "Multiprompting", description: "Easily compare different results from a single prompt across multiple AI models." }, { icon: Database, title: "Model Management", description: "Access and manage the best and newest AI models through one subscription." }, { icon: Lock, title: "Enterprise Security", description: "Bank-level encryption and privacy controls keep your data secure." }], ie = () => {
  const n = useReducedMotion(), [l, s] = useState(false);
  useEffect(() => {
    s(ae());
  }, []);
  const i = l || n, d = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: i ? 0.03 : 0.1, delayChildren: 0.1 } } }, o = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: i ? "tween" : "spring", stiffness: 100, duration: i ? 0.3 : void 0 } } };
  return jsxs("section", { id: "features", className: "section bg-muted/30 overflow-hidden relative", children: [!i && jsx("div", { className: "absolute inset-0 -z-10 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" }), !i && jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [jsx("div", { className: "absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" }), jsx("div", { className: "absolute left-2/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" })] }), jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [jsxs(motion.div, { className: "text-center max-w-3xl mx-auto mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: i ? 0.3 : 0.6 }, children: [jsx(motion.div, { className: "inline-block mb-4 glass-card px-4 py-1.5 rounded-full", initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { delay: 0.2 }, children: jsx("span", { className: "text-sm font-medium text-primary", children: "Features" }) }), jsx(motion.h2, { className: "mb-4", initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.3 }, children: "Everything you need to optimize your organization's AI experience" }), jsx(motion.p, { className: "text-lg text-foreground/80", initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.4 }, children: "Our platform simplifies AI adoption for your enterprise, combining powerful tools for security, collaboration and management." })] }), jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", variants: d, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, children: te.map((r, h) => jsxs(motion.div, { className: "feature-card group", variants: o, whileHover: i ? {} : { y: -5, transition: { duration: 0.2 } }, children: [jsx("div", { className: "rounded-full bg-gradient-to-br from-primary/10 to-primary/20 p-3 w-fit mb-4 transition-colors duration-300", children: jsx(r.icon, { className: "h-6 w-6 text-primary" }) }), jsx("h3", { className: "text-xl font-semibold mb-3 transition-colors duration-300", children: r.title }), jsx("p", { className: "text-foreground/70", children: r.description }), !i && jsx("div", { className: "w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent mt-4 transition-all duration-300" })] }, h)) })] })] });
}, re = () => jsx("section", { id: "contact", className: "py-24 bg-accent dark:bg-accent/5", children: jsx("div", { className: "container mx-auto px-6 md:px-8", children: jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16", children: [jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6 animate-fade-in", children: "Get In Touch" }), jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 animate-fade-in animate-delay-100 text-balance", children: "Let's discuss how IntelliOptima can work for your organization" }), jsx("p", { className: "text-muted-foreground text-lg animate-fade-in animate-delay-200 text-balance mb-12", children: "Have questions or ready to get started? Our team is here to help you optimize your AI experience." }), jsx("div", { className: "flex justify-center animate-fade-in animate-delay-300", children: jsxs(_, { size: "lg", className: "rounded-full flex items-center gap-2 hover:cursor-pointer", onClick: () => window.open("https://calendly.com/intellioptima", "_blank"), children: [jsx(Calendar, { size: 20 }), "Schedule a Meeting"] }) })] }) }) }), ne = () => {
  const n = ["Reduce AI tool management costs by up to 40%", "Improve security and compliance across all AI usage", "Increase AI adoption rates among employees", "Enable knowledge sharing between teams", "Reduce onboarding time for new AI tools", "Streamline approval and access management"], l = ["Access multiple AI tools through one interface", "Learn AI best practices from power users", "Simplify collaboration with AI-generated content", "No more context switching between tools", "Clear security guidelines for all AI usage", "Save time with integrated workflows"];
  return jsx("section", { id: "benefits", className: "py-24 overflow-hidden", children: jsxs("div", { className: "container mx-auto px-6 md:px-8", children: [jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16", children: [jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6 animate-fade-in", children: "Benefits" }), jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 animate-fade-in animate-delay-100 text-balance", children: "Transform how your organization uses AI" }), jsx("p", { className: "text-muted-foreground text-lg animate-fade-in animate-delay-200 text-balance", children: "IntelliOptima delivers tangible benefits for both organizations and individual employees." })] }), jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20", children: [jsxs("div", { className: "order-2 lg:order-1 flex flex-col justify-center animate-fade-in animate-delay-300", children: [jsx("h3", { className: "text-2xl font-bold mb-6", children: "For Organizations" }), jsx("ul", { className: "space-y-4", children: n.map((s, i) => jsxs("li", { className: "flex items-start gap-3", children: [jsx("div", { className: "mt-1 p-1 rounded-full bg-primary/10 text-primary flex-shrink-0", children: jsx(Check, { size: 16 }) }), jsx("span", { children: s })] }, i)) })] }), jsx("div", { className: "order-1 lg:order-2 rounded-2xl overflow-hidden h-80 lg:h-auto animate-fade-in animate-delay-200", children: jsx("div", { className: "w-full h-full bg-gradient-to-br from-primary/20 to-accent-foreground/20 p-8 glass-card", children: jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-4 h-full flex flex-col", children: [jsx("div", { className: "h-10 bg-white/10 rounded-md mb-4" }), jsxs("div", { className: "flex-1 grid grid-cols-2 gap-4", children: [jsxs("div", { className: "space-y-3", children: [jsx("div", { className: "h-20 bg-white/10 rounded-md" }), jsx("div", { className: "h-20 bg-white/10 rounded-md" }), jsx("div", { className: "h-20 bg-white/10 rounded-md" })] }), jsxs("div", { className: "space-y-3", children: [jsx("div", { className: "h-32 bg-white/10 rounded-md" }), jsx("div", { className: "h-32 bg-white/10 rounded-md" })] })] })] }) }) }), jsx("div", { className: "order-3 rounded-2xl overflow-hidden h-80 lg:h-auto animate-fade-in animate-delay-400", children: jsx("div", { className: "w-full h-full bg-gradient-to-br from-accent-foreground/20 to-primary/20 p-8 glass-card", children: jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-4 h-full flex flex-col", children: [jsx("div", { className: "h-10 bg-white/10 rounded-md mb-4" }), jsxs("div", { className: "flex-1 space-y-3", children: [jsx("div", { className: "h-16 bg-white/10 rounded-md" }), jsxs("div", { className: "grid grid-cols-3 gap-3", children: [jsx("div", { className: "h-20 bg-white/10 rounded-md" }), jsx("div", { className: "h-20 bg-white/10 rounded-md" }), jsx("div", { className: "h-20 bg-white/10 rounded-md" })] }), jsx("div", { className: "h-16 bg-white/10 rounded-md" })] })] }) }) }), jsxs("div", { className: "order-4 flex flex-col justify-center animate-fade-in animate-delay-500", children: [jsx("h3", { className: "text-2xl font-bold mb-6", children: "For Employees" }), jsx("ul", { className: "space-y-4", children: l.map((s, i) => jsxs("li", { className: "flex items-start gap-3", children: [jsx("div", { className: "mt-1 p-1 rounded-full bg-primary/10 text-primary flex-shrink-0", children: jsx(Check, { size: 16 }) }), jsx("span", { children: s })] }, i)) })] })] })] }) });
}, le = () => jsx("section", { id: "about", className: "py-24 bg-accent dark:bg-accent/5", children: jsxs("div", { className: "container mx-auto px-6 md:px-8", children: [jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16", children: [jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold mb-6 animate-fade-in", children: "Our Mission" }), jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6 animate-fade-in animate-delay-100 text-balance", children: "A people-first approach to AI optimization" }), jsx("p", { className: "text-muted-foreground text-lg animate-fade-in animate-delay-200 text-balance", children: "We believe that the biggest opportunity is to provide users with the best AI experience and help as many as possible to get the most out of AI tools." })] }), jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20", children: [jsxs("div", { className: "bg-white/50 dark:bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/40 animate-fade-in animate-delay-300", children: [jsx("h3", { className: "text-2xl font-bold mb-4", children: "The Problem" }), jsx("p", { className: "text-muted-foreground mb-6", children: "AI is representing a major technology shift expected to affect almost every aspect of our work. This transition is already happening at digital-first companies, affecting entire job functions." }), jsx("p", { className: "text-muted-foreground mb-6", children: "However, AI adoption faces challenges:" }), jsxs("ul", { className: "space-y-3 text-muted-foreground", children: [jsx("li", { className: "pl-4 border-l-2 border-primary", children: "Many companies are holding off AI adoption due to data security concerns and unclear ROI" }), jsx("li", { className: "pl-4 border-l-2 border-primary", children: "The multitude of models and new releases adds difficulty in knowing which platform(s) to invest in" }), jsx("li", { className: "pl-4 border-l-2 border-primary", children: "People have tried AI platforms but most are not yet adopting it in a major way into their work streams" })] })] }), jsxs("div", { className: "bg-white/50 dark:bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/40 animate-fade-in animate-delay-400", children: [jsx("h3", { className: "text-2xl font-bold mb-4", children: "Our Solution" }), jsx("p", { className: "text-muted-foreground mb-6", children: "IntelliOptima is a centralized platform that enables companies and organizations to manage all of their AI use in a secure and easy way." }), jsx("p", { className: "text-muted-foreground mb-6", children: "In our AI user research, the most advanced users are utilizing all the tools available to optimize their work and save time. They combine multiple AI tools to optimize their tasks and integrate systems to streamline workflows." }), jsx("p", { className: "text-muted-foreground", children: "However, most users don't reach this level, which requires both technical skills and significant effort. Our platform bridges this gap, making advanced AI usage accessible to everyone in the organization." })] })] })] }) }), Ye = function() {
  const { userId: l } = ga.useRouteContext();
  return useEffect(() => {
    const s = (i) => {
      const o = i.target.closest("a");
      if (o && o.hash && o.href.includes(window.location.pathname)) {
        i.preventDefault();
        const r = document.querySelector(o.hash);
        r && (window.scrollTo({ top: r.getBoundingClientRect().top + window.scrollY - 100, behavior: "smooth" }), history.pushState(null, "", o.hash));
      }
    };
    return document.addEventListener("click", s), () => document.removeEventListener("click", s);
  }, []), jsxs("div", { className: "flex min-h-screen flex-col", children: [jsx(Z, { userId: l }), jsxs("main", { className: "flex-1", children: [jsx(K, {}), jsx(ie, {}), jsx(ne, {}), jsx(le, {}), jsx(re, {})] }), jsx(ee, {})] });
};

export { Ye as component };
//# sourceMappingURL=index-Bedqpn1T.mjs.map
