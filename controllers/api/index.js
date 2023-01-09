const router = require('express').Router();

const blogpostRoutes = require('./blogpost-routes');

router.use('/blogposts', blogpostRoutes);
module.exports = router;