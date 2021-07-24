declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.module.css';
