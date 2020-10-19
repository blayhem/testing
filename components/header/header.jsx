import PropTypes from 'prop-types';
import styles from './header.module.scss';

export default function Header({ setStage }) {
  Header.propTypes = {
    setStage: PropTypes.func,
  };

  return (
    <header
      className={styles.header}
      onClick={() => setStage(0)}
    >
      <img src="/logo.svg" alt="Sigma Rail Logo" className={styles.logo} />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sigma Rail</h1>
        <p className={styles.subtitle}>Data Driven Industrial</p>
      </div>
    </header>
  );
}
