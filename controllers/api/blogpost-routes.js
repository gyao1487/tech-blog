const router = require("express").Router();
const { Blogpost, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const blogpostData = await Blogpost.findAll()
      //   include: [{ model: User }],
    ;
    res.status(200).json(blogpostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;