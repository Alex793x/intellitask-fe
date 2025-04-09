import { useRouter } from '@tanstack/react-router';
import { a7 as ti } from '../nitro/nitro.mjs';

const u = () => {
  const t = useRouter();
  return async () => {
    await ti(), t.navigate({ to: "/sign-in", reloadDocument: true });
  };
};

export { u };
//# sourceMappingURL=useSignOut-0Oz-yQnj.mjs.map
