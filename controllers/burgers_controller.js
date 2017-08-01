var db = require('../models');

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.burgers.findAll({
      order: [
        ["burger_name", "ASC"]
      ],
      include: [db.Customers]
    }).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log("hbs", hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
    db.burgers.create({burger_name: req.body.name}).then(function() {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    var condition = req.params.id;
    var customer = req.body.customer;
    console.log("customer:", customer);
    db.Customers.create({customer_name: customer}).then(function(result) {
      console.log("result:", result);
      db.burgers.update({
        devoured: 1,
        CustomerId: result.dataValues.id
      }, {
        where: {
          id: condition
        }
      }).then(function() {
        res.redirect("/");
      });
    })
  });
};
