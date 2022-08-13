import {
  FiCalendar,
  FiCreditCard,
  FiGift,
  FiHeart,
  FiScissors,
  FiStar,
} from 'react-icons/fi';

import * as styles from './Cotisation.module.css';
import Heading from './Heading';

function Cotisation() {
  return (
    <section className={styles.root}>
      <div id="cotisation" className={styles.inner}>
        <Heading>Cotisation</Heading>
        <div className={styles.content}>
          <div className={styles.fees}>
            <p>
              <span className={styles.age}>écoli·er·ère du primaire</span>{' '}
              <span className={styles.price}>
                120 € <span>/ an</span>
              </span>
            </p>
            <p>
              <span className={styles.age}>ado / adulte</span>{' '}
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
              <FiCalendar className={styles.icon} /> Inscriptions ouvertes toute
              l’année
            </li>
            <li>
              <FiHeart className={styles.icon} /> Aide de 20 à 35 € aux
              Fontainois·es éligibles
            </li>
            <li>
              <FiCreditCard className={styles.icon} /> Carte Tatoo, Pass’Région
              et Pass'Sport acceptés
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

export default Cotisation;
