    // start of map shit 
    var mapOptions = {
      center: [-12.415932, 134.244268],
      zoom: 5
    }
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    var map = new L.map('map', mapOptions);
    map.addLayer(layer);

    var markerOptions = {
      title: "MyLocation",
      clickable: true,
      draggable: true,

    }

    var marker = L.marker([-12.415932, 134.244268], markerOptions).on('click', derulo);
    marker.addTo(map);


    function derulo(event) {

      let name = document.querySelector('#name').value;
      let poem = document.querySelector('#poem').value;

      // GeoJson textbox
      let output = document.querySelector('#output')


      var LatiLongi = this.getLatLng();


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
          ${LatiLongi}
          ]
        }
      }
   `
      event.preventDefault();

    }
