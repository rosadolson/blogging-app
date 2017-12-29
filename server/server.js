const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const postRoutes = require('./routes/Posts')
const commentRoutes = require('./routes/Comments')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/BLOGGING_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.use('/', postRoutes)
app.use('/', commentRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port} 🔥`))

module.exports = server
