const router = require('express').Router();
const withAuth = require('../utils/auth');
const Blog = require('../models/blogs');
const User = require('../models/users');
const Comments = require('../models/comments');

// The `/` endpoint

router.get('/',  async (req, res) => {


  try {
      let dbBloglData;

      if (req.session.logged_in){
          dbBloglData = await Blog.findAll({
          where:{user_id: req.session.user_id},
          include: [{model: User}, {model: Comments}]
          });
      }else {
          dbBloglData = await Blog.findAll({
          include: [{model: User}, {model: Comments}]
          });
      }
  
    const BlogData = dbBloglData.map((blog_info) => blog_info.get({plain: true}));
    BlogData.logged_in = req.session.logged_in
    BlogData.user_id = req.session.user_id
    console.log("******** BlogData *******")
    console.log(BlogData)

    if (!BlogData) {
          return res.render('blogWiew', {BlogData: []});
      }

    res.render('blogWiew', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      BlogData : BlogData,
    });
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/comment/:blogID', withAuth, async (req, res) => {
  try {
    console.log("******** comment *******")
    console.log(req.params.blogID)
      res.render('comment', {
        logged_in: req.session.logged_in,
        blog_id:req.params.blogID,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/blogEnter', withAuth, async (req, res) => {
  try {
      res.render('blogEnter', {
        logged_in: req.session.logged_in,
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
      res.render('login');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
      res.render('signup');
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/logout', async (req, res) => {
  try {
      res.render('logout');
  } catch (err) {
      res.status(500).json(err);
  }
});




module.exports = router;