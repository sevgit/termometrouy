import mongoose from 'mongoose'

// Schema stuff

// Define schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: [true, "Company name required"]
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