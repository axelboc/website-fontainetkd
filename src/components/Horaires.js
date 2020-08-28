import React from 'react';
import { FiExternalLink, FiInfo } from 'react-icons/fi';

import { buildMapUrl } from '../map-utils';
import Heading from './Heading';
import styles from './Horaires.module.css';

const SHOW_ANNOUNCEMENT = false;

const ADDRESSES = [
  'Gymnase Robert Vial, Allée de Geve, 38600 Fontaine, France',
  'Parc Karl Marx, 38170 Seyssinet-Pariset, France',
];

const MAP_DIMENSIONS = [500, 500];
const MAP_URL = buildMapUrl(ADDRESSES, ...MAP_DIMENSIONS);

function Horaires() {
  return (
    <section className={styles.root}>
      <div id="horaires" className={styles.anchor}>
        {SHOW_ANNOUNCEMENT && (
          <div className={styles.announcement}>
            <FiInfo className={styles.announcementIcon} />
            <p>
              Les horaires et lieux d’entraînement pour la saison 2020/2021 ne
              sont pas encore confirmés. Pour rester informé·e, abonnez‑vous à{' '}
              <a href="https://www.facebook.com/FontaineTKD/">
                notre page Facebook
              </a>
              .
            </p>
          </div>
        )}
      </div>
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
                Mardi –{' '}
                <a
                  className={styles.mapLink}
                  href="https://goo.gl/maps/SXapWD8XvWmMDSCNA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gymnase Robert Vial
                  <FiExternalLink className={styles.externalIcon} />
                </a>
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
                    19:30<span>–</span>21:00
                  </span>{' '}
                  Section ados/adultes
                </li>
              </ul>
            </article>
            <article className={styles.entry}>
              <h3 className={styles.entryHeading}>
                <span className={styles.mapRef}>B</span>
                Mercredi –{' '}
                <a
                  className={styles.mapLink}
                  href="https://g.page/FontaineTKD?share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parc Karl Marx
                  <FiExternalLink className={styles.externalIcon} />
                </a>
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
                Vendredi –{' '}
                <a
                  className={styles.mapLink}
                  href="https://g.page/FontaineTKD?share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parc Karl Marx
                  <FiExternalLink className={styles.externalIcon} />
                </a>
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
