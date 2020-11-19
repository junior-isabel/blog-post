
const Sequelize = require('sequelize')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const sequelize = new Sequelize('blog', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
})
const post = Post(sequelize)
const comment = Comment(sequelize)
sequelize.sync()

  
  module.exports =  {
    Sequelize,
    sequelize
  }
