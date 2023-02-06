const router = require("express").Router();

const dashRoutes = require("./dash-routes.js");
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use("/dashboard", dashRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;


// still need to create the api routes here later when I create them.