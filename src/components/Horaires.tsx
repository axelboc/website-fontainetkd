import { CSSProperties, Fragment } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { LOCATIONS, MIDDAY_POSITION, ROWS_COUNT, SEASON, TIMES } from '../data';
import Heading from './Heading';
import * as styles from './Horaires.module.css';

function Horaires() {
  const gridTemplateColumns = Object.values(TIMES)
    .map((times) => (times.length > 0 ? '10fr' : '7fr'))
    .join(' ');

  return (
    <section
      className={styles.root}
      style={{ '--rows': ROWS_COUNT } as CSSProperties}
    >
      <div id="horaires" className={styles.inner}>
        <Heading>Créneaux {SEASON.replace('-', ' / ')}</Heading>
        <div className={styles.content}>
          <div className={styles.contentInner} style={{ gridTemplateColumns }}>
            {Object.entries(TIMES).map(([day, times], colIndex) => (
              <Fragment key={day}>
                <h3
                  className={styles.day}
                  style={{ gridColumn: colIndex + 1, gridRow: 1 }}
                  data-empty={times.length === 0}
                >
                  {day === 'Samedi' ? (
                    <>
                      1<sup>er</sup> samedi{' '}
                      <span className={styles.ofMonth}>du mois</span>
                    </>
                  ) : (
                    day
                  )}
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
                    <a
                      key={`${from}-${to}`}
                      className={styles.entry}
                      style={{
                        gridColumn: colIndex + 1,
                        gridRow: `${start + 1} / span ${duration * 4}`,
                      }}
                      href={LOCATIONS[location].gmapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-variant={variant}
                    >
                      <span className={styles.time}>
                        {from}
                        <span>–</span>
                        {to}
                      </span>
                      <span className={styles.section}>{section}</span>
                      <span className={styles.location}>
                        {LOCATIONS[location].name}
                        <FiExternalLink className={styles.externalIcon} />
                      </span>
                    </a>
                  )
                )}
              </Fragment>
            ))}
            {MIDDAY_POSITION > -1 && (
              <span
                className={styles.midday}
                style={{ gridRow: MIDDAY_POSITION + 1 }}
              />
            )}
          </div>

          {/* <div className={styles.announcement}>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Horaires;
