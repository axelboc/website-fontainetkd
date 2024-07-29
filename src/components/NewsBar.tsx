import { bar, message } from './NewsBar.module.css';

function NewsBar() {
  return (
    <div className={bar}>
      <p className={message}>
        Rendez-vous <strong>samedi 7 septembre</strong> au{' '}
        <em>Forum des Sports et de la Vie Associative</em>,
        parc&nbsp;de&nbsp;la&nbsp;Poya. D’ici là, bonne vacances
        à&nbsp;tous&nbsp;!
      </p>
    </div>
  );
}

export default NewsBar;
