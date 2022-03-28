import query from "../db/connection.js";

export async function getAllUsers() {
  const result = query(`SELECT * FROM users;`);
  return result.rows;
}

export async function addUser(longitude, latitude) {
  const result = query(
    `INSERT INTO users (longitude, latitude) VALUES ($1, $2);`,
    [longitude, latitude]
  );
  return result.rows;
}
