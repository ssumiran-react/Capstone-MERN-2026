import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dbConn from "./dbConnect/dbConn.js";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Allow Cross-Origin Resource Sharing web from frontend
app.use(cors());
//Incoming data formating to Json
app.use(express.json());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/project", projectRoutes);

//Server on PORT and DB connection
app.listen(PORT, () => {
    console.log('onPORT: ', PORT);
    dbConn();
})