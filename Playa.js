var map;
var p=Promise.resolve();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 18.200178, lng: -66.664513},
    zoom: 8
  });


var myButtons=document.getElementsByClassName('btn');

Array.from(myButtons).forEach(element => {
  switch(element.id){
  case "btn1":
    element.addEventListener('click', function(){
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 17.9360, lng:-67.1890},
        zoom: 20
      });
      var marker = new google.maps.Marker({
        position:{lat: 17.9360, lng:  -67.1890},
        map:map,
        title: 'Playa Sucia'
      });
    })
    break;
  case "btn2":
    element.addEventListener('click', function(){
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.4533, lng:-66.0508},
        zoom: 19
      });
      var marker = new google.maps.Marker({
        position:{lat: 18.4533, lng:-66.0508},
        map:map,
        title: 'Oceans Park'
      });
    })
    break;
    case "btn3":
      element.addEventListener('click', function(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 18.471612, lng:  -66.4821157},
          zoom: 19
        });
        var marker = new google.maps.Marker({
          position:{lat: 18.471612, lng:  -66.4821157},
          map:map,
          title: 'Mar Chiquita'
        });
      })
  break;

  }
  
});
