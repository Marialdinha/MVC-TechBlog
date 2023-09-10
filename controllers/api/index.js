const router = require('express').Router();
const userRoutes = require('./user_routes');
const BlogRoutes = require('./blog_route');
const CommentRoutes = require('./comments_routes');

router.use('/users', userRoutes);
router.use('/Blogs', BlogRoutes);
router.use('/Comment', CommentRoutes);

module.exports = router;
