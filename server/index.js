import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import config from './config/index'
const app = express();

import {createUser, retrieveUser} from './controllers/userController'


// Middleware land
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Connection
mongoose.connect(config.db)
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));





// Routing
app.get('/create', createUser, (req, res) => {
 
  
  res.send("401")
})
app.get('/api/createClient', (req, res) => {
  
  
  const user = new userModel({name: req.query.name, company: req.query.company})
  user.save((err) => {
    console.log(`user saved: \n Name: ${req.query.name} \n Company: ${req.query.company}`)
    if (err) console.log(err);
  })

  
  res.json({"name": req.query.name, "company": req.query.company })
})











app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
})

