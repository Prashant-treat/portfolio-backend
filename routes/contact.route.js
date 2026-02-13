import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import {
    createContact,
    getAllContacts,
} from "../controller/contact.controller.js";
import { sendEmail } from "../controller/email.controller.js";

const router = Router();

// GET all contacts
router.get("/all-contact", getAllContacts);

// POST contact form
router.post("/contact", sendEmail, createContact);

// router.route("/contact")
//   .get(asyncHandler(getAllContacts))    // GET /contact
//   .post(asyncHandler(createContact));   // POST /contact

export default router;
