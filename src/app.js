import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "./env/index";
import { HTTP_STATUS } from "./model/common/code";

import router from "./routes/index.js";

const __dirname = path.resolve();

let app = express();
// Global
app.set("HTTP_STATUS", HTTP_STATUS);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", router);

export default app;
