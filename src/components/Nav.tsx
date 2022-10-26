import { useEffect } from 'react';
import type SmoothScroll from 'smooth-scroll';

import Falcon from '../assets/falcon.svg';
import { sticky, nav, topLink, item, link } from './Nav.module.css';

function Nav() {
  useEffect(() => {
    let scroll: SmoothScroll;

    // `smooth-scroll` doesn't support SSR
    // eslint-disable-next-line promise/prefer-await-to-then
    import(/* webpackChunkName: "smootScroll" */ 'smooth-scroll').then(
      ({ default: SmoothScroll }) => {
        scroll = new SmoothScroll('[href*="#"]', {
          offset: 48,
          updateURL: false,
        });
      }
    );

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className={sticky}>
      <nav className={nav}>
        <a className={topLink} href="#top">
          <span className={item}>
            <Falcon width="40" height="40" />
          </span>
        </a>
        <a className={link} href="#sections">
          <span className={item}>Sections</span>
        </a>
        <a className={link} href="#horaires">
          <span className={item}>Horaires</span>
        </a>
        <a className={link} href="#cotisation">
          <span className={item}>Cotisation</span>
        </a>
        <a className={link} href="#inscription">
          <span className={item}>Inscription</span>
        </a>
      </nav>
    </div>
  );
}

export default Nav;
