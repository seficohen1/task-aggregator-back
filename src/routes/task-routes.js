import express from "express";
// import { createTask } from "../controllers/task-controller";
import {taskController} from '../controllers/task-controller.js'
import { paginateResults } from "../middleware/pagination.js";
import { sendResponse } from "../middleware/response.js";

const Router = express.Router;

const TaskRouter = Router();

TaskRouter.get("/dashboard/tasks", taskController.getAllTasks, paginateResults, sendResponse);
TaskRouter.get("/dashboard/tasks/:taskId", taskController.getTask);
TaskRouter.post("/dashboard/tasks", taskController.createTask);
TaskRouter.patch("/dashboard/tasks/:taskId", taskController.updateTask);
TaskRouter.delete("/dashboard/tasks/:taskId", taskController.deleteTask);

export default TaskRouter;
