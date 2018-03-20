
const mapboxgl = require('mapbox-gl');


mapboxgl.accessToken  = 'pk.eyJ1IjoibmFuZ2Vsb3MiLCJhIjoiY2plenR5djF6MGluMDJ5bnZ4bGo4MDUzeSJ9.WskwCewN8JIs8j672FujoA';


const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const markElem = document.createElement('div');
markElem.style.width = '32px';
markElem.style.height = '32px';
markElem.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(markElem)
  .setLngLat([-87.6354, 41.8885])
  .addTo(map);

console.log('new stuff!!!!!');
