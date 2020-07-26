import React, { useEffect } from 'react';

import Falcon from '../assets/falcon.svg';
import styles from './Nav.module.css';

let scroll;

function Nav() {
  useEffect(() => {
    import('smooth-scroll').then(({ default: SmoothScroll }) => {
      scroll = new SmoothScroll('[href*="#"]', {
        offset: 48,
        updateURL: false,
      });
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
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
