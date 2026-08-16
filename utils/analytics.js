// Pushes an event onto the GTM dataLayer, where a GTM trigger picks it up and
// forwards it to GA4. Safe to call before (or without) the container loading:
// the push just queues on the array, and nothing throws during SSR.
export default function trackEvent(event, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
