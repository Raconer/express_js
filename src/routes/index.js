import express from "express";
import main from "./controller/main";
import api from "./api/api";

let router = express.Router();

/* Controller */
router.use("/", main);
router.use("/api", api);

export default router;
