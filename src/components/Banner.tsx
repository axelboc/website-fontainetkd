import Logo from '../assets/fontaine-taekwondo.svg';
import {
  header,
  inner,
  logo,
  content,
  title,
  intro,
} from './Banner.module.css';

function Banner() {
  return (
    <header className={header}>
      <div className={inner}>
        <Logo className={logo} width="150" height="150" />
        <div className={content}>
          <h1 className={title}>Fontaine Taekwon‑Do</h1>
          <div className={intro}>
            <p>
              Venez découvrir le Taekwon‑Do ITF, un <strong>art martial</strong>{' '}
              coréen moderne conçu pour l’auto-défense&nbsp;!
            </p>
            <p>
              Notre association sportive est basée à Fontaine, près de{' '}
              <strong>Grenoble</strong>, et vous accueille tout au long de
              l’année.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
