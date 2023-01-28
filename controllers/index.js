const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blog-routes');
const userRoutes = require ('./user-routes')


router.use('/', homeRoutes);
//Routes for homepage, login, logout functions
//GET for all blogposts
//GET for login page
//GET for signup page

router.use(userRoutes);
//POST create new user
//POST route for login
//POST route for logout


router.use(blogRoutes);
//GET route for individual blogpost by ID

router.use(dashboardRoutes);
//GET route for blogposts specific to the user/dashboard
//POST route for creating new blogposts for that user

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;