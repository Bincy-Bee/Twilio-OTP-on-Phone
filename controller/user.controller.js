require('dotenv').config();
const twilio = require('twilio');
const { user } = require('../model/user.model');

const accountSid = process.env.mYaccountSid;
const authToken = process.env.mYauthToken;
const client = twilio(accountSid, authToken);

const generateOTP = ()=> {
    return Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
}

// Store OTPs for verification (in-memory storage)
const otps = new Map();


const sendOtp = async (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber)
    const otp = generateOTP();
    console.log(otp)
    otps.set(phoneNumber, otp); // Store OTP for verification

    try {
        await client.messages.create({
            body: `Your OTP for verification is: ${otp}`,
            from: '+919978847878',
            to: phoneNumber
        });
        res.status(200).send('OTP sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send OTP');
    }
}

const verifyOtp = (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const userEnteredOTP = req.body.otp;

    const storedOTP = otps.get(phoneNumber);

    if (userEnteredOTP && storedOTP && userEnteredOTP === storedOTP) {
        res.status(200).send('OTP verified successfully');
    } else {
        res.status(400).send('Invalid OTP');
    }
}

module.exports = { sendOtp, verifyOtp }