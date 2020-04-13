import React from 'react';

import { buildMapUrl } from '../map-utils';
import Heading from './Heading';
import styles from './Horaires.module.css';

const ADDRESSES = [
  'Gymnase Robert Vial, Allée de Geve, 38600 Fontaine, France',
  'Parc Karl Marx, 38170 Seyssinet-Pariset, France',
];

const MAP_DIMENSIONS = [500, 500];
const MAP_URL = buildMapUrl(ADDRESSES, ...MAP_DIMENSIONS);

function Horaires() {
  return (
    <section className={styles.root}>
      <div id="horaires" className={styles.anchor} />
      <div className={styles.inner}>
        <div className={styles.headingWrapper}>
          <Heading>Horaires</Heading>
        </div>
        <div className={styles.content}>
          <div className={styles.map}>
            <img
              className={styles.mapImg}
              srcSet={`${MAP_URL} 1x, ${MAP_URL}&scale=2 2x`}
              width={MAP_DIMENSIONS[0]}
              height={MAP_DIMENSIONS[1]}
            />
          </div>
          <div className={styles.entries}>
            <article className={styles.entry}>
              <h3 className={styles.entryHeading}>
                <span className={styles.mapRef}>A</span>
                Mardi – Gymnase Robert Vial{' '}
              </h3>
              <ul className={styles.list}>
                <li>
                  <span className={styles.time}>
                    18:00<span>–</span>19:00
                  </span>{' '}
                  Section enfants
                </li>
                <li>
                  <span className={styles.time}>
                    19:15<span>–</span>21:00
                  </span>{' '}
                  Section ados/adultes
                </li>
              </ul>
            </article>
            <article className={styles.entry}>
              <h3 className={styles.entryHeading}>
                <span className={styles.mapRef}>B</span>
                Mercredi – Parc Karl Marx{' '}
              </h3>
              <ul className={styles.list}>
                <li>
                  <span className={styles.time}>
                    19:30<span>–</span>21:00
                  </span>{' '}
                  Section ados/adultes
                </li>
                <li>
                  <span className={styles.time}>
                    21:00<span>–</span>22:00
                  </span>{' '}
                  Entraînement libre
                </li>
              </ul>
            </article>
            <article className={styles.entry}>
              <h3 className={styles.entryHeading}>
                <span className={styles.mapRef}>B</span>
                Vendredi – Parc Karl Marx{' '}
              </h3>
              <ul className={styles.list}>
                <li>
                  <span className={styles.time}>
                    20:30<span>–</span>22:00
                  </span>{' '}
                  Section ados/adultes
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horaires;
