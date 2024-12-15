import Task from "../models/task.model.js";

export async function getTasks(req, res) {
    const tasks = await Task.find({
        user:req.user.id
    }).populate('user')
    res.json(tasks);
};

export async function createTasks(req, res) {
    const {title, description, date} = req.body;
    console.log(req.user)
    const newTask = Task({
        title, description, date, user:req.user.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export async function getTask(req, res) {
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if(!task) return res.status(404).json({message:'Elemento no encontrado'})
        res.json(task)
    } catch (error) {
        return res.status(404).json({message:"Tarea no encontrada"})
    }
};

export async function deleteTasks(req, res) {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message:'Elemento no encontrado'})
    return res.sendStatus(204);
};

export async function updateTasks(req, res) {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    if(!task) return res.status(404).json({message:'Elemento no encontrado'})
    res.json(task)
};