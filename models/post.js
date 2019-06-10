module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING
  });

  var pickUpGame = sequelize.define("pickUpGame", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    address: DataTypes.STRING,
    StartTime: DataTypes.TIME,
    city: DataTypes.STRING
  });

  User.belongsTo(pickUpGame);
  pickUpGame.hasMany(User);

  return User, pickUpGame;
};

