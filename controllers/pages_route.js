const router = require('express').Router();
const sequelize = require("sequelize");
const withAuth = require('../utils/auth');
const Blog = require('../models/blogs');
const User = require('../models/users');
const Comments = require('../models/comments');

// The `/` endpoint

let blogList = 0;


router.get('/',  async (req, res) => {
  blogList = 1;

  try {
      let dbBloglData;
      
      if (req.session.logged_in){
          dbBloglData = await Blog.findAll({
          where:{user_id:{ [sequelize.Op.not]: req.session.user_id}},
          include : {all:true, nested:true},
          });
      }else {
          dbBloglData = await Blog.findAll({
            include : {all:true, nested:true},
          });
      }
    
    const BlogData = dbBloglData.map((blog_info) => blog_info.get({plain: true}));
    BlogData.logged_in = req.session.logged_in
    BlogData.user_id = req.session.user_id

    if (!BlogData) {
          return res.render('blogWiew', {BlogData: []});
      }
    res.render('blogWiew', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      blogList: blogList,
      BlogData : BlogData,
    });
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/userBlogs',  async (req, res) => {
  blogList = 0;

  try {
    
    const dbBloglData = await Blog.findAll({
    where:{user_id: req.session.user_id},
    include : {all:true, nested:true},
    });
  
    const BlogData = dbBloglData.map((blog_info) => blog_info.get({plain: true}));
    BlogData.logged_in = req.session.logged_in
    BlogData.user_id = req.session.user_id

    if (!BlogData) {
          return res.render('blogWiew', {BlogData: []});
      }

    res.render('blogWiew', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      blogList: blogList,
      BlogData : BlogData,
    });
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/comment/:blogID', withAuth, async (req, res) => {
  try {
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