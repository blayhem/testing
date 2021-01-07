import PropTypes from 'prop-types';

import URLInput from 'components/input';
import Breadcrumbs from 'components/breadcrumbs';
import Button from 'components/button';
import Counter from 'components/cats-counter';

import styles from './main.module.scss';
import buttonStyles from '../button/button.module.scss';

export const getText = (stage, error) => {
  let title, subtitle;
  if (stage <= 1) {
    title = 'Add a link to continue';
    subtitle = `Please include a link to an image that you really like, and we will do some magic with it.`;
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
  return { title, subtitle };
};

export default function Main({
  stage,
  error,
  cats,
  url,
  setStage,
  setError,
  postData,
}) {
  Main.propTypes = {
    stage: PropTypes.number,
    error: PropTypes.bool,
    cats: PropTypes.number,
    url: PropTypes.string,
    setStage: PropTypes.func,
    setError: PropTypes.func,
    postData: PropTypes.func,
  };

  const { title, subtitle } = getText(stage, error);
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <p className={styles.mainSubtitle}>{subtitle}</p>
      <Breadcrumbs stage={stage} error={error} />
      {stage <= 1 && <URLInput setStage={setStage} postData={postData} />}
      {stage === 2 && error && (
        <Button
          className={buttonStyles.tryAgain}
          text="try again"
          onClick={() => {
            setError(false);
            setTimeout(() => postData(url), 1000);
          }}
        />
      )}
      {stage === 3 && cats && <Counter number={cats} />}

      {stage <= 1 && (
        <div className={styles.disclaimer}>
          <p>
            This application is just the visual interface of a project I made
            while learning the fundamentals of JS testing.
          </p>
          <p>
            If you want to take a look at the tests I implemented on React
            components, Redux actions, etc. using Jest and Cypress, you can find{' '}
            <a href="https://github.com/blayhem/testing">the code here</a>.
          </p>
          <p></p>
        </div>
      )}
    </main>
  );
}
