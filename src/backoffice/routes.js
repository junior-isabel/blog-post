const routes = require('express').Router()

const IndexController = require('./controllers/IndexController')
const PostController = require('./controllers/PostController')
routes.get('/', IndexController.Index)
routes.post('/posts', PostController.Store)
module.exports = routes