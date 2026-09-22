import { AFFILIATE_LINK_PATTERN } from './affiliateLink';

const markdownLinkComponents = {
  a: ({ node, ...props }) =>
    AFFILIATE_LINK_PATTERN.test(props.href || '') ? (
      <a {...props} className="affiliate-link" target="_blank" rel="sponsored noopener noreferrer" />
    ) : (
      <a {...props} />
    ),
  // Markdown bodies never hold a page's first image (heroes and cards use next/image), so these can all lazy-load.
  img: ({ node, ...props }) => <img {...props} alt={props.alt || ''} loading="lazy" decoding="async" />,
};

export default markdownLinkComponents;
