import { PREREGISTRATIONS } from '../data';
import * as styles from './PreregistrationStatus.module.css';

const listFormatter = new Intl.ListFormat('fr');

function PreregistrationStatus() {
  const { open, limited, closed } = PREREGISTRATIONS;

  if (limited.length === 0 && closed.length === 0) {
    return (
      <div className={styles.status}>
        <p data-status="open">
          <b>Toutes&nbsp;les&nbsp;sections</b> sont ouvertes.
        </p>
      </div>
    );
  }

  if (open.length === 0 && limited.length === 0) {
    return (
      <div className={styles.status}>
        <p data-status="closed">
          <b>Toutes&nbsp;les&nbsp;sections</b> sont à capacité.
        </p>
      </div>
    );
  }

  const openSections = listFormatter.format(open.map((s) => s.toLowerCase()));
  const limitedSections = listFormatter.format(
    limited.map((s) => s.toLowerCase()),
  );
  const closedSections = listFormatter.format(
    closed.map((s) => s.toLowerCase()),
  );

  return (
    <div className={styles.status}>
      {open.length > 0 &&
        (open.length === 1 ? (
          <p data-status="open">
            La section <b>{openSections}</b> est ouverte.
          </p>
        ) : (
          <p data-status="open">
            Les sections <b>{openSections}</b> sont ouvertes.
          </p>
        ))}
      {limited.length > 0 &&
        (limited.length === 1 ? (
          <p data-status="limited">
            La section <b>{limitedSections}</b> est presque à capacité.
          </p>
        ) : (
          <p data-status="limited">
            Les sections <b>{limitedSections}</b> sont presque à capacité.
          </p>
        ))}
      {closed.length > 0 &&
        (closed.length === 1 ? (
          <p data-status="closed">
            La section <b>{closedSections}</b> est à capacité.
          </p>
        ) : (
          <p data-status="closed">
            Les sections <b>{closedSections}</b> sont à capacité.
          </p>
        ))}
    </div>
  );
}

export default PreregistrationStatus;
