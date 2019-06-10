var db = require("../models");
<<<<<<< HEAD
var connection = require('../config')
module.exports = function(app) {
  
=======
var connection = require("../config/config.json");
var path = require('path');

module.exports = function(app) {
    
>>>>>>> 19176aaaf33faccc751d4bbf6f236b568493093a
  //this route will be for when they hit submit on the splash page and are then redirected to the home page
  app.get('/home', function(res, req){
    res.sendFile(path.join(__dirname,'../public/index.html'))
  });
  
  //this  will be the splash page route
  app.get('/', function(res, req){
    res.sendFile(path.join(__dirname,""))
  });

  //this route will post new user information into the database
  app.post('/user/post', function(req, res){
    var newUser = req.body;
<<<<<<< HEAD
    connection.query('INSERT INTO ') 
  });

  app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "public\landingPage.html"))
  });

  //this will post info about the newevent onto the DOM
  app.post("/newevent", function(res,req) {
    res.sendFile(path.join(__dirname, ""))
  })
  };
=======
    connection.query('INSERT INTO ')
  });

};
>>>>>>> 19176aaaf33faccc751d4bbf6f236b568493093a
