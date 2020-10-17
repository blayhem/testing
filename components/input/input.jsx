import styles from './input.module.scss';

export default function Input() {
  return (
    <div className={styles.URLinput}>
      <div className={styles.inputLabel}>
        <input className={styles.textInput} type="text" required />
        <label className={styles.inputLabel}>The link</label>
      </div>
      <button>send us</button>
    </div>
  );
}
