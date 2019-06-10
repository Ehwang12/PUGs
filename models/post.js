module.exports = function(sequelize, DataTypes) {
  var db = sequelize.define("pug_db", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return db;
};
