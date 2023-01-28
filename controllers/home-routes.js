const router = require("express").Router();
const { Blogpost, Comment, User } = require("../models");

// GET all blogposts
router.get("/", async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogposts = dbBlogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render("homepage", {
      blogposts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET route for rendering login page
router.get("/login", (req, res) => {
  res.render("login");
});

//GET route for rendering sign up page
router.get("/signup", (req, res) => {
  res.render("signup", {jsFile: "signup.js"});
});


module.exports = router;
