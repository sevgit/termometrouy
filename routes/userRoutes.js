import express from 'express'
import {createUser, retrieveUser, logUserIn} from '../controllers/userController'

const router = express.Router()

router.post('/signup', createUser)

router.post('/login', logUserIn)

/* router.get('/:id', (req, res) => {
}) */

export default router