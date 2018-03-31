import mongoose from 'mongoose'

// Define schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    surveyId: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true
    },
    tokens: {
      type: Number,
      required: true
    },
    usedTokens: {
      type: Number,
      required: true,
    },
    completedSurveys: {
      type: [Schema.Types.Mixed],
      required: true,
    },
    
  },
  {timestamps: true});

// Compile model from schema
export default mongoose.model('surveys', surveySchema );