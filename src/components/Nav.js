import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

function Nav() {
  return (
    <nav className="inverted">
      <AnchorLink to="/#sections">Sections</AnchorLink>
      <AnchorLink to="/#horaires">Horaires</AnchorLink>
      <AnchorLink to="/#adhesion">Adhésion</AnchorLink>
      <AnchorLink to="/#faq">FAQ</AnchorLink>
    </nav>
  );
}

export default Nav;
