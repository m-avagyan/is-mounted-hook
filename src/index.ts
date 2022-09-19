import { useRef, useEffect, useMemo } from 'react';

function useIsMounted(): boolean {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const isMounted = useMemo(() => isMountedRef.current, [isMountedRef]);

  return isMounted;
}

export default useIsMounted;
