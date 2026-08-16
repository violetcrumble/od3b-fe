import { useEffect } from 'react';
import trackEvent from './analytics';

// Every affiliate link on the site already carries rel="sponsored" (see
// markdownLinkComponents, ThcAffiliateCTAs, AmazonListingCard, the discounts
// page and filming-equipment). One delegated listener therefore covers every
// placement without editing each component, and keeps covering links that only
// exist inside Strapi markdown.
//
// Capture phase so a component's own onClick can't stop the event first.
export default function useAffiliateClickTracking() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target?.closest?.('a[rel~="sponsored"]');
      if (!link?.href) return;

      let url;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }

      // affiliateLink() already stamps the placement onto the outbound URL:
      // UTMs for most partners, a packed clickref for Awin (which strips UTMs),
      // so the same fields line up with what Awin and the partner dashboards
      // report. Hand-written links (amzn.to in filming-equipment) carry none of
      // these, and report as empty rather than guessed.
      trackEvent('affiliate_click', {
        affiliate_url: link.href,
        affiliate_domain: url.hostname,
        affiliate_placement: url.searchParams.get('utm_medium') || '',
        affiliate_campaign: url.searchParams.get('utm_campaign') || '',
        affiliate_partner: url.searchParams.get('utm_content') || '',
        affiliate_clickref: url.searchParams.get('clickref') || '',
        link_text: link.innerText.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);
}
