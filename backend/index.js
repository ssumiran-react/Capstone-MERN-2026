import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

//Allow Cross-Origin Resource Sharing web from frontend
app.use(cors());
//Incoming data formating to Json
app.use(express.json());

//Server on PORT
app.listen(PORT, () => {
    console.log('onPORT: ', PORT);
    
})