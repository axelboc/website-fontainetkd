import type { ReactNode } from 'react';

import { heading, title, sub as styles_sub } from './Heading.module.css';

interface Props {
  sub?: string;
  level?: 1 | 2;
  children: ReactNode;
}

function Heading(props: Props) {
  const { sub, level = 2, children } = props;

  const Tag = level === 1 ? 'h1' : 'h2';
  return (
    <Tag className={heading}>
      <span className={title}>{children}</span>
      {sub && <span className={styles_sub}>( {sub} )</span>}
    </Tag>
  );
}

export default Heading;
