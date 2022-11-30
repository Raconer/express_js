import express from "express";
import { get } from "../../db/users/index";

let router = express.Router();

/* GET users listing. */
router.get("", (req, res, next) => {
  get()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
