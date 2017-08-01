module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });

  burger.associate = function(models) {
    burger.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return burger;
};
