import React, { Fragment } from 'react';
import { FiExternalLink, FiInfo } from 'react-icons/fi';

import { Times } from '../data';
import Heading from './Heading';
import styles from './Horaires.module.css';

function Horaires() {
  return (
    <section className={styles.root}>
      <div id="horaires" className={styles.inner}>
        <Heading>Horaires</Heading>
        <div className={styles.content}>
          {Object.entries(Times).map(([day, times], colIndex) => (
            <Fragment key={day}>
              <h3
                className={styles.day}
                style={{ gridColumn: colIndex + 1, gridRow: 1 }}
              >
                {day}
              </h3>
              {colIndex > 0 && (
                <span
                  className={styles.dayBorder}
                  style={{ gridColumn: colIndex + 1, gridRow: '1 / span 13' }}
                />
              )}
              {times.map(({ from, to, gridRow, section, location }) => (
                <div
                  key={`${from}-${to}`}
                  className={styles.entry}
                  style={{ gridColumn: colIndex + 1, gridRow }}
                >
                  <span className={styles.time}>
                    {from}
                    <span>–</span>
                    {to}
                  </span>
                  <span className={styles.section}>{section}</span>
                  <a
                    className={styles.locationLink}
                    href={location.gmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {location.name}
                    <FiExternalLink className={styles.externalIcon} />
                  </a>
                </div>
              ))}
            </Fragment>
          ))}
          <span className={styles.midday} />

          <div className={styles.announcement}>
            <FiInfo className={styles.announcementIcon} />
            <p>
              En raison de la situation sanitaire, les entraînements ados/adultes se
              déroulent actuellement en extérieur ou en visioconférence. Un
              système de réservation a été mis en place afin de respecter la
              limite de 10 personnes par créneau. Pour en savoir plus ou faire
              une scéance d’essai,{' '}
              <a
                href="https://fontainetkd.typeform.com/to/YlcrgiPQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                contactez-nous
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horaires;
