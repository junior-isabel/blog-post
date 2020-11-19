
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

  return sequelize.define('Comment', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'posts',
        key: 'id'
      }
    }
  }, {
    tableName: 'comments',
    modelName: 'Comment',
    freezeTableName: true
  })
}