const router = require('express').Router();

// routes
    // const apiRoutes = require('./api');
    // const homeRoutes = require('./home-routes.js');

// connect routes to router
    // router.use('/api', apiRoutes);
    // router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

// export router
module.exports = router;