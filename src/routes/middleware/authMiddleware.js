import { HTTP_STATUS } from "../../model/common/code";
import { resJson } from "../../model/api/common/response/defRes";
import { verify } from "../../utils/jwt";

export let auth = (req, res, next) => {
  let bearer = req.headers.authorization;
  if (!bearer) {
    return res.json(resJson(HTTP_STATUS.UNAUTHORIZED));
  } else {
    const token = bearer.split("Bearer ")[1];
    const result = verify(token);
    if (result.ok) {
      next();
    } else {
      return res.json(resJson(HTTP_STATUS.UNAUTHORIZED));
    }
  }
};
