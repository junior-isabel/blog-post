const express = require('express')

const app =  express()
const routes = express.Router()
routes.get('/', (req, res) => {
  return res.status(200).json('api v1')
})
app.use(routes)
module.exports = app