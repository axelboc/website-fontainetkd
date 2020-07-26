import React from 'react';
import {
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiMessageCircle,
  FiSmile,
} from 'react-icons/fi';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import Heading from './Heading';
import styles from './Sections.module.css';

function Sections() {
  return (
    <div id="sections">
      <article>
        <Heading sub="de 6 à 9 ans">Section enfants</Heading>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <FiSmile className={styles.icon} /> Initiation ludique au
              Taekwon‑Do.
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Le mardi de 18h à 19h au
              gymnase Robert&nbsp;Vial.
            </li>
            <li>
              <FiCheckCircle className={styles.icon} /> Développe la
              coordination, l’attention, la confiance en&nbsp;soi,&nbsp;etc.
            </li>
            <li>
              <FiCreditCard className={styles.icon} /> Cotisation annuelle
              unique de 100&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>
              <FiMessageCircle className={styles.icon} /> Cours bilingues
              français/anglais.
            </li>
          </ul>
          <div className={styles.imgWrap}>
            <img className={styles.img} src={photo1} width="800" height="300" />
          </div>
        </div>
      </article>
      <article>
        <Heading minor sub="à partir de 10 ans">
          Section ados &amp; adultes
        </Heading>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <FiSmile className={styles.icon} /> Tous niveaux d’expérience et
              de&nbsp;fitness.
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Trois séances
              d’entrainement par&nbsp;semaine.
            </li>
            <li>
              <FiCheckCircle className={styles.icon} /> Pratique complète :
              self-défense, combat, formes, casse,&nbsp;etc.
            </li>
            <li>
              <FiCreditCard className={styles.icon} /> Cotisation annuelle
              unique de 100 à 150&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>
              <FiMessageCircle className={styles.icon} /> Cours bilingues
              français/anglais.
            </li>
          </ul>
          <div className={styles.imgWrap}>
            <img className={styles.img} src={photo2} width="800" height="300" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Sections;
