import mongoose from 'mongoose'
import Survey from '../models/surveyModel'

require('dotenv').config()

export const createSurvey = (req, res, next) => {
  const {tokens, createdBy} = req.body
  
  if (!tokens || !createdBy) {
      
    return res.status(409).json({
      message: 'missing details'
    })

    
  }
  
  const survey = new Survey({
    createdBy: req.body.createdBy,
    tokens: req.body.tokens,
    usedTokens: 0,
    completedSurveys: []
  })

  survey.save((err) => {
    console.log('Survey created')
    if (err) console.log(err);
    res.status(201).json({survey})
  })
  

    // TODO: creates a new entry to the surveys collection
    //surveyId, createdBy, tokens, usedTokens, completedSurveys needed for the shema

    /* TODO: 
    1- inserts the completed survey into the completedSurveys array
    2- updates the usedTokens field (+1)
    3- if usedTokens = tokens (all expected surveys were completed) fires the report creation 
  */
}

export const insertCompletedSurvey = (req, res, next) => {
  res.status(404)
  /* TODO: 
    1- inserts the completed survey into the completedSurveys array
    2- updates the usedTokens field (+1)
    3- if usedTokens = tokens (all expected surveys were completed) fires the report creation 
  */
}
