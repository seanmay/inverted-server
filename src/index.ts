require("module-alias/register");

import express from "express";
import { createServer } from "http";

import { configureRoutes } from "./routes";

const app = express();
app.use("/api/v1", configureRoutes(express.Router()));

createServer(app).listen(8080, "localhost", () => console.log("BEWM!"));
