import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'components/button';
import styles from './input.module.scss';

function Input({ setStage }) {
  const [url, setURL] = useState('');
  const [isURLValid, setValid] = useState(null);
  const [labelText, setLabel] = useState('Add the url');

  const validateURL = (str) =>
    str.match(/(http[s]?:\/\/.*\.(?:jpeg|jpg|gif|png))/i) !== null;
  const sendURL = () => {
    if (url) {
      const valid = validateURL(url);
      if (valid) {
        setValid(true);
        setLabel('Thanks, we will do the magic!');
        setURL('');
        setStage(1);
        // sendData();
        // setTimeout(() => setStage(2), 2500);
      } else {
        setValid(false);
        setLabel('Sorry, but this is not a link what we want.');
      }
    }
  };

  const getButtonProps = () => {
    if (isURLValid === false) {
      return {
        error: true,
        icon: '/icons/error.svg',
      };
    } else if (isURLValid) {
      return {
        icon: '/icons/check-white.svg',
        style: { backgroundColor: '#27AE60', borderColor: '#27AE60' },
      };
    } else if (!url) {
      return {
        text: 'send us',
        style: {
          background: '#FFFFFF',
          borderColor: '#E0E0E0',
          color: '#E0E0E0',
        },
      };
    } else {
      return {
        text: 'send us',
        onClick: () => sendURL(),
      };
    }
  };

  return (
    <div className={cx(styles.URLInput, { [styles.valid]: isURLValid })}>
      <div className={styles.inputLabel}>
        <input
          className={styles.textInput}
          type="text"
          required
          disabled={isURLValid}
          onChange={(e) => {
            setURL(e.target.value);
            setValid(null);
            setLabel(url ? 'The link' : 'Add the url');
          }}
          onFocus={() => isURLValid === null && setLabel('The link')}
          onBlur={() => !url && setLabel('Add the url')}
          value={isURLValid ? '' : null}
        />
        <label
          className={cx(styles.inputLabel, {
            [styles.valid]: isURLValid,
            [styles.error]: isURLValid === false,
          })}
        >
          {labelText}
        </label>
      </div>
      <Button {...getButtonProps()} />
    </div>
  );
}

Input.propTypes = {
  setStage: PropTypes.func,
};

export default Input;
