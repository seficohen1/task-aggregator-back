import express from "express";

const Router = express.Router;
const UserRouter = Router();

UserRouter.get("/dashboard/users");
UserRouter.get("/dashboard/:userId");
UserRouter.post("/dashboard/users");
UserRouter.patch("/dashboard/:userId");
UserRouter.delete("/dashboard/:userId");
