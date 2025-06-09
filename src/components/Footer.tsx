import { FiShare2 } from 'react-icons/fi';

import {
  root,
  socialMedia,
  icon,
  federations,
  iftLink,
  itfLogo,
  localFeds,
} from './Footer.module.css';
import itfLogoSrc from '../assets/itf-logo.png';

function Footer() {
  return (
    <footer className={root}>
      <p className={socialMedia}>
        <FiShare2 className={icon} />
        Pour rester informé·e, retrouvez-nous sur{' '}
        <a href="https://www.facebook.com/FontaineTKD/">Facebook</a>
        &nbsp;et&nbsp;
        <a href="https://www.instagram.com/fontainetkd/">Instagram</a>
      </p>
      <div className={federations}>
        <a
          className={iftLink}
          href="https://itftkd.sport/"
          aria-label="ITF - International Taekwon-Do Federation"
        >
          <img
            className={itfLogo}
            src={itfLogoSrc}
            width={320}
            height={70}
            alt=""
          />
        </a>
        <p className={localFeds}>
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
