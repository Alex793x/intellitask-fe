import { L, H } from './client-DM3TFEX8.mjs';
import { getWebRequest } from '@tanstack/start-server-core';

const r = (e) => {
  const s = H("staging");
  return new L(s, { auth: { cookie: e }, requestInit: { credentials: "include" } });
}, a = () => {
  var _a, _b;
  const e = H("staging");
  return new L(e, { auth: { cookie: (_b = (_a = getWebRequest()) == null ? void 0 : _a.headers.get("cookie")) != null ? _b : void 0 }, requestInit: { credentials: "include" } });
}, u = () => {
  var _a, _b;
  const e = H("staging");
  return new L(e, { auth: { cookie: (_b = (_a = getWebRequest()) == null ? void 0 : _a.headers.get("cookie")) != null ? _b : void 0 }, requestInit: { cache: "force-cache", credentials: "include" } });
};

export { a, r, u };
//# sourceMappingURL=getRequestClient-CzduEbyq.mjs.map
