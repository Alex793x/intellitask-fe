import { useRouter } from '@tanstack/react-router';
import { a7 as ei } from '../nitro/nitro.mjs';

const u = () => {
  const t = useRouter();
  return async () => {
    await ei(), t.navigate({ to: "/sign-in", reloadDocument: true });
  };
};

export { u };
//# sourceMappingURL=useSignOut-hVi5Ju03.mjs.map
