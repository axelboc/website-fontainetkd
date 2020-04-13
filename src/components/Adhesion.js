import React from 'react';
import {
  FiCalendar,
  FiCreditCard,
  FiGift,
  FiHeart,
  FiScissors,
  FiStar,
} from 'react-icons/fi';

import styles from './Adhesion.module.css';
import Heading from './Heading';

function Adhesion() {
  return (
    <section id="adhesion" className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.headingWrapper}>
          <Heading>Adhésion</Heading>
        </div>
        <div className={styles.content}>
          <div className={styles.fees}>
            <p>
              <span className={styles.age}>de 6 à 15 ans</span>{' '}
              <span className={styles.price}>
                100 € <span>/ an</span>
              </span>
            </p>
            <p>
              <span className={styles.age}>à partir de 16 ans</span>{' '}
              <span className={styles.price}>
                150 € <span>/ an</span>
              </span>
            </p>
          </div>
          <ul className={styles.list}>
            <li className={styles.highlight}>
              <FiStar className={styles.icon} /> Uniforme inclus !
            </li>
            <li className={styles.highlight}>
              <FiStar className={styles.icon} /> Trois séances d’essai gratuites
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Inscriptions ouvertes tout
              l’année
            </li>
            <li>
              <FiHeart className={styles.icon} /> Aide de 25 à 35 € aux
              Fontainois éligibles
            </li>
            <li>
              <FiCreditCard className={styles.icon} /> Pass’sports Isère
              acceptés
            </li>
            <li>
              <FiScissors className={styles.icon} /> Paiement en deux ou trois
              fois possible
            </li>
            <li>
              <FiGift className={styles.icon} /> Instructrice bénévole formée
              aux premiers secours
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Adhesion;
