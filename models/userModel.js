import mongoose from 'mongoose';

// Define schema
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Company name required'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: [true, 'Company name required'],
    },
  },
  { timestamps: true },
);

// Compile model from schema
export default mongoose.model('users', userSchema);
