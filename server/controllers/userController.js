import mongoose from 'mongoose'
import userModel from '../resources/users/schema'

export const createUser = (req, res, next) => {
    const name = req.query.name
    const company = req.query.nameç

    const user = new userModel({name: name, company: company})
  user.save((err) => {
    console.log(`user saved: \n Name: ${req.query.name} \n Company: ${req.query.company}`)
    if (err) console.log(err);
  })
    
    next()
}

export const retrieveUser = () => {
    console.log("NOT YET IMPLEMENTED")
}