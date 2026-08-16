import { useEffect } from 'react';
import { useRouter } from 'next/router';
import trackEvent from './analytics';

const MILESTONES = [25, 50, 75, 90];

// GTM's built-in scroll trigger arms once per document load, so after a
// client-side route change it never re-arms and every in-site navigation goes
// unmeasured. Keying the milestones on the path fixes that.
// Pages too short to scroll report nothing rather than an instant 100%.
export default function useScrollDepthTracking() {
  const { asPath } = useRouter();

  useEffect(() => {
    const reached = [];
    let queued = false;

    function measure() {
      queued = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      MILESTONES.filter((milestone) => percent >= milestone && !reached.includes(milestone)).forEach((milestone) => {
        reached.push(milestone);
        trackEvent('scroll_depth', { percent_scrolled: milestone, page_path: window.location.pathname });
      });
    }

    function handleScroll() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(measure);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [asPath]);
}
