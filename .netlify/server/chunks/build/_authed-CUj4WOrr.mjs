import { redirect } from '@tanstack/react-router';
import { u } from './getRequestClient-CzduEbyq.mjs';
import { J } from './client-DM3TFEX8.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const o = J("app_routes_authed_tsx--checkExistingOrganization_createServerFn_handler", "/_server", (e, r) => c.__executeServer(e, r)), c = createServerFn().handler(o, async () => {
  const e = u(), { data: r } = await e.auth.getIfUserHasActiveOrganization();
  if (!r.hasActiveOrganization) throw redirect({ to: "/create-organization" });
});

export { o as checkExistingOrganization_createServerFn_handler };
//# sourceMappingURL=_authed-CUj4WOrr.mjs.map
