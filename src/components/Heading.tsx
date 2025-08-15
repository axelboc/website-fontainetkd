import { type ReactNode } from 'react';

import * as styles from './Heading.module.css';

interface Props {
  sub?: string;
  level?: 1 | 2;
  children: ReactNode;
}

function Heading(props: Props) {
  const { sub, level = 2, children } = props;

  const Tag = level === 1 ? 'h1' : 'h2';
  return (
    <Tag className={styles.heading}>
      <span className={styles.title}>{children}</span>
      {sub && <span className={styles.sub}>{sub}</span>}
    </Tag>
  );
}

export default Heading;
