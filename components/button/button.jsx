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
  className
}) {
  Button.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    text: PropTypes.string,
    icon: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string
  };

  return (
    <button
      disabled={disabled}
      style={{ ...style }}
      className={cx(styles.button, { [styles.error]: error }, className)}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt="button icon" /> : null}
      {text ? text : null}
    </button>
  );
}
