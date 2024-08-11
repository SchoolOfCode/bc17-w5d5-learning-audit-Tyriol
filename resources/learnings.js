// Import the pool object to be able to do things with the postgress database
import { pool } from "../db/index.js";

// Helper function to get all learnings
export async function getLearnings() {
  const query = "SELECT * FROM learnings";
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (e) {
    console.error("Error executing query", {
      message: error.message,
      stack: error.stack,
      query,
    });
    throw error;
  }
}

// Helper function to post a new learning
export async function create(data) {}
