import React from 'react';

import Heading from './Heading';
import styles from './Sections.module.css';

function Sections() {
  return (
    <div id="sections">
      <article>
        <Heading sub="de 6 à 9 ans">Section enfants</Heading>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li>Initiation ludique au Taekwon‑Do.</li>
            <li>Le mardi de 18h à 19h au gymnase Robert&nbsp;Vial.</li>
            <li>
              Développe la coordination, l’attention, la confiance
              en&nbsp;soi,&nbsp;etc.
            </li>
            <li>
              Cotisation annuelle unique de 100&nbsp;€,
              uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>Cours bilingues français/anglais.</li>
          </ul>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              src="https://picsum.photos/seed/1/800/300"
              width="800"
              height="300"
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
              Pratique complète : self-défense, combat, formes, casse,&nbsp;etc.
            </li>
            <li>Trois séances d’entrainement par&nbsp;semaine.</li>
            <li>Tous niveaux d’expérience et de&nbsp;fitness.</li>
            <li>
              Cotisation annuelle unique de 100 à 150&nbsp;€,
              uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>Cours bilingues français/anglais.</li>
          </ul>
          <div className={styles.imgWrap}>
            <img
              className={styles.img}
              src="https://picsum.photos/seed/2/800/300"
              width="800"
              height="300"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Sections;
