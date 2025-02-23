import { bar, message } from './NewsBar.module.css';

function NewsBar() {
  return (
    <div className={bar}>
      <p className={message}>
        Les créneaux enfant 6‑9 ans sont complets, mais les autres créneaux
        restent ouverts (4‑5 ans, ados et adultes).
      </p>
    </div>
  );
}

export default NewsBar;
