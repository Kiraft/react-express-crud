import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

import { getTasks, getTask, createTasks, updateTasks, deleteTasks } from "../controllers/task.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTasksSchema } from "../schemas/task.schema.js";

createTasksSchema

const router = Router();

//router.get("/tasks", authRequired,(req, res) => res.send("tasks"));
router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post('/tasks', authRequired,validateSchema(createTasksSchema), createTasks);
router.delete('/tasks/:id', authRequired,deleteTasks);
router.put('/tasks/:id', authRequired, updateTasks);

export default router