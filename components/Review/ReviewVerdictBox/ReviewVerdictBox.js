import Markdown from 'react-markdown';
import markdownLinkComponents from '../../../utils/markdownLinkComponents';
import styles from './ReviewVerdictBox.module.scss';

export default function ReviewVerdictBox({ verdict }) {
  return (
    <div className={styles['verdict-box']}>
      <h3 className="text-brand-purple">Quick Verdict</h3>
      <Markdown components={markdownLinkComponents}>{verdict}</Markdown>
    </div>
  );
}
