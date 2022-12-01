import { totalCnt, detail, list } from "../db/main/index.js";

export let get = async (id) => { 
     let param = {
          id : id
     }

     return await detail(param);
}

export let getList = async (paging) => {
     
     let total = await totalCnt(paging.toJson());
     paging.total = total;
     paging.setPageInfo();
     
     let dataList = await list(paging.toJson());

     return dataList;
}