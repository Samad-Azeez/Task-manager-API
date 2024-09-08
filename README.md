# Task Management API

This is a Task Management API built using Node.js, Express, and MongoDB. It allows users to perform CRUD operations on tasks, including creating, reading, updating, and deleting tasks.

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a task by ID
- Update a task by ID
- Delete a task by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv for environment variable management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB Atlas account or local MongoDB instance
- Basic knowledge of JavaScript and RESTful API concepts

### Installation

#### Clone the repository:
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api

### Install dependencies:

#### npm install:
Create a .env file in the root directory and add your MongoDB connection URI:

MONGO_URI=your_mongodb_connection_string

### Running the Application

To start the application, run the following command:

npm start

The API will be available at http://localhost:3000/api/v1/tasks.

### API Endpoints

Method	Endpoint	Description
GET	/api/v1/tasks	Retrieve all tasks
POST	/api/v1/tasks	Create a new task
GET	/api/v1/tasks/
Retrieve a task by ID
PATCH	/api/v1/tasks/
Update a task by ID
DELETE	/api/v1/tasks/
Delete a task by ID

### Error Handling
The API includes error handling for non-existent routes and database connection errors.

### Instructions:
- Replace `your-username` with your actual GitHub username in the clone URL.
- Make sure to update any sections according to your specific project details or requirements.
