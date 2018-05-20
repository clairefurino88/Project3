const db = require("../models");
const passport = require("../passport/passport.js");
const router = require("express").Router();

//---------------------------------------------//
//------------- API Routes (/api) -------------//
//---------------------------------------------//

// Retrieve All Posts
router.get("/posts/all", function (req, res) {
  db.Post.findAll({
    include: [db.User],
    order: [['updatedAt', 'DESC']]
  })
    .then(function (data) {
      res.json(data);
    });
});

// Retrieve All Posts for Selected Category
router.get("/posts/category", function (req, res) {
  db.Post.findAll({
    include: [db.User],
    where: { category: req.query.category },
    order: [['updatedAt', 'DESC']]
  })
    .then(function (data) {
      res.json(data);
    });
});

// Create New Post
router.post("/posts/new", function (req, res) {
  db.Post.create({
    body: req.body.body,
    category: req.body.category,
    UserId: req.user.id
  })
    .then(function (results) {
      res.end();
    });
});

// Retrieve All Posts for Logged On User
router.get("/posts/user", function (req, res) {
  db.User.findOne({
    include: [{ model: db.Post, order: [['updatedAt', 'DESC']] }],
    where: { id: req.user.id }
  })
    .then(function (data) {
      res.json(data);
      return;
    });
});

module.exports = router;