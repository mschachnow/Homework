(function () {
    'use strict';

    const LoadFile = $('#loadFile');
    const loadButton = $('#load');
    const loading = $('#loading');

    loadButton.click(() => {
        loading.css("visibility", "visible");
        setTimeout(() => {
            fetch(LoadFile.val())
                .then(r => {
                    if (!r.ok) {
                        console.error(`${r.status} ${r.statusText}`);
                        $('#display').text(`Error:  ${r.status} ${r.statusText}`);
                    }
                    return r.text('error', `${r.status} ${r.statusText}`);
                })
                .then(result => result.text())
                .then(result => {
                    console.log(result, "is loaded");

                    loading.css("visibility", "hidden");

                    $('#display').text(result);

                })

                .catch(err => console.log('very Bad Error', err));
        }, 2000);
    });


}());