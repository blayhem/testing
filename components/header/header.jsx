import PropTypes from 'prop-types';
import styles from './header.module.scss';

export default function Header({ setStage }) {
  Header.propTypes = {
    setStage: PropTypes.func,
  };

  return (
    <header className={styles.header} onClick={() => setStage(0)}>
      <img src="/logo.svg" alt="Cat Counter Logo" className={styles.logo} />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cat Counter</h1>
        <p className={styles.subtitle}>Trying testing JS frameworks</p>
      </div>
    </header>
  );
}
