/*global google*/
(async function () {
    'use strict';
    function doTimeoutWithPromise(callback, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { map.panTo(location) }, 1000);
            //.then(() => doTimeout());
        });
    }


    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.infoWindow();
    let selectedPlace = null;
    //const placesList =

    function createMarkers(info) {

        const location = { lat: info.lat, lng: info.lng };
        const newMarker = new google.maps.Marker({
            position: location,
            map: map,
            title: info.title,
            animation: google.maps.Animation.DROP,
            icon: info.thumbnailImg ? {
                url: info.thumbnailImg,
                scaledSize: new google.maps.Size(50, 50)
            } : undefined
        });
        bounds.extend(location);
    }
    $('#submitButton').on('click', async () => {


        const info = await fetchInfo(`http://api.geonames.org/wikipediaSearch?q=${$("#search").val()}&maxRows=10&username=mschachnow&type=json`);

        info.geonames.forEach(data => {
            createMarkers(data);
            const dataSections = $(`<div class="dataChunks"></div>`).appendTo('#sidebar')
                .click(async () => {
                    await doTimeoutWithPromise(() => map.panTo(location), 1000);
                    await doTimeoutWithPromise(() => map.zoom(18), 1000);


                });

            dataSections.append([`<h1>${data.title}</h1>`, `<p id="summary">${data.summary}</p>`,
            `<img src="${data.thumbnailImg}">`]);

            click(async () => {
                if (selectedPlace === location) {
                    $('.summary').slidUp('slow');
                    $('.dataChunks').find('.summary').slidDown('slow');
                    selectedPlace = null;
                    return;
                }
                selectedPlace = location;
            });


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
    const info = await fetchInfo('http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=mschachnow&type=json');
    console.log(info);

    newMarker.addListener('click', () => {
        infoWindow.setContent(`
            <h3>${location.title}</h3>
            <p>${location.summary}</p>
            <br>
            <a target="_blank" href="https://${location.wikipediaUrl}"some data</a>
        `);
    });

    const bmgLoc = { lat: 40, lng: -74 };
    const pcsLoc = { lat: 40, lng: -74 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: 'New Jersey',
        zoom: 8,
        //mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    //console.log(google.maps.MapTypeId.SATELLITE);

    //const infoWindow = new google.maps.Marker({
    //    constent: '<h>BMG</h>'
    //});

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