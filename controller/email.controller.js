import { Resend } from 'resend';
import dotenv from "dotenv";
import asyncHandler from "../utils/asyncHandler.js";


dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = asyncHandler(async (req, res,next) => {
    const { name, email, phone, message } = req.body;
    

    await resend.emails.send({
        from: `${name} <onboarding@resend.dev>`,
        to: `{process.env.EMAIL_USER}`, // where you want to receive messages
        subject: `${name} -New Contact Message From Portfolio`,
        html: `
          <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    next();
});

