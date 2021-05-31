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
      from: '18:00',
      to: '18:45',
      gridRow: '7 / span 3',
      section: 'Enfants',
      location: Locations.GymnaseRV,
    },
    {
      from: '18:45',
      to: '19:30',
      gridRow: '10 / span 3',
      section: 'Enfants',
      location: Locations.GymnaseRV,
    },
    {
      from: '19:30',
      to: '20:30',
      gridRow: '13 / span 4',
      section: 'Ados',
      location: Locations.GymnaseRV,
    },
  ],
  Mercredi: [
    {
      from: '18:30',
      to: '19:30',
      gridRow: '9 / span 4',
      section: 'Ados / Adultes',
      location: Locations.ParcKM,
    },
    {
      from: '19:30',
      to: '20:30',
      gridRow: '13 / span 4',
      section: 'Ados',
      location: Locations.DojangKM,
    },
  ],
  Samedi: [
    {
      from: '10:00',
      to: '11:00',
      gridRow: '2 / span 4',
      section: 'Enfants / Ados / Adultes',
      location: Locations.ParcKM,
    },
  ],
};
