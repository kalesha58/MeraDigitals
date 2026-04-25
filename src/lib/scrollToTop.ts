/** Immediate scroll to top (window + common scroll roots). */
export function resetScrollPosition(): void {
  if (typeof window === 'undefined') return;
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Next/App Router can re-apply scroll after deep-page navigations; re-run for a few frames. */
export function scheduleScrollToTopFollowUps(): () => void {
  resetScrollPosition();
  const delaysMs = [0, 16, 64, 120, 200, 350];
  const ids = delaysMs.map((ms) => window.setTimeout(resetScrollPosition, ms));
  return () => ids.forEach((id) => window.clearTimeout(id));
}
