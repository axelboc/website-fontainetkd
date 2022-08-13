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

enum Section {
  Kids = 'Enfants',
  Teens = 'Ados',
  TeensAdult = 'Ados / Adultes',
  FightFitness = 'Fight Fitness',
  SummerFitness = 'Été Fitness',
}

interface Time {
  from: string;
  to: string;
  duration: number;
  start: number;
  section: Section;
  location: Location;
  variant?: string;
}

export const MIDDAY_POSITION = -1;
export const ROWS_COUNT = 20;

export const TIMES: Record<string, Time[]> = {
  Lundi: [
    {
      from: '17:15',
      to: '18:00',
      duration: 0.75,
      start: 4,
      section: Section.Kids,
      location: Location.GymnaseAB,
    },
    {
      from: '18:00',
      to: '19:30',
      duration: 1.5,
      start: 7,
      section: Section.TeensAdult,
      location: Location.GymnaseAB,
    },
  ],
  Mardi: [],
  Mercredi: [
    {
      from: '16:30',
      to: '17:15',
      duration: 0.75,
      start: 1,
      section: Section.Kids,
      location: Location.GymnaseAB,
    },
    {
      from: '17:15',
      to: '18:00',
      duration: 0.75,
      start: 4,
      section: Section.Teens,
      location: Location.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      duration: 1.5,
      start: 11,
      section: Section.TeensAdult,
      location: Location.DojangKM,
    },
  ],
  Jeudi: [],
  Vendredi: [
    {
      from: '20:30',
      to: '22:00',
      duration: 1.5,
      start: 14,
      section: Section.TeensAdult,
      location: Location.DojangKM,
    },
  ],
};
