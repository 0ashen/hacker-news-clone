import { useRouter } from 'next/router';

export const useCloseExplorer = () => {
   const { replace, pathname } = useRouter();

   const handleCloseExplorer = () => {
      replace(pathname, undefined, { shallow: true });
   };

   return {
      closeHandler: handleCloseExplorer
   };
};
