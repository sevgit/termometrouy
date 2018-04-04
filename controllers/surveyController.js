import Survey from '../models/surveyModel';

require('dotenv').config();

export const createSurvey = (req, res, next) => {
  const { tokens, createdBy, surveyName } = req.body;

  if (!tokens || !createdBy || !surveyName) {
    return res.status(409).json({
      message: 'missing details',
    });
  }

  const survey = new Survey({
    surveyName,
    createdBy,
    tokens,
    usedTokens: 0,
    completedSurveys: [],
  });

  survey.save((err) => {
    console.log('Survey created');
    if (err) console.log(err);
    res.status(201).json({ survey });
  });
};

export const fetchSurvey = (req, res, next) => {
  Survey.findOne({ surveyName: req.params.id })
    .exec()
    .then((survey) => {
      if (survey) {
        return res.status(200).json({ survey });
      }
      res.status(404).json({ message: 'survey not found' });
    });
};

export const insertCompletedSurvey = (req, res, next) => {
  res.status(404);
  /* TODO:
    1- inserts the completed survey into the completedSurveys array
    2- updates the usedTokens field (+1)
    3- if usedTokens = tokens (all expected surveys were completed) fires the report creation
  */
};
