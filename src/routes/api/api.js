import express from "express";
import { HTTP_STATUS } from "../../model/common/code";
import { defRes } from "../../model/api/common/response/defRes";
import { getList } from "../../service/mainService";

let router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  let param = req.query;
  let test = getList(param);
  return res.json(defRes(HTTP_STATUS.OK));
});

export default router;
