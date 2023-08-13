const router = require('express').Router();
const pageRoutes = require('./pages_route');
const userRoutes = require('./user_routes');

router.use('/pages', pageRoutes);
router.use('/users', userRoutes);

module.exports = router;
