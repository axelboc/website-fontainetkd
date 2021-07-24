export const Locations = {
  GymnaseRV: {
    name: 'Gymnase R. Vial',
    gmapUrl: 'https://goo.gl/maps/SXapWD8XvWmMDSCNA',
    address: 'Gymnase Robert Vial, Allée de Geve, 38600 Fontaine, France',
  },
  GymnaseAB: {
    name: 'Gymnase A. Bergès',
    gmapUrl: 'https://goo.gl/maps/hHby3Woc6KHkD7Au5',
    address:
      'Gymnase Aristide Bergès, 25 Allée des Balmes, 38170 Seyssinet-Pariset, France',
  },
  DojangKM: {
    name: 'Dojang Karl Marx',
    gmapUrl: 'https://g.page/FontaineTKD?share',
    address: 'Parc Karl Marx, 38170 Seyssinet-Pariset, France',
  },
  ParcKM: {
    name: 'Parc Karl Marx',
    gmapUrl: 'https://g.page/FontaineTKD?share',
    address: 'Parc Karl Marx, 38170 Seyssinet-Pariset, France',
  },
  ParcGP: {
    name: 'Parc Pompidou',
    address: 'Rue Général Mangin, 38100 Grenoble',
    gmapUrl: 'https://goo.gl/maps/YCdEyVtTEnr9DAof9',
  },
};

export const MIDDAY_POSITION = 5;

export const Times = {
  Lundi: [
    {
      from: '17:00',
      to: '17:45',
      duration: 0.75,
      start: 7,
      section: 'Enfants',
      location: Locations.GymnaseAB,
    },
    {
      from: '18:00',
      to: '18:45',
      duration: 0.75,
      start: 10,
      section: 'Enfants',
      location: Locations.GymnaseAB,
    },
    {
      from: '19:00',
      to: '20:00',
      duration: 1,
      start: 13,
      section: 'Ados',
      location: Locations.GymnaseAB,
    },
    {
      from: '20:00',
      to: '21:00',
      duration: 1,
      start: 17,
      section: 'Ados / Adultes',
      location: Locations.GymnaseAB,
    },
  ],
  Mardi: [
    {
      from: '9:30',
      to: '10:30',
      duration: 1,
      start: 1,
      section: 'Été Fitness',
      location: Locations.ParcGP,
      variant: 'summer',
    },
  ],
  Mercredi: [
    {
      from: '16:30',
      to: '17:15',
      duration: 0.75,
      start: 6,
      section: 'Enfants',
      location: Locations.GymnaseAB,
    },
    {
      from: '19:30',
      to: '21:00',
      duration: 1.5,
      start: 15,
      section: 'Ados / Adultes',
      location: Locations.DojangKM,
    },
  ],
  Vendredi: [
    {
      from: '20:00',
      to: '21:30',
      duration: 1.5,
      start: 17,
      section: 'Ados / Adultes',
      location: Locations.GymnaseAB,
    },
  ],
};
