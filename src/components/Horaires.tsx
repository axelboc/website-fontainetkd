import { Fragment } from 'react';
import { FiExternalLink, FiSun } from 'react-icons/fi';

import { LOCATIONS, MIDDAY_POSITION, TIMES } from '../data';
import Heading from './Heading';
import * as styles from './Horaires.module.css';

function Horaires() {
  return (
    <section className={styles.root}>
      <div id="horaires" className={styles.inner}>
        <Heading>Créneaux 2021 / 2022</Heading>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            {Object.entries(TIMES).map(([day, times], colIndex) => (
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
                    style={{ gridColumn: colIndex + 1 }}
                  />
                )}
                {times.map(
                  ({
                    from,
                    to,
                    duration,
                    start,
                    section,
                    location,
                    variant,
                  }) => (
                    <div
                      key={`${from}-${to}`}
                      className={styles.entry}
                      style={{
                        gridColumn: colIndex + 1,
                        gridRow: `${start + 1} / span ${duration * 4}`,
                      }}
                      data-variant={variant}
                    >
                      <span className={styles.time}>
                        {from}
                        <span>–</span>
                        {to}
                      </span>
                      <span className={styles.section}>{section}</span>
                      <a
                        className={styles.locationLink}
                        href={LOCATIONS[location].gmapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {LOCATIONS[location].name}
                        <FiExternalLink className={styles.externalIcon} />
                      </a>
                    </div>
                  )
                )}
              </Fragment>
            ))}
            <span
              className={styles.midday}
              style={{ gridRow: MIDDAY_POSITION + 1 }}
            />
          </div>

          <div className={styles.announcement}>
            <FiSun className={styles.announcementIcon} />
            <p>
              En juillet/août, nous organisons des scéances de Fight Fitness
              pour adultes les mardis matins, au parc Pompidou à&nbsp;Grenoble.
              Ces scéances sont gratuites et ouvertes à tous, sans adhésion,
              donc venez en profiter ! Le calendrier exact dépend des
              disponibilités notre instructrice. Mieux vaut donc l’informer de
              votre venue{' '}
              <a href="https://www.facebook.com/FontaineTKD/">via Facebook</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horaires;
