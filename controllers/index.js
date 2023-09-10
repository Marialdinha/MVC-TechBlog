const router = require('express').Router();
const htmlRoutes = require('./pages_route');
const apiRoutes = require('./api');


router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;