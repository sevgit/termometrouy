import mongoose from 'mongoose'

// Schema stuff

// Define schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, "Company name required"]
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
      type: String,
      required: true
    },
    company: {
      type: String,
      unique: true,
      required: [true, "Company name required"]
    },
    
  },
  {timestamps: true});

// Compile model from schema
export default mongoose.model('users', userSchema );