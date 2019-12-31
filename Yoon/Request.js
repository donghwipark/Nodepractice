var request = require('request');

request('http://www.eastlead.org', function (error, response, body) {
    console.log(body);
});