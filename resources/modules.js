// Import the pool object to be able to do things with the postgress database
import { pool } from "../db/index.js";

// Helper function to get all modules
export async function getModules() {
  const query = "SELECT * FROM modules";
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error executing query", error.stack);
    throw error;
  }
}

// Helper function to create a new module
export async function createModule(module) {
  const { moduleName, description } = module;
  const query = `
    INSERT INTO modules (module_name, description)
    VALUES ($1, $2)
    RETURNING *;
  `;
  try {
    const result = pool.query(query, [moduleName, description]);
    return result;
  } catch (error) {
    console.error("Error executing query", error.stack);
    throw error;
  }
}
