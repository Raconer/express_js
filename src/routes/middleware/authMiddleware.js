import { HTTP_STATUS } from "../../model/common/code";
import { resJson } from "../../model/common/defRes";

export let auth = (req, res, next) => {
  let isAuth = false;

  if (isAuth) {
    next();
  } else {
    return res.json(resJson(HTTP_STATUS.BAD_REQUEST));
  }
};
