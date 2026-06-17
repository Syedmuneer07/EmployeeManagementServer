import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import { connect } from './db.js';
import router from './view/routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://syedmuneer07.github.io" }));
app.use(router);

const PORT = process.env.PORT || 5000;



app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connect();
});