import express from "express";
import { UsersRouter } from "./users";

export const configureRoutes = (router: express.Router) =>
  router
    .get("/", (req, res) => res.send(`<h1>BEWM</h1>`))
    .use("/users", UsersRouter(express.Router()))
  ;