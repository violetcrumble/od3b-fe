import Markdown from 'react-markdown';
import { AFFILIATE_LINK_PATTERN } from '../../../utils/affiliateLink';
import styles from './ReviewVerdictBox.module.scss';

const markdownLinkComponents = {
  a: ({ node, ...props }) => (
    <a
      {...props}
      target="_blank"
      rel={AFFILIATE_LINK_PATTERN.test(props.href || '') ? 'sponsored noopener noreferrer' : 'noopener noreferrer'}
    />
  ),
};

export default function ReviewVerdictBox({ verdict }) {
  return (
    <div className={styles['verdict-box']}>
      <h3 className="text-brand-purple">Quick Verdict</h3>
      <Markdown components={markdownLinkComponents}>{verdict}</Markdown>
    </div>
  );
}
