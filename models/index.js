// import models
const User = require('./users');
const Blog = require('./blogs');
const Comment = require('./comments');

// Blog belongsTo Users
Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

// Users have many Blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Comments belongsTo Blogs
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

// Blog have many Comments
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

// Comments belongsTo Users
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Users have many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Blog,
  Comment,
};
