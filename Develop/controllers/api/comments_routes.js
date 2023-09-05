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

  // router.get('/:blog_id',  async (req, res) => {
  //   try {  

  //       const dbCommentlData = await Comment.findAll({
  //       where:{blog_id: req.session.blog_id},
  //       include: {model: User},
  //     });
  //     const commentData = dbCommentlData.map((comment_info) => comment_info.get({plain: true}));
  //     commentData.logged_in = req.session.logged_in
  //     commentData.user_id = req.session.user_id
  //     console.log("******** CommentData *******")
  //     console.log(commentData)
  
  //     if (!commentData) {
  //           return res.render('blogWiew', {BlogData: []});
  //       }
  
  //       console.log("**************************************")
  //       console.log("********* CommentData  ****************")
  //       console.log(commentData)


  //     res.render('blogWiew', {
  //       logged_in: req.session.logged_in,
  //       user_id: req.session.user_id,
  //       commentData : commentData,
  //     });
  // } catch (err) {
  //     res.status(500).json(err);
  // }
  // });

  module.exports = router;