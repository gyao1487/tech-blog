const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blog-routes')


router.use('/', homeRoutes);
//Routes for homepage, login, logout functions
//GET for all blogposts
//POST route for login
//POST route for logout

router.use(blogRoutes);
//GET route for individual blogpost by ID

router.use(dashboardRoutes);
//GET route for blogposts specific to the user/dashboard
//POST route for existing blogposts for that user

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;