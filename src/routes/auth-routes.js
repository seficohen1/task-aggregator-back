import express from "express";
import { signup, login } from "../controllers/auth-controller.js";

const Router = express.Router;

const AuthRouter = Router();

AuthRouter.post("/signup", signup); // create a new user in db
AuthRouter.post("/login", login); // authenticate current user
AuthRouter.get("/logout"); // log user out

export default AuthRouter;
