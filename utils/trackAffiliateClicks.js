import { useEffect } from 'react';
import trackEvent from './analytics';

const AWIN_MERCHANT_DOMAINS = {
  123264: 'artet.com',
};

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
      let domain = url.hostname;
      if (domain.endsWith('awin1.com')) {
        try {
          domain = new URL(url.searchParams.get('ued')).hostname;
        } catch {
          // awclick.php links carry no ued destination, only a merchant id
          domain = AWIN_MERCHANT_DOMAINS[url.searchParams.get('mid')] || domain;
        }
      }

      trackEvent('affiliate_click', {
        affiliate_url: link.href,
        affiliate_domain: domain,
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
