import express from "express";
import { UserController } from "../controllers/user-controller.js";
import { paginateResults } from "../middleware/pagination.js";
import { sendResponse } from "../middleware/response.js";
const Router = express.Router;
const UserRouter = Router();

UserRouter.get(
  "/dashboard/users",
  UserController.getAllUsers,
  paginateResults,
  sendResponse,
);
UserRouter.get("/dashboard/users/:userId", UserController.getUser);
UserRouter.get("/dashboard/users/:firstName/:lastName", UserController.getUserByName);
UserRouter.post("/dashboard/users", UserController.createUser);   
UserRouter.patch("/dashboard/users/:userId", UserController.updateUser);
UserRouter.delete("/dashboard/users/:userId", UserController.deleteUser);

export default UserRouter;

