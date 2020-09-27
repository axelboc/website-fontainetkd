export const Locations = {
  GymnaseRV: {
    name: 'Gymnase Robert Vial',
    gmapUrl: 'https://goo.gl/maps/SXapWD8XvWmMDSCNA',
    address: 'Gymnase Robert Vial, Allée de Geve, 38600 Fontaine, France',
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
  Lundi: [
    {
      from: '10:00',
      to: '11:00',
      gridRow: '2 / span 4',
      section: 'Fight Fitness',
      location: Locations.ParcGP,
    },
    {
      from: '18:00',
      to: '19:30',
      gridRow: '9 / span 5',
      section: 'Ados / Adultes',
      location: Locations.ParcKM,
    },
  ],
  Mardi: [
    {
      from: '17:45',
      to: '18:30',
      gridRow: '8 / span 3',
      section: 'Enfants',
      location: Locations.ParcKM,
    },
    {
      from: '18:45',
      to: '19:30',
      gridRow: '11 / span 3',
      section: 'Enfants',
      location: Locations.ParcKM,
    },
  ],
  Mercredi: [
    {
      from: '18:00',
      to: '19:30',
      gridRow: '9 / span 5',
      section: 'Ados / Adultes',
      location: Locations.ParcKM,
    },
  ],
  Jeudi: [
    {
      from: '11:00',
      to: '12:00',
      gridRow: '3 / span 4',
      section: 'Fight Fitness',
      location: Locations.ParcGP,
    },
  ],
  Vendredi: [
    {
      from: '18:00',
      to: '19:30',
      gridRow: '9 / span 5',
      section: 'Ados / Adultes',
      location: Locations.ParcKM,
    },
  ],
};
