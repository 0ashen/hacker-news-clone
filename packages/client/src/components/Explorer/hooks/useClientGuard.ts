import { useEffect, useRef, useState } from 'react';

export const useClientGuard = (): boolean => {
   const ref = useRef(false);
   const [state, setState] = useState(ref.current);
   useEffect(() => {
      if (process.browser && !ref.current) {
         ref.current = true;
         setState(true);
      }
   }, []);
   return ref.current;
};
