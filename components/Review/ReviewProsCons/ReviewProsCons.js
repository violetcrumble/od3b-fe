import styles from './ReviewProsCons.module.scss';

export default function ReviewProsCons({ pros, cons }) {
  return (
    <div className={styles['pros-cons']}>
      <div className={styles.column}>
        <h3 className="text-brand-teal">Pros</h3>
        <ul>
          {pros.map((pro) => (
            <li key={pro} className={styles.pro}>
              <span className={styles.icon}>✓</span> {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.column}>
        <h3 className="text-brand-orange">Cons</h3>
        <ul>
          {cons.map((con) => (
            <li key={con} className={styles.con}>
              <span className={styles.icon}>✗</span> {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
