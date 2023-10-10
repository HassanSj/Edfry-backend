import express, { Express, Request, Response } from "express";
import UserController from "../Controllers/UserController";

const userRoutes: Express = express();
userRoutes.post("/signup", UserController.addUser);
// userRoutes.post("/verify",UserController.verifyOTP)
// userRoutes.post("/login",UserController.loginUser);
// userRoutes.get("/get", UserController.getRecord);
// userRoutes.get('/:id?', UserController.getRecordbyID)

export default userRoutes;
