const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./controllers/sendMail.js'); 
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle sending mail
app.post('/sendMail', sendMail);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
