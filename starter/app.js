import express from 'express';
import { tasks } from './routes/tasks.js';
import { connectDB } from './db/connect.js'; // Connect to the database
import 'dotenv/config'; // Load environment variables from a .env file into process.env
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js"; // Import the error handler middleware

const app = express();
const port = 3000; // Port 3000 is the default port for Express.js

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static('./public')); // Serve static files from the public directory

// Routes
app.use('/api/v1/tasks', tasks); // Use tasks routes under the /api/v1/tasks endpoint

// Handles routes that don't exist
app.use(notFound); // Use notFound middleware for handling 404 errors

// Error handling middleware
app.use(errorHandlerMiddleware);

// Start the application by connecting to the database and listening on the specified port
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI); // Connect to MongoDB using the MONGO_URI environment variable
        console.log('Database connected successfully ...'); // Log successful connection
        
        app.listen(port, () => { // Start the server
            console.log(`Server is running on port ${port} ...`); // Log server start
        });
    } catch (error) {
        console.error(error); // Log any connection errors
    }
};

start(); // Invoke the start function to run the application