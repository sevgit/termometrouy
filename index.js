import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import auth from './middleware/auth'

require('dotenv').config()
const app = express();

import {createUser, retrieveUser, logUserIn} from './controllers/userController'


// Middleware land
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Connection
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));





// Routing
app.post('/signup', createUser)
app.post('/login', logUserIn)
app.get('/:id', (req, res) => {

})

app.post('/auth', auth, (req, res) => {
  res.json(req.body)
})

app.post('/fetchUser', retrieveUser)










app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

