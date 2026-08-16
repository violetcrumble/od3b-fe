import { useState } from 'react';
import trackEvent from '../../utils/analytics';
import styles from './NewsletterSignup.module.scss';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        trackEvent('newsletter_signup_error', {
          error_message: data.error || 'unknown',
          page_path: window.location.pathname,
        });
        return;
      }

      setStatus('success');
      setEmail('');
      // Only a confirmed Beehiiv subscribe counts, so the event can be used as
      // a conversion without inflating it with failed submits.
      trackEvent('newsletter_signup', { page_path: window.location.pathname });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      trackEvent('newsletter_signup_error', {
        error_message: 'network',
        page_path: window.location.pathname,
      });
    }
  }

  return (
    <div className={styles['newsletter-signup']}>
      <h3 className="text-brand-teal">Get New Recipes in Your Inbox</h3>
      <p>Cocktail recipes, THC drink picks, and home bar finds every two weeks, straight from Cocktail Underground.</p>

      {status === 'success' ? (
        <p className={styles.success}>You&apos;re in! Check your inbox to confirm your subscription.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-label="Email address"
            disabled={status === 'loading'}
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      )}

      {status === 'error' && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
