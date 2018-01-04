

var express = require('express');
var app = express();
var router = express.Router();
// var mysql   = require('mysql');
var conn = require('./connection');

var result;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

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

app.post('/user', function (req, res) 
{
    conn.getConnection(
        function (err, client) {
            var jsondata = req.body;
            var query='INSERT INTO users (name, surname, username, email, password, type) VALUES ("'+jsondata["name"] +'","'+jsondata["surname"]+'","'+jsondata["username"]+'","'+jsondata["email"]+'","'+jsondata["password"]+'",'+jsondata["type"]+')';
            client.query(query, function(err, rows) {
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                res.json({success:true});
              
                client.release();
            });
        });   
})
app.post('/election', function (req, res) 
{
    conn.getConnection(
        function (err, client) {
            var jsondata = req.body;
            var query='INSERT INTO election (name, typeId, status, startDate, endDate) VALUES ("'+jsondata["name"] +'","'+jsondata["typeId"]+'","'+jsondata["status"]+'","'+jsondata["startDate"]+'","'+jsondata["endDate"]+'")';
            client.query(query, function(err, rows) {
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                res.json({success:true});
              
                client.release();
            });
        });   
})
app.post('/candidate', function (req, res) 
{
    conn.getConnection(
        function (err, client) {
            var jsondata = req.body;
            var query='INSERT INTO candidate (name, codename, userId) VALUES ("'+jsondata["name"] +'","'+jsondata["codename"]+'",'+jsondata["userId"]+')';
            client.query(query, function(err, rows) {
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                res.json({success:true});
              
                client.release();
            });
        });   
})


  // Burası backendi ayaga kaldıran kısım
var port = 9001;
app.listen(port, function () {
  console.log('app listening on port: '+port)
})
