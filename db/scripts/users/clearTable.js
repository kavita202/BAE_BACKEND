import query from "../../connection.js";

const sqlString = `TRUNCATE TABLE users;`;

async function clearUsersTable() {
  const res = await query(sqlString);
  console.log("Users table cleared:", res);
}

clearUsersTable();
