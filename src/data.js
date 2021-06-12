export const Locations = {
  GymnaseRV: {
    name: 'Gymnase R. Vial',
    gmapUrl: 'https://goo.gl/maps/SXapWD8XvWmMDSCNA',
    address: 'Gymnase Robert Vial, Allée de Geve, 38600 Fontaine, France',
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

export const Times = {
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
    {
      from: '18:00',
      to: '18:45',
      duration: 0.75,
      start: 7,
      section: 'Enfants',
      location: Locations.GymnaseRV,
    },
    {
      from: '18:45',
      to: '19:30',
      duration: 0.75,
      start: 10,
      section: 'Enfants',
      location: Locations.GymnaseRV,
    },
    {
      from: '19:30',
      to: '21:00',
      duration: 1.5,
      start: 13,
      section: 'Ados / Adultes',
      location: Locations.GymnaseRV,
    },
  ],
  Mercredi: [
    {
      from: '19:30',
      to: '21:00',
      duration: 1.5,
      start: 13,
      section: 'Ados / Adultes',
      location: Locations.DojangKM,
    },
  ],
  Vendredi: [
    {
      from: '20:30',
      to: '22:00',
      duration: 1.5,
      start: 15,
      section: 'Ados / Adultes',
      location: Locations.DojangKM,
    },
  ],
  Samedi: [
    {
      from: '10:00',
      to: '11:00',
      duration: 1,
      start: 2,
      section: 'Été Fitness',
      location: Locations.ParcKM,
      variant: 'summer',
    },
  ],
};
