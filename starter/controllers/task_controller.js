export const getAllTasks = (req, res) => {
    res.send('Task list');
};

export const createTask = (req, res) => {
    const newTask = req.body.task;
    res.send(`You successfully created a new ${newTask} task`);
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