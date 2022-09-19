import Router from "express";
import * as UserController from '../controllers/user-controller'
const UserRouter = Router();

UserRouter.get("/dashboard/users", UserController.getUsers);
UserRouter.get("/dashboard/users/:userId", UserController.getUser);
UserRouter.post("/dashboard/users", UserController.createUser);
UserRouter.patch("/dashboard/:userId", UserController.updateUser);
UserRouter.delete("/dashboard/:userId", UserController.deleteUser);



export { UserRouter };