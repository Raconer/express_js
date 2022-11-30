import { createPool } from "mysql";

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_TABLE,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  timezone: 'Asia/Seoul'
});

let connect = (sql) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      conn.query(sql, (error, rows, fields) => {
        resolve(rows);
      });
      if (err) reject(err);
      pool.releaseConnection(conn);
    });
  })
}

export default connect;