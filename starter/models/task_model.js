import { mongoose } from "mongoose";

// This is the schema for the task model
const taskSchema = new mongoose.Schema({
    // Define the properties of the task model
    name: {
        type: String,
        required: [true, 'A task must have a name'],
        trim: true,
        maxlength: [30, 'A task name must have less or equal to 30 characters'], // Updated character limit
    },
    completed: {
        type: Boolean,
        default: false, // Default value is false, indicating the task is not completed
    },    
}, {
    // Define the schema options
    // Automatically manage createdAt and updatedAt fields
    timestamps: true,
});

// Export the task model based on the defined schema
export const task_model = mongoose.model('Task', taskSchema);
