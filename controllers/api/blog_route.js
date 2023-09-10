const router = require('express').Router();
const Blog = require('../../models/blogs');


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

  router.delete('/:id',  async (req, res) => {

    try {
      const blogData = await Blog.destroy({
        where: {
          id: parseInt(req.params.id),
        }
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }

      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 

  module.exports = router;