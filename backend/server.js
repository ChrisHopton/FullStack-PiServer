const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors());
const db = mysql.createConnection({
    host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


app.get("/",(req,res)=>{
    res.send("Hi");
    return res.json("Login Successful");
})

// Need to add encryption to username and password still. 
app.post('/login',(req,res) =>{
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    db.query(sql, [req.body.email,req.body.password],(err, data) => {
        if(err) return res.json("Error accessing DB");
        if(data.length > 0){
            return res.json("Login Successful");
        }
        else{
            return res.json("No Record");
        }
        
    })
})

app.listen(5000, () => {
    console.log("Listening...")
})