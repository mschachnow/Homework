const http = require('http');
const fs = require('fs');
const path = require('path');
const { ReadStream, WriteStream } = require('fs');


const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
}

http.createServer(async (req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        res.writeHead(301, { Location: '/index.html' });
    } else {

        //const ext = path.extname(req.url);
        //console.log(ext);
        res.setHeader('Content-Type', contentTypes[path.extname(req.url) || '.html']);

        try {
            const readStream = fs.createReadStream(`./public${req.url}`, 'utf-8');
            readStream.pipe(res.write);
            readStream.on('data', chunk => {
                res.write(chunk);

            })
            readStream.on('end', () => {
                res.end();
            })



        } catch (e) {
            switch (e.code) {
                case ('ENOENT'):
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.write('<h1>404 File Not Found</h1>');
                    break;
                default:
                    res.statusCode = 500;
                    res.write(`Internal Server Error. Unable to get ${req.url}`);
            }
            res.end();
        }
    }

}).listen(80);