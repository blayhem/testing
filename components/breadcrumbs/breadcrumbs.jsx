import PropTypes from 'prop-types';
import styles from './breadcrumbs.module.scss';

export default function Breadcrumbs({ stage, error }) {
  Breadcrumbs.propTypes = {
    stage: PropTypes.number,
    error: PropTypes.bool
  };

  const stages = ['send', 'magic', 'result'];
  return (
    <div className={styles.breadcrumbs}>
      {stages.map((s, i) => {
        const active = stage > i;
        return (
          <div key={s} className={styles.wrapper}>
            <div className={styles.item}>
              <img
                src={active ? '/icons/check-ok.svg' : '/icons/check-empty.svg'}
              />
              <span
                style={{ color: active ? '#27AE60' : '#E0E0E0' }}
              >{s}</span>
            </div>
            {i < stages.length - 1 && (
              <div
                className={styles.line}
                style={{ backgroundColor: active ? '#27AE60' : '#E0E0E0' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
