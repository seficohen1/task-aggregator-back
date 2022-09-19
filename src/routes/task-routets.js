import express from "express";
// import { createTask } from "../controllers/task-controller";
import {taskController} from '../controllers/task-controller.js'
console.log(taskController)

const Router = express.Router;

const TaskRouter = Router();

TaskRouter.get("/dashboard/tasks");
TaskRouter.get("/dashboard/:taskId");
TaskRouter.post("/dashboard/tasks", taskController.createTask);
TaskRouter.patch("/dashboard/:taskId");
TaskRouter.delete("/dashboard/:taskId");


export default TaskRouter;