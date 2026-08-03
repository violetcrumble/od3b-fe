import { AFFILIATE_LINK_PATTERN } from './affiliateLink';

// react-markdown link renderer for content pages: affiliate links open in a
// new tab and carry rel="sponsored" per Google's paid-link guidelines; all
// other links keep the default in-page behavior.
const markdownLinkComponents = {
  a: ({ node, ...props }) =>
    AFFILIATE_LINK_PATTERN.test(props.href || '') ? (
      <a {...props} target="_blank" rel="sponsored noopener noreferrer" />
    ) : (
      <a {...props} />
    ),
};

export default markdownLinkComponents;
