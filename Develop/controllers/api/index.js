const router = require('express').Router();
const pageRoutes = require('./pages_route');

router.use('/pages', pageRoutes);

module.exports = router;
