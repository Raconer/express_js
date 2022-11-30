import { cloneDeep } from "lodash";

let res = {
  code: null,
  message: null,
};

export let resJson = (status) => {
  let json = cloneDeep(res);
  console.log(json);
  json.code = status.code;
  json.message = status.message;
  console.log(json);

  return json;
};
