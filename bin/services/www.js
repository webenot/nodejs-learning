const http = require('http');

module.exports.init = () => Promise.resolve().then(function () {
    console.log("www");


    /**
     * Create HTTP server.
     */
    const server = http.createServer((req, res) => {
        console.log("request");
        res.end();
    });

    /**
     * websockets setup
     */
    //const io = ws_server(require('socket.io')(server));


    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(4000);
    //server.on('error', onError);
    //server.on('listening', onListening);
});