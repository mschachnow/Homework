/*global google*/
(async function () {
    'use strict';

    const bounds = new google.maps.LatLngBounds();

    function createMarkers(info) {

        const location = { lat: info.lat, lng: info.lng };
        const newMarker = new google.maps.Marker({

            position: location,
            map: map,
            title: info.title,
            url: info.wikipediaUrl
        });
        bounds.extend(location);
    }

    $('#submitButton').on('click', async () => {


        const info = await fetchInfo(`http://api.geonames.org/wikipediaSearch?q=${$("#search").val()}&maxRows=10&username=mschachnow&type=json`);

        info.geonames.forEach(data => {
            createMarkers(data);
            const dataSections = $(`<div class="dataChunks"></div>`).appendTo('#sidebar');

            dataSections.append([`<h1>${data.title}</h1>`, `<p id="summary">${data.summary}</p>`,
            `<img src="${data.thumbnail}">`]);


            console.log(data);

        });
        map.fitBounds(bounds);

        console.log(info);
        console.log($("#search").val());
    });

    async function fetchInfo(url) {

        const r = await fetch(url);
        const info = await r.json();
        console.log(info);
        return info;
    }
    const info = await fetchInfo('http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=&type=json');
    console.log(info);

    const bmgLoc = { lat: 40, lng: -74 };
    const pcsLoc = { lat: 40, lng: -74 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: bmgLoc,
        zoom: 8,
        //mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    console.log(google.maps.MapTypeId.SATELLITE);

    const infoWindow = new google.maps.Marker({
        constent: '<h>BMG</h>'
    });

    const marker1 = new google.maps.Marker({
        position: bmgLoc,
        map: map,
        title: 'BMG'

    });
    marker1.addListener('click', () => {
        infoWindow.setContent('BMG a Yeshivah founded by HaRav Aharon Kotler');
        infoWindow.open(map, marker1);
    });

    const marker2 = new google.maps.Marker({
        position: pcsLoc,
        map: map,
        title: 'PCS'
    });

    marker2.addListener('click', () => {
        infoWindow.setContent('Pcs is a great place to study');
        infoWindow.open(map, marker2);
    });

    /*const panorama = google.maps.StreetViewPanorama(document.getElementById('pano'), {
        position: bmgLoc,
        pov: {
            heading: 0,
            pitch: -10
        }
    });

    map.addListener('center_changed', () => {
        //console.log('center changed', e);
        const center = map.getCenter();
        console.log('center changed', center.lat(), center.lng());
        panorama.setPosition(center);
    });

    const bounds = new google.maps.LatLongBounds();
    bounds.extend();
    bounds.extend(pcsLoc);
    map.fitBounds(bounds);

    setTimeout(() => {
        setInterval(() => {
            map.panTo(pcsLoc);
        }, 5000);
    }, 2000);*/

}());