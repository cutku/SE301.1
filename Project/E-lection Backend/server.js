var express = require('express');
var app = express();
var router = express.Router();
// var mysql   = require('mysql');
var conn = require('./connection');

var result;


//Burası örnek get sorgusu
app.get('/users', function(req, res, next) {

        conn.getConnection(
            function (err, client) {
                client.query('SELECT * FROM users', function(err, rows) {
                    if(err){
                        console.log('Query Error');
                    }
                    res.json(rows);
                    client.release();
                });
        });     
});


app.get('/elections', function(req, res, next) {

    conn.getConnection(
        function (err, client) {
            client.query('SELECT * FROM election', function(err, rows) {
                if(err){
                    console.log('Query Error');
                }
                try{
                    res.json(rows);
                    client.release();     
                }
                catch(e){
                    console.log(e);
                }
            });
    });     
});

app.get('/candidates', function(req, res, next) {

    conn.getConnection(
        function (err, client) {
            client.query('SELECT * FROM candidate', function(err, rows) {
                if(err){
                    console.log('Query Error');
                }
                res.json(rows);
                client.release();
            });
    });     
});
app.get('/candidatebyelections', function(req, res, next) {

    conn.getConnection(
        function (err, client) {
            client.query('SELECT * FROM candidatebyelection', function(err, rows) {
                if(err){
                    console.log('Query Error');
                }
                try{
                    res.json(rows);
                    client.release();     
                }
                catch(e){
                    console.log(e);
                }
            });
    });     
});

app.get('/electiontypes', function(req, res, next) {

    conn.getConnection(
        function (err, client) {
            client.query('SELECT * FROM electiontypes', function(err, rows) {
                if(err){
                    console.log('Query Error');
                }
                res.json(rows);
                client.release();
            });
    });     
});

app.get('/votesbyelection', function(req, res, next) {

    conn.getConnection(
        function (err, client) {
            client.query('SELECT * FROM votesbyelection', function(err, rows) {
                if(err){
                    console.log('Query Error');
                }
                res.json(rows);
                client.release();
            });
    });     
});


// Burası backendi ayaga kaldıran kısım
var port = 9001;
app.listen(port, function () {
  console.log('app listening on port: '+port)
})
