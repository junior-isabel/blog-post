
const routes = require('express').Router()
const IndexController = require('./controllers/indexController')
routes.get('/', IndexController.Index)
routes.get('/:id', IndexController.Show)
module.exports = routes