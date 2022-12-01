import connect from "../index";
import { query } from "../mapper";
 
const mapper = "MainMapper";

export let totalCnt = async (param) => {
  const sql = query(mapper, "totalCnt", param);
  return await connect(sql)
    .then((data) => {
      return data[0].cnt;
    })
    .catch((err) => {
      console.log(`err :" ${err}`)
      return 0;
    })
}

export let detail = async (param) => { 
  const sql = query(mapper, "get", param);
  
  return await connect(sql)
      .then((data) => {
        return data[0];
      })
      .catch((err) => {
        console.log(`err :" ${err}`)
        return 0;
      })
}

export let list = async (param) => {
  const sql = query(mapper, "getList", param);
  return await connect(sql)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(`err :" ${err}`)
      return 0;
    })
};
