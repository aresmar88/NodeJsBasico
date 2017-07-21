var Http = require("http"),
Urls = ["google.com", "www.alosa.es", "marca.com"];

function FetchPage(url) {
    var start = new Date();
    Http.get({ host: url }, function () {
        console.log("Got response from: " + url);
        console.log("Request took:", new Date() - start, "ms");
    });
}

for (var i = 0; i < Urls.length; i++) {
    FetchPage(Urls[i]);
}