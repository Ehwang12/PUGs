
module.exports = function(app) {
  var db = require("../models");
  var connection = require("../config/config.json");
  var path = require('path');

    
  //this route will be for when they hit submit on the splash page and are then redirected to the home page
  app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname,"../public/user.html"))
  });
  
  //this  will be the splash page route
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"../public/landingPage.html"))
  });

  //this route will post new user information into the database
  app.post('/user/post', function(req, res){
    var newUser = req.body;
    connection.query('INSERT INTO ')
  });
};