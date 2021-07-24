import PropTypes from 'prop-types';
import React from 'react';

import * as styles from './Heading.module.css';

function Heading(props) {
  const { sub, level = 2, children } = props;

  const Tag = `h${level}`;
  return (
    <Tag className={styles.heading}>
      <span className={styles.title}>{children}</span>
      {sub && <span className={styles.sub}>( {sub} )</span>}
    </Tag>
  );
}

Heading.propTypes = {
  sub: PropTypes.string,
  level: PropTypes.number,
  children: PropTypes.node,
};

export default Heading;
