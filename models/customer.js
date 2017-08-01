module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("Customers", {
    customer_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: [1]
    	}
    },
    eaten: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false,
    	defaultValue: 0
    }
  }, {
    timestamps: false
  });

  Customers.associate = function(models) {
  	Customers.hasMany(models.burgers, {
  		onDelete: 'CASCADE'
  	});
  };

  return Customers;
};
