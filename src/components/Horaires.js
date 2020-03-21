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
    <section id="horaires" className={styles.root}>
      <div className={styles.inner}>
        <Heading>Horaires</Heading>
        <div className={styles.content}>
          <div className={styles.map}>
            <img
              className={styles.mapImg}
              srcSet={`${MAP_URL} 1x, ${MAP_URL}&scale=2 2x`}
              width={MAP_DIMENSIONS[0]}
              height={MAP_DIMENSIONS[1]}
            />
          </div>
          <div className={styles.times}>
            <article className={styles.entry}>
              <h3>Mardi - Gymnase Robert Vial</h3>
              <ul>
                <li>18h - 19h : Section enfants</li>
                <li>19h15 - 21h : Section ados &amp; adultes</li>
              </ul>
            </article>
            <article className={styles.entry}>
              <h3>Mercredi - Parc Karl Marx</h3>
              <ul>
                <li>19h30 - 21h : Section ados &amps; adults</li>
                <li>21h - 22h : Entraînement libre</li>
              </ul>
            </article>
            <article className={styles.entry}>
              <h3>Vendredi - Parc Karl Marx</h3>
              <ul>
                <li>20h30 - 22h : Section ados &amps; adults</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horaires;
