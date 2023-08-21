const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        len:[1],
      }
    },
    content: {
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogs',
  }
);

module.exports = Blog;