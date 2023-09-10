const { Blog } = require('../models');

const blogData = [
  {
    title: "Homework",
    content: "Homework is fun",
    user_id: 1,
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);


module.exports = seedBlog;
