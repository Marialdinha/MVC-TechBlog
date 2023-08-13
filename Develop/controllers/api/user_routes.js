const router = require('express').Router();
const { TravelInfo, User } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
    try{
      // find all travel info
      const userInfo = await User.findAll();
      const user = userInfo.get({ plain: true });
      res.render("users", user);
    }catch(err) {
      // Handle errors
      res.status(500).json(err);
    }
})

module.exports = router;