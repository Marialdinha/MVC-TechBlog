const router = require('express').Router();
const path = require('path');

// The `/api/pages` endpoint

console.log(router);

router.get("/", (req, res) => {
  res.render("main");
});

module.exports = router;