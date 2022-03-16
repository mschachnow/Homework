const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io');
const socketIo = io(server);

let chatters = [];

socketIo.on('connection', socket => {
  console.log('a user connected');

  // socket.emit('foo', 'Hello from server');

  let name;
  socket.on('login', (n, callback) => {
    if (chatters.find(c => c === n)) {
      //return console.log('duplicate name');
      return callback('user name already taken');
    }
    name = { n };
    chatters.push({ n });
    name.n = socket.id;

    socket.broadcast.emit('info', `${n} has joined the chat`);
    socket.broadcast.to(socket.id).emit('send msg', { chatters });

    socket.on('message', msg => {
      // console.log(msg);
      socketIo.emit('message', { user: name, msg });
      next();
    });

    socketIo.socket.in('id@message sending').emit('newMessage', { msg: 'hey there!' });

    socket.on('disconnect', () => {
      chatters = chatters.filter(c => c !== name);
      socketIo.emit('info', `${name} has left the chat`);
    });

    callback();
  });
});

app.use('/', (req, res, next) => {
  res.end('Hello world');
});

server.listen(80);