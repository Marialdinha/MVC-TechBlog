const router = require('express').Router();
const Comment = require('../../models/comments');
const User = require('../../models/users');

// /api/comments  end point

// router.get('/',  async (req, res) => {
//   try {
//    // find all blogs by user
//   const dbBloglData = await Blog.findAll({
//     where:{user_id: req.session.user_id},
//   });
//   const BlogData = dbBloglData.map((blog_info) => blog_info.get({plain: true}));

//   if (!BlogData) {
//     return res.render('blogWiew', {BlogData: []});
//   }

//   res.render('blogWiew', {
//       logged_in: req.session.logged_in,
//       BlogData : BlogData,
//     });
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

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