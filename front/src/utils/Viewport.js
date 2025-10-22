import { useEffect, useState } from 'react';

const MIN_WIDTH = 1024;
const MIN_HEIGHT = 780;

export function useViewport() {
  const [isOk, setIsOk] = useState(() =>
    typeof window !== 'undefined'
      ? window.innerWidth >= MIN_WIDTH && window.innerHeight >= MIN_HEIGHT
      : true
  );

  useEffect(() => {
    function onResize() {
      setIsOk(window.innerWidth >= MIN_WIDTH && window.innerHeight >= MIN_HEIGHT);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return { isOk, min: { width: MIN_WIDTH, height: MIN_HEIGHT } };
}