
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
    connection.query('INSERT INTO user (name, email, city) values (?, ?, ?)', [newUser.name, newUser.email, newUser.city], function(err, data){
      if (err) return res.json(500, err);
      res.json(data);
    });
  });

  //Will be the new event one
  app.post('/newevent', function(req, res){
    var newEvent = req.body;
    connection.query('INSERT INTO pickUpGame (name, category, address, StartTime, city) values (?, ?, ?, ?,?)', [newEvent.name, newEvent.category,
    newEvent.address, newEvent.StartTime, newEvent.city], function(err, data){
      if (err) return res.json(500, err);
      res.json(data);
    })
  })

};
