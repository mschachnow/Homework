
window.pcs = window.pcs || {};
window.pcs.clock = (function () {
    'use strict';
    function createClock() {

        let clock = document.createElement('div');
        document.bodyChild(clock);

        function currentTime() {

            let date = new Date();
            let hh = date.getHours();
            let mm = date.getMinutes();
            let ss = date.getSeconds();
            let session = "AM";
            if (hh === 0) {
                hh = 12;
            }
            if (hh > 12) {
                hh = hh - 12;
                session = "PM";
            }

            clock.innerText = (hh + ":" + mm + ":" + ss + " " + session);

        }
        setInterval(currentTime, 1000);
    }
    return { createClock };

}());