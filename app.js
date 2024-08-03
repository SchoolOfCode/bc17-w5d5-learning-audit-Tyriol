// import packages
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet"

// create app
const app = express();

const PORT = process.env.PORT;

// middleware
app.use(morgan("dev")); // morgan processes requests in a 
app.use(helmet());
app.use(cors()); // cors allows for cross origin
app.use(express.json())

// basic routes

// get all of a specific resource
app.get("/api/modules/", async (req, res) => {

});

// create a new resource

app.post("/api/modules/", async (req, res) => {

});

app.listen(PORT, () => {
    console.log(`We are live on port ${PORT}`);
});