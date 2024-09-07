import { mongoose } from "mongoose";

// This is the schema for the task model
const taskSchema = new mongoose.Schema({
    // Define the properties of the task model
    name: {
        type: String,
        required: [true, 'A task must have a name'],
        trim: true,
        maxlength: [30, 'A task name must have less or equal then 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export const task_model = mongoose.model('Task', taskSchema); 