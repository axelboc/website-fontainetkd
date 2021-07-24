import React from 'react';

import * as styles from './NewsBar.module.css';

function NewsBar() {
  return (
    <div className={styles.bar}>
      <p className={styles.message}>
        Rendez-vous <strong>samedi 4 septembre</strong> au{' '}
        <em>Forum des Sports et de la Vie Associative</em>,
        parc&nbsp;de&nbsp;la&nbsp;Poya. D’ici là, bonne vacances
        à&nbsp;tous&nbsp;!
      </p>
    </div>
  );
}

export default NewsBar;
