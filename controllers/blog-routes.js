const router = require("express").Router();
const { Blogpost, Comment, User } = require("../models");
//GET ONE Blogpost (with comments)
router.get("/blogpost/:id", async (req, res) => {
    try {
      const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
          attributes: ['id','title','content','created_at'],
          include: {
              model: User,
              attributes:['name']
          }
   
      });
      const dbCommentData = await Comment.findAll({
          where: {
              post_id: req.params.id
          },
          attributes:['id', 'text','created_at'],
          include: {
              model:User,
              attributes:['id','name']
          }
      })
  
      const blogpost = await dbBlogpostData.get({ plain: true })
      const comments = await dbCommentData.map(comment => comment.get({plain:true}))
      blogpost.comments = comments
      console.log(blogpost.comments.user)
      res.render("blogpost", {
        blogpost,
      //   logged_in:req.session.logged_in
      });
  
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;