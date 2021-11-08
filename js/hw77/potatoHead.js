(function () {
    'use strict';

    let bodypart = null;
    let offset;
    let zIndex = 0;
    const boing = $('#boing').find('audio')[0];
    const parts[];

    $(document)
        .on('mousedown', '.part', e => {

            console.log('mousedown');
            bodypart = $(e.target);
            offset = { x: e.offsetX, y: e.offsetY };
        })
        .mousemove(e => {
            if (bodypart) {
                e.preventDefault();
                console.log('mousemove', e.offsetY, e.offsetX);
                zIndex++;
                bodypart.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
                bodypart.css('z-index', zIndex);
            }
        })

        .mouseup(() => {

            if (bodypart) {
                console.log('mouseup');

                bodypart = null;
                boing.play();
                let image = bodypart.getItem();
                //console.log(bodypart.getPosition());
                localStorage.setItem('bodypart', 'image');
                localStorage.setItem('bodypart', bodypart.getPosition());

            }
        });
    const savedParts = localStorage.getItem('bodypart');
    console.log(savedParts);

    /*bodypart.click(function () {
        $('#boing').play();
        console.log(print);
    });*/

}());