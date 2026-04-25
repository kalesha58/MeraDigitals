'use client';

import { useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { resetScrollPosition, scheduleScrollToTopFollowUps } from '@/lib/scrollToTop';

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [pathname]);

  useEffect(() => {
    resetScrollPosition();
    return scheduleScrollToTopFollowUps();
  }, [pathname]);

  return null;
}
