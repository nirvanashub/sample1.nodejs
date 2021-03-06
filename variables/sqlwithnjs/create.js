const sql = require('mssql')
const sqlConfig = {
  user: 'root',
  password: 'root',
  database: 'employee',
  server: 'SHUBHAM',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const connectFun = async () => {
 try {
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query(`create table shubham(id int, name varchar(20), city varchar(30))`)
  console.dir(result)
 } catch (err) {
  // ... error checks
  console.log(err);
 }
}
