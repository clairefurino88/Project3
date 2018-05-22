const db = require("../models");
const passport = require("../passport/passport.js");
const router = require("express").Router();

//---------------------------------------------//
//------------- API Routes (/api) -------------//
//---------------------------------------------//

// Retrieve All Posts
router.get("/posts/all", (req, res) => {
  db.Post.findAll({
    include: [db.User],
    order: [['updatedAt', 'DESC']]
  })
    .then((data) => {
      res.json(data);
    });
});

// Retrieve All Posts for Selected Category
router.get("/posts/category/:category", (req, res) => {
  console.log("api/posts/category > req.params: ", req.params);
  
  db.Post.findAll({
    include: [db.User],
    where: { category: req.params.category },
    order: [['updatedAt', 'DESC']]
  })
    .then((data) => {
      res.json(data);
    });
});

// Delete Post
router.delete("/posts/delete", (req, res) => {
  db.Post.destroy(
    { where: { id: req.body.id } }
  )
    .then((result) => {
      if (result.changedRows === 0) return res.status(404).end();
      res.status(200).end();
    });
});

// Create New Post
router.post("/posts/new", (req, res) => {
  console.log("/api/posts/new > req.body: ", req.body);
  console.log("/api/posts/new > 'req.user: ", req.user);
  db.Post.create({
    body: req.body.body,
    category: req.body.category,
    UserId: req.user.id
  })
    .then((results) => {
      res.end();
    });
});

// Retrieve All Posts for Logged On User
router.get("/posts/user", (req, res) => {
  db.User.findOne({
    include: [{ model: db.Post, order: [['updatedAt', 'DESC']] }],
    where: { id: req.user.id }
  })
    .then((data) => {
      res.json(data);
      return;
    });
});

module.exports = router;