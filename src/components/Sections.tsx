import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiMessageCircle,
  FiSmile,
} from 'react-icons/fi';

import Heading from './Heading';
import { content, list, icon, imgWrap, img } from './Sections.module.css';

export interface SectionPhotos {
  photo1: IGatsbyImageData;
  photo2: IGatsbyImageData;
  photo3: IGatsbyImageData;
}

function Sections(props: SectionPhotos) {
  const { photo1, photo2, photo3 } = props;

  return (
    <div id="sections">
      <article>
        <Heading sub="de 6 à 9 ans">Section enfants</Heading>
        <div className={content}>
          <ul className={list}>
            <li>
              <FiSmile className={icon} /> Initiation ludique au Taekwon‑Do
            </li>
            <li>
              <FiCalendar className={icon} /> Deux entraînements de 45&nbsp;min
              par&nbsp;semaine parmi trois&nbsp;créneaux
            </li>
            <li>
              <FiCheckCircle className={icon} /> Développe la coordination,
              l’attention, la confiance en&nbsp;soi,&nbsp;etc.
            </li>
            <li>
              <FiCreditCard className={icon} /> Cotisation annuelle unique de
              100&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>
              <FiMessageCircle className={icon} /> Cours bilingues
              français/anglais
            </li>
          </ul>
          <div className={imgWrap}>
            <GatsbyImage className={img} image={photo1} alt="" />
          </div>
        </div>
      </article>
      <article>
        <Heading sub="à partir de 10 ans">Section ados &amp; adultes</Heading>
        <div className={content}>
          <ul className={list}>
            <li>
              <FiSmile className={icon} /> Tous niveaux d’expérience et
              de&nbsp;fitness
            </li>
            <li>
              <FiCalendar className={icon} /> Quatre entraînements
              par&nbsp;semaine dont un réservé aux&nbsp;ados
            </li>
            <li>
              <FiCheckCircle className={icon} /> Pratique complète :
              self-défense, combat, formes, casse,&nbsp;etc.
            </li>
            <li>
              <FiCreditCard className={icon} /> Cotisation annuelle unique de
              100 à 150&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>
              <FiMessageCircle className={icon} /> Cours bilingues
              français/anglais
            </li>
          </ul>
          <div className={imgWrap}>
            <GatsbyImage className={img} image={photo3} alt="" />
          </div>
        </div>
      </article>
      <article>
        <Heading sub="à partir de 16 ans">Fight Fitness</Heading>
        <div className={content}>
          <ul className={list}>
            <li>
              <FiSmile className={icon} /> Pour se remettre en forme ou
              repousser ses&nbsp;limites
            </li>
            <li>
              <FiCalendar className={icon} /> Une séance par&nbsp;semaine,
              en&nbsp;matinée
            </li>
            <li>
              <FiCheckCircle className={icon} /> Utilisation des techniques du
              Taekwon-Do, avec focus sur&nbsp;le&nbsp;cardio
            </li>
            <li>
              <FiCreditCard className={icon} /> Cotisation annuelle de 150 € ;
              uniforme inclus mais&nbsp;optionnel
            </li>
            <li>
              <FiMessageCircle className={icon} /> Cours bilingues
              français/anglais
            </li>
          </ul>
          <div className={imgWrap}>
            <GatsbyImage className={img} image={photo2} alt="" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Sections;
