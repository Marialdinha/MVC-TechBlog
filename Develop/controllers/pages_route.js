const router = require('express').Router();
const withAuth = require('../utils/auth');
const Blog = require('../models/blogs');
const User = require('../models/users');

// The `/` endpoint

router.get('/',  async (req, res) => {
  try {
    const dbBloglData = await Blog.findAll({
      include: {model: User}
    });
    const BlogData = dbBloglData.map((blog_info) => blog_info.get({plain: true}));
    BlogData.logged_in = req.session.logged_in
    console.log(BlogData)

    if (!BlogData) {
          return res.render('blogWiew', {BlogData: []});
      }

    res.render('blogWiew', {
      logged_in: req.session.logged_in,
      BlogData : BlogData,
    });
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/comment', withAuth, async (req, res) => {
  try {
      res.render('comment', {
        logged_in: req.session.logged_in,
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