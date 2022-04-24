const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const db = require('./db');
//const port = 5001;
let port = process.env.PORT || 8230;
const mongoUrl = "mongodb+srv://eman:QT8LoVUWDt0uSVFu@cluster0.bvz0d.mongodb.net/login?retryWrites=true&w=majority";

const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

// app.listen(port,() => {
//     console.log(`Running on port ${port}`)
// })

app.listen(port, (res, err) => {
    if(err) console.log("Failed to start", err)
    console.log('Running on port ',port)
})