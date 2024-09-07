import express from 'express';
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/task_controller.js';

export const tasks = express.Router();

// Define the route for the task list
tasks.route('/')
.get(getAllTasks)
.post(createTask);

tasks.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask); 