const express = require('express')
const http = require('http')

const apiV1 = require('./api/app')
const frontoffice = require('./frontoffice/app')
const backoffice = require('./backoffice/app')
const db = require('./database/index')

const app = express()
const server = http.createServer(app)

app.use((req, res, next) => {
  req.models = db.sequelize.models
  next()
})

app.use(express.urlencoded({extended: true}))
app.use(frontoffice)
app.use('/backoffice', backoffice)
app.use('/api/v1', apiV1)


server.listen(3000, err => {
  console.log(err)
})