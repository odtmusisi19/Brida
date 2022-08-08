import express from 'express';
import db from './config/Database.js';
import router from './routes/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import Users from './models/UserModel.js';
// import Products from './models/Product.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('Database Connected...');
  //   await Users.sync();
  //   await Products.sync();
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen('5000', () => console.log('server berjalan di Port 5000'));
