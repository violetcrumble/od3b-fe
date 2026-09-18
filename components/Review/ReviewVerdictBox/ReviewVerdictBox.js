import Markdown from 'react-markdown';
import markdownLinkComponents from '../../../utils/markdownLinkComponents';
import styles from './ReviewVerdictBox.module.scss';

export default function ReviewVerdictBox({ verdict }) {
  return (
    <div className={styles['verdict-box']}>
      <h2 className={`text-brand-purple ${styles['verdict-heading']}`}>Quick Verdict</h2>
      <Markdown components={markdownLinkComponents}>{verdict}</Markdown>
    </div>
  );
}
