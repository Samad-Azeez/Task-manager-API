import { task_model } from '../models/task_model.js'; // Import the task model from the models folder
import { asyncWrapper } from "../middleware/async.js";

// Get all tasks from the database
export const getAllTasks = asyncWrapper( async (req, res) => {
    const task = await task_model.find({});  // Get all tasks from the database using the task model 
    res.status(200).json({ task });  // Send the tasks in a JSON response
});

// Create a new task in the database
export const createTask = asyncWrapper( async (req, res) => {
    const task = await task_model.create(req.body);  // Create a new task using the task model
    res.status(201).json({ task });  // Send the newly created task in the response
});

// Get a task by its id from the database
export const getTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params; 
    const task = await task_model.findById(taskID);  // Find a task by its id using the task model
    
    if (!task) {
        // Check if the task is not found
        return res.status(404).json({ message: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });  // Send the task in the response
});

// Update a task by its id in the database
export const updateTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    // Find and update the task, return the updated task with { new: true, runValidators: true }
    const task = await task_model.findByIdAndUpdate(taskID, req.body, { new: true, runValidators: true });

    if (!task) {
        // If no task is found, send a 404 error
        return res.status(404).json({ message: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });  // Send the updated task as the response
});

// Delete a task by its id from the database
export const deleteTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;
    const task = await task_model.findByIdAndDelete(taskID);  // Find a task by its id and delete it using the task model
    
    if (!task) {
        // Check if the task is not found
        return res.status(404).json({ message: `No task with id: ${taskID}` });
    }

    res.status(200).json({ task });  // Send the deleted task in the response
});
