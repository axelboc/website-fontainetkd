import React from 'react';

import styles from './NewsBar.module.css';

function NewsBar() {
  return (
    <div className={styles.bar}>
      <p className={styles.message}>
        Notre club participe à l’opération{' '}
        <a
          href="https://omsfontaine.assoconnect.com/page/1417530-operation-portes-ouvertes"
          target="_blank"
          rel="noopener noreferrer"
        >
          « Portes Ouvertes »
        </a>{' '}
        du mouvement sportif fontainois, du 5 au 13 juin. Pour vous inscrire
        gratuitement aux activités proposées,{' '}
        <a href="https://fontainetkd.typeform.com/to/lBeeGlNp">
          c’est par ici !
        </a>
      </p>
    </div>
  );
}

export default NewsBar;
