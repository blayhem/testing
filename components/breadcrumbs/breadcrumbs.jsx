import PropTypes from 'prop-types';
import styles from './breadcrumbs.module.scss';

export default function Breadcrumbs({ stage, error }) {
  Breadcrumbs.propTypes = {
    stage: PropTypes.number,
    error: PropTypes.bool,
  };

  const stages = ['send', 'magic', 'result'];
  return (
    <div className={styles.breadcrumbs}>
      {stages.map((s, i) => {
        const active = stage > i;
        let icon, textColor, lineColor;
        if (error && i === 1) {
          icon = '/icons/check-error.svg';
          textColor = '#EB5757'
          lineColor = '#E0E0E0'
        } else if (active) {
          icon = '/icons/check-ok.svg';
          textColor = '#27AE60';
          lineColor = '#27AE60';
        } else {
          icon = '/icons/check-empty.svg';
          textColor = '#E0E0E0';
          lineColor = '#E0E0E0';
        }
        return (
          <div key={s} className={styles.wrapper}>
            <div className={styles.item}>
              <img src={icon} />
              <span style={{ color: textColor }}>{s}</span>
            </div>
            {i < stages.length - 1 && (
              <div
                className={styles.line}
                style={{ backgroundColor: lineColor }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
