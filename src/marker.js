
const mapboxgl = require('mapbox-gl');


mapboxgl.accessToken  = 'pk.eyJ1IjoibmFuZ2Vsb3MiLCJhIjoiY2plenR5djF6MGluMDJ5bnZ4bGo4MDUzeSJ9.WskwCewN8JIs8j672FujoA';



const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
};

const buildMarker = (markerType, coordinatesArray) => {
  const markElem = document.createElement('div');
  markElem.style.width = '32px';
  markElem.style.height = '32px';
  markElem.style.backgroundImage = `url(${iconURLs[markerType]})`;
  console.log(iconURLs[markerType]);
  return new mapboxgl.Marker(markElem)
      .setLngLat(coordinatesArray);
}

module.exports = { buildMarker: buildMarker };

