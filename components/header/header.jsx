import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="Sigma Rail Logo" className={styles.logo} />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sigma Rail</h1>
        <p className={styles.subtitle}>Data Driven Industrial</p>
      </div>
    </header>
  );
}
