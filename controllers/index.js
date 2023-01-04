const router = require("express").Router();

const dashRoutes = require("./dash-routes");
const apiRoutes = require('./api/')

router.use("/", dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;


// still need to create the api routes here later when I create them.