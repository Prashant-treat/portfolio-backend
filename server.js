import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes  from "./routes/contact.route.js";
import { errorHandler } from "./middleware/errorHandler.js";



dotenv.config();
const app = express();


// Middleware
app.use(
    cors({
        origin: [process.env.CLIENT_URL],
        credentials: true,
    }),
); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use("/api", contactRoutes);


// error middleware LAST
app.use(errorHandler);



// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
