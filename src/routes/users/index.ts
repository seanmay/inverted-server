import express from "express";
import {
  GetUserController,
  // GetMyselfController
} from "./get-user.factory";

export const UsersRouter = (router: express.Router) =>
  router
    // .post("/", CreateUser())
    // .get("/", FindUsers())
    // .get("/me", GetMyself())
    .get("/:id", GetUserController());
