import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiMessageCircle,
  FiSmile,
  FiStar,
} from 'react-icons/fi';

import Heading from './Heading';
import {
  root,
  content,
  list,
  icon,
  imgWrap,
  img,
  section,
} from './Sections.module.css';

export interface SectionPhotos {
  photoKids: IGatsbyImageData;
  photoAdults: IGatsbyImageData;
  photoTeens: IGatsbyImageData;
}

function Sections(props: SectionPhotos) {
  const { photoKids, photoTeens, photoAdults } = props;

  return (
    <div id="sections" className={root}>
      <article className={section}>
        <Heading sub="de 6 à 9 ans">Section enfant</Heading>
        <div className={content}>
          <ul className={list}>
            <li>
              <FiSmile className={icon} /> Initiation ludique au Taekwon‑Do
            </li>
            <li>
              <FiCheckCircle className={icon} /> Développe la coordination,
              l’attention, la confiance en&nbsp;soi&hellip;
            </li>
            <li>
              <FiCalendar className={icon} /> Deux séances de 45&nbsp;min à 1h
              par&nbsp;semaine
            </li>
            <li>
              <FiCreditCard className={icon} /> Cotisation annuelle unique de
              120&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
          </ul>
          <div className={imgWrap}>
            <GatsbyImage className={img} image={photoKids} alt="" />
          </div>
        </div>
      </article>
      <article className={section}>
        <Heading sub="de 9 à 15 ans">Section ado</Heading>
        <div className={content}>
          <ul className={list}>
            <li>
              <FiCheckCircle className={icon} /> Pratique complète : combat,
              formes, self-défense, casse&hellip;
            </li>
            <li>
              <FiCalendar className={icon} /> Deux séances par semaine dont une
              avec les adultes
            </li>
            <li>
              <FiStar className={icon} /> Une séance supplémentaire chaque 1
              <sup>er</sup> samedi du mois
            </li>
            <li>
              <FiCreditCard className={icon} /> Cotisation annuelle unique de
              150&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
          </ul>
          <div className={imgWrap}>
            <GatsbyImage className={img} image={photoTeens} alt="" />
          </div>
        </div>
      </article>
      <article className={section}>
        <Heading sub="à partir de 16 ans">Section adulte</Heading>
        <div className={content}>
          <ul className={list}>
            <li>
              <FiSmile className={icon} /> Tous niveaux d’expérience et
              de&nbsp;fitness
            </li>
            <li>
              <FiCheckCircle className={icon} /> Pratique complète : combat,
              formes, self-défense, casse&hellip;
            </li>
            <li>
              <FiCalendar className={icon} /> Deux à trois séances par semaine
            </li>
            <li>
              <FiCreditCard className={icon} /> Cotisation annuelle unique de
              150&nbsp;€, uniforme&nbsp;inclus&nbsp;!
            </li>
            <li>
              <FiMessageCircle className={icon} /> Cours bilingues
              français/anglais
            </li>
          </ul>
          <div className={imgWrap}>
            <GatsbyImage className={img} image={photoAdults} alt="" />
          </div>
        </div>
      </article>
      {/* <article className={section}>
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
      </article> */}
    </div>
  );
}

export default Sections;
