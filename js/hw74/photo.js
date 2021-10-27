(function () {
    'use strict';

    /*function fetchPhotos(file) {

        const response = await fetch(file);
        const photos = await response.json();
        console.log(photos);
        return photos;
    }
    const photo = fetchPhotos('');*/

    const theSearchButton = $('#submitSearch');

    theSearchButton.click(function () {
        $.ajax({
            //url: 'someData?callback=?',
            url: 'kotelResult.js',
            dataType: 'jsonp',
            jsonpCallback: 'jQuery35103889914196040962_1635131841821',
        }).then(x => {
            x.items.forEach(element => {
                const container = $('#display').append(`<div class="container"></div>`);
                container.append([`<img src="${element.media.m}"></img>`, `<p id="title">${element.title}</p>`]);
            });
            console.log('ajax got', x);


        });
        console.log($('#searchBar').val());
    });



    //$.getJSON('kotelResult.js&callback=jQuery35103889914196040962_1635131841821')
    //   .then(x => console.log('ajax got', x));

}());