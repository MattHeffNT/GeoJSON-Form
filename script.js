$(function() {
  $('#basicExampleModal').modal('show');
});

  // start of map
  let mapOptions = {
    center: [-23.70057203555527, 133.8762187957764],
    zoom: 8
  };

  const layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  const map = new L.map('map', mapOptions);
  map.addLayer(layer);

  let markerOptions = {
    title: "MyLocation",
    clickable: true,
    draggable: true,
  };

// email on click event send email
 
  let marker = L.marker([-23.704894502324912, 133.87939453125003], markerOptions);
  marker.addTo(map);

  document.querySelector('#submit').addEventListener("click",populate);

  function populate () {

    let name = document.querySelector('#name').value;
    var poem = document.querySelector('#poem').value;
    var poemTitle = document.querySelector('#poem-title').value;

    // GeoJson textbox
    let output = document.querySelector('#output');
    // marker lat/long
    let LatiLongi = marker.getLatLng();
    let Lat = LatiLongi.lat;
    let lng = LatiLongi.lng;

    var poemTitle = JSON.stringify(poemTitle)
    var poem = JSON.stringify(poem);

    // console.log(LatiLongi);

    output.innerHTML =

      ` {
    "type": "Feature",
      "properties": {
          "Name": "${name}",
          "Poem Title": ${poemTitle},
          "Poem": ${poem}
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
        ${Lat},\n\t${lng}
        ]
      }
  }
  `
  if (name.length == 0) {
   let name =  document.querySelector('#name').value = "Anonymous";
  
   output.innerHTML =

        `{
      "type": "Feature",
        "properties": {
            "Name": "${name}",
            "Poem Title": "${poemTitle}",
            "Poem": "{${poem}}"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            ${lng},\n\t${Lat}
          ]
        }
      }
    `
  }
      // email js
      var template_params = {
        "reply_to": "reply_to_value",
        "from_name": `${name}`,
        "to_name": "X",
        "message_html": `${output.innerHTML}`
      }
    
      var service_id = "default_service";
      var template_id = "template_X7N43Tuw";
    
      if (poem.length > 0) {
        
          // uncomment the line below to enable email of the form        
         // emailjs.send(service_id, template_id, template_params);

        var button = document.querySelector('#submit')
        button.style = "background-color:#70b955;border-style:none !important;width:10%;"
        button.innerText = "Sent";

        console.log(`${output.innerHTML}`);

      } else {
        console.log("issue with sending email");
      }
    
    }
