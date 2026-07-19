import { AFFILIATE_LINK_PATTERN } from './affiliateLink';

// react-markdown link renderer for content pages: every link opens in a new
// tab, and affiliate links additionally carry rel="sponsored" per Google's
// paid-link guidelines. (The blog template intentionally uses its own variant
// that leaves non-affiliate links with default in-page behavior.)
const markdownLinkComponents = {
  a: ({ node, ...props }) => (
    <a
      {...props}
      target="_blank"
      rel={AFFILIATE_LINK_PATTERN.test(props.href || '') ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
    />
  ),
};

export default markdownLinkComponents;
