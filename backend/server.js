const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
let mongodb_url = 'mongodb://host.docker.internal:27017/yolomy';
let dbName = 'yolomy';

// define a url to connect to the database
const MONGODB_URI = 'mongodb://mongo-service:27017/mongoose.connection';
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
})

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())

// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(5000, '0.0.0.0', () => {
  console.log("Server is running on port 5000")
})
// /backend/server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS to allow the frontend to connect
app.use(cors());

// Set up PostgreSQL client
const pool = new Pool({
  user: 'postgres', // Change if needed
  host: 'localhost',
  database: 'mydb',
  password: 'password', // Change if needed
  port: 5432,
});

// Route to fetch data from PostgreSQL
app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM messages LIMIT 1');
    res.json({ message: result.rows[0]?.message || 'Hello from Backend!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query failed' });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});