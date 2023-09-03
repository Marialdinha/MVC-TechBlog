const router = require('express').Router();
const Comment = require('../../models/comments');
// const User = require('../../models/users');

// /api/comment  end point

router.post('/', async (req, res) => {
  try { 
      let commentdata = {...req.body,"user_id":req.session.user_id}
      const commentData = await Comment.create(commentdata);

    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(commentData)
  } catch (err) {
    res.status(500).json(err);
  }
  });


  module.exports = router;