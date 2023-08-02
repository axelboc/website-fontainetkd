import { SEASON } from '../data';
import Heading from './Heading';
import * as styles from './Inscription.module.css';

function Inscription() {
  return (
    <section id="inscription" className={styles.root}>
      <Heading>Inscription</Heading>
      <div className={styles.inner}>
        <section className={styles.section}>
          <h3>Première adhésion</h3>
          <p>
            Pour vous inscrire, venez nous rencontrer à notre{' '}
            <strong>prochain entraînement</strong>, et profitez dans le même
            temps d’une première séance d’essai gratuite&nbsp;!
          </p>
          <p>
            Nous vous remettrons un <strong>dépliant</strong> contenant toutes
            les informations nécessaires pour vous inscrire, vous ou votre
            enfant, ainsi que pour régler la cotisation.
          </p>
          <p>
            Pour les séances d’essai, porter une tenue de sport et apporter une
            gourde et des tongs.
          </p>
          <p>
            Une question ?{' '}
            <a
              href="https://fontainetkd.typeform.com/to/YlcrgiPQ"
              target="_blank"
              rel="noreferrer"
            >
              Contactez-nous&nbsp;!
            </a>
          </p>
          <p>À très vite&nbsp;!</p>
        </section>
        <section className={styles.section}>
          <h3>Renouvellement</h3>
          <p>
            Contents de vous revoir&nbsp;! Voici toutes les informations
            nécessaires pour renouveler votre adhésion ou celle de votre
            enfant&nbsp;:
          </p>
          <ul>
            <li>
              <a
                href={`depliant_${SEASON}.pdf`}
                download={`Dépliant ${SEASON} - Fontaine Taekwon-Do.pdf`}
              >
                Dépliant {SEASON} (PDF)
              </a>
            </li>
            <li>
              <a
                href={`https://framaforms.org/adhesion-enfantado-${SEASON.replace(
                  '-',
                  ''
                )}-1659891235`}
                target="_blank"
                rel="noreferrer"
              >
                Formulaire d’adhésion ENFANT/ADO (en ligne)
              </a>
            </li>
            <li>
              <a
                href={`https://framaforms.org/adhesion-adulte-${SEASON.replace(
                  '-',
                  ''
                )}-1657976478`}
                target="_blank"
                rel="noreferrer"
              >
                Formulaire d’adhésion ADULTE (en ligne)
              </a>
            </li>
            <li>
              <a
                href={`aide_${SEASON}.pdf`}
                download={`Aide à l'adhésion ${SEASON} - Ville de Fontaine.pdf`}
              >
                Formulaire d’aide à l’adhésion (PDF)
              </a>
            </li>
          </ul>
          <p>
            Dans le cas d’une adhésion familiale, remplir d’abord son propre
            formulaire avant ceux de ses enfants.
          </p>
          <p>
            Une fois l’adhésion <strong>validée par le Bureau</strong> par SMS
            ou WhatsApp, procéder au réglement de la cotisation&nbsp;:
          </p>
          <ul>
            <li>
              <strong>Virement bancaire</strong>{' '}
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
              </a>{' '}
              <small>&ndash; via HelloAsso</small>
            </li>
            <li>
              Chèque <small>&ndash; un à trois, encaissés mensuellement</small>
              <small className={styles.extra}>
                Ordre : FONTAINE TAEKWON-DO
              </small>
            </li>
            <li>Espèces</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Inscription;
