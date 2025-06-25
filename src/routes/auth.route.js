import express from 'express'
// import {register,login, getMe} from '../controllers/auth.controller.js'
import * as authController from '../controllers/auth.controller.js'
import { registerSchema, validate } from '../validations/validator.js'
const authRoute = express.Router()

authRoute.post('/login', authController.login)
authRoute.post('/register', validate(registerSchema) , authController.registerYup)
authRoute.get('/me',authController.getMe)


export default authRoute