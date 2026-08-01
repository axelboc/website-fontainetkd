export const SEASON = '2026-2027';
export const SEASON_SLASH = SEASON.replace('-', ' / ');

export const EMAIL = 'asf.taekwondo@gmail.com';

type Status = 'open' | 'limited' | 'closed';
export const PREREGISTRATION_STATUS: Status = 'open';

enum Location {
  GymnaseAB = 'GymnaseAB',
  DojoLR = 'DojangLR',
  ParcKM = 'ParcKM',
}

interface LocationInfo {
  name: string;
  gmapUrl: string;
}

export const LOCATIONS: Record<Location, LocationInfo> = {
  [Location.GymnaseAB]: {
    name: 'Gymnase Bergès',
    gmapUrl: 'https://maps.app.goo.gl/vJNiw7pqRjHQZQJB7',
  },
  [Location.DojoLR]: {
    name: 'Dojo La Rizza',
    gmapUrl: 'https://maps.app.goo.gl/3h9XHHjZAe8Mg5gm7',
  },
  [Location.ParcKM]: {
    name: 'Parc Karl Marx',
    gmapUrl: 'https://maps.app.goo.gl/3h9XHHjZAe8Mg5gm7',
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
      groups: [{ sections: ['Enfants confirmés* (6-10)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '18:00',
      to: '19:30',
      groups: [{ sections: ['Adultes (15+)', 'Ados confirmés* (12-14)'] }],
      location: Location.GymnaseAB,
    },
  ],
  Mercredi: [
    {
      from: '14:15',
      to: '15:00',
      groups: [{ sections: ['Kids (4-5)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '15:00',
      to: '16:00',
      groups: [{ sections: ['Enfants (6-9)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '16:00',
      to: '17:00',
      groups: [{ sections: ['Préados (10-11)', 'Enfants confirmés* (9)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '17:00',
      to: '18:00',
      groups: [{ sections: ['Ados (12-15)', 'Préados confirmés* (11)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      groups: [{ sections: ['Adultes (15+)'] }],
      location: Location.DojoLR,
    },
  ],
  Samedi: [
    {
      from: '10:00',
      to: '11:30',
      groups: [
        {
          frequency: '2ème du mois',
          sections: ['Adultes (15+)', 'Ados confirmés* (12-14)'],
        },
        {
          frequency: '4ème du mois',
          sections: ['Ceintures vertes et plus (12+)'],
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
