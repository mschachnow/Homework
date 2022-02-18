'use strict';

const http = require('http')

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}
function unixtime(time) {
    return { unixtime: time.getTime() }
}
const server = http.createServer(function (req, res) {
    const purl = new URL(request.url);
    const time = new Date().toISOString()
})


