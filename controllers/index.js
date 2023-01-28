const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blog-routes')


router.use('/', homeRoutes);
//Routes for homepage, login, logout functions

router.use(blogRoutes);
//Routes for getting blogposts by ID


router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;