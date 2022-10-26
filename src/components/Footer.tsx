import { FiShare2 } from 'react-icons/fi';

import { root, icon } from './Footer.module.css';

function Footer() {
  return (
    <footer className={root}>
      <p>
        <FiShare2 className={icon} />
        Pour rester informé·e, retrouvez-nous sur{' '}
        <a href="https://www.facebook.com/FontaineTKD/">Facebook</a>
        &nbsp;et&nbsp;
        <a href="https://www.instagram.com/fontainetkd/">Instagram</a>
      </p>
    </footer>
  );
}

export default Footer;
