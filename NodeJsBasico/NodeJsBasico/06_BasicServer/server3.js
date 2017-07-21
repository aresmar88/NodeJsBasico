var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(301, {
        'Location': "http://www.google.es"
    });
    res.end();
}).listen(3000, "127.0.0.1");

console.log("Server running at http://127.0.0.1:3000/");