
import connect from "../index";
import { query } from "../mapper";
 
const mapper = "UsersMapper";

// export let getTotalCnt = (param) => {
//  let sql = query(mapper, "totalCnt", param);
//  connect(sql)
//    .then((data) => {
//      return data;
//    })
//    .catch((err) => {
//      return err;
//    });
// }

// export let getList = (param) => {
//   return new Promise((resolve, reject) => {
//     let totalCnt = 100;   
//   });
// };


// let query = MybatisMapper.getStatement(mapper, "totalCnt", param, format);
//     connect(query)
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject(err);
//       });