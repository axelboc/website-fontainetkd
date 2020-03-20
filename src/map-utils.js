import theme from './assets/map-theme.json'; // https://snazzymaps.com/style/252998/p-putt

const GMAPS_API_URL = 'https://maps.googleapis.com/maps/api/staticmap';

const MAP_DEFAULTS = {
  key: process.env.GATSBY_GMAPS_KEY,
  visible: 'Saint-Bruno, Grenoble, France',
  zoom: 13,
};

const MAP_STYLES = theme.map(({ featureType, elementType, stylers }) =>
  [
    ['feature', featureType],
    ...(elementType ? [['element', elementType]] : []),
    ...stylers.flatMap(styler => Object.entries(styler)),
  ]
    .map(entry => entry.join(':'))
    .join('|')
);

function getMapParams(width, height, markers) {
  return [
    ...Object.entries({
      ...MAP_DEFAULTS,
      size: `${width}x${height}`,
    }),
    ...markers.map(m => ['markers', m]),
    ...MAP_STYLES.map(s => ['style', s]),
  ];
}

function getLabelledAddress(address, index) {
  return `label:${String.fromCharCode(65 + index)}|${address}`;
}

export function buildMapUrl(addresses, width, height) {
  const markers = (addresses.length > 1
    ? addresses.map(getLabelledAddress)
    : addresses
  ).map(marker => `size:mid|color:0xb6040a|${marker}`);

  const queryString = getMapParams(width, height, markers)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return `${GMAPS_API_URL}?${queryString}`;
}
