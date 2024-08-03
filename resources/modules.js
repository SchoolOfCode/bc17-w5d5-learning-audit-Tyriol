// Import the pool object to be able to do things with the postgress database
import { pool } from "../db/index.js";

// Helper function to get all modules
export async function getModules() {
    const query = "SELECT * FROM modules";
    const result = await pool.query(query);
    return result.rows;
}