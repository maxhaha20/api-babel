import express from 'express'
import otpModule from '../models/otp.models'

const router = express.Router()

router.get('/register_by_email', otpModule.getFunction)
router.get('/confirm_otp_code', otpModule.getData)
router.get('/setting_password', otpModule.getFunctionPantip)

export default router 