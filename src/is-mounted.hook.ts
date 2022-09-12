import { useRef, useEffect } from 'react';

function useIsMounted(): boolean {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef.current;
}

export default useIsMounted;
