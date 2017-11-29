const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Route to get all burgers in DB
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let db = {
      burgers: data
    };
    console.log(db);
    res.render("index", db);
  });
});

//Route to add new burger
router.post("/", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/");
  });
});

//Route to devour burger
router.put("/:id", function(req, res) {
  burger.updateOne(req.params.id,function() {
      res.redirect("/");
    }
  );
});

module.exports = router;