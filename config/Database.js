// import mysql from "mysql2/promise"
const mysql = require("mysql2/promise")


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'dbcoba', 
  });

  module.exports= {connection}