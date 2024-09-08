import express from 'express';
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/task_controller.js';

export const tasks = express.Router();

// Define the route for getting all tasks and creating a new task
tasks.route('/')
    .get(getAllTasks)    // Route for fetching all tasks
    .post(createTask);    // Route for creating a new task

// Define the route for getting, updating, and deleting a specific task by its ID
tasks.route('/:id')
    .get(getTask)         // Route for fetching a specific task by its ID
    .patch(updateTask)    // Route for updating a task by its ID
    .delete(deleteTask);  // Route for deleting a task by its ID
