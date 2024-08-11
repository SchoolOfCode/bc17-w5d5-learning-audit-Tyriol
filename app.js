// import packages
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

// import helper functions for modules
import { getModules, createModule } from "./resources/modules.js";

// create app
const app = express();

const PORT = process.env.PORT;

// middleware
app.use(morgan("dev")); // morgan processes requests in a
app.use(helmet());
app.use(cors()); // cors allows for cross origin
app.use(express.json());

// basic routes

// Modules route handlers
// get all modules
app.get("/api/modules/", async (req, res) => {
  try {
    const modules = await getModules();
    res.status(200).json({
      status: "success",
      payload: modules,
    });
  } catch (e) {
    res.status(500).json({
      status: "failure",
      payload: e,
    });
  }
});

// create a new module
app.post("/api/modules/", async (req, res) => {
  const data = req.body;
  try {
    const newModule = await createModule(data);
    res.status(201).json({
      status: "success",
      payload: newModule,
    });
  } catch (e) {
    res.status(500).json({
      status: "failure",
      payload: e.message,
    });
  }
});

// update a module
app.post("/api/modules/", async (req, res) => {});

// delete a module
app.post("/api/modules/", async (req, res) => {});

// Learnings route handlers
// get all learnings
app.get("/api/learnings/", async (req, res) => {
  const modules = await getModules();
  res.status(200).json({ status: "success", payload: modules });
});

// create a new learning
app.post("/api/modules/", async (req, res) => {});

// update a learning
app.post("/api/modules/", async (req, res) => {});

// delete a learning
app.post("/api/modules/", async (req, res) => {});

// Open up the port
app.listen(PORT, () => {
  console.log(`We are live on port ${PORT}`);
});
