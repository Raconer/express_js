import express from "express";
import main from "./controller/main";
import api from "./api/api";
import { auth } from "./middleware/authMiddleware";

let router = express.Router();

// Middle Ware
// router.all(["/api*"], auth);

/* Controller */
router.use("", main);
router.use("/api", api);

export default router;
