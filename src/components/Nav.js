import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.sticky}>
      <nav className={styles.nav}>
        <AnchorLink to="/#sections">
          <span className={styles.item}>Sections</span>
        </AnchorLink>
        <AnchorLink to="/#horaires">
          <span className={styles.item}>Horaires</span>
        </AnchorLink>
        <AnchorLink to="/#adhesion">
          <span className={styles.item}>Adhésion</span>
        </AnchorLink>
        <AnchorLink to="/#faq">
          <span className={styles.item}>FAQ</span>
        </AnchorLink>
      </nav>
    </div>
  );
}

export default Nav;
