import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import { config } from 'dotenv';
import Verification from '../models/Verification';
const otpGenerator = require('otp-generator')

config();
const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

interface SendOtpRequest {
  phoneNumber: string;
}

interface VerifyOtpRequest {
  phoneNumber: string;
  otp: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  payload?: any;
}

export default {
addForm: async (req: Request, res: Response) => {
    const customMessage = 'Your custom message here {{CODE}}';
// const sendOtp = async (req: Request<{}, {}, SendOtpRequest>, res: Response<ApiResponse>) => {
  const { id , email , contact , name } : any = req.body;

  try {
    const otp = Math.floor(1000 + Math.random() * 9000);
      // const otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });
    const verificationRepository = getRepository(User);
    const verification = new User();
    verification.name = name;
    verification.contact = contact;
    verification.email = email; 
    verification.otp = otp
    await verificationRepository.save(verification);
    const result = await client.verify
    .services(TWILIO_SERVICE_SID)
    .verifications.create({
      to: `+${contact}`,
      channel: 'sms',
    });
    res.status(200).send({
      success: true,
      message: 'OTP sent successfully',
      payload: result,
    });
  } catch (err  :any) {
    res.status(500).send({
      success: false,
      message: `Error in sending otp: ${err.message}`,
    });
  }
},
verifyOTP : async (req: Request, res: Response) => {
  try {
    const userRepository = getRepository(User);
    const { contact, otp } : any= req.body;

    // Check if the OTP is valid
    const user = await userRepository.findOne({
      where: {
        contact: req.body.contact, // Assuming 'contact' is the phone number
        otp: req.body.otp,
      },
    });
    if (!user) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
    // You can perform additional logic here, e.g., mark the OTP as used
    // user.otp = null; // Example: Mark the OTP as used

    // Save the updated user entity
    // await userRepository.save(user);

    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},
loginUser : async (req: Request, res: Response) => {
  const { email, name } = req.body;

  try {
    // Check if the user exists in the database
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { email, name } });

    if (user) {
      // User found, return a success response
      res.status(200).json({ message: 'Login successful' });
    } else {
      // User not found, return an error response
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
}


    // verifyOtp: async  (req: Request<{}, {}, VerifyOtpRequest>, res: Response<ApiResponse>) => {
    //     const { phoneNumber, otp } = req.body;
      
    //     try {
    //       const result = await client.verify
    //         .services(TWILIO_SERVICE_SID)
    //         .verificationChecks.create({
    //           to: `+${phoneNumber}`,
    //           code: otp,
    //         });
      
    //       // Update the verification status in your database (TypeORM)
    //       const verificationRepository = getRepository(User);
    //       const verification = await verificationRepository.findOne({ phoneNumber });
    //       if (verification) {
    //         verification.status = result.status; // Assuming you have a 'status' field in your Verification entity
    //         await verificationRepository.save(verification);
    //       }
      
    //       res.status(200).send({
    //         success: true,
    //         message: 'OTP verified successfully',
    //         payload: result,
    //       });
    //     } catch (err) {
    //       res.status(500).send({
    //         success: false,
    //         message: `Error in verifying otp: ${err.message}`,
    //       });
    //     }
    //   };

   