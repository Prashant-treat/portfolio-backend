import nodemailer from "nodemailer";
import dotenv from "dotenv";
import asyncHandler from "../utils/asyncHandler.js";


dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
    },
});

export const sendEmail = asyncHandler(async (req, res,next) => {
    const { name, email, phone, message } = req.body;

    await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // where you want to receive messages
        subject: `${name} - New Contact Message`,
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
