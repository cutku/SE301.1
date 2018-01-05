// import { get } from 'https';



var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
var router = express.Router();
// var mysql   = require('mysql');
var conn = require('./connection');
// var auth = require('./auth');
var result;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
app.use(cookieParser());

function isAuthenticated(req, res, next) {
    var token=req.cookies.auth;
    console.log(token);
    if (isTokenValid(token))
        token=generateToken(token.user);
        res.cookie('auth',token, { maxAge: 900000, httpOnly: true }); 
        return next();
    res.status(402);
  } 


// function generateToken(user) {
//     var token={}
//     token.user={};
//     token.user=user;
//     return token;
//   }


// function isTokenValid(token) {
//     if (token)
//     {
//         return true;
//     }
//     return false;
// }
 
//Burası örnek get sorgusu
app.get('/users', function(req, res, next) {
    console.log("deneme");
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
            client.query('SELECT election.*,electiontypes.name AS typeName FROM election INNER JOIN electiontypes ON election.typeId= electiontypes.id', function(err, rows) {
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
            client.query('SELECT candidate.*, user.* FROM candidate INNER JOIN users ON candidate.userId= users.id', function(err, rows) {
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
            client.query('SELECT * FROM candidatebyelection INNER JOIN election ON election.id= candidatebyelection.electionId INNER JOIN candidate ON candidate.id= candidatebyelection.candidateId', function(err, rows) {
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
            client.query('SELECT * FROM votesbyelection INNER JOIN users ON users.id= votesbyelection.userId INNER JOIN election ON election.id= votesbyelection.electionId', function(err, rows) {
                if(err){
                    console.log('Query Error');
                }
                res.json(rows);
                client.release();
            });
    });     
});

app.post('/user', function (req, res) {
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
});

app.post('/election', function (req, res) {
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
});

app.post('/candidate', function (req, res) {
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
});

app.post('/candidatebyelection', function (req, res) {
    conn.getConnection(
        function (err, client) {
            var jsondata = req.body;
            var query='INSERT INTO candidatebyelection (candidateId, electionId, totalVotes) VALUES ("'+jsondata["candidateId"]+'","'+jsondata["electionId"]+'",'+jsondata["totalVotes"]+')';
            client.query(query, function(err, rows) {
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                res.json({success:true});
              
                client.release();
            });
        });   
});

app.post('/electiontypes', function (req, res) {
    conn.getConnection(
        function (err, client) {
            var jsondata = req.body;
            var query='INSERT INTO electiontypes (name) VALUES ("'+jsondata["name"] +'")';
            client.query(query, function(err, rows) {
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                res.json({success:true});
              
                client.release();
            });
        });   
});

app.post('/votesbyelection', function (req, res) {
    conn.getConnection(
        function (err, client) {
            var jsondata = req.body;
            var query='INSERT INTO votesbyelection (userId, electionId, isUsed, date) VALUES ('+jsondata["userId"] +','+jsondata["electionId"]+','+jsondata["isUsed"]+',"'+jsondata["date"] +'")';
            client.query(query, function(err, rows) {
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                res.json({success:true});
              
                client.release();
            });
        });   
});

app.post('/login', function (req, res) {
    var length=0;
    var user;
    conn.getConnection(
        function (err, client,length,user) {
    var jsondata = req.body;
    
    var query='SELECT * from users WHERE username = "'+jsondata.username+'" AND password = "'+jsondata.password+'"'
            client.query(query, function(err, rows) {
                // console.log(rows);
                if(err){
                    console.log('Query Error');
                    res.json({success:false});
                }
                user=rows[0];
                // res.json({success:true});
               length=rows.length;
            //    console.log(length);
               client.release();
            });
        });
        if (length===1){
            var token=generateToken(user);
            res.cookie('auth',token, { maxAge: 900000, httpOnly: true }); 
            res.json({success:true});
            // res.end(""); 
        }
        else{
            res.json({success:false});
        }
})

app.get('/logout', function (req, res) {
   clearCookie('auth');
})

  // Burası backendi ayaga kaldıran kısım
var port = 9001;
app.listen(port, function () {
  console.log('app listening on port: '+port)
})
