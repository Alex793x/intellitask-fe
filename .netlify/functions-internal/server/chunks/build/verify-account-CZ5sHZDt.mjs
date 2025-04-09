import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { Q as Qt, m as me, v as ve$1, u as ue, n as ne, c as ce, a as aa, b as na, l as le, e as ee, T as Te, O, d as ct, i as it } from '../nitro/nitro.mjs';
import { toast } from 'sonner';
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
import 'zod';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-label';
import 'better-auth/react';
import 'better-auth/client/plugins';
import 'lucide-react';
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

const Y = ({ emailReqParam: p }) => {
  const [r, s] = useState(""), [n, N] = useState(p), [l, w] = useState(""), [u, h] = useState(false), f = r.length === 6 && /^\d{6}$/.test(r) && n.length > 3 && l.length > 7, g = useNavigate(), C = async () => {
    h(true);
    const { data: t } = await ct.verifyEmail({ email: n, otp: r });
    if (t == null ? void 0 : t.user.id) {
      const { data: b } = await it.email({ email: n, password: l, rememberMe: true });
      (b == null ? void 0 : b.user.id) ? (toast.info("You have been verified"), setTimeout(() => g({ to: "/chat" }), 1e3)) : (toast.info("You have been verified - sign in"), setTimeout(() => g({ to: "/sign-in" }), 1e3));
    } else toast.info("Something went wrong - try verifying again");
    h(false);
  };
  return jsxs("div", { className: "flex flex-col items-center mt-20 text-center text-sm ", children: [jsxs("div", { className: "flex flex-col sm:w-[40%] w-full items-center gap-y-2 mb-6", children: [jsx("h3", { children: "You must be verified to create an organization." }), jsx("p", { className: "text-gray-500", children: "Please verify your account to proceed." })] }), jsxs(me, { className: "w-full max-w-lg", children: [jsxs(ve$1, { children: [jsx(ue, { children: "Verification Required" }), jsx(ne, { children: "Please enter the 6-character code sent to your email" })] }), jsx(ce, { className: "flex flex-col items-center", children: jsx("div", { className: "space-y-2", children: jsx(aa, { maxLength: 6, value: r, onChange: (t) => s(t), children: jsxs(na, { children: [jsx(le, { index: 0 }), jsx(le, { index: 1 }), jsx(le, { index: 2 }), jsx(le, { index: 3 }), jsx(le, { index: 4 }), jsx(le, { index: 5 })] }) }) }) }), jsx(ce, { className: "flex flex-col items-center text-left", children: jsxs("div", { className: "space-y-2", children: [jsx(ue, { children: "Email" }), jsx(ee, { id: "email", type: "email", value: n, onChange: (t) => N(t.target.value.toLowerCase()), required: true })] }) }), jsx(ce, { className: "flex flex-col items-center text-left", children: jsxs("div", { className: "space-y-2", children: [jsx(ue, { children: "Your password" }), jsx(ee, { id: "password", type: "password", minLength: 8, value: l, onChange: (t) => w(t.target.value), required: true })] }) }), jsxs(Te, { className: "flex flex-col", children: [jsxs("div", { className: "flex justify-center gap-x-6", children: [jsx(O, { disabled: u || !f, onClick: () => C(), children: u ? "Verifying..." : "Verify" }), jsx(O, { variant: "outline", onClick: () => window.location.reload(), children: "Cancel" })] }), jsxs("div", { className: "mt-6 mb-2", children: [jsxs("span", { className: "text-gray-500", children: ["Don't have an account?", " "] }), jsx(Link, { to: "/sign-up", className: "text-primary hover:underline ml-0.5", children: "Sign up" })] }), jsxs("div", { children: [jsxs("span", { className: "text-gray-500", children: ["Already verified?", " "] }), jsx(Link, { to: "/sign-in", viewTransition: true, className: "text-primary hover:underline ml-0.5", children: "Sign in" })] })] })] })] });
}, ve = function() {
  const r = Qt.useSearch({ select: (s) => s.email });
  return jsx(Y, { emailReqParam: r });
};

export { ve as component };
//# sourceMappingURL=verify-account-CZ5sHZDt.mjs.map
