import express from "express";
import { signup_post, login_post } from "../controllers/auth-controller.js";

const Router = express.Router;

const AuthRouter = Router();

AuthRouter.post("/signup", signup_post); // create a new user in db
AuthRouter.post("/login", login_post); // authenticate current user
AuthRouter.get("/logout"); // log user out

export default AuthRouter;
