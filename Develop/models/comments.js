const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
    {
      comment_contents: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len:[1],
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: 'id',
        }
      },
      blog_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "blogs",
          key: 'id',
        }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments',
    }
  );
  
  module.exports = Comments;