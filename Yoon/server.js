var express = require('express');
var bodyParser = require('body-parser');

// App server creation
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var messages = [];

app.get('/messages', function (request, response) {
    response.send(messages);
});

app.post('/messages', function (request, response) {
    var name = request.body.name;
    var content = request.body.content;
    var message = {
        name: name,
        content: content
    };

    messages.push(message);

    response.send({
        message: 'Add the data',
        data: message
    });
});

// Run the web server
app.listen(52273, function () {
    console.log('running server on port 52273');
});