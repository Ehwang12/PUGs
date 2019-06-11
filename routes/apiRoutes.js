var db = require("../models");
var path = require('path');

module.exports = function(app) {
    
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
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser){
      res.json(dbUser);
      console.log('completed upload');
    });
  });

  //Will be the new event one
  app.post('/newevent', function(req, res){
    var newEvent = req.body;

    db.pickUpGame.create(req.body).then(function(dbFunEvent){
      res.json(dbFunEvent);
<<<<<<< HEAD
    })
  })

};
=======
    });
  });
};
>>>>>>> 469120addc153dbcbc10310704fbb05569ae14b7
