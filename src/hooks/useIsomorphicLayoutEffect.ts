'use client';
import { useEffect, useLayoutEffect } from 'react';
export function isBrowser() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

const useIsomorphicLayoutEffect = isBrowser() ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;
