import {
  FiAward,
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiGift,
  FiHeart,
  FiStar,
  FiTrendingDown,
  FiVolume2,
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
              <span className={styles.age}>maternelle</span>{' '}
              <span className={styles.price}>
                80 € <span>/ an</span>
              </span>
            </p>
            <p>
              <span className={styles.age}>primaire</span>{' '}
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
              <FiStar className={styles.icon} /> Trois séances d’essai gratuites
            </li>
            <li className={styles.highlight}>
              <FiStar className={styles.icon} /> Gratuité pour les réfugiés
            </li>
            <li>
              <FiCheckCircle className={styles.icon} /> Uniforme inclus
              (sections enfants/ados/adultes)
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Inscriptions ouvertes toute
              l’année (sous réserve de place)
            </li>
            <li>
              <FiTrendingDown className={styles.icon} /> Cotisation dégressive à
              partir de décembre
            </li>
            <li>
              <FiHeart className={styles.icon} /> Aide de 20 à 35 € aux
              Fontainois·es éligibles
            </li>
            <li>
              <FiCreditCard className={styles.icon} /> Carte Tatoo, PASS’Région
              et Pass'Sport acceptés
            </li>
            <li>
              <FiAward className={styles.icon} /> Instructrice ceinture noire 4
              <sup>ème</sup> dan
            </li>
            <li>
              <FiGift className={styles.icon} /> Enseignant·e·s 100% bénévoles
            </li>
            <li>
              <FiVolume2 className={styles.icon} /> Cours bilingues
              français/anglais
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cotisation;
