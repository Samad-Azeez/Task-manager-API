import { task_model } from '../models/task_model.js'; // Import the task model from the models folder

// Get all tasks from the database
export const getAllTasks = async (req, res) => {
    try {
        const task = await task_model.find({}) // Get all tasks from the database using the task model
        
        res.status(200).json({ task }); // Send the task list in the response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send an error message in the response if an error occurs
    }
};

// Create a new task in the database
export const createTask = async (req, res) => {
    try {
        const task = await task_model.create(req.body); // Create a new task using the task model
        
        res.status(201).json({ task }); // Send the newly created task in the response 
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send an error message in the response if an error occurs
    }
};

// Get a task by its id from the database
export const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params; 
        const task = await task_model.findById(taskID); // Find a task by its id using the task model
        
        if (!task) { 
            // Check if the task is not found
            return res.status(404).json({ message: `No task with id : ${taskID}` });
        }

        res.status(200).json({ task }); // Send the task in the response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send an error message in the response if an error occurs
    }
};

// Update a task by its id in the database
export const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        // Find and update the task, return the updated task with the option { new: true }
        const task = await task_model.findByIdAndUpdate(taskID, req.body, { new: true, runValidators: true });

        if (!task) {
            // If no task is found, send a 404 error
            return res.status(404).json({ message: `No task with id: ${taskID}` });
        }

        // Send the updated task as the response
        res.status(200).json({ task });
    } catch (error) {
        // Send error message if an exception occurs
        res.status(500).json({ error: error.message });
    }
};

// Delete a task by its id from the database
export const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;

        const task = await task_model.findByIdAndDelete(taskID); // Find a task by its id and delete it using the task model
        
        if (!task) { 
            // Check if the task is not found
            return res.status(404).json({ message: `No task with id : ${req.params.id}` });
        }

        res.status(200).json({ task }); // Send the deleted task in the response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send an error message in the response if an error occurs
    }
};