import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, longitude FLOAT, latitude FLOAT);`;

async function createUsersTable() {
  const res = await query(sqlString);
  console.log("Users table created:", res);
}

createUsersTable();
