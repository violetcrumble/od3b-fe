import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import trackEvent from '../../utils/analytics';
import styles from './ShareMenu.module.scss';
import shareIcon from '../../public/icons/share.svg';
import facebookIcon from '../../public/facebook.svg';
import pinterestIcon from '../../public/pinterest.svg';

// url and title feed the networks' share dialogs; image becomes the Pinterest pin
export default function ShareMenu({ url, title, image }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
    }
    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  // GA4's recommended `share` event, so the networks land in one report split
  // by method rather than three separate custom events.
  function trackShare(method) {
    trackEvent('share', { method, item_id: url, page_path: window.location.pathname });
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackShare('copy_link');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked; the visitor can still select the readonly input
    }
  }

  return (
    <div className={styles['share-menu']} ref={menuRef}>
      <button type="button" className={styles['share-button']} aria-expanded={open} onClick={() => setOpen(!open)}>
        <Image priority src={shareIcon} alt="" height={24} width={24} />
        share
      </button>
      {open && (
        <div className={styles['share-popup']}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackShare('facebook')}
          >
            <Image src={facebookIcon} alt="" height={24} width={24} />
            Share on Facebook
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}${
              image ? `&media=${encodeURIComponent(image)}` : ''
            }&description=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackShare('pinterest')}
          >
            <Image src={pinterestIcon} alt="" height={24} width={24} />
            Pin on Pinterest
          </a>
          <div className={styles['copy-link-row']}>
            <input type="text" readOnly value={url} aria-label="Link to this page" onFocus={(e) => e.target.select()} />
            <button type="button" onClick={handleCopy}>
              {copied ? 'copied!' : 'copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
