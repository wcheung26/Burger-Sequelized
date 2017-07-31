var db = require('../models');

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(data) {
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
    db.burgers.update({
      devoured: 1
    }, {
      where: {
        id: condition
      }
    }).then(function() {
      res.redirect("/");
    });
  });
};
