var express = require('express');

// Create the server
var app = express();

app.use(function (request, response, next) {
    request.test = 'req test';
    response.test = 'res test';
    next();
});
app.use(function (request, response, next) {
    response.send('<h1>' + request.test + response.test + '</h1>');
});

// Run the server
app.listen(52273, function () {
    console.log('Server is running at port 52273');
});
