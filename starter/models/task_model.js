import { mongoose } from "mongoose";

// This is the schema for the task model
const taskSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

export const task_model = mongoose.model('Task', taskSchema); 