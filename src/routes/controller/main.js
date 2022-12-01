import express from "express";
import MainPaging from "../../model/main/main";
import { get, getList } from "../../service/mainService";

let router = express.Router();

// Read
router.get("/:id", async (req, res, next) => {
  
  let data = await get(req.params.id);

  res.render("index", { detail : data });
});

router.get("", async (req, res, next) => {
  let paging = new MainPaging();
  paging.setDefData(req.query);

  let data = await getList(paging);
  res.render("index", { list: data });
});

export default router;
