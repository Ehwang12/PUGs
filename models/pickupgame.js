module.exports = function(sequelize, DataTypes) {
    var pickUpGame = sequelize.define("pickUpGame", {
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      address: DataTypes.STRING,
      StartTime: DataTypes.TIME,
      city: DataTypes.INTEGER
    });
  
pickUpGame.associate = function(models) {
    pickUpGame.hasMany(models.User, {

    })
}  
    return pickUpGame;
  };
  