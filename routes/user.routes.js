const {Router} = require('express');
const { sendOtp, verifyOtp } = require('../controller/user.controller');
const router = Router();

router.post("/sendOtp", sendOtp);

router.post("/otpVarify", verifyOtp);

module.exports={router}