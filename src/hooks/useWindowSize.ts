import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const updateSize = () => {
      setTimeout(() => {
        setSize(window.innerHeight);
      }, 500);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('popstate', () => {
      updateSize();
    });
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('popstate', () => {
        setTimeout(() => {
          updateSize();
        });
      });
    };
  }, []);
  return size;
};

export default useWindowSize;
