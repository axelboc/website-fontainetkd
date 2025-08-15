import { FiShare2 } from 'react-icons/fi';

import itfLogoSrc from '../assets/itf-logo.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.root}>
      <p className={styles.socialMedia}>
        <FiShare2 className={styles.icon} />
        Pour rester informé·e, retrouvez-nous sur{' '}
        <a href="https://www.facebook.com/FontaineTKD/">Facebook</a>
        &nbsp;et&nbsp;
        <a href="https://www.instagram.com/fontainetkd/">Instagram</a>
      </p>
      <div>
        <a
          className={styles.iftLink}
          href="https://itftkd.sport/"
          aria-label="ITF - International Taekwon-Do Federation"
        >
          <img
            className={styles.itfLogo}
            src={itfLogoSrc}
            width={320}
            height={70}
            alt=""
          />
        </a>
        <p className={styles.localFeds}>
          <a href="https://www.taekwondo-itf-france.fr/">ITF France</a> ·{' '}
          <a href="https://itfeurope.org/">
            <abbr title="All Europe Taekwon-Do Federation">ITF Europe</abbr>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
