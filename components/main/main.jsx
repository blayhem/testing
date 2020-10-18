import styles from './main.module.scss';
import URLinput from 'components/input';

export const getText = (stage, error) => {
  let title, subtitle;
  if (stage === 1) {
    title = 'Add a link to follow';
    subtitle = `As Google likes the links we also like links. Please include a link you really like and lets us make magic.`;
  } else if (stage === 2) {
    if (error) {
      title = 'Sorry, shit happens';
      subtitle = `Gandalf is getting old. His magic tricks aren't good enough. Please, try again with Harry Potter.`;
    } else {
      title = 'Gandalf is working';
      subtitle = `This will take some time. Do you know Coldplay, Bruce Sprinsteen or The cars have a song called magic?`;
    }
  } else if (stage === 3) {
    title = 'Great news!';
    subtitle = `Gandalf did the right work. Plieas, use this report with reponsability, the power is on the details.`;
  }
  return {title, subtitle};
};

export default function Main({ stage, error, setStage }) {
  const {title, subtitle} = getText(stage, error);
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <p className={styles.mainSubtitle}>{subtitle}</p>
      <div>send-magic-result</div>
      <URLinput />
    </main>
  );
}
