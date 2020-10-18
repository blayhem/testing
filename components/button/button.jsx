import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default function Button({ disabled, error, text, icon, style }) {
  Button.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
  };

  return (
    <button
      disabled={disabled}
      styles={{ ...style }}
      className={cx(styles.button, { [styles.error]: error })}
    >
      {icon ? <img src={icon} alt="button icon" /> : null}
      {text ? text : null}
    </button>
  );
}
