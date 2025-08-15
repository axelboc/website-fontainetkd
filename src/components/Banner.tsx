import Logo from '../assets/fontaine-taekwondo.svg';
import styles from './Banner.module.css';

function Banner() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo className={styles.logo} width="150" height="150" />
        <div className={styles.content}>
          <h1 className={styles.title}>Fontaine Taekwon‑Do</h1>
          <div className={styles.intro}>
            <p>
              Venez découvrir le Taekwon‑Do ITF, un <strong>art martial</strong>{' '}
              coréen moderne alliant combat sportif, self-défense et pratique
              traditionnelle&nbsp;!
            </p>
            <p>
              Notre association sportive est basée à Fontaine, près de{' '}
              <strong>Grenoble</strong>, et vous accueille tout au long de
              l’année.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
