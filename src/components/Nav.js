import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <AnchorLink to="/#sections">
        <span className={styles.linkInner}>Sections</span>
      </AnchorLink>
      <AnchorLink to="/#horaires">
        <span className={styles.linkInner}>Horaires</span>
      </AnchorLink>
      <AnchorLink to="/#adhesion">
        <span className={styles.linkInner}>Adhésion</span>
      </AnchorLink>
      <AnchorLink to="/#faq">
        <span className={styles.linkInner}>FAQ</span>
      </AnchorLink>
    </nav>
  );
}

export default Nav;
