const app = require('connect')();

app.use(require('./middleWare.js'));


app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next();
});

app.use('/index.html', (req, res, next) => {
    res.end('<h1>You have reached the home page<h1>');

});

app.use('/about.html', (req, res, next) => {
    res.end('<h1>Info about us<h1>')
});

app.use((req, res, next) => {

    throw { statusCode: 404, message: 'Page not found' };
});

app.listen(80);