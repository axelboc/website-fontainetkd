import React from 'react';

import Logo from '../assets/fontaine-taekwondo.svg';
import styles from './Banner.module.css';

function Banner() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} width="150" height="150" />
      <div className={styles.inner}>
        <h1 className={styles.title}>Fontaine Taekwon‑Do</h1>
        <div className={styles.intro}>
          <p>
            Venez découvrir le Taekwon‑Do, un <strong>art martial</strong>{' '}
            coréen moderne conçu pour l’auto-défense&nbsp;!
          </p>
          <p>
            Notre association sportive est basée à Fontaine, près de{' '}
            <strong>Grenoble</strong>, et vous accueille tout au long de
            l’année.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Banner;
