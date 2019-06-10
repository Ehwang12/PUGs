
module.exports = function(app) {
<<<<<<< HEAD
  
  var db = require("../models");
  var connection = require("../config/config.json");
  var path = require('path');
  //this route will be for when they hit submit on the splash page and are then redirected to the home page
  app.get('/home', function(res, req){
    res.sendFile(__dirname,"../public/user.html")
  });
  
  //this  will be the splash page route
  app.get('/', function(res, req){
    res.sendFile(path.join(__dirname,"landingPage"))
=======
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
>>>>>>> 4cdd2c6f315560a2f8868572d92779ef4c00327d
  });

  //this route will post new user information into the database
  app.post('/user/post', function(req, res){
    var newUser = req.body;
    connection.query('INSERT INTO ')
  });
<<<<<<< HEAD

  app.post("/newevent", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/user.html"))
  })
};
=======
};
>>>>>>> 4cdd2c6f315560a2f8868572d92779ef4c00327d
