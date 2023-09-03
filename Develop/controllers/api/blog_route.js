const router = require('express').Router();
const Blog = require('../../models/blogs');
// const User = require('../../models/users');

// /api/Blogs  end point

router.get('/',  async (req, res) => {
  try {
   // find all blogs by user
  const dbBloglData = await Blog.findAll({
    where:{user_id: req.session.user_id},
  });
  const BlogData = dbBloglData.map((blog_info) => blog_info.get({plain: true}));

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

router.post('/', async (req, res) => {
  try { 
      let blogdata = {...req.body,"user_id":req.session.user_id}
      const blogData = await Blog.create(blogdata);

    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(blogData)
  } catch (err) {
    res.status(500).json(err);
  }
  });

 

  module.exports = router;