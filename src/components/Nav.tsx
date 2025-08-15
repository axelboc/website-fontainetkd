import { useEffect } from 'react';
import type SmoothScroll from 'smooth-scroll';

import Falcon from '../assets/falcon.svg';
import * as styles from './Nav.module.css';

function Nav() {
  useEffect(() => {
    let scroll: SmoothScroll;

    // `smooth-scroll` doesn't support SSR
    // eslint-disable-next-line promise/prefer-await-to-then
    void import(/* webpackChunkName: "smootScroll" */ 'smooth-scroll').then(
      ({ default: SmoothScroll }) => {
        scroll = new SmoothScroll('[href*="#"]', {
          offset: 48,
          updateURL: false,
        });
      },
    );

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className={styles.sticky}>
      <nav className={styles.nav}>
        <a className={styles.topLink} href="#top">
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
        <a className={styles.link} href="#cotisation">
          <span className={styles.item}>Cotisation</span>
        </a>
        <a className={styles.link} href="#inscription">
          <span className={styles.item}>Inscription</span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
