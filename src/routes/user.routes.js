import { Router } from "express"
import {RegisterUser} from '../controllers/user.controller.js'

const router = Router()

// router.post('/register',register)
router.route("/register").post( register)


export default router
