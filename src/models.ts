export enum Section {
  Kids = 'Kids (4‑5)',
  Enfants = 'Enfants (6‑8)',
  Preados = 'Préados (9‑11)',
  Ados = 'Ados (12‑14)',
  Adultes = 'Adultes (15+)',
}

export type Status = 'open' | 'limited' | 'closed';

export enum Location {
  GymnaseAB = 'GymnaseAB',
  DojoLR = 'DojangLR',
  ParcKM = 'ParcKM',
}

export interface LocationInfo {
  name: string;
  gmapUrl: string;
}

export interface Time {
  from: string;
  to: string;
  groups: Group[];
  location: Location;
  variant?: string;
}

interface Group {
  frequency?: string;
  sections: string[];
}
