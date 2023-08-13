const router = require('express').Router();
const path = require('path');

// The `/api/pages` endpoint

console.log(router);

router.get("/", (req, res) => {
  res.render("users");
});

module.exports = router;