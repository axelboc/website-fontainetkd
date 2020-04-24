import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';

import Falcon from '../assets/falcon.svg';
import styles from './Nav.module.css';

function Nav() {
  useEffect(() => {
    const scroll = new SmoothScroll('[href*="#"]', {
      offset: 48,
      updateURL: false,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className={styles.sticky}>
      <nav className={styles.nav}>
        <a className={styles.topLink} href="#">
          <span className={styles.item}>
            <Falcon width="40" height="40" />
          </span>
        </a>
        <a className={styles.link} href="#sections">
          <span className={styles.item}>Sections</span>
        </a>
        <a className={styles.link} href="#horaires">
          <span className={styles.item}>Horaires</span>
        </a>
        <a className={styles.link} href="#adhesion">
          <span className={styles.item}>Adhésion</span>
        </a>
        <a className={styles.link} href="">
          <span className={styles.item}>Contact</span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
