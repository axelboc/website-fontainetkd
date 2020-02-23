import React from 'react';

function Sections() {
  return (
    <div id="sections">
      <article>
        <header>
          <h2>Section enfants</h2>
          <p>de 6 à 9 ans</p>
        </header>
        <ul>
          <li>Initiation ludique au Taekwon-Do.</li>
          <li>Le mardi de 18h à 19h au gymnase Robert Vial.</li>
          <li>Développe la coordination, l’attention, le respect, etc.</li>
          <li>Cotisation annuelle unique de 100 €, uniforme inclus !</li>
        </ul>
      </article>
      <article>
        <header>
          <h2>Section ados &amp; adultes</h2>
          <p>à partir de 10 ans</p>
        </header>
        <ul>
          <li>Pratique complète : self-défense, combat, formes, casse, etc.</li>
          <li>Trois séances d’entrainement par semaine.</li>
          <li>Tous niveaux d’expérience et de fitness.</li>
          <li>Cours bilingues français/anglais.</li>
        </ul>
      </article>
    </div>
  );
}

export default Sections;
