import mongoose from 'mongoose'
import User from '../models/userModel'

require('dotenv').config()

export const removeModel = (modelName) => {
    const model = mongoose.model(modelName)
    return new Promise((resolve, reject) => {
      if (!model) {
        return resolve()
      }
      model.remove((err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

export const dropDb = () => {
    return mongoose.connect(process.env.DATABASE)
        .then(() => Promise.all(mongoose.modelNames().map(removeModel)))
        
  }
