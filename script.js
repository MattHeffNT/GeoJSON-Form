document.querySelector('#submit').addEventListener("click",populate);

  // start of map
  let mapOptions = {
    center: [-12.415932, 134.244268],
    zoom: 5
  };

  const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  const map = new L.map('map', mapOptions);
  map.addLayer(layer);

  let markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
  };
  
  let marker = L.marker([-12.415932, 134.244268], markerOptions);
  marker.addTo(map);

  function populate(event) {

    let name = document.querySelector('#name').value;
    let poem = document.querySelector('#poem').value;

    // GeoJson textbox
    let output = document.querySelector('#output');

    // marker lat/long
    let LatiLongi = marker.getLatLng();
    let Lat = LatiLongi.lat;
    let lng = LatiLongi.lng;

    console.log(LatiLongi);

    output.innerHTML =

      ` {
    "type": "Feature",
      "properties": {
          "Name": "${name}",
          "Poem": "${poem}"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        ${Lat},\n\t${lng}
        ]
      }
  }
  `
    }
