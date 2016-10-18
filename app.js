var map;

function initilize(location){
  console.log(location);

  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
    mapTypeId: 'roadmap'
  };

   map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
   var marker = new google.maps.Marker({
       position: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
       map: map
    });

}

 $(document).ready(function(){
    navigator.geolocation.getCurrentPosition(initilize);

 });
