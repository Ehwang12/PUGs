var db = require("../models");

module.exports = function(app) {
  var connection = require('../config')

<<<<<<< HEAD
  // Create a new example
  app.post("/api/newevent", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  //app.delete("/api/examples/:id", function(req, res) {
   // db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
     // res.json(dbExample);
    //});
  //});
=======
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
>>>>>>> 59438ae74596eecdc8e610279f971d0a8fa9091e
};
