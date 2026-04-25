'use client';

import { useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { resetScrollPosition, scheduleScrollToTopFollowUps } from '@/lib/scrollToTop';

export default function ServiceSlugTemplate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [pathname]);

  useEffect(() => {
    resetScrollPosition();
    return scheduleScrollToTopFollowUps();
  }, [pathname]);

  return <>{children}</>;
}
