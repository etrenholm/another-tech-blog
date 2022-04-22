const router = require('express').Router();

// routes
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

// connect routes to router
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;