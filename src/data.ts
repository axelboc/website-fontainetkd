import {
  Location,
  type LocationInfo,
  Section,
  type Status,
  type Time,
} from './models';

export const SEASON = '2026-2027';
export const SEASON_SLASH = SEASON.replace('-', ' / ');

export const EMAIL = 'asf.taekwondo@gmail.com';

export const PREREGISTRATIONS: Record<Status, Section[]> = {
  open: [Section.Kids, Section.Ados, Section.Adultes],
  limited: [],
  closed: [Section.Enfants, Section.Preados],
};

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

export const TIMES: Record<string, Time[]> = {
  Lundi: [
    {
      from: '17:15',
      to: '18:00',
      groups: [{ sections: ['Enfants confirmés* (7-10)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '18:00',
      to: '19:30',
      groups: [{ sections: [Section.Adultes, 'Ados confirmés* (12-14)'] }],
      location: Location.GymnaseAB,
    },
  ],
  Mercredi: [
    {
      from: '14:15',
      to: '15:00',
      groups: [{ sections: [Section.Kids] }],
      location: Location.GymnaseAB,
    },
    {
      from: '15:00',
      to: '16:00',
      groups: [{ sections: [Section.Enfants] }],
      location: Location.GymnaseAB,
    },
    {
      from: '16:00',
      to: '17:00',
      groups: [{ sections: [Section.Preados] }],
      location: Location.GymnaseAB,
    },
    {
      from: '17:00',
      to: '18:00',
      groups: [{ sections: [Section.Ados, 'Préados confirmés* (11)'] }],
      location: Location.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      groups: [{ sections: [Section.Adultes] }],
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
          sections: [Section.Adultes, 'Ados confirmés* (12-14)'],
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
