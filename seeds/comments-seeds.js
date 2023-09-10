const { Comment } = require('../models');

const CommentData = [
  {
    comment_contents: "Comment 1",
    user_id: 1,
    blog_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(CommentData);


module.exports = seedComment;
