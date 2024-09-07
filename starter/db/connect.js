import { mongoose } from "mongoose";

const connectionString = 'mongodb+srv://Azeez-Samad:%23Samad2004.com@task-manager-api.9mn3l.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=Task-Manager-API'

export const connectDB = ()=>{
    return mongoose.connect(connectionString)
};