import { AFFILIATE_LINK_PATTERN } from './affiliateLink';

const markdownLinkComponents = {
  a: ({ node, ...props }) =>
    AFFILIATE_LINK_PATTERN.test(props.href || '') ? (
      <a {...props} className="affiliate-link" target="_blank" rel="sponsored noopener noreferrer" />
    ) : (
      <a {...props} />
    ),
};

export default markdownLinkComponents;
