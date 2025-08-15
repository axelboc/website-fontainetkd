declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import { type FunctionComponent, type SVGProps } from 'react';

  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>;
  export = classes;
}

declare module '*.css';
