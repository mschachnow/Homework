'use strict';
const net = require('net');
function zeros(i) {
    return (i < 10 ? '0' : '') + i
}
function current() {
    const date = new Date()
    return date.getFullYear() + '-' +
        zeros(date.getMonth() + 1) + '-' +
        zeros(date.getDate()) + ' ' +
        zeros(date.getHours()) + ':' +
        zeros(date.getMinutes())
}

const server = net.createServer(function (socket) {

    socket.end(current() + '\n');
})
server.listen(Number(process.argv[2]));


