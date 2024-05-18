import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup'
})
const port = 8088;
app.listen(port, ()=>{
 console.log(`Listening on http://localhost:${port}`);
})