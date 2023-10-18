
const { Model } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
      id: {
        type: INT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: STRING,
        allowNull: false
      },
      content: {
        type: TEXT,
        allowNull: false
      },
      user_id: {
        type: INT,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  
  module.exports = Post;