import styles from './ReviewVerdictBox.module.scss';

export default function ReviewVerdictBox({ verdict }) {
  return (
    <div className={styles['verdict-box']}>
      <h3 className="text-brand-purple">Quick Verdict</h3>
      <p>{verdict}</p>
    </div>
  );
}
