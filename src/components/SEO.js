import React from 'react';
import { Helmet } from 'react-helmet';

import logo from '../assets/fontaine-taekwondo-logo.png';

const TITLE = 'Fontaine Taekwon-Do';
const SUBTITLE = 'Club de Taekwon-Do ITF près de Grenoble';
const DESCRIPTION =
  'Rejoignez-nous toute l’année à Fontaine, près de Grenoble, pour découvrir le ' +
  'Taekwon‑Do ITF, un art martial coréen moderne conçu pour l’auto-défense.';

function SEO() {
  return (
    <Helmet>
      <html lang="fr" />
      <title>
        {TITLE} - {SUBTITLE}
      </title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={TITLE}></meta>
      <meta property="og:title" content={SUBTITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={logo} />
      <meta property="og:image:width" content="856" />
      <meta property="og:image:height" content="856" />
      <meta property="og:url" content="https://fontainetkd.com" />
      <meta property="og:locale" content="fr_FR" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default SEO;
