module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
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

  user.belongsTo(pickUpGame);
  pickUpGame.hasMany(user);

  return user, pickUpGame;
};

