var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8001;
var knex = require('./db/knex.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/todos', function (req, res) {
    knex.raw('select * from wallet').then(function (todos) {
        res.send(todos)

    })
})

app.listen(port, function () {
    console.log('listening on port:', port);
})