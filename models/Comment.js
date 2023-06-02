const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
      body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "post",
          key: "id"
        }
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comment;
