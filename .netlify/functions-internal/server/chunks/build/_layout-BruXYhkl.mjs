import { a } from './getRequestClient-CzduEbyq.mjs';
import { J } from './client-DM3TFEX8.mjs';
import { createServerFn } from '@tanstack/start-client-core';
import '@tanstack/start-server-core';
import 'tiny-invariant';

const o = J("app_routes_authed_layout_tsx--getTeamspaces_createServerFn_handler", "/_server", (e, t) => c.__executeServer(e, t)), c = createServerFn().handler(o, async () => {
  try {
    const e = a(), { data: t } = await e.chatrooms.getParticipatingTeamspaces();
    return t;
  } catch {
    return [];
  }
}), n = J("app_routes_authed_layout_tsx--getChatrooms_createServerFn_handler", "/_server", (e, t) => _.__executeServer(e, t)), _ = createServerFn().handler(n, async () => {
  const e = a(), { data: t } = await e.chatrooms.getParticipatingChatroomsWithLatestMessages();
  return console.log("chatrooms", t), t;
});

export { n as getChatrooms_createServerFn_handler, o as getTeamspaces_createServerFn_handler };
//# sourceMappingURL=_layout-BruXYhkl.mjs.map
