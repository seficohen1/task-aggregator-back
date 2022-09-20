import express from "express";
import {UserController} from '../controllers/user-controller.js'
const Router = express.Router;
const UserRouter = Router();



UserRouter.get("/dashboard/users", UserController.getAllUsers);
UserRouter.get("/dashboard/users/:userId", UserController.getUser);
UserRouter.post("/dashboard/users", UserController.createUser);
UserRouter.patch("/dashboard/users/:userId", UserController.updateUser);
UserRouter.delete("/dashboard/users/:userId", UserController.deleteUser);



export default UserRouter;