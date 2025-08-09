export const SEASON = '2025-2026';
export const SEASON_SLASH = SEASON.replace('-', ' / ');

export const EMAIL = 'asf.taekwondo@gmail.com';

enum Location {
  GymnaseRV = 'GymnaseRV',
  GymnaseAB = 'GymnaseAB',
  DojoLR = 'DojangLR',
  ParcKM = 'ParcKM',
  ParcGP = 'ParcGP',
}

const ADULTES_15 = 'Adultes (15+)';
const ADOS_10_11 = 'Ados (10-11)';
const ADOS_12_15 = 'Ados (12-15)';
const ADOS_CONF_11_14 = 'Ados confirmés* (11-14)';
const ENFANTS_6_9 = 'Enfants (6-9)';
const ENFANTS_CONF_6_10 = 'Enfants confirmés* (6-10)';
const ENFANTS_CONF_9 = 'Enfants confirmés* (9)';
const KIDS_4_5 = 'Kids (4-5)';

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
  [Location.DojoLR]: {
    name: 'Dojo La Rizza',
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
  groups: Group[];
  location: Location;
  variant?: string;
}

interface Group {
  frequency?: string;
  sections: string[];
}

export const TIMES: Record<string, Time[]> = {
  Lundi: [
    {
      from: '17:15',
      to: '18:00',
      groups: [{ sections: [ENFANTS_CONF_6_10] }],
      location: Location.GymnaseAB,
    },
    {
      from: '18:00',
      to: '19:30',
      groups: [{ sections: [ADULTES_15, ADOS_CONF_11_14] }],
      location: Location.GymnaseAB,
    },
  ],
  Mercredi: [
    {
      from: '14:15',
      to: '15:00',
      groups: [{ sections: [KIDS_4_5] }],
      location: Location.GymnaseAB,
    },
    {
      from: '15:00',
      to: '16:00',
      groups: [{ sections: [ENFANTS_6_9] }],
      location: Location.GymnaseAB,
    },
    {
      from: '16:00',
      to: '17:00',
      groups: [{ sections: [ADOS_10_11, ENFANTS_CONF_9] }],
      location: Location.GymnaseAB,
    },
    {
      from: '17:00',
      to: '18:00',
      groups: [{ sections: [ADOS_12_15] }],
      location: Location.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      groups: [{ sections: [ADULTES_15, ADOS_CONF_11_14] }],
      location: Location.DojoLR,
    },
  ],
  Samedi: [
    {
      from: '10:00',
      to: '11:30',
      groups: [
        {
          frequency: '1er du mois',
          sections: [ADULTES_15, ADOS_CONF_11_14],
        },
        {
          frequency: '3ème du mois',
          sections: ['Ceintures vertes et plus (11+)'],
        },
      ],
      location: Location.DojoLR,
    },
    {
      from: '10:00',
      to: '13:00',
      groups: [
        {
          frequency: 'En fonction des besoins',
          sections: ['Entraînements spéciaux, tournois, etc.'],
        },
      ],
      location: Location.DojoLR,
    },
  ],
};
