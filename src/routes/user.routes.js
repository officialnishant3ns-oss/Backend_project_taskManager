import { Router } from "express"
import {RegisterUser, LoginUser} from '../controllers/user.controller.js'

const router = Router()

// router.route("/register").post( RegisterUser)
router.post('/register',RegisterUser)
router.post('/login',LoginUser)


export default router
