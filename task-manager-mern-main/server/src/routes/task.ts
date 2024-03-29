import express from "express";
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/Task'

export const taskRouter = express.Router()

// GET: /api/tasks
taskRouter.get('/', getTasks);

// POST: /api/tasks
taskRouter.post('/', createTask);

//PUT /api/tasks/:taskId
taskRouter.put('/:taskId', updateTask);

//DELETE /api/tasks/:taskId
taskRouter.delete('/:taskId', deleteTask);

export default taskRouter;