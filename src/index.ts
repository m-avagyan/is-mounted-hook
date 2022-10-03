import { useRef, useEffect } from 'react';

type TResult = {
  current: boolean;
};

function useIsMounted(): TResult {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
}

export default useIsMounted;
