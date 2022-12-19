const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/layouts/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
