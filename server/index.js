import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import config from './config/index'
const app = express();



// Middleware land
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Connection
mongoose.connect(config.db)
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Schema stuff

// Define schema
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
      type: String,
      required: [true, "Company name required"]
    },
    company: {
      type: String,
      unique: true,
      required: [true, "Company name required"]
    }
});

// Compile model from schema
const clientModel = mongoose.model('clients', clientSchema );


// Routing
app.get('/api/createClient', (req, res) => {
  
  
  const client = new clientModel({name: req.query.name, company: req.query.company})
  client.save((err) => {
    console.log(`Client saved: \n Name: ${req.query.name} \n Company: ${req.query.company}`)
    if (err) return err;
  })

  
  res.json({"name": req.query.name, "company": req.query.company })
})











app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`)
})

