const express = require('express')
const path = require('path')
const app = express()

const routes = require('./routes')

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views') )
app.use('/public', express.static(path.resolve(__dirname, 'assets')))

app.use(routes)
module.exports = app

