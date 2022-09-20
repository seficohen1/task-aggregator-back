import express from "express";
// import { createTask } from "../controllers/task-controller";
import authToken from "../middleware/auth.js";
import {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
} from "../controllers/task-controller.js";

const Router = express.Router;

const TaskRouter = Router();

TaskRouter.get("/dashboard/tasks", getAllTasks);
TaskRouter.get("/dashboard/tasks/:taskId", getTask);
TaskRouter.post("/dashboard/tasks", authToken, createTask);
TaskRouter.patch("/dashboard/tasks/:taskId", authToken, updateTask);
TaskRouter.delete("/dashboard/tasks/:taskId", authToken, deleteTask);

export default TaskRouter;
