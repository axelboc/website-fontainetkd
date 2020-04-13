import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

import Falcon from '../assets/falcon.svg';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.sticky}>
      <nav className={styles.nav}>
        <AnchorLink className={styles.falconLink} to="/#top">
          <span className={styles.item}>
            <Falcon width="40" height="40" />
          </span>
        </AnchorLink>
        <AnchorLink className={styles.link} to="/#sections">
          <span className={styles.item}>Sections</span>
        </AnchorLink>
        <AnchorLink className={styles.link} to="/#horaires">
          <span className={styles.item}>Horaires</span>
        </AnchorLink>
        <AnchorLink className={styles.link} to="/#adhesion">
          <span className={styles.item}>Adhésion</span>
        </AnchorLink>
        <a className={styles.link} href="">
          <span className={styles.item}>Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
