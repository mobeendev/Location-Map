var map, infoWindow, bounds, marker, initialPos;
var markers = [{
        "title": 'Gilgit',
        "lat": '35.920834',
        "lng": '74.308334',
        "description": 'Gilgit, Gilgit-Baltistan, Pakistan ,  Coordinates(35.920834 ,74.308334°)',
    },
    {
        "title": 'Islamabad',
        "lat": '33.6844',
        "lng": '73.0479',
        "description": 'Islamabad, Capital of Pakistan, Coordinates(33.6844 , 73.0479°)',
        "clicks": 3
    },
    {
        "title": 'Lahore',
        "lat": '31.5204',
        "lng": '74.3587',
        "description": 'Lahore, Provincial Capital of Pakistan, Coordinates(31.5204° , 74.3587°)',
    },
    {
        "title": 'Jhelum',
        "lat": '32.940548 ',
        "lng": '73.727631',
        "description": 'Jhelum (32.940548 , 73.727631°) is my city in Punjab, Pakistan.'
    },
    {
        "title": 'Shah Faisal Colony',
        "lat": '24.896091',
        "lng": '67.160454',
        "description": 'Shah Faisal Colony in Karachi,  Pakistan'
    }, {
        "title": 'Singapore',
        "lat": '1.290270',
        "lng": '103.851959',
        "description": 'This is Singapore Coordinates(1.290270 , 103.851959°).'
    }, {
        "title": 'Jurong Island',
        "lat": '1.273916',
        "lng": '103.6635889',
        "description": 'This is Jurong Island in Singapore, Coordinates(1.290270 , 103.851959°).'
    }

    , {
        "title": 'Pemping Island',
        "lat": '1.0943181',
        "lng": '103.7847999',
        "description": 'This is Pemping Island in Singapore, Coordinates(1.0943181 , 103.7847999°).'
    }, {
        "title": 'Malaysia',
        "lat": '4.111243',
        "lng": '100.561886',
        "description": 'This is Malaysia, Coordinates(4.111243 , 100.56188°).'
    }

];


function initMap() {

    console.log('init');
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 6
    });


    infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}


function resetMap() {
    //Remove previous Marker.

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 4
    });

    if (infoWindow) {
        infoWindow.close();
    }
    // infoWindow = new google.maps.InfoWindow();


}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}



function locatePosition(position) {


    infoWindow.close(); //hide the infowindow
    console.log(infoWindow);
    //Set Marker on Map.
    var data = markers[position];
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);


    marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: data.title,
        icon: 'http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png'
    });

    map.setZoom(6);
    marker.setMap(map);
    //Create and open InfoWindow.

    infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
    infoWindow.open(map, marker);
    // map.fitBounds(bounds);



    var n = Math.floor(Math.random() * 10);

    var num1 = Math.floor(Math.random() * n) + 10;
    var num2 = Math.floor(Math.random() * n) + 22;
    var num3 = Math.floor(Math.random() * n) + 17;
    document.getElementById("loc1").innerHTML = num1;
    document.getElementById("loc2").innerHTML = num2;
    document.getElementById("loc3").innerHTML = num3;

};