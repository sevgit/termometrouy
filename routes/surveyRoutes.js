import express from 'express';
import auth from '../middleware/auth';
import { createSurvey, fetchSurvey } from '../controllers/surveyController';
import { startFreeSurvey } from '../controllers/mailController';

const router = express.Router();

router.post('/create', auth, createSurvey);

router.get('/:id', fetchSurvey);

router.post('/startFreeTrial', startFreeSurvey);


export default router;
