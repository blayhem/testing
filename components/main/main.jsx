import styles from './main.module.scss';
import URLinput from 'components/input';

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Add a link to follow</h1>
      <p className={styles.mainSubtitle}>
        As Google likes the links we also like links. Please include a link you
        really like and lets us make magic.
      </p>
      <div>send-magic-result</div>
      <URLinput />
    </main>
  );
}
