import express from 'express'
import auth from '../middleware/auth'
import { createSurvey } from '../controllers/surveyController'

const router = express.Router()

router.post('/create', auth, createSurvey)


export default router