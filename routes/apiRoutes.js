var db = require("../models");
var connection = require('../config')
module.exports = function(app) {
  
  //this route will be for when they hit submit on the splash page and are then redirected to the home page
  app.get('/home', function(res, req){
    res.sendFile(path.join(__dirname,''))
  });
  
  //this route will post new user information into the database
  app.post('/user/post', function(req, res){
    var newUser = req.body;
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
