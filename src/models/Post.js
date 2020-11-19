const {Sequelize, Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {

  class Post extends Model {}
  
  
  Post.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'posts',
    modelName: 'Post',
    sequelize,
    freezeTableName: true
  })

  return Post
}
