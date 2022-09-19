import express from "express";

import { createTask } from "../controllers/task-controller";

const Router = express.Router;
const TaskRouter = Router();

TaskRouter.get("/dashboard/tasks");
TaskRouter.get("/dashboard/:taskId");
TaskRouter.post("/dashboard/tasks", createTask);
TaskRouter.patch("/dashboard/:taskId");
TaskRouter.delete("/dashboard/:taskId");
