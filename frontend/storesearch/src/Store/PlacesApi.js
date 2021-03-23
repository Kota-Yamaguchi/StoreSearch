/* eslint-disable no-undef */
var map;
var infowindow;
function getPlaces(storeName, setStoreInfo) {
    var sydney = new google.maps.LatLng(-33.867, 151.195);

    infowindow = new google.maps.InfoWindow();

    map = new google.maps.Map(
        document.getElementById('map'), { center: sydney, zoom: 15 });
    var service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery({
        query: storeName,
        fields: ['name', 'formatted_address', 'geometry', 'place_id','photos']
    }, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            // 配列となっていますが、1件しか返ってきません
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                console.log(place);
                console.log(place.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 500}) );
                
            } 
            setStoreInfo(results[0]);

        }
    });
}


export default getPlaces;
