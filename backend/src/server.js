import { connectDB } from './config/db.js';
import noteRoutes from './routes/notesRoutes.js'; 
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;
connectDB();

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});