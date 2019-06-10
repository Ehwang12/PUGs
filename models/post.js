module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var user = sequelize.define("pug_db", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
=======
  var user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING
>>>>>>> 8f8ad84a77c8e91d28e1bc0c7cf62429d6bf2e4e
  });

  var pickUpGame = sequelize.define("pickUpGame", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    address: DataTypes.STRING,
    StartTime: DataTypes.TIME,
    city: DataTypes.STRING
<<<<<<< HEAD
  })
=======
  });

  user.belongsTo(pickUpGame);
  pickUpGame.hasMany(user);

>>>>>>> 8f8ad84a77c8e91d28e1bc0c7cf62429d6bf2e4e
  return user, pickUpGame;
};

