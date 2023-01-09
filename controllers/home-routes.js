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

//GET ONE Blogpost
router.get("/blogposts/:id", async (req, res) => {
    try {
      const dbBlogpostData = await Blogpost.findByPk(req.params.id,{
        include: [
          {
            model: User,
            attributes: ["name"],
          },
          {model: Comment,
        }
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
module.exports = router;
