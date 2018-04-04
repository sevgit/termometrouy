import express from 'express';
import auth from '../middleware/auth';
import { createSurvey, fetchSurvey } from '../controllers/surveyController';

const router = express.Router();

router.post('/create', auth, createSurvey);
router.get('/:id', fetchSurvey);

export default router;
