module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("pug_db", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  var pickUpGame = sequelize.define("pickUpGame", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    address: DataTypes.STRING,
    StartTime: DataTypes.TIME,
    city: DataTypes.STRING
  })
  return user, pickUpGame;
};

