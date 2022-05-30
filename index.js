//importing node framework
var express = require('express');
var app = express();

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {

    console.log(req.body);

    res.send('hey world');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3001);

module.exports = app;