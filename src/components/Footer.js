import React from 'react';
import { FiShare2 } from 'react-icons/fi';

import * as styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.root}>
      <FiShare2 className={styles.icon} />
      Retrouvez-nous sur{' '}
      <a href="https://www.facebook.com/FontaineTKD/">Facebook</a> et{' '}
      <a href="https://www.instagram.com/fontainetkd/">Instagram</a>
    </footer>
  );
}

export default Footer;
