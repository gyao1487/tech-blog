const router = require("express").Router();
const { Blogpost, Comment, User } = require("../models");

//GET ONE Blogpost (with comments ONLY when logged in)
router.get("/blogpost/:id", async (req, res) => {
    try {
      const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
          attributes: ['id','title','content','created_at'],
          include:[ {
              model: User,
              attributes:['name']
          }, {model: Comment}]
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
      // res.status(200).json(dbBlogpostData)
      res.render("blogpost", {
        blogpost,
        loggedIn:req.session.logged_in,
        //add js file for form submit
      });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//POST route for posting comment 
router.post('/blogpost/:id', //withAuth,  
async (req, res) => {
  try {
    const {text, post_id} = req.body
    const commenter_id = req.session.user_id
    const created_at = new Date().toLocaleString('en-GB')
    const newComment = await Comment.create({
      text,
      post_id,
      commenter_id,
      created_at,
    })
    // res.status(200).json(newComment)
    res.redirect("back")
  } catch (err) {
    console.log(err);
      res.status(500).json(err);
  }
} ) 


  module.exports = router;