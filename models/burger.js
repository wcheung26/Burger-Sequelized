module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  return burger;
};
