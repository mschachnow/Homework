(function () {
    'use strict';

    function saveState() {
        const partsInfo = [];
        parts.each((i, part) => {
            console.log(part);
            part = $(part);
            partsInfo.push({
                src: part.attr('src'),
                top: part.css('top'),
                left: part.css('left'),
                zIndex: part.css('zIndex'),

            });

        });
        localStorage.setItem('bodypart', JSON.stringify(partsInfo));
    }

    let bodypart = null;
    let offset;
    let zIndex = 0;
    const parts = $('.part');

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
                document.getElementById('boing').play();
                console.log('mouseup');
                bodypart = null;
                saveState();

            }
        });

    const data = localStorage.getItem('bodypart');

    if (data) {
        $('#partsPane').empty();
        const partsInfo = JSON.parse(data);
        partsInfo.forEach(partInfo => {
            console.log(partInfo);
            $(`<img src="${partInfo.src}" class="part">`).css(partInfo).appendTo('#partsPane');
        });
    }

}());