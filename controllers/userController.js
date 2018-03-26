import mongoose from 'mongoose'
import User from '../resources/users/schema'

export const createUser = (req, res, next) => {
    const name = req.query.name
    const company = req.query.company

    const user = new User({name: name, company: company})
  user.save((err) => {
    console.log(`user saved: \n Name: ${req.query.name} \n Company: ${req.query.company}`)
    if (err) console.log(err);
  })
    
    next()
}

export const retrieveUser = (req, res) => {
 User.findOne({name: req.body.name}, function(err, user) { 
  if (err) console.log(err);
  if (!user) {
    res.send("User not found")
  } else {
    res.json(user) 
  }
  });
}