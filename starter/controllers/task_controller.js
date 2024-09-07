import { task_model } from '../models/task_model.js'; // Import the task model from the models folder

export const getAllTasks = (req, res) => {
    res.send('Task list');
};

// Create a new task in the database
export const createTask = async (req, res) => {
    const tasks = await task_model.create(req.body);
    res.status(201).json({ tasks });
};

export const getTask = (req, res) => {
    res.send('Single Task details');
};

export const updateTask = (req, res) => {
    res.send('Task updated');
};

export const deleteTask = (req, res) => {
    res.send('Task deleted');
};