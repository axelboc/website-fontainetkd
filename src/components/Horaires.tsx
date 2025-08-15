import { Fragment } from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { LOCATIONS, SEASON_SLASH, TIMES } from '../data';
import Heading from './Heading';
import * as styles from './Horaires.module.css';

function Horaires() {
  return (
    <section className={styles.root}>
      <div id="horaires" className={styles.inner}>
        <Heading>Créneaux {SEASON_SLASH}</Heading>
        <div className={styles.content}>
          {Object.entries(TIMES).map(([day, times]) => (
            <Fragment key={day}>
              <h3 className={styles.day}>{day}</h3>
              {times.map(({ from, to, groups, location, variant }) => (
                <a
                  key={`${from}-${to}`}
                  className={styles.entry}
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
                  <div className={styles.groups}>
                    {groups.map(({ sections, frequency }) => (
                      <Fragment key={frequency}>
                        {frequency && (
                          <span className={styles.frequency}>{frequency}</span>
                        )}
                        <span className={styles.sections}>
                          {sections.map((section, sectionIndex) => (
                            <span key={section} className={styles.section}>
                              {sectionIndex > 0 && '+ '}
                              {section}
                            </span>
                          ))}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                  <span className={styles.location}>
                    {LOCATIONS[location].name}
                    <FiExternalLink className={styles.externalIcon} />
                  </span>
                </a>
              ))}
            </Fragment>
          ))}
          <p className={styles.asterisk}>
            * confirmé&nbsp;: 4&nbsp;mois d'ancienneté&nbsp;+ comportement
            adapté (respect,&nbsp;attention,&nbsp;etc.)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Horaires;
