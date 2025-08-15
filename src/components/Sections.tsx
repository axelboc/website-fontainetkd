import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import { FiCheckCircle, FiSmile } from 'react-icons/fi';

import Heading from './Heading';
import * as styles from './Sections.module.css';

export interface SectionPhotos {
  photoKids: IGatsbyImageData;
  photoEnfants: IGatsbyImageData;
  photoAdos: IGatsbyImageData;
  photoAdultes: IGatsbyImageData;
}

function Sections(props: SectionPhotos) {
  const { photoKids, photoEnfants, photoAdos, photoAdultes } = props;

  return (
    <div id="sections" className={styles.root}>
      <article className={styles.section}>
        <Heading sub="4-5 ans">Section kids</Heading>
        <ul className={styles.list}>
          <li>
            <FiSmile className={styles.icon} /> Éveil ludique en tenue de sport
          </li>
          <li>
            <FiCheckCircle className={styles.icon} /> Développe la
            socialisation, l'écoute, le respect&hellip;
          </li>
        </ul>
        <GatsbyImage image={photoKids} alt="" />
      </article>
      <article className={styles.section}>
        <Heading sub="6-9 ans">Section enfants</Heading>
        <ul className={styles.list}>
          <li>
            <FiSmile className={styles.icon} /> Initiation ludique au Taekwon‑Do
          </li>
          <li>
            <FiCheckCircle className={styles.icon} /> Développe l'écoute, le
            respect, la confiance en&nbsp;soi&hellip;
          </li>
        </ul>
        <GatsbyImage image={photoEnfants} alt="" />
      </article>
      <article className={styles.section}>
        <Heading sub="10-15 ans">Section ados</Heading>
        <ul className={styles.list}>
          <li>
            <FiCheckCircle className={styles.icon} /> Pratique complète :
            techniques, formes, combats, casse&hellip;
          </li>
          <li>
            <FiCheckCircle className={styles.icon} /> Développe le respect, la
            maîtrise de&nbsp;soi, la coordination&hellip;
          </li>
        </ul>
        <GatsbyImage image={photoAdos} alt="" />
      </article>
      <article className={styles.section}>
        <Heading sub="15 ans et +">Section adultes</Heading>
        <ul className={styles.list}>
          <li>
            <FiSmile className={styles.icon} /> Tous niveaux d’expérience et
            de&nbsp;fitness
          </li>
          <li>
            <FiCheckCircle className={styles.icon} /> Pratique complète :
            techniques, formes, combats, casse&hellip;
          </li>
        </ul>
        <GatsbyImage image={photoAdultes} alt="" objectFit="cover" />
      </article>
    </div>
  );
}

export default Sections;
