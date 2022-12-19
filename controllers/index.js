const router = require("express").Router();

const dashRoutes = require("./dash-routes");

router.use("/", dashRoutes);

module.exports = router;


// still need to create the api routes here later when I create them.