const express = require('express')
const path = require('path')
const routes = require('./routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(routes)

module.exports = app