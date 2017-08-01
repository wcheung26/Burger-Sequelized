module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    timestamps: false
  });

  burger.associate = function(models) {
    burger.belongsTo(models.Customers, {
      foreignKey: {
        allowNull: true,
        defaultValue: null
      }
    });
  };
  return burger;
};
