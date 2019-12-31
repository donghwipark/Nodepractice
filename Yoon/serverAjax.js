var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// var client = mysql.createConnection({
//     user: 'root'
// });

client.query('USE Company');

// Declare variable
var items = [{
    name: 'milk',
    price: '2000'
}, {
    name: 'tea',
    price: '5000'
}, {
    name: 'coffee',
    price: '5000'
}];

// App server creation
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.all('/data.html', function (request, response) {
    var output = '';
    output += '<!DOCTYPE html>';
    output += '<html>';
    output += '<head>';
    output += '    <title>Data HTML</title>';
    output += '</head>';
    output += '<body>';
    items.forEach(function (item) {
        output += '<div>';
        output += '    <h1>' + item.name + '</h1>';
        output += '    <h2>' + item.price + '</h2>';
        output += '</div>';
    });
    output += '</body>';
    output += '</html>';
    response.send(output);
});

app.all('/data.json', function (request, response) {
    response.send(items);
});

app.all('/data.xml', function (request, response) {
    var output = '';
    output += '<?xml version="1.0" encoding="UTF-8" ?>';
    output += '<products>';
    items.forEach(function (item) {
        output += '<product>';
        output += '    <name>' + item.name + '</name>';
        output += '    <price>' + item.price + '</price>';
        output += '</product>';
    });
    output += '</product>';
    response.send(output);
});

app.all('/parameter', function (request, response) {
    var name = request.query.name;
    var region = request.query.region;

    response.send('<h1>' + name + ':' + region + '</h1>');
});

app.all('/parameter/:id', function (request, response) {
    var id = request.params.id;

    response.send('<h1>' + id + '</h1>');
});

app.get('/products', function (request, response) {
    response.send(items);
});

app.get('/products/:id', function (request, response) {
    var id = Number(request.params.id);
    if (isNaN(id)) {
        response.send({
            error: 'input number'
        });
    } else if (items[id]) {
        response.send(items[id]);
    } else {
        response.send({
            error: 'not available data'
        });
    }
});

app.post('/products', function (request, response) {
    var name = request.body.name;
    var price = request.body.price;
    var item = {
        name: name,
        price: price
    };

    items.push(item);

    response.send({
        message: 'Add the data',
        data: item
    });
});

app.put('/products/:id', function (request, response) {
    var id = Number(request.params.id);
    var name = request.body.name;
    var price = request.body.price;
    if (items[id]) {
        if (name) {
            items[id].name = name;
        }
        if (price) {
            items[id].price = price;
        }

        response.send({
            message: 'Modified the data',
            data: items[id]
        });
    } else {
        response.send({
            error: 'not available data'
        });
    }

    items.push(item);

    response.send({
        message: 'Add the data',
        data: item
    });
});

app.delete('/products/:id', function (request, response) {
    var id = Number(request.params.id);

    if (isNaN(id)) {
        response.send({
            error: 'input number'
        });
    } else if (items[id]) {
        items.splice(id, 1);
        response.send({
            message: 'Delete the Data'
        })
    } else {
        response.send({
            error: 'not available data'
        });
    }
});

// Run the web server
app.listen(52273, function () {
    console.log('running server on port 52273');
});