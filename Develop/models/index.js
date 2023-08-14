// import models
const Users = require('./users');
const Blog = require('./blogs');
const Comment = require('./comments');

// Blog belongsTo Users
Blog.belongsTo(Users, {
  foreignKey: 'user_id',
});

// Users have many Blogs
Users.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Users,
  Blog,
  Comment,
};
