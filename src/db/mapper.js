import { json } from "express";
import MyBatisMapper  from "mybatis-mapper";


MyBatisMapper.createMapper([
  "src/db/users/userMapper.xml",
  "src/db/main/mainMapper.xml",
]);

const format = { language: "sql", indent: " " };

export let query = (mapper, id, param) => {
  return MyBatisMapper.getStatement(mapper, id, param, format);
}