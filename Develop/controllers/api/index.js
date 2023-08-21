const router = require('express').Router();
const userRoutes = require('./user_routes');
const BlogRoutes = require('./blog_route');

router.use('/users', userRoutes);
router.use('/Blogs', BlogRoutes);

module.exports = router;
