import { bar, message } from './NewsBar.module.css';

function NewsBar() {
  return (
    <div className={bar}>
      <p className={message}>
        Les inscriptions pour les enfants de <strong>6-9 ans</strong> sont{' '}
        <strong>fermées</strong>. Nous ouvrirons peut-être de nouvelles places
        en janvier.
      </p>
    </div>
  );
}

export default NewsBar;
