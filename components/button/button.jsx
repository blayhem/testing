import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

export default function Button({
  disabled,
  error,
  text,
  icon,
  style,
  onClick,
}) {
  Button.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  return (
    <button
      disabled={disabled}
      style={{ ...style }}
      className={cx(styles.button, { [styles.error]: error })}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt="button icon" /> : null}
      {text ? text : null}
    </button>
  );
}
