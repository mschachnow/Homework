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

    let pictures;

    theSearchButton.click(function () {
        $.ajax({

            url: 'kotelResult.js',
            dataType: 'jsonp',
            jsonpCallback: 'jQuery35103889914196040962_1635131841821',
        }).then(x => {
            x.items.forEach(element => {
                const containers = $(`<figure class="container"></figure>`).appendTo('#display');
                containers.append([`<img src="${element.media.m.replace('_m', '')}" alt="${element.title}">`, `<figcaption id="title">${element.title}</figcaption>`]);
            });
            console.log('ajax got', x);


        });
        console.log($('#searchBar').val());

        pictures = x.items;

        refreshPicture();
    });
    //$.getJSON('kotelResult.js&callback=jQuery35103889914196040962_1635131841821')
    //   .then(x => console.log('ajax got', x));

}());