require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors =require('cors')

// Middleware to parse JSON data from incoming POST requests
app.use(cors())
app.use(bodyParser.json());

app.post('/parking', (req, res) => {
  console.log('POST request received.');
  
  // Log the received data from the ESP8266
  console.log('Data:', req.body);

  // Send a response to the ESP8266
  res.send('Data received successfully');
});
const port = process.env.PORT || 8001
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
