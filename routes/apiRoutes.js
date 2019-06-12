var db = require("../models");
var path = require('path');
var nodemailer = require('nodemailer');
module.exports = function(app) {
    
  //this route will be for when they hit submit on the splash page and are then redirected to the home page
  app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname,"../public/user.html"))
  })
  
  //this  will be the splash page route
  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"../public/landingPage.html"))
  });

  //this route will post new user information into the database
  app.post('/user/post', function(req, res){
    let newUserDrilled = [];
    Reflect.ownKeys(req.body).forEach(key => {
      console.log(key + ':' + req.body[key]);
      newUserDrilled.push(req.body[key]);
    });
    let newUserObject = {name: newUserDrilled[1], email: newUserDrilled[2], city: newUserDrilled[3]};
    db.User.create(newUserObject)
    .then(function(result){
      res.json(result);  
      console.log('completed upload');
    })
  });

  //Will be the new event one
  app.post('/newevent', function(req, res){
    // var newEvent = req.body;
    let newEventDrilled = [];
    Reflect.ownKeys(req.body).forEach(key => {
      console.log(key + ':' + req.body[key]);
      newEventDrilled.push(req.body[key]);
    });
    console.log(newEventDrilled);
    let newEventObject = {name: newEventDrilled[1], city:  newEventDrilled[2], StartTime: newEventDrilled[3], description: newEventDrilled[4]};
    db.pickUpGame.create(newEventObject).then(function(dbFunEvent){
      console.log('Event Created');
      res.json(dbFunEvent);
    });
  });

  app.get('/findall', function(req, res){
    db.pickUpGame.findAll({
      order: [
        ['id', 'DESC']
      ]
    }).then(function(result){
      res.json(result);
      })
  })

const sendmail = require('sendmail')();
 
sendmail({
    from: 'sabrinaanhthong@gmail.com',
    to: 'sabrinaanhthong@gmail.com ',
    subject: 'Joined Event',
    html: 'You are now added to the event! ',
  }, function(err, reply) {
    //console.log(err && err.stack);
    console.dir(reply);
});
 }


