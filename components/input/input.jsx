import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from 'components/button';
import styles from './input.module.scss';

function Input({ setStage, postData }) {
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
        // adjust timeouts to desired screen time for each stage
        setTimeout(() => postData(url), 1500);
        setTimeout(() => setStage(2), 2000);
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
        {/* this component is not using a form because it needs complex
        interaction and states on the button & other elements, otherwise
        it would use a form for just posting the introduced URL */}
        <input
          id="text-input"
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
          value={isURLValid ? '' : url}
        />
        <label
          className={cx(styles.inputLabel, {
            [styles.valid]: isURLValid,
            [styles.error]: isURLValid === false,
          })}
          htmlFor="text-input"
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
  postData: PropTypes.func,
};

Input.defaultProps = {
  setStage: () => {},
  postData: () => {},
};

export default Input;
