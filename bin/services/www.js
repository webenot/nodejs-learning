const http = require('http');

module.exports.init = () => Promise.resolve().then(function () {
    console.log("www");

    const hostname = 'localhost';
    const port = 4000;

    /**
     * Create HTTP server.
     */
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Hello World!</h1>');
    });

    /**
     * websockets setup
     */
    //const io = ws_server(require('socket.io')(server));


    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
    //server.listen(4000);
    //server.on('error', onError);
    //server.on('listening', onListening);
});