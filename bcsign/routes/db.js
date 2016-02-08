var express = require('express');
var pg = require('pg');
var router = express.Router();

var connection = "postgres://bcuser:bcsign123@localhost:5432/bcsigndb";

router.get('/getAllClients', function (req, res, next) {
    var client = new pg.Client(connection);
    client.connect();
    var results = [];

    var query = client.query("SELECT * FROM client");
    query.on('row', function (row) {
        results.push(row);
    });


    query.on('end', function () {
        client.end();
        return res.json(results);
    });
});

router.get('/getClientById/:id', function (req, res, next) {
    var id = req.params.id;
    var client = new pg.Client(connection);
    client.connect();
    var results = [];

    var query = client.query("SELECT * FROM client where id = $1", [id]);
    query.on('row', function (row) {
        results.push(row);
    });

    query.on('end', function () {
        client.end();
        return res.json(results);
    });
});


router.get('/getClientByTx/:tx', function (req, res, next) {
    var tx = req.params.tx;
    var client = new pg.Client(connection);
    client.connect();
    var results = [];

    var query = client.query("SELECT * FROM client where registration_tx_id = $1", [tx]);
    query.on('row', function (row) {
        results.push(row);
    });

    query.on('end', function () {
        client.end();
        return res.json(results);
    });
});


router.get('/getAllSignaturesByClient/:clientId', function (req, res, next) {
    var clientId = req.params.clientId;
    var client = new pg.Client(connection);
    client.connect();
    var results = [];

    var query = client.query("SELECT * FROM signature where client_id = $1", [clientId]);
    query.on('row', function (row) {
        results.push(row);
    });

    query.on('end', function () {
        client.end();
        return res.json(results);
    });
});

module.exports = router;