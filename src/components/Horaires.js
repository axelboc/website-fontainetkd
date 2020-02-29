import React from 'react';

import styles from './Horaires.module.css';
import Heading from './Heading';

function Horaires() {
  return (
    <section id="horaires">
      <Heading>Horaires</Heading>
      <h3>Mardi - Gymnase Robert Vial</h3>
      <ul>
        <li>18h - 19h : Section enfants</li>
        <li>19h15 - 21h : Section ados &amp; adultes</li>
      </ul>
      <h3>Mercredi - Parc Karl Marx</h3>
      <ul>
        <li>19h30 - 21h : Section ados &amps; adults</li>
        <li>21h - 22h : Entraînement libre</li>
      </ul>
      <h3>Vendredi - Parc Karl Marx</h3>
      <ul>
        <li>20h30 - 22h : Section ados &amps; adults</li>
      </ul>
    </section>
  );
}

export default Horaires;
