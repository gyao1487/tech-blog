const router = require("express").Router();
const { Blogpost, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

//GET post ONLY belonging to the logged-in User
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dashboardData = await Blogpost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User, attributes: ["name"] }],
    });
    // res.status(200).json(dashboardData);
    const blogposts = dashboardData.map((posts) => posts.get({ plain: true }));
    res.render("dashboard", {
      blogposts,
      loggedIn: req.session.logged_in,
      jsFile: "createEvent.js", //need to change this to create blogpost
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST new blogpost (must be logged in)
router.post("/dashboard", async (req, res) => {
  try {
    const { title, content } = req.body;
    const user_id = req.session.user_id;

    const newBlogpost = await Blogpost.create({
      title,
      content,
      user_id,
    });
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    res.status(500).render('error', { message: 'An error occurred' });
  };
});

// //PUT (edit) existing blogpost (must be logged in)
// router.put ("/dashboard", async (req, res) => {
//   try{
//     const {title, content} = req.body;
//     const user_id = req.session.user_id;


//     res.send

    

//   }
// })


module.exports = router;
