import { useState, useEffect } from 'react';
import { breakpoints } from '../style/breakpoints';

export interface IWindowSize {
  width: number;
  height: number;
}

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>(() => getSize());

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowSize,
    setWindowSize,
    isUpToSmall: windowSize.width <= breakpoints.small,
    isSmallUp: windowSize.width > breakpoints.small,
    isMediumUp: windowSize.width > breakpoints.medium,
    isLargeUp: windowSize.width > breakpoints.large,
    isXLargeUp: windowSize.width > breakpoints.xLarge,
    isLowHeight: windowSize.height < 800,
  };
}
