import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiMessageCircle,
  FiSmile,
} from 'react-icons/fi';

import Heading from './Heading';
import * as styles from './Sections.module.css';

function Sections(props) {
  const { photo1, photo2, photo3 } = props;

  return (
    <div id="sections">
      <article>
        <Heading sub="de 6 à 9 ans">Section enfants</Heading>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <FiSmile className={styles.icon} /> Initiation ludique au
              Taekwon‑Do
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Deux entraînements de
              45&nbsp;min par&nbsp;semaine parmi trois&nbsp;créneaux
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
              français/anglais
            </li>
          </ul>
          <div className={styles.imgWrap}>
            <GatsbyImage
              className={styles.img}
              image={photo1.childImageSharp.gatsbyImageData}
              alt=""
            />
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
              de&nbsp;fitness
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Quatre entraînements
              par&nbsp;semaine dont un réservé aux&nbsp;ados
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
              français/anglais
            </li>
          </ul>
          <div className={styles.imgWrap}>
            <GatsbyImage
              className={styles.img}
              image={photo3.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </div>
      </article>
      <article>
        <Heading minor sub="à partir de 16 ans">
          Fight Fitness
        </Heading>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>
              <FiSmile className={styles.icon} /> Pour se remettre en forme ou
              repousser ses&nbsp;limites
            </li>
            <li>
              <FiCalendar className={styles.icon} /> Une séance
              par&nbsp;semaine, en&nbsp;matinée
            </li>
            <li>
              <FiCheckCircle className={styles.icon} /> Utilisation des
              techniques du Taekwon-Do, avec focus sur&nbsp;le&nbsp;cardio
            </li>
            <li>
              <FiCreditCard className={styles.icon} /> Cotisation annuelle de
              150 € ; uniforme inclus mais&nbsp;optionnel
            </li>
            <li>
              <FiMessageCircle className={styles.icon} /> Cours bilingues
              français/anglais
            </li>
          </ul>
          <div className={styles.imgWrap}>
            <GatsbyImage
              className={styles.img}
              image={photo2.childImageSharp.gatsbyImageData}
              alt=""
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Sections;
