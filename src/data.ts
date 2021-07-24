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

export const LOCATIONS: Record<string, LocationInfo> = {
  [Location.GymnaseRV]: {
    name: 'Gymnase R. Vial',
    gmapUrl: 'https://goo.gl/maps/SXapWD8XvWmMDSCNA',
  },
  [Location.GymnaseAB]: {
    name: 'Gymnase A. Bergès',
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

export const MIDDAY_POSITION = 5;
export const TIMES: Record<string, Time[]> = {
  Lundi: [
    {
      from: '17:00',
      to: '17:45',
      duration: 0.75,
      start: 7,
      section: Section.Kids,
      location: Location.GymnaseAB,
    },
    {
      from: '18:00',
      to: '18:45',
      duration: 0.75,
      start: 10,
      section: Section.Kids,
      location: Location.GymnaseAB,
    },
    {
      from: '19:00',
      to: '20:00',
      duration: 1,
      start: 13,
      section: Section.Teens,
      location: Location.GymnaseAB,
    },
    {
      from: '20:00',
      to: '21:00',
      duration: 1,
      start: 17,
      section: Section.TeensAdult,
      location: Location.GymnaseAB,
    },
  ],
  Mardi: [
    {
      from: '9:30',
      to: '10:30',
      duration: 1,
      start: 1,
      section: Section.SummerFitness,
      location: Location.ParcGP,
      variant: 'summer',
    },
  ],
  Mercredi: [
    {
      from: '16:30',
      to: '17:15',
      duration: 0.75,
      start: 6,
      section: Section.Kids,
      location: Location.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      duration: 1.5,
      start: 15,
      section: Section.TeensAdult,
      location: Location.DojangKM,
    },
  ],
  Vendredi: [
    {
      from: '20:00',
      to: '21:30',
      duration: 1.5,
      start: 17,
      section: Section.TeensAdult,
      location: Location.GymnaseAB,
    },
  ],
};
