// Import the pool object to be able to do things with the postgress database
import { pool } from "../db/index.js";

// Helper function to get all learnings
export async function getModules() {
    const query = "SELECT * FROM learnings";
    const result = await pool.query(query);
    return result.rows;
}