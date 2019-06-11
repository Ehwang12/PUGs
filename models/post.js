module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING
  });


User.associate = function(models) {
  User.belongsTo(pickUpGame);
}
  

  return User;
};



