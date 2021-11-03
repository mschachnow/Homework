/*global google*/
(function () {
    'use strict';

    let markerArray = [];
    let circleArray = [];
    let rectangleArray = [];
    let polylineArray = [];
    let polygonArray = [];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: -25.363882,
            lng: 131.044922
        }
    });
    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        }
    });

    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        markerArray.push(marker.getPosition());
        localStorage.setItem('markers', JSON.stringify(markerArray));
        console.log(markerArray);
    });

    const markerData = localStorage.getItem('markers');
    if (markerData) {
        markerArray = JSON.parse(markerData);
        markerArray.forEach(marker => {
            new google.maps.Marker({
                position: marker,
                map: map,
                animation: google.maps.Animation.DROP,
                icon: {
                    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    scaledSize: new google.maps.Size(50, 50)
                }

            });
        });
    }

    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        circleArray.push({ center: circle.getCenter(), radius: circle.getRadius() });
        localStorage.setItem('circles', JSON.stringify(circleArray));
        console.log(circleArray);
    });

    const circleData = localStorage.getItem('circles');
    if (circleData) {
        circleArray = JSON.parse(circleData);
        circleArray.forEach(circle => {
            new google.maps.Circle({
                center: circle.center,
                radius: circle.radius,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        rectangleArray.push(rectangle.getBounds());
        localStorage.setItem('rectangles', JSON.stringify(rectangleArray));
        console.log(rectangleArray);
    });

    const rectangleData = localStorage.getItem('rectangles');
    if (rectangleData) {
        rectangleArray = JSON.parse(rectangleData);
        rectangleArray.forEach(rectangle => {
            new google.maps.Rectangle({
                bounds: rectangle,
                animation: google.maps.Animation.DROP,
                map: map
            });
        });
    }
    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        polylineArray.push(polyline.getPath().getArray());
        localStorage.setItem('polylines', JSON.stringify(polylineArray));
        console.log(polylineArray);
    });

    const polylineData = localStorage.getItem('polylines');
    if (polylineData) {
        polylineArray = JSON.parse(polylineData);
        polylineArray.forEach(polyline => {
            new google.maps.Polyline({
                path: polyline,
                animation: google.maps.Animation.DROP,
                map: map
            });
        });
    }

    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        polygonArray.push(polygon.getPath().getArray());
        localStorage.setItem('polygons', JSON.stringify(polygonArray));
        console.log(polygonArray);
    });

    const polygonData = localStorage.getItem('polygons');
    if (polygonData) {
        polygonArray = JSON.parse(polygonData);
        polygonArray.forEach(polygon => {
            new google.maps.Polygon({
                path: polygon,
                animation: google.maps.Animation.DROP,
                map: map
            });
        });
    }


}());