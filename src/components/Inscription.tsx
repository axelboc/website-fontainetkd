import { FiUserPlus } from 'react-icons/fi';

import { EMAIL, SEASON, SEASON_SLASH } from '../data';
import Heading from './Heading';
import * as styles from './Inscription.module.css';

function Inscription() {
  return (
    <section id="inscription" className={styles.root}>
      <Heading>Inscription {SEASON_SLASH}</Heading>
      <div className={styles.sections}>
        <section className={styles.section}>
          <h3>Première adhésion</h3>
          <p>
            <strong>Bienvenue et merci de votre intérêt&nbsp;!</strong>
          </p>
          <p>
            Les places étant limitées, nous avons mis en place un système de
            pré‑inscription sur <strong>liste d’attente</strong> qui nous permet
            de vous accueillir, vous ou vos enfants, de la manière la plus
            fiable et équitable possible.
          </p>
          <div className={styles.actionBlock}>
            <p>
              Les sections <strong>kids (4-5)</strong> et{' '}
              <strong>enfants (6-9)</strong> sont presque à capacité — l'attente
              est estimée à <strong>2 semaines</strong>.
            </p>
            <p>
              Il reste de la place dans les sections <strong>ados</strong> et{' '}
              <strong>adultes</strong>.
            </p>
            <a
              href="https://framaforms.org/pre-inscription-fontaine-taekwon-do-1754658606"
              target="_blank"
              rel="noreferrer"
              className={styles.preRegisterBtn}
            >
              <FiUserPlus className={styles.preRegisterIcon} /> Accéder au
              formulaire de pré‑inscription
            </a>
          </div>
          <p>
            Nous prendrons contact avec vous une fois votre pré‑inscription
            reçue pour vous confirmer (ou non) la <strong>disponibilité</strong>{' '}
            du ou des créneaux qui vous correspondent, et pour vous inviter à
            une <strong>séance d’essai</strong>.
          </p>
          <p>
            À l’issue de la séance d’essai, nous vous remettrons un dépliant
            avec toutes les infos à connaître pour <strong>adhérer</strong> au
            club. Vous pourrez alors adhérer directement en ligne, ou bien faire
            une à deux séances d’essai supplémentaires pour finir de vous
            décider.
          </p>
          <p>
            Une question ? <a href={`mailto:${EMAIL}`}>Contactez-nous&nbsp;!</a>
          </p>
        </section>
        <section className={styles.section}>
          <h3>Renouvellement</h3>
          <p>
            <strong>Contents de vous revoir&nbsp;!</strong>
          </p>
          <p>
            Toutes les infos et les liens pour réadhérer sont dans la{' '}
            <strong>newsletter</strong> du mois d’août. Si vous ne l’avez pas
            reçue, <a href={`mailto:${EMAIL}`}>contactez-nous</a> ou demandez le{' '}
            <strong>dépliant {SEASON_SLASH}</strong> au prochain entraînement.
          </p>
          <p>
            Pour les personnes concernées, pensez à nous envoyer le{' '}
            <a
              href={`aide_${SEASON}.pdf`}
              download={`Aide à l'adhésion ${SEASON} - Ville de Fontaine.pdf`}
              rel="nofollow"
            >
              formulaire d’aide à l’adhésion
            </a>{' '}
            de la ville de Fontaine accompagné des justificatifs.
          </p>
          <p>
            Attention, l’adhésion au club et les garanties d’assurance de la
            fédération <em>Sports pour tous</em> ne sont effectives qu’après
            réception complète de la cotisation, aides à l’adhésion comprises
            (formulaire d’aide à l’adhésion, carte Tatoo,&nbsp;etc.)
          </p>
          <h4>Modes de règlement</h4>
          <ul>
            <li>
              <strong>Virement bancaire</strong>&nbsp;
              <small>&ndash; recommandé</small>
              <small className={styles.extra}>
                Titulaire : FONTAINE TAEKWON-DO
                <br />
                IBAN : FR76 1390 6001 8778 8041 9100 034
                <br />
                BIC : AGRIFRPP839
              </small>
            </li>
            <li>
              <a
                href={`https://www.helloasso.com/associations/fontaine-taekwon-do/adhesions/cotisation-${SEASON}`}
              >
                Carte bancaire
              </a>
              &nbsp;
              <small>&ndash; en 1 ou 3 fois via HelloAsso</small>
            </li>
            <li>
              Chèques <small>&ndash; 1 à 3, encaissés mensuellement</small>
              <small className={styles.extra}>
                Ordre : FONTAINE TAEKWON-DO
              </small>
            </li>
            <li>Chèques vacances</li>
            <li>Espèces</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Inscription;
