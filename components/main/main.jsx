import PropTypes from 'prop-types';
import URLInput from 'components/input';
import Breadcrumbs from 'components/breadcrumbs';
import styles from './main.module.scss';

export const getText = (stage, error) => {
  let title, subtitle;
  if (stage <= 1) {
    title = 'Add a link to follow';
    subtitle = `As Google likes the links we also like links. Please include a link you really like and lets us make magic.`;
  } else if (stage === 2) {
    if (error) {
      title = 'Sorry, shit happens';
      subtitle = `Gandalf is getting old. His magic tricks aren't good enough. Please, try again with Harry Potter.`;
    } else {
      title = 'Gandalf is working';
      subtitle = `This will take some time. Do you know Coldplay, Bruce Springsteen or The cars have a song called magic?`;
    }
  } else if (stage === 3) {
    title = 'Great news!';
    subtitle = `Gandalf did the right work. Please, use this report with responsibility, the power is on the details.`;
  }
  return {title, subtitle};
};

export default function Main({ stage, error, setStage }) {
  Main.propTypes = {
    stage: PropTypes.number,
    error: PropTypes.bool,
    setStage: PropTypes.func,
  };

  const {title, subtitle} = getText(stage, error);
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <p className={styles.mainSubtitle}>{subtitle}</p>
      <Breadcrumbs stage={stage} error={error} />
      <URLInput setStage={setStage} />
    </main>
  );
}
