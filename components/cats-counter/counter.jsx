import PropTypes from 'prop-types';
import styles from './counter.module.scss';

export default function Counter({ number }) {
  Counter.propTypes = {
    number: PropTypes.number,
  };

  return (
    <div className={styles.counter}>
      <img src="/icons/stonks.svg" />
      {number} cats detected
    </div>
  );
}
