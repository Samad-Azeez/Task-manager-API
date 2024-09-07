import express from 'express';
import { tasks } from './routes/tasks.js';
import { connectDB } from './db/connect.js'; // connect to the database
import 'dotenv/config' // Load environment variables from a .env file into process.env

const app = express();
const port = 3000; // Port 3000 is the default port for Express.js

// middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks);

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

start();