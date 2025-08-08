export const SEASON = '2025-2026';
export const EMAIL = 'asf.taekwondo@gmail.com';

enum Location {
  GymnaseRV = 'GymnaseRV',
  GymnaseAB = 'GymnaseAB',
  DojangKM = 'DojangKM',
  ParcKM = 'ParcKM',
  ParcGP = 'ParcGP',
}

interface LocationInfo {
  name: string;
  gmapUrl: string;
}

export const LOCATIONS: Record<Location, LocationInfo> = {
  [Location.GymnaseRV]: {
    name: 'Gymnase R. Vial',
    gmapUrl: 'https://goo.gl/maps/SXapWD8XvWmMDSCNA',
  },
  [Location.GymnaseAB]: {
    name: 'Gymnase Bergès',
    gmapUrl: 'https://goo.gl/maps/hHby3Woc6KHkD7Au5',
  },
  [Location.DojangKM]: {
    name: 'Dojang Karl Marx',
    gmapUrl: 'https://g.page/FontaineTKD?share',
  },
  [Location.ParcKM]: {
    name: 'Parc Karl Marx',
    gmapUrl: 'https://g.page/FontaineTKD?share',
  },
  [Location.ParcGP]: {
    name: 'Parc Pompidou',
    gmapUrl: 'https://goo.gl/maps/YCdEyVtTEnr9DAof9',
  },
};

interface Time {
  from: string;
  to: string;
  duration: number;
  start: number;
  section: string;
  location: Location;
  variant?: string;
}

export const MIDDAY_POSITION = -1;
export const ROWS_COUNT = 17;

export const TIMES: Record<string, Time[]> = {
  Lundi: [
    {
      from: '17:15',
      to: '18:00',
      duration: 0.75,
      start: 4,
      section: 'Enfants',
      location: Location.GymnaseAB,
    },
    {
      from: '18:00',
      to: '19:30',
      duration: 1.5,
      start: 7,
      section: 'Adultes / Ados confirmés',
      location: Location.GymnaseAB,
    },
  ],
  Mardi: [],
  Mercredi: [
    {
      from: '16:00',
      to: '17:00',
      duration: 1,
      start: 2,
      section: 'Enfants',
      location: Location.GymnaseAB,
    },
    {
      from: '17:00',
      to: '18:00',
      duration: 1,
      start: 6,
      section: 'Ados',
      location: Location.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      duration: 1.5,
      start: 11,
      section: 'Adultes',
      location: Location.DojangKM,
    },
  ],
  Jeudi: [],
  'Vendr.': [],
  Samedi: [
    {
      from: '10:00',
      to: '11:30',
      duration: 1.5,
      start: 1,
      section: 'Ados / Adultes',
      location: Location.DojangKM,
    },
  ],
};
