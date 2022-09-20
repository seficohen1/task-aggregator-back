import express from "express";
// import { createTask } from "../controllers/task-controller";
import {taskController} from '../controllers/task-controller.js'

const Router = express.Router;

const TaskRouter = Router();

TaskRouter.get("/dashboard/tasks", getAllTasks);
TaskRouter.get("/dashboard/tasks/:taskId", getTask);
TaskRouter.post("/dashboard/tasks", createTask);
TaskRouter.patch("/dashboard/tasks/:taskId", updateTask);
TaskRouter.delete("/dashboard/tasks/:taskId", deleteTask);

export default TaskRouter;
