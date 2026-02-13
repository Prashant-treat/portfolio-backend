import db from "../db/db.js";
import asyncHandler from "../utils/asyncHandler.js";

// GET all contacts
export const getAllContacts = asyncHandler(async (req, res) => {
  const query = db.prepare(
    `SELECT * FROM contacts ORDER BY createdAt DESC`
  );

  const rows = query.all();

  res.status(200).json({
    success: true,
    data: rows,
  });
});


// POST new contact
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    const error = new Error("Name, email, and message are required");
    error.statusCode = 400;
    throw error;   // 🔥 Let asyncHandler handle it
  }

  const query = db.prepare(
    `INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)`
  );

  const info = query.run(
    name,
    email,
    phone || null,
    message
  );

  res.status(201).json({
    success: true,
    message: "Contact saved successfully",
    id: info.lastInsertRowid,
  });
});
